/* Scroll reveals for every section. Elements are tagged here, so no extra markup is needed.
   Reduced-motion users (or browsers without IntersectionObserver) get no hiding at all. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, hasIO = 'IntersectionObserver' in window;
  function $(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  var io = hasIO && !reduce ? new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting || x.boundingClientRect.top < 0) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  function tag(list, mod) {
    if (!io) return;
    list.forEach(function (el, i) {
      if (el.hasAttribute('data-rv')) return;
      el.setAttribute('data-rv', '');
      if (mod) el.style.setProperty('--d', (i % mod) * 90 + 'ms');
      io.observe(el);
    });
  }
  tag($('.proof-cap,.proof-vp,.svc-kick,.svc-head,.svc-cta,.below'));
  $('.t-sec').forEach(function (s) { tag($('.kick,.t-h', s)); });
  tag($('.stats-g>div'), 5); tag($('.cs'), 3); tag($('.why-i'), 2); tag($('.pr-g li'), 4); tag($('.tm'), 3);
  var svl = document.getElementById('svcl');
  if (svl) { tag($('.svw-wrap', svl)); if (io) new MutationObserver(function () { tag($('.svw-wrap', svl)); }).observe(svl, { childList: true, subtree: true }); }
})();
