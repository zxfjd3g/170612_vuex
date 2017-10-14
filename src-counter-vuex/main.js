import Vue from 'vue'
import counter from './counter.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(counter),
  store //配置store: 内部会在所有组件对象上添加$store
})