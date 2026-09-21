# Shell Review Queue

> 記錄 Constructor X - Core 共用 Shell 元件需要人工確認、修復或新增 Variant 的項目。本檔案由人工維護，不隨 Backoffice Core Hub 匯出流程覆蓋。

- Open: 0
- Approved: 0
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
