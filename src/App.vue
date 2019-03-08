<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Category from './pages/Category/Category'
import Knowledge from './pages/Knowledge/Knowledge'
import Personal from './pages/personal/personal'
import ShopCart from './pages/shopCart/shopCart'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
</style>

