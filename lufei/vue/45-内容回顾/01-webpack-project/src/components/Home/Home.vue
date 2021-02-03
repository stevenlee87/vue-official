// Content.vue
<template>
  <div>
    <h2>{{ msg }}</h2>
      <!-- v-html v-for一定要加key v-bind : @ v-model -->
    </div>
</template>

<script>
  export default {
    // 等于实例化对象
    data(){
      return {
      	  msg:'steven'
      }
    },
    methods:{

    },
    computed:{

    },
    created(){

    },
    mounted(){

    },
    filters:{
      '过滤器的名字':function(val,a){
        // a就是lee，val就是当前的数据
       }
    }
  }
</script>

<style scoped>

</style>
