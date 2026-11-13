# OBZAC Website — Technical Architecture & Audit Report

**Review date:** 2026-11-02  
**Scope:** Read-only review of the project source, deployment configuration, dependencies, and existing build output. In a separately authorized follow-up, only the Netlify and Vercel header configurations were changed.
**Approach:** Static inspection; `npm ls --depth=0` and `npm outdated` were run. The existing production build was not regenerated. No browser-based accessibility, performance, or deployment tests were performed.

## Executive summary

This is a small React 18 single-page marketing website built with Vite and React Router. Page content is rendered by React, while each route loads its own CSS and legacy interaction scripts from `public/assets`. The repository includes both Netlify and Vercel deployment configuration, a lockfile, a README, a not-found route, and a generated `dist/` build.

The main operational risks are oversized media, a relatively large eager-loaded JavaScript bundle, incomplete contact/newsletter integrations, placeholder contact details, and missing quality/tooling safeguards. No exploitable application vulnerability or exposed credential was confirmed in the reviewed workspace. An informational security-header gap was identified and then addressed in both hosting configurations; deployed headers still need verification.

### Highest-priority actions (recommendations only)

1. Replace or compress the 33.4 MB showreel and large JPEGs; add responsive image/video delivery while preserving the visual experience.
2. Connect and test contact/newsletter flows, and replace sample email/phone details before launch.
3. Add route-level code splitting and evaluate production bundle/network behavior on mobile.
4. Establish tests, lint/format checks, and accessibility checks in CI.
5. Verify the newly configured security headers on actual deployed responses.
6. Publish a sitemap and correct the README route list; ensure unknown routes return an appropriate HTTP 404 rather than only a client-side not-found screen.

## 1. Project structure and file purposes

The authored tree contains **71 files** outside generated `dist/` and installed `node_modules/`: 8 root files, 20 under `src/`, and 43 under `public/`.

### Root

| File | Purpose / notes |
|---|---|
| `.gitignore` | Excludes `node_modules/`, `dist/`, and `.vite/`. |
| `README.md` | Setup/build instructions and route overview. The listed routes omit `/careers`, although the app implements it. |
| `index.html` | Vite SPA shell, document language, default title/description, favicon, initial CSS, and entry script. |
| `package.json` | Project metadata, scripts, and direct dependencies. Scripts are limited to `dev`, `build`, and `preview`. |
| `package-lock.json` | npm lockfile v3 with resolved dependency versions and integrity data. |
| `vite.config.js` | Enables the React plugin and configures `dist` as the build output. |
| `netlify.toml` | Netlify build/publish settings and a catch-all SPA rewrite. |
| `vercel.json` | Vercel route rewrites and response headers/cache policy. |

### `src/`

| File / group | Purpose |
|---|---|
| `main.jsx` | Creates the React root and renders `App`. |
| `App.jsx` | Declares client-side routes, legacy `.html` redirects, `/404`, and wildcard not-found handling. |
| `legacyLifecycle.js` | Fetches and evaluates route-specific scripts; wraps global event/timer/observer APIs to clean up on route changes. |
| `pages/LegacyPage.jsx` | Applies per-page metadata, stylesheet/resource links, scripts, scroll behavior, and mobile navigation. |
| `pages/InternalLink.jsx` | Converts same-origin legacy `.html` links into React Router links. |
| `pages/{Home,About,Careers,Contact,Services,Work,NotFound}Page.jsx` | Thin route wrappers pairing a page configuration/content component with `LegacyPage`. |
| `pages/components/{Home,About,Careers,Contact,Services,Work,NotFound}PageContent.jsx` | Static page markup and route-specific metadata/asset configuration. These contain most of the application content. |
| `pages/components/MobileMenu.jsx` | Responsive mobile navigation, route state, Escape-key close behavior, and navigation links. |

`HomePageContent.jsx` is the largest component (1,336 lines); About, Contact, and Careers are also substantial (753, 704, and 659 lines respectively). Each page content component repeats much of the site header/footer markup.

### `public/`

