webpackJsonp([17],{U8CK:function(t,a){},sFhK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={components:{Pagination:e("+ryu").default},data:function(){return{currentPage:1,perpage:10,pageno:1,dataCount:0,recordList:[]}},mounted:function(){this.updateData()},methods:{updateData:function(){var t=this;this.$http.post("/api/getUserTransferRecord",{perpage:this.perpage,pageno:this.pageno}).then(function(a){0===a.data.errcode&&(t.dataCount=a.data.data.dataCount,t.recordList=a.data.data.dataList)})},onPageClick:function(t){this.pageno=t}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("table",{staticClass:"table text-darker table-hover small",staticStyle:{background:"#fff"}},[t._m(1),t._v(" "),e("tbody",t._l(t.recordList,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.symbol))]),t._v(" "),e("td",[t._v(t._s(a.amount))]),t._v(" "),e("td",[t._v(t._s(a.txHash))]),t._v(" "),e("td",[t._v(t._s(a.txTime))])])}))]),t._v(" "),e("div",{staticClass:"text-right"},[e("pagination",{attrs:{total:t.dataCount,"current-page":t.pageno},on:{onPageClick:t.onPageClick}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("span",[this._v("总资产")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("交易记录")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",{staticClass:"shadow-thead"},[a("tr",[a("th",[this._v("币种")]),this._v(" "),a("th",[this._v("数量")]),this._v(" "),a("th",[this._v("交易哈希")]),this._v(" "),a("th",{staticStyle:{width:"200px"}},[this._v("交易时间")])])])}]};var i=e("Z0/y")(s,n,!1,function(t){e("U8CK")},"data-v-6be53478",null);a.default=i.exports}});
//# sourceMappingURL=17.051dd5bbff962c26a74a.js.map