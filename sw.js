const CACHE_NAME = 'ftcf-v2'; // Jab bhi update karna ho, bas v2 ko v3 kar dein

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Purane service worker ko foran hataye
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache); // Purana sara data delete
                    }
                })
            );
        })
    );
});
