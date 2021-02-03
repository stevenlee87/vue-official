<template>
  <div>
    <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
  </div>
</template>

<script>
  export default {
    name:'Home',
    data(){
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>
  h2{
    color: yellow;
  }
</style>
