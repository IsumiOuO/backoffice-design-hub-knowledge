import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const statusPath = path.join(root, "specs/spec-status.json");
const inventoryPath = path.join(root, "spec-hub/inventory.json");
const browserDataPath = path.join(root, "spec-hub/inventory-data.js");
const checkOnly = process.argv.includes("--check");
const repositoryUrl = "https://github.com/IsumiOuO/backoffice-design-hub-knowledge";
const branch = "main";
const sourceIndex = "core/v1.0/page-index.md";
const queryableStatuses = new Set(["queryable", "product-confirmed", "dev-qa-ready"]);

const statusIndex = JSON.parse(await readFile(statusPath, "utf8"));
const specs = await Promise.all(statusIndex.items.map(buildSpecRecord));

const inventory = {
  schemaVersion: 1,
  repository: repositoryUrl,
  branch,
  generatedAt: new Date().toISOString(),
  baselineVersion: statusIndex.baselineVersion,
  sourceManifest: statusIndex.sourceManifest,
  sourceStatus: "specs/spec-status.json",
  statusDefinitions: statusIndex.statusDefinitions,
  queryableStatuses: [...queryableStatuses],
  currentUser: "IsumiOuO",
  specs,
};

const json = `${JSON.stringify(inventory, null, 2)}\n`;
const browserData = `window.SPEC_HUB_INVENTORY = ${JSON.stringify(inventory, null, 2)};\n`;

if (checkOnly) {
  const [currentJson, currentBrowserData] = await Promise.all([
    readFile(inventoryPath, "utf8").catch(() => ""),
    readFile(browserDataPath, "utf8").catch(() => ""),
  ]);
  if (!sameExceptGeneratedAt(currentJson, json) || !sameExceptGeneratedAt(currentBrowserData, browserData)) {
    console.error("Spec Hub inventory 尚未同步，請執行 npm run knowledge:spec-hub。");
    process.exit(1);
  }
  console.log(`Spec Hub inventory 驗證通過：${specs.length} 份規格候選。`);
} else {
  await Promise.all([
    writeFile(inventoryPath, json, "utf8"),
    writeFile(browserDataPath, browserData, "utf8"),
  ]);
  const queryable = specs.filter((item) => item.isQueryable).length;
  const questions = specs.reduce((sum, item) => sum + item.openQuestions, 0);
  console.log(`Spec Hub inventory 已更新：${specs.length} 份規格、${queryable} 份可查詢、${questions} 項待確認。`);
}

async function buildSpecRecord(item) {
  const markdown = item.specPath
    ? await readFile(path.join(root, item.specPath), "utf8").catch(() => "")
    : "";
  const parsed = parseSpecMarkdown(markdown);
  const specFileName = `${item.id}.md`;
  const specUrl = item.specPath ? `${repositoryUrl}/blob/${branch}/${item.specPath}` : null;
  const createUrl = `${repositoryUrl}/new/${branch}/specs?filename=${encodeURIComponent(specFileName)}`;
  const historyPath = item.specPath ?? "specs/spec-status.json";

  return {
    id: item.id,
    canonicalId: item.id,
    canonicalIds: item.canonicalIds,
    title: item.title,
    module: item.module,
    priority: item.priority,
    complexity: item.complexity,
    aiAutomation: item.aiAutomation,
    status: item.status,
    statusLabel: statusIndex.statusDefinitions[item.status] ?? item.status,
    reviewStage: item.reviewStage ?? null,
    owner: item.owner ?? "未指派",
    specPath: item.specPath ?? null,
    sourceIndex,
    sourceStatus: item.specPath ? "已連結正式規格" : "規格候選，尚未建立正式檔案",
    documentStatus: parsed.documentStatus,
    summary: parsed.summary || `尚未建立正式規格。下一步：${item.nextAction}`,
    questions: parsed.questions,
    openQuestions: item.openQuestions ?? parsed.questions.length,
    screenCount: item.screenCount ?? 0,
    updatedAt: parsed.updatedAt || statusIndex.updatedAt,
    nextAction: item.nextAction,
    isQueryable: queryableStatuses.has(item.status),
    links: {
      spec: specUrl,
      edit: item.specPath ? `${repositoryUrl}/edit/${branch}/${item.specPath}` : createUrl,
      index: `${repositoryUrl}/blob/${branch}/${sourceIndex}`,
      history: `${repositoryUrl}/commits/${branch}/${historyPath}`,
      status: `${repositoryUrl}/blob/${branch}/specs/spec-status.json`,
    },
  };
}

function parseSpecMarkdown(markdown) {
  if (!markdown) return { summary: "", questions: [], updatedAt: "", documentStatus: "尚未建立" };
  const summarySection = section(markdown, "功能說明");
  const questionSection = section(markdown, "待確認");
  const summary = summarySection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith("#") && !line.startsWith("!") && !line.startsWith("[")) ?? "";
  const questions = questionSection
    .split("\n")
    .map((line) => line.match(/^\s*[-*]\s+(.+)$/)?.[1]?.trim())
    .filter(Boolean);
  const updatedAt = markdown.match(/最後更新[：:]\s*(\d{4}-\d{2}-\d{2})/)?.[1] ?? "";
  const documentStatus = markdown.match(/文件狀態[：:]\s*(.+)/)?.[1]?.trim() ?? "已建立";
  return { summary: stripInlineMarkdown(summary), questions, updatedAt, documentStatus };
}

function section(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(new RegExp(`(?:^|\\n)##\\s+${escaped}\\s*\\n`));
  if (!match || match.index === undefined) return "";
  const start = match.index + match[0].length;
  return markdown.slice(start).split(/\n##\s+/)[0].trim();
}

function stripInlineMarkdown(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

function sameExceptGeneratedAt(current, next) {
  if (!current) return false;
  return current.replace(/"generatedAt":\s*"[^"]+"/, '"generatedAt": "<generated>"')
    === next.replace(/"generatedAt":\s*"[^"]+"/, '"generatedAt": "<generated>"');
}
