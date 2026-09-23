import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(repositoryRoot, "core/v1.0/hub-manifest.json");
const catalogPath = path.join(repositoryRoot, "product/v1.0/page-catalog.json");
const queryIndexPath = path.join(repositoryRoot, "specs/query-index.json");
const outputRoot = path.join(repositoryRoot, "product/v1.0/generated/batch-specs");
const draftsRoot = path.join(outputRoot, "drafts");

const args = process.argv.slice(2);
const write = args.includes("--write");
const includeExisting = args.includes("--include-existing");
const candidateIndex = args.indexOf("--candidate");
const requestedCandidate = candidateIndex >= 0 ? args[candidateIndex + 1] : "";

if (args.includes("--help")) {
  console.log(`用法：
  node scripts/generate-spec-batch.mjs
  node scripts/generate-spec-batch.mjs --write
  node scripts/generate-spec-batch.mjs --write --candidate <candidate-id>
  node scripts/generate-spec-batch.mjs --write --include-existing

預設只預覽尚未進入簡版查詢的候選，不會寫入檔案。
--write             產生草稿、截圖任務與 Review 清單。
--candidate         只處理指定候選。
--include-existing  連已經可查詢的功能也一併產生草稿；仍不覆蓋正式規格。`);
  process.exit(0);
}

const [manifest, catalog, queryIndex] = await Promise.all([
  readJson(manifestPath),
  readJson(catalogPath),
  readJson(queryIndexPath),
]);

const assets = Array.isArray(manifest.assets) ? manifest.assets : [];
const queryFeatures = Array.isArray(queryIndex.features) ? queryIndex.features : [];
const queryFeatureIds = new Set(queryFeatures.map((feature) => feature.id));
const queryScreens = queryFeatures.flatMap((feature) => feature.screens ?? []);
const catalogFlowIds = new Set((catalog.flows ?? []).map((flow) => flow.flowId));
const catalogPageCanonicalIds = new Set(
  (catalog.pages ?? []).flatMap((page) => page.relatedCanonicalIds ?? []),
);

const candidates = [
  ...discoverFlowCandidates(assets),
  ...discoverScreenCandidates(assets),
].sort((a, b) => a.candidateId.localeCompare(b.candidateId));

for (const candidate of candidates) {
  candidate.catalogued = candidate.type === "flow"
    ? catalogFlowIds.has(`${candidate.baseId}-flow`)
    : candidate.assets.some((asset) => catalogPageCanonicalIds.has(asset.canonicalId));
  candidate.queryable = queryFeatureIds.has(candidate.baseId) || queryFeatureIds.has(candidate.candidateId);
}

let selected = candidates.filter((candidate) => includeExisting || !candidate.queryable);
if (requestedCandidate) {
  selected = candidates.filter((candidate) => candidate.candidateId === requestedCandidate);
  if (selected.length === 0) {
    console.error(`找不到候選：${requestedCandidate}`);
    process.exit(1);
  }
}

const screenshotJobs = [];
const draftFiles = [];

for (const candidate of selected) {
  const jobs = await buildScreenshotJobs(candidate, queryScreens);
  screenshotJobs.push(...jobs);
  draftFiles.push({
    candidate,
    jobs,
    path: `product/v1.0/generated/batch-specs/drafts/${candidate.candidateId}.md`,
    content: renderDraft(candidate, jobs),
  });
}

const report = {
  schemaVersion: 1,
  source: "core/v1.0/hub-manifest.json",
  sourcePluginVersion: manifest.pluginVersion ?? null,
  sourceGeneratedAt: manifest.generatedAt ?? null,
  mode: write ? "write" : "preview",
  policy: {
    overwritesReviewedSpecs: false,
    writesFigma: false,
    autoApproves: false,
    note: "批次輸出只建立 AI 草稿、截圖任務與 Review 清單；正式 specs 與 query-index 仍需人工確認後才可更新。",
  },
  summary: {
    assetsScanned: assets.length,
    candidatesFound: candidates.length,
    alreadyQueryable: candidates.filter((candidate) => candidate.queryable).length,
    selectedCandidates: selected.length,
    selectedAssets: selected.reduce((count, candidate) => count + candidate.assets.length, 0),
    screenshotJobs: screenshotJobs.length,
    screenshotsAlreadyAvailable: screenshotJobs.filter((job) => job.status === "available").length,
    screenshotsPending: screenshotJobs.filter((job) => job.status === "pending").length,
  },
  candidates: selected.map((candidate) => ({
    candidateId: candidate.candidateId,
    baseId: candidate.baseId,
    type: candidate.type,
    title: candidate.title,
    module: candidate.module,
    assetCount: candidate.assets.length,
    catalogued: candidate.catalogued,
    queryable: candidate.queryable,
    draftPath: `product/v1.0/generated/batch-specs/drafts/${candidate.candidateId}.md`,
    screenshotJobIds: screenshotJobs
      .filter((job) => job.candidateId === candidate.candidateId)
      .map((job) => job.jobId),
  })),
};

