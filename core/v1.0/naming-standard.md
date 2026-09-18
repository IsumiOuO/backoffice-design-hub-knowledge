# 命名標準

> 由 Backoffice Design Hub Manager 產生。中文為主，canonicalId 供 AI / MCP / 工程引用。

Figma 圖層名稱固定為「`[canonicalId]` 中文 / English Name」；canonicalId 採 kebab-case、每個 Hub 節點各自唯一。元件（Component/Component Set）額外把 canonicalId 與功能說明寫進 Figma 原生 Description 欄位；代表畫面沒有原生 Description，功能說明只存在 pluginData 與匯出的 MD 索引中。

## Variant Property 命名與值域

建議使用的 Variant Property 名稱：

- `State`
- `Size`
- `Type`
- `Layout`
- `Theme`
- `Density`
- `Orientation`
- `Emphasis`

### 可跨元件共用的建議值

- `State`：default / hover / focus / active / selected / disabled / loading / error / empty / expanded / collapsed
- `Size`：sm / md / lg；若既有 Library 使用 Micro、Small、Default、Large 等值，保留既有值，不得由 AI 自動重新命名。
- `Theme`：light / dark；若使用 Figma Variables 控制 Theme，應以 Variable Mode 為準，不得額外建立重複 Variant。
- `Orientation`：horizontal / vertical
- `Density`：compact / default / comfortable

### 必須由各 Component Set 個別定義的值

`Type`、`Layout`、`Emphasis` 不設定全域合法值。

不同元件對這些 Property 的語意不同，合法值必須取自該 Component Set 實際匯出的：

- `componentProperties`
- `variantOptions`
- `defaultValue`

AI／MCP 不得將其他元件的 Type、Layout 或 Emphasis 值套用到目前元件，也不得自行發明不存在的 Variant 值。

### Header 類型

Header 的 `Type`／`類型` 必須以 Header Component Set 實際存在的 `variantOptions` 為準。

當目標頁面沒有對應的 Header 類型時：

1. 使用最接近的既有泛用 Variant。
2. 只覆寫可用的文字與 Boolean Properties。
3. 不得自行新增正式 Library Variant。
4. 在生成報告中標記為「共用層代用」。
5. 將缺少的具名類型記錄到 `review-queue.md`。

### Legacy Property 名稱

目前既有 Library 中可能存在中文或舊 Property 名稱，例如：

- `類型` → `Type`
- `裝置` → `Device`
- `狀態` → `State`
- `尺寸` → `Size`

這些映射只供 AI／MCP 理解與查找，不代表可以直接批次重新命名已發布 Library 的 Variant Property。正式重新命名必須經人工審核，並同步更新索引、既有 Instance 與遷移紀錄。

功能說明（`functionSummary`）與遷移備註（`aiReviewReason`）是兩個獨立欄位：前者是「這個畫面/元件在做什麼」，後者是「當初為什麼判斷成這個分類/action」，維護索引時請分開填寫，不要互相取代。
