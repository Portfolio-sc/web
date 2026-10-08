// Open roles — shared by the homepage (index.html) and /contact.
//
// Markup each page provides:
//   <section data-roles-section id="..." hidden>   whole block; shown once roles load
//     <div data-roles-grid></div>                  cards are rendered here
//   </section>
//   [data-roles-hide-when-loaded]                  optional; hidden once roles load
//   [data-roles-show-when-loaded] (start hidden)   optional; shown once roles load
//
// Roles come from /api/roles (Airtable Roles table, Status = Active,
// Audience includes Portfolio). Each card opens one shared dialog with
// the full description; "Apply for this role" swaps it to the form,
// which posts to /api/submit with the role title.
//
// Links: arriving at #<section id> jumps to the section once it has
// loaded (it is hidden on first paint, so the browser can't); #role-<slug>
// opens that role directly.
(function () {
  const sections = Array.from(document.querySelectorAll('[data-roles-section]'));
  if (!sections.length) return;

  // ---------- helpers ----------
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function slug(t) { return String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function meta(r) {
    const bits = [r.type === 'Stealth' ? 'Stealth project' : (r.org || 'Portfolio')];
    if (r.type && r.type !== 'Stealth' && r.type !== 'Listed') bits.push(r.type.charAt(0) + r.type.slice(1).toLowerCase());
    if (r.category) bits.push(r.category);
    return bits.join(' · ');
  }
  // Plain-text description -> paragraphs, bullet lists ("- ", "* ", "• "),
  // and short headings (an ALL-CAPS line, or a short line ending in ":").
  // Everything is escaped first.
  function render(text) {
    const lines = String(text || '').replace(/\r/g, '').split('\n');
    let html = '', list = false, para = [];
    const flush = () => { if (para.length) { html += '<p>' + para.join(' ') + '</p>'; para = []; } };
    const endList = () => { if (list) { html += '</ul>'; list = false; } };
    lines.forEach((raw) => {
      const line = raw.trim();
      if (!line) { flush(); endList(); return; }
      const b = line.match(/^[-*•]\s+(.*)$/);
      if (b) { flush(); if (!list) { html += '<ul>'; list = true; } html += '<li>' + esc(b[1]) + '</li>'; return; }
      endList();
      const caps = line === line.toUpperCase() && /[A-Z]/.test(line);
      if (line.length < 60 && (caps || /:$/.test(line))) {
        flush();
        html += '<h4>' + esc(caps ? line.charAt(0) + line.slice(1).toLowerCase() : line.replace(/:$/, '')) + '</h4>';
        return;
      }
      para.push(esc(line).replace(/^(Why this role exists:|Work environment[.:])/, '<strong>$1</strong>'));
    });
    flush(); endList();
    return html;
  }

  // ---------- dialog (built once, shared by every grid on the page) ----------
  const dialog = document.createElement('dialog');
  if (typeof dialog.showModal !== 'function') return; // very old browsers: leave roles hidden
  dialog.className = 'role-dialog';
  dialog.setAttribute('aria-labelledby', 'roleDialogTitle');
  dialog.innerHTML = `
    <div class="role-dialog-inner">
      <div class="role-dialog-head">
        <div>
          <p class="roles-eyebrow" id="roleDialogMeta"></p>
          <h3 class="role-dialog-title" id="roleDialogTitle"></h3>
        </div>
        <button class="role-dialog-close" type="button" id="roleDialogClose" aria-label="Close">&times;</button>
      </div>
      <div id="roleView">
        <div class="role-desc" id="roleDialogDesc"></div>
        <div class="role-dialog-actions">
          <button class="roles-btn" type="button" id="roleApplyBtn">Apply for this role</button>
        </div>
      </div>
      <form class="apply-form" id="applyForm" novalidate hidden>
        <p class="roles-note">Your application goes directly to the hiring team. <button type="button" class="roles-back" id="roleBackBtn">Back to the role description</button></p>
        <div class="field">
          <label for="apply-name">Name</label>
          <input type="text" id="apply-name" name="name" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="apply-email">Email</label>
          <input type="email" id="apply-email" name="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="apply-linkedin">LinkedIn or website <span class="opt">(optional)</span></label>
          <input type="url" id="apply-linkedin" name="linkedin" placeholder="https://">
        </div>
        <div class="field">
          <label for="apply-resume">CV or resume <span class="opt">(optional, max 5 MB)</span></label>
          <input type="file" id="apply-resume" name="resume" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg">
        </div>
        <div class="field">
          <label for="apply-statement">Why are you a good fit?</label>
          <textarea id="apply-statement" name="statement" rows="5" placeholder="Your relevant experience and why this role interests you" required></textarea>
        </div>
        <div class="roles-hp" aria-hidden="true">
          <label for="apply-website">Website</label>
          <input type="text" id="apply-website" name="website" tabindex="-1" autocomplete="off">
        </div>
        <button type="submit" class="roles-btn" id="applySubmit">Submit application</button>
        <div class="roles-status" id="applyStatus" role="status" aria-live="polite"></div>
      </form>
    </div>`;
  document.body.appendChild(dialog);

  const $ = (id) => dialog.querySelector('#' + id);
  const view = $('roleView'), form = $('applyForm'), status = $('applyStatus');
  let roles = [], current = null;

  function setStatus(msg, type) { status.textContent = msg; status.className = 'roles-status' + (type ? ' ' + type : ''); }
  function showView() { view.hidden = false; form.hidden = true; }
  function showForm() { view.hidden = true; form.hidden = false; setStatus('', ''); $('apply-name').focus(); }

  function open(r, updateUrl) {
    current = r;
    $('roleDialogMeta').textContent = meta(r);
    $('roleDialogTitle').textContent = r.title;
    $('roleDialogDesc').innerHTML = render(r.description);
    showView();
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    if (updateUrl) history.replaceState(null, '', '#role-' + slug(r.title));
  }
  function close() { if (dialog.open) dialog.close(); }

  dialog.addEventListener('close', () => {
    if (location.hash.indexOf('#role-') === 0) history.replaceState(null, '', location.pathname + location.search);
  });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  $('roleDialogClose').addEventListener('click', close);
  $('roleApplyBtn').addEventListener('click', showForm);
  $('roleBackBtn').addEventListener('click', showView);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('apply-name').value.trim();
    const email = $('apply-email').value.trim();
    const linkedin = $('apply-linkedin').value.trim();
    const statement = $('apply-statement').value.trim();
    const file = $('apply-resume').files[0];
    const done = () => { setStatus('Application submitted. Thank you, we’ll be in touch.', 'success'); form.reset(); };

    // Honeypot: bots fill it, people never see it. Fake success.
    if ($('apply-website').value.trim()) { done(); return; }
    if (!name || !email || !statement) { setStatus('Please fill in your name, email, and why you’re a good fit.', 'error'); return; }
    if (file && file.size > 5 * 1024 * 1024) { setStatus('That file is over 5 MB. Please attach a smaller one or link to it instead.', 'error'); return; }

    const btn = $('applySubmit');
    btn.disabled = true; btn.textContent = 'Submitting…'; setStatus('', '');
    try {
      const fd = new FormData();
      fd.append('name', name);
      fd.append('email', email);
      if (linkedin) fd.append('linkedin', linkedin);
      fd.append('statement', statement);
      if (current) fd.append('roleTitle', current.title);
      if (file) fd.append('resume', file);
      const res = await fetch('/api/submit', { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.error || 'Submission failed.');
      done();
    } catch (err) {
      setStatus(err.message || 'Something went wrong. Please try again.', 'error');
    } finally {
      btn.disabled = false; btn.textContent = 'Submit application';
    }
  });

  // ---------- links ----------
  function jumpTo(el) {
    // Instant, not smooth: a page-wide smooth scroll can stall a long jump on load.
    const go = () => el.scrollIntoView({ block: 'start', behavior: 'instant' });
    setTimeout(go, 0);
    if (document.readyState !== 'complete') window.addEventListener('load', () => setTimeout(go, 0), { once: true });
  }
  function handleHash() {
    const h = location.hash;
    const role = h.match(/^#role-(.+)$/);
    if (role) {
      const r = roles.find((x) => slug(x.title) === role[1]);
      if (r) open(r, false);
      return;
    }
    const target = sections.find((s) => s.id && '#' + s.id === h);
    if (target) jumpTo(target);
  }

  // ---------- load ----------
  fetch('/api/roles?audience=Portfolio')
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => {
      roles = Array.isArray(data) ? data : [];
      if (!roles.length) return;
      const cards = roles.map((r, i) => `
        <button type="button" class="role-card" data-i="${i}" aria-haspopup="dialog">
          <p class="role-card-meta">${esc(meta(r))}</p>
          <h3 class="role-card-title">${esc(r.title)}</h3>
          <p class="role-card-summary">${esc(r.summary || '')}</p>
          <span class="role-card-more">Read more and apply &rarr;</span>
        </button>`).join('');
      document.querySelectorAll('[data-roles-grid]').forEach((grid) => {
        grid.innerHTML = cards;
        grid.querySelectorAll('.role-card').forEach((el) => {
          el.addEventListener('click', () => open(roles[+el.dataset.i], true));
        });
      });
      sections.forEach((s) => { s.hidden = false; });
      document.querySelectorAll('[data-roles-hide-when-loaded]').forEach((el) => { el.hidden = true; });
      document.querySelectorAll('[data-roles-show-when-loaded]').forEach((el) => { el.hidden = false; });
      handleHash();
    })
    .catch(() => {});
  window.addEventListener('hashchange', handleHash);
})();
