<template>
  <div class="estimate">
    <topTalk :talkList='talkList'></topTalk>
    <checker v-model="scaleNum" default-item-class="check-item"  selected-item-class="check-item-selected" :radio-required='$store.state.isRequired'>
      <checker-item v-for="(item,index) in scaleList" :key="index" :value="item" v-model="item.key">{{item.name}}</checker-item>
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
    name: 'next3',
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
        talkList:['接下来，告诉小微您的企业人数吧'],
        num:4,
        scaleNum:this.$store.state.app.scale,//默认规模
        scaleList:[
            {key:0,name:'0-20人'},
            {key:1,name:'20-99人'},
            {key:2,name:'100-499人'},
            {key:3,name:'500-999人'},
            {key:4,name:'1000-9999人'},
            {key:5,name:'10000人以上'},
        ],
      }
    },
    methods:{
      addstepNum(str){
          this.getScale();
          this.$router.push({
            path: str+this.num,
          })
      },
      getScale(){
        this.$store.commit('setScale',this.scaleNum);
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
