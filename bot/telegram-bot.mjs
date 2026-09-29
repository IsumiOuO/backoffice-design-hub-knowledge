import { execFile } from "node:child_process";
import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { loadSpecStatus, querySpecProgress } from "../scripts/query-spec-progress.mjs";

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const queryScript = path.join(repositoryRoot, "scripts/query-specs.mjs");
const queryIndex = JSON.parse(await readFile(path.join(repositoryRoot, "specs/query-index.json"), "utf8"));
const specStatus = await loadSpecStatus(path.join(repositoryRoot, "specs/spec-status.json"));
const githubBaseUrl = (process.env.KNOWLEDGE_GITHUB_BASE_URL
  ?? "https://github.com/IsumiOuO/backoffice-design-hub-knowledge/blob/main").replace(/\/$/, "");
const botCommands = [
  { command: "start", description: "開啟智庫快捷選單" },
  { command: "list", description: "查看目前可查詢功能" },
  { command: "progress", description: "查看全部規格進度" },
  { command: "todo", description: "查看尚未完成的規格" },
  { command: "waiting", description: "查看待確認的產品問題" },
  { command: "next", description: "查看下一份建議處理規格" },
  { command: "module", description: "依模組查看規格進度" },
  { command: "role", description: "選擇或切換回答角色" },
  { command: "help", description: "查看使用說明" },
  { command: "whoami", description: "查看自己的 Telegram ID" },
];
const shortcutCommands = new Map([
  ["👤 我的角色", "/role"],
  ["📚 可查詢功能", "/list"],
  ["📊 整體進度", "/progress"],
  ["🧭 下一份", "/next"],
  ["⏳ 待確認", "/waiting"],
  ["🗂 模組分類", "/module"],
  ["❓ 使用說明", "/help"],
]);
const roles = {
  general: {
    label: "綜合資訊",
    icon: "👥",
    audience: undefined,
    description: "提供功能用途、操作流程、畫面與待確認規則。",
    topics: [
      { key: "summary", label: "🎯 功能用途", query: "功能用途" },
      { key: "flow", label: "🔁 操作流程", query: "操作流程怎麼做" },
      { key: "screens", label: "🖼 畫面內容", query: "有哪些畫面內容" },
      { key: "unknown", label: "⚠️ 待確認規則", query: "有哪些待確認限制" },
    ],
  },
  frontend: {
    label: "前端",
    icon: "💻",
    audience: "frontend",
    description: "優先顯示畫面狀態、操作流程、裝置差異與前端待確認規則。",
    topics: [
      { key: "screens", label: "🖼 畫面與狀態", query: "有哪些畫面與狀態" },
      { key: "flow", label: "🔁 操作流程", query: "操作流程怎麼做" },
      { key: "responsive", label: "📱 裝置差異", query: "手機平板電腦畫面差異" },
      { key: "unknown", label: "⚠️ 前端待確認", query: "有哪些前端待確認限制" },
    ],
  },
  backend: {
    label: "後端",
    icon: "🗄️",
    audience: "backend",
    description: "優先顯示資料內容、驗證、保存生效與後端待確認規則。",
    topics: [
      { key: "data", label: "📦 所需資料", query: "需要處理哪些資料" },
      { key: "validation", label: "✅ 驗證規則", query: "有哪些必填與驗證規則" },
      { key: "save", label: "💾 保存與生效", query: "保存與生效規則" },
      { key: "unknown", label: "⚠️ 後端待確認", query: "有哪些後端待確認限制" },
    ],
  },
  design: {
    label: "美術設計",
    icon: "🎨",
    audience: "design",
    description: "優先顯示相關畫面、素材、多裝置、多語系與設計待確認規則。",
    topics: [
      { key: "assets", label: "🖼 圖片與素材", query: "圖片素材畫面" },
      { key: "responsive", label: "📐 裝置與比例", query: "手機平板電腦圖片尺寸比例" },
      { key: "localization", label: "🌐 多語系呈現", query: "多語系文字畫面" },
      { key: "unknown", label: "⚠️ 設計待確認", query: "有哪些設計素材待確認限制" },
    ],
  },
  planning: {
    label: "規劃／營運",
    icon: "📋",
    audience: "planning",
    description: "優先顯示功能目的、流程、產品規則與待決策問題。",
    topics: [
      { key: "summary", label: "🎯 功能用途", query: "功能用途" },
      { key: "flow", label: "🔁 完整流程", query: "完整操作流程怎麼做" },
      { key: "rules", label: "📏 產品規則", query: "目前有哪些產品規則" },
      { key: "unknown", label: "❓ 待決策問題", query: "有哪些產品待確認限制" },
    ],
  },
  qa: {
    label: "QA",
    icon: "🧪",
    audience: "qa",
    description: "優先顯示可驗收項目、測試路徑、錯誤狀態與待確認條件。",
    topics: [
      { key: "acceptance", label: "✅ 可驗收項目", query: "QA 可以測什麼" },
      { key: "flow", label: "🛤 測試路徑", query: "操作流程怎麼做" },
      { key: "errors", label: "❌ 錯誤狀態", query: "錯誤失敗如何處理" },
      { key: "boundary", label: "📏 邊界條件", query: "有哪些上限下限與限制" },
    ],
  },
};
const userPreferencesPath = path.resolve(
  repositoryRoot,
  process.env.BOT_USER_PREFERENCES_PATH ?? "bot/data/user-preferences.json",
);
const userPreferences = await loadUserPreferences();

