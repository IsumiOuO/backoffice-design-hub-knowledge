---
schemaVersion: 1
knowledgeType: page
pageId: create-event-main-category
titleZh: 新增事件主類別
titleEn: Create Event Main Category
moduleId: database-management
knowledgeStatus: draft
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedFlowIds:
  - create-event-main-category-flow
---

# 新增事件主類別

## 目前可確認

- 現有 Core 索引將 Step 1～4 相關元件歸在「資料庫管理」模組，頁面類型為 `Create`。
- 相關元件均提供 `PC&Tablet` 與 `Mobile` Variant。
- Step 1～4 的畫面內容與狀態已經存在，但頁面角色、進入權限及完成後結果尚未確認。

## 頁面 Claims

| Claim ID | 內容 | 狀態 | 證據 |
|---|---|---|---|
| `create-event-main-category-module` | 此頁面相關 Core 元件屬於資料庫管理模組，Page Type 為 Create。 | `observed` | `create-event-main-category-step-1`～`step-4-*` |
| `create-event-main-category-responsive` | 相關 Step 元件提供 PC／Tablet 與 Mobile 版型。 | `observed` | 各 Component Set 的 `device` Variant |
| `create-event-main-category-uses-step-flow` | 此頁面應由 Step 1～4 組成單一新增流程。 | `inferred` | canonicalId、nodeName 與 functionSummary 的連續 Step 命名 |
| `create-event-main-category-primary-role` | 此頁面的主要使用角色尚未確認。 | `unknown` | `PQ-0001` |
| `create-event-main-category-entry-permission` | 此頁面的進入方式與權限條件尚未確認。 | `unknown` | `PQ-0002` |
| `create-event-main-category-success-destination` | 新增成功後的導向與顯示結果尚未確認。 | `unknown` | `PQ-0003` |

## 關聯流程

- `create-event-main-category-flow`

## 關聯 Core 資產

- [`create-event-main-category-step-1`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-261138)
- [`create-event-main-category-step-2`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-261303)
- [`create-event-main-category-step-3`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-261899)
- [`create-event-main-category-step-4-upload-image`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-261451)
- [`create-event-main-category-step-4-image-list`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-261729)

## User Story 狀態

目前不能建立正式 User Story，因主要角色、進入條件與完成後結果尚未確認。AI 不得把「後台管理人員」等推測角色寫成正式規格。

## 尚未確認

- `PQ-0001`：主要使用角色。
- `PQ-0002`：進入方式與權限。
- `PQ-0003`：新增完成後的導向與結果。

## 生成資訊

- 生成方式：由 `core/v1.0/hub-manifest.json` 自動整理。
- 生成日期：2026-09-23。
- 所有內容尚未經產品 Owner 核准。

