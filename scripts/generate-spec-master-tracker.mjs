import { access, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const statusPath = path.join(root, "specs/spec-status.json");
const outputPath = path.join(root, "specs/SPEC-MASTER-TRACKER.md");
const manifestPath = path.join(root, "core/v1.0/hub-manifest.json");
const queryIndexPath = path.join(root, "specs/query-index.json");
const reviewStatusPath = path.join(root, "specs/AI-REVIEW-STATUS.json");
const checkOnly = process.argv.includes("--check");

const [statusIndex, manifest, queryIndex, reviewStatus] = await Promise.all([
  readJson(statusPath),
  readJson(manifestPath),
  readJson(queryIndexPath),
  readJson(reviewStatusPath),
]);

const errors = await validate({ statusIndex, manifest, queryIndex, reviewStatus });
if (errors.length > 0) {
  console.error(`規格總表驗證失敗（${errors.length} 項）：`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const markdown = renderTracker({ statusIndex, manifest });
if (checkOnly) {
  let current = "";
  try {
    current = await readFile(outputPath, "utf8");
  } catch {
    console.error("找不到 specs/SPEC-MASTER-TRACKER.md，請先執行 npm run knowledge:tracker。");
    process.exit(1);
  }
  if (current !== markdown) {
    console.error("SPEC-MASTER-TRACKER.md 尚未同步，請執行 npm run knowledge:tracker。");
    process.exit(1);
  }
  console.log(summaryLine(statusIndex, manifest, "規格總表驗證通過"));
} else {
  await writeFile(outputPath, markdown, "utf8");
  console.log(summaryLine(statusIndex, manifest, "規格總表已更新"));
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function validate({ statusIndex: index, manifest: hub, queryIndex: query, reviewStatus: review }) {
  const validationErrors = [];
  const validStatuses = new Set(Object.keys(index.statusDefinitions ?? {}));
  const validPriorities = new Set(["P1", "P2", "P3"]);
  const validComplexities = new Set(Object.keys(index.complexityReviewMinutes ?? {}));
  const validAutomation = new Set(["high", "medium", "low"]);
  const manifestIds = new Set((hub.assets ?? []).map((asset) => asset.canonicalFamilyId));
  const itemIds = new Set();
  const workOrders = new Set();

  if (index.schemaVersion !== 1) validationErrors.push("schemaVersion 必須是 1");
  if (!Array.isArray(index.items) || index.items.length === 0) validationErrors.push("items 必須是非空陣列");

  for (const item of index.items ?? []) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(item.id ?? "")) validationErrors.push(`ID 格式不合法：${item.id}`);
    if (itemIds.has(item.id)) validationErrors.push(`重複的規格 ID：${item.id}`);
    itemIds.add(item.id);
    if (item.workOrder !== undefined) {
      if (!Number.isInteger(item.workOrder) || item.workOrder < 1) validationErrors.push(`${item.id} 的 workOrder 必須是正整數`);
      if (workOrders.has(item.workOrder)) validationErrors.push(`重複的 workOrder：${item.workOrder}`);
      workOrders.add(item.workOrder);
    }
    if (!item.title) validationErrors.push(`${item.id} 缺少 title`);
    if (!item.module) validationErrors.push(`${item.id} 缺少 module`);
    if (!validPriorities.has(item.priority)) validationErrors.push(`${item.id} 的 priority 不合法`);
    if (!validComplexities.has(item.complexity)) validationErrors.push(`${item.id} 的 complexity 不合法`);
    if (!validAutomation.has(item.aiAutomation)) validationErrors.push(`${item.id} 的 aiAutomation 不合法`);
    if (!validStatuses.has(item.status)) validationErrors.push(`${item.id} 的 status 不合法`);
    if (!item.nextAction) validationErrors.push(`${item.id} 缺少 nextAction`);
    if (!Array.isArray(item.canonicalIds) || item.canonicalIds.length === 0) {
      validationErrors.push(`${item.id} 缺少 canonicalIds`);
    }
    for (const canonicalId of item.canonicalIds ?? []) {
      if (!manifestIds.has(canonicalId)) validationErrors.push(`${item.id} 指向不存在的 canonicalId：${canonicalId}`);
    }
    if (item.specPath) {
      try {
        await access(path.join(root, item.specPath), constants.R_OK);
      } catch {
        validationErrors.push(`${item.id} 指向不存在的規格：${item.specPath}`);
      }
    }
  }

  const queryFeatures = new Map((query.features ?? []).map((feature) => [feature.id, feature]));
  for (const [featureId, feature] of queryFeatures) {
    const item = (index.items ?? []).find((candidate) => candidate.id === featureId);
    if (!item) {
      validationErrors.push(`可查詢功能未列入總表：${featureId}`);
      continue;
    }
    if (!["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status)) {
      validationErrors.push(`${featureId} 已在 query-index，但總表狀態不是可查詢`);
    }
    if (item.specPath !== feature.specPath) validationErrors.push(`${featureId} 的 specPath 與 query-index 不一致`);
    if (item.screenCount !== feature.screens.length) validationErrors.push(`${featureId} 的 screenCount 與 query-index 不一致`);
  }

  for (const item of index.items ?? []) {
    if (["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status) && !queryFeatures.has(item.id)) {
      validationErrors.push(`${item.id} 標示可查詢，但不在 query-index`);
    }
    const expectedReviewStage = review.features?.[item.id]?.stage;
    if (expectedReviewStage && item.reviewStage !== expectedReviewStage) {
      validationErrors.push(`${item.id} 的 reviewStage 與 AI-REVIEW-STATUS 不一致`);
    }
  }
  return validationErrors;
}

function renderTracker({ statusIndex: index, manifest: hub }) {
  const items = index.items;
  const statusCounts = countBy(items, (item) => item.status);
  const modules = groupBy(items, (item) => item.module);
  const assetFamilies = new Set((hub.assets ?? []).map((asset) => asset.canonicalFamilyId));
  const primaryEvidenceFamilies = new Set(items.flatMap((item) => item.canonicalIds));
  const queryable = items.filter((item) => ["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status));
  const screenCount = queryable.reduce((sum, item) => sum + (item.screenCount ?? 0), 0);
  const openQuestions = queryable.reduce((sum, item) => sum + (item.openQuestions ?? 0), 0);
  const notQueryable = items.filter((item) => !["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status));
  const standardReviewMinutes = notQueryable.reduce(
    (sum, item) => sum + index.complexityReviewMinutes[item.complexity],
    0,
  );
  const fastReviewMinutes = Math.ceil(standardReviewMinutes / 2);

  const moduleRows = [...modules.entries()].map(([module, moduleItems]) => {
    const moduleQueryable = moduleItems.filter((item) => ["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status)).length;
    const p1 = moduleItems.filter((item) => item.priority === "P1").length;
    return `| ${module} | ${moduleItems.length} | ${moduleQueryable} | ${moduleItems.length - moduleQueryable} | ${p1} |`;
  });

  const itemSections = [...modules.entries()].flatMap(([module, moduleItems]) => [
    `## ${module}`,
    "",
    "| 優先 | 規格 | 狀態 | 複雜度 | AI 加速 | 畫面 | 待確認 | 下一步 |",
    "|---|---|---|---|---|---:|---:|---|",
    ...moduleItems.map((item) => {
      const title = item.specPath ? `[${item.title}](${path.posix.basename(item.specPath)})` : item.title;
      return `| ${item.priority} | ${title} | ${index.statusDefinitions[item.status]} | ${complexityLabel(item.complexity)} | ${automationLabel(item.aiAutomation)} | ${item.screenCount ?? "—"} | ${item.openQuestions ?? "—"} | ${item.nextAction} |`;
    }),
    "",
  ]);

  return [
    "# 全後台規格總表",
    "",
    `- 基準版本：\`${index.baselineVersion}\``,
    `- 更新日期：${index.updatedAt}`,
    `- 索引來源：\`${index.sourceManifest}\``,
    "- 本表追蹤的是「應交付的規格主題」，不是每一個 Figma 元件或 Variant。",
    "",
    "## 整體進度",
    "",
    `- 已索引設計資產：**${hub.assets.length}**`,
    `- 元件家族：**${assetFamilies.size}**`,
    `- 規格候選：**${items.length}**`,
    `- 已可供查詢：**${queryable.length}**（${percentage(queryable.length, items.length)}）`,
    `- 尚未可查詢：**${notQueryable.length}**`,
    `- 已收錄規格畫面：**${screenCount} 張**`,
    `- 已記錄待確認事項：**${openQuestions} 項**`,
    `- 總表使用的主要證據元件家族：**${primaryEvidenceFamilies.size}**；其他元件作為欄位、列、按鈕、狀態或裝置版型證據，不各自建立規格。`,
    "",
    "目前 6 份規格雖然已可查詢，但不代表產品規則、API 與 QA 驗收都已完整。完成度以表內狀態為準。",
    "",
    "## 模組摘要",
    "",
    "| 模組 | 規格候選 | 已可查詢 | 尚未可查詢 | P1 |",
    "|---|---:|---:|---:|---:|",
    ...moduleRows,
    "",
    "## 人工時間概估",
    "",
    `- 快速確認成為「可查詢版」：約 **${formatHours(fastReviewMinutes)} 小時**。`,
    `- 逐份標準審閱：約 **${formatHours(standardReviewMinutes)} 小時**。`,
    "- 以上不包含產品決策、API 定義與跨團隊等待時間。AI 可先完成分組、截圖、白話草稿與缺漏問題。",
    "",
    "## 狀態定義",
    "",
    ...Object.entries(index.statusDefinitions).map(([status, label]) => `- \`${status}\`：${label}`),
    "",
    "## 使用方式",
    "",
    "1. 人員閱讀本檔掌握進度。",
    "2. 更新狀態時修改 `specs/spec-status.json`。",
    "3. 執行 `npm run knowledge:tracker` 重新產生本表。",
    "4. Telegram Bot 可用 `/progress`、`/todo`、`/waiting`、`/next`、`/module 資料庫管理` 查詢。",
    "",
    ...itemSections,
    "## 邊界說明",
    "",
    "- 這是依現有索引建立的第一版規格範圍，不代表新增了產品規則。",
    "- 尚未建立的項目是規格候選；初次產生圖文草稿時仍需確認分組是否正確。",
    "- 新發現的功能可以新增項目；確認屬於同一流程的項目也可以合併。基準版本必須隨範圍調整更新。",
    "- Bot 的完成百分比直接由 `specs/spec-status.json` 計算，不使用生成式 AI 推測。",
    "",
  ].join("\n");
}

function summaryLine(index, hub, prefix) {
  const queryable = index.items.filter((item) => ["queryable", "product-confirmed", "dev-qa-ready"].includes(item.status)).length;
  return `${prefix}：${hub.assets.length} assets、${new Set(hub.assets.map((asset) => asset.canonicalFamilyId)).size} families、${index.items.length} specs、${queryable} queryable。`;
}

function groupBy(items, selector) {
  const groups = new Map();
  for (const item of items) {
    const key = selector(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function countBy(items, selector) {
  return items.reduce((counts, item) => {
    const key = selector(item);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

function percentage(value, total) {
  return `${Math.round((value / total) * 100)}%`;
}

function complexityLabel(value) {
  return ({ low: "低", medium: "中", high: "高" })[value];
}

function automationLabel(value) {
  return ({ high: "高", medium: "中", low: "低" })[value];
}

function formatHours(minutes) {
  return (minutes / 60).toFixed(1).replace(/\.0$/, "");
}
