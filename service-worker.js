/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b562ad4e234fc75d1b2b85642eb52bf"
  },
  {
    "url": "about/index.html",
    "revision": "ecc79e23b5edf55b762aca84acceee75"
  },
  {
    "url": "assets/css/0.styles.34f4bb25.css",
    "revision": "c6966b15dad927697185098cbecef488"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2bf2ed4.js",
    "revision": "499bb6f4128e8dd456212e05dfa9c352"
  },
  {
    "url": "assets/js/11.6481f156.js",
    "revision": "ba6648189c848f7f2fbd1078b30ca31d"
  },
  {
    "url": "assets/js/12.236e64b5.js",
    "revision": "786b947f4f690f644e44a0435ad2e8a7"
  },
  {
    "url": "assets/js/13.ef92eee8.js",
    "revision": "bef20ac054173dfdee81371a5cefbfe1"
  },
  {
    "url": "assets/js/14.be3959dd.js",
    "revision": "472f4c68e1f422a496249e3a1e0d7b84"
  },
  {
    "url": "assets/js/15.8c3dd003.js",
    "revision": "6215f5e55b214b9404d6cfb0545a83bf"
  },
  {
    "url": "assets/js/16.7e067e1b.js",
    "revision": "7b020a9a53543009606c065c6c38228b"
  },
  {
    "url": "assets/js/2.e776d03e.js",
    "revision": "f6d5af33ea7d2a815069efc2df39c92f"
  },
  {
    "url": "assets/js/3.a3e5992f.js",
    "revision": "e7ef0d06243555378e899b6814badfad"
  },
  {
    "url": "assets/js/4.2d2ba6e8.js",
    "revision": "c98687de0c1cfd8aa0563a0b69c3e75f"
  },
  {
    "url": "assets/js/5.a3d56ef7.js",
    "revision": "e9d826c0afb59ebb0b23e1526da0c5ef"
  },
  {
    "url": "assets/js/6.96cc8b4c.js",
    "revision": "f0468f45f1cfe211ffd42a0dfc852ff1"
  },
  {
    "url": "assets/js/7.1135deb3.js",
    "revision": "cc9a13aaddce9ba722411f22096b960d"
  },
  {
    "url": "assets/js/8.69b8d2af.js",
    "revision": "72237072a3faa72dac8ea0dff8594d35"
  },
  {
    "url": "assets/js/9.a1f8e12d.js",
    "revision": "784b1a4800a468d7f44c03080196007d"
  },
  {
    "url": "assets/js/app.060b6498.js",
    "revision": "e010a4dd92104af726a55b12921f2b8f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img/1.jpg",
    "revision": "d174539490ef5c935208e9ca6050db52"
  },
  {
    "url": "img/2.jpg",
    "revision": "050533e9fa8d7c73ead740e6bbbba881"
  },
  {
    "url": "img/20170629154856.png",
    "revision": "b15863362a5ac2597ec81ab49fe19a03"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "c5545f9623f5307d13fc211198cab948"
  },
  {
    "url": "img/chrome.jpg",
    "revision": "fa6c148834fe773298b2b67322dca228"
  },
  {
    "url": "img/dbgp.jpg",
    "revision": "968f7bc808a6f0ce2ad85fdb34aa6ec9"
  },
  {
    "url": "img/jiacong.jpg",
    "revision": "cb31d0a842316b1354a454e82cbb3ea1"
  },
  {
    "url": "img/server.jpg",
    "revision": "7ebef5c1f38fc9acdbe517a114a1d1d9"
  },
  {
    "url": "img/Xdebug_helper.jpg",
    "revision": "2afd504b6504987e209d108a524566b2"
  },
  {
    "url": "index.html",
    "revision": "74c328a389623eaaf7f0ea05bd1ae8d0"
  },
  {
    "url": "linux/index.html",
    "revision": "c17020cd31d223c0fade2b21f2bc4061"
  },
  {
    "url": "linux/split.html",
    "revision": "3150118ed380ab08452d0c2ece3ac54b"
  },
  {
    "url": "linux/vim.html",
    "revision": "4fd6b4f27b25c84bb90028ddf07d4b18"
  },
  {
    "url": "php/phpstorm.html",
    "revision": "9ef6e4066d1b9d000c7c925a5eb188a6"
  },
  {
    "url": "python/jupyter.html",
    "revision": "3644de821fe6c8f932a3fccfd33731ba"
  },
  {
    "url": "python/mysql.html",
    "revision": "18d16b6e894be01e7a76e413f420d9b7"
  },
  {
    "url": "python/pandas.html",
    "revision": "d1ec15b636fa6ee7dd44f682ffbac65e"
  },
  {
    "url": "vue/vuepress.html",
    "revision": "72ba15256d6db2df3209bdb2e1cf3efb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
