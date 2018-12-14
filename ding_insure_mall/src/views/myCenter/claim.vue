<template>
  <div id='claim'>
    <div class='inner'>
      <flexbox :gutter="0" class='list' v-for='(item,index) in list' :key='index'>
        <flexbox-item :span="8" class='list-left'>
          <div  class='list-left-inner'>
            <div class="title">{{item.title}}</div>
            <div class="desc">保障额度：{{item.desc}}</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="4"> <x-button mini  :gradients="['deepskyblue', '#2883E5']" @click.native='toDetail(item.id)'>我要理赔</x-button></flexbox-item>
      </flexbox>
    </div>

  </div>
</template>
<script>
  import{  XButton,Flexbox, FlexboxItem} from 'vux'
  export default {
    name: 'claim',
    components:{
      XButton,Flexbox, FlexboxItem,
    },
    data () {
      return {
          list:[
            { title:'公众责任险-教育机构专属', desc:'400万',id:'1'},
            { title:'公众责任险-教育机构专属', desc:'300万',id:'2'},
            { title:'公众责任险-教育机构专属', desc:'300万',id:'3'}
          ]

      }
    },
    methods:{
      toDetail(id){
      //传id 请求查看
        console.log('理赔id='+id)
        this.$router.push({
          path:'/claimDetail'
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
  $px15:15px;
  $white:#ffffff;
  $baseFontSize:12px;
  $FontSize14:14px;
  $midBlackColor:#333333;
  $baseColor:#666666;
  #claim{
    background: $white;
    padding: $px15;
    /*width: 100%;*/
    .inner{
      padding-top: $px10;
      .list{
        /*background: #ffffff;*/
        box-shadow: 0 0 6px #ddd;
        border-radius: $px5;
        margin-bottom: 10px;
        .list-left{
          .list-left-inner{
            padding: 15px 0 15px 15px;
            .title{color: $midBlackColor;font-size: $FontSize14;    line-height: 1.4;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              margin-bottom: $px5;
            }
            .desc{color: $midBlackColor;
              font-size: $baseFontSize;
              line-height: 1.4;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              color: $baseColor;
            }
          }
        }
        .weui-btn{margin: auto;display: block;border-radius: 20px; }
      }
    }


  }
</style>
