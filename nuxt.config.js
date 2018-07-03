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
      { hid: 'description', name: 'description', content: 'Get likes and retweets from twitter users - #TwitterAPI' },
      {name:"msapplication-TileColor", content:"#da532c" },
      {name:"theme-color", content:"#ffffff"}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
      { rel: 'icon',type:"image/png", sizes:"32x32", href:"/favicon-32x32.png" },
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png" },
      { rel:"manifest", href:"/site.webmanifest"},
      {rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}
      
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
    '@/plugins/validator.js'
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
    baseURL: process.env.NODE_ENV === 'production' ? 'https://twitter-data-mining.herokuapp.com/' : 'http://127.0.0.1:3000'
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
