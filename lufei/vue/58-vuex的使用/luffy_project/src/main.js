// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 创建bus实例，挂载到原型上
let bus = new Vue()
Vue.prototype.$bus = bus;


// 1.导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 2.创建store实例
let store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    get_count(state) {
      state.count++;
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  actions: {
    get_count(context) {
      setTimeout(() => {
        context.commit('get_count')
      },500)
    }
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 3.挂载store实例到vue实例中 挂载后在各个组件中，都能通过this.$store获取到当前实例
  store,
  components: {
    App
  },
  template: '<App/>'
})
