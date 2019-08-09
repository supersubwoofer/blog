importScripts("precache-manifest.27c6b5fe6af75707f532133beca7f446.js");

self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const matchCb = ({ url, event }) => {
  return (
    url.pathname === '/news' ||
    url.pathname === '/newest' ||
    url.pathname === '/show' ||
    url.pathname === '/ask' ||
    url.pathname === '/jobs' ||
    url.pathname.match(/(\/user\/*.*)/) !== null ||
    url.pathname.match(/(\/item\/*.*)/) !== null
  );
};

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');

  // Precache
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  // Request-Response Routing
  workbox.routing.registerRoute(
    matchCb,
    new workbox.strategies.NetworkFirst());

} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

