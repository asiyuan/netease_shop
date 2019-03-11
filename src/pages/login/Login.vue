<template>
  <div class="login_wrap">
    <header class="p_header">
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
    </header>
    <LoginTemplate>

    </LoginTemplate>
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
    header  
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
</style>
