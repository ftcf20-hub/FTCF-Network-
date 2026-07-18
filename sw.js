const CACHE_NAME = 'ftcf-v2'; // Jab bhi koi bada update do, bas ye version number (v2 -> v3) badal dena.

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((keys) => {
        return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    }));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
