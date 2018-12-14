import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import estimateIndex from '@/views/estimate/estimateIndex'
Vue.use(Router)
export const appRouter= [
  {
    path: '/estimateIndex',
    name: 'estimateIndex',
    component: () => import('@/views/estimate/estimateIndex.vue'),
    meta: {title: '风险测评'},
  },
  {
    path: '/next1',
    name: 'next1',
    component: () => import('@/views/estimate/next1.vue'),
    meta: {title: '企业名称'},
  },
  {
    path: '/next2',
    name: 'next2',
    component: () => import('@/views/estimate/next2.vue'),
    meta: {title: '企业行业'},
  },
  {
    path: '/next3',
    name: 'next3',
    component: () => import('@/views/estimate/next3.vue'),
    meta: {title: '企业规模'},
  },
  {
    path: '/next4',
    name: 'next4',
    component: () => import('@/views/estimate/next4.vue'),
    meta: {title: '企业财产值'},
  },
  {
    path: '/next5',
    name: 'next5',
    component: () => import('@/views/estimate/next5.vue'),
    meta: {title: '分析结果'},
  },
];
export const myCenterRouter= [
  {
    path: '/index',
    name: 'myCenter',
    component: () => import('@/views/myCenter/index.vue'),
    meta: {title: '微链中心'},
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/myCenter/about.vue'),
    meta: {title: '关于微链宝'},
  },
  {
    path: '/customerCare',
    name: 'customerCare',
    component: () => import('@/views/myCenter/customerCare.vue'),
    meta: {title: '人工客服'},
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/myCenter/account.vue'),
    meta: {title: '账号信息'},
  },
  {
    path: '/claim',
    name: 'claim',
    component: () => import('@/views/myCenter/claim.vue'),
    meta: {title: '理赔服务'},
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('@/views/myCenter/policy.vue'),
    meta: {title: '保单管理'},
  },
  {
    path: '/uploadPolicy',
    name: 'uploadPolicy',
    component: () => import('@/views/myCenter/uploadPolicy.vue'),
    meta: {title: '上传保险单'},
  },
  {
    path: '/policyDetail',
    name: 'policyDetail',
    component: () => import('@/views/myCenter/policyDetail.vue'),
    meta: {title: '保单详情'},
  },
  {
    path: '/claimDetail',
    name: 'claimDetail',
    component: () => import('@/views/myCenter/claimDetail.vue'),
    meta: {title: '理赔服务'},
  },
];

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '绑定手机'
  },
  component: () => import('@/views/login.vue')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/errorPage/404.vue')
};
const routes=[...appRouter,...myCenterRouter,loginRouter,page404];
export default new Router({
  // mode: 'history',
  routes
})

