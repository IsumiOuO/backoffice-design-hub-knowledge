# Telegram 智庫 Bot（本地測試版）

這個版本直接使用已人工審核的 `specs/query-index.json` 與規格文件回答，不使用生成式 AI，因此不會自行補寫未確認規則。

回答內容包含：

- 白話答案。
- 對應畫面截圖。
- Figma 來源連結。
- 規格文件位置。
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

- `/start`：查看說明。
- `/list`：列出目前可查詢功能。
- `/whoami`：查看自己的 Telegram User ID。
- 直接輸入問題，例如：`事件主類別圖片檢視手機版怎麼縮放`。

## 本地驗證

不需要 Token 即可執行：

```sh
npm run bot:self-test
```

## Gemini 的位置

第一版先不接 Gemini。等查詢結果與圖片都確認正確後，再讓 Gemini只負責整理語句；規格答案、圖片與「待確認」狀態仍必須由正式索引提供。
