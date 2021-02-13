// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import Axios from 'axios'
// 将axios挂载到Vue原型上
Vue.prototype.$https = Axios

// 设置公共的URL
Axios.defaults.baseURL = 'http://127.0.0.1:8090/';

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    num: 1
  },
  mutations: {
    setMutaNum(state, val) {
      console.log(val);
      state.num += val;
    },
    setMutaAsync: function(state, val) {
      state.num += val;
    }
  },
  actions: { // actions里面都是异步的方法
    // Action 提交的是 mutation，而不是直接变更状态。
    setActionNum(context, val) {
      context.commit('setMutaNum', val)
    },
    setActionAsync: function(context, val) {
      setTimeout(() => { // 异步执行
        context.commit('setMutaAsync', val)
      }, 1)
    }
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
