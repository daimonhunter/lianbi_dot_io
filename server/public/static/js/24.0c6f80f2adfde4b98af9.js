webpackJsonp([24],{"3QPn":function(e,t){},ynxK:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{passwd:"",repasswd:""}},methods:{resetPwd:function(){if(this.passwd.length<6)return alert("密码长度至少需要6位");if(this.passwd!==this.repasswd)return alert("两次输入的密码不一致");var e=this.$route.params.mobile;this.$http.post("/api/resetPwd",{mobile:e,passwd:this.passwd,repasswd:this.repasswd}).then(function(e){var t=e.data;0===t.errcode||alert(t.errmsg)}).catch(function(e){console.log(e)})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"resetpwd"},[s("h3",{staticClass:"panel-title center-title"},[e._v("重设密码")]),e._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"请输入新的密码"},domProps:{value:e.passwd},on:{input:function(t){t.target.composing||(e.passwd=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.repasswd,expression:"repasswd"}],attrs:{type:"password",placeholder:"请再次输入新的密码"},domProps:{value:e.repasswd},on:{input:function(t){t.target.composing||(e.repasswd=t.target.value)}}}),e._v(" "),s("button",{on:{click:function(t){t.preventDefault(),e.resetPwd(t)}}},[e._v("确定")])])])])},staticRenderFns:[]};var n=s("Z0/y")(a,r,!1,function(e){s("3QPn")},"data-v-46d57396",null);t.default=n.exports}});
//# sourceMappingURL=24.0c6f80f2adfde4b98af9.js.map