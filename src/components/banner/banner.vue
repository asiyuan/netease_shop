<template>
  <swiper :options="swiperOption" ref="mySwiper" class="banner">
    <swiper-slide>
      <img src="https://yanxuan.nosdn.127.net/27ed2c9546d04dcdbc9e7a8b72259be2.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://yanxuan.nosdn.127.net/d016f5485630bfa9c2c05149500689e8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&quality=75&thumbnail=750x0" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://yanxuan.nosdn.127.net/10ab4e151809a71613f37774b4c5bc6e.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </swiper-slide>
    
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        delay: 1000,
        loop: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
  .banner 
    img 
      width 375px
</style>
