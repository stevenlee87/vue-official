<template>
  <div>
    <div class="categoryList">
      <span @click='categoryHandler(index,item.id)' v-for="(item,index) in categoryList" :key="item.id" :class='{active:currentIndex==index}'>
        {{ item.name }}
      </span>
      <div class="course">
        <ul>
          <li v-for = '(course) in courseList' :key="course.id">
            <h3>{{ course.name }}</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course',
    data() {
      return {
        categoryList:[], // 分类列表
        currentIndex:0,
        courseList:[], // 课程列表
        categoryId:0 // 默认全部课程id
      }
    },
    methods: {
      // 获取分类列表的数据
      getCategoryList() {
        this.$https.get('category')
          .then((res) => {
            console.log(res);
            var data = res.data;

            if (data.error_no === 0) {

              let obj = {
                id: 0,
                name: '全部',
                category: 0
              }
              this.categoryList = data.data;
              this.categoryList.unshift(obj)
              // 数组 删除任意一个指定的元素
              // 指定数组中的索引 删除指定的元素 数组.splice(起始位置,删除的个数)
            }
          })
          .catch((err) => {
            console.log('获取列表失败', err);
          })
      },
      categoryHandler(index,categoryId) {
        this.currentIndex = index;
        this.categoryId = categoryId;
        this.getCourseList();
      },
      getCourseList(categoryId){
        var _this = this;
        // this.$https.get('courses/?sub_category=0')
        this.$https.get(`courses/?sub_category=${this.categoryId}`)
        .then(function(res){
          var data = res.data;
          _this.courseList = data.data;
          // console.log(_this.courseList)
        })
        .catch(err=>{
          console.log(err)
        })
      }
    },
    created() {
      this.getCategoryList();
      this.getCourseList();
    }
  }
</script>

<style scoped>
  span {
    padding: 0 20px;
  }

  span.active {
    color: red;
  }
</style>
