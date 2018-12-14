<template>
  <div id='customerCare'>
    <div class='head'>
      <flexbox class='head-inner'>
        <flexbox-item style='margin-left:0'><div class="flex-div"><img src='../../../static/img/ewm.png'></div></flexbox-item>
      </flexbox>

      <div class='main'>
          <p>您可以扫码上方二维码添加客服人员微信</p>
          <p>我们会有专人为您解决您遇到的问题</p>
          <p>或者搜索客服人员账号：jinhekefu018</p>
      </div>
    </div>

  </div>

</template>
<script>
  import{  Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'customerCare',
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
  $px15:15px;
  $white:#ffffff;
  $baseFontSize:12px;
  $FontSize14:14px;
  $midBlackColor:#333333;
  #customerCare {
    .head {
      height: 130px;
      background: $lakeBlue;
      border-bottom-left-radius:30%;
      border-bottom-right-radius: 30%;
      padding: 15px;
      .head-inner {
        margin: 40px auto 0;
        .flex-div {
          padding: $px15;
          margin: auto;
          width: 160px;
          background: $white;
          border-radius: $px5;
          box-shadow: 0 0 6px lightblue;
          img {
            width: 100%;
            display: block;
            margin: auto
          }
        }

      }

    }
    .main {
      font-size: $FontSize14;
      color: $midBlackColor;
      padding: $px15;
      p {
        width: 260px;
        margin: auto;
        text-align: justify
      }
    }
  }
</style>
