webpackJsonp([39],{I37D:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),i=s.n(e),n=s("NYxO"),c={components:{Pagination:s("/6x9").a},data:function(){return{total:85,perpage:10,pageno:1,dataCount:0,dataList:[],protocolDict:{},statusDict:{}}},mounted:function(){this.updateData()},computed:i()({},Object(n.d)({code:function(t){return t.route.query.code}}),{totalAssetArr:function(){return this.dataList.reduce(function(t,a){return a.amount*a.price+t},0).toString().split(".")}}),methods:{updateData:function(){var t=this;this.$http.post("/api/getUserAsset",{perpage:this.perpage,pageno:this.pageno}).then(function(a){0===a.data.errcode&&(t.dataCount=a.data.data.dataCount,t.dataList=a.data.data.dataList,t.protocolDict=a.data.data.protocolDict,t.statusDict=a.data.data.statusDict)})},checkAuth:function(t){return"BCV"===t||"EOS"===t||"PXC"===t||"ICST"===t||"bcvadmin"===this.code&&"ETH"===t},onPageClick:function(t){this.pageno=t,this.updateData()},toWithdraw:function(t){var a=this;t.walletAddr?this.$confirm("您的收币地址为"+t.walletAddr+", 确认提币?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.post("/api/withdraw",{assetId:t.id}).then(function(t){0===t.data.errcode?(a.$message({type:"success",message:"提交成功!"}),a.updateData()):alert(t.data.errmsg)})}).catch(function(){a.$message({type:"info",message:"已取消"})}):this.$router.push("/wallet/withdraw/"+t.id)}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"panel panel-custom"},[s("div",{staticClass:"panel-body"},[s("div",{staticClass:"col-xs-6 text-center"},[s("div",{staticClass:"text-darker"},[s("span",[t._v("总资产 (CNY) ≈ ")]),t._v(" "),s("span",{staticClass:"text-primary",staticStyle:{"font-size":"48px"}},[t._v(t._s(t.totalAssetArr[0]))]),t._v(" "),s("span",{staticClass:"text-primary"},[t._v("."+t._s(t.totalAssetArr[1]||"00"))])])]),t._v(" "),s("div",{staticClass:"col-xs-6 text-right",staticStyle:{"padding-top":"30px"}},[s("router-link",{staticClass:"text-primary",attrs:{to:"/wallet/records"}},[t._v("查看交易记录")])],1)])]),t._v(" "),s("table",{staticClass:"table text-darker table-hover small",staticStyle:{background:"#fff"}},[t._m(0),t._v(" "),s("tbody",t._l(t.dataList,function(a){return s("tr",{key:a.id},[s("td",[s("img",{staticClass:"img-circle",staticStyle:{"max-width":"40px","max-height":"40px"},attrs:{src:a.logoUrl}}),t._v("  "+t._s(a.symbol))]),t._v(" "),s("td",[t._v(t._s(a.price||"以交易所价格为准"))]),t._v(" "),s("td",[t._v(t._s(a.amount)+" ≈ "),s("span",{staticClass:"text-dark small"},[t._v(t._s(a.price?parseInt(a.amount*a.price*1e4)/1e4:"-"))])]),t._v(" "),t.checkAuth(a.symbol)?s("td",[t._v(t._s(t.statusDict[a.status]))]):s("td",[t._v("稍后提取")]),t._v(" "),t.checkAuth(a.symbol)&&"可提取"===t.statusDict[a.status]?s("td",[s("button",{staticClass:"btn btn-text btn-sm",on:{click:function(s){t.toWithdraw(a)}}},[t._v("立即提取")])]):s("td",[t._v("-")])])}))]),t._v(" "),s("div",{staticClass:"text-right"},[s("pagination",{attrs:{total:t.dataCount,"current-page":t.pageno},on:{onPageClick:t.onPageClick}})],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"shadow-thead"},[s("tr",[s("th",[t._v("币种")]),t._v(" "),s("th",[t._v("参考价")]),t._v(" "),s("th",[t._v("数量")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("th",{staticStyle:{width:"120px"}},[t._v("操作")])])])}]};var o=s("VU/8")(c,r,!1,function(t){s("xnCu")},"data-v-0cd2f102",null);a.default=o.exports},xnCu:function(t,a){}});
//# sourceMappingURL=39.c79176355b6afea758e3.js.map