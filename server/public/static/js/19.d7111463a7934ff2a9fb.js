webpackJsonp([19],{"3ExQ":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{checkBox:"",recordList:[],recordIdList:[],orderData:{},showConfirm:!1}},beforeCreate:function(){localStorage.getItem("userId")||(alert("请登录"),this.$router.push("/candyRoom/candyList"))},mounted:function(){var t=this;this.$http.post("/api/getOrderDetail",{depositOrderId:this.$route.params.id}).then(function(s){0===s.data.errcode&&(t.orderData=s.data.data,t.$nextTick(function(){a("QbC4"),a("zQMf"),t.getQrcode()}))})},methods:{confirmTx:function(){var t=this;this.$http.post("/api/confirmDepositTx",{depositOrderId:this.orderData.id,txRecordIdList:this.recordIdList}).then(function(s){0===s.data.errcode?t.$router.push("/candyRoom/myCandyOrder"):alert(s.data.errmsg)})},refreshTx:function(){this.updTxRecord()},toOrderConfirm:function(){this.updTxRecord(),this.showConfirm=!0},updTxRecord:function(){var t=this;this.$http.post("/api/getOrderTxRecordList",{depositOrderId:this.orderData.id}).then(function(s){0===s.data.errcode&&(t.recordList=s.data.data.dataList)})},changeCheck:function(t,s){t.target.checked?this.recordIdList.push(s):this.recordIdList.remove(s)},getQrcode:function(){$(".qrcode").qrcode({text:this.orderData.toAddr,width:150,height:150})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"candy-order-confirm"},[t._m(0),t._v(" "),a("div",{staticClass:"content-area"},[a("div",{staticClass:"info-area",class:t.mediaClass()},[t.orderData.projData?a("div",{staticClass:"info-row"},[a("span",{staticClass:"title"},[t._v("项目：")]),t._v(" "),a("div",{staticClass:"content-box"},[a("img",{attrs:{src:t.orderData.projData.logoUrl,alt:""}}),t._v(" "),a("div",{staticClass:"info-box"},[a("span",{staticClass:"title"},[t._v(t._s(t.orderData.projData.tokenSymbol))]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.orderData.projData.tokenName))])])])]):t._e(),t._v(" "),a("div",{staticClass:"info-row"},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"title"},[t._v("充值数量：")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.orderData.orderAmount)+"枚")])]),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"title"},[t._v("锁仓期：")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.orderData.lockTime)+"个月")])]),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"title"},[t._v("回报：")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.getInterest(t.orderData.orderAmount,t.orderData.interestRate,t.orderData.lockTime))+"枚")])])]),t._v(" "),a("div",{staticClass:"info-row addr"},[a("span",{staticClass:"title addr"},[t._v("接收地址：")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.orderData.toAddr))])]),t._v(" "),a("div",{staticClass:"info-row addr"},[a("span",{staticClass:"title addr"},[t._v("您的地址：")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.orderData.fromAddr))])]),t._v(" "),a("div",{staticClass:"qrcode",class:t.mediaClass()})]),t._v(" "),t.showConfirm?a("div",{staticClass:"table-box",class:t.mediaClass()},[a("span",{staticClass:"title"},[t._v("以下为系统自动检测到的交易记录，请勾选此笔订单相关的交易记录进行确认！")]),t._v(" "),a("table",[t._m(1),t._v(" "),t._l(t.recordList,function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(s.txAmount))]),t._v(" "),a("td",{staticClass:"mobile-hide"},[t._v(t._s(s.txTime))]),t._v(" "),a("td",[a("a",{attrs:{href:"https://etherscan.io/tx/"+s.txHash,target:"_blank"}},[t._v(t._s(t.getShortStr(s.txHash,12)))])]),t._v(" "),a("td",[a("input",{attrs:{type:"checkbox"},on:{change:function(a){t.changeCheck(a,s.id)}}})])])})],2),t._v(" "),a("div",{staticClass:"btn default",class:t.mediaClass(),on:{click:t.refreshTx}},[a("span",[t._v("刷新数据")])]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.confirmTx}},[a("span",[t._v("确认完成")])])]):a("div",{staticClass:"btn-box"},[a("div",{staticClass:"btn-row"},[a("input",{attrs:{type:"checkbox"}}),t._v(" "),a("span",[t._v("我已向目标接收地址充值"),a("em",[t._v(t._s(t.orderData.orderAmount))]),t._v("枚")])]),t._v(" "),a("div",{staticClass:"btn",class:t.mediaClass(),on:{click:t.toOrderConfirm}},[a("span",[t._v("开始确认")])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title-area"},[s("span",[this._v("订单详情")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("th",[this._v("充值数量")]),this._v(" "),s("th",{staticClass:"mobile-hide"},[this._v("交易时间")]),this._v(" "),s("th",[this._v("交易哈希")]),this._v(" "),s("th",[this._v("操作")])])}]};var r=a("VU/8")(e,i,!1,function(t){a("Yvom")},"data-v-4f244fc3",null);s.default=r.exports},Yvom:function(t,s){}});
//# sourceMappingURL=19.d7111463a7934ff2a9fb.js.map