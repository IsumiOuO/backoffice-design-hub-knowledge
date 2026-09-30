const inventory = window.SPEC_HUB_INVENTORY;

if (!inventory?.specs) {
  document.body.innerHTML = `<main class="fatal-error"><h1>無法讀取規格資料</h1><p>請先執行 <code>npm run knowledge:spec-hub</code>。</p></main>`;
  throw new Error("SPEC_HUB_INVENTORY is missing");
}

const STATUS_ORDER = ["not-started", "ai-draft", "needs-review", "queryable", "product-confirmed", "dev-qa-ready"];
const STATUS_ICONS = {
  "not-started": `<circle cx="12" cy="12" r="9"/>`,
  "ai-draft": `<path d="m4 20 4.5-1 9-9-3.5-3.5-9 9zM13 7.5l3.5 3.5"/>`,
  "needs-review": `<path d="M12 3v9l5 3"/><circle cx="12" cy="12" r="9"/>`,
  queryable: `<path d="M4 6h16v12H4zM8 10h8M8 14h5"/>`,
  "product-confirmed": `<path d="m7 12 3 3 7-7"/><circle cx="12" cy="12" r="9"/>`,
  "dev-qa-ready": `<path d="m7 12 3 3 7-7"/><path d="M12 3 4 6v5c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6z"/>`,
};

const CUSTOM_ANSWER = "__custom__";
const PENDING_ANSWER = "__pending__";

const state = {
  view: "all",
  query: "",
  module: "all",
  status: "all",
  priority: "all",
  owner: "all",
  activeSpec: null,
  authoring: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function statusBadge(spec) {
  return `<span class="status-badge ${escapeHTML(spec.status)}"><i></i>${escapeHTML(spec.statusLabel)}</span>`;
}

function questionCount(value) {
  return `<span class="question-count ${value ? "has" : ""}"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.4 1-1.4 2M12 17h.01"/></svg>${value || "—"}</span>`;
}

function specIcon() {
  return `<span class="spec-icon"><svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg></span>`;
}

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(`${dateString}T00:00:00+08:00`));
}

function renderDashboard() {
  const total = inventory.specs.length;
  const queryable = inventory.specs.filter((spec) => spec.isQueryable).length;
  const questions = inventory.specs.reduce((sum, spec) => sum + spec.openQuestions, 0);
  const rate = total ? Math.round(queryable / total * 100) : 0;
  const counts = Object.fromEntries(STATUS_ORDER.map((status) => [status, inventory.specs.filter((spec) => spec.status === status).length]));

  const statusCards = STATUS_ORDER.map((status) => `
    <article class="summary-card ${state.status === status ? "is-selected" : ""}" data-status="${status}" tabindex="0">
      <span class="summary-icon"><svg viewBox="0 0 24 24">${STATUS_ICONS[status]}</svg></span>
      <span class="summary-label">${escapeHTML(inventory.statusDefinitions[status] ?? status)}</span>
      <strong class="summary-value">${counts[status] ?? 0}</strong>
    </article>
  `).join("");

  $("#dashboard").innerHTML = `
    <article class="summary-card total ${state.status === "all" ? "is-selected" : ""}" data-status="all" tabindex="0">
      <span class="summary-label">規格候選</span><strong class="summary-value">${total}</strong><span class="summary-note">以規格主題計算，不把 RWD／Theme variants 拆開</span>
    </article>
    <article class="summary-card" data-view-card="questions" tabindex="0">
      <span class="summary-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.4 1-1.4 2M12 17h.01"/></svg></span>
      <span class="summary-label">待確認事項</span><strong class="summary-value">${questions}</strong><span class="summary-note">來自已建立的正式規格</span>
    </article>
    <article class="summary-card progress-card">
      <header><span class="summary-label">可查詢進度</span><strong>${rate}%</strong></header>
      <div class="progress-track" role="progressbar" aria-label="可查詢進度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${rate}"><span style="width:${rate}%"></span></div>
      <span class="summary-note">${queryable} / ${total} 份已可供查詢</span>
    </article>
    ${statusCards}
  `;

  $$("[data-status]", $("#dashboard")).forEach((card) => {
    const select = () => {
      state.status = card.dataset.status;
      $("#statusFilter").value = state.status;
      renderAll();
      $(".inventory-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    card.addEventListener("click", select);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(); }
    });
  });
  $("[data-view-card='questions']")?.addEventListener("click", () => selectView("questions"));
}

