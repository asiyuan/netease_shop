<template>
  <div class="cart_wrap">
    <header>
      <h2>购物车</h2>
      <span>领券</span>
    </header>

    <div class="feature">
      <ul>
        <li>网易自营品牌</li>
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
      </ul>
    </div>

    <div class="container">
      <div class="img"></div>
      <span>去添加点什么吧</span>
      <div class="btn">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .cart_wrap 
    width 100%
    height 100%
    background #f4f4f4
    header
      position relative
      width 100%
      height 40px
      background #fff
      h2
        text-align center
        height 40px
        line-height 40px
        font-size 18px
      span 
        position absolute 
        right 20px
        top 10px
        color #B4282D
      
    .feature
      margin-top 10px
      width 100%
      height 30px
      ul
        height 30px
        display flex
        justify-content space-around
        align-items center
        li
          float left
          font-size 12px
          color #666
    .container
      margin-top 200px
      width 100%
      text-align center
      .img  
        width 124px
        height 124px
        margin 0 auto
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
        background-size 100%
      span
        font-size 14px
        color #666
      .btn
        width 244px
        height 45px
        margin 20px auto
        background #B4282D
        span 
          display block
          color #fff
          height 45px
          line-height 45px
</style>
