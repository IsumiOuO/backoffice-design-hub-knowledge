# Backoffice Design Hub — AI／MCP 生成規則

版本：v1.0.1

## 目的

本規則適用於 AI／MCP 根據 Backoffice Design Hub 索引生成 Figma 後台畫面。目標是優先重用既有元件、維持真正的 Library Instance 關係，並讓所有新元件都有明確理由與人工審核入口。

## 索引來源

AI／MCP 必須先讀取 Registry 總入口，再依需求讀取 Core、Foundation 與 Shell 索引。

- Registry 總入口：`registry/v1.0/library-registry.json`
- Core：`core/v1.0/hub-manifest.json`
- Core 人類可讀說明：`core/v1.0/*.md`
- Foundation 元件資料：`foundation/v1.0/foundation-library-components-v1.0.json`
- Foundation 人類可讀說明：`foundation/v1.0/foundation-shared-library-index-v1.0.md`
- 完整畫面 Shell 元件：`registry/v1.0/shell-component-registry.json`

當需求包含頂部導覽、側欄、側欄具名項目、麵包屑、頁面 Header、分頁或 Footer 時，必須讀取 Shell 元件索引，不得只依元件名稱猜測或自行繪製替代元件。

## 元件選用優先順序

1. 優先查詢 Core Hub，使用符合後台產品語意的 Core、shared-pattern 或 feature 元件。
2. 當需求包含完整畫面的框架結構時，先確認 Core 沒有相同語意元件，再依 `shell-component-registry.json` 使用頂部導覽、側欄、側欄具名項目、Breadcrumb、Header、Pagination 或 Footer。
3. 畫面中的 Button、Badge、Icon、Form 等最低單位元件，使用 Foundation 元件。
4. Core、Shell Registry 與 Foundation 都沒有符合需求的元件時，才可以建立新元件候選。

Shell Registry 是 Constructor X Foundation Library 的補充索引，不代表新增第三個 Library。AI／MCP 必須使用其中記錄的 `componentKey` 或 `componentSetKey` 建立真正的 Library Instance。

不得因為 Foundation 或 Shell 元件名稱比較接近，就跳過已存在且產品語意更精確的 Core 元件；也不得在 Shell Registry 已有對應元件時自行繪製替代版本。

## 正確重用的判定

- Core 元件必須依 `componentKey` 或 `componentSetKey` 建立真正的 Figma Instance。
- Foundation 元件必須依 Figma `key` 建立真正的 Figma Instance。
- 不得只參考截圖、顏色與尺寸後重畫相似外觀。
- 不得自動 Detach Instance。
- 不得複製或重建 Library 的 Main Component。
- 若 Key 插入失敗，必須回報「Library 尚未啟用、尚未發布或權限不足」，不得靜默改成自製元件。

## 代表畫面的使用方式

- `kind=screen` 的項目是設計參考，不是可跨檔插入的元件。
- 使用 `figmaUrl` 或 `nodeId` 定位代表畫面，理解資訊架構、版型與互動情境。
- 不得宣稱 Frame／Section 已作為 Library 元件重用。

## 流程型元件與互斥畫面狀態

當多個元件屬於同一個操作流程，且 `canonicalId`、功能說明或元件內容顯示它們是 Step 1、Step 2、Step 3 等連續階段時，應視為同一流程中的互斥畫面狀態，而不是可同時排列的內容區塊。

例如：

- `create-event-main-category-step-1`
- `create-event-main-category-step-2`
- `create-event-main-category-step-3`
- `create-event-main-category-step-4-upload-image`

生成規則：

1. 一個產品畫面 Frame 預設只能顯示一個目前作用中的 Step。
2. 需要呈現完整流程時，應建立多個相鄰 Frame 或 Prototype 狀態，每個 Frame 對應一個 Step。
3. 各 Step 畫面應維持相同的 Shell、Breadcrumb、Page Header 與內容寬度，只替換流程內容區的 Step Instance。
4. 不得把同一流程的所有 Step 垂直堆疊在同一個產品畫面中。
5. 只有需求明確指定「流程總覽」、「元件展示板」或「設計文件」時，才可以同時陳列多個 Step；此時必須標記為 `reference-only`，不得宣稱為實際產品畫面。
6. AI／MCP 無法判斷多個 Step 是否屬於同一流程時，必須停止組合並列入人工確認，不得自行猜測。

建議流程 metadata：

- `flowGroupId`：同一操作流程的穩定識別碼。
- `stepIndex`：流程順序，從 1 開始。
- `compositionMode`：流程型元件使用 `exclusive`。
- `initialDataPolicy`：初始資料策略，可使用 `published-default`、`empty`、`placeholder`、`example` 或 `prefilled`。

在正式 metadata 尚未補齊前，AI／MCP 必須綜合 `canonicalId`、`functionSummary`、步驟器文字與實際可見內容判斷；若證據互相衝突，交由人工確認。

## Published 預設值與初始資料

未收到產品需求指定值時，AI／MCP 必須保留所選 Published Component Variant 的實際預設內容與狀態，包括：

