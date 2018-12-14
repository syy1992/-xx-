<template>
  <div id='account'>
    <group>
      <cell title="用户名" v-model='userName' ></cell>
      <cell title="手机号" v-model='phone'></cell>
    </group>
    <group>
     <div class='logout' @click='logout'>退出登录</div>
    </group>
  </div>

</template>
<script>
  import{  Group, Cell} from 'vux'
  export default {
    name: 'about',
    components:{
      Group, Cell,
    },
    data () {
      return {
        userName:'金阖科技',//存储到vux
        phone:'18333333300',//存储到vux
      }
    },
    methods:{
      logout(){
          //清除token，跳转到首页
        this.$router.push({
          path:'/index',
        })
      }
    },
    mounted(){
      document.querySelector('body').setAttribute('style', 'background:#efeff4')
    },
  }
</script>
<style lang='scss'>
  $lakeBlue:#479CFB;
  $px5:5px;
  $white:#ffffff;
  $baseFontSize:12px;
  $FontSize14:14px;
  $FontSize16:16px;
  $midBlackColor:#333333;
  #account {
    .vux-label{color: $midBlackColor; font-size:$FontSize14 }
    .weui-cell__ft{color: $midBlackColor; font-size:$FontSize14 }
    .logout{font-size:$FontSize16;text-align: center;color: #3899FF;padding: 10px 0;}
    .weui-cells{margin-top: 10px}
  }
</style>
