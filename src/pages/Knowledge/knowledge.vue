<template>
  <div class="k_wrap">
    <Header class="k_header">
      <div class="left" @click="$router.replace('/home')">
        <i class="iconfont iconshouye"></i>
      </div>
      <div class="middle">
        <router-link class="active select" to="/knowledge/found">发现</router-link>
        <router-link class="select" to="/knowledge/selection">甄选家</router-link>
      </div>
      <div class="right">
        <i class="iconfont iconsousuo6" @click="$router.push('/search')"></i>
        <i class="iconfont iconqicheqianlian-"></i>
      </div>
    </Header>

    <nav class="k_nav">
      <ul class="k_list" ref="tabList" @click="handleClick">
        <li v-for="(t, index) in tabs" :key="index" >
          <router-link :to="`/knowledge/found/${t.tabId}`">
            {{t.tabName}}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import ajax from '@/api/ajax.js'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      tabs: []
    }
  },
  mounted () {
    this._getTabs()
  },
  async created () {
    const result = await ajax('/knowledgeFound')
    this.$store.dispatch('reqKnowledgeFound')
    this.$store.dispatch('reqHomeCart')
  },
  methods: {
    async _getTabs () {
      const url = '/api/topic/v1/find/getTabs.json'
      const result = await ajax(url)
      if (result.code === '200') {
        console.log(result)
        result.data.forEach(item => this.tabs.push(item.tabName))
        this.tabs = result.data
      }
    },
    handleClick (e) {
     /*  const el = e.target
      const tabList = this.$refs.tabList
      for (let i = 0; i < tabList.children.length; i++) {
        tabList.children[i].classList.remove('active')
      }
      console.log(el)
      el.classList.add('active') */
    }
  },
  watch: {
    tabs () {
      this.$nextTick(() => {
        new BScroll('.k_nav', {
          scrollX: true,
          click: true
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/minxi.styl'
  .k_wrap
    width 100%
    background #f4f4f4
    .k_header
      display flex
      width 100%
      height 40px
      background #f4f4f4
      align-items center
      justify-content space-around
      i 
        font-size 22px
        &:last-child
          margin-left 20px
      .select
        font-size 16px
        &.active
          color #b4282d
          font-weight bold
          font-size 18px

    nav
      margin-top 5px
      background rgba(255,255,255,0.7)
      overflow hidden
      ul
        float left
        white-space nowrap
        li
          display inline-block
          height 36px
          line-height 36px
          margin 0 20px
          font-size 14px
          color #7f7f7f
          &.active
            border-bottom  2px solid #b4282d
          &.router-link-active
            border-bottom  2px solid #b4282d
</style>  
