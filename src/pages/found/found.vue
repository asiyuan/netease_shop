<template>
  <div>
    <div class="found_wrap" v-if="tabId === 9">
      <ul>
        <li v-for="(item, index) in knowledgeFound" :key="index" v-if="item.style === 1">
          <Cart :item='item'/>
        </li>
        <li v-else>
          <SmallCart :item='item'/>
        </li>
      </ul>
    </div>

    <div class="found_wrap" v-if="tabId === 7"> 
      7
    </div>
    <div class="found_wrap" v-if="tabId === 10"> 
      10
    </div>
    <div class="found_wrap" v-if="tabId === 12"> 
      12
    </div>
    <div class="found_wrap" v-if="tabId === 4"> 
      4
    </div>
    <div class="found_wrap" v-if="tabId === 6"> 
      <HomeCart :homeCart='homeCart'/>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Cart from '@/components/cart/cart'
import SmallCart from '@/components/cart/smallCart'
import HomeCart from '@/components/homeCart/homeCart'

export default {
  props: {
    tabId: Number
  },
  components: {
    Cart,
    SmallCart,
    HomeCart
  },
  computed: {
    ...mapState(['knowledgeFound', 'homeCart']),
    ...mapGetters(['knowLedgeFoundSmall']),
  },
 /*  mounted () {
    const id = this.$route.params.id*1
    this.tabId = id
  }, */
}
</script>

<style lang="stylus" scoped>
  .found_wrap
    li
      margin 10px 0
</style>
