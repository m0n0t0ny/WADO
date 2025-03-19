const CACHE_NAME = "wado-v1";
const urlsToCache = [
  "/m0n0t0ny/",
  "/m0n0t0ny/index.html",
  "/m0n0t0ny/styles.css",
  "/m0n0t0ny/script.js",
  "/m0n0t0ny/splashscreen.js",
  "/m0n0t0ny/network-status.js",
  "/m0n0t0ny/img/icon-72x72.png",
  "/m0n0t0ny/img/icon-96x96.png",
  "/m0n0t0ny/img/icon-128x128.png",
  "/m0n0t0ny/img/icon-144x144.png",
  "/m0n0t0ny/img/icon-152x152.png",
  "/m0n0t0ny/img/icon-192x192.png",
  "/m0n0t0ny/img/icon-384x384.png",
  "/m0n0t0ny/img/icon-512x512.png",
  "/m0n0t0ny/manifest.json"
];

// Installazione del Service Worker e caching delle risorse
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aperta");
      return cache.addAll(urlsToCache);
    })
  );
});

// Attivazione e pulizia delle vecchie cache
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Gestione delle richieste di rete
self.addEventListener("fetch", (event) => {
  // Strategia Cache First con fallback alla rete
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - restituisce la risposta dalla cache
      if (response) {
        return response;
      }

      // Clone della richiesta poiché può essere usata solo una volta
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((response) => {
          // Controlla se la risposta è valida
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Clone della risposta poiché può essere usata solo una volta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            // Aggiungi la risposta alla cache per future richieste offline
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Fallback per richieste che falliscono (es. pagina offline)
          if (event.request.mode === "navigate") {
            return caches.match("index.html");
          }
        });
    })
  );
});
