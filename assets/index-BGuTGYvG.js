const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PostsPage-WEw_mywT.js","assets/EmptyStatePanel.vue_vue_type_script_setup_true_lang-Cy5NYrtJ.js","assets/PostCategoryPage-BPkFYpWj.js","assets/PostDetailPage-NI7MmJpk.js","assets/toc-kThUzIry.js","assets/markdown-BxBw2DMQ.js","assets/NotesPage-C6AmJRvC.js","assets/TopicsPage-CzR2NLmD.js","assets/TopicDetailPage-CyaFTW3S.js","assets/NoteDetailPage-DK4mdgkI.js","assets/ProjectsPage-DwFA1ht4.js","assets/ProjectDetailPage-Chsakuft.js","assets/ThinkingPage-T5qvpcdJ.js","assets/ThinkingDetailPage-YFN_nbdr.js","assets/SaysPage-EWlgyiVw.js","assets/SaysPage-1h13S-dp.css","assets/CategoryPage-CXDXyrkc.js","assets/PageDetailPage-CZ-sdZb6.js","assets/NotFoundPage-B6YfuTUm.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Na="modulepreload",Da=function(e){return"/"+e},mr={},Ve=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(a=>{if(a=Da(a),a in mr)return;mr[a]=!0;const u=a.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Na,u||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ke={},_n=[],Et=()=>{},Ci=()=>!1,Fs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ho=e=>e.startsWith("onUpdate:"),$e=Object.assign,Bo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$a=Object.prototype.hasOwnProperty,we=(e,t)=>$a.call(e,t),se=Array.isArray,kn=e=>Hs(e)==="[object Map]",Mi=e=>Hs(e)==="[object Set]",oe=e=>typeof e=="function",Ie=e=>typeof e=="string",Ht=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Ai=e=>(Ce(e)||oe(e))&&oe(e.then)&&oe(e.catch),Ii=Object.prototype.toString,Hs=e=>Ii.call(e),ja=e=>Hs(e).slice(8,-1),Ri=e=>Hs(e)==="[object Object]",Vo=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fa=/-\w/g,ht=Bs(e=>e.replace(Fa,t=>t.slice(1).toUpperCase())),Ha=/\B([A-Z])/g,en=Bs(e=>e.replace(Ha,"-$1").toLowerCase()),Vs=Bs(e=>e.charAt(0).toUpperCase()+e.slice(1)),no=Bs(e=>e?`on${Vs(e)}`:""),Yt=(e,t)=>!Object.is(e,t),Ts=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ba=e=>{const t=Ie(e)?Number(e):NaN;return isNaN(t)?e:t};let gr;const Us=()=>gr||(gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function it(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Ie(s)?Wa(s):it(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(Ie(e)||Ce(e))return e}const Va=/;(?![^(]*\))/g,Ua=/:([^]+)/,Ga=/\/\*[^]*?\*\//g;function Wa(e){const t={};return e.replace(Ga,"").split(Va).forEach(n=>{if(n){const s=n.split(Ua);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Oe(e){let t="";if(Ie(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const s=Oe(e[n]);s&&(t+=s+" ")}else if(Ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Za="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ka=Fo(Za);function Oi(e){return!!e||e===""}const Li=e=>!!(e&&e.__v_isRef===!0),me=e=>Ie(e)?e:e==null?"":se(e)||Ce(e)&&(e.toString===Ii||!oe(e.toString))?Li(e)?me(e.value):JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>Li(t)?Ni(e,t.value):kn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[so(s,r)+" =>"]=o,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>so(n))}:Ht(t)?so(t):Ce(t)&&!se(t)&&!Ri(t)?String(t):t,so=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class Ja{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!t&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=rt;try{return rt=this,t()}finally{rt=n}}}on(){++this._on===1&&(this.prevScope=rt,rt=this)}off(){this._on>0&&--this._on===0&&(rt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ya(){return rt}let Ee;const oo=new WeakSet;class Di{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oo.has(this)&&(oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ji(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,br(this),Fi(this);const t=Ee,n=vt;Ee=this,vt=!0;try{return this.fn()}finally{Hi(this),Ee=t,vt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wo(t);this.deps=this.depsTail=void 0,br(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_o(this)&&this.run()}get dirty(){return _o(this)}}let $i=0,Gn,Wn;function ji(e,t=!1){if(e.flags|=8,t){e.next=Wn,Wn=e;return}e.next=Gn,Gn=e}function Uo(){$i++}function Go(){if(--$i>0)return;if(Wn){let t=Wn;for(Wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Gn;){let t=Gn;for(Gn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Fi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hi(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Wo(s),Xa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function _o(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===es)||(e.globalVersion=es,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!_o(e))))return;e.flags|=2;const t=e.dep,n=Ee,s=vt;Ee=e,vt=!0;try{Fi(e);const o=e.fn(e._value);(t.version===0||Yt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ee=n,vt=s,Hi(e),e.flags&=-3}}function Wo(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Wo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let vt=!0;const Vi=[];function $t(){Vi.push(vt),vt=!1}function jt(){const e=Vi.pop();vt=e===void 0?!0:e}function br(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ee;Ee=void 0;try{t()}finally{Ee=n}}}let es=0;class Qa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ee||!vt||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new Qa(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,Ui(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=s)}return n}trigger(t){this.version++,es++,this.notify(t)}notify(t){Uo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Go()}}}function Ui(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ui(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ko=new WeakMap,dn=Symbol(""),So=Symbol(""),ts=Symbol("");function Je(e,t,n){if(vt&&Ee){let s=ko.get(e);s||ko.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Zo),o.map=s,o.key=n),o.track()}}function Lt(e,t,n,s,o,r){const i=ko.get(e);if(!i){es++;return}const l=a=>{a&&a.trigger()};if(Uo(),t==="clear")i.forEach(l);else{const a=se(e),u=a&&Vo(n);if(a&&n==="length"){const c=Number(s);i.forEach((d,h)=>{(h==="length"||h===ts||!Ht(h)&&h>=c)&&l(d)})}else switch((n!==void 0||i.has(void 0))&&l(i.get(n)),u&&l(i.get(ts)),t){case"add":a?u&&l(i.get("length")):(l(i.get(dn)),kn(e)&&l(i.get(So)));break;case"delete":a||(l(i.get(dn)),kn(e)&&l(i.get(So)));break;case"set":kn(e)&&l(i.get(dn));break}}Go()}function mn(e){const t=ge(e);return t===e?t:(Je(t,"iterate",ts),pt(e)?t:t.map(Ue))}function Gs(e){return Je(e=ge(e),"iterate",ts),e}const qa={__proto__:null,[Symbol.iterator](){return ro(this,Symbol.iterator,Ue)},concat(...e){return mn(this).concat(...e.map(t=>se(t)?mn(t):t))},entries(){return ro(this,"entries",e=>(e[1]=Ue(e[1]),e))},every(e,t){return Ct(this,"every",e,t,void 0,arguments)},filter(e,t){return Ct(this,"filter",e,t,n=>n.map(Ue),arguments)},find(e,t){return Ct(this,"find",e,t,Ue,arguments)},findIndex(e,t){return Ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ct(this,"findLast",e,t,Ue,arguments)},findLastIndex(e,t){return Ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return io(this,"includes",e)},indexOf(...e){return io(this,"indexOf",e)},join(e){return mn(this).join(e)},lastIndexOf(...e){return io(this,"lastIndexOf",e)},map(e,t){return Ct(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return vr(this,"reduce",e,t)},reduceRight(e,...t){return vr(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return Ct(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return mn(this).toReversed()},toSorted(e){return mn(this).toSorted(e)},toSpliced(...e){return mn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return ro(this,"values",Ue)}};function ro(e,t,n){const s=Gs(e),o=s[t]();return s!==e&&!pt(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const ec=Array.prototype;function Ct(e,t,n,s,o,r){const i=Gs(e),l=i!==e&&!pt(e),a=i[t];if(a!==ec[t]){const d=a.apply(e,r);return l?Ue(d):d}let u=n;i!==e&&(l?u=function(d,h){return n.call(this,Ue(d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const c=a.call(i,u,s);return l&&o?o(c):c}function vr(e,t,n,s){const o=Gs(e);let r=n;return o!==e&&(pt(e)?n.length>3&&(r=function(i,l,a){return n.call(this,i,l,a,e)}):r=function(i,l,a){return n.call(this,i,Ue(l),a,e)}),o[t](r,...s)}function io(e,t,n){const s=ge(e);Je(s,"iterate",ts);const o=s[t](...n);return(o===-1||o===!1)&&Yo(n[0])?(n[0]=ge(n[0]),s[t](...n)):o}function $n(e,t,n=[]){$t(),Uo();const s=ge(e)[t].apply(e,n);return Go(),jt(),s}const tc=Fo("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function nc(e){Ht(e)||(e=String(e));const t=ge(this);return Je(t,"has",e),t.hasOwnProperty(e)}class Wi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?fc:Yi:r?Ji:Ki).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=se(t);if(!o){let a;if(i&&(a=qa[n]))return a;if(n==="hasOwnProperty")return nc}const l=Reflect.get(t,n,Qe(t)?t:s);return(Ht(n)?Gi.has(n):tc(n))||(o||Je(t,"get",n),r)?l:Qe(l)?i&&Vo(n)?l:l.value:Ce(l)?o?As(l):us(l):l}}class Zi extends Wi{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const a=Xt(r);if(!pt(s)&&!Xt(s)&&(r=ge(r),s=ge(s)),!se(t)&&Qe(r)&&!Qe(s))return a||(r.value=s),!0}const i=se(t)&&Vo(n)?Number(n)<t.length:we(t,n),l=Reflect.set(t,n,s,Qe(t)?t:o);return t===ge(o)&&(i?Yt(s,r)&&Lt(t,"set",n,s):Lt(t,"add",n,s)),l}deleteProperty(t,n){const s=we(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Lt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Ht(n)||!Gi.has(n))&&Je(t,"has",n),s}ownKeys(t){return Je(t,"iterate",se(t)?"length":dn),Reflect.ownKeys(t)}}class sc extends Wi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const oc=new Zi,rc=new sc,ic=new Zi(!0);const To=e=>e,bs=e=>Reflect.getPrototypeOf(e);function lc(e,t,n){return function(...s){const o=this.__v_raw,r=ge(o),i=kn(r),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,u=o[e](...s),c=n?To:t?Is:Ue;return!t&&Je(r,"iterate",a?So:dn),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:l?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function vs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ac(e,t){const n={get(o){const r=this.__v_raw,i=ge(r),l=ge(o);e||(Yt(o,l)&&Je(i,"get",o),Je(i,"get",l));const{has:a}=bs(i),u=t?To:e?Is:Ue;if(a.call(i,o))return u(r.get(o));if(a.call(i,l))return u(r.get(l));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Je(ge(o),"iterate",dn),o.size},has(o){const r=this.__v_raw,i=ge(r),l=ge(o);return e||(Yt(o,l)&&Je(i,"has",o),Je(i,"has",l)),o===l?r.has(o):r.has(o)||r.has(l)},forEach(o,r){const i=this,l=i.__v_raw,a=ge(l),u=t?To:e?Is:Ue;return!e&&Je(a,"iterate",dn),l.forEach((c,d)=>o.call(r,u(c),u(d),i))}};return $e(n,e?{add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear")}:{add(o){!t&&!pt(o)&&!Xt(o)&&(o=ge(o));const r=ge(this);return bs(r).has.call(r,o)||(r.add(o),Lt(r,"add",o,o)),this},set(o,r){!t&&!pt(r)&&!Xt(r)&&(r=ge(r));const i=ge(this),{has:l,get:a}=bs(i);let u=l.call(i,o);u||(o=ge(o),u=l.call(i,o));const c=a.call(i,o);return i.set(o,r),u?Yt(r,c)&&Lt(i,"set",o,r):Lt(i,"add",o,r),this},delete(o){const r=ge(this),{has:i,get:l}=bs(r);let a=i.call(r,o);a||(o=ge(o),a=i.call(r,o)),l&&l.call(r,o);const u=r.delete(o);return a&&Lt(r,"delete",o,void 0),u},clear(){const o=ge(this),r=o.size!==0,i=o.clear();return r&&Lt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=lc(o,e,t)}),n}function Ko(e,t){const n=ac(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(we(n,o)&&o in s?n:s,o,r)}const cc={get:Ko(!1,!1)},uc={get:Ko(!1,!0)},dc={get:Ko(!0,!1)};const Ki=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,fc=new WeakMap;function pc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(e){return e.__v_skip||!Object.isExtensible(e)?0:pc(ja(e))}function us(e){return Xt(e)?e:Jo(e,!1,oc,cc,Ki)}function Xi(e){return Jo(e,!1,ic,uc,Ji)}function As(e){return Jo(e,!0,rc,dc,Yi)}function Jo(e,t,n,s,o){if(!Ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=hc(e);if(r===0)return e;const i=o.get(e);if(i)return i;const l=new Proxy(e,r===2?s:n);return o.set(e,l),l}function Sn(e){return Xt(e)?Sn(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function pt(e){return!!(e&&e.__v_isShallow)}function Yo(e){return e?!!e.__v_raw:!1}function ge(e){const t=e&&e.__v_raw;return t?ge(t):e}function mc(e){return!we(e,"__v_skip")&&Object.isExtensible(e)&&zi(e,"__v_skip",!0),e}const Ue=e=>Ce(e)?us(e):e,Is=e=>Ce(e)?As(e):e;function Qe(e){return e?e.__v_isRef===!0:!1}function pe(e){return Qi(e,!1)}function gc(e){return Qi(e,!0)}function Qi(e,t){return Qe(e)?e:new bc(e,t)}class bc{constructor(t,n){this.dep=new Zo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ge(t),this._value=n?t:Ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||pt(t)||Xt(t);t=s?t:ge(t),Yt(t,n)&&(this._rawValue=t,this._value=s?t:Ue(t),this.dep.trigger())}}function ue(e){return Qe(e)?e.value:e}const vc={get:(e,t,n)=>t==="__v_raw"?e:ue(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Qe(o)&&!Qe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function qi(e){return Sn(e)?e:new Proxy(e,vc)}class yc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return ji(this,!0),!0}get value(){const t=this.dep.track();return Bi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wc(e,t,n=!1){let s,o;return oe(e)?s=e:(s=e.get,o=e.set),new yc(s,o,n)}const ys={},Rs=new WeakMap;let an;function xc(e,t=!1,n=an){if(n){let s=Rs.get(n);s||Rs.set(n,s=[]),s.push(e)}}function _c(e,t,n=ke){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:l,call:a}=n,u=N=>o?N:pt(N)||o===!1||o===0?Nt(N,1):Nt(N);let c,d,h,m,w=!1,k=!1;if(Qe(e)?(d=()=>e.value,w=pt(e)):Sn(e)?(d=()=>u(e),w=!0):se(e)?(k=!0,w=e.some(N=>Sn(N)||pt(N)),d=()=>e.map(N=>{if(Qe(N))return N.value;if(Sn(N))return u(N);if(oe(N))return a?a(N,2):N()})):oe(e)?t?d=a?()=>a(e,2):e:d=()=>{if(h){$t();try{h()}finally{jt()}}const N=an;an=c;try{return a?a(e,3,[m]):e(m)}finally{an=N}}:d=Et,t&&o){const N=d,S=o===!0?1/0:o;d=()=>Nt(N(),S)}const M=Ya(),R=()=>{c.stop(),M&&M.active&&Bo(M.effects,c)};if(r&&t){const N=t;t=(...S)=>{N(...S),R()}}let T=k?new Array(e.length).fill(ys):ys;const O=N=>{if(!(!(c.flags&1)||!c.dirty&&!N))if(t){const S=c.run();if(o||w||(k?S.some((v,A)=>Yt(v,T[A])):Yt(S,T))){h&&h();const v=an;an=c;try{const A=[S,T===ys?void 0:k&&T[0]===ys?[]:T,m];T=S,a?a(t,3,A):t(...A)}finally{an=v}}}else c.run()};return l&&l(O),c=new Di(d),c.scheduler=i?()=>i(O,!1):O,m=N=>xc(N,!1,c),h=c.onStop=()=>{const N=Rs.get(c);if(N){if(a)a(N,4);else for(const S of N)S();Rs.delete(c)}},t?s?O(!0):T=c.run():i?i(O.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function Nt(e,t=1/0,n){if(t<=0||!Ce(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Qe(e))Nt(e.value,t,n);else if(se(e))for(let s=0;s<e.length;s++)Nt(e[s],t,n);else if(Mi(e)||kn(e))e.forEach(s=>{Nt(s,t,n)});else if(Ri(e)){for(const s in e)Nt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Nt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e,t,n,s){try{return s?e(...s):e()}catch(o){Ws(o,t,n)}}function wt(e,t,n,s){if(oe(e)){const o=ds(e,t,n,s);return o&&Ai(o)&&o.catch(r=>{Ws(r,t,n)}),o}if(se(e)){const o=[];for(let r=0;r<e.length;r++)o.push(wt(e[r],t,n,s));return o}}function Ws(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ke;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,u)===!1)return}l=l.parent}if(r){$t(),ds(r,null,10,[e,a,u]),jt();return}}kc(e,n,o,s,i)}function kc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const nt=[];let St=-1;const Tn=[];let Zt=null,vn=0;const el=Promise.resolve();let zs=null;function Xo(e){const t=zs||el;return e?t.then(this?e.bind(this):e):t}function Sc(e){let t=St+1,n=nt.length;for(;t<n;){const s=t+n>>>1,o=nt[s],r=ns(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function Qo(e){if(!(e.flags&1)){const t=ns(e),n=nt[nt.length-1];!n||!(e.flags&2)&&t>=ns(n)?nt.push(e):nt.splice(Sc(t),0,e),e.flags|=1,tl()}}function tl(){zs||(zs=el.then(sl))}function Tc(e){se(e)?Tn.push(...e):Zt&&e.id===-1?Zt.splice(vn+1,0,e):e.flags&1||(Tn.push(e),e.flags|=1),tl()}function yr(e,t,n=St+1){for(;n<nt.length;n++){const s=nt[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;nt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function nl(e){if(Tn.length){const t=[...new Set(Tn)].sort((n,s)=>ns(n)-ns(s));if(Tn.length=0,Zt){Zt.push(...t);return}for(Zt=t,vn=0;vn<Zt.length;vn++){const n=Zt[vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zt=null,vn=0}}const ns=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sl(e){try{for(St=0;St<nt.length;St++){const t=nt[St];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ds(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;St<nt.length;St++){const t=nt[St];t&&(t.flags&=-2)}St=-1,nt.length=0,nl(),zs=null,(nt.length||Tn.length)&&sl()}}let Ge=null,ol=null;function Os(e){const t=Ge;return Ge=e,ol=e&&e.type.__scopeId||null,t}function Re(e,t=Ge,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Ds(-1);const r=Os(t);let i;try{i=e(...o)}finally{Os(r),s._d&&Ds(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function zm(e,t){if(Ge===null)return e;const n=Xs(Ge),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,l,a=ke]=t[o];r&&(oe(r)&&(r={mounted:r,updated:r}),r.deep&&Nt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:l,modifiers:a}))}return e}function nn(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let a=l.dir[s];a&&($t(),wt(a,n,8,[e.el,l,e,t]),jt())}}const rl=Symbol("_vte"),il=e=>e.__isTeleport,Zn=e=>e&&(e.disabled||e.disabled===""),wr=e=>e&&(e.defer||e.defer===""),xr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,_r=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Eo=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},ll={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,r,i,l,a,u){const{mc:c,pc:d,pbc:h,o:{insert:m,querySelector:w,createText:k,createComment:M}}=u,R=Zn(t.props);let{shapeFlag:T,children:O,dynamicChildren:N}=t;if(e==null){const S=t.el=k(""),v=t.anchor=k("");m(S,n,s),m(v,n,s);const A=(H,q)=>{T&16&&(o&&o.isCE&&(o.ce._teleportTarget=H),c(O,H,q,o,r,i,l,a))},P=()=>{const H=t.target=Eo(t.props,w),q=al(H,t,k,m);H&&(i!=="svg"&&xr(H)?i="svg":i!=="mathml"&&_r(H)&&(i="mathml"),R||(A(H,q),Es(t,!1)))};R&&(A(n,v),Es(t,!0)),wr(t.props)?(t.el.__isMounted=!1,tt(()=>{P(),delete t.el.__isMounted},r)):P()}else{if(wr(t.props)&&e.el.__isMounted===!1){tt(()=>{ll.process(e,t,n,s,o,r,i,l,a,u)},r);return}t.el=e.el,t.targetStart=e.targetStart;const S=t.anchor=e.anchor,v=t.target=e.target,A=t.targetAnchor=e.targetAnchor,P=Zn(e.props),H=P?n:v,q=P?S:A;if(i==="svg"||xr(v)?i="svg":(i==="mathml"||_r(v))&&(i="mathml"),N?(h(e.dynamicChildren,N,H,o,r,i,l),tr(e,t,!0)):a||d(e,t,H,q,o,r,i,l,!1),R)P?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ws(t,n,S,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const te=t.target=Eo(t.props,w);te&&ws(t,te,null,u,0)}else P&&ws(t,v,A,u,1);Es(t,R)}},remove(e,t,n,{um:s,o:{remove:o}},r){const{shapeFlag:i,children:l,anchor:a,targetStart:u,targetAnchor:c,target:d,props:h}=e;if(d&&(o(u),o(c)),r&&o(a),i&16){const m=r||!Zn(h);for(let w=0;w<l.length;w++){const k=l[w];s(k,t,n,m,!!k.dynamicChildren)}}},move:ws,hydrate:Ec};function ws(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:u,props:c}=e,d=r===2;if(d&&s(i,t,n),(!d||Zn(c))&&a&16)for(let h=0;h<u.length;h++)o(u[h],t,n,2);d&&s(l,t,n)}function Ec(e,t,n,s,o,r,{o:{nextSibling:i,parentNode:l,querySelector:a,insert:u,createText:c}},d){function h(k,M,R,T){M.anchor=d(i(k),M,l(k),n,s,o,r),M.targetStart=R,M.targetAnchor=T}const m=t.target=Eo(t.props,a),w=Zn(t.props);if(m){const k=m._lpa||m.firstChild;if(t.shapeFlag&16)if(w)h(e,t,k,k&&i(k));else{t.anchor=i(e);let M=k;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")t.targetStart=M;else if(M.data==="teleport anchor"){t.targetAnchor=M,m._lpa=t.targetAnchor&&i(t.targetAnchor);break}}M=i(M)}t.targetAnchor||al(m,t,c,u),d(k&&i(k),t,m,n,s,o,r)}Es(t,w)}else w&&t.shapeFlag&16&&h(e,t,e,i(e));return t.anchor&&i(t.anchor)}const Pc=ll;function Es(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function al(e,t,n,s){const o=t.targetStart=n(""),r=t.targetAnchor=n("");return o[rl]=r,e&&(s(o,e),s(r,e)),r}const zt=Symbol("_leaveCb"),xs=Symbol("_enterCb");function Cc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pt(()=>{e.isMounted=!0}),_t(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],cl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},ul=e=>{const t=e.subTree;return t.component?ul(t.component):t},Mc={name:"BaseTransition",props:cl,setup(e,{slots:t}){const n=or(),s=Cc();return()=>{const o=t.default&&pl(t.default(),!0);if(!o||!o.length)return;const r=dl(o),i=ge(e),{mode:l}=i;if(s.isLeaving)return lo(r);const a=kr(r);if(!a)return lo(r);let u=Po(a,i,s,n,d=>u=d);a.type!==Ye&&ss(a,u);let c=n.subTree&&kr(n.subTree);if(c&&c.type!==Ye&&!cn(c,a)&&ul(n).type!==Ye){let d=Po(c,i,s,n);if(ss(c,d),l==="out-in"&&a.type!==Ye)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},lo(r);l==="in-out"&&a.type!==Ye?d.delayLeave=(h,m,w)=>{const k=fl(s,c);k[String(c.key)]=c,h[zt]=()=>{m(),h[zt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function dl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const Ac=Mc;function fl(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Po(e,t,n,s,o){const{appear:r,mode:i,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:m,onAfterLeave:w,onLeaveCancelled:k,onBeforeAppear:M,onAppear:R,onAfterAppear:T,onAppearCancelled:O}=t,N=String(e.key),S=fl(n,e),v=(H,q)=>{H&&wt(H,s,9,q)},A=(H,q)=>{const te=q[1];v(H,q),se(H)?H.every(U=>U.length<=1)&&te():H.length<=1&&te()},P={mode:i,persisted:l,beforeEnter(H){let q=a;if(!n.isMounted)if(r)q=M||a;else return;H[zt]&&H[zt](!0);const te=S[N];te&&cn(e,te)&&te.el[zt]&&te.el[zt](),v(q,[H])},enter(H){let q=u,te=c,U=d;if(!n.isMounted)if(r)q=R||u,te=T||c,U=O||d;else return;let ie=!1;const xe=H[xs]=Se=>{ie||(ie=!0,Se?v(U,[H]):v(te,[H]),P.delayedLeave&&P.delayedLeave(),H[xs]=void 0)};q?A(q,[H,xe]):xe()},leave(H,q){const te=String(e.key);if(H[xs]&&H[xs](!0),n.isUnmounting)return q();v(h,[H]);let U=!1;const ie=H[zt]=xe=>{U||(U=!0,q(),xe?v(k,[H]):v(w,[H]),H[zt]=void 0,S[te]===e&&delete S[te])};S[te]=e,m?A(m,[H,ie]):ie()},clone(H){const q=Po(H,t,n,s,o);return o&&o(q),q}};return P}function lo(e){if(Zs(e))return e=Qt(e),e.children=null,e}function kr(e){if(!Zs(e))return il(e.type)&&e.children?dl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&oe(n.default))return n.default()}}function ss(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ss(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pl(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Ae?(i.patchFlag&128&&o++,s=s.concat(pl(i.children,t,l))):(t||i.type!==Ye)&&s.push(l!=null?Qt(i,{key:l}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Bt(e,t){return oe(e)?$e({name:e.name},t,{setup:e}):e}function hl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ls=new WeakMap;function Kn(e,t,n,s,o=!1){if(se(e)){e.forEach((w,k)=>Kn(w,t&&(se(t)?t[k]:t),n,s,o));return}if(En(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Kn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Xs(s.component):s.el,i=o?null:r,{i:l,r:a}=e,u=t&&t.r,c=l.refs===ke?l.refs={}:l.refs,d=l.setupState,h=ge(d),m=d===ke?Ci:w=>we(h,w);if(u!=null&&u!==a){if(Sr(t),Ie(u))c[u]=null,m(u)&&(d[u]=null);else if(Qe(u)){u.value=null;const w=t;w.k&&(c[w.k]=null)}}if(oe(a))ds(a,l,12,[i,c]);else{const w=Ie(a),k=Qe(a);if(w||k){const M=()=>{if(e.f){const R=w?m(a)?d[a]:c[a]:a.value;if(o)se(R)&&Bo(R,r);else if(se(R))R.includes(r)||R.push(r);else if(w)c[a]=[r],m(a)&&(d[a]=c[a]);else{const T=[r];a.value=T,e.k&&(c[e.k]=T)}}else w?(c[a]=i,m(a)&&(d[a]=i)):k&&(a.value=i,e.k&&(c[e.k]=i))};if(i){const R=()=>{M(),Ls.delete(e)};R.id=-1,Ls.set(e,R),tt(R,n)}else Sr(e),M()}}}function Sr(e){const t=Ls.get(e);t&&(t.flags|=8,Ls.delete(e))}Us().requestIdleCallback;Us().cancelIdleCallback;const En=e=>!!e.type.__asyncLoader,Zs=e=>e.type.__isKeepAlive;function Ic(e,t){ml(e,"a",t)}function Rc(e,t){ml(e,"da",t)}function ml(e,t,n=Xe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ks(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Zs(o.parent.vnode)&&zc(s,t,n,o),o=o.parent}}function zc(e,t,n,s){const o=Ks(t,e,s,!0);gl(()=>{Bo(s[t],o)},n)}function Ks(e,t,n=Xe,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{$t();const l=fs(n),a=wt(t,n,e,i);return l(),jt(),a});return s?o.unshift(r):o.push(r),r}}const Vt=e=>(t,n=Xe)=>{(!is||e==="sp")&&Ks(e,(...s)=>t(...s),n)},Oc=Vt("bm"),Pt=Vt("m"),Lc=Vt("bu"),Nc=Vt("u"),_t=Vt("bum"),gl=Vt("um"),Dc=Vt("sp"),$c=Vt("rtg"),jc=Vt("rtc");function Fc(e,t=Xe){Ks("ec",e,t)}const bl="components";function Hc(e,t){return wl(bl,e,!0,t)||e}const vl=Symbol.for("v-ndc");function yl(e){return Ie(e)?wl(bl,e,!1)||e:e||vl}function wl(e,t,n=!0,s=!1){const o=Ge||Xe;if(o){const r=o.type;{const l=Cu(r,!1);if(l&&(l===t||l===ht(t)||l===Vs(ht(t))))return r}const i=Tr(o[e]||r[e],t)||Tr(o.appContext[e],t);return!i&&s?r:i}}function Tr(e,t){return e&&(e[t]||e[ht(t)]||e[Vs(ht(t))])}function Ot(e,t,n,s){let o;const r=n,i=se(e);if(i||Ie(e)){const l=i&&Sn(e);let a=!1,u=!1;l&&(a=!pt(e),u=Xt(e),e=Gs(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(a?u?Is(Ue(e[c])):Ue(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,r)}else if(Ce(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,r));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];o[a]=t(e[c],c,a,r)}}else o=[];return o}function Bc(e,t,n={},s,o){if(Ge.ce||Ge.parent&&En(Ge.parent)&&Ge.parent.ce)return K(),Ke(Ae,null,[be("slot",n,s)],64);let r=e[t];r&&r._c&&(r._d=!1),K();const i=r&&xl(r(n)),l=n.key||i&&i.key,a=Ke(Ae,{key:(l&&!Ht(l)?l:`_${t}`)+(!i&&s?"_fb":"")},i||[],i&&e._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function xl(e){return e.some(t=>rs(t)?!(t.type===Ye||t.type===Ae&&!xl(t.children)):!0)?e:null}const Co=e=>e?Fl(e)?Xs(e):Co(e.parent):null,Jn=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Co(e.parent),$root:e=>Co(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sl(e),$forceUpdate:e=>e.f||(e.f=()=>{Qo(e.update)}),$nextTick:e=>e.n||(e.n=Xo.bind(e.proxy)),$watch:e=>uu.bind(e)}),ao=(e,t)=>e!==ke&&!e.__isScriptSetup&&we(e,t),Vc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(ao(s,t))return i[t]=1,s[t];if(o!==ke&&we(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&we(u,t))return i[t]=3,r[t];if(n!==ke&&we(n,t))return i[t]=4,n[t];Mo&&(i[t]=0)}}const c=Jn[t];let d,h;if(c)return t==="$attrs"&&Je(e.attrs,"get",""),c(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ke&&we(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,we(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return ao(o,t)?(o[t]=n,!0):s!==ke&&we(s,t)?(s[t]=n,!0):we(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r,type:i}},l){let a,u;return!!(n[l]||e!==ke&&l[0]!=="$"&&we(e,l)||ao(t,l)||(a=r[0])&&we(a,l)||we(s,l)||we(Jn,l)||we(o.config.globalProperties,l)||(u=i.__cssModules)&&u[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:we(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function _l(){return Uc().attrs}function Uc(e){const t=or();return t.setupContext||(t.setupContext=Bl(t))}function Er(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Mo=!0;function Gc(e){const t=Sl(e),n=e.proxy,s=e.ctx;Mo=!1,t.beforeCreate&&Pr(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:a,inject:u,created:c,beforeMount:d,mounted:h,beforeUpdate:m,updated:w,activated:k,deactivated:M,beforeDestroy:R,beforeUnmount:T,destroyed:O,unmounted:N,render:S,renderTracked:v,renderTriggered:A,errorCaptured:P,serverPrefetch:H,expose:q,inheritAttrs:te,components:U,directives:ie,filters:xe}=t;if(u&&Wc(u,s,null),i)for(const re in i){const L=i[re];oe(L)&&(s[re]=L.bind(n))}if(o){const re=o.call(n,n);Ce(re)&&(e.data=us(re))}if(Mo=!0,r)for(const re in r){const L=r[re],ze=oe(L)?L.bind(n,n):oe(L.get)?L.get.bind(n,n):Et,Pe=!oe(L)&&oe(L.set)?L.set.bind(n):Et,Ne=V({get:ze,set:Pe});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:he=>Ne.value=he})}if(l)for(const re in l)kl(l[re],s,n,re);if(a){const re=oe(a)?a.call(n):a;Reflect.ownKeys(re).forEach(L=>{Ps(L,re[L])})}c&&Pr(c,e,"c");function ce(re,L){se(L)?L.forEach(ze=>re(ze.bind(n))):L&&re(L.bind(n))}if(ce(Oc,d),ce(Pt,h),ce(Lc,m),ce(Nc,w),ce(Ic,k),ce(Rc,M),ce(Fc,P),ce(jc,v),ce($c,A),ce(_t,T),ce(gl,N),ce(Dc,H),se(q))if(q.length){const re=e.exposed||(e.exposed={});q.forEach(L=>{Object.defineProperty(re,L,{get:()=>n[L],set:ze=>n[L]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===Et&&(e.render=S),te!=null&&(e.inheritAttrs=te),U&&(e.components=U),ie&&(e.directives=ie),H&&hl(e)}function Wc(e,t,n=Et){se(e)&&(e=Ao(e));for(const s in e){const o=e[s];let r;Ce(o)?"default"in o?r=yt(o.from||s,o.default,!0):r=yt(o.from||s):r=yt(o),Qe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Pr(e,t,n){wt(se(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function kl(e,t,n,s){let o=s.includes(".")?Ll(n,s):()=>n[s];if(Ie(e)){const r=t[e];oe(r)&&st(o,r)}else if(oe(e))st(o,e.bind(n));else if(Ce(e))if(se(e))e.forEach(r=>kl(r,t,n,s));else{const r=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(r)&&st(o,r,e)}}function Sl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let a;return l?a=l:!o.length&&!n&&!s?a=t:(a={},o.length&&o.forEach(u=>Ns(a,u,i,!0)),Ns(a,t,i)),Ce(t)&&r.set(t,a),a}function Ns(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Ns(e,r,n,!0),o&&o.forEach(i=>Ns(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Zc[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Zc={data:Cr,props:Mr,emits:Mr,methods:Bn,computed:Bn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Bn,directives:Bn,watch:Jc,provide:Cr,inject:Kc};function Cr(e,t){return t?e?function(){return $e(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Kc(e,t){return Bn(Ao(e),Ao(t))}function Ao(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function Bn(e,t){return e?$e(Object.create(null),e,t):t}function Mr(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:$e(Object.create(null),Er(e),Er(t??{})):t}function Jc(e,t){if(!e)return t;if(!t)return e;const n=$e(Object.create(null),e);for(const s in t)n[s]=et(e[s],t[s]);return n}function Tl(){return{app:null,config:{isNativeTag:Ci,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yc=0;function Xc(e,t){return function(s,o=null){oe(s)||(s=$e({},s)),o!=null&&!Ce(o)&&(o=null);const r=Tl(),i=new WeakSet,l=[];let a=!1;const u=r.app={_uid:Yc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Au,get config(){return r.config},set config(c){},use(c,...d){return i.has(c)||(c&&oe(c.install)?(i.add(c),c.install(u,...d)):oe(c)&&(i.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,h){if(!a){const m=u._ceVNode||be(s,o);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),a=!0,u._container=c,c.__vue_app__=u,Xs(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(wt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Pn;Pn=u;try{return c()}finally{Pn=d}}};return u}}let Pn=null;function Ps(e,t){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[e]=t}}function yt(e,t,n=!1){const s=or();if(s||Pn){let o=Pn?Pn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&oe(t)?t.call(s&&s.proxy):t}}const El={},Pl=()=>Object.create(El),Cl=e=>Object.getPrototypeOf(e)===El;function Qc(e,t,n,s=!1){const o={},r=Pl();e.propsDefaults=Object.create(null),Ml(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Xi(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function qc(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=ge(o),[a]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(Js(e.emitsOptions,h))continue;const m=t[h];if(a)if(we(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const w=ht(h);o[w]=Io(a,l,w,m,e,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{Ml(e,t,o,r)&&(u=!0);let c;for(const d in l)(!t||!we(t,d)&&((c=en(d))===d||!we(t,c)))&&(a?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Io(a,l,d,void 0,e,!0)):delete o[d]);if(r!==l)for(const d in r)(!t||!we(t,d))&&(delete r[d],u=!0)}u&&Lt(e.attrs,"set","")}function Ml(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(Un(a))continue;const u=t[a];let c;o&&we(o,c=ht(a))?!r||!r.includes(c)?n[c]=u:(l||(l={}))[c]=u:Js(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,i=!0)}if(r){const a=ge(n),u=l||ke;for(let c=0;c<r.length;c++){const d=r[c];n[d]=Io(o,a,d,u[d],e,!we(u,d))}}return i}function Io(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=we(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&oe(a)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const c=fs(o);s=u[n]=a.call(null,t),c()}}else s=a;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===en(n))&&(s=!0))}return s}const eu=new WeakMap;function Al(e,t,n=!1){const s=n?eu:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let a=!1;if(!oe(e)){const c=d=>{a=!0;const[h,m]=Al(d,t,!0);$e(i,h),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!a)return Ce(e)&&s.set(e,_n),_n;if(se(r))for(let c=0;c<r.length;c++){const d=ht(r[c]);Ar(d)&&(i[d]=ke)}else if(r)for(const c in r){const d=ht(c);if(Ar(d)){const h=r[c],m=i[d]=se(h)||oe(h)?{type:h}:$e({},h),w=m.type;let k=!1,M=!0;if(se(w))for(let R=0;R<w.length;++R){const T=w[R],O=oe(T)&&T.name;if(O==="Boolean"){k=!0;break}else O==="String"&&(M=!1)}else k=oe(w)&&w.name==="Boolean";m[0]=k,m[1]=M,(k||we(m,"default"))&&l.push(d)}}const u=[i,l];return Ce(e)&&s.set(e,u),u}function Ar(e){return e[0]!=="$"&&!Un(e)}const qo=e=>e==="_"||e==="_ctx"||e==="$stable",er=e=>se(e)?e.map(Tt):[Tt(e)],tu=(e,t,n)=>{if(t._n)return t;const s=Re((...o)=>er(t(...o)),n);return s._c=!1,s},Il=(e,t,n)=>{const s=e._ctx;for(const o in e){if(qo(o))continue;const r=e[o];if(oe(r))t[o]=tu(o,r,s);else if(r!=null){const i=er(r);t[o]=()=>i}}},Rl=(e,t)=>{const n=er(t);e.slots.default=()=>n},zl=(e,t,n)=>{for(const s in t)(n||!qo(s))&&(e[s]=t[s])},nu=(e,t,n)=>{const s=e.slots=Pl();if(e.vnode.shapeFlag&32){const o=t._;o?(zl(s,t,n),n&&zi(s,"_",o,!0)):Il(t,s)}else t&&Rl(e,t)},su=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ke;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:zl(o,t,n):(r=!t.$stable,Il(t,o)),i=t}else t&&(Rl(e,t),i={default:1});if(r)for(const l in o)!qo(l)&&i[l]==null&&delete o[l]},tt=vu;function ou(e){return ru(e)}function ru(e,t){const n=Us();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:a,setText:u,setElementText:c,parentNode:d,nextSibling:h,setScopeId:m=Et,insertStaticContent:w}=e,k=(f,p,g,x=null,E=null,_=null,B=void 0,j=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!cn(f,p)&&(x=b(f),he(f,E,_,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:C,ref:Q,shapeFlag:G}=p;switch(C){case Ys:M(f,p,g,x);break;case Ye:R(f,p,g,x);break;case uo:f==null&&T(p,g,x,B);break;case Ae:U(f,p,g,x,E,_,B,j,D);break;default:G&1?S(f,p,g,x,E,_,B,j,D):G&6?ie(f,p,g,x,E,_,B,j,D):(G&64||G&128)&&C.process(f,p,g,x,E,_,B,j,D,Z)}Q!=null&&E?Kn(Q,f&&f.ref,_,p||f,!p):Q==null&&f&&f.ref!=null&&Kn(f.ref,null,_,f,!0)},M=(f,p,g,x)=>{if(f==null)s(p.el=l(p.children),g,x);else{const E=p.el=f.el;p.children!==f.children&&u(E,p.children)}},R=(f,p,g,x)=>{f==null?s(p.el=a(p.children||""),g,x):p.el=f.el},T=(f,p,g,x)=>{[f.el,f.anchor]=w(f.children,p,g,x,f.el,f.anchor)},O=({el:f,anchor:p},g,x)=>{let E;for(;f&&f!==p;)E=h(f),s(f,g,x),f=E;s(p,g,x)},N=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),o(f),f=g;o(p)},S=(f,p,g,x,E,_,B,j,D)=>{p.type==="svg"?B="svg":p.type==="math"&&(B="mathml"),f==null?v(p,g,x,E,_,B,j,D):H(f,p,E,_,B,j,D)},v=(f,p,g,x,E,_,B,j)=>{let D,C;const{props:Q,shapeFlag:G,transition:X,dirs:ne}=f;if(D=f.el=i(f.type,_,Q&&Q.is,Q),G&8?c(D,f.children):G&16&&P(f.children,D,null,x,E,co(f,_),B,j),ne&&nn(f,null,x,"created"),A(D,f,f.scopeId,B,x),Q){for(const _e in Q)_e!=="value"&&!Un(_e)&&r(D,_e,null,Q[_e],_,x);"value"in Q&&r(D,"value",null,Q.value,_),(C=Q.onVnodeBeforeMount)&&kt(C,x,f)}ne&&nn(f,null,x,"beforeMount");const le=iu(E,X);le&&X.beforeEnter(D),s(D,p,g),((C=Q&&Q.onVnodeMounted)||le||ne)&&tt(()=>{C&&kt(C,x,f),le&&X.enter(D),ne&&nn(f,null,x,"mounted")},E)},A=(f,p,g,x,E)=>{if(g&&m(f,g),x)for(let _=0;_<x.length;_++)m(f,x[_]);if(E){let _=E.subTree;if(p===_||Dl(_.type)&&(_.ssContent===p||_.ssFallback===p)){const B=E.vnode;A(f,B,B.scopeId,B.slotScopeIds,E.parent)}}},P=(f,p,g,x,E,_,B,j,D=0)=>{for(let C=D;C<f.length;C++){const Q=f[C]=j?Kt(f[C]):Tt(f[C]);k(null,Q,p,g,x,E,_,B,j)}},H=(f,p,g,x,E,_,B)=>{const j=p.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:Q}=p;D|=f.patchFlag&16;const G=f.props||ke,X=p.props||ke;let ne;if(g&&sn(g,!1),(ne=X.onVnodeBeforeUpdate)&&kt(ne,g,p,f),Q&&nn(p,f,g,"beforeUpdate"),g&&sn(g,!0),(G.innerHTML&&X.innerHTML==null||G.textContent&&X.textContent==null)&&c(j,""),C?q(f.dynamicChildren,C,j,g,x,co(p,E),_):B||L(f,p,j,null,g,x,co(p,E),_,!1),D>0){if(D&16)te(j,G,X,g,E);else if(D&2&&G.class!==X.class&&r(j,"class",null,X.class,E),D&4&&r(j,"style",G.style,X.style,E),D&8){const le=p.dynamicProps;for(let _e=0;_e<le.length;_e++){const fe=le[_e],Fe=G[fe],He=X[fe];(He!==Fe||fe==="value")&&r(j,fe,Fe,He,E,g)}}D&1&&f.children!==p.children&&c(j,p.children)}else!B&&C==null&&te(j,G,X,g,E);((ne=X.onVnodeUpdated)||Q)&&tt(()=>{ne&&kt(ne,g,p,f),Q&&nn(p,f,g,"updated")},x)},q=(f,p,g,x,E,_,B)=>{for(let j=0;j<p.length;j++){const D=f[j],C=p[j],Q=D.el&&(D.type===Ae||!cn(D,C)||D.shapeFlag&198)?d(D.el):g;k(D,C,Q,null,x,E,_,B,!0)}},te=(f,p,g,x,E)=>{if(p!==g){if(p!==ke)for(const _ in p)!Un(_)&&!(_ in g)&&r(f,_,p[_],null,E,x);for(const _ in g){if(Un(_))continue;const B=g[_],j=p[_];B!==j&&_!=="value"&&r(f,_,j,B,E,x)}"value"in g&&r(f,"value",p.value,g.value,E)}},U=(f,p,g,x,E,_,B,j,D)=>{const C=p.el=f?f.el:l(""),Q=p.anchor=f?f.anchor:l("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:ne}=p;ne&&(j=j?j.concat(ne):ne),f==null?(s(C,g,x),s(Q,g,x),P(p.children||[],g,Q,E,_,B,j,D)):G>0&&G&64&&X&&f.dynamicChildren?(q(f.dynamicChildren,X,g,E,_,B,j),(p.key!=null||E&&p===E.subTree)&&tr(f,p,!0)):L(f,p,g,Q,E,_,B,j,D)},ie=(f,p,g,x,E,_,B,j,D)=>{p.slotScopeIds=j,f==null?p.shapeFlag&512?E.ctx.activate(p,g,x,B,D):xe(p,g,x,E,_,B,D):Se(f,p,D)},xe=(f,p,g,x,E,_,B)=>{const j=f.component=Su(f,x,E);if(Zs(f)&&(j.ctx.renderer=Z),Tu(j,!1,B),j.asyncDep){if(E&&E.registerDep(j,ce,B),!f.el){const D=j.subTree=be(Ye);R(null,D,p,g),f.placeholder=D.el}}else ce(j,f,p,g,E,_,B)},Se=(f,p,g)=>{const x=p.component=f.component;if(gu(f,p,g))if(x.asyncDep&&!x.asyncResolved){re(x,p,g);return}else x.next=p,x.update();else p.el=f.el,x.vnode=p},ce=(f,p,g,x,E,_,B)=>{const j=()=>{if(f.isMounted){let{next:G,bu:X,u:ne,parent:le,vnode:_e}=f;{const ut=Ol(f);if(ut){G&&(G.el=_e.el,re(f,G,B)),ut.asyncDep.then(()=>{f.isUnmounted||j()});return}}let fe=G,Fe;sn(f,!1),G?(G.el=_e.el,re(f,G,B)):G=_e,X&&Ts(X),(Fe=G.props&&G.props.onVnodeBeforeUpdate)&&kt(Fe,le,G,_e),sn(f,!0);const He=Rr(f),ct=f.subTree;f.subTree=He,k(ct,He,d(ct.el),b(ct),f,E,_),G.el=He.el,fe===null&&bu(f,He.el),ne&&tt(ne,E),(Fe=G.props&&G.props.onVnodeUpdated)&&tt(()=>kt(Fe,le,G,_e),E)}else{let G;const{el:X,props:ne}=p,{bm:le,m:_e,parent:fe,root:Fe,type:He}=f,ct=En(p);sn(f,!1),le&&Ts(le),!ct&&(G=ne&&ne.onVnodeBeforeMount)&&kt(G,fe,p),sn(f,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(He);const ut=f.subTree=Rr(f);k(null,ut,g,x,f,E,_),p.el=ut.el}if(_e&&tt(_e,E),!ct&&(G=ne&&ne.onVnodeMounted)){const ut=p;tt(()=>kt(G,fe,ut),E)}(p.shapeFlag&256||fe&&En(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&tt(f.a,E),f.isMounted=!0,p=g=x=null}};f.scope.on();const D=f.effect=new Di(j);f.scope.off();const C=f.update=D.run.bind(D),Q=f.job=D.runIfDirty.bind(D);Q.i=f,Q.id=f.uid,D.scheduler=()=>Qo(Q),sn(f,!0),C()},re=(f,p,g)=>{p.component=f;const x=f.vnode.props;f.vnode=p,f.next=null,qc(f,p.props,x,g),su(f,p.children,g),$t(),yr(f),jt()},L=(f,p,g,x,E,_,B,j,D=!1)=>{const C=f&&f.children,Q=f?f.shapeFlag:0,G=p.children,{patchFlag:X,shapeFlag:ne}=p;if(X>0){if(X&128){Pe(C,G,g,x,E,_,B,j,D);return}else if(X&256){ze(C,G,g,x,E,_,B,j,D);return}}ne&8?(Q&16&&je(C,E,_),G!==C&&c(g,G)):Q&16?ne&16?Pe(C,G,g,x,E,_,B,j,D):je(C,E,_,!0):(Q&8&&c(g,""),ne&16&&P(G,g,x,E,_,B,j,D))},ze=(f,p,g,x,E,_,B,j,D)=>{f=f||_n,p=p||_n;const C=f.length,Q=p.length,G=Math.min(C,Q);let X;for(X=0;X<G;X++){const ne=p[X]=D?Kt(p[X]):Tt(p[X]);k(f[X],ne,g,null,E,_,B,j,D)}C>Q?je(f,E,_,!0,!1,G):P(p,g,x,E,_,B,j,D,G)},Pe=(f,p,g,x,E,_,B,j,D)=>{let C=0;const Q=p.length;let G=f.length-1,X=Q-1;for(;C<=G&&C<=X;){const ne=f[C],le=p[C]=D?Kt(p[C]):Tt(p[C]);if(cn(ne,le))k(ne,le,g,null,E,_,B,j,D);else break;C++}for(;C<=G&&C<=X;){const ne=f[G],le=p[X]=D?Kt(p[X]):Tt(p[X]);if(cn(ne,le))k(ne,le,g,null,E,_,B,j,D);else break;G--,X--}if(C>G){if(C<=X){const ne=X+1,le=ne<Q?p[ne].el:x;for(;C<=X;)k(null,p[C]=D?Kt(p[C]):Tt(p[C]),g,le,E,_,B,j,D),C++}}else if(C>X)for(;C<=G;)he(f[C],E,_,!0),C++;else{const ne=C,le=C,_e=new Map;for(C=le;C<=X;C++){const We=p[C]=D?Kt(p[C]):Tt(p[C]);We.key!=null&&_e.set(We.key,C)}let fe,Fe=0;const He=X-le+1;let ct=!1,ut=0;const mt=new Array(He);for(C=0;C<He;C++)mt[C]=0;for(C=ne;C<=G;C++){const We=f[C];if(Fe>=He){he(We,E,_,!0);continue}let Be;if(We.key!=null)Be=_e.get(We.key);else for(fe=le;fe<=X;fe++)if(mt[fe-le]===0&&cn(We,p[fe])){Be=fe;break}Be===void 0?he(We,E,_,!0):(mt[Be-le]=C+1,Be>=ut?ut=Be:ct=!0,k(We,p[Be],g,null,E,_,B,j,D),Fe++)}const hn=ct?lu(mt):_n;for(fe=hn.length-1,C=He-1;C>=0;C--){const We=le+C,Be=p[We],Ln=p[We+1],hs=We+1<Q?Ln.el||Ln.placeholder:x;mt[C]===0?k(null,Be,g,hs,E,_,B,j,D):ct&&(fe<0||C!==hn[fe]?Ne(Be,g,hs,2):fe--)}}},Ne=(f,p,g,x,E=null)=>{const{el:_,type:B,transition:j,children:D,shapeFlag:C}=f;if(C&6){Ne(f.component.subTree,p,g,x);return}if(C&128){f.suspense.move(p,g,x);return}if(C&64){B.move(f,p,g,Z);return}if(B===Ae){s(_,p,g);for(let G=0;G<D.length;G++)Ne(D[G],p,g,x);s(f.anchor,p,g);return}if(B===uo){O(f,p,g);return}if(x!==2&&C&1&&j)if(x===0)j.beforeEnter(_),s(_,p,g),tt(()=>j.enter(_),E);else{const{leave:G,delayLeave:X,afterLeave:ne}=j,le=()=>{f.ctx.isUnmounted?o(_):s(_,p,g)},_e=()=>{_._isLeaving&&_[zt](!0),G(_,()=>{le(),ne&&ne()})};X?X(_,le,_e):_e()}else s(_,p,g)},he=(f,p,g,x=!1,E=!1)=>{const{type:_,props:B,ref:j,children:D,dynamicChildren:C,shapeFlag:Q,patchFlag:G,dirs:X,cacheIndex:ne}=f;if(G===-2&&(E=!1),j!=null&&($t(),Kn(j,null,g,f,!0),jt()),ne!=null&&(p.renderCache[ne]=void 0),Q&256){p.ctx.deactivate(f);return}const le=Q&1&&X,_e=!En(f);let fe;if(_e&&(fe=B&&B.onVnodeBeforeUnmount)&&kt(fe,p,f),Q&6)lt(f.component,g,x);else{if(Q&128){f.suspense.unmount(g,x);return}le&&nn(f,null,p,"beforeUnmount"),Q&64?f.type.remove(f,p,g,Z,x):C&&!C.hasOnce&&(_!==Ae||G>0&&G&64)?je(C,p,g,!1,!0):(_===Ae&&G&384||!E&&Q&16)&&je(D,p,g),x&&ve(f)}(_e&&(fe=B&&B.onVnodeUnmounted)||le)&&tt(()=>{fe&&kt(fe,p,f),le&&nn(f,null,p,"unmounted")},g)},ve=f=>{const{type:p,el:g,anchor:x,transition:E}=f;if(p===Ae){Te(g,x);return}if(p===uo){N(f);return}const _=()=>{o(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:B,delayLeave:j}=E,D=()=>B(g,_);j?j(f.el,_,D):D()}else _()},Te=(f,p)=>{let g;for(;f!==p;)g=h(f),o(f),f=g;o(p)},lt=(f,p,g)=>{const{bum:x,scope:E,job:_,subTree:B,um:j,m:D,a:C}=f;Ir(D),Ir(C),x&&Ts(x),E.stop(),_&&(_.flags|=8,he(B,f,p,g)),j&&tt(j,p),tt(()=>{f.isUnmounted=!0},p)},je=(f,p,g,x=!1,E=!1,_=0)=>{for(let B=_;B<f.length;B++)he(f[B],p,g,x,E)},b=f=>{if(f.shapeFlag&6)return b(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[rl];return g?h(g):p};let F=!1;const z=(f,p,g)=>{f==null?p._vnode&&he(p._vnode,null,null,!0):k(p._vnode||null,f,p,null,null,null,g),p._vnode=f,F||(F=!0,yr(),nl(),F=!1)},Z={p:k,um:he,m:Ne,r:ve,mt:xe,mc:P,pc:L,pbc:q,n:b,o:e};return{render:z,hydrate:void 0,createApp:Xc(z)}}function co({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function sn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function iu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function tr(e,t,n=!1){const s=e.children,o=t.children;if(se(s)&&se(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=Kt(o[r]),l.el=i.el),!n&&l.patchFlag!==-2&&tr(i,l)),l.type===Ys&&l.patchFlag!==-1&&(l.el=i.el),l.type===Ye&&!l.el&&(l.el=i.el)}}function lu(e){const t=e.slice(),n=[0];let s,o,r,i,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<u?r=l+1:i=l;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Ol(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ol(t)}function Ir(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const au=Symbol.for("v-scx"),cu=()=>yt(au);function Om(e,t){return nr(e,null,t)}function st(e,t,n){return nr(e,t,n)}function nr(e,t,n=ke){const{immediate:s,deep:o,flush:r,once:i}=n,l=$e({},n),a=t&&s||!t&&r!=="post";let u;if(is){if(r==="sync"){const m=cu();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const c=Xe;l.call=(m,w,k)=>wt(m,c,w,k);let d=!1;r==="post"?l.scheduler=m=>{tt(m,c&&c.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(m,w)=>{w?m():Qo(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=_c(e,t,l);return is&&(u?u.push(h):a&&h()),h}function uu(e,t,n){const s=this.proxy,o=Ie(e)?e.includes(".")?Ll(s,e):()=>s[e]:e.bind(s,s);let r;oe(t)?r=t:(r=t.handler,n=t);const i=fs(this),l=nr(o,r.bind(s),n);return i(),l}function Ll(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const du=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ht(t)}Modifiers`]||e[`${en(t)}Modifiers`];function fu(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ke;let o=n;const r=t.startsWith("update:"),i=r&&du(s,t.slice(7));i&&(i.trim&&(o=n.map(c=>Ie(c)?c.trim():c)),i.number&&(o=n.map(xo)));let l,a=s[l=no(t)]||s[l=no(ht(t))];!a&&r&&(a=s[l=no(en(t))]),a&&wt(a,e,6,o);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,wt(u,e,6,o)}}const pu=new WeakMap;function Nl(e,t,n=!1){const s=n?pu:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!oe(e)){const a=u=>{const c=Nl(u,t,!0);c&&(l=!0,$e(i,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(Ce(e)&&s.set(e,null),null):(se(r)?r.forEach(a=>i[a]=null):$e(i,r),Ce(e)&&s.set(e,i),i)}function Js(e,t){return!e||!Fs(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,en(t))||we(e,t))}function Rr(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:l,emit:a,render:u,renderCache:c,props:d,data:h,setupState:m,ctx:w,inheritAttrs:k}=e,M=Os(e);let R,T;try{if(n.shapeFlag&4){const N=o||s,S=N;R=Tt(u.call(S,N,c,d,m,h,w)),T=l}else{const N=t;R=Tt(N.length>1?N(d,{attrs:l,slots:i,emit:a}):N(d,null)),T=t.props?l:hu(l)}}catch(N){Yn.length=0,Ws(N,e,1),R=be(Ye)}let O=R;if(T&&k!==!1){const N=Object.keys(T),{shapeFlag:S}=O;N.length&&S&7&&(r&&N.some(Ho)&&(T=mu(T,r)),O=Qt(O,T,!1,!0))}return n.dirs&&(O=Qt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&ss(O,n.transition),R=O,Os(M),R}const hu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fs(n))&&((t||(t={}))[n]=e[n]);return t},mu=(e,t)=>{const n={};for(const s in e)(!Ho(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function gu(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:a}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?zr(s,i,u):!!i;if(a&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(i[h]!==s[h]&&!Js(u,h))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?zr(s,i,u):!0:!!i;return!1}function zr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!Js(n,r))return!0}return!1}function bu({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Dl=e=>e.__isSuspense;function vu(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Tc(e)}const Ae=Symbol.for("v-fgt"),Ys=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),Yn=[];let at=null;function K(e=!1){Yn.push(at=e?null:[])}function yu(){Yn.pop(),at=Yn[Yn.length-1]||null}let os=1;function Ds(e,t=!1){os+=e,e<0&&at&&t&&(at.hasOnce=!0)}function $l(e){return e.dynamicChildren=os>0?at||_n:null,yu(),os>0&&at&&at.push(e),e}function ee(e,t,n,s,o,r){return $l($(e,t,n,s,o,r,!0))}function Ke(e,t,n,s,o){return $l(be(e,t,n,s,o,!0))}function rs(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const jl=({key:e})=>e??null,Cs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Qe(e)||oe(e)?{i:Ge,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,s=0,o=null,r=e===Ae?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jl(t),ref:t&&Cs(t),scopeId:ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ge};return l?(sr(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=Ie(n)?8:16),os>0&&!i&&at&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&at.push(a),a}const be=wu;function wu(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===vl)&&(e=Ye),rs(e)){const l=Qt(e,t,!0);return n&&sr(l,n),os>0&&!r&&at&&(l.shapeFlag&6?at[at.indexOf(e)]=l:at.push(l)),l.patchFlag=-2,l}if(Mu(e)&&(e=e.__vccOpts),t){t=xu(t);let{class:l,style:a}=t;l&&!Ie(l)&&(t.class=Oe(l)),Ce(a)&&(Yo(a)&&!se(a)&&(a=$e({},a)),t.style=it(a))}const i=Ie(e)?1:Dl(e)?128:il(e)?64:Ce(e)?4:oe(e)?2:0;return $(e,t,n,s,o,i,r,!0)}function xu(e){return e?Yo(e)||Cl(e)?$e({},e):e:null}function Qt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:l,transition:a}=e,u=t?$s(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&jl(u),ref:t&&t.ref?n&&r?se(r)?r.concat(Cs(t)):[r,Cs(t)]:Cs(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&ss(c,a.clone(c)),c}function Vn(e=" ",t=0){return be(Ys,null,e,t)}function Le(e="",t=!1){return t?(K(),Ke(Ye,null,e)):be(Ye,null,e)}function Tt(e){return e==null||typeof e=="boolean"?be(Ye):se(e)?be(Ae,null,e.slice()):rs(e)?Kt(e):be(Ys,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function sr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),sr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Cl(t)?t._ctx=Ge:o===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),s&64?(n=16,t=[Vn(t)]):n=8);e.children=t,e.shapeFlag|=n}function $s(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Oe([t.class,s.class]));else if(o==="style")t.style=it([t.style,s.style]);else if(Fs(o)){const r=t[o],i=s[o];i&&r!==i&&!(se(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function kt(e,t,n,s=null){wt(e,t,7,[n,s])}const _u=Tl();let ku=0;function Su(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||_u,r={uid:ku++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ja(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Al(s,o),emitsOptions:Nl(s,o),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=fu.bind(null,r),e.ce&&e.ce(r),r}let Xe=null;const or=()=>Xe||Ge;let js,Ro;{const e=Us(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};js=t("__VUE_INSTANCE_SETTERS__",n=>Xe=n),Ro=t("__VUE_SSR_SETTERS__",n=>is=n)}const fs=e=>{const t=Xe;return js(e),e.scope.on(),()=>{e.scope.off(),js(t)}},Or=()=>{Xe&&Xe.scope.off(),js(null)};function Fl(e){return e.vnode.shapeFlag&4}let is=!1;function Tu(e,t=!1,n=!1){t&&Ro(t);const{props:s,children:o}=e.vnode,r=Fl(e);Qc(e,s,r,t),nu(e,o,n||t);const i=r?Eu(e,t):void 0;return t&&Ro(!1),i}function Eu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vc);const{setup:s}=n;if(s){$t();const o=e.setupContext=s.length>1?Bl(e):null,r=fs(e),i=ds(s,e,0,[e.props,o]),l=Ai(i);if(jt(),r(),(l||e.sp)&&!En(e)&&hl(e),l){if(i.then(Or,Or),t)return i.then(a=>{Lr(e,a)}).catch(a=>{Ws(a,e,0)});e.asyncDep=i}else Lr(e,i)}else Hl(e)}function Lr(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)&&(e.setupState=qi(t)),Hl(e)}function Hl(e,t,n){const s=e.type;e.render||(e.render=s.render||Et);{const o=fs(e);$t();try{Gc(e)}finally{jt(),o()}}}const Pu={get(e,t){return Je(e,"get",""),e[t]}};function Bl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Pu),slots:e.slots,emit:e.emit,expose:t}}function Xs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(qi(mc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}})):e.proxy}function Cu(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function Mu(e){return oe(e)&&"__vccOpts"in e}const V=(e,t)=>wc(e,t,is);function rr(e,t,n){const s=(r,i,l)=>{Ds(-1);try{return be(r,i,l)}finally{Ds(1)}},o=arguments.length;return o===2?Ce(t)&&!se(t)?rs(t)?s(e,null,[t]):s(e,t):s(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&rs(n)&&(n=[n]),s(e,t,n))}const Au="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zo;const Nr=typeof window<"u"&&window.trustedTypes;if(Nr)try{zo=Nr.createPolicy("vue",{createHTML:e=>e})}catch{}const Vl=zo?e=>zo.createHTML(e):e=>e,Iu="http://www.w3.org/2000/svg",Ru="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Dr=Rt&&Rt.createElement("template"),zu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Rt.createElementNS(Iu,e):t==="mathml"?Rt.createElementNS(Ru,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Dr.innerHTML=Vl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Dr.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ut="transition",jn="animation",ls=Symbol("_vtc"),Ul={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ou=$e({},cl,Ul),Lu=e=>(e.displayName="Transition",e.props=Ou,e),un=Lu((e,{slots:t})=>rr(Ac,Nu(e),t)),on=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},$r=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function Nu(e){const t={};for(const U in e)U in Ul||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:u=i,appearToClass:c=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=Du(o),k=w&&w[0],M=w&&w[1],{onBeforeEnter:R,onEnter:T,onEnterCancelled:O,onLeave:N,onLeaveCancelled:S,onBeforeAppear:v=R,onAppear:A=T,onAppearCancelled:P=O}=t,H=(U,ie,xe,Se)=>{U._enterCancelled=Se,rn(U,ie?c:l),rn(U,ie?u:i),xe&&xe()},q=(U,ie)=>{U._isLeaving=!1,rn(U,d),rn(U,m),rn(U,h),ie&&ie()},te=U=>(ie,xe)=>{const Se=U?A:T,ce=()=>H(ie,U,xe);on(Se,[ie,ce]),jr(()=>{rn(ie,U?a:r),Mt(ie,U?c:l),$r(Se)||Fr(ie,s,k,ce)})};return $e(t,{onBeforeEnter(U){on(R,[U]),Mt(U,r),Mt(U,i)},onBeforeAppear(U){on(v,[U]),Mt(U,a),Mt(U,u)},onEnter:te(!1),onAppear:te(!0),onLeave(U,ie){U._isLeaving=!0;const xe=()=>q(U,ie);Mt(U,d),U._enterCancelled?(Mt(U,h),Vr()):(Vr(),Mt(U,h)),jr(()=>{U._isLeaving&&(rn(U,d),Mt(U,m),$r(N)||Fr(U,s,M,xe))}),on(N,[U,xe])},onEnterCancelled(U){H(U,!1,void 0,!0),on(O,[U])},onAppearCancelled(U){H(U,!0,void 0,!0),on(P,[U])},onLeaveCancelled(U){q(U),on(S,[U])}})}function Du(e){if(e==null)return null;if(Ce(e))return[fo(e.enter),fo(e.leave)];{const t=fo(e);return[t,t]}}function fo(e){return Ba(e)}function Mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ls]||(e[ls]=new Set)).add(t)}function rn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[ls];n&&(n.delete(t),n.size||(e[ls]=void 0))}function jr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $u=0;function Fr(e,t,n,s){const o=e._endId=++$u,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:l,propCount:a}=ju(e,t);if(!i)return s();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,h),r()},h=m=>{m.target===e&&++c>=a&&d()};setTimeout(()=>{c<a&&d()},l+1),e.addEventListener(u,h)}function ju(e,t){const n=window.getComputedStyle(e),s=w=>(n[w]||"").split(", "),o=s(`${Ut}Delay`),r=s(`${Ut}Duration`),i=Hr(o,r),l=s(`${jn}Delay`),a=s(`${jn}Duration`),u=Hr(l,a);let c=null,d=0,h=0;t===Ut?i>0&&(c=Ut,d=i,h=r.length):t===jn?u>0&&(c=jn,d=u,h=a.length):(d=Math.max(i,u),c=d>0?i>u?Ut:jn:null,h=c?c===Ut?r.length:a.length:0);const m=c===Ut&&/\b(?:transform|all)(?:,|$)/.test(s(`${Ut}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:m}}function Hr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Br(n)+Br(e[s])))}function Br(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vr(){return document.body.offsetHeight}function Fu(e,t,n){const s=e[ls];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ur=Symbol("_vod"),Hu=Symbol("_vsh"),Bu=Symbol(""),Vu=/(?:^|;)\s*display\s*:/;function Uu(e,t,n){const s=e.style,o=Ie(n);let r=!1;if(n&&!o){if(t)if(Ie(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&Ms(s,l,"")}else for(const i in t)n[i]==null&&Ms(s,i,"");for(const i in n)i==="display"&&(r=!0),Ms(s,i,n[i])}else if(o){if(t!==n){const i=s[Bu];i&&(n+=";"+i),s.cssText=n,r=Vu.test(n)}}else t&&e.removeAttribute("style");Ur in e&&(e[Ur]=r?s.display:"",e[Hu]&&(s.display="none"))}const Gr=/\s*!important$/;function Ms(e,t,n){if(se(n))n.forEach(s=>Ms(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Gu(e,t);Gr.test(n)?e.setProperty(en(s),n.replace(Gr,""),"important"):e[s]=n}}const Wr=["Webkit","Moz","ms"],po={};function Gu(e,t){const n=po[t];if(n)return n;let s=ht(t);if(s!=="filter"&&s in e)return po[t]=s;s=Vs(s);for(let o=0;o<Wr.length;o++){const r=Wr[o]+s;if(r in e)return po[t]=r}return t}const Zr="http://www.w3.org/1999/xlink";function Kr(e,t,n,s,o,r=Ka(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zr,t.slice(6,t.length)):e.setAttributeNS(Zr,t,n):n==null||r&&!Oi(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ht(n)?String(n):n)}function Jr(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Vl(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oi(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function yn(e,t,n,s){e.addEventListener(t,n,s)}function Wu(e,t,n,s){e.removeEventListener(t,n,s)}const Yr=Symbol("_vei");function Zu(e,t,n,s,o=null){const r=e[Yr]||(e[Yr]={}),i=r[t];if(s&&i)i.value=s;else{const[l,a]=Ku(t);if(s){const u=r[t]=Xu(s,o);yn(e,l,u,a)}else i&&(Wu(e,l,i,a),r[t]=void 0)}}const Xr=/(?:Once|Passive|Capture)$/;function Ku(e){let t;if(Xr.test(e)){t={};let s;for(;s=e.match(Xr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let ho=0;const Ju=Promise.resolve(),Yu=()=>ho||(Ju.then(()=>ho=0),ho=Date.now());function Xu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(Qu(s,n.value),t,5,[s])};return n.value=e,n.attached=Yu(),n}function Qu(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qu=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Fu(e,s,i):t==="style"?Uu(e,n,s):Fs(t)?Ho(t)||Zu(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ed(e,t,s,i))?(Jr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Kr(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ie(s))?Jr(e,ht(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Kr(e,t,s,i))};function ed(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Qr(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Qr(t)&&Ie(n)?!1:t in e}const qr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>Ts(t,n):t};function td(e){e.target.composing=!0}function ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mo=Symbol("_assign"),Lm={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[mo]=qr(o);const r=s||o.props&&o.props.type==="number";yn(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=xo(l)),e[mo](l)}),n&&yn(e,"change",()=>{e.value=e.value.trim()}),t||(yn(e,"compositionstart",td),yn(e,"compositionend",ei),yn(e,"change",ei))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[mo]=qr(i),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?xo(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===a)||(e.value=a))}},nd=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nd.some(n=>e[`${n}Key`]&&!t.includes(n))},Nm=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...r)=>{for(let i=0;i<t.length;i++){const l=sd[t[i]];if(l&&l(o,t))return}return e(o,...r)})},od={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dm=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=o=>{if(!("key"in o))return;const r=en(o.key);if(t.some(i=>i===r||od[i]===r))return e(o)})},rd=$e({patchProp:qu},zu);let ti;function id(){return ti||(ti=ou(rd))}const ld=(...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=cd(s);if(!o)return;const r=t._component;!oe(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,ad(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function ad(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function cd(e){return Ie(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof document<"u";function Gl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ud(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gl(e.default)}const ye=Object.assign;function go(e,t){const n={};for(const s in t){const o=t[s];n[s]=xt(o)?o.map(e):e(o)}return n}const Xn=()=>{},xt=Array.isArray,Wl=/#/g,dd=/&/g,fd=/\//g,pd=/=/g,hd=/\?/g,Zl=/\+/g,md=/%5B/g,gd=/%5D/g,Kl=/%5E/g,bd=/%60/g,Jl=/%7B/g,vd=/%7C/g,Yl=/%7D/g,yd=/%20/g;function ir(e){return encodeURI(""+e).replace(vd,"|").replace(md,"[").replace(gd,"]")}function wd(e){return ir(e).replace(Jl,"{").replace(Yl,"}").replace(Kl,"^")}function Oo(e){return ir(e).replace(Zl,"%2B").replace(yd,"+").replace(Wl,"%23").replace(dd,"%26").replace(bd,"`").replace(Jl,"{").replace(Yl,"}").replace(Kl,"^")}function xd(e){return Oo(e).replace(pd,"%3D")}function _d(e){return ir(e).replace(Wl,"%23").replace(hd,"%3F")}function kd(e){return e==null?"":_d(e).replace(fd,"%2F")}function as(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Sd=/\/$/,Td=e=>e.replace(Sd,"");function bo(e,t,n="/"){let s,o={},r="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=t.slice(0,a),r=t.slice(a+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Md(s??t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:as(i)}}function Ed(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ni(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pd(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Mn(t.matched[s],n.matched[o])&&Xl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Cd(e[n],t[n]))return!1;return!0}function Cd(e,t){return xt(e)?si(e,t):xt(t)?si(t,e):e===t}function si(e,t){return xt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Md(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const Gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cs;(function(e){e.pop="pop",e.push="push"})(cs||(cs={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function Ad(e){if(!e)if(wn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Td(e)}const Id=/^[^#]+#/;function Rd(e,t){return e.replace(Id,"#")+t}function zd(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Qs=()=>({left:window.scrollX,top:window.scrollY});function Od(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=zd(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function oi(e,t){return(history.state?history.state.position-t:-1)+e}const Lo=new Map;function Ld(e,t){Lo.set(e,t)}function Nd(e){const t=Lo.get(e);return Lo.delete(e),t}let Dd=()=>location.protocol+"//"+location.host;function Ql(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),ni(a,"")}return ni(n,e)+s+o}function $d(e,t,n,s){let o=[],r=[],i=null;const l=({state:h})=>{const m=Ql(e,location),w=n.value,k=t.value;let M=0;if(h){if(n.value=m,t.value=h,i&&i===w){i=null;return}M=k?h.position-k.position:0}else s(m);o.forEach(R=>{R(n.value,w,{delta:M,type:cs.pop,direction:M?M>0?Qn.forward:Qn.back:Qn.unknown})})};function a(){i=n.value}function u(h){o.push(h);const m=()=>{const w=o.indexOf(h);w>-1&&o.splice(w,1)};return r.push(m),m}function c(){const{history:h}=window;h.state&&h.replaceState(ye({},h.state,{scroll:Qs()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:a,listen:u,destroy:d}}function ri(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Qs():null}}function jd(e){const{history:t,location:n}=window,s={value:Ql(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,u,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Dd()+e+a;try{t[c?"replaceState":"pushState"](u,"",h),o.value=u}catch(m){console.error(m),n[c?"replace":"assign"](h)}}function i(a,u){const c=ye({},t.state,ri(o.value.back,a,o.value.forward,!0),u,{position:o.value.position});r(a,c,!0),s.value=a}function l(a,u){const c=ye({},o.value,t.state,{forward:a,scroll:Qs()});r(c.current,c,!0);const d=ye({},ri(s.value,a,null),{position:c.position+1},u);r(a,d,!1),s.value=a}return{location:s,state:o,push:l,replace:i}}function Fd(e){e=Ad(e);const t=jd(e),n=$d(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ye({location:"",base:e,go:s,createHref:Rd.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Hd(e){return typeof e=="string"||e&&typeof e=="object"}function ql(e){return typeof e=="string"||typeof e=="symbol"}const ea=Symbol("");var ii;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ii||(ii={}));function An(e,t){return ye(new Error,{type:e,[ea]:!0},t)}function At(e,t){return e instanceof Error&&ea in e&&(t==null||!!(e.type&t))}const li="[^/]+?",Bd={sensitive:!1,strict:!1,start:!0,end:!0},Vd=/[.+*?^${}()[\]/\\]/g;function Ud(e,t){const n=ye({},Bd,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const h=u[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(o+="/"),o+=h.value.replace(Vd,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:k,optional:M,regexp:R}=h;r.push({name:w,repeatable:k,optional:M});const T=R||li;if(T!==li){m+=10;try{new RegExp(`(${T})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${w}" (${T}): `+N.message)}}let O=k?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(O=M&&u.length<2?`(?:/${O})`:"/"+O),M&&(O+="?"),o+=O,m+=20,M&&(m+=-8),k&&(m+=-20),T===".*"&&(m+=-50)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(u){const c=u.match(i),d={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",w=r[h-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function a(u){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of h)if(m.type===0)c+=m.value;else if(m.type===1){const{value:w,repeatable:k,optional:M}=m,R=w in u?u[w]:"";if(xt(R)&&!k)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const T=xt(R)?R.join("/"):R;if(!T)if(M)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);c+=T}}return c||"/"}return{re:i,score:s,keys:r,parse:l,stringify:a}}function Gd(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ta(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Gd(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(ai(s))return 1;if(ai(o))return-1}return o.length-s.length}function ai(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wd={type:0,value:""},Zd=/[a-zA-Z0-9_]/;function Kd(e){if(!e)return[[]];if(e==="/")return[[Wd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let l=0,a,u="",c="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(u&&d(),i()):a===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:a==="("?n=2:Zd.test(a)?h():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}function Jd(e,t,n){const s=Ud(Kd(e.path),n),o=ye(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Yd(e,t){const n=[],s=new Map;t=fi({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function r(d,h,m){const w=!m,k=ui(d);k.aliasOf=m&&m.record;const M=fi(t,d),R=[k];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of N)R.push(ui(ye({},k,{components:m?m.record.components:k.components,path:S,aliasOf:m?m.record:k})))}let T,O;for(const N of R){const{path:S}=N;if(h&&S[0]!=="/"){const v=h.record.path,A=v[v.length-1]==="/"?"":"/";N.path=h.record.path+(S&&A+S)}if(T=Jd(N,h,M),m?m.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),w&&d.name&&!di(T)&&i(d.name)),na(T)&&a(T),k.children){const v=k.children;for(let A=0;A<v.length;A++)r(v[A],T,m&&m.children[A])}m=m||T}return O?()=>{i(O)}:Xn}function i(d){if(ql(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function a(d){const h=qd(d,n);n.splice(h,0,d),d.record.name&&!di(d)&&s.set(d.record.name,d)}function u(d,h){let m,w={},k,M;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw An(1,{location:d});M=m.record.name,w=ye(ci(h.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&ci(d.params,m.keys.map(O=>O.name))),k=m.stringify(w)}else if(d.path!=null)k=d.path,m=n.find(O=>O.re.test(k)),m&&(w=m.parse(k),M=m.record.name);else{if(m=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!m)throw An(1,{location:d,currentLocation:h});M=m.record.name,w=ye({},h.params,d.params),k=m.stringify(w)}const R=[];let T=m;for(;T;)R.unshift(T.record),T=T.parent;return{name:M,path:k,params:w,matched:R,meta:Qd(R)}}e.forEach(d=>r(d));function c(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:l,getRecordMatcher:o}}function ci(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function ui(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Xd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Xd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function di(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qd(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function fi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function qd(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;ta(e,t[r])<0?s=r:n=r+1}const o=ef(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function ef(e){let t=e;for(;t=t.parent;)if(na(t)&&ta(e,t)===0)return t}function na({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function tf(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(Zl," "),i=r.indexOf("="),l=as(i<0?r:r.slice(0,i)),a=i<0?null:as(r.slice(i+1));if(l in t){let u=t[l];xt(u)||(u=t[l]=[u]),u.push(a)}else t[l]=a}return t}function pi(e){let t="";for(let n in e){const s=e[n];if(n=xd(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(xt(s)?s.map(r=>r&&Oo(r)):[s&&Oo(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function nf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=xt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const sf=Symbol(""),hi=Symbol(""),qs=Symbol(""),lr=Symbol(""),No=Symbol("");function Fn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Jt(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const u=h=>{h===!1?a(An(4,{from:n,to:t})):h instanceof Error?a(h):Hd(h)?a(An(2,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),l())},c=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(h=>a(h))})}function vo(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Gl(a)){const c=(a.__vccOpts||a)[t];c&&r.push(Jt(c,n,s,i,l,o))}else{let u=a();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=ud(c)?c.default:c;i.mods[l]=c,i.components[l]=d;const m=(d.__vccOpts||d)[t];return m&&Jt(m,n,s,i,l,o)()}))}}return r}function mi(e){const t=yt(qs),n=yt(lr),s=V(()=>{const a=ue(e.to);return t.resolve(a)}),o=V(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Mn.bind(null,c));if(h>-1)return h;const m=gi(a[u-2]);return u>1&&gi(c)===m&&d[d.length-1].path!==m?d.findIndex(Mn.bind(null,a[u-2])):h}),r=V(()=>o.value>-1&&af(n.params,s.value.params)),i=V(()=>o.value>-1&&o.value===n.matched.length-1&&Xl(n.params,s.value.params));function l(a={}){if(lf(a)){const u=t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(Xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:V(()=>s.value.href),isActive:r,isExactActive:i,navigate:l}}function of(e){return e.length===1?e[0]:e}const rf=Bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mi,setup(e,{slots:t}){const n=us(mi(e)),{options:s}=yt(qs),o=V(()=>({[bi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&of(t.default(n));return e.custom?r:rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),bt=rf;function lf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function af(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!xt(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bi=(e,t,n)=>e??t??n,cf=Bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=yt(No),o=V(()=>e.route||s.value),r=yt(hi,0),i=V(()=>{let u=ue(r);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),l=V(()=>o.value.matched[i.value]);Ps(hi,V(()=>i.value+1)),Ps(sf,l),Ps(No,o);const a=pe();return st(()=>[a.value,l.value,e.name],([u,c,d],[h,m,w])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Mn(c,m)||!h)&&(c.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,d=l.value,h=d&&d.components[c];if(!h)return vi(n.default,{Component:h,route:u});const m=d.props[c],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,M=rr(h,ye({},w,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[c]=null)},ref:a}));return vi(n.default,{Component:M,route:u})||M}}});function vi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const uf=cf;function df(e){const t=Yd(e.routes,e),n=e.parseQuery||tf,s=e.stringifyQuery||pi,o=e.history,r=Fn(),i=Fn(),l=Fn(),a=gc(Gt);let u=Gt;wn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=go.bind(null,b=>""+b),d=go.bind(null,kd),h=go.bind(null,as);function m(b,F){let z,Z;return ql(b)?(z=t.getRecordMatcher(b),Z=F):Z=b,t.addRoute(Z,z)}function w(b){const F=t.getRecordMatcher(b);F&&t.removeRoute(F)}function k(){return t.getRoutes().map(b=>b.record)}function M(b){return!!t.getRecordMatcher(b)}function R(b,F){if(F=ye({},F||a.value),typeof b=="string"){const g=bo(n,b,F.path),x=t.resolve({path:g.path},F),E=o.createHref(g.fullPath);return ye(g,x,{params:h(x.params),hash:as(g.hash),redirectedFrom:void 0,href:E})}let z;if(b.path!=null)z=ye({},b,{path:bo(n,b.path,F.path).path});else{const g=ye({},b.params);for(const x in g)g[x]==null&&delete g[x];z=ye({},b,{params:d(g)}),F.params=d(F.params)}const Z=t.resolve(z,F),de=b.hash||"";Z.params=c(h(Z.params));const f=Ed(s,ye({},b,{hash:wd(de),path:Z.path})),p=o.createHref(f);return ye({fullPath:f,hash:de,query:s===pi?nf(b.query):b.query||{}},Z,{redirectedFrom:void 0,href:p})}function T(b){return typeof b=="string"?bo(n,b,a.value.path):ye({},b)}function O(b,F){if(u!==b)return An(8,{from:F,to:b})}function N(b){return A(b)}function S(b){return N(ye(T(b),{replace:!0}))}function v(b){const F=b.matched[b.matched.length-1];if(F&&F.redirect){const{redirect:z}=F;let Z=typeof z=="function"?z(b):z;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=T(Z):{path:Z},Z.params={}),ye({query:b.query,hash:b.hash,params:Z.path!=null?{}:b.params},Z)}}function A(b,F){const z=u=R(b),Z=a.value,de=b.state,f=b.force,p=b.replace===!0,g=v(z);if(g)return A(ye(T(g),{state:typeof g=="object"?ye({},de,g.state):de,force:f,replace:p}),F||z);const x=z;x.redirectedFrom=F;let E;return!f&&Pd(s,Z,z)&&(E=An(16,{to:x,from:Z}),Ne(Z,Z,!0,!1)),(E?Promise.resolve(E):q(x,Z)).catch(_=>At(_)?At(_,2)?_:Pe(_):L(_,x,Z)).then(_=>{if(_){if(At(_,2))return A(ye({replace:p},T(_.to),{state:typeof _.to=="object"?ye({},de,_.to.state):de,force:f}),F||x)}else _=U(x,Z,!0,p,de);return te(x,Z,_),_})}function P(b,F){const z=O(b,F);return z?Promise.reject(z):Promise.resolve()}function H(b){const F=Te.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(b):b()}function q(b,F){let z;const[Z,de,f]=ff(b,F);z=vo(Z.reverse(),"beforeRouteLeave",b,F);for(const g of Z)g.leaveGuards.forEach(x=>{z.push(Jt(x,b,F))});const p=P.bind(null,b,F);return z.push(p),je(z).then(()=>{z=[];for(const g of r.list())z.push(Jt(g,b,F));return z.push(p),je(z)}).then(()=>{z=vo(de,"beforeRouteUpdate",b,F);for(const g of de)g.updateGuards.forEach(x=>{z.push(Jt(x,b,F))});return z.push(p),je(z)}).then(()=>{z=[];for(const g of f)if(g.beforeEnter)if(xt(g.beforeEnter))for(const x of g.beforeEnter)z.push(Jt(x,b,F));else z.push(Jt(g.beforeEnter,b,F));return z.push(p),je(z)}).then(()=>(b.matched.forEach(g=>g.enterCallbacks={}),z=vo(f,"beforeRouteEnter",b,F,H),z.push(p),je(z))).then(()=>{z=[];for(const g of i.list())z.push(Jt(g,b,F));return z.push(p),je(z)}).catch(g=>At(g,8)?g:Promise.reject(g))}function te(b,F,z){l.list().forEach(Z=>H(()=>Z(b,F,z)))}function U(b,F,z,Z,de){const f=O(b,F);if(f)return f;const p=F===Gt,g=wn?history.state:{};z&&(Z||p?o.replace(b.fullPath,ye({scroll:p&&g&&g.scroll},de)):o.push(b.fullPath,de)),a.value=b,Ne(b,F,z,p),Pe()}let ie;function xe(){ie||(ie=o.listen((b,F,z)=>{if(!lt.listening)return;const Z=R(b),de=v(Z);if(de){A(ye(de,{replace:!0,force:!0}),Z).catch(Xn);return}u=Z;const f=a.value;wn&&Ld(oi(f.fullPath,z.delta),Qs()),q(Z,f).catch(p=>At(p,12)?p:At(p,2)?(A(ye(T(p.to),{force:!0}),Z).then(g=>{At(g,20)&&!z.delta&&z.type===cs.pop&&o.go(-1,!1)}).catch(Xn),Promise.reject()):(z.delta&&o.go(-z.delta,!1),L(p,Z,f))).then(p=>{p=p||U(Z,f,!1),p&&(z.delta&&!At(p,8)?o.go(-z.delta,!1):z.type===cs.pop&&At(p,20)&&o.go(-1,!1)),te(Z,f,p)}).catch(Xn)}))}let Se=Fn(),ce=Fn(),re;function L(b,F,z){Pe(b);const Z=ce.list();return Z.length?Z.forEach(de=>de(b,F,z)):console.error(b),Promise.reject(b)}function ze(){return re&&a.value!==Gt?Promise.resolve():new Promise((b,F)=>{Se.add([b,F])})}function Pe(b){return re||(re=!b,xe(),Se.list().forEach(([F,z])=>b?z(b):F()),Se.reset()),b}function Ne(b,F,z,Z){const{scrollBehavior:de}=e;if(!wn||!de)return Promise.resolve();const f=!z&&Nd(oi(b.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return Xo().then(()=>de(b,F,f)).then(p=>p&&Od(p)).catch(p=>L(p,b,F))}const he=b=>o.go(b);let ve;const Te=new Set,lt={currentRoute:a,listening:!0,addRoute:m,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:k,resolve:R,options:e,push:N,replace:S,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:r.add,beforeResolve:i.add,afterEach:l.add,onError:ce.add,isReady:ze,install(b){const F=this;b.component("RouterLink",bt),b.component("RouterView",uf),b.config.globalProperties.$router=F,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(a)}),wn&&!ve&&a.value===Gt&&(ve=!0,N(o.location).catch(de=>{}));const z={};for(const de in Gt)Object.defineProperty(z,de,{get:()=>a.value[de],enumerable:!0});b.provide(qs,F),b.provide(lr,Xi(z)),b.provide(No,a);const Z=b.unmount;Te.add(b),b.unmount=function(){Te.delete(b),Te.size<1&&(u=Gt,ie&&ie(),ie=null,a.value=Gt,ve=!1,re=!1),Z()}}};function je(b){return b.reduce((F,z)=>F.then(()=>H(z)),Promise.resolve())}return lt}function ff(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const l=t.matched[i];l&&(e.matched.find(u=>Mn(u,l))?s.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(u=>Mn(u,a))||o.push(a))}return[n,s,o]}function $m(){return yt(qs)}function sa(e){return yt(lr)}const oa=pe(0),ra=pe(null);let qn=0,yi=0,Cn=null;const pf=()=>{if(typeof document>"u")return 0;let e=document.documentElement.scrollTop;if(e===0){const t=document.body.style;t.position==="fixed"&&(e=Math.abs(Number.parseInt(t.top||"0",10)))}return e},ia=()=>{const e=pf();ra.value=yi-e>0?"up":"down",yi=e,oa.value=e},la=()=>{Cn===null&&(Cn=window.setTimeout(()=>{Cn=null,ia()},16))},hf=()=>{Cn!==null&&(window.clearTimeout(Cn),Cn=null)},mf=()=>{qn===1&&(window.addEventListener("scroll",la,{passive:!0}),ia())},gf=()=>{qn===0&&(window.removeEventListener("scroll",la),hf())},aa=()=>(Pt(()=>{qn+=1,mf()}),_t(()=>{qn=Math.max(0,qn-1),gf()}),{scrollY:As(oa),scrollDirection:As(ra)}),bf=Bt({__name:"BackToTopFab",setup(e){const t=pe(!1),{scrollDirection:n,scrollY:s}=aa(),o=()=>{t.value=window.innerWidth<768};Pt(()=>{o(),window.addEventListener("resize",o,{passive:!0})}),_t(()=>{window.removeEventListener("resize",o)});const r=V(()=>s.value>(typeof window>"u"?120:window.innerHeight/5)),i=V(()=>t.value&&n.value==="down"),l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(a,u)=>(K(),Ke(un,{"enter-active-class":"transition duration-250 ease-out","enter-from-class":"opacity-0 scale-90 translate-y-3","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition duration-180 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-90 translate-y-3"},{default:Re(()=>[r.value?(K(),ee("div",{key:0,class:Oe(["pointer-events-none fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] right-4 z-[9] flex flex-col transition-transform duration-300 ease-in-out md:right-6",i.value?"translate-x-[calc(100%+2rem)]":""])},[$("button",{type:"button","aria-label":"Back to top",class:"bloom-glass pointer-events-auto mt-2 flex size-12 items-center justify-center rounded-2xl text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/58 dark:text-zinc-200 dark:hover:bg-zinc-900/56 md:size-10 md:rounded-xl md:text-base",onClick:l},[...u[0]||(u[0]=[$("i",{class:"i-mingcute-arow-to-up-line"},null,-1)])])],2)):Le("",!0)]),_:1}))}}),vf=`---
created: "2025-07-15T03:11:03.072Z"
modified: "2025-07-15T03:26:38.374Z"
title: 如何正确配置 SSH Config 文件：关键要点与注意事项
slug: 2025071501
category: engineering
---

SSH（Secure Shell）是远程管理 Linux/UNIX 系统的标准协议。通过合理配置 \`~/.ssh/config\` 文件，开发者与运维人员可以显著提升工作效率、简化多主机管理，并增强连接的安全性。本文将系统介绍 SSH Config 的配置方法、问题排查技巧以及最佳实践建议。

---

## 一、SSH Config 基础配置

### 1. 配置文件位置与权限

SSH 客户端配置文件路径：

\`\`\`bash
~/.ssh/config
\`\`\`

**推荐权限设置：**

\`\`\`bash
chmod 600 ~/.ssh/config    # 仅允许当前用户读写
chmod 700 ~/.ssh           # 仅允许当前用户访问目录
\`\`\`

确保权限正确是 SSH 能成功读取配置并建立连接的前提条件。

### 2. 基本配置示例

\`\`\`ssh
Host myserver
    HostName server.example.com
    User myusername
    Port 2222
    IdentityFile ~/.ssh/my_key
\`\`\`

| 参数             | 说明               |
| -------------- | ---------------- |
| \`Host\`         | 本地定义的别名，用于简化连接命令 |
| \`HostName\`     | 远程主机的实际地址（IP或域名） |
| \`User\`         | 登录时使用的用户名        |
| \`Port\`         | SSH 服务端口，默认为 22  |
| \`IdentityFile\` | 指定使用的私钥路径        |

连接示例：

\`\`\`bash
ssh myserver
\`\`\`

---

## 二、关键配置项详解

### 1. 多主机管理示例

\`\`\`ssh
# 生产环境服务器
Host prod
    HostName 192.168.1.100
    User admin
    IdentityFile ~/.ssh/prod_key

# 开发环境服务器
Host dev
    HostName dev.example.com
    User developer
    IdentityFile ~/.ssh/dev_key
\`\`\`

通过 \`ssh prod\` 或 \`ssh dev\` 快速登录对应服务器。

### 2. 跳板机（ProxyJump）配置

当目标主机处于内网，需通过跳板机访问时：

\`\`\`ssh
# 跳板机
Host jumpbox
    HostName jump.example.com
    User jumper
    IdentityFile ~/.ssh/jump_key

# 内网服务器
Host internal-server
    HostName 10.0.0.5
    User internal
    IdentityFile ~/.ssh/internal_key
    ProxyJump jumpbox
\`\`\`

\`ProxyJump\` 是 \`ProxyCommand\` 的简洁替代方案，推荐使用。

### 3. 通用安全配置（适用于所有主机）

\`\`\`ssh
Host *
    PasswordAuthentication no
    Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
    ServerAliveInterval 60
    TCPKeepAlive yes
\`\`\`

---

## 三、常见问题与解决方案

### 1. SSH 连接超时

**可能原因：**

* 防火墙阻止了 SSH 端口
* 网络不通或 DNS 解析错误
* 服务端未启动 \`sshd\`

**排查方法：**

\`\`\`bash
sudo systemctl status sshd

# 测试端口连通性
telnet server.example.com 22
# 或使用 nc
nc -zv server.example.com 22
\`\`\`

### 2. 密钥认证失败

**排查步骤：**

1. 检查公钥是否添加至目标服务器：
   \`~/.ssh/authorized_keys\`

2. 确保权限设置正确：

\`\`\`bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
\`\`\`

3. 验证密钥是否匹配：

\`\`\`bash
ssh-keygen -y -f ~/.ssh/my_key
\`\`\`

4. 使用以下方式上传公钥：

* 使用 ssh-copy-id（推荐，需先能密码登录）：

\`\`\`bash
ssh-copy-id -i ~/.ssh/my_remote_key.pub username@remote_server_ip
\`\`\`

* 手动复制（用于无密码登录权限场景）：

\`\`\`bash
cat ~/.ssh/my_remote_key.pub | ssh username@remote_server_ip \\
  "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
\`\`\`

5. 若需使用非默认文件名 \`authorized_keys\`，请在服务端修改配置：

* 编辑 \`/etc/ssh/sshd_config\`

\`\`\`bash
AuthorizedKeysFile .ssh/my_keys  # 相对路径
# 或
AuthorizedKeysFile /etc/ssh/my_keys/%u_keys  # 绝对路径，%u表示用户名
\`\`\`

* 重启 SSH 服务：

\`\`\`bash
sudo systemctl restart sshd
\`\`\`

* 验证是否生效：

\`\`\`bash
sshd -T | grep authorizedkeysfile
\`\`\`

6. 可指定多个公钥文件：

\`\`\`bash
AuthorizedKeysFile .ssh/keys1 .ssh/keys2 /etc/global_keys
\`\`\`

7. **推荐使用默认文件名 \`authorized_keys\` 的原因：**

* 标准化，兼容性最好
* 支持工具自动化（如 ssh-copy-id）
* 减少维护和配置出错的概率

### 3. 配置文件无效或未生效

**检查方法：**

\`\`\`bash
ssh -T HostAlias
ssh -vvv HostAlias
\`\`\`

使用 \`-vvv\` 参数可查看详细调试信息。

---

## 四、安全建议与最佳实践

### 1. 密钥管理建议

* 为不同服务使用不同密钥
* 定期更换密钥（建议每 3\\~6 个月）
* 使用强密码保护私钥文件

### 2. SSH 服务端安全加固（\`/etc/ssh/sshd_config\`）：

\`\`\`bash
PermitRootLogin no
AllowUsers admin_user deploy_user
\`\`\`

可结合 Fail2Ban 等工具防止暴力破解。

### 3. 启用连接复用与压缩（客户端配置）：

\`\`\`ssh
Host *
    Compression yes
    ControlMaster auto
    ControlPath ~/.ssh/ssh_mux_%h_%p_%r
    ControlPersist 4h
\`\`\`

---

## 五、FRP 内网穿透场景下的 SSH 配置

当目标主机无法被公网直接访问时，可通过 FRP 实现端口映射：

\`\`\`ssh
Host remote-via-frp
    HostName frp-server.example.com
    Port 6000  # 修改为你的 FRP 映射端口
    User internal_user
    IdentityFile ~/.ssh/internal_key
\`\`\`

**注意事项：**

* \`~/.ssh/authorized_keys\` 必须存在于 **内网主机** 上
* FRP 只负责转发连接，认证仍由内网主机完成
* 确保内网主机的 \`sshd\` 正常运行并监听对应端口

---

## 六、总结

配置 SSH Config 带来的好处包括：

* ✅ 简化远程连接操作
* ✅ 管理多主机更加清晰高效
* ✅ 支持跳板机、FRP 等复杂网络结构
* ✅ 提高安全性和连接稳定性

**建议：**

* 熟练使用 \`ssh -vvv\` 快速定位连接问题
* 配合 VPN、双因子认证等手段构建更安全的远程环境
* 将 SSH 配置文件纳入版本控制，定期审查和更新

通过规范化配置 SSH，运维与开发工作将变得更可靠、更安全、更高效。
`,yf=`---
created: "2025-04-10T10:42:30.567Z"
modified: "2025-04-10T10:43:12.771Z"
title: 深入解析内网穿透工具FRP
slug: frp
category: engineering
---

#### **背景**
之前因为百度网盘无故和谐网盘数据，所以购入了极空间私有云Nas，一开始只想用来当个文件传输工具，今年年初极空间开房了root权限，想着能多玩出写花样，把自己的后端服务都放上来，由于没有公网ip，所以借助云服务器搭建内网穿透服务来访问极空间内部的服务

#### **一、FRP简介**
FRP（Fast Reverse Proxy）是一款专注于内网穿透的高性能反向代理工具，支持TCP、UDP、HTTP、HTTPS等多种协议。其核心功能是通过公网服务器中转，将内网服务安全地暴露到外网，解决无公网IP设备无法直接访问的痛点。FRP的轻量化设计、跨平台兼容性（支持Windows、Linux、macOS）以及灵活的配置使其成为开发者、运维人员的首选工具。

**核心原理**：  
1. **服务端（frps）**：部署在公网服务器上，监听主端口（如7000）等待客户端连接。  
2. **客户端（frpc）**：部署在内网设备中，主动连接服务端并注册需要暴露的端口和服务类型。  
3. **数据转发**：外网用户通过访问服务端端口，请求被转发至客户端，再由客户端传递到内网服务，形成“穿透链路”。

---

#### **二、FRP的主要用途**  
1. **远程访问内网服务**  
   - **SSH访问**：通过外网服务器端口映射，实现远程登录内网Linux主机。  
   - **远程桌面**：穿透Windows的RDP端口（3389），实现跨网络桌面控制。  

2. **Web服务暴露**  
   - 将内网Web应用（如本地开发的网站、NAS管理界面）通过HTTP/HTTPS协议暴露到公网，支持多域名绑定和虚拟主机。  

3. **文件共享与媒体服务**  
   - 映射SMB、FTP端口，或通过HTTP穿透实现内网文件共享。  
   - 搭配Jellyfin、Plex等媒体服务器，实现外网流媒体播放。  

4. **IoT设备管理**  
   - 远程访问智能家居设备（如树莓派、摄像头）的管理界面或API服务。  

---

#### **三、最新版FRP（v0.61.0）配置教程**  
**环境准备**：  
- 公网服务器（如阿里云ECS）作为服务端。  
- 内网设备（如家用电脑）作为客户端。  

##### **1. 服务端配置（frps.toml）**  
\`\`\`toml
[common]
bindAddr = "0.0.0.0"  # 监听所有IP
bindPort = 7000       # 服务端主端口
auth.method = "token"  # 启用Token验证
auth.token = "your_secure_token"  # 客户端需匹配此Token

# 管理后台配置
webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "admin"
webServer.password = "admin@123"

# 日志与安全
log.level = "info"
allowPorts = [{ start = 7000, end = 8000 }]  # 允许的端口范围
\`\`\`
**启动命令**：  
\`\`\`bash
./frps -c frps.toml
\`\`\`
后台运行建议通过\`systemd\`管理（参考网页7的Systemd配置）。

##### **2. 客户端配置（frpc.toml）**  
**示例1：SSH穿透**  
\`\`\`toml
[common]
serverAddr = "公网服务器IP"
serverPort = 7000
auth.token = "your_secure_token"

[[proxies]]
name = "ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 6000  # 外网通过公网IP:6000访问内网SSH
\`\`\`

**示例2：HTTP服务穿透**  
\`\`\`toml
[[proxies]]
name = "web"
type = "http"
localPort = 8080
customDomains = ["your.domain.com"]  # 需将域名解析至公网服务器IP
\`\`\`

**启动客户端**：  
\`\`\`bash
./frpc -c frpc.toml
\`\`\`

---

#### **四、进阶功能与安全建议**  
1. **加密与压缩**  
   启用\`useEncryption\`和\`useCompression\`提升数据传输安全性与效率。  

2. **多端口批量映射**  
   使用\`range\`配置批量暴露端口（如远程开发调试）。  

3. **Dashboard监控**  
   通过服务端管理界面（如\`http://公网IP:7500\`）实时查看连接状态与流量统计。  

4. **安全防护**  
   - 限制\`allowPorts\`范围，避免开放高危端口。  
   - 定期更新Token，避免使用默认密码。  

---

#### **五、常见问题与解决方案**  
- **连接失败**：检查防火墙是否放行服务端端口（7000、7500等）。  
- **域名无法访问**：确保域名已正确解析至公网IP，且客户端配置\`customDomains\`。  
- **性能瓶颈**：调整\`transport.maxPoolCount\`优化连接池大小。  

---

#### **六、总结**  
FRP凭借其轻量、灵活的特性，成为内网穿透领域的标杆工具。无论是个人开发者还是企业运维，均可通过简单配置实现复杂的网络穿透需求。最新版v0.61.0在安全性和管理功能上的增强（如Token验证、Dashboard监控），进一步提升了其适用场景的广度和深度。  

**扩展阅读**：  
- [FRP官方文档](https://github.com/fatedier/frp)  
- [内网穿透实战案例（CSDN）](https://blog.csdn.net/bacawa/article/details/134027987)  
- [Windows FRP配置详解](https://blog.csdn.net/qq_30163677/article/details/144080343)  

通过合理配置与安全加固，FRP将成为您突破网络边界限制的利器！
`,wf=`---
created: "2025-01-17T02:37:13.051Z"
title: 从向量匹配到排序优化——推荐系统中的离散数学小小应用
slug: vector-sort-recommendation
category: engineering
---

##### 在推荐系统的实现中，如何将用户输入的查询和大量候选产品进行匹配与排序，是一个至关重要的课题。特别是当我们结合向量匹配、评分和销量等多维度特征时，排序的复杂性和业务需求会进一步提高。本文将从一个实际案例出发，探讨如何通过离散数学的思想优化排序逻辑，最终实现性能和业务目标的双赢。

### 背景与问题

推荐系统的核心在于找到最适合用户需求的候选产品。常见的流程包括以下几个步骤：
+ 向量匹配：通过向量数据库计算候选产品与用户查询的相似度，得到一个 score。
+ 多维度筛选：结合结构化数据库（如 Elasticsearch，简称 ES），对候选产品进行进一步筛选和排序。
+ 综合排序：在筛选后的产品中，综合 score 和其他特征（如销量）进行排序。

问题在于，向量匹配的 score 是由外部系统计算的，不能直接传入 ES，同时有希望结合其他的字段做进一步排序。我们希望根据 score 对产品进行分桶排序，并在每个分桶内按销量降序排列。

### 解决思路

为了解决上述问题，我们引入离散数学的分桶思想：
+ 将 score 分成若干离散范围，例如每 0.05 为一个桶。
+ 对所有产品按照 score 分桶，从大到小排序。
+ 在每个桶内，再按照销量从高到低排序。

通过这种方式，我们既保留了向量匹配的相似度信息，又结合了产品销量，实现了更符合业务需求的排序逻辑。

### 代码实现

以下是核心排序代码：

\`\`\`java
public static List<Item> sortItems(List<Item> items, Map<String, Float> idScoreMap) {
    if (items == null || idScoreMap == null) {
        return new ArrayList<>(); // 处理空输入
    }

    return items.stream()
            .sorted(Comparator
                    .comparing((Item item) -> {
                        // 获取分数值；如果不存在则使用默认值 0f
                        float score = idScoreMap.getOrDefault(item.id, 0f);
                        // 将分数映射到 0.05 的倍数范围内
                        return (float) (Math.floor(score / 0.05f) * 0.05f);
                    }, Comparator.reverseOrder()) // 按分桶值降序排列
                    .thenComparingInt(item -> -item.soldNum) // 在每个分桶内按销量降序排列
            )
            .collect(Collectors.toList()); // 返回排序后的列表
}
\`\`\`

### 关键技术解析

+ 离散化处理
     我们通过以下公式将分数划分为离散范围：
    \`\`\`java
    float rangeKey = (float) (Math.floor(score / 0.05f) * 0.05f);
    \`\`\`
    该公式的作用是将任意分数映射到最近的 0.05 倍数范围。例如：
	•	0.333 → 0.30
	•	0.367 → 0.35

+ 双重排序
      +  外层：按照分桶范围从大到小排序，保证高分桶的产品优先展示。
      +   内层：对每个分桶内的产品按销量降序排序，突出热销产品。
    
+ 流式操作
利用 Java Stream API 和链式 Comparator，代码逻辑清晰，避免了复杂的手动分组和排序操作。

### 性能分析
+ 时间复杂度：排序的时间复杂度为 O(n \\log n)，这里 n 是产品数量。由于产品总量较小（如 100 以下），性能表现良好。
+ 空间复杂度：仅使用了流操作，无需额外存储中间结果，空间开销较低。

### 应用场景与优势
+ 推荐系统中的多维排序
本方法特别适用于需要结合向量匹配与其他业务特征（如销量、评分等）进行综合排序的场景。
+ 灵活扩展性
离散范围的粒度（如 0.05 或 0.1）可以根据业务需求动态调整，以平衡相似度的区分度和排序的多样性。
+ 性能与可维护性
流式操作让代码更加简洁，同时保持了较高的运行效率。
`,xf=`---
created: "2025-04-30T15:28:32.919Z"
modified: "2025-05-06T09:20:58.661Z"
title: 海德格尔《哲学的终结和思的任务》
slug: 04302327
category: philosophy
---

### 一、**本体论重构 vs 主体性延伸：哲学地基的质变**
#### 海德格尔的 **"存在论革命"**
- **对形而上学的爆破**：他并非在传统本体论框架内修补，而是通过现象学解构整个西方哲学史。当他说"存在者不是存在"时，实际上在摧毁亚里士多德以来的实体本体论（ousia）传统。
- **此在的桥梁作用**：此在（Dasein）的特殊性不在于"人性"，而在于它是 **"存在得以显现的场所"**。在《存在与时间》中，"在世存在"（In-der-Welt-sein）揭示人与世界原初的未分化状态，彻底瓦解主客二元论。

#### 萨特的 **"意识本体论"**
- **笛卡尔幽灵的再现**：当萨特宣称"存在先于本质"，其前提仍是笛卡尔式的孤立主体。他的"自为存在"（pour-soi）本质是无限扩张的意识，将世界对象化为"自在存在"（en-soi），复辟了海德格尔极力消解的主客对立。
- **隐性的理性主义预设**：萨特虽否定本质，但其自由选择理论暗含 **"透明意识"** 的神话——仿佛人总能清醒认知选择的可能性，这恰恰是海德格尔批判的"理性形而上学"残余。

**关键分歧**：海德格尔要颠覆整个形而上学传统，萨特却在这个传统内部构建极端版本的主体哲学。

---

### 二、**人的本质：解构 vs 重建**
#### 海德格尔的 **"非本质主义"**
- **对本质的爆破**：他拒绝任何固定的人性定义，认为传统本质论都是对存在的遮蔽。此在的"本质"在于其 **"去存在"**（Zu-sein）的可能性，是永远未完成的绽出（Ekstase）。
- **诗意的栖居**：后期通过荷尔德林诗歌阐释，将人的本质理解为 **"存在的牧羊人"**，强调守护存在的真理而非征服世界。

#### 萨特的 **"隐性本质论"**
- **自由的悖论**："存在先于本质"看似否定本质，实则将 **"自由"** 确立为新本质。当他说"人被判定为自由"时，自由成为不可逃脱的命运，这与其反本质主义宣言自相矛盾。
- **人类中心主义困境**：萨特的存在主义最终将人置于价值创造的中心，重复了尼采"超人"的现代性叙事，而海德格尔早已警告这种人类中心主义是技术统治的思想根源。

**根本矛盾**：海德格尔在解构本质后保持开放，萨特在否定本质时偷偷重建了新本质。

---

### 三、**现象学方法的断裂**
#### 海德格尔的 **"解释学转向"**
- **解构性现象学**：其"形式指引"（formale Anzeige）方法拒绝对象化描述，强调通过生存体验 **"参与存在之理解"**。例如对"畏"（Angst）的分析不是心理描述，而是揭示存在整体的虚无化。
- **语言的边界突破**：后期用"林中空地"（Lichtung）、"集置"（Ge-stell）等诗化概念，试图超越概念化语言的限制。

#### 萨特的 **"描述现象学"**
- **意识的显微术**：延续胡塞尔直观描述方法，将"恶心"（La Nausée）等体验对象化分析。这种对意识状态的精细解剖，实质是将存在 **"存在者化"** ，落入海德格尔批判的形而上学窠臼。
- **文学化的陷阱**：萨特用小说戏剧表达哲学，表面突破学院话语，实则将存在体验固化为可观察的心理现象，丧失了现象学的解构力量。

**方法论鸿沟**：海德格尔的现象学是摧毁概念大厦的炸弹，萨特的现象学却是装修传统哲学房间的新家具。

---

### 四、**技术时代的诊断：守护 vs 抗争**
#### 海德格尔的 **"泰然任之"**
- **对技术本质的沉思**：在《技术的追问》中指出，现代技术不是工具，而是 **"座架"**（Ge-stell）——一种逼索自然的存在方式。拯救之道在于 **"诗意思维"** ，恢复人与存在的守护关系。
- **非行动主义**：反对萨特式介入文学，认为真正的革命在思想深处。他的纳粹卷入悲剧性印证了行动哲学的限度。

#### 萨特的 **"介入哲学"**
- **自由的政治化**：将存在主义改造为抵抗运动的武器，通过《脏手》等剧作宣扬选择的责任。但这种抗争仍陷于主体性逻辑，用人类意志对抗异化，反而强化了人类中心主义。
- **辩证法的困境**：后期转向马克思主义试图调和自由与历史必然性，却陷入"人学辩证法"的悖论，背离了早期存在主义的核心洞见。

**现代性反思的差异**：海德格尔诊断现代性病症的根源在形而上学，萨特则将其简化为社会压迫问题。


### 一、**哲学终结的误读与实现**
#### 海德格尔的 **"终结"（Vollendung）本义**
- **形而上学的完成**：所谓"哲学的终结"不是终止，而是指形而上学穷尽了其可能性，如同果实成熟后从树上坠落。此时存在之思应从 **"哲学"（Philosophie）转向"思"（Denken）**。
- **未思之物的显现**：正如《林中路》所言，终结意味着 **"聚集到其最极端的可能性中去"** ，恰恰为真正的思腾出空间。

#### 现实的历史反讽
- **科学的技术化**：现代科学不再是追求真理的认知活动，而成为 **"技术座架"（Ge-stell）的仆人**。量子物理学家操控粒子，神经科学家解构意识，哲学被实证主义还原为"认知科学"，这正是海德格尔警告的 **"存在的遗忘"** 的终极形态。
- **计算思维的统治**：当人工智能用算法解构爱情，区块链技术将信任机制数字化，人类正将海德格尔的预言具象化—— **"一切坚固的东西都烟消云散于比特之海"**。

---

### 二、**技术座架的双重暴力**
#### 存在的殖民化
- **对象化暴力**：GPS定位系统将空间简化为坐标参数，可穿戴设备将身体数据化为生物信号，社交媒体将人际关系量化为互动频率——这正是海德格尔所说的 **"世界成为图像"** 的完成态。
- **时间的空间化**：5G网络将即时性推至极限，物流系统消灭等待时间，区块链追求永恒记录。这种对 **"时间性绽出"** 的抹杀，使人沦为"现在序列"的囚徒。

#### 人类的自我异化
- **数字分身困境**：当元宇宙中的虚拟化身比肉身更"真实"，当社交媒体点赞数成为价值尺度，人类正经历 **"此在的数码化沉沦"** 。海德格尔的"常人"（das Man）在算法推荐中获得了技术形态。
- **语言的技术化**：ChatGPT生成的诗句、AI翻译的文献，使得语言不再是 **"存在之家"** ，而沦为信息传递的工具，诗性言说被数据流淹没。

---

### 三、**回到本源的悖论性道路**
#### 海德格尔的 **"返乡"（Heimkehr）困境**
- **技术迷宫的出口**：当人类试图通过脑机接口"增强"认知，用基因编辑"优化"生命时，这些技术补救方案恰恰加深了存在根基的裂痕，形成 **"治疗即病变"** 的现代性怪圈。
- **本源的遮蔽性**：就连"回到事情本身"的口号也被技术思维收编，正念APP将冥想数据化，生态保护沦为碳交易指标，存在之真被 **"治理术"（gouvernementalité）** 重新编码。

#### 思的可能性条件
- **艺术的救赎潜能**：在安塞姆·基弗的铅制书籍装置中，在坂本龙一的《异步》专辑里，我们或许能听到 **"存在之音"** 的微弱回响——这些抵抗技术统治的艺术实践，暗合海德格尔对"诗意思维"的期待。
- **边缘话语的启示**：心学、佛教的缘起性空观，这些非西方思想资源可能为突破技术座架提供 **"他者的目光"** 。

---
`,_f=`---
created: "2024-12-25T10:24:08.663Z"
title: 傻子主义的人生观
slug: 1
category: philosophy
---

贾波林，在他的杰作《马戏》和最近出版的《城市之光》两部影片里，描画出一种人生观，一种奇特古怪的人生观。他在《马戏》中迷恋着一个马戏班的舞女，死心踏地奉承她，替她争薪，替她争面子，一手把她从人世地狱里提拔出来；至终却碰见她和同行的一位年轻小伙子调情。贾波林伤心一阵之后，他的最后手段并不是“打破醋坛子”，却是翻开笑脸来替他俩撮合好事，愿天下有情人终成眷属。

这一段描写很可以代表贾波林的人生观。他处处宁可牺牲自己，不辆牲别人！宁可责备自己，不责备别人。他看透世间男男女女人面兽心，他识破人情底冷酷，他省悟他自己那副短胡子大裤腿破皮靴的丑像决不会中一位年轻女人的心意，所以他宁可责备自己的寒伧丑陋，不责备那舞女底丧尽天良；宁可牺牲自己的一场好梦，不去扰乱那一对情人间的情丝。这是世间号称聪明的人们认为最傻不过的办法。但贾波林并不介意；他只知道先打量打量别人，再估量估量自己，如果自己不配，便“知足不辱”，乐得替人家干一番好事。妇果这真叫傻的话，那么他宁可做个傻子；他不管大多数和聪明的人们是不是这样干，他就是要这样干，他就知道这样地傻干。

世间那一班聪明人有一种最流行的大毛病就是不肯睁开眼睛来看看别人，再看看自己。他们自己既不知足，又不量力，不愿见别人比他们高明，还偏爱和比他们高明的人捣乱。这一班聪明人确乎不称傻子，他们的确是很聪明，但他们的大毛病也就在于太过于聪明了！

再看贾波林在《城市之光》里，为怜惜一个卖花的盲女，自己拼命去参加拳斗，亲身去坐监，弄得两千块钱来帮助那意中人。卖花女的盲眼治好了，鲜花铺也开设起来了；新出狱的“傻子”却寒伦丑陋如故。盲女只凭新愈的病眼并不认得旧伴，而那旧伴又自惭形秘，不敢露面向她重温旧情。不惟不肯摆起大恩人的架子去要挟自己一手救渡出来的人，甚至不敢和她叙旧；这也是聪明人们认为最傻不过的事情；但是贾波林宁可做个傻子，他还是要这样地傻干。处处牺牲自己，责备自己，只知道傻干，这是贾波林的人生观，这是一种傻子主义的人生观。

世间最能干踏踏实实地真干的要算傻子。他们不懂得什么是取巧，什么是玩手段，什么是迎合一般人的心理；他们只知道傻干。所以傻子处处吃亏，处处没有聪明人那么占便宜。然而傻子也有傻子的福气，因为世间事只有踏踏实实地真干才会得到最后的成功；那取巧，玩手段，偷工的干法只能自欺欺人于一时，毕竟有一天会有人把他们的纸老虎扯破。贾波林的成功，贾波林的伟大，都是从傻子得来，并不是偶得的。现在有一班名教的信徒天天在那里念着遗嘱，唪着遗教，喊着“我们有主义，我们要成功，我们要胜利”，他们的手段正是很取巧很高明很迎合一般人心理的。但他们的成绩只是天天在发宣言散传单贴标语喊口号，他们的成功在哪里？他们的胜利在哪里？今年五月大公报的一万号增刊里有一篇陈衡哲女士底《说过渡时代》。她说，剧烈的文化冲突开始了，在我们生命的途中，有一条大河横在中间，待我们去过渡。河这边是一座古堡，被风日所蚀，虫蛇所据，不久也要倒塌了；河底那边却含有极美丽极伟大的宝藏，她还说，处在这个过度时代的有两种人：第一种人是抱着一种懒的人生观，他们是既不能渡河，亦不愿渡河，只在夕阳忧草之中，无能地等待着他们那蚁虫般生活的终结。

“第二种人是恰怡与此相反的。他们的人生观是积极的，是有为的，他们是具有莫大的好奇心的。他们不满意于此岸的生活，想到那岸去，取得丰实的智慧与伟大的经验。但因为没有桥梁可供他们的过渡，他们遂不得不忍耐着，先去做造桥的苦工了。”

她又说:“这苦工不但干枯单调，并且还需要强健的精力，与伟大的道路上的勇气。”

“我们生在这个过渡时代的人，却没有现成享受这些的福气，我们须得用脑汁心血去换取，我们领得裂肤折⻣地去争得。这便是我们的造桥工作。”

这就是说，除非我们不想前进，否则造桥的工作是不可避免的。要造桥，偷懒是不行的，我们不得不忍耐着去做苦工；我们知道这本来就是极干枯单调的苦工，分明是要拿脑汁心血，裂肤折⻣和伟大的道德上的勇气去换取的苦工；取巧是不行的，玩手段也是不行的。陈先生还说:“二十年前，我们这一群人都正当少年，正是理想化的时代。我们的精力是充足的，我们的前途是无垠的。我们的信心和希望是坚深确定的。我们大家携着手，唱着歌，向着那末来的世界前进，我们不怕社会的反对，因为我们正想改造它，我们不怕愚人取笑，因为我们有同行者的安慰和鼓励。但现在呢？从前一同造桥的人，现在有的是因精力衰竭，己无做工的能力，只得回到古堡里去，去休养他们的残年。有的是因为功成名就，觉得社会待他们很好，若再与他作战，未免太煞风景。有的是已看出人生的喜剧来，觉得这样苦很有点缺少幽默，于是便微笑着把工具拋下，走到河边去看落日了。有的是阅世太深，觉得人类已愚，终难救治；悲天怜人之心虽然末改，而积极的造桥勇气却变为消极的长吁短叹了...”

这原是人世底一场大悲剧；且听她又说:“以上各种的人，虽然情形不同，结局各异，但是他们的半途废工都是一样的。结果是在那将成末成的桥边，骤然减少了无数做工的人；那留下的几个，大抵是自信心甚强，对于腐败的社会，始终不肯投降的人，他们是一般人自为傻子，自为怪异的人。他们看见从前的伴侣，一个一个回到古堡里去，或是在河边徘徊着，虽然内心里感到深刻的失望与悲哀，但他们并不后悔。不过他们现在是悄悄地工作着，不像从前的轰轰烈烈了；他们现在是孤寂地工作着，己没有从前的安慰与鼓励了。假使他们不是为了对于那岸的信心，假使他们没有对于后起青年们的深爱，他们便会支不住这个形神交伤的苦生活了。”

不顾社会的反对，不顾愚人(我说是“聪明人”)的取笑，不怕干枯单调，不惜裂肤折⻣，拼命耐着去做造桥的苦工；关于那无数的同伴都半途废工地回去了，他们还是死守在那将成未成的桥边，对于腐败的社会始终不肯投降一这正是那最能干踏踏实实的真实工夫的傻子！天地间只有傻子才会殚精竭忠死而后已地去做造桥的苦工；只有傻子才会大煞风景地谢绝社会款待他们的盛意；只有傻子才会至死不肯抛下他们的工具；只有傻子才会不呼不叹不顾成败地去积极完成他们的悲天怜人的苦心。这都是牺牲自己，责备自己，这也是傻干。这是奇特古怪的人生观，这是傻子主义的人生观。只有贾波林这种傻子，才会以一个穷措大的身份匹马单枪到阿拉斯加去寻金；聪明人哪里会干这等傻事？一个大商店愿出几十万金元的代价请他去作十五分钟的广告演说，这是社会上绝无仅有的极优渥的礼遇；但贾波林不特不领情，还要气忿忿地说一声“贾波林是买不动的！”聪明人又哪里会干这等傻事？我们今日不能不承认我们的世界里是傻子太少，聪明人太多。整个社会里大家都想取巧，想占便宜，想偷工，想玩手段。一个民主国的政府治理了一个地大物博的国家五六年，公债发了几万万，“空头支票”开了几十打，全国人民依然是洋米洋面为活，依然是在匪窟里偷生。一个政党替国家造了无数的战乱，不特自己不认账，还要骂老百姓没有治国的能力。卖弄笔墨的人⻣子里还免不了文丐的嫌疑，先是摆起大文家的架子。做学生的课堂没有上，图书馆不肯进，便先打算到党部里去揹油分赃。这些都是社会上大多数的聪明人干的好事，傻子是决不会干的。傻子们干事处处是以是非作标准，不是以大多数人底意见作标准；大多数人底意见总是错误的。他们对社会总是不迁就，不苟且，不软化，不妥协。他们干的都是大多数的聪明人所不想干不敢干的傻事，所以他们一干之后，一部分顺从社会的人会骂他们是反革命反动，大多数的人会骂他们是怪人，傻瓜，理想家，洪水猛兽。除非是有极坚强的忍耐心和自信心，极伟大的道德上的勇气，谁也不肯去做傻子，谁也不肯去干傻事。如今整个的社会都充满了聪明人，替我们造桥的傻子真是太少了。有时偶尔有一两个傻子插足其间，那聪明人便会觉得芒刺在背，怪不舒服。因为傻子们的傻干，处处可以揭穿社会的黑幕，处处可以抢了聪明人偷工减料的生意，情面既不讲，太不圆滑，不会做“顺水人情”，不懂得人情世故。他们不把傻子们排除净尽决不甘心。但我们从今而后如果还想造桥顺利，渡河成功，我们似乎还是不能不来做一做傻子，干一干傻事；我们再不能学那班享成福的聪明人只管在我们的后方捣乱了！

我们的陈先生在那篇文章里有一种错误的看法，她似乎以为这一座桥—经造成之后，我们的事情便算完了。她说:

“若是你们的人生观也是懶情，自私的，那么，你们即使能凭一个桥，平平易易地渡到了那岸去，请问究竟有什么意义？”

这是说，那班懶人平平易易地渡过河去之后，虽则没有什么意义，虽算是渡过河了。其实，傻子们底事业是永生永世不会终了的。傻子们造好一座桥过渡到新大陆之后，新大陆底那边又会有一条河阻拦着需要他们去造桥了。这一班聪明的懒人渡得河时，那原来的新大陆又早己成了风日所蚀虫蛇所据的古堡废墟了。

如今在我们的前面有两条极明显的歧路：一条是做那又巧又聪明又占便宜的福人，一条是做又苦又吃亏又干枯单调的傻子。

青年朋友们，我们的中年朋友贾波林、陈衡哲己是做傻子去了，我们究竞走哪一条路呢？你们听呀，我们的大傻子陈先生在说:“不为窑姐摆台面，而为舞星开香槟，请问这岂是恋爱的进步？抛弃了缠足的木底鞋，而着上二三寸的高跟，请问又能舒服到哪里？拋弃了豕鹿般的倚赖生活，而去做那昂贵干百倍的西洋式的寄生虫，请问这是不是存自尊心的妇女们所想见的现象？元宝做成的賄赂是不要了，但田园房子，银行支票，却是不妨接受的，请问这是不是二十年前，砥节砺行的造桥者，对于我们的期望？”

我们要知道大多数人底狂热，并不一定合乎是非的标准。着上二三寸的高跟，诚然是十分欧化，但未必比缠足舒服。书籍不买学费不交来拼命置备洋服军履，诚然是很“摩登”，但末必配做领导社会的青年，开口“Thank you”，闭口“Iam sorry”诚然洋味十足，但未必比说“谢谢”、“对不起”方便。一个大学堂行开学礼时要拿新生来尽量侮学和开玩笑，诚然是很“美国化”，但末必便替学校增了什么光，青年朋友们，你们要知道傻子的事业并不是在学皮毛。他们的事业是在寻求真理，实现真理。他们没有讲时髦的福气，没有讲“摩登”的工夫。他们不特不迎合一般人的心理一而且不能不谢绝社会底优札或贿赂；所以他们必须要有伟大的道德上的勇气！你们要知道傻子是不容易做的。做傻子的先决是要惯吃亏，惯上当，不怕枯燥，不怕侮辱，百折不挠，坚苦卓绝，一切时髦移不动他的心志，一切困苦减不掉他的热心；这样才会傻干，真干！傻子的境界自始至终是一个干枯单调，没有什么便宜或福气可言的。

懂得这一点，然后知道傻子的事业是不能强人勉为其难的，傻子的事业并不是个个青年人都可以去干的。学做傻子并不像国议代表“入党”那么容易，并不是一经大人物介绍就行的。那里最时髦最圆滑的“摩登青年”，是生来就有一份做聪明人的福气；他们干不了傻子的苦作，他们没有做傻子的苦命。他们有学校的徽章做招牌，有满书架尘封的讲义做幌子；兴致一来，跳舞场电影院双双丽影，自信必受尽天下人艳羡，其乐如何。再不高头，便倒在爱人的怀里---一切都消失了，世界也没有了！他们哪里会有做傻子的苦命呢？这一班“摩登青年”还有一套时髦的惯技便是“烦闷”。跟爱人玩膩了或爱人不要他们了，便烦闷；文凭血汗不值钱，整套的洋服军履置备不成了，也烦闷；学校的学分拿不到手，烦闷社会的礼遇或贿賂不送与他们，也烦闷...⋯烦闷底极端，还有所谓自杀。如今我们应当知道，烦闷，自杀，都只是聪明人们所惯玩的把戏，傻子们是没有这些福气的。傻子们只知道傻干，不懂得什么是烦闷。谈爱情时遭摩登女郎的白眼，便只怪自己丑陋；造桥苦作时遭无数旧伴的遗弃，还并不后悔地继续工作；这是傻子们所懂得的事情。贾波林惟其是个傻子，才不会“吃醋”；陈衡哲惟其是个傻子，才不会悲观。他们也不是不烦闷，实在是超越了烦闷在烦闷中寻求快乐，在烦闷中寻求慰安。所以他们越失意便越激动，越烦闷便越勇敢。他们自始至终立下钢铁般的意志，要一辈子干到底；无论被什么横逆困苦包围他们总要杀开一条血路，无论多大的凶涛骇浪袭来他们总要千层浪里翻身。他们不甘为苦恼所困，倒要跳过苦恼去取报偿；不甘被波浪所没，倒要翻到波浪顶去翻浪花。他们防治苦恼之道是傻干，他们的除烦恼之道也是傻干。寄语多愁多病的摩登青年们，如果不嫌奔傻子们的愚陋。何妨来试一试这种“千层浪里翻身”的人生观，也许还胜似在报纸上读几十篇“如何解除青年烦闷”的文章罢。

彷徨歧路的青年朋友们，你们究竟走哪一条路？你们如果“儿女情长”，还舍不得抛弃你们的“艳福”，那么请你们还是去做那又巧又聪明又时髦又便宜的大福人，干脆别来学什么傻子吧。请你们放心去做你们的好梦；造桥的工作，交给傻子们好了。反正他们只知道傻干，央不会对你们生什么怨。他们不懂得什么是权利义务，也不会自称“公仆”一类好听骗人的名词。他们只知道在世一天，便傻干一天；活一辈子，便造一辈子的桥。这是他们的人生观，这是他们的主义。他们无论谈什么主义都要先实行他们这种根本的主义，他们这种主义是一切主义底主义。

青年的傻子朋友们，携起手来，赶上前去！我们既瞧不起那标语口号传单宜言一类大福人们自欺欺人的假工具，那么便赶快街枚疾走赶上去胼手胝足加人造桥的苦工罢！

中年的傻子朋友们，不要住手，不要灰心，我们愿意跟你仃造一辈子的桥，来跟你们做一辈子的傻子，我们来了，我们来了！

注：贾波林即卓别林 摘自《熊伟文选》22章 原载于1931年12月26日/1932年1月《天津大公报 现代思潮副刊》
`,kf=`---
created: "2025-01-17T09:40:05.571Z"
title: 人与环境的共生：主体性的塑造
slug: 15d80d1a-9b00-4058-8bdf-fb8a7e0f2cea
category: philosophy
---

什么样的境界决定什么样的人，什么样的人又塑造了什么样的环境，环境反过来再影响人，而人又继续升华境界。通常，我们习惯将“人与环境”视为两个独立的问题，但实际上，这二者密不可分，是同一个问题的两个方面。人创造环境，环境也反作用于人，而这一动态互动过程便构成了历史的轨迹。

境界：超越好坏的评价

对于境界，人们通常不会以“好坏”来区分，而是以“高低”来判断。境界的高低关乎视野的广度与深度，而非简单的价值判断。正如“谈口味无争辩，谈境界有高低”所言，境界关乎理解力、感知力和行动力的统一。

在人与环境的循环影响中，人处于能动的位置。这种能动性使得循环不是静止的“天不变，道亦不变”，而是一个动态的过程，甚至是进步的过程。那么，人之能动性源自哪里？显然，这种能力并非源于生物学，狼孩的案例已证明，基因中并不自带这种能力。这种无中生有的能力，是“主体的能力”，或者简单地称为“心”。

主体的塑造：无中生有

古人云：“种树者必培其根，种德者必养其心。” 这里的“心”，可以理解为一种德性、教化或塑造的过程。在德语中，“无中生有”可以用 Bildung 一词翻译，意指通过教化使人成为真正的人。一个孩子的成长，并非人类生物潜质的自然显现，而是精神从潜在到自觉的过程。精神唯有当其自我意识到存在时，才真正存在。

对于一个年幼的孩子而言，他尚未完全成为“人”，我们或许可以称他为“小东西”。在西方近代自由主义的观念深入人心之后，教育被认为需要尊重孩子独立的人格。然而，一个尚未成长为“人”的孩子，并无所谓人格可言。教育的本质，是教导他如何成为人，是主体性的塑造。

教育的核心：主体能力的培养

主体能力的核心在于通过对普遍原则的认知，克制、延迟、甚至超越个人欲望的满足。这种能力需要在奖惩体系中逐步建立。孩子通过惩罚与奖励的积累，会意识到自己的幸福并不取决于外界具体的事物，而取决于父母的意志。正是在这种“不自由”的约束中，自由的主体性得以诞生。

在教育实践中，我观察到一个常见的错误情境：孩子不小心被桌子绊倒后，他的母亲会立即打桌子哄孩子，而父亲可能冷眼旁观或继续玩手机。这种行为有三处重大错误：
	1.	错误归因：孩子的痛苦被归咎于桌子这一外物。
	2.	转移主体：让孩子将情绪迁怒于他物，失去主体性。
	3.	父母失职：未能引导孩子正确面对问题。

正确的做法应该是：父亲制止母亲干涉，让孩子自己爬起来。当他站起身并停止哭泣时，再由母亲安慰他。这一过程使孩子感受到三种意志的存在——父亲的规则、母亲的关怀以及他自身的力量。这正是教育的核心：培养主体性，让孩子学会面对挫折和责任。

现代艺术的映照：主体与意义

现代艺术让人感到困惑甚至不适，它脱离了传统的宏大叙事，直接揭示了人类文明的深渊。艺术家用废弃的工业材料雕刻，用立体主义解构现实，用达达主义嘲讽权威。这些作品看似丑陋、荒谬，却直面时代的虚无与矛盾。

普通人对现代艺术的反感，源于它太过真实地暴露了人类的不安与空虚。它不仅是对传统的叛逆，更是对现代社会繁荣假象的揭露。在这场文化运动中，自由与反叛被推向极致，而意义也随之被重新定义。

现代艺术反映了一个真相：传统价值和宏大叙事正日渐式微，而在新的语境中，人类必须直面自身的困境。正如教育塑造主体性一样，现代艺术也在探索个体如何在时代的深渊中重新找到意义。

结语：无中生有的功夫

主体的塑造，是一场“无中生有”的功夫。正如孟子所说：“必有事焉，勿助勿忘。” 成为主体的过程，是面对自身责任与自由的过程。孩子在家中感受到的挫折，是他日后面对社会挑战的演练。只有经历过磨砺，才能在复杂的现实中站稳脚跟。

教育如此，艺术亦然。它们都在塑造人类的主体性，让我们在不断变化的环境中，找到自己存在的意义。
`,Sf=`---
created: "2024-12-26T16:20:01.432Z"
modified: "2024-12-26T16:22:01.387Z"
title: 爱的坚执
slug: 2
category: philosophy
---

（一） 有个孩子整天独自呆在一帮陌生人中间，此刻想到该回家了，但害怕单独回去，而实在又想再尽可能地多呆一会儿，他就对另几个或许想早点离开的较年长的孩子说：“等着我”，于是，那几个孩子就应这个孩子的请求而等着。 有两个年龄相同的人，其中一个比另一个要先走，后者对前者说“等着我”，于是，前者便应后者的请求而等着。 有两个人愉快的计划着结伴旅行，但其中一个病了，而且欠着别人的前无力偿还，他就对另一个说：“陪着我”，这另外一个人便答应了他的请求。 当一个恋爱中的少女发现要同她所爱的人结合将有很大的、或许是很复杂的困难时，她对他说：“等着我”，于是，他便如所要求的那样等着。 所有这一切均非常美好而值得称道：如此这般的陪伴着另一个人。但是，是否正是爱在作如此这般的等待，我们还看不出。 也许，等待的间隔过于短暂，以至于实在无法表明，那决定着一个人如此等待、在某种决定性的意义上被称作爱的东西有多深。 也许，等待的时间流逝得如此缓慢，以至于那个较先走的人说：“不，我不能再等你了，否则会太耽误了我自己。”也许，生病的人病程迁延，以至那位朋友说，“不，我不在等你了，我须得单独一个人去了。”也许，无力偿付债务的人把时间拖得太久，以致那另一个说，“不，我不能再等着你了，我必须现在就拿到我的钱。”也许，同少女结婚的前景变得如此遥远，以致那位恋人说，“不，我不能再等着你了，我的婚姻只属于自己，我的生命不允许我再这样地把婚姻推迟下去，年复一年地企盼着那渺茫的东西。”——然而，爱坚执着。

爱之坚执的事实，或者，更准确地说，关于爱是否在这里或那里坚执着、还是中止了的问题，是如此错综复杂，总是萦绕在人们的思想中，经常出现在人们的话题里，它是诗作中炙手可热的主题。 若爱坚执着，人们视为可嘉；若爱不持久，消逝或发生改变，人们视之为卑劣。 人们认为唯前者才是真爱，后者则因其改变而不可能是真爱——甚至必然当初就不是爱。这些就是事实：一个人不可能中止爱。 如果他真的在爱，他就始终在爱；如果他不再爱了，他就不曾在爱。 因此，在爱的世界中，中止的爱有一种追溯力。我绝不会厌烦于讲述并证明这样一点：凡有爱的地方，必有某种无限深刻的东西。比如，一个人也许曾经富有过，当他不再富有时，他曾有过钱仍是全然真实的。 但是，当一个人中止爱的时候，他就从来不曾爱过。始终如此温柔的爱！多么苛刻、多么忠实于自己、多么纯洁的爱啊！

更让人感叹的还在后面！ 如果爱消逝了。 假设在一种爱、或友谊里，简单地说，就在两个人的感情中间，某种东西掺乎其中，使爱中止了，那末，我们说，这两个人之间有了裂痕。爱原本是纽带，让人彼此理解；如果爱被取代，它就消逝了，两人之间的纽带断开了，这个裂痕拆散了这两个人。 因而，这两个人之间存在着裂缝。 但是，基督教可不熟悉这种说话的方式，无法理解它，也不愿意理解它。 当某人说两人之间有裂痕，那是因为他以为，爱仅仅是两人之间的关系。 这种所谓两者之间有裂缝的说法，是未经深思熟虑的，它给人以这样的印象，似乎爱之关系仅仅是这两个人之间的事情，仿佛关涉到的第三者并不存在。 倘若双方都认为两人的关系破裂，那么，不会还有哪个人硬要反对分离。倘若双方都认为两人的关系破裂，那幺，不会还有哪个人硬要反对分离。 这两个人彼此分离，并不意味着他们不会对别人有爱的情感；因此，他们仍保持着爱的能力，只不过现在施爱在其他人身上。那个挑起破裂的人可能是占着上风的，而那无辜的人则被动无备；无辜的一方成为弱者，令人同情。 这无疑正是这个世界的状况，但从永恒的方面来理解，世界绝非如此。 因此，基督教在做什幺？ 基督教的诚挚把对永恒的关注放在个人身上，放在这两个人中的每一个人身上。 正因为这两个人曾在爱中彼此依恋，他们也就与“爱”紧紧相连。 爱并没有简单地随着破裂而消亡。 在破裂之前，在一个人割断他与另一个人的爱的关系之前，他肯定先已背离了“爱”。这一点非常重要。 因此，基督教不谈论两个人之间的关系破裂，而始终只是讲一个背离了“爱”的人会做什幺。 在两个人的裂痕里，夹杂着太多人闲的琐事，好像也没什么大不了的；但是背离了“爱”，却是与永恒相关的大事。瞧！一切井然有序，永恒掌管着纪律与秩序，在破裂关系中的受害者倘若没有背离“爱”，他仍将成为强者；假如爱只是两个人之间的关系，那幺这人将长久地处于另一个人的支配之下，如果另一个只是一个想要毁掉这种关系、寡廉鲜耻的人的话。 当一种关系仅仅是两人之间的关系时，其中那个有能力破坏这种关系的人，会始终主导着这种关系，因为一旦此人割断了它，它就破裂了。但是如果存在第三者，单独一个人就不可能做到这一点。 这第三者，如我们所说的，是“爱”本身，凭着它，无辜受害者可以不受关系破裂的打击……

但是，真正的爱者永远不会离弃“爱”。 因此，对他来说，绝不可能发生破裂，因为爱是坚忍的。 再次以两人的关系为例。如果一方要破坏这种关系，另一方能阻止关系的破裂吗？看来，的确这两人中的任何一人都足以打破这种关系，并且，如果关系被破坏，就会有裂痕。某种意义上说，这是千真万确的。 但如果爱者始终不离弃“爱”，他就能避免这个破裂，他就能够创造奇迹。 因为，只要它坚执着爱，破裂绝不可能真的发生。通过坚执（在这样的坚执中，爱者与永恒结盟），他征服了过去，他将在过去中、并通过过去，使破裂的东西转变为某种可能实现的未来关系。一个人如果以过去的眼光来看裂痕，这裂痕会在时间的长河里变得明显起来。 那坚忍的爱者，通过坚执而拥有未来、拥有永恒。 以未来的眼光看裂痕，这裂痕就不再是伤害，相反，它变成了可能性，幸福的可能性。以未来的眼光看裂痕，这裂痕就不再是伤害，相反，它变成了可能性，幸福的可能性。 永恒的力量属于可能性，因此，坚执的爱者必须坚执于“爱”中，否则，那过去会逐渐地获得力量，而那裂痕也就日益明显起来。永恒的力量属于可能性，哦，只有永恒的力量，才能在每个重要关头，将过去的裂痕变为未来的可能，爱拥有这种坚执的力量。

我将如何来描述爱的这种作为呢？哦，我会毫无倦怠地描述下去，赞颂这种难以言传的喜乐、这种一被思及边给人以启示的作为！

（二）

某种出于本能的好性情，某种出于仁慈的同情和帮助之心（它是我们深为感激的），必须时刻已经历时间考验的；也许累月经年，它懈怠了，也许进展缓慢，过了很长一段时间，它终于不耐烦起来——这太正常了。时间长了，人们自然会去清点财产；在商业世界里，一次突如其来的挤兑贷款引起了一家商号的破产，也是很平常的现象。 但在精神世界里，漫长的时间本身压垮了许许多多的人，人们有足够的精神力量来对付一瞬间，但在一个漫长过程中，他们就变得不可靠了。 然而爱却坚执着。 哦，诗人和小说家多幺地不懂得怎样去描绘万事万物的反复无常！ 他们不知道怎样去展示时间的力量，时间可以征服在自身中存在的一切事物，那是征服最伟大、最强有力、最光荣的成就的力量；那是征服世界的奇迹的力量——这些奇迹在时间中变成几乎辨认不出来的废墟；那是征服最不朽的名字的力量——这些名字在时间中消逝在传说的模糊混沌之中。

但是，对于此时此刻坚执着的爱，难道会因为某种变故，使它虽然坚执着、却在时间中被改变（只不过这改变不是它的错，而因归咎于某种遭遇）吗？ 因此，这当中的关系或许是如此：爱坚执着，没有什幺环境去改变它或迫使它放弃自己，但它却在一种我们称之为衰老的变化中被改变，然而，我们虽可以如此谈论这同一个爱，它却绝没有失败。

（三）

爱坚执着——它永不止息。因为，精神的爱本身就是永恒生命的活水源泉。 是的，这个爱者随着岁月的流逝而苍老，在时间长河的某一刻死去，但是这并不证明什么，因为他的爱永远年轻。在他的爱中，他并没有如尘世的爱那样去抓住暂时的存在，暂时的存在是尘世的爱所依凭的；对于他的爱来说，永恒总是真正的品格。当他死去的时候，他便是达到了目标；他的死只是表明他没有徒劳地等待。 哦，当那位少女死去的时候，我们便说：“不幸啊，看来她是白白地等了一场。”难道那不朽因此就会是孱弱的吗？ 但是，是那个爱者不朽的是什幺呢？ 不是那坚执的爱是什幺？ 尘世的爱属于现世，即使它是暂时的事物中最美丽的，也还是万物中的脆弱造物。因此，这里有一个更为深刻的矛盾。那个少女没有错，她曾经并且始终忠实于她的爱。 但是，她的爱经年累月，多少有点变化。 这种变化在于尘世的爱的本性。 因此，矛盾就在这里：一个具有最真诚的意愿并且愿意牺牲的人，他的坚定也只有相对性，或者说，他坚执的东西本身并不永恒——尘世的爱无法永恒。也许，那位姑娘还不解这层意味，但正是爱本身中的这种矛盾，使她的死更为悲凉。 少女的早逝谈不上具有永恒的庄严，与其说是其中的精神、情操带给了诗人以灵感，倒不如说是世事沧桑的悲凉在起作用。

那位少女耗尽了自己的生命。 即使“他”来了，在她死之前来了，那也仍然太晚了。 她仍然爱着，但时间已削弱的她的愿望，她为这愿望而活着的，而同时这愿望也耗尽了她。 反之，在最深刻的意义上，那位坚执着的爱者并没有变的孱弱，他的爱没有消耗殆尽。 倘若那个误解他的人，那个对他变得冷漠的人，那个恨他的人回来了，他会发现他没有改变，仍对永恒怀着一样的渴望，并对尘世一样的处之泰然。他的爱是永恒的，他抓住永恒，信赖永恒。 因此，他在每一瞬间企盼着他永恒地期盼着的东西；因此，他毫无不安，因为在永恒中有足够的时间……

在坚执的爱中有怎样的忠诚啊！我们绝不是想贬低那位爱着的少女，好像她在经年累月后的衰老凋谢，她在岁月流逝中、随着爱恋升华而改变的红尘之爱，是一种在她身上的不忠诚似的（哦，一种不重；一种对一个不忠恋人的不忠！）东西，可是——唉！这真是令人费解的自相矛盾：忠诚当然是尘世之爱的极致，然而，相对于永恒，这种忠诚沦为不忠，因为尘世的爱不是永恒的。 矛盾不在这位姑娘身上，她是忠贞不渝的；矛盾——令这位姑娘痛苦的原因——是在于这样的事实，即尘世的爱不是永恒的爱。 因此，本身不是永恒的东西无法把握住那永恒的忠诚。 再来看另一种忠诚！ 不管那误解的人、那敌人、那仇恨的人在什幺时候、在哪个钟点想要回到这个爱者面前，这种忠诚坚执着、永不改变，没有丝毫的减弱，在每一个瞬间都相同——这是怎样的爱的忠诚！ 这个爱者坚执着，他永不孱弱，在坚执中他得到了永恒的回报，他履行了他的忠诚、对爱人施展了爱的奇迹，我们不得不这样看，他本人也如此看……

这就是爱者。如果在此时之前，他已经改变，那么，一切事物中最美好的东西、那重新和好的片刻，都会成为一种没有结果的努力、一种徒劳的尝试——爱者避免这种情况，因为他坚执着，永远不会衰竭。 那宽宥的获得是如此容易，就如同于一个久违的人相遇一般；那爱的对话可以立刻非常自然，就如同与一个人开始一次谈话一样；那散乱的步伐可以是迅捷的步子，就如同这步伐是在两个第一次开始新生活的爱人之间走出的那样——一句话，在他那里，没有任何不快的瞬间，哪怕是一秒钟、一刹那：是爱者带来这种情形，因为他坚执着，并永不孱弱。

（王德峰译朱晓红校） 本文作者：克尔凯郭尔 转摘自《西方宗教哲学文选》胡景鈡张庆熊主编上海：上海人民出版社，2002 第280页——286页
`,Tf=`---
created: "2025-09-22T06:27:36.409Z"
modified: "2025-09-29T10:37:53.638Z"
title: 从仁心到礼教，由生机至虚无：《红楼梦》与儒家思想的异化之路
slug: 20250922
category: philosophy
---

### **引言**

《红楼梦》的终局，“好一似食尽鸟投林，落了片白茫茫大地真干净”，是中国文学史上最令人震撼也最发人深省的意象之一。它远不止于一个贵族世家的衰亡录，更是一个宏大文明的深刻隐喻。这幅“白茫茫”的图景，描绘的并非物质的彻底湮灭，而是**意义的绝对虚无**（die absolute Leere des Sinns）——一个所有价值、情感、追求最终都被揭示为空洞与徒劳的精神荒原。

这一悲剧性的终点，并非历史的偶然，而是儒家思想在中国社会漫长实践中，其核心精神被不断异化、抽空、直至僵化的必然结果。本文打算开个小头，剖析儒家如何从其充满人本关怀与内在活力的原始理想——“仁礼合一”，一步步演变为《红楼梦》中所批判的、那种“一个完全被僵化、外在化的‘理’所统治，而彻底窒息了内在真情、创造力和个性的社会”的哲学根源。并在此基础上，探讨当代社会在解构了一切传统权威之后，所面临的虚无主义困境，继而探索可能的超越之道。

---

### **第一章：理想的蓝图——孔孟原儒中的“仁”与“礼”的动态平衡**

儒家思想的创始阶段，以孔子和孟子为代表，其核心追求是构建一个基于道德自觉的、和谐有序的社会。这一大厦的两块基石是“仁”与“礼”，二者构成了一个富有张力的动态平衡体。

**1.1 “仁”：内在的道德情感与精神根基**

“仁”是儒家思想的灵魂与最高道德范畴。在孔子那里，“仁”最直接的解释是“爱人”（《论语·颜渊》），这是一种发自内心的、真诚的对他人的关怀与善意。它并非外在强加的戒律，而是主体的一种内在德性和心理状态。

“仁”具有实践上由近及远的差序性以及人本身由顿及渐的差异性，孔子对于不同的学生对于“仁”的提问回答也有所不同。“孝悌也者，其为仁之本与！”（《论语·学而》）。对父母的孝、对兄长的悌，是“仁”心萌芽和生长的最初土壤，继而才能“泛爱众”，推广至更广泛的社会关系。颜渊问仁答曰“克己复礼为仁。一日克己复礼，天下归仁焉。为仁由己，而由人乎哉？”仲弓问仁答曰“出门如见大宾，使民如承大祭。己所不欲，勿施于人。在邦无怨，在家无怨。” 樊迟问仁答曰 “爱人。”但是究竟什么是仁呢，孔子似乎没有给出定义来，

“仁”究竟是什么，

孟子极大地发展了“仁”的学说，为其奠定了坚实的人性论基础。他提出的“性善论”和“四端说”，认为人天生具有“恻隐之心、羞恶之心、辞让之心、是非之心”，这“四心”分别是“仁、义、礼、智”四种德性的端倪（《孟子·公孙丑上》）。“人之有是四端也，犹其有四体也”，道德能力就像人的四肢一样，是先天固有的。因此，“仁”的实现路径是向内探求，“反求诸己”，将固有的善端“扩而充之”，而非向外苦苦追寻。

**1.2 “礼”：外在的社会规范与文明形式**

“礼”在最初是指一套源自氏族社会祭祀传统的礼仪、习俗、制度和规范。孔子对其进行了人文主义的转化，使其不再是神秘主义的仪式，而是维系社会秩序与表达人文关怀的文明形式。

“礼”的功能在于“节文”二字，即调节和文饰人的情感与行为。“恭而无礼则劳，慎而无礼则葸，勇而无礼则乱，直而无礼则绞。”（《论语·泰伯》）恭敬、谨慎、勇敢、直率这些本是美德，若无“礼”的调节，便会过犹不及，流于劳倦、畏缩、作乱、尖刻。因此，“礼”是为了让社会互动和情感表达更加恰当、优雅、和谐，即“和为贵”。

**1.3 “仁礼合一”：理想化的共生关系**

在孔孟的理想设计中，“仁”与“礼”是内容与形式、内核与外壳的关系，相辅相成，缺一不可。

*   **“仁”是“礼”的精神内核**。孔子断言：“人而不仁，如礼何？人而不仁，如乐何？”（《论语·八佾》）一个缺乏仁爱之心的人，即便演习繁复的礼仪，那也只是毫无意义的虚伪表演。“礼”的生命力完全来源于内在的“仁”。
*   **“礼”是“仁”的实现途径**。“克己复礼为仁”（《论语·颜渊》），通过约束自我以使言行符合“礼”的要求，正是达成“仁”的境界的实践路径。“礼”为“仁”提供了具体的行为指南和培养范式。

这一阶段的儒家，可称为 **“礼的教化”** 。它旨在通过“礼”这套人文教化的体系，由外而内地涵养和塑造人的德性，最终目标是培养出“文质彬彬”的君子，达到“从心所欲不逾矩”的最高境界——内在欲望与外在规范完美融合的无碍状态。此时的“礼”是活泼的、充满人情味的、具有弹性的。

---

### **第二章：历史的异化——“礼”的僵化与神圣化之路**

然而，儒家思想在之后的历史发展中，尤其是为了适应中央集权帝国的统治需要，其“仁”与“礼”的平衡被逐渐打破。“礼”的一端被不断强化、抽象化和绝对化，最终脱离了“仁”的情感根基，异化为一种压抑性的统治工具。

**2.1 荀子：“性恶论”与外在规范的凸显**

战国末期的荀子虽属儒家，但其“性恶论”开启了一个关键转向。他认为“人之性恶，其善者伪也”（《荀子·性恶》），“伪”即人为努力。既然人性本恶，那么善就不是内在的萌芽，而必须依靠**外在的“礼义法度”** 来教化、矫正和塑造（“化性起伪”）。荀子极度强调“礼”作为社会分工和秩序划分的功能性。这一思路虽然强调了后天学习和社会规范的重要性，但也潜藏着将“礼”与人性对立、使其成为一种外在强制力量的风险。

**2.2 董仲舒：天人感应与“三纲”的神圣化**

汉代董仲舒提出“罢黜百家，独尊儒术”，为儒家与政治权力的结盟奠定了理论基础。他将儒家伦理与阴阳家的宇宙论结合，构造了“天人感应”的神学体系。在此体系中，“君为臣纲、父为子纲、夫为妻纲”这“三纲”被提升为永恒不变的“天道”的体现，具有了神圣不可侵犯的绝对权威。儒家伦理从此与政治权力紧密捆绑，成为论证统治合法性的意识形态工具，“礼”开始披上宗教性的神圣外衣。

**2.3 程朱理学：“天理”的绝对化与“存天理，灭人欲”**

宋代程颢、程颐、朱熹等理学家，为应对佛道思想的挑战，构建了庞大的理学体系。这是“礼”彻底异化为“礼的宗教”最关键的一步。

*   **“天理”的建构**：朱熹将“理”塑造成宇宙间至高无上的、先验的、绝对的本体。而人间的伦理道德——“三纲五常”，即是“天理”在社会生活中的具体展现。
*   **“人欲”的污名化**：与“天理”相对的是“人欲”，即人的自然情感、欲望和需求。朱熹认为“人欲”是遮蔽“天理”的污垢，提出了“存天理，灭人欲”的著名口号。
*   **“礼”的彻底僵化**：至此，“礼”完全脱离了与内在“仁”心的有机联系，不再是真情实感的恰当表达，而是变成了必须绝对服从的、外在的“天理”规条。**“礼的教化”彻底异化为“礼的宗教”**。其关注点从内在德性的培养，彻底转向了对个体外在行为是否符合“理”的严苛审查。人的真实情感、个性与创造力，在这种压抑性的框架下被系统性地视为需要剿灭的“人欲”。

---

### **第三章：实践的困境——明清社会的窒息与《红楼梦》的预言**

明清两代将程朱理学奉为官方正统思想，并通过两大制度武器将其渗透到社会的每一个角落，造就了《红楼梦》中那个“诗礼簪缨之族”却“除了那两个石头狮子干净，只怕连猫儿狗儿都不干净”的虚伪世界。

**3.1 科举制度：思想的桎梏与知识的异化**

朱熹注解的《四书》成为科举考试的唯一标准答案。天下读书人寒窗苦读，不再是“读书明理”以求人格完善，而是将圣贤之言视为获取功名利禄的“敲门砖”。儒家思想彻底**工具化、八股化**，失去了其思想的活力与批判精神，沦为一种空洞的文本游戏和意识形态的再生产工具。贾政对贾宝玉的逼迫，正是这一异化现象的生动写照。

**3.2 宗族制度：基层的规训与情感的压抑**

宗族组织利用理学教条制定家规族法，成为执行“礼的宗教”的最基层单位。它对族内成员（尤其是女性和晚辈）的生老病死、婚丧嫁娶、行为举止进行了无所不在的监视和管控。个体的情感、欲望和选择必须无条件服从家族的利益和礼法的规范。《红楼梦》中贾母、王夫人等利用“孝道”等礼法对宝玉、黛玉等人进行的控制，正是宗法礼教压抑生命的体现。

**3.3 《红楼梦》：异化世界的终极图景**

曹雪芹的《红楼梦》正是这个高度异化世界的艺术结晶与深刻批判：

*   **贾政**是体系的卫道士。他看似方正不阿，实则空洞僵化。他对宝玉的“爱”完全表现为对其是否符合“礼”的规训，而非基于理解的父子真情。他是“礼的宗教”的忠诚执行者，也是其牺牲品。
*   **薛宝钗**是体系的“完美产品”。她“行为豁达，随分从时”，深谙世故，顾全大局。但她的冷静、克制与完美，恰恰是因为她已成功地将外在的“理”彻底内化，从而系统地压抑了自身的“情”。她的“好”，是体系所定义的“好”，却令人感到一种无生命的寒意。
*   **贾宝玉与林黛玉**是体系的叛逆者与殉道者。他们的价值核心是“情”，是个体的真实感受与灵性。宝玉厌恶功名利禄，黛玉追求真情至性，他们的所有言行都与世界的“理”格格不入。他们的爱情悲剧，并非是简单的外力阻挠，而是**活生生的“人”与僵死的“理”之间不可调和的结构性冲突的必然结果**。

这个系统**高度内卷**，所有人都在扮演系统要求的角色，耗尽所有资源（经济的、情感的）来维持表面的“仁德”与“繁荣”，但其内在早已**价值空虚、精神破产**。因此，它的崩溃不是偶然的，而是结构性的；其最终的“白茫茫大地”，是**意义的绝对虚无**——一个抽空了所有真实情感与创造力的世界，在逻辑上的必然终点。曹雪芹以其惊人的艺术洞察力，为这个僵死的体系敲响了哲学的丧钟。

---

### **第四章：现代的回应——解构的反叛与虚无的幽灵**

历史车轮驶入现代与后现代，《红楼梦》所批判的“礼的宗教”其形式虽已改变，但其精神幽灵——即各种形式的**僵化规训、宏大叙事与外在权威**——依然以新的面貌存在。年轻一代的反抗，与全球性的后现代思潮相呼应。

**4.1 解构主义：对权威的祛魅**

后现代主义及解构主义的核心，是对一切**宏大叙事（Große Erzählung）** 的怀疑。它们揭示，所有被视为“天然”、“真理”的规则、价值和体系（如传统的家庭观、成功学、社会时钟），并非永恒不变，而是由特定的历史、文化、权力关系所**建构（konstruiert）** 出来的。年轻一代用质疑、嘲讽、亚文化创作（如“非主流”文化）等方式，解构长辈权威和社会既定范式，这正是为了打破“理所当然”的魔咒，争夺对自我生活的定义权。这场解构是解放性的，是对《红楼梦》中那种压抑性结构的延续性反抗。

**4.2 虚无主义的挑战：白茫茫大地的现代版本**

然而，**解构若仅仅停留在否定与批判，便与它试图反抗的虚无主义成为了共谋**。它将我们赖以生存的意义世界揭露为一场虚构后，若无法提供新的意义生成方案，其结果便是更大的迷茫与失重——“一切皆虚妄，一切皆允许”的苍白自由。这仿佛是“白茫茫大地”在现代精神世界的重演：旧的神坛已被推翻，但新的信仰无处建立，人漂浮在价值的真空中。


### **第五章：重构的可能——于虚无之上，本真地创建新的意义**

面对“白茫茫大地”般的**虚无（das Nichts）**，滑入彻底的**虚无主义（Nihilismus）** 并非唯一的道路。海德格尔的哲学，尤其是其关于**此在（Dasein）** 的本真性、**向死而生（Sein-zum-Tode）** 和**决断（Entschlossenheit）** 的思想，为我们指明了一条穿越虚无、重建意义的路径。这并非要建造另一座压迫性的形而上学大厦，而是要求**此在**以一种**本真的（eigentlich）** 方式重新居于此世。

**5.1 直面虚无：作为意义之空的**自由（Freiheit）**与**畏（Angst）**之启示**

海德格尔认为，对**虚无（das Nichts）** 的体验并非纯粹的否定，它通过一种根本性的**现身情态（Befindlichkeit）**——**畏（Angst）**——袭来。**畏**不同于怕，怕之所怕者是世内的某个具体存在者，而**畏**之所畏者乃是“在世界之中存在”本身，即在世本身。它使**此在**感到茫然失所，一切世内存在者连同他人共在都沉入一种无意义之境。然而，正是这种**虚无（das Nichts）** 的**启示（Offenbarkeit）**，迫使**此在**从**常人（das Man）** 的**闲言（Gerede）**、**好奇（Neugier）** 和**两可（Zweideutigkeit）** 的**非本真（uneigentlich）** 日常状态中惊醒。

在这“白茫茫”的**虚无（das Nichts）** 中，一切现成的、被给予的价值和意义都失效了，**此在**被**抛（Geworfenheit）** 回到其最本己的**能在（Seinkönnen）** 面前。这揭示了一种最根本的**自由（Freiheit）**——**为此在自身之故而存在的自由**。意义的真空，恰恰为**此在**提供了摆脱**常人**统治、**本真地（eigentlich）** 为自己选择并承担其存在的绝对可能性。

**5.2 向死而生：**决断（Entschlossenheit）**与**本真的将来（eigentliche Zukunft）**

如何应对这种**自由（Freiheit）** 的重负？海德格尔提出了**向死而生（Sein-zum-Tode）** 。“死”在此并非一个生理事件，而是**此在**最本己、无所关联、确知而不确定、超不过的可能性。**本真地（eigentlich）** 先行到死中去，就是清醒地领会到自身存在的有限性和独一无二性，从而**决断（entschließen）** 性地从**常人**的幻梦中抽身，回到自身。

这种**决断（Entschlossenheit）** 不是一次性的选择，而是**此在**持续地在其**操心（Sorge）** 的整体结构中，依循其最本己的**能在（Seinkönnen）** 来展开其生活的态度。它让**此在**从**非本真的（uneigentlich）** **将来（Zukunft）**——即一种尚未到来的“现在”——转变为**本真的将来（eigentliche Zukunft）** ，即**此在**在其**筹划（Entwurf）** 中先行跑向其自身的终点，并以此**将来**的方式回到其实际性（Faktizität）中，从而**当下化（gegenwärtigen）** 其存在。

**这意味着，意义不再是现成存在于世界某处等待发现的宝藏，而是**此在**在其有限的生命中，通过其**决断**性的**筹划**和**行动（Handeln）** ，不断**生成（Geschehen）** 和**建构（Stiftung）** 出来的。** 它发生于**此在**“先行-而后-返回”的整体性时间性（Zeitlichkeit）运动之中。

**5.3 共在的重构：**本真的操持（eigentliche Fürsorge）**与**历史性（Geschichtlichkeit）**的传承**

**此在**的本质是**在世之中存在（In-der-Welt-sein）**，这必然包含**与他人的共在（Mitsein mit Anderen）**。意义的**重构（Rekonstruktion）** 绝非孤独自我的闭门造车，而是在**共在**中的共同**筹划**。海德格尔区分了两种**操持（Fürsorge）**：一种是**代庖式的、支配性的操持（einspringend-beherrschende Fürsorge）**，这跳过了他人的**操心**，实为一种压制；另一种是**先行的、解放的操持（vorspringend-befreiende Fürsorge）**，它帮助他人看透其**操心**，并**将其**自由（Freiheit）** 归还于他，让他得以**本真地（eigentlich）** 为其自身而存在。

因此，新的意义共同体——无论是家庭、友谊还是志趣相投的社群——的理想形态，应建立在**本真的操持**之上。成员间不是用新的教条彼此束缚，而是共同**决断**，互相解放，在对话与共同行动中，为这个共同体**筹划**并**承担（Übernahme）** 其共享的命运（Geschick）。

这个过程具有深刻的**历史性（Geschichtlichkeit）**。**此在**不是凭空创造，它总是被**抛入**一个特定的历史传统与语境中。**本真的重构**意味着**重演（Wiederholung）**传统：不是简单地重复过去，而是**决断**性地面对被传承下来的可能性，**选择（Wählen）** 其英雄，并在此基础上**筹划**未来的战斗。这意味着可以对儒家传统进行**解构（Dekonstruktion）** 后的**重演**，即剥离其**异化（entfremdet）** 为僵化礼教的外壳，而**重获（wieder-holen）** 其“仁”之中所蕴含的、对于**共在**和**牵挂**的**本真（eigentlich）** 洞察，并将其融入当下的生存**筹划**之中。

#### **结语：于白茫茫大地之上，诗意地栖居**

《红楼梦》所揭示的“白茫茫大地”，是**存在（Sein）** 被彻底**遗忘（Vergessenheit）** 后的**虚无（das Nichts）** 景象。然而，依循海德格尔的思考，这**虚无**并非纯粹的终结，它更是一种严峻的**呼唤（Anruf）**，呼唤**此在**从其**非本真（uneigentlich）** 的**沉沦（Verfallen）** 中**收回（zurücknehmen）** 自身，**本真地（eigentlich）** 承担起其**被抛的（geworfen）** 自由。

意义的**重构（Rekonstruktion）** 之路，因而是一条**存在论（ontologisch）** 上的**本真化（Eigentlichwerdung）** 之路。它要求我们**决断**地**面向死亡**，清醒地认识到自身是意义的**作者**和**承担者**；它要求我们在**共在**中，以**解放性的操持**代替**支配性的操持**，共同**筹划**属于我们时代的、**历史性的**命运；它最终邀请我们，在承认**虚无**的前提下，不是陷入绝望，而是以一种“**向死而生**”的勇敢和“**诗意地栖居**”的智慧，在这片清空了虚假偶像的“白茫茫”大地上，辛勤耕耘，建立起无数座基于**本真真情**与**自由决断**的、星罗棋布的意义家园。这，或许是对《红楼梦》之悲怆最深刻的回应与超越。
`,Ef=`---
created: "2026-01-21T02:40:31.245Z"
modified: "2026-01-21T09:26:23.159Z"
title: 离道而行：中庸视角下的现代人格异化
slug: 202601211040
category: philosophy
---

## 一、异化并非性格问题，当“教”反噬了“性”

现代社会关于人格的讨论，往往以“适应性”为最高标准。
外向、表达、连接能力被视为优势；
内向、克制、独处能力则被频繁归入需要修正的对象。

回到《中庸》第一章，这种判断在结构上就已经站不住脚。

> 天命之谓性，
> 率性之谓道，
> 修道之谓教。

“性”不是后天塑造的结果，
而是个体在存在之初就被赋予的结构与限度。
“道”不是外在规范，
而是顺着这一结构展开的自然运行方式。
而“教”，才是后天为了适应环境、组织与秩序而施加的训练。

人格异化，正是从这里开始的：
当“教”反过来评判“性”，
当适应策略被误认为存在价值，
个体便被迫偏离自身结构而运行。

这并不是某种性格的失败，
而是结构关系的颠倒。

---

## 二、现代社会为何系统性地偏好“外向型人格”

《中庸》并不区分内向或外向，
但它明确区分了两种运行逻辑：

* 顺性而行  亲民（道）
* 为适应而修正  新民（教）

现代社会高度依赖规模化协作、持续流通与即时反馈。
在这样的系统中，
表达效率高、反馈依赖强、情绪外显的个体，
更容易被组织、被动员、被管理。

因此，外向并非更“真实”或更“高级”，
而是**更容易被系统利用**。

而内向者由于：

* 对外部刺激阈值更高
* 能在低反馈状态下维持心理稳定
* 更依赖内部评价系统

在结构上就不利于被持续动员。

于是，社会并不是在描述人格，
而是在进行价值重命名：

* 有利于系统运转的特质，被定义为“优点”
* 难以被系统吸收的特质，被标记为“缺陷”

这正是异化的第一层：
**人格被功能化，而功能被道德化。**

---

## 三、“慎独”：被现代社会彻底误解的能力

> 道也者，不可须臾离也；可离，非道也。
> 是故君子戒慎乎其所不睹，恐惧乎其所不闻。
> 莫见乎隐，莫显乎微，故君子慎其独也。

在现代语境中，“慎独”常被误读为道德自律，
但在结构意义上，它描述的是另一种能力：

**在没有外部监督、评价与反馈时，
个体是否仍能维持稳定的运行方式。**

这恰恰是内向型结构的优势所在。

他们的自我连续性，并不依赖于被看见；
他们的价值感，也不完全来自即时回应。

而在高度依赖可见性、互动量与存在感确认的社会中，
这种能力反而被视为“消极”“退缩”“不参与”。

慎独，于是被贬低为孤僻。

这是异化的第二层：
**真实的稳定性，被误判为问题。**

---

## 四、“中”与“和”：被效率逻辑压扁的心理结构

> 喜怒哀乐之未发，谓之中；
> 发而皆中节，谓之和。

“中”，不是情绪压抑，
而是在刺激到来之前，就已经存在的内部平衡。
“和”，也不是迎合，
而是反应本身不越过自身结构的承载极限。

而现代社会的运行方式，
却要求个体持续“发”、持续“回应”、持续“被激活”。

在这种条件下：

* 情绪被工具化
* 反应速度被等同于能力
* 克制被误解为迟钝

长期处于这种外部牵引状态的人，
表面上高度参与，
内部却逐渐失衡。

这是异化的第三层：
**系统将“失衡状态”误认为活力。**

---

## 五、人格痛苦的真正来源：违性而行

当个体长期使用并不匹配自身结构的策略运行，
痛苦几乎是必然的。

但这种痛苦，并不会被解释为“路径错误”，
而是被重新编码为：

* 不够努力
* 不够自信
* 性格有问题

个体于是开始自我修正，
试图通过强化表达、增加社交、模仿外向行为来“补足缺陷”。

在《中庸》的视角下，
这恰恰是**离道而行**。

因为：

> 可离，非道也。

任何只能通过强行维持才能成立的状态，
都不可能是“道”。

这是异化最深的一层：
**个体将结构性不适，误认为自身不足。**

---

## 六、致中和：人格不是被统一，而是被安放

《中庸》最终并未导向人格改造，
而是导向一种状态：

> 中也者，天下之大本也；
> 和也者，天下之达道也。
> 致中和，天地位焉，万物育焉。

“致中和”，不是让所有人趋同，
而是让每一种结构都不被迫越界。

人格的健康，
不在于是否符合主流模型，
而在于是否能够：

* 在低外部刺激下维持稳定
* 在必要时作出不过载的反应
* 在独处时仍然成立

当个体不再被要求违性而行，
系统才真正进入可持续状态。

现代社会真正的问题，并不在于内向者是否适应社会，
而在于社会是否只允许一种人格策略存在。

当“教”被误认为“性”，
当效率被误认为价值，
当可见性被误认为存在本身，
人格异化便成为常态。

《中庸》并未提供解决方案，
但它提供了一把尺度：

> 不是你是否像他们，
> 而是你是否顺着自己而活。

在一个无法识别自身结构的体系中，再努力的奔跑，也只是在加速自我的磨损。
`,Pf=`---
created: "2025-01-17T09:40:58.850Z"
title: 禁锢在没有节日的时代
slug: 2db24177-d218-4dc9-afc3-666504281d85
category: philosophy
---

如今，我们生活在一个没有节日的时代。什么是节日？语言自身已经向我们揭示了它的本质。人们在德语中说，我们庆祝（begehen）一个节日。庆祝和节日这一特殊时刻联系在一起。“庆祝”一词取消了一切目的，人们无须为了抵达某处而刻意前往。由于节日的存在，时间不再是一连串飘忽即逝、仓促的时刻。人们在庆祝节日时，如同巡视（begehen）一个空间，逗留其中。庆祝（dasBegehen）和消逝（dasVergehen）是相反的。在节日庆典中，一切都不会消散而去。在这一意义上，庆典时刻是永恒的。

哲学家伽达默尔在《美的现实性》中论述了艺术和节日的特殊关联，它们拥有一种共同的时间性：“艺术带来一种特殊的时间体验，我们因此学会了停留。也许，这种体验最好地对应于人们通常所谓的永恒。”节日是不会消逝的时刻。它是一种特殊意义上的神圣时间（Hoch-Zeit）。


卡尔·科雷尼（KarlKerényi）这样描述节日的本质：“节日不是纯粹的人的劳作，不是通常的履行义务，从日常的角度出发，人们既无法理解也不会庆祝节日。必须有神性的参与，才能使平日里不可能之事变得可能。人们将踏入一个更高的领域，在这里一切都‘如同诞生的第一天’，闪烁着光芒，崭新、‘初次’地呈现；人们和诸神同在，自身也拥有了神性，在创世的神性气息中，人们也参与了创造。这便是节日的本质。”节日是一件不寻常之事、一个特殊的场所，在其中人们与神同在，自身也变成了神。当人们游戏时，神感到喜悦；人类为了神灵而游戏。如今，我们生活在没有节日的时代，也因此失去了和神的联结。


柏拉图的对话录《法律篇》中写道：“人生来便是作为神的玩具，事实上这是人所拥有的最好的特质。因此每一个人，男人和女人，都必须遵从这种方式，在最美妙的游戏中度过一生。”“人应当在游戏中生活……献祭、歌唱、跳舞，如此才能获得神的恩宠。”献祭仪式的起源便是同诸神分享食物。节日和仪式是通向神的渠道。


一般而言，当我们从事劳作或生产时，我们便不再与神同在，也失去了自身的神性。诸神不进行生产，亦不工作。也许我们也应当重新回归神性和节日，不再甘愿忍受工作和效绩的奴役。我们应当意识到，如今由于工作、效率和生产变得绝对化，我们失去了一切节日和神圣时刻。工作时间变得极端化，它破坏了一切节日和庆典。


放慢速度并不会使我们重新获得神圣时刻。在神圣时刻，我们既不能加速也不能减速。如今盛行的高效主义者没有意识到，提高或降低工作速度不能解决我们当下的时代危机。我们需要一种新的生活形式，一种新型叙事，由此产生一个新时代、一种新的生命状态，把我们从飞转的停滞状态（rasenderStillstand）中解救出来。


节日和庆典都拥有宗教的源头。拉丁语中feriae意指用于从事宗教和崇拜活动的特殊时刻。fanum是“属于神的圣地”。当平凡的（pro-fane字面意思是：位于神圣领域之外）日常生活结束时，节日便开始了。它以一场仪式开始。人们进入了节日的神圣时刻。这些门槛、通道和仪式区分了神圣和日常领域，一旦它们被取消，便只剩下庸常的、转瞬即逝的时间，并且全部被用于工作。如今，由于工作时间的绝对化，神圣时间已消失殆尽。即便是工作中的间歇时刻也是紧张的。休息的目的在于，使我们从疲劳中复原，以便我们继续正常工作。


神圣时间是充盈的，工作时间则是空虚的，后者仅仅不断地在无聊和忙碌之间来回重复，以此填满时间。与之相反，节日在一个瞬间内实现了一种提升的强烈生命体验。当下的生活越来越缺乏强度。健康的生命仅仅是存活，它是一种极端弱化的生命形式。


如今我们是否还能拥有节日？尽管节日依然存在，然而却不再拥有其原本意义。德语和英语中的“节日”（Fest，festival）都来自拉丁语的festus。后者意指“用于宗教活动的特定时间”。如今的节日仅仅是一次事件、一场热闹的活动。事件和节日的时间属性是相反的。事件（event）来自拉丁语的eventus，表示“突然出现、发生”。它的时间属性是偶发性。偶发性全然不同于神圣时间的必然性。前者正是当下社会的写照，一切约束和关联都消失了。


当下的功绩社会同样显示出规训社会的特征，每个人都经营着自己的营地，这是一座劳动营。其特殊之处在于，人们同时是犯人和看守，受害者和施暴者，主人和奴仆。我们进行自我剥削。剥削者即被剥削者，二者已经无法分辨。为了更高效地工作，我们不断优化自身，直至死亡。以这种恐怖的方式，自我完善被理解为绩效的提升。

自我剥削比他者剥削更有效率，由于前者伴随着一种自由的感觉。看似矛盾的是，过劳症的最初症状是一种极度狂喜。患无比兴奋地投入工作之中，直至最终崩溃。


在使用计时钟（Stechuhr）的时代，工作和休息的时间尚且是明确分开的。如今车间厂房和起居室已经融为一体。随时随地工作成为可能。笔记本电脑和智能手机构建了一座移动的劳动营。


传统意义的革命拥有明确的目标，推翻工作场所中的异化关系。“异化”意指，工人在工作中无法辨认出自己。在马克思看来，工作是一种延伸的自我去现实化（Sich-Entwirklichung）。我们现在生活在一个后马克思时代。在新自由主义政权中，剥削不再是以异化和去现实化的方式进行，而变成了自由和自我实现（Sich-Verwirklichung）。这里没有作为剥削者的他者，而是自我心甘情愿地压榨自身，基于一种完善自我的信念。个体实现自我，直至死亡。自我优化通向死亡。在这一语境下，反抗、起义和革命已经不再可能。


我们生活在一个独特的历史阶段，自由本身产生了束缚。规训社会的“应当”产生了种种规定和禁令，与之相比，自由的“能够”甚至带来了更多的束缚。“应当”尚且存在界限，“能够”，却没有边界，它是开放的、没有上限。因此，“能够”导致的约束是无尽无际的。我们也便处于一个矛盾的境况。自由原本是约束的对立面，意指免除束缚。自由曾作为约束的反面，如今却导致了束缚。抑郁症和过劳症等心理疾病便体现了这种深刻的自由危机。它们是一种病理学征兆，自由如今已经转化成束缚。也许过去的社会较如今更加压抑，然而我们并没有变得较为自由。抑郁症替代了他者的压迫。


生命在现代变成了生存。生存导向对健康的狂热崇拜，却产生了矛盾的结果，健康带来了疾病和僵死。失去了死亡的否定性，生命自身僵化成死亡。否定性能够赋予生命以活力。阿多诺在《最低限度的道德》（MinimaMoralia）中写道：“无限蔓生的健康便成了疾病。它的解药是认清自己的病症，同时意识到生命自身的局限。这种拥有治愈功能的疾病便是美。它能够使生命停歇，从而阻止其衰退。如果
人们为了生命的缘故而否认疾病，那么这种遗世独立的生命，盲目地摆脱了其他一切因素，也将因此转向毁灭和罪恶，走向无耻和自鸣得意。如果有人憎恶毁灭，那么他必须同时厌恶生命，因为只有死亡才等于永不衰退的生命。”[3]在当今的生存型社会中，健康变得绝对化，也因此失去了美。赤裸的、健康的生命，如今成为一种歇斯底里的生存形式，最终转变成死亡和活死人。我们变成了健康、健身式僵尸，效绩和肉毒杆菌僵尸。如今，我们在生时形同已死，在死前只能偷生。


人并非为工作而生。工作的人是不自由的人。在亚里士多德看来，自由人是那些无须顾虑生计、摆脱了其束缚的人。在他面前有三种自由的生命形式可供选择，第一种生命用于享受美的事物，第二种用于为城邦施行善举，最后一种是沉思的生命，通过探索那永不消逝者，而停留在永恒的美的领域。因此真正的自由人是诗人、政治家和哲学家。


他们区别于那些仅仅以生存为目的的生命形式。商人的生命只以牟利为目的，因此是不自由的。汉娜·阿伦特认为，上述三种自由的生命形式拥有一个共性，他们都存在于美的领域，即和他们相伴的事物都不是必需之物，并非为了满足某些特定的目的。拯救美同时也是拯救政治。当下的政治似乎仅剩下紧急命令，它失去了自由。换言之：如今已经不存在政治。当政治中不再有其他可能性，它便近乎专政，即资本的独裁。如今，政治家降格为体制的傀儡，至多算是有天赋的管家或记账员，他们不再是亚里士多德式的政治家。


从根本上说，政治家的生命由行动构成。他的生命不屈从于必需性和实用性的法则。人类的共同生活必然需要种种社会组织。基于这一必要性，这些组织不属于政治。必要性和实用性都不是政治范畴。作为自由人的政治家必须行动，他必须施行善举，创造美的生活形式，从而超越必需性和实用性。例如，他应当试图改变社会，尽可能地带来更多的正义和幸福。政治行动意味着，开启一个全新的项目，或建构一种新的社会形态。按照那种著名的论断，只存在一种唯一的政治形式，实则宣告了政治的终结。如今的政治家工作繁忙，却没有采取行动。


新自由主义导致了大量的不平等，它不是美的政体。英语中fair一词既表示“公正”，也表示“美”。fagar（中古德语）也表示“美丽”。Fegen（清扫）一词最初的含义是“使某物发光”。fair的双重含义表明，“美”和“公正”最初是同一个概念。公正被认为是美的。正义和美之间存在着特殊的通感关系。


哲学家阿甘本认为，世俗化意味着事物的去目的化，即事物摆脱了其原本的功能，获得了更加自由的效用。“儿童把他们能触碰到的一切杂物都转化成玩具，包括那些通常被我们严肃看待的事物，例如属于经济、战争、法律等领域的事物。一辆汽车、一把手枪、一份法律合同都在顷刻间变成了玩具。”


在金融危机期间，希腊发生了一个颇具预言意味的事件。一群孩子在一片房屋的废墟中发现了一大捆纸币。他们用完全不同的方式使用了这笔钱。纸币被用于游戏并且被撕成碎片。也许孩子们预演了我们的未来：世界变成一片废墟。在那里我们如儿童一般用纸币进行游戏，并最终将之撕毁。如今，资本被奉为新的神明，希腊这群孩子却通过游戏的方式，使钱变得世俗化。世俗化改变了作为偶像的资本，它在顷刻间成了玩具。


这一事件显得非同寻常，由于它恰恰发生在一个陷入资本奴役的国家，一个饱受新自由主义暴政困扰的国度。这里确实存在一种资本和金融资本的恐怖统治。发生在希腊的这个偶然事件带有强烈的象征意义。它如同一则关于未来的寓言。如今我们正需要使工作、生产和资本世俗化，使工作时间世俗化，把它转变成节日和游戏时间。


此外，美也来源于节日。卡尔·科雷尼写道：“为了节日盛装打扮，在节日时展示美，这是凡人所能达到的最接近神的状态：这也正是节日的本质，它为了艺术而存在，庆典和美之间存在天然的亲缘关系，没有任何一个民族如同希腊人一样出色地展示这一点，并如此完美地掌握祭拜仪式。”[5]在美、节日和祭拜的领域，希腊人达到了神奇、卓越的高度，没有任何其他欧洲民族和他们一样创造了如此多的荣光和美。甚至“美容”（Kosmetik）一词也来自希腊语中的“宇宙”（Kosmos），意指美的、神性的秩序。


艺术和节日紧密地联结在一起。在尼采看来，原始的艺术即庆典的艺术。艺术品是一种具体化明证，见证了一个文化中的神圣时刻。在其中，转瞬即逝的、日常的时间被取消了。“在过去，一切艺术品都陈列于人类举行庆典的长廊，作为神圣时刻的凭证和纪念碑。”艺术品起初是神圣时刻的纪念物。它们是一个文化神性时间的证明。起初艺术只存在于祭拜仪式中，是一种礼拜活动。艺术品最初也拥有神圣意义。如今艺术品的神性已消失殆尽。神圣意义被展览价值和市场价值取代。艺术品也不再出现在庆典上，而被安放于博物馆和银行的保险柜里。博物馆和银行保险柜成为艺术最终的蒙难所。它们是零时间（Null-Zeit）场所，是无时间性的。


艺术品最初是一种宣言，宣示了一种浓烈、富足、华美的生命形式。如今，生命的强度逐渐弱化。生命转变成消费和社交。爱让位于色情产业。一切都被抹平，成为一种极端的弱化形式。正是基于这种平庸的状态，信息、交流和资本得以加速传递。生产和效率也因此提升。


如今，只有当事物被展示出来并得到关注时，才拥有了价值。我们在脸书上展示自我，也因此把自身变成了商品。生产（Produktion）最初并不意味着制造或加工，而是展示、呈现某物。在法语中，“生产”的这一原始意义仍然存在，Seproduire意味着“登场，呈现自身”。在德语中，这一含义也体现在词组sichproduzieren（自我生产）中，尽管是在贬低的意义上表示“炫耀地展示自身”。如今，我们的确狂热地在社交网络上“生产自我”。我们加工自我，为了便于生产和加速信息交流。生命变成了商品，导致了仪式和庆典消失。因为在庆典中，我们耗费物资，而不从事生产。


如今一切都屈从于资本。生命价值意味着，一个人作为客户所能创造的价值总和，由于生命的每个时刻都被商品化了。人的价值被简化为客户价值或市场价值。完整的生命被转化为纯粹的商业利益。在如今的超资本主义（Hyperkapitalismus）中，人的存在彻底瓦解，融入了商品关系编织的网络。没有一个生活领域能够摆脱商业的控制。超级资本主义把一切人类关系变成了商业关系。它剥夺了人类的尊严，取而代之的是彻底的市场价值。在现代世界，一切神性和节日已不存在。世界成了一座百货商店。所谓的共享型经济（Sharing-Ökonomie）把我们每个人变成了售货员，期待着顾客的到来。我们用越来越劣质的快消品填满世界，世界在商品中窒息。这座百货商店和疯人院并无本质区别。看上去我们似乎拥有了一切，我们却失去了最根本之物，即世界。世界丧失了语言和声音。在交流的喧哗声中，宁静消失了。商品的堆积和大众化填满了一切空白。商品占据了天空和地面。商品化的世界不再适于居住，它失去了和上帝、神圣、奥秘、无限、崇高的联结。我们亦失去了惊奇的能力，生活在一座透明的百货商店里，成为透明的顾客，时刻受到监视和操控。逃离这座百货商店成为当务之急。我们应当把商店改造成一个庆典场所，在其中生命才能获得应有的意义。



>（王一力译）
> 转摘自《倦怠社会》韩炳哲 著
> 一位在韩国出生的瑞士-德国哲学家和文化理论家。他曾是柏林艺术大学的教授最初在首尔的高丽大学学习冶金学，然后在1980年代移居德国，在弗赖堡和慕尼黑学习哲学、德语文学和天主教神学。1994年，他在弗赖堡获得博士学位，其论文的主题是马丁·海德格尔
`,Cf=`---
created: "2024-12-26T16:23:07.563Z"
title: 艺术作品的本源
slug: 3
category: philosophy
---

本源一词在这里指的是，一件东西从何而来，通过什么它是其所是并且如其所是。使某物是什么以及如何是的那个东西，我们称之为某件东西的本质。某件东西的本源乃是这东西的本质之源。对艺术作品的本源的追问就是追问艺术作品的本质之源。按通常的理解，艺术作品来自艺术家的活动，通过艺术家的活动而产 生。但艺术家又是通过什么成其为艺术家的？艺术家从何而来？使艺术家成为艺术家的是作品；因为一部作品给作者带来了声誉，这就是说，唯作品才使作者以一位艺术的主人身份出现。艺术家是作品的本源。作品是艺术家的本源。两者相辅相成，彼此不可或缺。但任何一方都不能全部包含了另一方。无论就它们本身还是就两者的关系来说，艺术家和作品都通过一个最初的第三者而存在。这个第三者才使艺术家和艺术作品获得各自的名称。那就是艺术。

正如艺术家以某种方式必然地成为作品的本源而作品成为艺术家的本源，同样地，艺术以另一种方式确凿无疑地成为艺术家和作品的本源。但艺术竟能成为一种本源吗？哪里和如何有艺术呢？艺术，它还不过是一个词，没有任何现实事物与之对应。它可以被看作一个集合观念，我们把仅从艺术而来才是现实的东西，即作品和艺术家，置于这个集合观念之中。即使艺术这个词所标示的意义超过了一个集合观念，艺术这个词的意思恐怕也只能在作品和艺术家的现实性的基础上存在。或者事情恰恰相反？唯当艺术存在而且是作为作品和艺术家的本源而存在之际，才有作品和艺术家吗？

无论怎样决断，艺术作品的本源问题都势必成为艺术之本质的问题。但由于艺术究竟是否存在和如何存在的问题必然还是悬而未决的，因此，我们将尝试在艺术无可置疑地起现实作用的地方寻找艺术的本质。艺术在艺术作品中成其本质。但什么和如何是一件艺术作品呢？

什么是艺术？这应从作品那里获得答案。什么是作品，我们只能从艺术的本质那里获知。任何人都能觉察到，我们这是在绕圈子。通常的理智要求我们避免这种循环，因为它与逻辑相抵触。人们认为，艺术是什么，可以从我们对现有的艺术作品的比较考察中获知。而如果我们事先并不知道艺术是什么，我们又如何确认我们的这种考察是以艺术作品为基础的？但是，与通过对现有艺术作品的特性的收集一样，我们从更高级的概念作推演，也是同样得不到艺术的本质的；因为这种推演事先也已经有了那样一些规定性，这些规定性必然足以把我们事先就认为是艺术作品的东西呈现给我们。可见，从现有作品中收集特性和从基本原理中作出推演，在此同样都是不可能的；在哪里这样做了，也是一种自欺欺人。因此我们必得安于绕圈子。这并非权宜之计，亦非缺憾。走上这条道路，乃思之力量；保持在这条道路上，乃思之节日——假设思是一种行业的话。不仅从作品到艺术的主要步骤与从艺术到作品的步骤一样，是一种循环，而且我们所尝试的每一个具体的步骤，也都在这种循环之中兜圈子。

为了找到艺术的本质，找到在作品中真正起支配作用的东西，我们还是来探究一下现实的作品，追问一番：作品是什么，它如何成其为作品。

每个人都熟悉艺术作品。人们在公共场所，在教堂和住宅里，可以见到建筑和雕塑作品。不同时代和不同民族的艺术作品被人收集起来展览。如果我们从这些作品的未经触及的现实性角度去观赏它们，同时又不自欺欺人的话，就必将看到，这些作品就是自然现存的东西，与物的自然现存并无二致。一幅画挂在墙上，就像一支猎枪或一顶帽子挂在墙上。一幅油画，比如说凡·高那幅描绘一双农鞋的油画吧，就从一个画展周游到另一个画展。人们寄送作品，就像从鲁尔区运出煤炭，从黑森林运出木材一样。战役中的士兵把荷尔德林的赞美诗与清洁用具一起放在背包里，贝多芬的四重奏被存放在出版社的仓库里，就像地窖里的马铃薯一样。

所有艺术作品都具有这种物因素。要是它们没有这种物因素会成为什么呢？但是，我们或许不满于这种颇为粗俗和肤浅的艺术见解。虽然发货人或博物馆里的清洁女工可能按这种艺术作品的观念行事，我们却必须把艺术作品看作人们体验和欣赏的东西。不过，即使享誉甚高的审美体验也摆脱不了艺术作品的物因素。在建筑物中有石质的东西，在木刻中有木质的东西，在绘画中有色彩的东西，在语言作品中有话音，在音乐作品中有声响。在艺术作品中，物因素是如此稳固，以至我们毋宁反过来说：建筑物存在于石头里，木刻存在于木头里，油画在色彩里存在，语言作品在话音里存在，音乐作品在音响国存在。这是当然的喽——人们会这样附和。肯定会。然而，在艺术作品中这种不言自明的物因素究竟是什么呢？

对这种物因素的追问很可能是多余的，也许还会造成混乱，因为艺术作品远不只是物因素。它还是某种别的什么。这种别的什么就是使艺术成其为艺术的东西。当然，艺术作品是一种制作的物，但是它所道出的远非仅限于纯然的物本身作品还把别的东西公诸于世，它把这个别的东西敞开出来。所以作品乃是比喻。在艺术作品中，制作物与这别的东西结合在一起。“结合”一词在希腊文中叫бυμβáλλειυ。作品乃是符号。

比喻和符号给出一个概念框架，长期以来人们都是在这一视角中去描绘艺术作品的、但在作品中唯一的使这别的东西敞开出来，并把这别的东西结合起来的东西，仍然是艺术作品的物因素。看起来，艺术作品中的这种物因素仿佛是一个屋基，那别的东西和本真的东西就筑居于其上。而且，艺术家以他的手工活所真正地制造出来的不就是艺术作品中的这种物因素吗？

我们的意图是找到艺术作品的直接的和全部的现实性；因为只有这样，我们才能在其中找到真实的艺术。所以我们首先必须弄清作品的物因素。为此，我们必须相当清晰地认识物究竟是什么。只有这样，我们才能说，艺术作品是否是一件物，别的东西正是附着于这物之上的；也只有这样，我们才能决断，这作品是否根本上就不是物，而是那别的什么。

物与作品
物之为物，究竟是什么东西呢？当我们这样发问时，我们要弄清楚物之存在，亦即物之物性（die Dingheit）。这就是说，要了解物之物因素。为此，我们必须来看看那一切存在者所属的领域，长期以来，我们把它称为物的领域。

路边的石头是一件物，田野上的泥块是一件物。瓦罐是一件物，路旁的水井是一件物。但罐中的牛奶和井中的水又是什么呢？如果把天上的白云，田间的蓟草，秋风中的落叶，森林上空的苍鹰都称为物的话，那么，牛奶和水当然也不例外。所有这一切事实上都必须称为物， 哪怕是那些不像上面所述的东西那样显示自身的东西，即不显现出来的东西，人们也以物命名之。这种本身并不显现出来的物，即一种“自在之物”，如果按康德的 看法，乃是世界整体，这种物甚至是上帝本身。在哲学语言中，自在之物和显现之物，或干脆说一切存在者，统统被叫做物。

如今，飞机和收音机成了与我们最接近的物了，但是当我们谈到最终的物时，我们想到的却是完全不同的东西。最终的物乃是死亡和审判。物这一字眼在这 里大体上是指任何一种非无的东西。在此意义上，艺术作品也是一种物，因为它毕竟是某种存在者。然而这种物的概念至少在眼下对我们毫无帮助。因为我们意图把具体物之存在方式的存在者与具有作品之存在方式的存在者划分开来。此外，把上帝称为一物，也颇使我们过意不去。同样地，对田地上的农夫，锅炉前的火夫，课堂里的教师以物相称，也颇令我们踌躇。人可不是物。不错，我们把一位因过于年少，无力应付自己所面临的事务的小姑娘称为小东西。但这仅仅是因为，在这里， 人的存在在某种意义上已经丧失，只好去寻求那构成物之物因素的东西了。我们甚至不敢贸然把森林旷野里的鹿，草木丛中的甲虫和草叶称为物。我们宁可把一把锄 头、一只鞋、一把斧子、一座钟称为物。但即使是这些东西也不是纯然的物。能纯然称得上物的只有石头、土块、木头，自然界中无生命的东西和用具。自然物和用 具就是我们通常所说的物。

这样，我们就从一切皆物（物=res＝ens=存在者），甚至最高的和最终的东西都是一物这一最广的范围，回到纯然的物这一狭小圈子里来了、“纯然”一词在此是指纯粹物，直接是物，仅此而已。可是“纯然”一词也几乎带有贬义，指那些仅只是物的东西。纯然物即本真的物，这物是连用具也排除在外的。那么，这种本真的物的物因素又在哪里呢？物的物性只有从它们那里才能得到确定。这一确定才使我们能够描绘物因素本身。有了这番准备以后，我们才能描绘那几乎可以触摸的作品的现实性，才能描绘其中所包含着的那别的什么。

一个众所周知的事实是：自古以来，只要存在者究竟是什么的问题一提出来，在其物性中的物就作为赋予尺度的存在者一再地突现出来。由此我们必然就在传统对存在者的解释中与物之物性的定义相遇了。所以，我们只需查证落实这种关于物的既有认识就行了、无需对物的物因素作乏味的探究。物是什么，对这一问题的答案我们是再熟悉不过的了，我们从不认为它们有任何值得怀疑之处。

对物之物性的解释贯穿了西方思想的全过程，这些解释早已成为不言自明的东西，在今天的日常生活中广为应用。这些解释概括起来有三种。

例如，一块花岗岩石是一纯然物。它坚硬、沉重、有长度、硕大、不规则、粗糙、有色、部分暗淡、部分光亮。我们能发觉这块岩石的所有这些特征。我们把它们作为认识它的标记。而这些标记意味着这块岩石本身具有的东西、它们就是岩石的属性。物具有这些属性。物？当我们现在说物时，我们想的是什么呢？显然，物不仅仅是若干特征的集合，也不是那些特征的集合赖以出现的属性的总和。人人都自以为知道，物是那个把诸属性聚集起来的东西。于是人们大谈物的内核。据说，希腊人已经把它称为根据了。在他们看来，物的内核当然是作为根基并永远置于眼前的东西。而物的特征则被叫做гá бυμβεβηКóгɑ即，总是随时随地地与内核一起出现和产生的东西。

这些称呼不是随随便便的名称。它们道出了如今已隐而不显的东西，这就是希腊人关于在场状态意义上的存在者之存在的基本经验。而正是根据这些规定，对物之物性的决定性解释从此以后才得以确立，使西方对存在者之存在的解释得以确定下来。这一解释始于罗马——拉丁思想对希腊词语的吸取 υποκειμευου成了一般主体；υπòστɑστζ成了实体，συμβεβηκσζ成了属性。从希腊名称向拉丁语的这种翻译绝不是一件毫无后果的事情——确实，直到今天，也还有人认为它是无后果的。实际上，在字面上看起来具有保存作用的翻译背后，隐藏着希腊经验向另一种思维方式的转渡。罗马思想接受了希腊的词语，却没有继承相应的同样原始的由这些词语所道说出来的经验，即没有继承希腊人的话。西方思想的无根基状态即始于这种转渡。

按流行的意见，把物之物性规定为具有诸属性的实体，似乎与我们关于物的朴素观点相吻合。毫不奇怪，流行的对物的态度，也即对物的称呼和关于物的谈论，也是以这种关于物的通常观点为尺度的。简单陈述句由主语和谓语构成，主语一词是希腊文（根据）一词的拉丁文翻译，既为翻译，也就有了转义；谓语所陈述的则是物之特性。谁敢撼动物与命题，命题结构与物的结构之间的这种简单明了的基本关系呢？然而，我们却必须追问：简单陈述句的结构（主语与谓语的联结）是物的结构（实体与属性的统一）的映像吗？或者，如此这般展现出来的物的结构竟是按命题框架被设计出来的吗？

人把他在陈述中把握物的方式转嫁到物自身的结构上去——还有什么比这更容易理解的呢？不过，在发表这个似乎是批判性的、但却十分草率的意见之前， 我们首先还必须弄明白，如果物还是不可见的．那么这种把命题结构转嫁到物上的做法是如何可能的。谁是第一位和决定性的，是命题结构呢还是物的结构？这个问 题直到眼下还没有得到解决。甚至。以此形态出现的问题究竟是否可以解决，也还是令人起疑的。

根本上说来，既不是命题结构给出了勾画物之结构的标准，物之结构也不能在命题结构中简单地得到反映。就其本性和其可能的交互关系而言，命题结构和物的结构两者具有一个共同的更为原始的根源。总之，对物之物性的第一种解释．即认为物是其特征的载体，不管它多么流行，还是没有像它自己所标榜的那样朴素自然。让我们觉得朴素自然的，兴许仅只是一种长久的习惯所习以为常的东西，这种习惯却遗忘了它赖以产生的异乎寻常的东西。然而，正是这种异乎寻常的东西一度作为令人诧异的东西震惊了人们，并使思想惊讶不已。

对流行的物之解释的信赖只是表面看来是凿凿有据的。此外，这种物的概念（物是它的特征的载体）不仅适合于纯然的和本真的物，而且适合于任何存在者。因而，这种物的概念也从来不能帮助人们把物性的存在者与非物性的存在者区分开来。但在所有这些思考之前，在物之领域内的清醒的逗留已经告诉我们，这种物之概念没有切中物之物因素，没有切中物的根本要素和自足特性。偶尔，我们甚至有这样的感觉，即：也许长期以来物之物因素已经遭受了强暴，并且思想参与了这种强暴；因为人们坚决拒绝思想而不是努力使思想更具思之品性。但是，在规定物之本质时。如果只有思想才有权言说，一种依然如此肯定的感觉应该是什么呢？不过，也许我们在这里和在类似情形下称之为感觉或情绪的东西，是更理智的，亦即更具有知觉作用的，因而比一切理智更向存在敞开，这全部理智此间成了理性，被理性地误解了。在这里，对非理性的垂涎，作为未经思想的理性的怪胎，帮了古怪的忙。诚然，流行的物之概念在任何时候都适合于任何物，但它把握不了本质地现身的物，而倒是扰乱了它。

这种扰乱或能避免吗？如何避免呢？大概只有这样：我们给予物仿佛一个自由的区域，以便它直接地显示它的物因素。首先我们必须排除所有会在对物的理解和陈述中挤身到物与我们之间的东西，唯有这样，我们才能沉浸于物的无伪装的在场。但是这种与物的直接遭遇，既不需要我们去索求，也不需要我们去安排，它早就发生着。在视觉、听觉和触觉中，在对色彩、声响、粗糙坚硬的感觉中，物——完全在字面上说——逼迫我们。物是αισɡηιбυ，即，在感性的感官中通过感觉可以感知的东西。由此，后来那个物的概念就变得流行了，按这个概念，物无非是感官上被给予的多样性之统一体。至于这个统一体是被理解为全体，还是整 体或形式，都丝毫没有改变这个物的概念的决定性特征。

于是，这一物之物性的解释，如同前一个解释一样，也是正确的和可证实的。这就足以令人怀疑它的真实性了。如果我们再考虑到我们所寻求的物之物因素，那么这一物的概念就又使我们无所适从了。我们从未首先并且根本地在物的显现中感觉到一种感觉的涌逼，例如乐音和噪音的涌逼——正如这种物之概念所预先确定的；不如说，我们听到狂风在烟囱上呼啸，我们听到三马达的飞机；我们听到与鹰牌汽车迥然不同的奔驰汽车。物本身要比所有感觉更切近于我们。我们在屋子里听到敲门，但我们从未听到听觉的感觉，或者哪怕是纯然的嘈杂声。为了听到一种纯然的嘈杂声，我们必须远离物来听，使我们的耳朵离开物，也即抽象地听。

在我们眼下所说的物的概念中，并无多么强烈的对物的扰乱，倒是有一种过分的企图，要使物以一种最大可能的直接性接近我们。但只要我们把在感觉上感知的东西当作物的物因素赋予给物，那么物就决不会满足上述企图。对物的第一种解释仿佛使我们与物保持着距离，而且把物挪得老远；而第二种解释则过于使我们为物所纠缠了。在这两种解释中，物都消失不见了。因此，确实需要避免这两种解释的夸大。物本身必须保持在它的自持（Insichruhen）中。物应该置于它的本己的坚固性中。这似乎是第三种解释所为，而这第三种解释与上面所说的两种解释同样地古老。

给物以持久性和坚固性的东西，同样也是引起物的感性涌逼方式的东西，即色彩、声响、硬度、大小，是物的质料。把物规定为废料，同时也就已经设定了形式。物的持久性，即物的坚固性，在于质料与形式的结合。物是具有形式的废料。这种物的解释要求直接观察，凭这种观察，物就通过其外观关涉于我们。有了质料与形式的综合；人们终于寻获了一个物的概念，它对自然物和用具物都是很适合的。

这个物的概念使我们能够回答艺术作品中的物因素问题。作品中的物因素显然就是构成作品的质料。质料是艺术家创造活动的基底和领域。但我们本可以立 即就得出这个明了的众所周知的观点。我们为什么要在其他流行的物的概念上兜圈子呢？那是因为，我们对这个物的概念，即把物当作具有形式的质料的概念，也有怀疑。

可是，在我们活动于其中的领域内，质料——形式这对概念不是常用的吗？确然。质料与形式的区分，而且以各种不同的变式，绝对是所有艺术理论和美学的概念图式。但这一无可争辩的事实却并不能证明形式与质料的区分是有充足的根据的，也不证明这种区分原始地属于艺术和艺术作品的领域。再者，这对概念的适 用范围长期以来已经远远地越出了美学领域。形式与内容是无论什么都可以归入其中的笼统概念。甚至，即使人们把形式称做理性而把质料归于非理性，把理性当作 逻辑而把非理性当作非逻辑，甚或把主体——客体关系与形式——质料这对概念结合在一起，这种表象仍具有一种无物能抵抗得了的概念机制。

然而，如果质料与形式的区分的情形就是如此，我们又应该怎样借助于这种区分，去把握与别的存在者相区别的纯然物的特殊领域呢？或许，只要我们取消这些概念的扩张和空洞化，按质料与形式来进行的这种标画就能重新获得它的规定性力量。确实如此；但这却是有条件的，其条件是：我们必须知道，它是在存在者的何种领域中实现其真正的规定性力量的。说这一领域乃是纯然物的领域，这种说法到眼下为止还只是一个假定而已。指出这一概念结构在美学中的大量运用，这更能带来一种想法，即认为：质料与形式是艺术作品之本质的原生的规定性，并且只有从此出发才反过来被转嫁到物上去。质料——形式结构的本源在哪里呢？在物之物因素中呢，还是在艺术作品的作品因素之中？

自持的花岗岩石块是一种质料，它具有一种尽管笨拙但是确定的形式。形式在这里意指诸质料部分的空间位置分布和排列，此种分布和排列带来一个特殊的轮廓，也即一个块状的轮廓。但是，罐、斧、鞋等，也是处于某种形式中的质料。在这里，作为轮廓的形势并非一种质料分布的结果。相反地，倒是形式规定了质料的安排。不至于此，形式甚至先行规定了质料的种类和选择：罐要有不渗透性，斧要有足够的硬度，鞋要坚固同时具有柔韧性。此外，在这里起支配作用的形式与质料的交织首先就从罐、斧和鞋的用途方面被处置好了。这种有用性从来不是事后才被指派和加给罐、斧、鞋这类存在者的。但它也不是作为某种目的而四处漂浮于存在者之上的什么东西。

有用性是一种基本特征，由于这种基本特征，这个存在者便凝视我们，亦即闪现于我们面前，并因而现身在场，从而成为这种存在者。不光是赋形活动，而且随着赋形活动而先行给定的质料选择；因而还有质料与形式的结构的统治地位，都建基于这种有用性之中。服从有用性的存在者，总是制作过程的产品。这种产品被制作为用于什么的器具（Zeug）。因而，作为存在者的规定性，质料和形式就寓身于器具的本质之中。器具这一名称指的是为使用和需要所特别制造出来的东西。质料和形式绝不是纯然物的物性的原始规定性。

器具，比如鞋具吧，作为完成了的器具，也像纯然物那样，是自持的；但它并不像花岗岩石块那样，具有那种自身构形特性（Eigenwuchsige）。另一方面，器具也显示出一种与艺术作品的亲缘关系，因为器具也出自人的手工。而艺术作品由于其自足的在场却又堪与自身构形的不受任何压迫的纯然物相比较。尽管如此，我们并不把作品归入纯然物，我们周围的使用物毫无例外地是最切近和本真的物。所以器具既是物，因为它被有用性所规定；但又不只是物；器具同时又是艺术作品，但又要逊色于艺术作品，因为它没有艺术作品的自足性。假如允许的作一种计算性的排列的话，我们可以说器具在物与作品之间有一种独特的中间地位。

然而，质料——形式结构，由于它首先规定了器具的存在，就很容易被看作任何存在者的直接可理解的状态，因为在这里从事制作的人本身已经参与进来了，即参与了一个器具进入其存在的方式。由于器具拥有一个介于纯然物和作品之间的中间地位，因而人们很自然地想到，借助于器具存在（质料一形式结构）也可以掌握非器具性的存在者，即物和作品，甚至一切存在者。

但把质料——形式结构视为任何一个存在者的这种状态的倾向，还受到了一种特殊的推动；这就是：事先根据一种信仰，即《圣经》的信仰，把存在者整体表象为受造物，在这里也就是被制作出来的东西。虽然这种信仰的哲学能使我们确信上帝的全部创造作用完全不同于工匠的活动，但如果同时甚或先行就根据托马斯 主义哲学对于《圣经》解释的信仰的先行规定，从质料（materia）和形式（foma）的统一方面来思考受造物（ens crea－tun），那么，这种信仰就是从一种哲学那里得到解释的，而这种哲学的真理乃基于存在者的一种无蔽状态，后者不同于信仰所相信的世界。

基于信仰的创造观念，虽然现在可能丧失了它在认识存在者整体这回事情上的主导力量，但是一度付诸实行的、从一种外来哲学中移植过来的对一切存在者的神学解释；亦即根据质料和形式的世界观，却仍然保持着它的力量。这是在中世纪到近代的过渡期发生的事情。近代形而上学也基于具有中世纪特征的形式——质料结构之上，只是这个结构本身在字面上还要回溯到外观和物质的已被掩埋的本质那里。因此，按质料和形式来解释物，不论这种解释仍旧是中世纪的还是成为康德先验论的，总之它成了流行的自明的解释了。但正因为如此，它便与上述的另外两种物之物性的解释毫无二致，也是对物之物存在的扰乱。

光是由于我们把本真的物称为纯然物，就已经泄露了实情。“纯然”毕竟意味着对有用性和制作特性的排除。纯然物是一种器具，尽管是被剥夺了其器具存在的器具。物之存在就在于此后尚留剩下来的东西。但是这种剩余没有在其存在特性方面得到专门规定。物之物因素是否在排除所有器具因素的过程中有朝一日显露 出来，这还是一个疑问。因此，物之解释的第三种方式，即以质料——形式结构为线索的解释方式，也终于表现为对物的一种扰乱。

上述三种对物性的规定方式，把物理解为特性的载体，感觉多样性的统一体和具有形式的质料。在关于存在者之真理的历史进程中，这三种解释也有互相重合的时候，不过这一点我们现在暂且不提。在这种重合中，它们各自的固有的东西更加扩张，结果也成为对物、器具和作品的规定方式。于是，从此产生出一种思维方式，我们不仅根据这种思维方式专门去思考物、器具和作品，而且也根据这种思维方式去思考一般意义上的一切存在者。这种久已流行的思维方式先于有关存在者的一切直接经验这种先入之见阻碍着对当下存在者之存在的沉思。结果，流行的关于物的概念就阻碍了人们去发现物之物因素、器具之器具因素，当然也就阻碍了人们对作品之作品因素的探究。

这一事实证明了我们了解这些关于物的概念的必要性，这一方面是为了思考一下物的概念之由来和对它的漫无边际的推断，另一方面也是为了思考一下物的概念的自明性的外观。而当我们铤而走险，企图澄清或用文字表达出物之物因素，器具之器具因素，作品之作品因素时，这种必要性就愈加突出。不过，为了达到这一目的，有一点是必要的，那就是：对上述思维方式带来的一切先入之见和武断定论保持一定的距离。例如，让物在其物的存在中不受干扰，在自身中越憩息。还有什么比使存在者保持原样更容易的呢？或者，它是否也许是最困难的事情——尤其是当让存在者保持原样这一意图与为了省事而接受一种未经验证的存在概念这类马虎态度截然对立的时候？我们应该回转到存在着那里，从存在者之存在的角度去思考存在者本身；但与此同时，通过这种思考又使存在者保持原样。

看来，对这种思维的运用的最大阻力在于对物之物性的规定。因为前面说的那些尝试之所以失败，难道原因不正在此吗？朴实无华的物最为顽强地躲避思想。或者，这种纯然物的自持性，这种在憩息于自身之中使自己归于无的性质，是否恰恰就是物的本质呢？难道物的本质中的这种排他的东西和关闭的东西就不能为力图思考物的思想所接受吗？果真如此，我们就不应该勉强去探寻物之物因素了。

物之物性极难言说，可言说的情形极为罕见。关于这一点，前面所挑明的对物的解释的历史已提供了无可怀疑的佐证。这一历史也就是命运（Schicksal）。西方思想至今仍在此命运的支配下去思考存在者之存在。不过，我们在明确这一点的同时；也在此历史中发现了一种暗示。在解释物的过程中，这种解释要求具有特殊的支配地位，并以质料和形式概念为主导引线——这难道是偶然的吗？对物的这种 规定来源于对器具之器具存在的解释。器具这种存在者以一种特殊的方式靠近人的表象，因为它是通过我们人自己的制作而进入存在的。与此同时，这种以其存在而 显得亲熟的存在者，即器具，就在物与作品之间占取了一个特别的中间地位。我们将顺着这一暗示首先找出器具之器具因素。也许，这对我们认识物之物因素和作品 之作品因素不无启发。我们只是要避免过早地使物和作品成为器具的变种。这样一来，在器具的存在方式中，本质历史性的差异也有可能出现。但我们姑且撇开这点不管。

然而，哪条道路是通往器具之器具因素的呢？我们应如何去了解器具事实是什么呢？现在必须做的步骤必须绝对避免任何传统解释的武断定论那一类的作法。对此，如果我们不用某种哲学理论，而径直去描绘一个器具，那就最为保险了。

我们姑且选一个普通的器具——以一双农鞋作为例子。为了描绘这样一件有用的器具，我们甚至用不着展示实物。对它是人人皆知的。但由于在这里事关直接描绘，因此最好还是为大家的直观认识提供方便，要做到这一点，一个图像的展示足矣，为此我们选择凡·高的一幅著名油画来作例子。凡·高不止一次地画过这种鞋。但鞋有什么好看的？谁不知道鞋是何模样？倘是木鞋或树皮鞋，鞋必定有被麻线和钉子连在一起的牛皮鞋底和鞋帮、这种器具用来裹脚。鞋或用于田间劳动，或用于翩翩起舞，根据不同的有用性，它们的质料和形式也不同。

上面这些话无疑是对的，只是常识的重复。器具的器具存在就在其有用性中、可是这有用性本身的情形又怎样呢？我们已经用有用性来把握器具之器具因素了吗？为了做到这一点，难道我们能不从其用途上去考察有用的器具吗？田间的农妇穿着鞋，只有在这里，鞋才存在。农妇在劳动时对鞋想得越少，看得越少，对它们的意识越模糊，它们的存在也就愈加真实。农妇站着或走动时都穿着这双鞋。农鞋就这样实际地发挥其用途。我们正是在使用器具的过程中实际地遇上了器具之器具因素。



梵高的油画作品《农鞋》

与此相反，要是我们只是一般地把一双农鞋设置为对象，或只是在图像中观照这双摆在那里的空空的无人使用的鞋，我们就永远不会了解真正的器具之器具因素。从凡·高的画上，我们甚至无法辨认这双鞋是放在什么地方的。除了一个不确定的空间外，这双农鞋的用处和所属只能归于无。鞋子上甚至连地里的土块或田野上的泥浆也没有粘带一点，这些东西本可以多少为我们暗示它们的用途的。只是一双农鞋，再无别的。然而—— 从鞋具磨损的内部那黑洞洞的敞口中，凝聚着劳动步履的艰辛、这硬梆梆、沉甸甸的破旧农鞋里，聚积着那寒风陡峭中迈动在一望无际的永远单调的田垄上的步履的坚韧和滞缓。皮制农鞋上粘着湿润而肥沃的泥土。暮色降临，这双鞋在田野小径上踽踽而行。在这鞋具里，回响着大地无声的召唤，显示着大地对成熟的谷物的宁静的馈赠，表征着大地在冬闲的荒芜田野里朦胧的冬眠。这器具浸透着对面包的稳靠性的无怨无艾的焦虑，以及那战胜了贫困的无言的喜悦，隐含着分娩阵痛时的哆嗦，死亡逼近时的战栗。这器具属于大地，它在农妇的世界里得到保存。正是由于这种保存的归属关系，器具本身才得以出现而自持，保持着原样。

然而，我们也许只有在这幅画中才会注意到所有这一切。而农妇只是穿这双鞋而已。要是这种简单的穿着真这么简单就好了。夜阑人静，农妇在滞重而又健康的疲惫中脱下它；朝霞初泛，她又把手伸向它；在节日里才把它置于一旁。这一切对农妇来说是太寻常了；她从不留心。从不思量。虽说器具的器具存在就在其有用性之中，但有用性本身又植根于器具之本质存在的充实之中、我们称之为可靠性。凭借可靠性，这器具把农妇置入大地的无声的召唤之中，凭借可靠性，农妇才把握了她的世界。世界和大地为她而存在，为伴随着她的存在方式的一切而存在，但只是在器具中存在。我们说“只是”，在这里还不够贴切，因为器具的可靠性才给这素朴的世界带来安全，保证了大地无限延展的自由。

器具之器具存在即可靠性，它按照物的不同方式和范围把一切物聚于一体。不过，器具的有用性只不过是可靠性的本质后果。有用性在可靠性中漂浮，要是没有可靠性便无有用性。具体的器具会用旧用废，但与此同时，使用本身也变成无用，逐渐损耗，变得寻常无殊。因此，器具的存在逐渐消耗，最后成为纯然的器具。器具存在的消耗过程也就是可靠性的消失过程。也正是由于这一消失过程，有用物才获得了它们那种无聊而生厌的惯常性，不过，这一过程也是对器具存在的原始本质的又一证明。器具的磨损的惯常性作为器具的唯一的、表面上看来为其所特有的存在方式突现出来。现在，人们所能见到的只有枯燥无味的有用性。它给人一种印象，即器具的本源在于纯然的制作中，制作过程才赋予某一质料以形式。然而，在真正的器具存在中，器具远不只是如此。质料与形式以及二者的区别自有更深的本源。

自持的器具的宁静就在可靠性之中。只有在可靠性之中；我们才发现器具的真实存在。但是我们对自已首先所探寻的东西，即物之物因素，仍然茫然无知。对我们真正的、唯一的探索目的，即艺术作品的作品因素，就更是一无所知了。

或者，是否我们眼下在无意间，可说是顺带地，已经对作品的作品存在有了一鳞半爪的了解呢？

我们已经寻获了器具的器具存在。然而，是如何寻获的呢？不是通过对一双鞋的实物的描绘和解释，不是通过对制鞋工序的讲述，也不是通过对张三李四实际使用鞋具的观察，而只是通过对凡·高的一幅画的观赏。这幅画道出了一切。走近这幅作品，我们就突然进人了另一个天地，其况味全然不同于我们惯常的存在。

艺术作品使我们懂得了真正的鞋具是什么。要是认为我们的描绘是一种主观活动，事先勾勒好了一切，然后再把它置于画上、那就是糟糕的自欺欺人。要说这里有什么值得起疑的地方，我们只能说，我们站在作品面前体验得太过肤浅，对自己体验的表达太过粗陋，太过简单了。但首要的是，这部作品并不像最初使人感觉到的那样，仅只为了使人更好地目睹器具是什么。倒不如说，通过这幅作品，也只有在这幅作品中，器具的器具存在才专门露出了真相。

在这里发生了什么？在这作品中有什么东西在发挥作用呢？凡·高的油画揭开了这器具即一双农鞋真正是什么。这个存在者进入它的存在之无蔽之中。希腊人称存在者之无蔽为……。我们称之为真理，但对这字眼少有足够的思索。在作品中，要是存在者是什么和存在者如何存在被开启出来，作品的真理也就出现了。

在艺术作品中，存在者的真理已被设置于其中了。这里说的“设置”（setzen）是指被置放到显要位置上。一个存在者，一双农鞋，在作品中走进了它的存在的光亮里。存在者之存在进入其显现的恒定中了。

那么，艺术的本质就应该是：“存在者的真理自行设置入作品”。可是迄今为止，人们却一直认为艺术是与美的东西或美有关的，而与真理毫不相干。产生这类作品的艺术，亦被称为美的艺术，以便与生产器具的手工艺区别开来。在美的艺术中，艺术本身无所谓美，它之所以得到此名是因为它产生美。相反，真理倒是属于逻辑的，而美留给了美学。

可是，艺术即真理自行设置入作品这一命题是否会使已经过时的观点，即那种认为艺术是现实的模仿和反映的观点，卷土重来呢？当然，对现存事物的再现要求那种与存在者的符合一致，要求去摹仿存在者；在中世纪，人们称之为符合；亚里士多德早已说过肖似。长期以来，与存在者的符合一致被当作真理的本质。但我们是否认为凡·高的画描绘了一双现存的农鞋，而且是因为把它描绘得惟妙惟肖，才使其成为艺术作品的呢？我们是否认为这幅画把现实事物描摹下来，把现实事物转置到艺术家生产的一个产品中去呢？绝对不是。

艺术作品绝不是对那些时时现存手边的个别存在者的再现，恰恰相反，它是对物的普遍本质的再现。但这普遍本质何在，又如何在呢？艺术作品又如何与其符合一致呢？一座希腊神庙竟与何物的何种本质相符合呢？谁敢断言神庙的理念在这建筑作品中得到表现是不可能的呢？只要它是一件艺术作品，在这件艺术作品中，真理就已设置入其中了。想一想荷尔德林的赞美诗《莱茵河》吧。诗人事先得到了什么，他如何得到的，使他能在诗中将它再现出来？要是荷尔德林的这首赞美诗或其他类似的诗作仍不能说明现实与艺术作品之间的描摹关系，那么，另一部作品，即迈耶尔的《罗马喷泉》一诗，似可以最好地证明那种认为作品描摹现实的观点。

罗马喷泉

水柱升腾又倾注

盈盈充满大理石圆盘，

渐渐消隐又流溢

落入第二层圆盘；

第二层充盈而给予，

更有第三层沸扬涌流，

层层圆盘，同时接纳又奉献

激流不止又泰然住息

这首诗既不是对实际现存的喷泉的诗意描画，也不是对罗马喷泉的普遍本质的再现。但是，真理却已设置入作品中去了。什么样的真理在作品中发生呢？真理当真能发生并历史性地存在吗？人们却说，真理乃是某种无时间的和超时间的东西。

我们寻求艺术作品的现实性，是为了实际地找到包孕于作品中的艺术。我们已经指出，物性的根基是作品最直接的现实。若要把握这种物性因素，传统的物的概念可是毫无助益的，因为它自己都不曾把握物因素的本质。流行的物的概念把物规定为具有形式的质料，这根本就不是出自物的本质，而是出于器具的本质。我们也已经表明，长期以来，在对存在者的解释中，器具存在一直占据着十分重要的优先地位。人们过去未曾予以思考的这种器具存在的优先地位启示我们，要在避开流行解释的同时重新追问器具因素。

我们曾通过一件作品告诉自己，器具是什么。与此同时，在作品中发挥作用的东西也几乎不露痕迹地显现出来，这就是存在者在其存在中的开启，亦即真理之生发（Geschelnis）。然而，如果作品的现实性只能通过在作品中附着于作品的东西来规定的话，那 么，如何解释我们在艺术作品的现实性中寻获现实的艺术作品这一意图呢？一旦我们首先把作品的现实性推断为那物性的根基，我们就误入歧途了。现在，我们站在我们思考的显著的成果面前——如果我们还可以称它为成果的话。有两点已经明朗了：

第一，流行的物的概念不足以用来把握作品的物性因素。

第二，我们意图根据流行的物的概念将其把握为作品的最切近的现实性的那个东西，即物性的根基，并不以此方式归属于作品。

如果我们在作品中寻求物的根基，实际上也就不自觉地把这作品当作了器具，并在这器具上准予建立一座包含着艺术成分的上层建筑。但作品并不是器具， 并不是被配置上审美价值的器具。作品丝毫不是这种东西。相同之处仅仅在于，作品与器具一样，只有当其不再内含和需要自身特有的器具特征，不再需要有用性和制作过程时，才是一纯然物。

我们对作品的追问总是摇摆不定，这是由于我们过去从未探究过作品，所探究的只是半物半器的东西。当然，这并不是才由我们想出来的追问。它是美学的追问态度。美学对艺术作品的认识自始就把艺术置于对一切存在者的传统解释的统辖之下。不过，动摇这种传统的追问态度还不是最为要紧的。至关要紧的是，我们应该擦亮眼睛，看到这样一回事情，即：只有当我们去思考存在者之存在之际，作品之作品因素、器具之器具因素和物之物因素才会接近我们。为此，我们必须拆除自以为是的障碍，把流行的伪装概念撇在 一边。也正因此，本文才绕了一个大圈子。不过，这一大圈也使我们上了路，顺此道路我们就能确定作品的物因素。作品中的物因素不容否定，但如果这种物因素属于作品之作品存在，那就只能从作品之作品因素出发去思考它。所以、走向对作品的物性现实性的规定之路，就不是从物到作品，而是从作品到物。

艺术作品以自己的方式开启存在者之存在。这种开启，即解蔽（Entbergen），亦即存在者之真理，是在作品中发生的。在艺术作品中，存在者之真理自行设置入作品。艺术就是自行设置入作品的真理一那么，这种不时作为艺术而发生出来的真理本身又是什么呢？这种“自行设置入作品” （Sichins－Werk-set-zen）又是什么呢？

作品与真理
艺术作品的本源是艺术。但什么是艺术呢？在艺术作品中，艺术是现实的。因此，我们首先要寻求作品的现实性。这种现实性何在呢？艺术作品概无例外地显示出物因素，虽然方式各不相同。借助于惯常的物概念来把握作品的这样一种物之特性的尝试，已经失败了。这不光是因为此类物概念不能把捉物因素，而且是因为我们通过对其物性根基的追问，把作品逼入了一种先入之见，从而阻断了我们理解作品之作品存在的通路。只要作品的纯粹自立还没有清楚地得到显示，则作品的物因素是决不能得到判定的。

然而，作品本身在某个时候是可通达的吗？为了成功地做到这一点，或许就有必要使作品从它自身以外的东西的所有关联中解脱出来，从而让作品仅仅自为地依据于自身。而艺术家最本己的意旨就在于此。作品要通过艺术家而释放出来，达到它纯粹的自立。正是在伟大的艺术中（我们在此只谈论这种艺术），艺术家与作品相比才是某种无关紧要的东西，他就像一条为了作品的产生而在创作中自我消亡的通道。

作品本身就这样摆和挂在陈列馆和展览厅中。然而，作品在那里自在地就是它们本身所是吗？或者，它们在那里倒不如说是艺术行业的对象？作品乃是为了满足公众和个人的艺术享受的。官方机构负责照料和保护作品。鉴赏家和批评家也忙碌于作品。艺术交易操劳于市场。艺术史研究把作品当作科学的对象。然而，在所有这些繁忙折腾中，我们能遇到作品本身吗？

在慕尼黑博物馆里的《埃吉纳》群雕，索福克勒斯的《安提戈涅》的最佳校勘本，作为其所是的作品已经脱离了它们自身的本质空间。不管这些作品的名望和感染力还是多么巨大，不管它们被保护得多么完好，人们对它们的解释是多么准确，它们被移置到一个博物馆里，它们也就远离了其自身的世界。但即使我们努力中止和避免这种对作品的移置，例如在原地探访波塞冬神庙，在原处探访班贝克大教堂，现存作品的世界也已经颓落了。

世界之抽离和世界之颓落再也不可逆转。作品不再是原先曾是的作品。虽然作品本身是我们在那里所遇见的，但它们本身却是曾在之物（die Gew-esenen）。作为曾在之物，作品在承传和保存的领域内面对我们。从此以后，作品就一味地只是这种对象。它们面对我们，虽然还是先前自立的结果，但不再是这种自立本身了。这种自立已经从作品那里逃逸了。所有艺术行业，哪怕它被抬高到极致，哪怕它的一切活动都以作品本身为轴心，它始终只能达到作品的对象存在。但这种对象存在并不构成作品之作品存在。

然而，如果作品处于任何一种关系之外，那它还是作品吗？作品处于关系之中，这难道不是作品的本性吗？当然是的。只是还要追问：作品处于何种关系之中。

一件作品何所属？作品之为作品，唯属于作品本身开启出来的领域。因为作品的作品存在是在这种开启中成其本质的，而且仅只在这种开启中成其本质（w esen）。我们曾说，真理之生发在作品中起作用。我们对凡·高的油画的提示试图道出这种真理的生发。有鉴于此，才出现了什么是真理和真理如何可能发生这样的问题。

现在，我们在对作品的观照中来追问真理问题。但为了使我们对处于问题中的东西更熟悉些，有必要重新澄清作品中的真理的生发。针对这种意图，我们有意选择了一部不属于表现性艺术的作品。

一件建筑作品并不描摹什么，比如一座希腊神庙。它单朴地置身于巨岩满布的岩谷中。这个建筑作品包含着神的形象，并在这种隐蔽状态中，通过敞开的圆柱式门厅让神的形象进入神圣的领域。贯通这座神庙，神在神庙中在场。神的这种现身在场是在自身中对一个神圣领域的扩展和勾勒。但神庙及其领域却并非飘浮于不确定性中。正是神庙作品才嵌合那些道路和关联的统一体，同时使这个统一体聚集于自身周围；在这些道路和关联中，诞生和死亡、灾祸和福祉、胜利和耻辱、忍耐和堕落——从人类存在那里获得了人类命运的形态。这些敞开的关联所作用的范围，正是这个历史性民族的世界。出自这个世界并在这个世界中，这个民族才回归到它自身，从而实现它的使命。

这个建筑作品阒然无声地屹立于岩地上。作品的这一屹立道出了岩石那种笨拙而无所促迫的承受的幽秘。建筑作品阒然无声地承受着席卷而来的猛烈风暴，因此才证明了风暴本身的强力。岩石的璀璨光芒看来只是太阳的恩赐，然而它却使得白昼的光明、天空的辽阔、夜晚的幽暗显露出来。神庙的坚固的耸立使得不可见的大气空间昭然可睹了。作品的坚固性遥遥面对海潮的波涛起伏，由于它的泰然宁静才显出了海潮的凶猛。树木和草地、兀鹰和公牛、蛇和蟋蟀才进入它们突出鲜明的形象中，从而显示为它们所是的东西。希腊人很早就把这种露面、涌现本身和整体叫作注2。［涌现、自然］同时也照亮了人在其上和其中赖以筑居的东西。我们称之为大地（Erde）。在这里，大地一词所说的，既与关于堆积在那里的质料体的观念相去甚远，也与关于一个行星的宇宙观念格格不入。大地是一切涌现者的返身隐匿之所，并且是作为这样一种把一切涌现者返身隐匿起来的涌现。在涌现者中，大地现身为庇护者（das Bergende）。

注2希腊文通译为“自然”，而依海德格尔之见，是生成性的，本意应解作“出现”“涌现”（aufgehen）等。

神庙作品阒然无声地开启着世界，同时把这世界重又置回到大地之中。如此这般，大地本身才作为家园般的基地而露面。但人和动物、植物和物，从来就不是作为恒定不变的对象，不是现成的和熟悉的，从而可以附带地把对神庙来说适宜的周遭表现出来，此神庙有朝一日也成为现身在场的东西。如果我们把一切倒转过来思考一切，我们倒是更切近于所是的真相；当然，这是有前提的，即，我们要事先看到一切如何不同地转向我们。纯然为倒转而倒转，是不会有什么结果的。

神庙在其阒然无声的矗立中才赋予物以外貌，才赋予人类以关于他们自身的展望。只要这个作品是作品，只要神还没有从这个作品那里逃逸，那么，这种视界就总是敞开的。神的雕像的情形亦然，这种雕像往往被奉献给竞赛中的胜利者。它并非人们为了更容易认识神的形象而制作的肖像；它是一部作品，这部作品使得神本身现身在场，因而就是（ist）神本身。相同的情形也适合于语言作品。在悲剧中并不表演和展示什么，而是进行着新神反抗旧神的斗争。由于语言作品产生于民众的言语，因而它不是谈论这种斗争，而是改换着民众的言说，从而使得每个本质性的词语都从事着这种斗争并且做出决断：什么是神圣，什么是凡俗；什么是伟大，什么是渺小；什么是勇敢，什么是怯懦；什么是高贵，什么是粗俗；什么是主人，什么是奴隶（参看赫拉克利特，残篇第53）。

那么，作品之作品存在何在呢？在对刚才十分粗略地揭示出来的东西的不断展望中，我们首先对作品的两个本质特征该是较为明晰了。这里，我们是从早就为人们所熟悉了的作品存在的表面特征出发的，亦即是从作品存在的物因素出发的；我们通常对付作品的态度就是以物因素为立足点的。

要是一件作品被安放在博物馆或展览厅里，我们会说，作品被建立（aufstellen）了。但是，这种建立与一件建筑作品的建造意义上的建立，与一座雕像的树立意义上的建立，与节日庆典中悲剧的表演意义上的建立，是大相径庭的。这种建立乃是奉献和赞美意义上的树立。这里的“建立”不再意味着纯然的设置。在建立作品时，神圣者作为神圣者开启出来，神被召唤入其现身在场的敞开之中；在此意义上，奉献就是神圣之献祭（heiligen）。赞美属于奉献，它是对神的尊严和光辉的颂扬。尊严和光辉并非神之外和神之后的特性，不如说，神就在尊严中，在光辉中现身在场。我们所谓的世界，在神之光辉的反照中发出光芒，亦即光亮起来。树立（Errichten）意味着：把在指引尺度意义上的公正性开启出来；而作为指引尺度，是本质性因素给出了指引。但为什么作品的建立是一种奉献着、赞美着的树立呢？因为作品本身在其作品存在中就要求如此。作品是如何要求这样一种建立的呢？因为作品本身在其作品存在中就是有所建立的。而作品之为作品建立什么呢？作品在自身中突现着，开启出一个世界，并且在运作中永远持守这个世界。

作品存在就是建立一个世界。但这个世界是什么呢？其实，当我们谈论神庙时，我们已经说明了这个问题。只有在我们这里所走的道路上，世界之本质才得以显示出来。甚至这种显示也局限于一种抵制，即抵制那种起初会把我们对世界之本质的洞察引入迷途的东西。

世界并非现存的可数或不可数的、熟悉或不熟悉的物的单纯聚合。但世界也不是加上了我们对现成事物之总和的表象的想象框架。世界世界化，它比我们自认为十分亲近的可把握和可觉知东西的更具存在特性。世界绝不是立身于我们面前、能够让我们细细打量的对象。只要诞生与死亡、祝福与诅咒的轨道不断地使我们进入存在，世界就始终是非对象性的东西，而我们人始终隶属于它。在我们的历史的本质性决断发生之处，在这些本质性决断为我们所采纳和离弃、误解和重新追问的地方，世界世界化。石头是无世界的。植物和动物同样也是没有世界的；它们落入一个环境，属于一个环境中掩蔽了的涌动的杂群。与此相反，农妇却有一个世界，因为她逗留于存在者之敞开领域中。器具以其可靠性给予这个世界一种自身的必然性和切近。由于一个世界敞开出来，所有的物都获得了自己的快慢、远近、大小。在世界化中，那种广袤（Geräumigkeit）聚集起来；由此广袤而来，诸神有所保存的恩宠得到了赠予或者拒绝。甚至那上帝缺席的厄运也是世界世界化的一种方式。

因为一件作品是作品，它就为那种广袤设置空间。“为 …… 设置空间”（einräumen）在此特别意味着：开放敞开领域之自由，并且在其结构中设置这种自由。这种设置出于上面所说的树立。作品之为作品建立一个世界。作品张开了世界之敞开领域。但是，建立一个世界仅仅是这里要说的作品之作品存在的本质特性之一。至于另一个与此相关的本质特性，我们将用同样的方式从作品的显突因素那里探个明白。

一件作品从这种或那种作品材料那里，诸如从石头、木料、铁块、颜料、语言、声音等那里，被创作出来，我们也说，它由此被制造（herstellen）出来。然而，正如作品要求一种在奉献着、赞美着的树立意义上的建立，因为作品的作品存在就在于建立一个世界，同样的，制造也是必不可少的，因为作品的作品存在本身就具有制造的特性。作品之为作品，本质上是有所制造的。但作品制造什么呢？关于这一点，只有当我们追究了作品的表面的、通常所谓的制造，我们才会有所了解。

作品存在包含着一个世界的建立。在此种规定的视界内来看，在作品中哪些本质是人们通常称之为作品材料的东西呢？器具由有用性和适用性所决定，它选取适用的质料并由这种质料组成。石头被用来制作器具，比如制作一把石斧。石头于是消失在有用性中。质料愈是优良，愈是适宜，它也就愈无抵抗地消失在器具的器具存在中。而与此相反，神庙作品由于建立一个世界，它并没有使质料消失，倒是才使质料出现，而且使它出现在作品的世界的敞开领域之中：岩石能够承载和持守，并因而才成其为岩石；金属闪烁，颜色发光，声音朗朗可听，词语得以言说。所有这一切得以出现，都是由于作品把自身置回到石头的硕大和沉重、木头的坚硬和韧性、金属的刚硬和光泽、颜色的明暗、声音的音调和词语的命名力量之中。

作品回归之处，作品在这种自身回归中让其出现的东西，我们曾称之为大地。大地乃是涌现着、庇护着的东西。大地是无所促迫的无碍无累和不屈不挠的东西。立于大地之上并在大地之中，历史性的人类建立了他们在世界之中的栖居。由于建立一个世界，作品制造大地。在这里，我们应该从这个词的严格意义上来思制造。作品把大地本身挪入一个世界的敞开领域中，并使之保持于其中。作品让大地是大地。

作品把自身置回到大地中，大地被制造出来。但为什么这种制造必须这样发生呢？什么是大地——恰恰以这种方式进入无蔽领域的大地呢？石头负荷并且显示其沉重。这种沉重向我们压来，它同时却拒绝我们向它穿透。要是我们砸碎石头而试图穿透它，石头的碎块却决不会显示出任何内在的和被开启的东西。石头很快就又隐回到其碎块的负荷和硕大的同样的阴沉之趣中去了。要是我们把石头放在天平上面，试图以这种不同的方式来把握它，那么，我们只不过是把石头的沉重带入重量计算之中而已。这种对石头的规定或许是很准确的，但只是数字而已，而负荷却从我们这里逃之夭夭了。色彩闪烁发光而且唯求闪烁。要是我们自作聪明地加以测定，把色彩分解为波长数据，那色彩早就杳无踪迹了。只有当它尚未被揭示、未被解释之际，它才显示自身。因此，大地让任何对它的穿透在它本身那里破灭了。大地使任何纯粹计算式的胡搅蛮缠彻底幻灭了。虽然这种胡搅蛮缠以科学技术对自然的对象化的形态给自己罩上统治和进步的假象，但是，这种支配始终是意欲的昏晕无能。只有当大地作为本质上不可展开的东西被保持和保护之际——大地退遁于任何展开状态，亦即保持永远的锁闭——大地才敞开地澄亮了，才作为大地本身而显现出来。大地上的万物，亦即大地整体本身，汇聚于一种交响齐奏之中。不过，这种汇聚并非消逝。在这里流动的是自身持守的河流，这条河流的界线的设置，把每个在场者都限制在其在场中。因此，在任何一个自行锁闭的物中，有着相同的自不相识（Sich-nicht-Kennen）。大地是本质上自行锁闭者。制造大地意思就是：把作为自行锁闭者的大地带入敞开领域之中。

这种对大地的制造由作品来完成，因为作品把自身置回到大地之中。但大地的自行锁闭并非单一的、僵固的遮盖，而是自身展开到其质朴的方式和形态的无限丰富性之中。虽然雕塑家使用石头的方式，仿佛与泥瓦匠和石头打交道并无二致。但雕塑家并不消耗石头；除非出现败作时，才可以在某种程度上说他消耗了石头。虽然画家也使用颜料，但他的使用并不是消耗颜料，倒是使颜色得以闪耀发光。虽然诗人也使用词语，但他不像通常讲话和书写的人们那样不得不消耗词语，倒不如说，词语经由诗人的使用，才成为并且保持为词语。

在作品中根本就没有作品质料的痕迹。甚至，在对器具的本质规定中，通过把器具标识为在其器具性本质之中的质料，这样做是否就切中了器具的构成因素，这一点也还是值得怀疑的。

建立一个世界和制造大地，乃是作品之作品存在的两个基本特征。当然，它们是休戚相关的，处于作品存在的统一体中。当我们思考作品的自立，力图道出那种自身持守（Aufsichberuhen）的紧密一体的宁静时，我们就是在寻找这个统一体。

可是，凭上述两个基本特征，即使有某种说服力，我们却毋宁说是在作品中指明一种发生（Geschehen），而绝不是一种宁静；因为宁静不是与运动对立的东西又是什么呢？但它绝不是排除了自身运动的那种对立，而是包含着自身运动的对立。唯有动荡不安的东西才能宁静下来。宁静的方式随运动的方式而定。在物体的单纯位移运动中，宁静无疑只是运动的极限情形。要是宁静包含着运动，那么就会有一种宁静，它是运动的内在聚合，也就是最高的动荡状态——假设这种运动方式要求这种宁静的话。而自持的作品就具有这种宁静。因此，当我们成功地在整体上把握了作品存在中的发生的运动状态，我们就切近于这种宁静了。我们要问：建立一个世界和制造大地在作品本身中显示出何种关系？

世界是自行公开的敞开状态，即在一个历史性民族的命运中单朴而本质性的决断的宽阔道路的自行公开的敞开状态（Offenheit）。大地是那永远自行锁闭者和如此这般的庇护者的无所促迫的涌现。世界和大地本质上彼此有别，但却相依为命。世界建基于大地，大地穿过世界而涌现出来。但是，世界与大地的关系绝不会萎缩成互不相干的对立之物的空洞的统一体。世界立身于大地；在这种立身中，世界力图超升于大地。世界不能容忍任何锁闭，因为它是自行公开的东西。而大地是庇护者，它总是倾向于把世界摄入它自身并扣留在它自身之中。

世界与大地的对立是一种争执（Streit）。但由于我们老是把这种争执的本质与分歧、争辩混为一谈，并因此只把它看作紊乱和破坏，所以我们轻而易举地歪曲了这种争执的本质。然而，在本质性的争执中，争执者双方相互进入其本质的自我确立中。而本质之自我确立从来不是固执于某种偶然情形，而是投入本己存在之渊源的遮蔽了的原始性中。在争执中，一方超出自身包含着另一方。争执于是总是愈演愈烈，愈来愈成为争执本身。争执愈强烈地独自夸张自身，争执者也就愈加不屈不挠地纵身于质朴的恰如其分的亲密性（Innigkeit）之中。大地离不开世界之敞开领域，因为大地本身是在其自行锁闭的被解放的涌动中显现的。而世界不能飘然飞离大地，因为世界是一切根本性命运的具有决定作用的境地和道路，它把自身建基于一个坚固的基础之上。

由于作品建立一个世界并制造大地，故作品就是这种争执的诱因。但是，争执的发生并不是为了使作品把争执消除和平息在一种空泛的一致性中，而是为了使争执保持为一种争执。作品建立一个世界并制造大地，同时就完成了这种争执。作品之作品存在就在于世界与大地的争执的实现过程中。因为争执在亲密性之单朴性中达到其极致，所以在争执的实现过程中就出现了作品的统一体。争执的实现过程是作品运动状态的不断自行夸大的聚集。因而在争执的亲密性中，自持的作品的宁静就有了它的本质。

只有在作品的这种宁静中，我们才能看到，什么在作品中发挥作用。迄今为止，认为在艺术作品中真理被设置入作品的看法始终还是一个先入为主式的断言。真理究竟怎样在作品之作品存在中发生呢？也就是说：在世界与大地的争执的实现过程中，真理究竟是怎样发生的呢？什么是真理呢？

我们关于真理之本质的知识是那样微乎其微，愚钝不堪。这已经由一种漫不经心的态度所证明了；我们正是凭着这种漫不经心而肆意沉湎于对这个基本词语的使用。对于真理这个词，人们通常是指这个真理和那个真理，它意味着某种真实的东西。这类东西据说是在某个命题中被表达出来的知识。可是，我们不光称一个命题是真的，我们也把一件东西叫作真的，譬如，与假金相区别的真金。在这里，“真的”（w ahr）意指与真正的、实在的黄金一样多。而在此关于“实在之物”（das Wirkliche）的谈论意指什么呢？在我们看来，“实在之物”就是在真理中的存在者。真实就是与实在相符，而实在就是处于真理之中。这一循环又闭合了。

何谓“在真理之中”呢？真理是真实之本质。我们说“本质”，我们想的是什么呢？“本质”通常被看作是所有真实之物所共同拥有的特征。本质出现在类概念和普遍概念中，类概念和普遍概念表象出一个对杂多同样有效的“一”（das Eine）。但是，这种同样有效的本质（在essentia［本质］意义上的本质性）却不过是非本质性的本质。那么，某物的本质性的本质何在？大概它只在于真理中的存在者的所是之中。一件东西的真正本质由它的真实存在所决定，由每个存在者的真理所决定。可是，我们现在要寻找的并不是本质的真理，而是真理的本质。这因此表现为一种荒谬的纠缠。这种纠缠仅只是一种奇怪现象吗？甚或，它只是概念游戏的空洞的诡辩？或者——竟是一个深渊么？

真理意指真实之本质。我们要通过回忆一个希腊词语来思这一点。［无蔽］意味着存在者之无蔽状态。但这就是一种对真理之本质的规定吗？我们难道不是仅只做了一种词语用法的改变，也即用无蔽代替真理，以此标明一件实事吗？当然，只要我们不知道究竟必定发生了什么，才能迫使真理之本质必得在“无蔽”一词中道出，那么，我们确实只是变换了一个名称而已。

为此需要革新希腊哲学吗？绝对不是的。哪怕这种不可能的革新竟成为可能，对我们也毫无助益；因为自其发端之日起，希腊哲学隐蔽的历史就没有保持与［无蔽］一词中赫然闪现的真理之本质保持一致，同时不得不把关于真理之本质的知识和道说越来越置入对真理的一个派生本质的探讨中。作为θεια［无蔽］的真理之本质在希腊思想中未曾得到思考，在后继时代的哲学中就更是理所当然地不受理会了。对思想而言，无蔽乃希腊式此在中遮蔽最深的东西，但同时也是早就开始规定着一切在场者之在场的东西。

但为什么我们就不能停留在千百年来我们已十分熟悉的真理之本质那里就算了呢？长期以来，一直到今天，真理便意味着知识与事实的符合一致。然而，要使认识以及构成并且表达知识的命题能够符合于事实，以便因此使事实事先能约束命题，事实本身却还必须显示出自身来。而要是事实本身不能出于遮蔽状态，要是事实本身并没有处于无蔽领域之中，它又如何能显示自身呢？命题之为真，乃是由于命题符合于无蔽之物，亦即与真实相一致。命题的真理始终是正确性（Richtigkeit），而且始终仅仅是正确性。自笛卡儿以降，真理的批判性概念都是以作为确定性（Gewiвheit）的真理为出发点的，但这也只不过是那种把真理规定为正确性的真理概念的变形。我们对这种真理的本质十分熟悉，它亦即表象（Vorstellen）的正确性，完全与作为存在者之无蔽状态的真理一起沉浮。

如果我们在这里和在别处将真理把握为无蔽，我们并非仅仅是在对古希腊词语更准确的翻译中寻找避难之所。我们实际上是在思索流行的，因而也被滥用的那个在正确性意义上的真理之本质的基础是什么，这种真理的本质是未曾被经验和未曾被思考过的东西。偶尔我们只得承认，为了证明和理解某个陈述的正确性（即真理），我们自然要追溯到已经显而易见的东西那里。这种前提实在是无法避免的。只要我们这样来谈论和相信，那么，我们就始终只是把真理理解为正确性，它却还需要一个前提，而这个前提就是我们自己刚才所做的——天知道如何又是为何。

但是，并不是我们把存在者之无蔽状态设为前提，而是存在者之无蔽状态（即存在）把我们置入这样一种本质之中，以至于我们在我们的表象中总是已经被投入无蔽状态之中，并且与这种无蔽状态亦步亦趋。不仅知识自身所指向的东西必须已经以某种方式是无蔽的，而且这一“指向某物”（Sichrichten nach etw as）的活动发生于其中的整个领域，以及同样的一种命题与事实的符合对之而公开化的那个东西，也必须已经作为整体发生于无蔽之中了。倘若不是存在者之无蔽状态已经把我们置入一种光亮领域，而一切存在者就在这种光亮中站立起来，又从这种光亮那里撤回自身，那么，我们凭我们所有正确的观念，就可能一事无成，我们甚至也不能先行假定，我们所指向的东西已经显而易见了。

然而这是怎么回事呢？真理作为这种无蔽状态是如何发生的呢？这里我们首先必须更清晰地说明这种无蔽状态究竟是什么。

物存在，人存在；礼物和祭品存在；动物和植物存在；器具和作品存在。存在者处于存在之中。一种注定在神性和反神性之间的被掩蔽的厄运贯通着存在。存在者的许多东西并非人所能掌握的，只有少量为人所认识。所认识的也始终是一个大概，所掌握的也始终不可靠。一如存在者太易于显现出来，它从来就不是我们的制作，更不是我们的表象。要是我们思考一个统一的整体，那么，看来好像我们就把握了一切存在者，尽管只是粗糙有余的把握。

然而，超出存在者之外，但不是离开存在者，而是在存在者之前，在那里还发生着另一回事情。在存在者整体中间有一个敞开的处所。一种澄明（Lich-tung）在焉。从存在者方面来思考，此种澄明比存在者更具存在者特性。因此，这个敞开的中心并非由存在者包围着，而不如说，这个光亮中心本身就像我们所不认识的无（Nichts）一样，围绕一切存在者而运行。

唯当存在者进入和出离这种澄明的光亮领域之际，存在者才能作为存在者而存在。唯有这种澄明才允诺并且保证我们人通达非人的存在者，走向我们本身所是的存在者。由于这种澄明，存在者才在确定的和不确定的程度上是无蔽的，就连存在者的遮蔽也只有在光亮的区间内才有可能。我们遇到的每一存在者都遵从在场的这种异乎寻常的对立，因为存在者同时总是把自己抑制在一种遮蔽状态中。存在者进入其中的澄明，同时也是一种遮蔽，但遮蔽以双重方式在存在者中间起着决定作用。

要是我们关于存在者还只能说“它存在”，那么，存在者就拒绝我们，直至那个“一”和我们最容易切中的看起来最微不足道的东西。作为拒绝的遮蔽不只是知识的一向的界限，而是光亮领域之澄明的开端。但遮蔽也同时存在于光亮领域之中，当然是以另一种方式。存在者蜂拥而动，彼此遮盖，相互掩饰，少量阻隔大量，个别掩盖全体。在这里，遮蔽并非简单的拒绝，而是：存在者虽然显现出来，但它显现的不是自身，而是它物。

这种遮蔽是一种伪装（Verstellen）。倘若存在者并不伪装存在者，我们又怎么会在存在者那里看错和搞错，我们又怎么会误入歧途、晕头转向，尤其是如此狂妄自大呢？存在者能够以假象迷惑，这就决定了我们会有差错误会，而非相反。

遮蔽可能是一种拒绝，或者只不过是一种伪装。遮蔽究竟是拒绝呢，抑或伪装，对此我们简直无从确定。遮蔽遮蔽着自身，伪装着自身。这就是说：存在者中间的敞开的处所，也就是澄明，绝非一个永远拉开帷幕的固定舞台，好让存在者在这个舞台上演它的好戏。恰恰相反，澄明唯作为这种双重的遮蔽才发生出来。存在者之无蔽从来不是一种纯然现存的状态，而是一种生发（Gescheh-nis）。无蔽状态（即真理）既非存在者意义上的事物的一个特征，也不是命题的一个特征。

我们相信我们在存在者的切近的周围中是游刃有余的。存在者是熟悉的、可靠的、亲切的。但具有拒绝和伪装双重形式的持久的遮蔽仍然穿过澄明。亲切根本上并不亲切，而倒是阴森森的（un-geheuer）。真理的本质，亦即无蔽，是由一种否定而得到彻底贯彻的。但这种否定并非匮乏和缺憾，仿佛真理是摆脱了所有遮蔽之物的纯粹无蔽似的，倘若果真能如此，那么真理就不再是真理本身了。这种以双重遮蔽方式的否定属于作为无蔽的真理之本质。真理在本质上即是非真理（U n-w ahrheit）。为了以一种也许令人吃惊的尖刻来说明，我们可以说，这种以遮蔽方式的否定属于作为澄明的无蔽。相反，真理的本质就是非真理。但这个命题却不能说成：真理根本上是谬误。同样的，这个命题的意思也不是说：真理从来不是它自身，辩证地看，真理也总是其对立面。

只要遮蔽着的否定（Verweigern）作为拒绝（Versagen）首先把永久的渊源归于一切澄明，而作为伪装的否定却把难以取消的严重迷误归于一切澄明，那么，真理就作为它本身而成其本质。就真理的本质来说，那种在真理之本质中处于澄明与遮蔽之间的对抗，可以用遮蔽着的否定来称呼它。这是原始的争执的对立。就其本身而言，真理之本质即是原始争执（Urstreit），那个敞开的中心就是在这一原始争执中被争得的；而存在者站到这个敞开中心中去，或离开这个中心，把自身置回到自身中去。

这种敞开领域（das Offene）发生于存在者中间。它展示了一个我们已经提到过的本质特征。世界和大地属于敞开领域，但是世界并非直接就是与澄明相应的敞开领域，大地也不是与遮蔽相应的锁闭。而毋宁说，世界是所有决断与之相顺应的基本指引的道路的澄明。但任何决断都是以某个没有掌握的、遮蔽的、迷乱的东西为基础的；否则它就绝不是决断。大地并非直接就是锁闭，而是作为自行锁闭者而展开出来的。按其自身各自的本质而言，世界与大地总是有争执的，是好争执的。唯有这样的世界和大地才能进入澄明与遮蔽的争执之中。

只要真理作为澄明与遮蔽的原始争执而发生，大地就一味地通过世界而凸现，世界就一味地建基于大地中。但真理如何发生呢？我们回答说：真理以几种根本性的方式发生。真理发生的方式之一就是作品的作品存在。作品建立着世界并制造着大地，作品因之是那种争执的实现过程，在这种争执中，存在者整体之无蔽状态亦即真理被争得了。

在神庙的矗立中发生着真理。这并不是说，在这里某种东西被正确地表现和描绘出来了，而是说，存在者整体被带入无蔽状态并且保持于无蔽状态之中。保持原本就意味着守护。在凡·高的油画中发生着真理。这并不是说，在此画中某种现存之物被正确地临摹出来了，而是说，在鞋具的器具存在的敞开中，存在者整体，亦即在冲突中的世界和大地，进入无蔽状态之中。

在作品中发挥作用的是真理，而不只是一种真实。刻画农鞋的油画，描写罗马喷泉的诗作，不光是显示——如果它们总是有所显示的话——这种个别存在者是什么，而是使得无蔽状态本身在与存在者整体的关涉中发生出来。鞋具愈单朴、愈根本地在其本质中出现，喷泉愈不假修饰、愈纯粹地以其本质出现，伴随它们的所有存在者就愈直接、愈有力地变得更具有存在者特性。于是，自行遮蔽着的存在便被澄亮了。如此这般形成的光亮，把它的闪耀嵌入作品之中。这种被嵌入作品之中的闪耀（Scheinen）就是美。美是作为无蔽的真理的一种现身方式。

现在，虽然我们从几个方面对真理之本质有了较为清晰的把握，因而对在作品中起作用的东西该是比较清楚了。但是，眼下显然可见的作品之作品存在依然还没有告诉我们任何关于作品的最切近、最突出的现实性和作品中的物因素。甚至看来几乎是：在我们追求尽可能纯粹地把握作品自身的自立时，我们完全忽略了一件事情，即作品始终是作品——宁可说是一个被创造的东西。如果说有某某东西能把作品之为作品显突出来的话，那么，它只能是作品的被创作存在（Geschaffensein）。因为作品是被创作的，而创作需要一种它借以创造的媒介物，那种物因素也就进入了作品之中。这是无可争辩的。不过，悬而未决的问题还是：被创作存在如何属于作品？对此问题的澄清要求弄清下面两点：

在此何谓区别于制造和被制造存在的被创作存在和创作呢？

唯从作品本身的内在本质出发，才能确定被创作存在如何属于作品以及它在多大程度上决定了作品的作品存在。作品的这种最内在本质是什么呢？

在这里，创作始终被认为是关涉于作品的。作品的本质就包含着真理的发生。我们自始就从它与作为存在者之无蔽状态的真理的本质的关系出发，来规定创作的本质。被创作存在之属于作品，只有在一种更加原始的对真理之本质的澄清中才能得到揭示。这就又回到了对真理及其本质的追问上来了。倘若“在作品中真理起着作用”这一命题不该是一个纯粹的论断的话，那么，我们就必须再次予以追问。

于是，我们现在必须更彻底地发问：一种与诸如某个作品之类的东西的牵连，如何处于真理之本质中？为了能成为真理，那种能够被设置入作品中的真理，或者在一定条件下甚至必须被设置入作品中的真理，到底具有何种本质呢？而我们曾把“真理之设置入作品”规定为艺术的本质。因此，最终提出的问题就是：什么是能够作为艺术而发生，甚或必须作为艺术而发生的真理？何以有艺术呢？

真理与艺术
艺术作品和艺术家的本源是艺术。本源即是存在者之存在现身于其中的本质来源。什么是艺术？我们在现实的作品中寻找艺术之本质。作品之现实性是由在作品中发挥作用的东西，即真理的发生，来规定的。此种真理之生发，我们思之为世界与大地之间的争执的实现。在这种争执的被聚合起来的动荡不安（Bew egnis）中有宁静。作品的自持就建基于此。

真理之生发在作品中发挥作用。但这样发挥作用的东西却在作品中。因而在这里就已经先行把现实的作品设定为那种发生的载体。对现存作品的物因素的追问又迫在眉睫了。于是，下面这一点终于清楚了：无论我们多么热诚地追问作品的自立，只要我们还没有领会艺术作品是一个制成品，我们就找不到它的现实性。其实这种看法是最切近而明显的，因为在“作品”一词中我们就听出制成品的意思。作品的作品因素，就在于它由艺术家所赋予的被创作存在之中。我们直到现在才提到这个最显而易见而又说明一切的对作品的规定，看来可能是令人奇怪的。

然而，作品的被创作存在显然只有根据创作过程才可能得到把握。因此，在这个事实的强迫下，我们就不得不懂得去深入领会艺术家的活动，才能切中艺术作品的本源。纯粹根据作品本身来规定作品的作品存在，这种尝试业已证明是行不通的。

如果我们现在撇开作品不管，而去追踪创作的本质，那么，我们无非是想坚持我们起初关于农鞋的油画、继之关于希腊神庙所说出的看法。

我们把创作思为一种生产（Hervorbingen）。但器具的制作也是一种生产。手工业却无疑并不创作作品——这是一个奇特的语言游戏；哪怕我们有必要把手工艺产品和工厂制品区别开来，手工业也没有创作作品。但是，创作的生产又如何与制作方式的生产区别开来呢？按照字面，我们是多么轻而易举地区分作品创作与器具制作，而要按照它们各自的基本特征探究生产的两种方式，又是多么举步维艰。依最切近的印象，我们在陶匠和雕塑家的活动中，在木工和画家的活动中，发现了相同的行为。作品创作本身需要手工艺行为。伟大的艺术家最为推崇手工艺才能了。他们首先要求出于娴技熟巧的细心照料的才能。最重要的是，他们努力追求手工艺中那种永葆青春的训练有素。人们已经充分看到，对艺术作品有良好领悟的希腊人用同一个词［技艺］来表示手艺和艺术，并且用同一个名称［艺人］来称呼手工技艺家和艺术家。

因此，看来最好是从创作的手工技艺方面来确定创作的本质。但上面提到的希腊人的语言用法以及他们对事情的经验却迫使我们深思。不管我们多么普遍、多么清楚地指出希腊人常用相同的词来称呼手艺和艺术，这种指示依然是肤浅的和有失偏颇的。因为并非指手艺也非指艺术，也不是指我们今天所谓的技术，根本上，它从来不是指某种实践活动。

希腊文的这个词毋宁说是知道（Wissen）的一种方式。知道意味着：已经看到（gesehen haben），而这是在“看”的广义上说的，意思就是对在场者之为这样一个在场者的觉知（vernehmen）。对希腊思想来说，知道的本质在于［无蔽］，亦即存在者之解蔽。它承担和引导任何对存在者的行为。由于知道使在场者之为这样一个在场者出于遮蔽状态，而特地把它带入其外观（Aussehen）的无蔽状态中，因此［技艺］作为希腊人所经验的知道就是存在者之生产从来不是指制作活动。

艺术家之为一个［艺人］，并非因为他也是一个工匠，而是因为，无论是作品的制造（Her-stellen），还是器具的制造，都是在生产（Her-vov-bringen）中发生的，这种生产自始就使得存在者以其外观而出现于其在场中。但这一切都发生在自然而然地展开的存在者中间，也即是在［涌现、自然］中间发生的。把艺术称为［技艺］，这绝不是说对艺术家的活动应从手工技艺方面来了解。在作品制作中看来好像手工制作的东西却有着不同的特性。艺术家的活动由创作之本质来决定和完成，并且也始终被扣留在创作之本质中。

如果不能以手工艺为引线去思考创作的本质，那么，我们应当依什么线索去思考创作的本质呢？莫非除了根据那被创作的东西即作品外，还有别的办法吗？尽管作品首先是在创作之实行中才成为现实的，因而就其现实性来说取决于创作，但创作的本质却是由作品的本质来规定的。尽管作品的被创作存在与创作相关联，但被创作存在和创作都得根据作品的作品存在来规定。现在，为什么我们起初只是讨论作品，直到最后才来考察被创作存在，也就不会令人奇怪了。如果说被创作存在本质上属于作品，正如从“作品”一词中即可听出被创作存在，那么，我们就必须努力进一步更本质性地去领会迄今为止可以被规定为作品的作品存在的东西。

根据我们已获得的对作品的本质界定，在作品中真理之生发起着作用。由于这种考虑，我们就可以把创作规定为：让某物出现于被生产者之中（das Her-vorgehenlassen in ein Hervorgebrachtes）。作品之成为作品，是真理之生成和发生的一种方式。一切全然在于真理的本质中。但什么是真理？什么是必定在这样一种被创作的东西中发生的真理呢？真理何以出于其本质的基础而牵连于一作品？我们能从上面所揭示的真理之本质来理解这一点吗？

真理是非真理，因为在遮蔽意义上的尚未被解蔽的东西的渊源范围就属于真理。在作为真理的非遮蔽中，同时活动着另一个双重禁阻（Verwehren）的“非”。真理之为真理，现身于澄明与双重遮蔽的对立中。真理是原始争执，在其中，敞开领域一向以某种方式被争得了，于是，显示自身和退隐自身的一切存在者进入敞开领域之中或离开敞开领域而固守自身。无论何时何地发生这种争执，争执者，即澄明与遮蔽，都由此而分道扬镳。这样就争得了争执领地的敞开领域。这种敞开领域的敞开性也即真理；当且仅当真理把自身设立在它的敞开领域中，真理才是它所是，亦即是这种敞开性。因此在这种敞开领域中始终必定有存在者存在，好让敞开性获得栖身之所和坚定性。由于敞开性占据着敞开领域，因此敞开性开放并维持着敞开领域。在这里，设置和占据都是从［置立］的希腊意义出发得到思考的，后者意谓：在无蔽领域中的一种建立（Aufstellen）。

由于指出敞开性自行设立于敞开领域之中，思想就触及了一个我们在此还不能予以说明的区域。所要指出的只是：如果存在者之无蔽状态的本质以某种方式属于存在本身（参看拙著《存在与时间》，第44节），那么，存在就从其本质而来让敞开性之领地亦即此之澄明（Lichtung des Da）得以出现，并引导这个领地成为任何存在者以各自方式展开于其中的领地。

真理之发生无非是它在通过它本身而公开自身的争执和领地中设立自身。由于真理是澄明与遮蔽的对抗，因此真理包含着此处所谓的设立（Einrichtung）。但是，真理并非事先在某个不可预料之处自在地现存着，然后再在某个地方把自身安置在存在者中的东西。这是绝无可能的，因为是存在者的敞开性才提供出某个地方的可能性和一个充满在场者的场所的可能性。敞开性之澄明和在敞开中的设立是共属一体的。它们是真理之发生的同一个本质。真理之发生以其形形色色的方式是历史性的。

真理把自身设立于由它开启出来的存在者之中，一种根本性方式就是真理的自行设置入作品。真理现身运作的另一种方式是建立国家的活动。真理获得闪耀的又一种方式是邻近于那种并非某个存在者而是存在者中最具存在特性的东西。真理设立自身的再一种方式是本质性的牺牲。真理生成的又一种方式是思想者的追问，这种作为存在之思的追问命名着大可追问的存在。相反，科学却绝不是真理的原始发生，科学无非是一个已经敞开的真理领域的扩建的，而且是通过把握和论证在此领域内显现为可能和必然的正确之物来扩建。当且仅当科学超出正确性之外而达到一种真理，也即达到对存在者之为存在者的彻底揭示，它便成为哲学了。

因为真理的本质在于把自身设立于存在者之中从而才成其为真理，所以，在真理之本质中包含着那种与作品的牵连（Zug zum Werk），后者乃是真理本身得以在存在者中间存在的一种突出的可能性。

真理之进入作品的设立是这样一个存在者的生产，这个存在者先前还不曾在，此后也不再重复。生产过程把这种存在者如此这般地置入敞开领域之中，从而被生产的东西才照亮了它出现于其中的敞开领域的敞开性。当生产过程特地带来存在者之敞开性亦即真理之际，被生产者就是一件作品。这种生产就是创作。作为这种带来，创作毋宁说是在与无蔽之关联范围内的一种接收和获取。那么，被创作存在何在呢？我们可以用两个本质性的规定来加以说明。

真理把自身设立在作品中。真理唯独作为在世界与大地的对抗中的澄明与遮蔽之间的争执而现身。真理作为这种世界与大地的争执被置入作品中。这种争执不会在一个特地被生产出来的存在者中被解除，也不会单纯地得到安顿，而是由于这个存在者而被开启出来。因此，这个存在者自身必具备争执的本质特性。在争执中，世界与大地的统一性被争得了。由于一个世界开启出来，世界就对一个历史性的人类提出胜利与失败、祝祷与亵渎、主宰与奴役的决断。涌现着的世界使得尚未决断的东西和无度的东西显露出来，从而开启出尺度和决断的隐蔽的必然性。

另一方面，当一个世界开启出来，大地也耸然突现。大地显示自身为万物的载体，入于其法则中被庇护和持久地自行锁闭着的东西。世界要求它的决断和尺度，并让存在者进入它的道路的敞开领域之中。大地力求承载着、凸现着保持自行锁闭，并且力求把万物交付给它的法则。争执并非作为一纯然裂缝之撕裂的裂隙（Riß），而是争执者相互归属的亲密性。这种裂隙把对抗者一道撕扯到它们的出自统一基础的统一体的渊源之中。争执之裂隙乃是基本图样，是描绘存在者之澄明的涌现的基本特征的剖面图。这种裂隙并不是让对抗者相互破裂开来，它把尺度和界限的对抗带入共同的轮廓之中。

只有当争执在一个有待生产的存在者中被开启出来，亦即这种存在者本身被带入裂隙之中，作为争执的真理才得以设立于这种存在者中。裂隙乃是剖面图和基本图样、裂口和轮廓的统一牵连（Gezüge）。真理在存在者中设立自身，而且这样一来，存在者本身就占据了真理的敞开领域。但是，唯当那被生产者即裂隙把自身交付给在敞开领域中凸现的自行锁闭者，这种占据才能发生。这裂隙必须把自身置回到石头吸引的沉重、木头缄默的坚固、色彩幽深的热烈之中。大地把裂隙收回到自身之中，裂隙于是才进入敞开领域而被制造，从而被置入亦即设置入那作为自行锁闭者和保护者进入敞开领域而凸现的东西中。

争执被带入裂隙之中，因而被置回到大地之中并且被固定起来，这种争执乃是形态（Gestalt）。作品的被创作存在意味着真理之被固定于形态中。形态乃是构造（Gefüge），裂隙就作为这个构造而自行嵌合。被嵌合的裂隙乃是真理之闪耀的嵌合（Fuge）。这里所谓的形态，始终必须根据那种摆置（Stellen）和集置（Ge-stell）来理解；作品作为这种摆置和集置而现身，因为作品建立自身和制造自身。

在作品创作中，作为裂隙的争执必定被置回到大地中，而大地本身必定作为自行锁闭者被生产和使用。不过，这种使用并不是把大地当作一种材料加以消耗甚或肆意滥用，而是把大地解放出来，使之成为大地本身。这种对大地的使用乃是对大地的劳作，虽然看起来这种劳作如同工匠利用材料，因而给人这样一种假象，似乎作品创作也是手工技艺活动。其实决非如此。作品创作始终是在真理固定于形态中的同时对大地的一种使用。与之相反，器具的制作却决非直接是对真理之发生的获取。当质料被做成器具形状以备使用时，器具的生产就完成了。器具的完成意味着器具已经超出了它本身，并将在有用性中消耗殆尽。

作品的被创作存在却并非如此。这一点从我们下面就要谈到的第二个特点来看，就一目了然了。

器具的完成状态与作品的被创作存在有一点是相同的，那就是它们都构成了一种被生产存在。但与其他一切生产不同，作品的被创作存在的特殊性在于：它是一道被带入被创作作品中而被创作出来的。可是，难道所有生产品以及无论何种形成品不都这样吗？任何一个生产品，如果向来是某个东西，肯定会被赋予一种被生产存在。确实如此。不过在作品中，被创作存在是特别地被带入创作品中而创作出来的，以至于它专门从创作品中，也即从如此这般的生产品中突现出来。如若情形如此，那我们也就必然能够特别地在作品中经验这种被创作存在。

从作品中浮现出来的被创作存在，并不意味着根据作品就可以发现它出自某个艺术大师之手。创作品不可作为某位高手的成就来证明，其完成者也不能因此被提升到公共声望中去。要公布出来的并不是姓名不详的作者，而不如说，这个单纯的“factum est”［存在事实］要在作品中被带入敞开领域之中；也就是说，存在者之无蔽状态在此发生了，而且是首先作为这种发生事件而发生的；也就是说，这样的作品存在着，而不是不存在。作品作为这种作品而存在所造成的冲击，以及这种毫不显眼的冲力的连续性，构成了作品的自持的稳固性。在艺术家以及作品形成的过程和条件都尚不为人知的时候，这种冲力，被创作存在的这个“如此”（Daß），就最纯粹地从作品中出现了。

诚然，每一件可供支配的、处于使用中的器具也包含着它被制作出来的这一“如此”。但这一“如此”在器具那里并没有凸现出来，它消失于有用性中了。一件器具越是凑手，它的“如此”就越是不引人注目（例如，一把榔头就是如此），器具就越是独一地保持在其器具存在中。一般说来，我们在每个现成事物中都能发现它存在的事实；但即便注意到这一点，也很快就以惯常的方式忘掉了。不过，还有什么比存在者存在这回事情更为寻常的呢？与之相反，在作品中，它作为这样一个作品而存在，这是非同寻常的事情。它的被创作存在这一发生事件（Ereignis）并没有简单地在作品中得到反映；而不如说，作品作为这样一件作品而存在，这一事件把作品在自身面前投射出来，并且已经不断地在自身周围投射了作品。作品越是本质性地开启自身，那种唯一性，即它存在而不是不存在这一如此实情的唯一性，也就越是显赫明朗。这种冲力越是本质性地进入敞开领域中，作品也就变得越是令人意外，越是孤独。在作品的生产中，包含着这样一种对“如此存在”（daß es sei）的呈献。

对作品的被创作存在的追问应把我们带到作品的作品因素以及作品的现实性的近处。被创作存在显示自身为：通过裂隙进入形态的争执之被固定存在。在这里，被创作存在本身以特有的方式被寓于作品中，而作为那个“如此”的无声的冲力进入敞开领域中。但作品的现实性并非仅仅限于被创作存在。不过，正是对作品的被创作存在的本质的考察，使得我们现在有可能迈出一步，去达到我们前面所道出的一切的目标。

作品愈是孤独地被固定于形态中而立足于自身，愈纯粹地显得解脱了与人的所有关联，那么，冲力，这种作品存在着的这个“如此”，也就愈单朴地进入敞开领域之中，阴森惊人的东西就愈加本质性地被冲开，而以往显得亲切的东西就愈加本质性地被冲翻。然而，这形形色色的冲撞却不具有什么暴力的意味，因为作品本身愈是纯粹地进入存在者由它自身开启出来的敞开性中，作品就愈容易把我们移入这种敞开性中，并同时把我们移出寻常平庸。服从于这种移挪过程意味着：改变我们与世界和大地的关联，然后抑制我们的一般流行的行为和评价、认识和观看，以便逗留于作品中发生的真理那里。唯有这种逗留的抑制状态才让被创作的东西成为所是之作品。这种“让作品成为作品”，我们称之为作品之保存。唯有这种保存，作品在其被创作存在中才表现为现实的，现在来说也即：以作品方式在场着的。

要是作品没有被创作便无法存在，因而本质上需要创作者，同样的，如果没有保存者，被创作的东西也将不能存在。

然而，如果作品没有寻找保存者，没有直接寻找保存者从而使保存者应合于在作品中发生着的真理，那么，这并不意味着，没有保存者作品也能成为作品。只要作品是一件作品，它就总是与保存者相关涉，甚至在（也正是在）它只是等待保存者，恳求和期冀它们进入其真理之中的时候。甚至作品可能碰到的被遗忘状态也不是一无所有，它仍然是一种保存。它乞灵于作品。作品之保存意味着：置身于在作品中发生的存在者之敞开性中。可是，保存的这种“置身于其中”（Inständigkeit）乃是一种知道（Wissen）。知道却并不在于对某物的单纯认识和表象。谁真正地知道存在者，他也就知道他在存在者中间意愿什么。

这里所谓的意愿（Wollen）既非仅仅运用一种知道，也并不事先决定一种知道，它是根据《存在与时间》的基本思想经验被思考的。保持着意愿的知道和保持着知道的意愿，乃是实存着的人类绽出地进入存在之无蔽状态之中。在《存在与时间》中思考的决心（Ent-schlossenheit）并不是一个主体的深思的行动，而是此在摆脱存在者的困囿向着存在之敞开性的开启。然而，在实存（Existenz）中，人并非出于一内在而到达一外在，而不如说，实存之本质乃是悬欠着（ausste-hend）置身于存在者之澄明的本质性分离中。在先已说明的创作中也好，在现在所谓的意愿中也好，我们都没有设想一个以自身为目的来争取的主体的活动和行为。

意愿乃是实存着的自我超越的冷静的决心，这种自我超越委身于那种被设置入作品中的存在者之敞开性。这样，那种“置身于其中”也被带入法则之中。作品之保存作为知道，乃是冷静地置身于作品中发生着的真理的阴森惊人的东西中。

这种知道作为意愿在作品之真理中找到了自己的家园，并且只有这样，它才是一种知道；它没有剥夺作品的自立性，并没有把作品强行拉入纯然体验的领域，并不把作品贬低为一个体验的激发者的角色。作品之保存并不是把人孤立于其私人体验，而是把人推入在作品中发生着的真理的归属关系之中，从而把相互共同存在确立为出自与无蔽状态之关联的此之在（Da-sein）的历史性悬欠（Ausstehen）。再者，在保存意义上的知道与那种鉴赏家对作品的形式、品质和魅力的鉴赏力相去甚远。作为已经看到，知道乃是一种决心，是置身于那种已经被作品嵌入裂隙的争执中去。

作品本身，也只有作品本身，才能赋予和先行确定作品的适宜的保存方式。保存发生在不同等级的知道中，这种知道具有各自不同的作用范围、稳固性和清晰度。如若作品仅仅被提供给艺术享受，这也还没有证明作品之为作品处于保存中。

一旦那种进入阴森惊人的东西中的冲力在流行和鉴赏中被截获了，则艺术行业就开始围着作品团团转了。就连作品的小心谨慎的流传，力求重新获得作品的科学探讨，都不再达到作品自身的存在，而仅只是一种对它的回忆而已。但这种回忆也能给作品提供一席之地，从中构成作品的历史。相反，作品最本己的现实性，只有当作品在通过它自身而发生的真理中得到保存之际才起作用。

作品的现实性的基本特征是由作品存在的本质来规定的。现在我们可以重新捡起我们的主导问题：那个保证作品的直接现实性的作品之物因素的情形究竟如何呢？情形是，我们现在不再追问作品的物因素的问题了；因为只要我们做那种追问，我们即刻而且事先就确定无疑地把作品当作一个现存对象了。以此方式，我们从未能从作品出发来追问，而是从我们出发来追问。而这个作为出发点的我们并没有让作品作为一个作品而存在，而是把作品看成能够在我们心灵中引发此种或彼种状态的对象。

然而，在被当作对象的作品中，那个看来像是流行的物的概念意义上的物因素的东西，从作品方面来了解，实际上就是作品的大地因素（das Erdhafte）。大地进入作品而凸现，因为作品作为其中有真理起作用的作品而现身；而且因为真理唯有通过把自身设立在某个存在者之中才得以现身。但是，在本质上自行锁闭的大地那里，敞开领域的敞开性得到了它最大的抵抗，并因此获得它永久的立足之所，而形态必然被固定于其中。

那么，我们对物之物因素的追问竟是多余的吗？绝对不是的。作品因素固然不能根据物因素来得到规定，但是对作品之作品因素的认识，却可能把我们对物之物因素的追问引入正轨。这并非无关紧要，只要我们回想一下那些自古以来流行的思维方式如何扰乱物之物因素，如何使一种对存在者整体的解释达到统治地位，就会明白这一点的。这种对存在者整体的解释使我们对真理的原始本质茫然无知，同样也无能于对器具和作品的本质的把握。

为了规定物之物性，无论是对特性之载体的考察，还是对在其统一性中的感性被给予物的多样性的考察，甚至那种对自为地被表象出来的、从器具因素中获知的质料－形式结构的考察，都是无济于事的。对于物之物因素的解释来说，一种正确而有分量的洞察必须直面物对大地的归属性。大地的本质就是它那无所迫促的承荷和自行锁闭，但大地仅仅是在耸然进入一个世界之际，在它与世界的对抗中，才自行揭示出来。大地与世界的争执在作品的形态中固定下来，并且通过这一形态才得以敞开出来。我们只有特别地通过作品才经验到器具之器具因素，这一点适用于器具，也适用于物之物因素。我们决不能径直知道物因素，即使能知道，那也只是不确定地，也需要作品的帮助。这一点间接地证明了，在作品的作品存在中，真理之生发也即存在者之开启在起作用。

然而，如果作品无可争辩地把物因素置入敞开领域之中，那么，就作品方面来说，难道作品不是必须已经——而且在它被创作之前，并且为了这种被创作——被带入一种与大地中的万物的关联，与自然的关联之中了吗？这正是我们最后要回答的一个问题。阿尔布雷希特·丢勒想必是知道这一点的，他说了如下著名的话：“千真万确，艺术存在于自然中，因此谁能把它从中取出，谁就拥有了艺术。”在这里，“取出”意味着画出裂隙，用画笔在绘画板上把裂隙描绘出来。但是，我们同时要提出相反的问题：如果裂隙并没有作为裂隙，也就是说，如果裂隙并没有事先作为尺度与无度的争执而被创作的构思带入敞开领域之中，那么，裂隙何以能够被描绘出来呢？诚然，在自然中隐藏着裂隙、尺度、界限以及与此相联系的可能生产（Hervorbringen-können），亦即艺术。但同样确凿无疑的是，这种隐藏于自然中的艺术唯有通过作品才能显露出来，因为它原始地隐藏在作品之中。

对作品的现实性的这一番刻意寻求，乃是要提供出一个基地，使得我们能够在现实作品中发现艺术和艺术之本质。关于艺术之本质的追问，认识艺术的道路，应当重新被置于某个基础之上。如同任何真正的回答，对于这个问题的回答只不过是一系列追问步骤的最后一步的最终结果。任何回答只要是植根于追问的回答，就始终能够保持回答的力量。

从作品的作品存在来看，作品的现实性不仅更加明晰，而且根本上也更加丰富。保存者与创作者一样，同样本质性地属于作品的被创作存在。但作品使创作者的本质成为可能，作品由于其本质也需要保存者。如果说艺术是作品的本源，那就意味着：艺术使作品的本质上共属一体的东西，即创作者和保存者，源出于作品的本质。但艺术本身是什么呢？我们正当地称之为本源的艺术是什么呢？

真理之生发在作品中起作用，而且是以作品的方式起作用。因此，艺术的本质先行就被规定为真理之自行设置入作品。但我们自知，这一规定具有一种蓄意的模棱两可。它一方面说：艺术是自身建立的真理固定于形态中，这种固定是在作为存在者之无蔽状态的生产的创作中发生的。而另一方面，设置入作品也意味着：作品存在进入运动和进入发生中。这也就是保存。于是，艺术就是：对作品中的真理的创作性保存。因此，艺术就是真理的生成和发生。那么，难道真理源出于无么？的确如此，如果这个无（das Nichts）意指的是对存在者的纯粹的不（das Nicht），而存在者则被看作是那个惯常的现存事物，后者进而通过作品的立身实存（das Dastehen）而显露为仅仅被设想为真的存在者，并且被作品的立身实存所撼动。从现存事物和惯常事物那里是从来看不到真理的。毋宁说，只有通过对在被抛状态（Geworfenheit）中到达的敞开性的筹划，敞开领域之开启和存在者之澄明才发生出来。

作为存在者之澄明和遮蔽，真理乃通过诗意创造而发生。凡艺术都是让存在者本身之真理到达而发生，一切艺术本质上都是诗（Dichtung）。艺术作品和艺术家都以艺术为基础，艺术之本质乃真理之自行设置入作品。由于艺术的诗意创造本质，艺术就在存在者中间打开了一方敞开之地，在此敞开之地的敞开性中，一切存在遂有迥然不同之仪态。凭借那种被置入作品中的、对自行向我们投射的存在者之无蔽状态的筹划（Entw urf），一切惯常之物和过往之物通过作品而成为非存在者（das U nseiende）。这种非存在者已经丧失了那种赋予并且保持作为尺度的存在的能力。在此令人奇怪的是，作品根本上不是通过因果关系对以往存在者发生影响的。作品的作用并不在于某种制造因果的活动，而在于存在者之无蔽状态（亦即存在）的一种源于作品而发生的转变。

然而，诗并非对任意什么东西的异想天开的虚构，并非对非现实领域的单纯表象和幻想的悠荡飘浮。作为澄明着的筹划，诗在无蔽状态那里展开的东西和先行抛入形态之裂隙中的东西，是让无蔽发生的敞开领域，并且是这样，即现在，敞开领域才在存在者中间使存在者发光和鸣响。在对作品之本质和作品与存在者之真理的生发的关系的本质性洞察中，出现了这样一个疑问：根据幻想和想象力来思考诗之本质——同时也即筹划之本质——是否已经绰绰有余了。

诗的本质，现在已得到了宽泛的但并非因此而模糊的了解，在此它无疑是大可追问的东西。我们眼下应该对之做一思考了。

如果说一切艺术本质上皆是诗，那么，建筑艺术、绘画艺术、音乐艺术都势必归结为诗歌了。这纯粹是独断嘛！当然，只要我们认为，上面所说的各类艺术都是语言艺术的变种——如果我们可以用语言艺术这个容易让人误解的名称来规定诗歌的话——那就是独断了。其实，诗歌仅只是真理之澄明着的筹划的一种方式，也即只是宽泛意义上的诗意创造（Dichten）的一种方式；虽然语言作品，即狭义的诗（Dichtung），在整个艺术领域中是占有突出地位的。

为了认识这一点，只需要有一个正确的语言概念即可。流行的观点把语言当作一种传达。语言用于会谈和约会，一般讲来就是用于互相理解。然而，语言不只是而且并非首先是对要传达的东西的声音表达和文字表达。语言并非仅仅是把或明或暗如此这般的意思转运到词语和句子中去，而不如说，唯语言才使存在者作为存在者进入敞开领域之中。在没有语言的地方，如在石头、植物和动物的存在中，便没有存在者的任何敞开性，因而也没有不存在者和虚空的任何敞开性。

由于语言首度命名存在者，这种命名才把存在者带向词语而显现出来。这一命名（Nennen）指派（ernennen）存在者，使之源于其存在而达于其存在。这样一种道说乃澄明之筹划，它宣告出存在者作为什么东西进入敞开领域。筹划是一种投射的触发，作为这种投射，无蔽把自身发送到存在者本身之中。而筹划着的宣告（Ansagen）即刻成为对一切阴沉的纷乱的拒绝（Absage）；在这种纷乱中存在者蔽而不显，逃之夭夭了。

筹划着的道说就是诗：世界和大地的道说，世界和大地之争执的领地的道说，因而也是诸神的所有远远近近的场所的道说。诗乃是存在者之无蔽状态的道说（die Sage）。始终逗留着的真正语言是那种道说（das Sagen）之生发，在其中，一个民族的世界历史性地展开出来，而大地作为锁闭者得到了保存。在对可道说的东西的准备中，筹划着的道说同时把不可道说的东西带给世界。在这样一种道说中，一个历史性民族的本质的概念，亦即它对世界历史的归属性的概念，先行被赋形了。

在这里，诗是在一种宽广意义上，同时也在与语言和词语的紧密的本质统一性中被理解的，从而，就必定有这样一个悬而未决的问题：艺术，而且是包括从建筑到诗歌的所有样式的艺术，是不是就囊括了诗之本质呢？

语言本身就是根本意义上的诗。但由于语言是存在者之为存在者对人来说向来首先在其中得以完全展开出来的那种生发，所以，诗歌，即狭义上的诗，才是根本意义上最原始的诗。语言是诗，不是因为语言是原始诗歌（U rpoesie）；不如说，诗歌在语言中发生，因为语言保存着诗的原始本质。相反地，建筑和绘画总是已经而且始终仅只发生在道说和命名的敞开领域之中。它们为这种敞开所贯穿和引导，所以，它们始终是真理把自身建立于作品中的本己道路和方式。它们是在存在者之澄明范围内的各有特色的诗意创作，而存在者之澄明早已不知不觉地在语言中发生了。

作为真理之自行设置入作品，艺术就是诗。不光作品的创作是诗意的，作品的保存同样也是诗意的，只是有其独特的方式罢了。因为只有当我们本身摆脱了我们的惯常性而进入作品所开启出来的东西之中，从而使得我们的本质在存在者之真理达到恒定时，一个作品才是一个现实的作品。

艺术的本质是诗。而诗的本质是真理之创建（Stiftung）。在这里，我们所理解的“创建”有三重意义，即作为赠予的创建，作为建基的创建和开端的创建。但是，创建唯有在保存中才是现实的。因此，保存的样式吻合于创建的诸样式。对于艺术的这种本质构造，我们眼下只能用寥寥数语的勾勒来加以揭示，甚至这种勾勒也只是前面我们对作品之本质的规定所提供的初步线索。

真理之设置入作品冲开了阴森可怕的东西，同时冲倒了寻常的和我们认为是寻常的东西。在作品中开启自身的真理绝不可能从过往之物那里得到证明并推导出来。过往之物在其特有的现实性中被作品所驳倒。因此艺术所创建的东西，决不能由现存之物和可供使用之物来抵销和弥补。创建是一种充溢，一种赠予。

真理的诗意创作的筹划把自身作为形态而置入作品中，这种筹划也绝不是通过进入虚空和不确定的东西中来实现的。而毋宁说，在作品中，真理被投向即将到来的保存者，亦即被投向一个历史性的人类。但这个被投射的东西，从来不是一个任意僭越的要求。真正诗意创作的筹划是对历史性的此在已经被抛入其中的那个东西的开启。那个东西就是大地。对于一个历史性民族来说就是他的大地，是自行锁闭着的基础；这个历史性的民族随着一切已然存在的东西——尽管还遮蔽着自身——而立身于这一基础之上。但它也是他的世界，这个世界由于此在与存在之无蔽状态的关联而起着支配作用。因此，在筹划中人与之俱来的那一切，必须从其锁闭的基础中引出并且特别地被置入这个基础之中。这样，基础才被建立为具有承受力的基础。

由于是这样一种引出（Holen），所有创作（Schaffen）便是一种汲取（犹如从井泉中汲水）。毫无疑问，现代主观主义直接曲解了创造（das Schöpferische），把创造看作是骄横跋扈的主体的天才活动。真理的创建不光是在自由赠予意义上的创建，同时也是在铺设基础的建基意义上的创建。它决不从流行和惯常的东西那里获得其赠品，从这个方面来说，诗意创作的筹划乃来源于无（Nichts）。但从另一方面看，这种筹划也决非来源于无，因为由它所投射的东西只是历史性此在本身的隐秘的使命。

赠予和建基本身就拥有我们所谓的开端的直接特性。但开端的这一直接特性，出于直接性的跳跃的奇特性，并不是排除，而是包括了这样一点，即：开端久已悄然地准备着自身。真正的开端作为跳跃始终都是一种领先，在此领先中，凡一切后来的东西都已经被越过了，哪怕是作为一种被掩蔽的东西。开端已经隐蔽地包含了终结。可是，真正的开端决不具有原始之物的草创特性。原始之物总是无将来的，因为它没有赠予着和建基着的跳跃和领先。它不能继续从自身中释放出什么，因为它只包含了把它固缚于其中的那个东西，此外无它。

相反，开端总是包含着阴森惊人之物，亦即与亲切之物的争执的未曾展开的全部丰富性。作为诗的艺术是第三种意义上的创建，即真理之争执的引发意义上的创建；作为诗的艺术乃是作为开端的创建。每当存在者整体作为存在者本身要求那种进入敞开性的建基时，艺术就作为创建而进入其历史性本质之中。在西方，这种作为创建的艺术最早发生在古希腊。那时，后来被叫作存在的东西被决定性地设置入作品中了。进而，如此这般被开启出来的存在者整体被变换成了上帝的造物意义上的存在者。这是在中世纪发生的事情。这种存在者在近代之初和近代之进程中又被转换了。存在者变成了可以通过计算来控制和识破的对象。上述种种转换都展现出一个新的和本质性的世界。每一次转换都必然通过真理之固定于形态中，固定于存在者本身中而建立了存在者的敞开性。每一次转换都发生了存在者之无蔽状态。无蔽状态自行设置入作品中，而艺术完成这种设置。

每当艺术发生，亦即有一个开端存在之际，就有一种冲力进入历史之中，历史才开始或者重又开始。在这里，历史并非意指无论何种和无论多么重大的事件的时间上的顺序。历史乃是一个民族进入其被赋予的使命中而同时进入其捐献之中。历史就是这样一个进入过程。

艺术是真理之自行设置入作品。在这个命题中隐含着一种根本性的模棱两可，据此看来，真理同时既是设置行为的主体又是设置行为的客体。但主体和客体在这里是不恰当的名称，它们阻碍着我们去思考这种模棱两可的本质。这种思考的任务超出了本文的范围。艺术是历史性的，历史性的艺术是对作品中的真理的创作性保存。艺术发生为诗。诗乃赠予、建基、开端三重意义上的创建。作为创建的艺术本质上是历史性的。这不光是说：艺术拥有外在意义上的历史，它在时代的变迁中与其他许多事物一起出现，同时变化、消失，给历史学提供变化多端的景象。真正说来，艺术为历史建基；艺术乃是根本性意义上的历史。

艺术让真理脱颖而出。作为创建着的保存，艺术是使存在者之真理在作品中一跃而出的源泉。使某物凭一跃而源出，在出自本质渊源的创建着的跳跃中把某物带入存在之中，这就是本源（U rsprung）一词的意思。

艺术作品的本源，同时也就是创作者和保存者的本源，也就是一个民族的历史性此在的本源，乃是艺术。之所以如此，是因为艺术在其本质中就是一个本源，是真理进入存在的突出方式，亦即真理历史性地生成的突出方式。

我们追问艺术的本质。为什么要做这样的追问呢？我们做这样的追问，目的是能够更本真地追问：艺术在我们的历史性此在中是不是一个本源，是否并且在何种条件下，艺术能够是而且必须是一个本源。

这样一种沉思不能勉强艺术及其生成。但是，这种沉思性的知道（das be-sin-nliche Wissen）却是先行的，因而也是必不可少的对艺术之生成的准备。唯有这种知道为艺术准备了空间，为创造者提供了道路，为保存者准备了地盘。

在这种只能缓慢地增长的知道中将做出决断：艺术是否能成为一个本源因而必然是一种领先，或者艺术是否始终是一个附庸从而只能作为一种流行的文化现象而伴生。

我们在我们的此在中历史性地存在于本源的近旁吗？我们是否知道亦即留意到本源之本质呢？或者，在我们对待艺术的态度中，我们依然只还是因袭成规，照搬过去形成的知识而已？

对于这种或此或彼的抉择及其决断，这里有一块可靠的指示牌。诗人荷尔德林道出了这块指示牌；这位诗人的作品依然摆在德国人面前，构成一种考验。荷尔德林诗云：

依于本源而居者

终难离弃原位。

——《漫游》，载《荷尔德林全集》，第4卷（海林格拉特编），第167页

后记
本文的思考关涉到艺术之谜，这个谜就是艺术本身。这里绝没有想要解开这个谜。我们的任务在于认识这个谜。

几乎是从人们开始专门考察艺术和艺术家的那个时代起，此种考察就被称为美学的考察。美学把艺术作品当作一个对象，而且把它当作αǐσθησιζ［感知］的对象，即广义上的感性知觉的对象。现在人们把这种知觉称为体验。人体验艺术的方式，被认为是能说明艺术之本质的。无论对艺术享受还是对艺术创作来说，体验都是决定性的源泉。一切都是体验。但也许体验却是艺术死于其中的因素。这种死发生得如此缓慢，以至于它需要经历数个世纪之久。

诚然，人们谈论着不朽的艺术作品和作为一种永恒价值的艺术。但此类谈论用的是那种语言，它并不认真对待一切本质性的东西，因为它担心“认真对待”最终意味着：思想（denken）。在今天，又有何种畏惧更大于这种对思想的畏惧呢？此类关于不朽的作品和艺术的永恒价值的谈论具有某种内容和实质吗？或者，此类谈论只不过是在伟大的艺术及其本质已经远离了人类的时代里出现的一些肤浅的陈词滥调么？

黑格尔的《美学讲演录》是西方历史上关于艺术之本质的最全面的沉思，因为那是一种根据形而上学而做的沉思。在《美学讲演录》中有这样几个命题：

“对我们来说，艺术不再是真理由以使自己获得其实存的最高样式了”（《全集》，第10卷，第1册，第134页）。“我们诚然可以希望艺术还将会蒸蒸日上，并使自身完善起来，但是艺术形式已不再是精神的最高需要了”（《全集》，第10卷，第1册，第135页）。“从这一切方面看，就它的最高的职能来说，艺术对于我们现代人已经是过去的事了”（《全集》，第10卷，第1册，第16页）。

尽管我们可以确认，自从黑格尔于1828—1829年冬季在柏林大学做最后一次美学讲座以来，我们已经看到了许多新的艺术作品和新的艺术思潮；但是，我们不能借此来回避黑格尔在上述命题中所下的判词。黑格尔决不是想否认可能还会出现新的艺术作品和艺术思潮。然而，问题依然是：艺术对我们的历史性此在来说仍然是决定性的真理的一种基本和必然的发生方式吗？或者，艺术压根儿就不再是这种方式了？但如果艺术不再是这种方式了，那么问题是：何以会这样呢？黑格尔的判词尚未获得裁决；因为在黑格尔的判词背后，潜伏着自古希腊以降的西方思想，这种思想相应于一种已经发生了的存在者之真理。如果要对黑格尔的判词做出裁决，那么，这种裁决乃是出于这种存在者之真理并且对这种真理做出裁决。在此之前，黑格尔的判词就依然有效。而因此就有必要提出下面的问题：此判词所说的真理是不是最终的真理？如果它是最终的真理又会怎样？

这种问题时而相当清晰，时而只是隐隐约约地与我们相关涉；只有当我们事先对艺术之本质有了深思熟虑，我们才能探问这种问题。我们力图通过提出艺术作品的本源问题而迈出几步，关键在于洞察作品的作品特性。在这里，“本源”一词的意思是从真理的本质方面来思考的。

我们所说的真理与人们在这个名称下所了解的东西是大相径庭的；人们把“真理”当作一种特性委诸于认识和科学，从而把它与美和善区别开来，善和美则被视为表示非理论活动的价值的名称。

真理是存在者之为存在者的无蔽状态。真理是存在之真理。美与真理并非比肩而立。当真理自行设置入作品，它便显现出来。这种显现（Erschein-en）——作为在作品中的真理的这一存在和作为作品——就是美。因此，美属于真理的自行发生（Sichereignen）。美不仅仅与趣味相关，不只是趣味的对象。美依据于形式，而这无非是因为，forma［形式］一度从作为存在者之存在状态的存在那里获得了照亮。那时，存在发生为［外观、爱多斯］。［相］注3适合于［形式］。这个，即［形式］和［质料］的统一整体，亦即［作品］，以［实现］之方式存在。这种在场的方式后来成了ens ac-tus［现实之物］的actualitas［现实性］, actualitas［现实性］成了事实性（Wirklich-keit），事实性成了对象性（Gegenständlichkeit），对象性成了体验（Erlebnis）。对于由西方决定的世界来说，存在者成了现实之物；在存在者作为现实之物而存在的方式中，隐蔽着美和真理的一种奇特的合流。西方艺术的本质的历史相应于真理之本质的转换。假定形而上学的艺术概念获得了艺术的本质，那么，我们就决不能根据被看作自为的美来理解艺术，同样也不能从体验出发来理解艺术。
`,Mf=`---
created: "2025-01-17T09:37:36.940Z"
title: 只有当一个人直面人是有限的这一痛苦的事实后，人才能以一个整体来看待自己，也就是不以片面的范畴来规定自己。我们从根本上意识到自己是渺小的、有限的、直面死亡的。
slug: 5d204aef-9557-403e-938c-9732c1803846
category: philosophy
---

“一个对自己的生命心不在焉的人，直到他在一个阳光明媚的早晨一觉醒来发觉自己已经死了，才知道自己的存在。”这句话今天讲来有特别的意义，因为我们这个时代的文明掌握了一些武器，尤其在当前这个时间点，俄乌战争爆发一周年，大国对抗、新冷战思维愈演愈烈，核战争的风险也愈演愈烈，正如第一次、第二次世界大战的爆发点一样的漫不经心，也许第三次的爆发点已悄然点火，这就意味着在某个迫近的第二天，我睡觉醒来发觉自己已经死了，但却从来不曾触及存在之根。时至今日，原子时代的诸多危险确实存在着一种普遍的焦虑，甚至惊恐。但是，对于这种境况，一般很少有会去反省与检讨，即或有之，却只关心那个“社会事实”而难以触及问题的实质。我们这个时代的本质问题是缺乏思想、反思。


人们大谈特谈的具有特别杀伤威力的原子弹，这并不是致命的东西。早已用死而且是用人的本质之死来威胁着人的，乃是在有意在一切中自身贯彻之意义上的单纯意愿的无条件的东西。在人的本质中威胁着人的，是这样一种出自意志的意见，即认为：依靠对自然能源的和平解放、改造、储藏和控制，就能使人人都觉得做人是可以忍受的、而且是完全幸福的。但这种和平事业中的和平，只不过是那种有意只以自身为目标的自身贯彻之天翻地覆的忙乱毫不被搅乱地继续扰乱不休而已。在人的本质中威胁着人的，是这样一种观念：贯彻制造的工作可以没有危险地大胆进行，只要此外还有别的兴趣，也许是一种信仰的兴趣仍然起作用的话。仿佛还可以在一座附属建筑中，为人受技术意愿摆布而与存在者整体发生的那种本质关系安设一个特别的居留之所似的，仿佛这个居留之所可能比时常逃向自欺的出路有更多的办法似的，在人的本质中威胁者人的是这样的一种意见：技术的制造使世界井然有序，这种有序就是千篇一律，从而自始就把属于存在的可能的渊源的领域破坏掉了。技术统治之对象事物愈来愈快、愈来愈无所顾忌、愈來愈完满地推行于全球，取代了昔日可⻅的世事所约定俗成的一切。技术的统治不仅把一切存在者设立为生产过程中可制造的东⻄， 而且通过市场把生产的产品提供出来。人之人性和物之物性，都在自身贯彻的制造范围内分化为一个在市场上可计算出来的市场价值。这个市场不仅作为世界市场遍布全球，而且作为求意志的意志在存在的本质中进行买卖，并因此把一切存在者带入一种计算行为之中，这种计算行为在并不需要数字的地方，统治的最为顽强。
<br/>

这个计算行为的源头在哪呢？是技术吗？如果我们把目光往前放的话，从人诞生起，技术的的使用就已经在人的生活中了，初民们制作狩猎的工具遮羞的衣物等都是技术的体现，假如技术仅仅是这样就好了，然而历史证明了它是一个有野心的东西，它蛰伏着，蛰伏在人的理性里。技术的兴起来源于西方的科学。也可以说西方文明之所以独一无二，就在于它拥有科学，而在科学方面，我们发现了永无止境、始终如一和持续不断地进步。研究工作在不停地进行，其成果丰硕而实在，而且这些都被一起囊括进范围日趋广博的体系中。
<br/>

。。。。。。。待续。。。。。。

随着现代社会的到来，人类已经进入了属于他的历史上的世俗阶段。他憧憬着他支配整个世界力量增长的美好前景，精神抖撒信心倍增地进入了这个阶段。但是，在这个世界里，他的关于力量的梦想往往是实现不了的，他第一次发现他自己是无家可归的。科学从自然身上剥掉了人的形式，从而把一个以其浩瀚与力量对人类目的是中性的和异在的宇宙展现给人。在这个时期到来之前，宗教曾经是包容着整个人类生活的机构，提供给它一个意象和符号的系统，使它能表达自己达到精神整体的渴望。随着这种包容机构的丧失，人不仅成了一个被逐出家门的，而且也成了一个片断的存在。在社会上，亦如在精神世界一样，世俗的目标最终升到了支配地位；经济的合理组织已经增加了人支配自然的力量；而且，从政治上看，社会也已变得更加合理、更加讲究功利、更加民主，并且也造成了物质的丰富与进步。启蒙时代的人曾预言，理性将无止境的胜利扩展到社会生活的各个领域。但是，在这里，理性已经受挫于它的对立面，受挫于层出不穷又预料不到的实际事物————战争、经济的危机与脱节、群众里的政治动乱。再者，在一个官僚化的、非个人的大众社会里，人的无家感和异化感更趋强烈。他已经开始感到，甚至在他自己的人类社会里，他自己也是局外人。他被三重地异化了：不仅对于上帝、对于自己是个陌生人，而且对于提供他物质必需品的庞大社会机构也是个陌生人。但是，最糟糕又最终极的异化形式（事实上其他形式都导致它），乃是人同他自己的自我的异化。在一个仅仅要求人胜任他自己特殊社会职能的社会里，人就会变得和这种职能等同起来；而他的存在的其余部分充其量任其自然——通常被弃置到意识表层下面而被忘却。
<br/>

现代贫困（物质或精神）是现代劳动形而上学的本质，劳动一般或抽象劳动成为主体，劳动在资产阶级形而上学的本质，今天人类的现实生活都被这个形而上学支配着，这个超感性的东西，这个“价值”的范畴。而私有财产的主体本质，私有财产作为自为的存在着的劳动、作为主体、作为人、就是劳动。
<br/>

<blockquote>
私有制使我们变得如此愚蠢而片面，以致一个对象,只有当它为我们所拥有的时候,就是说，当它对我们来说作为资本而存在，或者它被我们直接占有，被我们吃、喝、穿、住等等的时候，简言之，在它被我们使用的时候，才是我们的。尽管私有制本身也把占有的这一切直接实现仅仅看做生活手段，而它们作为手段为之服务的那种生活，是私有制的生活—劳动和资本化。因此，一切肉体的和精神的感觉都被这一切感觉的单纯异化即拥有的感觉所代替。人的本质只能被归结为这种绝对的贫困，这样它才能够从自身产生出它的内在丰富性。
</blockquote>

<br/>
人们大谈特谈“利己主义”是人的本性，可是人的本性也并非一尘不变的，人的本性就是人的历史性。只有当物按人的方式同人发生关系时，我才能在实践上按人的方式同物发生关系。因此，需要和享受失去了自己的利己主义性质，而自然界失去了自己的纯粹的有用性，因为效用成了人的效用，同样，别人的感觉和精神也为我自己所占有。因此，除了这些直接的器官以外,还以社会的形式形成社会的器官。例如，同他人直接交往的活动等等，成为我的生命表现的器官和对人的生命的一种占有方式。不言而喻，人的眼睛与野性的、非人的眼睛得到的享受不同， 人的耳朵与野性的耳朵得到的享受不同，如此等等。 我们知道，只有当对象对人来说成为人的对象或者说成为对象性的人的时候，人才不致在自己的对象中丧失自身。只有当对象对人来说成为社会的对象，人本身对自己来说成为社会的存在物，而社会在这个对象中对人来说成为本质的时候，这种情况才是可能的。

<br/>
<blockquote>
因此，一方面，随着对象性的现实在社会中对人来说到处成为人的本质力量的现实,成为人的现实，因而成为人自己的本质力量的现实，一切对象对他来说也就成为他自身的对象化，成为确证和实现他的个性的对象,成为他的对象，这就是说,对象成为他自身。对象如何对他来说成为他的对象，这取决于对象的性质以及与之相适应的本质力量的性质;因为正是这种关系的规定性形成一种特殊的、现实的肯定方式。眼睛对对象的感觉不同于耳朵，眼睛的对象是不同于耳朵的对象的。每一种本质力量的独特性，恰好就是这种本质力量的独特的本质，因而也是它的对象化的独特方式，是它的对象性的、现实的、活生生的存在的独特方式。因此,人不仅通过思维，而且以全部感觉在对象世界中肯定自己。另一方面，即从主体方面来看:只有音乐才激起人的音乐感;对于没有音乐感的耳朵来说，最美的音乐也毫无意义，不是对象,因为我的对象只能是我的一种本质力量的确证,就是说，它只能像我的本质力量作为一种主体能力自为地存在着那样才对我而存在，因为任何一个对象对我的意义（它只是对那个与它相适应的感觉来说才有意义）恰好都以我的感觉所及的程度为限。因此， 社会的人的感觉不同于非社会的人的感觉。只是由于人的本质客观地展开的丰富性,主体的、人的感性的丰富性，如有音乐感的耳朵、能感受形式美的眼睛，总之，那些能成为人的享受的感觉，即确证自己是人的本质力量的感觉，才一部分发展起来，一部分产生出来。因为，不仅五官感觉，而且连所谓精神感觉、实践感觉（意志、爱等等），一句话，人的感觉、感觉的人性，都是由于它的对象的存在，由于人化的自然界，才产生出来的。

历史性这个东西在我们称之为历史的东西之前，历史性是此在本身发生的存在状况，所谓“世界史”才因此而可能，并且历史的属于世界史，此在就是他的过去。可能性来自于过去中被遗忘的基本经验的可能性后占有这种可能性，此在就是向前存在，向自己的可能性存在叫将来，但是向将来存在就是向着过去存在，此在生存的可能性不是自己原创的，是来自传统的可能性，来自于传统不意味着命定的性质，这是历史主义的想法，恰恰相反，这些可能性没有一个是命定的，所以此在即是被投，又是投开
</blockquote>

## 2023-04-15 17:58:21
《田园交响曲》本来是贝多芬的第六首交响曲，这本是我的古典启蒙。这种带了明显标题的音乐有个不好的地方：那就是先入为主的在观念里注入了有关"田园"的概念，这样音乐似乎就和像讲故事一样，不得不说这是一种对音乐的误解（不在这里说明）总之，我感受到的是优美与崇高的意象，得到宁静、自然、美好、祥和与超脱，这是一份内在的体验。

《田园交响曲》是纪德三部曲的终篇，与贝多芬的曲子不相同，这是个彻头彻尾的道德悲剧。这种以苦难为土壤，用泪水灌溉成长的无望之爱对我具有致命的吸引力。而那种一面背负着道德的十字架，一面渴望冲破牢笼，理智与情感在内心煎熬的自我剖析极迷人。道德似乎是虚伪的，那些把上帝当幌子伪装成的基督徒则更是虚伪。

而我要谈的"田园交响曲"与以上都无关，我要谈的只是一条平平无奇的乡间小路。

我住在乡下，父母住在乡下的乡下，房东周末会开车到乡下的乡下，匆匆忙忙地收租或者打扫或者招呼宾客等等，看起来似乎有忙不完的事，一切都根据争分夺秒的日程表进行，临近周末终了又匆匆赶回。他无数次的走在这条小路上却从来没真正走过。这样一个人的组织能力也许很惊人，真正知道如何去安排事情。诚然，他的确显现了值得赞赏的支配事物的能力：
但他支配的是存在物而非存在，他从来没有接触到过存在。我和爸妈沉湎于那条乡间小道上散步，从字面上讲，就是失去了那同自然分离开来的自我：进人那个主体和客体不再相互杀气腾腾地分立对峙的存在域。我们的场叠合在了一起，在这借用下海德格尔的词"Dasein"，"此在"，海德格尔对人的存在描述最显著的特征之一，就是他根本不用"人"这个词。

当我们这样来看，把人或者此在看做一个场，这个观念一点也不神秘不抽象。这同刚刚学会对自己名字做出的反应的小孩的日常观察吻合。当人们呼唤他的名字时，他就会足够迅速的来到，但是如果你要他指出这名字所属的那人时，他就完全有可能指向自己妈妈或者爸爸，使两位热切的父母大失所望。几个月后，他就指向自己了，但在这之前，当他听到自己的名字，无论谁叫他让他来干什么的，这小孩是对的，他的名字不是他的身体所包含的某个存在的名称：那只是及其抽象的社会规定。当他听到他生命攸关的存在的任何一部分被人家喊到是，他就听到可人家在喊他的名字。比如现在有人喊："看，他是个程序员"，那么我一定会回头，相反的，当有人喊"帅哥"时，我却从来不会回头，除非她在哪一直喊，我可能会回头观望，这不仅仅是是因为我有自知之明而是是这个词太抽象。我们生来就有很多预先的东西先天的塞给我们，比如哪国人，什么语言，父母是谁，这同样是场的一部分。我们之所以可以互相沟通聊天，是因为我们存在于互相领会的场景内，这场景正是存在，注意，这都是动词。

诗人对存在的关系不是有力量（知识）的忙人对存在者的关系。后者（房东）虽然来往乡间，但是却不曾真正地在那儿“存在”过。当今时代的人是技术人，是笛卡尔式的人的末代后裔，但是却没有笛卡尔对清楚明白观念的热情。笛卡尔被禁锢在他自己的发光的自我之内，面对着物质对象世界认为是彻底异在的，而且或许还是不可知的："我思故我在"，这个"我"与"我"之外的一切都划分了界限，像笛卡尔一样，技术人也面对着他世界里的对象，除了拥有那种为了控制它们工作需要的知识外，再没有必要也没有能力跟它们发生亲密的关系了。马克思说:"完成了的自然主义，等于人道主义，而作为完成了的人道主义等于自然主义，它是人与自然界人与人之间矛盾的真正解决，是存在和本质、对象化和自我确证、自由和必然、个体与类之间的斗争的真正解决。"人与环境的关系问题本质是同一个问题，人改造环境，环境反过来影响人。

人的有限性不止于死亡，而是我们站在我们自己之外，一方面对存在展开，同事又出在存在开阔的垦殖地里，这即发生在
时间中又发生在空间中。海德格尔说人是个有距离的生物，将来是"尚未"，过去是"不在",这两个否定贯穿他的存在。假如人对死亡没有一种动情的觉知，那么时间就是一种消极的钟表运动，毫无意义。这说明人的存在彻头彻尾都是时间性的，难怪海德格尔把自己的作品名叫做《存在与时间》,而萨特这个不孝子却没有继承父亲的意志。因此对人来讲，根本的心情便是"焦虑"，只有在焦虑中，我们存在的这种此时此地性才能以全部不稳定的和全然的偶然性呈现在面前。

海德格尔站在他自己所处文化的立场上来阐述虚无主义，他尽力把属于东方思想的直观与非理性拿来去纠正它，而非那些信口雌黄的全盘东方论者那样,肤浅的把这解释为西方人偶然所犯的错误。必须把历史看得比这更加命定些,如果西方否定未来而变成另一的选择,那么东西方也将不复存在。
所谓西方理智也就不会产生。缺乏这种理智是东方文明历史筹划中的否定方面，是阴影。每一束光都有它的阴影
`,Af=`---
created: "2025-01-17T09:41:28.857Z"
title: 稿子
slug: c5a3ed69-7d1a-4c1f-a096-f3f9145ba4d6
category: philosophy
---

## 一、人的本质
马克思曾在1844年巴黎手稿中这么写到："人是自由自觉的主体"，同时在费尔巴哈的提纲中马克思又说到："人是一切社会关系的总和"，人并不是抽象的世界之外的存在物，而是处在现实的、可以通过经验观察到的，一定条件下进行的、发展过程中的人。人之为人的显著特征就在于，他脱离了直接性和本能性的东西，而人之所以能脱离直接性和本能性的东西，就在于他的本质具有精神的理性的方面。“根据这一方面，人按其本性就不是他应当是的东西”——因此，人就需要教化。自我意识的诞生并非是我自己看到我自己本身，恰恰却因为是看到他人与他物的关系而诞生的。<br/>
人是我要比你强的，我要比你尊贵、富有，比你荣耀……归根到底是我得比你强，比你强了才踏实，这就是人的原动力。所以，尊重、关爱才成了道德，而能众生平等的就不是人了，是佛，是基督。资本的本性是逐利，而把货币、技术、信息……包括青春美色和健壮体格等一切可用之用都转化为资本的，是人。市场经济是丛林法则，当社会矛盾演化到谁都过不踏实的时候，生存秩序和生产力要求就会催生与之相适应的新规则，就是以国家意志对市场经济和社会分配有所干预、有所调控的社会机制。
## 二、向上的渴望
回想之前的读书经历，当我刚开始接触到有关思考的一些的书籍时，时常有这样的情况，我受到了头晕目眩的冲击，大三时被人推荐读了一本书，是尼采的《查拉图斯特拉如是说》。我也说不上是怎么回事，尼采思想的那种近乎癫狂的驱动力，还有查拉图斯特仿佛魔力一般能引起情绪起伏的诉说让我震惊。总之，那本书有着模糊虚实界限的能力。我全然分不清我在哪儿，我到底是谁，时间似乎静止了，我钻到了那本书里。我觉得我不是在读它，而是被包裹在那散文般的激流中，猛然的思想冲刷着我。感觉我自己的思想在溶解，灵魂出窍，被人施了魔咒，如果有天堂的话那就是了，我就在了。对当时的我来说，幼稚的思想框架被打碎了，我不得不在痛苦中重塑。我并不是尼采的粉丝，甚至于他的思想有些地方与我相背，但这并不妨碍我去理解他的世界，他们的世界，这些曾经的天才们时至今日依然还能带我们去领略那更高的殿堂。我一直想的是，只要我还一直读书，就可以一直能理解自己的痛苦，一直与自己的无知、狭隘、偏见、阴暗见招拆招。我并不期待人生可以过得很顺利，但我希望碰到人生难关的时候。自己可以是它的对手。<br/>

## 三、智慧的渴求
经过了几年的阅读，我渐渐的理解到这些伟大的书籍不仅仅让我重塑而且还让我皈依，我怀着宗教般的热忱去寻找生命的神秘以及美好生活的神性，我热爱着，因而变得深邃，一部伟大的作品往往代表了这位作者的一生，它事关一个人如所是，当我看到媒体从中随处摘录的一段的解释用着空头语言名号的词语，没有他们应该的心痛、喜悦、成就感和担忧，如果他们打心底里意识到这些人所面对过的问题和境遇以及与生死信仰休戚相关的话，就能切身的感受到这些问题多么重要，这些高高在上的抽象讨论常常让我如此悲伤。如果我没有理解到孔子所说的“仁”，我如何能理解他，理解他所说的“朝闻道夕死可矣”，如果我没理解到王阳明的知行合一，又如何理解“此心光明，亦复何言”呢？我初读奥古斯丁时实在提不起兴趣，也许是同名的小说《忏悔录》被卢梭写的如此虚伪，后来我才理解了他那爱与灵魂挣扎中蕴含的力量，明白了要谨慎对待我之所爱，因为它将成为我之所是。是的，读书不仅仅是为求知，更是为寻求智慧，寻求真理，智慧与真理不是我所拥有的，而是我所是的。我知道我水平有限，所以每每到此就谨言慎行，可当我有机会每次满怀热情去给我的弟弟妹妹们解释我所体会到的这一切时，我感觉我被掏空、精疲力竭，我认为这对他们有用，但悲剧的是往往他们吸收不了那么多。


## 四、真诚的实践



## 五、关于男女平等
首先抽象讨论平等问题则没有任何实际意义。平等问题首先不能回避男女的生理特点，其次，不能抛开生产力的发展水平；第三，不同的地区、不同的民族、不同的宗教，其男女平等的具体内容也各有不同。另外，平等问题有些属于法律范畴，有些属于道德范畴，不可同一而论。简单地说，不承认差异，就不可能拥有真正意义上的平等，绝对平等的直接后果就是摧残妇女。中国社会已经以法律的形式实现了女性与男性在受教育的权力、就业机会和婚姻自主三大方面的平等，男人手里已经没有什么属于特权的东西了，在这种社会制度下，女人还向男人要些什么呢？男人手里还有什么呢？要当哲学家吗？拿出思想来。要当政治家吗？拿出纲领来。要当军事家吗？拿出战绩来。每一扇大门都是敞开的，能否进去那是女性自身的实力问题。如果以分配名额的方式让女性参政，那么它的大前提就已经失去了平等，是根本的不平等。应该更多地从人类生存和社会分工来评价女性，赞美女人的天性和伟大的牺牲精神。女性应该正视自身的优势与不足，社会应该倡导男人表现出更多的宽阔胸怀和社会责任。那些高高在上的女权运动救世主们，喊着“女人为自己活着”的偏激观点，不顾实际而将男女放在同一竞技规则计分的女权理论，表面上拔高了女性，最终却是伤害了女性。女性地位的提高有赖于自身的经济独立，有赖于发达的生产方式创造出更多的适合女性生理特征的工作岗位，有赖于人类文明的不断进步。只有承认差别才能更好地保护女性。女性要求的权益不应该是生存规则的平等，而是社会利益向女性一方的大倾斜。正如马克思所说，男人与女人的关系衡量一个社会的文明程度。

## 六、关于群众
“群众”一词含义模糊。如果我们指的是同时代人的一种未经分化的聚合体——这些人处于某一特定状况中，并且由于全都承受到某些相同影响的压力而形成一个统一体——那么，显然，这样的聚合体只能在短暂的时间中存在。如果将“群众”用做“公众”的同义语，那么它就指由于共同接受某些观点而在精神上彼此相连的一群人。不过，这样的一群人界限模糊、分层不清，尽管往往是典型的历史产物。然而，如果“群众”指这样的人群聚合体，即他们在某种生活秩序的机器中如此接合起来，以致其中多数人的意志和特性具有决定作用，那么，他们就形成在我们的世界中持续起作用的有效力量——这种力量在“公众”或“群伙”中却只是短暂地呈现自身。古斯塔夫·勒蓬曾有力地分析了作为“群伙”这类暂时统一体的群众所具有的特性——冲动、易受暗示、不宽容以及无常易变。“公众”则是一种幻象，是假定在大量的并无实际相互关系的人们中存在着的意见的幻象，尽管这种意见并不实际出现在公众的组成单元中。这种意见被当做“舆论”来谈论，但却是一种虚构。个人或群体求助于它来支持自己的特殊观点。它幻影般地难以捉摸、易于消逝。它“忽此忽彼，忽来忽去”，虚无缥缈，可是却仍然能够在短时间内赋予大众以举足轻重的力量。个人在任何一个这样的群众中都只被视作许多具有同样权力的单元之一。然而，这些接合起来的群众是人生存的某种特定历史结果的可变的、多样化的和暂时的表现形式。不过，接合起来的群众有时也能以非常的方式表现自身，表明它们自己有能力应付非常的情况。虽然一般说来群众要比个人较为迟钝、较少修养，但在特别的场合，它可以比个人更精明、更深刻。


## 七、关于马克思主义
马克思主义把马克思的实践解释为实事求是即见路不走是相当狭隘的，见路不走是找到造成结果的条件即实证主义的，把实践理解为从既有的事实、现象当中寻找确定的规律和属性，以为判断和行事的依据，这同样属于旧科学。我们不能既讲客观性而又抛离了「人」的存在。实证主义的人是一种古怪而稀奇的生物，他住在一个由他发现的科学上『有意义』的事物组成的光明之岛中，至于普通人及其周围的人天天生活在「无意义的」黑暗中；实证主义简单的接受了现代人的支离破碎的存在，并且构建出一种哲学来强化它，因此实证主义并没有落到具体的人身上。马克思主义的人是一种工艺学意义上的生物，一种忙碌又机巧的生物，自以为他自己就是挑出来的历史的合作者，同实证主义一样，马克思主义没有一个用来描述人的个体性「具体性」的独特事物的范畴，从而在十五的自然过程中设法诗人的这种个体性脱离存在而具体化，马克思主义绝对不等于马克思，马克思主义是一个复数，即抽象化。<br/>
当黑格尔和马克思都看到了资产阶级社会歌舞升平背后的巨大风险时，黑格尔指出这是因为市民社会只停留在特殊性的层次，没能达到普遍性，因此个体自私自利必然会导致市民社会走向崩溃；但是马克思会深入这个社会本身，思考资产阶级社会在商品交换的背后，采取了怎样的一种生产模式，是怎样的社会机制才使得这个时代的人的利己主义达到高峰。因此马克思不是提出国家理论，而是提出异化劳动等理论。<br/>
教条的社会主义以为消灭了资本就没事了，其实关资本什么事，丛林法则的原动力是人，遏制了人的原动力，经济就没活力，苏联解体和中国改革都是作为果存在的，无需论证。社会化经济就是不‘唯’的经济，不唯资本形式和结构，不唯所有制形式，不唯资本日子，这就是社会化经济，就是马克思没有我们在140多年后看得清楚的社会主义。人们出于各自的好恶可以不叫它社会主义，人类不能被一堆名词困住了，不必为一堆名词吵得脸红脖子粗，其实那只是一堆符号，注重本质的就不会在意它叫什么。今天我们可以坐在这里说，按教条雕塑的社会模式谁来吹口气也不显灵，捆绑出来的全民经济背离了价值规律，气血不通就没活力。但是人类对真理的认识是有过程的，如果我们不是站在对立双方的立场，我们就不能不承认那是一次空前规模的人类追求美好社会的实践，仅我个人，我愿意称它为伟大的实践。历史的事实是，在这个主义那个主义之间，中国的国情选择了马克思主义，这不是因为共产党比谁会打仗，是社会基础，正如美国的社会基础决定了美国的社会形态。<br/>
那不叫见路不走，那叫事于道，又走了一条见路不走的路。见路不走就是实事求是，不住一法，不拘经验教条,苏维埃不是被谁骂垮的，欧盟也不是为了主义凑在一起的，是成员国生产力发展的需要，生产力资源社会化和全球化是生产力自身的发展要求，是人类要过好日子的本能。如果欧盟有一天沦为政治工具或另一种形式的大锅饭，它会像苏联一样垮掉，半点没商量。实事求是是个很大的概念，很原则，很宽泛，听的多了，就不觉得它神道了，不觉得神道并不表示就真懂了，更不表示就能操作了，就像好多人在说实事求是的时候，其实实事求是根本不关他的事，他那样说只是想表示他是明白人。<br/>
见路不走是‘见路非路，即见因果’的意思，跟‘见相非相，即见如来’是一个道理。见路不走是实事求是的执行和具体，更具提示性，更容易理解和操作。马克思的资本规律说可能不是最重要的，最重要的是马克思主义的认识观，辨别、证明的认识观。也许是我太笨了，我看来看去就只看出了一句话：实事求是。以辨别、证明的认识观实事求是认识事物，这就是我认为的马克思主义。<br/>
务实与实事求是能不能画等号？咱就算愣画等号，佛法讲如实观照，翻译过来也是实事求是，那佛法与马克思主义又该谁是谁呢？基督教的神，道教的道，佛教的如来，马克思主义的客观规律，刨到根其实都是一样东西，规律，又该谁是谁呢？不同价值体系的共性有着不同的外延，因不同用，做不同方向延伸。或许美国移民汇集的文化比中国一统的儒家文化更具有实事求是的含量，或者说更接近实事求是，但是能不能据此就冠以‘实事求是的文化’？可能还不够质量，务实与实事求是毕竟还有距离。



## 八、见相非相
什么叫路？成功者的经验、方法叫路。路管不管用？管用，不管用早没人走了，它管借鉴、模仿、参照的用。但是我们说它有漏，不究竟，因为成功者的经验是他那个条件的可能，你不可能完全复制他的条件，完全复制了，也就不是你的人生了。见路不走就是提示，不要拘于经验、教条，要走因果，只有因果是究竟的，是无漏的。但是人就会有错，但你至少有了这种意识，比起唯经验唯教条就少出点错。什么叫命运？除了不可抗拒的外力之外，剩下的就是多出点错与少出点错的区别。<br/>
如来是啥呢？这得从因果律说起。什么条件产生什么结果，这是规律，这个规律是怎么来的呢？不知道，因为说来就已经错了，有来必有去嘛，而因果律无所从来，也无所从去，人们就用如来这词来表述这种性质。‘见相非“相，即见如来’的意思通俗点说就是透过现象看本质，这里的如来当真相讲，往大里说就是了悟得道的意思,见路不走不是让你跟别人一样的，也不是让你跟别人不一样的，它不以一样不一样为判断，它是让你立足。<br/>
这是个‘场’的世界，有多少立场就有多少观点、主义。众生是立场的、利益的、好恶的，众生只相信自己愿意相信的东西，出离立场的观点在立场的圈里是没地方立足的，因为没有‘场’可以让你立。东欧民众需要心理支持，东欧当局推行变革政策需要反省历史和理论支持，西欧需要胜利者的感受。其实还漏掉了一块，还有美国，美国不仅要正义和胜利的光芒，还有领袖感。昨天人们相信共产主义，不是因为马克思主义是真理，是相信了一个许诺。今天不信了也不是因为它不是真理，是没得到预期的实惠。众生不管你真不真理，他们只需要许诺、兑现。半个世纪的烙印，共产主义一词已经被烙成了一个空洞的符号，连共产党的领袖都说，贫穷不是社会主义。现在你跟东欧的人民说，你们解体的那个不一定是真正意义的社会主义，再跟欧盟的人民说，你们组合的那个也不一定不是社会主义。<br/>
觉者与众生是社会研究对象的泛指，既有你觉的就必有你惑的，明白了这个不一定明白那个，人人都有所觉有所不觉，不做具体指，只要是人就不可能是镜子，因果律是镜子，辨别、证明的逻辑和实践是镜子。其实真理也不‘是’，‘是’的就不叫真理了，叫定律。出离立场不一定是真理，但一定是不被立场接受的，没受众就没钱赚，这就是硬道理。这种秃头上的虱子明摆的事，瞄一眼心里有个数就行了。如果共产主义是神话天堂，不用违心它也是荒谬的。马克思不是神，不是思想探索的终结者，人类就是批判地认识前人的东西才得以进步，凭什么到了马克思这儿就批不得了呢？比如公有制，没了私的公有制还怎么公呢？这个公往哪儿待着呢？矛和盾是本一的事物，有谁还能扔了一个揣着一个？比如阶级斗争，如果人类历史都是阶级斗争的历史，那就否定了阶级斗争之外的一切社会矛盾，怎么可能呢？大锅饭一样让工人队伍里有怨言，宫廷里的权力之争一样杀得你死我活，每个元素都对历史演化产生着影响。

## 九、民主
民主不是先挖渠还是先放水的非此即彼，不是为民主而民主的事于道，民主是社会经济、文化发展的产物，不是谁想不要就可以不要了。不同的社会条件决定了不同的，民主形式，没什么放之四海而皆准的法宝。中国文化2000多年了，那是植根在一个民族骨子里的东西，没有想换就换的说法。中国人民不可以按照自己的方式生活吗？一定要生活在西方人的价值观里吗？人，文化，是有思维方向和思维半径的，数人头不是什么条件下都能适用的，也未必是最好的解决社会问题的方式，美国不能把中国的文化土壤搬过去试试美国式的民主，中国也不能把美国的文化土壤搬来试试中国的人民代表大会的民主。中国人民的根本利益是民族团结、领土完整和经济发展？还是美国式的民主？过去中国要把红旗插遍全世界，也不管人家需不需要红旗，那是事于道了。美国到处输出它的民主与过去中国要把红旗插遍全世界，我看不出来有什么质的不同，同样是事于道。中国有错就改了，美国是不是也该有错就改呢？


## EMO
1、判断一个人不能只靠表面，衡量一个人的才干也不能单凭学历。感情这东西就更复杂了，很难用简单的推理说清楚，各有所求而已。对于品性这东西，今天缺个角、明天裂道缝，也就离塌陷不远了。想干成点事就记住两句话，别把别人不当人了，别把自己太当人了。就这点规律而言，天下乌鸦一般黑。<br/>
2、在场是实在的前提，实体性是实在的基本特征<br/>
3、科学研究既不是这种存在者唯一可能的存在方式， 也不是它的最切近的可能存在方式，科学的科学绝不意味着是在科学中的某一门，它的地位有多么崇高，而是他是所有科学之前的科学，是一种源科学，是科学之本，是追求最原始最根本最先最后的东西<br/>
4、存在就是方法，现象学就是（存在）生命自身的展开，时间就是存在，人不被抽象话平面化为主体性，就必须强调其特殊性，这个特殊性应该由什么来保证<br/>
5、用主体性把中国人对于人那种切入的意义全部抹除掉了，变成了一个死的东西，中哲那种人的温热的、切己的，贴身的，随人而异的把握和体认都消失了，切肉的切入灵魂的此在，在场是实在的前提，实体性是实在的基本特征<br/>
6、不可思议一词不是众生道里的对神秘事物的描述，而是如是、本来、就是如此，容不得你思议。也是一种告戒、提示，是告诉你不可以思议，由不得你思议。从数学逻辑上说，一加一等于二，容得了你思议吗？不容，这就告诉你了，一加一等于二是规律，规律不以人的意志为转移，你只能认识、遵循，不可思议不是说谁本该成为哪种人是规律，而是说谁本该成为哪种人是条件的可能，因果不虚，因果是规、是律，不可思议<br/>
7、法律是社会道德的底线，是解决最基本、最表面的问题，不解决文化的根本问题，文化的问题只能由文化的觉悟解决。一个民族的文化属性就是这个民族的主，主宰着这个民族的文明、荣辱、兴衰。一个民族最强调道德的时候，正是这个民族道德最沦丧的时候<br/>
8、判断是一种能力，是认识事物的能力。就像很多人，我能跑，但是我不知道该往哪儿跑。能跑是一种能力，知道该往哪儿跑更是一种能力，大多数人都是跑了半天跑错了，白跑。人家知道方向的人不用跑，慢慢悠悠散步都会比咱们先到达。你的知道是自觉，现在是让你觉他。知道这个道理的人很多，但多是呈道理和知识存在，不是自觉。道理和知识是没用的，只是有用的一个条件，用才有用。让你觉他什么？觉他的无明，觉他的道理和知识的没用，觉他，是有可能更好的谋生，没有谁可以普度众生。让人做到实事求是有多难，让人做到说老实话、办老实事有多难，而做到的人却成了说鬼话、办鬼事，倒行逆施。<br/>
9、平静的心作为果存在是有条件的，取决于你的觉悟和认识，不是从天上掉下来的，由不得你可选可控。真宁静了，就真了无明了，也就没什么致远致近了踏踏实实过你的日子，有啥问题解决啥问题，做好当下条件可能的事，甭想什么致远致近。你还有可能不活在条件的可能里吗？不可能。人还缺出人头地的心吗？摁都摁不住啊，能少点妄想就不错了。<br/>
10、一分钱能花出一分钱的有效，已经不是人了，是神，这表示没有错误。但是，只要还是个人，怎么可能不出错呢？一分钱能花出八成的有效，就是我们常说的高人。六成的有效，就是可以接受和允许存在的。一分钱掰成八瓣花，那得是多大的贪心哪，那还有可能如实观照事物吗？无效，再省也是扔。
`,If=`---
created: "2025-01-17T09:45:45.792Z"
modified: "2025-03-28T15:53:09.826Z"
title: 《维摩诘经》
slug: d70302f0-2c45-4b5b-95eb-99fbad7eb135
category: philosophy
---

# 《维摩诘经》

### 开篇

**我只是在这里做个记录，只取部分精华做记录，可能在日常生活中或者反复研习中会有不断地感悟与想法，会不断的更新**

《维摩诘经》是十三经里是一部唯一的居士讲经，又名《净明经》《无垢经》，意思就是干净清净。维摩诘是音译过来的名字，原名《Vimalakirti》，《净明经》《无垢经》就是意译的名字。居士说法按照佛教的传说，在末法时期主要传法的责任就是居士，所谓居士也就是民间修习佛学的人，自认为当今时代百分之一千应该是末法中的末法了，所以《维摩诘经》显得比较重要。主要是能将出世入世打成一片，在尘世、现世中能够圆通无碍。</br>

《维摩诘经》整个结构来看更像一部文学作品，内容上更像《金刚经》一些，从第一品佛国品开始讲“净土”，这个净土并非那个阿弥陀佛净土宗中的“净土”，而是**心净则国土净、心净则佛土净**，无烦恼就无菩提或者说烦恼就是菩提，以及“**亦入世亦出世、在入世中出世**”的思想，都是极为重要的思想，最为重要的是贯穿整部经书的主线——“**不二法门**”，更是整个佛学里极为重要的方法论。“二法”前加否定词“不”即成为“不二法”，也就是将原本有分别性质的“二法”转换其义，改变原有的认知态度，超越一切分别之相，达到绝对平等的真理。</br>

什么是真理呢？今天关于真理之本质的知识是那样微乎其微，愚钝不堪。这已经由一种漫不经心的态度所证明了；我们正是凭着这种漫不经心而肆意沉湎于对这个基本词语的使用。对于真理这个词，人们通常是指这个真理和那个真理，它意味着某种真实的东西。这类东西据说是在某个命题中被表达出来的知识。可是，我们不光称一个命题是真的，我们也把一件东西叫作真的，譬如，与假金相区别的真金。在这里，“真的”意指与真正的、实在的黄金一样多。而在此关于“实在之物”的谈论意指什么呢？在我们看来，“实在之物”就是在真理中的存在者。真实就是与实在相符，而实在就是处于真理之中。这一循环又闭合了。真理的本质，亦即无蔽，是由一种否定而得到彻底贯彻的。但这种否定并非匮乏和缺憾，仿佛真理是摆脱了所有遮蔽之物的纯粹无蔽似的，倘若果真能如此，那么真理就不再是真理本身了。这种以双重遮蔽方式的否定属于作为无蔽的真理之本质。真理在本质上即是非真理。为了以一种也许令人吃惊的尖刻来说明，我们可以说，这种以遮蔽方式的否定属于作为澄明的无蔽。相反，**真理的本质就是非真理**。但这个命题却不能说成：真理根本上是谬误。同样的，这个命题的意思也不是说：真理从来不是它自身，辩证地看，真理也总是其对立面。同样我们可以说**自由的本质就是非自由，爱情的本质就是失恋**，此处暂不论证。
<blockquote>
道德是自由的存在理由，自由是道德的认识理由。 --康德</br>
婚姻是爱情的坟墓。                        --未知
</blockquote>
</br>

假如把今天用来巩固和发展现在所谓科学的东西叫做真理的话，那我给它起个名字叫做“**客观真理**”，今天我们很习惯于它的用法，因为它已经成为真理这个词的唯一意义了，比如二二的四，一旦我知道了它，我就知道了它，我也就再也不需要努力让它成为我的，它是坚固且结实的，随便怎么使用。既然有了“客观真理”，那么就会有“**主观真理**”，“主观真理”与“客观真理”完全不同，这条真理必须渗透我自己个人的存在，否则，它只是僵死的教条，微不足道，这类真理不是理性的真理而是整个人的真理，有生之年，我需要不断地、努力的去更新它，它是“客观真理”的前提与基石，**“主观真理”不是我所拥有的真理，而是我所是的真理**。</br>

佛教所有的宗派所修行的方式都不尽相同，供奉的经书也不相同，比如天台宗注重止观修，以《妙法莲华经》也就是《法华经》为其根本经典，唯识宗因强调不许有心外独立之境，即以《瑜伽师地论》为本，《成唯识论》为其代表作。禅宗则讲究不立文字,教外别传,直指人心,见性成佛，虽不立文字，但禅宗却是留下文字最多的宗派，将《心经》、《金刚经》、《六组坛经》为其根本经典。但所有的宗派都承认一点，那就是**缘起性空**。 所谓“缘起”，就是说：世界上没有独存性的事物，也没有常住不变的事物，一切都是因缘和合所生起。 所谓“性空”，就是说：因缘和合所生起的假有，本性是空的；如果自性不空，则不能有，这就是“真空生妙有”的意义。《金刚经》中三句义：“世界，即非世界，是名世界”正是此理。“缘起”是指一切现象皆依一定的条件而生起，由相互依存的关系而成立。其基本法则是“此有故彼有，此生故彼生;此无故彼无，此灭故彼灭。”事物依一定的条件才能生起，亦依条件的变灭而变灭。用“缘起”的智慧心来观察世界，就知道其“有”不是真实不变的“有”，其“无”也不是绝对的“无”，它只是一个暂时的现象过程，这样便不会落入“有”、“无”的窠臼当中，离于二边而达到“中道”，也就是破除了西方二元对立的世界观。</br>





### 第一品 佛国品

> 记述释迦牟尼佛在毗耶离城外的庵罗树园与众集会,宝积长者子说偈赞佛并请佛为与会大众“说诸菩萨净土之行”，以此揭开> 了本次法会之序幕

<blockquote>尔时,长者子宝积说此偈已，白佛言:“世尊，是五百长者子，皆已发阿耨多罗三藐三菩提心，愿闻得佛国土清净，唯愿世尊，说诸菩萨净土之行。”佛言：“善哉,宝积！乃能为诸菩萨，问于如来净土之行。谛听, 谛听，善思念之，当为汝说。”于是宝积及五百长者子, 受教而听。</br>
佛言:“宝积，众生之类,是菩萨佛土。所以者何? 菩萨随所化众生,而取佛土;随所调伏众生,而取佛土; 随诸众生，应以何国入佛智慧，而取佛土;随诸众生，应以何国起菩萨根，而取佛土。所以者何？菩萨取于净国,皆为饶益诸众生故。譬如有人，欲于空地,造立宫室，随意无碍;若于虚空，终不能成。菩萨如是,为成就 众生故，愿取佛国;愿取佛国者，非于空也。</br>
“宝积，当知！直心是菩萨净土，菩萨成佛时，不谄众生来生其国;深心是菩萨净土，菩萨成佛时，具足 功德众生来生其国;菩提心是菩萨净土，菩萨成佛时, 大乘众生来生其国;布施是菩萨净土，菩萨成佛时，一切能舍众生来生其国;持戒是菩萨净土,菩萨成佛时, 行十善道满愿众生来生其国;忍辱是菩萨净土,菩萨成佛时，三十二相庄严众生来生其国;精进是菩萨净土, 菩萨成佛时，勤修一切功德众生来生其国;禅定是菩萨净土，菩萨成佛时，摄心不乱众生来生其国;智慧是菩萨净土，菩萨成佛时，正定众生来生其国；四无量心是菩萨净土，菩萨成佛时，成就慈悲喜舍众生来生其国; 四摄法是菩萨净土，菩萨成佛时，解脱所摄众生来生其国;方便是菩萨净土，菩萨成佛时，于一切法方便无碍众生来生其国;三十七道品是菩萨净土，菩萨成佛时，念处、正勤、神足、根、力、觉、道众生来生其国；四无量心是菩萨净土，菩萨成佛时，得一切具足功德国土; 说除八难是菩萨净土，菩萨成佛时，国土无有三恶八难；自守戒行、不讥彼阙是菩萨净土，菩萨成佛时，国土无有犯禁之名;十善是菩萨净土，菩萨成佛时，命不中夭，大富梵行，所言诚谛，常以软语，眷属不离，善和净讼,言必饶益，不嫉不恚,正见众生来生其国。</br>
`,Rf=`---
created: "2025-03-28T16:02:54.253Z"
modified: "2025-03-28T16:15:27.536Z"
title: 《红楼梦》
slug: hlm
category: philosophy
---

## 目录

* [1、红楼梦任然活在当下](./1-红楼梦任然活在当下.md)
* [2、我们仍通过这面镜子照射国人与社会](./2-我们仍通过这面镜子照射国人与社会.md)
* [3、我们仍通过这面镜子照射国人与社会](./3-伟大天才作出贡献的前提是备受苦难.md)
* [4、红楼梦的成书过程与神秘性](./4-红楼梦的成书过程与神秘性.md)
* [5、整本《红楼梦》就是这样一面镜子](./5-整本《红楼梦》就是这样一面镜子.md)
* [6、以世事烛照人心](./6-以世事烛照人心.md)
* [7、一个民族只有在反思中才能活过来](./7-一个民族只有在反思中才能活过来.md)
* [8、人性与现实的对立，岂可兼美](./8-人性与现实的对立，岂可兼美.md)
* [9、权欲与精明-聪明累](./9-权欲与精明-聪明累.md)
* [10、每一个人都体现了当时中国命运的一个方面](./10-每一个人都体现了当时中国命运的一个方面.md)
* [11、旁听贾府的“政治局”会议"](./11-旁听贾府的“政治局”会议".md)
* [12、贾府会议-儒家与法家的对话](./12-贾府会议-儒家与法家的对话.md)
* [13、黄金组合探春与宝钗-儒法互补式管家](./13-黄金组合探春与宝钗-儒法互补式管家.md)
* [14、谁最能体现”洞明“与”练达“](./14-谁最能体现”洞明“与”练达“.md)
* [15、我把曹雪芹称为“中国的尼采”](./15-我把曹雪芹称为“中国的尼采”.md)
* [16、薛宝钗-儒家文化关于女人的最高理想](./16-薛宝钗-儒家文化关于女人的最高理想.md)
* [17、美德与事功融汇，人性却虚无化-薛宝钗](./17-美德与事功融汇，人性却虚无化-薛宝钗.md)
* [18、薛宝钗VS林黛玉](./18-薛宝钗VS林黛玉.md)
* [19、海棠诗赛-钗黛对](./19-海棠诗赛-钗黛对.md)
* [20、史湘云去哪了](./20-史湘云去哪了.md)
* [21、薛宝钗的三观](./21-薛宝钗的三观.md)
* [22、袭人的心机](./22-袭人的心机.md)
* [23、宝玉挨打众生相](./23-宝玉挨打众生相.md)
* [24、袭人的谨慎](./24-袭人的谨慎.md)
* [25、一块旧手帕的爱情哲学](./25-一块旧手帕的爱情哲学.md)
* [26、儒家定义男女关系的价值标准，但无法回答爱情](./26-儒家定义男女关系的价值标准，但无法回答爱情.md)
* [27、我们先来谈一点人生哲学](./27-我们先来谈一点人生哲学.md)
* [28、谈谈爱情的本质](./28-谈谈爱情的本质.md)
* [29、爱情不是友情的提升](./29-爱情不是友情的提升.md)
* [30、晴雯之死](./30-晴雯之死.md)
* [31、爱情悲剧的中国写法](./31-爱情悲剧的中国写法.md)
* [32、像我们这种人多少还是有些壮志未酬的](./32-像我们这种人多少还是有些壮志未酬的.md)
* [33、我在第五大道有诗无钱，你在故宫有钱无诗](./33-我在第五大道有诗无钱，你在故宫有钱无诗.md)
* [34、先看最好的，把眼界提高](./34-先看最好的，把眼界提高.md)
* [35、写的不只是一个家族的盛衰](./35-写的不只是一个家族的盛衰.md)
* [36、佛道儒各自代表人物被抄检时的反应对比](./36-佛道儒各自代表人物被抄检时的反应对比.md)
* [37、真假解脱](./37-真假解脱.md)
* [38、妙玉算出家人吗](./38-妙玉算出家人吗.md)
* [39、“渡众生”就是去救众生吗](./39-“渡众生”就是去救众生吗.md)
* [40、既从空中来，应向空中去](./40-既从空中来，应向空中去.md)
* [41、高鹗续写悲剧结局的功过得失](./41-高鹗续写悲剧结局的功过得失.md)
* [42、太虚幻境其实不是幻境](./42-太虚幻境其实不是幻境.md)
* [43、宝黛爱情悲剧的一丝暖意](./43-宝黛爱情悲剧的一丝暖意.md)
* [44、红楼梦是谁的梦](./44-红楼梦是谁的梦.md)
* [45、“人心”与“天命”，你选谁](./45-“人心”与“天命”，你选谁.md)
* [46、道家境界终非立命之本](./46-道家境界终非立命之本.md)
`,zf=`---
created: 2025-01-17T09:32:31.422Z
modified: 2025-02-07T03:03:39.608Z
title: ABOUT ME
slug: about
subtitle: 
---

## SITE INTRODUCTION

这个站点是我用来写作和记录的地方，主要会放一些文章、随笔、思考和零散的整理。

设计上参考了 Innei 的 Shiro，但内容和排版都按我自己的习惯做了调整。原来的 Shiro 是基于 React + Next.js 前后端分离的，我改成用 Vue 3 做了一个静态站，更轻量，也更适合我现在的写作方式。

## MY GADGETS

- 手机
  + iPhone Air
  + Vivo X100 Pro
  + iPhone SE 3
  + ~~Redmini Note 12T Pro~~（已出）

- 电脑
  + MacBook Pro 14 (32G + 1T) 2021
  + Windows 9700X + 3700
  + ~~Mac Mini M4 丐版~~

- 显示器
  + 雷神银翼LQ27F165L 27寸 2K165Hz
  + Sync 24寸 1080P 120Hz

- NAS
  + 飞牛 Ultr5 225
  + ~~极空间Z4S~~

- 流媒体
  + Apple TV 4K 第三代

- 路由器
  + Foggie Max IO N100双2.5G网口软路由
  + 红米AX6000

- 平板
  + iPad Air M2

- 耳机
  + Vivo TWS5 HiFi
  + 小米铁圈
  + ~~AirPods Pro~~
  + ~~Vivo TWS4~~（丢了）

- 手表
  + Vivo Watch GT
  + ~~Apple Watch 7~~
`,Of=`---
created: 2025-01-20T02:31:26.396Z
title: 书单列表
slug: book-list
subtitle: 
---

**”日间功夫，觉纷扰，则静坐；觉懒看书，则且看书。是亦因病而药。“**

## 2025年
《海德格尔与现代哲学》<br/>
《存在与时间》<br/>


《瓦尔登湖》<br/>
《窄门》<br/>

《淘宝技术这十年》<br/>

## 2024年

### 哲学类
《含章集》<br/>
《现代中国思想研究》<br/>
《欧洲科学的危机与先验现象学》<br/>

### 文学类
《卡拉马佐夫兄弟》<br/>
《我与地坛》<br/>
《一个叫欧维的男人决定去死》<br/>
《天幕红尘》<br/>
《背叛》<br/>

《rust语言圣经》<br/>




## 2023年



### 哲学类
《1844年经济学哲学手稿》
《林中路》
《历史哲学》
《论道》
《作为意志和表象的世界》
《存在与时间》
《倦怠社会》
### 宗教类
《华严经》
《维摩诘经》
《西方宗教哲学文选》
### 文学类
《红楼梦》
《非理性的人》
《禅外说禅》
《顾城诗精编》
《舒婷诗精编》
《致死的疾病》
《病人家属，请来一下》
### 技术类
《ECMAScript 6 入门》
《Go语言学习笔记》
《深入理解java虚拟机》
《vue3》
kafka 核心技术与实战
深入 Linux 内核架构

### 语言类
《延世韩国语3》
《延世韩国语4》
《标准日本语中级》上
 德语待定。。。

### 政经类
《去依附》

<!-- more -->

## 2022年
### 哲学类
《纯粹理性批判》 100%完成
《实践理性批判》 10%
《1844年经济学哲学手稿》 60%
《林中路》 20%
《音乐诗学》100%完成
《在的澄明》100%完成
### 宗教类
《楞严经》100%完成
《华严经》 20%
《维摩诘经》50%
《西方宗教哲学文选》30%
### 文学类
《诗词格律》100%完成
《遥远的救世主》100%完成
《当下的力量》100%完成
《罪与罚》100%完成
《悲惨世界》100%完成
《大傻天数》100%完成
《人类简史》100%完成
《红楼梦》20%
### 技术类
《ECMAScript 6 入门》50%
《Go语言学习笔记》20%
### 语言类
《延世韩国语3》 50%
《标准日本语初级下》 100%
`,Lf=`---
created: 2025-01-20T02:25:27.924Z
title: 个人收藏
slug: favoured
subtitle: 
---

* [柏林爱乐](https://www.digitalconcerthall.com/zh/concerts) 柏林爱乐乐团官网
* [上海交响乐团](https://www.shsymphony.com/symphonypc/index.html#/zh-CN/pc) 不推荐上爱乐，有点拉
* [马克思主义文库](https://www.marxists.org/chinese/)
* [互联网档案馆](https://archive.org/)
* [汉典](https://www.zdic.net/) 甲骨文查询
* [诗词吾爱](https://www.52shici.com/gl.php) 诗词格律校验
* [书格](https://new.shuge.org/)
* [鸠摩搜索](https://www.jiumodiary.com/)
* [马华文学电子搜索馆](http://www.mcldl.com/site/index) 马来西亚华人电子图书馆
* [安娜的档案](https://zh.annas-archive.org/)
* [zlib](https://z-lib.io/) 突然又活了
* [Library Genesis](https://libgen.rs/)
* [hallowlib](https://bk.hallowlib.org/)
* [英为财情](https://www.investing.com/)
* [彭博社](https://www.bloomberg.com/asia)
* [纽约时报](https://www.nytimes.com/)
* [华尔街日报](https://wsj.com/)
* [经济学人](https://www.economist.com/)
* [卫报](https://www.theguardian.com/international)
* [南华早报](https://www.scmp.com/)
* [sbs뉴스](https://news.sbs.co.kr/news/newsMain.do)
* [明镜周刊](https://www.spiegel.de/)
* [雅虎日本](https://news.yahoo.co.jp/)
* [法新社](https://www.rfi.fr/fr/)
* [俄罗斯卫星通讯社](https://sputniknews.cn/)

## 技术推荐
* [panjiachen](https://panjiachen.github.io/awesome-bookmarks/) by 花裤衩
* [Evan's blog](https://xugaoyi.com/)
* [鳥哥的 Linux 私房菜](https://linux.vbird.org/)
* [编程导航](https://www.code-nav.cn/) by 程序员鱼皮
* [编程自学之路](https://r2coding.com/) by 程序羊
* [前端知识图谱+B站资源整合](https://gitee.com/jishupang/web_atlas) by 技术胖
* [大圣编程自学网](https://shengxinjing.cn/) by 大圣
* [开发者武器库](https://devtool.tech/)
* [工具大全](https://www.fly63.com/tool/home.html)
* [mac软件大全](https://appstorrent.ru/)
* [阮一峰: 科技爱好者周刊](https://www.ruanyifeng.com/blog/archives.html) - 记录每周值得分享的科技内容，周五发布
* [云谦：MDH 前端周刊](https://sorrycc.com/mdh/) - 前端资讯和分享
* [童欧巴：前端食堂](https://github.com/Geekhyt/weekly) - 你的前端食堂，吃好每一顿饭
* [前端RSS](https://fed.chanceyu.com/) - 根据 RSS 订阅源抓取最新前端技术文章
* [值得一读技术博客](https://daily-blog.chlinlearn.top/) - 每天进步一点点，每天分享有料的技术文章！
* [FRE123 技术周刊精选](https://www.fre123.com/weekly) - 前后端技术周刊精选推荐信息流

<!-- <p align="center">
<img src="https://fastly.jsdelivr.net/gh/armerr/image_store@master/blog/qrcode.zdqv9mlfc0g.jpg" width="200">
</p> -->

<!-- more -->

## 文档
* [MDN](https://developer.mozilla.org/zh-CN/docs/Web) | [MDN-JS标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects) Web技术权威文档
* [DevDocs](https://devdocs.io/) Web 开发技术文档，非常不错的学习手册！
* [现代JavaScript教程](https://zh.javascript.info) 以最新标准为基准的JS教程
* [ES5教程](https://wangdoc.com/javascript/) 阮一峰的JS教程
* [ES6教程](http://es6.ruanyifeng.com/) 阮一峰的ES6教程
* [Bash 脚本教程](https://wangdoc.com/bash/) 阮一峰编写
* [ECMA](https://www.ecma-international.org/) ECMA官网
* [菜鸟教程](https://www.runoob.com/) 涵盖多种语言的初级教程
* [腾讯云开发者手册](https://cloud.tencent.com/developer/devdocs)

## 社区
* [Github](https://github.com/) 同性交友社区
* [掘金](https://juejin.im/) 一个帮助开发者成长的社区
* [简书](https://www.jianshu.com/) 有很多频道的创作社区
* [思否](https://segmentfault.com/) 解决技术问题的社区
* [stack overflow](https://stackoverflow.com/) 同上，外网的
* [InfoQ](https://www.infoq.cn/topic/Front-end) 促进软件开发及相关领域知识与创新的传播
* [V2EX](https://www.v2ex.com/) 创意工作者们的社区
* [鱼塘热榜](https://mo.fish) 划水网站，收集了很多网站，当天热门文章
* [码力全开资源库](https://maliquankai.com/designnav/) 很全很强大，独立开发者/设计干货/优质利器/工具资源...
### 社区互动
- [gitter](https://gitter.im/home/explore)
- [兔小巢](https://txc.qq.com/)

## 技巧
* [Google 趋势](https://trends.google.com/trends) 查看某项技术或关键字的热度趋势，可用于分析某项技术的发展前景，或对比某两项技术的热度。
* [百度指数](https://index.baidu.com/v2/index.html#/) 同上，但百度的数据仅限国内。

## 博客
* [阮一峰的网络日志](http://www.ruanyifeng.com/blog/)
* [samanthaming](https://www.samanthaming.com/) 对前端小知识点的总结，并为每个知识点制作精美的小卡片。

## 优秀文章
* [我做系统架构的一些原则](https://coolshell.cn/articles/21672.html) 作者对系统架构的方法论总结
* [灵活运用CSS开发技巧](https://juejin.im/post/5d4d0ec651882549594e7293)
* [防御性CSS](https://ishadeed.com/article/defensive-css/)
## 视频
* [bilibili](https://www.bilibili.com/) B站，上面很多免费教学视频
* [慕课网](https://www.imooc.com/) 实战视频教程
* [妙味课堂](https://www.miaov.com/) 比较系统的前端入门视频教程
* [中国大学MOOC](https://www.icourse163.org/) 涵盖计算机、外语、心理学等专业免费课程
* [终身教育平台](http://le.ouchn.cn/) 涵盖生活、兴趣、职场、技能、老年、学历等免费课程
* [egghead](http://egghead.io) 质量还不错的短视频教程，外网

## Github

- [Repobeats](https://repobeats.axiom.co/) 生成仓库的动态数据统计图

* [github 短域名服务](https://git.io/)
* [shields](https://shields.io/) 徽章图标
* [followers 全球排名](https://wangchujiang.com/github-rank/index.html)
* [star-history](https://star-history.t9t.io/) 展示一个项目 Stars 增长曲线



## 评论系统

- [giscus](https://giscus.app/zh-CN) 由 [GitHub Discussions](https://docs.github.com/en/discussions) 驱动的评论系统



## 前端小工具
* [Can I use](https://caniuse.com/) 查看属性和方法的兼容性
* [30 seconds of code](https://30secondsofcode.org/) 收集了许多有用的代码小片段

## 代码编辑
* [codepen](https://codepen.io) 在线代码编辑与演示
* [codesandbox](https://codesandbox.io) 内嵌VSCode的在线IDE

## Emoji表情
* [emoji表情](https://emojipedia.org/)
* [emoji表情备忘录](https://www.webfx.com/tools/emoji-cheat-sheet)
* [根据文本匹配emoji](https://translate.yandex.com/?lang=zh-emj)
* [gitmoji](https://github.com/carloscuesta/gitmoji) 通过 emoji 表达 git 的操作内容

> 在任意输入框快速打开emoji表情方法：<br/>
> Windows系统下按<kbd>Win</kbd> + <kbd>.</kbd><br/>
> Mac系统下按<kbd>Control</kbd> + <kbd>Command</kbd> + <kbd>空格</kbd>

## 图片工具
* [tinypng图片压缩](https://tinypng.com) 压缩png很有用
* [微图](https://devtool.tech/tiny-image) 浏览器端图片压缩，不会上传图片到服务器
* [Squoosh](https://squoosh.app/) 谷歌出品在线免费图片压缩工具（jpg、png等,压缩效果比tinypng稍好）
* [waifu2x](http://waifu2x.udp.jp/) 通过卷积网络放大图片
* [vectormagic](https://vectormagic.com/) 转换矢量图
* [vectorizer](https://www.vectorizer.io/) 真正的 png 转 svg 神器
* [在线AI图片处理](https://photo.opencool.cn/) 黑白修复、无损放大、动漫化、铅笔画等。
* [remove](https://www.remove.bg/zh) AI抠图（抠背景）
* [magic eraser](https://www.magiceraser.io/) AI抠图（抠前景）
* [backgroundremover](https://github.com/nadermx/backgroundremover) 又一个抠图的

## SVG
- [svg编辑器-E2.Cool](https://e2.cool/)
- [svg编辑器-i排版](https://x.ipaiban.com/login)

## 音视频工具
- [迅捷视频转换器](https://app.xunjieshipin.com/video-converter/) 在线转换各种视频格式
- [迅捷音频转换器](https://app.xunjieshipin.com/video-converter/) 在线转换各种音频格式
- [修剪音频](https://mp3cut.net/cn/) 在线修剪或剪切任何音频文件

## 思维导图
* [processon在线作图](https://www.processon.com/) 流程图、思维导图、原型图等
* [百度脑图](https://naotu.baidu.com) 思维导图

## CSS

- [各种CSS生成器和JS代码片段](https://juejin.cn/post/7030572979868139551?utm_source=gold_browser_extension)

* [CSS Tricks](http://css-tricks.neatbang.com/) CSS技巧收集与演示
* [CSS生成器](https://neumorphism.io/)
* [CSS渐变生成器](https://www.colorzilla.com/gradient-editor/)
* [CSS3-Box Shadow(阴影)](https://www.html.cn/tool/css3Preview/Box-Shadow.html)
* [贝塞尔曲线生成器	](https://cubic-bezier.com)
* [花纹背景生成器](http://www.heropatterns.com/)
* [花纹背景-pattern.css](https://github.com/bansal-io/pattern.css)
* [3D字体](https://bennettfeely.com/ztext/)
* [css-tricks](https://css-tricks.com/) css技巧文章
* [You-need-to-know-css](https://lhammer.cn/You-need-to-know-css/#/zh-cn/) CSS的各种DEMO，很全
* [animista](https://animista.net/) CSS动画可视化工具，复制代码就能用
* [navnav](http://navnav.co/) 各种炫酷的CSS动画组件

## CDN加速
* [jsDelivr](http://www.jsdelivr.com/) 国外的一家优秀的公共 CDN 服务提供商
* [unpkg](https://unpkg.com/) cdn 服务

## 网站托管
- [vercel](https://vercel.com/) 好用的网站托管服务
## 正则
* [正则可视化](https://regex101.com/)
* [iHateRegex](https://ihateregex.io/) 正则搜索，细节做得很好
* [正则迷你书](https://github.com/qdlaoyao/js-regex-mini-book) 学习正则的小手册
## 其他
* [Linux命令手册](https://ipcmen.com/)
* [carbon代码图片生成器](https://carbon.now.sh/) 生成好看的代码图片


## 设计
- [创造师导航](http://chuangzaoshi.com/)
- [设计师网址导航](http://hao.uisdc.com/)
- [remove](https://www.remove.bg/zh) AI抠图，抠图算法很厉害
- [Manypixels](https://www.manypixels.co/gallery/) 插画
- [Undraw](https://undraw.co/illustrations) 插画
- [storytale](https://storytale.io/) 插画，种类丰富，包含3D插画
- [uimovement](https://uimovement.com/) 能从这个网站找到不少动画交互的灵感
- [awwwards](https://www.awwwards.com/)是一个一个专门为设计精美的网站以及富有创意的网站颁奖的网站
- [dribbble](https://dribbble.com/) 经常能在上面找到很多有创意好看的 gif 或者图片
- [Bēhance](https://www.behance.net/) dribbble 是设计师的微博，Bēhance 是设计师的博客
- [Logojoy](https://logojoy.com/) 使用 ai 做 logo 的网站，做出来的 logo 质量还不错。
- [brandmark](http://brandmark.io/) 另一个在线制作 logo 网站
- [instant](https://instantlogodesign.com/) 又一个 logo 制作网站
- [namecheap](https://www.namecheap.com/logo-maker/app/)又一个 logo 制作网站
- [logo-maker](https://www.designevo.com/logo-maker/) 又一个 logo 制作网站 这个更简单点 就是选模板之后微调
- [coolors](https://coolors.co/) 帮你在线配色的网站 你能找到不少配色灵感
- [colorhunt](http://colorhunt.co/) 另一个配色网站
- [uigradients](https://uigradients.com/#SummerDog) 渐变色网站
- [designcap](https://www.designcap.com/) 在线海报设计
- [Flat UI 色表](https://flatuicolors.com/) Flat UI 色表
- [0to255](https://www.0to255.com/) 颜色梯度
- [Ikonate](https://github.com/mikolajdobrucki/ikonate) 提供免费的图标 icons
- [remixicon](https://remixicon.com/) 又一个提供免费图标 icons
- [feather](https://github.com/feathericons/feather) 免费的 icons
- [nord ](https://github.com/arcticicestudio/nord) 北欧性冷淡风主题配色
- [Unsplash](https://unsplash.com/) 提供免费的高清图片
- [Pexels](https://www.pexels.com/zh-cn/) 提供免费的高清图片
- [colorkitty](https://colorkitty.com/) 从你的图片中提取配色
- [design.youzan](http://design.youzan.com/) 有赞设计原则
- [iconfont](https://www.iconfont.cn/) 阿里巴巴矢量图标库
- [undraw](https://undraw.co/illustrations) 免费的矢量插画
- [icomoon](https://icomoon.io/) 矢量图标库
- [cssicon](http://cssicon.space/#/) 所有的 icon 都是纯 css 画的 缺点：icon 不够多
- [CSS triangle generator](http://apps.eky.hk/css-triangle-generator/) 帮你快速用 css 做出三角形
- [clippy](http://bennettfeely.com/clippy/) 在线帮你使用 css clip-path 做出各种形状的图形
- [Lorem Picsum](https://picsum.photos/) 提供免费的占位图
- [Canva 可画](https://www.canva.cn/) 生成插画、封面、海报、头像等
- [404页](https://error404.fun/) 404页素材
- [collectui](https://collectui.com/) 按功能组件分类的设计图
- [smartmockups](https://smartmockups.com/zh) 产品模板生成工具

## 图库

- [uigradients](https://uigradients.com/) 渐变色生成工具
- [freepik](https://www.freepik.com/) banner 图库
- [觅元素](http://www.51yuansu.com/)一天免费下载十张 psd（免抠元素）
- [搞定设计](https://www.gaoding.com/) 可以抠图
- [vectorizer](https://www.vectorizer.io/) 真正的 png 转 svg 神器
- [站酷](https://www.zcool.com.cn/) 国内优秀的设计作品展示
- [花瓣](https://huaban.com/)
- [虎克](https://huke88.com/) ps 学习教程
- [beTheme](https://themes.muffingroup.com/be/splash/)
- [UI 中国](https://www.ui.cn/)
- [wallhaven](https://alpha.wallhaven.cc/) 壁纸网站-

## 3D
- [sketchfab](https://sketchfab.com/) 3D模型

## 交互

- [微交互](http://aliscued.lofter.com/) 里面收集了市面上很多很好的微交互例子 值得学习

- [Little Big Details](http://littlebigdetails.com/) 同上，一个国外微交互汇集网站

- [cruip](https://cruip.com/) 登录页的各种页面设计，可以免费下载模板

- [Comixify](https://comixify.ii.pw.edu.pl/) 一个波兰团队做了非常好玩的工具，可以把视频自动转成漫画，上图是他们提供的 demo，效果很棒。

- [taiko-web](https://github.com/bui/taiko-web) 太鼓达人网页版 只能说很 6



## 有趣
- [电脑恶搞](https://pranx.com/) 收集了一些恶搞小网页，比如xp系统蓝屏、黑客界面等
- [neocities](https://neocities.org/browse) 上面托管了很多有趣的网站
- [奇趣网站收藏家](https://fuun.fun/) 收藏了很多有趣的网站
- [帮你百度一下](http://www.baidu-x.com/) 可以 [点我测试一下](http://www.baidu-x.com/?q=和谐有爱富强)-
- [国际版](http://lmgtfy.com/) 同\`帮我百度一下\`-[点我测试一下](http://lmgtfy.com/?q=a)-
- [URL 地址播放 Emojis 动画](http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/#🌖) 在地址栏里面播放 emoji
- [Can't Unsee](https://cantunsee.space/) 强烈建议前端、客户端、UI 开发的同学玩下，检查一下自己对设计稿的敏感度怎么样
- [ggtalk](https://talk.swift.gg/) 平时一直在听的一个技术博客
- [awesome-comment](https://github.com/Blankj/awesome-comment) 里面收集了很多有趣的代码注释
- [text-img](https://www.text-image.com/index.html) 都将图片转化为 ascii 用来写注释
- [ascii video](https://pessimistress.github.io/ascii/) 使用ascii编码生成视频动画
- [weird-fonts](https://github.com/beizhedenglong/weird-fonts) 将普通字母转化为 特殊 unicode
- [snake](https://github.com/epidemian/snake) 在地址栏里面玩贪吃蛇
- [zero-width-lib](https://github.com/yuanfux/zero-width-lib) 利用零宽度字符实现 隐形水印、加密信息分享、逃脱词匹配，很有创意
- [abbreviations](https://www.abbreviations.com/) 查看一个简写是什么意思的网站
- [magi](https://magi.com/) ai 搜索神器，超屌
- [在线取名](https://www.qmsjmfb.com/) 解决取名难问题，超多名字生成
- [像素画GIF](https://collet66.web.fc2.com/nijisanji/index.html)
- [猫咪生成器](https://uchinoko-maker.jp/)

## 生成器

- [卡通头像生成器](https://toonme.com/) 上传真人头像生成卡通头像
- [artbreeder](https://www.artbreeder.com/) 动漫图生成真人图像

- [声音生成器](https://neal.fun/ambient-chaos/) 生成下雨、咖啡厅、海浪、火车等声音，可几种声音合成
- [诺基亚短信图片生成器](https://zzkia.noddl.me:8020/)

## 元宇宙

符合元宇宙特征的几个网站，允许用户拥有虚拟土地，在上面构建自己的世界：

- [沙盒](https://www.sandbox.game/cn/)
- [梦境空间](https://somniumspace.com/)
- [Decentraland](https://market.decentraland.org/)

## 教程

- [npx](https://egghead.io/courses/execute-npm-package-binaries-with-the-npx-package-runner) 教你怎么合理的使用 npx
- [hacksplaining](https://www.hacksplaining.com/lessons) 网络安全学习网站
- [mobile-web-best-practice](https://github.com/mcuking/mobile-web-best-practice) 移动 web 最佳实践

## 产品
- [Product Hunt](https://www.producthunt.com/) 好产品推荐

- [产品大牛](http://www.pmdaniu.com/) 什么有很多完整的产品原型可以借鉴
- [磨刀](https://modao.cc/pricing) 快速出 ui 原型

## 实用
- [webden](https://webden.dev/) 在线网页编辑器，轻便快捷
- [browser-update](https://browser-update.org/) 浏览器版本更新提示插件
- [typeform](https://admin.typeform.com/signup) 一个国外的在线调查问卷网站
- [VideoFk](https://www.videofk.com/) VideoFk 视频在线解析下载
- [全历史](https://www.allhistory.com/) 历史内容聚合网站
- [UzerMe](https://www.uzer.me/) 云端办公工具
- [SoBooks](https://sobooks.cc/) 强大的电子书资源网站
- [稿定设计](https://www.gaoding.com/) 键式设计工具+智能抠图
- [大力盘](https://dalipan.com/) 百度网盘搜索
- [ENFI 下载器](https://www.macbl.com/app/internet/enfi) 不限速下载器
- [来画视频](https://www.laihua.com/) 像做 PPT 一样做短视频
- [Arkie 海报制作工具](https://www.arkie.cn/)
- [优品 PPT](http://www.ypppt.com/)
- [比格 PPT](http://www.tretars.com/)
- [高清免费图片](https://www.pexels.com/)
- [高清免费图片 2](https://unsplash.com/)
- [shapedivider](https://www.shapedivider.app/) 生成波浪分隔线
- [Notion](https://www.notion.so/) 知识库、快速笔记、TaskList、日记、读书清单，各种类型，应有尽有
## Talk

- [peerigon-talks](https://github.com/peerigon/talks) 收集了不少有意思的 talks

## 算法

- [leetcode](https://github.com/azl397985856/leetcode) 刷 leetcode


## nginx
- [nginx 可视化配置工具](https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN)

## 生活

- [Ventusky](https://www.ventusky.com/) 风雨气温图
`,Nf=`---
created: 2025-01-20T02:26:48.475Z
title: 前端组件库
slug: front-utils
subtitle: 
---

## React UI 组件库
- [Ant Design](https://ant.design/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [MATERIAL-UI](https://material-ui.com/)

## Vue UI组件库
- [Element UI](https://element.eleme.io/#/zh-CN) PC端
- [Vant](https://youzan.github.io/vant/#/zh-CN/) 移动端
- [View UI](https://www.iviewui.com/)

## 常用效果组件
- [Animate.css](https://animate.style/) 动画库
- [Swiper](https://www.swiper.com.cn/) 轮播组件
- [mescroll](http://www.mescroll.com) 下拉刷新和上拉加载框架-基于原生JS

## 工具类
- [Lodash.js](https://www.lodashjs.com/)
- [Day.js](https://dayjs.fenxianglu.cn/) 处理日期
- [Timeago.js](https://github.com/hustcc/timeago.js) 相对时间，如N小时前
- [Echarts](https://echarts.apache.org/zh/index.html) 百度图表
- [Meditor.md](https://pandao.github.io/editor.md/) 开源在线 Markdown 编辑器
- [validator.js](https://github.com/validatorjs/validator.js) 验证库

 ## Vue工具类
- [vue-draggable](https://www.itxst.com/vue-draggable/tutorial.html) 基于Sortable.js实现的vue拖拽插件
- [vue-qr](https://www.npmjs.com/package/vue-qr) 文本转二维码
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) 图片裁剪插件
- [vue-lazyload](https://www.npmjs.com/package/vue-lazyload) 懒加载
- [vue-simple-upload](https://github.com/saivarunk/vue-simple-upload) 上传组件
`,ca=`---
created: 2025-12-12T00:00:00.000Z
---

《琐窗寒.北固山见银杏落叶有寄》

砌月霜初，暗敲疏黄，雾锁痕古。 虚廊袖手，曾伫烟暝深处。 记分题、灯唇旧墨，伶俜蝶影穿深坞。 者飘零信窄，千山缄骨，一秋赁庑。

重伫。 江皋路。 有古月苍葭， 夜吟成絮。 寒澌旋沫，蚀作襟前星缕。 更蛩弦、漫引空陂，风鬟恐为前度误。 剩云笺、皱影如潮，不载相思去。

---

---
created: 2025-09-15T00:00:00.000Z
---

秋窗幽思

窗静涵山影，月明清露寒。 秋深零露重，风定水云闲。 竹响和松籁，澄心一念间。 平生哀乐事，何必向人言。

---

---
created: 2025-09-15T00:00:00.000Z
---

客中吟

寂寂寒宵梦，重重故国山。 新芽初破雪，孤影欲衔寒。 坐久窗吞月，云深雁度关。 风尘犹逆旅，心倦几时还？

---

---
created: 2025-09-15T00:00:00.000Z
---

《临江仙》两首 （一） 身临绝顶云涛上，苍茫四望无穷。 天风浩浩拂尘容。 千峰浮浪去，万壑走蛟龙。

古今兴废弹指里，试问几度飞鸿？ 松涛如海卷晴空。 长河犹自去，大江东复东。

（二） 浑元初辟沧溟涌，云涛裂破鸿蒙。 千山伏浪走苍龙。 天风吹不老，万壑啸寒空。

蓦然跨鹤凌霄去，坐看星斗浮沉。 一痕青霭没孤峰。 何须寻道迹，大江东复东。

---

---
created: 2025-09-02T00:00:00.000Z
---

无题

浊酒杯深映世萍，尘途偃蹇鬓先星。 匣剑凝霜锋自敛，炉烟淬铁目犹青 行天地远家何在，飘浮海内任浮萍。 今沉西江一轮月，明灭灯前两案经。

---

---
created: 2025-09-02T00:00:00.000Z
---

读书寒伴月，坐雨冷清秋。 翠影遮幽径，粼波分远楼。 幕绕人独立，幻梦少年游。 天地垂罗网，谁人得自由。

---

---
created: 2025-09-02T00:00:00.000Z
---

山间

十年寂寂撞心钟，山明水净本从容。 遥对群峰接晓日，坐看行云卧看松。

---

---
created: 2025-09-02T00:00:00.000Z
---

水郭西着晚气红，云痩桥边老壑空。 冠人久倚轮困木，颓垣时出断续鸿。 九万里风斯在下，一千年事过眼中。 再剩几滴牛山泪，未有登临意不同

---

---
created: 2025-08-15T00:00:00.000Z
---

蝶恋花

写尽东风心事了。花有残时，无计同春老。 欲辩无言人却恼。孤灯残夜难为好。 如此凋零天亦晓。一去经年，莫把前尘挑。 独倚西窗听雨扰。落花流水知多少。

---

---
created: 2025-08-15T00:00:00.000Z
---

《寒山寺》

宿酲犹困酒，蹑履上寒山。 云水浮秋色，霜钟度晓寒。 野僧循涧去，俗子坐尘关。 欲问禅机处，空杯已忘言。

---

---
created: 2025-08-15T00:00:00.000Z
---

清平乐

陌上花落。昨夜东风恶。 寥落寒星无处着。怯倚危楼萧索。

残酒不解愁肠。满眼心事如霜。 又是潦草春去，当时只道寻常。

---

---
created: 2025-08-15T00:00:00.000Z
---

清平乐

惊鸿初见，满目桃花乱。 欲笑东风言语浅，道是春光无限。

倏忽急景流年，重寻楚水秦川。 岁岁桃花依旧，东风却向谁边？

---

---
created: 2025-08-15T00:00:00.000Z
---

浪淘沙令

新调试青螺。知为谁歌？ 曾经执手共婆娑。 借得曲中流水意，花落澄波。

冷暖暗消磨。无渡星河。 那时明月枉蹉跎。 摇落繁星皆是梦，一枕南柯。

---

---
created: 2025-08-15T00:00:00.000Z
---

桂枝香

苍龙偃卧。 瞰万里澄空，尘颜难荷。 怒雪崩云卷处，石崩天破。 罡风吹老千寻壁，剩寒沙、残阳如堕。 翠波呼啸，孤桅独系，水天相锁。

忆往昔、千般坎坷。 正雨僽风僽，素壁虚廓。 九曲羊肠望断，故蹊无个。 旌旗黯黯人何处，叹沉鸢、谁识今我？ 逝川难驻，萍踪安在，旧香残座。

---

---
created: 2025-08-15T00:00:00.000Z
---

高阳台

晓梦迷离，愁云蔽野，依稀绝岛荒寒。 寂寞长街，残烟数缕阑珊。 高楼望断天涯路，任西风、独倚危栏。 黯销凝，客老他乡，岸锁孤船。

黄昏冷落沧波远，记别时芳陌，柳絮飞残。 万户参差，炊烟暮色依然。 微灯暗度深幽巷，叹经年、倦羽临川。 最堪怜，往事如潮，尽化潸然。

---

---
created: 2025-08-15T00:00:00.000Z
---

临江仙

人事难为酣睡，浮生大梦绵长。 三更轻醒雨匆忙。 世间无限泪，独卧懒听窗。

何处悲风依旧？平明来去如常。 一宵风雨几分凉。 蜉蝣今夜死，楼上满星光。

---

---
created: 2025-08-06T00:00:00.000Z
---

临江仙·修仙

浑元初辟沧溟涌，云涛裂破鸿蒙。
千山伏浪走苍龙。
天风吹不老，万壑啸寒空。

蓦然跨鹤凌霄去，坐看星斗浮沉。
一痕青霭没孤峰。
何处寻得道，大江东复东。

---

---
created: 2025-03-07T00:00:00.000Z
---

定风波、望山桥
（一）
夕照黄芦波自摇，钓丝拂过望山桥。
渐下乱流惊宿鹭，日暮，不觉霜重近秋潮。
浑倚江湖闲梦惯，谁堪，舟中泛醒月天高。
于此无声听碧落，归客，无关风雨也萧萧。
（二）
何处人间不烂柯。望山桥上问春波。
数罢疏钟梅花落。谁觉。当年明月也长歌。
虱处裈中言豹变。莫怨。从来遗憾是蹉跎。
道是蓬莱皆逆旅，何惧。一竿独钓碧天波。

---

---
created: 2024-12-25T00:00:00.000Z
source: 忆江南
---

江南梦，
梦尽是残春。
碧水无痕栖鹤影，
落花难觅旧时身。
今我似何人？

---

---
created: 2024-12-25T00:00:00.000Z
source: 踏莎行
---

且出樊笼，还修囹圄。
浮生如许风吹雨。
寒城今晚冷何人， 流烟不识伤心句。
已别前尘，相逢陌路。
欲言又恐殊途旅。
黄昏几欲照荒园， 可怜却是斜阳去。

---

---
created: 2024-12-25T00:00:00.000Z
source: 蝶恋花、秋闺怨
---

清夜萧萧风乱走。
念起茫茫，陌上凉先透。
飞净寒烟垂弱柳。
江山摇落霜千斗。
老大梧桐遗立久。
未必多情，才解相思瘦。
十二栏杆凭尽否？
满山红叶浓于酒。

---

---
created: 2024-12-25T00:00:00.000Z
source: 临江仙
---

月上青冥风冷，香销残树寒云。
空山花落恨无人。
独行烟野远，只影小星辰。
一去经年何处，余生长怕离群。
天高江阔却随尘。
游鱼耽浅水，枯木拢遗温。

---

---
created: 2024-12-25T00:00:00.000Z
source: 蝶恋花、七夕
---

起望相思何处诉。
立遍秋风，只有珠帘语。
欲碎琉璃犹自舞。
流光盈水梳成缕。
云笼银河千鹊渡。
照断人间，万种长相许。
烛火西窗残梦暮。
如何都向天涯去。

---

---
created: 2024-12-25T00:00:00.000Z
source: 蝶恋花
---

吹落寒星无处捡。
吹落浮生，偏被多情斩。
镜里看花空怅憾。
欲斟水月风波险。
不信天涯成一念。
独倚阑干，我与谁相犯。
最是黎明天愈暗。
晓风残梦都生厌。

---

---
created: 2024-12-25T00:00:00.000Z
source: 钗头凤
---

此心动。彼心空。
椅栏处我思朝陇。
西风烈。声呜咽。
广武山缺，落阳如血。
凭骁勇。青云纵。
古今谁可堪伯仲。
春江月。千秋雪。
半夕蝶梦，一兮尽绝。

---

---
created: 2024-12-25T00:00:00.000Z
source: 临江仙（徐昌图体）
---

杯盏不消残夜，寒蝉无意成眠。
春光应付四书言。
十年寒暑苦，一纸定愚贤。
人事几多风雪，红尘难觅清闲。
夜明昙华正悠然。
冲漠天地间，高处不胜寒。

---

---
created: 2024-12-25T00:00:00.000Z
source: 江城子.雨梅
---

孤城何处觅春风？
苑梅空。野梅红。
一种风流、长恨两般容。
只道痴心人莫问，相思意，自难穷。
玉阶霜冷影如弓。
地成封。气难通。
欲出雕墙、花信寄归鸿。
唤醒寒苞吹不死，枝上血，雨来浓。

---

---
created: 2024-12-25T00:00:00.000Z
source: 减字木兰花
---

尘颜爻错，云上光阴成影落。
风似离人，捡尽残香泪始痕。
寻常朝暮，看尽春秋无意顾。
各白伶仃，半片痴心谁与听。

---

---
created: 2024-12-25T00:00:00.000Z
---

高风振迈与谁同，无意寻常识个中。
若雪襟情多慷慨，凌云气概自西东。
挺生松骨削顽铁，擢秀竹君摅直虹。
帝阙重楼封玉宇，鲲程万里没苍穹。

---

---
created: 2024-12-25T00:00:00.000Z
source: 一江秋
---

一江秋水接天流，骀荡西风瑟瑟游。
不住行人桥上月，书剑一叶一江秋。

---

---
created: 2024-12-25T00:00:00.000Z
source: 落雪
---

野原浩浩日中天，晓雾濛濛醉谪仙。
春风摇来天上女，冰姿玉靥自婵娟。

---

---
created: 2024-12-25T00:00:00.000Z
source: 贺新郎、元夕
---

长乐千年少。
看流灯， 千家月下， 跃金敷道。
金凤长飞鱼龙舞， 广袖舒云袅袅。
正玉树，银花晚照。
寻觅御街愁可数，竞阑珊、何处生飘渺。
回首顾，悠梦杳。

孤伶望月映松筱。
看古今，旧曲新唱，问春迟早。
还忆那时携手遍，竹马枝梅尚小。
正当值，青春年少。
此间夜吟朝天傲，笙歌罢、几番风月了。
算只有，万年好。

---

---
created: 2024-12-25T00:00:00.000Z
source: 卜算子
---

好运如彩云，照在晴空里。
踏破千山来此处，原本山根底。
多情学霓虹，只在黄昏起。
借得斜阳做灯心，一片光明意。

---

---
created: 2024-12-25T00:00:00.000Z
source: 临江仙
---

雨褪罗纹渐渐，光摇疏影横斜。
回风吹皱晚来霞。
梦残身做客，狸唤远人家。
惊醒怕知昏晓，天倾踏碎空华。
无端思蝶在天涯。
晨星化宿雨，浊浪亦狂沙。

---

---
created: 2024-12-25T00:00:00.000Z
---

浣溪沙 白鹤行霄三色烟。
烛台照雪应窗眠。
星流倏下桂风闲。
神客梦阑窥海月， 残香飘尽不知天。
一身花落向人间。

---

---
created: 2024-12-25T00:00:00.000Z
source: 忆秦娥、黄昏
---

相思相。相思不绝长南望。
长南望。山高路远，浊沙狂浪。
游云魄散随风荡。残阳望断空惆怅。
空惆怅。 暮然回首，别来无恙。

---

---
created: 2024-12-25T00:00:00.000Z
---

莺歌难待春江月，
飞花冷落千秋雪。
残痕灭，
红尘辗转情安绝？

---

---
created: 2024-12-25T00:00:00.000Z
source: 渔家傲.旧韵
---

一片愁城江天暮。
瑶光残影不胜数。
倦鸟还巢诸舸去。
风正举。
天上星汉人间路。
明月不谙年岁苦。
朱颜辞镜渐不顾。
纵使楼高应不许。
风且住。
时光如水人如树。

---

---
created: 2024-12-25T00:00:00.000Z
source: 喝火令
---

昼短天将暮，春深恨未消。
旧时天气暗波涛。
都是一般风味，孤客最飘摇。
纸上生新露，愁心似酒烧。
等闲时候更难熬。
又看灯红，又看燕归巢。
又看落花如雪，化雨打芭蕉。

---

---
created: 2024-12-25T00:00:00.000Z
source: 采桑子.午睡听风
---

懒眠思得愁几许，屏掩沉香，一点孱光，落寞灯前数旧章。
相思知可凭何述，写也茫茫，意且长长，听遍潇潇春更凉。

---

---
created: 2024-12-25T00:00:00.000Z
source: 春困
---

宿雨依依去，黄鹂隔叶鸣。
云生春睡重，帘透晓寒轻。
细草行山径，微风驻水城。
花开人独寐，寂寞小窗明。

---

---
created: 2024-12-25T00:00:00.000Z
---

霜天栖晚树，烟火笼沙洲。
一片痴心月，千年冷落秋。
目成游子意，心死异乡楼。
谁问南山北，天涯不系舟。

---

---
created: 2024-12-25T00:00:00.000Z
---

风涛起灭百沉吟，人间纵然哀乐新。
仰首万寻盈一指，何堪物化只于今。
中天高月如明镜，历历寒星不可亲。
悠见百年一过客，道于日月只此心。
`;function In(e){const t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{frontmatter:{},content:e.trim()};const n={},s=t[1].split(`
`);for(const o of s){const r=o.indexOf(":");if(r===-1)continue;const i=o.slice(0,r).trim();let l=o.slice(r+1).trim();(l.startsWith("'")&&l.endsWith("'")||l.startsWith('"')&&l.endsWith('"'))&&(l=l.slice(1,-1)),l.startsWith("[")&&l.endsWith("]")?n[i]=l.slice(1,-1).split(",").map(a=>a.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):n[i]=l}return{frontmatter:n,content:t[2].trim()}}function Ft(e){const t=e.replace(/\\/g,"/").split("/");return t[t.length-1].replace(/\.md$/,"")}function ua(e){return Ft(e)}const Df=Object.assign({"../content/posts/engineering/2025071501.md":vf,"../content/posts/engineering/frp.md":yf,"../content/posts/engineering/vector-sort-recommendation.md":wf,"../content/posts/philosophy/04302327.md":xf,"../content/posts/philosophy/1.md":_f,"../content/posts/philosophy/15d80d1a-9b00-4058-8bdf-fb8a7e0f2cea.md":kf,"../content/posts/philosophy/2.md":Sf,"../content/posts/philosophy/20250922.md":Tf,"../content/posts/philosophy/202601211040.md":Ef,"../content/posts/philosophy/2db24177-d218-4dc9-afc3-666504281d85.md":Pf,"../content/posts/philosophy/3.md":Cf,"../content/posts/philosophy/5d204aef-9557-403e-938c-9732c1803846.md":Mf,"../content/posts/philosophy/c5a3ed69-7d1a-4c1f-a096-f3f9145ba4d6.md":Af,"../content/posts/philosophy/d70302f0-2c45-4b5b-95eb-99fbad7eb135.md":If,"../content/posts/philosophy/hlm.md":Rf}),$f=Object.assign({}),jf=Object.assign({}),Ff=Object.assign({"../content/pages/about.md":zf,"../content/pages/book-list.md":Of,"../content/pages/favoured.md":Lf,"../content/pages/front-utils.md":Nf}),Hf=Object.assign({"../content/says/says.md":ca});function Bf(e){return e.trim()?e.split(/\n---\n(?=created:)/).map((n,s)=>{const o=s===0?n:`---
${n}`,{frontmatter:r,content:i}=In(o),l=i.replace(/\n+---\s*$/,"").trim();return{id:String(s+1),text:l||"",author:r.author||"",source:r.source||"",created:r.created||new Date().toISOString()}}):[]}const da=[...Bf(ca),...Object.entries(Hf).filter(([e])=>!e.endsWith("says.md")).map(([e,t])=>{const{frontmatter:n,content:s}=In(t);return{id:Ft(e),text:s||n.text||"",author:n.author||"",source:n.source||"",created:n.created||new Date().toISOString()}})].sort((e,t)=>new Date(t.created).getTime()-new Date(e.created).getTime()),pn=Object.entries(Df).map(([e,t])=>{const n=e.replace(/\\/g,"/").split("/"),s=n[n.length-2]||"",{frontmatter:o,content:r}=In(t);return{id:o.slug||Ft(e),title:o.title||Ft(e),slug:o.slug||ua(e),category:o.category||s,summary:o.summary,text:r,created:o.created||new Date().toISOString(),modified:o.modified,tags:o.tags}});let Vf=1;const fn=Object.entries($f).map(([e,t])=>{const{frontmatter:n,content:s}=In(t);return{id:Ft(e),nid:n.nid||Vf++,title:n.title||Ft(e),text:s,created:n.created||new Date().toISOString(),mood:n.mood,weather:n.weather,topicId:n.topicId,topicName:n.topicName,bookmark:n.bookmark,hide:n.hide}}),ar=Object.entries(jf).map(([e,t])=>{const{frontmatter:n,content:s}=In(t);return{id:Ft(e),content:s||n.content||"",created:n.created||new Date().toISOString(),up:Number(n.up||0),down:Number(n.down||0),comments:Number(n.comments||0)}}).sort((e,t)=>new Date(t.created).getTime()-new Date(e.created).getTime()),fa=Object.entries(Ff).map(([e,t])=>{const{frontmatter:n,content:s}=In(t);return{id:Ft(e),title:n.title||Ft(e),slug:n.slug||ua(e),subtitle:n.subtitle,text:s,created:n.created||new Date().toISOString(),modified:n.modified,type:n.type||"md",options:n.options,order:n.order}});function Rn(e,t,n){const s=e.length,o=Math.max(1,Math.ceil(s/n)),r=(t-1)*n;return{data:e.slice(r,r+n),pagination:{currentPage:t,pageSize:n,total:s,totalPage:o,hasNextPage:t<o,hasPrevPage:t>1}}}function qt(e,t="desc"){return[...e].sort((n,s)=>{const o=new Date(n.created||"").getTime()||0,r=new Date(s.created||"").getTime()||0;return t==="asc"?o-r:r-o})}function pa(e){return{id:e.id,text:e.text,author:e.author,source:e.source,created:e.created}}function Uf(e){const t=(e==null?void 0:e.page)||1,n=(e==null?void 0:e.size)||10,s=qt(pn,e==null?void 0:e.orderBy).map(o=>({id:o.id,title:o.title,slug:o.slug,category:{name:ps(o.category),slug:o.category},summary:o.summary||null,created:o.created,modified:o.modified}));return Rn(s,t,n)}function jm(e,t){const n=pn.find(s=>s.category===e&&s.slug===t);return n?{id:n.id,title:n.title,slug:n.slug,category:{name:ps(n.category),slug:n.category},summary:n.summary||null,text:n.text,created:n.created,modified:n.modified||null,tags:n.tags,allowComment:!1}:null}function Gf(e){const t=(e==null?void 0:e.page)||1,n=(e==null?void 0:e.size)||10,s=qt(fn.filter(o=>!o.hide),e==null?void 0:e.orderBy).map(o=>({id:o.id,nid:o.nid,title:o.title,text:o.text,mood:o.mood,weather:o.weather,created:o.created,topic:o.topicId?{id:o.topicId,name:o.topicName||"",slug:o.topicId}:void 0}));return Rn(s,t,n)}function Fm(e){const t=fn.find(i=>i.id===e||String(i.nid)===e);if(!t)return null;const n=qt(fn,"desc"),s=n.findIndex(i=>i.id===t.id||i.nid===t.nid),o=s>0?n[s-1]:void 0,r=s<n.length-1?n[s+1]:void 0;return{id:t.id,nid:t.nid,title:t.title,text:t.text,mood:t.mood,weather:t.weather,created:t.created,modified:null,allowComment:!1,topic:t.topicId?{id:t.topicId,name:t.topicName||"",slug:t.topicId}:void 0,prev:o?{nid:o.nid,title:o.title}:void 0,next:r?{nid:r.nid,title:r.title}:void 0}}function Hm(){const e=qt(fn.filter(n=>!n.hide),"desc");if(!e.length)return null;const t=e[0];return{id:t.id,nid:t.nid,title:t.title,text:t.text,mood:t.mood,weather:t.weather,created:t.created}}function Wf(e){const t=qt(ar,"desc"),n=(e==null?void 0:e.size)||10,s=e!=null&&e.before?t.findIndex(r=>r.id===e.before):-1,o=s>=0?s+1:0;return t.slice(o,o+n).map(r=>({id:r.id,content:r.content,created:r.created,up:r.up,down:r.down,comments:r.comments}))}function Bm(e){const t=ar.find(n=>n.id===e);return t?{id:t.id,content:t.content,created:t.created,up:t.up,down:t.down,comments:t.comments}:null}const ha=[{id:"bloom",name:"Bloom Blog",description:"This blog, built with Vue 3 and Vite.",projectUrl:"https://github.com/user/bloom",avatar:"",text:"A lightweight static blog."}];function Zf(){return ha}function Vm(e){return ha.find(t=>t.id===e)||null}function Kf(e=1,t=50){return Rn(da.map(pa),e,t)}const Jf=[{id:"1",name:"Example Friend",url:"https://example.com",avatar:"",description:"A friend link.",state:1}];function Yf(){return Jf}const ma=[{id:"dev",name:"开发笔记",slug:"dev",description:"技术开发相关",created:"2025-01-01T00:00:00.000Z"}];function Xf(){return ma}function Um(e){return ma.find(t=>t.slug===e)||null}function Gm(e,t){const n=(t==null?void 0:t.page)||1,s=(t==null?void 0:t.size)||10,o=fn.filter(r=>r.topicId===e).map(r=>({id:r.id,nid:r.nid,title:r.title,text:r.text,mood:r.mood,weather:r.weather,created:r.created,topic:r.topicId?{id:r.topicId,name:r.topicName||"",slug:r.topicId}:void 0}));return Rn(qt(o,(t==null?void 0:t.orderBy)||"desc"),n,s)}function Wm(e){const t=fa.find(n=>n.slug===e);return t?{id:t.id,title:t.title,slug:t.slug,subtitle:t.subtitle,text:t.text,created:t.created,modified:t.modified||null,type:t.type,options:t.options}:null}function Qf(e){const t=(e==null?void 0:e.page)||1,n=(e==null?void 0:e.size)||100,s=fa.sort((o,r)=>(o.order||0)-(r.order||0)).map(o=>({id:o.id,title:o.title,slug:o.slug,subtitle:o.subtitle,text:o.text,created:o.created,modified:o.modified||null,type:o.type,options:o.options,order:o.order}));return Rn(s,t,n)}function Zm(e){const t=pn.filter(n=>n.category===e);return t.length?{id:e,name:e,slug:e,count:t.length,children:t.map(n=>({id:n.id,title:n.title,slug:n.slug,created:n.created,modified:n.modified}))}:null}function Km(){return[...pn.map(t=>({bizType:"post",id:t.id,created:t.created,title:t.title,slug:t.slug,category:{name:ps(t.category),slug:t.category}})),...fn.filter(t=>!t.hide).map(t=>({bizType:"note",id:t.id,created:t.created,title:t.title,nid:t.nid})),...ar.map(t=>({bizType:"recent",id:t.id,created:t.created,content:t.content}))].filter(t=>t.bizType!=="comment").sort((t,n)=>new Date(n.created).getTime()-new Date(t.created).getTime()).slice(0,12)}function Jm(e=5){const t=qt(pn,"desc").slice(0,e),n=qt(fn.filter(s=>!s.hide),"desc").slice(0,e);return{posts:t.map(s=>({id:s.id,title:s.title,slug:s.slug,category:{name:ps(s.category),slug:s.category},summary:s.summary||null,created:s.created,modified:s.modified})),notes:n.map(s=>({id:s.id,nid:s.nid,title:s.title,text:s.text,created:s.created,mood:s.mood,weather:s.weather})),says:da.slice(0,e).map(pa)}}function Ym(e){return pn.some(n=>n.category===e)?`/posts?category=${e}`:null}const qf={engineering:"工程",philosophy:"哲学",design:"设计",frontend:"前端",writing:"写作",product:"产品"};function ps(e){return qf[e]||e}function ep(){const e=new Map;for(const n of pn){const s=e.get(n.category)||[];s.push(n),e.set(n.category,s)}const t=Array.from(e.entries()).map(([n,s])=>({id:n,name:ps(n),slug:n,count:s.length,children:s.map(o=>({id:o.id,title:o.title,slug:o.slug,created:o.created,modified:o.modified}))}));return Rn(t,1,100)}function ga(){if(typeof localStorage>"u")return[];try{const e=localStorage.getItem("bloom-local-thinking");return e?JSON.parse(e):[]}catch{return[]}}function tp(e){const t=ga();t.unshift(e),localStorage.setItem("bloom-local-thinking",JSON.stringify(t))}function np(e){const t=ga().filter(n=>n.id!==e);localStorage.setItem("bloom-local-thinking",JSON.stringify(t))}function sp(e){if(typeof localStorage>"u")return{up:0,down:0};try{const t=localStorage.getItem(`bloom-attitude-${e}`);return t?JSON.parse(t):{up:0,down:0}}catch{return{up:0,down:0}}}function op(e,t){const n=sp(e);return t==="up"?n.up++:n.down++,localStorage.setItem(`bloom-attitude-${e}`,JSON.stringify(n)),n}let ba=null;function rp(e){ba=e}function ip(){return ba||lp}const lp={user:{},seo:{title:"Bloom",description:"A blog"},url:{},categories:[],pageMeta:[],theme:{}},ap=Uf,cp=Gf,up=Kf,Xm=Zf,Qm=Yf,qm=Wf,eg=Xf;function tg(){return!1}function ng(e){}function sg(e){const t={id:`local-${Date.now()}`,content:e,created:new Date().toISOString(),up:0,down:0};return tp(t),t}function og(e){np(e)}function rg(e,t){(t==="up"||t==="down")&&op(e,t)}const dp={user:{name:"Armerr",avatar:"https://img.armerr.top/pic/202605191326.png",socialIds:{}},seo:{title:"Bloom",description:"An independent developer coding with love."},url:{webUrl:""},pageMeta:[],categories:[],theme:{config:{site:{favicon:"/favicon.ico"},hero:{title:{template:[{type:"h1",text:"Hi, I'm ",class:"text-4xl font-light tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:text-6xl"},{type:"h1",text:"Armerr",class:"text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-transparent"},{type:"h1",text:"👋",class:"text-4xl font-light sm:text-5xl lg:text-6xl"},{type:"br"},{type:"h1",text:"A NodeJS Full Stack ",class:"text-2xl font-light tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-3xl lg:text-4xl"},{type:"code",text:"<Developer />",class:"text-2xl sm:text-3xl lg:text-4xl font-mono font-medium text-accent bg-accent/6 rounded-xl px-3 py-0.5"}]},description:"An independent developer coding with love."}},footer:{linkSections:[{name:"关于",links:[{name:"关于我",href:"/about"}]},{name:"更多",links:[{name:"文章",href:"/posts"},{name:"随笔",href:"/notes"},{name:"项目",href:"/projects"},{name:"思考",href:"/thinking"}]},{name:"联系",links:[{name:"GitHub",href:"https://github.com",external:!0},{name:"RSS",href:"/feed",external:!0}]}],otherInfo:{date:"2020-{{now}}"}}}};rp(dp);const Ze=pe(ip()),fp=pe(!0),pp=pe(!1),hp=pe(""),mp=[{type:"h1",text:"Hi, I'm ",class:"text-4xl font-light tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:text-6xl"},{type:"h1",text:"Armerr",class:"text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-transparent"},{type:"h1",text:"👋",class:"text-4xl font-light sm:text-5xl lg:text-6xl"},{type:"br"},{type:"h1",text:"A NodeJS Full Stack ",class:"text-2xl font-light tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-3xl lg:text-4xl"},{type:"code",text:"<Developer />",class:"text-2xl sm:text-3xl lg:text-4xl font-mono font-medium text-accent bg-accent/6 rounded-xl px-3 py-0.5"}],gp=[{name:"关于",links:[{name:"关于本站",href:"/about-site"},{name:"关于我",href:"/about-me"},{name:"关于此项目",href:"https://github.com/innei/Bloom",external:!0}]},{name:"更多",links:[]},{name:"联系",links:[{name:"发邮件",href:"mailto:armerr277@gmail.com",external:!0},{name:"GitHub",href:"https://github.com/Armerr",external:!0}]}];function bp(){var e,t;if(!((e=Ze.value.pageMeta)!=null&&e.length)){const n=Qf({page:1,size:100});Ze.value={...Ze.value,pageMeta:n.data.map(s=>({id:s.id,title:s.title,slug:s.slug,order:0}))}}if(!((t=Ze.value.categories)!=null&&t.length)){const n=ep();Ze.value={...Ze.value,categories:n.data}}}function va(){bp();const e=V(()=>{var u,c,d,h,m;return((m=(h=(d=(c=(u=Ze.value)==null?void 0:u.theme)==null?void 0:c.config)==null?void 0:d.hero)==null?void 0:h.title)==null?void 0:m.template)||mp}),t=V(()=>{var u,c,d,h;return((h=(d=(c=(u=Ze.value)==null?void 0:u.theme)==null?void 0:c.config)==null?void 0:d.hero)==null?void 0:h.description)||"An independent developer coding with love."}),n=V(()=>{var u;return((u=Ze.value)==null?void 0:u.user)||{}}),s=V(()=>{var u;return((u=Ze.value)==null?void 0:u.seo)||{}}),o=V(()=>{var u;return((u=Ze.value)==null?void 0:u.pageMeta)||[]}),r=V(()=>{var u;return((u=Ze.value)==null?void 0:u.categories)||[]}),i=V(()=>{var u,c;return((c=(u=Ze.value)==null?void 0:u.theme)==null?void 0:c.config)||{}}),l=V(()=>{var u,c,d;return((d=(c=(u=Ze.value)==null?void 0:u.theme)==null?void 0:c.footer)==null?void 0:d.linkSections)||gp}),a=V(()=>{var u,c,d;return((d=(c=(u=Ze.value)==null?void 0:u.theme)==null?void 0:c.footer)==null?void 0:d.otherInfo)||{date:"2020-{{now}}"}});return{siteData:Ze,loading:pp,loaded:fp,error:hp,heroTemplate:e,heroDescription:t,owner:n,seo:s,pageMeta:o,categories:r,themeConfig:i,footerSections:l,footerOtherInfo:a}}const vp={class:"px-6 py-6 sm:px-8 sm:py-7"},yp={class:"mx-auto max-w-[96rem]"},wp={class:"grid gap-8 border-b border-zinc-900/6 pb-6 dark:border-zinc-100/8 lg:grid-cols-[minmax(20rem,1.15fr)_minmax(32rem,1fr)] lg:gap-16 lg:pb-7"},xp={class:"max-w-[30rem]"},_p={class:"mt-7 text-base leading-8 text-zinc-600 dark:text-zinc-300"},kp={class:"grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:justify-items-end lg:gap-x-14","aria-label":"Footer navigation"},Sp={class:"text-base font-medium leading-7 text-zinc-600 dark:text-zinc-300"},Tp={class:"mt-4 flex flex-col gap-3 text-base leading-7 text-zinc-600 dark:text-zinc-300"},Ep=["href"],Pp={key:0,class:"pt-3 text-base leading-7 text-zinc-500 dark:text-zinc-400 lg:text-right"},Cp=["href"],Mp=Bt({__name:"SiteFooter",props:{theme:{},themeMode:{}},setup(e){const{footerSections:t,footerOtherInfo:n,owner:s}=va(),o=pe(null),r=new Date().getFullYear(),i=V(()=>(n.value.date||`${r}`).replace("{{now}}",String(r))),l=V(()=>s.value.name||"Armerr"),a=V(()=>n.value.icp),u=d=>{var h;(h=o.value)!=null&&h.contains(d.target)},c=d=>{d.key};return Pt(()=>{document.addEventListener("click",u),document.addEventListener("keydown",c)}),_t(()=>{document.removeEventListener("click",u),document.removeEventListener("keydown",c)}),(d,h)=>{var m,w;return K(),ee("footer",{ref_key:"footerRef",ref:o,class:"relative z-[1] mt-6 border-t border-zinc-900/8 bg-[var(--bg-opacity)] text-zinc-700 dark:text-zinc-200 dark:border-zinc-100/10 sm:mt-8",style:{"-webkit-backdrop-filter":"saturate(var(--surface-saturate)) blur(var(--surface-blur))","backdrop-filter":"saturate(var(--surface-saturate)) blur(var(--surface-blur))"}},[$("div",vp,[$("div",yp,[$("div",wp,[$("div",xp,[be(ue(bt),{to:"/",class:"inline-flex text-4xl font-medium tracking-[-0.045em] text-zinc-900 transition hover:text-accent dark:text-zinc-50"},{default:Re(()=>[Vn(me(l.value),1)]),_:1}),h[0]||(h[0]=$("p",{class:"mt-3 text-[15px] italic leading-7 text-zinc-600 dark:text-zinc-300"}," Muss es sein? Es muss sein! ",-1)),$("div",_p,[$("p",null,[Vn(" © "+me(i.value)+" ",1),be(ue(bt),{to:"/",class:"font-medium text-zinc-600 dark:text-zinc-300 transition hover:text-accent"},{default:Re(()=>[Vn(me(l.value),1)]),_:1})])])]),$("nav",kp,[(K(!0),ee(Ae,null,Ot(ue(t),k=>(K(),ee("div",{key:k.name,class:"min-w-0"},[$("p",Sp,me(k.name),1),$("div",Tp,[(K(!0),ee(Ae,null,Ot(k.links,M=>(K(),ee(Ae,{key:M.href},[M.external?(K(),ee("a",{key:0,href:M.href,target:"_blank",rel:"noreferrer",class:"w-fit break-normal transition hover:text-accent"},me(M.name),9,Ep)):(K(),Ke(ue(bt),{key:1,to:M.href,class:"w-fit break-normal transition hover:text-accent"},{default:Re(()=>[Vn(me(M.name),1)]),_:2},1032,["to"]))],64))),128))])]))),128))])]),(m=a.value)!=null&&m.text&&((w=a.value)!=null&&w.link)?(K(),ee("div",Pp,[$("a",{href:a.value.link,target:"_blank",rel:"noreferrer",class:"transition hover:text-accent"},me(a.value.text),9,Cp)])):Le("",!0)])])],512)}}}),wi=Bt({__name:"AnimatedReveal",props:{as:{default:"div"},delay:{default:0},y:{default:32},scale:{default:1},duration:{default:700},once:{type:Boolean,default:!0},onView:{type:Boolean,default:!0}},setup(e){const t=e,n=_l(),s=pe(!1),o=pe(null);let r=null,i=null;const l=V(()=>({"--reveal-delay":`${t.delay}ms`,"--reveal-y":`${t.y}px`,"--reveal-scale":String(t.scale),"--reveal-duration":`${t.duration}ms`})),a=()=>{i&&window.clearTimeout(i),i=window.setTimeout(()=>{s.value=!0},t.delay)};return Pt(()=>{if(!t.onView){a();return}r=new IntersectionObserver(u=>{const c=u[0];c!=null&&c.isIntersecting&&(a(),t.once&&(r==null||r.disconnect(),r=null))},{threshold:.12,rootMargin:"0px 0px -10% 0px"}),o.value&&r.observe(o.value)}),_t(()=>{i&&window.clearTimeout(i),r==null||r.disconnect()}),(u,c)=>(K(),Ke(yl(u.as),$s({ref_key:"rootRef",ref:o},ue(n),{class:[ue(n).class,"bloom-reveal",s.value&&"is-visible"],style:[ue(n).style,l.value]}),{default:Re(()=>[Bc(u.$slots,"default")]),_:3},16,["class","style"]))}}),xn=Bt({inheritAttrs:!1,__name:"HeaderMenuIcon",props:{icon:{}},setup(e){const t=_l();return(n,s)=>n.icon?(K(),ee("i",$s({key:0,class:n.icon,"aria-hidden":"true"},ue(t)),null,16)):(K(),ee("span",$s({key:1,"aria-hidden":"true"},ue(t)),null,16))}});function ya(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=ya(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function Ap(){for(var e,t,n=0,s="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=ya(e))&&(s&&(s+=" "),s+=t);return s}const cr="-",Ip=e=>{const t=zp(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:i=>{const l=i.split(cr);return l[0]===""&&l.length!==1&&l.shift(),wa(l,t)||Rp(i)},getConflictingClassGroupIds:(i,l)=>{const a=n[i]||[];return l&&s[i]?[...a,...s[i]]:a}}},wa=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],s=t.nextPart.get(n),o=s?wa(e.slice(1),s):void 0;if(o)return o;if(t.validators.length===0)return;const r=e.join(cr);return(i=t.validators.find(({validator:l})=>l(r)))==null?void 0:i.classGroupId},xi=/^\[(.+)\]$/,Rp=e=>{if(xi.test(e)){const t=xi.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},zp=e=>{const{theme:t,classGroups:n}=e,s={nextPart:new Map,validators:[]};for(const o in n)Do(n[o],s,o,t);return s},Do=(e,t,n,s)=>{e.forEach(o=>{if(typeof o=="string"){const r=o===""?t:_i(t,o);r.classGroupId=n;return}if(typeof o=="function"){if(Op(o)){Do(o(s),t,n,s);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([r,i])=>{Do(i,_i(t,r),n,s)})})},_i=(e,t)=>{let n=e;return t.split(cr).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},Op=e=>e.isThemeGetter,Lp=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,s=new Map;const o=(r,i)=>{n.set(r,i),t++,t>e&&(t=0,s=n,n=new Map)};return{get(r){let i=n.get(r);if(i!==void 0)return i;if((i=s.get(r))!==void 0)return o(r,i),i},set(r,i){n.has(r)?n.set(r,i):o(r,i)}}},$o="!",jo=":",Np=jo.length,Dp=e=>{const{prefix:t,experimentalParseClassName:n}=e;let s=o=>{const r=[];let i=0,l=0,a=0,u;for(let w=0;w<o.length;w++){let k=o[w];if(i===0&&l===0){if(k===jo){r.push(o.slice(a,w)),a=w+Np;continue}if(k==="/"){u=w;continue}}k==="["?i++:k==="]"?i--:k==="("?l++:k===")"&&l--}const c=r.length===0?o:o.substring(a),d=$p(c),h=d!==c,m=u&&u>a?u-a:void 0;return{modifiers:r,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:m}};if(t){const o=t+jo,r=s;s=i=>i.startsWith(o)?r(i.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:i,maybePostfixModifierPosition:void 0}}if(n){const o=s;s=r=>n({className:r,parseClassName:o})}return s},$p=e=>e.endsWith($o)?e.substring(0,e.length-1):e.startsWith($o)?e.substring(1):e,jp=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const o=[];let r=[];return s.forEach(i=>{i[0]==="["||t[i]?(o.push(...r.sort(),i),r=[]):r.push(i)}),o.push(...r.sort()),o}},Fp=e=>({cache:Lp(e.cacheSize),parseClassName:Dp(e),sortModifiers:jp(e),...Ip(e)}),Hp=/\s+/,Bp=(e,t)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:r}=t,i=[],l=e.trim().split(Hp);let a="";for(let u=l.length-1;u>=0;u-=1){const c=l[u],{isExternal:d,modifiers:h,hasImportantModifier:m,baseClassName:w,maybePostfixModifierPosition:k}=n(c);if(d){a=c+(a.length>0?" "+a:a);continue}let M=!!k,R=s(M?w.substring(0,k):w);if(!R){if(!M){a=c+(a.length>0?" "+a:a);continue}if(R=s(w),!R){a=c+(a.length>0?" "+a:a);continue}M=!1}const T=r(h).join(":"),O=m?T+$o:T,N=O+R;if(i.includes(N))continue;i.push(N);const S=o(R,M);for(let v=0;v<S.length;++v){const A=S[v];i.push(O+A)}a=c+(a.length>0?" "+a:a)}return a};function Vp(){let e=0,t,n,s="";for(;e<arguments.length;)(t=arguments[e++])&&(n=xa(t))&&(s&&(s+=" "),s+=n);return s}const xa=e=>{if(typeof e=="string")return e;let t,n="";for(let s=0;s<e.length;s++)e[s]&&(t=xa(e[s]))&&(n&&(n+=" "),n+=t);return n};function Up(e,...t){let n,s,o,r=i;function i(a){const u=t.reduce((c,d)=>d(c),e());return n=Fp(u),s=n.cache.get,o=n.cache.set,r=l,l(a)}function l(a){const u=s(a);if(u)return u;const c=Bp(a,n);return o(a,c),c}return function(){return r(Vp.apply(null,arguments))}}const De=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},_a=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ka=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Gp=/^\d+\/\d+$/,Wp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Zp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Kp=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Jp=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Yp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,gn=e=>Gp.test(e),ae=e=>!!e&&!Number.isNaN(Number(e)),Wt=e=>!!e&&Number.isInteger(Number(e)),yo=e=>e.endsWith("%")&&ae(e.slice(0,-1)),It=e=>Wp.test(e),Xp=()=>!0,Qp=e=>Zp.test(e)&&!Kp.test(e),Sa=()=>!1,qp=e=>Jp.test(e),eh=e=>Yp.test(e),th=e=>!J(e)&&!Y(e),nh=e=>zn(e,Pa,Sa),J=e=>_a.test(e),ln=e=>zn(e,Ca,Qp),wo=e=>zn(e,lh,ae),ki=e=>zn(e,Ta,Sa),sh=e=>zn(e,Ea,eh),_s=e=>zn(e,Ma,qp),Y=e=>ka.test(e),Hn=e=>On(e,Ca),oh=e=>On(e,ah),Si=e=>On(e,Ta),rh=e=>On(e,Pa),ih=e=>On(e,Ea),ks=e=>On(e,Ma,!0),zn=(e,t,n)=>{const s=_a.exec(e);return s?s[1]?t(s[1]):n(s[2]):!1},On=(e,t,n=!1)=>{const s=ka.exec(e);return s?s[1]?t(s[1]):n:!1},Ta=e=>e==="position"||e==="percentage",Ea=e=>e==="image"||e==="url",Pa=e=>e==="length"||e==="size"||e==="bg-size",Ca=e=>e==="length",lh=e=>e==="number",ah=e=>e==="family-name",Ma=e=>e==="shadow",ch=()=>{const e=De("color"),t=De("font"),n=De("text"),s=De("font-weight"),o=De("tracking"),r=De("leading"),i=De("breakpoint"),l=De("container"),a=De("spacing"),u=De("radius"),c=De("shadow"),d=De("inset-shadow"),h=De("text-shadow"),m=De("drop-shadow"),w=De("blur"),k=De("perspective"),M=De("aspect"),R=De("ease"),T=De("animate"),O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],S=()=>[...N(),Y,J],v=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto","contain","none"],P=()=>[Y,J,a],H=()=>[gn,"full","auto",...P()],q=()=>[Wt,"none","subgrid",Y,J],te=()=>["auto",{span:["full",Wt,Y,J]},Wt,Y,J],U=()=>[Wt,"auto",Y,J],ie=()=>["auto","min","max","fr",Y,J],xe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Se=()=>["start","end","center","stretch","center-safe","end-safe"],ce=()=>["auto",...P()],re=()=>[gn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],L=()=>[e,Y,J],ze=()=>[...N(),Si,ki,{position:[Y,J]}],Pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ne=()=>["auto","cover","contain",rh,nh,{size:[Y,J]}],he=()=>[yo,Hn,ln],ve=()=>["","none","full",u,Y,J],Te=()=>["",ae,Hn,ln],lt=()=>["solid","dashed","dotted","double"],je=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],b=()=>[ae,yo,Si,ki],F=()=>["","none",w,Y,J],z=()=>["none",ae,Y,J],Z=()=>["none",ae,Y,J],de=()=>[ae,Y,J],f=()=>[gn,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[It],breakpoint:[It],color:[Xp],container:[It],"drop-shadow":[It],ease:["in","out","in-out"],font:[th],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[It],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[It],shadow:[It],spacing:["px",ae],text:[It],"text-shadow":[It],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",gn,J,Y,M]}],container:["container"],columns:[{columns:[ae,J,Y,l]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:S()}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[Wt,"auto",Y,J]}],basis:[{basis:[gn,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ae,gn,"auto","initial","none",J]}],grow:[{grow:["",ae,Y,J]}],shrink:[{shrink:["",ae,Y,J]}],order:[{order:[Wt,"first","last","none",Y,J]}],"grid-cols":[{"grid-cols":q()}],"col-start-end":[{col:te()}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":q()}],"row-start-end":[{row:te()}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ie()}],"auto-rows":[{"auto-rows":ie()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...xe(),"normal"]}],"justify-items":[{"justify-items":[...Se(),"normal"]}],"justify-self":[{"justify-self":["auto",...Se()]}],"align-content":[{content:["normal",...xe()]}],"align-items":[{items:[...Se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Se(),{baseline:["","last"]}]}],"place-content":[{"place-content":xe()}],"place-items":[{"place-items":[...Se(),"baseline"]}],"place-self":[{"place-self":["auto",...Se()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:ce()}],mx:[{mx:ce()}],my:[{my:ce()}],ms:[{ms:ce()}],me:[{me:ce()}],mt:[{mt:ce()}],mr:[{mr:ce()}],mb:[{mb:ce()}],ml:[{ml:ce()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:re()}],w:[{w:[l,"screen",...re()]}],"min-w":[{"min-w":[l,"screen","none",...re()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[i]},...re()]}],h:[{h:["screen","lh",...re()]}],"min-h":[{"min-h":["screen","lh","none",...re()]}],"max-h":[{"max-h":["screen","lh",...re()]}],"font-size":[{text:["base",n,Hn,ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,Y,wo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",yo,J]}],"font-family":[{font:[oh,J,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Y,J]}],"line-clamp":[{"line-clamp":[ae,"none",Y,wo]}],leading:[{leading:[r,...P()]}],"list-image":[{"list-image":["none",Y,J]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Y,J]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...lt(),"wavy"]}],"text-decoration-thickness":[{decoration:[ae,"from-font","auto",Y,ln]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[ae,"auto",Y,J]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y,J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y,J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ze()}],"bg-repeat":[{bg:Pe()}],"bg-size":[{bg:Ne()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Wt,Y,J],radial:["",Y,J],conic:[Wt,Y,J]},ih,sh]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:he()}],"gradient-via-pos":[{via:he()}],"gradient-to-pos":[{to:he()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:ve()}],"rounded-s":[{"rounded-s":ve()}],"rounded-e":[{"rounded-e":ve()}],"rounded-t":[{"rounded-t":ve()}],"rounded-r":[{"rounded-r":ve()}],"rounded-b":[{"rounded-b":ve()}],"rounded-l":[{"rounded-l":ve()}],"rounded-ss":[{"rounded-ss":ve()}],"rounded-se":[{"rounded-se":ve()}],"rounded-ee":[{"rounded-ee":ve()}],"rounded-es":[{"rounded-es":ve()}],"rounded-tl":[{"rounded-tl":ve()}],"rounded-tr":[{"rounded-tr":ve()}],"rounded-br":[{"rounded-br":ve()}],"rounded-bl":[{"rounded-bl":ve()}],"border-w":[{border:Te()}],"border-w-x":[{"border-x":Te()}],"border-w-y":[{"border-y":Te()}],"border-w-s":[{"border-s":Te()}],"border-w-e":[{"border-e":Te()}],"border-w-t":[{"border-t":Te()}],"border-w-r":[{"border-r":Te()}],"border-w-b":[{"border-b":Te()}],"border-w-l":[{"border-l":Te()}],"divide-x":[{"divide-x":Te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...lt(),"hidden","none"]}],"divide-style":[{divide:[...lt(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...lt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ae,Y,J]}],"outline-w":[{outline:["",ae,Hn,ln]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",c,ks,_s]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",d,ks,_s]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:Te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[ae,ln]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":Te()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",h,ks,_s]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[ae,Y,J]}],"mix-blend":[{"mix-blend":[...je(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":je()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ae]}],"mask-image-linear-from-pos":[{"mask-linear-from":b()}],"mask-image-linear-to-pos":[{"mask-linear-to":b()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":b()}],"mask-image-t-to-pos":[{"mask-t-to":b()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":b()}],"mask-image-r-to-pos":[{"mask-r-to":b()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":b()}],"mask-image-b-to-pos":[{"mask-b-to":b()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":b()}],"mask-image-l-to-pos":[{"mask-l-to":b()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":b()}],"mask-image-x-to-pos":[{"mask-x-to":b()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":b()}],"mask-image-y-to-pos":[{"mask-y-to":b()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[Y,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":b()}],"mask-image-radial-to-pos":[{"mask-radial-to":b()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[ae]}],"mask-image-conic-from-pos":[{"mask-conic-from":b()}],"mask-image-conic-to-pos":[{"mask-conic-to":b()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ze()}],"mask-repeat":[{mask:Pe()}],"mask-size":[{mask:Ne()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Y,J]}],filter:[{filter:["","none",Y,J]}],blur:[{blur:F()}],brightness:[{brightness:[ae,Y,J]}],contrast:[{contrast:[ae,Y,J]}],"drop-shadow":[{"drop-shadow":["","none",m,ks,_s]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",ae,Y,J]}],"hue-rotate":[{"hue-rotate":[ae,Y,J]}],invert:[{invert:["",ae,Y,J]}],saturate:[{saturate:[ae,Y,J]}],sepia:[{sepia:["",ae,Y,J]}],"backdrop-filter":[{"backdrop-filter":["","none",Y,J]}],"backdrop-blur":[{"backdrop-blur":F()}],"backdrop-brightness":[{"backdrop-brightness":[ae,Y,J]}],"backdrop-contrast":[{"backdrop-contrast":[ae,Y,J]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ae,Y,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ae,Y,J]}],"backdrop-invert":[{"backdrop-invert":["",ae,Y,J]}],"backdrop-opacity":[{"backdrop-opacity":[ae,Y,J]}],"backdrop-saturate":[{"backdrop-saturate":[ae,Y,J]}],"backdrop-sepia":[{"backdrop-sepia":["",ae,Y,J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Y,J]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ae,"initial",Y,J]}],ease:[{ease:["linear","initial",R,Y,J]}],delay:[{delay:[ae,Y,J]}],animate:[{animate:["none",T,Y,J]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,Y,J]}],"perspective-origin":[{"perspective-origin":S()}],rotate:[{rotate:z()}],"rotate-x":[{"rotate-x":z()}],"rotate-y":[{"rotate-y":z()}],"rotate-z":[{"rotate-z":z()}],scale:[{scale:Z()}],"scale-x":[{"scale-x":Z()}],"scale-y":[{"scale-y":Z()}],"scale-z":[{"scale-z":Z()}],"scale-3d":["scale-3d"],skew:[{skew:de()}],"skew-x":[{"skew-x":de()}],"skew-y":[{"skew-y":de()}],transform:[{transform:[Y,J,"","none","gpu","cpu"]}],"transform-origin":[{origin:S()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:f()}],"translate-x":[{"translate-x":f()}],"translate-y":[{"translate-y":f()}],"translate-z":[{"translate-z":f()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y,J]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y,J]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[ae,Hn,ln,wo]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},uh=Up(ch);function dh(...e){return uh(Ap(e))}const fh={class:"relative flex px-2 font-medium text-zinc-800 dark:text-zinc-200 lg:px-2.5"},ph=["onMouseenter"],hh={class:"relative flex items-center gap-2"},mh={key:0,class:"inline-flex shrink-0 items-center justify-center text-base opacity-100"},gh=["onClick","onFocus","aria-haspopup","aria-expanded"],bh={class:"relative flex items-center gap-2"},vh={key:0,class:"inline-flex shrink-0 items-center justify-center text-base opacity-100"},yh=Bt({__name:"DesktopHeaderNav",props:{items:{},openMenuPath:{default:""},shouldHideNavBg:{type:Boolean,default:!1},navStyle:{default:void 0},floating:{type:Boolean,default:!1}},emits:["open","close","toggle","section-focusout"],setup(e,{emit:t}){const n=e,s=sa(),o=pe(null),r=pe({opacity:"0",transform:"translateX(0px)",width:"0px"}),i=new Map,l=S=>{const[v,A=""]=S.split("?");return{pathname:v,search:A?`?${A}`:""}},a=S=>S.startsWith("#"),u=S=>{if(a(S))return!1;const v=l(S);return v.pathname==="/"?s.path==="/"&&(!v.search||v.search===s.fullPath.slice(s.path.length)):s.path===v.pathname||s.path.startsWith(`${v.pathname}/`)?v.search?s.fullPath.includes(v.search):!0:!1},c=S=>{var v;return(v=S.subMenu)==null?void 0:v.find(A=>u(A.path))},d=S=>{var P;return c(S)?!0:a(S.path)?!1:S.path==="/"?s.path==="/":s.path===S.path||s.path.startsWith(`${S.path}/`)?!((P=S.exclude)!=null&&P.includes(s.path)):!1},h=S=>{var v;return((v=c(S))==null?void 0:v.title)||S.title},m=S=>{var v;return((v=c(S))==null?void 0:v.icon)||S.icon},w=S=>{var v;return!!((v=S.subMenu)!=null&&v.length)},k=S=>dh("relative z-[1] block whitespace-nowrap px-2.5 py-2 transition-colors duration-200 lg:px-3",d(S)?"bloom-selected-text":"hover:text-accent/80"),M=V(()=>{var S;return((S=n.items.find(v=>d(v)))==null?void 0:S.path)||""}),R=S=>v=>{if(v instanceof HTMLElement){i.set(S,v);return}i.delete(S)},T=()=>{const S=M.value,v=o.value,A=i.get(S);if(!v||!A){r.value={opacity:"0",transform:"translateX(0px)",width:"0px"};return}const P=v.getBoundingClientRect(),H=A.getBoundingClientRect(),q=H.left-P.left;r.value={opacity:"1",width:`${Math.max(H.width-8,24)}px`,transform:`translateX(${q+4}px)`}},O=()=>{requestAnimationFrame(()=>{T()})},N=S=>{const v=S.currentTarget;if(!v)return;const A=v.getBoundingClientRect(),P=S.clientX-A.left,H=S.clientY-A.top,q=Math.hypot(A.width,A.height)/2.5;v.style.setProperty("--spotlight-x",`${P}px`),v.style.setProperty("--spotlight-y",`${H}px`),v.style.setProperty("--spotlight-radius",`${q}px`)};return st(()=>[n.items,n.openMenuPath,s.fullPath],async()=>{await Xo(),O()},{immediate:!0,deep:!0}),Pt(()=>{window.addEventListener("resize",O,{passive:!0}),O()}),_t(()=>{window.removeEventListener("resize",O)}),(S,v)=>(K(),ee("nav",{ref_key:"navRef",ref:o,class:Oe(["bloom-glass pointer-events-auto group relative origin-top rounded-full transition-[opacity,transform,filter,background-color,box-shadow,border-color] duration-300 ease-out [--spotlight-color:oklch(var(--a)_/_0.12)]",[S.shouldHideNavBg&&"!border-transparent !bg-transparent !shadow-none before:!hidden",S.floating&&"border-white/50 dark:border-white/10"]]),style:it(S.navStyle),onMousemove:N,onMouseleave:v[2]||(v[2]=A=>S.$emit("close"))},[v[3]||(v[3]=$("div",{class:"pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:"radial-gradient(var(--spotlight-radius, 0px) circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color) 0%, transparent 65%)"},"aria-hidden":"true"},null,-1)),$("div",{class:"pointer-events-none absolute bottom-px left-0 h-px bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0 transition-[transform,width,opacity] duration-200 ease-out",style:it(r.value),"aria-hidden":"true"},null,4),$("div",fh,[(K(!0),ee(Ae,null,Ot(S.items,A=>(K(),ee("div",{key:A.path,ref_for:!0,ref:R(A.path),class:"relative",onMouseenter:P=>S.$emit("open",A,P),onMouseleave:v[0]||(v[0]=P=>S.$emit("close")),onFocusout:v[1]||(v[1]=P=>S.$emit("section-focusout",P))},[a(A.path)?(K(),ee("button",{key:1,type:"button",class:Oe(k(A)),onClick:P=>S.$emit("toggle",A,P),onFocus:P=>S.$emit("open",A,P),"aria-haspopup":w(A)?"menu":void 0,"aria-expanded":w(A)?S.openMenuPath===A.path:void 0},[$("span",bh,[d(A)?(K(),ee("span",vh,[be(xn,{icon:m(A),class:"size-[1em] transition-transform duration-200"},null,8,["icon"])])):Le("",!0),$("span",null,me(h(A)),1)])],42,gh)):(K(),Ke(ue(bt),{key:0,to:A.path,class:Oe(k(A)),onFocus:P=>S.$emit("open",A,P),"aria-haspopup":w(A)?"menu":void 0,"aria-expanded":w(A)?S.openMenuPath===A.path:void 0},{default:Re(()=>[$("span",hh,[d(A)?(K(),ee("span",mh,[be(xn,{icon:m(A),class:"size-[1em] transition-transform duration-200"},null,8,["icon"])])):Le("",!0),$("span",null,me(h(A)),1)])]),_:2},1032,["to","class","onFocus","aria-haspopup","aria-expanded"]))],40,ph))),128))])],38))}}),wh=[{title:"首页",path:"/",icon:"i-mingcute-lotus-line",type:"Home",subMenu:[]},{title:"文章",path:"/posts",icon:"i-mingcute-leaf-2-line",type:"Post",subMenu:[]},{title:"随笔",path:"/notes",icon:"i-mingcute-flower-line",type:"Note",exclude:["/notes/topics"]},{title:"更多",path:"#more",icon:"i-mingcute-grass-line",type:"More",subMenu:[{title:"思考",path:"/thinking",icon:"i-mingcute-leaf-line"},{title:"项目",path:"/projects",icon:"i-mingcute-tree-2-line"},{title:"诗词",path:"/says",icon:"i-mingcute-leaf-3-line"}]}],Aa=e=>{var t;return{...e,subMenu:(t=e.subMenu)==null?void 0:t.map(Aa)}},Ti=(e,t)=>{const n=e.toLowerCase(),s=t.toLowerCase();return s.includes("/about")||n.includes("关于")?"i-mingcute-flower-4-line":s.includes("/friend")||n.includes("友")?"i-mingcute-flower-2-line":s.includes("/comment")||n.includes("留言")?"i-mingcute-flower-3-line":s.includes("/category")||n.includes("分类")?"i-mingcute-leaf-2-line":s.includes("/topic")||n.includes("专栏")?"i-mingcute-flower-2-line":s.includes("/project")||n.includes("项目")?"i-mingcute-tree-2-line":s.includes("/thinking")||n.includes("思考")?"i-mingcute-leaf-line":s.includes("/note")||n.includes("记")?"i-mingcute-flower-line":s.includes("/post")||n.includes("文")?"i-mingcute-leaf-2-line":s.includes("/say")||n.includes("诗")?"i-mingcute-leaf-3-line":"i-mingcute-flower-5-line"},xh=e=>{const t=wh.map(Aa),n=[...(e==null?void 0:e.pageMeta)||[]].filter(i=>i.title&&i.slug).sort((i,l)=>Number(i.order||0)-Number(l.order||0)).map(i=>({title:i.title||"",path:`/${i.slug}`,icon:Ti(i.title||"",`/${i.slug}`)})),s=[...(e==null?void 0:e.categories)||[]].filter(i=>i.name&&i.slug).map(i=>({title:i.name||"",path:`/categories/${i.slug}`,icon:Ti(i.name||"",`/categories/${i.slug}`)})),o=t.findIndex(i=>i.type==="Home");o!==-1&&(t[o].subMenu=n);const r=t.findIndex(i=>i.type==="Post");return r!==-1&&(t[r].subMenu=s),t},Dt=us({title:"",description:"",slug:""}),_h=e=>{Dt.title=e.title,Dt.description=e.description,Dt.slug=e.slug||""},Ei=()=>{Dt.title="",Dt.description="",Dt.slug=""},kh=()=>{const e=V(()=>Dt.title),t=V(()=>Dt.description),n=V(()=>Dt.slug),s=V(()=>!!e.value);return{title:e,description:t,slug:n,hasMeta:s}},ig=e=>{st(e,t=>{if(!t){Ei();return}_h(t)},{immediate:!0}),_t(()=>{Ei()})};function Sh(e){return Promise.resolve({})}const Th=(e,t)=>{const n=pe(""),s=pe(""),o=pe(""),r=pe(""),i=pe("");let l=null;const a=()=>{n.value="",s.value="",o.value="",r.value="",i.value=""},u=()=>{l&&(window.clearInterval(l),l=null)},c=async()=>{var m,w,k,M,R,T;if(!e.value){a();return}const h=await Sh(t.value||"/fn/ps/update");n.value=((m=h.processInfo)==null?void 0:m.name)||h.processName||"",s.value=((w=h.processInfo)==null?void 0:w.description)||"",o.value=((k=h.processInfo)==null?void 0:k.iconBase64)||((M=h.processInfo)==null?void 0:M.iconUrl)||"",r.value=((R=h.mediaInfo)==null?void 0:R.title)||"",i.value=((T=h.mediaInfo)==null?void 0:T.artist)||""},d=()=>{u(),e.value&&(c(),l=window.setInterval(()=>{c()},1e3*60*5))};return Pt(()=>{d()}),st([e,t],()=>{d()}),_t(()=>{u()}),{processName:V(()=>n.value),processDescription:V(()=>s.value),processIcon:V(()=>o.value),mediaTitle:V(()=>r.value),mediaArtist:V(()=>i.value),hasMedia:V(()=>!!r.value),hasProcess:V(()=>!!n.value)}},Eh={class:"relative mx-auto grid h-full min-h-0 max-w-7xl grid-cols-[4.5rem_auto_4.5rem] lg:px-8"},Ph={class:"relative flex size-full items-center justify-center lg:hidden"},Ch={key:0,class:"group absolute inset-y-0 left-[-30px] hidden items-center lg:flex"},Mh={class:"bloom-glass-modal pointer-events-none absolute left-1/2 top-full z-[12] mt-3 min-w-max -translate-x-1/2 rounded-xl px-3 py-2 text-xs opacity-0 transition duration-200 group-hover:opacity-100 dark:text-zinc-100"},Ah=["src"],Ih={class:"flex min-w-0 max-w-[78vw] shrink grow flex-col justify-center"},Rh={key:0,class:"min-w-0 truncate text-gray-600/60 dark:text-gray-300/60"},zh={class:"min-w-0 truncate text-[15px] font-medium leading-6 tracking-[0.01em]"},Oh={key:0,class:"group pointer-events-auto absolute inset-y-0 right-[-25px] hidden items-center overflow-visible lg:flex"},Lh={class:"bloom-glass inline-flex size-8 items-center justify-center overflow-hidden rounded-md"},Nh=["src","alt"],Dh={key:1,class:"i-mingcute-computer-line text-base opacity-80"},$h={class:"bloom-glass-modal pointer-events-none absolute right-0 top-full z-[12] mt-3 min-w-max rounded-xl px-3 py-2 text-xs opacity-0 transition duration-200 group-hover:opacity-100 dark:text-zinc-100"},jh={class:"hidden min-w-0 grow lg:flex"},Fh={class:"relative flex grow items-center justify-center"},Hh={class:"flex min-w-0 max-w-[38rem] shrink grow flex-col items-center justify-center text-center"},Bh={key:0,class:"min-w-0 truncate text-gray-600/60 dark:text-gray-300/60"},Vh={class:"min-w-0 truncate text-[15px] font-medium leading-6 tracking-[0.01em] text-zinc-800/92 dark:text-zinc-100/90"},Uh={class:"flex min-w-0 flex-col"},Gh=["src","alt"],Wh={key:1,class:"center flex size-full text-xl font-medium text-accent"},Zh={class:"mt-4 min-w-0"},Kh={class:"truncate text-xl font-medium text-zinc-950 dark:text-zinc-50"},Jh={class:"mt-5 grid grid-cols-3 gap-3 border-b border-t border-zinc-900/8 py-4 text-zinc-900 dark:border-zinc-100/10 dark:text-zinc-50"},Yh={class:"truncate text-xs text-zinc-500 dark:text-zinc-400"},Xh={class:"mt-1 truncate text-lg font-medium leading-none"},Qh={class:"mt-4 truncate text-sm text-zinc-500 dark:text-zinc-400"},qh={class:"min-w-0"},em={class:"grid min-w-0 grid-cols-2 gap-x-6 gap-y-1"},tm={class:"truncate"},nm={class:"inline-flex w-5 shrink-0 justify-center"},sm={class:"min-w-0 flex-1 truncate"},om={key:0,class:"bloom-bottom-sheet fixed inset-x-0 bottom-0 z-30 flex max-h-[calc(100svh-5rem)] flex-col rounded-t-[18px] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 lg:hidden"},rm={class:"bloom-glass mx-auto flex w-[90vw] max-w-[680px] items-center gap-3 rounded-2xl px-4 py-3"},im=["src"],lm={key:1,class:"center inline-flex size-11 rounded-full bg-base-200"},am={class:"min-w-0 flex-1"},cm={class:"truncate text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400"},um={class:"truncate text-base font-medium"},dm={key:2,class:"inline-flex shrink-0 items-center rounded-full bg-accent/8 px-3 py-1 text-xs text-accent"},fm={class:"scrollbar-none mx-auto mt-4 max-h-[80dvh] w-[90vw] max-w-[680px] space-y-3 overflow-auto pb-[calc(6rem+env(safe-area-inset-bottom))]"},pm={class:"flex items-center gap-3"},hm={class:"flex items-center space-x-3 py-2 text-lg"},mm={class:"min-w-0 flex-1"},gm={class:"truncate"},bm={key:0,class:"mt-0.5 block text-xs font-normal text-zinc-500 dark:text-zinc-400"},vm=["onClick"],ym={class:"flex items-center space-x-3 py-2 text-lg"},wm={class:"min-w-0 flex-1"},xm={class:"truncate"},_m={key:0,class:"mt-0.5 block text-xs font-normal text-zinc-500 dark:text-zinc-400"},km=["aria-expanded","onClick"],Sm={key:0,class:"mt-2 grid grid-cols-2 gap-2"},Tm={class:"inline-flex min-w-0 items-center gap-2 pl-1"},Em={class:"truncate"},Ss=197,Pi=50,Pm=Bt({__name:"SiteHeader",props:{theme:{}},emits:["toggle-theme"],setup(e){const t=sa(),{owner:n,seo:s,pageMeta:o,categories:r,themeConfig:i}=va(),l=pe(!1),a=pe(""),u=pe(""),c=pe(null),d=pe(null),h=pe(!1),m=pe({left:0,top:0,width:130,arrowLeft:65}),w=pe(null),k=pe(0);let M=null;const R=V(()=>n.value.avatar||""),T=V(()=>n.value.name||s.value.title||"Bloom"),O=V(()=>[{value:ap({page:1,size:1}).pagination.total,label:"文章"},{value:cp({page:1,size:1}).pagination.total,label:"随笔"},{value:up(1,1).pagination.total,label:"诗词"}]),N=(y,I,W)=>Math.min(W,Math.max(I,y)),S=y=>y*y*(3-2*y),v=V(()=>!!(A.title.value&&(/^\/posts\/[^/]+\/[^/]+/.test(t.path)||/^\/notes\/[^/]+/.test(t.path)||/^\/thinking\/[^/]+/.test(t.path)||/^\/projects\/[^/]+/.test(t.path)||/^\/notes\/topics\/[^/]+/.test(t.path)||/^\/[^/]+$/.test(t.path)))),A=kh(),{scrollY:P,scrollDirection:H}=aa(),q=V(()=>{var y,I,W;return!!((W=(I=(y=i.value)==null?void 0:y.module)==null?void 0:I.activity)!=null&&W.enable)}),te=V(()=>{var y,I,W;return((W=(I=(y=i.value)==null?void 0:y.module)==null?void 0:I.activity)==null?void 0:W.endpoint)||"/fn/ps/update"}),{processName:U,processDescription:ie,processIcon:xe,mediaTitle:Se,mediaArtist:ce,hasMedia:re,hasProcess:L}=Th(q,te),ze=V(()=>xh({pageMeta:o.value,categories:r.value})),Pe=V(()=>A.hasMeta.value?{title:A.title.value,description:A.description.value,slug:A.slug.value||t.path}:{title:"",description:"",slug:""}),Ne=V(()=>h.value?1:P.value<Ss?0:P.value>=Ss+Pi?1:Math.floor((P.value-Ss)/Pi*100)/100),he=V(()=>1-Ne.value);V(()=>he.value>0),V(()=>P.value>100&&Ne.value>.8);const ve=V(()=>A.hasMeta.value),Te=V(()=>h.value?v.value?252:190:v.value?372:210),lt=V(()=>v.value?h.value?112:136:78),je=V(()=>Math.max(Ss+12,Te.value-(h.value?92:104))),b=pe(!1),F=V(()=>{const y=Te.value,I=y+lt.value;return P.value<=y?0:P.value>=I?1:S(N((P.value-y)/lt.value,0,1))}),z=V(()=>b.value?1:0),Z=V(()=>ve.value&&(v.value?z.value>0:F.value>.08)),de=V(()=>h.value||v.value?Number.POSITIVE_INFINITY:ve.value?Math.max(120,Te.value-36):112),f=V(()=>ve.value?72:88),p=V(()=>{if(h.value||v.value)return 0;const y=(P.value-de.value)/f.value;return S(N(y,0,1))}),g=V(()=>h.value&&Z.value),x=V(()=>!v.value&&!!Pe.value.description),E=V(()=>!1),_=V(()=>{const y=ve.value?he.value:1,I=v.value?0:p.value,W=Math.max(0,y);return{opacity:W,visibility:W>.01?"visible":"hidden",transform:`translateY(${(1-y)*-6+I*-6}px) scale(${1+I*.018})`,filter:`blur(${(1-y)*1}px)`}}),B=V(()=>{if(h.value)return{};const y=Math.max(0,1-p.value*1.24);return{opacity:y,visibility:y>.03?"visible":"hidden",transform:`translateY(${p.value*-10}px) scale(${1-p.value*.03})`,filter:`blur(${p.value*1.8}px)`,pointerEvents:y>.15?"auto":"none"}}),j=V(()=>({opacity:h.value?1:Math.max(0,Ne.value*(1-p.value*1.18))})),D=V(()=>({opacity:v.value?z.value:F.value,visibility:(v.value?z.value:F.value)>.001?"visible":"hidden",transform:`translateY(${(1-(v.value?z.value:F.value))*(v.value?6:10)}px)`,filter:`blur(${(1-(v.value?z.value:F.value))*(v.value?.8:4)}px)`})),C=V(()=>({opacity:v.value?z.value:F.value,visibility:(v.value?z.value:F.value)>.001?"visible":"hidden",transform:`translateY(${(1-(v.value?z.value:F.value))*(v.value?4:8)}px)`,filter:`blur(${(1-(v.value?z.value:F.value))*(v.value?.6:2.6)}px)`})),Q=()=>{h.value=window.innerWidth<1024},G=y=>{const[I,W=""]=y.split("?");return{pathname:I,search:W?`?${W}`:""}},X=y=>y.startsWith("#"),ne=y=>{if(X(y))return!1;const I=G(y);return I.pathname==="/"?t.path==="/"&&(!I.search||I.search===t.fullPath.slice(t.path.length)):t.path===I.pathname||t.path.startsWith(`${I.pathname}/`)?I.search?t.fullPath.includes(I.search):!0:!1},le=y=>{var I;return(I=y.subMenu)==null?void 0:I.find(W=>ne(W.path))},_e=y=>{var qe;return le(y)?!0:X(y.path)?!1:y.path==="/"?t.path==="/":t.path===y.path||t.path.startsWith(`${y.path}/`)?!((qe=y.exclude)!=null&&qe.includes(t.path)):!1},fe=y=>{var I;return((I=le(y))==null?void 0:I.title)||y.title},Fe=y=>{var I;return((I=le(y))==null?void 0:I.icon)||y.icon},He=y=>{var I;return!!((I=y.subMenu)!=null&&I.length)},ct=y=>Array.from(y).reduce((I,W)=>I+(/[\u0000-\u00ff]/.test(W)?1:2),0),ut=y=>{var W;if((y==null?void 0:y.type)==="Home")return 620;const I=Math.max(4,...((W=y==null?void 0:y.subMenu)==null?void 0:W.map(qe=>ct(qe.title||"")))||[0]);return Math.min(188,Math.max(130,I*14+44))},mt=()=>{if(!w.value)return;const y=w.value.getBoundingClientRect(),I=ze.value.find(to=>to.path===a.value),W=ut(I),qe=y.left+y.width/2,Me=16,dt=Math.min(window.innerWidth-Me-W/2,Math.max(Me+W/2,qe)),ot=dt-W/2,gt=Math.min(W-18,Math.max(18,qe-ot));m.value={left:dt,top:y.bottom+10,width:W,arrowLeft:gt}},hn=(y,I)=>{if(!He(y))return;M&&(window.clearTimeout(M),M=null);const W=I==null?void 0:I.currentTarget;W&&(w.value=W,mt()),a.value=y.path},We=()=>{M&&window.clearTimeout(M),M=window.setTimeout(()=>{a.value=""},150)},Be=()=>{M&&(window.clearTimeout(M),M=null),a.value="",w.value=null},Ln=()=>{l.value=!1},hs=()=>{k.value=window.scrollY||document.documentElement.scrollTop||0,document.body.style.position="fixed",document.body.style.top=`-${k.value}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",document.body.style.overflow="hidden"},ur=()=>{const y=Math.abs(Number.parseInt(document.body.style.top||"0",10))||k.value;document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",document.body.style.overflow="",window.scrollTo({top:y,behavior:"auto"})},ms=()=>{var y;return((y=ze.value.find(I=>_e(I)||le(I)))==null?void 0:y.path)||""},Nn=V(()=>ze.value.find(y=>y.path===ms())||null),gs=y=>{var I;return u.value===y.path||!!((I=y.subMenu)!=null&&I.some(W=>tn(W)))},eo=y=>_e(y)||gs(y),dr=y=>{var I;(I=y.subMenu)!=null&&I.length&&(u.value=u.value===y.path?"":y.path)},Ia=(y,I)=>{if(He(y)){if(a.value===y.path){Be();return}hn(y,I)}},tn=y=>ne(y.path),Ra=y=>{const I=y.relatedTarget,W=y.currentTarget;W&&I&&W.contains(I)||d.value&&I&&d.value.contains(I)||Be()},fr=y=>{y.key==="Escape"&&(Be(),l.value=!1)},pr=y=>{var I;c.value&&(c.value.contains(y.target)||(I=d.value)!=null&&I.contains(y.target)||(Be(),l.value=!1))};st(()=>t.fullPath,()=>{Be(),l.value=!1,u.value=ms()}),st([P,H,v,ve],([y,I,W,qe])=>{if(!W||!qe){b.value=!1;return}const Me=Te.value+Math.min(24,lt.value*.2),dt=je.value;if(y>=Me){b.value=!0;return}if(y<=dt){b.value=!1;return}I==="down"&&y>=Te.value&&(b.value=!0)},{immediate:!0}),st(l,y=>{y?(hs(),u.value=ms()):document.body.style.position==="fixed"&&ur()}),st(a,y=>{y&&requestAnimationFrame(()=>{mt()})}),st(P,()=>{a.value&&mt()}),st(Z,y=>{y&&Be()}),Pt(()=>{document.addEventListener("click",pr),document.addEventListener("keydown",fr),window.addEventListener("resize",Q,{passive:!0}),window.addEventListener("resize",mt,{passive:!0}),Q(),u.value=ms()}),_t(()=>{document.removeEventListener("click",pr),document.removeEventListener("keydown",fr),window.removeEventListener("resize",Q),window.removeEventListener("resize",mt),document.body.style.position==="fixed"?ur():document.body.style.overflow="",M&&window.clearTimeout(M)});const Dn=V(()=>ze.value.find(y=>y.path===a.value)),hr=V(()=>{var y;return((y=Dn.value)==null?void 0:y.type)==="Home"}),za=V(()=>{var W;const y=((W=Dn.value)==null?void 0:W.subMenu)||[],I=Math.ceil(y.length/2);return[y.slice(0,I),y.slice(I)]}),Oa=V(()=>Z.value&&Pe.value.title?Pe.value.title:Nn.value?fe(Nn.value):s.value.title||n.value.name||"Bloom"),La=V(()=>{var y,I;return Z.value&&Pe.value.description?Pe.value.description:(I=(y=Nn.value)==null?void 0:y.subMenu)!=null&&I.length?"继续浏览这个分组下的页面":"导航"});return(y,I)=>(K(),ee("header",{ref_key:"headerRef",ref:c,class:"fixed inset-x-0 top-0 z-[9] mr-[var(--removed-body-scroll-bar-size)] h-[4.5rem] overflow-hidden transition-shadow duration-300 ease-out"},[$("div",{class:"absolute inset-0 transform-gpu border-b transition-opacity duration-300 ease-out [backface-visibility:hidden]",style:it([{"border-color":"var(--surface-border-soft)",background:"var(--bg-opacity)","-webkit-backdrop-filter":"saturate(var(--surface-saturate)) blur(var(--surface-blur))","backdrop-filter":"saturate(var(--surface-saturate)) blur(var(--surface-blur))"},j.value])},null,4),$("div",Eh,[$("div",Ph,[$("button",{class:"bloom-glass group center flex size-10 rounded-full px-3 text-sm transition hover:text-accent","aria-label":"header draw button",onClick:I[0]||(I[0]=W=>l.value=!l.value)},[...I[4]||(I[4]=[$("i",{class:"i-mingcute-menu-line"},null,-1)])])]),$("div",{class:"relative col-start-2 flex size-full items-center justify-center transition-[opacity,transform,filter] duration-300 ease-out lg:col-start-1",style:it(B.value)},[ue(re)?(K(),ee("div",Ch,[I[5]||(I[5]=$("div",{class:"relative inline-flex size-6 items-center justify-center"},[$("span",{class:"absolute inset-0 rounded-md ring-2 ring-red-500 dark:ring-red-400"}),$("i",{class:"i-mingcute-music-2-line text-sm text-red-500 dark:text-red-400"})],-1)),$("div",Mh,me(`${ue(n).name||"站长"} 正在听 ${ue(Se)}${ue(ce)?` - ${ue(ce)}`:""}`),1)])):Le("",!0),be(ue(bt),{to:"/",class:"flex items-center gap-2 transition-opacity hover:opacity-80"},{default:Re(()=>[R.value?(K(),ee("img",{key:0,src:R.value,alt:"Site Owner Avatar",class:Oe(["size-10 rounded-full ring-2 ring-slate-200 transition-opacity dark:ring-zinc-800",g.value?"opacity-0":"opacity-100"])},null,10,Ah)):(K(),ee("span",{key:1,class:Oe(["center inline-flex size-10 rounded-full bg-base-200 transition-opacity",g.value?"opacity-0":"opacity-100"])},"A",2))]),_:1}),ve.value?(K(),ee("div",{key:1,class:"pointer-events-none absolute inset-0 flex min-w-0 items-center justify-center px-4 text-center transition-[opacity,transform,filter] duration-300 ease-out lg:hidden",style:it(C.value)},[$("div",Ih,[x.value?(K(),ee("small",Rh,me(Pe.value.description),1)):Le("",!0),$("h2",zh,me(Pe.value.title),1)])],4)):Le("",!0),be(un,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0 translate-y-3","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-x-2"},{default:Re(()=>[ue(L)&&!Z.value?(K(),ee("div",Oh,[$("div",Lh,[ue(xe)?(K(),ee("img",{key:0,src:ue(xe),alt:ue(U),class:"size-full object-cover"},null,8,Nh)):(K(),ee("i",Dh))]),$("div",$h,me(`${ue(n).name||"站长"} 正在使用 ${ue(U)}${ue(ie)?` ${ue(ie)}`:""}`),1)])):Le("",!0)]),_:1})],4),$("div",jh,[$("div",Fh,[be(yh,{items:ze.value,"open-menu-path":a.value,"should-hide-nav-bg":E.value,"nav-style":_.value,onOpen:hn,onClose:We,onToggle:Ia,onSectionFocusout:Ra},null,8,["items","open-menu-path","should-hide-nav-bg","nav-style"]),ve.value?(K(),ee("div",{key:0,class:"pointer-events-none absolute inset-0 hidden min-w-0 items-center justify-center px-20 transition-[opacity,transform,filter] ease-out lg:flex",style:it([D.value,{transitionDuration:"340ms"}])},[$("div",Hh,[x.value?(K(),ee("small",Bh,me(Pe.value.description),1)):Le("",!0),$("h2",Vh,me(Pe.value.title),1)])],4)):Le("",!0)])]),$("div",{class:"flex size-full items-center justify-center transition-[opacity,transform,filter] duration-300 ease-out",style:it(B.value)},[$("button",{class:"bloom-glass inline-flex size-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-300 transition hover:text-accent",onClick:I[1]||(I[1]=W=>y.$emit("toggle-theme"))},[$("i",{class:Oe([y.theme==="light"?"i-mingcute-moon-line":"i-mingcute-sun-line","text-lg"])},null,2)])],4)]),(K(),Ke(Pc,{to:"body"},[be(un,{"enter-active-class":"transition duration-220 ease-out","enter-from-class":"opacity-0 -translate-y-3 scale-[0.965] blur-[2px]","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition duration-160 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 -translate-y-1 scale-[0.985] blur-[1px]"},{default:Re(()=>{var W,qe;return[(qe=(W=Dn.value)==null?void 0:W.subMenu)!=null&&qe.length&&w.value?(K(),ee("div",{key:0,ref_key:"dropdownPanelRef",ref:d,class:"fixed z-[19] pt-1",style:it({left:`${m.value.left}px`,top:`${m.value.top}px`,width:`${m.value.width}px`,transform:"translateX(-50%)"}),onMouseenter:I[2]||(I[2]=Me=>hn(Dn.value)),onMouseleave:We},[I[8]||(I[8]=$("div",{class:"absolute inset-x-0 -top-3 h-3","aria-hidden":"true"},null,-1)),$("div",{class:"pointer-events-none absolute top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45",style:it([{"border-left":"1px solid var(--surface-border)","border-top":"1px solid var(--surface-border)",background:"var(--surface-strong)","box-shadow":"var(--surface-shadow-soft)"},{left:`${m.value.arrowLeft}px`}])},null,4),$("div",{class:Oe(["bloom-glass bloom-glass-float relative overflow-hidden rounded-2xl",hr.value?"grid grid-cols-[210px_minmax(0,1fr)] gap-6 p-5":"flex flex-col p-1.5"])},[hr.value?(K(),ee(Ae,{key:0},[$("aside",Uh,[be(ue(bt),{to:"/",class:"group inline-flex size-16 overflow-hidden rounded-full border border-zinc-900/8 bg-white/70 dark:border-zinc-100/10 dark:bg-zinc-900/55"},{default:Re(()=>[R.value?(K(),ee("img",{key:0,src:R.value,alt:T.value,class:"size-full object-cover transition duration-300 group-hover:scale-105"},null,8,Gh)):(K(),ee("span",Wh,me(T.value.slice(0,1)),1))]),_:1}),$("div",Zh,[$("div",Kh,me(T.value),1)]),$("dl",Jh,[(K(!0),ee(Ae,null,Ot(O.value,Me=>(K(),ee("div",{key:Me.label,class:"min-w-0"},[$("dt",Yh,me(Me.label),1),$("dd",Xh,me(Me.value),1)]))),128))]),$("div",Qh,me(ue(s).description||"独立写作与个人记录"),1)]),$("div",qh,[I[7]||(I[7]=$("div",{class:"mb-4 text-xs font-medium text-zinc-500 dark:text-zinc-400"},"页面",-1)),$("div",em,[(K(!0),ee(Ae,null,Ot(za.value,(Me,dt)=>(K(),ee("div",{key:dt,class:"min-w-0"},[(K(!0),ee(Ae,null,Ot(Me,(ot,gt)=>(K(),Ke(ue(bt),{key:`home-portal-${ot.path}`,to:ot.path,class:Oe(["group/sub flex min-w-0 items-center justify-between rounded-xl px-2 py-2.5 text-base font-medium text-zinc-700 transition hover:bg-accent/6 hover:text-accent dark:text-zinc-200",tn(ot)?"bg-accent/8 text-accent":""]),style:it({transitionDelay:`${(dt*Me.length+gt)*18}ms`})},{default:Re(()=>[$("span",tm,me(ot.title),1),I[6]||(I[6]=$("i",{class:"i-mingcute-right-small-line opacity-0 transition group-hover/sub:translate-x-0 group-hover/sub:opacity-70"},null,-1))]),_:2},1032,["to","class","style"]))),128))]))),128))])])],64)):(K(!0),ee(Ae,{key:1},Ot(Dn.value.subMenu,(Me,dt)=>(K(),Ke(ue(bt),{key:`portal-${Me.path}`,to:Me.path,class:Oe(["group/sub relative flex w-full items-center gap-3 rounded-[10px] px-3.5 py-3 duration-200 hover:bg-accent/5 hover:text-accent",tn(Me)?"bg-accent/6 text-accent":""]),style:it({transitionDelay:`${dt*20}ms`})},{default:Re(()=>[$("span",{class:Oe(["absolute inset-y-2 left-1.5 w-[2px] rounded-full bg-accent/70 transition-opacity duration-200",tn(Me)?"opacity-100":"opacity-0 group-hover/sub:opacity-70"])},null,2),$("span",nm,[Me.icon?(K(),Ke(xn,{key:0,icon:Me.icon,class:"size-4"},null,8,["icon"])):Le("",!0)]),$("span",sm,me(Me.title),1),$("i",{class:Oe(["i-mingcute-right-small-line text-base transition duration-200",tn(Me)?"translate-x-0 text-accent":"translate-x-[-2px] opacity-0 group-hover/sub:translate-x-0 group-hover/sub:opacity-70"])},null,2)]),_:2},1032,["to","class","style"]))),128))],2)],36)):Le("",!0)]}),_:1}),be(un,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Re(()=>[l.value?(K(),ee("div",{key:0,class:"bloom-overlay-backdrop fixed inset-0 z-20 lg:hidden",onClick:I[3]||(I[3]=W=>l.value=!1)})):Le("",!0)]),_:1}),be(un,{"enter-active-class":"transition duration-250 ease-out","enter-from-class":"opacity-0 translate-y-full","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition duration-180 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-full"},{default:Re(()=>[l.value?(K(),ee("div",om,[I[9]||(I[9]=$("div",{class:"mx-auto mb-5 h-1.5 w-12 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-800"},null,-1)),$("div",rm,[R.value?(K(),ee("img",{key:0,src:R.value,alt:"Site Owner Avatar",class:"size-11 rounded-full ring-2 ring-slate-200 dark:ring-zinc-800"},null,8,im)):(K(),ee("span",lm,"A")),$("div",am,[$("p",cm,me(La.value),1),$("h2",um,me(Oa.value),1)]),Nn.value?(K(),ee("span",dm,me(Nn.value.title),1)):Le("",!0)]),$("div",fm,[(K(!0),ee(Ae,null,Ot(ze.value,(W,qe)=>(K(),Ke(wi,{key:W.path,as:"section",delay:qe*80,y:30,scale:.98,"on-view":!1},{default:Re(()=>{var Me,dt;return[$("div",{class:Oe(["bloom-glass rounded-2xl p-3 transition duration-200",eo(W)?"border-accent/20 bg-accent/5 dark:border-accent/20 dark:bg-accent/10":""])},[$("div",pm,[X(W.path)?(K(),ee("button",{key:1,type:"button",class:Oe(["block min-w-0 flex-1 text-left",eo(W)?"text-accent":""]),onClick:ot=>dr(W)},[$("span",ym,[be(xn,{icon:Fe(W),class:"size-5 shrink-0"},null,8,["icon"]),$("div",wm,[$("h2",xm,me(fe(W)),1),(Me=W.subMenu)!=null&&Me.length?(K(),ee("small",_m,me(W.subMenu.length)+" 个子页面 ",1)):Le("",!0)])])],10,vm)):(K(),Ke(ue(bt),{key:0,to:W.path,class:Oe(["block min-w-0 flex-1",eo(W)?"text-accent":""]),onClick:Ln},{default:Re(()=>{var ot;return[$("span",hm,[be(xn,{icon:Fe(W),class:"size-5 shrink-0"},null,8,["icon"]),$("div",mm,[$("h2",gm,me(fe(W)),1),(ot=W.subMenu)!=null&&ot.length?(K(),ee("small",bm,me(W.subMenu.length)+" 个子页面 ",1)):Le("",!0)])])]}),_:2},1032,["to","class"])),(dt=W.subMenu)!=null&&dt.length?(K(),ee("button",{key:2,type:"button",class:"bloom-glass bloom-spring-link inline-flex size-10 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-300","aria-expanded":gs(W),onClick:ot=>dr(W)},[$("i",{class:Oe(["i-mingcute-right-line text-lg transition duration-200",gs(W)?"rotate-90 text-accent":""])},null,2)],8,km)):Le("",!0)]),be(un,{"enter-active-class":"transition-[max-height,opacity,transform] duration-300 ease-out overflow-hidden","enter-from-class":"max-h-0 opacity-0 -translate-y-2","enter-to-class":"max-h-80 opacity-100 translate-y-0","leave-active-class":"transition-[max-height,opacity,transform] duration-200 ease-in overflow-hidden","leave-from-class":"max-h-80 opacity-100 translate-y-0","leave-to-class":"max-h-0 opacity-0 -translate-y-2"},{default:Re(()=>{var ot;return[(ot=W.subMenu)!=null&&ot.length&&gs(W)?(K(),ee("ul",Sm,[(K(!0),ee(Ae,null,Ot(W.subMenu,(gt,to)=>(K(),Ke(wi,{key:gt.path,as:"li",delay:qe*80+to*45+40,duration:360,y:16,scale:.98,"on-view":!1},{default:Re(()=>[be(ue(bt),{to:gt.path,class:Oe(["bloom-spring-link group relative inline-flex min-h-[58px] w-full items-center overflow-hidden rounded-2xl border border-transparent px-3 py-2.5 text-sm",tn(gt)?"border-accent/15 bg-accent/8 text-accent":"bg-zinc-500/[0.04] opacity-85 dark:bg-white/[0.03]"]),onClick:Ln},{default:Re(()=>[$("span",{class:Oe(["absolute inset-y-2 left-2 w-[2px] rounded-full bg-accent/70 transition-opacity duration-200",tn(gt)?"opacity-100":"opacity-0 group-hover:opacity-60"])},null,2),$("span",Tm,[gt.icon?(K(),Ke(xn,{key:0,icon:gt.icon,class:"size-4 shrink-0"},null,8,["icon"])):Le("",!0),$("span",Em,me(gt.title),1)])]),_:2},1032,["to","class"])]),_:2},1032,["delay"]))),128))])):Le("",!0)]}),_:2},1024)],2)]}),_:2},1032,["delay"]))),128))])])):Le("",!0)]),_:1})]))],512))}}),Cm=["data-theme"],Mm={class:"fill-content relative z-[1] pb-0 pt-[4.5rem]"},bn="bloom-theme",Am=Bt({__name:"App",setup(e){const t=typeof window<"u"&&!!localStorage.getItem(bn),n=()=>typeof window>"u"?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=T=>T==="system"?n():T,r=pe((()=>{if(typeof window>"u")return"light";const T=localStorage.getItem(bn);return T==="light"||T==="dark"||T==="system"?T:"system"})()),i=pe(s(r.value)),l=pe(t),a=pe(null);let u=null,c=null;const d={light:"#5E9F7E",dark:"#5E9F7E"},h={light:"#6B7280",dark:"#A1A1AA"},m=T=>{const O=T.replace("#",""),N=O.length===3?O.split("").map(he=>`${he}${he}`).join(""):O,S=he=>Number.parseInt(N.slice(he,he+2),16)/255,v=he=>he<=.04045?he/12.92:((he+.055)/1.055)**2.4,A=v(S(0)),P=v(S(2)),H=v(S(4)),q=.4122214708*A+.5363325363*P+.0514459929*H,te=.2119034982*A+.6806995451*P+.1073969566*H,U=.0883024619*A+.2817188376*P+.6299787005*H,ie=Math.cbrt(q),xe=Math.cbrt(te),Se=Math.cbrt(U),ce=.2104542553*ie+.793617785*xe-.0040720468*Se,re=1.9779984951*ie-2.428592205*xe+.4505937099*Se,L=.0259040371*ie+.7827717662*xe-.808675766*Se,ze=Math.sqrt(re*re+L*L),Pe=Math.atan2(L,re)*180/Math.PI,Ne=Pe>=0?Pe:Pe+360;return`${(ce*100).toFixed(4)}% ${ze.toFixed(6)} ${Ne.toFixed(6)}`},w={light:m("#FEFEFB"),dark:m("#1C1C1E")},k=T=>{var q;if(typeof document>"u")return;const O=d[T],N=h[T],S=T==="light"?"#FEFEFB":"#1C1C1E",v=w[T],A=m(O),P=m(N),H=te=>{te&&(te.setProperty("--color-primary",O),te.setProperty("--color-accent",O),te.setProperty("--color-primary-content",S),te.setProperty("--color-accent-content",S),te.setProperty("--p",A),te.setProperty("--a",A),te.setProperty("--s",P),te.setProperty("--pc",v),te.setProperty("--ac",v),te.setProperty("--sc",v))};H(document.documentElement.style),H((q=a.value)==null?void 0:q.style)},M=()=>{r.value=i.value==="light"?"dark":"light",l.value=!0,localStorage.setItem(bn,r.value)},R=T=>{r.value=T,l.value=!0,localStorage.setItem(bn,r.value)};return st(r,T=>{if(typeof window>"u")return;const O=s(T);i.value=O,document.documentElement.setAttribute("data-theme",O),document.documentElement.classList.add("noise","themed"),document.documentElement.classList.toggle("dark",O==="dark"),l.value&&localStorage.setItem(bn,T)},{immediate:!0}),st(i,T=>{k(T)},{immediate:!0}),Pt(()=>{document.documentElement.classList.add("noise","themed"),k(i.value),u=window.matchMedia("(prefers-color-scheme: dark)");const T=()=>{(!localStorage.getItem(bn)||r.value==="system")&&(i.value=n(),document.documentElement.setAttribute("data-theme",i.value),document.documentElement.classList.toggle("dark",i.value==="dark"))};u.addEventListener("change",T),c=()=>u==null?void 0:u.removeEventListener("change",T)}),_t(()=>{c==null||c()}),(T,O)=>{const N=Hc("RouterView");return K(),ee("div",{ref_key:"appShellRef",ref:a,"data-theme":i.value,class:"bloom-app-shell relative isolate min-h-screen overflow-x-hidden text-zinc-900 dark:text-zinc-100 transition-colors"},[O[0]||(O[0]=$("div",{class:"bloom-app-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden","aria-hidden":"true"},null,-1)),be(Pm,{theme:i.value,onToggleTheme:M},null,8,["theme"]),$("main",Mm,[be(N,null,{default:Re(({Component:S,route:v})=>[be(un,{mode:"out-in","enter-active-class":"bloom-route-enter-active","enter-from-class":"bloom-route-enter-from","enter-to-class":"bloom-route-enter-to","leave-active-class":"bloom-route-leave-active","leave-from-class":"bloom-route-leave-from","leave-to-class":"bloom-route-leave-to"},{default:Re(()=>[(K(),Ke(yl(S),{key:v.fullPath,class:"bloom-route-shell"}))]),_:2},1024)]),_:1})]),be(Mp,{theme:i.value,"theme-mode":r.value,onToggleTheme:M,onSetTheme:R},null,8,["theme","theme-mode"]),be(bf)],8,Cm)}}}),Im=[{path:"/",component:()=>Ve(()=>import("./HomePage-NjUpjG5j.js"),[]),meta:{title:"首页",description:"Bloom"}},{path:"/posts",component:()=>Ve(()=>import("./PostsPage-WEw_mywT.js"),__vite__mapDeps([0,1])),meta:{title:"文章列表",description:"文章"}},{path:"/posts/:category",component:()=>Ve(()=>import("./PostCategoryPage-BPkFYpWj.js"),__vite__mapDeps([2,1])),meta:{title:"文章",description:"文章跳转"}},{path:"/posts/:category/:slug",component:()=>Ve(()=>import("./PostDetailPage-NI7MmJpk.js"),__vite__mapDeps([3,4,5])),meta:{title:"文章",description:"文章详情"}},{path:"/notes",component:()=>Ve(()=>import("./NotesPage-C6AmJRvC.js"),__vite__mapDeps([6,1])),meta:{title:"随笔",description:"随笔"}},{path:"/notes/topics",component:()=>Ve(()=>import("./TopicsPage-CzR2NLmD.js"),__vite__mapDeps([7,1])),meta:{title:"专栏",description:"随笔专栏"}},{path:"/notes/topics/:slug",component:()=>Ve(()=>import("./TopicDetailPage-CyaFTW3S.js"),__vite__mapDeps([8,1,5])),meta:{title:"专栏",description:"专栏详情"}},{path:"/notes/:id",component:()=>Ve(()=>import("./NoteDetailPage-DK4mdgkI.js"),__vite__mapDeps([9,4,5])),meta:{title:"随笔",description:"随笔详情"}},{path:"/projects",component:()=>Ve(()=>import("./ProjectsPage-DwFA1ht4.js"),__vite__mapDeps([10,1])),meta:{title:"项目",description:"项目"}},{path:"/projects/:id",component:()=>Ve(()=>import("./ProjectDetailPage-Chsakuft.js"),__vite__mapDeps([11,1])),meta:{title:"项目",description:"项目详情"}},{path:"/thinking",component:()=>Ve(()=>import("./ThinkingPage-T5qvpcdJ.js"),__vite__mapDeps([12,5])),meta:{title:"思考",description:"想法"}},{path:"/thinking/:id",component:()=>Ve(()=>import("./ThinkingDetailPage-YFN_nbdr.js"),__vite__mapDeps([13,1,5])),meta:{title:"思考",description:"想法详情"}},{path:"/says",component:()=>Ve(()=>import("./SaysPage-EWlgyiVw.js"),__vite__mapDeps([14,5,15])),meta:{title:"诗词",description:"说说"}},{path:"/categories/:slug",component:()=>Ve(()=>import("./CategoryPage-CXDXyrkc.js"),__vite__mapDeps([16,1])),meta:{title:"分类",description:"文章分类"}},{path:"/friends",component:()=>Ve(()=>import("./FriendsPage-DEPbtVyG.js"),[]),meta:{title:"友链",description:"朋友们"}},{path:"/:slug",component:()=>Ve(()=>import("./PageDetailPage-CZ-sdZb6.js"),__vite__mapDeps([17,4,5])),meta:{title:"Page",description:"独立页面"}},{path:"/:pathMatch(.*)*",component:()=>Ve(()=>import("./NotFoundPage-B6YfuTUm.js"),__vite__mapDeps([18,1])),meta:{title:"404",description:"页面不存在"}}],Rm=df({history:Fd(),routes:Im,scrollBehavior(){return{top:0}}});ld(Am).use(Rm).mount("#app");export{tg as $,cp as A,eg as B,Gm as C,Um as D,va as E,Ae as F,Om as G,Xm as H,Vm as I,Pt as J,_t as K,Nm as L,qm as M,zm as N,Dm as O,Lm as P,sg as Q,bt as R,og as S,rg as T,Bm as U,Zm as V,us as W,un as X,Pc as Y,Qm as Z,wi as _,$ as a,ng as a0,Wm as a1,Qf as a2,yl as a3,Jm as a4,Km as a5,Fm as a6,Kf as a7,dh as a8,Xo as a9,Ve as aa,Le as b,ee as c,Bt as d,pe as e,V as f,be as g,Re as h,Ke as i,Ot as j,$m as k,ue as l,Vn as m,Oe as n,K as o,it as p,ap as q,Bc as r,Hc as s,me as t,sa as u,Ym as v,st as w,ig as x,jm as y,Hm as z};
