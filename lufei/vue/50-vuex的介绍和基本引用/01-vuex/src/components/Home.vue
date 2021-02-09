<template>
  <div>
    我是首页
    <h1>我是父组件中 {{ myNum }}</h1>
  </div>
</template>

<script>
  import Son from './Son.vue'
  export default {
    name: 'Home',
    components: {
      Son
    },
    computed:{
      myNum:function(){
        return this.$store.state.num;
      }
    }
  }
</script>

<style scoped>

</style>
