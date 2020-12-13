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
    "revision": "7a7cdc93e9725ad2c9cee06773f5db97"
  },
  {
    "url": "assets/css/1.styles.0eba365b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.23564df3.css",
    "revision": "5f2fa76ab1c4e3a046cbca695205f46c"
  },
  {
    "url": "assets/css/styles.ad904215.css",
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
    "url": "assets/js/10.067b3fde.js",
    "revision": "6a95b857591466edbc58e78aee694df9"
  },
  {
    "url": "assets/js/11.da31c3df.js",
    "revision": "9ef12aa42772e904be71db86eae0f1f9"
  },
  {
    "url": "assets/js/12.185b5813.js",
    "revision": "8ee69ccd99ce935f80a14a96930d0550"
  },
  {
    "url": "assets/js/13.a767f26d.js",
    "revision": "31f9530cc0ea64dbfef2a582e147c9d1"
  },
  {
    "url": "assets/js/14.f89701fe.js",
    "revision": "4101cdd25919d37a2888f8b36defd4ff"
  },
  {
    "url": "assets/js/15.6bbd02d8.js",
    "revision": "0f7aaee01f749b9f85ac708a150f8fd0"
  },
  {
    "url": "assets/js/16.ae64c974.js",
    "revision": "9e9e567f04a554cfad782fbc2ab18d7c"
  },
  {
    "url": "assets/js/17.67f459d4.js",
    "revision": "e5e1e582224a4f836c88005cc47a63a4"
  },
  {
    "url": "assets/js/18.f0632ba5.js",
    "revision": "0d61f1894f42a3d58ad5b88a85ec3a85"
  },
  {
    "url": "assets/js/19.b798c706.js",
    "revision": "1afba375394a9d71bd780309772cb62e"
  },
  {
    "url": "assets/js/2.23564df3.js",
    "revision": "8f2bb17f83987ea592e001f3bc07a844"
  },
  {
    "url": "assets/js/20.e7b231c6.js",
    "revision": "3fff379679b2e6ea4fad18c144a72015"
  },
  {
    "url": "assets/js/21.e1e29697.js",
    "revision": "32683575be154b0342ff60286c07775b"
  },
  {
    "url": "assets/js/22.26245b80.js",
    "revision": "9a6c5cdee69fcfa11111888a82841735"
  },
  {
    "url": "assets/js/23.2c05e88c.js",
    "revision": "b93f234e8aa20ddf2b715d75837000b9"
  },
  {
    "url": "assets/js/24.b1f66368.js",
    "revision": "964d6107ea4c67ac0343f5e965763064"
  },
  {
    "url": "assets/js/3.08837ffd.js",
    "revision": "bac5364ae16ad8ed3876b74692cb10e0"
  },
  {
    "url": "assets/js/4.2dce2b9f.js",
    "revision": "389de5990deabf99d9a70650a5f754e7"
  },
  {
    "url": "assets/js/5.8430ca01.js",
    "revision": "6950a6804046fb638144e2dccd9d7de7"
  },
  {
    "url": "assets/js/6.829bb047.js",
    "revision": "e18004c8931d99dd0c4926dbab17d27f"
  },
  {
    "url": "assets/js/7.6941465d.js",
    "revision": "89ec0d26f8b8ec7534627e44a8771c38"
  },
  {
    "url": "assets/js/8.7e0e1e96.js",
    "revision": "d368467c2a7acc8cce3538c66765b35c"
  },
  {
    "url": "assets/js/9.dcf02b73.js",
    "revision": "bf64e0e74891100a070872f5ea0066fc"
  },
  {
    "url": "assets/js/app.ad904215.js",
    "revision": "e4cdae2b3b9966c6c3665a05fd437193"
  },
  {
    "url": "blog/node/axios/index.html",
    "revision": "a27d8411e4677280fe33696e510ef594"
  },
  {
    "url": "blog/node/calendar/index.html",
    "revision": "8836a2f509d773ff14de4890593005b0"
  },
  {
    "url": "blog/node/compliant/index.html",
    "revision": "b8db6139f0c6e25bbdec28165faa6115"
  },
  {
    "url": "blog/node/css/index.html",
    "revision": "ba673dc284f38fdf11b3ef92678363f6"
  },
  {
    "url": "blog/node/cssCenter/index.html",
    "revision": "c99dbe8ae22af814deaab6a5f6ce098f"
  },
  {
    "url": "blog/node/echart/index.html",
    "revision": "c791703a7ffa2dfc37411c8b910c4908"
  },
  {
    "url": "blog/node/ES6/index.html",
    "revision": "3d14005392cfeb8ba06a04d93bfeef55"
  },
  {
    "url": "blog/node/git/index.html",
    "revision": "55ccc52dc0ea05f066cc31bc176bb307"
  },
  {
    "url": "blog/node/http/index.html",
    "revision": "57e7d0f29bb75d55142b478264786994"
  },
  {
    "url": "blog/node/InterviewQuestions/index.html",
    "revision": "d34bd20562538e935eeee19d7f9f33cc"
  },
  {
    "url": "blog/node/js/index.html",
    "revision": "5eac641394171b7a658ae4ba7e7e233a"
  },
  {
    "url": "blog/node/js/README1.html",
    "revision": "7eee0d92683b6afa6e71b284e0a8b315"
  },
  {
    "url": "blog/node/koa2-proxy/index.html",
    "revision": "962e4b0497efa66b51f1e86d4b3865f3"
  },
  {
    "url": "blog/node/koa2/index.html",
    "revision": "5987df62e0d9618adf4bae43c2fbced0"
  },
  {
    "url": "blog/node/mianshiti/index.html",
    "revision": "506d0151e72515b70540564d573a87fc"
  },
  {
    "url": "blog/node/mianshiti/README.1.html",
    "revision": "48525283654c6365603a65f9d989b7b7"
  },
  {
    "url": "blog/node/mongodb/index.html",
    "revision": "9cc4d2e9211d900c07703cffeb7d9d3f"
  },
  {
    "url": "blog/node/regExp/index.html",
    "revision": "8ae2b17123bd2d269c19655adf25ef38"
  },
  {
    "url": "blog/node/TS/index.html",
    "revision": "2f6e24620a84a4bec4ea75dd26bf596f"
  },
  {
    "url": "blog/node/webapp/index.html",
    "revision": "3c28c3bea28e5ffb23625807f817ffdb"
  },
  {
    "url": "blog/node/youyaxunhuan/index.html",
    "revision": "f306dad8cf464a24b39f13283944b593"
  },
  {
    "url": "index.html",
    "revision": "7438329449c786e1f72af6545232b57a"
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
