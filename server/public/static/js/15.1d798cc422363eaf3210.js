webpackJsonp([15],{"1U3o":function(t,e){},y0Ls:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{topList:[{title:"关注TOP10",type:"focus"},{title:"浏览TOP10",type:"view"}],newdetail:{}}},mounted:function(){var t=this.$route.params.id;console.log(t);var e=this;this.$http.post("/api/getNewsDetail",{id:t}).then(function(t){var n=t.data;0===n.errcode?e.newdetail=n.data:alert(n.errmsg)})},components:{TopListPanel:n("YCFY").default}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-list"},[n("div",{staticClass:"main-panel"},[n("span",{staticClass:"new-title"},[t._v(t._s(t.newdetail.title))]),t._v(" "),n("span",{staticClass:"new-time"},[t._v(t._s(t.newdetail.releaseTime))]),t._v(" "),n("span",{staticClass:"new-content",domProps:{innerHTML:t._s(t.newdetail.content)}})]),t._v(" "),n("div",{staticClass:"aside-panel"},[t._m(0),t._v(" "),t._l(t.topList,function(t){return n("top-list-panel",{key:t.type,attrs:{"list-data":t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new-column"},[e("h3",[this._v("看资讯，看项目")])])}]};var i=n("VU/8")(s,a,!1,function(t){n("1U3o")},null,null);e.default=i.exports}});
//# sourceMappingURL=15.1d798cc422363eaf3210.js.map