webpackJsonp([25],{"Nq+N":function(t,i){},ynLq:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"candy-list"},[s("div",{staticClass:"main-area"},[t._m(0),t._v(" "),s("div",{staticClass:"filter-box"},[s("span",{staticClass:"title"},[t._v("锁仓期限")]),t._v(" "),s("ul",{staticClass:"select list-unstyled"},[s("li",{class:{cur:0===t.inputLockTime},on:{click:function(i){t.inputLockTime=0}}},[t._v("全部")]),t._v(" "),s("li",{class:{cur:1===t.inputLockTime},on:{click:function(i){t.inputLockTime=1}}},[t._v("1个月")]),t._v(" "),s("li",{class:{cur:3===t.inputLockTime},on:{click:function(i){t.inputLockTime=3}}},[t._v("3个月")]),t._v(" "),s("li",{class:{cur:6===t.inputLockTime},on:{click:function(i){t.inputLockTime=6}}},[t._v("6个月")]),t._v(" "),s("li",{class:{cur:12===t.inputLockTime},on:{click:function(i){t.inputLockTime=12}}},[t._v("12个月")])])]),t._v(" "),t.depositBoxList.length?s("div",{staticClass:"table-box"},[s("table",[t._m(1),t._v(" "),t._l(t.depositBoxList,function(i){return s("tr",{key:i.id,staticClass:"table-row"},[s("td",[s("img",{attrs:{src:i.logoUrl,alt:""}})]),t._v(" "),s("td",[s("div",{staticClass:"info-box"},[s("span",{staticClass:"title"},[t._v(t._s(i.nameCn))]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(i.tokenSymbol))])])]),t._v(" "),s("td",[s("div",{staticClass:"table-cell",class:t.mediaClass()},[s("span",{staticClass:"main"},[t._v(t._s(t.getInterest(1e4,i.interestRate,i.lockTime))+"枚")]),t._v(" "),s("span",{staticClass:"footer"},[t._v(t._s(i.lockTime)+"个月")])])]),t._v(" "),s("td",{staticClass:"mobile-hide"},[t._v(t._s(i.lockTime)+"个月")]),t._v(" "),s("td",{staticClass:"mobile-hide"},[t._v(t._s(i.minAmount)+"枚")]),t._v(" "),s("td",{staticClass:"mobile-hide"},[t._v(t._s(i.remainAmount)+"枚")]),t._v(" "),s("td",[s("div",[s("span",{class:t.mediaClass(),on:{click:function(s){t.toDeposit(i)}}},[t._v("立即抢购")])])])])})],2)]):s("div",{staticClass:"message"},[t._v("暂时没有人发起余币宝计划")])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title-box"},[i("span",{staticClass:"title"},[this._v("余币宝计划")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("tr",{staticClass:"table-header"},[s("th",{attrs:{colspan:"2"}},[t._v("项目")]),t._v(" "),s("th",[t._v("回报（每万枚）")]),t._v(" "),s("th",{staticClass:"mobile-hide"},[t._v("锁仓期")]),t._v(" "),s("th",{staticClass:"mobile-hide"},[t._v("起始额度")]),t._v(" "),s("th",{staticClass:"mobile-hide"},[t._v("剩余额度")]),t._v(" "),s("th")])}]};var e=s("VU/8")({data:function(){return{depositBoxList:[],inputLockTime:0}},watch:{inputLockTime:function(){this.updateData()}},mounted:function(){this.updateData()},methods:{updateData:function(){var t=this,i={pageno:1,perpage:10};this.inputLockTime&&(i.lockTime=this.inputLockTime),this.$http.post("/api/getDepositBoxList",i).then(function(i){0===i.data.errcode&&(t.depositBoxList=i.data.data.dataList)})},toDeposit:function(t){this.$router.push({path:"/candyRoom/candyBuy",query:t})}}},a,!1,function(t){s("Nq+N")},"data-v-3f15da61",null);i.default=e.exports}});
//# sourceMappingURL=25.14beaeabe15df155de12.js.map