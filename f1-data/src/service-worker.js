import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

const CACHE_NAME = "f1-data";
const CACHE_URLS = ["/", "/f1-data", "/schedule", "/standings"];

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cachedResponse = await cache.match(req);
    return cachedResponse;
  }
}

window.self.addEventListener("install", async (event) => {
  const cache = await caches.open(CACHE_NAME);
  try {
    await cache.addAll(CACHE_URLS);
  } catch (e) {
    console.log(e);
  }
});

window.self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(networkFirst(req));
});

clientsClaim();

precacheAndRoute(window.self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(({ request, url }) => {
  if (request.mode !== "navigate") {
    return false;
  }

  if (url.pathname.startsWith("/_")) {
    return false;
  }

  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }

  return true;
}, createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"));

registerRoute(
  ({ url }) => url.origin === window.self.location.origin && url.pathname.endsWith(".png"),
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

window.self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    window.self.skipWaiting();
  }
});
