---
schemaVersion: 1
knowledgeType: page
pageId: edit-event-main-category
titleZh: 編輯事件主類別
titleEn: Edit Event Main Category
moduleId: database-management
knowledgeStatus: partial
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedFlowIds:
  - edit-event-main-category-flow
---

# 編輯事件主類別

## 目前可確認

- 現有 Core 索引將相關元件歸在「資料庫管理」模組。
- Step 1～4 均提供 `PC&Tablet` 與 `Mobile` Variant。
- 2026-09-23 已取得人工確認：Step 1～4 屬於同一個編輯流程，且同一時間只呈現一個作用中的 Step。
- Step 4 的「圖片列表」與「上傳圖片」是同一步驟內的兩種畫面狀態。
- 來源索引的 `pageType` 為 `Create`，但 canonicalId、名稱與摘要皆為「編輯」；在來源修正前，不把該欄位當成此頁面的產品類型證據。

## 頁面 Claims

| Claim ID | 內容 | 狀態 | 證據 |
|---|---|---|---|
| `edit-event-main-category-module` | 此頁面相關 Core 元件屬於資料庫管理模組。 | `observed` | `edit-event-main-category-step-1`～`step-4-*` |
| `edit-event-main-category-responsive` | 相關 Step 元件提供 PC／Tablet 與 Mobile 版型。 | `observed` | 各 Component Set 的 `device` Variant |
| `edit-event-main-category-uses-step-flow` | 此頁面由 Step 1～4 組成單一編輯流程，且一次只顯示一個作用中的 Step。 | `confirmed` | canonicalId、functionSummary 與 2026-09-23 人工確認 |
| `edit-event-main-category-step-4-substates` | Step 4 的圖片列表與上傳圖片是同一步驟的兩種畫面狀態。 | `confirmed` | 兩個 Step 4 canonicalId 與 2026-09-23 人工確認 |
| `edit-event-main-category-primary-role` | 此頁面的主要使用角色尚未確認。 | `unknown` | `PQ-0012` |
| `edit-event-main-category-entry-permission` | 此頁面的進入方式與權限條件尚未確認。 | `unknown` | `PQ-0013` |
| `edit-event-main-category-success-destination` | 編輯成功後的導向與顯示結果尚未確認。 | `unknown` | `PQ-0014` |
| `edit-event-main-category-source-page-type` | 來源索引的 `pageType=Create` 是否應修正為編輯類型尚未確認。 | `unknown` | `PQ-0022` |

## 關聯流程

- `edit-event-main-category-flow`

## 關聯 Core 資產

- [`edit-event-main-category-step-1`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262047)
- [`edit-event-main-category-step-2`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262198)
- [`edit-event-main-category-step-3`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262590)
- [`edit-event-main-category-step-4-image-list`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262491)
- [`edit-event-main-category-step-4-upload-image`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262322)

## User Story 狀態

目前不能建立正式 User Story，因主要角色、進入條件、修改後的系統結果與權限規則尚未確認。AI 可以描述已確認的四步驟畫面流程，但不得自行補上角色或資料副作用。

## 尚未確認

- `PQ-0012`：主要使用角色。
- `PQ-0013`：進入方式、可編輯範圍與權限。
- `PQ-0014`：編輯完成後的導向與結果。
- `PQ-0022`：來源索引 `pageType` 的正確分類。

## 生成資訊

- 生成方式：由 `core/v1.0/hub-manifest.json` 與 AI Flow 草稿整理。
- 生成日期：2026-09-23。
- Step 1～4 的流程分組、互斥呈現與 Step 4 兩種狀態已於 2026-09-23 取得人工確認。
- 角色、權限、驗證與修改後系統行為仍未經產品 Owner 核准。
