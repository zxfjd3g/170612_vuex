import Vue from 'vue'
import App from './components/app'
import store from './store'

import './base.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
