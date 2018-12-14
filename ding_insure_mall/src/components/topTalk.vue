<template>
  <div class="topTalk">
    <img src='../../static/img/icon-xiaowei-big.png' class='icon-xiaowei-big'>
    <div class='talk'>
      <img src='../../static/img/kuang.png' class='kuang-top'>
      <p v-for='(item,index) in talkList' :key='index'>{{talkList[index]}}</p>
      <img src='../../static/img/kuang.png' class='kuang-bottom'>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'talkTop',
    props:['talkList'],
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
  @function r($px){
    @return $px / 75px * 1rem;
  }
  .topTalk{
    width: 100%;
    .icon-xiaowei-big{
      display:block;margin:0 auto 2rem;width: 9rem
    }
    .talk{width:80%;margin: auto;border-radius: 4px;padding: 0.8rem;background: rgba(135,206,235,0.3);position: relative;height: auto;border: 0.01rem solid rgba(135, 206, 235, .6);
      .kuang-top{width:2.5rem;position: absolute;top: -2px;left: -2px}
      .kuang-bottom{width: 2.5rem;position: absolute;bottom: -2px;right: -2px;transform:rotate(180deg);}
      p{line-height: 1.8rem;font-size: 0.8rem;color: #023269;font-weight: bold}
    }
  }
</style>
