/* OBZAC | Shared header behaviour (same on every page)
   - marks the current page's link
   - shrinks slightly once you scroll
   - switches to light text over dark sections by sampling what sits under the header
   - "Back to top" scrolls smoothly */
(function () {
  'use strict';
  var hd = document.getElementById('siteHd');
  if (!hd) return;

  /* current page */
  var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (file.indexOf('.') < 0) file += '.html';
  [].forEach.call(hd.querySelectorAll('.hd-nav a'), function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].toLowerCase().split('/').pop();
    if (href && href === file) a.setAttribute('aria-current', 'page');
  });

  /* is the area under the header dark? */
  function lum(c) {
    var m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null;
    var v = m[1].split(',').map(parseFloat);
    if (v.length > 3 && v[3] < 0.5) return null;            // mostly transparent: keep looking
    return (0.299 * v[0] + 0.587 * v[1] + 0.114 * v[2]) / 255;
  }
  function darkAt(x, y) {
    var els = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [];
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (hd.contains(el)) continue;
      if (el.closest('.stage.dark')) return true;               // homepage story once it turns dark
      if (el.tagName === 'CANVAS' || el.tagName === 'IMG' || el.tagName === 'VIDEO') continue;
      var l = lum(getComputedStyle(el).backgroundColor);
      if (l !== null) return l < 0.45;
    }
    var b = lum(getComputedStyle(document.body).backgroundColor);
    return b !== null && b < 0.45;
  }
  var ticking = false;
  function update() {
    ticking = false;
    var y = hd.offsetHeight + 2, w = innerWidth;
    var dark = [w * 0.2, w * 0.5, w * 0.8].filter(function (x) { return darkAt(x, y); }).length >= 2;
    hd.classList.toggle('dark', dark);
    hd.classList.toggle('small', scrollY > 30);
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  addEventListener('load', req);
  setInterval(req, 600);   // catches scroll-driven scenes that change colour on their own
  update();

  /* back to top */
  [].forEach.call(document.querySelectorAll('[data-top]'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
