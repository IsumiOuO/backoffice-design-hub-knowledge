---
schemaVersion: 1
knowledgeType: flow
flowId: edit-event-main-category-flow
titleZh: 編輯事件主類別流程
titleEn: Edit Event Main Category Flow
moduleId: database-management
knowledgeStatus: partial
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedPageIds:
  - edit-event-main-category
---

# 編輯事件主類別流程

## 流程判定

索引具有連續的 Step 1～4 canonicalId 與 functionSummary。2026-09-23 已取得人工確認：這些畫面屬於同一個編輯流程，同一時間只呈現一個作用中的 Step；Step 4 的圖片列表與圖片上傳為同一步驟內的兩種狀態。

## 流程步驟

| Step | 索引可直接觀察的用途 | canonicalId | 可見 Variant |
|---:|---|---|---|
| 1 | 顯示並修改既有事件主類別名稱 | `edit-event-main-category-step-1` | `device=PC&Tablet/Mobile`、`input=enable/error` |
| 2 | 修改掛載的事件次類別 | `edit-event-main-category-step-2` | `device=PC&Tablet/Mobile`、`input=default/enable/error` |
| 3 | 修改發布介面 | `edit-event-main-category-step-3` | `device=PC&Tablet/Mobile`、`input=default/enable/error` |
| 4A | 顯示既有／已新增圖片列表 | `edit-event-main-category-step-4-image-list` | `device=PC&Tablet/Mobile`、`input=enable/error` |
| 4B | 調整既有主類別圖片並處理上傳狀態 | `edit-event-main-category-step-4-upload-image` | `device=PC&Tablet/Mobile`、`input=enable/error` |

## Claims

| Claim ID | 內容 | 狀態 |
|---|---|---|
| `edit-main-category-step-1-purpose` | Step 1 顯示既有資料並提供事件主類別名稱設定。 | `observed` |
| `edit-main-category-step-2-purpose` | Step 2 是掛載事件次類別的選擇介面。 | `observed` |
| `edit-main-category-step-3-purpose` | Step 3 是發布介面設定。 | `observed` |
| `edit-main-category-step-4-image-list-purpose` | Step 4 具有呈現既有／已新增圖片的列表介面。 | `observed` |
| `edit-main-category-step-4-upload-purpose` | Step 4 具有調整既有主類別圖片的上傳介面。 | `observed` |
| `edit-main-category-ordered-exclusive-flow` | Step 1～4 按順序呈現，且一次只顯示一個作用中的 Step。 | `confirmed` |
| `edit-main-category-step-4-two-states` | 圖片列表與上傳圖片是 Step 4 內的兩種畫面狀態。 | `confirmed` |

## 可安全使用的流程摘要

此流程依序顯示既有主類別名稱、掛載次類別、發布介面與圖片設定，供使用者修改；Step 4 可在圖片列表與上傳圖片兩種狀態間呈現。

這段摘要不宣稱特定角色、權限、驗證條件、保存機制或送出後的資料結果。

## 尚未確認的產品規則

| Question ID | 問題 | 建議確認單位 |
|---|---|---|
| `PQ-0015` | Step 2 是否可完全略過？掛載次類別是否有數量限制？ | 產品／開發／QA |
| `PQ-0016` | Step 3 是否允許 iframe 與 Widget 都不選？ | 產品／QA |
| `PQ-0017` | Step 4 的圖片必填、格式、尺寸、容量、數量，以及刪除既有圖片的規則為何？ | 產品／開發／QA |
| `PQ-0018` | 返回前一步時，已修改內容是否保留？ | 產品／開發 |
| `PQ-0019` | 關閉、取消或清空重填時，如何還原既有資料？是否需要二次確認？ | 產品／設計／開發 |
| `PQ-0020` | 送出後修改哪些資料、何時生效、是否同步至其他系統？ | 產品／開發 |
| `PQ-0021` | 各步驟 error Variant 分別由哪些驗證條件觸發？ | 產品／開發／QA |

## 驗收條件狀態

目前只能確認各步驟具有 `default`、`enable` 或 `error` 等視覺狀態；尚無足夠證據將觸發條件寫成正式驗收條件。

## 來源

- `core/v1.0/hub-manifest.json`
- `product/v1.0/generated/flow-drafts/edit-event-main-category-flow.json`
- Figma Node `198:262047`
- Figma Node `198:262198`
- Figma Node `198:262590`
- Figma Node `198:262491`
- Figma Node `198:262322`

## 生成資訊

- 生成日期：2026-09-23。
- Review Status：`needs-review`。
- 流程分組、互斥呈現及 Step 4 兩種狀態已於 2026-09-23 取得人工確認；其他產品規則仍未確認。
