(this["webpackJsonpf1-data"]=this["webpackJsonpf1-data"]||[]).push([[3],{22:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(14),r=t.n(a),i=(t(22),t(1)),s=t(8),l=t(3),u=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(12),t.e(8)]).then(t.bind(null,139))})),d=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(9)]).then(t.bind(null,137))})),f=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,140))})),h=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(14),t.e(13)]).then(t.bind(null,142))})),b=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(10)]).then(t.bind(null,143))})),g=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,141))}));var j=function(){return Object(o.useEffect)((function(){!function(){var e=new Date;e.setHours(0,0,0,0);var n=function(e){var n=new Date;return n.setDate(n.getDate()+(e+(7-n.getDay()))%7),n.setHours(0,0,0,0),n}(5),t=localStorage.getItem("nextUpdate");t||localStorage.setItem("nextUpdate",n),t&&e.getTime()>new Date(t).getTime()&&(localStorage.clear(),localStorage.setItem("nextUpdate",n),caches.keys().then((function(e){e.forEach((function(e){caches.delete(e)}))})))}()}),[]),Object(l.jsx)(o.Suspense,{fallback:null,children:Object(l.jsx)(s.a,{basename:"/",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:u}),Object(l.jsx)(i.b,{path:"/race/:season/:round",exact:!0,component:d}),Object(l.jsx)(i.b,{path:"/driver/:driverId",exact:!0,component:g}),Object(l.jsx)(i.b,{path:"/schedule",exact:!0,component:f}),Object(l.jsx)(i.b,{path:"/error",exact:!0,component:h}),Object(l.jsx)(i.b,{path:"/standings",exact:!0,component:b}),Object(l.jsx)(i.b,{component:h})]})})})},p=function(e){e&&e instanceof Function&&t.e(15).then(t.bind(null,136)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),o(e),c(e),a(e),r(e)}))},v=(t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(j,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/f1-data",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/f1-data","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),p()}},[[29,4,6]]]);
//# sourceMappingURL=main.e9dfbda8.chunk.js.map