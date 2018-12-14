<template>
  <div id='about'>
    <div class='head'>
      <flexbox class='head-inner'>
        <flexbox-item style='margin-left:0'><div class="flex-div"><img src='../../../static/img/logo1.png'></div></flexbox-item>
        <flexbox-item style='margin-left:0'><div class="flex-div"><img src='../../../static/img/logo2.png'></div></flexbox-item>
      </flexbox>
    </div>
    <div class='main'>
      <p>微链保是金阖科技旗下的专属公众平台，为客户提供了专业的保险科技服务。智能的风险分析可以根据企业信息提供风险评估和定制化的保险解决方案，并提供线上投保与保单管理等一站式保险服务。</p>
    </div>
  </div>


</template>
<script>
  import{  Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'about',
    components:{
      Flexbox, FlexboxItem,
    },
    data () {
      return {
      }
    },
    methods:{},
    mounted(){
      document.querySelector('body').setAttribute('style', 'background:#efeff4')
    },
  }
</script>
<style lang='scss' scoped>
  $lakeBlue:#479CFB;
  $px5:5px;
  $white:#ffffff;
  $baseFontSize:12px;
  $FontSize14:14px;
  $midBlackColor:#333333;
 #about {
   .head {
     height: 130px;
     background: $lakeBlue;
     border-bottom-left-radius: 30%;
     border-bottom-right-radius: 30%;
     padding: 15px;
     .head-inner {
       width: 80%;
       margin: 40px auto 0;
       background: $white;
       border-radius: $px5;
       box-shadow: 0 0 6px lightblue;
       .flex-div {
         padding: 25px 0;
         margin: auto;
         width: 100px;
         img {
           width: 100%;
           display: block;
           margin: auto
         }
       }
       .vux-flexbox-item {
         /*margin-left: 0;*/
         &:first-child {
           position: relative;
           &:after {
             content: "";
             position: absolute;
             right: 0;
             height: 100px;
             top: 30px;
             border-right: 1px solid rgba(211, 211, 211, .2);
             box-shadow: 0 0 3px 0 lightblue
           }
         }
       }
     }

   }
   .main {
     font-size: $baseFontSize;
     color: $midBlackColor;
     margin-top: 50px;
     padding: 15px;
     p {
       width: 80%;
       margin: auto;
       text-align: justify;
       font-size: $FontSize14;
     }
   }
 }
</style>
