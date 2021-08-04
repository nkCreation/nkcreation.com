export const defaultTitle =
  'nkCreation - WebDesigner & Developer in Rennes, FR (35)'
export const defaultDescription =
  'Nicolas Leport, interface designer & builder in Rennes, France. Actually work for Zenika. Also a freelancer and CEO at Skypaper.'

export default {
  env: {
    apiUrl: process.env.API_URL,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: defaultTitle,
    meta: [
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: defaultTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: defaultDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.nkcreation.com/icon.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: defaultTitle,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: defaultTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: defaultDescription,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.nkcreation.com/icon.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.nkcreation.com/icon.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: defaultTitle,
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: defaultDescription,
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#005e7e' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css/normalize.css', '~/assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: [400, 700, 900],
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
