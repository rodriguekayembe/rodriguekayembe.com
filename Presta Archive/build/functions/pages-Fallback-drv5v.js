var ee=Object.create;var y=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ne=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var O=e=>y(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),F=(e,r)=>{O(e);for(var t in r)y(e,t,{get:r[t],enumerable:!0})},se=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of te(r))!ae.call(e,n)&&n!=="default"&&y(e,n,{get:()=>r[n],enumerable:!(t=re(r,n))||t.enumerable});return e},x=e=>se(O(y(e!=null?ee(ne(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var w=u((Te,j)=>{"use strict";j.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`)});var A=u((ve,P)=>{"use strict";var S="%[a-f0-9]{2}",C=new RegExp("("+S+")|([^%]+?)","gi"),E=new RegExp("("+S+")+","gi");function p(e,r){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(e.length===1)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],p(t),p(n))}function ce(e){try{return decodeURIComponent(e)}catch(n){for(var r=e.match(C)||[],t=1;t<r.length;t++)e=p(r,t).join(""),r=e.match(C)||[];return e}}function ie(e){for(var r={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=E.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch(i){var n=ce(t[0]);n!==t[0]&&(r[t[0]]=n)}t=E.exec(e)}r["%C2"]="\uFFFD";for(var a=Object.keys(r),c=0;c<a.length;c++){var s=a[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}P.exports=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return ie(e)}}});var H=u((ze,q)=>{"use strict";q.exports=(e,r)=>{if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[e];let t=e.indexOf(r);return t===-1?[e]:[e.slice(0,t),e.slice(t+r.length)]}});var k=u((Je,N)=>{"use strict";N.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),c=0;c<n.length;c++){var s=n[c],i=e[s];(a?r.indexOf(s)!==-1:r(s,i,e))&&(t[s]=i)}return t}});var M=u(f=>{"use strict";var oe=w(),fe=A(),U=H(),ue=k(),le=e=>e==null;function de(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{let a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[",a,"]"].join("")]:[...t,[o(r,e),"[",o(a,e),"]=",o(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[]"].join("")]:[...t,[o(r,e),"[]=",o(n,e)].join("")];case"comma":case"separator":return r=>(t,n)=>n==null||n.length===0?t:t.length===0?[[o(r,e),"=",o(n,e)].join("")]:[[t,o(n,e)].join(e.arrayFormatSeparator)];default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,o(r,e)]:[...t,[o(r,e),"=",o(n,e)].join("")]}}function me(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"comma":case"separator":return(t,n,a)=>{let c=typeof n=="string"&&n.includes(e.arrayFormatSeparator),s=typeof n=="string"&&!c&&l(n,e).includes(e.arrayFormatSeparator);n=s?l(n,e):n;let i=c||s?n.split(e.arrayFormatSeparator).map(d=>l(d,e)):n===null?n:l(n,e);a[t]=i};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[].concat(a[t],n)}}}function I(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,r){return r.encode?r.strict?oe(e):encodeURIComponent(e):e}function l(e,r){return r.decode?fe(e):e}function V(e){return Array.isArray(e)?e.sort():typeof e=="object"?V(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function $(e){let r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function ye(e){let r="",t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function R(e){e=$(e);let r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function B(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function D(e,r){r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r),I(r.arrayFormatSeparator);let t=me(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(let a of e.split("&")){if(a==="")continue;let[c,s]=U(r.decode?a.replace(/\+/g," "):a,"=");s=s===void 0?null:["comma","separator"].includes(r.arrayFormat)?s:l(s,r),t(l(c,r),s,n)}for(let a of Object.keys(n)){let c=n[a];if(typeof c=="object"&&c!==null)for(let s of Object.keys(c))c[s]=B(c[s],r);else n[a]=B(c,r)}return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,c)=>{let s=n[c];return Boolean(s)&&typeof s=="object"&&!Array.isArray(s)?a[c]=V(s):a[c]=s,a},Object.create(null))}f.extract=R;f.parse=D;f.stringify=(e,r)=>{if(!e)return"";r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r),I(r.arrayFormatSeparator);let t=s=>r.skipNull&&le(e[s])||r.skipEmptyString&&e[s]==="",n=de(r),a={};for(let s of Object.keys(e))t(s)||(a[s]=e[s]);let c=Object.keys(a);return r.sort!==!1&&c.sort(r.sort),c.map(s=>{let i=e[s];return i===void 0?"":i===null?o(s,r):Array.isArray(i)?i.reduce(n(s),[]).join("&"):o(s,r)+"="+o(i,r)}).filter(s=>s.length>0).join("&")};f.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);let[t,n]=U(e,"#");return Object.assign({url:t.split("?")[0]||"",query:D(R(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,r)}:{})};f.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);let t=$(e.url).split("?")[0]||"",n=f.extract(e.url),a=f.parse(n,{sort:!1}),c=Object.assign(a,e.query),s=f.stringify(c,r);s&&(s=`?${s}`);let i=ye(e.url);return e.fragmentIdentifier&&(i=`#${o(e.fragmentIdentifier,r)}`),`${t}${s}${i}`};f.pick=(e,r,t)=>{t=Object.assign({parseFragmentIdentifier:!0},t);let{url:n,query:a,fragmentIdentifier:c}=f.parseUrl(e,t);return f.stringifyUrl({url:n,query:ue(a,r),fragmentIdentifier:c},t)};f.exclude=(e,r,t)=>{let n=Array.isArray(r)?a=>!r.includes(a):(a,c)=>!r(a,c);return f.pick(e,n,t)}});var L=u((Ke,Q)=>{Q.exports=function(e,r){if(e instanceof RegExp)return{keys:!1,pattern:e};var t,n,a,c,s=[],i="",d=e.split("/");for(d[0]||d.shift();a=d.shift();)t=a[0],t==="*"?(s.push("wild"),i+="/(.*)"):t===":"?(n=a.indexOf("?",1),c=a.indexOf(".",1),s.push(a.substring(1,~n?n:~c?c:a.length)),i+=!!~n&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(i+=(~n?"?":"")+"\\"+a.substring(c))):i+="/"+a;return{keys:s,pattern:new RegExp("^"+i+(r?"(?=$|/)":"/?$"),"i")}}});var X=u(K=>{var pe=Object.create,m=Object.defineProperty,ge=Object.defineProperties,he=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,Fe=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,v=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,je=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&v(e,t,r[t]);if(_)for(var t of _(r))xe.call(r,t)&&v(e,t,r[t]);return e},we=(e,r)=>ge(e,be(r)),z=e=>m(e,"__esModule",{value:!0}),Se=(e,r)=>{z(e);for(var t in r)m(e,t,{get:r[t],enumerable:!0})},Ce=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Oe(r))!T.call(e,n)&&n!=="default"&&m(e,n,{get:()=>r[n],enumerable:!(t=he(r,n))||t.enumerable});return e},J=e=>Ce(z(m(e!=null?pe(Fe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);Se(K,{wrapHandler:()=>Re});var Ee=J(M());function Pe(e){let r=(0,Ee.parse)(e,{arrayFormat:"comma"}),t={},n={};for(let a of Object.keys(r)){let c=r[a];Array.isArray(c)?n[a]=c:c&&(t[a]=c)}return{queryStringParameters:t,multiValueQueryStringParameters:n}}var Ae=/image|audio|video|application\/pdf|application\/zip|applicaton\/octet-stream/i;function qe(e){return Boolean(e)&&Ae.test(e)}function He(e){var r,t;let n=e.rawQuery||e.path.split("?")[1],{queryStringParameters:a,multiValueQueryStringParameters:c}=Pe(n),s=(t=e.isBase64Encoded)!=null?t:qe(((r=e==null?void 0:e.headers)==null?void 0:r["content-type"])||"");return{rawUrl:e.rawUrl||e.path,rawQuery:n,path:e.path,httpMethod:e.httpMethod||"GET",headers:e.headers||{},multiValueHeaders:e.multiValueHeaders||{},queryStringParameters:e.queryStringParameters||a,multiValueQueryStringParameters:e.multiValueQueryStringParameters||c,pathParameters:e.pathParameters||{},body:e.body||null,isBase64Encoded:s!=null?s:!1,requestContext:e.requestContext||{},resource:e.resource||""}}var Ne=J(L());function ke(e,r){let[t]=e.split("?"),n=(0,Ne.default)(r),a=0,c={},s=n.pattern.exec(t)||[];for(;a<n.keys.length;)c[n.keys[a]]=s[++a];return c}function G(e){for(let r of Object.keys(e))e[r.toLowerCase()]=e[r]||"";return e}var g;(function(e){e.Html="text/html; charset=utf-8",e.Json="application/json; charset=utf-8",e.Xml="application/xml; charset=utf-8"})(g||(g={}));function Ue(e){return typeof e=="object"?JSON.stringify(e):e}function Ie(e,r){let t=r.statusCode||200,n=r.headers?G(r.headers):{};return t>299&&t<399||(n["content-type"]=e),{isBase64Encoded:r.isBase64Encoded||!1,statusCode:t,headers:n,multiValueHeaders:r.multiValueHeaders?G(r.multiValueHeaders):{},body:Ue(r.body||"")}}function Ve(e){return Ie(g.Html,e)}function $e(e){return typeof e=="string"?Ve({body:e}):we(je({},e),{statusCode:e.statusCode||200})}function Re(e){return async(r,t)=>{let n=He(r);return Object.keys(n.pathParameters||{}).length||(n.pathParameters=ke(r.path,e.route)),$e(await e.handler(n,t))}}});F(exports,{config:()=>Qe,handler:()=>Le,route:()=>Me});var Z=x(X());var h={};F(h,{handler:()=>De,route:()=>Be});var Y=x(require("@presta/html"));function W({title:e="Rorigue Kayembe",link:r=[],script:t=[]}={}){return{title:e,link:[{href:"/favicon.png",rel:"icon",type:"image/png"},{href:"https://unpkg.com/svbstrate@5.1.0",rel:"stylesheet"},{href:"/style.css",rel:"stylesheet"},`<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">`,...r],script:t}}var Be="*";async function De(){return{statusCode:404,html:(0,Y.html)({head:W(),body:`
      <div class='p10'>
      </div>
    `})}}var b=Object.assign({config:{}},h),Me=b.route,Qe=b.config,Le=(0,Z.wrapHandler)(b);0&&(module.exports={config,handler,route});