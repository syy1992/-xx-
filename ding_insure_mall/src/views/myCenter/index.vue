<template>
  <div id='center'>
    <!--<search  ref="search" :auto-fixed="autoFixed" placeholder='保单查询' @on-cancel='cancelSearch' @on-focus='focusSearch' @on-submit='submitSearch' @on-change='changeSearch' v-model='searchResult'></search>-->
    <header class='head'>
      <flexbox class='head-top'  v-if='getLoginState==false'>
        <flexbox-item class='head-top-left'>
          <div class="login-state" >未登录</div>
        </flexbox-item>
        <flexbox-item><x-button mini plain type="primary" style="border-radius:99px;" @click.native='login'>登录/注册</x-button></flexbox-item>
      </flexbox>
      <flexbox class='head-top' v-if='getLoginState==true'>
        <flexbox-item class='head-top-left'>
          <img src='' width='70'>
          <div class="login-state">{{name}}</div>
          <span class='small' >保障中</span>
        </flexbox-item>
      </flexbox>

      <flexbox class='head-mid'>
        <flexbox-item :span="8"></flexbox-item>
        <flexbox-item :span="2">
          <div class="flex-right">
            <p class="flex-right-top">{{count1}}</p>
            <p class="flex-right-bot">已保障</p>
          </div>
        </flexbox-item>
        <flexbox-item >
          <div class="flex-right">
            <p class="flex-right-top">{{count2}}</p>
            <p class="flex-right-bot">理赔中</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class='head-bot'>
        <flexbox-item>
          <a class='head-bot-a' @click='toPolicy'>
             <img src='../../../static/img/icon-text.png'>
            <p>保单管理</p>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class='head-bot-a' @click='toClaim'>
            <img src='../../../static/img/icon-time.png'>
            <p>理赔服务</p>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class='head-bot-a'  @click='toEstimateIndex'>
            <img src='../../../static/img/icon-report.png'>
            <p>风险报告</p>
          </a>
        </flexbox-item>
      </flexbox>
    </header>
    <div class='main'>
      <group title="更多服务" class='group'>

        <cell title="账号设置" is-link @click.native='toAccount'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/img/icon-account.png">
        </cell>
        <cell title="人工客服" is-link :link="{path:'/customerCare'}">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/img/icon-customService.png">
        </cell>
        <!--<cell title="关于微链保" is-link :link="{path:'/about'}">-->
          <!--<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/img/icon-about.png">-->
        <!--</cell>-->

      </group>
      <group  class='group' title="保单查询" style='margin-top: 10px;'>
        <search  ref="search" :auto-fixed="autoFixed" placeholder='输入手机号或保单号查询' @on-clear='cancelSearch' @on-cancel='cancelSearch' @on-focus='focusSearch' @on-submit='submitSearch' @on-change='changeSearch' v-model='searchResult' ></search>
        <div class='search-content' v-model="showSearch" >
          <div v-for='(item,index)  in searchList' :key='index'>
            <p>产品名称：{{item.productName}}</p>
            <p>保单号： {{item.policyNo}}</p>
            <p>被保人：<span v-for='(item1,index) in item.targetApplicantModelList'  :key='index'>{{item1.targetApplicantName}}</span></p>
          </div>
        </div>
      </group>
    </div>

<!--   <div v-transfer-dom>
      <popup v-model="showSearch" position="top" should-scroll-top-on-show height='100%'>
        <div class='pop-main'>cegsdds</div>
      </popup>
    </div>-->

  </div>

</template>
<script>
  import{ querystring,Popup,Search,Flexbox, FlexboxItem,Group, Cell,XInput,XButton,Checker, CheckerItem,TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'myCenter',
    directives: {
      TransferDom
    },
    components:{
      Popup,Search,Flexbox, FlexboxItem,Group, Checker, CheckerItem,Cell,XInput,XButton
    },
    data () {
      return {
       count1:0,
       count2:0,
        name:'金阖科技（北京）有限公司',
        searchValue:'',
        token:'',
        autoFixed:false,
        showSearch:false,
        searchResult:'',
        searchList:[],
        codeParam:''
      }
    },
    methods:{
      toAccount(){
        this.$router.push({
          path:'/account'
        })
//          if(!this.token){
//            this.$vux.toast.show({
//              text: '请先进行登录/注册',
//              type:'text',
//              width:'10em',
//            });
//            return;
//          }else{
//            this.$router.push({
//              path:'/account'
//            })
//          }
      },
      toPolicy(){
//        if(!this.token){
//          this.$vux.toast.show({
//            text: '请先进行登录/注册',
//            type:'text',
//            width:'10em',
//          });
//          return;
//        }else{
          this.$router.push({
            path:'/policy'
          })
//        }
      },
      toClaim(){
//        if(!this.token){
//          this.$vux.toast.show({
//            text: '请先进行登录/注册',
//            type:'text',
//            width:'10em',
//          });
//          return;
//        }else{
          this.$router.push({
            path:'/claim'
          })
//        }
      },
      toEstimateIndex(){
//        if(!this.token){
//          this.$vux.toast.show({
//            text: '请先进行登录/注册',
//            type:'text',
//            width:'10em',
//          });
//          return;
//        }else{
          this.$router.push({
            path:'/estimateIndex'
          })
//        }
      },
      login(){
          this.$router.push({
            path:'/login'
          })
      },
      cancelSearch(){
         this.showSearch=false;
         this.searchList=[];
      },
      focusSearch(){
        this.showSearch=true;
      },
      submitSearch(){
//        this.$refs.search.setBlur()
        let url='http://192.168.1.50:8081/insurance/list';
        let params={
          phoneOrPolicyNo:this.searchResult,
          pageNum:1,
          pageSize:10,
        };
        this.$http.get(url,{params: params}).then(({data}) => {
          console.log(data.data)
            if(data.code=='200'){
             this.searchList= data.data
            }

        }).catch(function (error) {
          console.log(error)
        });
      },
      changeSearch(){
          console.log(this.searchResult);
      },
      getCode(){
        var url=location.search;
//        console.log('url='+url)
        if (url.indexOf("code") == -1) {
          window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5c14f1290f9e0e12&redirect_uri=https%3A%2F%2Fwww.guohetech.com%2Fdist%2F%23%2Findex&response_type=code&scope=snsapi_userinfo&connect_redirect=1&state=1#wechat_redirect'
//       console.log('aaa')
        }else {
          let queryObj = querystring.parse(location.search.split("?")[1]);
           this.codeParam= decodeURIComponent(queryObj.code||'')
          console.log('code='+this.codeParam)
          this.getUserInfo(this.codeParam)
        }
      },
      getUserInfo(param){
        let url='http://47.104.24.10:8766/wx/authLogin';
//        let url='http://192.168.1.50:8766/wx/authLogin';
//        param='011hRGDd1rMzHs0eUBAd1yWKDd1hRGDA'
        this.$http.get(url,{ params:{code:param}}).then(({data}) => {
          console.log(data)
          if(data.code=='200'){
           console.log('getuserInfo='+data)
          }

        }).catch(function (error) {
          console.log(error)
        });
      }
    },
    mounted(){
      document.querySelector('body').setAttribute('style', 'background:#fff');
//      this.getCode()
//      this.getUserInfo()
    },
    computed: {
      getLoginState () {
        return this.$store.state.user.isLogin;
      },
    }
  }
