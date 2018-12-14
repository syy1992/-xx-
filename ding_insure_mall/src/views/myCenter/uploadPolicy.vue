<template>
  <div id='uploadPolicy'>
    <div class='tip'>
      <div class='tip-inner'>
        您所购买的产品为纸质保险单，暂时无法为您提供在线浏览，您可以拍照上传您的纸质保险单，以备查看
      </div>
    </div>
    <group title='拍照上传' class='group'>
      <div  class='upload-btn'>拍照/上传</div>
    </group>
    <group title='上传示例' class='group'>
        <!--<div>上传图片最大不能超过10M</div>-->
      <div class='inner'>
        <img src='../../../static/img/example.png' class='upload-img'>
      </div>
    </group>
  </div>

</template>
<script>
  import{  Group,XButton  } from 'vux'
  export default {
    name: 'uploadPolicy',
    components:{
      Group,XButton
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
  $px10:10px;
  $px12:12px;
  $px15:15px;
  $px16:16px;
  $white:#ffffff;
  $midBlackColor:#333333;
  $baseColor:#666666;
  $grayColor:#999999;
  #uploadPolicy{

    .tip{width: 100%;background: $white;position: relative;
      .tip-inner{padding: $px15;box-sizing: border-box;font-size: $px12;color:$grayColor; text-align: justify; }
      &:after{
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        /*color: #d9d9d9;*/
        bottom: 0;
        border-bottom: 1px solid #d9d9d9;
        transform-origin: 0 100%;
        transform: scaleY(.5);
      }
    }
    .group{
      margin-top: $px10;
      .upload-btn{border-radius: 50px;background: $lakeBlue;width: 70%; margin: 15px auto;font-size: $px16;line-height: 40px;height: 40px;color:$white;text-align: center }
      /deep/ .weui-cells__title{background: #ffffff;font-size:$px16; margin:0;color: $midBlackColor;line-height: 40px;height: 40px;}
      /deep/ .weui-cells{
        margin-top: 0;
        &:before{left:15px;right:15px;}

      }
      .inner {
        padding: 15px;
        .upload-img {
          width: 100%
        }
      }
    }
  }
</style>
