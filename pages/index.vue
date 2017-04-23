<template>
  <div class="">
    <div v-for="product in products">
      <h1>{{ product.name }}</h1>
      <h2>{{ product.price }}</h2>
      <button @click="addToCart(product)">Buy</button>
    </div>
    <counter-display></counter-display>
  </div>
</template>

<script>
import CounterDisplay from '~/components/CounterDisplay'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    CounterDisplay
  },
  computed: {
    ...mapGetters([
      'products',
      'cart'
    ])
  },
  methods: {
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>

<style>
</style>
