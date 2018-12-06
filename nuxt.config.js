const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  server: {
    port: 3000, // default: 3000
    host: '127.0.0.1', // default: localhost
  },

  head: {

    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
    ],
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#"
    },
    script:[
      {src:"/js/jquery.min.js"},
      {src:"/js/tether.min.js"},
      {src:"/js/bootstrap.min.js"},
      {src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",async:true}
    ],
    link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel:'stylesheet',
      href:'/styles.css'
    },
    {
      rel:'stylesheet',
      href:'/font-awesome.min.css'
    },
    {
      rel:'stylesheet',
      href:'/normalize.css'
    },
    {
      rel:'stylesheet',
      href:'/bootstrap.css'
    },
    {
      rel:'stylesheet',
      href:'/slick.css'
    },
    {
      rel:'stylesheet',
      href:'/slick-theme.css'
    },
    {
      rel:'stylesheet',
      href:'/main.css'
    },
    {
      rel:'stylesheet',
      href:'/sidebar.css'
    }

  ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'green',
    height:'3px'
  },

  /*
   ** Global CSS
   */
  css: [

  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/vue-infinite',
      ssr: false
    },
    {
      src:'~plugins/vue-slick',
      ssr:false
    },
    {
      src:'~plugins/vue-select',
      ssr:false
    },
    '~plugins/mixins/user.js',
    {
      src: '~plugins/vue-social-share',
      ssr: false
    },
    {
      src:'~plugins/vue-lazyload',
      ssr:false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage

    '@nuxtjs/auth',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   */
  toast: {
    position: 'top-center',
    duration: 2000
  },
  axios: {
    baseURL: 'https://ethiov.com/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          logout: { url: 'logout', method: 'post' }
        }
      }
    }
  },

  /* toast: {
    position: 'top-center',
    duration: 2000
  },
  axios: {
    baseURL: 'http://10.11.152.34:8000/'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          logout: { url: 'logout', method: 'post' }
        }
      }
    }
  }
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
