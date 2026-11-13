/* OBZAC Work page.
   EDIT HERE: the projects shown in the cinematic showcase. Placeholders until real case studies are approved.
     kick   small gold line above the title
     title  big serif title, use \n for the line break
     side   gold word beside the title, note = the small line under it
     img    full-screen image (1920x1080 or larger, dark/moody works best)
     cat    category shown in the project index and bottom bar, meta = what we did
   Motion tuning (all values are fractions of one project's scroll length):
     IN_FROM/IN_TO  when the next image sharpens out of blur
     OUT_FROM       when the title starts zooming through the camera
     ZOOM           how far the title zooms (bigger = flies further past the camera) */
(function(){
'use strict';
var PROJECTS=[
  {kick:'Creative vision.',title:'The art\nof launch',side:'Launch',note:'A skincare brand, from zero to sold out',img:'assets/img/work/01-launch.jpg',cat:'D2C launch',meta:'Brand identity, packaging, paid social'},
  {kick:'Built to be shared.',title:'The art\nof noise',side:'Social',note:'A content engine for a growing startup',img:'assets/img/work/02-social.jpg',cat:'Social media',meta:'Content strategy, reels, community'},
  {kick:'Found first.',title:'A path\nto page one',side:'Search',note:'SEO that brings buyers, not browsers',img:'assets/img/work/03-search.jpg',cat:'SEO',meta:'Technical SEO, content, links'},
  {kick:'Made to sell.',title:'The art\nof the cart',side:'E-commerce',note:'A store that turns visits into orders',img:'assets/img/work/04-store.jpg',cat:'E-commerce',meta:'Store build, ads, email and retention'}
];
var IN_FROM=-0.38, IN_TO=0.04, OUT_FROM=0.6, ZOOM=34;

var $=function(id){return document.getElementById(id)};
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var N=PROJECTS.length, pad=function(n){return (n<9?'0':'')+(n+1)};
var show=document.querySelector('.wk-show'), slidesEl=$('wkSlides');
show.style.setProperty('--n',N);

/* build slides + index */
slidesEl.innerHTML=PROJECTS.map(function(p,i){
  return '<article class="wk-s" style="z-index:'+(N-i)+'" aria-label="'+p.cat+'">'+
    '<div class="wk-img" style="background-image:url(\''+p.img+'\')" role="img" aria-label="'+p.cat+' project (placeholder image)"></div>'+
    '<div class="wk-txt"><p class="wk-kick">'+p.kick+'</p><div class="wk-tt"><h2>'+p.title.replace('\n','<br>')+'</h2>'+
    '<div class="wk-side"><b>'+p.side+'</b><small>'+p.note+'</small></div></div></div></article>';
}).join('');
$('wkIdx').innerHTML=PROJECTS.map(function(p,i){
  return '<li><a href="#work" data-go="'+i+'"><span class="n">'+pad(i)+'</span><span class="t">'+p.title.replace('\n',' ')+'</span><span class="c">'+p.cat+'</span></a></li>';
}).join('');
$('wkTot').textContent=pad(N-1);

var S=[].map.call(slidesEl.children,function(el){return {el:el,img:el.querySelector('.wk-img'),kick:el.querySelector('.wk-kick'),tt:el.querySelector('.wk-tt'),side:el.querySelector('.wk-side')}});

/* helpers */
function clamp(v,a,b){return v<a?a:v>b?b:v}
function seg(x,a,b){return clamp((x-a)/(b-a),0,1)}
function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function ein(t){return t*t*t}
function geo(){var top=show.getBoundingClientRect().top+scrollY;return {top:top,len:Math.max(1,show.offsetHeight-innerHeight)}}
function scrollToProject(i){var g=geo();scrollTo({top:g.top+(i+0.12)/N*g.len,behavior:reduce?'auto':'smooth'})}

/* one frame of the showcase for overall progress P (0..N) */
var lastActive=-1;
function render(P){
  for(var i=0;i<N;i++){
    var s=S[i], u=P-i;
    if(u<IN_FROM-0.05||u>1.05){s.el.style.visibility='hidden';continue}
    s.el.style.visibility='visible';
    var inn=i===0?1:eio(seg(u,IN_FROM,IN_TO));      // arrival: blur -> sharp
    var out=seg(u,OUT_FROM,1);                         // departure: zoom through
    var hold=seg(u,0,OUT_FROM);
    // image: sharpens and settles on arrival, slow push during hold, darkens and blurs on exit
    var iBlur=(1-inn)*22+ein(out)*16, iBright=1-0.85*seg(u,OUT_FROM+.1,1);
    s.img.style.opacity=(inn*(1-seg(u,.86,1.02))).toFixed(3);
    s.img.style.transform='scale('+(1.16-0.1*inn-0.05*hold+0.06*out).toFixed(4)+')';
    s.img.style.filter=(iBlur>.3?'blur('+iBlur.toFixed(1)+'px) ':'')+'brightness('+iBright.toFixed(3)+')';
    // title: fades in small and soft, grows slowly, then flies past the camera
    var tScale=(0.86+0.14*inn)*(1+0.1*hold)*Math.pow(ZOOM,ein(out));
    var tBlur=(1-inn)*10+(out>.75?(out-.75)*24:0);
    s.tt.style.transform='scale('+tScale.toFixed(4)+')';
    s.tt.style.opacity=(inn*(1-seg(u,.82,.97))).toFixed(3);
    s.tt.style.filter=tBlur>.3?'blur('+tBlur.toFixed(1)+'px)':'none';
    // kicker and side note leave first
    var small=inn*(1-seg(u,OUT_FROM-.08,OUT_FROM+.08));
    s.kick.style.opacity=s.side.style.opacity=small.toFixed(3);
    s.kick.style.transform='translateY('+((1-inn)*16-(1-small)*(inn>=1?12:0)).toFixed(1)+'px)';
  }
  var active=clamp(Math.floor(P+0.3),0,N-1);
  if(active!==lastActive){lastActive=active;$('wkNum').textContent=pad(active);$('wkMeta').textContent=PROJECTS[active].cat;$('wkMeta2').textContent=PROJECTS[active].meta}
  $('wkBar').style.width=(clamp(P/N,0,1)*100).toFixed(2)+'%';
}

/* approach words light up as the section scrolls */
var say=$('wkSay');
say.innerHTML=say.textContent.split(' ').map(function(w){return '<span class="w">'+w+'</span>'}).join(' ');
var words=[].slice.call(say.querySelectorAll('.w'));
function lightWords(){
  if(reduce){words.forEach(function(w){w.classList.add('on')});return}
  var r=say.getBoundingClientRect(),p=seg(innerHeight*.85-r.top,0,innerHeight*.6+r.height);
  var n=Math.round(p*words.length);words.forEach(function(w,i){w.classList.toggle('on',i<n)});
}

/* header colour over dark sections */
function headerTone(){}   // header colour is handled by the shared site.js

/* ---------- one scroll = one project ----------
   While the showcase is on screen, a single wheel tick, swipe or arrow key plays the full
   transition (title zooms through, next image sharpens) and stops on the next project.
   DURATION = how long one transition plays (ms). REST = where each project settles (0..1). */
var DURATION=1600, REST=0.15, COOLDOWN=450;
var cur=0,tgt=0,ticking=false,anim=null,lockUntil=0;
function target(){var g=geo();return clamp((scrollY-g.top)/g.len,0,1)*N}
function setP(P){var g=geo();scrollTo(0,g.top+P/N*g.len)}

/* free scrolling (scrollbar drag, reduced motion off): smooth follow */
function frame(){
  if(!show.isConnected){ticking=false;return}
  cur+=(tgt-cur)*0.14;
  if(Math.abs(tgt-cur)<0.0005)cur=tgt;
  render(cur);
  if(cur!==tgt)requestAnimationFrame(frame);else ticking=false;
}
function onScroll(){
  lightWords();headerTone();
  if(reduce||anim)return;
  tgt=target();
  if(!ticking){ticking=true;requestAnimationFrame(frame)}
}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',onScroll);

/* timed transition between two resting points */
function playTo(P1){
  var P0=target(),t0=performance.now(),d=DURATION*Math.min(1.25,Math.max(.55,Math.abs(P1-P0)));
  anim=true;
  (function step(now){
    if(!show.isConnected){anim=null;return}
    var k=clamp((now-t0)/d,0,1),e=eio(k),P=P0+(P1-P0)*e;
    cur=tgt=P;render(P);setP(P);
    if(k<1)requestAnimationFrame(step);
    else{anim=null;lockUntil=performance.now()+COOLDOWN}
  })(t0);
}
function rests(){var r=[];for(var i=0;i<N;i++)r.push(i+REST);r.push(N);return r}
/* decide whether the showcase handles this gesture; returns true if it did */
function step(dir){
  if(reduce)return false;
  var g=geo(),y=scrollY,P=target();
  if(y<g.top-4||y>g.top+g.len+4)return false;          // showcase not pinned
  if(anim||performance.now()<lockUntil)return true;      // swallow inertia during a transition
  var R=rests(),goal=null;
  if(dir>0){if(P>=N-0.01)return false;var gap=P<REST?0.02:0.2;for(var i=0;i<R.length;i++)if(R[i]>P+gap){goal=R[i];break}}
  else{if(P<=REST+0.2)return false;for(var j=R.length-1;j>=0;j--)if(R[j]<P-0.2){goal=R[j];break}if(goal===null)goal=REST}
  if(goal===null)return false;
  playTo(goal);return true;
}
addEventListener('wheel',function(e){
  if(Math.abs(e.deltaY)<2)return;
  if(step(e.deltaY>0?1:-1))e.preventDefault();
},{passive:false});
if(!matchMedia('(hover: none), (pointer: coarse)').matches){
  var ty=null,tHandled=false;
  addEventListener('touchstart',function(e){ty=e.touches[0].clientY;tHandled=false},{passive:true});
  addEventListener('touchmove',function(e){
    if(ty===null)return;var dy=ty-e.touches[0].clientY;
    if(tHandled){e.preventDefault();return}
    if(Math.abs(dy)>24){if(step(dy>0?1:-1)){tHandled=true;e.preventDefault()}else ty=null}
    else{var g=geo();if(!reduce&&scrollY>=g.top-4&&scrollY<=g.top+g.len-4&&target()>REST+0.2)e.preventDefault()}
  },{passive:false});
  addEventListener('touchend',function(){ty=null});
}
addEventListener('keydown',function(e){
  var k=e.key,dir=(k==='ArrowDown'||k==='PageDown'||(k===' '&&!e.shiftKey))?1:(k==='ArrowUp'||k==='PageUp'||(k===' '&&e.shiftKey))?-1:0;
  if(dir&&step(dir))e.preventDefault();
});

/* controls */
function goProject(i){
  if(reduce){scrollToProject(i);return}
  var g=geo();
  if(scrollY<g.top-4||scrollY>g.top+g.len+4){scrollTo(0,g.top+(i+REST)/N*g.len);cur=tgt=target();render(cur);return}
  playTo(i+REST);
}
$('wkNext').addEventListener('click',function(){
  var P=target(),next=Math.floor(P-REST+0.5)+1;
  if(reduce||next>=N){var e=document.querySelector('.wk-end');scrollTo({top:e.getBoundingClientRect().top+scrollY,behavior:'smooth'})}
  else goProject(next);
});
$('wkIdx').addEventListener('click',function(e){var a=e.target.closest('a[data-go]');if(!a)return;e.preventDefault();goProject(+a.getAttribute('data-go'))});

if(reduce){S.forEach(function(s){s.el.style.visibility='visible'})}
else{cur=tgt=target();render(cur)}
lightWords();headerTone();
})();
