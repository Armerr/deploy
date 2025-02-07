import{d as p,I as P,_ as k,f as u,r as c,o as l,g as d,w as i,a as _,c as b,u as N,e as y,h,i as f}from"./index-C8e_Xyye.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};function O(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){B(n,o,t[o])})}return n}function B(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var m=function(e,t){var r=O({},e,t.attrs);return p(P,O({},r,{icon:j}),null)};m.displayName="UploadOutlined";m.inheritAttrs=!1;const C={key:0},G=["src"],L={__name:"test",setup(n){const e=u([]),t=u(""),r=u(!1),o=u(0),x=s=>{const a=s.type.startsWith("image/");return a||f.error("只能上传图片文件！"),a},v=()=>{if(e.value.length===0){f.warning("请先选择图片！");return}r.value=!0,o.value=0;const s=setInterval(()=>{o.value+=10,o.value>=100&&(clearInterval(s),r.value=!1,f.success("图片上传成功！"))},200)};return(s,a)=>{const g=c("a-button"),U=c("a-upload"),w=c("a-progress"),I=c("a-card");return l(),d(I,{class:"upload-page",bordered:!1},{default:i(()=>[a[4]||(a[4]=_("h1",null,"图片上传图床",-1)),p(U,{"file-list":e.value,"onUpdate:fileList":a[0]||(a[0]=V=>e.value=V),"list-type":"picture-card","before-upload":x,"custom-request":v,"show-upload-list":!1},{default:i(()=>[t.value?(l(),b("img",{key:1,src:t.value,alt:"Uploaded Image",style:{width:"100%",height:"100%","object-fit":"cover"}},null,8,G)):(l(),b("div",C,[p(g,{type:"primary"},{default:i(()=>[p(N(m)),a[1]||(a[1]=y(" 选择图片 "))]),_:1}),a[2]||(a[2]=_("p",{style:{"margin-top":"8px",color:"#666"}},"支持 JPG, PNG, GIF 格式",-1))]))]),_:1},8,["file-list"]),r.value?(l(),d(w,{key:0,percent:o.value,status:"active",style:{"margin-top":"20px"}},null,8,["percent"])):h("",!0),t.value&&!r.value?(l(),d(g,{key:1,type:"primary",style:{"margin-top":"20px"},onClick:v},{default:i(()=>a[3]||(a[3]=[y(" 上传图片 ")])),_:1})):h("",!0)]),_:1})}}},z=k(L,[["__scopeId","data-v-92b467ab"]]);export{z as default};
