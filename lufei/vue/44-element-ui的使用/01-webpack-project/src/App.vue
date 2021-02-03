<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link :to = '{name:"Home"}'>首页</router-link>
        <!-- <router-link :to = '{name:"Course",query:{userid:2}}'>免费课程</router-link> -->
        <router-link :to = '{name:"Course"}'>免费课程</router-link>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
