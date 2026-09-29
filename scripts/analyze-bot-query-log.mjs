import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fileArgIndex = process.argv.indexOf("--file");
const configuredPath = fileArgIndex >= 0
  ? process.argv[fileArgIndex + 1]
  : process.env.BOT_QUERY_LOG_PATH ?? "bot/logs/query-log.jsonl";
const logPath = path.resolve(repositoryRoot, configuredPath);
const jsonOutput = process.argv.includes("--json");

let text;
try {
  text = await readFile(logPath, "utf8");
} catch (error) {
  if (error.code === "ENOENT") {
    console.log(jsonOutput
      ? JSON.stringify({ total: 0, message: "目前還沒有本機測試紀錄。" }, null, 2)
      : "目前還沒有本機測試紀錄。啟動 Bot 並詢問問題後再執行 npm run bot:report。");
    process.exit(0);
  }
  throw error;
}

const records = text
  .split("\n")
  .filter(Boolean)
  .map((line, index) => {
    try {
      return JSON.parse(line);
    } catch {
      throw new Error(`查詢紀錄第 ${index + 1} 行不是有效 JSON。`);
    }
  });

const statusCounts = countBy(records, (record) => record.status ?? "unknown");
const featureCounts = countBy(records.filter((record) => record.feature), (record) => record.feature);
const audienceCounts = countBy(records.filter((record) => record.audience), (record) => record.audience);
const summary = {
  total: records.length,
  answered: statusCounts.answered ?? 0,
  needsConfirmation: statusCounts["needs-confirmation"] ?? 0,
  notFound: statusCounts["not-found"] ?? 0,
  features: sortCounts(featureCounts),
  audiences: sortCounts(audienceCounts),
  questionsNeedingSpecification: uniqueQuestions(records, "needs-confirmation"),
  questionsNeedingSearchImprovement: uniqueQuestions(records, "not-found"),
};

if (jsonOutput) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(renderSummary(summary));
}

function countBy(items, selector) {
  return items.reduce((counts, item) => {
    const key = selector(item);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

function sortCounts(counts) {
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function uniqueQuestions(records, status) {
  return [...new Set(records.filter((record) => record.status === status).map((record) => record.question))];
}

function renderSummary(summary) {
  const featureLines = summary.features.length
    ? summary.features.map((item) => `  - ${item.name}：${item.count}`).join("\n")
    : "  - 尚無資料";
  const pendingLines = summary.questionsNeedingSpecification.length
    ? summary.questionsNeedingSpecification.map((question) => `  - ${question}`).join("\n")
    : "  - 無";
  const missingLines = summary.questionsNeedingSearchImprovement.length
    ? summary.questionsNeedingSearchImprovement.map((question) => `  - ${question}`).join("\n")
    : "  - 無";
  return [
    "本機 Bot 測試摘要",
    "",
    `- 總問題：${summary.total}`,
    `- 回答正常：${summary.answered}`,
    `- 規格待確認：${summary.needsConfirmation}`,
    `- 找不到功能：${summary.notFound}`,
    "",
    "查詢功能：",
    featureLines,
    "",
    "建議補規格的問題：",
    pendingLines,
    "",
    "建議改善搜尋的問題：",
    missingLines,
  ].join("\n");
}
