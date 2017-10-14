import storageUtil from '../util/storageUtil'
import {RECEIVE_TODOS, ADD_TODO, REMOVE_TODO, DELETE_DONE, UPDATE_ALL_TODOS} from './types'

export default {
  readTodo ({commit}) {
    setTimeout(() => {
      const todos = storageUtil.fetch()
      // 提交commit触发mutation调用
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  },

  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  removeTodo ({commit}, index) {
    commit(REMOVE_TODO, {index})
  },

  deleteDone ({commit}) {
    commit(DELETE_DONE)
  },

  updateAllTodos ({commit}, isCheck) {
    commit(UPDATE_ALL_TODOS, {isCheck})
  }
}