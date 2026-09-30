# backoffice-design-hub-knowledge

Backoffice Core、Foundation 與 Reference Screens 的設計與產品智庫。

## 團隊查詢入口

一般查詢者、規劃、前端、後端與 QA 請從以下入口開始：

- [Product Knowledge / Spec Hub](spec-hub/README.md)
- [簡易功能規格](specs/README.md)
- [全後台規格總表](specs/SPEC-MASTER-TRACKER.md)

## Product Knowledge / Spec Hub

以後台介面查看 53 個規格候選、模組進度、優先級、待確認問題與正式規格連結：

```sh
npm run knowledge:spec-hub
npm run spec-hub
```

然後開啟 `http://127.0.0.1:4173`。也可以直接雙擊 `spec-hub/index.html`。

Spec Hub 的資料由 `specs/spec-status.json` 與正式規格自動產生，不是另一份人工維護的資料庫。

簡易規格只說明畫面用途、操作流程、已知規則、待確認事項與 Figma 連結，不需要理解 AI、Claim 或索引機制。

要批次建立新的白話規格草稿，可執行：

```sh
node scripts/generate-spec-batch.mjs --write
```

草稿會放在 `product/v1.0/generated/batch-specs/`，不會覆蓋正式規格或自動進入 Bot 回答範圍。

## Telegram Bot 本地試測

不使用生成式 AI 的第一版 Bot 已放在 [`bot/`](bot/README.md)。它會直接回傳正式規格中的文字、畫面、Figma 連結與待確認提示。

```sh
npm run bot:self-test
```

通過後再依 [`bot/README.md`](bot/README.md) 連接自己的 Telegram 測試 Bot。

Bot 也能使用 `/progress`、`/todo`、`/waiting`、`/next` 與 `/module 資料庫管理` 讀取規格總表進度。這些固定查詢不使用 Gemini。

Telegram 對話內會顯示固定快捷按鈕、`/` 指令清單，以及可點選的功能與模組分類，不需要使用者記住指令。

使用者也可以選擇前端、後端、美術設計、規劃／營運、QA 或綜合資訊角色；同一份規格會依角色優先呈現不同重點，沒有記錄的內容仍會標示為待確認。

`product/v1.0/`、`core/v1.0/` 等目錄是 AI 與維護工具使用的詳細資料；一般使用者不需要閱讀。
