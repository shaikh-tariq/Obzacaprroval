import InternalLink from '../components/Common/InternalLink.jsx';
import LegacyPage from '../components/Layout/LegacyPage.jsx';

export const pageConfig = {
  title: 'Careers | OBZAC — Digital Marketing & Growth Team',
  bodyClass: 'cr',
  resourceLinks: [],
  stylesheetPaths: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap',
    'assets/css/base.css',
    'assets/css/site.css',
    'assets/css/careers.css',
  ],
  inlineStyles: [],
  metaTags: [
    {
      name: 'viewport',
      property: null,
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    {
      name: 'description',
      property: null,
      content: 'Join OBZAC: senior performance marketers, SEO strategists, social media managers, creative copywriters, and marketplace growth leads. Explore open roles.',
    },
    {
      name: 'theme-color',
      property: null,
      content: '#F6F2EB',
    },
    {
      name: null,
      property: 'og:title',
      content: 'Careers | OBZAC — Digital Marketing & Growth Team',
    },
    {
      name: null,
      property: 'og:description',
      content: 'Join OBZAC: senior performance marketers, SEO strategists, social media managers, creative copywriters, and marketplace growth leads. Explore open roles.',
    },
    {
      name: null,
      property: 'og:type',
      content: 'website',
    },
  ],
  inlineSources: [
    'document.documentElement.classList.add("js")',
  ],
  scriptPaths: [
    'assets/js/site.js',
    'assets/js/careers.js',
  ],
};