- 預設文字。
- 預設選取項目。
- 預設 Toggle／Checkbox／Radio 狀態。
- 預設可見／隱藏狀態。
- 預設 Variant 與巢狀 Instance Properties。

不得因內容看起來像範例資料，就自行清空、重新命名或改成推測的初始狀態。只有符合下列任一條件時才可覆寫：

1. 需求明確指定目標文字、選取狀態或初始值。
2. 智庫明確標記 `initialDataPolicy=empty`、`placeholder` 或其他不同策略。
3. 元件已公開對應 Property，且需求與索引能共同確認應使用的值。

若保留 Published 預設值，生成報告必須列出實際 Variant、重要 Component Properties，以及「保留 Published 預設值」的判定。不得為了取得空白狀態而 Detach Instance、修改 Library Master、建立本地副本或自行新增 Variant。

## 附屬元件的步驟歸屬

共用元件或 shared-pattern 不代表可任意插入任何 Step。AI／MCP 必須先依 `functionSummary`、`useWhen`、來源結構與既有巢狀關係判斷它所屬的流程位置。

若索引無法證明附屬元件屬於哪一個 Step：

- 不得自行選擇位置。
- 不得把它放在流程最下方或所有 Step 之外作為臨時處理。
- 應暫不加入生成畫面。
- 必須在生成報告與 `review-queue.md` 中記錄為「流程歸屬待確認」。

例如 `enabled-status-field` 若只有通用功能說明，卻沒有 `useWhen` 或 Step 歸屬資料，應先交由產品／設計確認，不得自行歸入 Step 1～4。

## 建立新元件的條件

只有下列情況才可以建立新元件：

- Core 沒有符合產品語意的元件。
- Foundation 沒有可組合滿足需求的基礎元件。
- 強行套用既有元件會造成錯誤語意、錯誤互動或無法滿足必要狀態。

建立新元件時必須一併輸出：

- 新元件名稱與用途。
- 找過哪些 Core／Foundation 候選。
- 既有候選無法使用的具體原因。
- 建議放入 Core、Foundation，或只保留為畫面內區域元件。
- 需要的 Variant、State、Device 與 Theme。

新元件一律先放在 AI Sandbox 的 `90_新元件候選`，不得直接發布到正式 Library。

## 共用層（shared-pattern）canonicalId 治理

適用範圍：`sourceLayer=shared-pattern` 的既有元件（03_共用模式 / Shared Patterns）。
不適用於 internal-core、vendor-core、feature、candidate、local。

### 新增

- 只有同一元件被 2 個以上不同 feature／family 重複使用時，才可收斂進 shared-pattern；
  單一 family 專屬的元件留在 feature 或 local 層，不得預先佔用 shared-pattern 的 canonicalId。
- 新增前必須先以 canonicalFamilyId 或功能語意搜尋 hub-manifest.json，
  確認不是既有 shared-pattern 元件的 Viewport／Theme／State 變體，避免語意重複建立。
- 一併記錄：語意用途、目前被哪些 family 使用、為何不適合留在 feature 層。

### 修改

- 修改 Variant Options、Component Properties 或視覺規格前，必須先用
  component-source-map.md 列出所有使用該 canonicalId 的 family，逐一確認不破壞既有畫面語意。
- 不得為單一 family 的特殊需求直接改動既有 Variant 定義；
  特殊需求應建立新的 Variant 值，或另立 feature 層元件，不得覆寫既有語意。
- 任何修改一律人工確認，不得由 AI 自動套用；確認後才更新 hub-manifest.json 與 Description。

### 棄用／降級

- component-source-map.md 顯示某 canonicalId 僅剩 1 個或 0 個 family 使用時，列為降級候選：
  降回 feature／local 層，或標記 `status=legacy`。
- 一律先移入 `99_淘汰 / Deprecated` 並標記 `aiUsage=blocked`，不得直接刪除 Figma 節點；
  舊 canonicalId 保留在 aliases 供追溯。
- 降級需在「遷移備註」說明原因，與功能說明分開填寫（見命名標準）。

### 命名衝突判定

- 兩個 shared-pattern 候選語意重疊時，以 canonicalFamilyId 是否相同為準：
  同一 family 只能有一組 canonicalId 家族；不同 family 即使名稱相似，也需用不同字首區分語意
  （例如 `event-` vs `account-`）。
- 無法用前綴區分的衝突，交由人工在 review-queue.md 標記待確認，AI 不得自行合併或保留。

### 升級為 internal-core 的條件

- 被 3 個以上不同產品模組（非同一模組的不同頁面）使用，且經過至少一次 migration 週期
  未變更 Variant 定義。
- 升級需人工審核，審核後才搬移至 `01_內部正式元件 / Internal Components`。

## 生成位置與修改限制

- AI 只可寫入專用的 AI Sandbox 測試檔。
- 不得直接修改 Core Library 或 Foundation Library 的 Main Component。
- 不得直接寫入正式產品設計稿。
- 不得刪除、搬移、重新命名既有 Library 元件。
- 正式收錄、發布或替換元件必須由設計師人工確認。

## 每次生成前的必要流程

