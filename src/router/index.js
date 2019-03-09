import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home'
import Category from '../pages/Category/Category'
import Knowledge from '../pages/Knowledge/Knowledge'
import Personal from '../pages/personal/personal'
import ShopCart from '../pages/shopCart/shopCart'
import Search from '../pages/search/search.vue'
import Login from '../pages/login/Login.vue'
import Found from '../pages/found/found'
import Selection from '../pages/Selection/Selection'

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
      },
      children: [
        {
          path: '/knowledge/found',
          component: Found,
          meta: {
            showFooter: true
          },
          
        },
        {
          path: '/knowledge/selection',
          component: Selection
        },
        {
          path: '/',
          redirect: '/knowledge/found'
        }
      ]
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
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})