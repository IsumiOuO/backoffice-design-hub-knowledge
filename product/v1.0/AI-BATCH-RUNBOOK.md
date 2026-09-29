# AI 批次規格執行手冊

這份手冊給具有 GitHub Repository 與 Figma 讀取工具的 AI 使用。一般對話 AI 若沒有這兩種工具，只能協助寫文字，不能自行取得最新索引或截圖。

## 目標

從 `core/v1.0/hub-manifest.json` 找出尚未進入簡版查詢的功能，自動建立：

- 白話規格草稿。
- 正式索引畫面截圖。
- 待確認事項。
- 給人工 Review 的簡短清單。

## 固定流程

1. 在 Repository 根目錄執行預覽：

   ```sh
   node scripts/generate-spec-batch.mjs
   ```

2. 產生草稿與截圖任務：

   ```sh
   node scripts/generate-spec-batch.mjs --write
   ```

3. 讀取 `product/v1.0/generated/batch-specs/screenshot-queue.json`。

4. 只處理 `status=pending` 的任務：

   - 使用任務提供的 `figmaFileKey` 與 `sourceNodeId`。
   - `directExport=true` 時，直接匯出該節點 PNG。
   - `directExport=false` 時，先依 `variantProperties` 找到 Component Set 的正確子元件，再匯出子元件；不得匯出整個 Component Set。
   - PNG 必須存到任務指定的 `outputPath`。
   - Figma 僅可讀取與匯出，不可修改、移動、Detach 或建立節點。

5. 視覺檢查每張圖片：

   - 不是空白畫面。
   - 裝置、主題與狀態符合任務。
   - 沒有誤抓 Component Set 全部 variants。
   - 若畫面本身有裁切或特殊旋轉，只記錄觀察，不自行修改設計稿。

6. 截圖完成後重新產生並要求全部完成：

   ```sh
   node scripts/generate-spec-batch.mjs --write --require-complete
   ```

7. 執行驗證：

   ```sh
   node scripts/validate-product-knowledge.mjs
   git diff --check
   ```

8. 將草稿交給人工 Review。沒有明確同意前，不得：

   - 移入正式 `specs/`。
   - 修改 `specs/query-index.json`。
   - 讓 Bot 把草稿當成正式答案。
   - 把「待確認」改寫成確定規則。

## 人工只需要檢查四件事

1. 圖片是否選對。
2. 功能名稱是否正確。
3. 一至兩句功能用途是否正確。
4. 有沒有把不確定的內容寫成已確認。

## 可直接交給 AI 的指令

```text
請在這個 Repository 執行 AI 批次規格流程：

1. 完整遵守 product/v1.0/AI-BATCH-RUNBOOK.md。
2. 先預覽，再產生草稿與 screenshot queue。
3. 只從 screenshot-queue.json 處理 status=pending 的任務。
4. 截圖必須來自任務指定的 Figma fileKey 與 nodeId，並存到 outputPath。
5. Figma 全程唯讀，不得修改任何節點。
6. 規格沒有證據時只能寫「待確認」，不得推測。
7. 完成後執行 --require-complete、產品智庫驗證與 git diff --check。
8. 回報新增草稿、截圖數量、仍待確認事項；不要自動發布正式規格。
```
