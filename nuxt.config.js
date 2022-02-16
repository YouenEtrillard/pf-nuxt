import axios from 'axios';

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#048b9a' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Quicksand:300,400,600|Raleway:400,600'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#048b9a' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxt/image'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~/assets/scss/conf.scss']
  },

  image: {
    domains: ['api.youen-etrillard.com'],
    alias: {
      unsplash: 'https://api.youen-etrillard.com/directus/public/'
    },
    dir: 'assets/images'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: `https://api.youen-etrillard.com/directus/public/_` // Used as fallback if no runtime config is provided
  },

  generate: {
    routes() {
      return axios
        .get(
          `https://api.youen-etrillard.com/directus/public/_/items/works?fields=*.*.*`
        )
        .then((res) => {
          return res.data.data
            .filter((work) => !work.url.includes('http'))
            .map((work) => {
              return {
                route: '/works/' + work.url,
                payload: work
              };
            });
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {} // eslint-disable-line
  }
};
