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
      { name: 'robot', content: 'index, follow' },
      { name: 'theme-color', content: '#27272a' },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: 'Isaac Tan, Portfolio, Web Developer, Web Designer, Frontend Developer, Frontend Designer, Web Development, Web Design, Frontend Development, Frontend Design, Web Developer Portfolio, Web Designer Portfolio, Frontend Developer Portfolio, Frontend Designer Portfolio, Web Development Portfolio, Web Design Portfolio, Frontend Development Portfolio, Frontend Design Portfolio, Web Developer Portfolio Website, Web Designer Portfolio Website, Frontend Developer Portfolio Website, Frontend Designer Portfolio Website, Web Development Portfolio Website, Web Design Portfolio Website, Frontend Development Portfolio Website, Frontend Design Portfolio Website, Web Developer Portfolio Site, Web Designer Portfolio Site, Frontend Developer Portfolio Site, Frontend Designer Portfolio Site, Web Development Portfolio Site, Web Design Portfolio Site, Frontend Development Portfolio Site, Frontend Design Portfolio Site, Web Developer Portfolio Page, Web Designer Portfolio Page, Frontend Developer Portfolio Page, Frontend Designer Portfolio Page, Web Development Portfolio Page, Web Design Portfolio Page, Frontend Development Portfolio Page, Frontend Design Portfolio Page, Web Developer Portfolio Page Website, Web Designer Portfolio Page Website, Frontend Developer Portfolio Page Website, Frontend Designer Portfolio Page Website, Web Development Portfolio Page Website, Web Design Portfolio Page Website, Frontend Development Portfolio Page Website, Frontend Design Portfolio Page Website, Web Developer Portfolio Page Site, Web Designer Portfolio Page Site, Frontend Developer Portfolio Page Site, Frontend Designer Portfolio Page Site, Web Development Portfolio Page Site, Web Design Portfolio Page Site, Frontend Development Portfolio Page Site, Frontend Design Portfolio Page Site, Web Developer Portfolio Page Page, Web Designer Portfolio Page Page, Frontend Developer Portfolio Page Page, Frontend Designer Portfolio Page Page, Web Development Portfolio Page Page, Web Design Portfolio Page Page, Frontend Development Portfolio Page Page, Frontend Design Portfolio Page Page, Web Developer Portfolio Page Page Website, Web Designer Portfolio Page Page Website, Frontend Developer Portfolio Page Page Website, Frontend Designer Portfolio Page Page Website, Web Development Portfolio Page Page Website, Web Design Portfolio Page Page Website, Frontend Developer'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Isaac Tan | Portfolio',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'This is a portfolio for Isaac Tan, including Recent Project, About, and Contact Page.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://isaactan.vercel.app/_nuxt/img/bg.1f5481a.jpeg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://isaactan.vercel.app/',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Isaac Tan | Portfolio',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      }
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
