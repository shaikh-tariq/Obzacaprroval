/* Results counter (scroll-driven), stats count-up, process line. Edit numbers in index.html (data-to, data-dec, data-pre, data-suf). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches, hasIO = 'IntersectionObserver' in window;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  var cnt = document.querySelector('.cnt');
  if (cnt) {
    var blob = cnt.querySelector('.cnt-blob'), num = cnt.querySelector('.cnt-n'), cap = cnt.querySelector('.cnt-cap'), tick = false;
    var draw = function () {
      tick = false;
      var p = 1;
      if (!reduce) { var r = cnt.getBoundingClientRect(), span = cnt.offsetHeight - window.innerHeight; p = Math.min(1, Math.max(0, -r.top / span)); }
      var b = Math.min(1, p / .8), e = ease(b), K = Math.min(.88 * window.innerWidth / blob.offsetWidth, .8 * window.innerHeight / blob.offsetHeight);
      blob.style.transform = 'translate(-50%,-50%) scale(' + lerp(1, K, e) + ')';
      num.textContent = Math.round(b * 100) + '%';
      num.style.transform = 'scale(' + lerp(.3, 1, e) + ')';
      cap.style.opacity = Math.min(1, Math.max(0, (p - .82) / .12));
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(draw); } }, { passive: true });
    window.addEventListener('resize', draw);
    draw();
  }

  var nums = [].slice.call(document.querySelectorAll('.st-n'));
  function fmt(el, v) { var d = +el.getAttribute('data-dec') || 0; el.textContent = (el.getAttribute('data-pre') || '') + v.toFixed(d) + (el.getAttribute('data-suf') || ''); }
  if (nums.length && hasIO && !reduce) {
    nums.forEach(function (el) { fmt(el, 0); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (!x.isIntersecting) return;
        io.unobserve(x.target);
        var el = x.target, to = +el.getAttribute('data-to'), t0 = performance.now();
        (function step(t) { var k = Math.min(1, (t - t0) / 1400); fmt(el, to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(t0);
      });
    }, { threshold: .6 });
    nums.forEach(function (el) { io.observe(el); });
  }

  var pr = document.querySelector('.pr');
  if (pr) { if (hasIO) new IntersectionObserver(function (e, o) { if (e[0].isIntersecting) { pr.classList.add('in'); o.disconnect(); } }, { threshold: .35 }).observe(pr); else pr.classList.add('no-io'); }
})();