export default function CareersPage() {
  return (
    <LegacyPage page={pageConfig}>
      {/* Header */}
      <header className="site-hd" id="siteHd">
        <InternalLink className="hd-logo" href="index.html" aria-label="OBZAC home">
          <span className="lp lp-m">
            <svg viewBox="0 0 65 64" aria-hidden="true">
              <path
                d="M55.3461 17.0245L55.3644 2.75056C55.3644 2.46321 55.1598 2.1515 54.8591 2.15516L50.3174 2.21117L40.2064 2.25013C36.8386 0.798748 33.1614 0 29.3113 0C13.1233 0 0 14.1132 0 31.5225C0 48.9318 13.1233 63.045 29.3113 63.045C45.4994 63.045 58.6239 48.9318 58.6239 31.5225C58.6239 26.2953 57.4404 21.3641 55.3461 17.0245ZM44.5874 43.9725C41.0868 48.9318 35.5467 52.1341 29.3113 52.1341C18.7267 52.1341 10.1463 42.9059 10.1463 31.5225C10.1463 20.1391 18.7267 10.9109 29.3113 10.9109C38.9401 10.9109 46.9093 18.5453 48.2718 28.4931C48.407 29.4818 48.4776 30.4936 48.4776 31.5225C48.4776 36.1993 47.0287 40.5133 44.5874 43.9725Z"
                fill="#BC412B"
              />
              <path
                d="M28.9225 41.5423C34.4508 41.5423 38.9324 37.0607 38.9324 31.5324C38.9324 26.004 34.4508 21.5225 28.9225 21.5225C23.3942 21.5225 18.9126 26.004 18.9126 31.5324C18.9126 37.0607 23.3942 41.5423 28.9225 41.5423Z"
                fill="#BC412B"
              />
            </svg>
          </span>
          <span className="lp lp-ob">
            <svg viewBox="65 0 77 64" aria-hidden="true">
              <path
                d="M86.9895 51.4803C82.275 51.4803 78.5248 50.1945 75.7389 47.6229C72.953 45.0156 71.5601 41.3011 71.5601 36.4794V27.4789C71.5601 22.6572 72.953 18.9605 75.7389 16.389C78.5248 13.7817 82.275 12.478 86.9895 12.478C91.7041 12.478 95.4543 13.7817 98.2402 16.389C101.026 18.9605 102.419 22.6572 102.419 27.4789V36.4794C102.419 41.3011 101.026 45.0156 98.2402 47.6229C95.4543 50.1945 91.7041 51.4803 86.9895 51.4803ZM86.9895 45.1585C89.6325 45.1585 91.6862 44.3906 93.1506 42.8548C94.615 41.319 95.3472 39.2653 95.3472 36.6937V27.2646C95.3472 24.693 94.615 22.6393 93.1506 21.1035C91.6862 19.5677 89.6325 18.7998 86.9895 18.7998C84.3822 18.7998 82.3285 19.5677 80.8285 21.1035C79.3641 22.6393 78.6319 24.693 78.6319 27.2646V36.6937C78.6319 39.2653 79.3641 41.319 80.8285 42.8548C82.3285 44.3906 84.3822 45.1585 86.9895 45.1585ZM107.646 50.7302V44.5156H112.575V19.4427H107.646V13.2281H126.933C129.219 13.2281 131.201 13.621 132.879 14.4067C134.594 15.1568 135.915 16.2461 136.844 17.6748C137.808 19.0677 138.29 20.7464 138.29 22.7108V23.2465C138.29 24.9609 137.969 26.3717 137.326 27.4789C136.683 28.5504 135.915 29.3897 135.022 29.9969C134.165 30.5684 133.344 30.9791 132.558 31.2291V32.1934C133.344 32.4077 134.201 32.8185 135.13 33.4257C136.058 33.9971 136.844 34.8365 137.487 35.9437C138.165 37.0509 138.505 38.4974 138.505 40.2832V40.8189C138.505 42.8905 138.023 44.6763 137.058 46.1764C136.094 47.6408 134.755 48.7658 133.04 49.5516C131.362 50.3373 129.397 50.7302 127.147 50.7302H107.646ZM119.647 44.3013H126.29C127.826 44.3013 129.058 43.9263 129.986 43.1762C130.951 42.4262 131.433 41.3547 131.433 39.9617V39.426C131.433 38.0331 130.969 36.9616 130.04 36.2115C129.111 35.4615 127.861 35.0865 126.29 35.0865H119.647V44.3013ZM119.647 28.6575H126.183C127.647 28.6575 128.844 28.2825 129.772 27.5325C130.736 26.7824 131.219 25.7466 131.219 24.4251V23.8894C131.219 22.5322 130.754 21.4964 129.826 20.7821C128.897 20.032 127.683 19.657 126.183 19.657H119.647V28.6575Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="lp lp-zac">
            <svg viewBox="142 0 111 64" aria-hidden="true">
              <path
                d="M144.521 50.7302V41.7297L163.058 20.4071V19.5499H145.057V13.2281H170.452V22.2286L151.915 43.5512V44.4084H170.559V50.7302H144.521ZM175.188 50.7302L185.046 13.2281H197.368L207.226 50.7302H199.94L197.904 42.4798H184.51L182.474 50.7302H175.188ZM186.171 35.9437H196.243L191.689 17.6748H190.725L186.171 35.9437ZM226.95 51.4803C222.307 51.4803 218.629 50.1945 215.914 47.6229C213.2 45.0156 211.842 41.3011 211.842 36.4794V27.4789C211.842 22.6572 213.2 18.9605 215.914 16.389C218.629 13.7817 222.307 12.478 226.95 12.478C231.558 12.478 235.112 13.746 237.612 16.2818C240.148 18.782 241.416 22.2286 241.416 26.6217V26.9431H234.451V26.4074C234.451 24.193 233.826 22.3715 232.576 20.9428C231.361 19.5141 229.486 18.7998 226.95 18.7998C224.45 18.7998 222.486 19.5677 221.057 21.1035C219.629 22.6393 218.914 24.7287 218.914 27.3717V36.5866C218.914 39.1938 219.629 41.2833 221.057 42.8548C222.486 44.3906 224.45 45.1585 226.95 45.1585C229.486 45.1585 231.361 44.4441 232.576 43.0155C233.826 41.5511 234.451 39.7296 234.451 37.5509V36.5866H241.416V37.3366C241.416 41.7297 240.148 45.1942 237.612 47.7301C235.112 50.2302 231.558 51.4803 226.95 51.4803Z"
                fill="currentColor"
              />
              <path
                d="M247.956 51.3879C250.273 51.3879 252.15 49.5102 252.15 47.194C252.15 44.8777 250.273 43 247.956 43C245.64 43 243.762 44.8777 243.762 47.194C243.762 49.5102 245.64 51.3879 247.956 51.3879Z"
                fill="#BC412B"
              />
            </svg>
          </span>
        </InternalLink>

        <nav className="hd-nav" aria-label="Main">
          <InternalLink href="work.html">Work</InternalLink>
          <InternalLink href="about.html">About</InternalLink>
          <InternalLink href="services.html">Services</InternalLink>
          <InternalLink href="careers.html" aria-current="page">Careers</InternalLink>
          <InternalLink href="contact.html">Contact</InternalLink>
        </nav>

        <InternalLink className="btn p hd-cta" href="contact.html#brief">
          Get your growth plan
        </InternalLink>
      </header>

      <main>
        {/* Hero Section */}
        <section className="cr-hero" id="top-of-page">
          <div className="wrap cr-hero-wrap">
            <div className="cr-hero-content">
              <div className="cr-eyebrow">
                <span className="cr-eyebrow-dot" aria-hidden="true"></span>
                Careers at OBZAC • Digital Marketing Team
              </div>
              <h1 className="cr-hero-title">
                Scale brands that <span className="cr-grad">outpace</span> the market.
              </h1>
              <p className="lead">
                We are performance media buyers, SEO architects, direct-response creative strategists, and marketplace growth leaders scaling customer acquisition and revenue end to end. High-budget ad spend, rapid creative sprints, and data-backed experiments that outpace market benchmarks.
              </p>
              <div className="acts">
                <a className="btn p cr-cta-primary" href="#roles">
                  <span>See open roles</span>
                  <i className="cr-cta-arrow" aria-hidden="true">↓</i>
                </a>
                <InternalLink className="btn g cr-cta-secondary" href="contact.html?topic=Careers#brief">
                  <span>Introduce yourself</span>
                  <i aria-hidden="true">↗</i>
                </InternalLink>
              </div>
            </div>

            <div className="cr-hero-visual">
              <div className="cr-orb" id="crOrb" aria-label="Interactive OBZAC Growth Radar">
                <div className="cr-orb-stage" id="crOrbStage">
                  <svg viewBox="0 0 400 400" className="cr-orb-svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="crg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#BC412B" />
                        <stop offset="100%" stopColor="#E8B04A" />
                      </linearGradient>
                      <radialGradient id="crglow">
                        <stop offset="0%" stopColor="#BC412B" stopOpacity=".28" />
                        <stop offset="60%" stopColor="#E8B04A" stopOpacity=".12" />
                        <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="radarLineGrad" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#BC412B" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#BC412B" stopOpacity="0.85" />
                      </linearGradient>
                      <radialGradient id="radarSweepGrad" cx="200" cy="200" r="190" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#E8B04A" stopOpacity="0.28" />
                        <stop offset="60%" stopColor="#BC412B" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#BC412B" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Breathing Ambient Glow */}
                    <circle cx="200" cy="200" r="190" fill="url(#crglow)" className="cr-glow-pulse" />

                    {/* Concentric Sonar Pulse Waves */}
                    <circle cx="200" cy="200" r="32" fill="none" stroke="#BC412B" strokeWidth="1.5" className="cr-pulse-wave cr-pulse-1" />
                    <circle cx="200" cy="200" r="32" fill="none" stroke="#E8B04A" strokeWidth="1.2" className="cr-pulse-wave cr-pulse-2" />

                    {/* Outer Dashed Orbit + Satellite Node */}
                    <g className="cr-orbit-outer">
                      <circle cx="200" cy="200" r="188" fill="none" stroke="rgba(188,65,43,.28)" strokeWidth="1" strokeDasharray="4 10" />
                      <circle cx="388" cy="200" r="6" fill="#BC412B" className="cr-node cr-node-vermilion" />
                    </g>

                    {/* Middle Gradient Arc Orbit + Satellite Node */}
                    <g className="cr-orbit-mid">
                      <circle cx="200" cy="200" r="146" fill="none" stroke="url(#crg)" strokeWidth="1.6" strokeDasharray="90 40" opacity=".85" />
                      <circle cx="54" cy="200" r="4.5" fill="#E8B04A" className="cr-node cr-node-gold" />
                    </g>

                    {/* Inner Orbit + Satellite Node */}
                    <g className="cr-orbit-inner">
                      <circle cx="200" cy="200" r="104" fill="none" stroke="rgba(110,71,18,.25)" strokeWidth="1" strokeDasharray="12 12" />
                      <circle cx="200" cy="96" r="4.5" fill="#6E4712" className="cr-node cr-node-bronze" />
                    </g>

                    {/* Rotating Radar Scan Beam */}
                    <g className="cr-radar-sweep">
                      <line x1="200" y1="200" x2="200" y2="12" stroke="url(#radarLineGrad)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M 200 200 L 200 12 A 188 188 0 0 1 332 66 Z" fill="url(#radarSweepGrad)" />
                    </g>

                    {/* Interactive Concentric Brand Core */}
                    <g className="cr-center-core" id="crCenterCore" tabIndex="0" role="button" aria-label="Interactive Growth Core: Click to scan">
                      <circle cx="200" cy="200" r="32" fill="#BC412B" className="cr-core-base" />
                      <circle cx="200" cy="200" r="18" fill="#F6F2EB" className="cr-core-ring" />
                      <circle cx="200" cy="8" fill="#BC412B" className="cr-core-dot" />
                    </g>
                  </svg>

                  {/* Floating Marketing Metric Badges */}
                  <div className="cr-badge cr-badge-top" data-depth="0.18">
                    <span className="cr-badge-icon">▲</span>
                    <div>
                      <strong>+142% ROAS</strong>
                      <small>Meta &amp; Google Ads</small>
                    </div>
                  </div>

                  <div className="cr-badge cr-badge-left" data-depth="0.22">
                    <span className="cr-badge-spark">✦</span>
                    <div>
                      <strong>4.8x Organic</strong>
                      <small>SEO Keyword Climb</small>
                    </div>
                  </div>

                  <div className="cr-badge cr-badge-right" data-depth="0.14">
                    <span className="cr-badge-live"></span>
                    <div>
                      <strong>99.4% Buy Box</strong>
                      <small>Amazon Marketplaces</small>
                    </div>
                  </div>

                  {/* Interactive Growth Radar Status Pill */}
                  <button className="cr-radar-pill" id="crRadarStatus" type="button" aria-label="Growth engine status">
                    <span className="cr-radar-ping" aria-hidden="true"></span>
                    <span className="cr-radar-label">Growth Radar: Tracking Alpha</span>
                    <span className="cr-radar-action">Tap to scan ↻</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cr-cue" aria-hidden="true">
            <i></i>SCROLL TO EXPLORE
          </div>
        </section>

        {/* Marquee Ribbon */}
        <div className="cr-mq" aria-hidden="true">
          <div className="cr-mq-track">
            <div className="cr-mq-g">
              <span>Paid Media</span><i>✦</i>
              <span>SEO Strategy</span><i>✦</i>
              <span>Direct-Response Creative</span><i>✦</i>
              <span>Marketplace Growth</span><i>✦</i>
              <span>Social &amp; Creators</span><i>✦</i>
              <span>CRO &amp; Funnels</span><i>✦</i>
              <span>Email &amp; Retention</span><i>✦</i>
              <span>Web Analytics</span><i>✦</i>
            </div>
            <div className="cr-mq-g">
              <span>Paid Media</span><i>✦</i>
              <span>SEO Strategy</span><i>✦</i>
              <span>Direct-Response Creative</span><i>✦</i>
              <span>Marketplace Growth</span><i>✦</i>
              <span>Social &amp; Creators</span><i>✦</i>
              <span>CRO &amp; Funnels</span><i>✦</i>
              <span>Email &amp; Retention</span><i>✦</i>
              <span>Web Analytics</span><i>✦</i>
            </div>
          </div>
        </div>

        {/* Key Numbers / Stats */}
        <section className="cr-sec">
          <div className="wrap">
            <div className="cr-stats">
              <div className="cr-stat">
                <div className="cr-num">
                  <b data-count="6">6</b>
                </div>
                <p>Core growth pillars collaborating as one synchronized marketing squad</p>
              </div>
              <div className="cr-stat">
                <div className="cr-num">
                  <b data-count="25">25</b><u>days</u>
                </div>
                <p>Paid annual leave, plus all public holidays</p>
              </div>
              <div className="cr-stat">
                <div className="cr-num">
                  <b data-count="1.5">1.5</b><u>k</u>
                </div>
                <p>Annual budget for ad spy tools, courses, certifications &amp; summits</p>
              </div>
              <div className="cr-stat">
                <div className="cr-num">
                  <b data-count="100">100</b><u>%</u>
                </div>
                <p>Remote-friendly &amp; async-first culture, judged on impact not desk time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Life at OBZAC (Perks & Culture) */}
        <section className="cr-sec">
          <div className="wrap">
            <span className="cr-eyebrow">Life at OBZAC</span>
            <h2>Good marketers deserve <span className="cr-grad">great conditions.</span></h2>
            <p className="cr-sub">The tools, autonomy, and support you need to run high-impact campaigns and do your career-defining work.</p>

            <div className="cr-perks">
              <div className="card">
                <small>Tools</small>
                <h3>Elite Growth Stack</h3>
                <p>Unlimited access to industry-standard tools: SEMrush, Ahrefs, Motion, Foreplay, Triple Whale, Helium 10, and AI creative suites.</p>
              </div>
              <div className="card">
                <small>Autonomy</small>
                <h3>Freedom to Experiment</h3>
                <p>No 7-tier approval chains to test a hook or optimize a budget. You own your media spend, creative testing, and growth experiments.</p>
              </div>
              <div className="card">
                <small>Balance</small>
                <h3>Async-First &amp; Flexible</h3>
                <p>Campaigns run 24/7, but people don't. Work in your peak creative hours. Synchronous meetings are rare, intentional, and concise.</p>
              </div>
              <div className="card">
                <small>Rest</small>
                <h3>True Unplugged Leave</h3>
                <p>Generous paid time off and scheduled peer coverage so you never have to check live ROAS, ad spend, or notifications on vacation.</p>
              </div>
              <div className="card">
                <small>Health</small>
                <h3>Comprehensive Care</h3>
                <p>Premium medical coverage for you and your family, accompanied by dedicated mental wellness and fitness support.</p>
              </div>
              <div className="card">
                <small>Impact</small>
                <h3>High-Growth Brands</h3>
                <p>Direct collaboration with ambitious D2C brands, funded tech startups, and marketplace category leaders seeking explosive scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="cr-sec" id="roles">
          <div className="cr-roles">
            <div className="cr-roles-top">
              <div>
                <span className="cr-eyebrow">Open positions</span>
                <h2>Find your <span className="cr-grad">desk.</span></h2>
              </div>
              <div className="cr-chips" role="group" aria-label="Filter roles by discipline">
                <button className="cr-chip" type="button" data-f="all" aria-pressed="true">All</button>
                <button className="cr-chip" type="button" data-f="paid-media" aria-pressed="false">Paid Media</button>
                <button className="cr-chip" type="button" data-f="seo-content" aria-pressed="false">SEO &amp; Content</button>
                <button className="cr-chip" type="button" data-f="creative-social" aria-pressed="false">Creative &amp; Social</button>
                <button className="cr-chip" type="button" data-f="marketplace" aria-pressed="false">Marketplaces</button>
                <button className="cr-chip" type="button" data-f="analytics-cro" aria-pressed="false">Analytics &amp; CRO</button>
              </div>
            </div>

            <p className="cr-count" id="crCount" aria-live="polite">Showing 6 roles</p>

            <ul className="cr-list">
              {/* Role 1 */}
              <li className="cr-role" data-team="paid-media">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-1">
                  <strong>Senior Performance Marketing Specialist</strong>
                  <span className="cr-tag">Paid Media</span>
                  <span>Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-1" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Architect and scale profitable paid acquisition across Meta, Google (Search, PMax, YouTube), and TikTok.
                        Formulate full-funnel media buying strategies, scale spend with strong ROAS, and partner directly with our
                        creative team on rapid ad testing and iterative scaling.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=Senior+Performance+Marketing+Specialist#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>4+ years managing profitable ad spend ($100k+/month accounts across e-commerce &amp; D2C)</li>
                      <li>Deep mastery of Meta Ads Manager, Google Ads (PMax, Search, Shopping), and TikTok Ads</li>
                      <li>Strong grounding in server-side tracking, CAPI, attribution models, and GA4</li>
                      <li>Systematic framework for creative testing, hook analysis, and post-click conversion rates</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Role 2 */}
              <li className="cr-role" data-team="seo-content">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-2">
                  <strong>Lead SEO &amp; Organic Growth Strategist</strong>
                  <span className="cr-tag">SEO &amp; Content</span>
                  <span>Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-2" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Own organic revenue, technical health, and keyword dominance for fast-scaling brands. Drive comprehensive
                        technical audits, intent-mapped content architectures, programmatic SEO, and high-authority link acquisition
                        campaigns that sustainably capture search demand.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=Lead+SEO+and+Organic+Growth+Strategist#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>4+ years in data-driven SEO strategy, technical optimization, and content clustering</li>
                      <li>Proven track record ranking competitive commercial queries and driving organic conversions</li>
                      <li>Power user of Ahrefs, SEMrush, Screaming Frog, Google Search Console, and schema markup</li>
                      <li>Ability to translate search data into actionable briefs for copywriters and web developers</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Role 3 */}
              <li className="cr-role" data-team="creative-social">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-3">
                  <strong>Creative Strategist &amp; Direct-Response Copywriter</strong>
                  <span className="cr-tag">Creative &amp; Social</span>
                  <span>Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-3" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Bridge performance analytics with viral creative storytelling. Unpack consumer psychology, write high-converting
                        ad scripts, craft thumb-stopping hooks, and direct video editors and UGC creators to produce top-of-funnel
                        winners and retention assets.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=Creative+Strategist+and+Direct+Response+Copywriter#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>3+ years scripting and directing direct-response video ads (Reels, TikTok, YouTube Shorts)</li>
                      <li>Deep instinct for emotional angles, problem-solution arcs, objections, and call-to-actions</li>
                      <li>Experience briefing and managing UGC creators, storyboard artists, and motion designers</li>
                      <li>Strong portfolio of winning ad creatives with verifiable ROAS and revenue benchmarks</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Role 4 */}
              <li className="cr-role" data-team="creative-social">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-4">
                  <strong>Social Media &amp; Influencer Marketing Manager</strong>
                  <span className="cr-tag">Creative &amp; Social</span>
                  <span>Hybrid / Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-4" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Build vibrant brand presence and high-ROI creator partnerships. Lead end-to-end influencer seeding,
                        creator whitelisting, affiliate programs, and organic brand narrative across Instagram, LinkedIn, and TikTok
                        that turns passive scrollers into passionate brand advocates.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=Social+Media+and+Influencer+Marketing+Manager#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>3+ years managing brand social channels and executing influencer campaigns</li>
                      <li>Proven ability to scout, negotiate, and build lasting relationships with creators</li>
                      <li>High cultural fluency: sharp eye for social trends, meme formats, and native aesthetics</li>
                      <li>Rigorous tracking of creator ROI, engagement metrics, and referral conversions</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Role 5 */}
              <li className="cr-role" data-team="marketplace">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-5">
                  <strong>E-Commerce &amp; Amazon Marketplace Manager</strong>
                  <span className="cr-tag">Marketplaces</span>
                  <span>Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-5" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Accelerate retail sales on Amazon, Flipkart, and Shopify. Optimize product listings, manage Amazon PPC
                        (Sponsored Products, Brands, Video), engineer A+ content refreshes, and maximize TACoS efficiency
                        and Buy Box retention for top e-commerce client accounts.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=Ecommerce+and+Amazon+Marketplace+Manager#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>3+ years scaling marketplace seller accounts with proven revenue records</li>
                      <li>Expert knowledge of Amazon PPC keyword harvesting, negative targeting, and bidding strategies</li>
                      <li>Deep familiarity with listing SEO, catalogue compliance, review generation, and deals</li>
                      <li>Hands-on proficiency with tools like Helium 10, Jungle Scout, Seller Central, and Shopify</li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Role 6 */}
              <li className="cr-role" data-team="analytics-cro">
                <button className="cr-role-h" type="button" aria-expanded="false" aria-controls="role-6">
                  <strong>CRO &amp; Web Analytics Specialist</strong>
                  <span className="cr-tag">Analytics &amp; CRO</span>
                  <span>Remote</span>
                  <span>Full-time</span>
                  <i className="pl" aria-hidden="true"></i>
                </button>
                <div className="cr-role-p" id="role-6" hidden>
                  <div className="cr-role-in">
                    <div>
                      <p>
                        Turn ad clicks into profitable customer acquisitions. Hypothesize, design, and run high-velocity A/B tests
                        on landing pages and checkout flows, while maintaining pristine event tracking across GA4, GTM, and
                        customer data platforms to diagnose conversion drop-offs.
                      </p>
                      <InternalLink className="btn p" href="contact.html?topic=Careers&role=CRO+and+Web+Analytics+Specialist#brief">
                        Apply for this role ↗
                      </InternalLink>
                    </div>
                    <ul>
                      <li>3+ years executing conversion rate optimization (CRO) for high-traffic e-commerce brands</li>
                      <li>Mastery of Google Tag Manager (GTM), GA4, server-side tracking, and conversion APIs</li>
                      <li>Experience building rapid landing pages on Shopify Liquid, Replo, or web builders</li>
                      <li>Data-led mindset using session recordings (Hotjar/Clarity), drop-off funnels, and statistical tests</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cr-open">
              <div>
                <h3>Don't see your specific role?</h3>
                <p>We're always looking for brilliant media buyers, content creators, copywriters, and growth strategists.</p>
              </div>
              <InternalLink className="btn p" href="contact.html?topic=General+Marketing+Careers#brief">
                Introduce yourself →
              </InternalLink>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="cr-sec">
          <div className="wrap cr-proc">
            <div className="cr-proc-l">
              <span className="cr-eyebrow">Hiring process</span>
              <h2>Fast, human, <span className="cr-grad">no surprises.</span></h2>
              <p className="cr-sub">
                Five transparent steps, typically wrapped inside two weeks. You'll have direct communication with senior growth practitioners and know exactly where you stand.
              </p>
            </div>

            <div className="cr-steps">
              <div className="cr-line" aria-hidden="true"><i></i></div>

              <div className="cr-step">
                <span className="cr-dot">01</span>
                <div className="cr-step-b">
                  <h3>Intro &amp; Growth Mindset</h3>
                  <p>A relaxed, candid chat to learn about your marketing background, channels you love, and what you want to achieve next.</p>
                  <em>30 min video</em>
                </div>
              </div>

              <div className="cr-step">
                <span className="cr-dot">02</span>
                <div className="cr-step-b">
                  <h3>Campaign Deep Dive</h3>
                  <p>Walk through real campaigns or case studies you're genuinely proud of. We unpack your hypotheses, metrics, creative angles, and results.</p>
                  <em>60 min video</em>
                </div>
              </div>

              <div className="cr-step">
                <span className="cr-dot">03</span>
                <div className="cr-step-b">
                  <h3>Practical Growth Challenge</h3>
                  <p>A focused, realistic marketing assignment (e.g. ad account audit, campaign brief, or SEO sprint). Paid compensation whenever it takes more than two hours.</p>
                  <em>Take-home or live</em>
                </div>
              </div>

              <div className="cr-step">
                <span className="cr-dot">04</span>
                <div className="cr-step-b">
                  <h3>Meet the Marketing Team</h3>
                  <p>Spend time with the media buyers, strategists, and creators you'll work with directly. Ask anything about our client accounts, culture, or pacing.</p>
                  <em>45 min conversation</em>
                </div>
              </div>

              <div className="cr-step">
                <span className="cr-dot">05</span>
                <div className="cr-step-b">
                  <h3>Offer &amp; Clear Feedback</h3>
                  <p>A competitive, transparent offer and a prompt decision. Constructive, honest feedback for every single person who interviews.</p>
                  <em>Within 48 hours</em>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Standard OBZAC Site Footer */}
      <footer className="site-ft" id="contact">
        <div className="ft-in">
          <div className="ft-cta">
            <p className="ft-kick">Let's build together</p>
            <h2>
              Ready to grow <em>faster?</em>
            </h2>
            <div className="ft-btns">
              <InternalLink className="btn p" href="contact.html#brief">
                Book a call <span aria-hidden="true">→</span>
              </InternalLink>
              <InternalLink className="btn ft-ghost" href="contact.html?topic=Careers#brief">
                Introduce yourself ↗
              </InternalLink>
            </div>
          </div>

          <div className="ft-cols">
            <div>
              <h3>Pages</h3>
              <ul>
                <li><InternalLink href="index.html">Home</InternalLink></li>
                <li><InternalLink href="work.html">Work</InternalLink></li>
                <li><InternalLink href="about.html">About</InternalLink></li>
                <li><InternalLink href="services.html">Services</InternalLink></li>
                <li><InternalLink href="careers.html">Careers</InternalLink></li>
                <li><InternalLink href="contact.html">Contact</InternalLink></li>
              </ul>
            </div>

            <div>
              <h3>Services</h3>
              <ul>
                <li><InternalLink href="services.html#s0">Social media</InternalLink></li>
                <li><InternalLink href="services.html#s1">SEO</InternalLink></li>
                <li><InternalLink href="services.html#s2">Marketplaces</InternalLink></li>
                <li><InternalLink href="services.html#s3">E-commerce</InternalLink></li>
                <li><InternalLink href="services.html#s4">Websites</InternalLink></li>
                <li><InternalLink href="services.html#s5">Branding</InternalLink></li>
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:hello@obzac.com">hello@obzac.com</a></li>
                <li><a href="tel:+000000000000">+00 000 000 0000</a></li>
                <li>Studio address, City</li>
                <li className="ft-note">Open Monday to Friday, 9am - 6pm</li>
              </ul>
            </div>

            <div>
              <h3>Follow</h3>
              <ul>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              </ul>
            </div>
          </div>

          <div className="ft-base">
            <InternalLink className="ft-logo" href="index.html" aria-label="OBZAC home">
              <svg viewBox="0 0 253 64" aria-hidden="true">
                <path d="M55.3461 17.0245L55.3644 2.75056C55.3644 2.46321 55.1598 2.1515 54.8591 2.15516L50.3174 2.21117L40.2064 2.25013C36.8386 0.798748 33.1614 0 29.3113 0C13.1233 0 0 14.1132 0 31.5225C0 48.9318 13.1233 63.045 29.3113 63.045C45.4994 63.045 58.6239 48.9318 58.6239 31.5225C58.6239 26.2953 57.4404 21.3641 55.3461 17.0245ZM44.5874 43.9725C41.0868 48.9318 35.5467 52.1341 29.3113 52.1341C18.7267 52.1341 10.1463 42.9059 10.1463 31.5225C10.1463 20.1391 18.7267 10.9109 29.3113 10.9109C38.9401 10.9109 46.9093 18.5453 48.2718 28.4931C48.407 29.4818 48.4776 30.4936 48.4776 31.5225C48.4776 36.1993 47.0287 40.5133 44.5874 43.9725Z" fill="#BC412B"></path>
                <path d="M28.9225 41.5423C34.4508 41.5423 38.9324 37.0607 38.9324 31.5324C38.9324 26.004 34.4508 21.5225 28.9225 21.5225C23.3942 21.5225 18.9126 26.004 18.9126 31.5324C18.9126 37.0607 23.3942 41.5423 28.9225 41.5423Z" fill="#BC412B"></path>
                <path d="M247.956 51.3879C250.273 51.3879 252.15 49.5102 252.15 47.194C252.15 44.8777 250.273 43 247.956 43C245.64 43 243.762 44.8777 243.762 47.194C243.762 49.5102 245.64 51.3879 247.956 51.3879Z" fill="#BC412B"></path>
                <path d="M86.9895 51.4803C82.275 51.4803 78.5248 50.1945 75.7389 47.6229C72.953 45.0156 71.5601 41.3011 71.5601 36.4794V27.4789C71.5601 22.6572 72.953 18.9605 75.7389 16.389C78.5248 13.7817 82.275 12.478 86.9895 12.478C91.7041 12.478 95.4543 13.7817 98.2402 16.389C101.026 18.9605 102.419 22.6572 102.419 27.4789V36.4794C102.419 41.3011 101.026 45.0156 98.2402 47.6229C95.4543 50.1945 91.7041 51.4803 86.9895 51.4803ZM86.9895 45.1585C89.6325 45.1585 91.6862 44.3906 93.1506 42.8548C94.615 41.319 95.3472 39.2653 95.3472 36.6937V27.2646C95.3472 24.693 94.615 22.6393 93.1506 21.1035C91.6862 19.5677 89.6325 18.7998 86.9895 18.7998C84.3822 18.7998 82.3285 19.5677 80.8285 21.1035C79.3641 22.6393 78.6319 24.693 78.6319 27.2646V36.6937C78.6319 39.2653 79.3641 41.319 80.8285 42.8548C82.3285 44.3906 84.3822 45.1585 86.9895 45.1585ZM107.646 50.7302V44.5156H112.575V19.4427H107.646V13.2281H126.933C129.219 13.2281 131.201 13.621 132.879 14.4067C134.594 15.1568 135.915 16.2461 136.844 17.6748C137.808 19.0677 138.29 20.7464 138.29 22.7108V23.2465C138.29 24.9609 137.969 26.3717 137.326 27.4789C136.683 28.5504 135.915 29.3897 135.022 29.9969C134.165 30.5684 133.344 30.9791 132.558 31.2291V32.1934C133.344 32.4077 134.201 32.8185 135.13 33.4257C136.058 33.9971 136.844 34.8365 137.487 35.9437C138.165 37.0509 138.505 38.4974 138.505 40.2832V40.8189C138.505 42.8905 138.023 44.6763 137.058 46.1764C136.094 47.6408 134.755 48.7658 133.04 49.5516C131.362 50.3373 129.397 50.7302 127.147 50.7302H107.646ZM119.647 44.3013H126.29C127.826 44.3013 129.058 43.9263 129.986 43.1762C130.951 42.4262 131.433 41.3547 131.433 39.9617V39.426C131.433 38.0331 130.969 36.9616 130.04 36.2115C129.111 35.4615 127.861 35.0865 126.29 35.0865H119.647V44.3013ZM119.647 28.6575H126.183C127.647 28.6575 128.844 28.2825 129.772 27.5325C130.736 26.7824 131.219 25.7466 131.219 24.4251V23.8894C131.219 22.5322 130.754 21.4964 129.826 20.7821C128.897 20.032 127.683 19.657 126.183 19.657H119.647V28.6575ZM144.521 50.7302V41.7297L163.058 20.4071V19.5499H145.057V13.2281H170.452V22.2286L151.915 43.5512V44.4084H170.559V50.7302H144.521ZM175.188 50.7302L185.046 13.2281H197.368L207.226 50.7302H199.94L197.904 42.4798H184.51L182.474 50.7302H175.188ZM186.171 35.9437H196.243L191.689 17.6748H190.725L186.171 35.9437ZM226.95 51.4803C222.307 51.4803 218.629 50.1945 215.914 47.6229C213.2 45.0156 211.842 41.3011 211.842 36.4794V27.4789C211.842 22.6572 213.2 18.9605 215.914 16.389C218.629 13.7817 222.307 12.478 226.95 12.478C231.558 12.478 235.112 13.746 237.612 16.2818C240.148 18.782 241.416 22.2286 241.416 26.6217V26.9431H234.451V26.4074C234.451 24.193 233.826 22.3715 232.576 20.9428C231.361 19.5141 229.486 18.7998 226.95 18.7998C224.45 18.7998 222.486 19.5677 221.057 21.1035C219.629 22.6393 218.914 24.7287 218.914 27.3717V36.5866C218.914 39.1938 219.629 41.2833 221.057 42.8548C222.486 44.3906 224.45 45.1585 226.95 45.1585C229.486 45.1585 231.361 44.4441 232.576 43.0155C233.826 41.5511 234.451 39.7296 234.451 37.5509V36.5866H241.416V37.3366C241.416 41.7297 240.148 45.1942 237.612 47.7301C235.112 50.2302 231.558 51.4803 226.95 51.4803Z" fill="currentColor"></path>
              </svg>
            </InternalLink>
            <p>© 2026 OBZAC. Digital marketing &amp; growth partner. All rights reserved.</p>
            <a className="ft-top" href="#" data-top="">Back to top ↑</a>
          </div>
        </div>
      </footer>
        </LegacyPage>
  );
}
