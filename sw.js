/* Service worker : garde une copie de l'app sur le téléphone
   pour qu'elle s'ouvre même sans réseau (en pleine savane !).
   Change le numéro de VERSION à chaque mise à jour de l'app. */
const VERSION = "safaridex-v14";
const FILES = ["./", "index.html", "especes.js", "dedicace.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "icones/aigle.png",
  "icones/antilope.png",
  "icones/autruche.png",
  "icones/babouin.png",
  "icones/baleine.png",
  "icones/buffle.png",
  "icones/calao.png",
  "icones/cameleon.png",
  "icones/canard.png",
  "icones/chacal.png",
  "icones/chat-sauvage.png",
  "icones/chauve-souris.png",
  "icones/crocodile.png",
  "icones/dauphin.png",
  "icones/ecureuil.png",
  "icones/elephant.png",
  "icones/flamant.png",
  "icones/girafe.png",
  "icones/gnou.png",
  "icones/goeland.png",
  "icones/grenouille.png",
  "icones/guepard.png",
  "icones/herisson.png",
  "icones/heron.png",
  "icones/hibou.png",
  "icones/hippocampe.png",
  "icones/hippopotame.png",
  "icones/hyene.png",
  "icones/leopard.png",
  "icones/lezard.png",
  "icones/lievre.png",
  "icones/lion.png",
  "icones/manchot.png",
  "icones/mouette.png",
  "icones/oiseau.png",
  "icones/otarie.png",
  "icones/pangolin.png",
  "icones/pelican.png",
  "icones/perroquet.png",
  "icones/perruche.png",
  "icones/phacochere.png",
  "icones/poisson.png",
  "icones/porc-epic.png",
  "icones/raie.png",
  "icones/requin.png",
  "icones/rhinoceros.png",
  "icones/serpent.png",
  "icones/singe.png",
  "icones/suricate.png",
  "icones/tortue-de-mer.png",
  "icones/tortue.png",
  "icones/vautour.png",
  "icones/zebre.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});

/* Réseau d'abord (pour avoir la dernière version), copie locale si pas de réseau.
   « no-cache » oblige à redemander au serveur s'il y a du nouveau, au lieu de
   réutiliser pendant 10 minutes la copie gardée par GitHub Pages. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const sameSite = new URL(e.request.url).origin === self.location.origin;
  const req = sameSite ? new Request(e.request.url, { cache: "no-cache", credentials: "same-origin" }) : e.request;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
