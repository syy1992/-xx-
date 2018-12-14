<template>
  <div  id='estimate'>
    <div class="weui-panel_access" id="top">
      <div class="weui-panel__bd">
        <div  class=" box_appmsg">
          <div class="box__hd">
            <img src="../../../static/img/xiaowei-small.png" alt="" class="box__thumb">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="box__title">{{getCompanyName? getCompanyName: "公司名称"}}</h4>
            <!--<p class="box__desc">{{getIndustryNum}}{{getScaleNum}}{{getPropertyNum}}</p>-->
            <p class="box__desc">根据您提供的信息，贵公司的风险与解决方案如下</p>
          </div>
        </div>
      </div>
    </div>
    <div class='hint'><img src='../../../static/img/icon-pane.png' width='20'>您的风险报告如下</div>
    <div class='main'>
      <div class='module'>
        <topNum :picUrl='picList[0]' text1='根据您的信息'  text2='您有这些风险需要注意'></topNum>
        <div class='main-desc'>
          {{desc}}
          <!--贵公司所在的物流行业属于高风险行业，主要风险点集中在驾乘人员、车辆、货物和仓库等。企业可能由于驾乘人员的人身意外伤害，车辆的交通事故以及配送存储货物的毁损等遭受巨额损失。企业需要综合考量自身的风险承受能力和财务预算购买适宜的保险产品抵御风险。-->
        </div>
        <div class='line'> </div>
      </div>
      <div class='module'>
        <topNum :picUrl='picList[1]' text1='根据您的信息'  text2='为您定制如下保障体系'></topNum>
        <ul class='img_ul'>
          <li v-for='(item,index)  in imgList' :key='index'><a><img :src='item.label'></a></li>
        </ul>
        <div class='line'> </div>
      </div>
      <div class='module'>
        <topNum :picUrl='picList[2]' text1='根据您的信息'  text2='为您推荐一下专属产品'></topNum>
        <proList :imgUrl='item.src' :title='item.title' :desc='item.desc' :text='item.text' v-for='(item,index) in productList' :key='index' :linkUrl='item.linkUrl'  @parentMethod='getLinkUrl' ref='proListref'></proList>
        <!--<proList :imgUrl='item.src' :title='item.title' :desc='item.desc' :text='item.text' v-for='(item,index) in productList' :key='index' ref='ppp'></proList>-->
        <div class='line'></div>
      </div>
      <div class='module'>
        <topNum :picUrl='picList[3]' text1=''  text2='疑问解答'></topNum>
        <ul class='q_and_a'>
          <li v-for='(item,index) in questionList' :key='index'>
            <div class='question'>Q：{{item.question}}</div>
            <div class='answer'>A：{{item.answer}}</div>
          </li>
        </ul>
      </div>
    </div>
    <flexbox>
      <flexbox-item><div class="flex-demo again" @click='again'><img src='../../../static/img/icon-again.png' >重新检测</div></flexbox-item>
      <flexbox-item><div class="flex-demo talk" @click='isShow=true'><img src='../../../static/img/icon-talk.png'>人工客服</div></flexbox-item>
    </flexbox>
    <div v-transfer-dom class='ewm'>
      <x-dialog v-model="isShow" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../../../static/img/ewm.png" style="max-width:100%">
          <div class='d_desc'>长按二维码，添加客服人员微信，解决您的疑问</div>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom class='ewm'>
      <x-dialog v-model="isShow2" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../../../static/img/ewm.png" style="max-width:100%">
          <div class='d_desc'>您好，根据保险公司相关规定，该产品暂不支持线上投保，您可添加客服人员进行线下投保</div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import topNum from '../../components/topNum'
  import proList from '../../components/proList'
  import{ XDialog, Flexbox, FlexboxItem, TransferDomDirective as TransferDom} from 'vux'
  export default {
    name: 'next5',
    directives: {
      TransferDom
    },
    components: {
      XDialog,Flexbox, FlexboxItem, topNum,proList
    },
    data () {
      return {
        desc:'',
        company: '',
        text: '立即分析',
        talkList: ['最后，告诉小微您的企业资产总额吧'],
        num: 5,
        picList:[
          require('../../../static/img/img01.png'),
          require('../../../static/img/img02.png'),
          require('../../../static/img/img03.png'),
          require('../../../static/img/img04.png'),
        ],
        imgList:[
          ],
        productList:[
//          {
//            src: require('../../static/img/pro_huoyun.png'),
//            title: '货运险',
//            desc: '保障货物在运输过程中因为意外导致的货物损失',
//            text:'立即投保',
//            linkUrl:'http://baidu.com'
//          },
        ],
        questionList:[
//          {question:'为什么要同时购买雇主责任险和团体意外险',answer:'两者的保障体系是不同的，雇主责任险的保障的是作为雇主的责任，团体意外险是保障员工遭受意外时赔偿保险金。'},
//          {question:'驾乘无忧险是记名投保吗？',answer:'本款产品的驾乘无忧险是不记名投保的，按照座位投保而不是按照人员来投保的'},
//          {question:'我还有别的问题怎么办？',answer:'如果您还有别的问题，可以点击下方“人工客服”，添加专业的客服人员微信，解决您的问题。'},
        ],
        isShow:false,
        isShow2:false,
        industryNum:this.$store.state.app.industry,
      }

    },
    methods: {
      addstepNum(str){
        this.$router.push({
          path: str + this.num,
        })
      },
      again(){
        this.$router.push({
          path: '/estimateIndex',
        })
        this.$store.state.app.companyName='';
        this.$store.state.app.industry=0;
        this.$store.state.app.scale=0;
        this.$store.state.app.property=0;
      },
      getConfig(){
          let configListData=this.$store.state.configList;
          for(let i in configListData){
             if(this.industryNum==configListData[i].key){
             this.questionList=configListData[i].questionList;
             this.desc=configListData[i].desc;
             this.imgList=configListData[i].imgList;
             this.productList=configListData[i].productList;
             }
         }
      },
      getLinkUrl(msg){
          if(msg==''){
            this.isShow2=true;
          }else {
            window.open(msg,'_self')
          }
      }
    },
    mounted(){
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4;background-image:none')
        this.getConfig()
    },
    computed: {
      getCompanyName () {
        return this.$store.state.app.companyName;
        console.log('this.$store.state.companyName=' + this.$store.state.app.companyName)
      },
      getIndustryNum() {//得到行业数字
        return this.$store.state.app.industry;
        console.log('this.$store.state.app.industry=' + this.$store.state.app.industry)
      },
      getScaleNum(){//得到规模
        return this.$store.state.app.scale;
      },
      getPropertyNum(){//得到财产
        return this.$store.state.app.property;
      },

    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* @function r($px){
   @return $px / 75px * 1rem;
   }*/
  @function r($px) {
    @return $px /2/18.75 * 1rem;
  }
  #estimate {
    width: 100%;
    /*padding: 1rem 0;*/
    #top {
      background-color: #FFFFFF;
      position: relative;
      overflow: hidden;

      /deep/ .weui-media-box_appmsg {
        .weui-media-box__thumb {
          max-height: inherit;
        }
      }

      .box_appmsg{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 15px;
        position: relative;
        .box__hd {
          margin-right: 0.8em;
          width: 60px;
          /* height: 60px; */
          line-height: 60px;
          text-align: center;

        }
        .box__thumb {
             width: 100%;
             max-height: 100%;
             vertical-align: top;
           }
        .box__desc {
          color: #152A42;
          font-size: 12px;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .box__title {
        font-weight: 400;
        color: #152A42;
        font-size: 1rem;
        line-height: 1.9rem;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
    .hint{
      img{float: left;margin:5px 5px 0 0;}
      margin: 0.5rem 0;
      /*background: #fff;*/
      color: #152A42;font-size: 1rem;line-height: 1.9rem;padding: 0 15px;
    }
      .main{
        border: 3px solid deepskyblue;background: #fff;
        padding: 12px 10px;
        .module{
          margin-bottom: 10px;
          .line{width:100%;background:#fff;height:2px;border-top: 1px solid lightskyblue;border-bottom: 2px solid deepskyblue;margin-top: 10px  ;  transform-origin: 0 0;transform: scaleY(0.6);}
        }
        .main-desc{font-size: 12px;color: #666666;line-height: 1.4;text-align: left;margin-top: 10px;}
      }
      .img_ul{
      width: 100%;
      overflow-x: scroll;
      display: flex;
     margin-top: 10px;
      li {
        align-self:center;
     /*   flex: 1;*/
        margin: 0 5px;
        img {
          width: 60px;
          display: block;
          margin: auto;
        }
      }
    /*  li{float: left;}*/
    }
      .q_and_a{
        li {
          position: relative;
          padding: 10px 15px;
          .question{
            font-size: 14px;
            line-height: 20px;
            font-weight: bolder;
            margin-bottom: 6px;
          }
          .answer{font-size: 12px;color: #666;line-height: 1.5}
          &:after {
            content: " ";
            position: absolute;
            left: 15px;
            top: 0;
            right: 15px;
            height: 1px;
            border-top: 1px solid #E5E5E5;
            transform-origin: 0 0;
            transform: scaleY(0.5);
          }
          &:first-child {
            &:after {
              display: none
            }
          }
          &:last-child {
          padding:10px 15px 0 15px;
          }
        }
      }
    .flex-demo{text-align: center; line-height: 3rem;height: 3rem;font-size: 1rem;
      img{width: 30px; margin-right: 5px;
        display: inline-block;
        margin-top: 10px;}
    }
    .again{color:#2883E5}
    .talk{color:#152A42}
    .vux-flexbox-item {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        height: 1rem;
        top: 1rem;
        right: 0;
        border-right: 1px solid #2883E5;
        width: 1px;
      }
      &:last-child {
        &:after {
          display: none
        }
      }
    }
  }

</style>
<style lang="scss">
  .ewm {
    .dialog-demo {
      .weui-dialog {
        border-radius: 8px;
        width: 170px;
      }
      .dialog-title {
        line-height: 30px;
        color: #666;
      }
      .dialog-desc {
        line-height: 30px;
        color: #666;
      }
      .img-box {
        padding-top: 10px;
        /*width: 70%;*/
        overflow: hidden;
        img {
          width: 150px;
          height: 150px;
        }
        .d_desc {;
          font-size: 0.8rem;
          padding: 10px 0;
          width: 150px;
          margin: auto;
          text-align: justify
        }
      }
      .vux-close {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }
</style>
