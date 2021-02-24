<template>
  <div>
    我是首页2
    <Son title='lee' @handler='handlerClick' />
    <Son :msg='msg' />

    <button @click='busHandler'>通过bus对象传值</button>
    <br />
    getCount:{{ getCount }}
    <br />
    count:{{ count }}
    <br />
    countAlias:{{ countAlias }}
    <br />
    countPlusLocalState:{{ countPlusLocalState }}
    <br />
    <!-- countSimp:{{ countSimp }} -->
  </div>
</template>

<script>
  // 1.声子 挂子 用子 局部组件的使用
  import {
    mapState
  } from 'vuex'
  import Son from './Son'
  export default {
    name: 'Home2',
    data() {
      return {
        msg: "我是父组件的信息",
        localCount: 6
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
      getCount() {
        return this.$store.state.count
      },
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        count: state => state.count,
        countAlias: 'count',
        countPlusLocalState(state) {
          return state.count + this.localCount
        }
      })
    }
  }
</script>

<style scoped>

</style>
