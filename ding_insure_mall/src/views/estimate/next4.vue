<template>
  <div class="estimate">
    <topTalk :talkList='talkList'></topTalk>
    <checker v-model="property" default-item-class="check-item"  selected-item-class="check-item-selected" :radio-required='$store.state.isRequired'>
      <checker-item v-for="(item,index) in propertyList" :key="index" :value="item" v-model="item.key">{{item.name}}</checker-item>
    </checker>
    <nextBtn :text='text'  @parentMethod='addstepNum'></nextBtn>
    <ul class='clearfix step'>
      <li v-for='i in 4' :key='i' :class='{active:i==parseInt(num-1)}'></li>
    </ul>
  </div>
</template>

<script>
  import nextBtn from '../../components/nextBtn'
  import topTalk from '../../components/topTalk'
  import{   Checker, CheckerItem,TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'next4',
    directives: {
      TransferDom
    },
    components:{
      Checker, CheckerItem,
      nextBtn,
      topTalk
    },
    data () {
      return {
        text:'立即分析',
        talkList:['最后，告诉小微您的企业资产总额吧'],
        num:5,
        property: this.$store.state.app.property,//默认规模
        propertyList:[
            {key:0,name:'100万以下'},
            {key:1,name:'100万-500万'},
            {key:2,name:'500万-2000万'},
            {key:3,name:'2000万以上'},
        ],
      }
    },
    methods:{
      addstepNum(str){
          this.getProperty();
          this.$router.push({
            path: str+this.num,
          })
      },
      getProperty(){
        this.$store.commit('setProperty',this.property);
      }
    },
    mounted(){
      let imgSrc=require('../../../static/img/estimate-bg.png')
      document.querySelector('body').setAttribute('style', 'background:#fff url('+imgSrc+') no-repeat;background-size:100% 100%;')
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
 /* @function r($px){
  @return $px / 75px * 1rem;
  }*/

 @function r($px) {
   @return $px /2/18.75 * 1rem;
 }
 @import "../../../src/assets/css/estimate.scss";
  .estimate{
    width: 100%;
    margin-bottom: 20px;
  }
</style>
