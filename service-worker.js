const CACHE_NAME = 'whatsapp-direct-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './splashscreen.js',
  './network-status.js',
  './icon-72x72.png',
  './icon-96x96.png',
  './icon-128x128.png',
  './icon-144x144.png',
  './icon-152x152.png',
  './icon-192x192.png',
  './icon-384x384.png',
  './icon-512x512.png',
  './manifest.json'
];

// Installazione del Service Worker e caching delle risorse
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Attivazione e pulizia delle vecchie cache
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Gestione delle richieste di rete
self.addEventListener('fetch', event => {
  // Strategia Cache First con fallback alla rete
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - restituisce la risposta dalla cache
        if (response) {
          return response;
        }
        
        // Clone della richiesta poiché può essere usata solo una volta
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Controlla se la risposta è valida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone della risposta poiché può essere usata solo una volta
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Aggiungi la risposta alla cache per future richieste offline
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // Fallback per richieste che falliscono (es. pagina offline)
            if (event.request.mode === 'navigate') {
              return caches.match('index.html');
            }
          });
      })
  );
});