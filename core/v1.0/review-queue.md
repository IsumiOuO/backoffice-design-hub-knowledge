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
- 狀態：大部分完成（2026-11-17）；剩第 5 項
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
  5. ⏳ 82 個 candidate 確認後升級為 approved。
- 詳細對照表：Claude 專案文件 `claude/hub-intake-account-2026-11-17.md`。
