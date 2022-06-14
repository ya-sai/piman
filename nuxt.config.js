require('dotenv').config()
export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ' + process.env.WEBSITE_NAME,
    title: 'Home',
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.WEBSITE_DESCRIPTION },
      { hid: 'keywords', name: 'keywords', content: 'keywords' },
      { name: 'author', content: 'author' },
      { name: 'copyright', content: 'copyright' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // social media
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:title', property: 'og:title', content: process.env.WEBSITE_NAME},
      { hid: 'og:description', property: 'og:description', content: process.env.WEBSITE_DESCRIPTION},
      { hid: 'og:image', property: 'og:image', content: process.env.BASE_URL + '/images/social-media.png'},

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: process.env.BASE_URL },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.WEBSITE_NAME},
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.WEBSITE_DESCRIPTION},
      { hid: 'twitter:image', name: 'twitter:image', content: process.env.BASE_URL + '/images/social-media.png'},

      // 在手機上，加入主畫面的名稱
      // { name: 'mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-touch-fullscreen', content: 'yes' },
      // { name: 'apple-mobile-web-app-title', content: process.env.WEBSITE_NAME},
      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    link: [
      // favicon
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '32x32', href: '/images/favicon/favicon-32.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '128x128', href: '/images/favicon/favicon-128.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/images/favicon/favicon-152.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '167x167', href: '/images/favicon/favicon-167.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: '/images/favicon/favicon-180.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '192x192', href: '/images/favicon/favicon-192.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '196x196', href: '/images/favicon/favicon-196.png' },
      
      // splash
      // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-640x1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
      // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-750x1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
      // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },
      // { rel: 'apple-touch-startup-image', href: '/images/splash/splash-1242x2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },
    
      // font
      // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap' },
    ],
    // script: [
    // ]
  },

 

  // Customize the progress-bar color
  // loading: { color: '#fff' },
  loading: '@/components/loading.vue',

  // Global CSS
  css: [
    '@/assets/scss/style.scss',
  ],

  // Global CSS for components use
  styleResources: {
    scss: [
      '@/piman/src/assets/scss/_variables.scss',
      '@/assets/scss/base/_variables.scss'
    ]
  },

  //Plugins to load before mounting the App
  plugins: [
    '@/plugins/apis',
    '@/plugins/piman',
    { src: '@/plugins/axios/server', mode: 'server' }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    // '@nuxtjs/router'
    '@nuxtjs/style-resources',
    '@nuxtjs/composition-api/module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],

  // routerModule: {
  //   path: 'router/'
  // },

  moduleNameMapper: {
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js'
  },

  dotenv: {
    filename: '.env'
  },

  //Build configuration
  build: {
    analyze: false,
    cache: false,
    parallel: false,
    hardSource: false,
    indicator: false,
    extend(config, ctx) {}
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
}
