<template>
  <div class='error'>
    <img src='../../../static/img/404.jpg'>
  </div>
</template>
<script>
  export default {
    name: 'error-404',
    components:{},
    data () {
      return {}
    },
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background:#444')
    },
    methods:{},
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>
<style lang='scss' scoped>
  .error{
    width: 100%;
    height: 100%;
    img{width: 100%;display: block;}
  }
</style>
