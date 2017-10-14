import Vue from 'vue'
import app from './app.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(app),
  store  // 所有组件都多个一个属性: $store
})