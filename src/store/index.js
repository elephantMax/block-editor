import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top: 100,
    left: 100,
    height: 100,
    width: 100,
    parentTop: null,
    parentLeft: null,
    parentWidth: null,
    parentHeight: null,
  },
  mutations: {
    setTop(state, value) {
      value = +value
      if (value < 0) return
      if (value > state.parentHeight - state.height) return
      state.top = value
    },
    setLeft(state, value) {
      value = +value
      if (value < 0) return
      if (value > state.parentWidth - state.width) return
      state.left = value
    },
    setHeight(state, value) {
      value = +value
      if (state.top + +value < state.parentHeight) {
        state.height = value
      }
    },
    setWidth(state, value) {
      value = +value
      if (state.left + value < state.parentWidth) {
        state.width = value
      }
    },
    setParentTop(state, value) {
      state.parentTop = value
    },
    setParentLeft(state, value) {
      state.parentLeft = value
    },
    setParentHeight(state, value) {
      if (value < state.top) {
        state.top = value - state.width
      }
      state.parentHeight = value
    },
    setParentWidth(state, value) {
      if (value < state.left) {
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
