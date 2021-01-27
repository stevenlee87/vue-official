<template>
    <div>
        <router-link :to = "{name:'Home'}">首页</router-link>
        <router-link :to = "{name:'Course'}">课程</router-link>
        
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
       name:'App',
       data(){
           return {
               
           }
       },
       methods:{
           
       }
    }
</script>
<style>
    
</style>