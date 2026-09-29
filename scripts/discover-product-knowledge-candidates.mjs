import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifestPath = resolve(root, "core/v1.0/hub-manifest.json");
const catalogPath = resolve(root, "product/v1.0/page-catalog.json");
const outputDir = resolve(root, "product/v1.0/generated");
const outputJsonPath = resolve(outputDir, "draft-candidates.json");
const outputMarkdownPath = resolve(outputDir, "draft-candidates.md");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const assets = Array.isArray(manifest.assets) ? manifest.assets : [];
const registeredFlowIds = new Set((catalog.flows ?? []).map((flow) => flow.flowId));
const registeredPageCanonicalIds = new Set(
  (catalog.pages ?? []).flatMap((page) => page.relatedCanonicalIds ?? []),
);

const flowGroups = new Map();
const stepPattern = /^(.*?)-step-(\d+)(?:-(.+))?$/;

for (const asset of assets) {
  const match = (asset.canonicalId ?? "").match(stepPattern);
  if (!match) continue;

  const [, baseId, stepText, substate = ""] = match;
  const stepIndex = Number(stepText);
  const group = flowGroups.get(baseId) ?? [];
  group.push({
    canonicalId: asset.canonicalId,
    canonicalFamilyId: asset.canonicalFamilyId,
    stepIndex,
    substate,
    displayNameZh: asset.displayNameZh,
    displayNameEn: asset.displayNameEn,
    moduleZh: asset.moduleZh,
    moduleEn: asset.moduleEn,
    pageType: asset.pageType,
    functionSummary: asset.functionSummary,
    nodeId: asset.nodeId,
    figmaUrl: asset.figmaUrl,
    componentKey: asset.componentKey,
    componentSetKey: asset.componentSetKey,
    componentProperties: asset.componentProperties,
  });
  flowGroups.set(baseId, group);
}

const flowCandidates = [...flowGroups.entries()]
  .map(([baseId, groupAssets]) => {
    const sortedAssets = groupAssets.sort(
      (a, b) => a.stepIndex - b.stepIndex || a.canonicalId.localeCompare(b.canonicalId),
    );
    const stepNumbers = [...new Set(sortedAssets.map((asset) => asset.stepIndex))];
    const consecutive = stepNumbers.every((step, index) => step === index + 1);
    const hasSummaries = sortedAssets.every((asset) => Boolean(asset.functionSummary));
    const flowId = `${baseId}-flow`;

    return {
      candidateId: flowId,
      baseId,
      candidateType: "flow",
      confidence: consecutive && hasSummaries ? "high" : "medium",
      registered: registeredFlowIds.has(flowId),
      moduleZh: [...new Set(sortedAssets.map((asset) => asset.moduleZh).filter(Boolean))],
      pageTypes: [...new Set(sortedAssets.map((asset) => asset.pageType).filter(Boolean))],
      stepNumbers,
      consecutive,
      assetCount: sortedAssets.length,
      assets: sortedAssets,
    };
  })
  .filter((candidate) => candidate.stepNumbers.length >= 2)
  .sort((a, b) => a.candidateId.localeCompare(b.candidateId));

const screenGroups = new Map();
for (const asset of assets.filter((item) => item.kind === "screen")) {
  const familyId = asset.canonicalFamilyId || asset.canonicalId;
  const group = screenGroups.get(familyId) ?? [];
  group.push({
    canonicalId: asset.canonicalId,
    displayNameZh: asset.displayNameZh,
    displayNameEn: asset.displayNameEn,
    moduleZh: asset.moduleZh,
    pageType: asset.pageType,
    viewport: asset.viewport,
    state: asset.state,
    functionSummary: asset.functionSummary,
    nodeId: asset.nodeId,
    figmaUrl: asset.figmaUrl,
  });
  screenGroups.set(familyId, group);
}