| Path / files | Purpose |
|---|---|
| `robots.txt` | Permits crawling; sitemap line is a commented placeholder. |
| `site.webmanifest` | Basic app name, display mode, colors, and SVG icon. |
| `assets/css/` | 15 stylesheets: `base.css`, `site.css`, and route/feature styles `about.css`, `careers.css`, `contact.css`, `flow.css`, `hero.css`, `motion.css`, `proof.css`, `reel.css`, `services.css`, `story.css`, `svcpage.css`, `trust.css`, and `work.css`. |
| `assets/js/` | 14 interaction scripts: `about.js`, `careers.js`, `contact.js`, `flow.js`, `hero.js`, `motion.js`, `physics.js`, `proof.js`, `services.js`, `site.js`, `story.js`, `svcpage.js`, `trust.js`, and `work.js`. |
| `assets/js/data/services-data.js` | Data used by the home/services interaction scripts. |
| `assets/img/` | `favicon.svg`, `og-image.png`, four team JPEGs (`team-1.jpg` through `team-4k.jpg`), and four portfolio JPEGs under `work/` (`01-launch.jpg` through `04-store.jpg`). |
| `assets/video/showreel.mp4` | Homepage showreel. |
| `assets/assets/` | Empty nested directory; no content or runtime purpose was found. |

### Generated / installed directories

- `dist/` is present and ignored by `.gitignore`; it contains a prior Vite build, copied public assets, and an approximately **340 KB** JavaScript bundle (raw file size). It is generated output, not the source of truth.
- `node_modules/` is present and ignored. Its contents are installed dependencies and should not be treated as maintained project source.
- No extra source maps, duplicate application entry points, or obvious unused CSS/JS assets were identified. Every listed public stylesheet and script is referenced by a route configuration or its companion script.

## 2. Architecture and runtime behavior

- **Rendering model:** Client-rendered React SPA using `BrowserRouter`; the route tree is eagerly imported from `App.jsx`.
- **Routing:** `/`, `/work`, `/about`, `/services`, `/contact`, and `/careers`; legacy `.html` paths redirect to clean routes. `/404` and unmatched client routes render a not-found page.
- **Page lifecycle:** Route configurations hold title, meta tags, CSS, optional resource links, inline styles/scripts, and public script paths. `LegacyPage` injects these resources when the route mounts and removes them on cleanup.
- **Assets:** Public CSS, JS, images, and video use root-relative/relative asset URLs; these resources are copied rather than bundled through imports.
- **Hosting:** Netlify uses a catch-all HTTP 200 rewrite. Vercel rewrites the app routes to `index.html` and also has a catch-all SPA rewrite.
- **Notable implementation trade-off:** This retains legacy imperative scripts alongside React. The global API wrapping and script evaluation make route setup/teardown more complex than idiomatic component-owned effects; future changes should preserve the lifecycle cleanup guarantees.

## 3. Security audit

Severity reflects the repository configuration reviewed, not any unverified hosting-provider settings.

| # | Severity | File | Lines | Finding | Confidence |
|---|---|---|---|---|---|
| 1 | INFORMATIONAL | `vercel.json`; `netlify.toml` | 26–29; 13–16 | At audit time, Vercel lacked CSP/frame protection and Netlify had no configured security headers. This was a hardening gap, not an independently exploitable vulnerability confirmed in the code. | 9/10 |

