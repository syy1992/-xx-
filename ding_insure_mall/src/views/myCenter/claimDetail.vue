<template>
  <div id='policyDetail'>
    <div class='inner'>
      <flexbox :gutter="0" class='list' v-for='(item,index) in list' :key='index'>
        <flexbox-item  class='list-left'>
          <div  class='list-left-inner'>
            <div class="title">{{item.title}}</div>
            <div class="desc">保单号：{{item.policyNo}}</div>
            <div class="desc2">{{item.desc}}</div>
          </div>
        </flexbox-item>
        <div class='list-right'>
          <img :src='item.src'>
        </div>
      </flexbox>
    </div>
     <group>
       <div class='detail'>
         <p><span>被保险人：</span><label>{{insurant}}</label></p>
         <p><span>保障额度：</span><label>{{amount}}</label></p>
         <p><span>保障期限：</span><label>{{deadline}}</label></p>
         <p><label>查看</label><a class='link' :href='item.src' v-for='(item,index) in clauseList' :key='index'>{{item.name}}</a></p>
       </div>
     </group>
    <card :header="{title:'理赔流程'}">
      <div slot="content" class="card-content">
        <div class="card-content-inner">
          <div>
            <i class="iconfont icon-dianhua"></i>
            <span>报案</span>
          </div>
          <p>当出现事故时，请第一时间拨打保险公司电话报案</p>
        </div>
        <div class="card-content-inner">
          <div>
            <i class="iconfont icon-wenben"></i>
            <span>提交理赔材料</span>
          </div>
          <p>根据保险公司的要求，提供相关的材料</p>
        </div>
        <div class="card-content-inner">
          <div>
            <i class="iconfont icon-sousuo"></i>
            <span>资料审核</span>
          </div>
          <p>等待保险公司进行材料审核</p>
        </div>
        <div class="card-content-inner">
          <div>
            <i class="iconfont icon-anquan1"></i>
            <span>结案</span>
          </div>
          <p>资料正常通过审核，您将很快领取到赔偿款，理赔案件结束</p>
        </div>
      </div>
    </card>
    <group class='group'>
       <div><a>联系保险公司</a></div>
    </group>
    <group class='group'>
      <div>
        <p>容理赔过程中，如遇到任何问题，您可以添加我们的客服人员，微链保的服务人员回协助您遇到的问题</p>
      </div>
    </group>
  </div>

</template>
<script>
  import{  Flexbox, FlexboxItem,Group,Cell,Card} from 'vux'
  export default {
    name: 'claimDetail',
    components:{
      Flexbox, FlexboxItem,Group,Cell,Card
    },
    data () {
      return {
        list:[
          {
            title:'公众责任险-教培机构专属',
            policyNo:'92530802MA6KGP9L0P',
            desc:'本产品由中国人民财产保险股份有限公司承保',
            src:require('../../../static/img/icon-big-safe.png')
          },
        ],
        deadline:'2018-08-24-2019-08-23',
        insurant:'金阖科技',
        amount:'200万',
        clauseList:[
            {src:'http://www.baidu.com',name:'《投保须知》'},
            {src:'http://www.baidu.com',name:'《保险条款》'},
            ]
      }
    },
    methods:{
    },
    mounted(){
      document.querySelector('body').setAttribute('style', 'background:#efeff4')
    },
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
  $white:#ffffff;
  $midBlackColor:#333333;
  $baseColor:#666666;
  $grayColor:#999999;
  #policyDetail {

    /* margin: $px15;*/
    /*width: 100%;*/
    .inner {
      /*  padding-top: $px10;*/
      background: $lakeBlue;
      padding: $px15;
      .list {
        .list-left {
          margin-right: 10px;
          .list-left-inner {
            /* padding: $px10;*/
            .title {
              color: $white;
              font-size: $px16;
              /*line-height: 1.4;*/
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              /*  margin-bottom: 3px;*/
            }
            .desc {
              font-size: $px14;
              /*line-height: 1.4;*/
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              color: $white;
            }
            .desc2 {
              font-size: $smallFontSize;
              margin-top: $px15;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              color: #9CCBFF;
            }

          }
        }
        .list-right {
          img {
            display: block;
            width: 80px;
            vertical-align: middle;
          }
        }
      }
    }
    .link{color:$lakeBlue;}
    .detail {
      padding: 15px;
      p {
        font-size:$px12;
        span{color: $grayColor;}
        label {
          color: $midBlackColor;
        }
        margin-bottom: 6px;
        &:last-child{margin-bottom: 0;}
      }
    }
    /deep/ .vux-no-group-title{margin-top: $px10}
    /deep/ .weui-panel__hd{font-size:$px16;font-weight: 600;color:$midBlackColor;}
    .card-content {
      padding: 15px;
      .card-content-inner {
        div{
        i{color:$lakeBlue;font-size: 17px;  line-height: 22px;float: left;margin-right: 5px; }
        span {
          font-size: $px14;
          color: $midBlackColor;
          line-height: 22px;
        }
        margin-bottom:5px ;
      }
        p {
          font-size: $px12;
          color: $baseColor;
          margin-bottom: 8px;
        }
      }
    }
    .group {
      text-align: center;
      div{
        a {
          font-size: $px16;
          color: $lakeBlue;
        }
        padding: 10px 15px;
        p{color: #AAAAAA;font-size: $px12;text-align: justify}
      }
    }
  }
</style>
