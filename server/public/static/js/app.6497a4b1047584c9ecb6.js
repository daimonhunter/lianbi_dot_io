webpackJsonp([1],{"0l54":function(t,a){},"1rUV":function(t,a){},"4wU6":function(t,a){},"5Fml":function(t,a){},"8/jk":function(t,a){},"8t6A":function(t,a){},DROf:function(t,a){},Dwkz:function(t,a){},"MIU/":function(t,a){},MgdY:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={data:function(){return{isOnline:!1,avatarUrl:"/static/img/avatar.png",account:"junderking@163.com",menuIndex:0,menuList:[{url:"/",text:"首页"},{url:"/projList",text:"发现"},{url:"/",text:"资讯"}]}},mounted:function(){if("/"===this.$route.path&&(this.menuIndex=0),"/projList"===this.$route.path&&(this.menuIndex=1),localStorage.getItem("userId")){this.isOnline=!0,this.account=localStorage.getItem("account");var t=localStorage.getItem("avatarUrl");t&&(this.avatarUrl=t)}console.log("account"),console.log(this.account)},watch:{$route:function(t,a){"/"===this.$route.path&&(this.menuIndex=0),"/projList"===this.$route.path&&(this.menuIndex=1)}},methods:{menuSwitch:function(t){this.menuIndex=t},signout:function(){var t=this;this.$http.post("/api/signout",{}).then(function(a){0===a.data.errcode&&(localStorage.removeItem("userId"),localStorage.removeItem("account"),localStorage.removeItem("avatarUrl"),t.$router.go(0))})}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"content"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"nav"},[s("ul",t._l(t.menuList,function(a,e){return s("li",{key:e,class:{active:t.menuIndex===e}},[s("router-link",{attrs:{to:a.url}},[s("span",{staticClass:"nav-text",on:{click:function(a){t.menuSwitch(e)}}},[t._v(t._s(a.text))])])],1)}))]),t._v(" "),t.isOnline?s("div",{staticClass:"info-box"},[s("img",{attrs:{src:t.avatarUrl,alt:""}}),t._v(" "),s("span",{staticClass:"nickname"},[t._v(t._s(t.account))]),t._v(" "),s("div",{staticClass:"signout btn",on:{click:t.signout}},[s("span",{staticClass:"btn-text"},[t._v("退出登录")])])]):s("div",{staticClass:"btn-box"},[s("router-link",{attrs:{to:"/signin"}},[s("div",{staticClass:"signin btn"},[s("span",{staticClass:"btn-text"},[t._v("登录")])])]),t._v(" "),s("router-link",{attrs:{to:"/signup"}},[s("div",{staticClass:"signup btn"},[s("span",{staticClass:"btn-text"},[t._v("注册")])])])],1)],1)])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("div",{staticClass:"content"},[s("div",{staticClass:"icon-box"},[s("a",{attrs:{href:"",target:"_blank"}},[s("img",{attrs:{src:"/static/img/webchat-2x.png",alt:""}})]),t._v(" "),s("a",{attrs:{href:"https://weibo.com/bitcv",target:"_blank"}},[s("img",{attrs:{src:"/static/img/blog-2x.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"name"},[s("span",{staticClass:"name"},[t._v("LIANBI")])]),t._v(" "),s("div",{staticClass:"addr"},[s("span")]),t._v(" "),s("div",{staticClass:"right"},[s("span",[t._v("@storiqa.2018 保留所有权利")]),t._v(" "),s("span",[t._v("收集到的信息有助于展示个性化广告，为客户提供服务，并接受市场的统计数据。继续浏览即表示同意使用cookie")])])])])}]};var o={name:"App",components:{vHeader:s("VU/8")(i,n,!1,function(t){s("sYRj")},"data-v-291ef309",null).exports,vFooter:s("VU/8")({data:function(){return{}}},r,!1,function(t){s("gOZI")},"data-v-369db09c",null).exports}},l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-header"),this._v(" "),a("div",{staticClass:"main-container"},[a("router-view")],1),this._v(" "),a("v-footer")],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(t){s("1rUV"),s("5Fml")},"data-v-694158fc",null).exports,v=s("/ocq"),u={props:{filterResult:{type:Object,default:function(){return{region:0,bussinessType:0,phrase:0}}}},data:function(){return{keyword:""}},mounted:function(){this.$route.query.keyword&&(this.keyword=this.$route.query.keyword)},watch:{filterResult:function(){this.searchProject()}},methods:{searchProject:function(){if("/projList"!==this.$route.path)return this.$router.push("/projList?keyword="+this.keyword);var t=this;this.$http.post("/api/getProjList",{keyword:this.keyword,region:this.filterResult.region,bussinessType:this.filterResult.bussinessType,phrase:this.filterResult.phrase,pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode?(console.log(s),t.$root.eventHub.$emit("updateProjList",s.data)):alert(s.errmsg)})}}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search"},[s("div",{staticClass:"input-box"},[s("img",{attrs:{src:"/static/img/search-2x.png",alt:""}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"代币名称、符号、项目名称"},domProps:{value:t.keyword},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.searchProject(a)},input:function(a){a.target.composing||(t.keyword=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.searchProject}},[s("span",[t._v("搜索机构")])])])},staticRenderFns:[]};var d=s("VU/8")(u,p,!1,function(t){s("8t6A")},"data-v-76b09c41",null).exports,_={data:function(){return{}},components:{Search:d}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search-panel"},[this._m(0),this._v(" "),a("search")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",[this._v("更多的机构， 遇见更多的财富")])])}]};var m=s("VU/8")(_,f,!1,function(t){s("jklm")},"data-v-1059550e",null).exports,h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-list"},[s("h3",{staticClass:"panel-title"},[t._v("推荐项目")]),t._v(" "),s("div",{staticClass:"info-container"},t._l(t.projList,function(a){return s("router-link",{key:a.id,staticClass:"info-area",attrs:{to:{path:"projDetail/"+a.id}}},[s("span",[t._v(t._s(a.tokenName))]),t._v(" "),s("span",[t._v(t._s(a.tokenPrice))])])}))])},staticRenderFns:[]};var g=s("VU/8")({data:function(){return{projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:1,perpage:3}).then(function(a){var s=a.data;0===s.errcode&&(t.projList=s.data.projList)})}},h,!1,function(t){s("0l54")},"data-v-d31fd09e",null).exports,C={props:{projData:Object},data:function(){return{}}},x={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-intro"},[s("div",{staticClass:"info-box"},[s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projData.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"content-box"},[s("div",{staticClass:"title-box"},[s("span",{staticClass:"name"},[t._v(t._s(t.projData.tokenSymbol))]),t._v(" "),s("span",{staticClass:"text"},[t._v("天使轮")])]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"text-box"},[s("span",{staticClass:"intro"},[t._v(t._s(t.projData.title))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tag-box"},[a("div",{staticClass:"icon-text"},[a("img",{staticClass:"icon",attrs:{src:"/static/img/tag-2x.png",alt:""}}),this._v(" "),a("span",{staticClass:"text"},[this._v("金融")])]),this._v(" "),a("div",{staticClass:"icon-text"},[a("img",{staticClass:"icon",attrs:{src:"/static/img/location-2x.png",alt:""}}),this._v(" "),a("span",{staticClass:"text"},[this._v("上海")])])])}]};var j={data:function(){return{projList:[]}},components:{ProjIntro:s("VU/8")(C,x,!1,function(t){s("lFP2")},"data-v-b6cbce7c",null).exports},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:2,perpage:6}).then(function(a){var s=a.data;0===s.errcode?t.projList=s.data.projList:alert(s.errmsg)})}},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-show-panel"},[a("h3",{staticClass:"panel-title"},[this._v("发现新公司")]),this._v(" "),a("div",{staticClass:"main-container"},this._l(this.projList,function(t){return a("router-link",{key:t.id,attrs:{to:{path:"projDetail/"+t.id}}},[a("proj-intro",{attrs:{"proj-data":t}})],1)}))])},staticRenderFns:[]};var w=s("VU/8")(j,b,!1,function(t){s("hh4z")},"data-v-aa44ed94",null).exports,k={props:{projData:Object},data:function(){return{}}},y={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-item-box"},[s("div",{staticClass:"column index1"},[s("div",{staticClass:"image-box"},[s("img",{attrs:{src:t.projData.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info-box"},[s("span",{staticClass:"title"},[t._v(t._s(t.projData.nameCn))]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.nameEn))])])]),t._v(" "),s("div",{staticClass:"column flex index2"},[s("span",{staticClass:"title"},[t._v("代币名称")]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.tokenSymbol))])]),t._v(" "),s("div",{staticClass:"column flex index3"},[s("span",{staticClass:"title"},[t._v("当前代币价格")]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.projData.tokenPrice))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"column flex index4"},[a("span",{staticClass:"title"},[this._v("融资状态")]),this._v(" "),a("span",{staticClass:"content"},[this._v("未透露")])])}]};var $={data:function(){return{dataCount:0,projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjList",{pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode&&(t.dataCount=s.data.dataCount,t.projList=s.data.projList)})},components:{ProjItemBox:s("VU/8")(k,y,!1,function(t){s("hTRD")},"data-v-2c8438a4",null).exports}},L={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-list-panel"},[a("h3",{staticClass:"panel-title"},[this._v("项目直通车")]),this._v(" "),a("div",{staticClass:"proj-item-wrapper"},this._l(this.projList,function(t){return a("router-link",{key:t.id,attrs:{to:{path:"projDetail/"+t.id}}},[a("proj-item-box",{attrs:{projData:t}})],1)}))])},staticRenderFns:[]};var D={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"news-panel"},[s("h3",{staticClass:"panel-title"},[t._v("lianbi说")]),t._v(" "),s("div",{staticClass:"list-container"},t._l(t.newsList,function(a,e){return s("a",{key:e,staticClass:"item-container",attrs:{href:a.url,target:"_blank"}},[s("span",{staticClass:"text"},[t._v(t._s(a.title))]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(a.time))])])}))])},staticRenderFns:[]};var I={data:function(){return{}},components:{SearchPanel:m,TopList:g,ProjShowPanel:w,ProjListPanel:s("VU/8")($,L,!1,function(t){s("oxsZ")},"data-v-232bea7d",null).exports,NewsPanel:s("VU/8")({data:function(){return{newsList:[{title:"BitCV - 区块链数字资产管理服务引擎",url:"https://www.bitcv.one/",time:"2018-01-31 17:48:32"},{title:"数字资产管理平台BitCVBitCV获千万级天使融资",url:"http://www.sohu.com/a/219786398_439726",time:"2018-01-30 10:41"},{title:"腾讯云加入Hyperledger超级账本项目，深度参与国际区块链生态建设",url:"http://www.xinhuanet.com/itown/2018-01/30/c_136935789.htm",time:"2018-01-30 10:59:49"},{title:"区块链新锐BitCV获千万级天使融资 或成数字资产管理平台开创者",url:"http://industry.caijing.com.cn/20180130/4401295.shtml",time:"2018-01-30 10:52:27"}]}}},D,!1,function(t){s("4wU6")},"data-v-09a28952",null).exports}},P={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"main-panel"},[a("search-panel"),this._v(" "),a("proj-show-panel"),this._v(" "),a("proj-list-panel")],1),this._v(" "),a("div",{staticClass:"aside-panel"},[a("top-list"),this._v(" "),a("news-panel")],1)])},staticRenderFns:[]};var U=s("VU/8")(I,P,!1,function(t){s("MgdY")},"data-v-926f8c0c",null).exports,R={data:function(){return{filterRuleList:[{type:1,text:"地区",curOption:0,optionList:[{text:"不限",value:0},{text:"国内",value:1},{text:"国外",value:2}]},{type:2,text:"行业",curOption:0,optionList:[{text:"不限",value:0},{text:"人工智能",value:1},{text:"房产服务",value:2},{text:"教育",value:3},{text:"金融",value:4},{text:"硬件",value:5},{text:"医疗健康",value:6},{text:"文化娱乐",value:7}]},{type:3,text:"阶段",curOption:0,optionList:[{text:"不限",value:0},{text:"初创期",value:1},{text:"成长发展期",value:2},{text:"上市公司",value:3},{text:"成熟期",value:4}]}]}},computed:{filterResult:function(){return{region:this.filterRuleList[0].curOption,bussinessType:this.filterRuleList[1].curOption,phrase:this.filterRuleList[2].curOption}}},components:{Search:d}},E={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-search-panel"},[s("search",{attrs:{"filter-result":t.filterResult}}),t._v(" "),s("div",{staticClass:"sort-container"},t._l(t.filterRuleList,function(a){return s("div",{key:a.type,staticClass:"sort-row"},[s("span",{staticClass:"title"},[t._v(t._s(a.text))]),t._v(" "),s("div",{staticClass:"tag-wrapper"},t._l(a.optionList,function(e){return s("span",{key:e.value,staticClass:"tag",class:{cur:a.curOption===e.value},on:{click:function(t){a.curOption=e.value}}},[t._v(t._s(e.text))])}))])})),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-box"},[a("img",{attrs:{src:"/static/img/Triangle@2x.png",alt:""}}),this._v(" "),a("span",[this._v("全部筛选项")])])}]};var F=s("VU/8")(R,E,!1,function(t){s("kGAP")},"data-v-2612ea5a",null).exports,S={props:{listData:Object},data:function(){return{projList:[]}},mounted:function(){var t=this;this.$http.post("/api/getProjTopList",{type:this.listData.type,count:10}).then(function(a){var s=a.data;0===s.errcode&&(t.projList=s.data)})}},V={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-list-panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.listData.title))]),t._v(" "),s("ul",{staticClass:"list-container"},t._l(t.projList,function(a,e){return s("li",{key:a.projId,staticClass:"list-item"},[s("router-link",{attrs:{to:{path:"projDetail/"+a.projId}}},[s("span",{staticClass:"index"},[t._v(t._s(e+1))]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(a.nameCn))]),t._v(" "),s("span",{staticClass:"count"},[t._v(t._s(a.count))])])],1)}))])},staticRenderFns:[]};var T={data:function(){return{projData:function(){return{}},focusUrl:"/static/img/focus@2x.png",unfocusUrl:"/static/img/unfocus@2x.png"}},created:function(){this.$root.eventHub.$on("updateProjList",this.updateProjList)},beforeDestroy:function(){this.$root.eventHub.$off("updateProjList",this.updateProjList)},mounted:function(){var t=this,a=this.$route.query.keyword;this.$http.post("/api/getProjList",{keyword:a,pageno:1,perpage:10}).then(function(a){var s=a.data;0===s.errcode?t.updateProjList(s.data):alert(s.errmsg)})},methods:{updateProjList:function(t){this.projData=t},projNav:function(t){this.$router.push("projDetail/"+t)},focus:function(t,a){if(!localStorage.getItem("userId"))return alert("请登录");var s=this;this.$http.post("/api/toggleFocus",{projId:t}).then(function(t){var e=t.data;0===e.errcode&&(s.projData.projList[a].focusStatus=e.data.status)})}}},O={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-table-panel"},[s("h3",{staticClass:"panel-title"},[t._v("共"+t._s(t.projData.dataCount)+"项")]),t._v(" "),s("table",{staticClass:"info-table"},[t._m(0),t._v(" "),t._l(t.projData.projList,function(a,e){return s("tr",{key:a.id,staticClass:"info-row",on:{click:function(s){t.projNav(a.id)}}},[s("td",[s("div",{staticClass:"logo-box"},[s("img",{attrs:{src:a.logoUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"info-box"},[s("span",{staticClass:"name"},[t._v(t._s(a.nameCn))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.nameEn))])])]),t._v(" "),s("td",[s("span",[t._v(t._s(a.tokenSymbol))])]),t._v(" "),s("td",[s("div",[s("span",[t._v(t._s(a.tokenPrice))])])]),t._v(" "),s("td",[s("img",{attrs:{src:1===a.focusStatus?t.focusUrl:t.unfocusUrl,alt:""},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.focus(a.id,e)}}})]),t._v(" "),t._m(1,!0)])})],2)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{staticClass:"info-header"},[s("th",[t._v("公司名称")]),t._v(" "),s("th",[t._v("代币名称")]),t._v(" "),s("th",[t._v("当前代币价格")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("融资状态")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("span",[this._v("已融资")])])}]};var N={data:function(){return{topList:[{title:"关注TOP10",type:"focus"},{title:"浏览TOP10",type:"view"}]}},components:{ProjSearchPanel:F,TopListPanel:s("VU/8")(S,V,!1,function(t){s("DROf")},"data-v-605e58c0",null).exports,ProjTablePanel:s("VU/8")(T,O,!1,function(t){s("8/jk")},"data-v-609c53cf",null).exports}},A={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"proj-list"},[a("div",{staticClass:"main-panel"},[a("proj-search-panel"),this._v(" "),a("proj-table-panel")],1),this._v(" "),a("div",{staticClass:"aside-panel"},this._l(this.topList,function(t){return a("top-list-panel",{key:t.type,attrs:{"list-data":t}})}))])},staticRenderFns:[]};var z=s("VU/8")(N,A,!1,function(t){s("nqjD")},"data-v-0b273e66",null).exports,q={props:{projDetail:Object},data:function(){return{}},methods:{toggleFocus:function(){if(!localStorage.getItem("userId"))return alert("请登录");var t=this;this.$http.post("/api/toggleFocus",{projId:this.projDetail.id}).then(function(a){var s=a.data;0===s.errcode&&(t.projDetail.focusStatus=s.data.status)})}}},Z={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-info"},[s("div",{staticClass:"info-box"},[s("img",{attrs:{src:t.projDetail.logoUrl,alt:""}}),t._v(" "),s("div",{staticClass:"text-box"},[s("div",{staticClass:"top-row"},[s("span",{staticClass:"name-cn"},[t._v(t._s(t.projDetail.nameCn))]),t._v(" "),s("span",{staticClass:"name-en"},[t._v("("+t._s(t.projDetail.nameEn)+")")])]),t._v(" "),s("div",{staticClass:"bottom-row"},[s("span",{staticClass:"text-title"},[t._v("代币名称：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenName))]),t._v(" "),s("span",{staticClass:"text-title"},[t._v("代币符号：")]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.tokenSymbol))])])])]),t._v(" "),s("div",{staticClass:"btn-box"},[s("a",{attrs:{href:t.projDetail.whitePaperUrl,target:"_blank"}},[s("div",{staticClass:"white-paper"},[t._v("项目白皮书")])]),t._v(" "),s("div",{class:{focused:t.projDetail.focusStatus},on:{click:function(a){t.toggleFocus()}}},[t._v("\n        "+t._s(t.projDetail.focusStatus?"取消收藏":"收藏项目")+"\n      ")])]),t._v(" "),s("div",{staticClass:"tag-box"},[s("span",{staticClass:"title"},[t._v("标签")]),t._v(" "),t._l(t.projDetail.tagList,function(a,e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(a))])})],2),t._v(" "),s("div",{staticClass:"social-box"},[s("span",{staticClass:"title"},[t._v("友情链接：")]),t._v(" "),t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,attrs:{href:t.webUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])})],2)])},staticRenderFns:[]};var B=s("VU/8")(q,Z,!1,function(t){s("MIU/")},"data-v-30af566a",null).exports,H={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"timeline"},[s("div",{staticClass:"line-wrapper"},t._l(t.eventList,function(a,e){return s("div",{key:e,staticClass:"event-item"},[s("div",{staticClass:"event-time-container"},[s("div",{staticClass:"event-time"},[t._v(t._s(a.eventTime))])]),t._v(" "),t._l(a.eventNode,function(a,e){return s("div",{key:e,staticClass:"event-node"},[s("div",{staticClass:"event-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"event-info",domProps:{innerHTML:t._s(a.info)}})])})],2)}))])},staticRenderFns:[]};var M=s("VU/8")({data:function(){return{eventList:[{eventTime:2015,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456<br/>23456<br/>23456"},{title:"4季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456"}]},{eventTime:2016,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456"}]},{eventTime:2017,eventNode:[{title:"第2-3季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456<br/>23456<br/>23456"},{title:"4季度",info:"12345<br/>23456<br/>34567<br/>45678<br/>23456"}]}]}}},H,!1,function(t){s("lv/l")},"data-v-7b7ed63b",null).exports,Y={props:{projDetail:Object},data:function(){return{activeIndex:1}},components:{ProjTimeLine:M}},W={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail-panel"},[s("div",{staticClass:"header"},[s("span",{class:{active:1===t.activeIndex},on:{click:function(a){t.activeIndex=1}}},[s("router-link",{attrs:{to:"#Info"}},[t._v("项目信息")])],1),t._v(" "),s("span",{class:{active:2===t.activeIndex},on:{click:function(a){t.activeIndex=2}}},[s("router-link",{attrs:{to:"#Team"}},[t._v("\n        团队信息\n      ")])],1),t._v(" "),s("span",{class:{active:3===t.activeIndex},on:{click:function(a){t.activeIndex=3}}},[s("router-link",{attrs:{to:"#Event"}},[t._v("\n        项目发展\n      ")])],1),t._v(" "),s("span",{class:{active:4===t.activeIndex},on:{click:function(a){t.activeIndex=4}}},[s("router-link",{attrs:{to:"#Partner"}},[t._v("\n        合作伙伴\n      ")])],1),t._v(" "),s("span",{class:{active:5===t.activeIndex},on:{click:function(a){t.activeIndex=5}}},[s("router-link",{attrs:{to:"#Media"}},[t._v("\n        媒体报道\n      ")])],1)]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"info-area",attrs:{id:"Info"}},[s("h3",{staticClass:"panel-title"},[t._v("项目简介")]),t._v(" "),s("div",[s("img",{attrs:{src:t.projDetail.bannerUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"abstract"},[s("span",[t._v(t._s(t.projDetail.abstract))])])]),t._v(" "),s("div",{staticClass:"team-area",attrs:{id:"Team"}},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"390px"}},t._l(t.projDetail.memberList,function(a,e){return s("el-carousel-item",{key:e,staticClass:"member"},[s("img",{staticClass:"avatar",attrs:{src:a.photoUrl,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"intro"},[t._v(t._s(a.intro))])])}))],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"event-area",attrs:{id:"Event"}},[s("h3",{staticClass:"panel-title"},[t._v("项目发展")]),t._v(" "),s("proj-time-line")],1),t._v(" "),s("div",{staticClass:"partner-area",attrs:{id:"Partner"}},[s("h3",{staticClass:"panel-title center-title"},[t._v("合作伙伴")]),t._v(" "),s("div",{staticClass:"logo-box"},t._l(t.projDetail.partnerList,function(t,a){return s("a",{key:a,staticClass:"img-container",attrs:{href:t.webUrl,target:"_blank"}},[s("img",{attrs:{src:t.logoUrl,alt:""}})])}))]),t._v(" "),s("div",{staticClass:"media-area",attrs:{id:"Media"}},[s("h3",{staticClass:"center-title panel-title"},[t._v("媒体报道")]),t._v(" "),s("div",{staticClass:"item-box"},t._l(t.projDetail.mediaList,function(a,e){return s("a",{key:e,staticClass:"item",attrs:{href:a.mediaUrl,target:"_blank"}},[s("div",{staticClass:"image-area"},[s("img",{staticClass:"log",attrs:{src:a.imageUrl,alt:""}})]),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(a.title))])])}))])])])},staticRenderFns:[]};var G={data:function(){return{projDetail:{nameCn:"",nameEn:"",logoUrl:"",tokenName:"",tokenSymbol:"",tagList:[],partnerList:[],whitePaperUrl:"",abstract:"",memberList:[],mediaList:[],bannerUrl:"",companyTel:"",companyAddr:"",companyEmail:"",viewTimes:0,focusNum:0,focusStatus:0}}},mounted:function(){var t=this.$route.params.id;console.log("projId:"+t);var a=this;this.$http.post("/api/getProjDetail",{projId:t}).then(function(t){var s=t.data;0===s.errcode?(a.projDetail=s.data,console.log(a.projDetail)):alert(s.errmsg)}),this.$http.post("/api/viewProject",{projId:t})},components:{ProjInfoPanel:B,ProjDetailPanel:s("VU/8")(Y,W,!1,function(t){s("qz3R")},"data-v-c74ff962",null).exports}},X={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"proj-detail"},[s("div",{staticClass:"main-panel"},[s("proj-info-panel",{attrs:{"proj-detail":t.projDetail}}),t._v(" "),s("proj-detail-panel",{attrs:{"proj-detail":t.projDetail}})],1),t._v(" "),s("div",{staticClass:"aside-panel"},[s("div",{staticClass:"record-panel"},[s("div",{staticClass:"num-box"},[s("div",{staticClass:"view"},[s("span",[t._v(t._s(t.projDetail.viewTimes))])]),t._v(" "),s("div",{staticClass:"focus"},[s("span",[t._v(t._s(t.projDetail.focusNum))])])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"contact-panel"},[s("h3",{staticClass:"center-title panel-title"},[t._v("公司联系信息")]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/tel@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyTel))])]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/email@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyEmail))])]),t._v(" "),s("div",{staticClass:"info-row"},[s("img",{attrs:{src:"/static/img/addr@2x.png",alt:""}}),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.projDetail.companyAddr))])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-box"},[a("div",{staticClass:"view"},[a("img",{attrs:{src:"/static/img/view@2x.png",alt:""}}),this._v(" "),a("span",[this._v("浏览")])]),this._v(" "),a("div",{staticClass:"focus"},[a("img",{attrs:{src:"/static/img/心@2x.png",alt:""}}),this._v(" "),a("span",[this._v("关注")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-panel"},[a("h3",{staticClass:"center-title panel-title"},[this._v("认领该公司")]),this._v(" "),a("img",{attrs:{src:"/static/img/头像扫描@2x.png",alt:""}})])}]};var J=s("VU/8")(G,X,!1,function(t){s("Dwkz")},"data-v-32ab7bbc",null).exports,K={data:function(){return{curIndex:0,email:"",passwd:""}},methods:{signin:function(){if(!new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(this.email))return alert("请填写正确邮箱地址");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{account:this.email,passwd:this.passwd}).then(function(a){var s=a.data;0===s.errcode?(localStorage.setItem("userId",s.data.userId),localStorage.setItem("account",s.data.account),localStorage.setItem("avatarUrl",s.data.avatarUrl),t.$router.push("/"),t.$router.go(0)):alert(s.errmsg)}).catch(function(t){console.log(t)})}}},Q={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"signin"},[s("h3",{staticClass:"panel-title center-title"},[t._v("登录")]),t._v(" "),s("div",{staticClass:"nav"},[s("span",{staticClass:"passwd",class:{active:0===t.curIndex},on:{click:function(a){t.curIndex=0}}},[t._v("密码登录")]),t._v(" "),s("span",{staticClass:"qrcode",class:{active:1===t.curIndex},on:{click:function(a){t.curIndex=1}}},[t._v("扫码登录")])]),t._v(" "),0===t.curIndex?[s("span",{staticClass:"prompt"},[t._v("lianbi会员可直接使用会员名登录")]),t._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"登录密码"},domProps:{value:t.passwd},on:{input:function(a){a.target.composing||(t.passwd=a.target.value)}}}),t._v(" "),s("button",{on:{click:function(a){a.preventDefault(),t.signin(a)}}},[t._v("登录")])]),t._v(" "),s("div",{staticClass:"btn-area"},[s("a",[t._v("忘记密码")]),t._v(" "),s("router-link",{attrs:{to:"signup"}},[s("a",[t._v("注册会员")])])],1)]:s("div",{staticClass:"qrcode-area"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[this._v("打开"),a("em",[this._v("微信")]),this._v("扫一扫")])}]};var tt=s("VU/8")(K,Q,!1,function(t){s("lXYB")},"data-v-8e04880e",null).exports,at={data:function(){return{email:"",passwd:"",confirm:""}},methods:{signup:function(){if(!new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(this.email))return alert("请填写正确邮箱地址");if(this.passwd.length<6)return alert("密码长度至少需要6位");if(this.passwd!==this.confirm)return alert("两次输入的密码不一致");var t=this;this.$http.post("/api/signup",{account:this.email,passwd:this.passwd}).then(function(a){var s=a.data;0===s.errcode?t.$router.push("/signin"):alert(s.errmsg)}).catch(function(t){console.log(t)})}}},st={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"signup"},[s("h3",{staticClass:"panel-title center-title"},[t._v("欢迎注册链币网")]),t._v(" "),s("span",{staticClass:"prompt"},[t._v("lianbi会员可直接使用会员名登录")]),t._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.passwd},on:{input:function(a){a.target.composing||(t.passwd=a.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm,expression:"confirm"}],attrs:{type:"password",placeholder:"再次输入密码"},domProps:{value:t.confirm},on:{input:function(a){a.target.composing||(t.confirm=a.target.value)}}}),t._v(" "),s("button",{on:{click:function(a){a.preventDefault(),t.signup(a)}}},[t._v("注册")])])])},staticRenderFns:[]};var et=s("VU/8")(at,st,!1,function(t){s("c+Wa")},"data-v-2697e8cc",null).exports;e.default.use(v.a);var it=new v.a({scrollBehavior:function(t,a,s){if(t.hash)return{selector:t.hash}},routes:[{path:"/",component:U},{path:"/projList",component:z},{path:"/projDetail/:id",component:J},{path:"/signin",component:tt},{path:"/signup",component:et}]}),nt=s("zL8q"),rt=s.n(nt),ot=(s("tvR6"),s("mtWM")),lt=s.n(ot);s("hKoQ").polyfill(),e.default.prototype.$http=lt.a,e.default.use(rt.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:it,components:{App:c},template:"<App/>",data:{eventHub:new e.default}})},"c+Wa":function(t,a){},gOZI:function(t,a){},hTRD:function(t,a){},hh4z:function(t,a){},jklm:function(t,a){},kGAP:function(t,a){},lFP2:function(t,a){},lXYB:function(t,a){},"lv/l":function(t,a){},nqjD:function(t,a){},oxsZ:function(t,a){},qz3R:function(t,a){},sYRj:function(t,a){},tvR6:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.6497a4b1047584c9ecb6.js.map