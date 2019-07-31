importScripts("precache-manifest.bf9ae8b85d206474ac5efd7159deca36.js");

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

