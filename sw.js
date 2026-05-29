const CACHE='money-match-v2';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/coin_1.png','./assets/coin_5.png','./assets/coin_10.png','./assets/coin_50.png','./assets/coin_100.png','./assets/coin_500.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
