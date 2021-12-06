self.addEventListener("fetch", (event) => {
  let url = new URL(event.request.url);
  let method = event.request.method;

  // any non GET request is ignored
  if (method.toLowerCase() !== "get") return;

  // If the request is for the favicons, fonts, or the built files (which are hashed in the name)
  if (
    url.pathname.startsWith("/favicons/") ||
    url.pathname.startsWith("/fonts/") ||
    url.pathname.startsWith("/build/")
  ) {
    event.respondWith(
      // we will open the assets cache
      caches.open("assets").then(async (cache) => {
        // if the request is cached we will use the cache
        let cacheResponse = await cache.match(event.request);
        if (cacheResponse) return cacheResponse;

        // if it's not cached we will run the fetch, cache it and return it
        // this way the next time this asset it's needed it will load from the cache
        let fetchResponse = await fetch(event.request);
        cache.put(event.request, fetchResponse.clone());

        return fetchResponse;
      })
    );
  }

  return;
});

// self.addEventListener("install", function (event) {
//   const offlineRequest = new Request("/offline");

//   event.waitUntil(
//     fetch(offlineRequest).then(function (response) {
//       return caches.open("offline").then(function (cache) {
//         return cache.put(offlineRequest, response);
//       });
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   // Only fall back for HTML documents.
//   var request = event.request;
//   // && request.headers.get('accept').includes('text/html')
//   if (request.method === "GET") {
//     // `fetch()` will use the cache when possible, to this examples
//     // depends on cache-busting URL parameter to avoid the cache.
//     event.respondWith(
//       fetch(request).catch(function (error) {
//         // `fetch()` throws an exception when the server is unreachable but not
//         // for valid HTTP responses, even `4xx` or `5xx` range.
//         return caches.open("offline").then(function (cache) {
//           return cache.match("offline");
//         });
//       })
//     );
//   }
//   // Any other handlers come here. Without calls to `event.respondWith()` the
//   // request will be handled without the ServiceWorker.
// });
// self.addEventListener("activate", function (event) {
//   event.waitUntil(self.clients.claim());
// });
