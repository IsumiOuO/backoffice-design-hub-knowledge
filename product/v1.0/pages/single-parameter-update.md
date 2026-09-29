---
schemaVersion: 1
knowledgeType: page
pageId: single-parameter-update
titleZh: 單一事件參數更新
titleEn: Single Parameter Update
moduleId: event-settings
knowledgeStatus: partial
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedFlowIds:
  - single-parameter-update-flow
---

# 單一事件參數更新

## 目前可確認

- 現有 Core 索引將相關元件歸在「事件設置」模組，頁面類型為 `List`。
- Step 1 與 Step 2 均提供 `PC&Tablet` 與 `Mobile` Variant。
- 2026-09-23 已取得人工確認：Step 1 與 Step 2 屬於同一個單一參數更新流程，且同一時間只呈現一個作用中的 Step。

## 頁面 Claims

| Claim ID | 內容 | 狀態 | 證據 |
|---|---|---|---|
| `single-parameter-update-module` | 此頁面相關 Core 元件屬於事件設置模組，Page Type 為 List。 | `observed` | `single-parameter-update-step-1`、`step-2` |
| `single-parameter-update-responsive` | 相關 Step 元件提供 PC／Tablet 與 Mobile 版型。 | `observed` | 各 Component Set 的 `Property 1` Variant |
| `single-parameter-update-uses-step-flow` | 此頁面由 Step 1～2 組成單一循序更新流程，且一次只顯示一個作用中的 Step。 | `confirmed` | canonicalId、functionSummary 與 2026-09-23 人工確認 |
| `single-parameter-update-primary-role` | 此頁面的主要使用角色尚未確認。 | `unknown` | `PQ-0023` |
| `single-parameter-update-entry-permission` | 此頁面的進入方式、可更新範圍與權限條件尚未確認。 | `unknown` | `PQ-0024` |
| `single-parameter-update-success-destination` | 更新成功後的導向與顯示結果尚未確認。 | `unknown` | `PQ-0025` |

## 關聯流程

- `single-parameter-update-flow`

## 關聯 Core 資產

- [`single-parameter-update-step-1`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=121-294670)
- [`single-parameter-update-step-2`](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=121-294469)

## User Story 狀態

目前不能建立正式 User Story，因主要角色、進入條件與更新後結果尚未確認。AI 可以描述已確認的兩步驟畫面流程，但不得自行解釋「投分參數」的正式業務定義。

## 尚未確認

- `PQ-0023`：主要使用角色。
- `PQ-0024`：進入方式、可更新範圍與權限。
- `PQ-0025`：更新完成後的導向與結果。

## 生成資訊

- 生成方式：由 `core/v1.0/hub-manifest.json` 與 AI Flow 草稿整理。
- 生成日期：2026-09-23。
- Step 1～2 的流程分組與互斥呈現已於 2026-09-23 取得人工確認。
- 角色、權限、欄位規則、驗證與更新後系統行為仍未經產品 Owner 核准。
