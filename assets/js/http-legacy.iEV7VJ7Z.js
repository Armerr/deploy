System.register(["./confirm-legacy.CLx2yaOG.js","./vendor-legacy.HbJu6SwD.js","./index-legacy.VhLYwjkb.js"],(function(e,n){"use strict";var t,r,o,i,s,u,a,l,c;return{setters:[function(e){t=e.r,r=e.c},function(e){o=e.m,i=e.a1,s=e.J},function(e){u=e.s,a=e.T,l=e.A,c=e.U}],execute:function(){var n={login:function(){t.push("/login")}};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},g=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=g.responseType,h=g.headers,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.create({responseEncoding:"utf8",timeout:a,withCredentials:!0});return t.interceptors.request.use((function(e){var n,t,r=null!==(n=u.get(l))&&void 0!==n?n:"",o=null!==(t=u.get(c))&&void 0!==t?t:"";return r&&(e.headers.Authorization="Bearer ".concat(r)),o&&(e.params.userId=o),Promise.resolve(e)}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(t){var o;if(i.isCancel(t))return Promise.reject(t);var s=null!==(o=t.response)&&void 0!==o?o:{};return 403===s.status?(r.pop("请重新登录","错误",{okText:"去登录"}).then((function(){n.login()})),Promise.reject(t)):401===s.status?(r.pop("".concat(s.data.message),"错误"),Promise.reject(t)):(e.silent||r.pop("网络异常，请联系开发处理","错误"),Promise.reject(t))})),t}(g);return new Promise((function(n,i){m.request({url:"/api".concat(e),method:d,params:null!=f?f:{},data:g.useFormUrlEncoded?s.stringify(null!=p?p:{}):null!=p?p:{},headers:null!=h?h:{},responseType:null!=v?v:"json"}).then((function(e){if("arraybuffer"!==v){var s=e.data;if(!s.status)return 401===s.errorCode?(u.clearStaff(),void r.pop("认证信息过期，请重新登录","错误",{popType:"error"}).then((function(){t.replace("/login")}))):void(g.customError?i(s):(o.error(s.error),i()));n(s.data)}else n(e)}),(function(e){i(e)}))}))}function f(e){return d(e,"post",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},arguments.length>3&&void 0!==arguments[3]?arguments[3]:{})}e("h",{get:function(e){return d(e,"get",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},post:f,upload:function(e){return f("/yanxue/file/b/upload",{},e,{headers:{"Content-Type":"multipart/form-data"},silent:!0})}})}}}));
