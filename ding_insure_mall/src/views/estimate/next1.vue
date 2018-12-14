<template>
  <div class="estimate">
    <topTalk :talkList='talkList'></topTalk>
    <group>
      <x-input label-width="80%" placeholder="" v-model='company' @on-change='storeCompany' placeholder-align='center' placeholder='请输入企业名称'></x-input>
    </group>
    <nextBtn :text='text'  @parentMethod='addstepNum'></nextBtn>
      <ul class='clearfix step'>
        <li v-for='i in 4' :key='i' :class='{active:i==parseInt(num-1)}'></li>
      </ul>

  </div>
</template>

<script>
  import nextBtn from '../../components/nextBtn'
  import topTalk from '../../components/topTalk'
  import{ XInput,Group,TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'next1',
    directives: {
      TransferDom
    },
    components:{
      XInput,
      Group,
      nextBtn,
      topTalk
    },
    data () {
      return {
        isFetching:false,
        company:this.$store.state.app.companyName,
        text:'下一步',
//        next:'/1',
        talkList:['首先，告诉小微您的企业名称吧'],
        num:2,
      }
    },
    methods:{
      addstepNum(str){
        if(!this.company){
          this.$vux.toast.show({
            text: '企业名称不能为空',
            type:'text',
            width:'10em',
          });
          return;
        }else {
          this.$router.push({
            path: str+this.num,
//              path: '/next',
          })
        }
      },
      storeCompany(){
        this.$store.commit('setCompany',this.company);
      },
    },
    created(){},
    mounted(){
        let imgSrc=require('../../../static/img/estimate-bg.png')
      document.querySelector('body').setAttribute('style', 'background:#fff url('+imgSrc+') no-repeat;background-size:100% 100%;')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
/*  @function r($px){
  @return $px / 75px * 1rem;
  }*/

@import "../../../src/assets/css/estimate.scss";
@function r($px) {
  @return $px /2/18.75 * 1rem;
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
  };

</style>

