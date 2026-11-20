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

### RQ-2026-11-20-01：帳號操作確認彈窗顯示帳號；帳號管理元件搬回原區

- 嚴重度：Low
- 狀態：已完成（2026-11-20，Hub 待發布）
- Hub `account-operation-result`（298:42115）：停用、刪除、重置雙重驗證的「再次確認」6 個變體（PC&Tablet、Mobile），在問句下方新增「帳號：<帳號>」一列（`account--dialog`，標籤 Semi Bold 600/11、帳號 Bold 700/11，顏色同問句），新增文字屬性 `帳號`（預設 account01）。高度各增加 24。
- 交付稿：帳號管理（FYHr8WnvbDSeUhvI3cQsiK）、平台帳號（FnuZ1PKedbDbMEVK3L02X6）的本地「新增&編輯&刪除狀態」（Light 與 Dark 複本）同樣修改；畫面內容組件與下方 Section 往下移，保持間距、無重疊。平台帳號另修正既有的 HM Section 重疊（修改密碼列下移 896）。個人設定的重置雙重驗證是本人操作，不加帳號。
- 帳號管理：2026-11-17 Hub 收錄時搬到「98_Hub 收錄｜帳號」頁的 98 個 Light 母元件，依各 Dark 區塊的相對位置搬回原本的元件／畫面內容組件 Light Section，暫存頁已刪除。無對照的 14 個：
  - 角色管理 8 個（權限已啟用數量、權限總覽、功能頁面、選單 各兩份）→ 表格元素--新增角色／編輯角色--Light（推定）
  - 彈窗-操作 → 平台角色管理列表--操作--Light
  - 標題項目 → 選擇角色--Light
  - 個人設定用的 帳號、Badge--platform/game provider type、雙重驗證狀態、重置雙重驗證-按鈕 → 個人設定頁新建「元件 > 表格元素--個人設定--Light」

### RQ-2026-11-19-02：Hub 事件列內層仍用舊版 event pic

- 嚴重度：Medium
- 狀態：已完成（2026-11-19，Hub 已發布並重跑）
- 影響範圍：事件設置 Key Screens 🔖v0.1.5-20260717 的「event list--已上架事件」8 個實例（保留本地）；Hub `event-table-thumbnail`（121:293686）及使用它的事件列元件。
- 說明：
  - 交付稿的事件圖片已是新版（`類型／收合狀態／時間狀態`，即 Hub `event-image-cell` 308:32748）；Hub 事件列內層仍是舊版 event pic（只有 `Property 1=topic/sport`，來源為外部 Library）。換成 Hub 後內層狀態對不上，插件保留本地。
  - 新版 `event-image-cell` 是 76×70 的整格，不是 60×60 的內層圖片，不能直接替換 `event-table-thumbnail` 的內層（2026-11-19 試過已還原）。要調整 Hub 事件列結構，改用新版事件圖片，再重跑事件設置 v0.1.5 頁。
- 同批另 1 個保留本地（「2.選擇事件結果」內層「結果比分輸入 狀態=尚未輸入」）由 Hub Manager v1.1.39 修正（還原內層時改用同組同名 variant），重跑事件結算頁即可。
- 事件設置 9 個有效頁上未被使用的本地母元件 53 個已加上 `_封存/` 前綴（不刪除、不搬移）。
- 處理（2026-11-19，Daigu 確認要換）：
  - 原因：Hub 事件列內層的 event pic 引用外部 Library（事件設置），不是 Hub 元件；換成 Hub 時插件把交付稿的本地 event pic 配對到舊版 `event-table-thumbnail`（只有 `Property 1=topic/sport`），內層狀態對不上。
  - Hub 5 個事件列元件內層共 26 個 event pic 改用 Hub `event-image-cell`（308:32748，同名 variant、圖層名維持 `event pic`、尺寸不變）：`desktop-published-event-row` 8、`desktop-unpublished-event-row` 10、`event-list-desktop` 4、`event-review-table-row` 3、`force-refund-event-display` 1。
  - 舊版 `event-table-thumbnail`（121:293686，Hub 內沒有元件使用）移到 `99_淘汰`，canonicalId 改為 `event-table-thumbnail--legacy-20261119`、aiUsage=blocked。
  - 結果：Hub 發布後以 Hub Manager v1.1.39 重跑，「event list--已上架事件」8 個、「2.選擇事件結果」1 個都已換成 Hub，保留本地 0 個。

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
- 新候選元件（尚未收錄，🔖 定版後處理）：`提示--未計入局數--Mobile`、Mobile 審核按鈕 `botton`（報表紀錄本地）。原 `跨站賠付報表審核資訊--Mobile` 已改用 Core header 內建列，候選元件移到封存區（見下方追加修改）。
- 平台後台（報表查詢）：跨站賠付報表平台版已建立，userstory 註記與系統後台差異（列表範圍見下方「規格對齊」）。
- 追加修正（2026-11-19，Daigu 指正）：
  - 系統後台：待審核時頁首不顯示審核人（36 處，含 User Flow 與元件展示），已審核才顯示審核人與審核時間。
  - 系統後台：「審核通過後」畫面與 User Flow「審核後」原為 8 月報表，與審核前（9 月）合計不一致；改為同一份 9 月報表（已審核，審核時間 2026/10/02 11:03:47 UTC+0），數據總覽、合計列與審核確認彈窗一致。
  - 平台後台：頁首只顯示報表名稱與月份（關閉審核資訊）；Mobile 頁首改 `裝置=Mobile` 並顯示返回鍵；Tablet／Mobile 表格底部橫向捲軸移回可視範圍；User Flow 下拉清單改為滿版、移除灰色圓點。
