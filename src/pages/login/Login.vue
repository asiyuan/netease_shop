<template>
  <div class="login_wrap">
    <Header class="login_header">
      <div class="left">
        <i class="iconfont iconshouye"></i>
      </div>
      <div class="middle">
        <h2>网易严选</h2>
      </div>
      <div class="right">
        <i class="iconfont iconsousuo6"></i>
        <i class="iconfont iconqicheqianlian-"></i>
      </div>
    </Header>

    <div class="p_session">
      <div class="logo">
        <h1>
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </h1>
      </div>
     

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .login_wrap
    width 100%
    height 100%
    background #ffffff
    .login_header
      display flex
      width 100%
      height 50px
      background #f4f4f4  
      align-items center
      justify-content space-around
      i 
        font-size 22px
        &:last-child
          margin-left 20px
      h2
        font-size 20px
        font-family "楷体","楷体_GB2312"
        font-weight bold
</style>
