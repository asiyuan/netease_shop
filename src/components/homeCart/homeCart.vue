<template>
  <div class="home_wrap">
    <ul class="home_cart">
      <li v-for="(item, index) in homeCart" :key="index">
        <p>{{item.title}}</p>
        <img :src="item.picUrl" alt="">
        <div>
          <i class="iconfont iconyanjing"></i>
          <span>13w人看过</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    homeCart: Array
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll('.home_wrap', {
          pullDownRefresh: true,
          pullUpLoad: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
      // 下拉刷新
      /* this.scroll.on('pullingDown', (e) => {
        
      }) */
      this.scroll.on('pullingUp', (e) => {
        console.log('pullup', e)
        this.$store.dispatch('reqHomeCart', 2)
      })
    })
  },
  methods: {
    
      
  }
  
}
</script>

<style lang="stylus" scoped>
  .home_wrap
    height 600px
    li
      margin-bottom 10px
      width 100%
      height 300px
      background #fff
      display flex
      flex-direction column
      justify-content space-around
      img 
        width 345px
        height 188px
      p 
        margin 0 15px
        font-size 18px
</style>
