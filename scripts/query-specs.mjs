import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(repositoryRoot, "specs/query-index.json");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const query = process.argv.slice(2).filter((value) => value !== "--json").join(" ").trim();
const jsonOutput = process.argv.includes("--json");

if (!query) {
  console.error('請輸入問題，例如：node scripts/query-specs.mjs "新增事件主類別 Step 2 做什麼"');
  process.exit(1);
}

function extractSection(markdown, marker, nextMarker) {
  const start = markdown.indexOf(marker);
  if (start === -1) return "";
  const contentStart = start + marker.length;
  const remaining = markdown.slice(contentStart);
  const next = remaining.search(nextMarker);
  return (next === -1 ? remaining : remaining.slice(0, next)).trim();
}

function cleanMarkdown(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[-*] /gm, "• ")
    .trim();
}

function scoreFeature(feature) {
  const normalizedQuery = query.toLowerCase();
  const names = [feature.title, ...feature.aliases];
  return Math.max(...names.map((name) => (normalizedQuery.includes(name.toLowerCase()) ? name.length : 0)));
}

const rankedFeatures = index.features
  .map((feature) => ({ feature, score: scoreFeature(feature) }))
  .sort((a, b) => b.score - a.score);
const matched = rankedFeatures[0];

if (!matched || matched.score === 0) {
  const result = {
    matched: false,
    answer: "目前找不到對應的簡版規格，請改用功能名稱查詢。",
    availableFeatures: index.features.map((feature) => feature.title)
  };
  console.log(jsonOutput ? JSON.stringify(result, null, 2) : `${result.answer}\n可查詢：${result.availableFeatures.join("、")}`);
  process.exit(2);
}

const feature = matched.feature;
const specFile = path.join(repositoryRoot, feature.specPath);
const markdown = fs.readFileSync(specFile, "utf8");
const numberedStep = query.match(/(?:step|步驟)\s*([1-9])/i)?.[1];
let screen = numberedStep ? feature.screens.find((item) => item.step === Number(numberedStep)) : undefined;

if (!screen) {
  const rankedScreens = feature.screens
    .map((item) => ({
      item,
      score: item.keywords.filter((keyword) => query.toLowerCase().includes(keyword.toLowerCase())).length
    }))
    .sort((a, b) => b.score - a.score);
  screen = rankedScreens[0]?.score > 0 ? rankedScreens[0].item : undefined;
}

const asksFlow = /(流程|步驟|怎麼做|如何新增)/.test(query) && !numberedStep;
const asksUnknownRule = !asksFlow && /(可不可以|可以|可否|能不能|能否|完全不選|是否|必填|上限|限制|權限|角色|格式|尺寸|容量|幾個|保留|生效|導向)/.test(query);
const sectionName = asksUnknownRule ? "待確認" : asksFlow ? "操作流程" : "功能說明";
let answer = cleanMarkdown(extractSection(markdown, `## ${sectionName}`, /\n## /));

if (screen) {
  const stepSection = extractSection(markdown, `### Step ${screen.step}：${screen.title}`, /\n### Step |\n## /);
  const stepBullets = stepSection
    .split("\n")
    .filter((line) => line.startsWith("- ") && !line.includes("在 Figma 開啟"))
    .join("\n");
  answer = `Step ${screen.step}：${screen.title}${stepBullets ? `\n${cleanMarkdown(stepBullets)}` : ""}`;

  if (asksUnknownRule) {
    const pendingLines = extractSection(markdown, "## 待確認", /\n## /)
      .split("\n")
      .filter((line) => line.startsWith("- "));
    const relatedPending = pendingLines.filter((line) =>
      line.includes(`Step ${screen.step}`) || screen.keywords.some((keyword) => line.toLowerCase().includes(keyword.toLowerCase()))
    );
    if (relatedPending.length > 0) {
      answer += `\n待確認：\n${cleanMarkdown(relatedPending.join("\n"))}`;
    }
  }
}

if (asksUnknownRule && !answer) {
  answer = "這項規則目前尚未記錄，不能自行推測，需要產品或相關負責人確認。";
}

const selectedScreen = screen ?? feature.screens[0];
const imageAbsolutePath = path.join(repositoryRoot, selectedScreen.imagePath);
const result = {
  matched: true,
  feature: feature.title,
  answer,
  statusNote: asksUnknownRule ? "回答取自「待確認」，不可當成已定案規則。" : "回答取自已登錄的簡版規格。",
  screen: {
    step: selectedScreen.step,
    title: selectedScreen.title,
    imagePath: selectedScreen.imagePath,
    imageExists: fs.existsSync(imageAbsolutePath),
    figmaUrl: selectedScreen.figmaUrl
  },
  specPath: feature.specPath
};

if (jsonOutput) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`${result.answer}\n\n畫面：${result.screen.imagePath}\nFigma：${result.screen.figmaUrl}\n來源：${result.specPath}\n${result.statusNote}`);
}
