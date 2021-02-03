<template>
  <div id="app">
    <h2>steven</h2>
    <router-link :to = '{name:"Home"}'>首页</router-link>
    <router-link :to = '{name:"Course"}'>免费课程</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h2{
  color: red;
}
</style>
