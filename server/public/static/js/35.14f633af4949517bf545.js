webpackJsonp([35],{h6Zs:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{inputFromAddr:"",depositBoxData:{}}},beforeCreate:function(){localStorage.getItem("userId")||(alert("请登录"),this.$router.push("/candyRoom/candyList"))},mounted:function(){this.depositBoxData=this.$route.query},computed:{interestAmount:function(){return this.depositBoxData.interestRate*this.depositBoxData.orderAmount}},methods:{submitOrder:function(){var t=this;if(0!==this.inputFromAddr.indexOf("0x")||42!==this.inputFromAddr.length||this.inputFromAddr===this.depositBoxData.toAddr)return alert("请输入正确的支付钱包地址");this.$http.post("/api/addDepositOrder",{depositBoxId:this.depositBoxData.id,orderAmount:this.depositBoxData.orderAmount+"",fromAddr:this.inputFromAddr}).then(function(s){if(0===s.data.errcode){var a=s.data.data;t.$router.push("/candyRoom/candyOrderConfirm/"+a.id)}else alert(s.data.errmsg)})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"candy-order"},[t._m(0),t._v(" "),a("div",{staticClass:"info-area",class:t.mediaClass()},[a("span",[t._v("抢购详情")]),t._v(" "),a("span",[t._v("需充值"+t._s(t.depositBoxData.orderAmount)+"枚")]),t._v(" "),a("span",[t._v(t._s(t.depositBoxData.lockTime)+"个月后获得回报"),a("em",[t._v(t._s(t.getInterest(t.depositBoxData.orderAmount,t.depositBoxData.interestRate,t.depositBoxData.lockTime)))]),t._v("枚")])]),t._v(" "),a("div",{staticClass:"content-area"},[a("div",{staticClass:"form-row",class:t.mediaClass()},[a("span",{staticClass:"step-index mobile-hide"},[t._v("1")]),t._v(" "),a("div",{staticClass:"input-box",class:t.mediaClass()},[a("span",{staticClass:"title"},[t._v("充值接收地址")]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.depositBoxData.toAddr))]),t._v(" "),a("span",{staticClass:"foot-text"},[t._v("此地址为项目方与平台共同认可的资金存管地址，回报已入账，请放心充值")])])]),t._v(" "),a("div",{staticClass:"form-row",class:t.mediaClass()},[a("span",{staticClass:"step-index mobile-hide"},[t._v("2")]),t._v(" "),a("div",{staticClass:"input-box",class:t.mediaClass()},[a("span",{staticClass:"title"},[t._v("您的支出地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputFromAddr,expression:"inputFromAddr"}],domProps:{value:t.inputFromAddr},on:{input:function(s){s.target.composing||(t.inputFromAddr=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row",class:t.mediaClass()},[a("span",{staticClass:"step-index mobile-hide"},[t._v("3")]),t._v(" "),a("div",{staticClass:"btn-box",class:t.mediaClass()},[a("span",{on:{click:t.submitOrder}},[t._v("提交订单")])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header-nav"},[s("span",[this._v("余币宝")]),this._v("\n    >\n    "),s("span",[this._v("地址设置")])])}]};var o=a("VU/8")(e,i,!1,function(t){a("sQq6")},"data-v-19a5e432",null);s.default=o.exports},sQq6:function(t,s){}});
//# sourceMappingURL=35.14f633af4949517bf545.js.map