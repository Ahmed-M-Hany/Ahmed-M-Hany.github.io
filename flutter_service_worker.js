'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72985ef164177fb6be3f8cdb2606a084",
".git/config": "f6ba7d8e0ad85e74763a4b64034992a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c36ddb58535961a11be106694f48b622",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6164030fcf93ddb62209e44a1abb20c",
".git/logs/refs/heads/main": "6ad83fc01da34c87b34bfe749e71404f",
".git/logs/refs/remotes/origin/main": "1943dd9f079ed6bca09cdae398e167a6",
".git/objects/01/7da416760e6932c90080b1f8af611c3d0665ff": "8961927ef553e028888994c168a73221",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/cb9504f80724bc4eb4c3ea5b24b107626ca2ca": "ed3be977ab8ffc62869aae7ac69338d3",
".git/objects/0c/3b566fdfc9001c7006e395d87e05c03b22a719": "4870d74ae9bd78c596532f9ed91b0194",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/d341b7ea589ae16b9770cfbf540f5f4f7c697c": "178d212f5960964ac7ff95c30a898c77",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/70b3a974f9f9020bbcbeff5dd5c3b74954e33a": "0135d8ea7f7a50f747c381154301fb92",
".git/objects/13/0e7bf4704ee5c764c84cfcc94ef30b3f3c5d4a": "a3c628656cf9c3228346cd43cfe2531a",
".git/objects/18/99fb66fcc2a335d7f14d41f77a5fd65ec62e34": "daa9d68bd1327b5b9a6c64435bbab021",
".git/objects/1a/7810b5a7c8c759fbbe133180b5c883174e7197": "c5b64372b413e77b2d191bd159aa9c34",
".git/objects/1d/35dc9d26753322a40c2c76d3c621f00bcd2520": "a0afda818eba070ee6a5120df71b3c2c",
".git/objects/1d/cde4b2bd1916401d240b6bc48a6617c9f67472": "3409fe6aebf02ad1629a2920d8229767",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5957140b3e9e17af07ce3269070d0d274f9b44": "69eca3150c522856a42f284db54c21c3",
".git/objects/25/31d67b51c93b17a0c48253c91aee7830c5f8e5": "083adedab6b84a8a8aba177758ceaf8f",
".git/objects/28/39724a058865b2c5a5a59ccf5b105df7e46b6c": "a0815f8c1037becbfc4ec0cb0df8f2cb",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/9f3e0853c950f5183912be6a7c122c6a4028dc": "9ee3e313d61e18c38abb267a13c635c6",
".git/objects/35/29742e4f9ba5dfc767448d116a740cc7c12448": "d960505489868d2f5bd3705310f50c2e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/ab8b7e81587160ae6dd6f289cd2cfb210f6a8a": "0d8f4a51e935f9f634758556af38dad5",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/fbb3a4775d0630dcba5f7fbf05f6ab70a7b372": "92c5751f01d0606b34973c167feac630",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/09c2b653eaa7973491af34d2eebb927cf0f48c": "8164ec1ab5256e96718d83a2b4e72112",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/6e/68a85ebeef76531b87564f70f19066d20672c1": "3ac5aacdd7d18f0f6e3f6418f057aa2b",
".git/objects/71/0b00c882ad71782f2dbd0d2dfe7e8ef204a1f4": "bcda3e0ce2112453dcf97e5cd6b70197",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/76/6990c3fca946e3411a5b7ad12f74c52733f157": "0af37ddf14fd6beacfb1021da9c3ca1c",
".git/objects/77/4b4cb29d90972698b014d46ea999ef6d5752be": "c24210eb5588ead5d412d1ff3d76f949",
".git/objects/79/14a955aab330f66b513ef45ae75bb92a22d16a": "2807e98355f263742d6027be6eb0fea2",
".git/objects/83/44dd8f2dc9c220b62f809dadcad5cc6dff5cff": "6228e3eb24eb584043d0a159a027f9c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b9ddcb7b147c58537d4d4f72113495f072b242": "9ec6b9e86c66134fef9f2868c829b794",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/18191dd56f9681a8bcce81538c7baf4004551b": "fdc9dfe2ff444d65a3e873779e40202e",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/15f88804f578df01123df2ca45907a82325c4a": "3a74d28f8b8f73d3b344e1012137f656",
".git/objects/99/29b70aada8aece9a8c33c66f54eaca0167c8ef": "17f68007f805ea1a75f90ec4a8349fa2",
".git/objects/9a/f6f903fd26521054ed1668589491701377c20b": "f1ee9399b9b474a4065079d43f6fdbe9",
".git/objects/a6/ac4474ccb382d88e60a0b698625bb9af8a20de": "f66964abddbc4e435c6cbd9239b9c553",
".git/objects/a6/cdbf2a93f897235fe01944fc353fffb4baac9e": "98d4d6fb3bc622b335f941a165b8046f",
".git/objects/ac/478f095cdf697c4c8504154a9700075cd5ded9": "6c6615fff7f2c254e0b5d490a68abc90",
".git/objects/b6/a8eed39faf63c40a200533f354cf764c76b456": "b833110687f5e0157f7db8ca18d86b84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/fe8238311e370f6286921b45a4d4be6d2dcf07": "2e68795ef39d7e50429278af0c1c9066",
".git/objects/c3/b8ceefce3b1b442d0db182c280894e12012702": "f86568ac7da433263974be5b16556b4e",
".git/objects/c7/3750ec4160cf8d63ebef0b9c7b9b41d7be93a8": "049d40e3477d8ca7d7cd1e9ad169c0e7",
".git/objects/cb/43596973d7ccd2e246ceeb5c7b3eaad6840ab2": "d7144db981f37906194e5b8f912c4c56",
".git/objects/cc/077b8a58510b63c62eafe5d5f598280e0d350b": "c904a233ba24327118760b7ee3b64f8f",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d1/42ef51853d8bc35b4441cce60021a098388bd8": "3b88e2499ba6539520279bdd0e487e4a",
".git/objects/d2/8b969f72b0f7b802adebc41136bd6212a2c40f": "1cb72467725238b97cff6000352ea4ed",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d4/8a92a7ba81e63d44d1108a93e1b5249afb1ce4": "ea4ddf199bc099ec8e4a47ce7c15b5c0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/40df01aed357bc3cfe7df75b0d25c079c7b666": "acc8612638066d6a77bab2fcb6271e0a",
".git/objects/df/efae01e4572608f208e109bbe5d2f54c570555": "be4ac1b12fae07b4aca7b1337f37d2cb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/06f9ede3af4bcbb89c22b3b8bc18a9cff5ddc5": "83c7c1706237a0f75c2938a6b8891360",
".git/objects/eb/223d18a7fda80b8d666addad4479f52e9c6f0f": "566e922f27cbfc8b9c1986a78bff7c03",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6588f80f47b5c086295118e7e2991c5c6b6fd6": "a0a87fe30570c9589f0f019aafad6513",
".git/objects/f1/439dac0bd3f3077bca66d271ca3595a8397d5b": "41ae0d9b4e14f3dce72192b392628b89",
".git/objects/f7/7bdf6f9ea0e3dd6998932e538744dcea32c21c": "b41516bbaec6e5ec64ce7236ba62ce82",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "911714536f8f1fe03ddb916bb010e0a3",
".git/refs/remotes/origin/main": "911714536f8f1fe03ddb916bb010e0a3",
"assets/AssetManifest.bin": "563a467cdadb0ca828bcaecbe09ac6a2",
"assets/AssetManifest.bin.json": "f4e95ae0dc8c80c759910c96a148f172",
"assets/AssetManifest.json": "b41ba6d01ecad0a5086d149de41e8e12",
"assets/assets/fonts/next_art/NEXT%2520ART_Bold.otf": "f43f81bc0274d5a85e658dea1bae60b8",
"assets/assets/images/api.png": "18912f2565fc64e20a917f377c4d2b65",
"assets/assets/images/architecture.png": "4397bdc1dcd3732de04cd37aa32e1ca8",
"assets/assets/images/BookStore.jpg": "29609c25bf9741570d3d93aa671df43f",
"assets/assets/images/Chat.jpg": "bd1eb91d6c96e7f0e61f2796e2338601",
"assets/assets/images/clima.jpeg": "2f1c7cac03be582c0bb79d617d594558",
"assets/assets/images/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/images/Deraya.jpg": "3ff7278f28ad9278f054e5cf9a7cacb3",
"assets/assets/images/figma.png": "497f287338586c39043b6a206cf24338",
"assets/assets/images/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/images/logo.webp": "fdb6992713aca30abf6ab882b5bf4559",
"assets/assets/images/protfolioImage.png": "106461b95e9fc4488af680b92aa7c747",
"assets/assets/images/responsive.png": "eeb7e40c01c2f46cf489571643177ac9",
"assets/assets/images/VCare.PNG": "b44c24953d32ac3bf975f791e82d0e94",
"assets/FontManifest.json": "a132e00675522731ee6c73b154ec8e02",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "fcdf8c0f80a8e968026b152b77968aae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "198566f48efa83dd8c976104c8ccb780",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0252e658662a745f587911e54090e72",
"/": "e0252e658662a745f587911e54090e72",
"main.dart.js": "9b2eb529103dc0e338099fd063d52246",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
