<template>
  <div>
    我是首页
    <Son title='lee' @handler='handlerClick' />
    <Son :msg='msg' />

    <button @click='busHandler'>通过bus对象传值</button>
  </div>
</template>

<script>
  // 1.声子 挂子 用子 局部组件的使用
  import Son from './Son'
  export default {
    name: 'Home',
    data() {
      return {
        msg: "我是父组件的信息"
      }
    },
    methods: {
      handlerClick(val) {
        // alert(val)
      },
      busHandler(val) {
        this.$bus.$emit('click', 'steven')
      }
    },
    components: {
      Son
    }
  }
</script>

<style scoped>

</style>
