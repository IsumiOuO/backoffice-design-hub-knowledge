# 批次規格草稿

> 自動產生區。這裡的內容不會覆蓋正式規格，也不會自動進入 Bot 回答範圍。

- 掃描索引資產：552
- 本次候選：2
- 本次畫面／元件：9
- 截圖任務：9（待處理 9）

| 草稿 | 類型 | 索引資產 | 截圖任務 | 狀態 |
|---|---|---:|---:|---|
| [新增事件主類別／圖片檢視](drafts/event-main-category-image-viewer.md) | screen-family | 3 | 3 | 待檢閱 |
| [圖片路徑管理／圖片檢視](drafts/image-path-image-viewer.md) | screen-family | 6 | 6 | 待檢閱 |

## 最簡 Review 流程

1. 看圖片是否選對。
2. 看功能名稱與一兩句用途是否正確。
3. 不確定的規則保留在「待確認」。
4. 確認後才將草稿移入正式 `specs/`，並加入 `specs/query-index.json`。

## 截圖任務

機器可讀清單位於 [`screenshot-queue.json`](screenshot-queue.json)。Codex 可依清單批次從正式索引設計稿匯出畫面。
