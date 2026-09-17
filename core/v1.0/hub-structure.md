# Hub Structure

> 由 Backoffice Design Hub Manager 產生。中文為主，canonicalId 供 AI / MCP / 工程引用。

- 00_說明 / Guide — `guide`
- 01_內部正式元件 / Internal Components — `internal-core`
- 02_頁面模板 / Page Templates — `page-template`
- 03_共用模式 / Shared Patterns — `shared-pattern`
- 04_功能元件 / Feature Components — `feature`
- 05_代表畫面 / Reference Screens — `reference-screen`
- 06_待整理 / Intake — `intake`
- 07_候選 / Candidate — `candidate`
- 99_淘汰 / Deprecated — `deprecated`

## 這份索引怎麼讀、怎麼維護
### 欄位字典（給人看，也給 AI/MCP 看）
| 欄位 | 意思 |
|---|---|
| canonicalId | 這個 Hub 節點的唯一識別碼，一個節點只會有一個，kebab-case。 |
| canonicalFamilyId | 同一個代表畫面/元件的「家族」id——同一家族底下可能有 Desktop/Tablet/Mobile、Light/Dark 等多個 canonicalId 各自獨立的 variants，想找「這個東西的其他版本」就用這個欄位查。 |
| functionId / variantKey | functionId 指向穩定功能家族；variantKey 固定為 `viewport|theme|state`，可直接檢查同一家族是否重複或缺漏。 |
| role | `product-screen`、`supporting-artifact`、`container` 或 `component`，避免流程圖／規格／外框被當成產品頁。 |
| confidence / evidence / reviewStatus | AI 判斷信心、依據與是否需要人工確認；低信心項目集中列在 review-queue.md。 |
| kind | `screen`（代表畫面）或 `component`（元件）。 |
| figmaType / componentKey / componentSetKey | Figma 原生節點類型與已發布 Library 的調用 Key；跨檔建立真正 Instance 時優先使用 Key，不以名稱猜測。 |
| publishStatus / published | 安全匯出固定為 `NOT_CHECKED` / `null`，避免觸發大型 Library 重算；發布狀態以 Figma Library 面板為準。 |
| componentProperties / variantOptions | Figma 原生 Component Property 定義、預設值與全部合法 Variant 值，AI 設定 Instance 時不得自行發明值。 |
| 功能說明 | 這個畫面/元件實際在做什麼、給誰用——白話文，是本索引裡「AI 能不能看懂你在幹嘛」最關鍵的欄位。 |
| 遷移備註 | 當初 GPT／人工判斷要保留、遷移、標記成 legacy 等的理由，跟「功能說明」是兩件事，不要混用。 |
| sourceLayer / status | 資產分層（internal-core/vendor-core/shared-pattern/feature/candidate/local）與目前狀態（approved/candidate/legacy/deprecated）。 |
| aiUsage | AI 使用資格：`allowed` 可正式採用；`reference-only` 只能拿來理解需求與比對；`blocked` 不得拿來生成正式設計。以 family 為單位批次維護。 |
| aliases | 舊名稱或其他關聯資產的備註，不會回頭改寫舊設計稿本身。 |
### 在 Figma 裡怎麼認出一個節點
- 圖層名稱固定是 `[canonicalId] 中文名 / English Name`——在 Figma 圖層面板或任何只讀節點名稱的工具（例如透過 Figma MCP 查詢設計檔的 AI）都看得到這個 canonicalId，可以直接拿它回來這份索引裡搜尋對應的完整說明。
- 每個「元件」（Component / Component Set，不含代表畫面）額外把 canonicalId 與功能說明寫進 Figma 原生的 Description 欄位（Dev Mode／Assets 面板看得到），不需要打開這份 MD 也能知道這個元件是做什麼的。
- 代表畫面沒有 Description 這個原生欄位，所以「功能說明」目前只會出現在圖層名稱旁的這份 MD 索引裡，找代表畫面的功能說明請直接來這份文件搜尋 canonicalId。
### 之後要怎麼補上或修改一個功能說明（不需要懂程式）
1. 回到來源檔或 Hub，找到「06_待整理 / Intake」流程，或直接在 Hub 裡選取要修改的資產所在的來源批次重新走一次「掃描 Intake」。
2. 在插件的「整理預覽與命名映射」畫面，找到對應的項目，在「功能說明」欄位填寫或修改白話文說明。
3. 按「套用整理」——插件會同步更新圖層名稱、pluginData，以及（元件的話）Figma 原生 Description。
4. 回到「智庫輸出」按「匯出 Hub 智庫」，重新產生 Markdown 與 hub-manifest.json，取代舊版本。
5. 若資產已經在 Hub 裡且不想重跑 Intake，也可以直接在 Figma 選取該元件、在右側面板編輯 Description——但這樣只會更新 Figma 端，記得同時回來這份 MD 索引手動同步文字，或找懂插件的人重新匯出。
### 給 AI / MCP 的使用原則
- `hub-manifest.json` 是機器可讀的完整真相來源；Markdown 是由同一批 records 產生的人類閱讀檢視，`review-queue.md` 只列需要處理的錯誤、警告與低信心項目。
- 純粹透過 Figma MCP 讀取設計檔只能看到圖層名稱裡的 canonicalId（和元件的 Description，如果有的話），看不到 pluginData，所以仍應搭配本智庫取得完整脈絡。
- 建議流程：先用 hub-manifest.json 或 Markdown 索引依關鍵字／canonicalId 找到資產與功能說明，再用 `Figma: page / node name / nodeId` 定位實際節點。
- 跨檔生成時先使用具有 `componentKey` 或 `componentSetKey` 的元件；實際建立 Instance 若失敗，應回報「Library 尚未啟用或尚未發布」，不可偷偷重建外觀。普通 Frame／Section 只能作參考。
- 資產優先序：internal-core → vendor-core → shared-pattern/feature → 全新自訂 UI；不得自行重建 vendor-core 的 Master。
- AI 只能把 `aiUsage=allowed` 的資產當成正式可用來源；`reference-only` 不得直接複製成正式畫面，`blocked` 必須完全排除。