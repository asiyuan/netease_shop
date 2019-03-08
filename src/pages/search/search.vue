<template>
  <div class="search_wrap">
    <div class="search">
      <input type="text" v-model="defaultKeywords">
      <a href="" @click="$router.back()">取消</a>
    </div>
    <p>热门搜索</p>
    <div class="search_list">
      <div v-for="(hotKey, index) in hotKeywordVOList" :key="index">{{hotKey.keyword}}</div>
    </div>
  </div>
</template>

<script>
import ajax from '@/api/ajax'
export default {
  data () {
    return {
      hotKeywordVOList: [],
      defaultKeywords: []
    }
  },
  methods: {
    async getSearchItem () {
      const result = await ajax('/search')
      if(result.data.code === '200') {
        const {data} = result.data
        const {defaultKeywords, hotKeywordVOList} = data
        console.log(defaultKeywords,hotKeywordVOList)
        this.hotKeywordVOList = hotKeywordVOList
        this.defaultKeywords = defaultKeywords[Math.floor(Math.random()*6)].keyword
      } 
    }
  },
  mounted () {
    this.getSearchItem()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/minxi.styl'
  .search_wrap
    width 100%
    height 100%
    background #f4f4f4
    .search
      width 100%
      height 50px
      background #fff
      padding 10px 20px
      box-sizing border-box
      input 
       width 80%
       height 30px
       line-height 30px
       background #f4f4f4
       outline none
       border-radius 10px
       color #666
       font-size 14px
       text-indent 10px
      a
        margin-left 30px
    p
      background #fff
      color #999
    .search_list
      width 100%
      background #fff
      clearFix()
      padding 10px 0
      div
        float left
        border 1px solid #999999
        padding 5px 
        margin 15px 0 0 12px
        font-size 14px
        border-radius 5px
</style>