const pageCandidates = [...screenGroups.entries()]
  .map(([familyId, groupAssets]) => ({
    candidateId: familyId,
    candidateType: "page-family",
    confidence: "medium",
    registered: groupAssets.some((asset) => registeredPageCanonicalIds.has(asset.canonicalId)),
    assetCount: groupAssets.length,
    moduleZh: [...new Set(groupAssets.map((asset) => asset.moduleZh).filter(Boolean))],
    pageTypes: [...new Set(groupAssets.map((asset) => asset.pageType).filter(Boolean))],
    assets: groupAssets.sort((a, b) => a.canonicalId.localeCompare(b.canonicalId)),
  }))
  .sort((a, b) => a.candidateId.localeCompare(b.candidateId));

const output = {
  schemaVersion: 1,
  source: "core/v1.0/hub-manifest.json",
  sourcePluginVersion: manifest.pluginVersion ?? null,
  sourceGeneratedAt: manifest.generatedAt ?? null,
  generatedAt: manifest.generatedAt ?? null,
  policy: {
    createsDraftSpecs: false,
    autoApproves: false,
    note: "本檔案只列出候選群組；候選必須經 AI 草稿生成與人工審核後才能加入 page-catalog.json。",
  },
  summary: {
    assetsScanned: assets.length,
    flowCandidates: flowCandidates.length,
    unregisteredFlowCandidates: flowCandidates.filter((item) => !item.registered).length,
    pageFamilyCandidates: pageCandidates.length,
    unregisteredPageFamilyCandidates: pageCandidates.filter((item) => !item.registered).length,
  },
  flowCandidates,
  pageCandidates,
};

const lines = [
  "# Product Knowledge Draft Candidates",
  "",
  "> 由 `scripts/discover-product-knowledge-candidates.mjs` 產生。這些項目只是候選，不是正式頁面或產品規格。",
  "",
  `- 掃描資產：${output.summary.assetsScanned}`,
  `- Flow 候選：${output.summary.flowCandidates}`,
  `- 尚未建檔的 Flow 候選：${output.summary.unregisteredFlowCandidates}`,
  `- Screen Family 候選：${output.summary.pageFamilyCandidates}`,
  `- 尚未建檔的 Screen Family 候選：${output.summary.unregisteredPageFamilyCandidates}`,
  "",
  "## Flow Candidates",
  "",
  "| Candidate | 信心 | 已建檔 | Steps | Assets | 模組 |",
  "|---|---|---:|---|---:|---|",
  ...flowCandidates.map(
    (item) =>
      `| \`${item.candidateId}\` | ${item.confidence} | ${item.registered ? "是" : "否"} | ${item.stepNumbers.join(", ")} | ${item.assetCount} | ${item.moduleZh.join("／") || "—"} |`,
  ),
  "",
  "## Screen Family Candidates",
  "",
  "| Candidate | 已建檔 | Screens | 模組 | Page Type |",
  "|---|---:|---:|---|---|",
  ...pageCandidates.map(
    (item) =>
      `| \`${item.candidateId}\` | ${item.registered ? "是" : "否"} | ${item.assetCount} | ${item.moduleZh.join("／") || "—"} | ${item.pageTypes.join("／") || "—"} |`,
  ),
  "",
  "## 使用限制",
  "",
  "- `high` 只代表命名、步驟連續性與 functionSummary 證據完整，不代表產品規格已確認。",
  "- 此程序不產生角色、權限、驗證、資料副作用或驗收條件。",
  "- 任何候選加入正式 Catalog 前，都必須經過 Claim 分類與 Review Queue。",
  "",
];

await mkdir(outputDir, { recursive: true });
await writeFile(outputJsonPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
await writeFile(outputMarkdownPath, `${lines.join("\n")}\n`, "utf8");

console.log(
  `候選探索完成：${flowCandidates.length} flows（${output.summary.unregisteredFlowCandidates} 未建檔）、${pageCandidates.length} screen families（${output.summary.unregisteredPageFamilyCandidates} 未建檔）。`,
);