function populateFilters() {
  const modules = [...new Set(inventory.specs.map((spec) => spec.module))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  const owners = [...new Set(inventory.specs.map((spec) => spec.owner))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  $("#moduleFilter").innerHTML = `<option value="all">所有模組</option>${modules.map((module) => `<option value="${escapeHTML(module)}">${escapeHTML(module)}</option>`).join("")}`;
  $("#ownerFilter").innerHTML = `<option value="all">所有 Owner</option>${owners.map((owner) => `<option value="${escapeHTML(owner)}">${escapeHTML(owner)}</option>`).join("")}`;
  $("#statusFilter").innerHTML = `<option value="all">所有狀態</option>${STATUS_ORDER.map((status) => `<option value="${status}">${escapeHTML(inventory.statusDefinitions[status] ?? status)}</option>`).join("")}`;
}

function filteredSpecs() {
  const query = state.query.trim().toLocaleLowerCase("zh-Hant");
  return inventory.specs.filter((spec) => {
    const haystack = `${spec.title} ${spec.id} ${spec.module} ${spec.canonicalIds.join(" ")}`.toLocaleLowerCase("zh-Hant");
    const matchesView = state.view === "all"
      || (state.view === "p1" && spec.priority === "P1")
      || (state.view === "questions" && spec.openQuestions > 0)
      || (state.view === "mine" && inventory.currentUser && spec.owner === inventory.currentUser);
    return matchesView
      && (!query || haystack.includes(query))
      && (state.module === "all" || spec.module === state.module)
      && (state.status === "all" || spec.status === state.status)
      && (state.priority === "all" || spec.priority === state.priority)
      && (state.owner === "all" || spec.owner === state.owner);
  });
}

function renderList() {
  const specs = filteredSpecs();
  $("#resultCount").textContent = specs.length;
  $("#specTableBody").innerHTML = specs.map((spec) => `
    <tr data-spec-id="${escapeHTML(spec.id)}" tabindex="0" aria-label="查看 ${escapeHTML(spec.title)} 詳情">
      <td><div class="spec-name">${specIcon()}<span class="spec-title-wrap"><span class="spec-title">${escapeHTML(spec.title)}</span><span class="spec-id">${escapeHTML(spec.id)}</span></span></div></td>
      <td>${escapeHTML(spec.module)}</td>
      <td>${statusBadge(spec)}</td>
      <td><span class="priority-badge ${spec.priority.toLowerCase()}">${escapeHTML(spec.priority)}</span></td>
      <td>${escapeHTML(spec.owner)}</td>
      <td>${questionCount(spec.openQuestions)}</td>
      <td>${formatDate(spec.updatedAt)}</td>
      <td><button class="row-action" type="button" aria-label="查看 ${escapeHTML(spec.title)}"><svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg></button></td>
    </tr>
  `).join("");

  $("#mobileCards").innerHTML = specs.map((spec) => `
    <article class="mobile-card" data-spec-id="${escapeHTML(spec.id)}" tabindex="0">
      <div class="mobile-card-head"><div><h3>${escapeHTML(spec.title)}</h3><span class="spec-id">${escapeHTML(spec.id)}</span></div>${statusBadge(spec)}</div>
      <div class="mobile-card-grid">
        <div><span>模組</span><strong>${escapeHTML(spec.module)}</strong></div>
        <div><span>優先</span><strong><i class="priority-badge ${spec.priority.toLowerCase()}">${escapeHTML(spec.priority)}</i></strong></div>
        <div><span>待確認</span><strong>${questionCount(spec.openQuestions)}</strong></div>
        <div><span>最後更新</span><strong>${formatDate(spec.updatedAt)}</strong></div>
      </div>
    </article>
  `).join("");

  const empty = specs.length === 0;
  $("#emptyState").hidden = !empty;
  $(".table-wrap").hidden = empty;
  $("#mobileCards").hidden = empty;
}

function renderNavigation() {
  const labels = { all: "全部規格", p1: "P1 優先規格", questions: "待確認問題", mine: "我的規格" };
  const descriptions = {
    all: "從現有索引與規格狀態查看全後台進度",
    p1: "集中處理優先級最高的規格候選",
    questions: "查看已建立規格中仍缺少的產品決策",
    mine: inventory.currentUser ? `顯示 Owner 為「${inventory.currentUser}」的規格` : "尚未設定目前使用者與 Owner",
  };
  $("#listTitle").textContent = labels[state.view];
  $("#viewDescription").textContent = descriptions[state.view];
  $("#navAllCount").textContent = inventory.specs.length;
  $("#navP1Count").textContent = inventory.specs.filter((spec) => spec.priority === "P1").length;
  $("#navQuestionCount").textContent = inventory.specs.reduce((sum, spec) => sum + spec.openQuestions, 0);
  $("#navMineCount").textContent = inventory.currentUser ? inventory.specs.filter((spec) => spec.owner === inventory.currentUser).length : 0;
  $$("[data-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.view === state.view));
}

function renderAll() {
  renderNavigation();
  renderDashboard();
  renderList();
}

function selectView(view) {
  state.view = view;
  renderAll();
  $("#sidebar").classList.remove("is-open");
  $("#menuButton").setAttribute("aria-expanded", "false");
}

function openDetail(id) {
  const spec = inventory.specs.find((item) => item.id === id);
  if (!spec) return;
  state.activeSpec = spec;
  $("#detailModule").textContent = spec.module;
  $("#detailTitle").textContent = spec.title;
  $("#detailBadges").innerHTML = `${statusBadge(spec)}<span class="priority-badge ${spec.priority.toLowerCase()}">${escapeHTML(spec.priority)}</span>${spec.isQueryable ? `<span class="status-badge queryable"><i></i>可供團隊查詢</span>` : ""}`;
  $("#detailId").textContent = spec.id;
  $("#detailSpecPath").textContent = spec.specPath || "尚未建立";
  $("#detailSourceStatus").textContent = spec.sourceStatus;
  $("#detailOwner").textContent = spec.owner;
  $("#detailUpdated").textContent = formatDate(spec.updatedAt);
  $("#detailNextAction").textContent = spec.nextAction;
  $("#detailSummary").textContent = spec.summary;
  $("#canonicalCount").textContent = `${spec.canonicalIds.length} 個`;
  $("#canonicalList").innerHTML = spec.canonicalIds.map((canonicalId) => `<code>${escapeHTML(canonicalId)}</code>`).join("");
  $("#questionCount").textContent = `${spec.openQuestions} 項`;
  $("#questionList").innerHTML = spec.questions.length
    ? spec.questions.map((question) => `<li>${escapeHTML(question)}</li>`).join("")
    : `<li class="empty">${spec.specPath ? "此文件目前沒有可解析的待確認條目。" : "尚未建立正式規格，因此待確認問題也尚未整理。"}</li>`;
  const savedDraft = readAuthoringDraft(spec.id);
  $("#startAuthoringButton").textContent = savedDraft
    ? "繼續草稿"
    : (spec.specPath ? "編輯規格草稿" : "開始補規格");
  $("#viewIndexButton").href = spec.links.index;
  $("#viewHistoryButton").href = spec.links.history;
  $("#aiPanel").hidden = true;
  $("#aiHelpButton").textContent = "AI 協助補規格";
  $("#scrim").hidden = false;
  $("#detailDrawer").classList.add("is-open");
  $("#detailDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#closeDrawer").focus(), 30);
}

function closeDetail() {
  $("#detailDrawer").classList.remove("is-open");
  $("#detailDrawer").setAttribute("aria-hidden", "true");
  $("#scrim").hidden = true;
  document.body.style.overflow = "";
}

function makePrompt(spec) {
  const questions = spec.questions.length
    ? spec.questions.map((question, index) => `${index + 1}. ${question}`).join("\n")
    : "目前尚未整理具體問題，請根據來源索引找出需要人員決定的規則缺口。";
  return `你是一位產品規格整理助手。請協助補齊以下後台功能規格，但不得把推測寫成正式規則。\n\n【規格資料】\n名稱：${spec.title}\n規格 ID：${spec.id}\n模組：${spec.module}\n優先級：${spec.priority}\n目前狀態：${spec.statusLabel}\nSpec 路徑：${spec.specPath || "尚未建立"}\n來源 Index：${spec.sourceIndex}\n對應 canonicalIds：${spec.canonicalIds.join(", ")}\n\n【目前摘要】\n${spec.summary}\n\n【目前待確認】\n${questions}\n\n【下一步】\n${spec.nextAction}\n\n請依序完成：\n1. 根據既有證據整理已知內容；不要自行補產品規則。\n2. 找出權限、驗證、資料保存、錯誤處理、成功結果與邊界條件的缺口。\n3. 把每個缺口改寫成非工程人員可回答的簡單選擇題，提供 2–4 個互斥選項及「尚未決定」。\n4. 分開輸出「已確認內容」與「待確認問題」。\n5. 最後提供可貼回 Markdown 規格的草稿。`;
}

function detectSpecKind(spec) {
  const text = `${spec.id} ${spec.title}`.toLocaleLowerCase("zh-Hant");
  if (/(刪除|停用|啟用|delete|disable|enable)/.test(text)) return "destructive";
  if (/(新增|建立|create|add)/.test(text)) return "create";
  if (/(編輯|修改|更新|edit|update)/.test(text)) return "edit";
  if (/(列表|清單|管理|list|management)/.test(text)) return "list";
  return "general";
}

function question(id, title, description, recommended, alternatives) {
  return {
    id,
    title,
    description,
    recommended,
    options: [recommended, ...alternatives, "尚未決定，先保留為待確認事項。"],
  };
}

function authoringQuestions(spec) {
  const kind = detectSpecKind(spec);
  const accessRecommendation = kind === "list"
    ? "所有能登入後台的使用者都可以查看此功能。"
    : "只有具備對應管理權限的後台使用者可以操作。";
  const shared = [
    question(
      "access",
      "誰可以使用這個功能？",
      "先決定使用資格，之後才能補上角色與權限驗收條件。",
      accessRecommendation,
      ["所有能登入後台的使用者都可以操作。", "只有指定身份組可以使用。"],
    ),
    question(
      "data-scope",
      "使用者可以看到或操作哪些資料？",
      "資料範圍會影響查詢結果、權限檢查與測試案例。",
      "只顯示使用者被授權查看或操作的資料。",
      ["可以查看或操作全部資料。", "只能查看或操作自己建立的資料。"],
    ),
  ];

  if (kind === "list") {
    return [...shared,
      question("search", "搜尋要怎麼運作？", "包含搜尋欄位、觸發方式與關鍵字比對。", "輸入文字後約 0.5 秒自動搜尋，按下 Enter 時立即搜尋。", ["只有按下搜尋按鈕或 Enter 才搜尋。", "這個列表不需要文字搜尋。"]),
      question("default", "第一次進入列表要顯示什麼？", "預設條件會直接影響使用者第一眼看到的資料。", "預設顯示全部可見資料，不預先套用篩選條件。", ["沿用使用者上一次的搜尋與篩選條件。", "預設不顯示資料，必須先設定條件。"]),
      question("sort", "列表預設如何排序？", "若索引沒有足夠證據，可以先採用穩定且容易理解的規則。", "依主要識別欄位由小到大排列，支援欄位點擊切換排序方向。", ["依最後更新時間由新到舊排列。", "固定使用系統順序，不提供手動排序。"]),
      question("pagination", "一頁要顯示幾筆？", "先定義預設數量與可切換範圍。", "預設每頁 20 筆，可切換為 50 或 100 筆。", ["預設每頁 10 筆，可切換為 20 或 50 筆。", "不分頁，捲動時繼續載入。"]),
      question("actions", "每筆資料可以進行哪些操作？", "先決定列表層級的操作範圍，危險操作可留到詳細頁。", "列表提供查看與編輯；停用、刪除等高風險操作移到詳細頁。", ["列表直接提供全部操作。", "列表只提供查看，所有變更都在詳細頁完成。"]),
      question("empty", "載入中與查無資料時怎麼顯示？", "統一空狀態文字，避免每個功能各自發明。", "載入中顯示骨架；沒有符合資料時顯示「查無資料，請重新設定搜尋條件」。", ["載入中顯示轉圈；查無資料時只顯示「查無資料」。", "畫面保持空白，不另外顯示狀態。"]),
      question("failure", "列表載入或操作失敗時怎麼處理？", "錯誤後應讓使用者能恢復，不要遺失目前工作。", "顯示錯誤訊息與重新嘗試按鈕，並保留目前搜尋、篩選、排序及頁碼。", ["顯示錯誤訊息後回到預設列表。", "自動重新載入頁面。"]),
    ];
  }

  if (kind === "create" || kind === "edit") {
    const action = kind === "create" ? "新增" : "編輯";
    return [...shared,
      question("fields", `哪些資料是${action}時的必填欄位？`, "畫面已有明確必填標示的欄位可以先採用；沒有證據的欄位不要猜。", "依畫面上的必填標示執行；缺少證據的欄位保留為待確認。", ["所有畫面欄位都必填。", "所有欄位都可以不填。"]),
      question("validation", "欄位驗證失敗時怎麼顯示？", "錯誤要靠近問題欄位，並保留已輸入內容。", "在對應欄位下方顯示原因，保留其他已輸入內容並將焦點移到第一個錯誤。", ["只在頁面頂端顯示一則統一錯誤訊息。", "送出後清空全部欄位，讓使用者重新填寫。"]),
      question("duplicate", "資料重複時怎麼處理？", "名稱、代碼或帳號等唯一欄位通常需要清楚的衝突提示。", "禁止建立重複資料，並明確指出重複的欄位。", ["允許重複資料。", "顯示提醒，但仍允許使用者繼續送出。"]),
      question("success", `${action}成功後要去哪裡？`, "成功結果要讓使用者知道資料已保存，也能接續下一步。", "顯示成功訊息後回到列表，並保留能找到剛完成資料的條件。", ["顯示成功訊息並留在目前頁面。", "直接前往剛完成資料的詳細頁。"]),
      question("cancel", "有未儲存內容時離開怎麼處理？", "避免誤觸返回或關閉導致資料消失。", "若內容有變更，離開前顯示確認；沒有變更時直接離開。", ["一律直接離開並捨棄內容。", "自動保存草稿，下次開啟時恢復。"]),
      question("submitting", "送出期間畫面怎麼處理？", "避免重複送出與不確定是否正在處理。", "停用送出按鈕並顯示處理中狀態，完成前不可重複送出。", ["允許重複點擊送出。", "整頁改為不可操作的載入畫面。"]),
      question("failure", `${action}失敗時怎麼處理？`, "錯誤後保留內容，使用者才不需要重新填寫。", "顯示失敗原因並保留所有輸入內容，讓使用者修正或重新嘗試。", ["顯示錯誤後清空表單。", "自動返回列表，不保留內容。"]),
    ];
  }

  if (kind === "destructive") {
    return [...shared,
      question("target", "操作前要如何確認目標？", "高風險操作必須讓使用者清楚知道正在變更哪一筆資料。", "確認畫面顯示目標名稱、識別資訊與即將執行的動作。", ["只顯示通用確認文字。", "不顯示確認畫面，點擊後立即執行。"]),
      question("confirm", "是否需要再次確認？", "停用或刪除通常無法輕易還原，應降低誤觸風險。", "送出前必須再次確認；刪除時需輸入目標名稱。", ["只要按一次確認按鈕。", "不需要再次確認。"]),
      question("impact", "操作會影響哪些關聯資料？", "若目前沒有證據，不應自行假設級聯刪除規則。", "沒有證據的關聯影響先保留為待確認，不自動刪除其他資料。", ["一併刪除所有關聯資料。", "有關聯資料時一律禁止操作。"]),
      question("self", "使用者可以對自己執行這個操作嗎？", "避免使用者停用或刪除自己而失去後台存取。", "不可對目前登入者自己的帳號執行停用或刪除。", ["可以對自己的帳號執行。", "只有最高權限角色可以對自己執行。"]),
      question("audit", "是否需要留下操作紀錄？", "重要狀態變更應能追查操作者、時間與原因。", "記錄操作者、操作時間、目標、動作與結果。", ["只記錄成功操作。", "不需要額外操作紀錄。"]),
      question("success", "操作成功後要顯示什麼？", "完成後應更新畫面並讓使用者辨識結果。", "顯示成功訊息並重新取得最新資料。", ["顯示成功訊息後回到列表首頁。", "不顯示訊息，只更新資料。"]),
      question("failure", "操作失敗時怎麼處理？", "錯誤訊息要可理解，也要避免畫面顯示錯誤狀態。", "顯示失敗原因，不改變原資料，並提供重新嘗試。", ["只顯示「操作失敗」。", "自動重複送出直到成功。"]),
    ];
  }

  return [...shared,
    question("entry", "使用者從哪裡進入這個功能？", "入口會影響導覽、返回位置與權限檢查。", "從對應模組的列表或功能入口進入。", ["從全域導覽直接進入。", "只能透過其他流程自動進入。"]),
    question("inputs", "使用者需要提供哪些資料？", "沒有索引證據的欄位先不要自行補上。", "依畫面可見欄位收集資料；缺少證據的欄位保留為待確認。", ["不需要使用者輸入資料。", "所有相關資料都需要使用者手動輸入。"]),
    question("validation", "資料不符合規則時怎麼顯示？", "讓使用者知道問題位置與修正方式。", "在問題位置顯示明確原因，並保留其他已輸入內容。", ["只在頁面頂端顯示統一錯誤。", "不顯示原因，只禁止繼續。"]),
    question("success", "操作成功後要去哪裡？", "成功結果應清楚並能接續後續工作。", "顯示成功訊息後回到上一層，並呈現最新結果。", ["留在目前頁面。", "前往完成結果的詳細頁。"]),
    question("cancel", "中途離開時怎麼處理？", "避免尚未儲存的內容意外消失。", "若內容有變更，離開前顯示確認。", ["直接離開並捨棄內容。", "自動保存草稿。"]),
    question("loading", "處理期間畫面怎麼顯示？", "避免使用者重複操作。", "顯示處理中狀態，並暫停重複送出。", ["整頁顯示載入畫面。", "不顯示處理狀態。"]),
    question("failure", "載入或操作失敗時怎麼處理？", "保留現況並提供恢復方式。", "顯示失敗原因、保留目前內容並提供重新嘗試。", ["回到預設狀態。", "自動重新載入整頁。"]),
  ];
}

function authoringStorageKey(specId) {
  return `spec-hub-authoring:${specId}`;
}

function readAuthoringDraft(specId) {
  try { return JSON.parse(localStorage.getItem(authoringStorageKey(specId))) || null; }
  catch { return null; }
}

function saveAuthoringDraft() {
  const draft = state.authoring;
  if (!draft) return;
  draft.savedAt = new Date().toISOString();
  localStorage.setItem(authoringStorageKey(draft.spec.id), JSON.stringify({
    owner: draft.owner,
    purpose: draft.purpose,
    page: draft.page,
    answers: draft.answers,
    customAnswers: draft.customAnswers,
    manualMarkdown: draft.manualMarkdown,
    savedAt: draft.savedAt,
  }));
}

function openAuthoring(spec) {
  if (!spec) return;
  const saved = readAuthoringDraft(spec.id);
  const genericSummary = spec.summary.startsWith("尚未建立正式規格") ? "" : spec.summary;
  state.authoring = {
    spec,
    questions: authoringQuestions(spec),
    owner: saved?.owner || (spec.owner !== "未指派" ? spec.owner : inventory.currentUser) || "IsumiOuO",
    purpose: saved?.purpose || genericSummary,
    page: Number.isInteger(saved?.page) ? saved.page : 0,
    answers: saved?.answers || {},
    customAnswers: saved?.customAnswers || {},
    manualMarkdown: saved?.manualMarkdown || "",
    restored: Boolean(saved),
  };
  closeDetail();
  $("#authoringLayer").hidden = false;
  document.body.style.overflow = "hidden";
  renderAuthoring();
  setTimeout(() => $("#closeAuthoring").focus(), 30);
}

function closeAuthoring() {
  if (!state.authoring) return;
  saveAuthoringDraft();
  $("#authoringLayer").hidden = true;
  document.body.style.overflow = "";
  state.authoring = null;
}

function selectedAnswer(draft, currentQuestion) {
  const value = draft.answers[currentQuestion.id];
  if (value === CUSTOM_ANSWER) return draft.customAnswers[currentQuestion.id]?.trim() || "";
  if (!value || value === PENDING_ANSWER) return "";
  return value;
}

function pendingQuestions(draft) {
  return draft.questions.filter((item) => !selectedAnswer(draft, item));
}

function todayInTaipei() {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function ensureSentence(text) {
  const value = text.trim();
  return value && !/[。！？.!?]$/.test(value) ? `${value}。` : value;
}

function generateMarkdown(draft) {
  if (draft.manualMarkdown) return draft.manualMarkdown;
  const confirmed = draft.questions.map((item) => selectedAnswer(draft, item)).filter(Boolean);
  const pending = pendingQuestions(draft);
  const purpose = draft.purpose.trim() || `${draft.spec.title}的產品規格草稿；功能用途仍待補充。`;
  const sources = draft.spec.canonicalIds.map((id) => `- \`${id}\``).join("\n") || "- 目前沒有 canonicalId。";
  const rules = confirmed.length
    ? confirmed.map((answer, index) => `${index + 1}. ${ensureSentence(answer)}`).join("\n")
    : "目前沒有已確認規則。";
  const questions = pending.length
    ? pending.map((item) => `- ${item.title}`).join("\n")
    : "目前沒有產品規則待確認事項。";
  const checked = confirmed.length ? "x" : " ";

  return `# ${draft.spec.title}\n\n- 文件狀態：等待人工確認\n- 所屬模組：${draft.spec.module}\n- Owner：${draft.owner.trim() || "未指派"}\n- 最後更新：${todayInTaipei()}\n\n## 功能說明\n\n${ensureSentence(purpose)}\n\n## 規格來源\n\n- 來源 Index：\`${draft.spec.sourceIndex}\`\n- 規格 ID：\`${draft.spec.id}\`\n- 對應 canonicalIds：\n${sources}\n\n## 已確認規則\n\n${rules}\n\n## 待確認\n\n${questions}\n\n## 各單位可以先使用的資訊\n\n### 產品規劃\n\n- 可先依「已確認規則」進行流程與畫面確認。\n- 「待確認」內容在決策前不可視為正式產品規則。\n\n### 前端\n\n- 可先依索引與 canonicalIds 對照現有畫面元件。\n- 權限、驗證與錯誤狀態以本文件已確認內容為準。\n\n### 後端\n\n- API 路徑、Request／Response、錯誤碼與資料限制仍需在開發階段補充。\n\n### QA\n\n- 可將已確認規則轉成驗收案例。\n- 待確認內容不應先建立為固定驗收結果。\n\n## Review\n\n- [${checked}] 功能用途已填寫\n- [${checked}] 主要產品規則已整理\n- [${pending.length ? " " : "x"}] 待確認問題已處理\n- [ ] 畫面證據與連結已複核\n- [ ] API 與 QA 細節已補充\n`;
}

function renderAuthoring() {
  const draft = state.authoring;
  if (!draft) return;
  const lastPage = draft.questions.length + 1;
  const isIntro = draft.page === 0;
  const isPreview = draft.page === lastPage;
  const questionIndex = draft.page - 1;
  const currentQuestion = draft.questions[questionIndex];

  $("#authoringTitle").textContent = draft.spec.title;
  $("#authoringSubtitle").textContent = isPreview
    ? "確認內容後下載，或複製到 GitHub 建立正式規格。"
    : "回答簡單問題，產生可提交到 GitHub 的 Markdown。";
  $("#authoringStepLabel").textContent = isIntro ? "基本資料" : (isPreview ? "預覽與輸出" : `規則問題 ${questionIndex + 1} / ${draft.questions.length}`);
  $("#authoringProgressText").textContent = isIntro ? "步驟 1 / 3" : (isPreview ? "步驟 3 / 3" : "步驟 2 / 3");
  const progress = isIntro ? 12 : (isPreview ? 100 : 20 + Math.round((questionIndex + 1) / draft.questions.length * 65));
  $("#authoringProgressBar").style.width = `${progress}%`;
  $("#authoringBack").disabled = isIntro;
  $("#useRecommendation").hidden = isIntro || isPreview;
  $("#authoringNext").textContent = isIntro ? "開始回答" : (isPreview ? "保留草稿並關閉" : (draft.page === draft.questions.length ? "預覽規格" : "下一題"));

  if (isIntro) renderAuthoringIntro(draft);
  else if (isPreview) renderAuthoringPreview(draft);
  else renderAuthoringQuestion(draft, currentQuestion, questionIndex);
}

function renderAuthoringIntro(draft) {
  $("#authoringBody").innerHTML = `
    <div class="authoring-intro">
      <h3>先確認規格的基本資料</h3>
      <p>這裡只建立瀏覽器草稿，不會直接修改 GitHub。</p>
      ${draft.restored ? `<p class="draft-restored">已恢復這份規格上次未完成的草稿。</p>` : ""}
      <div class="draft-source-card">
        <div><span>規格名稱</span><strong>${escapeHTML(draft.spec.title)}</strong></div>
        <div><span>模組</span><strong>${escapeHTML(draft.spec.module)}</strong></div>
        <div><span>規格 ID</span><code>${escapeHTML(draft.spec.id)}</code></div>
        <div><span>來源 Index</span><code>${escapeHTML(draft.spec.sourceIndex)}</code></div>
      </div>
      <div class="field-stack">
        <label><span>Owner <em>*</em></span><input id="draftOwner" type="text" value="${escapeHTML(draft.owner)}" placeholder="例如：IsumiOuO" autocomplete="off"><small class="field-help">負責確認這份規格的人；不會建立另一套帳號資料。</small></label>
        <label><span>這個功能要解決什麼問題？</span><textarea id="draftPurpose" placeholder="用一至兩句白話描述功能用途。">${escapeHTML(draft.purpose)}</textarea><small class="field-help">不確定時可以先留白，草稿會標示待補充。</small></label>
      </div>
      <p class="authoring-saved-note">輸入內容會自動保存在這個瀏覽器。</p>
    </div>`;
  $("#draftOwner").addEventListener("input", (event) => { draft.owner = event.target.value; draft.manualMarkdown = ""; saveAuthoringDraft(); });
  $("#draftPurpose").addEventListener("input", (event) => { draft.purpose = event.target.value; draft.manualMarkdown = ""; saveAuthoringDraft(); });
}

function renderAuthoringQuestion(draft, currentQuestion, questionIndex) {
  const currentValue = draft.answers[currentQuestion.id] || "";
  const options = currentQuestion.options.map((option, index) => {
    const value = index === currentQuestion.options.length - 1 ? PENDING_ANSWER : option;
    return `<label class="answer-option ${currentValue === value ? "is-selected" : ""}">
      <input type="radio" name="authoringAnswer" value="${escapeHTML(value)}" ${currentValue === value ? "checked" : ""}>
      <span>${escapeHTML(option)}</span>${option === currentQuestion.recommended ? "<small>建議</small>" : ""}
    </label>`;
  }).join("");
  $("#authoringBody").innerHTML = `
    <div class="question-stage">
      <span class="question-kicker">第 ${questionIndex + 1} 題，共 ${draft.questions.length} 題</span>
      <h3>${escapeHTML(currentQuestion.title)}</h3>
      <p>${escapeHTML(currentQuestion.description)}</p>
      <div class="answer-options">${options}
        <label class="answer-option ${currentValue === CUSTOM_ANSWER ? "is-selected" : ""}">
          <input type="radio" name="authoringAnswer" value="${CUSTOM_ANSWER}" ${currentValue === CUSTOM_ANSWER ? "checked" : ""}>
          <span>其他，我要自行填寫</span>
        </label>
      </div>
      <div class="custom-answer" ${currentValue === CUSTOM_ANSWER ? "" : "hidden"}>
        <label for="customAnswer">自訂答案</label>
        <textarea id="customAnswer" placeholder="用白話寫下你決定的規則。">${escapeHTML(draft.customAnswers[currentQuestion.id] || "")}</textarea>
      </div>
      <p class="authoring-saved-note">不確定時選擇「尚未決定」，它會被保留在待確認清單。</p>
    </div>`;

  $$("input[name='authoringAnswer']", $("#authoringBody")).forEach((input) => input.addEventListener("change", (event) => {
    draft.answers[currentQuestion.id] = event.target.value;
    draft.manualMarkdown = "";
    saveAuthoringDraft();
    renderAuthoringQuestion(draft, currentQuestion, questionIndex);
    if (event.target.value === CUSTOM_ANSWER) setTimeout(() => $("#customAnswer")?.focus(), 20);
  }));
  $("#customAnswer")?.addEventListener("input", (event) => {
    draft.customAnswers[currentQuestion.id] = event.target.value;
    draft.manualMarkdown = "";
    saveAuthoringDraft();
  });
}

function renderAuthoringPreview(draft) {
  const markdown = generateMarkdown(draft);
  const answered = draft.questions.length - pendingQuestions(draft).length;
  $("#authoringBody").innerHTML = `
    <div class="preview-stage">
      <h3>規格 Markdown 已產生</h3>
      <p>你可以在送出前直接修改文字。修改只保存在這份瀏覽器草稿。</p>
      <div class="preview-summary">
        <div><span>已確認規則</span><strong>${answered} 項</strong></div>
        <div><span>待確認問題</span><strong>${draft.questions.length - answered} 項</strong></div>
        <div><span>正式檔案</span><strong>specs/${escapeHTML(draft.spec.id)}.md</strong></div>
      </div>
      <textarea class="markdown-preview" id="markdownPreview" aria-label="規格 Markdown 預覽">${escapeHTML(markdown)}</textarea>
      <div class="preview-actions">
        <button class="secondary-button" id="copyMarkdown" type="button"><svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>複製 Markdown</button>
        <button class="secondary-button" id="downloadMarkdown" type="button"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>下載 .md</button>
        <a class="secondary-button github-submit-button" id="openGithubEditor" href="${escapeHTML(draft.spec.links.edit)}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-3 17.5c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.8 8c-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8V20c0 .3.2.6.7.5A9 9 0 0 0 12 3Z"/></svg>複製並前往 GitHub</a>
      </div>
      <p class="authoring-saved-note">GitHub 是唯一正式資料來源；請在 GitHub 建立 Commit 與 Pull Request。</p>
    </div>`;
  $("#markdownPreview").addEventListener("input", (event) => { draft.manualMarkdown = event.target.value; saveAuthoringDraft(); });
  $("#copyMarkdown").addEventListener("click", () => copyMarkdown(draft));
  $("#downloadMarkdown").addEventListener("click", () => downloadMarkdown(draft));
  $("#openGithubEditor").addEventListener("click", () => { copyMarkdown(draft); });
}

async function copyMarkdown(draft) {
  const markdown = $("#markdownPreview")?.value || generateMarkdown(draft);
  draft.manualMarkdown = markdown;
  saveAuthoringDraft();
  try { await navigator.clipboard.writeText(markdown); }
  catch {
    const preview = $("#markdownPreview");
    preview?.select();
    document.execCommand("copy");
  }
  toast("Markdown 已複製");
}

function downloadMarkdown(draft) {
  const markdown = $("#markdownPreview")?.value || generateMarkdown(draft);
  const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${draft.spec.id}.md`;
  anchor.click();
  URL.revokeObjectURL(url);
  toast("Markdown 已下載");
}

function clearFilters() {
  Object.assign(state, { query: "", module: "all", status: "all", priority: "all", owner: "all" });
  $("#searchInput").value = "";
  $("#moduleFilter").value = "all";
  $("#statusFilter").value = "all";
  $("#priorityFilter").value = "all";
  $("#ownerFilter").value = "all";
  renderAll();
}

let toastTimer;
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("is-visible"), 2400);
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => { state.query = event.target.value; renderList(); });
  $("#moduleFilter").addEventListener("change", (event) => { state.module = event.target.value; renderList(); });
  $("#statusFilter").addEventListener("change", (event) => { state.status = event.target.value; renderAll(); });
  $("#priorityFilter").addEventListener("change", (event) => { state.priority = event.target.value; renderList(); });
  $("#ownerFilter").addEventListener("change", (event) => { state.owner = event.target.value; renderList(); });
  $("#clearFilters").addEventListener("click", clearFilters);
  $("[data-clear]").addEventListener("click", clearFilters);
  $$("[data-view]").forEach((button) => button.addEventListener("click", () => selectView(button.dataset.view)));
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-spec-id]");
    if (target) openDetail(target.dataset.specId);
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#searchInput").focus(); }
    if (event.key === "Escape") {
      if (state.authoring) closeAuthoring();
      else closeDetail();
    }
    const target = event.target.closest?.("[data-spec-id]");
    if (target && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openDetail(target.dataset.specId); }
  });
  $("#closeDrawer").addEventListener("click", closeDetail);
  $("#scrim").addEventListener("click", closeDetail);
  $("#menuButton").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("is-open");
    $("#menuButton").setAttribute("aria-expanded", String(open));
  });
  $("#startAuthoringButton").addEventListener("click", () => openAuthoring(state.activeSpec));
  $("#closeAuthoring").addEventListener("click", closeAuthoring);
  $("#authoringBack").addEventListener("click", () => {
    if (!state.authoring || state.authoring.page === 0) return;
    state.authoring.page -= 1;
    saveAuthoringDraft();
    renderAuthoring();
  });
  $("#useRecommendation").addEventListener("click", () => {
    const draft = state.authoring;
    if (!draft || draft.page < 1 || draft.page > draft.questions.length) return;
    const currentQuestion = draft.questions[draft.page - 1];
    draft.answers[currentQuestion.id] = currentQuestion.recommended;
    draft.manualMarkdown = "";
    saveAuthoringDraft();
    renderAuthoring();
    toast("已採用建議");
  });
  $("#authoringNext").addEventListener("click", () => {
    const draft = state.authoring;
    if (!draft) return;
    const lastPage = draft.questions.length + 1;
    if (draft.page === lastPage) {
      closeAuthoring();
      toast("草稿已保存在這個瀏覽器");
      return;
    }
    if (draft.page >= 1 && draft.page <= draft.questions.length) {
      const currentQuestion = draft.questions[draft.page - 1];
      if (!draft.answers[currentQuestion.id] || (draft.answers[currentQuestion.id] === CUSTOM_ANSWER && !draft.customAnswers[currentQuestion.id]?.trim())) {
        draft.answers[currentQuestion.id] = PENDING_ANSWER;
      }
    }
    draft.page += 1;
    saveAuthoringDraft();
    renderAuthoring();
    $("#authoringBody").scrollTop = 0;
  });
  $("#aiHelpButton").addEventListener("click", () => {
    const show = $("#aiPanel").hidden;
    $("#aiPanel").hidden = !show;
    $("#aiPrompt").value = makePrompt(state.activeSpec);
    $("#aiHelpButton").textContent = show ? "收起 AI Prompt" : "AI 協助補規格";
    if (show) setTimeout(() => $("#aiPanel").scrollIntoView({ behavior: "smooth", block: "nearest" }), 30);
  });
  $("#copyPrompt").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText($("#aiPrompt").value); }
    catch { $("#aiPrompt").select(); document.execCommand("copy"); }
    toast("Prompt 已複製");
  });
}

$("#githubButton").href = inventory.repository;
$("#baselineLabel").textContent = `基準 ${inventory.baselineVersion}`;
populateFilters();
bindEvents();
renderAll();
