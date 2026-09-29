# Telegram 智庫 Bot（本地測試版）

這個版本直接使用已人工審核的 `specs/query-index.json` 與規格文件回答，不使用生成式 AI，因此不會自行補寫未確認規則。

回答內容包含：

- 白話答案。
- 對應畫面截圖。
- Figma 來源連結。
- 可直接點擊的 GitHub 規格文件連結。
- 已確認或待確認提示。

## 第一次設定

1. 在 Telegram 開啟 `@BotFather`，輸入 `/newbot` 建立測試 Bot。
2. 複製 `.env.example` 為 `.env`。
3. 把 BotFather 提供的 Token 填入 `TELEGRAM_BOT_TOKEN`。
4. 執行 `npm run bot`。
5. 在 Telegram 對自己的 Bot 傳送 `/whoami`。
6. 把 Bot 回覆的 User ID 填入 `TELEGRAM_ALLOWED_USER_IDS`。
7. 將 `TELEGRAM_SETUP_MODE` 改為 `false`，重新啟動 Bot。

`.env` 已被 Git 忽略，不會上傳 Token。

## 使用方式

Bot 啟動時會自動向 Telegram 登錄指令清單。使用者可以點輸入框旁的 `/` 查看所有指令，也會在對話下方看到固定快捷按鈕：

- `👤 我的角色`
- `📚 可查詢功能`
- `📊 整體進度`
- `🧭 下一份`
- `⏳ 待確認`
- `🗂 模組分類`
- `❓ 使用說明`

點選「可查詢功能」會顯示目前六個圖文規格按鈕；點選「模組分類」會顯示所有規格模組按鈕。這些選單使用 Telegram 原生按鈕，不使用 Gemini。

第一次執行 `/start` 時，可選擇以下回答角色：

- `💻 前端`
- `🗄️ 後端`
- `🎨 美術設計`
- `📋 規劃／營運`
- `🧪 QA`
- `👥 綜合資訊`

選擇角色後，Bot 會顯示該角色常用的查詢入口；直接輸入問題或點選功能時，也會優先引用規格中該角色可使用的資訊。角色只改變回答重點，不是權限限制，可隨時透過「我的角色」或 `/role` 切換。

角色偏好只保存在執行 Bot 的本機 `bot/data/user-preferences.json`，不會提交到 GitHub。美術設計等角色若尚無專屬規格段落，Bot 會退回共用規格並明確標示，不會自行推測。

- `/start`：查看說明。
- `/list`：列出目前可查詢功能。
- `/progress`：查看全部規格數量與整體完成比例。
- `/todo`：查看優先處理的未完成規格。
- `/waiting`：查看正在等待補充規則的規格。
- `/next`：查看下一份建議處理的規格。
- `/module 資料庫管理`：查看指定模組進度。
- `/role`：選擇或切換回答角色。
- `/whoami`：查看自己的 Telegram User ID。
- 直接輸入問題，例如：`事件主類別圖片檢視手機版怎麼縮放`。
- 可在問題中指定角色，例如：`前端實作新增事件主類別有哪些畫面`、`QA 可以先測新增事件主類別的哪些內容`。

進度查詢直接讀取 `specs/spec-status.json`，不使用 Gemini，也不消耗生成式 AI Token。

## 本地驗證

不需要 Token 即可執行：

```sh
npm run bot:self-test
```

## 本機測試紀錄

正式查詢會預設記錄在 `bot/logs/query-log.jsonl`，只包含：

- 問題文字。
- 是否回答正常、規格待確認或找不到功能。
- 配對到的功能、角色、規格與畫面。

不會記錄 Bot Token、Telegram User ID 或 Chat ID。紀錄檔已被 Git 忽略，不會上傳 GitHub。若不希望留下紀錄，可在 `.env` 設定 `BOT_QUERY_LOG_ENABLED=false`。

查看摘要：

```sh
npm run bot:report
```

摘要會分成「回答正常」、「建議補規格」與「建議改善搜尋」三類。

## Gemini 的位置

第一版先不接 Gemini。等查詢結果與圖片都確認正確後，再讓 Gemini只負責整理語句；規格答案、圖片與「待確認」狀態仍必須由正式索引提供。
