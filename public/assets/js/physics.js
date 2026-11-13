/* =============================================================
   OBZAC | Tiny rigid-body physics
   Each software tag is a CAPSULE (a pill is exactly that shape).
   Handles gravity, bounce, friction, tag-to-tag collisions, a floor
   and two side walls. No library needed, so nothing extra to load.

   Public API (window.OBZAC.physics):
     createBody(el, x, y, angle)  -> body for a DOM element
     createWorld(options)         -> world holding bodies + bounds
     step(world, dt)              -> advance the world by dt seconds
   Units are CSS pixels, y points down.
   ============================================================= */
(function (global) {
  'use strict';
  var OBZAC = (global.OBZAC = global.OBZAC || {});

  var GRAVITY = 1700;     // px / s^2
  var RESTITUTION = 0.18; // bounciness
  var FRICTION = 0.45;
  var SOLVER_PASSES = 6;

  /* ---------- bodies ---------- */
  function createBody(el, x, y, angle) {
    var w = el.offsetWidth, h = el.offsetHeight, mass = w * h;
    return {
      el: el, w: w, h: h,
      r: h / 2,              // capsule radius
      half: (w - h) / 2,     // half length of the capsule's core segment
      x: x, y: y, angle: angle,
      vx: 0, vy: 0, spin: 0,
      invMass: 1 / mass,
      invInertia: 1 / (mass * (w * w + h * h) / 12),
      spawnAt: 0,            // seconds after start before it drops
      live: false
    };
  }

  function createWorld(o) {
    return {
      bodies: [], time: 0,
      floor: o.floor,        // y of the floor (null = no floor, tags fall away)
      left: o.left, right: o.right, wallHeight: o.wallHeight
    };
  }

  /* ---------- geometry ---------- */
  function endpoints(b) {
    var c = Math.cos(b.angle) * b.half, s = Math.sin(b.angle) * b.half;
    return [b.x - c, b.y - s, b.x + c, b.y + s];
  }

  function clamp01(v) { return Math.max(0, Math.min(1, v)); }

  // Closest points between two segments (Ericson, Real-Time Collision Detection)
  function closestPoints(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y) {
    var d1x = q1x - p1x, d1y = q1y - p1y, d2x = q2x - p2x, d2y = q2y - p2y;
    var rx = p1x - p2x, ry = p1y - p2y;
    var a = d1x * d1x + d1y * d1y, e = d2x * d2x + d2y * d2y;
    var f = d2x * rx + d2y * ry, c = d1x * rx + d1y * ry, b = d1x * d2x + d1y * d2y;
    var den = a * e - b * b, s, t;
    s = den > 1e-9 ? clamp01((b * f - c * e) / den) : 0;
    t = (b * s + f) / e;
    if (t < 0) { t = 0; s = clamp01(-c / a); }
    else if (t > 1) { t = 1; s = clamp01((b - c) / a); }
    return [p1x + d1x * s, p1y + d1y * s, p2x + d2x * t, p2y + d2y * t];
  }

  /* ---------- contact resolution ---------- */
  // A is pushed along -n, B (if any) along +n. B === null means a static surface.
  function resolve(A, B, nx, ny, cx, cy, penetration) {
    var rax = cx - A.x, ray = cy - A.y;
    var rbx = B ? cx - B.x : 0, rby = B ? cy - B.y : 0;
    var vax = A.vx - A.spin * ray, vay = A.vy + A.spin * rax;
    var vbx = B ? B.vx - B.spin * rby : 0, vby = B ? B.vy + B.spin * rbx : 0;
    var relx = vbx - vax, rely = vby - vay, vn = relx * nx + rely * ny;
    var raN = rax * ny - ray * nx, rbN = B ? rbx * ny - rby * nx : 0;
    var k = A.invMass + A.invInertia * raN * raN + (B ? B.invMass + B.invInertia * rbN * rbN : 0);

    if (vn < 0) {
      // normal impulse (no bounce at tiny speeds so piles can settle)
      var j = -(1 + RESTITUTION) * vn / k;
      if (-vn < 60) j = -vn / k;
      A.vx -= j * nx * A.invMass; A.vy -= j * ny * A.invMass; A.spin -= A.invInertia * raN * j;
      if (B) { B.vx += j * nx * B.invMass; B.vy += j * ny * B.invMass; B.spin += B.invInertia * rbN * j; }

      // friction impulse along the surface
      var tx = -ny, ty = nx, vt = relx * tx + rely * ty;
      var raT = rax * ty - ray * tx, rbT = B ? rbx * ty - rby * tx : 0;
      var kt = A.invMass + A.invInertia * raT * raT + (B ? B.invMass + B.invInertia * rbT * rbT : 0);
      var jt = Math.max(-FRICTION * j, Math.min(FRICTION * j, -vt / kt));
      A.vx -= jt * tx * A.invMass; A.vy -= jt * ty * A.invMass; A.spin -= A.invInertia * raT * jt;
      if (B) { B.vx += jt * tx * B.invMass; B.vy += jt * ty * B.invMass; B.spin += B.invInertia * rbT * jt; }
    }

    // push overlapping bodies apart
    var corr = Math.max(0, penetration - 0.5) * 0.6 / (A.invMass + (B ? B.invMass : 0));
    A.x -= nx * corr * A.invMass; A.y -= ny * corr * A.invMass;
    if (B) { B.x += nx * corr * B.invMass; B.y += ny * corr * B.invMass; }
  }

  /* ---------- simulation step ---------- */
  function step(world, dt) {
    var bodies = world.bodies, i, j, pass, A, B;
    world.time += dt;

    // integrate
    for (i = 0; i < bodies.length; i++) {
      A = bodies[i];
      if (!A.live) { if (world.time >= A.spawnAt) A.live = true; else continue; }
      A.vy += GRAVITY * dt;
      A.vx *= 0.9993; A.spin *= 0.985;
      A.x += A.vx * dt; A.y += A.vy * dt; A.angle += A.spin * dt;
    }

    // solve contacts a few times per step for stable stacking
    for (pass = 0; pass < SOLVER_PASSES; pass++) {
      for (i = 0; i < bodies.length; i++) {
        A = bodies[i];
        if (!A.live) continue;
        var e = endpoints(A);

        // floor and walls act on both end caps of the capsule
        for (j = 0; j < 2; j++) {
          var px = e[j * 2], py = e[j * 2 + 1];
          if (world.floor !== null && py + A.r > world.floor && A.y < world.floor + A.r * 2) {
            resolve(A, null, 0, 1, px, py + A.r, py + A.r - world.floor);
          }
          if (px - A.r < world.left && py > world.floor - world.wallHeight) {
            resolve(A, null, -1, 0, px - A.r, py, world.left - (px - A.r));
          }
          if (px + A.r > world.right && py > world.floor - world.wallHeight) {
            resolve(A, null, 1, 0, px + A.r, py, px + A.r - world.right);
          }
        }

        // tag against tag
        for (j = i + 1; j < bodies.length; j++) {
          B = bodies[j];
          if (!B.live) continue;
          var eb = endpoints(B);
          var cp = closestPoints(e[0], e[1], e[2], e[3], eb[0], eb[1], eb[2], eb[3]);
          var dx = cp[2] - cp[0], dy = cp[3] - cp[1], d = Math.hypot(dx, dy), reach = A.r + B.r;
          if (d < reach) {
            var nx = d < 1e-6 ? 0 : dx / d, ny = d < 1e-6 ? 1 : dy / d;
            resolve(A, B, nx, ny, (cp[0] + cp[2]) / 2, (cp[1] + cp[3]) / 2, reach - d);
          }
        }
      }
    }
  }

  OBZAC.physics = { createBody: createBody, createWorld: createWorld, step: step };
})(window);
