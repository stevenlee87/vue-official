<template>
  <div>
    我是首页
    <Son title='lee' @handler='handlerClick' />
    <Son :msg='msg' />

    <button @click='busHandler'>通过bus对象传值</button>
    {{ getCount }}
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
        this.$bus.$emit('click', 'steven');
        // 不能直接修改state,为了实现异步的操作，
        // 我们通过dispatch分发actions中声明的方法
        this.$store.dispatch('get_count');
      }
    },
    components: {
      Son
    },
    computed: {
      // 默认只有getter
      getCount() {
        return this.$store.state.count
      }
    }
  }
</script>

<style scoped>

</style>
