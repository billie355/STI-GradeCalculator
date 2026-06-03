const CACHE_VERSION = 'sti-grade-calc-v2';
const CRITICAL_CACHE = CACHE_VERSION + '-critical';
const LAZY_CACHE = CACHE_VERSION + '-lazy';

// Only small, critical files — makes install instant
const CRITICAL_ASSETS = [
  './',
  './index.html',
  './target.html',
  './manifest.json'
];

// Large images — cached lazily on first request
const LAZY_ASSETS = [
  './icon.png',
  './qr.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CRITICAL_CACHE).then(cache => {
      return cache.addAll(CRITICAL_ASSETS);
    }).then(() => {
      // Cache images in background without blocking install
      caches.open(LAZY_CACHE).then(cache => cache.addAll(LAZY_ASSETS));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => !k.startsWith(CACHE_VERSION))
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    // Check critical cache first, then lazy cache, then network
    caches.match(event.request, { cacheName: CRITICAL_CACHE }).then(cached => {
      if (cached) return cached;
      return caches.match(event.request, { cacheName: LAZY_CACHE }).then(lazyCached => {
        if (lazyCached) return lazyCached;
        // Not in cache — fetch from network and store in lazy cache
        return fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const cloned = networkResponse.clone();
            caches.open(LAZY_CACHE).then(cache => cache.put(event.request, cloned));
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback
          return caches.match('./index.html');
        });
      });
    })
  );
});

