webpackJsonp([16],{"3CuN":function(t,s){},"U5/d":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"proj-list-panel"},[a("h3",{staticClass:"panel-title"},[t._v("项目直通车")]),t._v(" "),a("div",{staticClass:"table-box"},[a("table",t._l(t.projList,function(s){return a("tr",{key:s.id,on:{click:function(a){t.toProjDetail(s.id)}}},[a("td",[a("img",{attrs:{src:s.logoUrl,alt:""}})]),t._v(" "),a("td",[a("div",{staticClass:"item-box info-box"},[a("span",{staticClass:"title"},[t._v(t._s(s.nameCn))]),t._v(" "),a("span",[t._v(t._s(s.nameEn))])])]),t._v(" "),a("td",{staticClass:"mobile-hide"},[a("div",{staticClass:"item-box"},[a("span",{staticClass:"title"},[t._v("代币符号")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(s.tokenSymbol))])])]),t._v(" "),a("td",{staticClass:"mobile-hide"},[a("div",{staticClass:"item-box"},[a("span",{staticClass:"title"},[t._v("行业")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.convertBuzType(s.buzType)))])])]),t._v(" "),a("td",{staticClass:"mobile-hide"},[a("div",{staticClass:"item-box"},[a("span",{staticClass:"title"},[t._v("融资状态")]),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(t.convertFundStage(s.fundStage)))])])])])}))])])},staticRenderFns:[]};var e=a("VU/8")({data:function(){return{dataCount:0,projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:1,perpage:10}).then(function(s){var a=s.data;0===a.errcode&&(t.dataCount=a.data.dataCount,t.projList=a.data.projList)})},methods:{toProjDetail:function(t){this.$router.push("/projDetail/"+t)}}},i,!1,function(t){a("3CuN")},"data-v-a8f455b0",null);s.default=e.exports}});
//# sourceMappingURL=16.2d5746340d2e0d579394.js.map