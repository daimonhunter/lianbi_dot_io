webpackJsonp([23],{Gk3n:function(t,a){},Yxvu:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("qrst"),i={props:{projDetail:Object},data:function(){return{activeIndex:1}},components:{ProjTimeLine:e.default}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail-panel"},[s("div",{staticClass:"header"},[s("span",{class:{active:1===t.activeIndex},on:{click:function(a){t.activeIndex=1}}},[s("router-link",{attrs:{to:"#Info"}},[t._v("项目信息")])],1),t._v(" "),s("span",{class:{active:2===t.activeIndex},on:{click:function(a){t.activeIndex=2}}},[s("router-link",{attrs:{to:"#Team"}},[t._v("\n        团队信息\n      ")])],1),t._v(" "),s("span",{class:{active:3===t.activeIndex},on:{click:function(a){t.activeIndex=3}}},[s("router-link",{attrs:{to:"#Event"}},[t._v("\n        项目发展\n      ")])],1),t._v(" "),s("span",{class:{active:4===t.activeIndex},on:{click:function(a){t.activeIndex=4}}},[s("router-link",{attrs:{to:"#Partner"}},[t._v("\n        合作伙伴\n      ")])],1)]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"info-area",attrs:{id:"Info"}},[s("h3",{staticClass:"panel-title"},[t._v("项目简介")]),t._v("\n      "+t._s(t.projDetail.short_desc)+"\n      "),t.projDetail.bannerUrl?s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projDetail.bannerUrl,alt:""}})]):t._e(),t._v(" "),s("div",{staticClass:"abstract"},[s("span",[t._v(t._s(t.projDetail.abstract))])])]),t._v(" "),t.projDetail.memberList.length?s("div",{staticClass:"team-area",attrs:{id:"Team"}},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"390px"}},t._l(t.projDetail.memberList,function(a,e){return s("el-carousel-item",{key:e,staticClass:"member"},[s("img",{staticClass:"avatar",attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])}))],1):t._e(),t._v(" "),t.projDetail.advisorList.length?s("div",{staticClass:"advisor-area",attrs:{id:"Advisor"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("项目顾问")]),t._v(" "),s("div",{staticClass:"advisor-box"},[s("ul",{staticClass:"advisor-list"},t._l(t.projDetail.advisorList,function(a,e){return s("li",{key:e,staticClass:"advisor-item mobile-list-item"},[s("img",{attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"intro-hover"},[s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])])}))])]):t._e(),t._v(" "),t.projDetail.eventList.length?s("div",{staticClass:"event-area",attrs:{id:"Event"}},[s("h3",{staticClass:"panel-title"},[t._v("项目发展")]),t._v(" "),s("proj-time-line",{attrs:{"proj-event":t.projDetail.eventList}})],1):t._e(),t._v(" "),t.projDetail.partnerList.length?s("div",{staticClass:"partner-area",attrs:{id:"Partner"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("合作伙伴")]),t._v(" "),s("div",{staticClass:"logo-box"},t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,staticClass:"img-container",attrs:{href:t.homeUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])}))]):t._e()])])},staticRenderFns:[]};var n=s("VU/8")(i,r,!1,function(t){s("Gk3n")},"data-v-637f4b8e",null);a.default=n.exports}});
//# sourceMappingURL=23.7ac9b5969f4d99d4079a.js.map