<template>
  <div class="c_wrap">
    <div class="c_header">
      <div class="search">
        <div class="content">
          <i class="iconfont iconsousuo6"></i>
          <span>搜索商品, 共99999款好物</span>
        </div>
      </div>
    </div>

    <div class="session">
      <div class="navWrap">
        <div class="leftNav" @click="handleClick" ref="navList">
          <div class="item" v-for="(c, index) in categoryList" :key="index">
            <router-link :to="`/category/cateList?categoryId=${c.id}`"> {{c.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SubCategory from '@/components/subCategory/subCategory'
import BScroll from 'better-scroll'
export default {
 /*  data () {
    return {
      categoryNames: []
    }
  }, */
  components: {
    SubCategory
  },
  created () {
    this.$store.dispatch('reqCategoryList')
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll('.navWrap', {
        scrollX: true,
        click: true
      })
    })
  },
  methods: {
    handleClick (e) {
      const list = this.$refs.navList
      for (let i = 0; i < list.children.length; i++) {
        list.children[i].classList.remove('active')
      }
      
      e.target.classList.add('active')
    }
  },
  computed: {
    ...mapState(['categoryList']),
    /* categoryNames () {
      this.categoryList.forEach(item => {

      })
    } */
  }
}
</script>

<style lang="stylus" scoped>
  .c_wrap
    width 100%
    height 100%
    background #fff
    .c_header
      position relative
      top 0
      left 0
      z-index 100
      width 100%
      height 6%
      border-bottom 1px solid #f4f4f4
      .search
        width 90%
        height 30px
        margin 5px auto
        background #ededed
        border-radius 5px
        display flex
        justify-content center
        align-items center


    .session
      float left
      margin-top 5px
      width 25%
      height 80%
      .navWrap
        height 100%
        .leftNav
          width 100%
          font-size 14px
          .item
            position relative
            text-align center
            padding  8px 0
            height 30px
            line-height 30px
            &.active:before
              content: ''
              position absolute
              top 10px
              left 0
              width 2px
              height 25px
              background #ab2b2b
</style>