if (process.argv.includes("--self-test")) {
  await runSelfTest();
  process.exit(0);
}

const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
if (!token) {
  console.error("缺少 TELEGRAM_BOT_TOKEN。請依 bot/README.md 建立 .env。");
  process.exit(1);
}

const setupMode = process.env.TELEGRAM_SETUP_MODE === "true";
const allowedUserIds = new Set(
  (process.env.TELEGRAM_ALLOWED_USER_IDS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean),
);

if (!setupMode && allowedUserIds.size === 0) {
  console.error("正式查詢模式必須設定 TELEGRAM_ALLOWED_USER_IDS。");
  process.exit(1);
}

const apiBase = `https://api.telegram.org/bot${token}`;
const queryLogEnabled = process.env.BOT_QUERY_LOG_ENABLED !== "false";
const queryLogPath = path.resolve(
  repositoryRoot,
  process.env.BOT_QUERY_LOG_PATH ?? "bot/logs/query-log.jsonl",
);
let offset = 0;

console.log(setupMode
  ? "Telegram Bot 已啟動（設定模式，只開放 /whoami）。"
  : `Telegram Bot 已啟動（允許 ${allowedUserIds.size} 位使用者）。`);

if (!setupMode) {
  await configureTelegramUi();
}

while (true) {
  try {
    const updates = await telegram("getUpdates", { offset, timeout: 30, allowed_updates: ["message", "callback_query"] });
    for (const update of updates) {
      offset = update.update_id + 1;
      if (update.message) await handleMessage(update.message);
      if (update.callback_query) await handleCallbackQuery(update.callback_query);
    }
  } catch (error) {
    console.error(`Telegram 暫時無法連線：${error.message}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

async function handleMessage(message) {
  const chatId = message.chat.id;
  const userId = String(message.from?.id ?? "");
  const rawText = message.text?.trim();
  const text = normalizeShortcut(rawText);
  if (!text) return;

  if (/^\/whoami(?:@\w+)?$/i.test(text)) {
    await sendMessage(chatId, `你的 Telegram User ID：${userId}`);
    return;
  }

  if (setupMode) {
    await sendMessage(chatId, "目前是設定模式。請先傳送 /whoami，再把回覆的 ID 填入 .env。");
    return;
  }

  if (!allowedUserIds.has(userId)) {
    await sendMessage(chatId, "你目前不在這個測試 Bot 的允許名單中。");
    return;
  }

  if (/^\/(start|help)(?:@\w+)?$/i.test(text)) {
    const roleKey = selectedRoleKey(userId);
    await sendMessage(chatId, [
      "這是後台設計與產品智庫測試 Bot。",
      "直接輸入功能問題，我會回傳白話答案、對應畫面與 Figma 連結。",
      roleKey
        ? `目前回答角色：${roleTitle(roleKey)}。`
        : "請先選擇角色，Bot 會依角色調整回答重點。",
      "可以使用下方快捷按鈕，或輸入 / 開啟完整指令清單。",
      "選擇「模組分類」可查看各模組規格與進度。",
    ].join("\n"), { replyMarkup: mainKeyboard() });
    if (roleKey) {
      await sendRoleDashboard(chatId, roleKey);
    } else {
      await sendRoleSelection(chatId);
    }
    return;
  }

  if (/^\/role(?:@\w+)?$/i.test(text)) {
    await sendRoleSelection(chatId, selectedRoleKey(userId));
    return;
  }

  if (/^\/list(?:@\w+)?$/i.test(text)) {
    await sendMessage(chatId, `目前可查詢：\n${queryIndex.features.map((feature) => `• ${feature.title}`).join("\n")}\n\n也可以直接點選：`, {
      replyMarkup: featureKeyboard(),
    });
    return;
  }

  if (/^\/module(?:@\w+)?$/i.test(text)) {
    await sendMessage(chatId, "請選擇要查看的模組：", { replyMarkup: moduleKeyboard() });
    return;
  }

  const progressResult = querySpecProgress(text, specStatus, { githubBaseUrl });
  if (progressResult.handled) {
    await sendMessage(chatId, progressResult.text);
    return;
  }

  await sendKnowledgeAnswer(chatId, text, selectedRoleKey(userId) ?? "general");
}

async function handleCallbackQuery(callback) {
  const chatId = callback.message?.chat?.id;
  const userId = String(callback.from?.id ?? "");
  const data = callback.data ?? "";
  await telegram("answerCallbackQuery", { callback_query_id: callback.id });
  if (!chatId) return;
  if (setupMode || !allowedUserIds.has(userId)) {
    await sendMessage(chatId, "你目前無法使用這個查詢選項。");
    return;
  }

  if (data === "role-menu") {
    await sendRoleSelection(chatId, selectedRoleKey(userId));
    return;
  }

  if (data.startsWith("role:")) {
    const roleKey = data.slice("role:".length);
    if (!roles[roleKey]) {
      await sendMessage(chatId, "這個角色目前不存在。");
      return;
    }
    await saveUserRole(userId, roleKey);
    await sendMessage(chatId, `已切換為 ${roleTitle(roleKey)}。\n${roles[roleKey].description}`);
    await sendRoleDashboard(chatId, roleKey);
    return;
  }

  if (data === "feature-menu") {
    await sendMessage(chatId, `目前以 ${roleTitle(selectedRoleKey(userId) ?? "general")} 回答。請選擇功能：`, {
      replyMarkup: featureKeyboard(),
    });
    return;
  }

  if (data.startsWith("topic:")) {
    const topicKey = data.slice("topic:".length);
    const roleKey = selectedRoleKey(userId) ?? "general";
    const topic = roles[roleKey].topics.find((item) => item.key === topicKey);
    if (!topic) {
      await sendMessage(chatId, "這個角色目前沒有這個查詢項目。");
      return;
    }
    await sendMessage(chatId, `${roleTitle(roleKey)}｜${topic.label}\n請選擇要查詢的功能：`, {
      replyMarkup: featureTopicKeyboard(topicKey),
    });
    return;
  }

  if (data.startsWith("ask:")) {
    const [, topicKey, featureId] = data.split(":");
    const roleKey = selectedRoleKey(userId) ?? "general";
    const topic = roles[roleKey].topics.find((item) => item.key === topicKey);
    const feature = queryIndex.features.find((item) => item.id === featureId);
    if (!topic || !feature) {
      await sendMessage(chatId, "這個查詢項目目前無法使用，請重新選擇。");
      return;
    }
    await sendKnowledgeAnswer(chatId, `${feature.title} ${topic.query}`, roleKey);
    return;
  }

  if (data.startsWith("module:")) {
    const module = data.slice("module:".length);
    const result = querySpecProgress(`/module ${module}`, specStatus, { githubBaseUrl });
    await sendMessage(chatId, result.text, { replyMarkup: moduleKeyboard() });
    return;
  }

  if (data.startsWith("feature:")) {
    const featureId = data.slice("feature:".length);
    const feature = queryIndex.features.find((item) => item.id === featureId);
    if (!feature) {
      await sendMessage(chatId, "這個功能目前不在查詢索引中。");
      return;
    }
    await sendKnowledgeAnswer(chatId, feature.title, selectedRoleKey(userId) ?? "general");
  }
}

async function sendKnowledgeAnswer(chatId, text, roleKey = "general") {
  const role = roles[roleKey] ?? roles.general;
  const result = await queryKnowledge(text, role.audience);
  await recordQuery(text, result, roleKey);
  if (!result.matched) {
    await sendMessage(chatId, `回答視角：${roleTitle(roleKey)}\n${result.answer}\n\n目前可查詢：\n${result.availableFeatures.map((title) => `• ${title}`).join("\n")}`, {
      replyMarkup: featureKeyboard(),
    });
    return;
  }

  const caption = [
    `回答視角：${roleTitle(roleKey)}`,
    "",
    result.answer,
    "",
    `Figma：${result.screen.figmaUrl}`,
    `來源：${githubBaseUrl}/${result.specPath}`,
    result.statusNote,
  ].join("\n");
  const imagePath = path.join(repositoryRoot, result.screen.imagePath);

  try {
    await sendPhoto(chatId, imagePath, caption);
  } catch (error) {
    console.error(`圖片傳送失敗，改傳文字：${error.message}`);
    await sendMessage(chatId, caption);
  }
}

async function recordQuery(question, result, roleKey = "general") {
  if (!queryLogEnabled) return;
  const status = !result.matched
    ? "not-found"
    : result.statusNote?.includes("待確認")
      ? "needs-confirmation"
      : "answered";
  const record = {
    timestamp: new Date().toISOString(),
    question,
    role: roleKey,
    status,
    feature: result.feature ?? null,
    audience: result.audience ?? null,
    specPath: result.specPath ?? null,
    screenLabel: result.screen?.label ?? null,
  };
  try {
    await mkdir(path.dirname(queryLogPath), { recursive: true });
    await appendFile(queryLogPath, `${JSON.stringify(record)}\n`, "utf8");
  } catch (error) {
    console.error(`本機查詢紀錄失敗，但不影響回答：${error.message}`);
  }
}

async function queryKnowledge(question, audience) {
  try {
    const args = [queryScript, question, "--json"];
    if (audience) args.push(`--audience=${audience}`);
    const { stdout } = await execFileAsync(process.execPath, args, {
      cwd: repositoryRoot,
      maxBuffer: 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (error) {
    if (error.stdout) return JSON.parse(error.stdout);
    throw error;
  }
}

async function telegram(method, body) {
  const response = await fetch(`${apiBase}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!payload.ok) throw new Error(payload.description ?? `${method} 失敗`);
  return payload.result;
}

async function configureTelegramUi() {
  try {
    await telegram("setMyCommands", { commands: botCommands });
    await telegram("setChatMenuButton", { menu_button: { type: "commands" } });
    console.log(`Telegram 指令選單已更新（${botCommands.length} 個指令）。`);
  } catch (error) {
    console.error(`Telegram 指令選單更新失敗，但 Bot 仍可繼續執行：${error.message}`);
  }
}

function normalizeShortcut(text) {
  if (!text) return text;
  return shortcutCommands.get(text) ?? text;
}

function selectedRoleKey(userId) {
  const roleKey = userPreferences.users[userId]?.role;
  return roles[roleKey] ? roleKey : undefined;
}

function roleTitle(roleKey) {
  const role = roles[roleKey] ?? roles.general;
  return `${role.icon} ${role.label}`;
}

async function loadUserPreferences() {
  try {
    const parsed = JSON.parse(await readFile(userPreferencesPath, "utf8"));
    return {
      schemaVersion: 1,
      users: parsed.users && typeof parsed.users === "object" ? parsed.users : {},
    };
  } catch (error) {
    if (error.code !== "ENOENT") console.error(`讀取角色偏好失敗，將使用預設值：${error.message}`);
    return { schemaVersion: 1, users: {} };
  }
}

async function saveUserRole(userId, roleKey) {
  userPreferences.users[userId] = {
    role: roleKey,
    updatedAt: new Date().toISOString(),
  };
  await mkdir(path.dirname(userPreferencesPath), { recursive: true });
  await writeFile(userPreferencesPath, `${JSON.stringify(userPreferences, null, 2)}\n`, "utf8");
}

async function sendRoleSelection(chatId, currentRoleKey) {
  const current = currentRoleKey ? `\n目前角色：${roleTitle(currentRoleKey)}` : "";
  await sendMessage(chatId, `請選擇希望 Bot 使用的回答角色。這只影響回答重點，不是權限限制。${current}`, {
    replyMarkup: roleKeyboard(currentRoleKey),
  });
}

async function sendRoleDashboard(chatId, roleKey) {
  const role = roles[roleKey] ?? roles.general;
  await sendMessage(chatId, `${roleTitle(roleKey)}查詢入口\n${role.description}\n\n請選擇查詢方式，或直接輸入問題：`, {
    replyMarkup: roleDashboardKeyboard(roleKey),
  });
}

function mainKeyboard() {
  return {
    keyboard: [
      [{ text: "👤 我的角色" }, { text: "📚 可查詢功能" }],
      [{ text: "📊 整體進度" }, { text: "🧭 下一份" }],
      [{ text: "⏳ 待確認" }, { text: "🗂 模組分類" }],
      [{ text: "❓ 使用說明" }],
    ],
    resize_keyboard: true,
    is_persistent: true,
    input_field_placeholder: "選擇快捷按鈕，或直接輸入問題",
  };
}

function roleKeyboard(currentRoleKey) {
  const buttons = Object.entries(roles).map(([key, role]) => ({
    text: `${key === currentRoleKey ? "✓ " : ""}${role.icon} ${role.label}`,
    callback_data: `role:${key}`,
  }));
  return { inline_keyboard: rowsOf(buttons, 2) };
}

function roleDashboardKeyboard(roleKey) {
  const role = roles[roleKey] ?? roles.general;
  return {
    inline_keyboard: [
      ...rowsOf(
        role.topics.map((topic) => ({ text: topic.label, callback_data: `topic:${topic.key}` })),
        2,
      ),
      [
        { text: "📚 可查詢功能", callback_data: "feature-menu" },
        { text: "🔄 切換角色", callback_data: "role-menu" },
      ],
    ],
  };
}

function featureKeyboard() {
  return {
    inline_keyboard: rowsOf(
      queryIndex.features.map((feature) => ({ text: feature.title, callback_data: `feature:${feature.id}` })),
      1,
    ),
  };
}

function featureTopicKeyboard(topicKey) {
  return {
    inline_keyboard: [
      ...rowsOf(
        queryIndex.features.map((feature) => ({
          text: feature.title,
          callback_data: `ask:${topicKey}:${feature.id}`,
        })),
        1,
      ),
      [{ text: "⬅️ 返回角色選單", callback_data: "role-menu" }],
    ],
  };
}

function moduleKeyboard() {
  const modules = [...new Set(specStatus.items.map((item) => item.module))];
  return {
    inline_keyboard: rowsOf(
      modules.map((module) => ({ text: module, callback_data: `module:${module}` })),
      2,
    ),
  };
}

function rowsOf(items, width) {
  const rows = [];
  for (let index = 0; index < items.length; index += width) rows.push(items.slice(index, index + width));
  return rows;
}

async function sendMessage(chatId, text, options = {}) {
  return telegram("sendMessage", {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
    ...(options.replyMarkup ? { reply_markup: options.replyMarkup } : {}),
  });
}

async function sendPhoto(chatId, imagePath, caption) {
  const form = new FormData();
  form.set("chat_id", String(chatId));
  form.set("caption", caption.slice(0, 1024));
  form.set("photo", new Blob([await readFile(imagePath)], { type: "image/png" }), path.basename(imagePath));
  const response = await fetch(`${apiBase}/sendPhoto`, { method: "POST", body: form });
  const payload = await response.json();
  if (!payload.ok) throw new Error(payload.description ?? "sendPhoto 失敗");
  return payload.result;
}

async function runSelfTest() {
  const cases = [
    { question: "新增事件主類別 Step 2 做什麼", includes: "掛載" },
    { question: "事件主類別圖片檢視手機版怎麼縮放", includes: "窄螢幕" },
    { question: "圖片路徑圖片檢視平板暗色版", includes: "平板暗色版" },
    { question: "圖片路徑圖片檢視手機版旋轉規則是什麼", includes: "待確認" },
    { question: "前端實作新增事件主類別有哪些畫面", includes: "電腦／平板與手機畫面" },
    { question: "後端處理新增事件主類別需要哪些資料", includes: "名稱、次類別、發布介面與圖片" },
    { question: "QA 可以先測新增事件主類別的哪些內容", includes: "步驟順序" },
    { question: "新增事件主類別圖片可以下載嗎？", includes: "目前尚未記錄" },
  ];
  for (const { question, includes } of cases) {
    const result = await queryKnowledge(question);
    if (!result.matched) throw new Error(`無法查到：${question}`);
    if (!result.answer.includes(includes)) throw new Error(`回答缺少「${includes}」：${question}`);
    const imagePath = path.join(repositoryRoot, result.screen.imagePath);
    await readFile(imagePath);
    console.log(`通過：${question} → ${result.screen.label}`);
  }
  const roleCases = [
    { roleKey: "frontend", question: "新增事件主類別", includes: "4 個步驟" },
    { roleKey: "backend", question: "新增事件主類別", includes: "名稱、次類別、發布介面與圖片" },
    { roleKey: "planning", question: "新增事件主類別", includes: "新的事件主類別" },
    { roleKey: "qa", question: "新增事件主類別", includes: "步驟順序" },
    { roleKey: "design", question: "新增事件主類別", includes: "用來建立新的事件主類別" },
  ];
  for (const { roleKey, question, includes } of roleCases) {
    const result = await queryKnowledge(question, roles[roleKey].audience);
    if (!result.answer.includes(includes)) throw new Error(`${roleTitle(roleKey)}回答缺少「${includes}」`);
    if (result.audience !== roles[roleKey].audience) throw new Error(`${roleTitle(roleKey)}角色套用失敗`);
    console.log(`通過：${roleTitle(roleKey)}角色回答`);
  }
  const progressCases = [
    { question: "/progress", includes: "規格候選：53 份" },
    { question: "/todo", includes: "尚未可查詢：47 份" },
    { question: "/waiting", includes: "共 59 項待確認" },
    { question: "/next", includes: "新增事件主類別" },
    { question: "/module 資料庫管理", includes: "規格候選：15 份" },
    { question: "目前全部完成多少", includes: "已可供查詢：6 份" },
  ];
  for (const { question, includes } of progressCases) {
    const result = querySpecProgress(question, specStatus, { githubBaseUrl });
    if (!result.handled || !result.text.includes(includes)) {
      throw new Error(`進度查詢失敗，預期包含「${includes}」：${question}`);
    }
    console.log(`通過：${question}`);
  }
  const shortcutCases = [
    ["👤 我的角色", "/role"],
    ["📚 可查詢功能", "/list"],
    ["📊 整體進度", "/progress"],
    ["🗂 模組分類", "/module"],
  ];
  for (const [label, command] of shortcutCases) {
    if (normalizeShortcut(label) !== command) throw new Error(`快捷按鈕沒有對應到 ${command}：${label}`);
  }
  if (mainKeyboard().keyboard.flat().length !== 7) throw new Error("主快捷鍵盤應有 7 個按鈕");
  if (roleKeyboard().inline_keyboard.flat().length !== Object.keys(roles).length) throw new Error("角色按鈕數量錯誤");
  for (const [roleKey, role] of Object.entries(roles)) {
    if (roleDashboardKeyboard(roleKey).inline_keyboard.flat().length !== role.topics.length + 2) {
      throw new Error(`${roleTitle(roleKey)}查詢按鈕數量錯誤`);
    }
    for (const topic of role.topics) {
      const buttons = featureTopicKeyboard(topic.key).inline_keyboard.flat();
      if (buttons.length !== queryIndex.features.length + 1) throw new Error(`${roleTitle(roleKey)}功能查詢按鈕數量錯誤`);
      if (buttons.some((button) => button.callback_data.length > 64)) throw new Error("Telegram callback_data 超過 64 bytes");
    }
  }
  if (featureKeyboard().inline_keyboard.flat().length !== queryIndex.features.length) throw new Error("功能分類按鈕數量錯誤");
  if (moduleKeyboard().inline_keyboard.flat().length !== new Set(specStatus.items.map((item) => item.module)).size) throw new Error("模組分類按鈕數量錯誤");
  if (botCommands.length !== 10) throw new Error("Telegram 指令清單數量錯誤");
  console.log(`Bot 自我測試通過：${cases.length} 個規格問題、${roleCases.length} 個角色回答、${progressCases.length} 個進度查詢、${Object.keys(roles).length} 個角色。`);
}
