<template>
  <div class="found_wrap">
    <ul>
      <li v-for="(item, index) in knowledgeFound" :key="index" v-if="item.style === 1">
        <Cart :item='item'/>
      </li>
      <li v-else>
        <SmallCart :item='item'/>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Cart from '@/components/cart/cart'
import SmallCart from '@/components/cart/smallCart'

export default {
  components: {
    Cart,
    SmallCart
  },
  computed: {
    ...mapState(['knowledgeFound']),
    ...mapGetters(['knowLedgeFoundSmall'])
  }
}
</script>

<style lang="stylus" scoped>
  .found_wrap
    li
      margin 10px 0
</style>
