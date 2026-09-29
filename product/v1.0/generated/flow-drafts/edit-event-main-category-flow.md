# 編輯事件主類別流程 — AI Draft

> 本文件由候選探索結果自動產生，不是正式產品規格，也不會自動加入 Page Catalog。

- Candidate：`edit-event-main-category-flow`
- 信心：`high`（只代表索引分組證據）
- Review：`unreviewed`

## 索引觀察

| Step | canonicalId | functionSummary | Node |
|---:|---|---|---|
| 1 | `edit-event-main-category-step-1` | 封裝編輯事件主類別第 1 步的名稱設定介面，顯示既有資料並依裝置與驗證狀態切換。 | [198:262047](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262047) |
| 2 | `edit-event-main-category-step-2` | 封裝編輯事件主類別第 2 步的掛載次類別選擇介面，依裝置與表單狀態切換。 | [198:262198](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262198) |
| 3 | `edit-event-main-category-step-3` | 封裝編輯事件主類別第 3 步的發布介面設定，依裝置與 default／enable／error 狀態切換。 | [198:262590](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262590) |
| 4／image-list | `edit-event-main-category-step-4-image-list` | 封裝編輯事件主類別第 4 步的圖片列表介面，呈現既有／已新增圖片並依裝置與驗證狀態切換。 | [198:262491](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262491) |
| 4／upload-image | `edit-event-main-category-step-4-upload-image` | 封裝編輯事件主類別第 4 步的圖片上傳介面，讓管理人員調整既有主類別圖片並處理驗證狀態。 | [198:262322](https://www.figma.com/design/UX9EY190SGnpNiowHlwiUB?node-id=198-262322) |

## 流程推論

- `inferred`：Step 1、2、3、4 可能構成同一個循序且互斥呈現的流程。
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

