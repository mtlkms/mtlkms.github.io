if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>r(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mtlkms"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/.htaccess",revision:"c8880d1e266d442944501f6f969ede25"},{url:"/404.html",revision:"7f157303ec1855a62588e54207c7af73"},{url:"/css/app.fb731bd6.css",revision:null},{url:"/index.html",revision:"0f1c574e362b5977e8a848250ff6d48b"},{url:"/js/app.b61dc6e9.js",revision:null},{url:"/js/chunk-vendors.f42c3bfc.js",revision:null},{url:"/manifest.json",revision:"65a0c244948b9c4b3596663880fed3e7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
