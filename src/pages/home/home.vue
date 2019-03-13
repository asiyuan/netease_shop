<template>
  <div class="home_wrap">
    <Header class="head">
      <h1 slot="left">
        <span>网易严选</span>
      </h1>
      <div slot="middle">
        <input type="text" placeholder="搜索商品，共21712件好物" @focus="handleFocus">
        <i class="iconfont iconsousuo6 icon"></i>
      </div>
      <div slot="right">
        <a href="">登录</a>
      </div>
    </Header>

    <NavList/>
    <transition name="fade">
      <div class="mask" v-show="isMaskShow">
        <span>全部分类</span>
        <ul>
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
    </transition> 
    <div class="toggle" @click="openMask">
      <div class="icon" :class="{toggleActive: fade}"></div>
    </div>
    <Banner />

    <div class="feature">
      <ul>
        <li>网易自营品牌</li>
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
      </ul>
    </div>

    <div class="h_category">
      <ul>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png" alt="">
          <span>服饰鞋包</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
          <span>美食酒水</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
          <span>个户清洁</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png" alt="">
          <span>限时购</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
          <span>母婴亲子</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/23be40a05926faf2f2a81a08a1c53164.png" alt="">
          <span>运动旅行</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
          <span>数码家电</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/e83bd330713b66a8d4e8eb0cefed8996.png" alt="">
          <span>礼品特色</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/51f5a91f10ba745ec68340b98315acf5.png" alt="">
          <span>超级会员</span>
        </li>
      </ul>
    </div>

    <div class="women_info">
      <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="" class="item_1">
      <div class="w_item">
        <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
        <img src="https://yanxuan.nosdn.127.net/15520281195103024.jpg?imageView&thumbnail=375x0&quality=75" alt="">
      </div>
    </div>

    <div class="new_people">
      <h2>-&nbsp;&nbsp;新人专享礼&nbsp;&nbsp;-</h2>
      <div class="left">
        <span>新人专享礼包</span>
        <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
      </div>
      <div class="right">
        <div class="r_top">
          <h3>福利社</h3>
          <span>今日特价</span>
          <img src="http://yanxuan.nosdn.127.net/4eb8b9181ce092f798aad1050369a9de.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
        <div class="r_bottom">
          <h3>新人拼团</h3>
          <span>1元起包邮</span>
          <img src="http://yanxuan.nosdn.127.net/db53cb751965b843975e9e3bfcbaf227.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
      </div>
    </div>

    <div v-for="(item, index) in home.categoryModule" :key="index">
      <HomeScroll :item='item' :index='index'/>
    </div>

    <div class="footer">
      <div class="f_mid">
        
          <span>下载APP</span>
          <span>电脑版</span>
          <p>食品经营许可证：JY13301080111719</p>
          <p>天才樱木花道版权所有 © 2019-</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ajax from '@/api/ajax'
import Header from '@/components/header/header'
import NavList from '@/components/navList/navList'
import Banner from '@/components/banner/banner'
import HomeScroll from '@/components/homeScroll/homeScroll'
export default {
  components: {
    Header,
    NavList,
    Banner,
    HomeScroll
  },
  data () {
    return {
      isMaskShow: false,
      fade: false
    }
  },
  methods: {
    handleFocus () {
      console.log(123)
      this.$router.push('/search')
    },
    openMask () {
      this.isMaskShow = !this.isMaskShow
      this.fade = !this.fade
    }
  },
  created () {
    this.$store.dispatch('reqHome')
  },
  computed: {
    ...mapState(['home'])
  }
}
</script>

<style lang="stylus" scoped>
  .home_wrap
    width 100%
    background #f4f4f4
    .head
      width 100%
      position fixed
      z-index 10
      height 46px
      display flex
      align-items center
      justify-content space-around
      h1
        span
          font-size 18px
          font-weight bold
          font-family: "楷体","楷体_GB2312"
      input 
        position relative
        background #f4f4f4
        height 32px
        width 220px
        border-radius 10px
        outline none
      input::placeholder 
        color #666
        font-size: 14px
        text-indent 30px
      i
        position absolute
        left 110px
        top 15px
      a 
        padding 2px 5px
        border 1px solid #b4282d
        border-radius 5px
        font-size 12px
        color #b4282d
    .mask
      top 50px
      width 100%
      height 186px
      background #fff
      position absolute
      transform translateY(-180deg)
      z-index 10
      span  
        margin 10px 0 0 20px
      ul
        margin 20px 0 0 20px
        li
          float left
          width 70px
          height 30px
          margin-bottom 20px
          border 1px solid #ccc
          text-align center
          line-height 30px
          font-size 14px
          margin-right 8px
          

    .toggle
      position absolute
      top 46px
      right 0
      width 50px
      height 30px
      background #fff
      z-index 100
      display flex
      align-items center
      justify-content center
      .icon
        width 15px
        height 15px
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
        background-size 100%
        transition transform .5s
        &.toggleActive
          transform rotate(180deg)
        
    .feature
      width 100%
      height 30px
      background #fff
      ul
        height 30px
        display flex
        justify-content space-around
        align-items center
        li
          float left
          font-size 14px
          color #b4282d

    .h_category
      background #ffffff
      ul
        display flex
        align-items center
        flex-wrap wrap
        justify-content space-around
        li
          padding 5px
          display flex
          flex-direction column
          font-size 12px
          align-items center
          span 
            margin-top 6px
          img 
            width 55px
            height 55px

    .women_info
      width 100%
      height 220px
      background #fff
      padding 10px 5px
      box-sizing border-box
      .item_1
        width 100%
        border-radius 10px 10px 0 0
      .w_item
        img 
          float left
          width 50%

    .new_people
      width 100%
      height 300px
      background #fff
      box-sizing border-box
      padding 10px
      h2
        text-align center
        font-size 16px
        margin-bottom 20px
      .left 
        float left
        width 45%
        height 200px
        background #F9E9CF
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        img   
          width 120px
          height 120px
      .right
        width 45%
        float left
        height 200px
        margin-left 10px
        div
          display flex
          align-items center
          justify-content space-around
          width 180px
          height 100px
          img
            width 80px
            height 80px
        .r_top
          background #FBE2D3
        .r_bottom
          background #FFECC2

    .footer
      margin-bottom 60px
      width 100%
      height 120px
      background #414141
      .f_mid
        width 100%
        margin 30px 60px
        padding 20px
        box-sizing border-box
        
        span 
          color #fff
          width 70px
          height 20px
          display inline-block
          border 1px solid #999
          text-align center
          font-size 14px
          line-height 20px
          margin-left 20px
        p 
          margin-top 10px
          font-size 12px
          color #ffffff
          line-height 15px
</style>

