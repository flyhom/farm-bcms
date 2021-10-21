export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // ssr: false,
  head: {
    title: '茶農管理系統',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/leaf.png' }
    ]
  },

  loading: {
    color: '#40b47f',
    height: '5px',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/echarts",
    "~plugins/vue-json-csv",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    'nuxt-material-design-icons',
  ],

  // proxy: { //解決Cors問題
  //     "/api/*": {  //api路徑 , *代表全部的api
  //       target: "https://farm-api.flyhom.com/", //主要domian
  //       changeOrigin: true
  //     }
  // },
  toast: {
    position: 'top-center',
    duration: 3000,
    singleton: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
