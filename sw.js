(()=>{var i="10-Feb-2021_10:57",s=["/404.html","/manifest.json","/style.css","/about/index.html","/fonts/butler/Butler-Bold.woff2","/fonts/butler/Butler.woff2","/icons/favicon.ico","/icons/icon-96x96.png","/icons/icon-192x192.png","/icons/social-icons.svg","/img/project-1.png","/img/project-2.png","/img/project-3.png","/img/raziq.jpg","/offline/index.html"];self.addEventListener("install",t=>{self.skipWaiting(),t.waitUntil(caches.open(i).then(e=>e.addAll(s)))});self.addEventListener("fetch",t=>{t.request.mode==="navigate"&&t.respondWith(caches.match(t.request).then(e=>e||fetch(t.request).then(n=>n.status===404?caches.match("/404.html"):n)).catch(()=>caches.match("/offline/index.html")))});self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(e=>Promise.all(e.map(n=>{if(n!=i)return caches.delete(n)}))))});})();
