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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "842bf5a9d06170e66c30ba67d06b2456"
  },
  {
    "url": "assets/css/1.styles.0eba365b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.48e20290.css",
    "revision": "5f2fa76ab1c4e3a046cbca695205f46c"
  },
  {
    "url": "assets/css/styles.a66b9c51.css",
    "revision": "bae6f867339e93061aa8ba16e476ba4e"
  },
  {
    "url": "assets/img/1.76cf0835.png",
    "revision": "76cf083514160c67f20745da5d0d7058"
  },
  {
    "url": "assets/img/dpr.5a361be5.png",
    "revision": "5a361be542d81d6e29c75be40cde4eef"
  },
  {
    "url": "assets/img/e1.d5a2efbd.png",
    "revision": "d5a2efbdfac377aebecbebf6bfcd5690"
  },
  {
    "url": "assets/img/e2.66942f7f.png",
    "revision": "66942f7f11565246f5129c6cc6bb4f98"
  },
  {
    "url": "assets/img/e3.b4ae2dc9.png",
    "revision": "b4ae2dc9cde9c0957ff4442f95fa5ade"
  },
  {
    "url": "assets/img/fea7461e85aee80bbe96.b6b377ba.png",
    "revision": "b6b377ba4e6584063fc7fde91597cec3"
  },
  {
    "url": "assets/img/flex_1.9719949a.png",
    "revision": "9719949a52c9cfe8cfa3b4af428267c5"
  },
  {
    "url": "assets/img/flex_2.74faca36.png",
    "revision": "74faca36224eedf6028972a84b5f1371"
  },
  {
    "url": "assets/img/flex_3.02eb967a.png",
    "revision": "02eb967a0c47e72ad2c525e361d0f091"
  },
  {
    "url": "assets/img/flex_4.ea680053.png",
    "revision": "ea680053a51267b6cf9d337cffa2eea7"
  },
  {
    "url": "assets/img/grid.eeca4faf.jpg",
    "revision": "eeca4faf9ea07d311fa2fc34b019bab0"
  },
  {
    "url": "assets/img/gridsx.d41270ae.png",
    "revision": "d41270ae83084ade9e94349999fa4172"
  },
  {
    "url": "assets/img/ip5.8d7ca857.png",
    "revision": "8d7ca8573d2d75cc2b58f87b5e4f3411"
  },
  {
    "url": "assets/img/legend.a38ceab3.png",
    "revision": "a38ceab3bdec3af59f31991e55c91036"
  },
  {
    "url": "assets/img/meta_1.732125b2.png",
    "revision": "732125b2fcdc4ef3e6723169136dcba8"
  },
  {
    "url": "assets/img/meta_2.a342781b.png",
    "revision": "a342781b38bd4dc3e746aff5184c6414"
  },
  {
    "url": "assets/img/meta.e3e48f5d.png",
    "revision": "e3e48f5d6cdba1ce5fb96e3dff27958b"
  },
  {
    "url": "assets/img/p3.ea7713fa.png",
    "revision": "ea7713fa7af8a8218ae73f0500c458b7"
  },
  {
    "url": "assets/img/ppi.c9d190b5.png",
    "revision": "c9d190b5cb09be534c13f6c05bbe86f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sj.51ded950.png",
    "revision": "51ded95051ed9c202debe5fe00924f2f"
  },
  {
    "url": "assets/img/title.9c75feb3.png",
    "revision": "9c75feb322190638203e497f90faaac8"
  },
  {
    "url": "assets/img/titlesx.b1b8c6f8.png",
    "revision": "b1b8c6f83b1e676f465571b51573f646"
  },
  {
    "url": "assets/img/titlesxsts.598c30a1.png",
    "revision": "598c30a14efbc8bbc37a4efdd42571ab"
  },
  {
    "url": "assets/img/titlesxts.394af8b8.png",
    "revision": "394af8b865b9d17ba93918ba9d4c6e39"
  },
  {
    "url": "assets/img/tooltip2.ec4e5e19.jpg",
    "revision": "ec4e5e19438c92536b41c409465e5459"
  },
  {
    "url": "assets/img/ts1.aa68520c.png",
    "revision": "aa68520c71d6c57fe12720e5f5db93e4"
  },
  {
    "url": "assets/img/ts2.4ce4befb.png",
    "revision": "4ce4befbabf01e375a44869d6ab95f8b"
  },
  {
    "url": "assets/img/viewport.8cc50197.png",
    "revision": "8cc50197c0dfd4f27c9f0a72e31f8a55"
  },
  {
    "url": "assets/js/1.0eba365b.js",
    "revision": "6725f935965b18f018f16f9204768633"
  },
  {
    "url": "assets/js/10.1f32b392.js",
    "revision": "0bd69bfad73328dc29e88e8786efe5a4"
  },
  {
    "url": "assets/js/11.f10bc316.js",
    "revision": "75112ec178b72f9a0bc7ed1d98176b57"
  },
  {
    "url": "assets/js/12.ecc5bea0.js",
    "revision": "3d124221b794f18ca66d65884f8143db"
  },
  {
    "url": "assets/js/13.15226cfa.js",
    "revision": "cba13017cdd3b79581e9bca6db629d4e"
  },
  {
    "url": "assets/js/14.016ab0c8.js",
    "revision": "32c85c807468db3f3d69639a150ee6b4"
  },
  {
    "url": "assets/js/15.86604bb0.js",
    "revision": "f71e5a9062deadbe17e0c234f4ba1047"
  },
  {
    "url": "assets/js/16.f4474910.js",
    "revision": "37a2521b80a0d4e5ab369fb8dc15f47d"
  },
  {
    "url": "assets/js/17.b3dac833.js",
    "revision": "ad225f70887e8b984e1148a1bd45aaa1"
  },
  {
    "url": "assets/js/18.626e27e9.js",
    "revision": "3261ff6ddbffc765b41585616caf8a05"
  },
  {
    "url": "assets/js/19.a4f05d03.js",
    "revision": "532034e15a4dd938bd8b0ae7610bd8b4"
  },
  {
    "url": "assets/js/2.48e20290.js",
    "revision": "3861a38beac789a1071bfb1f6860591e"
  },
  {
    "url": "assets/js/20.fec60d8b.js",
    "revision": "bd74d855b7108460905a570cddbdc11c"
  },
  {
    "url": "assets/js/21.fed5e818.js",
    "revision": "a3648caddf63ae23bd1e329ecfc854b8"
  },
  {
    "url": "assets/js/22.0e7782c1.js",
    "revision": "d502b8e1e1ad5a6415ffcb7022223ccb"
  },
  {
    "url": "assets/js/23.3c68fb76.js",
    "revision": "dcbcf532beec8773f03d6dd977af0c30"
  },
  {
    "url": "assets/js/24.10faed2a.js",
    "revision": "5b119a75c9fe04c672520003531f7f52"
  },
  {
    "url": "assets/js/3.4001516f.js",
    "revision": "e3e727e3c07db2088586c76d7ee18aa2"
  },
  {
    "url": "assets/js/4.eabb3ce6.js",
    "revision": "fb2922e6d198021bbf48eb2fc1b3d423"
  },
  {
    "url": "assets/js/5.968ce06d.js",
    "revision": "ac74ebcd7bdf2ef2f69cbdb0639e62e3"
  },
  {
    "url": "assets/js/6.2eb686ab.js",
    "revision": "7e7ae0db3f683b191a778adfd8684f51"
  },
  {
    "url": "assets/js/7.e7bd936b.js",
    "revision": "865e553a0fab1b924175b462109abb6a"
  },
  {
    "url": "assets/js/8.162502d0.js",
    "revision": "fa4778ca1e0bbbbdf508d5f96dc2502e"
  },
  {
    "url": "assets/js/9.dcf02b73.js",
    "revision": "bf64e0e74891100a070872f5ea0066fc"
  },
  {
    "url": "assets/js/app.a66b9c51.js",
    "revision": "7a1f406dbcd98e777ef4d357b188ad3f"
  },
  {
    "url": "blog/node/axios/index.html",
    "revision": "b4f0ac9167fea07862930647c499d84e"
  },
  {
    "url": "blog/node/calendar/index.html",
    "revision": "d6faedf9ff3a3d7603d986726ee80702"
  },
  {
    "url": "blog/node/compliant/index.html",
    "revision": "cb638b07e8d768ab88d3d23a0abb84b3"
  },
  {
    "url": "blog/node/css/index.html",
    "revision": "965a8179fb01b29b3b97ea827c9c26f9"
  },
  {
    "url": "blog/node/cssCenter/index.html",
    "revision": "5430a085b093bd29f68e470a45f01654"
  },
  {
    "url": "blog/node/echart/index.html",
    "revision": "b4c67d424ce4f3e8399c81696cdc047f"
  },
  {
    "url": "blog/node/ES6/index.html",
    "revision": "e8868581020577cee366d918859f0566"
  },
  {
    "url": "blog/node/git/index.html",
    "revision": "7c6d4f102302e379c0d21e5d9083daa3"
  },
  {
    "url": "blog/node/http/index.html",
    "revision": "a14b6c259f4e99fc0d8e0e180a35082c"
  },
  {
    "url": "blog/node/InterviewQuestions/index.html",
    "revision": "7dfceec452665141a31026dd63d482e9"
  },
  {
    "url": "blog/node/js/index.html",
    "revision": "3ef578a7f3cd9720b923d56e8e96eb04"
  },
  {
    "url": "blog/node/js/README1.html",
    "revision": "90dade3dd0f8088931228eb036b312c9"
  },
  {
    "url": "blog/node/koa2-proxy/index.html",
    "revision": "12d1e48ace2b3f7289538d50afb17f67"
  },
  {
    "url": "blog/node/koa2/index.html",
    "revision": "2bbf6043237ab61bbcc631f627f49d6a"
  },
  {
    "url": "blog/node/mianshiti/index.html",
    "revision": "238d528272b9318cd3621cd8ae9af5ee"
  },
  {
    "url": "blog/node/mianshiti/README.1.html",
    "revision": "4363e2b851a2b3d049fd8f13676eafae"
  },
  {
    "url": "blog/node/mongodb/index.html",
    "revision": "f5bc7d19b43ea1262c9852ecc7b8d704"
  },
  {
    "url": "blog/node/regExp/index.html",
    "revision": "2a3f8d354b29e9315c2a689ee152cb5c"
  },
  {
    "url": "blog/node/TS/index.html",
    "revision": "5737764656dcacf71ea6a2a91eddd7b9"
  },
  {
    "url": "blog/node/webapp/index.html",
    "revision": "c164127374e43a60317ac5e9fde15333"
  },
  {
    "url": "blog/node/youyaxunhuan/index.html",
    "revision": "c041eb2e6383d7bf16e11c8276d08d02"
  },
  {
    "url": "index.html",
    "revision": "732dfd05065a82efbea51947136c4bac"
  },
  {
    "url": "logo.gif",
    "revision": "680df50a7221fe80c8619839f731f385"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
