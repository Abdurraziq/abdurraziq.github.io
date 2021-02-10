const CACHE_NAME       = '{{  now.Format "02-Jan-2006_15:04" }}';
const FILES_TO_CHACHED = [
    "/404.html",
    "/manifest.json",
    "/style.css",
    "/about/",
    "/fonts/butler/Butler-Bold.woff2",
    "/fonts/butler/Butler.woff2",
    "/icons/favicon.ico",
    "/icons/icon-96x96.png",
    "/icons/icon-192x192.png",
    "/icons/social-icons.svg",
    "/img/project-1.png",
    "/img/project-2.png",
    "/img/project-3.png",
    "/img/raziq.jpg",
    "/offline/index.html",
];

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CHACHED))
    );
});

/* Async version */
// self.addEventListener("install", (event) => {
//     self.skipWaiting();
//     event.waitUntil(
//         (async () => {
//             const cache = await caches.open(CACHE_NAME);
//             await cache.addAll(FILES_TO_CHACHED);
//         })()
//     );
// });

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(
            caches
                .match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then((response) => {
                        if (response.status === 404) {
                            return caches.match("/404.html");
                        }
                        return response;
                    });
                })
                .catch(() => caches.match("/offline/index.html"))
        );
    }
});

/* Async version */
// self.addEventListener("fetch", (event) => {
//     if (event.request.mode === "navigate") {
//         event.respondWith(
//             (async () => {
//                 try {
//                     const chaceResponse = await caches.match(event.request);
//                     if (chaceResponse) {
//                         return chaceResponse;
//                     }

//                     const networkResponse = await fetch(event.request);
//                     if (networkResponse.status === 404) {
//                         return await caches.match("/404.html");
//                     }
//                     return networkResponse;
//                 } catch (e) {
//                     return await caches.match("/offline/index.html");
//                 }
//             })()
//         );
//     }
// });

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName != CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});

/* Async version */
// self.addEventListener("activate", (event) => {
//     event.waitUntil(
//         (async () => {
//             const cacheNames = await caches.keys();
//             cacheNames.map((cacheName) => {
//                 if (cacheName !== CACHE_NAME) {
//                     return caches.delete(cacheName);
//                 }
//             });
//         })()
//     );
// });
