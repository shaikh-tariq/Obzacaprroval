import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        className="hd-menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <>
          <button
            className="hd-menu-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <nav className="hd-mobile-nav" id="mobile-navigation" aria-label="Mobile">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                aria-current={location.pathname === to ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link className="hd-mobile-cta" to="/contact#brief" onClick={() => setOpen(false)}>
              Get your growth plan
            </Link>
          </nav>
        </>
      )}
    </>
  );
}

