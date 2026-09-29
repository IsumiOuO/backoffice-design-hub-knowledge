import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(repositoryRoot, "specs/query-index.json");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const audienceArgument = process.argv.find((value) => value.startsWith("--audience="));
const forcedAudienceKey = audienceArgument?.slice("--audience=".length);
const query = process.argv.slice(2)
  .filter((value) => value !== "--json" && !value.startsWith("--audience="))
  .join(" ")
  .trim();
const jsonOutput = process.argv.includes("--json");
const audienceDefinitions = {
  planning: { key: "planning", labels: ["規劃", "產品"] },
  frontend: { key: "frontend", labels: ["前端"] },
  backend: { key: "backend", labels: ["後端"] },
  design: { key: "design", labels: ["美術", "設計"] },
  qa: { key: "qa", labels: ["QA"] },
};

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

function screenHeading(screen) {
  return screen.heading ?? `Step ${screen.step}：${screen.title}`;
}

function screenLabel(screen) {
  return screen.label ?? `Step ${screen.step}：${screen.title}`;
}

function detectAudience(question) {
  if (forcedAudienceKey && audienceDefinitions[forcedAudienceKey]) return audienceDefinitions[forcedAudienceKey];
  if (/(規劃|產品|pm)/i.test(question)) return audienceDefinitions.planning;
  if (/(前端|frontend|front-end)/i.test(question)) return audienceDefinitions.frontend;
  if (/(後端|backend|back-end)/i.test(question)) return audienceDefinitions.backend;
  if (/(美術|視覺設計|設計師)/i.test(question)) return audienceDefinitions.design;
  if (/(qa|測試|品保)/i.test(question)) return audienceDefinitions.qa;
  return undefined;
}

function extractAudienceAnswer(markdown, audience) {
  const section = extractSection(markdown, "## 各單位可以先使用的資訊", /\n## /);
  for (const line of section.split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    const cells = line.split("|").map((cell) => cell.trim()).filter(Boolean);
    if (cells.length < 2) continue;
    if (audience.labels.some((label) => cells[0].toLowerCase().includes(label.toLowerCase()))) {
      return cells[1];
    }
  }

  const lines = section.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const heading = lines[index].match(/^###\s+(.+)$/)?.[1];
    if (!heading || !audience.labels.some((label) => heading.toLowerCase().includes(label.toLowerCase()))) {
      continue;
    }

    const content = [];
    for (let contentIndex = index + 1; contentIndex < lines.length; contentIndex += 1) {
      if (lines[contentIndex].startsWith("### ")) break;
      content.push(lines[contentIndex]);
    }
    return cleanMarkdown(content.join("\n"));
  }
  return "";
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
const audience = detectAudience(query);
let screen;

if (numberedStep) {
  const stepScreens = feature.screens.filter((item) => item.step === Number(numberedStep));
  const rankedStepScreens = stepScreens
    .map((item) => ({
      item,
      score: item.keywords.filter((keyword) => query.toLowerCase().includes(keyword.toLowerCase())).length
    }))
    .sort((a, b) => b.score - a.score);
  screen = rankedStepScreens[0]?.item;
}

if (!screen) {
  const rankedScreens = feature.screens
    .map((item) => ({
      item,
      score: item.keywords.filter((keyword) => query.toLowerCase().includes(keyword.toLowerCase())).length
    }))
    .sort((a, b) => b.score - a.score);
  screen = rankedScreens[0]?.score > 0 ? rankedScreens[0].item : undefined;
}

const asksFlow = /(流程|步驟|怎麼做|如何新增|如何編輯|如何更新|如何批次)/.test(query) && !numberedStep;
const asksConfirmedRule = !asksFlow && /(已確認規則|已定案規則|確定的規則)/.test(query);
const asksUnknownRule = !asksFlow && !asksConfirmedRule && (
  /(可不可以|可否|能不能|能否|完全不選|是否|必填|上限|下限|範圍|幅度|限制|規則|權限|角色|格式|尺寸|容量|幾個|保留|生效|導向|取消|關閉|錯誤|刪除|失敗|下載|原圖|載入|不存在|旋轉)/.test(query)
  || /可以.+[嗎?？]/.test(query)
);
const sectionName = asksUnknownRule
  ? "待確認"
  : asksConfirmedRule
    ? "已確認規則"
    : asksFlow
      ? "操作流程"
      : "功能說明";
const audienceAnswer = audience && !asksUnknownRule && !asksConfirmedRule && !asksFlow
  ? extractAudienceAnswer(markdown, audience)
  : "";
let answer = audienceAnswer
  || cleanMarkdown(extractSection(markdown, `## ${sectionName}`, /\n## /));

if (screen) {
  const stepSection = extractSection(markdown, `### ${screenHeading(screen)}`, /\n### |\n## /);
  const stepBullets = stepSection
    .split("\n")
    .filter((line) => line.startsWith("- ") && !line.includes("在 Figma 開啟"))
    .join("\n");
  answer = `${screenLabel(screen)}${stepBullets ? `\n${cleanMarkdown(stepBullets)}` : ""}`;

  if (asksUnknownRule) {
    const pendingLines = extractSection(markdown, "## 待確認", /\n## /)
      .split("\n")
      .filter((line) => line.startsWith("- "));
    const queryText = query.toLowerCase();
    const genericScreenTerms = new Set([
      "圖片", "桌機", "電腦", "pc", "平板", "tablet", "手機", "mobile",
      "窄螢幕", "直向", "暗色", "dark", "亮色", "light"
    ]);
    const ruleTerms = [
      "縮放", "必填", "範圍", "幅度", "限制", "權限", "角色", "格式", "尺寸", "容量",
      "保留", "生效", "導向", "取消", "關閉", "錯誤", "刪除", "失敗", "下載", "原圖",
      "載入", "不存在", "旋轉"
    ];
    const matchingTerms = [...screen.keywords, ...ruleTerms]
      .map((term) => term.toLowerCase())
      .filter((term) => !genericScreenTerms.has(term) && queryText.includes(term));
    const relatedPending = pendingLines.filter((line) =>
      (numberedStep && line.includes(`Step ${screen.step}`))
      || matchingTerms.some((term) => line.toLowerCase().includes(term))
    );
    if (relatedPending.length > 0) {
      answer += `\n待確認：\n${cleanMarkdown(relatedPending.join("\n"))}`;
    } else {
      answer += "\n待確認：\n• 這項規則目前尚未記錄，需要產品或相關負責人確認。";
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
  audience: audience?.key,
  audienceAvailable: audience ? Boolean(audienceAnswer) : undefined,
  statusNote: asksUnknownRule
    ? "回答取自「待確認」，不可當成已定案規則。"
    : asksConfirmedRule
      ? "回答取自規格中的「已確認規則」。"
      : audienceAnswer && !asksFlow
        ? "回答取自規格中的「各單位可以先使用的資訊」。"
        : audience && !asksFlow
          ? "目前沒有這個角色的專屬摘要，先提供已登錄的共用規格；不可自行推測缺少的規則。"
          : "回答取自已登錄的簡版規格。",
  screen: {
    step: selectedScreen.step,
    label: screenLabel(selectedScreen),
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
