webpackJsonp([45],{"4jj0":function(e,t){},KhE7:function(e,t){},MvGc:function(e,t){t.install=function(e,t){e.prototype.convertFundStage=function(e){switch(e){case 0:return"保密";case 1:return"未融资";case 2:return"融资中";case 3:return"已融资"}},e.prototype.convertBuzType=function(e){switch(e){case 1:return"金融";case 2:return"数字货币";case 3:return"娱乐";case 4:return"供应链管理";case 5:return"法律服务";case 6:return"医疗";case 7:return"能源服务";case 8:return"公益";case 9:return"物联网";case 10:return"农业";case 11:return"社交";default:return"其它"}},e.prototype.getShortStr=function(e,t){return e.substr(0,t)+"..."+e.substr(-1*t)},e.prototype.convertOrderStatus=function(e){switch(e){case 0:return"待支付";case 1:return"已完成";case 2:return"已取消";case 3:return"已过期";default:return"未知状态"}},e.prototype.convertDate=function(e){var t=this.$i18n.locale,n=(new Date).getTime()-new Date(e).getTime(),r=n/864e5,o=n/36e5,a=n/6e4;if("cn"===t){if(o>24)var i=parseInt(r)+"天前";else if(o>=1)i=parseInt(o)+"个小时前";else if(a>=1)i=parseInt(a)+"分钟前";else i="刚刚";return i}if(o>24)i=parseInt(r)+" days ago";else if(o>=1)i=parseInt(o)+" hours ago";else if(a>=1)i=parseInt(a)+" minutes ago";else i=" just";return i},e.prototype.getInterest=function(e,t,n){return e*t*n/12},e.prototype.mediaClass=function(){return document.body.clientWidth<=600?"media-mobile":""},Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};n.d(r,"reLogin",function(){return g}),n.d(r,"getProList",function(){return w}),n.d(r,"getProDetail",function(){return j}),n.d(r,"getNewsList",function(){return C}),n.d(r,"getFilterParams",function(){return P}),n.d(r,"getEnFilterParams",function(){return k}),n.d(r,"getTop10",function(){return O}),n.d(r,"updateFocus",function(){return T}),n.d(r,"getCandyList",function(){return S}),n.d(r,"postCandyOrder",function(){return I}),n.d(r,"getOrderDetail",function(){return L}),n.d(r,"getOrderTxRecordList",function(){return D}),n.d(r,"confirmDepositTx",function(){return R}),n.d(r,"getUserOrderList",function(){return M}),n.d(r,"cancelDepositOrder",function(){return A});var o={};n.d(o,"updateUserInfo",function(){return N}),n.d(o,"cleanUserInfo",function(){return E});var a=n("fZjL"),i=n.n(a),s=n("//Fk"),c=n.n(s),u=n("7+uW"),l=n("Dd8w"),d=n.n(l),p=n("NYxO"),m={name:"App",components:{vHeader:n("hxP8").default,vFooter:n("bYoP").default},computed:d()({},Object(p.d)({path:function(e){return e.route.path},userInfo:function(e){return e.userInfo}}),{visible:function(){return"/share"!==this.path},hasToken:function(){return!!this.userInfo&&i()(this.userInfo).length>0}}),watch:{hasToken:function(e){e||this.$router.push("/signin")}},methods:d()({},Object(p.c)(["cleanUserInfo"]),{signout:function(){this.cleanUserInfo()}})},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.visible?n("v-header",{attrs:{"has-token":e.hasToken},on:{signout:e.signout}}):e._e(),e._v(" "),n("div",{staticClass:"main-container"},[n("router-view")],1),e._v(" "),e.visible?n("v-footer"):e._e()],1)},staticRenderFns:[]};var _=n("VU/8")(m,h,!1,function(e){n("4jj0"),n("qqIn")},"data-v-44889f04",null).exports,f=n("mtWM"),v=n.n(f),g=function(e){(0,e.commit)("cleanUserInfo")},y=function(e){var t=e.errcode,n=e.data,r=e.errmsg,o=void 0===r?"":r;switch(t){case 0:return n;case 302:return g(),c.a.reject(o);default:return alert(o),c.a.reject(o)}},b=function(e,t){return v.a.post(e,t).then(function(e){return y(e.data)})},w=function(e,t){return b("/api/getProjList",t)},j=function(e,t){return b("/api/getProjDetail",t)},C=function(e,t){return b("/api/getNewsList",t)},P=function(e,t){return b("/api/getProjTagList",t)},k=function(e,t){return b("/api/getEnProjTagList",t)},O=function(e,t){return b("/api/getProjTopList",t)},T=function(e,t){return b("/api/toggleFocus",t)},S=function(e,t){return b("/api/getDepositBoxList",t)},I=function(e,t){return b("/api/addDepositOrder",t)},L=function(e,t){return b("/api/getOrderDetail",t)},D=function(e,t){return b("/api/getOrderTxRecordList",t)},R=function(e,t){return b("/api/confirmDepositTx",t)},M=function(e,t){return b("/api/getUserOrderList",t)},A=function(e,t){return b("/api/cancelDepositOrder",t)},F=n("mvHQ"),x=n.n(F),N=function(e,t){var n=localStorage.getItem("userInfo");n&&(n=JSON.parse(n)),t&&(n=t,localStorage.setItem("userInfo",x()(n))),e.userInfo=n},E=function(e){localStorage.removeItem("userInfo"),e.userInfo=null};u.default.use(p.a);var q=new p.a.Store({actions:r,mutations:o,state:{userInfo:null}}),U=n("/ocq");function $(e){return function(){return n("mUJ2")("./"+e+".vue").catch(function(e){return location.reload()})}}function B(e){return function(){return n("Opzk")("./"+e+".vue").catch(function(e){return location.reload()})}}var V=[{path:"/",component:B("home/home")},{path:"/discover",component:B("discover/discover")},{path:"/discover/detail/:id",component:B("discover/detail")},{path:"/wallet",component:B("user/wallet"),meta:{requiresAuth:!0}},{path:"/wallet/withdraw/:id/:protocol",component:B("user/withdraw"),meta:{requiresAuth:!0}},{path:"/wallet/records",component:B("user/records"),meta:{requiresAuth:!0}},{path:"/candyRoom",redirect:"/candyRoom/candyList",component:$("candyRoom/CandyRoom"),children:[{path:"candyList",component:B("candy/list")},{path:"candyBuy",component:B("candy/buying"),meta:{requiresAuth:!0}},{path:"candyOrder",component:B("candy/order"),meta:{requiresAuth:!0}},{path:"candyDetails",component:B("candy/details"),meta:{requiresAuth:!0}},{path:"candyMyData",component:B("candy/my-data"),meta:{requiresAuth:!0}}]},{path:"/apply",component:$("apply/Apply"),meta:{requiresAuth:!0}},{path:"/signup",component:$("sign/Signup")},{path:"/signin",component:$("sign/Signin")},{path:"/share",component:$("share/Share")},{path:"/protocol",component:$("sign/Protocol")},{path:"/findpwd",component:$("sign/FindPwd")},{path:"/resetpwd/:mobile",component:$("sign/ResetPwd")},{path:"*",redirect:"/"}];u.default.use(U.a);var Y=new U.a({routes:V,mode:"history",linkActiveClass:"active",scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}}}),z=n("9JMe"),H=(n("UVIz"),n("Y81h")),K=n.n(H),W=n("zL8q"),G=n.n(W),J=(n("v2ns"),n("tvR6"),n("MvGc")),Z=n.n(J),Q=n("TXmL");u.default.use(Q.a);var X=new Q.a({locale:"cn",messages:{cn:{label:{lang:"中文",home:"主页",discover:"发现",ybb:"余币宝",login:"登录",registered:"注册",section_title:"更多的机构，遇见更多的财富",search_bar:"通证名称、符号、项目名称",search_btn:"搜索",create_project:"立即创建项目",re_project:"推荐项目",find_project:"发现新项目",pro_train:"项目直通车",pro_train_name:"公司名称",pro_train_type:"通证符号",pro_train_industry:"所属行业",pro_train_status:"融资状态",focus:"关注",view:"浏览",share:"分享",project_sum:"共",project_num:"项",detail_tag:"标签",project_shortname:"项目简称",project_s:"项目符号",project_home:"项目主页",white_paper:"白皮书",social:"社区",project_info:"项目信息",project_dy:"项目动态",project_intr:"项目简介",team_mem:"团队成员",project_advisor:"项目顾问",project_dev:"项目发展",brother:"合作伙伴",media:"媒体报道",anno:"官方公告",comm_anno:"社区发布",view_full:"查看原文",claim_co:"认领该公司",co_address:"公司联系信息",ybb_plan:"余币宝计划",lock:"锁仓期限",candy_project:"项目",return:"回报",million:"每万枚",start_amount:"起始额度",leave_amount:"剩余额度",buy:"立即抢购",coin_amount:"枚",month:"月",login_mobile_ph:"请输入手机号",login_pwd_ph:"请输入密码",reset_pwd:"重置密码",hurry_login:"立即登录",festival:"春节期间参加活动的用户请先",welcome:"欢迎注册",sms:"短信验证码",get_sms:"获取短信验证码",pwd:"密码",account:"已有账号",new_pwd:"请输入新的密码",logout:"注销登录",assets:"我的资产",order:"余币宝订单",sum_money:"总资产",view_r:"查看交易记录",coin_type:"币种",price:"参考价",coin_num:"数量",coin_status:"状态",operation:"操作",later_t:"稍后提取",hurry_t:"立即提取",records:"交易记录",hash:"交易哈希",r_time:"交易时间",my_list:"我的余币宝清单",order_status:"订单状态",order_time:"下单时间",in_amount:"充值数量",sum_return:"总回报",all:"全部",complete:"已完成",to_charge:"待充值",no:"暂无交易",cancel:"已取消",order_finished:"订单完成",confirm_o:"确认订单",cancel_order:"取消订单",confirm:"确认",delete:"删除",buy_q:"购买数量",order_money:"订单金额",buy_c:"抢购额度",recharge_a:"您要充值的数量",p_in:"请输入",bigger:"下单数量必须大于起始额度",order_now:"立即下单",team_info:"团队信息",order_detail:"订单详情",re_address:"接收地址",your_address:"您的地址",sys_notice:"以下为系统自动检测到的交易记录，请勾选此笔订单相关的交易记录进行确认！",refresh_data:"刷新数据",co_co:"确认完成",start_co:"开始确认",my_goal:"我已向目标接收地址充值",set_address:"地址设置",buy_detail:"抢购详情",need:"需充值",pla_notice:"此地址为项目方与平台共同认可的资金存管地址，回报已入账，请放心充值",spending:"您的支出地址",submit_ord:"提交订单",getback:"个月后获得回报",input_address:"请输入支出地址",apply:"项目申请",apply_notice:"已经展示的项目请在项目详情页面直接认领！",tong_name:"通证名称",p_ename:"项目英文名",p_cname:"项目中文名",f_stage:"融资阶段",f_se:"保密",f_no:"未融资",f_ing:"融资中",f_f:"已融资",p_n:"项目名称",coin_sys:"代币符号",p_intr:"项目介绍",p_getmore:"获取更多项目详细信息",tips:"提示：本次矿工费由币威平台承担",shoukuan:"收款地址",wait:"请等待",sub:"提交",can_btn:"取消",no_data:"暂无数据",shouqi:"收起",jiaoyi:"交易数量",no_t:"暂无交易记录，请点击",retry:"重试",confirm_recharge:"请确认充值数量",coin_address:"请输入相应币种的钱包地址"}},en:{label:{lang:"English",home:"Home",discover:"Explore",ybb:"EncryptoMore",login:"Login",registered:"Register",section_title:"More Token, More Fortune",search_bar:"Certificate Address、Symbol、Projects name",search_btn:"Search",create_project:"Create a project now",re_project:"Recommended projects",find_project:"New",pro_train:"Projects",pro_train_name:"Name",pro_train_type:"Ticker",pro_train_industry:"Sector",pro_train_status:"Progress",focus:"Follow",view:"Browse",share:"Share",project_sum:"Altogether",project_num:"Term",detail_tag:"Tags",project_shortname:"Project Ticker",project_s:"Project symbol",project_home:"Project WebSite",white_paper:"White Paper",social:"Community",project_info:"Project Information",project_dy:"Project Dynamics",project_intr:"Project Introduction",team_mem:"Team",project_advisor:"Project Consultant",project_dev:"Project development",brother:"Cooperative partner",media:"Media Coverage",anno:"Official Announcement",comm_anno:"Community Release",view_full:"View Original",claim_co:"Claim The Company",co_address:"Company Information",ybb_plan:"EncryptoMor plan",lock:"Locking period",candy_project:"Project",return:"Return",million:"Every million",start_amount:"Starting amount",leave_amount:"Remaining Amount",buy:"Buy",coin_amount:"Gold",month:"Month",login_mobile_ph:"Cell Phone Number",login_pwd_ph:"Password",reset_pwd:"Forget Password",hurry_login:"Login immediately",festival:"The users who participated in the Spring Festival",welcome:"Welcome to",sms:"SMS Code",get_sms:"Get SMS Code",pwd:"Password",account:"Already Registered",new_pwd:"New Password",logout:"Logout",assets:"My Assets",order:"CryptoMore Order",sum_money:"Total assets",view_r:"View transaction history",coin_type:"Currency",price:"Market Price",coin_num:"Amount",coin_status:"Status",operation:"Operation",later_t:"Extract Later",hurry_t:"Withdraw",records:"Transaction Record",hash:"Trading Hash",r_time:"Transaction Time",my_list:"My CryptoMore Orders",order_status:"Order Status",order_time:"Order time",in_amount:"Quantity",sum_return:"Total Return",all:"All",complete:"Completed",to_charge:"In Progress",no:"No Transaction",cancel:"Cancelled",order_finished:"Order Completed",confirm_o:"Confirm Order",cancel_order:"Cancel order",confirm:"Confirm",delete:"Delete",buy_q:"Purchase Quantity",order_money:"Order Amount",buy_c:"Buying Credit",recharge_a:"The amount you want to recharge",p_in:"Please Enter",bigger:"The order quantity must be greater than the start amount",order_now:"Order NFow",team_info:"Team Information",order_detail:"Order Detail",re_address:"Receiving Address",your_address:"Your Address",sys_notice:"The following is the system automatically detects the transaction records, please check the transaction records related to this order to confirm!",refresh_data:"Refresh the data",co_co:"Confirm the completion",start_co:"Start to confirm",my_goal:"I have recharged the destination address",set_address:"Address setting",buy_detail:"Locking Amount Detail",need:"Need to recharge",pla_notice:"This address is jointly approved by the project owner and the platform of the capital depository address, the return has been recorded, please rest assured recharge",spending:"Your Sending Address",submit_ord:"Submit Order",getback:"Get Rewarded",input_address:"Your Sending Address",apply:"Apply for Project Listing",apply_notice:"Please Fill the Details of your Project",tong_name:"Certificate Address",p_ename:"Project Name in English",p_cname:"Project Name in Chinese",f_stage:"Financing stage",f_se:"Confidentiality",f_no:"Unfunded",f_ing:"Financing",f_f:"Financed",p_n:"Project Name",coin_sys:"Token symbol",p_intr:"Project Introduction",p_getmore:"Get More Project Details",tips:"Tip: the transaction fee is on us.",shoukuan:"Receiving Address",wait:"Please Wait",sub:"Submit",can_btn:"Cancel",no_data:"No data",shouqi:"Collapse",jiaoyi:"Number of transactions",no_t:"No transaction history, please click",retry:"Retry",confirm_recharge:"Please confirm the amount of recharge",coin_address:"Please enter the wallet address for the currency"}}}});u.default.use(Z.a),n("hKoQ").polyfill(),u.default.use(G.a),u.default.prototype.$http=v.a,u.default.prototype.nprogress=K.a,window.NProgress=K.a,u.default.config.productionTip=!1,Object(z.sync)(q,Y),v.a.interceptors.response.use(function(e){return 302===e.data.errcode?(q.commit("cleanUserInfo"),Y.push("/"),c.a.reject(e)):e},function(e){return 302===e.response.status&&(q.commit("cleanUserInfo"),Y.push("/")),c.a.reject(e)});var ee=function(){return q.commit("updateUserInfo")};Y.beforeEach(function(e,t,n){(K.a.start(),e.matched.some(function(e){return e.meta&&e.meta.requiresAuth}))&&(function(){ee();var e=q.state.userInfo;return e&&i()(e).length>0}()||n("/signin"));n()}),Y.afterEach(function(e,t){K.a.done()}),ee(),new u.default({el:"#app",store:q,router:Y,i18n:X,components:{App:_},template:"<App/>",data:{eventHub:new u.default}})},Opzk:function(e,t,n){var r={"./candy/buying.vue":["IiwL",14],"./candy/details.vue":["+OK3",5],"./candy/list.vue":["c+ZJ",0,21],"./candy/my-data.vue":["iuXs",0,36],"./candy/order.vue":["Jdg4",22],"./discover/detail.vue":["PwbF",0,6],"./discover/discover.vue":["POBk",0,8],"./home/home.vue":["zKIK",0,2],"./sign/signin.vue":["ZoOl",43],"./sign/signup.vue":["2ufm",42],"./user/records.vue":["sFhK",0,10],"./user/wallet.vue":["I37D",0,24],"./user/withdraw.vue":["z4wH",20]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id="Opzk",e.exports=o},UVIz:function(e,t){},bYoP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("div",{staticClass:"content"},[this._m(0),this._v(" "),t("div",{staticClass:"icon-box"},this._l(this.socialList,function(e,n){return t("a",{key:n,attrs:{href:e.url,target:"_blank"}},[t("i",{staticClass:"icon-bcv",class:e.fontClass})])})),this._v(" "),this._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("img",{attrs:{src:"/static/img/logo.png",alt:"BitCV"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bottom"},[t("span",[this._v("Copyright © 2018 BitCV. All Rights Reserved")])])}]};var o=n("VU/8")({data:function(){return{socialList:[{url:"https://weibo.com/bitcv",fontClass:"icon-weibo"},{url:"https://www.facebook.com/groups/1301707606641533/",fontClass:"icon-facebook"},{url:"https://github.com/bitcv",fontClass:"icon-github"},{url:"https://t.me/bcvtoken",fontClass:"icon-telegram"},{url:"https://twitter.com/BCVofficial",fontClass:"icon-twitter"}]}}},r,!1,function(e){n("KhE7")},"data-v-6fdd9d22",null);t.default=o.exports},hxP8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),a=n("NYxO"),i={bind:function(e,t){var n=t.value;e.handler=function(t){e&&!e.contains(t.target)&&n(t)},document.addEventListener("click",e.handler,!0)},unbind:function(e){document.removeEventListener("click",e.handler,!0),e.handler=null}},s={props:{hasToken:Boolean},data:function(){return{showSide:!1,showDropdown:!1}},computed:o()({},Object(a.d)({userInfo:function(e){return e.userInfo}}),{avatar:function(){return this.userInfo&&this.userInfo.avatarUrl?this.userInfo.avatarUrl:"/static/img/avatar.png"},mobile:function(){if(this.userInfo){var e=this.userInfo.mobile,t=(""+e).split("");return t.splice(2,7,"**"),t.join("")}return""}}),directives:{"click-outside":i},watch:{showSide:"onToggleMenu",showDropdown:"onToggleMenu"},methods:{toggleLang:function(){this.$i18n.locale="en"===this.$i18n.locale?"cn":"en"},navbarToggle:function(){this.showDropdown=!1,this.showSide=!this.showSide},onMouseenter:function(){this.showSide=!1,this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.showDropdown=!0},onMouseleave:function(){var e=this;this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.__timer=setTimeout(function(){e.showDropdown=!1},150)},onClickOutside:function(){this.showSide&&(this.showSide=!1)},onToggleMenu:function(){this.showSide||this.showDropdown?document.body.style.overflow="hidden":document.body.style.overflow=""},dimissMenu:function(){this.showSide&&(this.showSide=!1),this.showDropdown&&(this.showDropdown=!1)}},mounted:function(){this.showSide=!1,this.showDropdown=!1}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-inverse navbar-static-top"},[n("div",{staticClass:"container"},[n("a",{staticStyle:{position:"absolute",right:"280px",top:"15px",color:"#FFF"},attrs:{href:"javascrpt:''"},on:{click:e.toggleLang}},[e._v(e._s(e.$t("label.lang")))]),e._v(" "),n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",class:{collapsed:!e.showSide},attrs:{type:"button"},on:{click:function(t){t.stopPropagation(),e.navbarToggle(t)}}},[n("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),e._v(" "),n("span",{staticClass:"icon-bar"}),e._v(" "),n("span",{staticClass:"icon-bar"}),e._v(" "),n("span",{staticClass:"icon-bar"}),e._v(" "),n("span",{staticClass:"icon-bar"})]),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"hidden-xs hidden-sm",attrs:{src:"/static/img/brand.png",alt:"BitCV",height:"30"}}),e._v(" "),n("img",{staticClass:"hidden-md hidden-lg",attrs:{src:"/static/img/brand-mobile.png",alt:"BitCV",height:"30"}})])],1),e._v(" "),e.hasToken?e._e():n("div",{staticClass:"navbar-right hidden-sm hidden-xs",staticStyle:{"margin-right":"0"}},[n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signup"}},[e._v(e._s(e.$t("label.registered")))]),e._v(" "),n("span",[e._v("  ")]),e._v(" "),n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signin"}},[e._v(e._s(e.$t("label.login")))])],1),e._v(" "),n("div",{staticClass:"dropdown navbar-right",class:{open:e.showDropdown},staticStyle:{"margin-right":"0"},on:{mouseenter:e.onMouseenter,mouseleave:e.onMouseleave}},[n("a",{staticClass:"dropdown-toggle",class:{"hidden-md":!e.hasToken,"hidden-lg":!e.hasToken},attrs:{href:"javascript:;"}},[n("img",{staticClass:"img-circle",attrs:{src:e.avatar}}),e._v(" "),n("span",[e._v(e._s(e.mobile))])]),e._v(" "),e.hasToken?n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/wallet"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[e._v(e._s(e.$t("label.assets")))])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/candyRoom/candyMyData"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[e._v(e._s(e.$t("label.order")))])],1),e._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.$emit("signout")}}},[e._v(e._s(e.$t("label.logout")))])])]):n("ul",{staticClass:"dropdown-menu hidden-md hidden-lg"},[n("li",[n("router-link",{attrs:{to:"/signin"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[e._v(e._s(e.$t("label.login")))])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/signup"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[e._v(e._s(e.$t("label.registered")))])],1)])]),e._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"collapse navbar-collapse",class:{in:e.showSide}},[n("ul",{staticClass:"nav navbar-nav"},[n("router-link",{attrs:{tag:"li","active-class":"active",exact:"",to:"/"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("label.home")))])]),e._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/discover"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("label.discover")))])]),e._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/candyRoom"},nativeOn:{click:function(t){e.dimissMenu(t)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("label.ybb")))])])],1)])])])},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(e){n("lvpj")},null,null);t.default=u.exports},lvpj:function(e,t){},mUJ2:function(e,t,n){var r={"./apply/Apply.vue":["0OVd",39],"./candyRoom/CandyBuy.vue":["tHq/",31],"./candyRoom/CandyList.vue":["ynLq",27],"./candyRoom/CandyOrder.vue":["h6Zs",17],"./candyRoom/CandyOrderConfirm.vue":["3ExQ",0,33],"./candyRoom/CandyOrderDetail.vue":["eB6N",0,11],"./candyRoom/CandyRoom.vue":["Z8Fx",19],"./candyRoom/MyCandyOrder.vue":["LItE",23],"./footer/Footer.vue":["bYoP"],"./header/header.vue":["hxP8"],"./home/Home.vue":["h6qm",0,1],"./home/NewsPanel.vue":["NGpT",35],"./home/ProjIntro.vue":["0VlW",0],"./home/ProjListPanel.vue":["U5/d",12],"./home/ProjShowPanel.vue":["SYRS",0,34],"./home/Search.vue":["ZsFn",0],"./home/SearchPanel.vue":["c8fR",0,38],"./home/TopList.vue":["n5G4",41],"./navbar/navbar.vue":["dFzb",32],"./news/NewsDetail.vue":["y0Ls",0,15],"./news/NewsList.vue":["mcZf",0,7],"./news/NewsTablePanel.vue":["fOQt",37],"./pagination/pagination.vue":["+ryu",0],"./projDetail/ProjDetail.vue":["prwi",0,4],"./projDetail/ProjDetailPanel.vue":["Yxvu",0,13],"./projDetail/ProjDynamicPanel.vue":["zdKg",0,16],"./projDetail/ProjInfoPanel.vue":["Y8Ir",0,28],"./projDetail/ProjTimeLine.vue":["qrst",0],"./projList/PagePanel.vue":["oByv",0],"./projList/ProjList.vue":["c+ar",0,3],"./projList/ProjSearchPanel.vue":["+4D8",0,30],"./projList/ProjTablePanel.vue":["eslO",0,18],"./projList/TopListPanel.vue":["YCFY",0],"./search-bar/search-bar.vue":["b17X",0],"./share/Share.vue":["mSzT",0],"./sign/FindPwd.vue":["vZjr",40],"./sign/Protocol.vue":["0wBR",9],"./sign/ResetPwd.vue":["ynxK",26],"./sign/Signin.vue":["nsCj",29],"./sign/Signup.vue":["E+Fy",25]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(r)},o.id="mUJ2",e.exports=o},qqIn:function(e,t){},tvR6:function(e,t){},v2ns:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.40c7b35fa0ce5c9d67ee.js.map