**Remediation status:** Following the audit, the user authorized a narrow fix. Both hosting configurations now set `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, and `Content-Security-Policy: frame-ancestors 'none'`. The JSON structure and presence of the Netlify directives were checked locally; actual deployed responses remain unverified.

### Other checks and applicability

- **Credentials/environment:** No obvious credential patterns, `.env` files, or private-key files were identified in the inspected workspace. No secret values are included in this report.
- **Backend/API, SQL, authentication/authorization, uploads, CORS, CSRF:** No server-side API, database, authentication, authorization, or file-upload implementation was found. These checks are therefore not applicable to the current static frontend. Contact forms do not submit to a backend.
- **XSS/injection:** No exploitable user-controlled injection path was confirmed. `legacyLifecycle.js` evaluates scripts fetched from configured same-origin asset paths; the reviewed inputs are repository-controlled, not user-provided. This design still increases the impact of a compromised script asset and merits future simplification.
- **Contact/newsletter behavior:** The contact flow builds a `mailto:` link; the newsletter currently reports that sign-ups are not connected. No server endpoint or associated server-side request-forgery/CSRF surface was found.
- **Error handling:** Script/style load errors are surfaced in the page UI. There is no shared production logging/monitoring integration visible in the source.
- **Dependency advisories:** The security reviewer’s offline audit reported zero known advisories, but its local advisory data may be incomplete. This is not equivalent to a current online vulnerability assessment.
- **Deployment caveat:** Actual response headers, TLS, DNS, access rules, and hosting dashboards were not testable from source. Validate both deployment targets after release.

## 4. Performance audit

### Findings

- **Media payload is the dominant opportunity.** `showreel.mp4` is approximately **33.4 MB**. The largest JPEGs are about **2.0 MB** (`team-1.jpg`), **1.5 MB** (`team-3.jpg`), and **1.2 MB** (`team-4k.jpg`); the four work JPEGs are each about 366–389 KB. This can materially affect mobile load time and data usage.
- Some team images already use `loading="lazy"` and `decoding="async"`; the showreel uses `preload="metadata"`. Continue lazy loading below-the-fold content, and consider responsive `srcset`/modern image formats and adaptive video delivery.
- The existing built JavaScript entry is about **340 KB raw**. Page modules are eagerly imported by `App.jsx`; use route-level lazy loading and measure compressed transfer size before/after.
- Route stylesheets are inserted dynamically, and content stays blank until all configured stylesheets finish loading. Pages depend on external Google Fonts CSS, which may delay first render on slow/unavailable third-party connections.
- `site.js` continuously schedules header sampling with a 600 ms interval in addition to scroll/resize/load listeners. Its work samples `elementsFromPoint` and computed styles; measure its impact and consider event-driven updates if behavior can be preserved.
- Animation scripts and CSS are extensive. Reduced-motion handling exists in styles and scroll behavior, but animation smoothness, layout shifts, GPU compositing, and mobile behavior require browser profiling.
- Vercel sets a one-year immutable cache policy for `/assets/*`. This is suitable only when asset URLs are versioned/hashed or changed URLs are guaranteed on updates; public assets use stable filenames, so stale-cache risk should be checked. Netlify cache policy is not specified here.

### Areas not conclusively measured

No Core Web Vitals, Lighthouse, browser memory profile, network waterfall, gzip/Brotli size, API-request count, or real-device animation test was performed. No API layer exists in the source, so unnecessary API requests are not a current application concern.

## 5. Code quality and maintainability

- Large page components mix page content with route resource configuration; the repeated header/footer markup creates maintenance drift. Extracting shared layout/content units is a future refactor recommendation only.
- Component wrappers and `InternalLink` provide a consistent route adapter, while imperative legacy scripts remain a separate global lifecycle system.
- No test/spec files, test runner configuration, ESLint configuration, Prettier configuration, or editor configuration were found. No automated evidence is available for dead code, unused imports, circular imports, or behavioral regressions.
- No obvious TODO/FIXME/debugger or console logging was found in the initial targeted search. A full lint/static-analysis run was not available.
- The contact and newsletter interactions are not production-complete: the contact form opens the user's mail application, and newsletter submission is local-only. There is no server-side persistence or delivery.
- Several repeated contact links use sample-domain email and zero-filled phone details. Careers content also includes an explicit placeholder-copy note. These should be verified before launch.
- The `legacyLifecycle.js` implementation captures global/document listeners and common timers/observers, but global monkey-patching is a fragile lifecycle boundary. Future work should explicitly test navigation between every route and cleanup of animations/listeners.

## 6. SEO and accessibility

### SEO

- The root HTML contains a default title and description. Route configurations set distinct titles/descriptions after the React page mounts. Home and Careers also define Open Graph metadata; most other routes do not define social-sharing metadata.
- No canonical URLs, sitemap, or structured data were found. `robots.txt` has only a commented sitemap placeholder.
- The Vercel catch-all and Netlify HTTP 200 rewrite can cause unknown paths to receive an HTTP 200 even though React displays a not-found component (a “soft 404”). Verify host-specific status-code behavior and crawler indexing.
- The README omits Careers from its public route list.
- Internal route links were statically reviewed; no confirmed broken route mapping was identified. External destinations and hash targets were not crawled in a browser.
- The not-found page sets `noindex`, which is appropriate for the client-rendered page itself.

### Accessibility

- The markup includes semantic landmarks/headings, image alt text on observed `<img>` elements, accessible labels on the mobile-menu controls, and visible focus styling on the not-found action.
- The mobile menu supports Escape and closes on route change, but does not visibly move focus into the menu or trap/restore focus as a modal navigation pattern would. Verify keyboard-only operation and background tab order.
- Reduced-motion accommodations are present in styles and smooth-scroll behavior. Test each animation-heavy page with OS reduced-motion enabled.
- Contact fields are nested in labels, but the forms use `noValidate`; client validation and feedback should be tested for keyboard and screen-reader announcements. Newsletter signup is not connected.
- Automated WCAG checks, contrast measurements, screen-reader tests, and responsive browser tests were not performed.

## 7. Dependency analysis

| Package | Declared range | Installed | Registry `wanted` | Registry `latest` |
|---|---:|---:|---:|---:|
| `react` | `^18.3.1` | 18.3.1 | 18.3.1 | 19.3.1 |
| `react-dom` | `^18.3.1` | 18.3.1 | 18.3.1 | 19.3.1 |
| `react-router-dom` | `^7.18.4` | 7.18.4 | 7.18.5 | 7.18.5 |
| `vite` (dev) | `^6.3.5` | 6.4.5 | 6.4.5 | 8.3.5 |
| `@vitejs/plugin-react` (dev) | `^4.4.1` | 4.7.0 | 4.7.0 | 6.1.2 |

Versions reflect `npm ls --depth=0` and `npm outdated` at review time. Registry-latest releases cross major-version boundaries for React, Vite, and the React plugin; treat those as planned migrations, not automatic updates. The Router patch update is within the declared range but not currently in the lockfile. No updates or removals were made.

All five declared direct packages appear used by the app/build configuration; no duplicate direct dependencies were identified. A full transitive duplicate analysis was not performed. `package-lock.json` is present and lockfile v3. The offline vulnerability check is advisory-data limited as noted above.

## 8. Missing files and recommended project structure

| File/tooling | Status | Recommendation |
|---|---|---|
| `README.md` | Present | Update route list to include Careers and document the non-connected form behavior/build deployment assumptions. |
| `.gitignore` | Present | Existing ignore rules cover build/install output. |
| `.env.example` | Absent | Add only if future integrations introduce environment variables; no current environment-variable configuration was found. |
| `.editorconfig` | Absent | Recommended to standardize whitespace/line endings across contributors. |
| ESLint config | Absent | Add lint rules for React/JS and unused imports/variables. |
| Prettier config | Absent | Optional; adopt if consistent formatting is desired across contributors. |
| Test configuration and tests | Absent | Add focused route, lifecycle, form, and accessibility tests before significant changes. |
| Error/logging utilities | Absent | Consider centralized error reporting/monitoring if production diagnostics are required; current app has no API layer. |
| Security configuration | Partial | Add consistent headers for each host and verify deployed responses; consider CSP/frame protections compatible with inline scripts, Google Fonts, and legacy behavior. |
| 404 page | Present | Improve host response status semantics; the client page alone does not ensure an HTTP 404. |
| Sitemap | Absent | Add a production-domain sitemap when domain/routes are finalized and reference it from `robots.txt`. |
| Documentation directory | Absent | Optional; add only if architecture/deployment documentation grows beyond the README and this audit. |

## 9. Validation and limitations

- `npm ls --depth=0`: completed; installed top-level dependencies match declared ranges.
- `npm outdated`: completed; results are recorded above. It exited with an outdated-package status; no dependency files were changed.
- Existing `dist/` was inspected without rebuilding. No application source was changed, and no tests/build were run to avoid overwriting existing generated output. The only post-audit changes are the two user-authorized deployment header configurations described above.
- This report is based on the workspace snapshot. It does not certify the live deployment, third-party services, current accessibility conformance, or complete online dependency-advisory status.
