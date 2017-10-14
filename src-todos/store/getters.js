export default {
  todos (state) {
    return state.todos
  },

  totalSize (state) {
    return state.todos.length
  },

  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },

  isAllComplete (state, getters) {
    return  getters.totalSize===getters.completeSize && getters.totalSize>0
  }
}