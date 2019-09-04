---
layout: post
title:  "Implement PWA caching using workbox"
date:   2019-09-01 00:00:00
categories: PWA
---
  
## Notes on studying and implement PWA


### Web app should be accessible, responsive and Progressive


### Major benefits of PWA
- Provides similar user experience to native app
- Can be distributed without application store
- Better user adoption


### PWA implementation - the PRPL pattern
- Push critical resources for the initial URL route
- Render initial route
- Pre-cache remaining routes
- Lazy-load and create remaining routes on demand


### Experiment
Implement Hacker News reader as a PWA. Using WorkBox to precache app-shell, precache static assets and cache network response. Here is the [Demo]


### Lighthouse audits

Performance | Accessibility | Best Practices | SEO | PWA
---|---|---|---|---
100 (No Throttle) | 100 | 79 | 100 | ready
92 (Slow 4G) | 100 | 79 | 100 | ready


### Recommended reading
- [The PRPL Pattern by Addy Osmani]
- [The Offline Cookbook By Jake Archibald]

[The PRPL Pattern by Addy Osmani]: https://developers.google.com/web/fundamentals/performance/prpl-pattern/
[The Offline Cookbook By Jake Archibald]: https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
[Demo]: https://supersubwoofer.github.io/myblog/hnpwa/