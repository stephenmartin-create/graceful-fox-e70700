const CACHE_NAME="cap-peche-pro-elsa-v4";
const CORE=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/elsa-ii.jpg","./assets/icon.svg","./assets/icon-192.png","./assets/icon-512.png","./assets/icon-maskable-512.png","./assets/apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);if(r.method!=="GET"||u.origin!==self.location.origin)return;e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy))}return res}).catch(()=>caches.match("./index.html"))) )});