</script>
<style  lang='scss' scoped>
  @function r($px){
    @return $px / 75px * 1rem;
  }
 $white:#ffffff;
 $lakeBlue:#479CFB;
 $baseFontSize:12px;
 $FontSize14:14px;
 $FontSize24:24px;
 $px5:5px;
 $px10:10px;
 $px15:15px;
 $px16:16px;
 $px18:18px;
 $px25:25px;
 $headHeight:130px;
 $baseColor:#666666;
 $midBlackColor:#333333;
  #center{
    .head{
      background: $lakeBlue;
      height: $headHeight;
      padding: $px15;
      .head-top{
        padding-top: $px10;
        .head-top-left{
          position: relative;
          .login-state {
            text-align: left;
            color: $white;
            font-size: $FontSize24;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .small{
            color: $lakeBlue;
            background: $white;
            padding: 2px 10px;
            border-radius: $px5;
            font-size: 0.7rem;
            position: absolute;
            bottom: -$px25;
            left: 0;
          }
        }
        .weui-btn_plain-primary{
          color: $lakeBlue;
          border: 1px solid $lakeBlue;
          background: $white;
          font-size:$FontSize14;
          float: right;
        }
      }
      .head-mid{
        padding-top: $px25;
        color: $white;
        .flex-right{
          .flex-right-top{
            font-size: $baseFontSize;
          }
          .flex-right-bot{
            font-size: $baseFontSize;
          }
        }
      }
      .head-bot{
        margin-top: $px5;
        background: $white;
        border-radius: $px5;
        box-shadow: 0 0 6px  lightblue;
        .head-bot-a{
          display: block;
          text-align: center;
          padding:$px10 0 ;
          color: $baseColor;
          font-size:$baseFontSize;
          font-weight: 600;
          img{width: $px25;display: block;margin: auto}
          p{margin-top:$px5;}
        }
      }
    }
    .main{
      margin-top: 30px;
      padding: $px15;
      .group{
        padding: 3px 0;
        border-radius: $px5;
        box-shadow: 0 0 6px  lightblue;
        /deep/ .weui-cells__title{
          color: $baseColor;
          font-size: $px18;
          font-weight: 600;
        }
        /deep/ .weui-cells{
          &:before{display: none}
          &:after{display: none}
          /deep/ .weui-cell{
            .vux-label{
              font-size: $baseFontSize;
              color:$midBlackColor;
            }
          }
        }
        /deep/ .vux-tap-active{
          -webkit-tap-highlight-color: transparent;
        }
        /deep/ .weui-cell_access{
          -webkit-tap-highlight-color: transparent;
        }
      }
    }
   /deep/ .weui-search-bar{z-index: 1000}
    /deep/ .pop-main{height: 100%}
    /deep/ .vux-popup-top{
      top:45px;
    }
    .search-content{
     font-size:$baseFontSize;
      div {
        padding: 10px 15px;
        p {

          line-height: 20px;
          /*    position: relative;
              &:after{
                position: absolute;
                content: '';

                transform-origin: 0 0;
                transform: scaleY(0.5);
                border-bottom: 1px solid #8c8c8c;
                left:0;
                right:0;
                bottom:0;
              }*/
        }
      }

    }
    /deep/  .weui-search-bar__label{span{font-size: $baseFontSize}}
    /deep/  .weui-search-bar__input{font-size: $baseFontSize}
    /deep/ .weui-search-bar__cancel-btn{font-size: $baseFontSize}
    /deep/ .weui-search-bar{
      background: #ffffff;
     &:after{display: none}
     &:before{display: none}
    }
    /deep/  .weui-search-bar__cancel-btn{color:$lakeBlue;}
  }

</style>

