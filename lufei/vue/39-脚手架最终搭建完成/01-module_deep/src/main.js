import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
// 如果是基于模块化机制 Vue.use(VueRouter)
Vue.use(VueRouter)
// 声明组件
import Home from './components/Home/Home.vue'
import Course from './components/Course/Course.vue'

// 创建路由信息对象
const router = new VueRouter({
    // 配置路由信息
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/course',
            name:'Course',
            component:Course
        }
    ]
})
console.log(router)
new Vue({
    el:'#app',
    router,
    data(){
        return {
            
        }
    },
    render:c=>c(App),
    // template:`<App />`,
    components:{
        App
    }
})