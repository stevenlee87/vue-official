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

// 把Home变成全局组件
import Home from '@/components/Home'
Vue.component(Home.name, Home)

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    num: 1,
    questionList: []
  },
  mutations: {
    setMutaNum(state, val) {
      console.log(val);
      state.num += val;
    },
    setMutaAsync: function(state, val) {
      state.num += val;
    },
    course_questions(state, data) {
      state.questionList = data;
      // console.log(state.questionList);
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
    },
    course_questions(context, courseId) {
      // 异步 aixos 异步
      Axios.get(`course_questions/?course_id=${courseId}`)
        .then((res) => {
          console.log(res);
          let data = res.data.data;
          console.log(data);
          context.commit('course_questions', data);
        })
        .catch((err) => {
          console.log(err)
        })
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
