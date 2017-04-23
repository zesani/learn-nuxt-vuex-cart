import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    cart: [
      {
        id: 0,
        name: 'vue',
        price: 30,
        amount: 2
      }
    ],
    products: [
      {
        id: 0,
        name: 'vue',
        price: 30
      },
      {
        id: 1,
        name: 'react',
        price: 40
      },
      {
        id: 2,
        name: 'angular',
        price: 50
      },
      {
        id: 3,
        name: 'PHP',
        price: 60
      }
    ]
  },
  getters: {
    products: state => {
      return state.products
    },
    cart: state => {
      return state.cart
    }
  },
  actions: {
    addToCart (context, payload) {
      context.commit('addToCart', payload)
    },
    removeFromCart (context, index) {
      context.commit('removeFromCart', index)
    }
  },
  mutations: {
    addToCart (state, payload) {
      let existsItem = state.cart.find(item => item.id === payload.id)
      if (existsItem) {
        existsItem.amount++
      } else {
        state.cart.push({
          ...payload,
          amount: 1
        })
      }
    },
    removeFromCart (state, index) {
      let pos = state.cart.findIndex(item => item.id === index)
      state.cart.splice(pos, 1)
    }
  }
})

export default store
