# Shell Review Queue

> 記錄 Constructor X - Core 共用 Shell 元件需要人工確認、修復或新增 Variant 的項目。本檔案由人工維護，不隨 Backoffice Core Hub 匯出流程覆蓋。

- Open: 1
- Approved: 0
- Resolved: 0
- Rejected: 0

## SH-001 — Page Header：事件主類別管理

- 狀態：`candidate`
- 優先度：`medium`
- 來源資產：`shell-page-header`
- Figma 元件名稱：`header`
- Component Set Key：`45b40b38af0ddadde89c919857dc2de3e845fe55`
- 需求類型：具名 Variant／Property 綁定檢查
- 目標需求：`類型=事件主類別管理`、`裝置=PC`
- 目前代用：`類型=參數類別管理`、`裝置=PC`
- AI 使用狀態：`allowed-with-fallback`

### 代用紀錄

1. 既存測試畫面 `10:338`
   - 使用：`新增事件主類別 / PC`
   - 問題：具備新增頁與返回頁語意，不適合作為管理列表頁 Header。

2. 回歸測試畫面 `25:1797`
   - 使用：`參數類別管理 / PC`
   - 問題：版面語意較接近管理列表頁，但操作內容仍不完全符合事件主類別管理需求。

### 已確認問題

1. `Show Back=false` 已成功寫入並讀回為 `false`，但畫面仍顯示左側圓形返回控制。
2. 新增按鈕顯示「新增參數類別」，但該文字沒有公開成可覆寫的 Text Property。
3. AI 不得為修正以上問題而 Detach Instance、修改內部圖層或建立另一套 Header。

### 建議處理順序

1. 檢查 `Show Back` Boolean Property 是否正確綁定到返回控制的可見性。
2. 將主要 CTA 文字公開為 Text Property，例如 `Primary Action Label`。
3. 確認 `參數類別管理 / PC` 是否可作為正式泛用管理列表 Header。
4. 若泛用 Variant 無法清楚承載語意，再新增 `事件主類別管理 / PC` 具名 Variant。
5. 修正或新增完成後，重新發布 Constructor X - Core Library。
6. 更新 `shell-component-registry.json` 的 Variant Options、Properties 與驗證日期。
7. 重新執行事件主類別管理回歸測試。

### 驗收條件

- `Show Back=false` 時畫面不顯示返回控制。
- 主要 CTA 可顯示「新增事件主類別」。
- Header 仍保持真正的 Library Instance。
- 不需要 Detach 或修改 Instance 內部結構。
- AI 能僅依 Registry 選出正確 Variant 與 Properties。
