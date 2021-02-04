<template>
  <div id="app">
    <div class="header">
      <ul>
        <li v-for="(item) in navList" :key='item.id'>
          <router-link :to = "{name:item.name}">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navList: [
        {id:1,title:'首页',name:"Home"},
        {id:2,title:'免费课程',name:"Course"}
      ]
    }
  }
}
</script>

<style>

</style>
