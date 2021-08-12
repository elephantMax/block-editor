import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top: 50,
    left: 20,
    height: 50,
    width: 50,
    parentTop: null,
    parentLeft: null,
    parentWidth: null,
    parentHeight: null,
  },
  mutations: {
    setTop(state, value) {
      if(value < 0) return
      if(value > state.parentHeight - state.height) return
      state.top = value
    },
    setLeft(state, value) {
      if(value < 0) return
      if(value > state.parentWidth - state.width) return
      state.left = value
    },
    setHeight(state, value) {
      state.height = value
    },
    setWidth(state, value) {
      state.width = value
    },
    setParentTop(state, value) {
      state.parentTop = value
    },
    setParentLeft(state, value) {
      state.parentLeft = value
    },
    setParentHeight(state, value) {
      if(value < state.top) {
        state.top = value - state.width
      }
      state.parentHeight = value
    },
    setParentWidth(state, value) {
      if(value < state.left) {
        state.left = value - state.width
      }
      state.parentWidth = value
    }
  },
  actions: {
  },
  getters: {
    top: (s) => s.top,
    left: (s) => s.left,
    height: (s) => s.height,
    width: (s) => s.width,
    parentTop: (s) => s.parentTop,
    parentLeft: (s) => s.parentLeft,
    parentHeight: (s) => s.parentHeight,
    parentWidth: (s) => s.parentWidth,
  }
})
