# AI 規格檢閱包

- 更新日期：2026-09-29
- 規格包：6 份
- 使用方式：一次選一份 PDF，上傳給普通對話 AI。PDF 已包含文字、圖片、來源與提示詞。

| 功能 | 目前進度 | PDF |
|---|---|---|
| 新增事件主類別 | 白話整理已人工確認；下一步：缺漏檢查 | [create-event-main-category-review-pack.pdf](create-event-main-category-review-pack.pdf) |
| 編輯事件主類別 | 已有基礎規格；下一步：普通 AI 白話整理 | [edit-event-main-category-review-pack.pdf](edit-event-main-category-review-pack.pdf) |
| 單一事件參數更新 | 已有基礎規格；下一步：普通 AI 白話整理 | [single-parameter-update-review-pack.pdf](single-parameter-update-review-pack.pdf) |
| 批次事件參數更新 | 已有基礎規格；下一步：普通 AI 白話整理 | [batch-parameter-update-review-pack.pdf](batch-parameter-update-review-pack.pdf) |
| 事件主類別圖片檢視 | 已有基礎規格；下一步：普通 AI 白話整理 | [event-main-category-image-viewer-review-pack.pdf](event-main-category-image-viewer-review-pack.pdf) |
| 圖片路徑圖片檢視 | 已有基礎規格；下一步：普通 AI 白話整理 | [image-path-image-viewer-review-pack.pdf](image-path-image-viewer-review-pack.pdf) |

## 建議順序

1. 先將「新增事件主類別」交給第二個 AI 做缺漏檢查。
2. 其餘功能先交給普通 AI 做白話整理，再進行第二輪缺漏檢查。
3. 統一收集簡單問題與答案後，交回 Codex 更新正式規格。

## 重新產生

```sh
npm run knowledge:review-packets
```
