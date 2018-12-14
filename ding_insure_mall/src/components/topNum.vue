<template>
  <div class="panel panel_access" >
    <div class="panel__bd">
      <div  class="media-box box_appmsg">
        <div class="box__hd">
          <img :src="picUrl" alt="" class="box__img">
        </div>
        <div class="media-box__bd">
          <h4 class="title">{{text1}}</h4>
          <p class="desc">{{text2}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'talkNum',
    props:['text1','text2','picUrl'],
//    porps:{
//      talkList:{
//          type:Array,
//      }
//    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .panel {
    background-color: #FFFFFF;
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }

    position: relative;
    overflow: hidden;
  }
  /*.media-box{padding: 12px 10px}*/
  .panel__hd {
    padding: 14px 15px 10px;
    color: #ccc;
    font-size: 13px;
  }
  .media-box__bd{
    .title{
      font-weight: 400;
      font-size: 12px;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
      color: #666;
      min-height: 17px;
    }
    .desc{
      color: #333333;
      font-size: 16px;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-weight: bolder;
    }
  }

  .box_appmsg{
    display: flex;
    .box__hd {
      margin-right: 5px;
      width: 50px;
      text-align: center;
    }
  }
  .box__img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
    margin-top: 4px;
  }
</style>
