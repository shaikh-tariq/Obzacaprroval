/* About page: intro screen, reveals, changing intro panel, torch-lit principles, team portraits.
   Reduced-motion users skip the intro screen, the torch and the scroll-driven parts. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, root = document.documentElement;
  function $(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function cl(v) { return Math.max(0, Math.min(1, v)); }

  /* reveals */
  var io = !reduce && 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting || x.boundingClientRect.top < 0) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  function start() {
    $('[data-rv]').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
    var h1 = document.querySelector('.ab-h1');
    if (h1) requestAnimationFrame(function () { h1.classList.add('in'); });
  }
  start();

  /* scroll: top bar state + the changing panel beside the intro text (one rAF per scroll burst) */
  var inS = $('.ab-in')[0], pns = $('.pn>div'), pi = 0, tick = false;
  function frame() {
    tick = false;
    document.body.classList.toggle('scrolled', window.pageYOffset > 60);
    if (!reduce && inS) {
      var p = cl(-inS.getBoundingClientRect().top / (inS.offsetHeight - window.innerHeight)), i = Math.min(pns.length - 1, Math.floor(p * pns.length));
      if (i !== pi) { pns[pi].classList.remove('on'); pns[i].classList.add('on'); pi = i; }
    }
  }
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();

  /* principles: the torch rests above the heading; move the pointer (or scroll past the heading) and it is picked up,
     swings after you on a spring, and is the only light in a dark room. Word positions are measured once, not every frame. */
  var pr = $('.ab-pr')[0];
  if (pr) {
    $('.pr-d', pr).forEach(function (d) {
      d.innerHTML = d.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w2">' + w + '</span>'; }).join(' ');
    });
    if (!reduce) torch();
  }
  function torch() {
    var el = $('.torch', pr)[0], spot = $('.spot', pr)[0], emb = $('.emb', pr)[0], hint = $('.hint', pr)[0];
    var items = $('.w2', pr).map(function (e) { return { el: e, x: 0, y: 0, o: -1, base: .65 }; })
      .concat($('.pr-t', pr).map(function (e) { return { el: e, x: 0, y: 0, o: -1, base: .75, row: 1 }; }));
    var rest = { x: 0, y: 0 }, s = { x: 0, y: 0, vx: 0, vy: 0, rot: 0, sc: 1 }, px = null, py = 0, raf = 0, last = 0, placed = false;
    var touch = window.matchMedia('(hover: none)').matches;

    function measure() {
      var R = pr.getBoundingClientRect(), E = emb.getBoundingClientRect();
      rest.x = E.left + E.width / 2 - R.left; rest.y = E.top - R.top + 20;
      items.forEach(function (it) {
        var b = it.el.getBoundingClientRect();
        it.x = b.left + b.width / 2 - R.left;
        it.y = b.top + b.height / 2 - R.top;
        it.el.style.setProperty('--o', it.base);
      });
      if (!placed) { s.x = rest.x; s.y = rest.y; placed = true; }
      kick();
    }
    function kick() { if (!raf) raf = requestAnimationFrame(step); }
    function step(t) {
      raf = 0;
      var R = pr.getBoundingClientRect(), vh = window.innerHeight;
      if (R.bottom < -200 || R.top > vh + 200) return;
      var dt = Math.min(2.5, (t - last) / 16.7 || 1); last = t;
      var held = px !== null || R.top + rest.y < vh * .08 || (touch && R.top + rest.y < vh * .6);
      var tx = rest.x, ty = rest.y;
      if (held) { if (px !== null) { tx = px - R.left; ty = py - R.top; } else { tx = window.innerWidth * .62; ty = vh * .55 - R.top; } }
      s.vx = (s.vx + (tx - s.x) * (held ? .09 : .06) * dt) * Math.pow(.55, dt); s.vy = (s.vy + (ty - s.y) * (held ? .09 : .06) * dt) * Math.pow(.55, dt);
      s.x += s.vx * dt; s.y += s.vy * dt;
      s.rot += ((held ? Math.max(-12, Math.min(12, s.vx * .7)) : 0) - s.rot) * .12;
      s.sc += ((held ? 1.08 : 1) - s.sc) * .1;
      el.style.transform = 'translate3d(' + (s.x - 18) + 'px,' + (s.y - 20) + 'px,0) rotate(' + s.rot.toFixed(2) + 'deg) scale(' + s.sc.toFixed(3) + ')';
      spot.style.transform = 'translate3d(' + s.x + 'px,' + s.y + 'px,0)';
      hint.classList.toggle('off', held);
      items.forEach(function (it) {
        var dy = it.y - s.y, o = it.base;
        if (dy < 300 && dy > -300) o = it.base + (1 - it.base) * Math.pow(cl(1 - Math.hypot(it.row ? 0 : it.x - s.x, dy) / 240), 1.1);
        o = Math.round(o * 100) / 100;
        if (o !== it.o) {
          it.o = o;
          it.el.style.setProperty('--o', o);
        }
      });
      if (Math.abs(tx - s.x) > .4 || Math.abs(ty - s.y) > .4 || Math.abs(s.vx) > .05 || Math.abs(s.vy) > .05 || Math.abs(s.rot) > .2) kick();
    }
    pr.addEventListener('pointermove', function (e) { px = e.clientX; py = e.clientY; kick(); });
    pr.addEventListener('pointerleave', function () { px = null; kick(); });
    window.addEventListener('scroll', kick, { passive: true });
    var m = null; function later() { clearTimeout(m); m = setTimeout(measure, 120); }
    window.addEventListener('resize', later); window.addEventListener('load', later);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(later);
    if (window.ResizeObserver) new ResizeObserver(later).observe(pr);
    measure();
  }

  /* team: hovering or focusing a row shows that person's portrait beside it */
  var tl = $('.tl')[0], av = $('.tl-av')[0];
  if (tl && av) {
    var faces = $('.tl-av>div');
    $('.tl-r').forEach(function (r, i) {
      function on() {
        faces.forEach(function (f, j) { f.classList.toggle('on', j === i); });
        av.style.transform = 'translateY(' + (r.offsetTop + r.offsetHeight / 2 - av.offsetHeight / 2) + 'px)'; av.classList.add('on');
      }
      r.addEventListener('mouseenter', on); r.addEventListener('focus', on);
    });
    function off() { av.classList.remove('on'); }
    tl.addEventListener('mouseleave', off); tl.addEventListener('focusout', off);
  }
})();