if (write) {
  await mkdir(draftsRoot, { recursive: true });
  await Promise.all(draftFiles.map((draft) =>
    writeFile(path.join(repositoryRoot, draft.path), draft.content, "utf8")
  ));
  await Promise.all([
    writeFile(path.join(outputRoot, "manifest.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    writeFile(path.join(outputRoot, "screenshot-queue.json"), `${JSON.stringify({
      schemaVersion: 1,
      sourceGeneratedAt: manifest.generatedAt ?? null,
      jobs: screenshotJobs,
    }, null, 2)}\n`, "utf8"),
    writeFile(path.join(outputRoot, "README.md"), renderBatchReadme(report), "utf8"),
  ]);
}

console.log(renderConsoleSummary(report));

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function discoverFlowCandidates(allAssets) {
  const groups = new Map();
  const stepPattern = /^(.*?)-step-(\d+)(?:-(.+))?$/;

  for (const asset of allAssets) {
    const match = (asset.canonicalId ?? "").match(stepPattern);
    if (!match || asset.aiUsage === "forbidden") continue;
    const [, baseId, stepText, substate = ""] = match;
    const group = groups.get(baseId) ?? [];
    group.push({ ...asset, stepIndex: Number(stepText), substate });
    groups.set(baseId, group);
  }

  return [...groups.entries()]
    .filter(([, group]) => new Set(group.map((asset) => asset.stepIndex)).size >= 2)
    .map(([baseId, group]) => {
      const sorted = group.sort((a, b) =>
        a.stepIndex - b.stepIndex || a.canonicalId.localeCompare(b.canonicalId)
      );
      return {
        candidateId: `${baseId}-flow`,
        baseId,
        type: "flow",
        title: inferFlowTitle(sorted, baseId),
        module: unique(sorted.map((asset) => asset.moduleZh).filter(Boolean)).join("／") || "待確認",
        assets: sorted,
      };
    });
}

function discoverScreenCandidates(allAssets) {
  const groups = new Map();
  for (const asset of allAssets.filter((item) => item.kind === "screen" && item.aiUsage !== "forbidden")) {
    const familyId = asset.canonicalFamilyId || asset.canonicalId;
    const group = groups.get(familyId) ?? [];
    group.push(asset);
    groups.set(familyId, group);
  }

  return [...groups.entries()].map(([familyId, group]) => {
    const sorted = group.sort((a, b) =>
      viewportRank(a.viewport) - viewportRank(b.viewport) || a.canonicalId.localeCompare(b.canonicalId)
    );
    return {
      candidateId: familyId,
      baseId: familyId,
      type: "screen-family",
      title: inferScreenTitle(sorted, familyId),
      module: unique(sorted.map((asset) => asset.moduleZh).filter(Boolean)).join("／") || "待確認",
      assets: sorted,
    };
  });
}

async function buildScreenshotJobs(candidate, indexedScreens) {
  const jobs = [];
  for (const asset of candidate.assets) {
    const variants = asset.kind === "screen" ? [{}] : expandPreferredVariants(asset);
    for (const variantProperties of variants) {
      const suffix = candidate.type === "flow"
        ? flowImageSuffix(asset, variantProperties)
        : screenImageSuffix(asset);
      const outputPath = `specs/assets/${candidate.baseId}/${suffix}.png`;
      const existing = findIndexedScreenshot(asset, variantProperties, indexedScreens);
      const existingPath = existing?.imagePath ?? outputPath;
      const exists = await fileExists(path.join(repositoryRoot, existingPath));
      jobs.push({
        jobId: `${candidate.candidateId}:${asset.canonicalId}:${variantKey(variantProperties)}`,
        candidateId: candidate.candidateId,
        canonicalId: asset.canonicalId,
        title: asset.displayNameZh || candidate.title,
        sourceType: asset.kind === "screen" ? "figma-node" : "component-set-variant",
        sourceNodeId: asset.nodeId,
        figmaUrl: asset.figmaUrl,
        variantProperties,
        outputPath: existing?.imagePath ?? outputPath,
        status: exists ? "available" : "pending",
        directExport: asset.kind === "screen",
        instruction: asset.kind === "screen"
          ? "直接匯出此 Figma 畫面節點。"
          : "先在 Component Set 中選出符合 variantProperties 的子元件，再匯出該子元件；不要匯出整個 Component Set。",
      });
    }
  }
  return jobs;
}

function expandPreferredVariants(asset) {
  const properties = asset.componentProperties ?? {};
  const base = {};
  const expanded = [];

  for (const [name, definition] of Object.entries(properties)) {
    if (definition.type !== "VARIANT") continue;
    const options = definition.variantOptions ?? [];
    base[name] = preferredVariantValue(name, definition.defaultValue, options);
    if (/tab|頁籤|模式|mode/i.test(name) && options.length > 1 && options.length <= 4) {
      expanded.push({ name, options });
    }
  }

  if (expanded.length === 0) return [base];
  return expanded[0].options.map((value) => ({ ...base, [expanded[0].name]: value }));
}

function preferredVariantValue(name, defaultValue, options) {
  const preferred = /device|裝置/i.test(name)
    ? ["PC&Tablet", "PC", "Desktop", "desktop"]
    : /input|驗證/i.test(name)
      ? ["enable", "default", "Default"]
      : /theme|主題/i.test(name)
        ? ["Light", "light"]
        : [];
  return preferred.find((value) => options.includes(value)) ?? defaultValue ?? options[0] ?? "";
}

function findIndexedScreenshot(asset, variantProperties, indexedScreens) {
  return indexedScreens.find((screen) => {
    const source = screen.imageSource ?? {};
    const nodeMatches = asset.kind === "screen"
      ? source.nodeId === asset.nodeId
      : source.componentSetNodeId === asset.nodeId;
    if (!nodeMatches) return false;
    return Object.entries(variantProperties).every(([key, value]) =>
      source.variantProperties?.[key] === value
    );
  });
}

function renderDraft(candidate, jobs) {
  const groupedJobs = new Map(candidate.assets.map((asset) => [asset.canonicalId, []]));
  for (const job of jobs) groupedJobs.get(job.canonicalId)?.push(job);
  const sections = candidate.assets.flatMap((asset) => {
    const assetJobs = groupedJobs.get(asset.canonicalId) ?? [];
    const label = candidate.type === "flow"
      ? `Step ${asset.stepIndex}${asset.substate ? `／${displayState(asset.substate)}` : ""}`
      : `${displayViewport(asset.viewport)}／${displayState(asset.state)}`;
    return [
      `### ${label}：${asset.displayNameZh || candidate.title}`,
      "",
      `- 畫面用途：${asset.functionSummary || "索引尚未提供用途說明。"}`,
      `- Figma：[開啟來源畫面](${asset.figmaUrl})`,
      ...assetJobs.flatMap((job) => [
        ...(job.status === "available"
          ? [`[![${asset.displayNameZh || candidate.title}](${path.posix.relative("product/v1.0/generated/batch-specs/drafts", job.outputPath)})](${job.figmaUrl})`]
          : []),
        `- 截圖：${job.status === "available" ? `\`${job.outputPath}\`` : `待產生 → \`${job.outputPath}\``}`,
        ...(Object.keys(job.variantProperties).length > 0
          ? [`- 建議 Variant：${Object.entries(job.variantProperties).map(([key, value]) => `${key}=${value}`).join("、")}`]
          : []),
      ]),
      "",
    ];
  });

  return [
    `# ${candidate.title} — 批次草稿`,
    "",
    "- 文件狀態：待人工檢閱",
    `- 所屬模組：${candidate.module}`,
    `- 候選 ID：\`${candidate.candidateId}\``,
    "",
    "> 本文件由索引批次產生，只描述畫面直接可見的資訊。尚未確認的規則不得當成正式規格。",
    "",
    "## 功能說明",
    "",
    inferPurpose(candidate),
    "",
    "## 畫面與簡單說明",
    "",
    ...sections,
    "## 可以先確認的內容",
    "",
    ...unique(candidate.assets.map((asset) => asset.functionSummary).filter(Boolean)).map((summary) => `- ${summary}`),
    "",
    "## 待確認",
    "",
    "- 這些畫面是否屬於同一個正式功能或流程。",
    "- 哪些角色可以使用，以及從哪裡進入。",
    "- 欄位、驗證、權限、資料保存與成功／失敗規則。",
    "- 是否還有索引沒有收錄的狀態或例外畫面。",
    "",
    "## Review",
    "",
    "- [ ] 功能名稱與用途正確",
    "- [ ] 畫面分組正確",
    "- [ ] 畫面與 Figma 連結正確",
    "- [ ] 未把推測寫成已確認規格",
    "- [ ] 可決定是否加入正式 `specs/` 與查詢索引",
    "",
  ].join("\n");
}

function renderBatchReadme(report) {
  const rows = report.candidates.map((candidate) =>
    `| [${candidate.title}](drafts/${candidate.candidateId}.md) | ${candidate.type} | ${candidate.assetCount} | ${candidate.screenshotJobIds.length} | ${candidate.queryable ? "已可查詢" : "待檢閱"} |`
  );
  return [
    "# 批次規格草稿",
    "",
    "> 自動產生區。這裡的內容不會覆蓋正式規格，也不會自動進入 Bot 回答範圍。",
    "",
    `- 掃描索引資產：${report.summary.assetsScanned}`,
    `- 本次候選：${report.summary.selectedCandidates}`,
    `- 本次畫面／元件：${report.summary.selectedAssets}`,
    `- 截圖任務：${report.summary.screenshotJobs}（待處理 ${report.summary.screenshotsPending}）`,
    "",
    "| 草稿 | 類型 | 索引資產 | 截圖任務 | 狀態 |",
    "|---|---|---:|---:|---|",
    ...rows,
    "",
    "## 最簡 Review 流程",
    "",
    "1. 看圖片是否選對。",
    "2. 看功能名稱與一兩句用途是否正確。",
    "3. 不確定的規則保留在「待確認」。",
    "4. 確認後才將草稿移入正式 `specs/`，並加入 `specs/query-index.json`。",
    "",
    "## 截圖任務",
    "",
    "機器可讀清單位於 [`screenshot-queue.json`](screenshot-queue.json)。Codex 可依清單批次從正式索引設計稿匯出畫面。",
    "",
  ].join("\n");
}

function renderConsoleSummary(report) {
  const action = write ? "已產生" : "預覽";
  const candidateList = report.candidates.length
    ? report.candidates.map((candidate) => `- ${candidate.candidateId}：${candidate.title}（${candidate.assetCount} 個索引資產）`).join("\n")
    : "- 沒有待處理候選";
  return `${action}批次規格：\n${candidateList}\n\n掃描 ${report.summary.assetsScanned} 個資產；選出 ${report.summary.selectedCandidates} 個候選、${report.summary.screenshotJobs} 個截圖任務（${report.summary.screenshotsPending} 個待處理）。${write ? `\n輸出：product/v1.0/generated/batch-specs/` : "\n加上 --write 才會寫入草稿。"}`;
}

function inferFlowTitle(group, baseId) {
  const summaryMatch = group
    .map((asset) => asset.functionSummary ?? "")
    .map((summary) => summary.match(/^封裝(.+?)第\s*\d+\s*步/))
    .find(Boolean);
  if (summaryMatch) return `${summaryMatch[1]}流程`;
  const name = (group[0]?.displayNameZh ?? "")
    .replace(/\s*第\s*\d+\s*步.*$/, "")
    .replace(/\s*Step\s*\d+.*$/i, "")
    .trim();
  return name ? `${name}流程` : `${humanize(baseId)}流程`;
}

function inferScreenTitle(group, familyId) {
  const displayName = group[0]?.displayNameZh || humanize(familyId);
  return /image-viewer/.test(familyId) ? `${displayName}／圖片檢視` : displayName;
}

function inferPurpose(candidate) {
  const summaries = unique(candidate.assets.map((asset) => asset.functionSummary).filter(Boolean));
  if (summaries.length === 0) return "索引目前沒有足夠資訊，需要人工補上一至兩句用途。";
  if (candidate.type === "flow") {
    return `索引顯示這是一組包含 ${unique(candidate.assets.map((asset) => asset.stepIndex)).length} 個步驟的候選流程。詳細順序仍需人工確認。`;
  }
  return summaries[0];
}

function flowImageSuffix(asset, properties) {
  const base = `step-${asset.stepIndex}${asset.substate ? `-${slug(asset.substate)}` : ""}`;
  const mode = Object.entries(properties).find(([key]) => /tab|頁籤|模式|mode/i.test(key));
  return mode ? `${base}-${slug(mode[1])}` : base;
}

function screenImageSuffix(asset) {
  return [asset.viewport, asset.theme, asset.state].filter(Boolean).map(slug).join("-") || slug(asset.canonicalId);
}

function variantKey(properties) {
  const entries = Object.entries(properties);
  return entries.length ? entries.map(([key, value]) => `${slug(key)}-${slug(value)}`).join("_") : "direct";
}

function unique(values) {
  return [...new Set(values)];
}

function viewportRank(value) {
  return ({ desktop: 1, tablet: 2, mobile: 3 })[String(value).toLowerCase()] ?? 9;
}

function humanize(value) {
  return String(value).replaceAll("-", " ");
}

function displayViewport(value) {
  return ({ desktop: "桌機", tablet: "平板", mobile: "手機" })[String(value).toLowerCase()] ?? humanize(value || "畫面");
}

function displayState(value) {
  const normalized = String(value || "預設").toLowerCase();
  if (normalized.includes("image-view")) return "圖片檢視開啟";
  if (normalized === "default") return "預設";
  return humanize(value || "預設");
}

function slug(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "") || "default";
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}
