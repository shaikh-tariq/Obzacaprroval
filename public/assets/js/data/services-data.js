/* =============================================================
   OBZAC | Services data
   Edit this file to change service names, copy, card artwork and the
   software list shown on hover.

   Fields per service (array `SV`):
     w     short word shown big on the page
     full  full service name (used for screen readers)
     d     one-line description
     t     tags (kept for later use, not displayed)
     il    which card illustration to use (key of `IL`)
     k     SOFTWARE WE USE, these become the tags that fall on hover
     a, b  colours of the two cards behind the front card
   The tools are placeholders: confirm them before launch.
   ============================================================= */
(function (global) {
  'use strict';
  var OBZAC = (global.OBZAC = global.OBZAC || {});

var V='#BC412B',C='#F6F2EB',I='#2B1A0A',G='#E8B04A',B='#6E4712',K='#E5684D',S='#66717A';
var star='<path d="M0-9 2.6-3 9-2.5 4.2 1.6 5.6 8 0 4.6-5.6 8-4.2 1.6-9-2.5-2.6-3Z"/>';
var IL={
 social:'<circle cx="64" cy="62" r="20" fill="'+V+'"/><rect x="96" y="48" width="120" height="12" rx="6" fill="'+I+'"/><rect x="96" y="68" width="80" height="10" rx="5" fill="'+S+'" opacity=".5"/><rect x="30" y="100" width="340" height="120" rx="14" fill="'+G+'"/><g transform="translate(160 112) scale(.95)"><path d="M50 90C8 60 4 30 27 19c12-5 21 2 23 11 2-9 11-16 23-11 23 11 19 41-23 71Z" fill="'+V+'"/></g><rect x="30" y="238" width="150" height="34" rx="17" fill="'+I+'"/><circle cx="52" cy="255" r="8" fill="'+V+'"/><rect x="68" y="251" width="90" height="8" rx="4" fill="'+C+'" opacity=".7"/>',
 seo:'<rect x="30" y="34" width="340" height="48" rx="24" fill="'+I+'"/><circle cx="62" cy="57" r="10" fill="none" stroke="'+C+'" stroke-width="4"/><path d="M70 65l9 9" stroke="'+C+'" stroke-width="4" stroke-linecap="round"/><rect x="96" y="51" width="150" height="12" rx="6" fill="'+C+'" opacity=".6"/><rect x="30" y="104" width="340" height="56" rx="12" fill="'+V+'"/><rect x="48" y="120" width="170" height="10" rx="5" fill="'+C+'"/><rect x="48" y="140" width="250" height="8" rx="4" fill="'+C+'" opacity=".6"/><g transform="translate(338 132) scale(1.6)" fill="'+G+'">'+star+'</g><rect x="30" y="174" width="340" height="40" rx="12" fill="'+I+'" opacity=".12"/><rect x="30" y="226" width="340" height="40" rx="12" fill="'+I+'" opacity=".12"/>',
 market:[[30,30,G],[210,30,V],[30,160,B],[210,160,K]].map(function(t){return '<rect x="'+t[0]+'" y="'+t[1]+'" width="160" height="110" rx="14" fill="'+t[2]+'"/><circle cx="'+(t[0]+50)+'" cy="'+(t[1]+48)+'" r="22" fill="'+C+'" opacity=".85"/><circle cx="'+(t[0]+22)+'" cy="'+(t[1]+92)+'" r="5" fill="'+C+'"/><circle cx="'+(t[0]+40)+'" cy="'+(t[1]+92)+'" r="5" fill="'+C+'"/><circle cx="'+(t[0]+58)+'" cy="'+(t[1]+92)+'" r="5" fill="'+C+'"/>'}).join(''),
 shop:'<path d="M44 58h42l24 112h160l24-84H96" fill="none" stroke="'+I+'" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="140" cy="208" r="15" fill="'+V+'"/><circle cx="244" cy="208" r="15" fill="'+V+'"/><rect x="132" y="120" width="26" height="40" rx="5" fill="'+G+'"/><rect x="172" y="104" width="26" height="56" rx="5" fill="'+G+'"/><rect x="212" y="88" width="26" height="72" rx="5" fill="'+G+'"/><path d="M262 90l48-46" stroke="'+V+'" stroke-width="10" stroke-linecap="round"/><path d="M316 36l-6 36-30-14Z" fill="'+V+'"/>',
 web:'<rect x="24" y="28" width="352" height="244" rx="16" fill="'+I+'"/><circle cx="48" cy="50" r="6" fill="'+V+'"/><circle cx="68" cy="50" r="6" fill="'+G+'"/><circle cx="88" cy="50" r="6" fill="'+C+'"/><rect x="40" y="70" width="320" height="104" rx="10" fill="'+V+'"/><rect x="56" y="90" width="150" height="16" rx="8" fill="'+C+'"/><rect x="56" y="114" width="104" height="10" rx="5" fill="'+C+'" opacity=".7"/><rect x="56" y="140" width="76" height="20" rx="10" fill="'+G+'"/><rect x="40" y="186" width="100" height="68" rx="10" fill="'+B+'"/><rect x="150" y="186" width="100" height="68" rx="10" fill="'+S+'"/><rect x="260" y="186" width="100" height="68" rx="10" fill="'+K+'"/>',
 brand:'<g transform="translate(34 56) scale(1.6)"><circle cx="50" cy="50" r="46" fill="'+V+'"/><circle cx="50" cy="50" r="30" fill="'+C+'"/><circle cx="50" cy="50" r="15" fill="'+V+'"/></g><text x="222" y="116" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="70" fill="'+I+'">Aa</text><circle cx="238" cy="192" r="20" fill="'+V+'"/><circle cx="286" cy="192" r="20" fill="'+G+'"/><circle cx="334" cy="192" r="20" fill="'+B+'"/><rect x="222" y="232" width="124" height="10" rx="5" fill="'+I+'" opacity=".18"/>'
};
var SV=[
 {w:'Social',full:'Social media marketing and management',d:'A content engine that keeps your brand in front of the right people.',t:['Content calendar','Creative','Community management','Paid social'],il:'social',k:['Meta Business Suite','Buffer','Canva','Adobe Premiere Pro','Figma'],a:V,b:G},
 {w:'SEO',full:'SEO services',d:'Rank for the searches that bring buyers.',t:['Technical audit','Keyword strategy','Link building','Reporting'],il:'seo',k:['Google Search Console','Ahrefs','Semrush','Screaming Frog','Google Analytics 4'],a:B,b:V},
 {w:'Marketplaces',full:'Marketplace management',d:'Win on the marketplaces where your buyers already shop.',t:['Listing optimisation','Marketplace ads','Catalogue support','Reviews and ratings'],il:'market',k:['Amazon Seller Central','Flipkart Seller Hub','Helium 10','Jungle Scout','Google Merchant Center'],a:G,b:K},
 {w:'E-commerce',full:'E-commerce marketing',d:'Turn store traffic into repeat revenue.',t:['Performance ads','Conversion optimisation','Email','Retention'],il:'shop',k:['Shopify','Klaviyo','Meta Ads Manager','Google Ads','Hotjar'],a:K,b:B},
 {w:'Websites',full:'Website development',d:'Fast sites built to convert.',t:['Design and build','Online stores','Speed','SEO foundations'],il:'web',k:['Next.js','Figma','Shopify','WordPress','Vercel'],a:S,b:G},
 {w:'Branding',full:'Branding and communication',d:'A brand that owns a position instead of blending in.',t:['Identity','Guidelines','Messaging and tone','Campaign communication'],il:'brand',k:['Adobe Illustrator','Adobe Photoshop','Adobe After Effects','Figma','Adobe InDesign'],a:G,b:V}
];

  OBZAC.services = SV;
  OBZAC.icons = IL;
})(window);
