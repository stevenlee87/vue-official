<template>
  <div>
    <h2>我是子组件 {{ mySonNum }}</h2>
    <button @click="addNum">同步修改+1</button>
    <button @click="addAsyncNum">异步修改+5</button>
  </div>
</template>

<script>
  export default {
    name: 'Son',
    methods: {
      addNum() {
        // 不要直接修改 state中的状态
        // commit触发这个事件是同步的
        // this.$store.commit('setNum', 1)
        this.$store.dispatch('setActionNum', 1)
      },
      addAsyncNum() {
        this.$store.dispatch('setActionAsync', 5)
      }
    },
    computed: {
      mySonNum: function() {
        return this.$store.state.num;
      }
    },
  }
</script>

<style scoped>

</style>
