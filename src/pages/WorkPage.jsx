import InternalLink from '../components/Common/InternalLink.jsx';
import LegacyPage from '../components/Layout/LegacyPage.jsx';

export const pageConfig = {
  "title": "OBZAC Work",
  "bodyClass": "wk",
  "resourceLinks": [],
  "stylesheetPaths": [
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap",
    "assets/css/base.css",
    "assets/css/site.css",
    "assets/css/work.css"
  ],
  "inlineStyles": [],
  "metaTags": [
    {
      "name": "viewport",
      "property": null,
      "content": "width=device-width, initial-scale=1, viewport-fit=cover"
    },
    {
      "name": "description",
      "property": null,
      "content": "Selected OBZAC projects: launches, social, search and e-commerce for D2C brands, startups and enterprises."
    },
    {
      "name": "theme-color",
      "property": null,
      "content": "#F6F2EB"
    }
  ],
  "inlineSources": [
    "document.documentElement.classList.add(\"js\")"
  ],
  "scriptPaths": [
    "assets/js/site.js",
    "assets/js/work.js"
  ]
};

export default function WorkPage() {
  return (
    <LegacyPage page={pageConfig}>
{"\n\n"}
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
{"\n\n"}
<main>
  {"\n  "}
  {"\n  "}
  <section className="wk-hero" aria-label="Our work">
    {"\n    "}
    <p className="wk-kick">
      {"Selected work"}
    </p>
    {"\n    "}
    <h1 className="wk-h1">
      <span>
        {"Work that"}
      </span>
      {" "}
      <span>
        <em>
          {"moves"}
        </em>
        {" people"}
      </span>
      {" "}
      <span>
        {"and numbers."}
      </span>
    </h1>
    {"\n    "}
    <div className="wk-hero-row">
      {"\n      "}
      <p>
        {"Four projects, four kinds of growth. Each one started with a single question: what has to change for this brand to sell more?"}
      </p>
      {"\n      "}
      <ol className="wk-idx" id="wkIdx" aria-label="Projects on this page"></ol>
      {"\n    "}
    </div>
    {"\n    "}
    <a className="wk-cue" href="#approach">
      {"Scroll to explore "}
      <span aria-hidden="true">
        {"↓"}
      </span>
    </a>
    {"\n  "}
  </section>
  {"\n\n  "}
  {"\n  "}
  <section className="wk-ap" id="approach" aria-label="How we approach a project">
    {"\n    "}
    <div className="wk-ap-in">
      {"\n      "}
      <p className="wk-kick">
        {"How we work"}
      </p>
      {"\n      "}
      <p className="wk-say" id="wkSay">
        {"We don't start with a moodboard. We start with the number you need to move, then build the brand, the content and the channels that move it."}
      </p>
      {"\n      "}
      <ol className="wk-steps">
        {"\n        "}
        <li>
          <b>
            {"Find the gap"}
          </b>
          <span>
            {"Audience, offer and competitors, mapped in the first week."}
          </span>
        </li>
        {"\n        "}
        <li>
          <b>
            {"Make it impossible to ignore"}
          </b>
          <span>
            {"Identity, content and campaigns built around that one gap."}
          </span>
        </li>
        {"\n        "}
        <li>
          <b>
            {"Measure and push"}
          </b>
          <span>
            {"Weekly reports against the goal we agreed on day one."}
          </span>
        </li>
        {"\n      "}
      </ol>
      {"\n    "}
    </div>
    {"\n  "}
  </section>
  {"\n\n  "}
  {"\n  "}
  <section className="wk-show" id="work" aria-label="Projects">
    {"\n    "}
    <div className="wk-stage">
      {"\n      "}
      <div className="wk-slides" id="wkSlides"></div>
      {"\n      "}
      <div className="wk-foot">
        {"\n        "}
        <p className="wk-meta">
          <span id="wkMeta">
            {"D2C launch"}
          </span>
          <br />
          <span className="wk-dim" id="wkMeta2">
            {"Brand identity, packaging, paid social"}
          </span>
        </p>
        {"\n        "}
        <div className="wk-prog" aria-hidden="true">
          <span id="wkNum">
            {"01"}
          </span>
          <i>
            <b id="wkBar"></b>
          </i>
          <span id="wkTot">
            {"04"}
          </span>
        </div>
        {"\n        "}
        <button className="wk-next" id="wkNext" type="button" aria-label="Next project">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n  "}
  </section>
  {"\n\n  "}
  <section className="wk-end" aria-label="Start a project">
    {"\n    "}
    <p className="wk-kick">
      {"Your turn"}
    </p>
    {"\n    "}
    <h2>
      {"Your brand could be "}
      <em>
        {"next."}
      </em>
    </h2>
    {"\n    "}
    <div className="wk-end-btns">
      <a className="btn p" href="#contact">
        {"Book a call "}
        <span aria-hidden="true">
          {"→"}
        </span>
      </a>
      <InternalLink className="btn wk-ghost" href="services.html">
        {"See services"}
      </InternalLink>
    </div>
    {"\n    "}
    <p className="wk-note">
      {"Projects, figures and images on this page are placeholders until real case studies are approved."}
    </p>
    {"\n  "}
  </section>
  {"\n"}
</main>
{"\n"}
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
{"\n\n"}
{"\n"}
{"\n"}
        </LegacyPage>
  );
}
