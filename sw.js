/* Service worker : garde une copie de l'app sur le téléphone
   pour qu'elle s'ouvre même sans réseau (en pleine savane !).
   Change le numéro de VERSION à chaque mise à jour de l'app. */
const VERSION = "safaridex-v3";
const FILES = ["./", "index.html", "especes.js", "dedicace.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});

/* Réseau d'abord (pour avoir la dernière version), copie locale si pas de réseau */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
