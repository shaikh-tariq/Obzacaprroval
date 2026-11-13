import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createScriptLifecycle } from '../../legacyLifecycle.js';
import MobileMenu from './MobileMenu.jsx';

function setPageMetadata(page) {
  document.title = page.title;
  document.body.className = page.bodyClass;
  document.documentElement.classList.add('js');
  if (page.stylesheetPaths.some((p) => p.includes('hero.css'))) {
    document.documentElement.classList.add('hd-intro', 'hero-lock');
  } else {
    document.documentElement.classList.remove('hd-intro', 'hero-lock');
  }
  document.head.querySelectorAll('meta[name], meta[property]').forEach((meta) => meta.remove());

  page.metaTags.forEach(({ name, property, content }) => {
    const meta = document.createElement('meta');
    if (name) meta.name = name;
    if (property) meta.setAttribute('property', property);
    if (content) meta.content = content;
    document.head.appendChild(meta);
  });
}

function usePageStyles(page) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const nodes = [];
    const stylesheetPromises = [];
    let active = true;

    setReady(false);
    setError('');
    setPageMetadata(page);

    if (page.stylesheetPaths.some((path) => path.startsWith('https://fonts.googleapis.com/'))) {
      const googleFonts = document.createElement('link');
      googleFonts.rel = 'preconnect';
      googleFonts.href = 'https://fonts.googleapis.com';
      document.head.appendChild(googleFonts);
      nodes.push(googleFonts);

      const googleFontsStatic = document.createElement('link');
      googleFontsStatic.rel = 'preconnect';
      googleFontsStatic.href = 'https://fonts.gstatic.com';
      googleFontsStatic.crossOrigin = 'anonymous';
      document.head.appendChild(googleFontsStatic);
      nodes.push(googleFontsStatic);
    }

    page.stylesheetPaths.forEach((path) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = new URL(path, window.location.origin).href;
      link.dataset.reactPageStyle = 'true';
      stylesheetPromises.push(new Promise((resolve, reject) => {
        link.onload = resolve;
        link.onerror = () => reject(new Error(`Failed to load stylesheet: ${path}`));
      }));
      document.head.appendChild(link);
      nodes.push(link);
    });

    page.inlineStyles.forEach((css) => {
      const style = document.createElement('style');
      style.dataset.reactPageStyle = 'true';
      style.textContent = css;
      document.head.appendChild(style);
      nodes.push(style);
    });

    page.resourceLinks.forEach(({ rel, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = new URL(href, window.location.origin).href;
      document.head.appendChild(link);
      nodes.push(link);
    });

    Promise.all(stylesheetPromises).then(() => {
      if (active) setReady(true);
    }).catch((loadError) => {
      if (active) setError(loadError instanceof Error ? loadError.message : String(loadError));
    });

    return () => {
      active = false;
      nodes.forEach((node) => node.remove());
    };
  }, [page]);

  return { ready, error };
}

function usePageScripts(page, ready) {
  const [result, setResult] = useState({ ready: false, error: '' });

  useEffect(() => {
    if (!ready) return undefined;

    const lifecycle = createScriptLifecycle();
    let active = true;

    setResult({ ready: false, error: '' });
    lifecycle.load(page.scriptPaths, page.inlineSources).then(() => {
      if (active) setResult({ ready: true, error: '' });
    }).catch((loadError) => {
      if (active) {
        setResult({
          ready: true,
          error: loadError instanceof Error ? loadError.message : String(loadError),
        });
      }
    });

    return () => {
      active = false;
      lifecycle.dispose();
      document.body.className = '';
      document.documentElement.classList.remove('hero-lock', 'hd-intro', 'hero-fallback');
    };
  }, [page, ready]);

  return result;
}

function usePageScroll(ready) {
  const location = useLocation();

  useEffect(() => {
    if (!ready) return;

    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      target?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [ready, location.pathname, location.hash]);
}

export default function LegacyPage({ page, children }) {
  const { ready, error: stylesheetError } = usePageStyles(page);
  const { ready: scriptsReady, error: scriptError } = usePageScripts(page, ready);
  usePageScroll(ready && scriptsReady);

  if (stylesheetError) {
    return <main role="alert">Unable to load page styles. {stylesheetError}</main>;
  }

  if (!ready) return null;

  return (
    <>
      {page.stylesheetPaths.includes('assets/css/site.css') && <MobileMenu />}
      {children}
      {scriptError && <p role="alert">Some page interactions could not be initialized. {scriptError}</p>}
    </>
  );
}

