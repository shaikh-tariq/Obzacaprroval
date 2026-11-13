/* Hero: intro timeline + cycling work card. Plain script, no dependencies.
   Timeline (ms): 0-1100 headline + split logo fade in | hold | 2300-3550 words and logo glide to final spots
   | 2300-3550 the OB and ZAC pieces of the header logo fly up and lock into the header
   | 2900+ extra words fade in | 3250+ header bar, links, button and icon join | 3300+ tagline, buttons, work card fade in | ~4400 done.
   Scrolling, clicking or pressing a key during the intro skips to the end. */
(function () {
  var hero = document.getElementById('home-hero');
  if (!hero) return;
  var root = document.documentElement;
  var $ = function (s) { return Array.prototype.slice.call(hero.querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.76,0,.24,1)';

  function ready() { hero.classList.add('is-ready'); root.classList.remove('hero-lock'); root.classList.remove('hd-intro'); }

  /* ---------- cycling work card ---------- */
  function showcase() {
    var slides = $('.sc-s'), cur = 0, z = 1, timer;
    if (slides.length < 2 || reduce || !slides[0].animate) return;
    function next() {
      var n = (cur + 1) % slides.length;
      slides[n].style.zIndex = ++z;
      slides[n].animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 800, easing: EASE });
      cur = n;
    }
    function start() { if (!timer) timer = setInterval(next, 2800); }
    function stop() { clearInterval(timer); timer = null; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { e[0].isIntersecting ? start() : stop(); }).observe(hero.querySelector('.sc'));
    } else { start(); }
  }

  /* ---------- intro ---------- */
  function intro() {
    /* the OB and ZAC pieces of the header logo do the intro and land in the header */
    var la = document.querySelector('.site-hd .lp-ob'), lb = document.querySelector('.site-hd .lp-zac');
    if (!la || !lb) { ready(); showcase(); return; }
    root.classList.add('hero-lock'); root.classList.add('hd-intro');
    var words = $('.w-i'), extras = $('.w-x'), pd = hero.querySelector('.pd'),
        rule = hero.querySelector('.h-line'),
        ui = $('.h-nav, .h-right, .h-sub, .h-btn, .h-peek');
    var vw = window.innerWidth, vh = window.innerHeight;
    var fs = parseFloat(getComputedStyle(words[0]).fontSize), gap = fs * 0.26, dot = fs * 0.28;
    var rects = words.map(function (w) { return w.getBoundingClientRect(); });
    var widths = words.map(function (w) { return w.offsetWidth; });
    var W = widths.reduce(function (a, b) { return a + b; }, 0) + gap * 2 + dot;
    var s = Math.min(1, (vw - 48) / W), Wp = W * s, x0 = (vw - Wp) / 2;
    var y0 = vh / 2 - (rects[0].height * s) / 2 + 28 * s;

    var cx = x0;
    var from = words.map(function (w, i) {
      var t = 'translate(' + (cx - rects[i].left) + 'px,' + (y0 - rects[i].top) + 'px) scale(' + s + ')';
      cx += (widths[i] + gap) * s;
      return t;
    });

    // K = how much bigger the letters are in the middle of the screen than in the header
    var K = Math.max(1.15, Math.min(1.9, vw / 820));
    var ra = la.getBoundingClientRect(), rb = lb.getBoundingClientRect(), yl = y0 - 64 * s - ra.height * K / 2;
    var fa = 'translate(' + (x0 - ra.left) + 'px,' + (yl - ra.top) + 'px) scale(' + K + ')';
    var fb = 'translate(' + (x0 + Wp - rb.width * K - rb.left) + 'px,' + (yl - rb.top) + 'px) scale(' + K + ')';
    rule.style.left = (x0 + ra.width * K + 18) + 'px';
    rule.style.width = Math.max(0, Wp - (ra.width + rb.width) * K - 36) + 'px';
    rule.style.top = (yl + ra.height * K / 2) + 'px';

    function A(el, kf, o) { o.fill = 'both'; if (!o.easing) o.easing = EASE; return el.animate(kf, o); }
    var fade = { duration: 900, easing: 'ease-out' };

    words.forEach(function (w, i) {
      A(w, [{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)' }], { duration: fade.duration, easing: fade.easing, delay: 200 + i * 140 });
      A(w, [{ transform: from[i] }, { transform: 'none' }], { duration: 1250, delay: 2300 + i * 70 });
    });
    A(pd, [{ opacity: 1 }, { opacity: 1 }], { duration: 2300 });
    A(pd, [{ opacity: 1 }, { opacity: 0 }], { duration: 400, delay: 2300 });
    [[la, fa], [lb, fb]].forEach(function (p) {
      A(p[0], [{ opacity: 0 }, { opacity: 1 }], { duration: 800, delay: 300, easing: 'ease-out' });
      A(p[0], [{ transform: p[1] }, { transform: 'none' }], { duration: 1250, delay: 2300 });
    });
    A(rule, [{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: 300, easing: 'ease-out' });
    A(rule, [{ opacity: 1 }, { opacity: 0 }], { duration: 500, delay: 2300 });
    extras.forEach(function (w, i) {
      A(w, [{ opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)' }], { duration: 800, delay: 2900 + i * 110, easing: 'ease-out' });
    });
    ui.forEach(function (el, i) {
      A(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 700, delay: 3300 + i * 110, easing: 'ease-out' });
    });

    var join = setTimeout(function () { root.classList.remove('hd-intro'); }, 3250);
    var finished = false, timer = setTimeout(end, 4500);
    function end() {
      if (finished) return; finished = true; clearTimeout(timer); clearTimeout(join);
      ready();
      hero.getAnimations({ subtree: true }).concat(la.getAnimations(), lb.getAnimations()).forEach(function (a) { a.cancel(); });
      ['wheel', 'touchmove', 'keydown', 'mousedown'].forEach(function (ev) { window.removeEventListener(ev, skip); });
      showcase();
    }
    function skip() { hero.getAnimations({ subtree: true }).concat(la.getAnimations(), lb.getAnimations()).forEach(function (a) { a.finish(); }); end(); }
    ['wheel', 'touchmove', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, skip, { passive: true }); });
  }

  if (reduce || window.scrollY > 40 || !hero.animate) { ready(); showcase(); }
  else { intro(); }
})();
