# Shell Review Queue

> 記錄 Constructor X - Core 共用 Shell 元件需要人工確認、修復或新增 Variant 的項目。本檔案由人工維護，不隨 Backoffice Core Hub 匯出流程覆蓋。

- Open: 0
- Approved: 1
- Resolved: 1
- Rejected: 0

## SH-001 — Page Header：事件主類別管理

- 狀態：`resolved`
- 優先度：`medium`
- 解決日期：`2026-09-21`
- 來源資產：`shell-page-header`
- Figma 元件名稱：`header`
- Component Set Key：`45b40b38af0ddadde89c919857dc2de3e845fe55`
- 需求類型：泛用管理列表 Header／Property 綁定修正
- 採用方案：`類型=參數類別管理`、`裝置=PC`
- AI 使用狀態：`allowed-with-fallback`
- 結論：不新增 `事件主類別管理 / PC` Variant；使用既有泛用管理列表 Variant，透過公開 Properties 覆寫畫面語意與 CTA。

### 代用紀錄

1. 既存測試畫面 `10:338`
   - 使用：`新增事件主類別 / PC`
   - 問題：具備新增頁與返回頁語意，不適合作為管理列表頁 Header。

2. 回歸測試畫面 `25:1797`
   - 使用：`參數類別管理 / PC`
   - 結果：透過公開 Properties 可完整承載事件主類別管理列表頁。

### 修正前問題

1. `Show Back=false` 已寫入，但畫面仍顯示左側圓形返回控制。
2. 新增按鈕顯示「新增參數類別」，但 Header 未公開可覆寫的 CTA Text Property。
3. AI 不得為修正以上問題而 Detach Instance、修改內部圖層或建立另一套 Header。

### 解決紀錄

1. 將既有 `Show Back#8650:0` Boolean Property 正確綁定到完整的 `Secondary Button` 返回控制。
2. 將 `Primary Action Button` 公開為 Header 的巢狀 Instance Properties。
3. 主要 CTA 可透過 `Primary Action Button → Text#2343:0` 覆寫。
4. `參數類別管理 / PC` 已確認可作為泛用管理列表 Header。
5. Constructor X - Core Library 已重新發布。
6. AI Sandbox Frame `25:1797` 已接受 Library Update。
7. Header Instance `26:2116` 已完成唯讀驗證。
8. `shell-component-registry.json` 已更新 Property、使用規則與驗證日期。

### 已驗證設定

- `類型=參數類別管理`
- `裝置=PC`
- `title#8205:0=事件主類別管理`
- `Show Back#8650:0=false`
- `Show 新增事件#8213:0=true`
- `Primary Action Button → Text#2343:0=新增事件主類別`

### 回歸驗證結果

- Header Node ID：`26:2116`
- Main Component Key：`47f1809da940564a3032abf5db744c6d50ea68aa`
- Component Set Key：`45b40b38af0ddadde89c919857dc2de3e845fe55`
- Header 節點類型：`INSTANCE`
- Main Component／Owner：`remote=true`
- 本地 Component／Component Set：`0`
- Detach：`0`

### 驗收條件

- [x] `Show Back=false` 時畫面不顯示返回控制。
- [x] 主要 CTA 可顯示「新增事件主類別」。
- [x] Header 仍保持真正的 Library Instance。
- [x] 不需要 Detach 或修改 Instance 內部結構。
- [x] AI 能依 Registry 選出正確 Variant 與 Properties。
- [x] 不需要新增 `事件主類別管理 / PC` Variant。

## SH-002 — Sidebar：資料庫管理選取與展開狀態

- 狀態：`approved`
- 優先度：`medium`
- 驗證日期：`2026-09-23`
- 來源資產：`shell-sidebar-navigation`
- 關聯資產：`shell-sidebar-navigation-item`
- Figma 元件名稱：`navigate--開關--system-backend`
- Sidebar Component Set Key：`cf9cb28932a52a9220a359c1981455f7644708bc`
- Nav Item Component Set Key：`80e98814e055a0d9249ae1a7a736e9d93d19b94f`
- 需求類型：完整 Sidebar 的具名項目選取與展開狀態
- AI 使用狀態：`allowed-with-nested-override`

### 發現的問題

完整 Sidebar 使用：

