<template>
  <div id='login'>
    <group label-width="60px">
      <div class='title'>手机验证</div>
      <div class='desc'>
        <p>请输入您投保时的手机号 </p>
        <p>如有遗忘，您可以联系人工客服进行找回</p>
      </div>
      <div class='info'>
        <x-input title="+86" required mask="999 9999 9999" v-model.trim="phone" :max="13" is-type="china-mobile"  placeholder='请输入手机号' ref='phone'></x-input>
        <div class='code'>
          <x-input required title="验证码" class="weui-vcode"  keyboard="number" v-model.trim='identifyCode' placeholder="验证码" ref='identifyCodeRef' :is-type='this.tool.validateCode'></x-input>
          <x-button  v-show="sendAuthCode" @click.native="getAuthCode" type="primary"  class='send'>获取验证码(60)</x-button>
          <x-button  v-show="!sendAuthCode" @click.native="getAuthCode"  type="primary"  class='send'>{{auth_time}} 秒后重新发送</x-button>
        </div>
      </div>
      <x-button  @click.native="confirm" type="primary" class='ok'>确定</x-button>
      <div class='tip'>点击-确定，即表示已阅读并同意<a class='link'>《法律条款与隐私政策》</a></div>
    </group>
  </div>

</template>
<script>
  import{  Group, Cell,XInput,XButton,Checker, CheckerItem,TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'login',
//    directives: {
//      TransferDom
//    },
    components:{
      Group, Checker, CheckerItem,Cell,XInput,XButton
    },
    data () {
      return {
        phone:'',
        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        auth_time: 60, /*倒计时 计数器*/
        auth_timetimer:'',
        identifyCode:'',//验证码
      }
    },
    methods:{
      //验证码计时器
      getAuthCode() {
        if(!this.phone){
          this.showToast('手机号码不能为空');
          return;
        }
        if(this.$refs.phone.valid!=true){
            this.showToast('手机号码格式有误');
            return;
        }
        else {
          this.sendAuthCode = false;
          this.auth_time = 60;
          this.auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
              this.sendAuthCode = true;
              clearInterval(this.auth_timetimer);
            }
          }, 1000);
        }
      },
      confirm(){
        if(!this.phone){
            this.showToast('手机号码不能为空');
          return;
        }
        if(this.$refs.phone.valid!=true){
          this.showToast('手机号码格式有误');
          return;
        }
        if(!this.identifyCode){
          this.showToast('验证码不能为空');
          return;
        }
        if(this.$refs.identifyCodeRef.valid!=true){
          this.showToast('验证码必须为6位数字');
          return;
        }

      },
      showToast(text){
        this.$vux.toast.show({
          text: text,
          type:'text',
          width:'11em'
        });
      },
    },
    mounted(){
      document.querySelector('body').setAttribute('style', 'background:#fff')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>
<style lang='scss' scoped>
  @function r($px) {
    @return $px /2/18.75 * 1rem;
  }
  $lakeBlue:#479CFB;
  $smallFontSize:0.6rem;
  $px5:5px;
  $px10:10px;
  $px12:12px;
  $px13:13px;
  $px14:14px;
  $px15:15px;
  $px16:16px;
  $px24:24px;
  $white:#ffffff;
  $midBlackColor:#333333;
  $baseColor:#666666;
  $grayColor:#999999;
  #login{
    padding: $px15;
    .title{
      font-size:$px24;color:$midBlackColor;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .desc {
      margin-bottom: 8px;
      p {
        font-size: $px12;
        color: $baseColor;
      }
    }
  .info{
    margin-top: 20px;
  }
    /deep/  .weui-vcode{
      margin-right: 10px;
    }
    /deep/ .weui-label{font-size: $px14;}
    /deep/ .weui-input{font-size: $px14;}
    .weui-btn + .weui-btn{margin-top: 0;flex-basis: 120px;}
    .weui-btn_primary{background: $lakeBlue;}
    .send{width: 120px;font-size: $px12;    -webkit-flex-grow: 0;
      flex-grow: 0;
      flex-shrink: 0;
      padding-left:10px;
      padding-right:10px;
    }
    .ok{margin-top: 30px;}
    /deep/ .weui-cells{
      &:before{display: none}
      &:after{display: none}
      .weui-cell{
        background: #efefef;
        &:before{display: none}
        &:after{display: none}
      }
    }
    .vux-x-input{border-radius: 4px;}
    /deep/   .weui-icon-warn {
      padding: 0 0 0 5px;
      font-size: 16px;
      &:before {
        font-size: 16px;
      }
    }
    .code{margin-top: 10px;display: flex}
    .link{color: $lakeBlue;}
    .tip{font-size:$px12;color:$grayColor;text-align: center;margin: 10px 0;}
    /deep/  .weui-input{font-size: $px14;line-height:1.9rem;height: 1.9rem;}
    /deep/  .weui-cell__hd{
      line-height: 1.9rem;
      .weui-label{line-height: 1.9rem;}
    }
  }
</style>
