<template>
  <div>
    <p v-for='(question) in questionList' :key='question.id'>{{ question.answer }}</p>
  </div>
</template>

<script>
  // 不建议使用vuex来请求数据！！！
  export default {
    name: "CousreDetail",
    created() {
      // console.log(this.$route.params.courseId);
      // course_qestions 写错了会提示：[vuex] unknown action type: course_qestions
      this.$store.dispatch('course_questions', this.$route.params.courseId)
    },
    computed:{
      questionList(){
        // console.log(this.$store.state.questionList)
        return this.$store.state.questionList
      }
    }
  }
</script>

<style scoped>

</style>
