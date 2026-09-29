# backoffice-design-hub-knowledge

Backoffice Core、Foundation 與 Reference Screens 的設計與產品智庫。

## 團隊查詢入口

一般查詢者、規劃、前端、後端與 QA 請從以下入口開始：

- [簡易功能規格](specs/README.md)

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

`product/v1.0/`、`core/v1.0/` 等目錄是 AI 與維護工具使用的詳細資料；一般使用者不需要閱讀。
