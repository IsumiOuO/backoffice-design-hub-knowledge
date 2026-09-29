# 單一參數更新流程 — AI Draft

> 本文件由候選探索結果自動產生，不是正式產品規格，也不會自動加入 Page Catalog。

- Candidate：`single-parameter-update-flow`
- 信心：`high`（只代表索引分組證據）
- Review：`unreviewed`

## 索引觀察

| Step | canonicalId | functionSummary | Node |
|---:|---|---|---|
| 1 | `single-parameter-update-step-1` | 單一事件參數更新的編輯步驟，提供投分參數設定與 PC&Tablet/Mobile variants。 | [121:294670](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=121-294670) |
| 2 | `single-parameter-update-step-2` | 單一事件參數更新的確認步驟，顯示更新後參數並支援 PC&Tablet/Mobile。 | [121:294469](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=121-294469) |

## 流程推論

- `inferred`：Step 1、2 可能構成同一個循序且互斥呈現的流程。
- 理由：canonicalId、顯示名稱與 functionSummary 使用連續 Step 命名；仍需人工確認流程分組與實際導覽行為。

## 自動建立的待確認問題

| Key | 問題 | 建議確認 |
|---|---|---|
| `primary-role` | 哪些角色可以使用此流程？ | 產品／開發 |
| `entry-and-permission` | 流程從哪個頁面／操作進入，需要哪些前置條件與權限？ | 產品／開發 |
| `step-validation` | 各 Step 的必填、格式、數量與 error Variant 觸發條件為何？ | 產品／開發／QA |
| `data-retention` | 前後切換步驟、關閉或取消時，已修改資料如何保存或還原？ | 產品／開發 |
| `submit-result` | 送出後修改哪些資料、何時生效、成功後導向何處？ | 產品／開發 |

## 安全限制

- observed 只代表現有索引文字與 Variant 可直接證明的內容。
- 流程分組保持 inferred，必須人工確認後才能升級。
- 本草稿不推測權限、驗證、資料副作用或成功結果。
- 通過檢閱前不得供正式 Bot 當成產品規格回答。

