(()=>{var n="22-Feb-2021_19:58",o=["/404.html","/manifest.json","/style.css","/about/index.html","/fonts/SourceSerif4-Bold.woff2","/fonts/SourceSerif4-BoldIt.woff2","/fonts/SourceSerif4-It.woff2","/fonts/SourceSerif4-Regular.woff2","/fonts/SourceSerif4-Semibold.woff2","/icons/favicon.ico","/icons/icon-96x96.png","/icons/icon-192x192.png","/icons/social-icons.svg","/img/project-1.png","/img/project-2.png","/img/project-3.png","/img/raziq.jpg","/offline/index.html"];self.addEventListener("install",e=>{self.skipWaiting(),e.waitUntil(caches.open(n).then(t=>t.addAll(o)))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request).then(i=>i.status===404&&e.request.mode==="navigate"?caches.match("/404.html"):i)).catch(t=>{if(e.request.mode==="navigate")return caches.match("/offline/index.html");console.error(t)}))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.map(i=>{if(i!=n)return caches.delete(i)}))))});})();
