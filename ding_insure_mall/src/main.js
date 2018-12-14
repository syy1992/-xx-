// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import  {ToastPlugin, AjaxPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(ToastPlugin, AjaxPlugin)
// import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
import router from './router'
import store from './store';
import App from './App'
import axios from 'axios';
//引入公用js
import tool from './assets/js/lib/tool.js'
Vue.prototype.tool=tool;

Vue.prototype.$http = axios;

/**
 * 加载插件
 */
Vue.use(Vuex)
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)

/**
 *  日志输出开关
 */
Vue.config.productionTip = true
/* eslint-disable no-new */

router.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title;
  next();
});
router.afterEach((to,form,next)=>{window.scrollTo(0,0)});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach(function (to, from, next) {
//   store.commit('updateLoading', true)
//   store.commit('updateShowBack', true)
//   next()
// })
// router.afterEach(function (to) {
//   store.commit('updateLoading', false)
// })
