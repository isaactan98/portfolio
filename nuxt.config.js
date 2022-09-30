require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Isaac Tan | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a portfolio for Isaac Tan, including Recent Project, About, and Contact Page.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex, follow' },
      { name: 'theme-color', content: '#27272a' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/firebase.js",
      mode: "client"
    },
    {
      src: "~/plugins/infiniteloading.js",
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Isaac Tan Portfolio',
      short_name: 'Isaac Tan',
      description: 'This is a portfolio for Isaac Tan, including Recent Project, About, and Contact Page.',
      theme_color: '#27272a',
      background_color: '#27272a',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    meta: {
      name: 'Isaac Tan Portfolio',
      description: 'This is a portfolio for Isaac Tan, including Recent Project, About, and Contact Page.',
      theme_color: '#27272a',
      ogHost: 'https://portfolio-isaactan98.vercel.app',
      ogImage: '/img/bg-image.jpeg',
    },
    icon: {
      fileName: 'icon.png'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  loading: {
    color: "#2d2f35",
    height: '3px',
    throttle: 0
  },
  pageTransition: "page",
  env: {
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
    EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,

    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENTRY_ID: process.env.CONTENTFUL_ENTRY_ID
  }
}
