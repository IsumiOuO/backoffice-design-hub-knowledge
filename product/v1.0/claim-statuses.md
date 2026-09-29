# Claim Statuses

每一條產品敘述都必須使用以下其中一個狀態。狀態描述的是單一 claim，不是整份文件。

| Status | 定義 | 可用證據 | Bot 回答方式 | 升級方式 |
|---|---|---|---|---|
| `confirmed` | 已由負責單位或正式規格確認 | 產品文件、程式／API 契約、Owner 確認紀錄 | 可作為正式規格回答 | 必須記錄 reviewer 與 reviewedAt |
| `observed` | 可直接從 Figma、元件 Property、畫面文字或程式行為看見 | Figma Node、Component Key、截圖、現行介面 | 必須表述為「目前畫面顯示」 | 經 Owner 確認後可升級 |
| `inferred` | 根據現有證據做出的合理推論 | 至少一項 evidence，並說明推論理由 | 一般模式不得當成事實；分析模式可明確標示推測 | 經 Owner 確認後才可升級 |
| `unknown` | 沒有足夠證據 | 可為空，但必須連結 open question | 明確回覆「目前無法確認」 | 補充證據並完成審核 |
| `deprecated` | 已知過時或不再適用 | 取代版本、棄用紀錄 | 不得當成現行規格 | 不可直接恢復，需重新審核 |

## Claim 最低欄位

```yaml
- id: stable-claim-id
  statement: 一條可獨立判斷真假的敘述
  status: observed
  evidence:
    - type: figma-node
      ref: "123:456"
      url: "https://www.figma.com/design/..."
  rationale: ""
  reviewer: ""
  reviewedAt: ""
  openQuestionId: ""
```

## 高風險內容

以下內容若沒有正式證據，預設必須是 `unknown`，不得只靠 Figma 畫面升級：

- 角色與權限。
- 後端資料寫入、刪除與同步行為。
- API、資料表與跨系統副作用。
- 必填、唯一性、長度與格式等驗證規則。
- 成功／失敗後導向與資料保存行為。
- 上線狀態、法遵、金流與敏感資料規則。

