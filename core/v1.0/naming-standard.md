# 命名標準

> 由 Backoffice Design Hub Manager 產生。中文為主，canonicalId 供 AI / MCP / 工程引用。

Figma 圖層名稱固定為「`[canonicalId]` 中文 / English Name」；canonicalId 採 kebab-case、每個 Hub 節點各自唯一。元件（Component/Component Set）額外把 canonicalId 與功能說明寫進 Figma 原生 Description 欄位；代表畫面沒有原生 Description，功能說明只存在 pluginData 與匯出的 MD 索引中。

Variant Property 建議：State / Size / Type / Layout / Theme / Density / Orientation / Emphasis。

Values：default / hover / focus / active / selected / disabled / loading / error / empty / expanded / collapsed / light / dark / sm / md / lg。

功能說明（`functionSummary`）與遷移備註（`aiReviewReason`）是兩個獨立欄位：前者是「這個畫面/元件在做什麼」，後者是「當初為什麼判斷成這個分類/action」，維護索引時請分開填寫，不要互相取代。
