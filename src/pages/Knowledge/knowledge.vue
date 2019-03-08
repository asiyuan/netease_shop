<template>
  <div class="k_wrap">
    <Header class="k_header">
      <div class="left">
        <i class="iconfont iconshouye"></i>
      </div>
      <div class="middle">
        <router-link class="active select" to="/knowledge/found">发现</router-link>
        <router-link class="select" to="/knowledge/selection">甄选家</router-link>
      </div>
      <div class="right">
        <i class="iconfont iconsousuo6"></i>
        <i class="iconfont iconqicheqianlian-"></i>
      </div>
    </Header>

    <nav class="k_nav">
      <ul class="k_list">
        <li class="active">推荐</li>
        <li>女王节礼物</li>
        <li>春茶上市</li>
        <li>晒单</li>
        <li>达人</li>
        <li>HOME</li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    new BScroll('.k_nav', {
      scrollX: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/minxi.styl'
  .k_wrap
    width 100%
    background #f4f4f4
    .k_header
      display flex
      width 100%
      height 40px
      background #f4f4f4
      align-items center
      justify-content space-around
      i 
        font-size 22px
        &:last-child
          margin-left 20px
      .select
        font-size 16px
        &.active
          color #b4282d
          font-weight bold
          font-size 18px

    nav
      margin-top 5px
      background rgba(255,255,255,0.7)
      overflow hidden
      ul
        float left
        white-space nowrap
        li
          display inline-block
          height 36px
          line-height 36px
          margin 0 10px
          font-size 14px
          color #7f7f7f
          &.active
            border-bottom  2px solid #b4282d
</style>  
