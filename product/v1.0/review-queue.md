# Product Knowledge Review Queue

> AI 產生的 Page／Flow 草稿必須在此排隊。AI 可以新增與更新待審項目，但只有指定 Reviewer 可以核准。

- Needs review: 4
- Approved: 0
- Rejected: 0

## 審核分工

- 設計：畫面文字、元件、狀態與操作是否與 Figma 一致。
- 產品：頁面目的、角色、業務規則與 User Story。
- 開發：資料行為、權限、API 與系統副作用。
- QA：驗收條件、錯誤狀態與邊界案例。

## 項目格式

- ID：`PKR-0001`
- 狀態：`needs-review`、`approved` 或 `rejected`
- 文件路徑
- AI 自動產生的內容摘要
- `observed` claim 數量
- `inferred` claim 數量
- `unknown` claim 數量
- 指定 Reviewer
- 審核紀錄

## PKR-0001 — 新增事件主類別頁面草稿

- 狀態：`needs-review`
- 文件：`product/v1.0/pages/create-event-main-category.md`
- 產生來源：`core/v1.0/hub-manifest.json`
- `observed`：2
- `confirmed`：1
- `inferred`：0
- `unknown`：3
- 指定 Reviewer：產品／設計／開發
- 審核紀錄：尚未審核。

## PKR-0002 — 新增事件主類別流程草稿

- 狀態：`needs-review`
- 文件：`product/v1.0/flows/create-event-main-category-flow.md`
- 產生來源：`core/v1.0/hub-manifest.json`
- `observed`：5
- `confirmed`：1
- `inferred`：0
- `unknown`：8
- 指定 Reviewer：產品／設計／開發／QA
- 審核紀錄：尚未審核。

## PKR-0003 — 編輯事件主類別頁面草稿

- 狀態：`needs-review`
- 文件：`product/v1.0/pages/edit-event-main-category.md`
- 產生來源：`core/v1.0/hub-manifest.json`、AI Flow 草稿與 2026-09-23 人工流程確認
- `observed`：2
- `confirmed`：2
- `inferred`：0
- `unknown`：4
- 指定 Reviewer：產品／設計／開發
- 審核紀錄：流程分組、互斥呈現與 Step 4 兩種狀態已由使用者確認；其他內容尚待審核。

## PKR-0004 — 編輯事件主類別流程草稿

- 狀態：`needs-review`
- 文件：`product/v1.0/flows/edit-event-main-category-flow.md`
- 產生來源：`core/v1.0/hub-manifest.json`、`product/v1.0/generated/flow-drafts/edit-event-main-category-flow.json` 與 2026-09-23 人工流程確認
- `observed`：5
- `confirmed`：2
- `inferred`：0
- `unknown`：7
- 指定 Reviewer：產品／設計／開發／QA
- 審核紀錄：流程分組、互斥呈現與 Step 4 兩種狀態已由使用者確認；角色、權限、驗證、資料保存與送出結果尚待審核。
