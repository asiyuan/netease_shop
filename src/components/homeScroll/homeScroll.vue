<template>
  <div class="hs_wrap">
    <div class="bgImg">
    </div>
    <div class="wrap">
      <div class="list" ref="list">
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div>
          <img src="http://yanxuan.nosdn.127.net/cc863b46d890633445fb2a1354b01841.png?imageView&quality=65&thumbnail=330x330" alt="">
        </div>
        <div class="last">
          <h3>查看更多></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  methods: {
    initListScroll () {
      const listWrap = this.$refs.list
      let width = 0
      for (let i = 0; i < listWrap.children.length; i++) {
        width += 110
      }
      listWrap.style.width = width + 'px'

      new BScroll('.wrap', {
        scrollX: true
      })
    }
  },
  mounted () {
    this.initListScroll()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/minxi.styl'
  .hs_wrap
    margin-top 5px
    width 100%
    .bgImg
      width 100%
      height 180px
      background-image url(https://yanxuan.nosdn.127.net/4e1d85ec15f56ed9783d8e0288766b6d.jpg?imageView&thumbnail=750x0&quality=75)
      background-size 100%
      margin-bottom 10px
    .wrap
      width 100%
      overflow hidden
      .list
        width auto
        display flex
        div
          margin-left 10px
          img 
            width 100px
            height 100p
            
        .last
          width 100px
          height 100px
          background #F5F5F5
          display flex
          justify-content center 
          align-items center
</style>
