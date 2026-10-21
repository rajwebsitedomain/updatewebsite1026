// ============================================================
// Service Worker — Full Offline Support for Rajvardhan's Portfolio
// ============================================================

const CACHE_NAME = 'raj-portfolio-v2';

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
  '/tracker.js',
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

// ----- FETCH -----
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip browser-extension or non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  // 1. For HTML navigations: Network-first with cache fallback
  const isNav = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  if (isNav) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            return cached || caches.match('/') || caches.match('/404');
          });
        })
    );
    return;
  }

  // 2. For static assets: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

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
