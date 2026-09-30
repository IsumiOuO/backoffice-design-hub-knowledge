# Product Knowledge / Spec Hub

Spec Hub 是 `specs/spec-status.json` 的瀏覽器介面。GitHub Repository 仍是唯一正式資料來源；這個介面不儲存另一份人工維護的規格。

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

目前 `spec-status.json` 還沒有 Owner。介面會先顯示「未指派」。未來可在任何 item 中加入：

```json
{
  "id": "create-account",
  "owner": "王小明"
}
```

重新產生 inventory 後，Owner 篩選與「我的規格」就能使用。`currentUser` 未來可在產生器中接 GitHub 登入身分或團隊成員映射。

## GitHub Pages

`.github/workflows/spec-hub.yml` 會在 Pull Request 檢查 inventory、tracker 與知識庫驗證；合併到 `main` 後可部署 `spec-hub/` 到 GitHub Pages。

若 Repository 尚未啟用 Pages，請到 GitHub Repository 的 **Settings → Pages**，將 Source 設為 **GitHub Actions**。

## 編輯與 PR

目前按鈕會前往 GitHub：

- 已有正式規格：開啟該 MD 的編輯頁。
- 尚未建立規格：開啟建立檔案頁，預填建議檔名。
- 查看 Index：開啟 `core/v1.0/page-index.md`。
- 查看歷史：開啟對應 Spec；尚未建立時則查看 `spec-status.json` 的歷史。

GitHub 仍負責 Commit、版本紀錄與 Pull Request 審查。AI 按鈕只產生可複製 Prompt，不會自動把推測寫回正式規格。
