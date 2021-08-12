import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top: 50,
    left: 20,
    height: 50,
    width: 50
  },
  mutations: {
    setTop(state, value) {
      state.top = value
    },
    setLeft(state, value) {
      state.left = value
    },
    setHeight(state, value) {
      state.height = value
    },
    setWidth(state, value) {
      state.width = value
    }
  },
  actions: {
  },
  getters: {
    top: (s) => s.top,
    left: (s) => s.left,
    height: (s) => s.height,
    width: (s) => s.width,
  }
})
