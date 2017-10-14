/*
store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 相当于data对象
const state = {
  count: 0 // 初始化数据
}

/*
1. 一个对象,
2. 包含多个方法, 每个方法就是一个mutation
3. mutation中直接更新state数据
4. mutation由action来触发调用: commit(mutationName, {数据})
5. 在mutation中, 不能写逻辑和异步代码
 */
const mutations = {
  INCREMENT (state, {number}) {// 数据被封装在对象中
    state.count += number
  },
  DECREMENT (state, {number}) {
    state.count -= number
  }
}

/*
1. 一个对象
2. 包含多个方法, 每个方法就是一个action
3. action中触发mutation调用, 间接更新state
4. 在action中, 还可以执行逻辑和异步代码(定时器/ajax请求)
5. 在vue组件中触发调用: this.$store.dispatch(actionName, data)
 */
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

/*
1. 一个对象
2. 包含多个方法, 每个方法就是一个getter: 属性的get方法
3. 在vue组件中使用: this.$store.getters.xxx
 */
const getters = {
  count(state) {
    return state.count
  },

  oddOrEven(state) {
    return state.count%2===0 ? '偶数2' : '奇数2'
  }
}

// 向外暴露Store的实例对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

