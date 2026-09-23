---
schemaVersion: 1
knowledgeType: flow
flowId: single-parameter-update-flow
titleZh: 單一事件參數更新流程
titleEn: Single Parameter Update Flow
moduleId: event-settings
knowledgeStatus: partial
reviewStatus: needs-review
ownerTeam: ""
lastReviewedAt: ""
relatedPageIds:
  - single-parameter-update
---

# 單一事件參數更新流程

## 流程判定

索引具有連續的 Step 1～2 canonicalId 與 functionSummary。2026-09-23 已取得人工確認：兩個畫面屬於同一個循序更新流程，同一時間只呈現一個作用中的 Step。

## 流程步驟

| Step | 索引可直接觀察的用途 | canonicalId | 可見 Variant |
|---:|---|---|---|
| 1 | 編輯單一事件參數，索引摘要稱為「投分參數設定」 | `single-parameter-update-step-1` | `Property 1=PC&Tablet/Mobile` |
| 2 | 顯示更新後參數並提供確認步驟 | `single-parameter-update-step-2` | `Property 1=PC&Tablet/Mobile` |

## Claims

| Claim ID | 內容 | 狀態 |
|---|---|---|
| `single-parameter-update-step-1-purpose` | Step 1 是單一事件參數更新的編輯步驟，索引摘要記載為投分參數設定。 | `observed` |
| `single-parameter-update-step-2-purpose` | Step 2 是顯示更新後參數的確認步驟。 | `observed` |
| `single-parameter-update-ordered-exclusive-flow` | Step 1～2 按順序呈現，且一次只顯示一個作用中的 Step。 | `confirmed` |

## 可安全使用的流程摘要

此流程先讓使用者編輯單一事件參數，再顯示更新後參數供確認；兩個步驟不會同時作為作用中的畫面呈現。

這段摘要不宣稱特定角色、權限、欄位格式、驗證條件、保存機制或送出後的資料結果。

## 尚未確認的產品規則

| Question ID | 問題 | 建議確認單位 |
|---|---|---|
| `PQ-0026` | 「投分參數」的正式定義、可編輯欄位與允許值為何？ | 產品／開發 |
| `PQ-0027` | Step 1 的必填、格式、範圍與錯誤觸發條件為何？ | 產品／開發／QA |
| `PQ-0028` | 返回、關閉或取消時，已修改資料如何保存或還原？ | 產品／設計／開發 |
| `PQ-0029` | 確認送出後修改哪些資料、何時生效、是否有版本或併發限制？ | 產品／開發 |

## 驗收條件狀態

目前只能確認兩個步驟及其 Desktop／Mobile 視覺 Variant；索引沒有輸入狀態 Variant 或正式驗證規則，不能建立完整驗收條件。

## 來源

- `core/v1.0/hub-manifest.json`
- `product/v1.0/generated/flow-drafts/single-parameter-update-flow.json`
- Figma Node `121:294670`
- Figma Node `121:294469`

## 生成資訊

- 生成日期：2026-09-23。
- Review Status：`needs-review`。
- 流程分組與互斥呈現已於 2026-09-23 取得人工確認；其他產品規則仍未確認。
