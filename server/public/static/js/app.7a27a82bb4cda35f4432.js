webpackJsonp([1],{"+u+r":function(t,a){},"1rUV":function(t,a){},"5Fml":function(t,a){},"8gnx":function(t,a){},"8t6A":function(t,a){},DROf:function(t,a){},FpcX:function(t,a){},MgdY:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={data:function(){return{isOnline:!1,avatarUrl:"/static/img/avatar.png",account:"junderking@163.com",menuIndex:0,menuList:[{url:"/",text:"首页"},{url:"/projList",text:"发现"},{url:"/",text:"资讯"}]}},mounted:function(){"/"===this.$route.path&&(this.menuIndex=0),"/projList"===this.$route.path&&(this.menuIndex=1);var t=document.cookie;console.log("getcookie:"),console.log(t)},watch:{$route:function(t,a){"/"===this.$route.path&&(this.menuIndex=0),"/projList"===this.$route.path&&(this.menuIndex=1)}},methods:{menuSwitch:function(t){this.menuIndex=t},signout:function(){var t=this;this.$http.post("/api/signout",{}).then(function(a){0===a.data.errcode&&t.$router.go(0)})}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"content"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"nav"},[s("ul",t._l(t.menuList,function(a,e){return s("li",{key:e,class:{active:t.menuIndex===e}},[s("router-link",{attrs:{to:a.url}},[s("span",{staticClass:"nav-text",on:{click:function(a){t.menuSwitch(e)}}},[t._v(t._s(a.text))])])],1)}))]),t._v(" "),t.isOnline?s("div",{staticClass:"info-box"},[s("img",{attrs:{src:t.avatarUrl,alt:""}}),t._v(" "),s("span",{staticClass:"nickname"},[t._v(t._s(t.account))]),t._v(" "),s("div",{staticClass:"signout btn",on:{click:t.signout}},[s("span",{staticClass:"btn-text"},[t._v("退出登录")])])]):s("div",{staticClass:"btn-box"},[s("router-link",{attrs:{to:"/signin"}},[s("div",{staticClass:"signin btn"},[s("span",{staticClass:"btn-text"},[t._v("登录")])])]),t._v(" "),s("router-link",{attrs:{to:"/signup"}},[s("div",{staticClass:"signup btn"},[s("span",{staticClass:"btn-text"},[t._v("注册")])])])],1)],1)])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("div",{staticClass:"content"},[s("div",{staticClass:"icon-box"},[s("img",{attrs:{src:"/static/img/webchat-2x.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"/static/img/blog-2x.png",alt:""}})]),t._v(" "),s("div",{staticClass:"name"},[s("span",{staticClass:"name"},[t._v("LIANBI")])]),t._v(" "),s("div",{staticClass:"addr"},[s("span",[t._v("联系地址：北京石景山实兴大街苹果园街道朗诚大厦二楼")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",[t._v("@storiqa.2018 保留所有权利")]),t._v(" "),s("span",[t._v("收集到的信息有助于展示个性化广告，为客户提供服务，并接受市场的统计数据。继续浏览即表示同意使用cookie")])])])])}]};var o={name:"App",components:{vHeader:s("VU/8")(i,n,!1,function(t){s("wLp0")},"data-v-1ebdfdd4",null).exports,vFooter:s("VU/8")({data:function(){return{}}},r,!1,function(t){s("+u+r")},"data-v-1de918a2",null).exports}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-header"),this._v(" "),a("div",{staticClass:"main-container"},[a("router-view")],1),this._v(" "),a("v-footer")],1)},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("1rUV"),s("5Fml")},"data-v-694158fc",null).exports,v=s("/ocq"),p={props:{filterResult:{type:Object,default:function(){return{region:0,bussinessType:0,phrase:0}}}},data:function(){return{keyword:""}},mounted:function(){this.$route.query.keyword&&(this.keyword=this.$route.query.keyword)},watch:{filterResult:function(){this.searchProject()}},methods:{searchProject:function(){if("/projList"!==this.$route.path)return this.$router.push("/projList?keyword="+this.keyword);var t=this;this.$http.post("/api/getProjList",{keyword:this.keyword,region:this.filterResult.region,bussinessType:this.filterResult.bussinessType,phrase:this.filterResult.phrase,pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode?(console.log(s),t.$root.eventHub.$emit("updateProjList",s.data)):alert(s.errmsg)})}}},u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search"},[s("div",{staticClass:"input-box"},[s("img",{attrs:{src:"/static/img/search-2x.png",alt:""}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"代币名称、符号、项目名称"},domProps:{value:t.keyword},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.searchProject(a)},input:function(a){a.target.composing||(t.keyword=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.searchProject}},[s("span",[t._v("搜索机构")])])])},staticRenderFns:[]};var d=s("VU/8")(p,u,!1,function(t){s("8t6A")},"data-v-76b09c41",null).exports,_={data:function(){return{}},components:{Search:d}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search-panel"},[this._m(0),this._v(" "),a("search")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",[this._v("更多的机构， 遇见更多的财富")])])}]};var m=s("VU/8")(_,f,!1,function(t){s("jklm")},"data-v-1059550e",null).exports,h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-list"},[s("h3",{staticClass:"panel-title"},[t._v("明星项目")]),t._v(" "),s("div",{staticClass:"info-container"},t._l(t.projList,function(a){return s("router-link",{key:a.id,staticClass:"info-area",attrs:{to:{path:"projDetail/"+a.id}}},[s("span",[t._v(t._s(a.tokenName))]),t._v(" "),s("span",[t._v(t._s(a.tokenPrice))])])}))])},staticRenderFns:[]};var C=s("VU/8")({data:function(){return{projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:1,perpage:3}).then(function(a){var s=a.data;0===s.errcode&&(t.projList=s.data.projList)})}},h,!1,function(t){s("mo6e")},"data-v-6782be4c",null).exports,g={props:{projData:Object},data:function(){return{}}},x={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-intro"},[s("div",{staticClass:"info-box"},[s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projData.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"content-box"},[s("div",{staticClass:"title-box"},[s("span",{staticClass:"name"},[t._v(t._s(t.projData.tokenSymbol))]),t._v(" "),s("span",{staticClass:"text"},[t._v("天使轮")])]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"text-box"},[s("span",{staticClass:"intro"},[t._v(t._s(t.projData.title))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tag-box"},[a("div",{staticClass:"icon-text"},[a("img",{staticClass:"icon",attrs:{src:"/static/img/tag-2x.png",alt:""}}),this._v(" "),a("span",{staticClass:"text"},[this._v("金融")])]),this._v(" "),a("div",{staticClass:"icon-text"},[a("img",{staticClass:"icon",attrs:{src:"/static/img/location-2x.png",alt:""}}),this._v(" "),a("span",{staticClass:"text"},[this._v("上海")])])])}]};var j={data:function(){return{projList:[]}},components:{ProjIntro:s("VU/8")(g,x,!1,function(t){s("lFP2")},"data-v-b6cbce7c",null).exports},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:2,perpage:6}).then(function(a){var s=a.data;0===s.errcode?t.projList=s.data.projList:alert(s.errmsg)})}},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-show-panel"},[a("h3",{staticClass:"panel-title"},[this._v("发现新公司")]),this._v(" "),a("div",{staticClass:"main-container"},this._l(this.projList,function(t){return a("router-link",{key:t.id,attrs:{to:{path:"projDetail/"+t.id}}},[a("proj-intro",{attrs:{"proj-data":t}})],1)}))])},staticRenderFns:[]};var k=s("VU/8")(j,b,!1,function(t){s("hh4z")},"data-v-aa44ed94",null).exports,w={props:{projData:Object},data:function(){return{}}},y={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-item-box"},[s("div",{staticClass:"column index1"},[s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projData.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info-box"},[s("span",{staticClass:"title"},[t._v(t._s(t.projData.nameCn))]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.nameEn))])])]),t._v(" "),s("div",{staticClass:"column flex index2"},[s("span",{staticClass:"title"},[t._v("代币名称")]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.tokenSymbol))])]),t._v(" "),s("div",{staticClass:"column flex index3"},[s("span",{staticClass:"title"},[t._v("当前代币价格")]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.tokenPrice))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"column flex index4"},[a("span",{staticClass:"title"},[this._v("融资状态")]),this._v(" "),a("span",{staticClass:"content"},[this._v("未透露")])])}]};var L={data:function(){return{dataCount:0,projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode&&(t.dataCount=s.data.dataCount,t.projList=s.data.projList)})},components:{ProjItemBox:s("VU/8")(w,y,!1,function(t){s("hTRD")},"data-v-2c8438a4",null).exports}},$={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-list-panel"},[a("h3",{staticClass:"panel-title"},[this._v("项目直通车")]),this._v(" "),a("div",{staticClass:"proj-item-wrapper"},this._l(this.projList,function(t){return a("router-link",{key:t.id,attrs:{to:{path:"projDetail/"+t.id}}},[a("proj-item-box",{attrs:{projData:t}})],1)})),this._v(" "),a("div",{staticClass:"bottom-btn"},[this._v("更多优秀项目")])])},staticRenderFns:[]};var D={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"news-panel"},[s("h3",{staticClass:"panel-title"},[t._v("lianbi说")]),t._v(" "),s("div",{staticClass:"list-container"},t._l(4,function(a){return s("div",{key:a,staticClass:"item-container"},[s("span",{staticClass:"text"},[t._v("如果世界漆黑，其实我很美，在爱情里面进退，最多被消费")]),t._v(" "),s("span",{staticClass:"time"},[t._v("2018-01-09")])])}))])},staticRenderFns:[]};var P={data:function(){return{}},components:{SearchPanel:m,TopList:C,ProjShowPanel:k,ProjListPanel:s("VU/8")(L,$,!1,function(t){s("FpcX")},"data-v-6a1dc06c",null).exports,NewsPanel:s("VU/8")({data:function(){return{}}},D,!1,function(t){s("8gnx")},"data-v-28d2ed8e",null).exports}},R={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"main-panel"},[a("search-panel"),this._v(" "),a("proj-show-panel"),this._v(" "),a("proj-list-panel")],1),this._v(" "),a("div",{staticClass:"aside-panel"},[a("top-list"),this._v(" "),a("news-panel")],1)])},staticRenderFns:[]};var E=s("VU/8")(P,R,!1,function(t){s("MgdY")},"data-v-926f8c0c",null).exports,U={data:function(){return{filterRuleList:[{type:1,text:"地区",curOption:0,optionList:[{text:"不限",value:0},{text:"国内",value:1},{text:"国外",value:2}]},{type:2,text:"行业",curOption:0,optionList:[{text:"不限",value:0},{text:"人工智能",value:1},{text:"房产服务",value:2},{text:"教育",value:3},{text:"金融",value:4},{text:"硬件",value:5},{text:"医疗健康",value:6},{text:"文化娱乐",value:7}]},{type:3,text:"阶段",curOption:0,optionList:[{text:"不限",value:0},{text:"初创期",value:1},{text:"成长发展期",value:2},{text:"上市公司",value:3},{text:"成熟期",value:4}]}]}},computed:{filterResult:function(){return{region:this.filterRuleList[0].curOption,bussinessType:this.filterRuleList[1].curOption,phrase:this.filterRuleList[2].curOption}}},components:{Search:d}},I={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-search-panel"},[s("search",{attrs:{"filter-result":t.filterResult}}),t._v(" "),s("div",{staticClass:"sort-container"},t._l(t.filterRuleList,function(a){return s("div",{key:a.type,staticClass:"sort-row"},[s("span",{staticClass:"title"},[t._v(t._s(a.text))]),t._v(" "),s("div",{staticClass:"tag-wrapper"},t._l(a.optionList,function(e){return s("span",{key:e.value,staticClass:"tag",class:{cur:a.curOption===e.value},on:{click:function(t){a.curOption=e.value}}},[t._v(t._s(e.text))])}))])})),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-box"},[a("img",{attrs:{src:"/static/img/Triangle@2x.png",alt:""}}),this._v(" "),a("span",[this._v("全部筛选项")])])}]};var F=s("VU/8")(U,I,!1,function(t){s("kGAP")},"data-v-2612ea5a",null).exports,T={props:{listData:Object},data:function(){return{projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjTopList",{type:this.listData.type,count:10}).then(function(a){var s=a.data;0===s.errcode&&(t.projList=s.data)})}},V={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-list-panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.listData.title))]),t._v(" "),s("ul",{staticClass:"list-container"},t._l(t.projList,function(a,e){return s("li",{key:a.projId,staticClass:"list-item"},[s("router-link",{attrs:{to:{path:"projDetail/"+a.projId}}},[s("span",{staticClass:"index"},[t._v(t._s(e+1))]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(a.nameCn))]),t._v(" "),s("span",{staticClass:"count"},[t._v(t._s(a.count))])])],1)}))])},staticRenderFns:[]};var O={data:function(){return{projData:function(){return{}}}},created:function(){this.$root.eventHub.$on("updateProjList",this.updateProjList)},beforeDestroy:function(){this.$root.eventHub.$off("updateProjList",this.updateProjList)},mounted:function(){var t=this,a=this.$route.query.keyword;this.$http.post("/api/getProjList",{keyword:a,pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode?t.updateProjList(s.data):alert(s.errmsg)})},methods:{updateProjList:function(t){this.projData=t},projNav:function(t){this.$router.push("projDetail/"+t)},focus:function(t){alert(t)}}},N={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-table-panel"},[s("h3",{staticClass:"panel-title"},[t._v("共"+t._s(t.projData.dataCount)+"项")]),t._v(" "),s("table",{staticClass:"info-table"},[t._m(0),t._v(" "),t._l(t.projData.projList,function(a){return s("tr",{key:a.id,staticClass:"info-row",on:{click:function(s){t.projNav(a.id)}}},[s("td",[s("div",{staticClass:"logo-box"},[s("img",{attrs:{src:a.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info-box"},[s("span",{staticClass:"name"},[t._v(t._s(a.nameCn))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.nameEn))])])]),t._v(" "),s("td",[s("span",[t._v(t._s(a.tokenSymbol))])]),t._v(" "),s("td",[s("div",[s("span",[t._v(t._s(a.tokenPrice))])])]),t._v(" "),s("td",[s("img",{attrs:{src:"/static/img/心@2x.png",alt:""},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.focus(a.id)}}})]),t._v(" "),t._m(1,!0)])})],2)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{staticClass:"info-header"},[s("th",[t._v("公司名称")]),t._v(" "),s("th",[t._v("代币名称")]),t._v(" "),s("th",[t._v("当前代币价格")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("融资状态")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",[this._v("已融资")])])}]};var A={data:function(){return{topList:[{title:"关注TOP10",type:"focus"},{title:"浏览TOP10",type:"view"}]}},components:{ProjSearchPanel:F,TopListPanel:s("VU/8")(T,V,!1,function(t){s("DROf")},"data-v-605e58c0",null).exports,ProjTablePanel:s("VU/8")(O,N,!1,function(t){s("bhJr")},"data-v-abde976e",null).exports}},S={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-list"},[a("div",{staticClass:"main-panel"},[a("proj-search-panel"),this._v(" "),a("proj-table-panel")],1),this._v(" "),a("div",{staticClass:"aside-panel"},this._l(this.topList,function(t){return a("top-list-panel",{key:t.type,attrs:{"list-data":t}})}))])},staticRenderFns:[]};var z=s("VU/8")(A,S,!1,function(t){s("nqjD")},"data-v-0b273e66",null).exports,q={props:{projDetail:Object},data:function(){return{}}},H={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-info"},[s("div",{staticClass:"info-box"},[s("img",{attrs:{src:t.projDetail.logoUrl,alt:""}}),t._v(" "),s("div",{staticClass:"text-box"},[s("div",{staticClass:"top-row"},[s("span",{staticClass:"name-cn"},[t._v(t._s(t.projDetail.nameCn))]),t._v(" "),s("span",{staticClass:"name-en"},[t._v("("+t._s(t.projDetail.nameEn)+")")])]),t._v(" "),s("div",{staticClass:"bottom-row"},[s("span",{staticClass:"text-title"},[t._v("代币名称：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenName))]),t._v(" "),s("span",{staticClass:"text-title"},[t._v("代币符号：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenSymbol))])])])]),t._v(" "),s("div",{staticClass:"tag-box"},[s("span",{staticClass:"title"},[t._v("标签")]),t._v(" "),t._l(t.projDetail.tagList,function(a,e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(a))])})],2),t._v(" "),s("div",{staticClass:"social-box"},[s("span",{staticClass:"title"},[t._v("友情链接：")]),t._v(" "),t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,attrs:{href:t.webUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])})],2)])},staticRenderFns:[]};var M=s("VU/8")(q,H,!1,function(t){s("QfRG")},"data-v-349e1df6",null).exports,W={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"timeline"},[s("div",{staticClass:"line-wrapper"},t._l(t.eventList,function(a,e){return s("div",{key:e,staticClass:"event-item"},[s("div",{staticClass:"event-time-container"},[s("div",{staticClass:"event-time"},[t._v(t._s(a.eventTime))])]),t._v(" "),t._l(a.eventNode,function(a,e){return s("div",{key:e,staticClass:"event-node"},[s("div",{staticClass:"event-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"event-info",domProps:{innerHTML:t._s(a.info)}})])})],2)}))])},staticRenderFns:[]};var Z=s("VU/8")({data:function(){return{eventList:[{eventTime:2015,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456<br/>23456<br/>23456"},{title:"4季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456"}]},{eventTime:2016,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456"}]},{eventTime:2017,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456"},{title:"4季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456"}]}]}}},W,!1,function(t){s("lv/l")},"data-v-7b7ed63b",null).exports,G={props:{projDetail:Object},data:function(){return{activeIndex:1}},components:{ProjTimeLine:Z}},B={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail-panel"},[s("div",{staticClass:"header"},[s("span",{class:{active:1===t.activeIndex},on:{click:function(a){t.activeIndex=1}}},[s("router-link",{attrs:{to:"#Info"}},[t._v("项目信息")])],1),t._v(" "),s("span",{class:{active:2===t.activeIndex},on:{click:function(a){t.activeIndex=2}}},[s("router-link",{attrs:{to:"#Team"}},[t._v("\n         团队信息\n       ")])],1),t._v(" "),s("span",{class:{active:3===t.activeIndex},on:{click:function(a){t.activeIndex=3}}},[s("router-link",{attrs:{to:"#Event"}},[t._v("\n         项目发展\n       ")])],1),t._v(" "),s("span",{class:{active:4===t.activeIndex},on:{click:function(a){t.activeIndex=4}}},[s("router-link",{attrs:{to:"#Partner"}},[t._v("\n         合作伙伴\n       ")])],1),t._v(" "),s("span",{class:{active:5===t.activeIndex},on:{click:function(a){t.activeIndex=5}}},[s("router-link",{attrs:{to:"#Media"}},[t._v("\n         媒体报道\n       ")])],1)]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"info-area",attrs:{id:"Info"}},[s("h3",{staticClass:"panel-title"},[t._v("项目简介")]),t._v(" "),s("div",[s("img",{attrs:{src:t.projDetail.bannerUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"abstract"},[s("span",[t._v(t._s(t.projDetail.abstract))])])]),t._v(" "),s("div",{staticClass:"team-area",attrs:{id:"Team"}},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"378px"}},t._l(t.projDetail.memberList,function(a,e){return s("el-carousel-item",{key:e,staticClass:"member"},[s("img",{staticClass:"avatar",attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])}))],1),t._v(" "),s("div",{staticClass:"event-area",attrs:{id:"Event"}},[s("h3",{staticClass:"panel-title"},[t._v("项目发展")]),t._v(" "),s("proj-time-line")],1),t._v(" "),s("div",{staticClass:"partner-area",attrs:{id:"Partner"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("合作伙伴")]),t._v(" "),s("div",{staticClass:"logo-box"},t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,staticClass:"img-container",attrs:{href:t.webUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])}))]),t._v(" "),s("div",{staticClass:"media-area",attrs:{id:"Media"}},[s("h3",{staticClass:"center-title panel-title"},[t._v("媒体报道")]),t._v(" "),s("div",{staticClass:"item-box"},t._l(t.projDetail.mediaList,function(a,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"image-area"},[s("img",{staticClass:"log",attrs:{src:a.imageUrl,alt:""}})]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(a.title))])])}))])])])},staticRenderFns:[]};var J={data:function(){return{projDetail:{nameCn:"",nameEn:"",logoUrl:"",tokenName:"",tokenSymbol:"",tagList:[],partnerList:[],whitePaperUrl:"",abstract:"",memberList:[],mediaList:[],bannerUrl:"",companyTel:"",companyAddr:"",companyEmail:"",viewTimes:0,focusNum:0}}},mounted:function(){var t=this.$route.params.id;console.log("projId:"+t);var a=this;this.$http.post("/api/getProjDetail",{projId:t}).then(function(t){var s=t.data;0===s.errcode?(a.projDetail=s.data,console.log(a.projDetail)):alert(s.errmsg)})},components:{ProjInfoPanel:M,ProjDetailPanel:s("VU/8")(G,B,!1,function(t){s("O1eP")},"data-v-a20cc792",null).exports}},Q={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail"},[s("div",{staticClass:"main-panel"},[s("proj-info-panel",{attrs:{"proj-detail":t.projDetail}}),t._v(" "),s("proj-detail-panel",{attrs:{"proj-detail":t.projDetail}})],1),t._v(" "),s("div",{staticClass:"aside-panel"},[s("div",{staticClass:"record-panel"},[s("div",{staticClass:"num-box"},[s("div",{staticClass:"view"},[s("span",[t._v(t._s(t.projDetail.viewTimes))])]),t._v(" "),s("div",{staticClass:"focus"},[s("span",[t._v(t._s(t.projDetail.focusNum))])])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"contact-panel"},[s("h3",{staticClass:"center-title panel-title"},[t._v("公司联系信息")]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/tel@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyTel))])]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/email@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyEmail))])]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/addr@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyAddr))])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-box"},[a("div",{staticClass:"view"},[a("img",{attrs:{src:"/static/img/view@2x.png",alt:""}}),this._v(" "),a("span",[this._v("浏览")])]),this._v(" "),a("div",{staticClass:"focus"},[a("img",{attrs:{src:"/static/img/心@2x.png",alt:""}}),this._v(" "),a("span",[this._v("关注")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-panel"},[a("h3",{staticClass:"center-title panel-title"},[this._v("认领该公司")]),this._v(" "),a("img",{attrs:{src:"/static/img/头像扫描@2x.png",alt:""}})])}]};var X=s("VU/8")(J,Q,!1,function(t){s("UTzS")},"data-v-eb425b22",null).exports,Y={data:function(){return{curIndex:0,email:"",passwd:""}},methods:{signin:function(){if(!new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(this.email))return alert("请填写正确邮箱地址");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{account:this.email,passwd:this.passwd}).then(function(a){var s=a.data;0===s.errcode?t.$router.push("/"):alert(s.errmsg)}).catch(function(t){console.log(t)})}}},K={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"signin"},[s("h3",{staticClass:"panel-title center-title"},[t._v("登录")]),t._v(" "),s("div",{staticClass:"nav"},[s("span",{staticClass:"passwd",class:{active:0===t.curIndex},on:{click:function(a){t.curIndex=0}}},[t._v("密码登录")]),t._v(" "),s("span",{staticClass:"qrcode",class:{active:1===t.curIndex},on:{click:function(a){t.curIndex=1}}},[t._v("扫码登录")])]),t._v(" "),0===t.curIndex?[s("span",{staticClass:"prompt"},[t._v("lianbi会员可直接使用会员名登录")]),t._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"登录密码"},domProps:{value:t.passwd},on:{input:function(a){a.target.composing||(t.passwd=a.target.value)}}}),t._v(" "),s("button",{on:{click:function(a){a.preventDefault(),t.signin(a)}}},[t._v("登录")])]),t._v(" "),s("div",{staticClass:"btn-area"},[s("a",[t._v("忘记密码")]),t._v(" "),s("router-link",{attrs:{to:"signup"}},[s("a",[t._v("注册会员")])])],1)]:s("div",{staticClass:"qrcode-area"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[this._v("打开"),a("em",[this._v("微信")]),this._v("扫一扫")])}]};var tt=s("VU/8")(Y,K,!1,function(t){s("yceW")},"data-v-7268f972",null).exports,at={data:function(){return{email:"",passwd:"",confirm:""}},methods:{signup:function(){if(!new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(this.email))return alert("请填写正确邮箱地址");if(this.passwd.length<6)return alert("密码长度至少需要6位");if(this.passwd!==this.confirm)return alert("两次输入的密码不一致");var t=this;this.$http.post("/api/signup",{account:this.email,passwd:this.passwd}).then(function(a){var s=a.data;0===s.errcode?t.$router.push("/signin"):alert(s.errmsg)}).catch(function(t){console.log(t)})}}},st={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"signup"},[s("h3",{staticClass:"panel-title center-title"},[t._v("欢迎注册链币网")]),t._v(" "),s("span",{staticClass:"prompt"},[t._v("lianbi会员可直接使用会员名登录")]),t._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.passwd},on:{input:function(a){a.target.composing||(t.passwd=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm,expression:"confirm"}],attrs:{type:"password",placeholder:"再次输入密码"},domProps:{value:t.confirm},on:{input:function(a){a.target.composing||(t.confirm=a.target.value)}}}),t._v(" "),s("button",{on:{click:function(a){a.preventDefault(),t.signup(a)}}},[t._v("注册")])])])},staticRenderFns:[]};var et=s("VU/8")(at,st,!1,function(t){s("c+Wa")},"data-v-2697e8cc",null).exports;e.default.use(v.a);var it=new v.a({mode:"history",scrollBehavior:function(t,a,s){if(t.hash)return{selector:t.hash}},routes:[{path:"/",component:E},{path:"/projList",component:z},{path:"/projDetail/:id",component:X},{path:"/signin",component:tt},{path:"/signup",component:et}]}),nt=s("zL8q"),rt=s.n(nt),ot=(s("tvR6"),s("mtWM")),ct=s.n(ot);s("hKoQ").polyfill(),e.default.prototype.$http=ct.a,e.default.use(rt.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:it,components:{App:l},template:"<App/>",data:{eventHub:new e.default}})},O1eP:function(t,a){},QfRG:function(t,a){},UTzS:function(t,a){},bhJr:function(t,a){},"c+Wa":function(t,a){},hTRD:function(t,a){},hh4z:function(t,a){},jklm:function(t,a){},kGAP:function(t,a){},lFP2:function(t,a){},"lv/l":function(t,a){},mo6e:function(t,a){},nqjD:function(t,a){},tvR6:function(t,a){},wLp0:function(t,a){},yceW:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.7a27a82bb4cda35f4432.js.map