<template>
  <div class="nav_wrap" ref="wrap">
    <ul class="nav_list">
      <li>
        <a href="javascript:;">推荐</a>
      </li>
      <li>
        <a href="javascript:;">居家生活</a>
      </li>
      <li>
        <a href="javascript:;">服饰鞋包</a>
      </li>
      <li>
        <a href="javascript:;">美食酒水</a>
      </li>
      <li>
        <a href="javascript:;">个护清洁</a>
      </li>
      <li>
        <a href="javascript:;">母婴亲子</a>
      </li>
      <li>
        <a href="javascript:;">运动旅行</a>
      </li>
      <li>
        <a href="javascript:;">数码家电</a>
      </li>
      <li>
        <a href="javascript:;">礼品特色</a>
      </li>
    </ul>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  methods: {
    initNavScroll () {
      new BScroll('.nav_wrap', {
        scrollX: true
      })
    }
  },
  mounted () {
    this.initNavScroll()
  }
}
</script>

<style lang="stylus" scoped>
  .nav_wrap
    position fixed
    top 46px
    z-index 10
    background #fff
    overflow hidden
    .nav_list
      float left
      white-space nowrap
      li 
        display inline-block
        padding 0 10px
        height 34px
        line-height 34px
</style>
