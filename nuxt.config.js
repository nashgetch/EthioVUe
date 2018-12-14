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
    script: [{
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",

      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      },
      {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",

      },
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        async: true
      },


      // {
      //   innerHTML: ` (adsbygoogle = window.adsbygoogle || []).push({
      //     google_ad_client: "ca-pub-5001725934888164",
      //     enable_page_level_ads: true
      //      });`
      // }
    ],
    // __dangerouslyDisableSanitizers: ['script'],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/ethiov_logo2.png'
      },

      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/main.css'
      }

    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'green',
    height: '3px'
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
      src: '~plugins/vue-select',
      ssr: false
    },
    '~plugins/mixins/user.js',
    {
      src: '~plugins/vue-social-share',
      ssr: false
    },
    {
      src: '~plugins/vue-lazyload'
    },
    {
      src: '~plugins/ga.js',
      ssr: false
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage

    '@nuxtjs/auth',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/google-adsense'
  ],
  /*
   ** Axios module configuration
   */
  // 'google-adsense': {
  //   id: 'ca-pub-5001725934888164',
  //   pageLevelAds:true
  // },
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
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'logout',
            method: 'post'
          }
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
