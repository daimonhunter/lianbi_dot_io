webpackJsonp([32],{o0jr:function(a,e){},vZjr:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{mobile:"",vcode:"",timerId:"",disableSms:!1,countDown:60,passwd:"",selected:"+65",nations:{"+65":"新加坡 (+65)","+1":"美国/加拿大 (+1)","+61":"澳大利亚 (+61)","+81":"日本 (+81)","+82":"韩国 (+82)","+86":"中国 (+86)","+852":"香港 (+852)","+856":"老挝 (+856)","+886":"台湾 (+886)","+93":"阿富汗 (+93)","+355":"阿尔巴尼亚 (+355)","+213":"阿尔及利亚 (+213)","+684":"美属萨摩亚 (+684)","+376":"安道尔 (+376)","+244":"安哥拉 (+244)","+1264":"安圭拉 (+1264)","+672":"南极洲 (+672)","+1268":"安提瓜和巴布达 (+1268)","+54":"阿根廷 (+54)","+374":"亚美尼亚 (+374)","+297":"阿鲁巴 (+297)","+43":"奥地利 (+43)","+994":"阿塞拜疆 (+994)","+973":"巴林 (+973)","+880":"孟加拉国 (+880)","+1246":"巴巴多斯 (+1246)","+375":"白俄罗斯 (+375)","+32":"比利时 (+32)","+501":"伯利兹 (+501)","+229":"贝宁 (+229)","+1441":"百慕大 (+1441)","+975":"不丹 (+975)","+591":"玻利维亚 (+591)","+387":"波黑 (+387)","+267":"博茨瓦纳 (+267)","+55":"巴西 (+55)","+1284":"英属维尔京群岛 (+1284)","+673":"文莱 (+673)","+359":"保加利亚 (+359)","+226":"布基纳法索 (+226)","+95":"缅甸 (+95)","+257":"布隆迪 (+257)","+855":"柬埔寨 (+855)","+237":"喀麦隆 (+237)","+238":"佛得角 (+238)","+1345":"开曼群岛(+1345)","+236":"中非 (+236)","+235":"乍得 (+235)","+56":"智利 (+56)","+57":"哥伦比亚 (+57)","+269":"科摩罗 (+269)","+243":"刚果（金） (+243)","+242":"刚果（布） (+242)","+682":"库克群岛 (+682)","+506":"哥斯达黎加 (+506)","+225":"科特迪瓦 (+225)","+385":"克罗地亚 (+385)","+53":"古巴 (+53)","+357":"塞浦路斯 (+357)","+420":"捷克 (+420)","+45":"丹麦 (+45)","+253":"吉布提 (+253)","+1767":"多米尼克 (+1767)","+1809":"多米尼加 (+1809)","+593":"厄瓜多尔 (+593)","+20":"埃及 (+20)","+503":"萨尔瓦多 (+503)","+240":"赤道几内亚(+240)","+291":"厄立特里亚 (+291)","+251":"埃塞俄比亚 (+251)","+500":"福克兰群岛（马尔维纳斯） (+500)","+298":"法罗群岛 (+298)","+679":"斐济 (+679)","+":"芬兰Finland (+358)","+33":"法国France (+33)","+594":"法属圭亚那 (+594)","+689":"法属波利尼西亚 (+689)","+241":"加蓬 (+241)","+995":"格鲁吉亚 (+995)","+49":"德国 (+49)","+233":"加纳 (+233)","+350":"直布罗陀 (+350)","+30":"希腊 (+30)","+299":"格陵兰 (+299)","+1473":"格林纳达 (+1473)","+509":"瓜德罗普 (+590)","+1671":"关岛 (+1671)","+502":"危地马拉 (+502)","+1481":"根西岛 (+1481)","+224":"几内亚 (+224)","+245":"几内亚比绍 (+245)","+592":"圭亚那 (+592)","+379":"梵蒂冈Holy (+379)","+504":"洪都拉斯 (+504)","+36":"匈牙利 (+36)","+354":"冰岛 (+354)","+91":"印度 (+91)","+62":"印度尼西亚 (+62)","+98":"伊朗 (+98)","+964":"伊拉克 (+964)","+353":"爱尔兰 (+353)","+972":"以色列 (+972)","+39":"意大利 (+39)","+1876":"牙买加 (+1876)","+962":"约旦 (+962)","+73":"哈萨克斯坦 (+73)","+254":"肯尼亚 (+254)","+686":"基里巴斯 (+686)","+850":"朝鲜 (+850)","+965":"科威特 (+965)","+996":"吉尔吉斯斯坦 (+996)","+371":"拉脱维亚 (+371)","+961":"黎巴嫩 (+961)","+266":"莱索托 (+266)","+231":"利比里亚 (+231)","+218":"利比亚 (+218)","+423":"列支敦士登 (+423)","+370":"立陶宛 (+370)","+352":"卢森堡 (+352)","+853":"澳门 (+853)","+389":"前南马其顿 (+389)","+261":"马达加斯加 (+261)","+265":"马拉维 (+265)","+60":"马来西亚 (+60)","+960":"马尔代夫 (+960)","+223":"马里 (+223)","+356":"马耳他 (+356)","+692":"马绍尔群岛 (+692)","+596":"马提尼克 (+596)","+222":"毛里塔尼亚 (+222)","+230":"毛里求斯 (+230)","+52":"墨西哥 (+52)","+691":"密克罗尼西亚 (+691)","+373":"摩尔多瓦 (+373)","+377":"摩纳哥 (+377)","+976":"蒙古 (+976)","+1664":"蒙特塞拉特 (+1664)","+212":"摩洛哥(+212)","+258":"莫桑比克 (+258)","+264":"纳米尼亚 (+264)","+674":"瑙鲁 (+674)","+977":"尼泊尔 (+977)","+31":"荷兰 (+31)","+599":"荷属安的列斯 (+599)","+687":"新喀里多尼亚 (+687)","+64":"新西兰 (+64)","+505":"尼加拉瓜 (+505)","+227":"尼日尔 (+227)","+234":"尼日利亚 (+234)","+683":"纽埃 (+683)","+6723":"诺福克岛 (+6723)","+47":"挪威 (+47)","+968":"阿曼 (+968)","+92":"巴基斯坦 (+92)","+680":"帕劳 (+680)","+507":"巴拿马 (+507)","+675":"巴布亚新几内亚 (+675)","+595":"巴拉圭 (+595)","+51":"秘鲁 (+51)","+63":"菲律宾 (+63)","+48":"波兰 (+48)","+351":"葡萄牙 (+351)","+974":"卡塔尔 (+974)","+262":"留尼汪 (+262)","+40":"罗马尼亚 (+40)","+7":"俄罗斯 (+7)","+250":"卢旺达 (+250)","+290":"圣赫勒拿 (+290)","+1869":"圣基茨和尼维斯 (+1869)","+1758":"圣卢西亚 (+1758)","+508":"圣皮埃尔和密克隆 (+508)","+1784":"圣文森特和格林纳丁斯 (+1784)","+685":"萨摩亚 (+685)","+378":"圣马力诺 (+378)","+239":"圣多美和普林西比(+239)","+966":"沙特阿拉伯 (+966)","+221":"塞内加尔 (+221)","+381":"塞尔维亚和黑山 (+381)","+248":"塞舌尔 (+248)","+232":"塞拉利 (+232)","+421":"斯洛伐克 (+421)","+386":"斯洛文尼亚 (+386)","+677":"所罗门群岛 (+677)","+252":"索马里 (+252)","+27":"南非 (+27)","+34":"西班牙 (+34)","+94":"斯里兰卡 (+94)","+247":"苏丹 (+249)","+597":"苏里南 (+597)","+268":"斯威士兰 (+268)","+46":"瑞典 (+46)","+41":"瑞士 (+41)","+963":"叙利亚 (+963)","+992":"塔吉克斯坦 (+992)","+255":"坦桑尼亚 (+255)","+66":"泰国 (+66)","+1242":"巴哈马 (+1242)","+220":"冈比亚 (+220)","+228":"多哥 (+228)","+690":"托克劳 (+690)","+676":"汤加 (+676)","+1868":"特立尼达和多巴哥 (+1868)","+216":"突尼斯 (+216)","+90":"土耳其 (+90)","+993":"土库曼斯坦 (+993)","+1649":"特克斯和凯科斯群岛 (+1649)","+688":"图瓦卢 (+688)","+256":"乌干达 (+256)","+380":"乌克兰 (+380)","+971":"阿拉伯联合酋长国 (+971)","+44":"英国 (+44)","+598":"乌拉圭 (+598)","+998":"乌兹别克斯坦 (+998)","+678":"瓦努阿图 (+678)","+58":"委内瑞拉 (+58)","+84":"越南 (+84)","+1340":"美属维尔京群岛（+1340）","+681":"瓦利斯和富图纳 (+681)","+967":"也门 (+967)","+260":"赞比亚 (+260)","+263":"津巴布韦 (+263)"},e_nations:{"+65":"Singapore (+65)","+1":"United States/Canada (+1)","+61":"Australia (+61)","+81":"Japan (+81)","+82":"Korea, South (+82)","+86":"China (+86)","+852":"Hong Kong (+852)","+856":"Laos (+856)","+886":"Taiwan (+886)","+93":"Afghanistan (+93)","+355":"Albania (+355)","+213":"Algeria (+213)","+684":"American Samoa (+684)","+376":"Andorra (+376)","+244":"Angola (+244)","+1264":"Anguilla (+1264)","+672":"Antarctica (+672)","+1268":"Antigua and Barbuda (+1268)","+54":"Argentina (+54)","+374":"Armenia (+374)","+297":"Aruba (+297)","+43":"Austria (+43)","+994":"Azerbaijan (+994)","+973":"Bahrain (+973)","+880":"Bangladesh (+880)","+1246":"Barbados (+1246)","+375":"Belarus (+375)","+32":"Belgium (+32)","+501":"Belize (+501)","+229":"Benin (+229)","+1441":"Bermuda (+1441)","+975":"Bhutan (+975)","+591":"Bolivia (+591)","+387":"Bosnia and Herzegovina (+387)","+267":"Botswana (+267)","+55":"Brazil (+55)","+1284":"British Virgin Islands (+1284)","+673":"Brunei Darussalam (+673)","+359":"Bulgaria (+359)","+226":"Burkina Faso (+226)","+95":"Burma (+95)","+257":"Burundi (+257)","+855":"Cambodia (+855)","+237":"Cameroon (+237)","+238":"Cape Verde (+238)","+1345":"Cayman Islands(+1345)","+236":"Central African Republic (+236)","+235":"Chad (+235)","+56":"Chile (+56)","+57":"Colombia (+57)","+269":"Comoros (+269)","+243":"Congo, Democratic Republic of the (+243)","+242":"Congo, Republic of the (+242)","+682":"Cook Islands (+682)","+506":"Costa Rica (+506)","+225":"Cote d'Ivoire (+225)","+385":"Croatia (+385)","+53":"Cuba (+53)","+357":"Cyprus (+357)","+420":"Czech Republic (+420)","+45":"Denmark (+45)","+253":"Djibouti (+253)","+1767":"Dominica (+1767)","+1809":"Dominican Republic (+1809)","+593":"Ecuador (+593)","+20":"Egypt (+20)","+503":"El Salvador (+503)","+240":"Equatorial Guinea(+240)","+291":"Eritrea (+291)","+251":"Ethiopia (+251)","+500":"Falkland Islands  (Islas Malvinas) (+500)","+298":"Faroe Islands (+298)","+679":"Fiji (+679)","+":"Finland (+358)","+33":"France (+33)","+594":"French Guiana (+594)","+689":"French Polynesia (+689)","+241":"Gabon (+241)","+995":"Georgia (+995)","+49":"Germany (+49)","+233":"Ghana (+233)","+350":"Gibraltar (+350)","+30":"Greece (+30)","+299":"Greenland (+299)","+1473":"Grenada (+1473)","+509":"Guadeloupe (+590)","+1671":"Guam (+1671)","+502":"Guatemala (+502)","+1481":"Guernsey (+1481)","+224":"Guinea (+224)","+245":"Guinea-Bissau (+245)","+592":"Guyana (+592)","+379":"Holy See (+379)","+504":"Honduras (+504)","+36":"Hungary (+36)","+354":"Iceland (+354)","+91":"India (+91)","+62":"Indonesia (+62)","+98":"Iran (+98)","+964":"Iraq (+964)","+353":"Ireland (+353)","+972":"Israel (+972)","+39":"Italy (+39)","+1876":"Jamaica (+1876)","+962":"Jordan (+962)","+73":"Kazakhstan (+73)","+254":"Kenya (+254)","+686":"Kiribati (+686)","+850":"Korea, North (+850)","+965":"Kuwait (+965)","+996":"Kyrgyzstan (+996)","+371":"Latvia (+371)","+961":"Lebanon (+961)","+266":"Lesotho (+266)","+231":"Liberia (+231)","+218":"Libya (+218)","+423":"Liechtenstein (+423)","+370":"Lithuania (+370)","+352":"Luxembourg (+352)","+853":"Macao (+853)","+389":"Macedonia, The Former Yugoslav Republic of (+389)","+261":"Madagascar (+261)","+265":"Malawi (+265)","+60":"Malaysia (+60)","+960":"Maldives (+960)","+223":"Mali (+223)","+356":"Malta (+356)","+692":"Marshall Islands (+692)","+596":"Martinique (+596)","+222":"Mauritania (+222)","+230":"Mauritius (+230)","+52":"Mexico (+52)","+691":"Micronesia, Federated States of (+691)","+373":"Moldova (+373)","+377":"Monaco (+377)","+976":"Mongolia (+976)","+1664":"Montserrat (+1664)","+212":"Morocco(+212)","+258":"Mozambique (+258)","+264":"Namibia (+264)","+674":"Nauru (+674)","+977":"Nepal (+977)","+31":"Netherlands (+31)","+599":"Netherlands Antilles (+599)","+687":"New Caledonia (+687)","+64":"New Zealand (+64)","+505":"Nicaragua (+505)","+227":"Niger (+227)","+234":"Nigeria (+234)","+683":"Niue (+683)","+6723":"Norfolk Island (+6723)","+47":"Norway (+47)","+968":"Oman (+968)","+92":"Pakistan (+92)","+680":"Palau (+680)","+507":"Panama (+507)","+675":"Papua New Guinea (+675)","+595":"Paraguay (+595)","+51":"Peru (+51)","+63":"Philippines (+63)","+48":"Poland (+48)","+351":"Portugal (+351)","+974":"Qatar (+974)","+262":"Reunion (+262)","+40":"Romani (+40)","+7":"Russia (+7)","+250":"Rwanda (+250)","+290":"Saint Helena (+290)","+1869":"Saint Kitts and Nevis (+1869)","+1758":"Saint Lucia (+1758)","+508":"Saint Pierre and Miquelon (+508)","+1784":"Saint Vincent and the Grenadines (+1784)","+685":"Samoa (+685)","+378":"San Marino (+378)","+239":"Sao Tome and Principe(+239)","+966":"Saudi Arabia (+966)","+221":"Senegal (+221)","+381":"Serbia and Montenegro (+381)","+248":"Seychelles (+248)","+232":"Sierra Leone (+232)","+421":"Slovakia (+421)","+386":"Slovenia (+386)","+677":"Solomon Islands (+677)","+252":"Somalia (+252)","+27":"South Africa (+27)","+34":"Spain (+34)","+94":"Sri Lanka (+94)","+247":"Sudan (+249)","+597":"Suriname (+597)","+268":"Swaziland (+268)","+46":"Sweden (+46)","+41":"Switzerland (+41)","+963":"Syria (+963)","+992":"Tajikistan (+992)","+255":"Tanzania (+255)","+66":"Thailand (+66)","+1242":"The Bahamas (+1242)","+220":"The Gambia (+220)","+228":"Togo (+228)","+690":"Tokelau (+690)","+676":"Tonga (+676)","+1868":"Trinidad and Tobago (+1868)","+216":"Tunisia (+216)","+90":"Turkey (+90)","+993":"Turkmenistan (+993)","+1649":"Turks and Caicos Islands (+1649)","+688":"Tuvalu (+688)","+256":"Uganda (+256)","+380":"Ukraine (+380)","+971":"United Arab Emirates (+971)","+44":"United Kingdom (+44)","+598":"Uruguay (+598)","+998":"Uzbekistan (+998)","+678":"Vanuatu (+678)","+58":"Venezuela (+58)","+84":"Vietnam (+84)","+1340":"Virgin Islands（+1340）","+681":"Wallis and Futuna (+681)","+967":"Yemen (+967)","+260":"Zambia (+260)","+263":"Zimbabwe (+263)"}}},methods:{getVcode:function(){var a=this;if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return"cn"===this.language?alert("请填写正确的手机号"):alert("Please fill in the correct phone number");this.disableSms=!0,this.timerId=setInterval(function(){a.countDown<=1?(clearInterval(a.timerId),a.disableSms=!1,a.timerId="",a.countDown=60):a.countDown--},1e3),this.$http.post("/api/getVcode",{mobile:this.mobile}).then(function(a){var e=a.data;0===e.errcode||alert(e.errmsg)}).catch(function(a){console.log(a)})},findPwd:function(){if(!this.selected)return"cn"===this.language?alert("请选择手机国家号"):alert("Please select the phone country number");if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return"cn"===this.language?alert("请填写正确的手机号"):alert("Please fill in the correct phone number");if(!this.vcode)return"cn"===this.language?alert("验证码不能为空"):alert("Verification code must be filled");if(this.passwd.length<6)return"cn"===this.language?alert("密码长度至少需要6位"):alert("Password length needs at least 6");var a=this.selected;"+"===a.substr(0,1)&&(a=a.substr(1));var e=this;this.$http.post("/api/resetPwd",{mobile:this.mobile,vcode:this.vcode,passwd:this.passwd,nation:a}).then(function(a){var t=a.data;0===t.errcode?e.$router.push("/signin"):alert(t.errmsg)}).catch(function(a){console.log(a)})}},computed:{language:function(){return this.$i18n.locale}}},i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container signup-container"},[t("div",{staticClass:"findpwd"},[t("h2",{staticClass:"panel-title center-title",staticStyle:{"text-align":"center","font-size":"23px","margin-bottom":"50px"}},[a._v(a._s(a.$t("label.reset_pwd")))]),a._v(" "),t("form",[[t("div",{staticClass:"row",staticStyle:{margin:"0"}},[t("div",{staticClass:"col-xs-4",staticStyle:{padding:"0"}},["cn"===a.language?t("el-select",{staticClass:"phone-suffix",attrs:{placeholder:"请选择"},model:{value:a.selected,callback:function(e){a.selected=e},expression:"selected"}},a._l(a.nations,function(e,n){return t("el-option",{key:n,attrs:{value:n}},[a._v(a._s(e))])})):t("el-select",{staticClass:"phone-suffix",attrs:{placeholder:"请选择"},model:{value:a.selected,callback:function(e){a.selected=e},expression:"selected"}},a._l(a.e_nations,function(e,n){return t("el-option",{key:n,attrs:{value:n}},[a._v(a._s(e))])}))],1),a._v(" "),t("div",{staticClass:"col-xs-8",staticStyle:{padding:"0"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mobile,expression:"mobile"}],staticStyle:{width:"100%"},attrs:{type:"text",placeholder:a.$t("label.login_mobile_ph")},domProps:{value:a.mobile},on:{input:function(e){e.target.composing||(a.mobile=e.target.value)}}})])])],a._v(" "),t("div",{staticClass:"smspanel"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.vcode,expression:"vcode"}],staticClass:"sms",staticStyle:{"border-right-width":"0"},attrs:{type:"text",placeholder:a.$t("label.sms")},domProps:{value:a.vcode},on:{input:function(e){e.target.composing||(a.vcode=e.target.value)}}}),a._v(" "),t("div",{staticClass:"floatboder"}),a._v(" "),t("el-button",{staticClass:"sms-btn",class:{disabled:a.disableSms},attrs:{disabled:a.disableSms,type:"primary"},on:{click:a.getVcode}},[a._v(a._s(a.$t("label.get_sms"))),t("span",{directives:[{name:"show",rawName:"v-show",value:a.timerId,expression:"timerId"}]},[a._v(" ("+a._s(a.countDown)+"s)")])])],1),a._v(" "),t("div",{staticClass:"flex-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:a.$t("label.new_pwd")},domProps:{value:a.passwd},on:{input:function(e){e.target.composing||(a.passwd=e.target.value)}}})]),a._v(" "),t("div",{staticClass:"flex-box"},[t("button",{on:{click:function(e){e.preventDefault(),a.findPwd(e)}}},[a._v(a._s(a.$t("label.reset_pwd")))])])],2)])])},staticRenderFns:[]};var s=t("VU/8")(n,i,!1,function(a){t("o0jr")},null,null);e.default=s.exports}});
//# sourceMappingURL=32.a431d954c4ac7f1d2c24.js.map