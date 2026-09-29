import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const queryIndexPath = path.join(repositoryRoot, "specs/query-index.json");
const outputPath = path.join(repositoryRoot, "specs/AI-SPEC-WORK-QUEUE.md");
const githubBase = "https://github.com/IsumiOuO/backoffice-design-hub-knowledge/blob/main";

const queryIndex = JSON.parse(await readFile(queryIndexPath, "utf8"));
const features = [];

for (const feature of queryIndex.features ?? []) {
  const specPath = path.join(repositoryRoot, feature.specPath);
  const markdown = await readFile(specPath, "utf8");
  features.push({
    id: feature.id,
    title: feature.title,
    specPath: feature.specPath,
    status: markdown.match(/^- 文件狀態：(.+)$/m)?.[1] ?? "未標示",
    screenCount: (feature.screens ?? []).length,
    pending: extractPending(markdown),
    priority: feature.id.includes("image-viewer") ? 2 : 1,
  });
}

features.sort((a, b) => a.priority - b.priority || a.title.localeCompare(b.title));
const pendingTotal = features.reduce((sum, feature) => sum + feature.pending.length, 0);
const generatedAt = new Intl.DateTimeFormat("zh-TW", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const lines = [
  "# AI 規格工作清單",
  "",
  `- 更新日期：${generatedAt}`,
  `- 正式可查詢規格：${features.length} 份`,
  `- 已索引畫面：${features.reduce((sum, feature) => sum + feature.screenCount, 0)} 張`,
  `- 待確認事項：${pendingTotal} 項`,
  "- 批次候選狀態：目前的 Flow／Screen Family 偵測範圍內沒有尚未建檔候選。這不代表整個後台所有頁面都已完成。",
  "",
  "> 這份清單是給人與普通對話 AI 使用的入口。正式答案仍以 `specs/` 與 `specs/query-index.json` 為準。",
  "",
  "## 怎麼使用",
  "",
  "1. 一次只選一份規格，不要要求 AI 一次補完整個後台。",
  "2. 將該規格的 GitHub 連結交給能瀏覽網頁的 AI；不能瀏覽時，貼上 Markdown 並附上畫面圖片。",
  "3. 如果有新的產品決定、User Story、API 或 QA 規則，一起提供；沒有資料時，AI 必須保留「待確認」。",
  "4. 使用 [`普通對話 AI 整理流程`](ORDINARY-AI-WORKFLOW.md) 中的提示詞產生草稿。",
  "5. 人工只檢查名稱、用途、圖片分組與是否出現推測。",
  "6. 通過後交給 Codex 更新正式文件、索引、驗證並建立 PR。",
  "",
  "## 已完成的正式規格",
  "",
  "| 優先 | 規格 | 狀態 | 畫面 | 待確認 |",
  "|---|---|---|---:|---:|",
  ...features.map((feature) =>
    `| P${feature.priority} | [${feature.title}](${feature.specPath.replace(/^specs\//, "")}) | ${feature.status} | ${feature.screenCount} | ${feature.pending.length} |`
  ),
  "",
  "## 建議處理順序",
  "",
  "- **P1 核心流程**：先補新增、編輯、單一更新與批次更新。這些缺口會直接影響前端、後端與 QA。",
  "- **P2 圖片檢視**：再補縮放、圖片方向、載入失敗與操作權限等規則。",
  "- 普通 AI 可以整理新證據與改寫文件，但不能自行決定下列待確認答案。",
  "",
];

for (const priority of [1, 2]) {
  lines.push(`## P${priority} 待補項目`, "");
  for (const feature of features.filter((item) => item.priority === priority)) {
    const githubUrl = `${githubBase}/${feature.specPath}`;
    lines.push(
      `### ${feature.title}`,
      "",
      `- 正式規格：[GitHub 開啟](${githubUrl})`,
      `- 已有畫面：${feature.screenCount} 張`,
      `- 文件狀態：${feature.status}`,
      "- 普通 AI 任務：根據新增的產品決定或來源資料整理文字；沒有新證據時，不得回答下列問題。",
      "",
      "待確認：",
      "",
      ...(feature.pending.length ? feature.pending.map((item) => `- ${item}`) : ["- 無"]),
      "",
    );
  }
}

lines.push(
  "## 尚未建立的新規格",
  "",
  "目前批次產生器在既有 Flow／Screen Family 規則下沒有發現新候選。若要擴充到其他後台頁面，請提供新的設計稿索引、頁面截圖或功能清單，再重新執行批次盤點。",
  "",
  "## 更新清單",
  "",
  "正式規格或查詢索引有變更後執行：",
  "",
  "```sh",
  "npm run knowledge:work-queue",
  "```",
  "",
);

await writeFile(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(`已更新 ${path.relative(repositoryRoot, outputPath)}：${features.length} 份規格、${pendingTotal} 項待確認。`);

function extractPending(markdown) {
  const marker = "## 待確認";
  const start = markdown.indexOf(marker);
  if (start < 0) return [];
  const remaining = markdown.slice(start + marker.length);
  const next = remaining.search(/\n## /);
  const section = next < 0 ? remaining : remaining.slice(0, next);
  return section
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}
