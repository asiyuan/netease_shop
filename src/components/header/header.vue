<template>
  <header>
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="middle"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  header 
    width 100%
    height 46px
    background #fff
</style>
