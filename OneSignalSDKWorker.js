importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Force cache bypass pour index.html
self.addEventListener('fetch', function(event) {
  var url = event.request.url;
  if (url.includes('index.html') || url.endsWith('/') || url.includes('liosandri.github.io/')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(function() {
          return caches.match(event.request);
        })
    );
  }
});
