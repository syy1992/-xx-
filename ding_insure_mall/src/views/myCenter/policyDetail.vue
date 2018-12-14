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
    <group class='group'>
      <cell title="保障开始时间" v-model='startDate'></cell>
      <cell title="保障结束时间" v-model='endDate'></cell>
      <cell title="投保人" v-model='applicant'></cell>
      <cell title="被保险人"  v-model='insurant'></cell>
      <cell title="合同条款"  value='查看' class='link'></cell>
      <cell title="理赔服务流程" value='查看' class='link'></cell>
      <cell title="服务电话" v-model='phone'></cell>
    </group>
    <group class='group' title='保险单'>
      <div class='show-policy'>查看保险单</div>
    </group>
    <group class='group red'>
      <cell title="保费总额" v-model='totalAmount'></cell>
    </group>
  </div>

</template>
<script>
  import{  Flexbox, FlexboxItem,Group,Cell} from 'vux'
  export default {
    name: 'policyDetail',
    components:{
      Flexbox, FlexboxItem,Group,Cell
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
        startDate:'2018-08-24',
        endDate:'2019-08-23',
        applicant:'张三',
        insurant:'金阖科技',
        phone:'1837164400',
        totalAmount:'1500.00'
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
    .group{
      /deep/ .vux-no-group-title{margin-top: $px10;
        .weui-cell {
          &:before {
            right: $px15;
          }
          .vux-label{font-size:$px13;color:$midBlackColor;}
          .weui-cell__ft{font-size: $px13;}

        }
      }
      /deep/ .link{
        .weui-cell__ft{color:$lakeBlue }
      }
      /deep/ .weui-cells__title{background:$white;font-size: $px15;color:$midBlackColor;margin-bottom:0;margin-top: $px10;    padding: 10px 15px;line-height: 24px;}
    }
    /deep/ .red{
      .weui-cell__ft{color:#D0021B }
    }
    .show-policy{padding: 10px 15px;font-size:$px14;margin: auto;color:$lakeBlue;text-align: center;line-height: 24px;}
  }
</style>
