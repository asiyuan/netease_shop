import Vue from 'vue'
import App from './App'
import '@/assets/css/reset.css'
import fastClick from 'fastclick'
import router from './router'
import './mock/mockServer'

import Cart from './components/cart/cart.vue'

Vue.config.productionTip = false

Vue.component('Cart', Cart)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
