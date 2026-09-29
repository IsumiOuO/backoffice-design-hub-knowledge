import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultStatusPath = path.join(root, "specs/spec-status.json");
const queryableStatuses = new Set(["queryable", "product-confirmed", "dev-qa-ready"]);
const priorityOrder = new Map([["P1", 1], ["P2", 2], ["P3", 3]]);

export async function loadSpecStatus(filePath = defaultStatusPath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

export function querySpecProgress(text, statusIndex, options = {}) {
  const input = text.trim();
  const githubBaseUrl = (options.githubBaseUrl ?? "").replace(/\/$/, "");
  const modules = [...new Set(statusIndex.items.map((item) => item.module))];
  const moduleCommand = input.match(/^\/module(?:@\w+)?(?:\s+(.+))?$/i);
  const naturalModule = modules.find((module) => input.includes(module) && /(進度|完成|剩下|待辦)/.test(input));

  if (/^\/progress(?:@\w+)?$/i.test(input) || /(整體|全部|目前).*(進度|完成多少)|完成比例/.test(input)) {
    return handled(formatOverall(statusIndex, githubBaseUrl));
  }
  if (/^\/todo(?:@\w+)?$/i.test(input) || /(還剩哪些規格|規格待辦|尚未建立哪些)/.test(input)) {
    return handled(formatTodo(statusIndex, githubBaseUrl));
  }
  if (/^\/waiting(?:@\w+)?$/i.test(input) || /(哪些規格.*等.*回答|哪些.*待確認|等待我回答)/.test(input)) {
    return handled(formatWaiting(statusIndex, githubBaseUrl));
  }
  if (/^\/next(?:@\w+)?$/i.test(input) || /(下一份.*規格|下一個.*規格|接下來.*處理哪)/.test(input)) {
    return handled(formatNext(statusIndex, githubBaseUrl));
  }
  if (moduleCommand || naturalModule) {
    const module = moduleCommand?.[1]?.trim() || naturalModule;
    if (!module) return handled(`可查詢模組：\n${modules.map((item) => `• ${item}`).join("\n")}\n\n用法：/module 資料庫管理`);
    const exactModule = modules.find((item) => item === module) ?? modules.find((item) => item.includes(module) || module.includes(item));
    if (!exactModule) return handled(`找不到「${module}」。\n可查詢模組：\n${modules.map((item) => `• ${item}`).join("\n")}`);
    return handled(formatModule(statusIndex, exactModule, githubBaseUrl));
  }
  return { handled: false };
}

function handled(text) {
  return { handled: true, text };
}

function formatOverall(index, githubBaseUrl) {
  const total = index.items.length;
  const queryable = index.items.filter((item) => queryableStatuses.has(item.status)).length;
  const productConfirmed = index.items.filter((item) => ["product-confirmed", "dev-qa-ready"].includes(item.status)).length;
  const devQaReady = index.items.filter((item) => item.status === "dev-qa-ready").length;
  const screens = index.items.reduce((sum, item) => sum + (item.screenCount ?? 0), 0);
  const questions = index.items.reduce((sum, item) => sum + (item.openQuestions ?? 0), 0);
  return [
    `全後台規格進度（${index.updatedAt}）`,
    `• 規格候選：${total} 份`,
    `• 已可供查詢：${queryable} 份（${percent(queryable, total)}）`,
    `• 尚未可查詢：${total - queryable} 份`,
    `• 產品規則已確認：${productConfirmed} 份`,
    `• 開發／QA 完整：${devQaReady} 份`,
    `• 已收錄畫面：${screens} 張`,
    `• 已記錄待確認事項：${questions} 項`,
    "",
    "「可供查詢」不等於產品規則與 API 已完整。",
    trackerLink(githubBaseUrl),
  ].filter(Boolean).join("\n");
}

function formatTodo(index, githubBaseUrl) {
  const items = sorted(index.items.filter((item) => !queryableStatuses.has(item.status))).slice(0, 10);
  return [
    `尚未可查詢：${index.items.filter((item) => !queryableStatuses.has(item.status)).length} 份，先列前 ${items.length} 份：`,
    ...items.map((item) => `• ${item.priority}｜${item.module}｜${item.title}\n  下一步：${item.nextAction}`),
    "",
    "可用 /module 模組名稱查看該模組全部項目。",
    trackerLink(githubBaseUrl),
  ].filter(Boolean).join("\n");
}

function formatWaiting(index, githubBaseUrl) {
  const items = sorted(index.items.filter((item) => (item.openQuestions ?? 0) > 0));
  const totalQuestions = items.reduce((sum, item) => sum + item.openQuestions, 0);
  return [
    `等待補充規則：${items.length} 份規格，共 ${totalQuestions} 項待確認：`,
    ...items.map((item) => `• ${item.title}：${item.openQuestions} 項\n  下一步：${item.nextAction}${specLink(item, githubBaseUrl)}`),
    "",
    trackerLink(githubBaseUrl),
  ].filter(Boolean).join("\n");
}

function formatNext(index, githubBaseUrl) {
  const item = sorted(index.items.filter((candidate) => candidate.nextAction))[0];
  if (!item) return "目前沒有下一步項目。";
  return [
    "建議下一份：",
    `• ${item.priority}｜${item.module}｜${item.title}`,
    `• 目前狀態：${index.statusDefinitions[item.status]}`,
    `• 下一步：${item.nextAction}`,
    item.openQuestions ? `• 待確認：${item.openQuestions} 項` : "",
    item.specPath ? `• 規格：${githubBaseUrl}/${item.specPath}` : "• 尚未建立正式規格",
    "",
    trackerLink(githubBaseUrl),
  ].filter(Boolean).join("\n");
}

function formatModule(index, module, githubBaseUrl) {
  const items = index.items.filter((item) => item.module === module);
  const queryable = items.filter((item) => queryableStatuses.has(item.status)).length;
  return [
    `${module}進度`,
    `• 規格候選：${items.length} 份`,
    `• 已可供查詢：${queryable} 份（${percent(queryable, items.length)}）`,
    `• 尚未可查詢：${items.length - queryable} 份`,
    "",
    ...sorted(items).map((item) => `• ${item.priority}｜${item.title}｜${index.statusDefinitions[item.status]}\n  下一步：${item.nextAction}${specLink(item, githubBaseUrl)}`),
    "",
    trackerLink(githubBaseUrl),
  ].filter(Boolean).join("\n");
}

function sorted(items) {
  const statusOrder = new Map([
    ["queryable", 1],
    ["needs-review", 2],
    ["ai-draft", 3],
    ["not-started", 4],
    ["product-confirmed", 5],
    ["dev-qa-ready", 6],
  ]);
  return [...items].sort((a, b) =>
    (a.workOrder ?? Number.MAX_SAFE_INTEGER) - (b.workOrder ?? Number.MAX_SAFE_INTEGER)
    || (priorityOrder.get(a.priority) ?? 9) - (priorityOrder.get(b.priority) ?? 9)
    || (statusOrder.get(a.status) ?? 9) - (statusOrder.get(b.status) ?? 9)
    || a.title.localeCompare(b.title, "zh-Hant"),
  );
}

function specLink(item, githubBaseUrl) {
  return item.specPath && githubBaseUrl ? `\n  規格：${githubBaseUrl}/${item.specPath}` : "";
}

function trackerLink(githubBaseUrl) {
  return githubBaseUrl ? `總表：${githubBaseUrl}/specs/SPEC-MASTER-TRACKER.md` : "";
}

function percent(value, total) {
  return `${Math.round((value / total) * 100)}%`;
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  const input = process.argv.slice(2).join(" ").trim() || "/progress";
  const index = await loadSpecStatus();
  const result = querySpecProgress(input, index, {
    githubBaseUrl: process.env.KNOWLEDGE_GITHUB_BASE_URL
      ?? "https://github.com/IsumiOuO/backoffice-design-hub-knowledge/blob/main",
  });
  if (!result.handled) {
    console.error("無法辨識進度查詢。可使用 /progress、/todo、/waiting、/next 或 /module 資料庫管理。");
    process.exit(2);
  }
  console.log(result.text);
}
