import InternalLink from '../components/Common/InternalLink.jsx';
import LegacyPage from '../components/Layout/LegacyPage.jsx';

export const pageConfig = {
  "title": "OBZAC | Better results. Faster.",
  "bodyClass": "",
  "resourceLinks": [
    {
      "rel": "manifest",
      "href": "site.webmanifest"
    }
  ],
  "stylesheetPaths": [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap",
    "assets/css/base.css",
    "assets/css/site.css",
    "assets/css/hero.css",
    "assets/css/proof.css",
    "assets/css/reel.css",
    "assets/css/trust.css",
    "assets/css/flow.css",
    "assets/css/motion.css",
    "assets/css/services.css",
    "assets/css/story.css"
  ],
  "inlineStyles": [],
  "metaTags": [
    {
      "name": "viewport",
      "property": null,
      "content": "width=device-width, initial-scale=1"
    },
    {
      "name": "description",
      "property": null,
      "content": "OBZAC is the brand and marketing partner for D2C brands, startups and enterprises that want growth without the long wait."
    },
    {
      "name": "theme-color",
      "property": null,
      "content": "#F6F2EB"
    },
    {
      "name": null,
      "property": "og:type",
      "content": "website"
    },
    {
      "name": null,
      "property": "og:title",
      "content": "OBZAC | Better results. Faster."
    },
    {
      "name": null,
      "property": "og:description",
      "content": "The brand and marketing partner for growth without the long wait."
    },
    {
      "name": null,
      "property": "og:image",
      "content": "assets/img/og-image.png"
    },
    {
      "name": "twitter:card",
      "property": null,
      "content": "summary_large_image"
    }
  ],
  "inlineSources": [
    "document.documentElement.classList.add(\"js\");setTimeout(function(){document.documentElement.classList.add(\"hero-fallback\")},7000)"
  ],
  "scriptPaths": [
    "assets/js/site.js",
    "assets/js/data/services-data.js",
    "assets/js/physics.js",
    "assets/js/services.js",
    "assets/js/story.js",
    "assets/js/hero.js",
    "assets/js/proof.js",
    "assets/js/trust.js",
    "assets/js/flow.js",
    "assets/js/motion.js"
  ]
};

