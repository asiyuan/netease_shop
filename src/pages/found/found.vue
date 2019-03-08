<template>
  <div class="found_wrap">
    <ul>
      <li >
        <Cart/>
      </li>
      <li>
        <SmallCart/>
      </li>
      <li>
        <SmallCart/>
      </li>
      <li>
        <SmallCart/>
      </li>
      <li>
        <SmallCart/>
      </li>
      <li>
        <SmallCart/>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Cart from '@/components/cart/cart'
import SmallCart from '@/components/cart/smallCart'

export default {
  components: {
    Cart,
    SmallCart
  }
}
</script>

<style lang="stylus" scoped>
  .found_wrap
    li
      margin 10px 0
</style>
