<template>
  <div class="wrap_bor">
    <div  class=" box_appmsg">
      <div class="box__hd">
        <img :src="imgUrl" alt="" class="box__thumb">
      </div>
      <div class="box__bd">
        <h4 class="box__title">{{title}}</h4>
        <p class="box__desc">{{desc}}</p>
        <div class="box__btn" style='display: flex;justify-content: flex-end;'>
          <a @click='getEventTar' :dataSrc='linkUrl' >{{text}}</a>
          <!--<a :href='linkUrl' @click='getEventTar' >{{text}}</a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'proList',
    props:['imgUrl','title','desc','text','linkUrl'],
    data(){
        return{
        }
    },
    methods:{
      getEventTar(e){
        this.$emit('parentMethod',this.linkUrl)
      }
    },
  }
</script>

<style scoped lang="scss">
  @function r($px){
    @return $px / 75px * 1rem;
  }
  .wrap_bor{
    box-shadow: 0 0 6px  lightblue;
    border-radius: 7px;
    margin-top: 10px;
    .box_appmsg{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .box__hd {
        width: 86px;
        text-align: center;
        .box__thumb {
          width: 100%;
          max-height: 100%;
          vertical-align: top;
        }
      }
      .box__bd{
        flex: 1;
        margin:7px;
        .box__desc {
          color: #666;
          font-size: 12px;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          min-height: 32px;
        }
        .box__title {
          font-weight: bolder;
          color: #333333;
          /*line-height: 1.9rem;*/
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .box__btn{display: flex;justify-content: flex-end;margin-top: 6px;
          a{padding: 4px 20px;
            background: linear-gradient(deepskyblue, #2883E5);
            border-radius: 15px;
            color:#fff;
            line-height: 1.6;
            font-size: 0.7rem;}
        }
      }
    }

  }
</style>
