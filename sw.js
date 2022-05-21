self.addEventListener('install', function(e) {
  console.log('install success')
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
});
