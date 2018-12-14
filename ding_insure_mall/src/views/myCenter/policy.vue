<template>
  <div id='policy'>
    <div class='inner'>
      <flexbox :gutter="0" class='list' v-for='(item,index) in list' :key='index' @click.native='toPolicyDetail(item.id)'>
        <flexbox-item  class='list-left'>
          <div  class='list-left-inner'>
            <div class="title">{{item.title}}</div>
            <div class="desc">被保险人：{{item.companyName}}</div>
            <div class="desc">保险期限：至{{item.deadline}}</div>
          </div>
        </flexbox-item>
        <div class='list-right'>
          <img :src='item.src'>
          <div>
            剩余保障
            <p>{{item.date}}天</p>
          </div>
        </div>
      </flexbox>
    </div>
    <div class='add-policy'>
      <a @click='toAddPolicy'>我要添加保单</a>
    </div>
  </div>

</template>
<script>
  import{  Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'policy',
    components:{
      Flexbox, FlexboxItem,
    },
    data () {
      return {
          list:[
            {
              id:'1',
              title:'公众责任险-教培机构专属',
              companyName:'金阖科技（北京）有限公司',
              deadline:'2019-10-24',
              date:'365',
              src:require('../../../static/img/policy01.png')
            },
            {
              id:'2',
              title:'展会险',
              companyName:'金阖科技（北京）有限公司',
              deadline:'2019-10-25',
              date:'28',
              src:require('../../../static/img/policy01.png')
            },
          ]
      }
    },
    methods:{
      toAddPolicy(){
          this.$router.push({
            path:'/uploadPolicy'
          })
      },
      toPolicyDetail(id){
          //传id 跳转
        this.$router.push({
          path:'/policyDetail'
        })
      }
    },
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
  #policy {
    margin-bottom: 70px;
   /* background: $white;*/
   /* margin: $px15;*/
    /*width: 100%;*/
    .inner {
    /*  padding-top: $px10;*/
      margin:$px15;
      .list {
        background: $white;
        box-shadow: 0 0 6px #ddd;
        border-radius: $px5;
        margin-bottom: 10px;
        .list-left {
          .list-left-inner {
            padding: $px10;
            .title {
              color: $midBlackColor;
              font-size: $px15;
              /*line-height: 1.4;*/
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              margin-bottom: $px10;
            }
            .desc {
              font-size: $px12;
              /*line-height: 1.4;*/
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              color: $grayColor;
            }
          }
        }
        .list-right{
          display: flex;
          flex-basis: 100px;
          position: relative;
          width: 100%;
          flex-grow: 0;
          flex-shrink: 0;
          height: 120px;
          img{float: right;display: block;width: 100%;height: 100%;vertical-align: middle;}
          div {
            position: absolute;
            z-index: 1;
            top:28%;
            text-align: center;
            color: $white;
            width: 100%;
            font-size: $px12;
            p {
              margin-top: $px5;
              text-align: center;
              font-size: $px16;
              font-weight: 500;
            }
          }
        }
    }
  }
    .add-policy{
      font-size: $px15;
      color: $lakeBlue;
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      margin: auto;
      z-index: 10;
      background: #efeef4;
      height: 60px;
      line-height: 60px;
    }
  }
</style>
