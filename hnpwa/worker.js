importScripts("precache-manifest.a0803d80e317dbfa0d3336722ac77b04.js");

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

