import { Link } from 'react-router-dom';

export default function InternalLink({ href, children, ...props }) {
  const url = new URL(href, window.location.href);

  if (url.origin !== window.location.origin || !/\.html$/i.test(url.pathname)) {
    return <a href={href} {...props}>{children}</a>;
  }

  const routeByPage = {
    '/index.html': '/',
    '/about.html': '/about',
    '/careers.html': '/careers',
    '/contact.html': '/contact',
    '/services.html': '/services',
    '/work.html': '/work',
    '/404.html': '/404',
  };
  url.pathname = routeByPage[url.pathname.toLowerCase()] || url.pathname;

  return <Link to={`${url.pathname}${url.search}${url.hash}`} {...props}>{children}</Link>;
}

