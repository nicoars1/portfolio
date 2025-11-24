const CACHE_NAME = "staticCache";

const urlsToCache = [
    "/images/hero-headshot.webp",
    "/images/projects/aichat.webp",
    "/images/projects/podometer.webp",
    "/images/logos/css-logo.webp",
    "/images/logos/html-logo.webp",
    "/images/logos/javascript-logo.webp",
    "/images/logos/python-logo.webp"
]

self.addEventListener("install", (e) => {
    e.waitUntil (
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});