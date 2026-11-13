/* Scroll-linked motion, one shared loop. What moves:
   top progress bar | hero text + card drift as you leave the hero | logo strip speeds up while you scroll
   video section: scroll expands the card, then steps through the projects | stats, cards, why items, testimonials drift at different speeds
   (services words stay still) | case study images drift inside their frames | section headings fill word by word | process line draws.
   Tune the numbers marked K below. Everything is skipped for reduced-motion users. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function cl(v) { return Math.max(0, Math.min(1, v)); }
  var li = $('.pr-g li'), prg = $('.pr-g')[0];
  if (reduce) { li.forEach(function (l) { l.style.setProperty('--f', 1); }); return; }

  var sp = document.createElement('div'); sp.className = 'sp'; sp.setAttribute('aria-hidden', 'true'); document.body.appendChild(sp);

  var heads = $('.t-h').map(function (h) {
    var txt = h.textContent.trim(), w = txt.split(/\s+/);
    h.setAttribute('aria-label', txt);
    h.innerHTML = w.map(function (x) { return '<span class="wd" aria-hidden="true">' + x + '</span>'; }).join(' ');
    return { el: h, w: $('.wd', h) };
  });

  var H = document.getElementById('home-hero'), ht = $('.h-title')[0], hs = $('.h-sub')[0], hb = $('.h-btn')[0], hc = $('.h-peek .sc')[0];
  var track = $('.proof-track')[0], anim = null, vel = 0, lastY = window.pageYOffset;
  var items = [], tick = false, t = null;

  /* K: pixels of extra drift per screen-height of distance from the middle of the screen */
  function add(list, k, ax, ref) { list.forEach(function (el, i) { items.push({ el: el, k: k(i), ax: ax, ref: ref ? el.closest(ref) : el, c: 0 }); }); }
  function build() {
    items.forEach(function (it) { it.el.style.translate = ''; });
    items = [];
    add($('.stats-g>div'), function (i) { return (i - 2) * 30; }, 'y');
    add($('.cs'), function (i) { return (i % 3 - 1) * 90; }, 'y');
    add($('.tm'), function (i) { return (i % 3 - 1) * 80; }, 'y');
    add($('.why-i'), function (i) { return i % 2 ? -60 : 60; }, 'y');
    add($('.cs-art svg'), function () { return -60; }, 'y', '.cs');
    var sy = window.pageYOffset;
    items.forEach(function (it) { var r = it.ref.getBoundingClientRect(); it.c = r.top + sy + r.height / 2; });
    frame();
  }

  function frame() {
    tick = false;
    var y = window.pageYOffset, vh = window.innerHeight, dh = document.documentElement.scrollHeight - vh;
    sp.style.transform = 'scaleX(' + (dh > 0 ? cl(y / dh) : 0) + ')';

    if (H && ht && !document.documentElement.classList.contains('hero-lock')) {
      var hp = cl(y / H.offsetHeight);
      ht.style.translate = '0 ' + (-hp * 70) + 'px';
      if (hs) hs.style.translate = '0 ' + (-hp * 45) + 'px';
      if (hb) hb.style.translate = '0 ' + (-hp * 25) + 'px';
      if (hc) hc.style.scale = 1 + hp * .06;
    }

    items.forEach(function (it) {
      var d = (it.c - (y + vh / 2)) / vh;
      if (d > 1.5 || d < -1.5) return;
      var v = d * it.k;
      it.el.style.translate = it.ax === 'x' ? v + 'px 0' : '0 ' + v + 'px';
    });

    heads.forEach(function (h) {
      var r = h.el.getBoundingClientRect();
      if (r.top > vh || r.bottom < 0) return;
      var p = cl((vh * .88 - r.top) / (vh * .4)), n = h.w.length;
      h.w.forEach(function (w, i) { w.style.setProperty('--o', (.18 + .82 * cl(p * n - i)).toFixed(3)); });
    });

    if (prg) {
      var pr = cl((vh * .85 - prg.getBoundingClientRect().top) / (vh * .55));
      li.forEach(function (l, i) { l.style.setProperty('--f', cl(pr * li.length - i).toFixed(3)); });
    }

    vel = vel * .9 + Math.abs(y - lastY) * .35; lastY = y;
    if (!anim && track && track.getAnimations) anim = track.getAnimations()[0];
    if (anim) anim.playbackRate = vel > .05 ? 1 + Math.min(vel / 5, 5) : 1;
    if (vel > .05) { tick = true; requestAnimationFrame(frame); }
  }
  function later() { clearTimeout(t); t = setTimeout(build, 150); }
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(frame); } }, { passive: true });
  window.addEventListener('resize', later);
  window.addEventListener('load', later);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(later);
  if (window.ResizeObserver) new ResizeObserver(later).observe(document.body);
  build();
})();
