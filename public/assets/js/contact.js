/* OBZAC Contact page.
   EDIT HERE: services (cards + form pills), budgets, testimonials and FAQ. All copy is placeholder until approved.
   The brief form has no server yet: on submit it opens the visitor's email app with the brief filled in,
   addressed to TO_EMAIL. To receive briefs directly, connect a form service (see README, section 17). */
(function () {
  'use strict';
  var TO_EMAIL = 'hello@yourdomain.com';
  var SERVICES = [
    ['Social media', 'Content, reels and community that keep your brand in front of the right people.', '<path d="M24 41s-15-9-15-20a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 11-15 20-15 20Z"/><path d="M34 8h6v6M40 8l-7 7"/>'],
    ['SEO', 'Rank for the searches that bring buyers, then see exactly what moved.', '<circle cx="21" cy="21" r="12"/><path d="M30 30l11 11M15 23l4-4 4 3 5-6"/>'],
    ['Marketplaces', 'Listings, ads and reviews that sell more where your buyers already shop.', '<path d="M8 18l3-9h26l3 9"/><path d="M8 18a5 5 0 0 0 10 0 5 5 0 0 0 12 0 5 5 0 0 0 10 0"/><path d="M11 23v17h26V23M20 40V30h8v10"/>'],
    ['E-commerce', 'Ads, email and conversion tied together so every rupee works harder.', '<path d="M5 9h6l5 22h21l4-15H14"/><circle cx="19" cy="38" r="3"/><circle cx="34" cy="38" r="3"/>'],
    ['Websites', 'Fast sites that load quickly, read clearly and make the next step obvious.', '<rect x="5" y="9" width="38" height="30" rx="5"/><path d="M5 17h38M19 26l-4 4 4 4M29 26l4 4-4 4"/>'],
    ['Branding', 'Strategy, identity and messaging that make you impossible to ignore.', '<path d="M24 6a18 18 0 1 0 0 36c3 0 4-2 3-4s0-5 4-5h4a8 8 0 0 0 8-8C43 14 34 6 24 6Z"/><circle cx="15" cy="20" r="2.5"/><circle cx="23" cy="14" r="2.5"/><circle cx="32" cy="18" r="2.5"/>']
  ];
  var BUDGETS = ['Under ₹50k', '₹50k to ₹2L', '₹2L to ₹5L', '₹5L+', 'Not sure yet'];
  var QUOTES = [
    ['Founder', 'Brand name', '#BC412B', 'They understood our brand fast and the launch results spoke for themselves.'],
    ['Marketing lead', 'Brand name', '#6E4712', 'Quick, clear and honest about numbers. It felt like an in-house team.'],
    ['CEO', 'Brand name', '#B07F1E', 'Brand and performance finally worked together. We saw the difference within weeks.'],
    ['Head of growth', 'Brand name', '#E5684D', 'Our marketplace sales doubled and we never had to chase an update.'],
    ['Co-founder', 'Brand name', '#66717A', 'The most thoughtful, collaborative partner we have worked with.']
  ];
  var FAQ = [
    ['How soon will you reply to my brief?', 'Within one working day. A senior strategist reads every brief and replies with a few questions and times for a free 30-minute call.'],
    ['Do you work with early-stage startups?', 'Yes. We work with D2C brands, startups and enterprises. For early-stage teams we usually start with positioning and a launch plan before spending on ads.'],
    ['Can you handle branding, website and marketing together?', 'Yes. Strategy, identity, website and marketing run as one connected project, so the story stays consistent from the logo to the last ad.'],
    ['How is pricing worked out?', 'It depends on scope, channels and how much content already exists. After the first call we send a clear plan with a fixed quote or a monthly retainer.'],
    ['Do you work with brands outside India?', 'Yes. We work remotely with brands across India and abroad, with calls scheduled in your time zone.']
  ];

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (id) { return document.getElementById(id); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };

  /* ---------- hero load-in ---------- */
  $$('.ct-w').forEach(function (w, i) { w.style.setProperty('--i', i); });
  $$('.ct-hero .ct-in').forEach(function (el, i) { el.style.setProperty('--d', (i ? 500 + i * 140 : 0) + 'ms'); });
  requestAnimationFrame(function () { requestAnimationFrame(function () { document.querySelector('.ct-hero').classList.add('go'); }); });

  /* ---------- service cards ---------- */
  var cards = $('ctCards');
  cards.innerHTML = SERVICES.map(function (s, i) {
    return '<button type="button" class="ct-card" data-i="' + i + '" aria-pressed="false">' +
      '<span class="tick" aria-hidden="true">&#10003;</span>' +
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + s[2] + '</svg>' +
      '<h3>' + s[0] + '</h3><p>' + s[1] + '</p><span class="go">Add to my brief</span></button>';
  }).join('');

  /* ---------- form pills ---------- */
  function pills(id, name, list, type) {
    $(id).insertAdjacentHTML('beforeend', list.map(function (v, i) {
      return '<label><input type="' + type + '" name="' + name + '" value="' + v + '" id="' + name + i + '"><span>' + v + '</span></label>';
    }).join(''));
  }
  pills('fSvc', 'service', SERVICES.map(function (s) { return s[0]; }), 'checkbox');
  pills('fBudget', 'budget', BUDGETS, 'radio');
  var svcBoxes = $$('#fSvc input');
  function syncCards() {
    $$('.ct-card', cards).forEach(function (c, i) {
      var on = svcBoxes[i].checked;
      c.classList.toggle('picked', on); c.setAttribute('aria-pressed', on);
    });
  }
  cards.addEventListener('click', function (e) {
    var c = e.target.closest('.ct-card'); if (!c) return;
    var b = svcBoxes[+c.getAttribute('data-i')]; b.checked = !b.checked; syncCards();
    if (b.checked) {
      var brief = $('brief'), r = brief.getBoundingClientRect();
      if (r.top > innerHeight * .6) setTimeout(function () { brief.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }, 260);
    }
  });
  svcBoxes.forEach(function (b) { b.addEventListener('change', syncCards); });

  /* ---------- brief form ---------- */
  var form = $('ctForm'), msg = $('ctMsg');
  function bad(el, on) { el.closest('.fl').classList.toggle('bad', on); }
  form.addEventListener('input', function (e) { if (e.target.closest('.fl')) bad(e.target, false); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('f-name'), email = $('f-email'), text = $('f-msg'), ok = true;
    [name, text].forEach(function (f) { var miss = !f.value.trim(); bad(f, miss); if (miss) ok = false; });
    var em = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()); bad(email, em); if (em) ok = false;
    if (!ok) { msg.className = 'ct-msg err'; msg.textContent = 'Add your name, a valid email and a few lines about your project.'; return; }
    var svc = svcBoxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; }).join(', ') || 'Not decided';
    var bud = ($$('#fBudget input:checked')[0] || {}).value || 'Not given';
    var body = 'Name: ' + name.value + '\nEmail: ' + email.value + '\nCompany: ' + ($('f-company').value || '-') + '\nPhone: ' + ($('f-phone').value || '-') +
      '\nServices: ' + svc + '\nBudget: ' + bud + '\n\n' + text.value;
    location.href = 'mailto:' + TO_EMAIL + '?subject=' + encodeURIComponent('New brief from ' + name.value) + '&body=' + encodeURIComponent(body);
    msg.className = 'ct-msg';
    msg.textContent = 'Your email app should open with the brief filled in. If it does not, email us at ' + TO_EMAIL + '.';
  });

  /* ---------- testimonials: auto-advance, arrows, pause on hover ---------- */
  var track = $('tmTrack');
  track.innerHTML = QUOTES.map(function (q) {
    return '<figure class="ct-tmc"><span class="av" style="background:' + q[2] + '">CN</span><b>Client name</b><small>' + q[0] + ', ' + q[1] + '</small><q>' + q[3] + '</q></figure>';
  }).join('');
  var at = 0, timer = null, items = track.children;
  function maxAt() { var vp = track.parentNode.clientWidth, step = items[0].offsetWidth + 18; return Math.max(0, items.length - Math.floor((vp + 18) / step)); }
  function show(n) { var m = maxAt(); at = n > m ? 0 : n < 0 ? m : n; track.style.transform = 'translateX(' + (-at * (items[0].offsetWidth + 18)) + 'px)'; }
  function auto() { if (reduce) return; clearInterval(timer); timer = setInterval(function () { show(at + 1); }, 4500); }
  $('tmNext').addEventListener('click', function () { show(at + 1); auto(); });
  $('tmPrev').addEventListener('click', function () { show(at - 1); auto(); });
  track.parentNode.addEventListener('mouseenter', function () { clearInterval(timer); });
  track.parentNode.addEventListener('mouseleave', auto);
  addEventListener('resize', function () { show(at); });
  auto();

  /* ---------- FAQ ---------- */
  var acc = $('ctFaq');
  acc.innerHTML = FAQ.map(function (f, i) {
    return '<div class="ct-fq' + (i ? '' : ' open') + '"><button type="button" aria-expanded="' + (i ? 'false' : 'true') + '" aria-controls="fq' + i + '">' +
      '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' + f[0] +
      '</button><div class="a" id="fq' + i + '" role="region"><div><p>' + f[1] + '</p></div></div></div>';
  }).join('');
  acc.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var it = b.parentNode, open = !it.classList.contains('open');
    $$('.ct-fq', acc).forEach(function (n) { n.classList.remove('open'); n.firstChild.setAttribute('aria-expanded', 'false'); });
    if (open) { it.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });

  /* ---------- newsletter ---------- */
  $('nlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('nl-email').value.trim(), m = $('nlMsg');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { m.className = 'ct-msg ct-nl-msg err'; m.textContent = 'Enter a valid email address.'; return; }
    m.className = 'ct-msg ct-nl-msg';
    m.textContent = 'Thanks. Sign-ups are not connected yet: once a newsletter service is set up, ' + v + ' will be added.';
  });

  /* ---------- scroll reveals (flow.css) ---------- */
  if (reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting || x.boundingClientRect.top < 0) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  function tag(list, step) { list.forEach(function (el, i) { el.setAttribute('data-rv', ''); if (step) el.style.setProperty('--d', (i % 3) * step + 'ms'); io.observe(el); }); }
  tag($$('.ct .kick, .ct .t-h, .ct-lead, .ct-tm h2, .ct-tm-side p, .ct-news h2, .ct-nl, .ct-faq .btn'));
  tag($$('.ct-card'), 110); tag($$('.ct-next li'), 120); tag([form]); tag($$('.ct-fq'), 80); tag([$('tmTrack').parentNode]);
})();
