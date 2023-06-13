(function(){"use strict";var e={9101:function(e,t,o){var a=o(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",[t("p",[t("a",{attrs:{href:"https://wiki.luatos.com/"}},[e._v(e._s(e.msg))])]),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:8,xs:1,sm:4,md:4,lg:8,xl:8}},[t("div",{staticClass:"grid-content"})]),t("el-col",{attrs:{span:8,xs:22,sm:16,md:16,lg:8,xl:8}},[t("div",{staticClass:"grid-content bg-purple-light"},[t("el-row"),t("el-row",[t("el-col",{attrs:{span:8}},[t("label",{staticStyle:{"margin-top":"20px"},attrs:{size:"medium"}},[e._v("功耗模式: ")])]),t("el-col",{attrs:{span:16}},[t("el-radio-group",{on:{change:function(t){return e.cait(t)}},model:{value:e.lpmode,callback:function(t){e.lpmode=t},expression:"lpmode"}},[t("el-radio-button",{attrs:{label:1}},[e._v("低延迟PRO")]),t("el-radio-button",{attrs:{label:2}},[e._v("平衡STD")]),t("el-radio-button",{attrs:{label:3}},[e._v("长续航PSM+")])],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:8}},[t("label",{staticStyle:{"margin-top":"20px"},attrs:{size:"medium"}},[e._v("计算模式:")])]),t("el-col",{attrs:{span:16}},[t("el-radio-group",{on:{change:function(t){return e.cait(t)}},model:{value:e.powerMode,callback:function(t){e.powerMode=t},expression:"powerMode"}},[t("el-radio-button",{attrs:{label:0}},[e._v("容量->时长")]),t("el-radio-button",{attrs:{label:1}},[e._v("时长->容量")])],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:8}},[t("label",{staticStyle:{"margin-top":"20px"},attrs:{size:"medium"}},[e._v("信号强度:")])]),t("el-col",{attrs:{span:16}},[t("el-radio-group",{on:{change:function(t){return e.cait(t)}},model:{value:e.signPower,callback:function(t){e.signPower=t},expression:"signPower"}},[t("el-radio-button",{attrs:{label:0}},[e._v("较弱")]),t("el-radio-button",{attrs:{label:1}},[e._v("中等")]),t("el-radio-button",{attrs:{label:2}},[e._v("较强")])],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-input",{attrs:{placeholder:"电池容量",disabled:0!=e.powerMode},on:{change:function(t){return e.cait(t,"powerMAH")}},model:{value:e.powerMAH,callback:function(t){e.powerMAH=t},expression:"powerMAH"}},[t("template",{slot:"prepend"},[e._v("电池容量")]),t("template",{slot:"append"},[e._v("mAH")])],2)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-input",{attrs:{placeholder:"续航时长",disabled:1!=e.powerMode},on:{change:function(t){return e.cait(t,"powerTime")}},model:{value:e.powerTime,callback:function(t){e.powerTime=t},expression:"powerTime"}},[t("template",{slot:"prepend"},[e._v("续航时长")]),t("template",{slot:"append"},[t("span",{on:{click:function(t){return e.update_pt_dw(t)}}},[e._v(e._s(e.powerTimeDW))])])],2)],1)],1),t("el-row",[t("el-input",{attrs:{placeholder:"心跳时间"},on:{change:function(t){return e.cait(t)}},model:{value:e.heartbeat,callback:function(t){e.heartbeat=t},expression:"heartbeat"}},[t("template",{slot:"prepend"},[e._v("心跳间隔")]),t("template",{slot:"append"},[t("span",{on:{click:function(t){return e.update_hb_dw(t)}}},[e._v(e._s(e.heartbeatDW))])])],2)],1),t("el-row",[t("el-input",{attrs:{placeholder:"下行间隔"},on:{change:function(t){return e.cait(t)}},model:{value:e.downWakeup,callback:function(t){e.downWakeup=t},expression:"downWakeup"}},[t("template",{slot:"prepend"},[e._v("下行间隔")]),t("template",{slot:"append"},[t("span",{on:{click:function(t){return e.update_dw_dw(t)}}},[e._v(e._s(e.downWakeupDW))])])],2)],1),t("el-row",[t("el-input",{attrs:{placeholder:"平均功耗",disabled:""},model:{value:e.ca_ma,callback:function(t){e.ca_ma=t},expression:"ca_ma"}},[t("template",{slot:"prepend"},[e._v("平均功耗")]),t("template",{slot:"append"},[t("span",[e._v("mA")])])],2)],1),t("el-row"),t("p"),t("el-row",[t("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.cait()}}},[e._v("自动计算")])],1),t("el-row"),t("p"),t("p",[t("a",{attrs:{href:"https://air780e.cn/",target:"_blank"}},[e._v("了解更多合宙PSM+的信息")])])],1)]),t("el-col",{attrs:{span:8,xs:1,sm:4,md:4,lg:8,xl:8}},[t("div",{staticClass:"grid-content"})])],1)],1)])},r=[],l={LP1:{base:.599,downlink:.014782,heartbeat:16.4/1e3},LP2:{base:.384,downlink:.016366,heartbeat:.0162},LP3:{base:.384,downlink:.016119,heartbeat:.0162}},i={name:"MainPage",props:{},data(){return{msg:"看看电池能用多久",lpmode:2,powerMode:0,powerMAH:500,powerTime:0,powerTimeDW:"天",signPower:1,heartbeat:5,heartbeatDW:"分钟",downWakeup:1,downWakeupDW:"天",ca_time:0,ca_power:0,ca_ma:0}},methods:{update_dw_dw(){"分钟"==this.downWakeupDW?(this.downWakeupDW="小时",this.$set(this,"downWakeupDW","小时"),console.log("设置为小时")):"小时"==this.downWakeupDW?this.downWakeupDW="天":"天"==this.downWakeupDW&&(this.downWakeupDW="分钟"),console.log("downWakeupDW after",this.downWakeupDW),this.cait()},update_hb_dw(){"分钟"==this.heartbeatDW?this.heartbeatDW="小时":"小时"==this.heartbeatDW?this.heartbeatDW="天":"天"==this.heartbeatDW&&(this.heartbeatDW="分钟"),this.cait()},update_pt_dw(){},cait(e,t){if(e&&console.info(e),("powerTime"!=t||1==this.powerMode)&&("powerMHA"!=t||0==this.powerMode)){var o=l["LP1"];2==this.lpmode?(o=l["LP2"],console.log("选用了 功耗模式2 - STD")):3==this.lpmode?(o=l["LP3"],console.log("选用了 功耗模式3 - PSM+")):console.log("选用了 功耗模式1 - STD");var a=0;a+=24*o["base"],a+=o["downlink"]*this.cal_t(this.downWakeup,this.downWakeupDW),a+=o["heartbeat"]*this.cal_t(this.heartbeat,this.heartbeatDW),console.log("每天底电流耗电"+(24*o["base"]).toFixed(2)),console.log("每天唤醒(下行) "+this.cal_t(this.downWakeup,this.downWakeupDW).toFixed(2)),console.log("每天心跳(上行) "+this.cal_t(this.heartbeat,this.heartbeatDW).toFixed(2)),this.ca_ma=a/24*1.5,this.ca_ma<1e-4&&(this.ca_ma=1e-4),this.ca_power=this.powerTime*this.ca_ma,this.ca_time=this.powerMAH/this.ca_ma,0==this.powerMode?this.powerTime=(this.powerMAH/this.ca_ma/24).toFixed(2):this.powerMAH=(this.powerTime*this.ca_ma*24).toFixed(2)}},cal_t(e,t){if(0==e)return 0;console.info("v "+e+" "+t);var o=0;return o="天"==t?1440:"小时"==t?60:1,console.log("换算之后每天执行 "+1440/(e*o)+"次"),1440/(e*o)}},created(){this.cait(null,"")}},s=i,p=o(1001),c=(0,p.Z)(s,n,r,!1,null,null,null),u=c.exports,d=o(8499),h=o.n(d);a["default"].use(h()),a["default"].config.productionTip=!1,new a["default"]({render:e=>e(u)}).$mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,a,n,r){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],r=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var p=n();void 0!==p&&(t=p)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,l=a[0],i=a[1],s=a[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var c=s(o)}for(t&&t(a);p<l.length;p++)r=l[p],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(9101)}));a=o.O(a)})();
//# sourceMappingURL=app.4db88975.js.map