import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // 공통 관리되는 상태 값
    counter: 0
  },
  getters: {
    getCounter (state) { // 상태 값 조회
      return state.counter
    }
  },
  mutations: { // 상태값을 변경
    addCounter: function (state, payload) {
      console.log(payload)
      state.counter++
    },
    subCounter: function (state, payload) {
      console.log(payload)
      state.counter--
    },
    doubleCounter: function (state, payload) {
      console.log(payload)
      state.counter = state.counter * 2
    }
  },
  actions: { // 비동기 통신 및 동작
    subCounter: function ({commit, state}, payload) {
      return commit('subCounter')
    },
    asyncAddCounter: function (context, payload) {
      return setTimeout(() => {
        context.commit('addCounter')
      }, 1000)
    }
  }

})