export default function HomePage() {
  return (
    <LegacyPage page={pageConfig}>
{"\n"}
<noscript>
  {"\n  "}
  <p style={{ "margin": "0", "padding": "16px", "textAlign": "center", "font": "500 14px/1.5 system-ui,sans-serif", "background": "#2B1A0A", "color": "#F6F2EB" }}>
    {"\n    This page uses JavaScript for its scroll and hover animations. Please enable JavaScript to see everything.\n  "}
  </p>
  {"\n"}
</noscript>
{"\n"}
<header className="site-hd" id="siteHd">
  {"\n  "}
  <InternalLink className="hd-logo" href="index.html" aria-label="OBZAC home">
    <span className="lp lp-m">
      <svg viewBox="0 0 65 64" aria-hidden="true">
        <path d="M55.3461 17.0245L55.3644 2.75056C55.3644 2.46321 55.1598 2.1515 54.8591 2.15516L50.3174 2.21117L40.2064 2.25013C36.8386 0.798748 33.1614 0 29.3113 0C13.1233 0 0 14.1132 0 31.5225C0 48.9318 13.1233 63.045 29.3113 63.045C45.4994 63.045 58.6239 48.9318 58.6239 31.5225C58.6239 26.2953 57.4404 21.3641 55.3461 17.0245ZM44.5874 43.9725C41.0868 48.9318 35.5467 52.1341 29.3113 52.1341C18.7267 52.1341 10.1463 42.9059 10.1463 31.5225C10.1463 20.1391 18.7267 10.9109 29.3113 10.9109C38.9401 10.9109 46.9093 18.5453 48.2718 28.4931C48.407 29.4818 48.4776 30.4936 48.4776 31.5225C48.4776 36.1993 47.0287 40.5133 44.5874 43.9725Z" fill="#BC412B"></path>
        <path d="M28.9225 41.5423C34.4508 41.5423 38.9324 37.0607 38.9324 31.5324C38.9324 26.004 34.4508 21.5225 28.9225 21.5225C23.3942 21.5225 18.9126 26.004 18.9126 31.5324C18.9126 37.0607 23.3942 41.5423 28.9225 41.5423Z" fill="#BC412B"></path>
      </svg>
    </span>
    <span className="lp lp-ob">
      <svg viewBox="65 0 77 64" aria-hidden="true">
        <path d="M86.9895 51.4803C82.275 51.4803 78.5248 50.1945 75.7389 47.6229C72.953 45.0156 71.5601 41.3011 71.5601 36.4794V27.4789C71.5601 22.6572 72.953 18.9605 75.7389 16.389C78.5248 13.7817 82.275 12.478 86.9895 12.478C91.7041 12.478 95.4543 13.7817 98.2402 16.389C101.026 18.9605 102.419 22.6572 102.419 27.4789V36.4794C102.419 41.3011 101.026 45.0156 98.2402 47.6229C95.4543 50.1945 91.7041 51.4803 86.9895 51.4803ZM86.9895 45.1585C89.6325 45.1585 91.6862 44.3906 93.1506 42.8548C94.615 41.319 95.3472 39.2653 95.3472 36.6937V27.2646C95.3472 24.693 94.615 22.6393 93.1506 21.1035C91.6862 19.5677 89.6325 18.7998 86.9895 18.7998C84.3822 18.7998 82.3285 19.5677 80.8285 21.1035C79.3641 22.6393 78.6319 24.693 78.6319 27.2646V36.6937C78.6319 39.2653 79.3641 41.319 80.8285 42.8548C82.3285 44.3906 84.3822 45.1585 86.9895 45.1585ZM107.646 50.7302V44.5156H112.575V19.4427H107.646V13.2281H126.933C129.219 13.2281 131.201 13.621 132.879 14.4067C134.594 15.1568 135.915 16.2461 136.844 17.6748C137.808 19.0677 138.29 20.7464 138.29 22.7108V23.2465C138.29 24.9609 137.969 26.3717 137.326 27.4789C136.683 28.5504 135.915 29.3897 135.022 29.9969C134.165 30.5684 133.344 30.9791 132.558 31.2291V32.1934C133.344 32.4077 134.201 32.8185 135.13 33.4257C136.058 33.9971 136.844 34.8365 137.487 35.9437C138.165 37.0509 138.505 38.4974 138.505 40.2832V40.8189C138.505 42.8905 138.023 44.6763 137.058 46.1764C136.094 47.6408 134.755 48.7658 133.04 49.5516C131.362 50.3373 129.397 50.7302 127.147 50.7302H107.646ZM119.647 44.3013H126.29C127.826 44.3013 129.058 43.9263 129.986 43.1762C130.951 42.4262 131.433 41.3547 131.433 39.9617V39.426C131.433 38.0331 130.969 36.9616 130.04 36.2115C129.111 35.4615 127.861 35.0865 126.29 35.0865H119.647V44.3013ZM119.647 28.6575H126.183C127.647 28.6575 128.844 28.2825 129.772 27.5325C130.736 26.7824 131.219 25.7466 131.219 24.4251V23.8894C131.219 22.5322 130.754 21.4964 129.826 20.7821C128.897 20.032 127.683 19.657 126.183 19.657H119.647V28.6575Z" fill="currentColor"></path>
      </svg>
    </span>
    <span className="lp lp-zac">
      <svg viewBox="142 0 111 64" aria-hidden="true">
        <path d="M144.521 50.7302V41.7297L163.058 20.4071V19.5499H145.057V13.2281H170.452V22.2286L151.915 43.5512V44.4084H170.559V50.7302H144.521ZM175.188 50.7302L185.046 13.2281H197.368L207.226 50.7302H199.94L197.904 42.4798H184.51L182.474 50.7302H175.188ZM186.171 35.9437H196.243L191.689 17.6748H190.725L186.171 35.9437ZM226.95 51.4803C222.307 51.4803 218.629 50.1945 215.914 47.6229C213.2 45.0156 211.842 41.3011 211.842 36.4794V27.4789C211.842 22.6572 213.2 18.9605 215.914 16.389C218.629 13.7817 222.307 12.478 226.95 12.478C231.558 12.478 235.112 13.746 237.612 16.2818C240.148 18.782 241.416 22.2286 241.416 26.6217V26.9431H234.451V26.4074C234.451 24.193 233.826 22.3715 232.576 20.9428C231.361 19.5141 229.486 18.7998 226.95 18.7998C224.45 18.7998 222.486 19.5677 221.057 21.1035C219.629 22.6393 218.914 24.7287 218.914 27.3717V36.5866C218.914 39.1938 219.629 41.2833 221.057 42.8548C222.486 44.3906 224.45 45.1585 226.95 45.1585C229.486 45.1585 231.361 44.4441 232.576 43.0155C233.826 41.5511 234.451 39.7296 234.451 37.5509V36.5866H241.416V37.3366C241.416 41.7297 240.148 45.1942 237.612 47.7301C235.112 50.2302 231.558 51.4803 226.95 51.4803Z" fill="currentColor"></path>
        <path d="M247.956 51.3879C250.273 51.3879 252.15 49.5102 252.15 47.194C252.15 44.8777 250.273 43 247.956 43C245.64 43 243.762 44.8777 243.762 47.194C243.762 49.5102 245.64 51.3879 247.956 51.3879Z" fill="#BC412B"></path>
      </svg>
    </span>
  </InternalLink>
  {"\n  "}
  <nav className="hd-nav" aria-label="Main">
    <InternalLink href="work.html">
      {"Work"}
    </InternalLink>
    <InternalLink href="about.html">
      {"About"}
    </InternalLink>
    <InternalLink href="services.html">
      {"Services"}
    </InternalLink>
    <InternalLink href="careers.html">
      {"Careers"}
    </InternalLink>
    <InternalLink href="contact.html">
      {"Contact"}
    </InternalLink>
  </nav>
  {"\n  "}
  <InternalLink className="btn p hd-cta" href="contact.html#brief">
    {"Book a call"}
  </InternalLink>
  {"\n"}
</header>
{"\n"}
<section id="home-hero" className="hero" aria-label="OBZAC">
  {"\n  "}
  <div className="h-line" aria-hidden="true"></div>
  {"\n\n  "}
  <h1 className="h-title" aria-label="Helping our partners build bold brands that grow faster.">
    {"\n    "}
    <span className="ln" aria-hidden="true">
      <span className="w w-i">
        {"Helping"}
      </span>
      {" "}
      <span className="w w-x rv">
        {"our"}
      </span>
      {" "}
      <span className="w w-x rv">
        {"partners"}
      </span>
    </span>
    {"\n    "}
    <span className="ln" aria-hidden="true">
      <span className="w w-x rv">
        {"build"}
      </span>
      {" "}
      <span className="w w-x rv">
        {"bold"}
      </span>
      {" "}
      <span className="w w-i">
        {"brands"}
      </span>
    </span>
    {"\n    "}
    <span className="ln" aria-hidden="true">
      <span className="w w-x rv">
        {"that"}
      </span>
      {" "}
      <span className="w w-i">
        {"grow"}
        <span className="pd">
          {"."}
        </span>
      </span>
      {" "}
      <span className="w w-x rv">
        {"faster."}
      </span>
    </span>
    {"\n  "}
  </h1>
  {"\n  "}
  <p className="h-sub rv">
    <svg className="rv" viewBox="0 0 56 16" aria-hidden="true">
      <path d="M3 9c5-8 9-8 13 0s9 8 14 0 9-8 13 0" fill="none" stroke="#BC412B" strokeWidth="3.2" strokeLinecap="round"></path>
    </svg>
    <span>
      {"For D2C brands, startups and enterprises."}
    </span>
    <svg className="rv" viewBox="0 0 56 16" aria-hidden="true">
      <path d="M3 9c5-8 9-8 13 0s9 8 14 0 9-8 13 0" fill="none" stroke="#BC412B" strokeWidth="3.2" strokeLinecap="round"></path>
    </svg>
  </p>
  {"\n  "}
  <a className="btn p h-btn rv" href="#contact">
    {"Book a call"}
  </a>
  {"\n\n  "}
  <div className="h-peek rv">
    {"\n    "}
    <p>
      {"A growth-led brand and marketing partner, built for speed."}
    </p>
    {"\n    "}
    <div className="sc" role="img" aria-label="Preview of selected work (placeholder artwork)">
      {"\n      "}
      <svg className="sc-s" viewBox="0 0 520 390" preserveAspectRatio="xMidYMid slice" style={{ "zIndex": "1" }}>
        <rect width="520" height="390" fill="#F6F2EB"></rect>
        <circle cx="260" cy="195" r="130" fill="#BC412B"></circle>
        <circle cx="260" cy="195" r="84" fill="#F6F2EB"></circle>
        <circle cx="260" cy="195" r="42" fill="#BC412B"></circle>
      </svg>
      {"\n      "}
      <svg className="sc-s" viewBox="0 0 520 390" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="390" fill="#BC412B"></rect>
        <g fill="#F6F2EB">
          <rect x="90" y="250" width="56" height="90" rx="6"></rect>
          <rect x="170" y="205" width="56" height="135" rx="6"></rect>
          <rect x="250" y="160" width="56" height="180" rx="6"></rect>
          <rect x="330" y="110" width="56" height="230" rx="6"></rect>
        </g>
        <path d="M80 230L200 180 280 140 410 70" fill="none" stroke="#E8B04A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      {"\n      "}
      <svg className="sc-s" viewBox="0 0 520 390" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="390" fill="#6E4712"></rect>
        <g fill="none" stroke="#F6F2EB" strokeWidth="16">
          <circle cx="260" cy="195" r="150" strokeOpacity=".18"></circle>
          <circle cx="260" cy="195" r="108" strokeOpacity=".38"></circle>
          <circle cx="260" cy="195" r="66" strokeOpacity=".7"></circle>
        </g>
        <circle cx="260" cy="195" r="26" fill="#BC412B"></circle>
      </svg>
      {"\n      "}
      <svg className="sc-s" viewBox="0 0 520 390" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="390" fill="#F6F2EB"></rect>
        <g transform="rotate(-8 200 200)">
          <rect x="120" y="70" width="140" height="260" rx="22" fill="#BC412B"></rect>
          <circle cx="190" cy="150" r="30" fill="#F6F2EB"></circle>
          <rect x="146" y="214" width="88" height="12" rx="6" fill="#F6F2EB"></rect>
          <rect x="146" y="240" width="60" height="12" rx="6" fill="#F6F2EB" fillOpacity=".6"></rect>
        </g>
        <g transform="rotate(7 340 200)">
          <rect x="270" y="90" width="140" height="260" rx="22" fill="#6E4712"></rect>
          <circle cx="340" cy="170" r="30" fill="#E8B04A"></circle>
          <rect x="296" y="234" width="88" height="12" rx="6" fill="#F6F2EB"></rect>
          <rect x="296" y="260" width="60" height="12" rx="6" fill="#F6F2EB" fillOpacity=".6"></rect>
        </g>
      </svg>
      {"\n    "}
    </div>
    {"\n  "}
  </div>
  {"\n"}
</section>
{"\n\n"}
<section className="proof" aria-label="Brands we work with">
  {"\n  "}
  <p className="proof-cap">
    {"Trusted by brands that want to grow faster"}
  </p>
  {"\n  "}
  <div className="proof-vp">
    {"\n    "}
    <div className="proof-track">
      {"\n      "}
      <ul className="proof-list">
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3l10 18H2z"></path>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="3"></rect>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle className="st" cx="12" cy="12" r="9"></circle>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 17a10 10 0 0 1 20 0z"></path>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z"></path>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1l11 11-11 11L1 12z"></path>
          </svg>
          {"Client logo"}
        </li>
        {"\n        "}
        <li>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="7" cy="12" r="5"></circle>
            <circle cx="18" cy="12" r="4"></circle>
          </svg>
          {"Client logo"}
        </li>
        {"\n      "}
      </ul>
      {"\n    "}
    </div>
    {"\n  "}
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="work" className="reel" aria-label="Selected work">
  {"\n  "}
  <div className="reel-stage">
    {"\n    "}
    <div className="reel-frame">
      {"\n      "}
      <div className="rs-wrap">
        <video
          className="reel-video"
          src="assets/video/showreel.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="OBZAC brand and marketing showreel"
        />
      </div>
      {"\n      "}
    </div>
    {"\n  "}
  </div>
  {"\n"}
</section>
{"\n\n\n"}
<section id="results" className="t-sec" aria-label="Results">
  {"\n  "}
  <div className="t-in">
    <p className="kick">
      {"Results"}
    </p>
    <div className="stats-g">
      {"\n"}
      <div>
        <div className="st-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          {"Client logo"}
        </div>
        <p className="st-n" data-to="3.2" data-dec="1" data-pre="" data-suf="X">
          {"3.2X"}
        </p>
        <p className="st-c">
          {"Return on ad spend"}
        </p>
      </div>
      {"\n"}
      <div>
        <div className="st-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3l10 18H2z"></path>
          </svg>
          {"Client logo"}
        </div>
        <p className="st-n" data-to="120" data-dec="0" data-pre="" data-suf="+">
          {"120+"}
        </p>
        <p className="st-c">
          {"Brands launched"}
        </p>
      </div>
      {"\n"}
      <div>
        <div className="st-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="3"></rect>
          </svg>
          {"Client logo"}
        </div>
        <p className="st-n" data-to="48" data-dec="0" data-pre="" data-suf="h">
          {"48h"}
        </p>
        <p className="st-c">
          {"From brief to first concepts"}
        </p>
      </div>
      {"\n"}
      <div>
        <div className="st-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1l11 11-11 11L1 12z"></path>
          </svg>
          {"Client logo"}
        </div>
        <p className="st-n" data-to="65" data-dec="0" data-pre="" data-suf="%">
          {"65%"}
        </p>
        <p className="st-c">
          {"Lift in qualified leads"}
        </p>
      </div>
      {"\n"}
      <div>
        <div className="st-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 17a10 10 0 0 1 20 0z"></path>
          </svg>
          {"Client logo"}
        </div>
        <p className="st-n" data-to="2" data-dec="0" data-pre="$" data-suf="m">
          {"$2m"}
        </p>
        <p className="st-c">
          {"Revenue influenced"}
        </p>
      </div>
      {"\n  "}
    </div>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="services" aria-label="Services">
  {"\n  "}
  <p className="kick svc-kick">
    {"Services"}
  </p>
  {"\n  "}
  <h2 className="svc-head">
    {"Six ways we make growth "}
    <em>
      {"faster."}
    </em>
  </h2>
  {"\n  "}
  <div className="svc-list" id="svcl"></div>
  {"\n  "}
  <div className="svc-cta">
    <a className="btn p" href="#contact">
      {"Book a call "}
      <span aria-hidden="true">
        {"→"}
      </span>
    </a>
    <InternalLink className="btn g" href="work.html">
      {"See our work"}
    </InternalLink>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="case-studies" className="t-sec" aria-label="Case studies">
  {"\n  "}
  <div className="t-in">
    <p className="kick">
      {"Case studies"}
    </p>
    <h2 className="t-h">
      {"The story behind the work."}
    </h2>
    <div className="cs-g">
      {"\n"}
      <article className="cs">
        <div className="cs-art">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="300" fill="#F6F2EB"></rect>
            <circle cx="250" cy="150" r="100" fill="#BC412B"></circle>
            <circle cx="250" cy="150" r="65" fill="#F6F2EB"></circle>
            <circle cx="250" cy="150" r="32" fill="#BC412B"></circle>
            <rect x="60" y="85" width="80" height="120" rx="12" fill="#6E4712"></rect>
          </svg>
        </div>
        <div className="cs-b">
          <p className="cs-tag">
            {"Case study 01"}
          </p>
          <h3>
            {"D2C launch"}
          </h3>
          <dl>
            <div>
              <dt>
                {"Problem"}
              </dt>
              <dd>
                {"A new product with no audience and no brand."}
              </dd>
            </div>
            <div>
              <dt>
                {"What we did"}
              </dt>
              <dd>
                {"Brand identity, launch site and paid social."}
              </dd>
            </div>
            <div>
              <dt>
                {"Outcome"}
              </dt>
              <dd className="out">
                {"3.2X return on ad spend"}
              </dd>
            </div>
          </dl>
        </div>
      </article>
      {"\n"}
      <article className="cs">
        <div className="cs-art">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="300" fill="#BC412B"></rect>
            <g fill="#F6F2EB">
              <rect x="80" y="170" width="40" height="80" rx="4"></rect>
              <rect x="150" y="130" width="40" height="120" rx="4"></rect>
              <rect x="220" y="90" width="40" height="160" rx="4"></rect>
              <rect x="290" y="45" width="40" height="205" rx="4"></rect>
            </g>
            <path d="M70 180L170 120 240 85 330 30" fill="none" stroke="#E8B04A" strokeWidth="7" strokeLinecap="round"></path>
          </svg>
        </div>
        <div className="cs-b">
          <p className="cs-tag">
            {"Case study 02"}
          </p>
          <h3>
            {"Startup rebrand"}
          </h3>
          <dl>
            <div>
              <dt>
                {"Problem"}
              </dt>
              <dd>
                {"A strong product held back by a dated look."}
              </dd>
            </div>
            <div>
              <dt>
                {"What we did"}
              </dt>
              <dd>
                {"New positioning, identity and website."}
              </dd>
            </div>
            <div>
              <dt>
                {"Outcome"}
              </dt>
              <dd className="out">
                {"65% more qualified leads"}
              </dd>
            </div>
          </dl>
        </div>
      </article>
      {"\n"}
      <article className="cs">
        <div className="cs-art">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="300" fill="#6E4712"></rect>
            <g fill="none" stroke="#F6F2EB" strokeWidth="12">
              <circle cx="200" cy="150" r="120" strokeOpacity=".18"></circle>
              <circle cx="200" cy="150" r="84" strokeOpacity=".4"></circle>
              <circle cx="200" cy="150" r="48" strokeOpacity=".75"></circle>
            </g>
            <circle cx="200" cy="150" r="18" fill="#BC412B"></circle>
          </svg>
        </div>
        <div className="cs-b">
          <p className="cs-tag">
            {"Case study 03"}
          </p>
          <h3>
            {"Enterprise campaign"}
          </h3>
          <dl>
            <div>
              <dt>
                {"Problem"}
              </dt>
              <dd>
                {"Great reach but weak conversion."}
              </dd>
            </div>
            <div>
              <dt>
                {"What we did"}
              </dt>
              <dd>
                {"Campaign concept, creative and landing pages."}
              </dd>
            </div>
            <div>
              <dt>
                {"Outcome"}
              </dt>
              <dd className="out">
                {"2X conversion rate"}
              </dd>
            </div>
          </dl>
        </div>
      </article>
      {"\n  "}
    </div>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="why" className="t-sec" aria-label="Why OBZAC">
  {"\n  "}
  <div className="t-in">
    <p className="kick">
      {"Why OBZAC"}
    </p>
    <h2 className="t-h">
      {"Why brands choose us."}
    </h2>
    <div className="why-g">
      {"\n"}
      <div className="why-i">
        <b>
          {"01"}
        </b>
        <h3>
          {"Brand and growth under one roof"}
        </h3>
        <p>
          {"Strategy, identity and performance marketing from one team, so nothing gets lost between agencies."}
        </p>
      </div>
      {"\n"}
      <div className="why-i">
        <b>
          {"02"}
        </b>
        <h3>
          {"Built for speed"}
        </h3>
        <p>
          {"Short sprints and weekly shipping. You see real work in days, not months."}
        </p>
      </div>
      {"\n"}
      <div className="why-i">
        <b>
          {"03"}
        </b>
        <h3>
          {"Senior people on your project"}
        </h3>
        <p>
          {"The people you meet on the first call are the ones doing the work."}
        </p>
      </div>
      {"\n"}
      <div className="why-i">
        <b>
          {"04"}
        </b>
        <h3>
          {"Numbers over noise"}
        </h3>
        <p>
          {"Every project starts with a goal and a metric, and we report against it."}
        </p>
      </div>
      {"\n  "}
    </div>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="process" className="t-sec pr" aria-label="Our process">
  {"\n  "}
  <div className="t-in">
    <p className="kick">
      {"Process"}
    </p>
    <h2 className="t-h">
      {"From first call to launch."}
    </h2>
    <ol className="pr-g">
      {"\n"}
      <li>
        <b>
          {"01"}
        </b>
        <h3>
          {"Discover"}
        </h3>
        <p>
          {"A free call to learn your product, audience and goals."}
        </p>
      </li>
      {"\n"}
      <li>
        <b>
          {"02"}
        </b>
        <h3>
          {"Strategy"}
        </h3>
        <p>
          {"Positioning, offer and a plan with clear targets."}
        </p>
      </li>
      {"\n"}
      <li>
        <b>
          {"03"}
        </b>
        <h3>
          {"Build"}
        </h3>
        <p>
          {"Brand, site and campaigns made in focused sprints."}
        </p>
      </li>
      {"\n"}
      <li>
        <b>
          {"04"}
        </b>
        <h3>
          {"Launch and grow"}
        </h3>
        <p>
          {"We go live, measure and keep improving every week."}
        </p>
      </li>
      {"\n  "}
    </ol>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="testimonials" className="t-sec" aria-label="Client testimonials">
  {"\n  "}
  <div className="t-in">
    <p className="kick">
      {"Testimonials"}
    </p>
    <h2 className="t-h">
      {"What clients say."}
    </h2>
    <div className="tm-g">
      {"\n"}
      <figure className="tm">
        <blockquote>
          {"They understood our brand fast and the launch results spoke for themselves."}
        </blockquote>
        <figcaption>
          <span className="av">
            {"CN"}
          </span>
          <span>
            <b>
              {"Client name"}
            </b>
            {"Founder, Brand name"}
          </span>
        </figcaption>
      </figure>
      {"\n"}
      <figure className="tm">
        <blockquote>
          {"Quick, clear and honest about numbers. It felt like an in-house team."}
        </blockquote>
        <figcaption>
          <span className="av">
            {"CN"}
          </span>
          <span>
            <b>
              {"Client name"}
            </b>
            {"Marketing lead, Brand name"}
          </span>
        </figcaption>
      </figure>
      {"\n"}
      <figure className="tm">
        <blockquote>
          {"Brand and performance finally worked together. We saw the difference within weeks."}
        </blockquote>
        <figcaption>
          <span className="av">
            {"CN"}
          </span>
          <span>
            <b>
              {"Client name"}
            </b>
            {"CEO, Brand name"}
          </span>
        </figcaption>
      </figure>
      {"\n  "}
    </div>
  </div>
  {"\n"}
</section>
{"\n\n"}
<section id="story" aria-label="The OBZAC story">
  {"\n  "}
  <div className="stage" id="stage">
    {"\n\n    "}
    <svg className="swoosh" id="swoosh" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {"\n      "}
      <path id="line" d="M1260 -60 C 900 140, 360 40, 420 400 S 900 800, 1180 540 S 1520 300, 1700 560" fill="none" stroke="#BC412B" strokeWidth="26" strokeLinecap="round"></path>
      {"\n      "}
      <g id="tip">
        {"\n        "}
        <circle r="38" fill="#BC412B"></circle>
        <circle r="25" fill="#F6F2EB"></circle>
        <circle r="12" fill="#BC412B"></circle>
        {"\n      "}
      </g>
      {"\n    "}
    </svg>
    {"\n\n    "}
    <div className="s1" id="s1">
      {"\n      "}
      <div className="s1-b">
        {"\n        "}
        <div className="kicker">
          {"The OBZAC story"}
        </div>
        {"\n        "}
        <h2>
          {"Every brand starts as a dot"}
          <i>
            {"."}
          </i>
        </h2>
        {"\n      "}
      </div>
      {"\n      "}
      <div className="cue">
        {"Scroll to explore"}
      </div>
      {"\n    "}
    </div>
    {"\n\n    "}
    <div className="screen" id="screen">
      {"\n      "}
      <div className="bezel" id="bezel"></div>
      {"\n      "}
      <canvas id="tunnel"></canvas>
      {"\n    "}
    </div>
    {"\n\n    "}
    <div className="t2" id="t2">
      {"\n      "}
      <p className="lead">
        {"We don't add to the noise. We find the one point where "}
        <b>
          {"strategy, marketing and creativity"}
        </b>
        {" meet, and build from there."}
      </p>
      {"\n      "}
      <p className="sub">
        {"One senior team, one plan, one dot. That is how results come faster."}
      </p>
      {"\n    "}
    </div>
    {"\n\n    "}
    <div className="words" id="words" aria-hidden="true">
      {"\n      "}
      <span className="w1">
        {"Noise"}
      </span>
      <span className="w2">
        {"to"}
      </span>
      <span className="w3">
        {"Signal"}
      </span>
      {"\n    "}
    </div>
    {"\n\n    "}
    <div className="t3" id="t3">
      <span>
        {"Step out of the "}
        <em>
          {"noise"}
        </em>
        {" and let your brand run faster"}
      </span>
    </div>
    {"\n\n    "}
    <div className="gl" data-pc="0.56">
      <small>
        {"01 / Know where to aim"}
      </small>
      <b>
        {"Strategy"}
      </b>
    </div>
    {"\n    "}
    <div className="gl" data-pc="0.64">
      <small>
        {"02 / Get in front of the right people"}
      </small>
      <b>
        {"Marketing"}
      </b>
    </div>
    {"\n    "}
    <div className="gl" data-pc="0.72">
      <small>
        {"03 / Be impossible to ignore"}
      </small>
      <b>
        {"Creativity"}
      </b>
    </div>
    {"\n\n    "}
    <svg className="chart" id="chart" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {"\n      "}
      <g id="bars" fill="#F6F2EB" fillOpacity=".2"></g>
      {"\n      "}
      <path id="gline" fill="none" stroke="#F6F2EB" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"></path>
      {"\n      "}
      <g id="gtip">
        <circle r="34" fill="#F6F2EB"></circle>
        <circle r="22" fill="#BC412B"></circle>
        <circle r="10" fill="#F6F2EB"></circle>
      </g>
      {"\n    "}
    </svg>
    {"\n\n    "}
    <svg id="hero" viewBox="0 0 400 600" aria-label="The OBZAC astronaut with the OBZAC icon as a head" role="img">
      {"\n      "}
      <defs>
        {"\n        "}
        <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBF3E1"></stop>
          <stop offset="1" stopColor="#D8C69C"></stop>
        </linearGradient>
        {"\n        "}
        <linearGradient id="suitD" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2E6C8"></stop>
          <stop offset="1" stopColor="#C9B588"></stop>
        </linearGradient>
        {"\n        "}
        <radialGradient id="hl" cx=".3" cy=".25" r=".6">
          <stop offset="0" stopColor="#fff" stopOpacity=".35"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        {"\n      "}
      </defs>
      {"\n      "}
      <g id="bodyG">
        {"\n        "}
        <rect x="128" y="198" width="144" height="120" rx="26" fill="#6E4712"></rect>
        {"\n        "}
        <g id="legL">
          <rect x="158" y="312" width="40" height="90" rx="20" fill="url(#suitD)"></rect>
          {"\n          "}
          <g id="shinL">
            <rect x="160" y="378" width="36" height="86" rx="18" fill="url(#suitD)"></rect>
            <rect x="152" y="442" width="52" height="32" rx="15" fill="#6E4712"></rect>
          </g>
        </g>
        {"\n        "}
        <g id="legR">
          <rect x="202" y="312" width="40" height="90" rx="20" fill="url(#suitD)"></rect>
          {"\n          "}
          <g id="shinR">
            <rect x="204" y="378" width="36" height="86" rx="18" fill="url(#suitD)"></rect>
            <rect x="196" y="442" width="52" height="32" rx="15" fill="#6E4712"></rect>
          </g>
        </g>
        {"\n        "}
        <rect x="138" y="184" width="124" height="152" rx="46" fill="url(#suit)"></rect>
        {"\n        "}
        <rect x="148" y="300" width="104" height="14" rx="6" fill="#6E4712"></rect>
        {"\n        "}
        <rect x="170" y="212" width="60" height="44" rx="11" fill="#2B1A0A"></rect>
        {"\n        "}
        <circle cx="200" cy="234" r="12" fill="none" stroke="#BC412B" strokeWidth="5"></circle>
        <circle cx="200" cy="234" r="4" fill="#BC412B"></circle>
        {"\n        "}
        <g id="armL">
          <rect x="133" y="194" width="34" height="86" rx="17" fill="url(#suitD)"></rect>
          {"\n          "}
          <g id="foreL">
            <rect x="134" y="262" width="32" height="80" rx="16" fill="url(#suitD)"></rect>
            <circle cx="150" cy="346" r="19" fill="#6E4712"></circle>
          </g>
        </g>
        {"\n        "}
        <g id="armR">
          <rect x="233" y="194" width="34" height="86" rx="17" fill="url(#suitD)"></rect>
          {"\n          "}
          <g id="foreR">
            <rect x="234" y="262" width="32" height="80" rx="16" fill="url(#suitD)"></rect>
            <circle cx="250" cy="346" r="19" fill="#6E4712"></circle>
          </g>
        </g>
        {"\n        "}
        <ellipse cx="200" cy="187" rx="46" ry="14" fill="#6E4712"></ellipse>
        {"\n        "}
        <g id="head">
          {"\n          "}
          <circle cx="200" cy="112" r="72" fill="#BC412B"></circle>
          {"\n          "}
          <rect x="227.4" y="40" width="37.4" height="15.8" fill="#BC412B"></rect>
          {"\n          "}
          <circle cx="200" cy="112" r="47.5" fill="#F6F2EB"></circle>
          {"\n          "}
          <circle id="pupil" cx="200" cy="112" r="24" fill="#BC412B"></circle>
          {"\n          "}
          <circle cx="200" cy="112" r="72" fill="url(#hl)"></circle>
          {"\n        "}
        </g>
        {"\n      "}
      </g>
      {"\n    "}
    </svg>
    {"\n\n    "}
    <div className="shards" id="shards" aria-hidden="true"></div>
    {"\n    "}
    <h2 className="better" id="better">
      <span>
        {"Better"}
      </span>
      {" "}
      <span>
        {"results."}
      </span>
      {" "}
      <span>
        {"Faster."}
      </span>
    </h2>
    {"\n\n    "}
    <div className="final" id="final">
      {"\n      "}
      <div className="kicker">
        {"Is your brand ready to move?"}
      </div>
      {"\n      "}
      <h3 id="fh">
        <span>
          {"Ready"}
        </span>
        {" "}
        <span>
          {"to"}
        </span>
        {" "}
        <span>
          {"grow"}
        </span>
        {" "}
        <span>
          <em>
            {"faster?"}
          </em>
        </span>
      </h3>
      {"\n      "}
      <div className="btns">
        <a className="btn p" href="#contact">
          {"Book a call "}
          <span aria-hidden="true">
            {"→"}
          </span>
        </a>
        <a className="btn g" href="#contact">
          {"Message us on WhatsApp"}
        </a>
      </div>
      {"\n      "}
      <div className="cue2">
        {"Continue to scroll ↓"}
      </div>
      {"\n    "}
    </div>
    {"\n\n    "}
    <div className="stickers" id="stickers" aria-hidden="true"></div>
    {"\n\n    "}
    <div className="hud" id="hud">
      <span id="hudn">
        {"01 Line"}
      </span>
      <span className="bar">
        <i id="hudi"></i>
      </span>
      <span id="hudp">
        {"0%"}
      </span>
    </div>
    {"\n  "}
  </div>
  {"\n"}
</section>
{"\n\n"}
<footer className="site-ft" id="contact">
  {"\n  "}
  <div className="ft-in">
    {"\n    "}
    <div className="ft-cta">
      {"\n      "}
      <p className="ft-kick">
        {"Let's talk"}
      </p>
      {"\n      "}
      <h2>
        {"Ready to grow "}
        <em>
          {"faster?"}
        </em>
      </h2>
      {"\n      "}
      <div className="ft-btns">
        <InternalLink className="btn p" href="contact.html#brief">
          {"Book a call "}
          <span aria-hidden="true">
            {"→"}
          </span>
        </InternalLink>
        <a className="btn ft-ghost" href="https://wa.me/000000000000">
          {"Message us on WhatsApp"}
        </a>
      </div>
      {"\n    "}
    </div>
    {"\n    "}
    <div className="ft-cols">
      {"\n      "}
      <div>
        <h3>
          {"Pages"}
        </h3>
        <ul>
          <li>
            <InternalLink href="index.html">
              {"Home"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="work.html">
              {"Work"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="about.html">
              {"About"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html">
              {"Services"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="contact.html">
              {"Contact"}
            </InternalLink>
          </li>
        </ul>
      </div>
      {"\n      "}
      <div>
        <h3>
          {"Services"}
        </h3>
        <ul>
          <li>
            <InternalLink href="services.html#s0">
              {"Social media"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html#s1">
              {"SEO"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html#s2">
              {"Marketplaces"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html#s3">
              {"E-commerce"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html#s4">
              {"Websites"}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="services.html#s5">
              {"Branding"}
            </InternalLink>
          </li>
        </ul>
      </div>
      {"\n      "}
      <div>
        <h3>
          {"Contact"}
        </h3>
        <ul>
          <li>
            <a href="mailto:hello@yourdomain.com">
              {"hello@yourdomain.com"}
            </a>
          </li>
          <li>
            <a href="tel:+000000000000">
              {"+00 000 000 0000"}
            </a>
          </li>
          <li>
            {"Studio address, City"}
          </li>
          <li className="ft-note">
            {"Placeholder details: replace before launch"}
          </li>
        </ul>
      </div>
      {"\n      "}
      <div>
        <h3>
          {"Follow"}
        </h3>
        <ul>
          <li>
            <a href="#">
              {"Instagram"}
            </a>
          </li>
          <li>
            <a href="#">
              {"LinkedIn"}
            </a>
          </li>
          <li>
            <a href="#">
              {"X"}
            </a>
          </li>
          <li>
            <a href="#">
              {"Behance"}
            </a>
          </li>
        </ul>
      </div>
      {"\n    "}
    </div>
    {"\n    "}
    <div className="ft-base">
      {"\n      "}
      <InternalLink className="ft-logo" href="index.html" aria-label="OBZAC home">
        <svg viewBox="0 0 253 64" aria-hidden="true">
          <path d="M55.3461 17.0245L55.3644 2.75056C55.3644 2.46321 55.1598 2.1515 54.8591 2.15516L50.3174 2.21117L40.2064 2.25013C36.8386 0.798748 33.1614 0 29.3113 0C13.1233 0 0 14.1132 0 31.5225C0 48.9318 13.1233 63.045 29.3113 63.045C45.4994 63.045 58.6239 48.9318 58.6239 31.5225C58.6239 26.2953 57.4404 21.3641 55.3461 17.0245ZM44.5874 43.9725C41.0868 48.9318 35.5467 52.1341 29.3113 52.1341C18.7267 52.1341 10.1463 42.9059 10.1463 31.5225C10.1463 20.1391 18.7267 10.9109 29.3113 10.9109C38.9401 10.9109 46.9093 18.5453 48.2718 28.4931C48.407 29.4818 48.4776 30.4936 48.4776 31.5225C48.4776 36.1993 47.0287 40.5133 44.5874 43.9725Z" fill="#BC412B"></path>
          <path d="M28.9225 41.5423C34.4508 41.5423 38.9324 37.0607 38.9324 31.5324C38.9324 26.004 34.4508 21.5225 28.9225 21.5225C23.3942 21.5225 18.9126 26.004 18.9126 31.5324C18.9126 37.0607 23.3942 41.5423 28.9225 41.5423Z" fill="#BC412B"></path>
          <path d="M247.956 51.3879C250.273 51.3879 252.15 49.5102 252.15 47.194C252.15 44.8777 250.273 43 247.956 43C245.64 43 243.762 44.8777 243.762 47.194C243.762 49.5102 245.64 51.3879 247.956 51.3879Z" fill="#BC412B"></path>
          <path d="M86.9895 51.4803C82.275 51.4803 78.5248 50.1945 75.7389 47.6229C72.953 45.0156 71.5601 41.3011 71.5601 36.4794V27.4789C71.5601 22.6572 72.953 18.9605 75.7389 16.389C78.5248 13.7817 82.275 12.478 86.9895 12.478C91.7041 12.478 95.4543 13.7817 98.2402 16.389C101.026 18.9605 102.419 22.6572 102.419 27.4789V36.4794C102.419 41.3011 101.026 45.0156 98.2402 47.6229C95.4543 50.1945 91.7041 51.4803 86.9895 51.4803ZM86.9895 45.1585C89.6325 45.1585 91.6862 44.3906 93.1506 42.8548C94.615 41.319 95.3472 39.2653 95.3472 36.6937V27.2646C95.3472 24.693 94.615 22.6393 93.1506 21.1035C91.6862 19.5677 89.6325 18.7998 86.9895 18.7998C84.3822 18.7998 82.3285 19.5677 80.8285 21.1035C79.3641 22.6393 78.6319 24.693 78.6319 27.2646V36.6937C78.6319 39.2653 79.3641 41.319 80.8285 42.8548C82.3285 44.3906 84.3822 45.1585 86.9895 45.1585ZM107.646 50.7302V44.5156H112.575V19.4427H107.646V13.2281H126.933C129.219 13.2281 131.201 13.621 132.879 14.4067C134.594 15.1568 135.915 16.2461 136.844 17.6748C137.808 19.0677 138.29 20.7464 138.29 22.7108V23.2465C138.29 24.9609 137.969 26.3717 137.326 27.4789C136.683 28.5504 135.915 29.3897 135.022 29.9969C134.165 30.5684 133.344 30.9791 132.558 31.2291V32.1934C133.344 32.4077 134.201 32.8185 135.13 33.4257C136.058 33.9971 136.844 34.8365 137.487 35.9437C138.165 37.0509 138.505 38.4974 138.505 40.2832V40.8189C138.505 42.8905 138.023 44.6763 137.058 46.1764C136.094 47.6408 134.755 48.7658 133.04 49.5516C131.362 50.3373 129.397 50.7302 127.147 50.7302H107.646ZM119.647 44.3013H126.29C127.826 44.3013 129.058 43.9263 129.986 43.1762C130.951 42.4262 131.433 41.3547 131.433 39.9617V39.426C131.433 38.0331 130.969 36.9616 130.04 36.2115C129.111 35.4615 127.861 35.0865 126.29 35.0865H119.647V44.3013ZM119.647 28.6575H126.183C127.647 28.6575 128.844 28.2825 129.772 27.5325C130.736 26.7824 131.219 25.7466 131.219 24.4251V23.8894C131.219 22.5322 130.754 21.4964 129.826 20.7821C128.897 20.032 127.683 19.657 126.183 19.657H119.647V28.6575ZM144.521 50.7302V41.7297L163.058 20.4071V19.5499H145.057V13.2281H170.452V22.2286L151.915 43.5512V44.4084H170.559V50.7302H144.521ZM175.188 50.7302L185.046 13.2281H197.368L207.226 50.7302H199.94L197.904 42.4798H184.51L182.474 50.7302H175.188ZM186.171 35.9437H196.243L191.689 17.6748H190.725L186.171 35.9437ZM226.95 51.4803C222.307 51.4803 218.629 50.1945 215.914 47.6229C213.2 45.0156 211.842 41.3011 211.842 36.4794V27.4789C211.842 22.6572 213.2 18.9605 215.914 16.389C218.629 13.7817 222.307 12.478 226.95 12.478C231.558 12.478 235.112 13.746 237.612 16.2818C240.148 18.782 241.416 22.2286 241.416 26.6217V26.9431H234.451V26.4074C234.451 24.193 233.826 22.3715 232.576 20.9428C231.361 19.5141 229.486 18.7998 226.95 18.7998C224.45 18.7998 222.486 19.5677 221.057 21.1035C219.629 22.6393 218.914 24.7287 218.914 27.3717V36.5866C218.914 39.1938 219.629 41.2833 221.057 42.8548C222.486 44.3906 224.45 45.1585 226.95 45.1585C229.486 45.1585 231.361 44.4441 232.576 43.0155C233.826 41.5511 234.451 39.7296 234.451 37.5509V36.5866H241.416V37.3366C241.416 41.7297 240.148 45.1942 237.612 47.7301C235.112 50.2302 231.558 51.4803 226.95 51.4803Z" fill="currentColor"></path>
        </svg>
      </InternalLink>
      {"\n      "}
      <p>
        {"© 2026 OBZAC. Brand and marketing partner. All rights reserved."}
      </p>
      {"\n      "}
      <a className="ft-top" href="#" data-top="">
        {"Back to top ↑"}
      </a>
      {"\n    "}
    </div>
    {"\n  "}
  </div>
  {"\n"}
</footer>
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
{"\n"}
        </LegacyPage>
  );
}
