import Vue from 'vue'
import App from './App.vue'

import router from './router/indext.js'
// 1.导入
//import VueRouter from './App.vue'

// 2.use
//Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
