/**
 * vuex的store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
state对象
  类似于data
 */
const state = {
  count: 0   // 初始化状态数据
}

/*
 mutations对象
  包含个方法: 能直接更新state
  一个方法就是一个mutation
  mutation只能包含更新state的同步代码, 也不会有逻辑
  mutation由action触发调用: commit('mutationName')
 */
const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT (state) { // ctrl + shift + x
    state.count--
  }
}

/*
actions对象
 包含个方法: 触发mutation调用, 间接更新state
 一个方法就是一个action
 action中可以有逻辑代码和异步代码
 action由组件来触发调用: this.$store.dispatch('actionName')
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

/*
getters对象
  包含多个get计算计算属性方法
 */
const getters = {
  oddOrEven (state) {
    return state.count%2===0 ? '偶数3' : '奇数3'
  },
  count (state) {
    return state.count
  }
}

// 向外暴露store实例对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

