# Backoffice Product Knowledge v1.0

本目錄保存跨團隊可查詢的頁面、流程與業務知識。它補充 Figma／Core 元件索引，但不取代 `core/v1.0`、`foundation/v1.0` 或 `registry/v1.0`。

## 資料分工

- `core/v1.0`：由 Figma Hub 匯出的設計資產事實，例如 canonicalId、Component Key、Variant 與 functionSummary。
- `registry/v1.0`：Shell 元件的調用與治理規則。
- `product/v1.0`：頁面目的、使用角色、操作流程、業務規則、User Story、驗收條件與尚未確認事項。

自動匯出流程不得覆寫 `product/v1.0`。AI 可以建立或更新草稿，但不得把推論直接標記成正式規格。

## 知識單位

- 一個產品頁面家族建立一份 Page Spec。
- 同一操作的多個步驟建立一份 Flow Spec，不為每個 Step 分別建立重複規格。
- Desktop、Tablet、Mobile、Theme、Modal、Empty、Loading、Error 等差異，記錄為同一 Page／Flow 的狀態或變體。
- 每一條可回答的敘述都必須具有 claim status 與 evidence；規則見 `claim-statuses.md`。

## AI 自動化邊界

AI 可以自動：

- 從 Figma 索引摘錄可見文字、步驟、元件、Variant、Node ID 與來源連結。
- 依 canonicalFamilyId、module、pageType 與流程命名建立草稿分組。
- 將直接可見內容標記為 `observed`。
- 將合理但未確認的判斷標記為 `inferred`。
- 將沒有證據的欄位標記為 `unknown`，並建立 open question。

AI 不得自動：

- 將 `observed` 或 `inferred` 升級為 `confirmed`。
- 推測角色權限、後端資料行為、驗證規則、錯誤處理或成功後副作用。
- 因欄位缺少資料而自行補出產品規格。
- 刪除仍未解答的 open question。

## 目錄

- `pages/`：頁面知識。
- `flows/`：跨步驟操作流程。
- `templates/`：人工與 AI 共用模板。
- `schemas/`：自動驗證用 JSON Schema。
- `page-catalog.json`：頁面與流程的總入口。
- `open-questions.md`：尚未確認的產品問題。
- `review-queue.md`：等待產品、設計、開發或 QA 審核的草稿。

## 建議工作流

1. AI 根據現有索引產生 `draft`。
2. 設計師確認 `observed` 畫面事實。
3. 產品確認目的、角色與業務規則。
4. 開發確認資料行為、權限與系統副作用。
5. QA 確認驗收條件、錯誤與邊界狀態。
6. 只有經指定 Owner 確認的 claim 才能改為 `confirmed`。
7. Telegram Bot 預設只把 `confirmed` 與 `observed` 當成可直接回答的事實。

