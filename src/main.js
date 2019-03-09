import Vue from 'vue'
import App from './App'
import '@/assets/css/reset.css'
import fastClick from 'fastclick'
import router from './router'
import './mock/mockServer'
import store from './store' 
import VueLazyload from 'vue-lazyload' 
import loading from './assets/img/loading.gif'

import Cart from './components/cart/cart.vue'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading
})
Vue.component('Cart', Cart)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
