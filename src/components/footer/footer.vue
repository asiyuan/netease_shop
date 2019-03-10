<template>
  <footer>
    <ul class="footer_list">
      <li @click="$router.replace('/home')" :class="$route.path==='/home' ? 'active' : ''">
        <i class="iconfont iconshouye"></i>
        <span>首页</span>
      </li>
      <li @click="$router.replace('/category')" :class="$route.path==='/category' ? 'active' : ''">
        <i class="iconfont iconfenlei"></i>
        <span>分类</span>
      </li>
      <li @click="$router.replace('/knowledge')" :class="$route.path==='/knowledge' ? 'active' : ''">
        <i class="iconfont iconicon_addresslist"></i>
        <span>识物</span>
      </li>
      <li @click="$router.replace('/shopcart')" :class="$route.path==='/shopcart' ? 'active' : ''">
        <i class="iconfont iconqicheqianlian-"></i>
        <span>购物车</span>
      </li>
      <li @click="$router.replace('/personal')" :class="$route.path==='/personal' ? 'active' : ''">
        <i class="iconfont icontubiaozhizuomoban"></i>
        <span>个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/minxi.styl'
  footer 
    top-border-1px(#eee)
    padding-top 5px
    position fixed
    width 100%
    bottom 0
    height 50px 
    background #fafafa
    z-index 10
    .footer_list
      display flex
      justify-content space-around
      li
        display flex
        flex-direction column
        align-items center
        &.active
          color: #b4282d
        i 
          font-size 20px
        span 
          font-size 14px
          margin-top 10px
</style>
