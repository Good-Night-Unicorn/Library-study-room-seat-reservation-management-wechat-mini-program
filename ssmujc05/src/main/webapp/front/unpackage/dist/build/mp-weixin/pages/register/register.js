(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"3c10":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var a=function(){var e=this,n=e.$createElement;e._self._c},r=[]},"3cda":function(e,n,t){},6835:function(e,n,t){"use strict";(function(e){t("34c8");u(t("66fd"));var n=u(t("a5b6"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a50a:function(e,n,t){"use strict";var u=t("3cda"),a=t.n(u);a.a},a5b6:function(e,n,t){"use strict";t.r(n);var u=t("3c10"),a=t("aff4");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("a50a");var i,s=t("f0c5"),o=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,"9a99fa70",null,!1,u["a"],i);n["default"]=o.exports},aff4:function(e,n,t){"use strict";t.r(n);var u=t("d521"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=a.a},d521:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,u,a,r,i){try{var s=e[r](i),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(u,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,a){var i=e.apply(n,t);function s(e){r(i,u,a,s,o,"next",e)}function o(e){r(i,u,a,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,xueshengxueyuanOptions:[],xueshengxueyuanIndex:0,xueshengzhuanyeOptions:[],xueshengzhuanyeIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return i(u.default.mark((function t(){var a,r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=[],r=e.getStorageSync("loginTable"),n.tableName=r,"xuesheng"==n.tableName&&(n.xueshengxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.xueshengxingbieOptions[0]),"xuesheng"!=n.tableName){t.next=10;break}return t.next=7,n.$api.option("xueyuanfenlei","xueyuanfenlei",{});case 7:a=t.sent,n.xueshengxueyuanOptions=a.data,n.ruleForm.xueyuan=n.xueshengxueyuanOptions[0];case 10:if("xuesheng"!=n.tableName){t.next=16;break}return t.next=13,n.$api.option("zhuanyefenlei","zhuanyefenlei",{});case 13:a=t.sent,n.xueshengzhuanyeOptions=a.data,n.ruleForm.zhuanye=n.xueshengzhuanyeOptions[0];case 16:n.styleChange();case 17:case"end":return t.stop()}}),t)})))()},methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},xueshengxueyuanChange:function(e){this.xueshengxueyuanIndex=e.target.value,this.ruleForm.xueyuan=this.xueshengxueyuanOptions[this.xueshengxueyuanIndex]},xueshengzhuanyeChange:function(e){this.xueshengzhuanyeIndex=e.target.value,this.ruleForm.zhuanye=this.xueshengzhuanyeOptions[this.xueshengzhuanyeIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xuehao||"xuesheng"!=e.tableName){n.next=3;break}return e.$utils.msg("学号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"xuesheng"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("xuesheng"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=9;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 9:if("xuesheng"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=12;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 12:if("xuesheng"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 15:return n.next=17,e.$api.register("".concat(e.tableName),e.ruleForm);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return n.stop()}}),n)})))()}}};n.default=s}).call(this,t("543d")["default"])}},[["6835","common/runtime","common/vendor"]]]);