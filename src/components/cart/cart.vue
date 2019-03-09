<template>
  <div class="shop_cart">
    <div class="title">
      <img :src="item.avatar" alt="">
      <span>{{item.nickname}}</span>
    </div>
    <p>{{item.title}}</p>
    <img class='s_pic' v-lazy="item.picUrl" alt="">
    <div class="see">
      <i class="iconfont iconyanjing"></i>
      <span>32.9k人看过</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    item: Object
  }
 
}
</script>

<style lang="stylus" scoped>
  .shop_cart
    width 100%
    height 340px
    background #fff
    padding 10px 10px
    box-sizing border-box
    .title
      display flex
      align-items center
      img 
        width 27px
        height 27px
        border-radius 50%
      span 
        font-size 14px
        margin-left 10px
    p
      padding-right 20px
      margin 10px 0
      line-height 26px
      font-size 16px
      color #333
    .s_pic
      width 345px
      height 188px
    .see
      margin-top 10px
      font-size 12px
      color #333
</style>
