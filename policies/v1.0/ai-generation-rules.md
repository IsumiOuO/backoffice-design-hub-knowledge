# Backoffice Design Hub — AI／MCP 生成規則

版本：v1.0

## 目的

本規則適用於 AI／MCP 根據 Backoffice Design Hub 索引生成 Figma 後台畫面。目標是優先重用既有元件、維持真正的 Library Instance 關係，並讓所有新元件都有明確理由與人工審核入口。

## 索引來源

- Core：`core/v1.0/hub-manifest.json`
- Core 人類可讀說明：`core/v1.0/*.md`
- Foundation 元件資料：`foundation/v1.0/foundation-library-components-v1.0.json`
- Foundation 人類可讀說明：`foundation/v1.0/foundation-shared-library-index-v1.0.md`

## 元件選用優先順序

1. 優先查詢 Core Hub，使用符合後台產品語意的 Core 元件。
2. Core 沒有合適元件時，再查 Foundation／母元件庫，使用 Button、Badge、Icon、Form 等基礎元件。
3. Core 與 Foundation 都沒有符合需求的元件時，才可以建立新元件。

不得因為 Foundation 元件名稱比較接近，就跳過已存在且語意更精確的 Core 元件。

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

## 生成位置與修改限制

- AI 只可寫入專用的 AI Sandbox 測試檔。
- 不得直接修改 Core Library 或 Foundation Library 的 Main Component。
- 不得直接寫入正式產品設計稿。
- 不得刪除、搬移、重新命名既有 Library 元件。
- 正式收錄、發布或替換元件必須由設計師人工確認。

## 每次生成前的必要流程

1. 讀取 Core `hub-manifest.json`。
2. 依需求、功能說明、`canonicalId`、Component Properties 與 Variant Options 建立 Core 候選清單。
3. Core 沒有合適項目時，讀取 Foundation 索引並建立候選清單。
4. 先提出「預計重用元件對照表」，再開始生成。
5. 在 AI Sandbox 建立畫面。
6. 完成後檢查所有應重用項目是否為真正 Instance。
7. 輸出重用報告與新元件報告。

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
