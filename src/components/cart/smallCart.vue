<template>
  <div class="sm_cart">
    <div class="left">
      <div class="name">
        <img :src="item.avatar" alt="">
        <span>{{item.nickname}}</span>
      </div>
      <div class="title">
        <p>{{item.title}}</p>
        <span>{{item.subTitle}}</span>
      </div>
      <div class="see">
        <i class="iconfont iconyanjing"></i>
        <span>48.9k人看过</span>
      </div>
    </div>
    <div class="right">
      <img v-lazy="item.picUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
 
}
</script>

<style lang="stylus" scoped>
  .sm_cart
    display flex
    justify-content space-around
    padding 0 15px 0 10px
    box-sizing border-box
    align-items center
    width 100%
    height 200px
    background #ffffff
    .left 
      width 200px
      height 136px
      .name 
        display flex
        align-items center
        img 
          width 28px
          height 28px
          border-radius 50%
          margin-right 5px
      .title
        margin-top 20px
        width 200px
        height 60px
        p
          font-size 16px
          line-height 18px  
          margin-bottom 5px
        span 
          margin 5px 0
          color #7f7f7f
          font-size 14px
      .see
        font-size 12px
        color #7f7f7f
        margin-top 5px
    .right
      img
        width 136px
        height 136px

</style>
