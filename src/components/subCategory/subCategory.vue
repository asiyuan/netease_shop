<template>
  <div class="cl_wrap">
    <div class="all_list">
      <div class="navImg">
      </div>
      <div class="cate_list">
        <div class="item" v-for="(s, index) in subCategorys" :key="index">
          <img :src="s.wapBannerUrl" alt="">
          <span>{{s.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {  
  mounted () {
    this.$nextTick(() => {
      new BScroll('.cl_wrap', {
      })
    })
  },
  computed: {
    ...mapState(['categoryList']),
    subCategorys () {
      const category = this.categoryList.find(item => item.id == this.$route.query.categoryId)
      if (category) {
        return category.subCateList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cl_wrap
    width 70%
    height 560px
    overflow hidden
    margin-top 5px
    float right
    .navImg
      width 260px
      height 100px
      background-image url(http://yanxuan.nosdn.127.net/c427a2089ae4fb629a022badca3de63c.jpg?imageView&thumbnail=0x196&quality=75)
      background-size 100%
    .cate_list    
      display flex
      flex-wrap wrap
      align-items center
      flex 2
      .item 
        margin-left 6px
        width 77px
        height 110px
        img 
          width 77px
          height 77px
          display flex
          flex-direction column
          align-items center
        span 
          font-size 12px
</style>
