<template>
  <div>
    <div class="categoryList">
      <span @click = 'handlerClick(index)' v-for="(item,index) in categoryList" :key = "item.id" :class='{active:currentIndex==index}'>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course',
    data(){
      return {
        categoryList:[],
        currentIndex:0,
      }
    },
    methods:{
      handlerClick(i){
          this.currentIndex = i;
      },
      getCategoryList(){
        this.$https.get('http://127.0.0.1:8090/category')
        .then((res)=>{
          console.log(res);
          var data = res.data;

          if(data.error_no === 0){
            this.categoryList = data.data;
          }
        })
        .catch((err)=>{
          console.log('获取列表失败',err);
        })
      }
    },
    created(){
      this.getCategoryList()
    }
  }
</script>

<style scoped>
span{
  padding: 0 20px;
}
</style>
