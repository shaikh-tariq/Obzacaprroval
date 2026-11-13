/* =============================================================
   OBZAC | Services section
   Builds the stacked word list from OBZAC.services and runs the hover:
     hover a word -> word darkens, card stack springs up behind it,
     software tags FALL under gravity and pile up on the word,
     "Learn more" fades in, neighbours slide apart.
   Touch devices: tap a word to open / close.
   Needs (loaded before this file): data/services-data.js, physics.js
   ============================================================= */
(function () {
  'use strict';

  var OBZAC = window.OBZAC, physics = OBZAC.physics;
  var SV = OBZAC.services, IL = OBZAC.icons;

  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = matchMedia('(hover: hover)').matches;
  var STEP = 1 / 120;       // physics time step
  var FADE_OUT = 0.5;       // seconds for tags to fade when released

  var listEl = document.getElementById('svcl');
  var items = [];           // one entry per service: { el, wrap, world }
  var running = [];         // worlds being simulated right now
  var rafId = 0, lastTime = 0, accumulator = 0;

  /* ---------- build the list ---------- */
  function buildItem(service) {
    var el = document.createElement('div');
    el.className = 'svi';
    el.innerHTML =
      '<div class="svw-wrap">' +
        '<div class="card" style="--a:' + service.a + ';--b:' + service.b + '">' +
          '<div class="c c3"></div><div class="c c2"></div>' +
          '<div class="c c1"><svg viewBox="0 0 400 300" aria-hidden="true">' + IL[service.il] + '</svg></div>' +
        '</div>' +
        '<h3 class="svw" tabindex="0" aria-label="' + service.full + '">' + service.w + '</h3>' +
        service.k.map(function (name) { return '<span class="pill">' + name + '</span>'; }).join('') +
      '</div>' +
      '<a class="more" href="#services-page" tabindex="-1">Learn more</a>';
    listEl.appendChild(el);
    return { el: el, wrap: el.querySelector('.svw-wrap'), link: el.querySelector('.more'), world: null };
  }

  /* ---------- physics world per open item ---------- */
  function startWorld(item) {
    stopWorld(item, true);
    var wrap = item.wrap;
    var tags = [].slice.call(wrap.querySelectorAll('.pill'));
    var ww = wrap.offsetWidth, wh = wrap.offsetHeight;
    var fontSize = parseFloat(getComputedStyle(wrap.querySelector('.svw')).fontSize);
    var cardH = wrap.querySelector('.card').offsetHeight;
    var half = Math.max(ww, Math.min(720, wrap.parentNode.clientWidth - 40)) / 2;
    var cx = ww / 2;

    var world = physics.createWorld({
      floor: wh - fontSize * 0.04, wallHeight: fontSize * 2.2,
      left: cx - half, right: cx + half
    });
    world.item = item; world.fade = 1; world.releasing = false;

    tags.forEach(function (el, i) {
      // each tag appears somewhere behind the card, then drops, one after another
      var x = cx + (Math.random() - 0.5) * Math.min(ww * 0.5, 260);
      var y = fontSize * 0.3 - cardH * (0.35 + Math.random() * 0.5);
      var body = physics.createBody(el, x, y, (Math.random() - 0.5) * 1.1);
      body.vx = (Math.random() - 0.5) * 200;
      body.vy = 40 + Math.random() * 80;
      body.spin = (Math.random() - 0.5) * 4;
      body.spawnAt = reducedMotion ? 0 : 0.2 + i * 0.09;
      if (reducedMotion) body.live = true;
      world.bodies.push(body);
    });

    item.world = world;
    if (reducedMotion) {                     // no motion: settle instantly
      for (var n = 0; n < 240; n++) physics.step(world, STEP);
      paint(world);
      return;
    }
    running.push(world);
    paint(world);
    if (!rafId) { lastTime = performance.now(); rafId = requestAnimationFrame(tick); }
  }

  function stopWorld(item, immediately) {
    var world = item.world;
    if (!world) return;
    if (immediately || reducedMotion) {
      world.bodies.forEach(function (b) { b.el.style.opacity = 0; });
      running = running.filter(function (w) { return w !== world; });
      item.world = null;
      return;
    }
    world.floor = null;                      // remove the floor: tags fall away while fading
    world.releasing = true;
    world.bodies.forEach(function (b) { b.live = true; b.vy += 80; });
  }

  function paint(world) {
    world.bodies.forEach(function (b) {
      b.el.style.opacity = b.live ? world.fade : 0;
      b.el.style.transform =
        'translate(' + (b.x - b.w / 2).toFixed(1) + 'px,' + (b.y - b.h / 2).toFixed(1) + 'px) ' +
        'rotate(' + b.angle.toFixed(3) + 'rad)';
    });
  }

  function tick(now) {
    var dt = Math.min(0.05, (now - lastTime) / 1000) || 0.016;
    lastTime = now;
    accumulator += dt;
    while (accumulator >= STEP) {
      running.forEach(function (w) { physics.step(w, STEP); });
      accumulator -= STEP;
    }
    running = running.filter(function (w) {
      if (w.releasing) {
        w.fade = Math.max(0, w.fade - dt / FADE_OUT);
        if (w.fade <= 0) {
          w.bodies.forEach(function (b) { b.el.style.opacity = 0; });
          w.item.world = null;
          return false;
        }
      }
      paint(w);
      return true;
    });
    rafId = running.length ? requestAnimationFrame(tick) : 0;
  }

  /* ---------- open / close ---------- */
  function open(item) {
    if (item.el.classList.contains('on')) return;
    items.forEach(function (other) { if (other !== item) close(other); });
    item.el.classList.add('on');
    item.link.tabIndex = 0;
    startWorld(item);
  }

  function close(item) {
    if (!item.el.classList.contains('on')) return;
    item.el.classList.remove('on');
    item.link.tabIndex = -1;
    stopWorld(item);
  }

  function bind(item) {
    var word = item.el.querySelector('.svw');
    if (canHover) {
      // Hover zone is the word while closed; once open it also covers the card,
      // tags and link, so the pop-up never flickers.
      // small hover delays so passing the cursor across the list doesn't make it jump
      item.el.addEventListener('mouseover', function (e) {
        clearTimeout(item.closeT);
        if (item.el.classList.contains('on')) return;
        if (e.target.closest('.svw')) { clearTimeout(item.openT); item.openT = setTimeout(function () { open(item); }, 90); }
      });
      item.el.addEventListener('mouseleave', function () {
        clearTimeout(item.openT);
        item.closeT = setTimeout(function () { close(item); }, 160);
      });
    } else {
      word.addEventListener('click', function () {
        if (item.el.classList.contains('on')) close(item); else open(item);
      });
    }
    // keyboard: focusing the word opens it, leaving the item closes it
    word.addEventListener('focusin', function () { open(item); });
    item.el.addEventListener('focusout', function (e) {
      if (!item.el.contains(e.relatedTarget)) close(item);
    });
  }

  /* ---------- sizing (CSS reads --fs / --ww) ---------- */
  function measure() {
    items.forEach(function (item) {
      var word = item.el.querySelector('.svw');
      item.el.style.setProperty('--ww', word.offsetWidth + 'px');
      item.el.style.setProperty('--fs', parseFloat(getComputedStyle(word).fontSize) + 'px');
    });
  }

  /* ---------- init ---------- */
  SV.forEach(function (service) {
    var item = buildItem(service);
    items.push(item);
    bind(item);
  });
  measure();
  addEventListener('resize', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
})();
