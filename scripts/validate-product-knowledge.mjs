import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const catalogPath = resolve(root, "product/v1.0/page-catalog.json");
const openQuestionsPath = resolve(root, "product/v1.0/open-questions.md");
const validKnowledgeStatuses = new Set(["draft", "partial", "reviewed", "deprecated"]);
const validReviewStatuses = new Set(["unreviewed", "needs-review", "approved", "rejected"]);
const validClaimStatuses = new Set(["confirmed", "observed", "inferred", "unknown", "deprecated"]);
const stableIdPattern = /^[a-z0-9][a-z0-9-]*$/;

const errors = [];
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const openQuestionsText = await readFile(openQuestionsPath, "utf8");
const definedOpenQuestionIds = new Set(
  [...openQuestionsText.matchAll(/^## (PQ-\d+)\b/gm)].map((match) => match[1]),
);

if (catalog.schemaVersion !== 1) errors.push("schemaVersion 必須是 1");
if (!Array.isArray(catalog.pages)) errors.push("pages 必須是陣列");
if (!Array.isArray(catalog.flows)) errors.push("flows 必須是陣列");

const entries = [
  ...(Array.isArray(catalog.pages) ? catalog.pages.map((item) => ["page", "pageId", item]) : []),
  ...(Array.isArray(catalog.flows) ? catalog.flows.map((item) => ["flow", "flowId", item]) : []),
];
const entryIds = new Set();
const claimIds = new Set();

for (const [kind, idField, item] of entries) {
  const id = item[idField];
  const label = `${kind}:${id ?? "missing-id"}`;

  if (!stableIdPattern.test(id ?? "")) errors.push(`${label} 的 ${idField} 格式不合法`);
  if (entryIds.has(id)) errors.push(`重複的 Page／Flow ID：${id}`);
  entryIds.add(id);

  if (!item.titleZh) errors.push(`${label} 缺少 titleZh`);
  if (!item.moduleId) errors.push(`${label} 缺少 moduleId`);
  if (!item.path) errors.push(`${label} 缺少 path`);
  if (!validKnowledgeStatuses.has(item.knowledgeStatus)) errors.push(`${label} 的 knowledgeStatus 不合法`);
  if (!validReviewStatuses.has(item.reviewStatus)) errors.push(`${label} 的 reviewStatus 不合法`);
  if (!Array.isArray(item.claims)) errors.push(`${label} 的 claims 必須是陣列`);

  if (item.path) {
    try {
      await access(resolve(root, item.path), constants.R_OK);
    } catch {
      errors.push(`${label} 指向不存在的文件：${item.path}`);
    }
  }

  for (const claim of Array.isArray(item.claims) ? item.claims : []) {
    const claimLabel = `${label}/claim:${claim.id ?? "missing-id"}`;
    if (!stableIdPattern.test(claim.id ?? "")) errors.push(`${claimLabel} 的 id 格式不合法`);
    if (claimIds.has(claim.id)) errors.push(`重複的 Claim ID：${claim.id}`);
    claimIds.add(claim.id);
    if (!claim.statement) errors.push(`${claimLabel} 缺少 statement`);
    if (!validClaimStatuses.has(claim.status)) errors.push(`${claimLabel} 的 status 不合法`);
    if (!Array.isArray(claim.evidence)) errors.push(`${claimLabel} 的 evidence 必須是陣列`);

    const evidenceCount = Array.isArray(claim.evidence) ? claim.evidence.length : 0;
    if (["confirmed", "observed", "inferred"].includes(claim.status) && evidenceCount === 0) {
      errors.push(`${claimLabel} 狀態為 ${claim.status}，但沒有 evidence`);
    }
    if (claim.status === "inferred" && !claim.rationale) {
      errors.push(`${claimLabel} 狀態為 inferred，必須提供 rationale`);
    }
    if (claim.status === "confirmed" && (!claim.reviewer || !claim.reviewedAt)) {
      errors.push(`${claimLabel} 狀態為 confirmed，必須提供 reviewer 與 reviewedAt`);
    }
    if (claim.status === "unknown" && !claim.openQuestionId) {
      errors.push(`${claimLabel} 狀態為 unknown，必須連結 openQuestionId`);
    }
    if (
      claim.status === "unknown" &&
      claim.openQuestionId &&
      !definedOpenQuestionIds.has(claim.openQuestionId)
    ) {
      errors.push(`${claimLabel} 指向不存在的 Open Question：${claim.openQuestionId}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Product Knowledge 驗證失敗（${errors.length} 項）：`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Product Knowledge 驗證通過：${catalog.pages.length} pages、${catalog.flows.length} flows、${claimIds.size} claims。`);
}
