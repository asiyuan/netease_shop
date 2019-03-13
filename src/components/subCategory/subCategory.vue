<template>
  <div class="cl_wrap">
    <div class="all_list">
      <div class="navImg" :style="{backgroundImage: `url(${categoryBanner})`}">
      </div>
      <div class="cate_list">
        <div class="item" v-for="(s, index) in subCategorys" :key="index">
          <img v-lazy="s.wapBannerUrl" alt="">
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
      } else {
        if (this.categoryList[0]) {
          return this.categoryList[0].subCateList
        }
      }
    },
    categoryBanner () {
      const category = this.categoryList.find(item => item.id == this.$route.query.categoryId)
      if (category) {
        return category.bannerUrl
      } else {
        if (this.categoryList[0]) {
          return this.categoryList[0].bannerUrl
        }
      }
    }
  },
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
      background-repeat no-repeat
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
        text-align center
        img 
          width 77px
          height 77px
          display flex
          flex-direction column
          align-items center
        span 
          font-size 12px
</style>
