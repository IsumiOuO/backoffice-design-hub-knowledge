# 命名標準

> 由 Backoffice Design Hub Manager 產生。中文為主，canonicalId 供 AI / MCP / 工程引用。

Figma 圖層名稱固定為「`[canonicalId]` 中文 / English Name」；canonicalId 採 kebab-case、每個 Hub 節點各自唯一。

元件（Component／Component Set）額外把 canonicalId 與功能說明寫進 Figma 原生 Description 欄位；代表畫面沒有原生 Description，功能說明只存在 pluginData 與匯出的 Markdown／JSON 索引中。

## Variant Property 命名與值域

建議使用的 Variant Property 名稱：

- `State`
- `Size`
- `Type`
- `Layout`
- `Theme`
- `Density`
- `Orientation`
- `Device`
- `Emphasis`

以上名稱是新建或整理元件時的建議標準。既有已發布 Library 若使用其他名稱、中文名稱、大小寫或舊命名，不得由 AI／MCP 自動重新命名。

## 可跨元件共用的建議值

### State

建議值：

- `default`
- `hover`
- `focus`
- `active`
- `selected`
- `disabled`
- `loading`
- `error`
- `empty`
- `expanded`
- `collapsed`

若既有 Library 使用 `Default`、`Hover`、`Selected` 等不同大小寫，應保留該 Component Set 實際存在的值，不得由 AI 自動修改。

### Size

建議值：

- `sm`
- `md`
- `lg`

若既有 Library 使用 `Micro`、`Extra Micro`、`Small`、`Default`、`Large`、`Extra Large` 等值，應保留既有值與大小寫，不得由 AI 自動重新命名。

### Theme

建議值：

- `light`
- `dark`

若元件使用 Figma Variables 的 Variable Mode 控制 Theme，應以 Variable Mode 為準，不得再建立功能重複的 Light／Dark Variant。

若既有 Library 已同時使用 Theme Variant 與 Variable Mode，AI／MCP 必須依現有元件結構使用，不得自行合併、刪除或重新設計 Theme 機制。

### Orientation

建議值：

- `horizontal`
- `vertical`

若既有元件使用其他值，應以該 Component Set 實際存在的 `variantOptions` 為準。

### Device

建議值：

- `desktop`
- `tablet`
- `mobile`

若既有 Library 使用 `PC`、`Tablet`、`Mobile` 或其他既有值，應保留原有名稱、大小寫與語意，不得由 AI／MCP 自動重新命名。

Device 代表版面或裝置差異；若只需要控制水平／垂直排列，應使用 `Orientation`，不要使用 Device 取代 Orientation。

### Density

建議值：

- `compact`
- `default`
- `comfortable`

若既有 Library 沒有 Density Property，AI／MCP 不得只為了符合本命名標準而自行新增。

## 必須由各 Component Set 個別定義的值

`Type`、`Layout`、`Emphasis` 不設定全域合法值。

不同元件對這些 Property 的語意不同。例如 Header 的 Type、Button 的 Type、Dialog 的 Type，彼此不應共用同一份值域。

合法值必須取自該 Component Set 實際匯出的資料：

- Figma Component Set 的 `componentPropertyDefinitions`
- `hub-manifest.json` 匯出的 `componentProperties`
- 對應 Property 的 `variantOptions`
- 對應 Property 的 `defaultValue`

AI／MCP 不得：

- 將其他 Component Set 的 Type、Layout 或 Emphasis 值套用到目前元件。
- 自行發明不存在的 Variant 值。
- 因名稱相似就假設兩個 Property 的值可以互換。
- 自動替正式 Library 新增 Variant。
- 為了完成生成畫面而靜默使用錯誤 Variant。

當索引資料與 Figma 實際 Component Set 不一致時，以目前可讀取的 Figma Component Set 為確認依據，並將差異記錄到 `review-queue.md`，等待人工確認與重新匯出智庫。

## Header 類型

Header 的 `Type`／`類型` 必須以 Header Component Set 實際存在的 `variantOptions` 為準。

