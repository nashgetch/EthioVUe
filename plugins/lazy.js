import Vue from 'vue'

import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/404.png',
  loading: '/img/loading.gif',
  attempt: 1
})
