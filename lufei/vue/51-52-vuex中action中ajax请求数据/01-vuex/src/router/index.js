import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home/',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path:'/course/detail/web/:courseId',
      name: 'course.detail',
      component: CourseDetail
    }
  ]
})
