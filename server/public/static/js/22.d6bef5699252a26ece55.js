webpackJsonp([22],{"+bhH":function(e,t){},vZjr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{mobile:"",vcode:"",timerId:"",disableSms:!1,countDown:60,passwd:""}},methods:{getVcode:function(){var e=this;if(!new RegExp(/^0?(13|14|15|17|18)[0-9]{9}$/).test(this.mobile))return alert("请填写正确手机号");this.disableSms=!0,this.timerId=setInterval(function(){e.countDown<=1?(clearInterval(e.timerId),e.disableSms=!1,e.timerId="",e.countDown=60):e.countDown--},1e3),this.$http.post("/api/getVcode",{mobile:this.mobile}).then(function(e){var t=e.data;0===t.errcode||alert(t.errmsg)}).catch(function(e){console.log(e)})},findPwd:function(){if(!new RegExp(/^0?(13|14|15|16|17|18)[0-9]{9}$/).test(this.mobile))return alert("请填写正确手机号");if(!this.vcode)return alert("验证码不能为空");if(this.passwd.length<6)return alert("密码长度至少需要6位");var e=this;this.$http.post("/api/resetPwd",{mobile:this.mobile,vcode:this.vcode,passwd:this.passwd}).then(function(t){var s=t.data;0===s.errcode?e.$router.push("/signin"):alert(s.errmsg)}).catch(function(e){console.log(e)})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"findpwd"},[s("h3",{staticClass:"panel-title center-title"},[e._v("重置密码")]),e._v(" "),s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),s("div",{staticClass:"smspanel"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vcode,expression:"vcode"}],staticClass:"sms",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.vcode},on:{input:function(t){t.target.composing||(e.vcode=t.target.value)}}}),e._v(" "),s("el-button",{staticClass:"sms-btn",class:{disabled:e.disableSms},attrs:{disabled:e.disableSms,type:"primary"},on:{click:e.getVcode}},[e._v("发送验证码"),s("span",{directives:[{name:"show",rawName:"v-show",value:e.timerId,expression:"timerId"}]},[e._v(" ("+e._s(e.countDown)+"s)")])])],1),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"请输入新的密码"},domProps:{value:e.passwd},on:{input:function(t){t.target.composing||(e.passwd=t.target.value)}}}),e._v(" "),s("button",{on:{click:function(t){t.preventDefault(),e.findPwd(t)}}},[e._v("找回密码")])])])])},staticRenderFns:[]};var n=s("Z0/y")(i,a,!1,function(e){s("+bhH")},"data-v-5e3e59f6",null);t.default=n.exports}});
//# sourceMappingURL=22.d6bef5699252a26ece55.js.map