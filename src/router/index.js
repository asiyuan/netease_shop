import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home'
import Category from '../pages/Category/Category'
import Knowledge from '../pages/Knowledge/Knowledge'
import Personal from '../pages/personal/personal'
import ShopCart from '../pages/shopCart/shopCart'
import Search from '../pages/search/search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})