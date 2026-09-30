# Product Knowledge / Spec Hub

Spec Hub 是 `specs/spec-status.json` 的瀏覽器介面。GitHub Repository 仍是唯一正式資料來源；這個介面不儲存另一份人工維護的規格。

除了盤點、搜尋與篩選，介面也提供「規格草稿工作區」：從規格詳情按下「開始補規格」，用簡單選項回答產品問題，最後產生可提交到 GitHub 的 Markdown。

## 使用方式

直接雙擊 `spec-hub/index.html` 即可離線開啟。也可以在 Repository 根目錄執行：

```sh
npm run spec-hub
```

然後開啟 `http://127.0.0.1:4173`。

## 更新資料

修改 `specs/spec-status.json` 或正式規格後，執行：

```sh
npm run knowledge:spec-hub
```

這會自動產生：

- `spec-hub/inventory.json`：供其他工具讀取。
- `spec-hub/inventory-data.js`：讓 `index.html` 可直接雙擊開啟，不受瀏覽器 `file://` 讀取 JSON 的限制。

請勿手動維護這兩個檔案。要檢查是否同步：

```sh
npm run knowledge:spec-hub:check
```

## 資料來源

- 規格候選、模組、狀態、優先級、canonicalIds：`specs/spec-status.json`
- 摘要、待確認問題、文件更新日期：各項 `specs/*.md`
- Index 入口：`core/v1.0/page-index.md`
- 人員閱讀總表：`specs/SPEC-MASTER-TRACKER.md`

## Owner

沒有 Owner 的項目會顯示「未指派」。可在任何 item 中加入：

```json
{
  "id": "create-account",
  "owner": "王小明"
}
```

重新產生 inventory 後，Owner 篩選與「我的規格」就能使用。目前 `currentUser` 設為 Repository Owner `IsumiOuO`；未來多人使用時可改接 GitHub 登入身分或團隊成員映射。

## 從後台補規格

1. 在規格列表選一筆尚未建立或需要補充的規格。
2. 按「開始補規格」或「編輯規格草稿」。
3. 填寫 Owner 與功能用途。
4. 逐題選擇答案；可按「採用建議」，不確定時選「尚未決定」。
5. 在最後一步檢查產生的 Markdown。
6. 下載 `.md`，或按「複製並前往 GitHub」貼到 GitHub 編輯器。
7. 在 GitHub 建立 Commit 與 Pull Request；合併後再執行 inventory 產生器更新後台。

草稿使用瀏覽器 `localStorage` 自動保存，僅供暫存，不是正式規格。清除瀏覽器網站資料會移除草稿；正式內容一律以 GitHub Repository 為準。

引導題會依規格名稱判斷列表、新增／編輯、高風險操作或一般功能，分別提供 9 題左右的基礎產品問題。建議選項只是起點，提交前仍需由 Owner 確認。

## GitHub Pages

`.github/workflows/spec-hub.yml` 會在 Pull Request 檢查 inventory、tracker 與知識庫驗證；合併到 `main` 後可部署 `spec-hub/` 到 GitHub Pages。

若 Repository 尚未啟用 Pages，請到 GitHub Repository 的 **Settings → Pages**，將 Source 設為 **GitHub Actions**。

## 編輯與 PR

詳情與草稿工作區提供以下 GitHub 銜接：

- 「複製並前往 GitHub」會先複製 Markdown，再開啟對應的新增或編輯頁。
- 已有正式規格：開啟該 MD 的編輯頁。
- 尚未建立規格：開啟建立檔案頁，預填建議檔名。
- 查看 Index：開啟 `core/v1.0/page-index.md`。
- 查看歷史：開啟對應 Spec；尚未建立時則查看 `spec-status.json` 的歷史。

GitHub 仍負責 Commit、版本紀錄與 Pull Request 審查。第一版刻意不在瀏覽器保存 GitHub Token，也不會自動把推測寫回正式規格。

## 下一階段：自動建立 PR

等手動流程穩定後，可新增一個最小後端或 GitHub App：

1. 使用 GitHub OAuth／App 登入，不把 Token 寫入前端檔案。
2. 接收草稿 Markdown，建立 `spec/<spec-id>` 分支。
3. 寫入 `specs/<spec-id>.md`，同步更新 `specs/spec-status.json`。
4. 執行 `npm run knowledge:validate`、inventory 與 tracker 檢查。
5. 通過後呼叫 GitHub API 建立 Pull Request。

GitHub Actions 繼續作為合併前的最後驗證；自動 PR 不會繞過審查。
