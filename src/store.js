/*
store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state, {number}) {
    state.count += number
  },
  DECREMENT (state, {number}) {
    state.count -= number
  }
}

const actions = {
  increment ({commit}, number) {
    // commit('INCREMENT', number)  // 不太规范
    commit('INCREMENT', {number})  // 无论数据什么类型, 都需要将数据包装成对象传递给mutations
  },

  decrement ({commit}, number) {
    commit('DECREMENT', {number})
  },

  incrementIfOdd ({commit, state}, number) {
    if(state.count%2===1) {
      commit('INCREMENT', {number})
    }
  },

  incrementAsync({commit}, number) {
    setTimeout(() => {
      commit('INCREMENT', {number})
    }, 1000)
  }
}

const getters = {
  count(state) {
    return state.count
  },

  oddOrEven(state) {
    return state.count%2===0 ? '偶数2' : '奇数2'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

