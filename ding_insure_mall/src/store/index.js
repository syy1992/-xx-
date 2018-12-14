import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
      isRequired:true,
      configList:[
        {
          key:0,
          title:'物流行业',
          desc:'贵公司所在的物流行业属于高风险行业，主要风险点集中在驾乘人员、车辆、货物和仓库等。企业可能由于驾乘人员的人身意外伤害，车辆的交通事故以及配送存储货物的毁损等遭受巨额损失。企业需要综合考量自身的风险承受能力和财务预算购买适宜的保险产品抵御风险。',
          questionList:[
            {question:'为什么要同时购买雇主责任险和团体意外险',answer:'两者的保障体系是不同的，雇主责任险的保障的是作为雇主的责任，团体意外险是保障员工遭受意外时赔偿保险金。'},
            {question:'驾乘无忧险是记名投保吗？',answer:'本款产品的驾乘无忧险是不记名投保的，按照座位投保而不是按照人员来投保的'},
            {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
          ],
          imgList:[
            { name:'chexian',label:require('../../static/img/icon-chexian.png')},
            { name:'cangchu',label:require('../../static/img/icon-cangchu.png')},
            { name:'huoyun',label:require('../../static/img/icon-huoyun.png')},
            { name:'jiachengwuyou',label:require('../../static/img/icon-jiachengwuyou.png')},
            { name:'guzhuzeren',label:require('../../static/img/icon-guzhuzeren.png')},
            { name:'qiyecaichan',label:require('../../static/img/icon-qiyecaichan.png')},
          ],
          productList:[
            {
              src: require('../../static/img/pro_chexian.png'),
              title: '车险',
              desc: '保障车辆在行驶过程中，因意外情况导致车辆出现损坏',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_huoyun.png'),
              title: '货运险',
              desc: '保障货物在运输过程中因为意外导致的货物损失',
              text:'立即投保',
              linkUrl:'http://baidu.com'
            },
            {
              src: require('../../static/img/pro_cangchu.png'),
              title: '仓储保险',
              desc: '保障仓库货物的保险，承担仓库货物因为火灾、台风、暴雨等自然灾害造成的货物的损失',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_jiachengwuyou.png'),
              title: '驾乘无忧险',
              desc: '是对车上的驾驶员和乘客负责，发生意外情况时，对被保司机和乘客的人身安全进行赔偿',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_guzhuzeren.png'),
              title: '雇主责任险',
              desc: '保障雇主按照雇佣合同应当承担的经济赔偿责任',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_qiyecaichan.png'),
              title: '企业财产险',
              desc: '保障企业财产遭受意外事故或者自然灾害而导致的经济损失',
              text:'立即投保',
              linkUrl:''
            },
          ],
        },
        {
          key:1,
          title:'教育培训行业',
          desc:'贵公司所在的教培行业属于高风险行业。日常的参与包括了学生、教职工、家长和机构方，涉及主体较多，尤其是在校学生普遍存在年龄层偏低、易受伤的特点。作为教培机构经营者，很可能因为学生和老师的人身意外伤害、机构财物的损毁丢失等而遭受巨大损失。机构需要综合考量自身的风险承受能力和财务预算购买适宜的保险产品抵御以上风险。',
          questionList:[
            {question:'公众责任险-教育机构专属是保障什么的呀？',answer:'本款产品是主要保障校区场地内发生的意外伤害事故后，教培机构应该承担的赔偿责任，此外还扩展了老师或校车接送学生学生上下学途中的交通意外，提供餐食的学校还可附加食品安全险。'},
            {question:'团体意外险和雇主责任险的区别？',answer:'两者的保障体系是不同的，雇主责任险保障的是雇主在员工出现意外或职业病等情况后雇主应当承担的赔偿责任，团体意外险是保障员工遭受意外时获得赔偿保险金。雇主责任险是赔付给雇主的，保障雇主权益；意外险是赔付给员工的。'},
            {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
          ],
          imgList:[
            { name:'gongze',label:require('../../static/img/icon-gongze.png')},
            { name:'tuantiyiwai',label:require('../../static/img/icon-tuantiyiwai.png')},
            { name:'zhiyezeren',label:require('../../static/img/icon-zhiyezeren.png')},
            { name:'guzhuzeren',label:require('../../static/img/icon-guzhuzeren.png')}
          ],
          productList:[
            {
              src: require('../../static/img/pro_gongze_jiaopeijigou.png'),
              title: '公众责任险-教育机构专属',
              desc: '保障机构经营过程中，因意外导致第三方人员的伤害依法应承担的责任',
              text:'立即投保',
              linkUrl:'http://www.supplyfintech.com/page/xiaobao_detail/index.html'
            },
            {
              src: require('../../static/img/pro_tuantiyiwai_edu.png'),
              // src: require('../../static/img/pro_gongze_tuantiyiwai.png'),
              title: '团体意外险-教育机构专属',
              desc: '以团体的方式投保的人身意外险，保障责任有意外身故、意外伤残、医疗等',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_zhiyezeren.png'),
              title: '教职工职业责任险-教育机构专属',
              desc: '保障教师因职业上的疏忽或过失致使他人遭受人身伤害或财产损失，依法应承担赔偿责任的保险',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_guzhuzeren.png'),
              title: '雇主责任险',
              desc: '保障雇主按照雇佣合同应当承担的经济赔偿责任',
              text:'立即投保',
              linkUrl:''
            },
            // {
            //   src: require('../../static/img/pro_chexian.png'),
            //   title: '团体意外险-教育机构专属',
            //   desc: 'aaa',
            //   text:'立即投保',
            //   linkUrl:''
            // },
          ],
        },
        {
          key:2,
          title:'健身机构',
          desc:'贵公司所在的健身行业属于高风险行业。日常的参与主体包括了健身人士、教练和机构方，涉及主体较多、从事运动风险较高，健身人士和教练很容易由于意外等原因遭受人身伤害，从而导致机构方面临巨额的赔偿责任。机构需要综合考量自身的风险承受能力和财务预算购买适宜的保险产品抵御以上风险',
          questionList:[
            {question:'公众责任险-健身机构专属保障的是什么呀？',answer:'本款产品是主要保障在健身机构内发生的意外伤害事故后，健身机构应该承担的赔偿责任，此外有游泳场馆的机构还可以投保公众责任险-游泳场馆专属来保障泳池的赔偿责任，还可以额外附加游泳场馆猝死责任。'},
            {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
          ],
          imgList:[
            { name:'gongze',label:require('../../static/img/icon-gongze.png')},
            { name:'qiyecaichan',label:require('../../static/img/icon-qiyecaichan.png')},
            { name:'guzhuzeren',label:require('../../static/img/icon-guzhuzeren.png')}
          ],
          productList:[
            {
              src: require('../../static/img/pro_gongze_natatorium.png'),
              title: '公众责任险-游泳场馆专属',
              desc: '保障机构经营过程中，因意外导致第三方人员的伤害依法应承担的责任',
              text:'立即投保',
              linkUrl:'http://baidu.com'
            },
            {
              src: require('../../static/img/pro_gongze_gym.png'),
              title: '公众责任险-健身机构馆专属',
              desc: '保障机构经营过程中，因意外导致第三方人员的伤害依法应承担的责任',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_qiyecaichan_gym.png'),
              title: '企业财产险-健身机构专属',
              desc: '保障企业财产遭受意外事故或者自然灾害而导致的经济损失',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_guzhuzeren.png'),
              title: '雇主责任险',
              desc: '保障雇主按照雇佣合同应当承担的经济赔偿责任',
              text:'立即投保',
              linkUrl:''
            },

          ],
        },
        {
          key:3,
          title:'体育活动/赛事组织',
          desc:'贵公司所在的体育行业属于高风险行业。日常的参与主体包括了活动参与方和组织方等，具有人数多、管理难度高、从事运动风险较高等特点，导致参与方很容易由于意外等原因遭受人身伤害，从而导致组织方面临巨额的赔偿责任。组织方需要综合考量自身的风险承受能力和财务预算购买适宜的保险产品抵御以上风险。',
          questionList:[
            {question:'我办一个篮球比赛需要买什么保险呀？',answer:'推荐购买组织方责任险，本款产品保障赛事组织方在组织活动过程中，因疏忽或过失造成第三者人身伤亡或财产损失，依据法应由承担的经济赔偿责任。'},
            {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
          ],
          imgList:[
            { name:'zuzhifang',label:require('../../static/img/icon-zuzhifang.png')},
            { name:'tuantiyiwai',label:require('../../static/img/icon-tuantiyiwai.png')},
          ],
          productList:[
            {
              src: require('../../static/img/pro_zuzhifang.png'),
              title: '组织方责任险',
              desc: '保障赛事组织方因疏忽或者过失，导致第三者人身伤害和财产损失，需要承担的赔偿责任',
              text:'立即投保',
              linkUrl:'http://baidu.com'
            },
            {
              src: require('../../static/img/pro_tuantiyiwai.png'),
              title: '团体意外险',
              desc: '以团体的方式投保的人身意外险，保障责任有意外身故、意外伤残、医疗等',
              text:'立即投保',
              linkUrl:''
            },
          ],
        },
        {
          key:4,
          title:'其他类型企业',
          desc:'公司在经营过程中难免会遇到一些意外事故导致企业运转出现问题，具有潜在的交通隐患、员工的人身安全问题、以及企业财产因意外出现损失等问题。企业需要综合考量自身风险承受能力和财务预算能力，从企业财产、员工人身安全、雇主责任等方面配置保险产品来保障企业。',
          questionList:[
            {question:'团体意外险和雇主责任险的区别？',answer:'两者的保障体系是不同的，雇主责任险保障的是雇主在员工出现意外或职业病等情况后雇主应当承担的赔偿责任，团体意外险是保障员工遭受意外时获得赔偿保险金。雇主责任险是赔付给雇主的，保障雇主权益；意外险是赔付给员工的。'},
            {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
          ],
          imgList:[
            { name:'qiyecaichan',label:require('../../static/img/icon-qiyecaichan.png')},
            { name:'guzhuzeren',label:require('../../static/img/icon-guzhuzeren.png')},
            { name:'tuantiyiwai',label:require('../../static/img/icon-tuantiyiwai.png')},
          ],
          productList:[
            {
              src: require('../../static/img/pro_qiyecaichan_other.png'),
              title: '企业财产险',
              desc: '保障企业财产遭受意外事故或者自然灾害而导致的经济损失',
              text:'立即投保',
              linkUrl:'http://baidu.com'
            },
            {
              src: require('../../static/img/pro_guzhuzeren.png'),
              title: '雇主责任险',
              desc: '保障雇主按照雇佣合同应当承担的经济赔偿责任',
              text:'立即投保',
              linkUrl:''
            },
            {
              src: require('../../static/img/pro_tuantiyiwai.png'),
              title: '团体意外险',
              desc: '以团体的方式投保的人身意外险，保障责任有意外身故、意外伤残、医疗等',
              text:'立即投保',
              linkUrl:''
            },
          ],
        },
      ]
    },
    mutations: {
        //

    },
    actions: {

    },
    modules: {
        app,
        user
    }
});

export default store;
