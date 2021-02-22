<template>
  <div>
    <h2>我是子组件 {{ title }} -- {{ msg }} -- {{ name }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Son',
    data() {
      return {
        name: ''
      }
    },
    props: ['title', 'msg'],
    created() {
      this.$emit('handler', 1);
      this.$bus.$on('click', (name) => {
        // alert(name);
        this.name = name;
      })
    }
  }
</script>

<style scoped>

</style>
