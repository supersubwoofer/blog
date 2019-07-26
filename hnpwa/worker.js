importScripts("precache-manifest.38927a90a61d010c9ed0a4a216f6aa8c.js");

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

