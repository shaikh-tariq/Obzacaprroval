import InternalLink from '../components/Common/InternalLink.jsx';
import LegacyPage from '../components/Layout/LegacyPage.jsx';

export const pageConfig = {
  "title": "Page not found | OBZAC",
  "bodyClass": "",
  "resourceLinks": [],
  "stylesheetPaths": [],
  "inlineStyles": [
    "\n  html,body{height:100%;margin:0}\n  body{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;padding:24px;text-align:center;background:#F6F2EB;color:#2B1A0A;font-family:\"Space Grotesk\",system-ui,sans-serif}\n  .dot{width:72px;height:72px;border-radius:50%;background:radial-gradient(circle,#BC412B 0 22%,#F6F2EB 22% 55%,#BC412B 55%)}\n  h1{margin:0;font-size:clamp(40px,8vw,96px);line-height:1;letter-spacing:-.03em}\n  h1 span{color:#BC412B}\n  p{margin:0;max-width:34ch;font:400 18px/1.5 system-ui,sans-serif;color:rgba(43,26,10,.75)}\n  a{display:inline-block;margin-top:6px;padding:14px 26px;border-radius:999px;background:#BC412B;color:#F6F2EB;font:600 16px/1 system-ui,sans-serif;text-decoration:none}\n  a:focus-visible{outline:3px solid #E8B04A;outline-offset:3px}\n"
  ],
  "metaTags": [
    {
      "name": "viewport",
      "property": null,
      "content": "width=device-width, initial-scale=1"
    },
    {
      "name": "robots",
      "property": null,
      "content": "noindex"
    }
  ],
  "inlineSources": [],
  "scriptPaths": []
};

export default function NotFoundPage() {
  return (
    <LegacyPage page={pageConfig}>
{"\n  "}
<div className="dot" aria-hidden="true"></div>
{"\n  "}
<h1>
  {"404"}
  <span>
    {"."}
  </span>
</h1>
{"\n  "}
<p>
  {"That page wandered off. Let's get you back to the start."}
</p>
{"\n  "}
<a href="/">
  {"Back to the homepage"}
</a>
{"\n"}
        </LegacyPage>
  );
}
