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

const state = {
  view: "all",
  query: "",
  module: "all",
  status: "all",
  priority: "all",
  owner: "all",
  activeSpec: null,
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
  $("#editSpecButton").href = spec.links.edit;
  $("#editSpecButton").textContent = spec.specPath ? "編輯規格" : "建立規格";
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
    if (event.key === "Escape") closeDetail();
    const target = event.target.closest?.("[data-spec-id]");
    if (target && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openDetail(target.dataset.specId); }
  });
  $("#closeDrawer").addEventListener("click", closeDetail);
  $("#scrim").addEventListener("click", closeDetail);
  $("#menuButton").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("is-open");
    $("#menuButton").setAttribute("aria-expanded", String(open));
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
