export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Reef Card',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'msapplication-TileColor', content: '#681cff' },
      { name: 'theme-color', content: '#2c024d' },

      { property: 'og:title', content: 'Reef chain' },
      { property: 'twitter:title', content: 'Reef chain' },

      {
        property: 'description',
        content:
          'Reliable, Extensible, Efficient and Fast blockchain for DeFI, NFTs and gaming.'
      },
      {
        property: 'og:description',
        content:
          'Reliable, Extensible, Efficient and Fast blockchain for DeFI, NFTs and gaming.'
      },
      {
        property: 'twitter:description',
        content:
          'Reliable, Extensible, Efficient and Fast blockchain for DeFI, NFTs and gaming.'
      },

      { property: 'og:image', content: '/img/social-share.jpg' },
      { property: 'twitter:image', content: '/img/social-share.jpg' },

      { property: 'og:url', content: 'https://reef.io/' },
      { property: 'og:locale', content: 'en_gb' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image:secure_url',
        content: 'https://reef.io/img/social-share.jpg'
      },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        color: '#681cff',
        href: '/favicons/safari-pinned-tab.svg'
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/grm4afc.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
