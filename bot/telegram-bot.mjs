import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const queryScript = path.join(repositoryRoot, "scripts/query-specs.mjs");
const queryIndex = JSON.parse(await readFile(path.join(repositoryRoot, "specs/query-index.json"), "utf8"));

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
let offset = 0;

console.log(setupMode
  ? "Telegram Bot 已啟動（設定模式，只開放 /whoami）。"
  : `Telegram Bot 已啟動（允許 ${allowedUserIds.size} 位使用者）。`);

while (true) {
  try {
    const updates = await telegram("getUpdates", { offset, timeout: 30, allowed_updates: ["message"] });
    for (const update of updates) {
      offset = update.update_id + 1;
      if (update.message) await handleMessage(update.message);
    }
  } catch (error) {
    console.error(`Telegram 暫時無法連線：${error.message}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

async function handleMessage(message) {
  const chatId = message.chat.id;
  const userId = String(message.from?.id ?? "");
  const text = message.text?.trim();
  if (!text) return;

  if (text === "/whoami") {
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

  if (text === "/start" || text === "/help") {
    await sendMessage(chatId, [
      "這是後台設計與產品智庫測試 Bot。",
      "直接輸入功能問題，我會回傳白話答案、對應畫面與 Figma 連結。",
      "輸入 /list 可查看目前支援的功能。",
    ].join("\n"));
    return;
  }

  if (text === "/list") {
    await sendMessage(chatId, `目前可查詢：\n${queryIndex.features.map((feature) => `• ${feature.title}`).join("\n")}`);
    return;
  }

  const result = await queryKnowledge(text);
  if (!result.matched) {
    await sendMessage(chatId, `${result.answer}\n\n目前可查詢：\n${result.availableFeatures.map((title) => `• ${title}`).join("\n")}`);
    return;
  }

  const caption = [
    result.answer,
    "",
    `Figma：${result.screen.figmaUrl}`,
    `來源：${result.specPath}`,
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

async function queryKnowledge(question) {
  try {
    const { stdout } = await execFileAsync(process.execPath, [queryScript, question, "--json"], {
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

async function sendMessage(chatId, text) {
  return telegram("sendMessage", { chat_id: chatId, text, disable_web_page_preview: true });
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
    "新增事件主類別 Step 2 做什麼",
    "事件主類別圖片檢視手機版怎麼縮放",
    "圖片路徑圖片檢視平板暗色版",
    "圖片路徑圖片檢視手機版旋轉規則是什麼",
  ];
  for (const question of cases) {
    const result = await queryKnowledge(question);
    if (!result.matched) throw new Error(`無法查到：${question}`);
    const imagePath = path.join(repositoryRoot, result.screen.imagePath);
    await readFile(imagePath);
    console.log(`通過：${question} → ${result.screen.label}`);
  }
  console.log(`Bot 自我測試通過：${cases.length} 個問題、${queryIndex.features.length} 個可查詢功能。`);
}
