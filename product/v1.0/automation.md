# Product Knowledge Automation Contract

AI 與自動化程式必須依此順序處理產品智庫：

1. 讀取 `core/v1.0/hub-manifest.json` 與 Shell Registry。
2. 依 module、pageType、canonicalFamilyId 與 Step 命名建立候選 Page／Flow 群組。
3. 只將直接存在於來源中的內容建立為 `observed` claim。
4. 推論必須建立為 `inferred` claim，包含 evidence 與 rationale。
5. 無證據或高風險欄位建立為 `unknown` claim，並連結 `open-questions.md`。
6. 將草稿加入 `review-queue.md`，不得自動核准。
7. 執行 `node scripts/validate-product-knowledge.mjs`。
8. 驗證通過後，草稿才可供 Bot 的測試環境檢索。

## 候選探索

執行：

```sh
node scripts/discover-product-knowledge-candidates.mjs
```

輸出：

- `product/v1.0/generated/draft-candidates.json`
- `product/v1.0/generated/draft-candidates.md`

候選探索只會依 canonicalId 的 Step 命名、canonicalFamilyId、Screen 與現有 metadata 分組。它不會建立正式 Page／Flow、不會修改 Catalog，也不會自動核准規格。

## Flow 草稿生成

先執行候選探索，再指定一個候選：

```sh
node scripts/generate-flow-draft.mjs --candidate edit-event-main-category-flow
```

輸出位於 `product/v1.0/generated/flow-drafts/`。草稿會自動建立：

- 每個索引資產的 `observed` claim。
- 一條等待人工確認的流程分組 `inferred` claim。
- 角色、權限、驗證、資料保存與送出結果等通用 unknown questions。

草稿不會自動修改 `page-catalog.json`、`open-questions.md` 或 `review-queue.md`。只有 AI 完成內容檢查並取得人工確認後，才可將草稿升級到正式 Product Knowledge。

## Bot 可回答範圍

- 一般模式：只可直接引用 `confirmed` 與 `observed`。
- 分析模式：可顯示 `inferred`，但必須明確標示為推測。
- `unknown`：必須拒絕猜測，回報 open question ID 與建議確認單位。
- `deprecated`：只可用於歷史說明，不得當成現行規格。

每個回答必須包含來源。沒有來源的 claim 不得進入一般回答。
