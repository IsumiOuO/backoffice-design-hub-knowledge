import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const candidatesPath = resolve(root, "product/v1.0/generated/draft-candidates.json");
const args = process.argv.slice(2);
const candidateFlagIndex = args.indexOf("--candidate");
const candidateId = candidateFlagIndex >= 0 ? args[candidateFlagIndex + 1] : "";

if (!candidateId) {
  console.error("用法：node scripts/generate-flow-draft.mjs --candidate <candidate-id>");
  process.exit(1);
}

const candidates = JSON.parse(await readFile(candidatesPath, "utf8"));
const candidate = (candidates.flowCandidates ?? []).find(
  (item) => item.candidateId === candidateId,
);

if (!candidate) {
  console.error(`找不到 Flow Candidate：${candidateId}`);
  process.exit(1);
}

const outputDir = resolve(root, "product/v1.0/generated/flow-drafts");
const outputJsonPath = resolve(outputDir, `${candidateId}.json`);
const outputMarkdownPath = resolve(outputDir, `${candidateId}.md`);
const baseId = candidate.baseId;

function inferTitleZh(assets) {
  for (const asset of assets) {
    const match = (asset.functionSummary ?? "").match(/^封裝(.+?)第\s*\d+\s*步/);
    if (match) return `${match[1]}流程`;
  }
  const name = assets[0]?.displayNameZh ?? "";
  const stripped = name
    .replace(/\s+Step\s+\d+.*$/i, "")
    .replace(/\s*第\s*\d+\s*步.*$/, "")
    .trim();
  if (stripped) return `${stripped}流程`;
  return `${baseId} 流程`;
}

function inferTitleEn(assets) {
  const name = assets[0]?.displayNameEn ?? "";
  const stripped = name.replace(/\s+Step\s+\d+.*$/i, "").trim();
  return stripped ? `${stripped} Flow` : `${baseId} Flow`;
}

const titleZh = inferTitleZh(candidate.assets);
const titleEn = inferTitleEn(candidate.assets);
const observedClaims = candidate.assets.map((asset) => ({
  id: `${asset.canonicalId}-indexed-purpose`,
  statement: asset.functionSummary,
  status: "observed",
  evidence: [
    {
      type: "canonical-id",
      ref: asset.canonicalId,
      url: asset.figmaUrl,
      note: `Node ${asset.nodeId}`,
    },
  ],
}));

const inferredClaims = [
  {
    id: `${baseId}-ordered-flow-candidate`,
    statement: `Step ${candidate.stepNumbers.join("、")} 可能構成同一個循序且互斥呈現的流程。`,
    status: "inferred",
    evidence: candidate.assets.map((asset) => ({
      type: "canonical-id",
      ref: asset.canonicalId,
      url: asset.figmaUrl,
    })),
    rationale: "canonicalId、顯示名稱與 functionSummary 使用連續 Step 命名；仍需人工確認流程分組與實際導覽行為。",
  },
];

const unknownQuestions = [
  {
    key: "primary-role",
    question: "哪些角色可以使用此流程？",
    reason: "Figma 與 Core 索引沒有角色／權限證據。",
    suggestedOwners: ["產品", "開發"],
  },
  {
    key: "entry-and-permission",
    question: "流程從哪個頁面／操作進入，需要哪些前置條件與權限？",
    reason: "畫面結構不足以證明正式導覽與權限規則。",
    suggestedOwners: ["產品", "開發"],
  },
  {
    key: "step-validation",
    question: "各 Step 的必填、格式、數量與 error Variant 觸發條件為何？",
    reason: "索引只能證明視覺 Variant 存在，不能證明業務驗證規則。",
    suggestedOwners: ["產品", "開發", "QA"],
  },
  {
    key: "data-retention",
    question: "前後切換步驟、關閉或取消時，已修改資料如何保存或還原？",
    reason: "靜態 Figma 與元件 metadata 無法證明狀態保存行為。",
    suggestedOwners: ["產品", "開發"],
  },
  {
    key: "submit-result",
    question: "送出後修改哪些資料、何時生效、成功後導向何處？",
    reason: "現有索引沒有後端副作用、同步與成功導向證據。",
    suggestedOwners: ["產品", "開發"],
  },
];

const draft = {
  schemaVersion: 1,
  knowledgeType: "flow-draft",
  candidateId,
  baseId,
  titleZh,
  titleEn,
  moduleZh: candidate.moduleZh,
  pageTypes: candidate.pageTypes,
  confidence: candidate.confidence,
  source: "product/v1.0/generated/draft-candidates.json",
  sourceGeneratedAt: candidates.generatedAt ?? null,
  reviewStatus: "unreviewed",
  autoPromote: false,
  stepNumbers: candidate.stepNumbers,
  assets: candidate.assets,
  claims: [...observedClaims, ...inferredClaims],
  unknownQuestions,
};

const lines = [
  `# ${titleZh} — AI Draft`,
  "",
  "> 本文件由候選探索結果自動產生，不是正式產品規格，也不會自動加入 Page Catalog。",
  "",
  `- Candidate：\`${candidateId}\``,
  `- 信心：\`${candidate.confidence}\`（只代表索引分組證據）`,
  `- Review：\`unreviewed\``,
  "",
  "## 索引觀察",
  "",
  "| Step | canonicalId | functionSummary | Node |",
  "|---:|---|---|---|",
  ...candidate.assets.map(
    (asset) =>
      `| ${asset.stepIndex}${asset.substate ? `／${asset.substate}` : ""} | \`${asset.canonicalId}\` | ${asset.functionSummary} | [${asset.nodeId}](${asset.figmaUrl}) |`,
  ),
  "",
  "## 流程推論",
  "",
  `- \`inferred\`：${inferredClaims[0].statement}`,
  `- 理由：${inferredClaims[0].rationale}`,
  "",
  "## 自動建立的待確認問題",
  "",
  "| Key | 問題 | 建議確認 |",
  "|---|---|---|",
  ...unknownQuestions.map(
    (item) => `| \`${item.key}\` | ${item.question} | ${item.suggestedOwners.join("／")} |`,
  ),
  "",
  "## 安全限制",
  "",
  "- observed 只代表現有索引文字與 Variant 可直接證明的內容。",
  "- 流程分組保持 inferred，必須人工確認後才能升級。",
  "- 本草稿不推測權限、驗證、資料副作用或成功結果。",
  "- 通過檢閱前不得供正式 Bot 當成產品規格回答。",
  "",
];

await mkdir(outputDir, { recursive: true });
await writeFile(outputJsonPath, `${JSON.stringify(draft, null, 2)}\n`, "utf8");
await writeFile(outputMarkdownPath, `${lines.join("\n")}\n`, "utf8");

console.log(
  `Flow 草稿已產生：${candidateId}（${candidate.assets.length} assets、${draft.claims.length} claims、${unknownQuestions.length} unknown questions）。`,
);
