/* ═══════════════════════════════════════════════════════════
   app.js
   Main application: filter, search, sort, render,
   modal lifecycle, tab switching, toast, helpers
   ═══════════════════════════════════════════════════════════ */

const App = {

  /* ── State ────────────────────────────────────────────── */
  state: {
    diet:      'all',
    cuisine:   'all',
    sort:      'default',
    currentId: null
  },

  /* ── Initialise ───────────────────────────────────────── */
  init() {
    this._buildHeroGrid();
    this._buildMosaic();
    this.filterRecipes();          // initial render
    this._bindGlobalEvents();
    this._injectRecOptionStyles();
  },

  /* ── Hero grid (first 6 recipes) ─────────────────────── */
  _buildHeroGrid() {
    const el = document.getElementById('heroGrid');
    if (!el) return;
    el.innerHTML = RECIPES.slice(0, 6).map(r => `
      <div class="hgrid-card" onclick="App.openModal(${r.id})" style="background:${r.bg}" title="${r.name}">
        <span class="hgrid-emoji">${r.emoji}</span>
        <span class="hgrid-name">${r.name}</span>
      </div>`).join('');
  },

  /* ── About emoji mosaic ───────────────────────────────── */
  _buildMosaic() {
    const el = document.getElementById('emojiMosaic');
    if (!el) return;
    el.innerHTML = RECIPES.map(r =>
      `<div class="mosaic-item" onclick="App.openModal(${r.id})" title="${r.name}">${r.emoji}</div>`
    ).join('');
  },

  /* ── Global event bindings ────────────────────────────── */
  _bindGlobalEvents() {
    /* Close modal on overlay click */
    document.getElementById('overlay')?.addEventListener('click', e => {
      if (e.target === document.getElementById('overlay')) this.closeModal();
    });
    /* Escape key */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeModal();
    });
    /* Search clear button visibility */
    document.getElementById('searchInput')?.addEventListener('input', e => {
      const clr = document.getElementById('searchClear');
      if (clr) clr.style.display = e.target.value ? 'flex' : 'none';
    });
    /* Navbar scroll class */
    window.addEventListener('scroll', () => {
      document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  },

  /* ── Inject rec-option dynamic styles ─────────────────── */
  _injectRecOptionStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .rec-option {
        background: var(--bg); border: 1.5px solid var(--border);
        border-radius: 50px; padding: 7px 18px;
        font-size: .82rem; font-weight: 500; cursor: pointer;
        color: var(--text-mid); transition: all .18s;
      }
      .rec-option:hover { border-color: var(--primary); color: var(--primary); }
      .rec-option.rec-selected { background: var(--primary); border-color: var(--primary); color: #fff; }
    `;
    document.head.appendChild(style);
  },

  /* ════════════════════════════════════════════════════════
     FILTER, SEARCH & SORT
  ════════════════════════════════════════════════════════ */
  filterRecipes() {
    let list = [...RECIPES];
    const { diet, cuisine, sort } = this.state;
    const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();

    /* diet filter */
    if (diet !== 'all') list = list.filter(r => r.diet === diet);

    /* cuisine filter */
    if (cuisine !== 'all') list = list.filter(r => r.cuisine === cuisine);

    /* text search — name, cuisine, description, ingredients, tags */
    if (query) {
      list = list.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.cuisine.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        (r.tags || []).some(t => t.toLowerCase().includes(query)) ||
        (r.ingredients || []).some(i => i.toLowerCase().includes(query))
      );
    }

    /* sort */
    const sortVal = document.getElementById('sortSelect')?.value || sort;
    if (sortVal === 'rating')        list.sort((a, b) => b.rating - a.rating);
    else if (sortVal === 'time')     list.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortVal === 'calories') list.sort((a, b) => a.calories - b.calories);

    this._renderGrid(list);

    const cnt = document.getElementById('resultsCount');
    if (cnt) cnt.textContent = `Showing ${list.length} recipe${list.length !== 1 ? 's' : ''}`;
  },

  /* ── Set diet chip ────────────────────────────────────── */
  setDiet(el) {
    this.state.diet = el.dataset.diet;
    document.querySelectorAll('#dietChips .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    this.filterRecipes();
  },

  /* ── Set cuisine chip ─────────────────────────────────── */
  setCuisine(el) {
    this.state.cuisine = el.dataset.cuisine;
    document.querySelectorAll('#cuisineChips .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    this.filterRecipes();
  },

  /* ── Clear search ─────────────────────────────────────── */
  clearSearch() {
    const inp = document.getElementById('searchInput');
    const clr = document.getElementById('searchClear');
    if (inp) inp.value = '';
    if (clr) clr.style.display = 'none';
    this.filterRecipes();
  },

  /* ── Reset all filters ────────────────────────────────── */
  resetFilters() {
    this.state.diet    = 'all';
    this.state.cuisine = 'all';
    this.state.sort    = 'default';

    const inp = document.getElementById('searchInput');
    const clr = document.getElementById('searchClear');
    const srt = document.getElementById('sortSelect');
    if (inp) inp.value = '';
    if (clr) clr.style.display = 'none';
    if (srt) srt.value = 'default';

    document.querySelectorAll('#dietChips .chip').forEach((c, i) => c.classList.toggle('active', i === 0));
    document.querySelectorAll('#cuisineChips .chip').forEach((c, i) => c.classList.toggle('active', i === 0));

    this.filterRecipes();
  },

  /* ════════════════════════════════════════════════════════
     RENDER GRID
  ════════════════════════════════════════════════════════ */
  _renderGrid(list) {
    const grid  = document.getElementById('recipeGrid');
    const noRes = document.getElementById('noResults');
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = '';
      if (noRes) noRes.style.display = 'flex';
      return;
    }
    if (noRes) noRes.style.display = 'none';
    grid.innerHTML = list.map(r => this._cardHTML(r)).join('');
  },

  /* ── Recipe card HTML ─────────────────────────────────── */
  _cardHTML(r) {
    const userAvg = Reviews.getAvgRating(r.id);
    const count   = Reviews.getCount(r.id);
    const displayRating = userAvg ? parseFloat(userAvg).toFixed(1) : r.rating.toFixed(1);
    const displayCount  = count ? `(${count})` : `(${r.ratingCount})`;

    const vegBadge = r.diet === 'veg'
      ? `<span class="diet-badge veg">🟢 Veg</span>`
      : `<span class="diet-badge nonveg">🔴 Non-Veg</span>`;

    return `
    <article class="recipe-card"
      onclick="App.openModal(${r.id})"
      role="button" tabindex="0"
      onkeydown="if(event.key==='Enter')App.openModal(${r.id})"
      aria-label="View ${r.name} recipe">
      <div class="card-thumb" style="background:${r.bg}">
        <span class="card-emoji">${r.emoji}</span>
        ${vegBadge}
        <span class="card-cuisine">${r.cuisine}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>⏱ ${r.time}</span>
          <span>👤 Serves ${r.servings}</span>
          <span>🔥 ${r.calories} kcal</span>
        </div>
        <h3>${r.name}</h3>
        <p class="card-desc">${r.description}</p>
        <div class="card-footer">
          <div class="card-rating">
            <span class="stars">★</span> ${displayRating}
            <span class="rating-count">${displayCount}</span>
          </div>
          <span class="card-diff diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
        </div>
        <div class="card-origin">📍 ${r.origin}</div>
      </div>
    </article>`;
  },

  /* ════════════════════════════════════════════════════════
     MODAL
  ════════════════════════════════════════════════════════ */
  openModal(id) {
    const r = RECIPES.find(x => x.id === id);
    if (!r) return;
    this.state.currentId = id;

    const mi = document.getElementById('modalInner');
    if (mi) mi.innerHTML = this._modalShellHTML(r);

    const overlay = document.getElementById('overlay');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    this.switchTab('overview', id);
  },

  closeModal() {
    document.getElementById('overlay')?.classList.remove('open');
    document.body.style.overflow = '';
    this.state.currentId = null;
  },

  /* ── Modal shell (hero + header + tabs) ───────────────── */
  _modalShellHTML(r) {
    const userAvg       = Reviews.getAvgRating(r.id);
    const displayRating = userAvg ? parseFloat(userAvg).toFixed(1) : r.rating.toFixed(1);
    const reviewCount   = Reviews.getCount(r.id);

    const vegBadge = r.diet === 'veg'
      ? `<span class="diet-badge veg large">🟢 Vegetarian</span>`
      : `<span class="diet-badge nonveg large">🔴 Non-Vegetarian</span>`;

    return `
    <div class="modal-hero" style="background:${r.bg}">
      <span class="modal-emoji">${r.emoji}</span>
      <button class="modal-close" onclick="App.closeModal()" aria-label="Close recipe">✕</button>
    </div>

    <div class="modal-header">
      <div class="modal-title-row">
        <h2>${r.name}</h2>
        ${vegBadge}
      </div>
      <div class="modal-chips">
        <span class="mchip">🌍 ${r.cuisine}</span>
        <span class="mchip">⏱ ${r.time}</span>
        <span class="mchip">👤 Serves ${r.servings}</span>
        <span class="mchip red">🔥 ${r.calories} kcal</span>
        <span class="mchip green">📊 ${r.difficulty}</span>
        <span class="mchip amber">★ ${displayRating}</span>
        <span class="mchip">📍 ${r.origin}</span>
      </div>
    </div>

    <div class="modal-tabs" role="tablist">
      <button class="tab-btn" id="tab-overview"
        role="tab" onclick="App.switchTab('overview',${r.id})">📋 Overview</button>
      <button class="tab-btn" id="tab-ingredients"
        role="tab" onclick="App.switchTab('ingredients',${r.id})">🛒 Ingredients</button>
      <button class="tab-btn" id="tab-method"
        role="tab" onclick="App.switchTab('method',${r.id})">👨‍🍳 Method</button>
      <button class="tab-btn" id="tab-benefits"
        role="tab" onclick="App.switchTab('benefits',${r.id})">💚 Benefits</button>
      <button class="tab-btn" id="tab-reviews" role="tab"
        onclick="App.switchTab('reviews',${r.id})">
        💬 Reviews
        ${reviewCount ? `<span class="tab-badge">${reviewCount}</span>` : ''}
      </button>
    </div>

    <div class="modal-content" id="modalContent" role="tabpanel"></div>`;
  },

  /* ════════════════════════════════════════════════════════
     TAB SWITCHER
  ════════════════════════════════════════════════════════ */
  switchTab(tab, id) {
    const r = RECIPES.find(x => x.id === id);
    if (!r) return;

    /* update active tab button */
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tab}`)?.classList.add('active');

    const content = document.getElementById('modalContent');
    if (!content) return;

    switch (tab) {

      /* ── Overview ─────────────────────────────────────── */
      case 'overview':
        content.innerHTML = `
          <p class="tab-desc">${r.description}</p>

          <div class="nutrition-grid">
            <div class="ncard">
              <span class="nval">${r.nutrition.protein}</span>
              <span class="nlabel">Protein</span>
            </div>
            <div class="ncard">
              <span class="nval">${r.nutrition.carbs}</span>
              <span class="nlabel">Carbs</span>
            </div>
            <div class="ncard">
              <span class="nval">${r.nutrition.fat}</span>
              <span class="nlabel">Fat</span>
            </div>
            <div class="ncard">
              <span class="nval">${r.nutrition.fiber}</span>
              <span class="nlabel">Fibre</span>
            </div>
          </div>

          <div class="origin-block">
            <h4>🌍 Origin &amp; History</h4>
            <div class="origin-name">📍 ${r.origin}</div>
            <p>${r.originStory}</p>
          </div>

          <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
            ${(r.tags || []).map(t =>
              `<span style="background:var(--accent-lt);color:var(--accent);
                border-radius:50px;padding:4px 12px;font-size:.72rem;font-weight:600;
                letter-spacing:.05em;">#${t}</span>`
            ).join('')}
          </div>`;
        break;

      /* ── Ingredients ──────────────────────────────────── */
      case 'ingredients':
        content.innerHTML = `
          <p class="tab-intro">
            You'll need <strong>${r.ingredients.length} ingredients</strong>
            for ${r.servings} serving${r.servings !== 1 ? 's' : ''}.
            Tap the circle to mark items you have ready.
          </p>
          <ul class="ingredients-list">
            ${r.ingredients.map((ing, i) => `
              <li class="ing-item">
                <span class="ing-num">${i + 1}</span>
                <span class="ing-text">${ing}</span>
                <span class="ing-check" onclick="this.classList.toggle('checked')"
                  title="Mark as ready">○</span>
              </li>`).join('')}
          </ul>`;
        break;

      /* ── Method ───────────────────────────────────────── */
      case 'method':
        content.innerHTML = `
          <p class="tab-intro">
            <strong>${r.steps.length} steps</strong>
            to a perfect ${r.name}. Read through all steps before you start.
          </p>
          <ol class="steps-list">
            ${r.steps.map((step, i) => `
              <li class="step-item">
                <div class="step-num">${i + 1}</div>
                <div class="step-text">${step}</div>
              </li>`).join('')}
          </ol>`;
        break;

      /* ── Benefits ─────────────────────────────────────── */
      case 'benefits':
        content.innerHTML = `
          <p class="tab-intro">
            Why <strong>${r.name}</strong> is a smart choice for your health.
          </p>
          <div class="benefits-grid">
            ${r.benefits.map(b => {
              const icon = b.split(' ')[0];
              const text = b.split(' ').slice(1).join(' ');
              return `
              <div class="benefit-card">
                <span class="benefit-icon">${icon}</span>
                <span>${text}</span>
              </div>`;
            }).join('')}
          </div>

          <div style="background:var(--surface);border:1px solid var(--border);
            border-radius:var(--radius);padding:18px;margin-top:8px;">
            <h4 style="font-family:var(--ff-head);font-size:1.05rem;margin-bottom:12px;">
              📊 Full Nutritional Snapshot (per serving)
            </h4>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
              ${[
                ['🥩 Protein',   r.nutrition.protein],
                ['🍞 Carbs',     r.nutrition.carbs],
                ['🫒 Fat',       r.nutrition.fat],
                ['🌿 Fibre',     r.nutrition.fiber],
                ['🔥 Calories',  r.calories + ' kcal'],
                ['👤 Servings',  r.servings + ' people']
              ].map(([label, val]) => `
                <div style="display:flex;justify-content:space-between;
                  background:var(--bg);border-radius:8px;padding:10px 14px;
                  font-size:.85rem;">
                  <span style="color:var(--text-mid)">${label}</span>
                  <strong style="color:var(--primary)">${val}</strong>
                </div>`).join('')}
            </div>
          </div>`;
        break;

      /* ── Reviews ──────────────────────────────────────── */
      case 'reviews':
        content.innerHTML = `
          <div class="reviews-wrap">
            ${Reviews.renderForm(id)}
            <div class="rev-divider"><span>Community Reviews</span></div>
            <div id="reviewsListWrap">${Reviews.renderList(id)}</div>
          </div>`;

        /* attach live character counter */
        document.getElementById('revText')?.addEventListener('input', e => {
          const cc = document.getElementById('charCount');
          if (cc) cc.textContent = `${e.target.value.length} / 600`;
        });
        break;
    }
  },

  /* ════════════════════════════════════════════════════════
     RANDOM RECIPE
  ════════════════════════════════════════════════════════ */
  openRandom() {
    const r = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    this.openModal(r.id);
  },

  /* ════════════════════════════════════════════════════════
     TOAST NOTIFICATION
  ════════════════════════════════════════════════════════ */
  toast(msg, type = 'success') {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = `toast show ${type}`;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
  }

};

/* ── Bootstrap ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => App.init());
