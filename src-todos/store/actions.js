import storageUtil from '../util/storageUtil'
import {ADD_TODO, DELETE_TODO, SELECT_ALL, CLEAR_ALL_COMPLETED, READ_TODOS} from './types'

export default {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll({commit}, checkAll) {
    commit(SELECT_ALL, {checkAll})
  },

  clearAllCompleted({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },

  readTodos({commit}) {
    //模拟异步读取数据
    setTimeout(() => {
      const todos = storageUtil.readTodos()
      commit(READ_TODOS, {todos})
    }, 1000)
  }
}