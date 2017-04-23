<template lang="html">
  <div class="cart">
    <div v-for="item in cart">
      <h1>{{ item.name }} x {{ item.amount }}</h1>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cart'
    ])
  },
  methods: {
    ...mapActions([
      'removeFromCart'
    ])
  }
}
</script>

<style lang="css" scoped>
.cart {
  width: 500px;
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: #eee;
}
</style>
