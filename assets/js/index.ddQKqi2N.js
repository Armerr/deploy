function e(){import.meta.url,import("_").catch((()=>1)),async function*(){}().next()}import{S as t,m as n,r as o,a as r,o as s,b as l,c as i,d as a,e as c,n as u,M as p,f as m,s as d,g as _,h as f,i as v,j as h,w as E,k as g,u as y,z as b,_ as w,l as L,A as R}from"./vendor.78mO75pL.js";function I(e,o,r){const{value:s={}}=o,l=e.querySelector(".ant-table-tbody");if(!l)return;const i=t.create(l,{animation:300,handle:s.handle||null,ghostClass:"sortable-ghost",disabled:s.disabled||!1,onChoose:e=>{(function(e,t){var o,r,s;const l=(null==(s=null==(r=null==(o=t.children)?void 0:o[0])?void 0:r.children)?void 0:s._ctx).props.rowKey;if(!l)return!1;let i;if("string"==typeof l?i=e=>e[l]:"function"==typeof l&&(i=l),i)return!e.some(((t,n)=>e.findIndex((e=>i(e)===i(t)))!==n))||(n.error({content:()=>"a-table未定义rowKey，或rowKey存在相同的值，无法拖拽！",style:{color:"#ff0000"}}),!1);return!1})(s.list,r)||i.option("disabled",!0)},onEnd:({newIndex:e,oldIndex:t})=>{A(s.list,e,t),s.onEnd&&s.onEnd()}})}function A(e,t,n){const o=[...e],r=o[n];t>n?(o.splice(t+1,0,r),o.splice(n,1)):(o.splice(n,1),o.splice(t,0,r)),e.length=0,e.push(...o)}function O(e,n,o){!function(e){var t,n,o,r;const s=null==(o=null==(n=null==(t=e.children)?void 0:t[0])?void 0:n.children)?void 0:o._ctx;return!!s&&"InternalTable"===(null==(r=s.type)?void 0:r.name)}(o)?function(e,n){e._sortable&&e._sortable.destroy();const{value:o={}}=n;e._sortable=t.create(e,{animation:300,handle:o.handle||null,ghostClass:"sortable-ghost",disabled:o.disabled||!1,onEnd:({newIndex:e,oldIndex:t})=>{A(o.list,e,t),o.onEnd&&o.onEnd()}})}(e,n):I(e,n,o)}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const P=e=>{e.directive("draggable",{mounted(e,t,n){O(e,t,n)},updated(e,t,n){O(e,t,n)}})},T=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},j=T({__name:"ContextMenu",props:{menus:{type:Array,default:()=>[]},event:{type:PointerEvent,default:null},onMenuClick:{type:Function,default:null}},emits:["close","menuClick"],setup(e,{emit:t}){const n=t,m=o(),d=e,_=r({containerStyle:{}});function f(e){var t;n("menuClick",null!=(t=e.item.originItemValue)?t:{}),n("close")}return s((()=>{var e;const t=document.documentElement.scrollTop||document.body.scrollTop,{pageX:n,pageY:o}=null!=(e=d.event)?e:{};let r=n,s=o-t;const{offsetWidth:l,offsetHeight:i}=m.value;r+l>(document.body.clientWidth||document.body.offsetWidth)&&(r-=l),s+i>(document.body.clientHeight||document.body.offsetHeight)&&(s-=i),_.containerStyle={left:"".concat(r,"px"),top:"".concat(s,"px")}})),(e,t)=>{const o=p;return l(),i("div",{class:"mask",onContextmenu:t[0]||(t[0]=e=>{e.preventDefault(),n("close")}),onClick:t[1]||(t[1]=e=>n("close"))},[a("div",{ref_key:"container",ref:m,class:"menu-container",style:u(_.containerStyle)},[c(o,{id:"context-menu",mode:"vertical","popup-class-name":"popup-menu-class",items:d.menus,onClick:f},null,8,["items"])],4)],32)}}},[["__scopeId","data-v-80731f73"]]);const C=e=>{e.directive("rightMenu",{created(e,t,n){},beforeMount(e,t,n){},mounted(e,t,n){e.addEventListener("contextmenu",(e=>{(function(e){return e&&e.props&&e.props.id&&e.props.id.startsWith("a-image-preview-container")})(n)&&!function(e){return"ant-image-preview-img"===e.target.className}(e)||(e.preventDefault(),function(e,t,n){Object.assign({},t.value).event=e;const o=document.createElement("div"),r=document.body.style.overflow,s=m(j,{...t.value,event:e,onClose:()=>{document.body.style.overflow=r,s.unmount(),o.remove()},onMenuClick:e=>{if(e.onClick)return;const n=t.value.menuClick;n&&"function"==typeof n&&n(e)}});document.body.appendChild(o),s.mount(o),document.body.style.overflow="hidden"}(e,t))}))},beforeUpdate(e,t,n){},updated(e,t,n){},beforeUnmount(){},unmounted(){}})},k={},D=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link");o=Promise.all(t.map((t=>{if(t=function(e,t){return new URL(e,t).href}(t,n),t in k)return;k[t]=!0;const o=t.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(!!n)for(let n=e.length-1;n>=0;n--){const r=e[n];if(r.href===t&&(!o||"stylesheet"===r.rel))return}else if(document.querySelector('link[href="'.concat(t,'"]').concat(r)))return;const s=document.createElement("link");return s.rel=o?"stylesheet":"modulepreload",o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o?new Promise(((e,n)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>n(new Error("Unable to preload CSS for ".concat(t)))))})):void 0})))}return o.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},S=20,V=15e3,x="A_AUTH",M="USER_ID",H="USER_NAME";function U(e){d.remove(e)}const N={set:function(e,t){d.set(e,t)},get:function(e){return d.get(e)},remove:U,clearStaff:function(){U(x),U(M),U(H)}},W=Object.assign({"/src/views/app/login.vue":()=>D((()=>import("./login.DWAH21He.js")),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"/src/views/app/main.vue":()=>D((()=>import("./main.DKJYFnEc.js")),__vite__mapDeps([6,2,3,4,7]),import.meta.url),"/src/views/app/page404.vue":()=>D((()=>import("./page404.tiT6A80e.js")),__vite__mapDeps([8,3,4]),import.meta.url),"/src/views/class/classEdit.vue":()=>D((()=>import("./classEdit.lcbf5iXM.js")),__vite__mapDeps([9,3,4]),import.meta.url),"/src/views/class/classHelper.vue":()=>D((()=>import("./classHelper.5bWPDxck.js")),__vite__mapDeps([10,11,3,4,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2,26]),import.meta.url),"/src/views/class/classList.vue":()=>D((()=>import("./classList.XHaTh577.js")),__vite__mapDeps([27,25,1,2,3,4,28]),import.meta.url),"/src/views/class/components/helper/ContentRoller.vue":()=>D((()=>import("./ContentRoller.BsjTRYIH.js")),__vite__mapDeps([14,3,4,15]),import.meta.url),"/src/views/class/components/helper/GroupList.vue":()=>D((()=>import("./GroupList.htCTllnY.js")),__vite__mapDeps([11,3,4,12]),import.meta.url),"/src/views/class/components/helper/GroupRanking.vue":()=>D((()=>import("./GroupRanking.CO0MHUqc.js")),__vite__mapDeps([19,3,4,20]),import.meta.url),"/src/views/class/components/helper/RollCall.vue":()=>D((()=>import("./RollCall.0ZoIIMt1.js")),__vite__mapDeps([13,14,3,4,15,16,17,18]),import.meta.url),"/src/views/class/components/helper/ScoreModal.vue":()=>D((()=>import("./ScoreModal.lcsMCmAS.js")),__vite__mapDeps([22,3,4,23]),import.meta.url),"/src/views/class/components/helper/StudentRanking.vue":()=>D((()=>import("./StudentRanking.vZZkdgK1.js")),__vite__mapDeps([21,22,3,4,23,24]),import.meta.url),"/src/views/class/components/helper/StudentRoller.vue":()=>D((()=>import("./StudentRoller.fWfWJC3X.js")),__vite__mapDeps([16,3,4,17]),import.meta.url)}),G=[{path:"/login",name:"Login",meta:{title:"登录"},component:()=>D((()=>import("./login.DWAH21He.js")),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/main",name:"appMain",meta:{title:"主页"},component:()=>D((()=>import("./main.DKJYFnEc.js")),__vite__mapDeps([6,2,3,4,7]),import.meta.url),children:[...Object.entries(W).reduce(((e,[t,n])=>{if(!/\/(login|components|app\/main|page404)/.test(t)){let o=t.replace("/src/views","");o=o.replace(".vue",""),e.push({path:o,name:o,component:n})}return e}),[]),...[{path:"/404",name:"NotFound",component:()=>D((()=>import("./page404.tiT6A80e.js")),__vite__mapDeps([8,3,4]),import.meta.url)},{path:"/:pathMatch(.*)",component:()=>D((()=>import("./page404.tiT6A80e.js")),__vite__mapDeps([8,3,4]),import.meta.url)}]]}],K=_({history:f(),routes:G});K.beforeEach((async(e,t,n)=>{var o;document.title=null!=(o=e.meta.title)?o:"包老师助学系统";N.get(x)?"/"===e.path?n("/main"):n():"/login"===e.path?n():n({path:"/login"})}));const q={__name:"App",setup:e=>(e,t)=>{const n=v("router-view"),o=w;return l(),h(o,{locale:y(b)},{default:E((()=>[c(n,null,{default:E((({Component:e})=>[(l(),h(g(e)))])),_:1})])),_:1},8,["locale"])}};L.locale("zh-cn");const z=m(q);var F;z.use(R),z.use(K),(F=z).use(P),F.use(C),z.mount("#app"),z.config.errorHandler=(e,t,o)=>{n.error(e.toString())},z.config.warnHandler=(e,t,o)=>{n.error(e)};export{x as A,S as M,V as T,M as U,T as _,e as __vite_legacy_guard,H as a,K as r,N as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./login.DWAH21He.js","./http.X-MHi8gp.js","./confirm.SDMEcIjt.js","./vendor.78mO75pL.js","../css/vendor.aiqwJsvm.css","../css/login.vqpgen1c.css","./main.DKJYFnEc.js","../css/main.EsWIdrKP.css","./page404.tiT6A80e.js","./classEdit.lcbf5iXM.js","./classHelper.5bWPDxck.js","./GroupList.htCTllnY.js","../css/GroupList.PrSzaoJo.css","./RollCall.0ZoIIMt1.js","./ContentRoller.BsjTRYIH.js","../css/ContentRoller.r1FzBYAG.css","./StudentRoller.fWfWJC3X.js","../css/StudentRoller.wfuuYtzJ.css","../css/RollCall.-e_3kXip.css","./GroupRanking.CO0MHUqc.js","../css/GroupRanking.TaEQV2S7.css","./StudentRanking.vZZkdgK1.js","./ScoreModal.lcsMCmAS.js","../css/ScoreModal.5a5HGYXV.css","../css/StudentRanking.3zsOuPhl.css","./class.xtIngfnD.js","../css/classHelper.2JtWoRLq.css","./classList.XHaTh577.js","../css/classList.xgUiqYUj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
