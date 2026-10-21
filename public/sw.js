// ============================================================
// Service Worker — Full Offline Support for Rajvardhan's Portfolio
// ============================================================

const CACHE_NAME = 'raj-portfolio-v1';

// Static routes and assets to precache on first load
const PRECACHE_ASSETS = [
  '/',
  '/about',
  '/privacy',
  '/terms',
  '/404',
  '/projects/devops-accelerator',
  '/projects/aws-ec2-s3-static-hosting',
  '/projects/personal-private-cloud',
  '/projects/iac-cicd-pipeline',
  '/projects/secureexam-platform',
  '/projects/thikana-dhabla-ghosi',
  '/projects/bettergrowth-solutions',
  '/projects/deep-architects-admin-panel',
  '/logo.png',
  '/rajcv.pdf',
  '/llms.txt',
  '/humans.txt',
];

// ----- INSTALL: Precache all site pages & assets -----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.warn('[ServiceWorker] Precache partial error (ignored):', err);
      })
  );
});

// ----- ACTIVATE: Clear outdated caches and claim clients -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// ----- FETCH: Cache-First with Stale-While-Revalidate -----
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip browser-extension or non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If in cache, return cached response immediately AND revalidate in background
      if (cachedResponse) {
        // Background fetch to update cache if online
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
          })
          .catch(() => {
            // Offline - ignore background fetch error
          });

        return cachedResponse;
      }

      // 2. Not in cache: fetch from network, then cache response
      return fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type !== 'opaque'
          ) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // 3. Network failed & not in cache (device is offline)
          // If HTML navigation request, return cached root or 404
          if (
            event.request.headers.get('accept') &&
            event.request.headers.get('accept').includes('text/html')
          ) {
            return (
              caches.match(event.request) ||
              caches.match('/') ||
              caches.match('/404')
            );
          }

          // If PDF requested offline, return cached CV
          if (url.pathname.endsWith('.pdf')) {
            return caches.match('/rajcv.pdf');
          }

          return new Response('Offline: Content cached when online.', {
            status: 503,
            statusText: 'Service Unavailable (Offline)',
          });
        });
    })
  );
});
