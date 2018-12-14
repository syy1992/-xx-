<template>
  <div class="estimate">
    <!--<div v-transfer-dom>-->
      <!--<loading :show="isFetching" text="加载中"></loading>-->
    <!--</div>-->
    <!--<div v-show='step==0'>-->
      <topTalk :talkList='talkList'></topTalk>
      <nextBtn :text='text'   @parentMethod='addstepNum'></nextBtn>
    <!--</div>-->
    <!--<next v-show='showNext'></next>-->

  </div>
</template>

<script>
  import nextBtn from '../../components/nextBtn'
  import topTalk from '../../components/topTalk'
//  import{ Loading,
//    XInput,
//    TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'estimateIndex',
//    directives: {
//      TransferDom
//    },
    components:{
//      Loading,

      nextBtn,
      topTalk,
//      next
    },
    data () {
      return {
        talkList:['Hi，我是微链保智能机人——小微。','很高兴认识您！','让我们一起来对您的企业做一个风险评估吧！！'],
        talkList1:['首先，告诉小微您的企业名称吧'],
        isFetching:false,
        text:'马上开始',
        num:1

      }
    },
    methods:{
        addstepNum(str){
            this.$router.push({
              path: str+this.num,
//              path: '/next',
            })

        },
        showInputEvent(){
          this.inputShow=true;
          this.buttonShow=false;
        }
    },
    mounted(){
      let imgSrc=require('../../../static/img/estimate-bg.png')
      document.querySelector('body').setAttribute('style', 'background:#fff url('+imgSrc+') no-repeat;background-size:100% 100%;')
    }
  }
</script>

<style scoped lang="scss">
  @function r($px){
  @return $px / 75px * 1rem;
  }
  .estimate{
    width: 100%;
    margin-bottom: 20px;
    /deep/ .weui-cells{background-color: rgba(135, 206, 235, 0.3);border: 0.01rem solid rgba(135, 206, 235, 1);width: 80%;margin: 3rem auto;    border-radius: 5px;}
    /deep/  .weui-input{
      font-size:1rem ;
    }
    /deep/ .weui-input::-webkit-input-placeholder{
      color:#09478F;
    }
    .weui-btn{background-color: rgba(135, 206, 235, 0.1);color:#09478F;
      &:after{border: 0.01rem solid rgba(135, 206, 235, 0.8); }
      &:active {
        background-color: rgba(135, 206, 235, 0.1)!important;
      }
    }
  }
</style>
