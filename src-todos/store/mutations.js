import {ADD_TODO, DELETE_TODO, SELECT_ALL, CLEAR_ALL_COMPLETED, READ_TODOS} from './types'

export default {
  // ADD_TODO(state, {todo}) { // 函数名: 'ADD_TODO'
  [ADD_TODO](state, {todo}) { // [ADD_TODO]是用来标识内部是一个变量名 函数名为ADD_TODO的值
    state.todos.unshift(todo)
  },

  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL](state, {checkAll}) {
    state.todos.forEach(todo => {
      todo.complete = checkAll
    })
  },

  [CLEAR_ALL_COMPLETED](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [READ_TODOS](state, {todos}) {
    state.todos = todos
  }
}