const ENSHI_NEXT_WEB_CACHE = "enshi-next-web-cache";

self.addEventListener("activate", function (event) {
  console.log("Service Worker активирован");
});

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(ENSHI_NEXT_WEB_CACHE).then(function (cache) {
      return cache.addAll([]);
    })
  );
});

self.addEventListener("fetch", (e) => {});