AI／MCP 不得因目標頁面名稱與 Header 標題文字相同，就假設 Header 一定存在對應的具名 Type Variant。

當目標頁面沒有對應的 Header 類型時：

1. 搜尋 Header Component Set 現有的 `variantOptions`。
2. 選擇語意與結構最接近的既有泛用 Variant。
3. 只覆寫該 Instance 已公開的 Text、Boolean 或 Instance Swap Properties。
4. 不得 Detach Instance。
5. 不得自行新增或修改正式 Library 的 Header Variant。
6. 在生成報告中標記為「共用層代用」。
7. 回報使用的實際 Variant、被代用的具名需求與使用畫面。
8. 將缺少的具名類型記錄到 `review-queue.md`。

若同一具名 Header 需求在 `review-queue.md` 累積達治理規則指定的申請門檻，才可列為新增 Variant 候選；是否建立仍須由人工審核。

## Legacy Property 名稱

既有 Library 中可能存在中文、舊版或不一致的 Property 名稱，例如：

- `類型` → `Type`
- `裝置` → `Device`
- `狀態` → `State`
- `尺寸` → `Size`
- `主題` → `Theme`
- `方向` → `Orientation`
- `排列` → `Layout`

這些映射只供 AI／MCP 理解、搜尋與產生報告，不代表可以直接批次重新命名已發布 Library 的 Variant Property。

AI／MCP 在操作既有 Instance 時，必須使用 Figma Component Set 實際存在的 Property 名稱與 Variant 值。例如元件目前使用 `類型`，就必須使用 `類型`，不能只因標準名稱是 `Type` 就直接改用 `Type`。

正式重新命名 Property 時必須：

1. 經過人工審核。
2. 檢查所有既有 Instance 與代表畫面。
3. 更新 `hub-manifest.json`。
4. 更新相關 Markdown 索引。
5. 更新 `legacy-naming-map.md`。
6. 在 `migration-history.md` 記錄修改原因與影響範圍。
7. 重新發布 Library。
8. 重新執行 AI／MCP 回歸測試。

## canonicalId 命名

canonicalId 必須：

- 使用 kebab-case。
- 使用英文小寫。
- 不使用空白。
- 不依賴顯示名稱或 Figma Page 名稱作為唯一識別。
- 在同一份 Hub 中保持唯一。
- 能描述穩定的功能語意，而不是暫時的畫面位置。

建議格式：

```text
功能範圍-元件用途
```

例如：

```text
event-main-category-search-filter
event-main-category-table-header
account-table-action-item
```

Viewport、Theme、State 等差異若屬於同一功能家族，應使用 `canonicalFamilyId` 建立關聯，不得只因外觀或裝置不同就當成完全無關的元件。

## 功能說明與遷移備註

功能說明 `functionSummary` 與遷移備註 `aiReviewReason` 是兩個獨立欄位。

### functionSummary

說明：

- 這個畫面或元件在做什麼。
- 使用者是誰。
- 解決什麼操作需求。
- 何時應該使用。

### aiReviewReason

說明：

- 為什麼被分類到目前的 sourceLayer。
- 為什麼保留、遷移、降級或標記為 legacy。
- AI 或人工當時判斷的依據。
- 有哪些待確認風險。

維護索引時必須分開填寫，不得讓遷移原因取代功能用途，也不得把功能用途寫成分類理由。

## AI／MCP 使用原則

AI／MCP 使用元件與 Variant 時必須：

1. 優先讀取 `hub-manifest.json`。
2. 依 `componentKey` 或 `componentSetKey` 建立真正的 Library Instance。
3. 讀取該元件實際存在的 Component Properties。
4. 只使用該 Component Set 實際存在的 `variantOptions`。
5. 保留既有 Property 名稱、值與大小寫。
6. 不得自行 Detach Instance。
7. 不得自行重新命名正式 Library 元件。
8. 不得為了完成畫面而靜默建立錯誤 Variant。
9. 找不到必要 Variant 時，必須回報缺口或依治理規則使用明確標記的代用方案。
10. 索引與 Figma 實際內容不一致時，必須記錄到 `review-queue.md`。
