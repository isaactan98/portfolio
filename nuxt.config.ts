export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  app: {
    head: {
      title: 'Isaac Tan — Full-Stack Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Full-Stack Software Engineer based in Singapore, building enterprise & self-hosted systems. Open to freelance projects.'
        },
        { property: 'og:title', content: 'Isaac Tan — Full-Stack Engineer' },
        {
          property: 'og:description',
          content: 'Full-Stack Software Engineer based in Singapore.'
        },
        { name: 'theme-color', content: '#0f0f0f' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'vercel'
  },

  typescript: {
    strict: true
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: false }
})
