self.addEventListener('install', function(e) {
  console.log('install success')
});

// self.addEventListener('fetch', function(e) {
//   // console.log(e.request.url);
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});