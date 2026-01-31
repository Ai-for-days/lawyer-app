var CACHE_NAME = 'remain-silent-v19';
var CACHE_ASSETS = [
  './',
  'index.html',
  'css/styles.css',
  'css/print.css',
  'js/content.js',
  'js/search.js',
  'js/app.js',
  'manifest.json',
  'offline.html',
  'images/mcguire-logo.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'audio/am-i-free-to-go.m4a',
  'audio/i-do-not-consent-to-any-searches.m4a',
  'audio/i-am-exercising-my-right-to-remain-silent.m4a',
  'audio/i-want-to-speak-to-a-lawyer.m4a',
  'audio/i-do-not-wish-to-answer-questions.m4a'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(CACHE_ASSETS);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  // Network-first for app shell files (HTML, CSS, JS)
  // This ensures updates are picked up immediately when online
  // Falls back to cache when offline
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        if (response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function () {
        return caches.match(event.request)
          .then(function (cached) {
            if (cached) return cached;
            if (event.request.mode === 'navigate') {
              return caches.match('offline.html');
            }
          });
      })
  );
});
