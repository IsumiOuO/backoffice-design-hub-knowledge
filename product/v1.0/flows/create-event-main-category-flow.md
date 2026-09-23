---
schemaVersion: 1
knowledgeType: flow
flowId: create-event-main-category-flow
titleZh: 新增事件主類別流程
titleEn: Create Event Main Category Flow
moduleId: database-management
knowledgeStatus: draft
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedPageIds:
  - create-event-main-category
---

# 新增事件主類別流程

## 流程判定

索引具有連續的 Step 1～4 canonicalId 與 functionSummary，因此 AI 將它們整理為同一個候選流程。此分組目前為 `inferred`，在產品 Owner 核准前不得視為完整產品規格。

## 流程步驟

| Step | 索引可直接觀察的用途 | canonicalId | 可見 Variant |
|---:|---|---|---|
| 1 | 設定事件主類別名稱 | `create-event-main-category-step-1` | `device=PC&Tablet/Mobile`、`input=enable/error` |
| 2 | 選擇要掛載的事件次類別 | `create-event-main-category-step-2` | `device=PC&Tablet/Mobile`、`input=default/enable/error` |
| 3 | 設定發布介面 | `create-event-main-category-step-3` | `device=PC&Tablet/Mobile`、`input=default/enable/error` |
| 4A | 設定並上傳圖片 | `create-event-main-category-step-4-upload-image` | `device=PC&Tablet/Mobile`、`input=default/error/filled` |
| 4B | 顯示可用／已加入的圖片列表 | `create-event-main-category-step-4-image-list` | `device=PC&Tablet/Mobile`、`input=default/error/filled` |

## 已觀察 Claims

| Claim ID | 內容 | 狀態 |
|---|---|---|
| `create-main-category-step-1-purpose` | Step 1 是事件主類別名稱設定介面。 | `observed` |
| `create-main-category-step-2-purpose` | Step 2 是掛載事件次類別的選擇介面。 | `observed` |
| `create-main-category-step-3-purpose` | Step 3 是發布介面設定。 | `observed` |
| `create-main-category-step-4-purpose` | Step 4 同時具有圖片上傳與圖片列表內容。 | `observed` |
| `create-main-category-device-and-input-states` | 各步驟具有 PC／Tablet、Mobile 及多種 input state。 | `observed` |
| `create-main-category-ordered-exclusive-flow` | Step 1～4 應按順序呈現，且每個產品畫面只顯示一個作用中的 Step。 | `inferred` |

## AI 草稿 User Story

> 以下內容為 `inferred`，不是正式 User Story。

作為需要建立事件主類別的後台使用者，我希望依序設定主類別名稱、掛載次類別、選擇發布介面並設定圖片，以完成一筆事件主類別的建立。

推論來源：四個連續 Step 的 canonicalId 與 functionSummary。尚缺正式角色、成功結果與業務規則。

## 尚未確認的產品規則

| Question ID | 問題 | 建議確認單位 |
|---|---|---|
| `PQ-0004` | Step 2 是否可完全略過？掛載次類別是否有數量上限？ | 產品／開發 |
| `PQ-0005` | Step 3 是否允許 iframe 與 Widget 都不選？ | 產品／QA |
| `PQ-0006` | Step 4 圖片是否必填？格式、尺寸、容量與數量限制為何？ | 產品／開發／QA |
| `PQ-0007` | 返回前一步時，已輸入或已選擇的資料是否保留？ | 產品／開發 |
| `PQ-0008` | 關閉、取消或清空重填時，是否需要二次確認？ | 產品／設計 |
| `PQ-0009` | 按下新增後會建立哪些資料、何時生效、成功後導向哪裡？ | 產品／開發 |
| `PQ-0010` | `enabled-status-field` 是否屬於此流程；若是，應放在哪一步？ | 產品／設計 |
| `PQ-0011` | 各步驟的錯誤 Variant 分別由哪些驗證條件觸發？ | 產品／開發／QA |

## 驗收條件狀態

目前只能確認各步驟存在 `default`、`enable`、`error` 或 `filled` 等視覺狀態；尚無足夠證據將觸發條件寫成正式驗收條件。

## 來源

- `core/v1.0/hub-manifest.json`
- Figma Node `198:261138`
- Figma Node `198:261303`
- Figma Node `198:261899`
- Figma Node `198:261451`
- Figma Node `198:261729`

## 生成資訊

- 生成日期：2026-09-23。
- Review Status：`needs-review`。
- AI 未將任何 claim 標記為 `confirmed`。

