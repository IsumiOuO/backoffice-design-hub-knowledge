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
