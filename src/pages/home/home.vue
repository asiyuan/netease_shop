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
    <Banner/>

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
  </div>
</template>

<script>
import ajax from '@/api/ajax'
import Header from '@/components/header/header'
import NavList from '@/components/navList/navList'
import Banner from '@/components/banner/banner'
export default {
  components: {
    Header,
    NavList,
    Banner
  },
  methods: {
    handleFocus () {
      console.log(123)
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home_wrap
    width 100%
    height 100%
    background #f4f4f4
    .head
      position relative
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
</style>

