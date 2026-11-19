# Review Queue

> 只列出需要人工確認或 metadata 不完整的資產；結構性衝突同時列於 hub-manifest.json 的 audit。

- Errors: 0
- Warnings: 0
- 待人工確認資產: 0

## Library 調用檢查

- 匯出模式: 安全 Key 索引（不呼叫 Figma 發布狀態檢查，不會要求重複發布）
- fileKey: 可用
- Hub 標記為 component: 543
- 實際為 Figma Component / Component Set: 543
- 已取得 Library Key: 543
- 非原生元件容器: 0
- 缺少 Library Key: 0
- 發布狀態: 本次不檢查；請以 Figma「Review unpublished changes」面板為唯一真相

## 結構問題

- 無

## 待人工確認資產

### RQ-2026-09-22-01：patterns-bundle Evidence Key 過期

- 嚴重度：High
- 狀態：待修正匯出器
- 影響檔案：`core/v1.0/patterns-bundle.md`
- 影響範圍：目前含有 `Figma key=` 的 71 筆 Evidence 全部與同一資產的正式 Library Key 不一致。
- 正式 Key 來源優先順序：
  1. `hub-manifest.json`
  2. 各資產區塊的 `Library Key`
  3. Live Figma Main Component／Component Set Key
  4. Evidence 文字不得作為調用 Key
- 暫時處理：AI／MCP 遇到 Evidence Key 與正式 Key 不一致時，必須忽略 Evidence Key，並以 Manifest、Library Key 與 Live Figma 驗證結果為準。
- 修正方式：更新 Backoffice Design Hub Manager 匯出器，移除 Evidence 自由文字中的舊 `Figma key=`，避免同一資產存在第二份可過期的 Key。
- 驗收條件：
  - 重新匯出後，`patterns-bundle.md` 的 Evidence 不再包含自由文字形式的 `Figma key=`。
  - `hub-manifest.json` 與正式 `Library Key` 欄位維持不變。
  - AI／MCP 仍可透過 canonicalId 與正式 Library Key 正確調用元件。

### RQ-2026-11-17-01：帳號群組收錄後續整理

- 嚴重度：Medium
- 狀態：已完成（2026-11-18）
- 影響範圍：Hub `07_候選 / Candidate` 分區 297:2（帳號管理／角色管理／個人設定 Key Screens 收錄，共 98 個元件）
- 已完成：
  - 82 個元件正式命名為 `[canonicalId] 中文 / English`，status: candidate；其中 38 個取代舊版。
  - 38 個舊版（系統帳號 8/21 版）移到 `99_淘汰 / Deprecated`，manifest canonicalId 改為 `<id>--legacy-20260821`，aiUsage: blocked。
  - 屬性名稱統一：`Property 1`→狀態、`status`→狀態、`device`→裝置、`type`→分頁／類型。
- 處理進度：
  1. ✅ 16 個 `_重複/` 複本：逐組比對結構完全一致；36 個引用改指向正本（保留文字覆寫，例如「刪除角色」），複本已刪除，manifest 移除對應 `--dup-*` 紀錄。
  2. ✅ `role-details`（298:46673）：`device3`→`PC&Tablet`、`device4`→`Mobile`（依寬度 344／320 判定，皆為已停用狀態）。
  3. ✅ `類型17`：為 `類型=Down` 的完全複本且未被使用，已隨複本 298:45826 一起移除。
  4. ✅ 裝置值統一為半形 `PC&Tablet`（298:41960、298:42067、298:43316、298:45764）。
  5. ✅ 82 個元件升級為 approved（2026-11-18，Daigu 確認）：8 個共用模式移到 `03_共用模式`，74 個功能元件移到 `04_功能元件 · 分頁 6`，依 Hub 版型放在各自的 `[canonicalId]` 分區內；`07_候選` 原分區 297:2 已移除。
- 詳細對照表：Claude 專案文件 `claude/hub-intake-account-2026-11-17.md`。

### RQ-2026-11-19-01：跨站賠付報表元件同步回 Hub，交付稿改用 Hub

- 嚴重度：Medium
- 狀態：已完成（2026-11-19，Hub 已發布）
- 影響範圍：`cross-site-compensation-table-row`（308:26679）、`cross-site-compensation-review-confirm-dialog`（308:27347）、`cross-site-compensation-review-notice-dialog`（308:27363）；報表紀錄、報表查詢 Key Screens 🔖v0.1.1-20261116。
- Hub 修改：
  - 表格資料列：`背景=合計` 底色加深（base-alpha-5 覆蓋層不透明度 0.05→0.12），與資料列明顯區分；報表畫面不再使用 `背景=黑底` 交錯底色（變體保留以免影響其他檔案）。
  - 審核確認彈窗：新增 `裝置=Mobile`（320 寬，文字換行、帳期值換行）；`裝置=PC&Tablet` 高度改為內容自適應（352→312，移除按鈕下方空白）。
  - 審核提示彈窗：icon 改為對帳報表審核失敗用的紅色 ✕（Core `Navigation/close`，Error/error-600）；文字改套 Core 文字樣式（標題 Bold 700/11、說明 Medium 500/10）；新增兩個 `裝置=Mobile` 變體。
