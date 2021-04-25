'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bbfa82697c20b7fae3cd64b85eed7f74",
".git/config": "58f1c51caeb93a86cdeb90a72394039a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dc8d4fd9d73e3db3c7085615dab9c634",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4aba5fb8183222ebae1cfda1e6d2c79d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec788275fe43847512d64fcdb5f760e2",
".git/logs/refs/heads/master": "ec788275fe43847512d64fcdb5f760e2",
".git/logs/refs/remotes/origin/master": "302f5c3defcb0cdb3b3e62411f312dcf",
".git/objects/08/b11662e684757806e3622b986973b02a2129cd": "aefd8183b07073ee29fa6ff74802d7f5",
".git/objects/14/2d36f9ac457ffeee6d1828651dd696dc754f6c": "2172fe3a03892a81b345ba35ae31b5c2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/7a5592ce3e1b530cc033b410c52e476771d86b": "ba5f46ac437f1949037b0c249bbd45fb",
".git/objects/29/188deda4773e45dd57175298de448f83b668ae": "9cc87ffb7f4066997495ef17284f18c2",
".git/objects/2d/599a57ba92782015c27bd548dd633b9612e938": "f60f221b8dfcaa9fefc5a52b875413c1",
".git/objects/2e/4c9de417f8bf403417a7f77c3c65d41c60eb56": "e48873c75a8971a0d7937f1463588b83",
".git/objects/31/b02d6c50919d306408547aa316cbeecbd5d9ec": "5b4f2758915d9c501960000807373a1a",
".git/objects/33/868dbe4457369784f34a9fc133ff1e665cf36a": "e43d4126ef53bef04831a4c64ca04875",
".git/objects/3f/b8d4014f21423c63a96585f1c0866b825c8d27": "f1a809661360281a66b1a809b13f4334",
".git/objects/44/2e6fd32117bd4c52ca5857986b2f1391214c7e": "35b3abc1bfa232488b88d2e07af0ec4b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/6504b88b6be1177e112bcc0ec1a9ae085de5d9": "2e3c80632308df67e863f03b3790a04b",
".git/objects/5c/e2b69e87bb94cf3e4a091edf193552ab27b315": "86441da982cd9f40a71450d65038a9b4",
".git/objects/65/71065b73490ee8c657e757a1e06901657c0bbf": "9dbde643a51c0af3c839ee4378228559",
".git/objects/6f/562891dc5e5cb2def04e1767287a0a24115165": "7b4bc122c270819703f999d491bb3889",
".git/objects/71/6ef08cf3be006b02b90b6838944c2820e532be": "45e685a1941d3ffb54940b031aba5b97",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/895866c0612180b15200a2a5c46e9c7be5243f": "89209c363ee23b75d094641a2024838c",
".git/objects/86/052174dba6b2b1891dc7d04d5a3f2b8cb0edc8": "27c81c17f0db6cda888d213dea31b0f4",
".git/objects/86/c205190c4f4c64c929340a3649e0f20942fc9e": "f08ab770f5a9304024172e865b3aa8ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/bdaac59b5c12b338d83853feaa5f8a5d375355": "21f0fc68468a7836a91eed4abcd8b93d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/99a179ef6a15505b8d93505ec8f768a7359f6a": "a16756b5e89e5c12fda722f9cd011b4e",
".git/objects/bb/688e376d224f3f94d76dc62ea0c3e1ed4fae40": "9932b2f469dd394b0d6cc7fbb623a362",
".git/objects/bd/f3bda10414f68b7483d63280fb84451755b246": "d7c1831d4884fec2615e722f6fb7ddf7",
".git/objects/be/d1b6e5c1eb86f017972fb3a393cd5793bf2a29": "12e8b5a8e6c1b66fe6b277e7d3955493",
".git/objects/ca/832a2a8211d8b037f194995a801fac087df03a": "d3143a733e3da3c8ef3387f9e91f79b0",
".git/objects/d5/fe46e7677f5e74ac1584f2ed8ff0aa69d03e38": "24a3cfd82d8a558db4c85e98f8b91004",
".git/objects/d6/82d9f25c3f3dc71dde30160c6a799e6ade13d7": "d5f830f1f95269c97253537a828532f3",
".git/objects/d9/b4cc6888837584c2f6b7c882ac6a871c926a4c": "d9ddef0903b21274329b71c2ef6e4fe7",
".git/objects/de/719db5d032f2ae32b96d35e6deb29f49f0786f": "2259d4481cc1a5bc3c305acc763f8aa4",
".git/objects/df/1acccdaf9e5872cf5315c7315e3c9992f05271": "387a9a13aaa934475dfd43f2ad407a9b",
".git/objects/e0/69320da2cdb306feb73bd1a86e776223a26ec4": "1dca6fb69ced802f855aa2d728d65284",
".git/objects/e1/689650c01bcdd8525702e91e4e55a428ad1401": "16ffe774132c26d31d8e0dcb9dc6cd39",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/21183908663d6effc382b3a7f4c8799a492275": "ba75c74e2d22bb1505a060450ed7e0c2",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/ORIG_HEAD": "2f62238d9e41a1138c52d6339e473d5b",
".git/refs/heads/master": "edb0ca27eb64f832a9693c3df05981eb",
".git/refs/remotes/origin/master": "edb0ca27eb64f832a9693c3df05981eb",
"assets/AssetManifest.json": "e6ebf834d68af9d024976fe79e9347f7",
"assets/assets/images/alliance.png": "cb4de9728bb1d71599d11759476456c2",
"assets/assets/images/dark_portal.jpg": "370a78ff49d02786625609b8ccef18d1",
"assets/assets/images/druid.png": "fb416a75a14d271b263a4c2402423879",
"assets/assets/images/dwarf_racial_frost.jpg": "8f0314a3c93906372eccbf8b4bf4fbcb",
"assets/assets/images/dwarf_racial_gun.jpg": "a2c9d4f63546c669e2bc981bcdb81979",
"assets/assets/images/dwarf_racial_stoneform.jpg": "257c1351f5718a5d975f64eeaecfd7eb",
"assets/assets/images/dwarf_racial_treasure.jpg": "69bc2ae56e07f228c3a2fdd50fd9cacd",
"assets/assets/images/gnome_racial_arcane.jpg": "831f9626e2a3793cad260ffda82c758f",
"assets/assets/images/gnome_racial_engineering.jpg": "24b22a4fe0d779c0850154c72040d84e",
"assets/assets/images/gnome_racial_escape.jpg": "f3954249f16fad06cffba6e88da264ec",
"assets/assets/images/gnome_racial_expansive.jpg": "95f0561ea883702aa69657c776a7ca5f",
"assets/assets/images/horde.png": "6dee7bf192bf62f7dfdbc6fda9b49963",
"assets/assets/images/human_racial_diplomacy.jpg": "e4a7ce3e4b9af8ad06d64e56e7f34864",
"assets/assets/images/human_racial_mace.jpg": "bddbad292881815c2e7d8adc3082c34d",
"assets/assets/images/human_racial_perception.jpg": "7d72c1d564639c9ff7b8c9940207e5f7",
"assets/assets/images/human_racial_spirit.jpg": "d38cfc3d2204ca0c14d58ba4972670a7",
"assets/assets/images/human_racial_sword.jpg": "5b23e8c5580a0c61ac2e8b0d862c0a41",
"assets/assets/images/hunter.png": "7d47950978f23584af532132831f9131",
"assets/assets/images/mage.png": "b6b26567bf1aad014eba0d207a9b3ac2",
"assets/assets/images/nelf_racial_quickness.jpg": "9a26b4eb2b9edf68d5f1f86b18eb1e3f",
"assets/assets/images/nelf_racial_shadowmeld.jpg": "fb8e329ee495093b8fc7ade1cbf4a5f9",
"assets/assets/images/nelf_racial_wisp.jpg": "831f9626e2a3793cad260ffda82c758f",
"assets/assets/images/orc_racial_axe.jpg": "433f1703700aef0351e221534610806d",
"assets/assets/images/orc_racial_blood.jpg": "421cc76ce78841d476c40fe2960e1f4f",
"assets/assets/images/orc_racial_command.jpg": "2a6b93c763bc615e0caa53e1382a5513",
"assets/assets/images/orc_racial_hardiness.jpg": "5b2515a8e876caa48f4ddddc3e45cf4b",
"assets/assets/images/orgrimmar.jpg": "b4338eaeb35dbe9fb1a71feae1583a65",
"assets/assets/images/paladin.png": "1bf3f869aea5d2fdcef57a3b374995c9",
"assets/assets/images/priest.png": "5b016573a17298bcc653f28b33516549",
"assets/assets/images/race_dwarf_male.jpg": "3889a7ce77ea2c9e02e17d72f57a8f3e",
"assets/assets/images/race_forsaken_male.jpg": "d3e2f6e569f55c7c21780a7d36aa98b8",
"assets/assets/images/race_gnome_male.jpg": "2f6872a9d23f9f52b9370f43e11b640e",
"assets/assets/images/race_human_male.jpg": "b55047118a4596686a1e6624b86a18a3",
"assets/assets/images/race_nightelf_male.jpg": "a489f6723835250863a2f1fb4f60ce50",
"assets/assets/images/race_orc_male.jpg": "3e1d81968f536dca87e4594f212a7f9e",
"assets/assets/images/race_tauren_male.jpg": "f39858f03c8f4dc7083745cf9ff34467",
"assets/assets/images/race_troll_male.jpg": "f1475f882df4648d27511e76b4dd338c",
"assets/assets/images/rogue.png": "3814cba84cf4e326cccb55a676131a76",
"assets/assets/images/shaman.png": "02b32258da091dbd9986c7d46064e5aa",
"assets/assets/images/stormwind.jpg": "ceb2baf933b2b1fd68d97dc9251ad43c",
"assets/assets/images/tauren_racial_cultivation.jpg": "d5f311073ea5728ced788159e90ac6d2",
"assets/assets/images/tauren_racial_endurance.jpg": "262f8ea8a513a69c9277877b5567425d",
"assets/assets/images/tauren_racial_nature.jpg": "19ac9a7404478ff617f1b76131a18d9a",
"assets/assets/images/tauren_racial_war.jpg": "43876d4f957b94e61b78b99e051d7836",
"assets/assets/images/troll_racial_beast.jpg": "ddc3ded9c8408d33bd4ca07407b8409e",
"assets/assets/images/troll_racial_berserking.jpg": "f799edff66c5e3a69396eceaab87bc35",
"assets/assets/images/troll_racial_bow.jpg": "8e8bf1c3e7d57be537c77413eb620c2a",
"assets/assets/images/troll_racial_regeneration.jpg": "4830d914a4c779aeea56d5a96dd6fcd7",
"assets/assets/images/troll_racial_throwing.jpg": "792dc9ee03f7f6f484f83fe8ad9d8e63",
"assets/assets/images/undead_racial_cannibalize.jpg": "56a1571aa58e602e5094804ce732a7dd",
"assets/assets/images/undead_racial_shadow.jpg": "88878ae4dd3b5c736dca8a10ac2076b2",
"assets/assets/images/undead_racial_underwater.jpg": "96a693f89f2e7295e93412009342fb22",
"assets/assets/images/undead_racial_will.jpg": "3fe28969c0c50dbdc1b60070aa5cdea0",
"assets/assets/images/warlock.png": "52de233b5c8d55523af7f53f5a277f42",
"assets/assets/images/warrior.png": "2c849ea1aab7484a961364f8f1ba0244",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9d51c195ff3e7299fbabe108af26c61b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "564b812f0b3b7505d4650c2bfa4aa0fc",
"/": "564b812f0b3b7505d4650c2bfa4aa0fc",
"main.dart.js": "4ee6fe18b3b8d6aee36153b25c5c1b0f",
"manifest.json": "8d5dd961859766f236c492e126551e8a",
"version.json": "4a55a690afcbf1c2acd153d9aa9cc675"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
