<template>
  <div class="p_wrap">
    <Header class="p_header">
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
        <h1></h1>
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

    .p_session
      width 100%
      height 100%
      background #f4f4f4
</style>
