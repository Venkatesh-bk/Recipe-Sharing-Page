/* ═══════════════════════════════════════════════════════════
   Recipe  ·  reviews.js
   Handles: read / write reviews from localStorage,
            render review form, render review list,
            interactive star picker, submit logic
   ═══════════════════════════════════════════════════════════ */

const Reviews = {

  /* ── Storage key ──────────────────────────────────────── */
  _key: (id) => `saveur_reviews_${id}`,

  /* ── CRUD ─────────────────────────────────────────────── */
  getAll(recipeId) {
    try {
      return JSON.parse(localStorage.getItem(this._key(recipeId))) || [];
    } catch {
      return [];
    }
  },

  add(recipeId, review) {
    const list = this.getAll(recipeId);
    const entry = {
      ...review,
      uid: Date.now(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
      })
    };
    list.unshift(entry);
    try {
      localStorage.setItem(this._key(recipeId), JSON.stringify(list));
    } catch {
      console.warn('localStorage full — review not saved.');
    }
    return list;
  },

  /* ── Aggregate helpers ────────────────────────────────── */
  getAvgRating(recipeId) {
    const list = this.getAll(recipeId);
    if (!list.length) return null;
    const avg = list.reduce((s, r) => s + r.rating, 0) / list.length;
    return avg.toFixed(1);
  },

  getCount(recipeId) {
    return this.getAll(recipeId).length;
  },

  /* ── Star rendering ───────────────────────────────────── */
  starsHTML(rating) {
    const full  = Math.floor(rating);
    const empty = 5 - full;
    return '<span class="s-full">★</span>'.repeat(full) +
           '<span class="s-empty">☆</span>'.repeat(empty);
  },

  /* ── Interactive star picker (input) ──────────────────── */
  renderStarPicker() {
    return [1, 2, 3, 4, 5]
      .map(i => `<span class="star-input" data-val="${i}"
          onmouseover="Reviews._hoverStars(${i})"
          onmouseout="Reviews._resetStars()"
          onclick="Reviews.pickStar(${i})">☆</span>`)
      .join('');
  },

  _hoverStars(val) {
    document.querySelectorAll('.star-input').forEach((s, i) => {
      s.textContent = i < val ? '★' : '☆';
      s.style.color  = i < val ? '#d97706' : '';
    });
  },

  _resetStars() {
    const current = parseInt(document.getElementById('revRating')?.value || '0');
    document.querySelectorAll('.star-input').forEach((s, i) => {
      s.textContent = i < current ? '★' : '☆';
      s.style.color  = i < current ? '#d97706' : '';
    });
  },

  pickStar(val) {
    const input = document.getElementById('revRating');
    if (input) input.value = val;
    document.querySelectorAll('.star-input').forEach((s, i) => {
      const on = i < val;
      s.textContent = on ? '★' : '☆';
      s.style.color  = on ? '#d97706' : '';
      s.classList.toggle('active', on);
    });
  },

  /* ── Render: review form ──────────────────────────────── */
  renderForm(recipeId) {
    return `
    <div class="review-form" id="reviewForm">
      <h3 class="rev-title">✍️ Share Your Experience</h3>
      <p style="font-size:.85rem;color:var(--text-light);margin-bottom:20px;font-weight:300;">
        Cooked this dish? Let the community know how it went!
      </p>

      <div class="form-row two-col">
        <div class="form-group">
          <label>Your Name <span class="req">*</span></label>
          <input type="text" id="revName" placeholder="e.g. Aisha K." maxlength="60" autocomplete="name">
        </div>
        <div class="form-group">
          <label>Email <span style="font-size:.65rem;color:var(--text-light)">(optional)</span></label>
          <input type="email" id="revEmail" placeholder="your@email.com" autocomplete="email">
        </div>
      </div>

      <div class="form-group">
        <label>Review Title</label>
        <input type="text" id="revTitle" placeholder="Summarise your experience in one line…" maxlength="80">
      </div>

      <div class="form-group">
        <label>Your Rating <span class="req">*</span></label>
        <div class="star-picker" title="Click to rate">
          ${this.renderStarPicker()}
          <span id="starLabel" style="font-size:.78rem;color:var(--text-light);margin-left:6px;"></span>
        </div>
        <input type="hidden" id="revRating" value="0">
      </div>

      <div class="form-group">
        <label>Your Review <span class="req">*</span></label>
        <textarea id="revText" rows="4" maxlength="600"
          placeholder="Describe your cooking experience — what worked well, any modifications you made, tips for others…"></textarea>
        <span class="char-count" id="charCount">0 / 600</span>
      </div>

      <div class="form-row two-col">
        <div class="form-group">
          <label>Did You Cook This?</label>
          <select id="revMade">
            <option value="yes">✅ Yes, I made it!</option>
            <option value="planning">📌 Planning to make it</option>
            <option value="modified">🔧 Made with modifications</option>
            <option value="no">👀 Not yet</option>
          </select>
        </div>
        <div class="form-group">
          <label>Difficulty Found</label>
          <select id="revDifficulty">
            <option value="easier">😊 Easier than expected</option>
            <option value="as-described">👍 Just as described</option>
            <option value="harder">😅 Harder than expected</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Would You Recommend This Recipe?</label>
        <div style="display:flex;gap:10px;margin-top:2px;" id="recGroup">
          <label class="rec-option" onclick="Reviews._selectRec('yes',this)">
            <input type="radio" name="recRadio" value="yes" style="display:none"> 👍 Yes
          </label>
          <label class="rec-option" onclick="Reviews._selectRec('no',this)">
            <input type="radio" name="recRadio" value="no" style="display:none"> 👎 No
          </label>
          <label class="rec-option" onclick="Reviews._selectRec('maybe',this)">
            <input type="radio" name="recRadio" value="maybe" style="display:none"> 🤔 Maybe
          </label>
        </div>
        <input type="hidden" id="revRecommend" value="">
      </div>

      <button class="btn-submit-review" onclick="Reviews.submit(${recipeId})">
        Submit Review →
      </button>
    </div>`;
  },

  _selectRec(val, el) {
    document.querySelectorAll('.rec-option').forEach(o => o.classList.remove('rec-selected'));
    el.classList.add('rec-selected');
    const inp = document.getElementById('revRecommend');
    if (inp) inp.value = val;
  },

  /* ── Render: review list ──────────────────────────────── */
  renderList(recipeId) {
    const list = this.getAll(recipeId);
    if (!list.length) {
      return `<div class="no-reviews">
        <span>💬</span>
        <p>No reviews yet — be the first to share your experience!</p>
      </div>`;
    }

    const avg = parseFloat(this.getAvgRating(recipeId));
    const dist = [5, 4, 3, 2, 1].map(star => {
      const count = list.filter(r => r.rating === star).length;
      const pct   = Math.round((count / list.length) * 100);
      return { star, count, pct };
    });

    const recYes  = list.filter(r => r.recommend === 'yes').length;
    const recPct  = list.length ? Math.round((recYes / list.length) * 100) : 0;

    return `
    <div class="review-summary">
      <div class="rev-avg">
        <span class="avg-num">${avg.toFixed(1)}</span>
        <div class="avg-stars">${this.starsHTML(Math.round(avg))}</div>
        <span class="avg-count">${list.length} review${list.length !== 1 ? 's' : ''}</span>
        ${recYes ? `<div style="font-size:.72rem;color:var(--veg);margin-top:6px;font-weight:600;">👍 ${recPct}% recommend</div>` : ''}
      </div>
      <div class="rev-dist">
        ${dist.map(d => `
          <div class="dist-row">
            <span>${d.star}★</span>
            <div class="dist-bar">
              <div class="dist-fill" style="width:${d.pct}%"></div>
            </div>
            <span>${d.count}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="review-list" id="reviewsList">
      ${list.map(r => this._reviewItemHTML(r)).join('')}
    </div>`;
  },

  _reviewItemHTML(r) {
    const madeLabel = {
      yes:      '✓ Made this recipe',
      planning: '📌 Planning to cook',
      modified: '🔧 Made with modifications',
      no:       ''
    }[r.made] || '';

    const diffLabel = {
      'easier':      '😊 Easier than expected',
      'as-described':'👍 As described',
      'harder':      '😅 Harder than expected'
    }[r.difficulty] || '';

    const recLabel = {
      yes:   '👍 Recommends',
      no:    '👎 Does not recommend',
      maybe: '🤔 Maybe recommends'
    }[r.recommend] || '';

    return `
    <div class="review-item">
      <div class="rev-header">
        <div class="rev-avatar">${r.name.trim().charAt(0).toUpperCase()}</div>
        <div class="rev-meta">
          <span class="rev-name">${this._esc(r.name)}</span>
          <span class="rev-date">${r.date}</span>
        </div>
        <div class="rev-stars">${this.starsHTML(r.rating)}</div>
      </div>
      ${r.title ? `<div class="rev-item-title">"${this._esc(r.title)}"</div>` : ''}
      <p class="rev-text">${this._esc(r.text)}</p>
      <div class="rev-footer">
        ${madeLabel ? `<span class="rev-made">${madeLabel}</span>` : ''}
        ${diffLabel ? `<span class="rev-diff">${diffLabel}</span>` : ''}
        ${recLabel  ? `<span class="rev-diff">${recLabel}</span>` : ''}
      </div>
    </div>`;
  },

  /* ── Submit handler ───────────────────────────────────── */
  submit(recipeId) {
    const name    = (document.getElementById('revName')?.value  || '').trim();
    const rating  = parseInt(document.getElementById('revRating')?.value || '0');
    const text    = (document.getElementById('revText')?.value   || '').trim();

    /* validation */
    if (!name)        { App.toast('Please enter your name.', 'error'); return; }
    if (!rating)      { App.toast('Please select a star rating.', 'error'); return; }
    if (text.length < 10) {
      App.toast('Please write at least 10 characters.', 'error'); return;
    }

    this.add(recipeId, {
      name,
      email:      (document.getElementById('revEmail')?.value   || '').trim(),
      title:      (document.getElementById('revTitle')?.value   || '').trim(),
      rating,
      text,
      made:       document.getElementById('revMade')?.value       || '',
      difficulty: document.getElementById('revDifficulty')?.value || '',
      recommend:  document.getElementById('revRecommend')?.value  || ''
    });

    App.toast('Thank you for your review! 🎉', 'success');
    /* re-render the reviews tab to show the new entry */
    App.switchTab('reviews', recipeId);
    /* scroll to list */
    setTimeout(() => {
      const list = document.getElementById('reviewsList');
      if (list) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  },

  /* ── Helpers ──────────────────────────────────────────── */
  _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

};
