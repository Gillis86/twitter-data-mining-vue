const pkg = require('./package')



module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Twitter Data Mining',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Get likes and retweets from twitter users - #TwitterAPI' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://vast-wave-62960.herokuapp.com/'//'https://'+process.env.HOST+':'+process.env.PORT || 'https://127.0.0.1:3000/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      config.node =  {
        fs: 'empty'
    }
      
    }
  }
}