1. 先讀取 `registry/v1.0/library-registry.json`，確認可用 Library、邏輯角色與所有主索引／補充索引。
2. 讀取 Core `hub-manifest.json`，依需求、功能說明、`canonicalId`、Component Properties 與 Variant Options 建立 Core 候選清單。
3. 若需求包含完整畫面框架，讀取 `shell-component-registry.json`，依 `assetId`、用途、`componentKey`／`componentSetKey` 與實際 Variant Options 建立 Shell 候選清單。
4. Core 與 Shell 無法滿足最低單位元件需求時，讀取 Foundation 索引，建立 Button、Badge、Icon、Form 等候選清單。
5. 生成前先提出「預計重用元件對照表」，至少列出來源層、識別碼、預計使用的 Variant，以及是否屬於共用層代用。
6. 在 AI Sandbox 建立畫面，不得直接修改已發布 Library 的主元件。
7. 完成後檢查所有應重用項目是否為真正的 Library Instance，並確認沒有被 Detach、沒有自行重畫已有元件。
8. 若 Core 元件存在 metadata 或結構問題，記錄到 `core/v1.0/review-queue.md`；若 Shell 元件缺少具名 Variant、公開 Property 或 Property 綁定異常，記錄到 `registry/v1.0/shell-review-queue.md`。只有 Core、Shell Registry 與 Foundation 全部查找失敗後，才能列為新元件候選。
9. 輸出重用報告、共用層代用報告與新元件候選報告。

## 生成完成後的回報格式

### 已重用 Core

- `canonicalId`
- Key
- 使用位置
- 選用的 Variant／Properties

### 已重用 Foundation

- 元件名稱
- Key
- 使用位置

### 新元件候選

- 名稱
- 用途
- 無法重用既有元件的原因
- 建議歸屬

### 問題與阻擋

- Library 未啟用
- Key 無法匯入
- 找不到必要 Variant
- 索引與 Figma 實際內容不一致

## 禁止事項

- 禁止只依名稱猜測元件。
- 禁止把不同 Key 的同名元件視為同一元件。
- 禁止自動新增 Variant 到正式 Library。
- 禁止為了完成畫面而隱藏重用失敗。
- 禁止在沒有說明原因的情況下建立新元件。
- 禁止將 `reference-only` 或 `blocked` 資產當成正式可用元件。

## 通用層(Constructor X - Core)治理

適用範圍：「Constructor X - Core」Library 提供的共用畫面框架元件，例如 Header、側欄導覽、側欄具名項目、Breadcrumb、Pagination 與 Footer。

這些 Figma 原生元件目前尚未具備 Backoffice Core 使用的 `canonicalId` 與 `status` metadata；但已透過 `registry/v1.0/shell-component-registry.json` 建立外部治理資料，提供穩定的 `assetId`、`aiUsage`、角色、Component Key、Component Set Key、Variant Options 與可覆寫 Properties。

AI／MCP 必須以 Shell Registry 為調用依據。這些元件仍不屬於 Core Hub 的 shared-pattern，因此不直接套用 shared-pattern 的 canonicalId 升降級流程。

### 識別方式

- 沒有 canonicalId 時，一律依 Figma 原生 `key`（Component／Component Set Key）
  建立真正的 Instance，比照 Foundation 層的作法；不得只憑名稱相似辨認元件。
- 每次生成前，先在 hub-manifest.json／pattern-index 檢查有沒有同語意的
  Core／shared-pattern 元件；只有確認完全沒有時，才落到 Constructor X - Core
  這一層。

### 具名 Variant 缺口的處理原則

- 若目標畫面在對應的版面樣板（header 類型、nav-item 項目等）沒有專屬具名
  Variant，允許先用最接近的泛用樣板覆寫文字內容頂替生成，不視為違規、不阻塞
  生成流程。這個容忍度高於 shared-pattern／feature 層元件。
- 覆寫文字頂替時，必須在生成報告中明確標記「共用層代用」：註明使用的泛用
  Variant 名稱、被頂替的具名需求、以及對應畫面。

### 具名 Variant 的正式申請流程

- 同一個具名需求（例如「事件主類別管理」需要自己的 header 類型）在
  `registry/v1.0/shell-review-queue.md` 累積達 2 次以上頂替紀錄時，視為正式申請候選，記錄：
  - 需要新增的具名 Variant 名稱與所屬元件
  - 目前用什麼泛用 Variant 頂替、頂替過幾次、涉及哪些畫面
  - 為什麼現有泛用樣板不足以承載（例如語意混淆、之後需要不同互動邏輯）
- 是否真的新增 Variant、由誰在 Constructor X - Core 裡建立，一律人工審核，
  AI 不得自行在這個 library 新增或修改 Variant。
- 申請通過後，才回頭在本文件或 naming-standard.md 補上這個 Variant 的
  functionSummary，讓未來查找時有紀錄可循。

### 與 shared-pattern 層的邊界

- 若某個 Constructor X - Core 元件開始被賦予產品語意（不再是純版面容器），
  應評估是否該遷入 Core Hub、走「共用層（shared-pattern）canonicalId 治理」
  的新增流程，而不是繼續留在無治理的 Constructor X - Core 裡累加特例。
