"use strict";var precacheConfig=[["/bet-game/index.html","a1f4ec22f7e822407ae87c021be6fdd4"],["/bet-game/static/css/main.36fe79f9.css","36fe79f9216817712efd27a7416f67ce"],["/bet-game/static/media/bg.630a9b7c.jpg","630a9b7c38b8173aa18f2337ea326a2c"],["/bet-game/static/media/fight.bee48daf.svg","bee48dafe8c7ca5b92a33b111cd2935e"],["/bet-game/static/media/fill1.23695319.svg","23695319af37abfab90a0644a63974c2"],["/bet-game/static/media/fill2.babefdec.svg","babefdecae853d962b4099916e818ca8"],["/bet-game/static/media/head.714cd1bf.svg","714cd1bfb48a1f5d868687d9ce15afdc"],["/bet-game/static/media/history-icon.9f87f43b.svg","9f87f43b7d72fe5f880442811d91b704"],["/bet-game/static/media/icon3.bd59e801.svg","bd59e801982794a87a199157272f2c47"],["/bet-game/static/media/newgame.85905315.svg","85905315c51cc051ee4dc645774b36b2"],["/bet-game/static/media/number.7de035d0.svg","7de035d02ddfdfb08c0d78593b83a1a2"],["/bet-game/static/media/plus.3cc0ab17.svg","3cc0ab17ece3bf00b97d0e0bec1fa6ed"],["/bet-game/static/media/table.6e4dcba8.png","6e4dcba8541f0437d0975ec30d720f3a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});