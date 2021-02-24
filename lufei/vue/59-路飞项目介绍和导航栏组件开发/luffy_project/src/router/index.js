import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  // 1.创建匹配路由组件 2.配置路由信息 3.在router-link中使用
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home/',
      name: 'Home',
      component: Home
    }
  ]
})
