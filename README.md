# OBZAC React website

This is the React/Vite version of the OBZAC website. Every route and its page content are React components, and React Router switches between routes without a full-page reload. Shared images, stylesheets, and interaction scripts remain under `public/assets/`. Page-specific styles and scripts load only while their route is active, and script event listeners, timers, and animation frames are cleaned up when leaving a page.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The routes are `/`, `/work`, `/about`, `/services`, and `/contact`. Navigation uses client-side routing, and legacy `.html` URLs redirect to the matching clean route.

## Production

```bash
npm run build
npm run preview
```

The production site is written to `dist/`. The included Netlify and Vercel configuration sends page routes to the React entry point. Page content is bundled as React components rather than served as separate HTML files.
# Obzacaprroval