- Main Component Key：`b1abe0acdb25787da157181a47b706d35d9a8f12`
- Variant：`Property 1=Select`

但匯入 Sandbox 後，內部「資料庫管理」項目仍為：

- Main Component Key：`29d15a1d1ac9319ac6e8d6ff18eb3fd494a71101`
- Variant：`Property 1=資料庫管理`

因此根 Sidebar 的 `Property 1=Select` 只會切換完整 Sidebar 容器狀態，不保證內部具名項目同步切換為選取狀態。畫面不會自動出現資料庫管理高亮與展開子項。

### 核准的安全組裝方式

需要顯示「資料庫管理」選取與展開狀態時：

1. 建立完整 `shell-sidebar-navigation` Library Instance。
2. 根 Sidebar 設為 `Property 1=Select`。
3. 在根 Sidebar Instance 內找到 Owner Component Set Key 為 `80e98814e055a0d9249ae1a7a736e9d93d19b94f`、目前 Variant 為 `Property 1=資料庫管理` 的巢狀 Instance。
4. 對該巢狀 Instance 執行 Variant Property Override：
   - Property：`Property 1`
   - Value：`資料庫管理 - Select`
5. 修正後的巢狀 Main Component Key 應為 `81b6470c9edf1b43690ac0a505508d5cfdf8b5ca`。
6. 根 Sidebar 與巢狀項目都必須保持 `INSTANCE`。

這是標準的 Instance Variant Override，不是 Detach、重畫、建立本地元件或修改 Library Master。

### 禁止事項

- 不得把獨立 nav-item 疊加在完整 Sidebar 上。
- 不得刪除或替換完整 Sidebar。
- 不得 Detach 根 Sidebar 或巢狀 nav-item。
- 不得只改文字冒充另一個導覽項目的語意。
- 不得使用 Registry 或即時 Component Set 中不存在的 Variant 值。
- 若找不到指定 Owner Key、Property 或合法值，必須停止並列入人工確認。

### 回歸驗證結果

冷啟動回歸 Page：

- Page ID：`66:7404`
- Page 名稱：`冷啟動回歸 · Generated Indexes v1.1.29`

已驗證四個 Sidebar 根 Instance：

- `77:2022`
- `77:2499`
- `77:2641`
- `77:2783`

四個根節點皆保持：

- 節點類型：`INSTANCE`
- Main Component Key：`b1abe0acdb25787da157181a47b706d35d9a8f12`
- Owner Component Set Key：`cf9cb28932a52a9220a359c1981455f7644708bc`
- Variant：`Property 1=Select`

四個巢狀資料庫管理項目皆成功設定為：

- 節點類型：`INSTANCE`
- Main Component Key：`81b6470c9edf1b43690ac0a505508d5cfdf8b5ca`
- Owner Component Set Key：`80e98814e055a0d9249ae1a7a736e9d93d19b94f`
- Variant：`Property 1=資料庫管理 - Select`

實際渲染結果：

- 資料庫管理顯示藍色選取狀態。
- 顯示展開箭頭。
- 展開顯示事件參數管理、參數類別管理、事件次類別管理與事件主類別管理。
- 本地 Component／Component Set：`0`
- Detach：`0`
- Library 修改：`0`
- 新建元件：`0`

### 母元件後續改善候選

以下任一方式可作為未來 Library 改善，但不阻擋目前 AI 生成：

1. 讓完整 Sidebar 的 `Property 1=Select` Variant 預設內嵌正確的具名 Select 項目。
2. 將目前選取項目公開為 Nested Instance Property／Instance Swap Property。
3. 為完整 Sidebar 增加明確的 Selected Item Property。

完成母元件改善並重新發布前，AI／MCP 應使用本紀錄核准的 nested Instance Variant Override。

### 驗收條件

- [x] 根 Sidebar 保持真正的 Library Instance。
- [x] 巢狀 nav-item 保持真正的 Library Instance。
- [x] 資料庫管理顯示選取與展開狀態。
- [x] 不需要 Detach。
- [x] 不需要建立本地 Sidebar 或 nav-item。
- [x] 不修改 Library Master。
- [x] 冷啟動生成可依 Key 與 Variant 完成。
- [ ] 母元件公開目前選取項目的正式 Property。
