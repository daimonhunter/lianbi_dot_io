webpackJsonp([4,23,26],{GYg6:function(t,a){},Gk3n:function(t,a){},XIza:function(t,a){},Y8Ir:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mSzT"),i=s("2Pnh"),r=s.n(i),n={props:{projDetail:Object},data:function(){return{showShare:!1,shareUrl:""}},methods:{openShare:function(){var t=this;this.showShare=!0,this.shareUrl||this.$nextTick(function(){r()(document.querySelector("#shareCard")).then(function(a){document.querySelector("#shareBox").innerHTML="";var s=a.toDataURL();t.shareUrl=s;var e=document.createElement("img");e.src=s,e.style.width="90%",e.class="share-img",document.querySelector("#shareBox").appendChild(e)})})},toggleFocus:function(){var t=this;if(!localStorage.getItem("userId"))return alert("请登录");this.$http.post("/api/toggleFocus",{projId:this.projDetail.id}).then(function(a){var s=a.data;0===s.errcode&&(t.projDetail.focusStatus=s.data.status)})}},components:{Share:e.default}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-info"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showShare,expression:"showShare"}],staticClass:"share-container",attrs:{id:"shareBox"},on:{click:function(a){t.showShare=!1}}},[s("share",{attrs:{id:"shareCard","proj-detail":t.projDetail}})],1),t._v(" "),s("div",{staticClass:"info-box",attrs:{id:"infoBox"}},[s("img",{attrs:{src:t.projDetail.logoUrl,alt:""}}),t._v(" "),s("div",{staticClass:"text-box"},[s("div",{staticClass:"top-row"},[s("span",{staticClass:"name-cn"},[t._v(t._s(t.projDetail.nameCn))]),t._v(" "),s("span",{staticClass:"name-en"},[t._v("("+t._s(t.projDetail.nameEn)+")")])]),t._v(" "),s("div",{staticClass:"bottom-row"},[s("span",{staticClass:"text-title"},[t._v("项目简称：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenName))]),t._v(" "),s("span",{staticClass:"text-title"},[t._v("项目符号：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenSymbol))])])])]),t._v(" "),s("div",{staticClass:"btn-box"},[s("a",{attrs:{href:t.projDetail.homeUrl,target:"_blank"}},[s("div",{staticClass:"white-paper"},[t._v("项目主页")])]),t._v(" "),s("a",{attrs:{href:t.projDetail.whitePaperUrl,target:"_blank"}},[s("div",{staticClass:"white-paper"},[t._v("白皮书")])]),t._v(" "),s("div",{class:{focused:t.projDetail.focusStatus},on:{click:function(a){t.toggleFocus()}}},[t._v("\n        "+t._s(t.projDetail.focusStatus?"取消关注":"关注项目")+"\n      ")])]),t._v(" "),s("div",{staticClass:"tag-box"},[s("span",{staticClass:"title"},[t._v("标签")]),t._v(" "),t._l(t.projDetail.tagList,function(a,e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(a))])})],2),t._v(" "),s("div",{staticClass:"social-box"},[s("span",{staticClass:"title"},[t._v("社群：")]),t._v(" "),t._l(t.projDetail.socialList,function(t,a){return s("a",{key:a,attrs:{href:t.linkUrl,target:"_blank"}},[s("i",{staticClass:"fab",class:t.fontClass})])})],2),t._v(" "),s("div",{staticClass:"share-box",on:{click:t.openShare}},[s("span",{staticClass:"title"},[t._v("分享")]),t._v(" "),s("img",{attrs:{src:"/static/logo/share.png",alt:""}})])])},staticRenderFns:[]};var o=s("VU/8")(n,l,!1,function(t){s("GYg6")},"data-v-3d72bb91",null);a.default=o.exports},Yxvu:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("qrst"),i={props:{projDetail:Object},data:function(){return{activeIndex:1}},components:{ProjTimeLine:e.default}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail-panel"},[s("div",{staticClass:"header"},[s("span",{class:{active:1===t.activeIndex},on:{click:function(a){t.activeIndex=1}}},[s("router-link",{attrs:{to:"#Info"}},[t._v("项目信息")])],1),t._v(" "),s("span",{class:{active:2===t.activeIndex},on:{click:function(a){t.activeIndex=2}}},[s("router-link",{attrs:{to:"#Team"}},[t._v("\n        团队信息\n      ")])],1),t._v(" "),s("span",{class:{active:3===t.activeIndex},on:{click:function(a){t.activeIndex=3}}},[s("router-link",{attrs:{to:"#Event"}},[t._v("\n        项目发展\n      ")])],1),t._v(" "),s("span",{class:{active:4===t.activeIndex},on:{click:function(a){t.activeIndex=4}}},[s("router-link",{attrs:{to:"#Partner"}},[t._v("\n        合作伙伴\n      ")])],1)]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"info-area",attrs:{id:"Info"}},[s("h3",{staticClass:"panel-title"},[t._v("项目简介")]),t._v("\n      "+t._s(t.projDetail.short_desc)+"\n      "),t.projDetail.bannerUrl?s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projDetail.bannerUrl,alt:""}})]):t._e(),t._v(" "),s("div",{staticClass:"abstract"},[s("span",[t._v(t._s(t.projDetail.abstract))])])]),t._v(" "),t.projDetail.memberList.length?s("div",{staticClass:"team-area",attrs:{id:"Team"}},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"390px"}},t._l(t.projDetail.memberList,function(a,e){return s("el-carousel-item",{key:e,staticClass:"member"},[s("img",{staticClass:"avatar",attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])}))],1):t._e(),t._v(" "),t.projDetail.advisorList.length?s("div",{staticClass:"advisor-area",attrs:{id:"Advisor"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("项目顾问")]),t._v(" "),s("div",{staticClass:"advisor-box"},[s("ul",{staticClass:"advisor-list"},t._l(t.projDetail.advisorList,function(a,e){return s("li",{key:e,staticClass:"advisor-item mobile-list-item"},[s("img",{attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"intro-hover"},[s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])])}))])]):t._e(),t._v(" "),t.projDetail.eventList.length?s("div",{staticClass:"event-area",attrs:{id:"Event"}},[s("h3",{staticClass:"panel-title"},[t._v("项目发展")]),t._v(" "),s("proj-time-line",{attrs:{"proj-event":t.projDetail.eventList}})],1):t._e(),t._v(" "),t.projDetail.partnerList.length?s("div",{staticClass:"partner-area",attrs:{id:"Partner"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("合作伙伴")]),t._v(" "),s("div",{staticClass:"logo-box"},t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,staticClass:"img-container",attrs:{href:t.homeUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])}))]):t._e()])])},staticRenderFns:[]};var n=s("VU/8")(i,r,!1,function(t){s("Gk3n")},"data-v-637f4b8e",null);a.default=n.exports},prwi:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Y8Ir"),i=s("Yxvu"),r={data:function(){return{current:1,showShare:!1,projDetail:{nameCn:"",nameEn:"",logoUrl:"",tokenName:"",tokenSymbol:"",whitePaperUrl:"",abstract:"",tagList:[],partnerList:[],memberList:[],reportList:[],eventList:[],advisorList:[],bannerUrl:"",companyTel:"",companyAddr:"",companyEmail:"",viewTimes:0,focusNum:0,focusStatus:0}}},mounted:function(){var t=this.$route.params.id;console.log("projId:"+t);var a=this;this.$http.post("/api/getProjDetail",{projId:t}).then(function(t){var s=t.data;0===s.errcode?(a.projDetail=s.data,console.log(a.projDetail)):alert(s.errmsg)}),this.$http.post("/api/viewProject",{projId:t}),this.updSubMenuIndex()},watch:{$route:function(){this.updSubMenuIndex()}},methods:{updSubMenuIndex:function(){var t=this.$route.path;-1!==t.indexOf("/projDetail/info")?this.current=1:-1!==t.indexOf("/projDetail/dynamic")&&(this.current=2)}},components:{ProjInfoPanel:e.default,ProjDetailPanel:i.default}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail"},[s("div",{staticClass:"main-panel"},[s("proj-info-panel",{attrs:{"proj-detail":t.projDetail}}),t._v(" "),s("div",{staticClass:"banner"},[s("router-link",{staticClass:"detail-box",class:{active:1===t.current},attrs:{to:{path:"/projDetail/info/"+t.projDetail.id}}},[s("img",{attrs:{src:"/static/img/project"+(1===t.current?".png":"-default.png"),alt:""}}),t._v(" "),s("span",{staticClass:"detail"},[t._v("项目信息")])]),t._v(" "),s("router-link",{staticClass:"news-box",class:{active:2===t.current},attrs:{to:{path:"/projDetail/dynamic/"+t.projDetail.id}}},[s("img",{attrs:{src:"/static/img/dynamic"+(2===t.current?".png":"-default.png"),alt:""}}),t._v(" "),s("span",{staticClass:"news"},[t._v("项目动态")])])],1),t._v(" "),s("router-view",{attrs:{"proj-detail":t.projDetail}})],1),t._v(" "),s("div",{staticClass:"aside-panel"},[s("div",{staticClass:"record-panel"},[s("div",{staticClass:"num-box"},[s("div",{staticClass:"view"},[s("span",[t._v(t._s(t.projDetail.viewTimes))])]),t._v(" "),s("div",{staticClass:"focus"},[s("span",[t._v(t._s(t.projDetail.focusNum))])])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),t.projDetail.companyTel||t.projDetail.companyEmail||t.projDetail.companyAddr?s("div",{staticClass:"contact-panel"},[s("h3",{staticClass:"center-title panel-title"},[t._v("公司联系信息")]),t._v(" "),t.projDetail.companyTel?s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/tel@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyTel))])]):t._e(),t._v(" "),t.projDetail.companyEmail?s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/email@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyEmail))])]):t._e(),t._v(" "),t.projDetail.companyAddr?s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/addr@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyAddr))])]):t._e()]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-box"},[a("div",{staticClass:"view"},[a("img",{attrs:{src:"/static/img/view@2x.png",alt:""}}),this._v(" "),a("span",[this._v("浏览")])]),this._v(" "),a("div",{staticClass:"focus"},[a("img",{attrs:{src:"/static/img/unfocus@2x.png",alt:""}}),this._v(" "),a("span",[this._v("关注")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-panel"},[a("h3",{staticClass:"center-title panel-title"},[this._v("认领该公司")]),this._v(" "),a("img",{attrs:{src:"/static/img/头像扫描@2x.png",alt:""}})])}]};var l=s("VU/8")(r,n,!1,function(t){s("XIza")},"data-v-2c898f4e",null);a.default=l.exports}});
//# sourceMappingURL=4.564373f974181a40caf7.js.map