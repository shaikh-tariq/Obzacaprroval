/* Homepage guide line: as you scroll, a line starts just after "brands that grow" and draws a line (same weight and dot as the story section) down through the brand strip and the video,
   along the services and out of the screen. The path is rebuilt from the real section positions on resize. */
(function () {
  'use strict';
  var svg = document.getElementById('hl');
  if (!svg) return;
  var path = document.getElementById('hlPath'), tip = document.getElementById('hlTip');
  var hero = document.getElementById('home-hero'), ws = hero ? hero.querySelectorAll('.h-title .w-i') : [], dot = ws[ws.length - 1]; // the word "grow"
  var proof = document.querySelector('.proof'), reel = document.getElementById('work'), svc = document.getElementById('services');
  if (!hero || !dot || !proof || !reel || !svc) return;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STEP = 6, built = false, L = 0, S = [], Y0 = 0, s0 = .3, sF = 1, dl = 0, last = performance.now();
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var ease = function (x) { return x * x * (3 - 2 * x); };
  function docRect(el) { var r = el.getBoundingClientRect(); return { t: r.top + scrollY, b: r.bottom + scrollY, l: r.left, r: r.right, w: r.width, h: r.height }; }
  function smooth(P) { // Catmull-Rom through the points, written as cubic Beziers
    var d = 'M' + P[0][0].toFixed(1) + ' ' + P[0][1].toFixed(1);
    for (var i = 0; i < P.length - 1; i++) {
      var a = P[Math.max(0, i - 1)], b = P[i], c = P[i + 1], e = P[Math.min(P.length - 1, i + 2)], k = 6;
      d += ' C' + (b[0] + (c[0] - a[0]) / k).toFixed(1) + ' ' + (b[1] + (c[1] - a[1]) / k).toFixed(1) + ' ' +
        (c[0] - (e[0] - b[0]) / k).toFixed(1) + ' ' + (c[1] - (e[1] - b[1]) / k).toFixed(1) + ' ' + c[0].toFixed(1) + ' ' + c[1].toFixed(1);
    }
    return d;
  }
  function build() {
    var W = svg.clientWidth || innerWidth, narrow = W < 820;
    var fs = parseFloat(getComputedStyle(dot).fontSize), dr = docRect(dot);
    var x0 = dr.r + fs * .12, y0 = dr.t + fs * .82;      // just after "grow", on the baseline
    var h = docRect(hero), p = docRect(proof), v = docRect(reel), s = docRect(svc);
    var R = narrow ? .93 : .88, Lx = narrow ? .05 : .07;
    var P = [
      [x0, y0],
      [Math.min(W * (R + .02), x0 + W * .1), y0 + h.h * .14],
      [W * R, h.b - h.h * .12],
      [W * (R - .03), p.t + p.h * .5],
      [W * (R + .02), v.t + v.h * .16],
      [W * .5, v.t + v.h * .55],
      [W * Lx, v.b - v.h * .1],
      [W * Lx, s.t + s.h * .3],
      [W * (Lx + .03), s.t + s.h * .72],
      [W * .32, s.b - (narrow ? 18 : Math.min(70, s.h * .05))],
      [W * .72, s.b - (narrow ? 30 : Math.min(110, s.h * .08))],
      [W + 160, s.b - s.h * .2]
    ];
    var H = s.b + 40;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.style.height = H + 'px';
    path.setAttribute('d', smooth(P));
    path.setAttribute('stroke-width', narrow ? 7 : 13);
    L = path.getTotalLength(); S = [];
    for (var l = 0; l <= L; l += STEP) S.push(path.getPointAtLength(l).y);
    Y0 = y0; s0 = Math.max(.12, fs * .2 / 76); sF = narrow ? .32 : .52;
    built = true;
  }
  function frame(now) {
    if (!svg.isConnected) return;
    var dt = Math.min(.05, (now - last) / 1000) || .016; last = now;
    if (!hero.classList.contains('is-ready')) { requestAnimationFrame(frame); return; }
    if (!built) { build(); hero.classList.add('hl-on'); svg.style.visibility = 'visible'; }
    var vh = innerHeight, y = scrollY, k = Math.min(1, y / (vh * .35));
    var target = Y0 + (y + vh * .62 - Y0) * k, i = 0;
    while (i < S.length && S[i] <= target) i++;
    var want = Math.min(L, Math.max(0, (i - 1) * STEP));
    dl = RM ? want : dl + (want - dl) * Math.min(1, dt * 6);
    if (Math.abs(want - dl) < .3) dl = want;
    path.style.strokeDasharray = dl.toFixed(1) + ' ' + (L + 10).toFixed(1);
    path.style.visibility = dl < 1 ? 'hidden' : 'visible'; tip.style.visibility = path.style.visibility;
    var pt = path.getPointAtLength(dl), sc = lerp(s0, sF, ease(Math.min(1, dl / 220)));
    tip.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ' ' + pt.y.toFixed(1) + ') scale(' + sc.toFixed(3) + ')');
    requestAnimationFrame(frame);
  }
  function rebuild() { built = false; }
  addEventListener('resize', rebuild);
  addEventListener('load', rebuild);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
  setTimeout(rebuild, 1500);
  requestAnimationFrame(frame);
})();