- 交付稿：
  - 報表紀錄：表頭 42、資料列 208、審核確認 11、審核提示 22，共 283 個實例由本地複本換成 Hub（逐一比對文字與尺寸）；4 組本地複本加上 `_封存/` 移入封存區。
  - 數據總覽（Tablet/Mobile）改用 Hub 元件內建第 3 列（`Show 總系統營收`）與 `device=Mobile` 變體，不再在實例外加框補列。
- 新候選元件（尚未收錄，🔖 定版後處理）：`跨站賠付報表審核資訊--Mobile`（待審核／已審核）、`提示--未計入局數--Mobile`、Mobile 審核按鈕 `botton`（報表紀錄本地）。
- 平台後台（報表查詢）：跨站賠付報表平台版已建立（單一站點、無合計列），userstory 註記與系統後台差異。

### RQ-2026-11-17-02：報表與事件設置收錄批次後續整理

- 嚴重度：Medium
- 狀態：大部分完成（2026-11-18）；剩第 5 項
- 影響範圍：Hub `07_候選 / Candidate` 三個收錄批次（報表查詢 平台後台、報表紀錄 系統後台、事件設置），原 108 個 candidate。
- 已完成：
  - 135 個貼入元件中，25 個與 Hub 現有元件或同批元件完全相同（含內部引用一致），268 處引用改指向正本後刪除複本。
  - 報表欄位標頭（平台 6 變體併入系統 11 變體）、報表編號與數值（兩份合成 21 變體）合併為單一版本。
  - 13 個交付稿較新版本取代 Hub 舊版（同樣的變體結構），舊版移到 `99_淘汰`，manifest canonicalId 為 `<id>--legacy-20261117`。
  - Core 選單：系統後台報表紀錄（事件損益查詢、投分歷史紀錄、對帳報表、跨站賠付報表）、資料庫管理加入圖片路徑管理、商戶服務更名為平台服務；平台後台報表查詢（事件報表、會員注單、對帳報表、跨站賠付報表）。平台選單元件更名為 `navigate--list-item--merchant-backend`。
- 處理進度（2026-11-18）：
  1. ✅ 未命名變體值已命名：
     - `event-report-l3-table-row`：屬性 `類型`→`背景`，`Default`／`類型2`→`白底`／`黑底`。
     - `report-identifier-and-value`：`類型18` 為未使用的空白變體，已刪除（剩 20 變體）。
     - `event-change-sport-type-filter`：`Property 1`→`運動類型`，值為籃球／棒球／足球／美式足球／冰上曲棍球。
     - `change-parameter-filter`：`Property 1`→`參數`，`Variant20–22`→`層級一／層級二／層級三`。
     - `event-change-data-cell`：`Variant4–6` 為重複變體，已刪除；`Property 1`→`異動動作`（更新／批次更新／新增）。
  2. ✅ 疑似重複比對：
     - 三份未上架事件其他操作彈窗合成一個 `unlisted-event-more-actions-dialog`（308:30829，名稱改為「事件其他操作彈窗」），變體為 `操作組合`（完整／結算／庫存／退款／上架／庫存／刪除）× `device`（PC&Tablet／Mobile）；308:30852、308:30875 已移除，manifest 以 aliases 保留舊 id。
     - `wager-setting-row-title` 與 `-b` 內容不同（Min／Max／Rate vs 選項名稱／初始價格），改名為 `netwin-setting-row-title`、`wager-options-row-title`，舊 id 留在 aliases。
     - `report-single-date-time` 與 `report-date-time`、`settlement-rate-table-label-cell` 與 `settlement-rate-table-cell`：內容相同但寬度不同（179／196、48／107），各自保留，差異寫在說明。
  3. ✅ `report-order-status-cell-desktop` 併入 `order-status-cell-desktop`（163:487291）：2 個引用改指向正本，保留中文標籤覆寫（已完成、失敗、錯誤、已取消）；308:25582 已刪除，aliases 保留舊 id。
  4. ✅ `create-event-wager-setting-step` 淘汰：移到 `99_淘汰`，canonicalId 改為 `create-event-wager-setting-step--legacy-20261118`，aiUsage: blocked，由 `rush-hour-wager-parameter-settings`（308:31101）取代。
  5. 🔄 交付稿改用 Hub 元件（Hub Manager v1.1.31–v1.1.33「換成 Hub」）：報表紀錄已完成（2026-11-18，1,827 個實例；另跨站賠付報表 283 個實例於 2026-11-19 換成 Hub，見 RQ-2026-11-19-01）。報表查詢 2026-11-18 已換 890 個（表頭 8021:8470 的 15 個除外）。事件設置、系統後台－登入、帳號管理待執行。
  6. ✅ 104 個元件升級為 approved（Daigu 確認）：17 個共用模式移到 `03_共用模式`，87 個功能元件移到 `04_功能元件 · 分頁 6／分頁 7`；`07_候選` 已清空。`event-card-review`（308:30937）因字型「FONTSPRING DEMO - Sinter Black」無法由外掛載入，需在 Figma 手動拖進 `04_功能元件 · 分頁 7` 已備好的同名分區。
