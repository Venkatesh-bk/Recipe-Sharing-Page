// reviews.js — Read/write reviews from localStorage, render form & list

const Reviews = {

  _key: id => `recipe_reviews_${id}`,

  getAll(id) {
    try { return JSON.parse(localStorage.getItem(this._key(id))) || []; }
    catch { return []; }
  },

  add(id, review) {
    const list = this.getAll(id);
    list.unshift({
      ...review,
      uid:  Date.now(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    try { localStorage.setItem(this._key(id), JSON.stringify(list)); }
    catch { console.warn('localStorage full — review not saved.'); }
    return list;
  },

  getAvgRating(id) {
    const list = this.getAll(id);
    if (!list.length) return null;
    return (list.reduce((s, r) => s + r.rating, 0) / list.length).toFixed(1);
  },

  getCount(id) { return this.getAll(id).length; },

  starsHTML(n) {
    return '<span class="s-full">★</span>'.repeat(Math.floor(n)) +
           '<span class="s-empty">☆</span>'.repeat(5 - Math.floor(n));
  },

  _starPicker() {
    return [1,2,3,4,5].map(i =>
      `<span class="star-input" data-val="${i}"
        onmouseover="Reviews._hoverStars(${i})"
        onmouseout="Reviews._resetStars()"
        onclick="Reviews.pickStar(${i})">☆</span>`
    ).join('');
  },

  _hoverStars(val) {
    document.querySelectorAll('.star-input').forEach((s, i) => {
      s.textContent = i < val ? '★' : '☆';
      s.style.color  = i < val ? '#d97706' : '';
    });
  },

  _resetStars() {
    const cur = parseInt(document.getElementById('revRating')?.value || 0);
    document.querySelectorAll('.star-input').forEach((s, i) => {
      s.textContent = i < cur ? '★' : '☆';
      s.style.color  = i < cur ? '#d97706' : '';
    });
  },

  pickStar(val) {
    const inp = document.getElementById('revRating');
    if (inp) inp.value = val;
    document.querySelectorAll('.star-input').forEach((s, i) => {
      s.textContent = i < val ? '★' : '☆';
      s.style.color  = i < val ? '#d97706' : '';
      s.classList.toggle('active', i < val);
    });
  },

  renderForm(id) {
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
        <input type="text" id="revTitle" placeholder="Summarise your experience…" maxlength="80">
      </div>
      <div class="form-group">
        <label>Your Rating <span class="req">*</span></label>
        <div class="star-picker">${this._starPicker()}</div>
        <input type="hidden" id="revRating" value="0">
      </div>
      <div class="form-group">
        <label>Your Review <span class="req">*</span></label>
        <textarea id="revText" rows="4" maxlength="600"
          placeholder="Describe your cooking experience — what worked well, any tips…"></textarea>
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
          ${['yes','no','maybe'].map(v => {
            const labels = { yes:'👍 Yes', no:'👎 No', maybe:'🤔 Maybe' };
            return `<label class="rec-option" onclick="Reviews._selectRec('${v}',this)">
              <input type="radio" name="recRadio" value="${v}" style="display:none"> ${labels[v]}
            </label>`;
          }).join('')}
        </div>
        <input type="hidden" id="revRecommend" value="">
      </div>
      <button class="btn-submit-review" onclick="Reviews.submit(${id})">Submit Review →</button>
    </div>`;
  },

  _selectRec(val, el) {
    document.querySelectorAll('.rec-option').forEach(o => o.classList.remove('rec-selected'));
    el.classList.add('rec-selected');
    const inp = document.getElementById('revRecommend');
    if (inp) inp.value = val;
  },

  renderList(id) {
    const list = this.getAll(id);
    if (!list.length) return `
      <div class="no-reviews">
        <span>💬</span>
        <p>No reviews yet — be the first to share your experience!</p>
      </div>`;

    const avg  = parseFloat(this.getAvgRating(id));
    const dist = [5,4,3,2,1].map(star => {
      const count = list.filter(r => r.rating === star).length;
      return { star, count, pct: Math.round((count / list.length) * 100) };
    });
    const recPct = Math.round((list.filter(r => r.recommend === 'yes').length / list.length) * 100);

    return `
    <div class="review-summary">
      <div class="rev-avg">
        <span class="avg-num">${avg.toFixed(1)}</span>
        <div class="avg-stars">${this.starsHTML(Math.round(avg))}</div>
        <span class="avg-count">${list.length} review${list.length !== 1 ? 's' : ''}</span>
        ${recPct ? `<div style="font-size:.72rem;color:var(--veg);margin-top:6px;font-weight:600;">👍 ${recPct}% recommend</div>` : ''}
      </div>
      <div class="rev-dist">
        ${dist.map(d => `
          <div class="dist-row">
            <span>${d.star}★</span>
            <div class="dist-bar"><div class="dist-fill" style="width:${d.pct}%"></div></div>
            <span>${d.count}</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="review-list" id="reviewsList">
      ${list.map(r => this._reviewItemHTML(r)).join('')}
    </div>`;
  },

  _reviewItemHTML(r) {
    const madeLabel = { yes:'✓ Made this recipe', planning:'📌 Planning to cook',
                        modified:'🔧 Made with modifications', no:'' }[r.made] || '';
    const diffLabel = { easier:'😊 Easier than expected', 'as-described':'👍 As described',
                        harder:'😅 Harder than expected' }[r.difficulty] || '';
    const recLabel  = { yes:'👍 Recommends', no:'👎 Does not recommend',
                        maybe:'🤔 Maybe recommends' }[r.recommend] || '';

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
        ${recLabel  ? `<span class="rev-diff">${recLabel}</span>`  : ''}
      </div>
    </div>`;
  },

  submit(id) {
    const name   = (document.getElementById('revName')?.value  || '').trim();
    const rating = parseInt(document.getElementById('revRating')?.value || 0);
    const text   = (document.getElementById('revText')?.value   || '').trim();

    if (!name)           { App.toast('Please enter your name.', 'error'); return; }
    if (!rating)         { App.toast('Please select a star rating.', 'error'); return; }
    if (text.length < 10){ App.toast('Please write at least 10 characters.', 'error'); return; }

    this.add(id, {
      name,
      email:      (document.getElementById('revEmail')?.value      || '').trim(),
      title:      (document.getElementById('revTitle')?.value      || '').trim(),
      rating, text,
      made:       document.getElementById('revMade')?.value        || '',
      difficulty: document.getElementById('revDifficulty')?.value  || '',
      recommend:  document.getElementById('revRecommend')?.value   || ''
    });

    App.toast('Thank you for your review! 🎉', 'success');
    App.switchTab('reviews', id);
    setTimeout(() => document.getElementById('reviewsList')?.scrollIntoView({ behavior:'smooth', block:'start' }), 200);
  },

  _esc(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

};
