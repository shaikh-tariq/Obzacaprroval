(function(){
'use strict';
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var clamp=function(x,a,b){a=a===undefined?0:a;b=b===undefined?1:b;return Math.min(b,Math.max(a,x))};
var seg=function(p,a,b){return clamp((p-a)/(b-a))};
var ease=function(x){return x*x*(3-2*x)};
var eo=function(x){return 1-Math.pow(1-x,3)};
var eb=function(x){var c=1.9;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
var lerp=function(a,b,t){return a+(b-a)*t};
var eio=function(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
var lineDl=0,lineDt=.016;
function kf(p,k){if(p<=k[0][0])return k[0][1];for(var i=1;i<k.length;i++){if(p<=k[i][0])return lerp(k[i-1][1],k[i][1],ease((p-k[i-1][0])/(k[i][0]-k[i-1][0])))}return k[k.length-1][1]}
function hex(h){return [parseInt(h.substr(1,2),16),parseInt(h.substr(3,2),16),parseInt(h.substr(5,2),16)]}
function mixStops(p,stops,idx){ // idx: colour column in stops
  var s=stops;if(p<=s[0][0])return hex(s[0][idx]);
  for(var i=1;i<s.length;i++){if(p<=s[i][0]){var t=ease((p-s[i-1][0])/(s[i][0]-s[i-1][0])),a=hex(s[i-1][idx]),b=hex(s[i][idx]);return [lerp(a[0],b[0],t),lerp(a[1],b[1],t),lerp(a[2],b[2],t)]}}
  return hex(s[s.length-1][idx]);
}
var rgb=function(c){return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')'};

var story=$('#story'),stage=$('#stage'),cv=$('#tunnel'),ctx=cv.getContext('2d'),screenEl=$('#screen'),bez=$('#bezel');
var hero=$('#hero'),s1=$('#s1'),swoosh=$('#swoosh'),line=$('#line'),tip=$('#tip');
var t2=$$('#t2 p'),t3=$('#t3'),words=$('#words'),gls=$$('.gl'),chart=$('#chart'),bars=$('#bars'),gline=$('#gline'),gtip=$('#gtip');
var better=$$('#better span'),shardsEl=$('#shards'),finalEl=$('#final'),fh=$$('#fh span'),stickersEl=$('#stickers');
var hudn=$('#hudn'),hudi=$('#hudi'),hudp=$('#hudp'),bar=$('.hud .bar');
var cue=$('.cue');

/* ---------- character joints ---------- */
var J={armL:$('#armL'),foreL:$('#foreL'),armR:$('#armR'),foreR:$('#foreR'),legL:$('#legL'),shinL:$('#shinL'),legR:$('#legR'),shinR:$('#shinR'),head:$('#head'),body:$('#bodyG'),pupil:$('#pupil')};
var PIV={armL:[150,208],foreL:[150,270],armR:[250,208],foreR:[250,270],legL:[178,322],shinL:[178,390],legR:[222,322],shinR:[222,390]};
var REST=[32,-32,-28,28,10,-10,-12,12];   // armL,armR,foreL,foreR,legL,legR,shinL,shinR
var SPREAD=[78,-78,-6,6,24,-24,-8,8];
var WAVE=[26,-150,-20,-8,8,-8,-10,10];
function setRot(k,a){J[k].setAttribute('transform','rotate('+a.toFixed(2)+' '+PIV[k][0]+' '+PIV[k][1]+')')}

/* ---------- geometry ---------- */
var W,H,DPR,G,narrow,hb;
function resize(){
  W=stage.clientWidth;H=stage.clientHeight;DPR=Math.min(window.devicePixelRatio||1,1.5);
  cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
  narrow=W<900;
  G=narrow?{L:W*.06,T:H*.09,R:W*.06,B:H*.5}:{L:W*.05,T:H*.16,R:W*.49,B:H*.16};
  G.w=W-G.L-G.R;G.h=H-G.T-G.B;
  G.cx=(G.L+W-G.R)/2-W/2;G.cy=(G.T+H-G.B)/2-H/2;
  hb=H*.62;G.s2=.66*G.h/hb;G.s3=narrow?Math.min(1.12,(W*.9)/(hb*400/600)):1.12;
  hero.style.height=hb+'px';hero.style.width=(hb*400/600)+'px';
  hero.style.marginLeft=(-hb*400/1200)+'px';hero.style.marginTop=(-hb/2)+'px';
  buildChart();
}

/* ---------- swoosh ---------- */
var LL=line.getTotalLength();line.style.strokeDasharray=LL+' '+LL;

/* ---------- chart ---------- */
var BH=[130,180,160,270,330,310,440,540,660];
function buildChart(){
  var h='';for(var i=0;i<BH.length;i++){h+='<rect x="'+(90+i*165)+'" y="'+(900-BH[i])+'" width="115" height="'+BH[i]+'" rx="10"/>'}
  bars.innerHTML=h;
  var d='';for(var j=0;j<BH.length;j++){d+=(j?'L':'M')+(147+j*165)+' '+(900-BH[j]-80)}
  gline.setAttribute('d',d);
}
buildChart();
var GL=0;function chartLen(){GL=gline.getTotalLength();gline.style.strokeDasharray=GL+' '+GL}

/* ---------- particles ---------- */
var NP=window.innerWidth<900?220:460,pa=new Float32Array(NP),pr=new Float32Array(NP),pz=new Float32Array(NP);
for(var i=0;i<NP;i++){pa[i]=Math.random()*6.2832;pr[i]=.2+Math.random()*1.5;pz[i]=Math.random()*60}

var BG=[[0,'#1E1208'],[.44,'#17110C'],[.52,'#1E1208'],[.6,'#2A0F0A'],[.68,'#33190A'],[.76,'#3A230D'],[1,'#3A230D']];
var PAL=[[.44,'#8A949C','#C9BFA8'],[.52,'#BC412B','#F6F2EB'],[.6,'#E5684D','#E8B04A'],[.68,'#E8B04A','#F6F2EB'],[.76,'#F6F2EB','#E8B04A']];

function idleRings(cx,cy,a,color,t){
  var maxR=Math.hypot(W,H)*.55;ctx.strokeStyle=color;
  for(var k=0;k<6;k++){var ph=((t*.1+k/6)%1);ctx.globalAlpha=a*(1-ph)*.6;ctx.lineWidth=2+ph*12;ctx.beginPath();ctx.arc(cx,cy,ph*maxR,0,6.2832);ctx.stroke()}
  ctx.globalAlpha=1;
}

function tunnel(p,t,vel,alpha,ccx,ccy){
  var f=Math.min(W,H)*.5,u=clamp((p-.44)/.32),zc=(u*.55+u*u*.45)*150;
  var sig=ease(seg(p,.48,.57)),c1=rgb(mixStops(p,PAL,1)),c2=rgb(mixStops(p,PAL,2));
  var i,rel,k,x,y,x2,y2;
  // noise blocks (static) that fade as the signal appears
  var nb=1-sig;
  if(nb>.02){for(i=0;i<(narrow?40:90);i++){ctx.fillStyle=Math.random()<.55?'#66717A':'#F6F2EB';ctx.globalAlpha=alpha*nb*(.04+Math.random()*.2);ctx.fillRect(Math.random()*W,Math.random()*H,10+Math.random()*90,2+Math.random()*9)}}
  // centre glow
  var g=ctx.createRadialGradient(ccx,ccy,0,ccx,ccy,f*1.1);g.addColorStop(0,c1);g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.globalAlpha=alpha*.22*sig;ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // streaking particles
  var L=60,sl=.15+sig*(1.5+vel*6),jit=(1-sig)*16;
  ctx.globalAlpha=alpha*.95;ctx.lineWidth=1.4+sig*2.4;ctx.lineCap='round';
  for(var pass=0;pass<2;pass++){
    ctx.strokeStyle=pass?c2:c1;ctx.beginPath();
    for(i=pass;i<NP;i+=2){
      rel=((pz[i]-zc)%L+L)%L+.4;k=f*2.4/rel;
      x=ccx+Math.cos(pa[i])*pr[i]*k;y=ccy+Math.sin(pa[i])*pr[i]*k;
      var k2=f*2.4/(rel+sl);x2=ccx+Math.cos(pa[i])*pr[i]*k2;y2=ccy+Math.sin(pa[i])*pr[i]*k2;
      if(jit>.5){x+=(Math.random()-.5)*jit;y+=(Math.random()-.5)*jit;x2=x+(Math.random()-.5)*3;y2=y+(Math.random()-.5)*3}
      ctx.moveTo(x2,y2);ctx.lineTo(x,y);
    }
    ctx.stroke();
  }
  // gates
  var rA=ease(seg(p,.5,.57)),sp=4.5;
  if(rA>.01){
    var i0=Math.ceil(zc/sp);
    for(i=i0+17;i>=i0;i--){
      rel=i*sp-zc;if(rel<.5)continue;
      var R=f*2.2/rel,lw=Math.max(2,R*.045),a=rA*clamp(1-rel/72)*clamp((rel-.5)/1.5);
      ctx.globalAlpha=alpha*a;ctx.strokeStyle=(i%3===0)?c2:c1;ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=lw;
      if(i%3===0){
        var sz=R*1.5,rot=i*.4+rel*.05;ctx.save();ctx.translate(ccx,ccy);ctx.rotate(rot);
        ctx.beginPath();var r=Math.min(sz*.2,60);ctx.moveTo(-sz+r,-sz);ctx.arcTo(sz,-sz,sz,sz,r);ctx.arcTo(sz,sz,-sz,sz,r);ctx.arcTo(-sz,sz,-sz,-sz,r);ctx.arcTo(-sz,-sz,sz,-sz,r);ctx.closePath();ctx.stroke();ctx.restore();
      }else{
        ctx.beginPath();ctx.arc(ccx,ccy,R,0,6.2832);ctx.stroke();
        if(R<f*1.1)ctx.fillRect(ccx+R*.38,ccy-R-lw/2,R*.52,R*.2); // the notch from the OBZAC mark
      }
    }
  }
  ctx.globalAlpha=1;
}

function drawCanvas(p,t,vel,e){
  ctx.setTransform(DPR,0,0,DPR,0,0);
  var diag=Math.hypot(W,H),b=seg(p,.76,.83),c=seg(p,.91,.965);
  var bg=b>=1?'#BC412B':rgb(mixStops(p,BG,1));
  ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  var ccx=lerp(W/2+G.cx,W/2,e),ccy=lerp(H/2+G.cy,H/2,e);
  var idleA=1-seg(p,.4,.47);
  if(idleA>0)idleRings(ccx,ccy,idleA,'#BC412B',t);
  var tw=seg(p,.43,.46)*(1-seg(p,.79,.84));
  if(tw>0)tunnel(p,t,vel,tw,W/2,H/2);
  if(b>0&&b<1){
    var R=eo(b)*diag*.58;
    ctx.fillStyle='#BC412B';ctx.beginPath();ctx.arc(W/2,H/2,R,0,6.2832);ctx.fill();
    ctx.strokeStyle='#F6F2EB';ctx.lineWidth=4+30*(1-b);ctx.beginPath();ctx.arc(W/2,H/2,R,0,6.2832);ctx.stroke();
  }
  if(c>0){
    if(c>=1){ctx.fillStyle='#1E1208';ctx.fillRect(0,0,W,H)}
    else{var R2=eo(c)*diag*.58;ctx.fillStyle='#1E1208';ctx.beginPath();ctx.arc(W/2,H/2,R2,0,6.2832);ctx.fill();
      ctx.strokeStyle='#F6F2EB';ctx.lineWidth=4+24*(1-c);ctx.beginPath();ctx.arc(W/2,H/2,R2,0,6.2832);ctx.stroke()}
  }
  if(p>.93)idleRings(W/2,H/2,seg(p,.93,.98)*.8,'#BC412B',t);
}

/* ---------- shards ---------- */
var seed=7;function rnd(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
var SH=[];
(function(){
  var cols=['#F6F2EB','#E8B04A','#6E4712','#2B1A0A','#E5684D','#F6F2EB'],clips=['polygon(50% 0,100% 100%,0 100%)','polygon(0 0,100% 18%,80% 100%,10% 80%)','none','polygon(30% 0,100% 0,70% 100%,0 100%)'];
  for(var i=0;i<22;i++){
    var el=document.createElement('i'),sz=2+rnd()*5.5,cl=clips[(i%4)];
    el.style.width=sz+'vw';el.style.height=(sz*(.6+rnd()*.8))+'vw';el.style.background=cols[i%cols.length];el.style.clipPath=cl;
    if(cl==='none'){el.style.borderRadius='50%'; if(i%8===2){el.style.background='transparent';el.style.border='.9vw solid #F6F2EB'}}
    shardsEl.appendChild(el);
    SH.push({el:el,ang:rnd()*6.2832,d:.5+rnd()*1.1,rot:(rnd()-.5)*720,r0:rnd()*360,w:sz});
  }
})();

/* ---------- stickers ---------- */
var S={
 palette:'<svg viewBox="0 0 100 100"><path d="M50 6C26 6 6 24 6 48C6 72 24 94 48 94C57 94 60 88 57 82C54 75 58 70 66 70L78 70C89 70 96 62 96 52C96 26 76 6 50 6Z" fill="#E8B04A"/><circle cx="27" cy="50" r="7" fill="#BC412B"/><circle cx="42" cy="28" r="7" fill="#2B1A0A"/><circle cx="65" cy="26" r="7" fill="#F6F2EB"/><circle cx="79" cy="45" r="7" fill="#6E4712"/></svg>',
 tag:'<svg viewBox="0 0 100 100"><path d="M8 14A6 6 0 0 1 14 8H48A8 8 0 0 1 53.7 10.3L92 48.6A8 8 0 0 1 92 60L60 92A8 8 0 0 1 48.6 92L10.3 53.7A8 8 0 0 1 8 48Z" fill="#BC412B"/><circle cx="28" cy="28" r="8" fill="#F6F2EB"/><text x="58" y="66" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="34" fill="#F6F2EB">$</text></svg>',
 heart:'<svg viewBox="0 0 100 100"><path d="M50 90C8 60 4 30 27 19c12-5 21 2 23 11 2-9 11-16 23-11 23 11 19 41-23 71Z" fill="#BC412B"/></svg>',
 share:'<svg viewBox="0 0 100 100"><rect x="6" y="6" width="88" height="88" rx="22" fill="#6E4712"/><g stroke="#F6F2EB" stroke-width="7" stroke-linecap="round"><line x1="34" y1="48" x2="68" y2="30"/><line x1="34" y1="52" x2="68" y2="70"/></g><circle cx="30" cy="50" r="11" fill="#E8B04A"/><circle cx="70" cy="28" r="11" fill="#F6F2EB"/><circle cx="70" cy="72" r="11" fill="#F6F2EB"/></svg>',
 mega:'<svg viewBox="0 0 100 100"><path d="M12 38h22l40-22v68L34 62H12a6 6 0 0 1-6-6V44a6 6 0 0 1 6-6Z" fill="#BC412B"/><rect x="26" y="60" width="16" height="30" rx="6" fill="#6E4712"/><path d="M86 36c6 4 6 24 0 28" fill="none" stroke="#E8B04A" stroke-width="8" stroke-linecap="round"/></svg>',
 search:'<svg viewBox="0 0 100 100"><circle cx="42" cy="42" r="30" fill="#F6F2EB" stroke="#2B1A0A" stroke-width="10"/><line x1="64" y1="64" x2="90" y2="90" stroke="#2B1A0A" stroke-width="14" stroke-linecap="round"/><polyline points="28,50 38,40 46,46 56,32" fill="none" stroke="#BC412B" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 cursor:'<svg viewBox="0 0 100 100"><polygon points="26,6 26,80 44,64 56,92 70,86 58,58 82,58" fill="#F6F2EB" stroke="#2B1A0A" stroke-width="6" stroke-linejoin="round"/></svg>',
 cart:'<svg viewBox="0 0 100 100"><path d="M26 28h58l-8 34H34Z" fill="#E8B04A"/><path d="M6 12h14l10 50h46l8-34" fill="none" stroke="#2B1A0A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="38" cy="82" r="8" fill="#BC412B"/><circle cx="70" cy="82" r="8" fill="#BC412B"/></svg>',
 code:'<svg viewBox="0 0 100 100"><rect x="6" y="14" width="88" height="72" rx="14" fill="#2B1A0A"/><polyline points="38,38 24,50 38,62" fill="none" stroke="#E8B04A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="62,38 76,50 62,62" fill="none" stroke="#F6F2EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><line x1="54" y1="34" x2="46" y2="66" stroke="#BC412B" stroke-width="7" stroke-linecap="round"/></svg>'
};
/* service name pills: one per service. Text size stays the same on every pill; the width follows the word length */
var PW={};
function pill(key,t,bg,fg){var w=Math.round(t.length*17+48);PW[key]=w*11/150;S[key]='<svg viewBox="0 0 '+w+' 60"><rect x="2" y="2" width="'+(w-4)+'" height="56" rx="28" fill="'+bg+'"/><text x="'+w/2+'" y="39" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="26" fill="'+fg+'" letter-spacing="2">'+t+'</text></svg>'}
pill('seo','SEO','#BC412B','#F6F2EB');pill('social','SOCIAL MEDIA','#E8B04A','#2B1A0A');pill('mkt','MARKETING','#6E4712','#F6F2EB');
pill('shop','E-COMMERCE','#2B1A0A','#F6F2EB');pill('web','WEBSITES','#66717A','#F6F2EB');pill('brand','BRANDING','#E5684D','#2B1A0A');
// name, left%, top%, width(vw, 0 = pill width), rotation, pop point
var SL=[['palette',6,10,8,-14,.915],['tag',24,6,5.5,12,.922],['heart',86,9,6.5,14,.918],['seo',66,5,0,-8,.93],['share',89,46,7,10,.925],['mkt',80,74,0,-10,.935],['social',3,30,0,-8,.92],['shop',14,74,0,16,.928],['mega',27,24,6.5,-12,.94],['search',70,26,7,8,.938],['web',44,82,0,-6,.944],['cursor',58,70,5.5,14,.946],['brand',2,84,0,8,.95],['cart',91,87,5.5,10,.952],['code',79,41,5,-10,.954]];
var STK=SL.map(function(s){var d=document.createElement('div');d.className='stk';d.style.left=s[1]+'%';d.style.top=s[2]+'%';d.style.width=(s[3]||PW[s[0]])+'vw';d.style.minWidth='44px';d.innerHTML=S[s[0]];stickersEl.appendChild(d);return d});

/* ---------- input / loop ---------- */
var SCENES=[[0,'01 Line'],[.1,'02 Device'],[.24,'03 Expand'],[.36,'04 Words'],[.46,'05 Tunnel'],[.76,'06 Breakthrough'],[.9,'07 Call to action']];
var mx=0,my=0;
window.addEventListener('pointermove',function(e){var r=stage.getBoundingClientRect();mx=((e.clientX-r.left)/r.width-.5)*2;my=((e.clientY-r.top)/r.height-.5)*2},{passive:true});

function render(p,t,vel){
  var riseBase=narrow?.42:1;
  var riseA=narrow?0:.06,riseB=narrow?.08:.17;
  var rise=riseBase*(1-ease(seg(p,riseA,riseB))),e=ease(seg(p,.24,.33));
  var adv=Math.min(Math.abs(vel)*3,3),sp=1+adv;

  /* screen frame */
  screenEl.style.transform='translate3d(0,'+(rise*H).toFixed(1)+'px,0)';
  screenEl.style.visibility=(narrow||p>=.05)?'visible':'hidden';
  var k=1-e,T=G.T*k,R=G.R*k,B=G.B*k,L=G.L*k,rad=28*k;
  cv.style.clipPath='inset('+T+'px '+R+'px '+B+'px '+L+'px round '+rad+'px)';
  bez.style.clipPath='inset('+(T-10*k)+'px '+(R-10*k)+'px '+(B-10*k)+'px '+(L-10*k)+'px round '+(rad+10*k)+'px)';
  if(narrow||p>.045)drawCanvas(p,RM?0:t,vel,e);

  /* scene 1 */
  /* line: the dot enters from outside the top of the screen once the story fills the screen,
     then draws with ease-in-out over the first LINE_END of the story, softly following the scroll. */
  var LINE_END=narrow?.10:.2,want=LL*eio(seg(p,0,LINE_END));
  if(!isFinite(want))want=0;
  if(!isFinite(lineDl))lineDl=0;
  lineDl=RM?want:lineDl+(want-lineDl)*Math.min(1,lineDt*6);
  if(Math.abs(want-lineDl)<.2)lineDl=want;
  line.style.strokeDashoffset=0;line.style.strokeDasharray=lineDl.toFixed(1)+' '+LL;
  line.style.visibility=lineDl<1?'hidden':'visible';tip.style.visibility=line.style.visibility;
  var pt=line.getPointAtLength(Math.max(1,lineDl));tip.setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')');
  swoosh.style.transform='translate3d(0,'+(-ease(seg(p,narrow?.06:.1,narrow?.18:.26))*H*.5)+'px,0)';
  swoosh.style.opacity=1-seg(p,narrow?.08:.13,narrow?.16:.2);swoosh.style.visibility=p>(narrow?.18:.28)?'hidden':'visible';
  s1.style.transform='translate3d(0,'+(-ease(seg(p,narrow?.008:.03,narrow?.075:.17))*H*.9)+'px,0)';
  s1.style.opacity=1-seg(p,narrow?.04:.09,narrow?.08:.18);
  s1.style.visibility=p>(narrow?.08:.2)?'hidden':'visible';
  cue.style.opacity=1-seg(p,.01,.05);

  /* scene 2 text */
  var t2A=narrow?.06:.15,t2B=narrow?.10:.205;
  t2.forEach(function(el,i){var a=seg(p,t2A+i*.014,t2B+i*.014),o=a*(1-seg(p,.235,.27));el.style.opacity=o;el.style.transform='translate3d(0,'+((1-eo(a))*32)+'px,0)'});
  $('#t2').style.visibility=(p>(narrow?.05:.1)&&p<.28)?'visible':'hidden';

  /* scene 3 text */
  var o3=seg(p,.305,.335)*(1-seg(p,.36,.385));
  t3.style.opacity=o3;t3.style.transform='translate3d(0,'+((1-eo(seg(p,.305,.34)))*40-seg(p,.36,.39)*30)+'px,0)';

  /* giant words */
  var wv=seg(p,.35,.395)*(1-seg(p,.445,.475)),z=seg(p,.36,.47);
  words.style.opacity=wv;words.style.transform='scale('+(.8+z*z*1.9).toFixed(3)+')';
  words.style.visibility=wv>0?'visible':'hidden';

  /* gates */
  gls.forEach(function(el){
    var pc=parseFloat(el.dataset.pc),u=seg(p,pc-.045,pc+.035);
    el.style.opacity=seg(u,0,.14)*(1-seg(u,.78,1));
    el.style.transform='scale('+(.16+Math.pow(u,2.2)*3.6).toFixed(3)+')';
  });

  /* growth chart */
  var co=seg(p,.79,.82)*(1-seg(p,.915,.95));
  chart.style.opacity=co;chart.style.visibility=co>0?'visible':'hidden';
  if(co>0){
    if(!GL)chartLen();
    var rs=bars.children;for(var i=0;i<rs.length;i++){var a=eo(seg(p,.8+i*.004,.86+i*.004));rs[i].style.transform='scaleY('+a+')'}
    var gp=seg(p,.81,.9),gl=GL*gp;gline.style.strokeDashoffset=GL-gl;
    var q=gline.getPointAtLength(Math.max(.1,gl));gtip.setAttribute('transform','translate('+q.x+' '+q.y+')');
  }
  better.forEach(function(el,i){var a=seg(p,.84+i*.012,.885+i*.012),o=a*(1-seg(p,.9,.925));el.style.opacity=o;el.style.transform='translate3d(0,'+((1-eo(a))*50)+'px,0)'});

  /* shards */
  var sk=seg(p,.77,.93),so=seg(p,.77,.79)*(1-seg(p,.88,.93)),dist=eo(seg(p,.77,.92));
  shardsEl.style.visibility=so>0?'visible':'hidden';
  if(so>0)SH.forEach(function(s){
    var d=dist*s.d*Math.max(W,H)*.75;
    s.el.style.opacity=so;
    s.el.style.transform='translate3d('+(Math.cos(s.ang)*d)+'px,'+(Math.sin(s.ang)*d)+'px,0) translate(-50%,-50%) rotate('+(s.r0+s.rot*sk)+'deg) scale('+(.4+dist*.9)+')';
  });

  /* CTA */
  var fo=seg(p,.91,.935);
  $('.final .kicker').style.opacity=fo*.85;
  fh.forEach(function(el,i){var a=seg(p,.915+i*.01,.95+i*.01);el.style.opacity=a;el.style.transform='translate3d(0,'+((1-eo(a))*60)+'px,0)'});
  $('.btns').style.opacity=seg(p,.95,.975);$('.cue2').style.opacity=seg(p,.96,.985);
  finalEl.style.visibility=p>.9?'visible':'hidden';
  $('.btns').style.pointerEvents=p>.96?'auto':'none';
  STK.forEach(function(el,i){
    var s=SL[i],a=seg(p,s[5],s[5]+.028),sc=a>0?eb(a):0,fl=RM?0:Math.sin(t*1.1+i*1.7)*7;
    el.style.opacity=a>0?1:0;el.style.transform='translate3d(0,'+fl+'px,0) rotate('+(s[4]+(1-a)*50+(RM?0:Math.sin(t*.8+i)*3))+'deg) scale('+Math.max(0,sc)+')';
  });

  /* hero character */
  var hP0=narrow?.06:.1;
  var x=kf(p,[[hP0,G.cx],[.24,G.cx],[.33,0],[1,0]]);
  var yv=kf(p,[[hP0,G.cy],[.24,G.cy],[.33,H*.13],[.37,H*.13],[.46,0],[.76,0],[.84,H*.02],[.92,H*.02],[.98,H*.07],[1,H*.07]]);
  var sc=kf(p,[[hP0,G.s2],[.24,G.s2],[.33,G.s3],[.37,G.s3],[.46,.26],[.52,.42],[.76,.56],[.84,.95],[.9,.85],[.96,.66],[1,.66]]);
  var tunW=seg(p,.44,.5)*(1-seg(p,.76,.8));
  var bob=RM?0:Math.sin(t*1.2)*H*.012;
  var rot=RM?0:(Math.sin(t*.7)*5*tunW+Math.sin(t*.9)*2);
  var tx=x+(RM?0:Math.sin(t*.5)*W*.01*(1+tunW*2)),ty=yv+rise*H*1.1+bob;
  var sx=1-tunW*(RM?0:.16*(.5-.5*Math.cos(t*.9)));
  hero.style.opacity=seg(p,narrow?.04:.085,narrow?.08:.12);
  hero.style.transform='translate3d('+tx.toFixed(1)+'px,'+ty.toFixed(1)+'px,0) rotate('+rot.toFixed(2)+'deg) scale('+(sc*sx).toFixed(3)+','+sc.toFixed(3)+')';
  // pose
  var spW=kf(p,[[.22,0],[.3,1],[.38,1],[.44,0],[.78,0],[.83,1],[.9,1],[.94,0],[1,0]]),wvW=kf(p,[[.92,0],[.96,1],[1,1]]);
  var po=[],n;
  for(n=0;n<8;n++){var v=lerp(REST[n],SPREAD[n],spW);po.push(lerp(v,WAVE[n],wvW))}
  var ang=RM?0:t;
  po[0]+=Math.sin(ang*1.7)*5*sp;po[1]+=Math.sin(ang*1.7+1)*5*sp;po[2]+=Math.sin(ang*2.1)*6*sp;po[3]+=Math.sin(ang*2.1+2)*6*sp;
  po[4]+=Math.sin(ang*2.6)*(6+tunW*10)*sp;po[5]+=Math.sin(ang*2.6+Math.PI)*(6+tunW*10)*sp;po[6]+=Math.sin(ang*2.6-1)*8*sp;po[7]+=Math.sin(ang*2.6+2)*8*sp;
  po[3]+=Math.sin(ang*9)*24*wvW;po[1]+=Math.sin(ang*4.5)*6*wvW;
  setRot('armL',po[0]);setRot('armR',po[1]);setRot('foreL',po[2]);setRot('foreR',po[3]);setRot('legL',po[4]);setRot('legR',po[5]);setRot('shinL',po[6]);setRot('shinR',po[7]);
  J.head.setAttribute('transform','rotate('+(mx*5+(RM?0:Math.sin(t*.8)*2)).toFixed(2)+' 200 112)');
  var hx=Math.max(-10,Math.min(10,mx*12)),hy=Math.max(-10,Math.min(10,my*12));
  J.pupil.setAttribute('transform','translate('+hx.toFixed(2)+' '+hy.toFixed(2)+')');

  /* HUD */
  var si=0;for(var s=0;s<SCENES.length;s++)if(p>=SCENES[s][0])si=s;
  if(hudn.textContent!==SCENES[si][1])hudn.textContent=SCENES[si][1];
  hudi.style.left=(p*100)+'%';hudp.textContent=Math.round(p*100)+'%';
  stage.classList.toggle('dark',p>.2);stage.classList.toggle('cta',p>.915);
}

var cur=0,prev=0,lastT=performance.now(),vsm=0;
function frame(now){
  if(!story.isConnected)return;
  var dt=Math.min(.05,(now-lastT)/1000)||.016;lastT=now;lineDt=dt;
  var r=story.getBoundingClientRect(),total=story.offsetHeight-stage.clientHeight;
  var target=total>0?clamp(-r.top/total):0;
  if(!isFinite(target))target=0;
  cur+=(target-cur)*(RM?1:Math.min(1,dt*7));
  var v=(cur-prev)/dt;prev=cur;vsm+=(v-vsm)*Math.min(1,dt*8);
  render(cur,now/1000,vsm);
  requestAnimationFrame(frame);
}
resize();window.addEventListener('resize',resize);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(resize);
window.__obzac={jump:function(p){var total=story.offsetHeight-stage.clientHeight;window.scrollTo(0,story.offsetTop+p*total);cur=prev=p}};
requestAnimationFrame(frame);
})();
