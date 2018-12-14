<template>
  <div class='next-page' >
    <!--<router-link :to="count" class='next-to' >-->
    <div  class='next-to' v-model='step' @click='childMethod'>
      <span>{{text}}</span>
      <img src='../../static/img/next-btn.png' class='next-btn'>
    </div>
    <!--</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'nextBtn',
  props:{
    text:{type:String, default: ''},
    count:{type:String, default: ''},
    step:{type:Number, default: 0}
  },
  data () {
    return {
    }
  },
  methods:{
    childMethod() {
      console.log('请求父组件方法');
      this.$emit('parentMethod','/next');  //使用$emit()引入父组件中的方法 //parentMethod在父组件的子组件上写 @parentMethod=''某函数
    }
  }
}
</script>

<style scoped lang="scss">
  .next-page{
    color: #1486D5;
  .next-btn{height: 1.1rem;margin-left: 0.1rem;display: inline-block;margin-top: 0.45rem;}
  .next-to{
    color:#1486D5;
  span{font-size:1.2rem;line-height: 2rem }
  }
  margin:3rem auto 0;
  text-align: center;
  }
</style>