- 追加修改（2026-11-19，Hub 已發布）：
  - 審核確認、審核提示的 `裝置=Mobile` 變體按鈕改為滿版（`layoutSizingHorizontal=FILL`，兩顆按鈕平分），手機版按鈕比 PC／平板寬，屬 Daigu 規範。報表紀錄 39 個彈窗實例已更新並重新置中。
  - 「審核通過前，平台後台看不到這份報表」是規格書提示，不放進畫面：報表紀錄頁首 25 處隱藏（含孤立的「｜」6 處），`跨站賠付報表審核資訊--Mobile` 候選元件刪除該行並收緊間距（上 4／下 16，頁首 Head 下內距 0）。
  - Core `header 類型=通用, 裝置=Mobile` 在標題下方新增「審核人」列（新布林屬性 `Show 審核人--Mobile`，預設關閉，不影響既有手機畫面；值沿用 `審核人` 文字屬性），Daigu 確認並發布。跨站賠付手機版頁首改與對帳報表同排版：待審核＝標題／審核人（高 64），已審核＝標題／審核人／審核時間（高 84）；12 個畫面與 2 個元件展示已更新，候選 `跨站賠付報表審核資訊--Mobile` 移到封存區。
- 規格對齊（2026-11-19，依 Daigu 提供的規格書 wiki 與 WF-1～WF-4 逐項對照）：
  - 系統後台：
    - 待審核的報表不能匯出，42 個待審核畫面隱藏「匯出報表」；只有已審核能匯出（Excel 工作表「商戶彙總」，另帶帳期、審核人、審核時間）。
    - 已審核畫面也顯示未計入提示（6 處）。
    - 新增狀態：「空狀態 - 尚無報表」（月份選單無選項）、「空狀態 - 10月報表無交易」、「審核確認 - 審核成功」（Hub 審核提示彈窗新增 `階段=審核成功` 兩個變體 371:71／371:122）、「待審核 - 資料有誤不能審核」（Core Alert Type=Error，審核通過按鈕停用）。
    - userstory 改寫為版本 2：移除舊版幣別／匯率／淨輸贏內容，依規格寫月份選單、數據總覽、商戶彙總、審核與匯出。
    - 側欄帳號佔位字（name／mail／帳號類別）改為範例資料 admin01／Admin Group（24 處）。
  - 平台後台：
    - 列表與系統後台相同：列出這個平台所有站點（Alpha～Delta）並有合計列；不受站點限制。
    - 畫面不出現審核、未計入等字樣（平台不得知道報表由系統後台審核）；不做審核成功彈窗。
    - 空狀態與系統後台一致（尚無報表、所選月份無交易），月份選單無選項時的展示放在畫面內容組件。
    - 匯出工作表為「站點彙總」，不帶審核人、審核時間（Daigu 確認）。
    - userstory 補上角色權限（查看、匯出；最高管理員自動擁有）。
  - 無金額的欄位一律顯示「-」：Hub、規格書、設計稿一致（Daigu 確認，以 Daigu 規範為準）。

### RQ-2026-11-17-02：報表與事件設置收錄批次後續整理

- 嚴重度：Medium
- 狀態：已完成（2026-11-19）；換完後未使用的本地母元件尚未封存
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
  5. ✅ 交付稿改用 Hub 元件（Hub Manager v1.1.31–v1.1.39「換成 Hub」）：
     - 報表紀錄：已完成（2026-11-18，1,827 個實例；另跨站賠付報表 283 個實例於 2026-11-19 換成 Hub，見 RQ-2026-11-19-01）。
     - 報表查詢：已完成（2026-11-18 換 890 個；2026-11-19 再換 276 個，含表頭 8021:8470 的 15 個）。
     - 事件設置：已完成（2026-11-19 共 1,286 個；原保留本地 9 個已處理，見 RQ-2026-11-19-02；庫存管理頁沒有可換的實例）。
     - 資料庫管理（事件參數管理／參數類別／主類別／次類別）：已完成（2026-11-19，1,336 個）。
     - 系統帳號 - 帳號管理列表：已完成（24 個）。平台帳號 - 帳號管理列表：已完成（48 個）。
     - 平台服務 - 平台顯示/隱藏事件管理列表：已完成（42 個）。
     - 系統後台－登入、平台後台－登入、帳號管理 - 帳號管理列表：沒有待換的實例（0 個）。
     - 客服服務 - 會員訂單紀錄：已完成（347 個；其中 15 個尺寸不同，插件已重新排版）。
     - Hub 收錄來源的 9 份交付稿（另含兩份登入、平台帳號）都已執行，各檔保留本地 0 個。換完後沒有實例的本地母元件（emptiedOnActivePages）尚未加 `_封存/` 前綴。
  6. ✅ 104 個元件升級為 approved（Daigu 確認）：17 個共用模式移到 `03_共用模式`，87 個功能元件移到 `04_功能元件 · 分頁 6／分頁 7`；`07_候選` 已清空。`event-card-review`（308:30937）因字型「FONTSPRING DEMO - Sinter Black」無法由外掛載入，需在 Figma 手動拖進 `04_功能元件 · 分頁 7` 已備好的同名分區。
