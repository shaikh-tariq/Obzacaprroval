/* ===== OBZAC — Careers Page Interactions ===== */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- open roles: filter + accordion ---------- */
  var roles = $$('.cr-role'), chips = $$('.cr-chip'), countEl = $('#crCount');

  function setOpen(item, open) {
    var btn = $('.cr-role-h', item), panel = $('.cr-role-p', item);
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    item.classList.toggle('open', open);
    panel.hidden = !open;
  }

  roles.forEach(function (item) {
    var btn = $('.cr-role-h', item);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') !== 'true';
      roles.forEach(function (o) {
        if (o !== item && $('.cr-role-h', o) && $('.cr-role-h', o).getAttribute('aria-expanded') === 'true') {
          setOpen(o, false);
        }
      });
      setOpen(item, open);
    });
  });

  /* sliding pill behind active filter */
  var chipBox = $('.cr-chips'), pill = null;
  if (chipBox) {
    pill = document.createElement('i');
    pill.className = 'cr-pill';
    pill.setAttribute('aria-hidden', 'true');
    chipBox.insertBefore(pill, chipBox.firstChild);
    chipBox.classList.add('has-pill');
  }

  function movePill(instant) {
    var on = chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; })[0];
    if (!pill || !on) return;
    if (instant) pill.style.transition = 'none';
    pill.style.width = on.offsetWidth + 'px';
    pill.style.height = on.offsetHeight + 'px';
    pill.style.transform = 'translate3d(' + on.offsetLeft + 'px,' + on.offsetTop + 'px, 0)';
    if (instant) {
      void pill.offsetWidth;
      pill.style.transition = '';
    }
  }

  movePill(true);
  window.addEventListener('resize', function () { movePill(true); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { movePill(true); });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-f'), shown = 0;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      movePill(false);
      roles.forEach(function (item) {
        var team = item.getAttribute('data-team');
        var ok = (f === 'all' || team === f);
        item.hidden = !ok;
        if (ok) shown++;
        else setOpen(item, false);
      });
      if (countEl) {
        countEl.textContent = 'Showing ' + shown + (shown === 1 ? ' role' : ' roles');
      }
    });
  });

  /* ---------- count-up numbers ---------- */
  var countEls = $$('[data-count]');
  if ('IntersectionObserver' in window && countEls.length) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countObs.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count')) || 0;
        var dec = (el.getAttribute('data-count').split('.')[1] || '').length;
        var start = 0, duration = 1600, startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          var cur = start + (target - start) * ease;
          el.textContent = cur.toFixed(dec);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toFixed(dec);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    countEls.forEach(function (el) { countObs.observe(el); });
  }

  /* ---------- hiring process: progress line ---------- */
  var stepsBox = $('.cr-steps'), lineTrack = $('.cr-line'), stepLine = $('.cr-line i'), steps = $$('.cr-step');
  function updateSteps() {
    if (!stepsBox || !lineTrack || !stepLine) return;
    var lastDot = steps.length && steps[steps.length - 1].querySelector('.cr-dot');
    if (lastDot) {
      var trackRect = lineTrack.getBoundingClientRect();
      var dotRect = lastDot.getBoundingClientRect();
      lineTrack.style.height = Math.max(0, dotRect.top + dotRect.height / 2 - trackRect.top) + 'px';
    }

    var rect = stepsBox.getBoundingClientRect();
    var vh = window.innerHeight;
    var start = vh * 0.75, end = vh * 0.25;
    var total = rect.height;
    var current = start - rect.top;
    var progress = Math.max(0, Math.min(1, current / total));
    stepLine.style.height = (progress * 100) + '%';

    steps.forEach(function (step) {
      var r = step.getBoundingClientRect();
      step.classList.toggle('on', r.top < vh * 0.65);
    });
  }

  window.addEventListener('scroll', updateSteps, { passive: true });
  window.addEventListener('resize', updateSteps);
  updateSteps();

  /* ---------- scroll progress bar ---------- */
  var bar = $('.cr-progress') || document.createElement('div');
  if (!bar.parentNode) {
    bar.className = 'cr-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
  }

  function updateProgressBar() {
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    var pct = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    bar.style.transform = 'scaleX(' + pct + ')';
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  /* ---------- interactive hero orb parallax & 3D tilt ---------- */
  var hero = $('.cr-hero'), orbStage = $('#crOrbStage'), badges = $$('.cr-badge');
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hero && orbStage && !reduceMotion) {
    var targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) - 0.5;
      var y = ((e.clientY - rect.top) / rect.height) - 0.5;
      targetX = x * 18;
      targetY = y * 16;
    }, { passive: true });

    hero.addEventListener('pointerleave', function () {
      targetX = 0;
      targetY = 0;
    });

    function renderParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      orbStage.style.transform = 'perspective(900px) rotateX(' + (-currentY * 0.45).toFixed(2) + 'deg) rotateY(' + (currentX * 0.45).toFixed(2) + 'deg) translate3d(' + (currentX * 0.2).toFixed(2) + 'px, ' + (currentY * 0.2).toFixed(2) + 'px, 0)';

      badges.forEach(function (badge) {
        var depth = parseFloat(badge.getAttribute('data-depth')) || 0.15;
        var bx = (currentX * depth * 2.2).toFixed(2);
        var by = (currentY * depth * 2.2).toFixed(2);
        badge.style.transform = 'translate3d(' + bx + 'px, ' + by + 'px, 15px)';
      });

      requestAnimationFrame(renderParallax);
    }
    renderParallax();
  }

  /* ---------- interactive radar scan status pill & center core ---------- */
  var core = $('#crCenterCore'), statusPill = $('#crRadarStatus');
  var radarQuotes = [
    'Growth Radar: Tracking Alpha',
    'Target Acquired: +185% ROAS',
    'Scaling Channels: Meta & Google',
    'Algorithm Beat: #1 Search Rank',
    'Retention Engine: Active 24/7'
  ];
  var quoteIdx = 0;

  function triggerRadarBoost() {
    quoteIdx = (quoteIdx + 1) % radarQuotes.length;
    if (statusPill) {
      var lbl = statusPill.querySelector('.cr-radar-label');
      if (lbl) {
        lbl.style.opacity = '0';
        lbl.style.transform = 'translateY(4px)';
        setTimeout(function () {
          lbl.textContent = radarQuotes[quoteIdx];
          lbl.style.opacity = '1';
          lbl.style.transform = 'translateY(0)';
        }, 160);
      }
    }
    if (orbStage) {
      orbStage.classList.add('cr-boost');
      setTimeout(function () { orbStage.classList.remove('cr-boost'); }, 1400);
    }
  }

  if (core) {
    core.addEventListener('click', triggerRadarBoost);
    core.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerRadarBoost();
      }
    });
  }

  if (statusPill) {
    statusPill.addEventListener('click', triggerRadarBoost);
  }
})();
