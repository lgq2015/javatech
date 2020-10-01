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
    "revision": "dbde98e1c0bdf65572388c00342ab37c"
  },
  {
    "url": "assets/css/0.styles.70e213db.css",
    "revision": "c154fa8085b54f00bf58151276fdbacb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e4c91de.js",
    "revision": "a49ab2e5bc19638ad9400161599f45fc"
  },
  {
    "url": "assets/js/11.1061b886.js",
    "revision": "9e94edb2f3ee650c295e4a0c3db10d7f"
  },
  {
    "url": "assets/js/12.74407895.js",
    "revision": "fddf65753a42c96bd2414a7370e5ca16"
  },
  {
    "url": "assets/js/13.f07b4a40.js",
    "revision": "9ab08b15bc5837d112e53c1f3f132ee8"
  },
  {
    "url": "assets/js/14.9ae78d65.js",
    "revision": "580a2a7afea7a1f6a8bfb46251ff09b5"
  },
  {
    "url": "assets/js/15.8b86c095.js",
    "revision": "475c9abd79051025a0b3310af615e0a4"
  },
  {
    "url": "assets/js/16.28f0e214.js",
    "revision": "870800438a47c8360e68b2a26f08271a"
  },
  {
    "url": "assets/js/17.468d64b1.js",
    "revision": "80d398c546ecf0b4af355484c810fd9a"
  },
  {
    "url": "assets/js/18.777b166f.js",
    "revision": "77f9cbc09f18eed504da1159d73bc4fe"
  },
  {
    "url": "assets/js/19.31b2ee37.js",
    "revision": "3ef852794c8fb5eb54a2ccbc5892cbb9"
  },
  {
    "url": "assets/js/20.0c0930eb.js",
    "revision": "25e894fdae9c6d08ae72748b5dbe8510"
  },
  {
    "url": "assets/js/21.52ff4e20.js",
    "revision": "3e92cd3c22e82f7d32c0725f08c1cfb8"
  },
  {
    "url": "assets/js/22.542c0c3d.js",
    "revision": "6792381c6fa5b390e3c94896fdb74a87"
  },
  {
    "url": "assets/js/23.98a91c4f.js",
    "revision": "2ee637f8f3872c2b2fcf4aaef079bdcb"
  },
  {
    "url": "assets/js/24.087feb15.js",
    "revision": "9f0d7009ec77dee9d945d46d467a5d3a"
  },
  {
    "url": "assets/js/25.54facd28.js",
    "revision": "ee9216718244996cbd7d97699f470d7e"
  },
  {
    "url": "assets/js/26.667d0e82.js",
    "revision": "82c247be65241c55bef7ca6a7bd99522"
  },
  {
    "url": "assets/js/27.6f2dadce.js",
    "revision": "4a32bd08826eaee7871f3f5fb4e0b07d"
  },
  {
    "url": "assets/js/28.3a0da38c.js",
    "revision": "2fb9b5630294b7d3524d5de2819306dd"
  },
  {
    "url": "assets/js/29.5daca476.js",
    "revision": "b81c5851f5ca1154e587907255db3483"
  },
  {
    "url": "assets/js/30.c9ca9314.js",
    "revision": "c8bf82395c8771237235211cbab735f1"
  },
  {
    "url": "assets/js/31.bce93d1d.js",
    "revision": "dc623186ba60cb59dbb6ffdf382495ac"
  },
  {
    "url": "assets/js/32.30ce5030.js",
    "revision": "7f90973f2bb8d20ccc36ff1dc6b85f6c"
  },
  {
    "url": "assets/js/33.a9d5d6f9.js",
    "revision": "7e292b005ce9609e04202ecb244ecdf8"
  },
  {
    "url": "assets/js/34.d3acb2a4.js",
    "revision": "29f7b5a057751895fe54d94378a2f6a6"
  },
  {
    "url": "assets/js/35.c3f51ae1.js",
    "revision": "4cf5bb3fba46eece5670dee6da92f792"
  },
  {
    "url": "assets/js/36.44c25411.js",
    "revision": "7aa6e5f007a8ff2f5c25b2b69d86115e"
  },
  {
    "url": "assets/js/37.633053ff.js",
    "revision": "b561bff4e9bab09380ed7bd4ff9b9c73"
  },
  {
    "url": "assets/js/38.e2bf6ac9.js",
    "revision": "d04da6b9c1540cb48a73c4f6e91f3a3f"
  },
  {
    "url": "assets/js/39.7d8cc20c.js",
    "revision": "a3f06d1cca67ea242abb104e27bce36f"
  },
  {
    "url": "assets/js/4.4a397d55.js",
    "revision": "9d72a258bb3988b99ed2529592a47228"
  },
  {
    "url": "assets/js/40.bc43b159.js",
    "revision": "88533a8cfe9f276a476451377925edfa"
  },
  {
    "url": "assets/js/41.6224f480.js",
    "revision": "a1ece7461149a59b5d9efe5cccb25832"
  },
  {
    "url": "assets/js/42.6bbd0501.js",
    "revision": "de04bfc5ba07b932b395f53b3c305c40"
  },
  {
    "url": "assets/js/43.51828f73.js",
    "revision": "6ec87a5189934082a77e445f6ad7dad5"
  },
  {
    "url": "assets/js/44.37e66d34.js",
    "revision": "d16860e9e7467c24d642e415f55b87e2"
  },
  {
    "url": "assets/js/45.cb6dc768.js",
    "revision": "2633f6fa5ae9562e09fe3501e50883c2"
  },
  {
    "url": "assets/js/46.4ae81473.js",
    "revision": "75116bc0c73680957c0910661711c1eb"
  },
  {
    "url": "assets/js/47.afe6f3e1.js",
    "revision": "f9d5001784cfebda8556c26afc65991a"
  },
  {
    "url": "assets/js/48.d6789dcc.js",
    "revision": "d41dbe5d34d1210dc51fde72e6c83528"
  },
  {
    "url": "assets/js/49.749a5e56.js",
    "revision": "88fd85fad402a971d90c9401f5524580"
  },
  {
    "url": "assets/js/5.0833ef28.js",
    "revision": "f02130302a6400abd9da09bb58d0cbbf"
  },
  {
    "url": "assets/js/50.5690b8dc.js",
    "revision": "9ad6a02653efcdf1ec6f8508c98809b2"
  },
  {
    "url": "assets/js/51.d555a714.js",
    "revision": "71d7e9e6d414381d5a956403040eeb18"
  },
  {
    "url": "assets/js/52.1beee36d.js",
    "revision": "67b1f6366379246b8c37e296b0aa267d"
  },
  {
    "url": "assets/js/53.20a7807b.js",
    "revision": "b681cd89f0c77af99e8a3a2e3eb9b3e5"
  },
  {
    "url": "assets/js/54.f0072c3a.js",
    "revision": "807ba99faa7214e21ee20bfad08a747c"
  },
  {
    "url": "assets/js/55.03d130cb.js",
    "revision": "f45acb6ca4c46f99af89751c3dd99919"
  },
  {
    "url": "assets/js/6.e1754b04.js",
    "revision": "376080409c3dece1f79a10c51055845c"
  },
  {
    "url": "assets/js/7.a10910a7.js",
    "revision": "3d5618e598f158adc02297601b8e0066"
  },
  {
    "url": "assets/js/8.04e2e190.js",
    "revision": "05fa6d6c159203978cd5a3924e1b3bd2"
  },
  {
    "url": "assets/js/9.cccc2c89.js",
    "revision": "91125e3cb3621724e2846dcc650ad57b"
  },
  {
    "url": "assets/js/app.3e38407e.js",
    "revision": "e93d56cbc7e5eee971f5d78a57d67d5b"
  },
  {
    "url": "assets/js/vendors~flowchart.d81c2c68.js",
    "revision": "51049100cc429d6563ab37daf02431d4"
  },
  {
    "url": "assets/js/vendors~notification.4573acaf.js",
    "revision": "71be7d6c83e261cd535a7a4bea6a2438"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "3c58591b1216fa749c3ae7826f060e9a"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "912e60c8f9ea5419bee0a47f6351c55d"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "ec3670afe2a93b2ea5f3b2e086037f36"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "245d5c20602ca3aa614f3b0adb09405e"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "58d8ec56508fe3f331b332974d61ed28"
  },
  {
    "url": "cache/index.html",
    "revision": "2409cdacb1c0005be433002f4d89fbf2"
  },
  {
    "url": "cache/memcached.html",
    "revision": "e1f78cd3a1de04fe1741e41ce2f41db0"
  },
  {
    "url": "framework/index.html",
    "revision": "9d4c272a69399af162832e1d91fe671f"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "8168e3af125943c16eb409583fd8d27b"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "040ad94b6d154dc72061701f2b0dd4cb"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "c464525a1eb4d4ae292235217b436064"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "915da35d5620671e56174284c7770fea"
  },
  {
    "url": "lib/index.html",
    "revision": "d8bd1169cdf871cb040ac526d3103e29"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "379b7a230627985f41c6a021f71bd7da"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "aa72618ab686c14440c38315e62966b4"
  },
  {
    "url": "lib/javamail.html",
    "revision": "70e867c7e739b41359d446ec2562ffcd"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "b80be1c0b46db76a1641c53876290415"
  },
  {
    "url": "lib/reflections.html",
    "revision": "3447318bf54f45885ea232e01a6ae79b"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "781cbb6a10cb3b03ada6a3abcb36850a"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "611452a82a37991053575653aee108b2"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "f970737549e9d2cd3bbe54b7a0a4c8ba"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "92ed543691d9ee7ba031fa2125a1ffc5"
  },
  {
    "url": "lib/template/index.html",
    "revision": "ec61256fe0081fd7e7dbfb90aacbe347"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "d02f58b433273bc9b8e604f77203a3e3"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "b8dd900a3ef2c37bfb05409afd433f91"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "a10a0fa90e8170df6f782f84acddb670"
  },
  {
    "url": "lib/zxing.html",
    "revision": "6710e7760dc791f2ef291cab45a8e2af"
  },
  {
    "url": "mq/activemq.html",
    "revision": "c4298b4d397db6988ca818c360f2a8d9"
  },
  {
    "url": "mq/index.html",
    "revision": "c6837d35ab76006ffe378f3ec80ce7d0"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "6d044c83ac22613c6f0a0d740b112773"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "95b5812f2b99f8e702d02c3d2fe8323d"
  },
  {
    "url": "security/index.html",
    "revision": "2a91d75f4fa99f52fbe1f6d20bd94eb6"
  },
  {
    "url": "security/shiro.html",
    "revision": "3484568270da15175a88acd80f584e1a"
  },
  {
    "url": "security/spring-security.html",
    "revision": "46ce415b29c1383ecefbc5636ee20cfb"
  },
  {
    "url": "server/index.html",
    "revision": "9665144db20e5f354c2a06a78e610583"
  },
  {
    "url": "server/jetty.html",
    "revision": "2d173c4b27d53cd496d91cb8723bba6d"
  },
  {
    "url": "server/tomcat.html",
    "revision": "ec28ed1a197a1aaa79d2529a90fcd02c"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "6fdb9d8c64b6980507dfc6148824d8d6"
  },
  {
    "url": "soa/index.html",
    "revision": "6d7cf78b6f15da44e212d34caac95f8f"
  },
  {
    "url": "soa/netty.html",
    "revision": "6c1ab565807620b690e808bc7c06084f"
  },
  {
    "url": "test/index.html",
    "revision": "42d8620ac8bb4949e8bccfaeb1874255"
  },
  {
    "url": "test/jmeter.html",
    "revision": "badb75e5f47644598bda1e0009ba91ad"
  },
  {
    "url": "test/jmh.html",
    "revision": "67eefd91573eb7403f07df6237b40f6d"
  },
  {
    "url": "test/junit.html",
    "revision": "ac78f2ec8e0194cd35cb10992a455390"
  },
  {
    "url": "test/mockito.html",
    "revision": "bd16843b37588c7f11f8bb6504fdc9b0"
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
