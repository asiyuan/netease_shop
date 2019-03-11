<template>
  <div class="p_wrap">
    <Header class="p_header">
      <div class="left" @click='$router.replace("/home")'>
        <i class="iconfont iconshouye"></i>
      </div>
      <div class="middle">
        <h2>网易严选</h2>
      </div>
      <div class="right">
        <i class="iconfont iconsousuo6" @click='$router.push("/search")'></i>
        <i class="iconfont iconqicheqianlian-"></i>
      </div>
    </Header>

    <div class="p_session">
      <div class="logo">
        <h1>
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </h1>
      </div>
      <div class="btnWrap">
        <div class="phone_login" @click="$router.push('/login')">
          <i class="iconfont iconshouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="email_login">
          <i class="iconfont iconyouxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          手机号快捷注册
        </div>
      </div>

      <div class="bottom_wrap">
        <div class="itemWrap">
          <i class="iconfont iconchangyonglogo28"></i>
          <span>微信</span>
        </div>
        <div class="itemWrap">
          <i class="iconfont iconQQ"></i>
          <span>QQ</span>
        </div>
        <div class="itemWrap">
          <i class="iconfont iconweibo"></i>
          <span>微博</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .p_wrap
    width 100%
    height 100%
    background #f4f4f4
    .p_header
      display flex
      width 100%
      height 50px
      background #fff
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

    .p_session
      width 100%
      height 600px
      background #f4f4f4
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      .logo
        img
          width 35vw
          height 6vh
      .btnWrap
        margin-top -150px 
        width 90%
        .phone_login
          wdith 100%
          height 40px
          border 1px solid #b4282d
          line-height 40px
          text-align center
          color #fff
          background #b4282d
        .email_login
          wdith 100%
          height 40px
          border 1px solid #b4282d
          line-height 40px
          text-align center
          margin 10px 0
        .register
          wdith 100%
          height 40px
          text-align center

      .bottom_wrap
        .itemWrap
          float left
          padding 0 20px
          color #7f7f7f
          border-right 1px solid #7f7f7f
          &:last-child
            border-right none
</style>
