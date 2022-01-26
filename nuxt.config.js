export const defaultTitle =
  'nkCreation - WebDesigner & Developer in Rennes, FR (35)'
export const defaultDescription =
  'Nicolas Leport, interface designer & builder in Rennes, France. Currently work for Zenika. Also a freelancer and CEO at Skypaper.'

export default {
  env: {
    apiUrl: process.env.API_URL,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: defaultTitle,
    link: [
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#005e7e' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css/normalize.css', '~/assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/ui/atoms',
    '~/components/ui/organisms',
    '~/components/ui/molecules',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-graphql-request',
    '@nuxtjs/pwa',
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
    // https://go.nuxtjs.dev/pwa,
    [
      '~/modules/extractor',
      {
        baseUrl: process.env.API_URL,
        path: '/_images',
      },
    ],
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    meta: {
      lang: 'fr',
      name: defaultTitle,
      description: defaultDescription,
      author: 'Nicolas Leport',
      theme_color: '#ffffff',
      ogHost: 'nkcreation.com',
    },
    manifest: {
      name: 'nkCreation',
      short_name: 'nkCreation',
      description: defaultDescription,
      lang: 'fr',
      useWebmanifestExtension: true,
    },
  },

  sitemap: {
    hostname:
      process.env.DEPLOY_PRIME_URL || process.env.URL || process.env.HOSTNAME,
    gzip: true,
    exclude: ['/404'],
  },

  graphql: {
    clients: {
      default: {
        endpoint: process.env.API_URL + 'graphql',
      },
    },
  },
}
