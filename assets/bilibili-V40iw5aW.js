import{a as v}from"./axios-upsvKRUO.js";import{_ as P,k as R,e as B,B as E,q as d,o as l,c as w,a as s,p as f,z as u,d as T,C as h,D as k,E as U,F as M}from"./index-CXguRIWB.js";const $={class:"container"},q={class:"input_search"},I={class:"use-info"},O={class:"url-text"},j={class:"action-buttons"},F=["href"],z={class:"url-text"},A=["href"],G={__name:"bilibili",setup(H){const i=v.create({baseURL:"http://localhost:8989",timeout:1e4});let c=null;const e=R({activeKey:[],videoUrl:"",bgUrl:"",videoName:"",bv:"",avid:"",cid:"",p:"",downloadUrl:"",progress:0,downVideoStatus:!1}),y=B(()=>{var t;return((t=e.bgUrl)==null?void 0:t.replace(/^http:/,"https:"))||""}),S=t=>{t.ctrlKey&&t.key==="b"&&(e.videoUrl="")},r=(t,a,o,n=2)=>{M[t]({message:a,description:o,duration:n})},p=()=>{e.progress=0,e.downVideoStatus=!1,e.bgUrl="",e.downloadUrl="",c&&c.cancel()},C=()=>{p()},V=async()=>{if(!e.videoUrl)return r("error","错误","链接不能为空！"),!1;try{if(e.videoUrl.includes("https://b23.tv")){const{data:a}=await i.get("/move",{params:{url:e.videoUrl}}),n=new DOMParser().parseFromString(a,"text/html");e.videoUrl=n.querySelector('meta[itemprop="url"]').content,r("success","解析成功","手机端链接解析成功"),await new Promise(_=>setTimeout(_,1500))}const t=new URL(e.videoUrl).pathname.split("/");return e.bv=t[2],e.p=new URLSearchParams(e.videoUrl).get("p")||"",!0}catch{return r("error","解析失败","链接解析错误，请检查链接格式"),!1}},x=async()=>{var t,a;try{const{data:o}=await i.get(`/av/${e.bv}`);if(o.code!==0)throw new Error(o.message);return e.videoName=o.data.title,e.avid=o.data.aid,e.bgUrl=o.data.pic,e.cid=e.p?(t=o.data.pages[e.p-1])==null?void 0:t.cid:(a=o.data.pages[0])==null?void 0:a.cid,!0}catch{return r("error","获取失败","视频信息获取失败"),!1}},K=async()=>{try{const{data:t}=await i.get(`/download/${e.avid}/${e.cid}`);e.downloadUrl=t.data.durl[0].url,r("success","成功","视频地址获取成功"),e.activeKey=["1"]}catch{r("error","获取失败","下载地址获取失败")}},D=async()=>{try{e.downVideoStatus=!0,r("info","下载中","视频正在下载...",0),c=v.CancelToken.source();const{data:t}=await i.get(e.downloadUrl,{responseType:"blob",cancelToken:c.token,onDownloadProgress:n=>{e.progress=Math.round(n.loaded/n.total*100)}}),a=window.URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`${e.videoName}.mp4`,document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(a),document.body.removeChild(o),r("success","下载完成","视频下载成功")}catch(t){v.isCancel(t)||r("error","下载失败",t.message)}finally{p()}},L=()=>{c&&(c.cancel("用户取消下载"),r("info","已取消","下载已取消"),p())},b=async()=>{await V()&&await x()&&await K()};return E(()=>{var t;document.addEventListener("keydown",S),(t=document.querySelector("input"))==null||t.focus()}),(t,a)=>{const o=d("a-input"),n=d("a-button"),_=d("a-progress"),g=d("a-collapse-panel"),N=d("a-collapse");return l(),w("div",$,[s("div",q,[f(o,{value:e.videoUrl,"onUpdate:value":a[0]||(a[0]=m=>e.videoUrl=m),placeholder:"请输入视频链接...",onInput:C,onPressEnter:b,"allow-clear":"",class:"custom-input"},null,8,["value"]),f(n,{type:"primary",onClick:b},{default:u(()=>a[2]||(a[2]=[T(" 获取 ")])),_:1})]),s("div",I,[f(N,{activeKey:e.activeKey,"onUpdate:activeKey":a[1]||(a[1]=m=>e.activeKey=m),accordion:""},{default:u(()=>[e.downloadUrl&&e.videoUrl?(l(),h(g,{key:"1",header:"视频地址"},{default:u(()=>[s("p",O,k(e.downloadUrl),1),s("div",j,[s("a",{href:e.downloadUrl,target:"_blank"}," 预览视频 ",8,F),e.downVideoStatus?(l(),w("a",{key:1,onClick:L}," 取消下载 ")):(l(),w("a",{key:0,onClick:D}," 下载视频 ")),e.downVideoStatus?(l(),h(_,{key:2,percent:e.progress,"stroke-color":"#1296db"},null,8,["percent"])):U("",!0)])]),_:1})):U("",!0),e.bgUrl?(l(),h(g,{key:"2",header:"封面地址"},{default:u(()=>[s("p",z,k(y.value),1),s("a",{href:y.value,target:"_blank"}," 预览图片 ",8,A)]),_:1})):U("",!0)]),_:1},8,["activeKey"])])])}}},W=P(G,[["__scopeId","data-v-fe2d7e08"]]);export{W as default};
