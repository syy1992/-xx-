<template>
  <div class="estimate">
    <topTalk :talkList='talkList'></topTalk>
    <checker v-model="defaultIndustry" default-item-class="check-item"  selected-item-class="check-item-selected" :radio-required='$store.state.isRequired'>
      <checker-item v-for="(item,index) in industryList" :key="index" :value="item" v-model="item.key">{{item.name}}</checker-item>
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
    name: 'next2',
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
        text:'下一步',
        talkList:['然后，告诉小微您企业的行业吧'],
        num:3,
        defaultIndustry: this.$store.state.app.industry,//默认行业
        industryList:[
            {key:0,name:'物流运输行业'},
            {key:1,name:'教育培训行业'},
            {key:2,name:'健身机构'},
            {key:3,name:'体育活动/赛事组织'},
            {key:4,name:'其他类型企业'},
        ],
//        isRequired:true
      }
    },
    methods:{
      addstepNum(str){
        this.getIndustry()
          this.$router.push({
            path: str+this.num,
          })
      },
      getIndustry(){
        this.$store.commit('setIndustry',this.defaultIndustry);
      }
    },
    mounted(){
      let imgSrc=require('../../../static/img/estimate-bg.png')
      document.querySelector('body').setAttribute('style', 'background:#fff url('+imgSrc+') no-repeat;background-size:100% 100%;')
    }
  }
</script>

<style  lang="scss" scoped>
 /* @function r($px){
  @return $px / 75px * 1rem;
  }*/

 @import "../../../src/assets/css/estimate.scss";
 @function r($px) {
   @return $px /2/18.75 * 1rem;
 }

  .estimate{
    width: 100%;
    margin-bottom: 20px;
  }
</style>
