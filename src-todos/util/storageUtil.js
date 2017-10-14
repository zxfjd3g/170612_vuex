var STORAGE_KEY = 'todos'
export default {
  fetch () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
