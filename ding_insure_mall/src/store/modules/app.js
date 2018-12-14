/**
 * Created by m1833 on 2018/10/16.
 */
const app = {
  state: {
    companyName:'',//存储公司名
    industry:0,//存储公司行业
    scale:0,//存储公司规模
    property:0,//存储公司资产
  },
  mutations: {
    setCompany (state,name) {
      // 变更状态
      state.companyName=name
     console.log('Company='+state.companyName)
    },
    setIndustry(state,name) {
      state.industry=name
      console.log('industry='+state.industry)
    },
    setScale(state,name) {
      state.scale=name
    },
    setProperty(state,name) {
      state.property=name
    },
  }
};

export default app;
