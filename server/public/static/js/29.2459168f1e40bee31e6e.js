webpackJsonp([29],{"+ND8":function(t,e){},nsCj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("NYxO"),r={data:function(){return{curIndex:0,mobile:"",passwd:""}},methods:i()({},Object(n.c)(["updateUserInfo"]),{signin:function(){if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return alert("请填写正确的手机号");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{mobile:this.mobile,passwd:this.passwd}).then(function(e){var s=e.data;0===s.errcode?(t.updateUserInfo(s.data),t.$router.push("/")):alert(s.errmsg)}).catch(function(t){console.log(t)})}})},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"signin"},[s("h2",{staticClass:"panel-title center-title",staticStyle:{"text-align":"center","font-size":"23px","margin-bottom":"50px"}},[t._v(t._s(t.$t("label.login")))]),t._v(" "),0===t.curIndex?[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:t.$t("label.login_mobile_ph")},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:t.$t("label.login_pwd_ph")},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),s("h5",{staticStyle:{"margin-top":"10px"}},[s("span",{staticStyle:{color:"#ddd"}},[t._v(t._s(t.$t("label.festival"))),s("router-link",{attrs:{to:"findpwd"}},[s("a",{staticStyle:{cursor:"pointer"}},[s("span",{staticStyle:{color:"#ff8b13"}},[t._v(" "+t._s(t.$t("label.reset_pwd")))])])])],1)]),t._v(" "),s("button",{on:{click:function(e){e.preventDefault(),t.signin(e)}}},[t._v(t._s(t.$t("label.hurry_login")))])]),t._v(" "),s("div",{staticClass:"btn-area"},[s("router-link",{attrs:{to:"findPwd"}},[s("a",{staticStyle:{float:"left"}},[t._v(t._s(t.$t("label.reset_pwd"))+"?")])]),t._v(" "),s("router-link",{attrs:{to:"signup"}},[s("a",{staticStyle:{float:"right"}},[t._v(t._s(t.$t("label.registered")))])])],1)]:s("div",{staticClass:"qrcode-area"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("打开"),e("em",[this._v("微信")]),this._v("扫一扫")])}]};var o=s("VU/8")(r,l,!1,function(t){s("+ND8")},"data-v-3b93be50",null);e.default=o.exports}});
//# sourceMappingURL=29.2459168f1e40bee31e6e.js.map