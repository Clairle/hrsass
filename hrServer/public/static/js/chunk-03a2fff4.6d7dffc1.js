(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03a2fff4"],{"0127":function(e,t,a){},"0ccb":function(e,t,a){var n=a("50c4"),i=a("1148"),r=a("1d80"),s=Math.ceil,o=function(e){return function(t,a,o){var l,c,d=String(r(t)),u=d.length,p=void 0===o?" ":String(o),m=n(a);return m<=u||""==p?d:(l=m-u,c=i.call(p,s(l/p.length)),c.length>l&&(c=c.slice(0,l)),e?d+c:c+d)}};e.exports={start:o(!1),end:o(!0)}},"1eef":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return l}));var n=a("b775");function i(){return Object(n["a"])({url:"/company/department",method:"get"})}function r(e){return Object(n["a"])({url:"/company/department/".concat(e),method:"delete"})}function s(e){return Object(n["a"])({url:"/company/department",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/company/department/".concat(e),method:"get"})}function l(e){return Object(n["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"38c0":function(e,t,a){"use strict";a("0127")},"4d90":function(e,t,a){"use strict";var n=a("23e7"),i=a("0ccb").start,r=a("9a0c");n({target:"String",proto:!0,forced:r},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"5efd":function(e,t,a){"use strict";a("8255")},8255:function(e,t,a){},"8f00":function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"h",(function(){return l})),a.d(t,"i",(function(){return c})),a.d(t,"g",(function(){return d})),a.d(t,"k",(function(){return u})),a.d(t,"f",(function(){return p})),a.d(t,"j",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a("b775");function i(){return Object(n["a"])({method:"GET",url:"/sys/user/simple"})}function r(e){return Object(n["a"])({url:"/sys/user",params:e})}function s(e){return Object(n["a"])({url:"/sys/user/".concat(e),method:"delete"})}function o(e){return Object(n["a"])({method:"post",url:"/sys/user",data:e})}function l(e){return Object(n["a"])({url:"/sys/user/batch",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function d(e){return Object(n["a"])({url:"/employees/".concat(e,"/personalInfo")})}function u(e){return Object(n["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function p(e){return Object(n["a"])({url:"/employees/".concat(e,"/jobs")})}function m(e){return Object(n["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function f(e){return Object(n["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"9a0c":function(e,t,a){var n=a("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},afc0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("page-tools",{attrs:{"show-before":!0},scopedSlots:e._u([{key:"before",fn:function(){return[e._v("有 "+e._s(e.attendInfo.tobeTaskCount)+" 条考勤审批尚未处理")]},proxy:!0},{key:"after",fn:function(){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.$router.push("/import?type=attendance")}}},[e._v("导入")]),a("el-button",{attrs:{size:"mini",type:"warning"}},[e._v("提醒")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handleSet}},[e._v("设置")]),a("el-button",{attrs:{size:"mini",type:"default"},on:{click:function(t){return e.$router.push("/attendances/archiving/")}}},[e._v("历史归档")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.$router.push({path:"/attendances/report/"+e.yearMonth})}}},[e._v(e._s(e.yearMonth)+"报表")])]},proxy:!0}])}),a("el-card",{staticClass:"hr-block"},[a("el-form",{ref:"formData",staticClass:"formInfo",attrs:{model:e.formData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"部门:"}},[a("el-checkbox-group",{model:{value:e.formData.deptID,callback:function(t){e.$set(e.formData,"deptID",t)},expression:"formData.deptID"}},e._l(e.departments,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("el-form-item",{attrs:{label:"考勤状态："}},[a("el-radio-group",{model:{value:e.formData.stateID,callback:function(t){e.$set(e.formData,"stateID",t)},expression:"formData.stateID"}},e._l(e.stateData.holidayType,(function(t){return a("el-radio",{key:t.id,attrs:{label:t.value,value:t.value}},[e._v(" "+e._s(t.value)+" ")])})),1)],1)],1)],1),a("el-card",{staticClass:"hr-block"},[a("div",{staticStyle:{width:"100%",position:"relative","overflow-x":"auto","overflow-y":"hidden"}},[a("div",{staticStyle:{width:"3000px"}},[a("table",{staticClass:"tableInfo",attrs:{border:"0",align:"center",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("th",{attrs:{width:"50"}},[e._v("序号")]),a("th",{attrs:{width:"100"}},[e._v("姓名")]),a("th",{attrs:{width:"100"}},[e._v("工号")]),a("th",{attrs:{width:"200"}},[e._v("部门")]),a("th",{attrs:{width:"100"}},[e._v("手机")]),e._l(e.monthOfReport,(function(t,n){return a("th",{key:n,attrs:{width:"110"}},[e._v(e._s(e.attendInfo.month)+"/"+e._s(n+1))])}))],2),e._l(e.list,(function(t,n){return a("tr",{key:t.id},[a("td",{attrs:{width:"50"}},[e._v(e._s(n))]),a("td",{attrs:{width:"100"}},[e._v(e._s(t.username))]),a("td",{attrs:{width:"100"}},[e._v(e._s(t.workNumber))]),a("td",{attrs:{width:"200"}},[e._v(e._s(t.departmentName))]),a("td",{attrs:{width:"100"}},[e._v(e._s(t.mobile))]),e._l(t.attendanceRecord,(function(n,i){return a("td",{key:i,attrs:{width:"110"},on:{click:function(a){return e.showChangeDialog(t,i,n)}}},[1===n.adtStatu?a("span",[e._v("√")]):e._e(),2===n.adtStatu?a("span",[e._v("旷工")]):e._e(),3===n.adtStatu?a("span",[e._v("迟到")]):e._e(),4===n.adtStatu?a("span",[e._v("早退")]):e._e(),5===n.adtStatu?a("span",[e._v("外出")]):e._e(),6===n.adtStatu?a("span",[e._v("出差")]):e._e(),7===n.adtStatu?a("span",[e._v("年假")]):e._e(),8===n.adtStatu?a("span",[e._v("事假")]):e._e(),9===n.adtStatu?a("span",[e._v("病假")]):e._e(),10===n.adtStatu?a("span",[e._v("婚假")]):e._e(),11===n.adtStatu?a("span",[e._v("丧假")]):e._e(),12===n.adtStatu?a("span",[e._v("产假")]):e._e(),13===n.adtStatu?a("span",[e._v("奖励产假")]):e._e(),14===n.adtStatu?a("span",[e._v("陪产假")]):e._e(),15===n.adtStatu?a("span",[e._v("探亲假")]):e._e(),16===n.adtStatu?a("span",[e._v("工伤假")]):e._e(),17===n.adtStatu?a("span",[e._v("调休")]):e._e(),18===n.adtStatu?a("span",[e._v("产检假")]):e._e(),19===n.adtStatu?a("span",[e._v("流产假2")]):e._e(),20===n.adtStatu?a("span",[e._v("长期病假")]):e._e(),21===n.adtStatu?a("span",[e._v("测试架")]):e._e(),22===n.adtStatu?a("span",[e._v("补签")]):e._e()])}))],2)}))],2)])]),a("el-dialog",{attrs:{visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("span",{staticStyle:{color:"#fff"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.attendInfo.name)+" "+e._s(e.attendInfo.month)+"/"+e._s(e.attendInfo.getDate)+"（实际工作日考勤方案）")]),a("div",{staticClass:"attenInfo"},[a("p",{staticClass:"colRed"},[e._v("注：统计考勤时，异常状态优先正常状态")]),a("p",{staticClass:"check"},[a("el-radio-group",{model:{value:e.modifyData.adtStatu,callback:function(t){e.$set(e.modifyData,"adtStatu",t)},expression:"modifyData.adtStatu"}},e._l(e.stateData.vacationtype,(function(t){return a("el-radio",{key:t.id,attrs:{label:t.id,value:t.name}},[e._v(e._s(t.name))])})),1)],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.btnOK}},[e._v("确定")]),a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取消")])],1)]),a("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"center"}},[a("el-pagination",{attrs:{"page-size":e.page.pagesize,"current-page":e.page.page,layout:"prev, pager, next",total:e.page.total},on:{"current-change":e.pageChange}})],1)],1)],1),a("el-card",[a("el-dialog",{attrs:{title:"提醒",visible:e.tipsDialogVisible,width:"280px",center:""},on:{"update:visible":function(t){e.tipsDialogVisible=t}}},[a("div",{staticClass:"attenInfo"},[a("p",[e._v("系统将通过邮件与短信的形式，对全体员工中存在旷工的考勤进行提醒，该提醒每月仅可发送 1 次。")])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSub}},[e._v("我知道了")]),a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取消")])],1)]),a("attendance-set",{ref:"set",on:{handleCloseModal:e.handleCloseModal}})],1)],1)},i=[],r=a("5530"),s=a("c7eb"),o=a("1da1"),l=(a("b0c0"),{holidayType:[{id:"1",value:"正常",isEnable:!1},{id:"2",value:"旷工",isEnable:!1},{id:"3",value:"事假",isEnable:!1},{id:"4",value:"调休",isEnable:!1},{id:"5",value:"迟到",isEnable:!1},{id:"6",value:"早退",isEnable:!1}],vacationtype:[{id:"1",name:"正常"},{id:"2",name:"旷工"},{id:"3",name:"迟到"},{id:"4",name:"早退"},{id:"5",name:"外出"},{id:"6",name:"出差"},{id:"7",name:"年假"},{id:"8",name:"事假"},{id:"9",name:"病假"},{id:"10",name:"婚假"},{id:"11",name:"丧假"},{id:"12",name:"产假"},{id:"13",name:"奖励产假"},{id:"14",name:"陪产假"},{id:"15",name:"探亲假"},{id:"16",name:"工伤假"},{id:"17",name:"调休"},{id:"18",name:"产检假"},{id:"19",name:"流产假"},{id:"20",name:"长期病假"},{id:"21",name:"测试假"},{id:"22",name:"补签"}],type:[{leaveType:"60000",name:"年假",isEnable:!1},{leaveType:"60100",name:"事假",isEnable:!1},{leaveType:"60200",name:"病假",isEnable:!1},{leaveType:"60300",name:"婚假",isEnable:!1},{leaveType:"60400",name:"丧假",isEnable:!1},{leaveType:"60500",name:"产假",isEnable:!1},{leaveType:"60600",name:"奖励产假",isEnable:!1},{leaveType:"60700",name:"陪产假",isEnable:!1},{leaveType:"60800",name:"探亲假",isEnable:!1},{leaveType:"60900",name:"工伤假",isEnable:!1},{leaveType:"61000",name:"调休假",isEnable:!1},{leaveType:"61100",name:"产检假",isEnable:!1},{leaveType:"61200",name:"流产假",isEnable:!1},{leaveType:"61300",name:"长期病假",isEnable:!1},{leaveType:"61400",name:"测试假",isEnable:!1}],departmentType:[{dedTypeCode:"51000",name:"迟到扣款",isEnable:!1,departmentId:"",periodLowerLimit:"30",periodUpperLimit:"30",timesLowerLimit:"2",timesUpperLimit:"2",dedAmonutLowerLimit:"30",dedAmonutUpperLimit:"0",absenceDays:"0.5",fineSalaryMultiples:"2",absenceTimesUpperLimt:"0"},{dedTypeCode:"52000",name:"早退扣款",isEnable:!1,departmentId:"",periodLowerLimit:"30",periodUpperLimit:"30",timesLowerLimit:"2",timesUpperLimit:"2",dedAmonutLowerLimit:"30",dedAmonutUpperLimit:"0",absenceDays:"0.5",fineSalaryMultiples:"2",absenceTimesUpperLimt:"0"},{dedTypeCode:"53000",name:"旷工扣款",isEnable:!1,departmentId:"",periodLowerLimit:"30",periodUpperLimit:"30",timesLowerLimit:"2",timesUpperLimit:"2",dedAmonutLowerLimit:"30",dedAmonutUpperLimit:"0",absenceDays:"0.5",fineSalaryMultiples:"2",absenceTimesUpperLimt:"0"}],overtimeType:[{departmentId:"",rule:"工作日可申请加班",ruleStartTime:"",ruleEndTime:"",isTimeOff:!1,isEnable:!1},{departmentId:"",rule:"休息日可申请加班",ruleStartTime:"",ruleEndTime:"",isTimeOff:!1,isEnable:!1},{departmentId:"",rule:"法定节假日可申请加班",ruleStartTime:"",ruleEndTime:"",isTimeOff:!1,isEnable:!1}]}),c=a("f1e3"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-form"},[a("el-dialog",{attrs:{title:"设置",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-tabs",{staticStyle:{"margin-left":"20px"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"出勤设置",name:"first"}},[a("el-form",{ref:"dataForm",staticClass:"titmInfo",staticStyle:{width:"700px"},attrs:{rules:e.rules,model:e.formBase,"label-position":"right","label-width":"100px"}},[a("el-form-item",{attrs:{label:"部门：",prop:"departmentId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.formBase.departmentId,callback:function(t){e.$set(e.formBase,"departmentId",t)},expression:"formBase.departmentId"}},e._l(e.departmentData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"出勤时间：",prop:"morningStartTime"}},[a("el-time-select",{staticClass:"timePicker",attrs:{"picker-options":{start:"00:00",step:"00:05",end:"23:59"},placeholder:e.formBase.morningStartTime},model:{value:e.formBase.morningStartTime,callback:function(t){e.$set(e.formBase,"morningStartTime",t)},expression:"formBase.morningStartTime"}}),e._v("- "),a("el-time-select",{staticClass:"timePicker",attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:e.formBase.morningEndTime},model:{value:e.formBase.morningEndTime,callback:function(t){e.$set(e.formBase,"morningEndTime",t)},expression:"formBase.morningEndTime"}}),a("el-time-select",{staticClass:"timePicker",attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:e.formBase.afternoonStartTime},model:{value:e.formBase.afternoonStartTime,callback:function(t){e.$set(e.formBase,"afternoonStartTime",t)},expression:"formBase.afternoonStartTime"}}),e._v("- "),a("el-time-select",{staticClass:"timePicker",attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:e.formBase.afternoonEndTime},model:{value:e.formBase.afternoonEndTime,callback:function(t){e.$set(e.formBase,"afternoonEndTime",t)},expression:"formBase.afternoonEndTime"}})],1)],1),a("div",{staticClass:"el-dialog__footer dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAttendance}},[e._v("保存更新")]),a("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1),a("el-tab-pane",{attrs:{label:"请假设置",name:"second"}},[a("el-form",{ref:"leaveForm",staticClass:"titmInfo",attrs:{rules:e.rules,model:e.leaveBase,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"部门：",prop:"departmentId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChangeLeave},model:{value:e.leaveBase.departmentId,callback:function(t){e.$set(e.leaveBase,"departmentId",t)},expression:"leaveBase.departmentId"}},e._l(e.departmentData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("p",[e._v("假期类型")]),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.stateData.type}},[a("el-table-column",{attrs:{prop:"name",label:"类型",width:"200"}}),a("el-table-column",{attrs:{label:"是否可用"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.row.isEnable,callback:function(a){e.$set(t.row,"isEnable",a)},expression:"scope.row.isEnable"}})]}}])})],1),a("div",{staticClass:"el-dialog__footer dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleLeave}},[e._v("保存更新")]),a("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1),a("el-alert",{attrs:{type:"warning","show-icon":"",closable:!1,title:""}},[[a("div",{staticClass:"tipInfo"},[a("p",[e._v("事假 请假单位为0.5天 只能提交工作日内的请假单")]),a("p",[e._v("当请假开关关闭后，员工则不可在员工端提交请假申请")])])]],2)],1),a("el-tab-pane",{attrs:{label:"扣款设置",name:"third"}},[a("el-form",{ref:"deductionsForm",staticClass:"titmInfo",attrs:{rules:e.rules,model:e.deductionsBase,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"部门：",prop:"departmentId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChangeDeductions},model:{value:e.deductionsBase.departmentId,callback:function(t){e.$set(e.deductionsBase,"departmentId",t)},expression:"deductionsBase.departmentId"}},e._l(e.departmentData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.stateData.departmentType}},[a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(" "+e._s(t.row.name)+" "),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return e.handleStatus(a,t.row)}},model:{value:t.row.isEnable,callback:function(a){e.$set(t.row,"isEnable",a)},expression:"scope.row.isEnable"}})],1),"51000"===t.row.dedTypeCode?a("div",{staticClass:"attentInfo"},[a("p",[e._v(" 迟到≤ "),a("el-input",{staticClass:"inputInfo",attrs:{value:"30"},nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.periodUpperLimit,callback:function(a){e.$set(t.row,"periodUpperLimit",a)},expression:"scope.row.periodUpperLimit"}}),e._v("分钟 ")],1),a("div",{staticClass:"deductionInfo"},[a("p",[e._v(" 迟到≤ "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.timesUpperLimit,callback:function(a){e.$set(t.row,"timesUpperLimit",a)},expression:"scope.row.timesUpperLimit"}}),e._v("次，每次扣款 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.dedAmonutUpperLimit,callback:function(a){e.$set(t.row,"dedAmonutUpperLimit",a)},expression:"scope.row.dedAmonutUpperLimit"}}),e._v("元 ")],1),a("p",[e._v(" 迟到> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.timesLowerLimit,callback:function(a){e.$set(t.row,"timesLowerLimit",a)},expression:"scope.row.timesLowerLimit"}}),e._v("次，每次扣款 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.dedAmonutLowerLimit,callback:function(a){e.$set(t.row,"dedAmonutLowerLimit",a)},expression:"scope.row.dedAmonutLowerLimit"}}),e._v("元 ")],1)]),a("p",[e._v(" 迟到> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},model:{value:t.row.periodLowerLimit,callback:function(a){e.$set(t.row,"periodLowerLimit",a)},expression:"scope.row.periodLowerLimit"}}),e._v("分钟 ")],1),a("div",{staticClass:"deductionInfo"},[a("p",[e._v(" 迟到> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},model:{value:t.row.absenceTimesUpperLimt,callback:function(a){e.$set(t.row,"absenceTimesUpperLimt",a)},expression:"scope.row.absenceTimesUpperLimt"}}),e._v("次，每次矿工 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInputPoint(t)}},model:{value:t.row.absenceDays,callback:function(a){e.$set(t.row,"absenceDays",a)},expression:"scope.row.absenceDays"}}),e._v("天 ")],1)])]):e._e(),"52000"===t.row.dedTypeCode?a("div",{staticClass:"attentInfo"},[a("p",[e._v(" 早退≤ "),a("el-input",{staticClass:"inputInfo",attrs:{value:"30"},nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.periodUpperLimit,callback:function(a){e.$set(t.row,"periodUpperLimit",a)},expression:"scope.row.periodUpperLimit"}}),e._v("分钟 ")],1),a("div",{staticClass:"deductionInfo"},[a("p",[e._v(" 早退≤ "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.timesUpperLimit,callback:function(a){e.$set(t.row,"timesUpperLimit",a)},expression:"scope.row.timesUpperLimit"}}),e._v("次，每次扣款 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.dedAmonutUpperLimit,callback:function(a){e.$set(t.row,"dedAmonutUpperLimit",a)},expression:"scope.row.dedAmonutUpperLimit"}}),e._v("元 ")],1),a("p",[e._v(" 早退> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},model:{value:t.row.timesLowerLimit,callback:function(a){e.$set(t.row,"timesLowerLimit",a)},expression:"scope.row.timesLowerLimit"}}),e._v("次，每次扣款 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.dedAmonutLowerLimit,callback:function(a){e.$set(t.row,"dedAmonutLowerLimit",a)},expression:"scope.row.dedAmonutLowerLimit"}}),e._v("元 ")],1)]),a("p",[e._v(" 早退> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},model:{value:t.row.periodLowerLimit,callback:function(a){e.$set(t.row,"periodLowerLimit",a)},expression:"scope.row.periodLowerLimit"}}),e._v("分钟 ")],1),a("div",{staticStyle:{"padding-left":"120px"}},[a("p",[e._v(" 早退> "),a("el-input",{staticClass:"inputInfo",attrs:{disabled:""},model:{value:t.row.absenceTimesUpperLimt,callback:function(a){e.$set(t.row,"absenceTimesUpperLimt",a)},expression:"scope.row.absenceTimesUpperLimt"}}),e._v("次，每次矿工 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInputPoint(t)}},model:{value:t.row.absenceDays,callback:function(a){e.$set(t.row,"absenceDays",a)},expression:"scope.row.absenceDays"}}),e._v("天 ")],1)])]):e._e(),"53000"===t.row.dedTypeCode?a("div",{staticClass:"attentInfo"},[a("p",[e._v(" 矿工按 "),a("el-input",{staticClass:"inputInfo",nativeOn:{input:function(t){return e.handleInput(t)}},model:{value:t.row.fineSalaryMultiples,callback:function(a){e.$set(t.row,"fineSalaryMultiples",a)},expression:"scope.row.fineSalaryMultiples"}}),e._v("倍工资处罚 ")],1)]):e._e()]}}])})],1),a("div",{staticClass:"el-dialog__footer dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleDeductions}},[e._v("保存更新")]),a("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1),a("el-tab-pane",{attrs:{label:"加班设置",name:"fourth"}},[a("el-form",{ref:"overtimeForm",attrs:{model:e.overtimeBase,rules:e.overtimeRule,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"部门：",prop:"departmentId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChangeovertime},model:{value:e.overtimeBase.departmentId,callback:function(t){e.$set(e.overtimeBase,"departmentId",t)},expression:"overtimeBase.departmentId"}},e._l(e.departmentData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"加班规则："}},e._l(e.overtimeBase.rules,(function(t){return a("div",{key:t.id,staticClass:"ruleInfo"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-switch",{model:{value:t.isEnable,callback:function(a){e.$set(t,"isEnable",a)},expression:"item.isEnable"}}),e._v(" "+e._s(t.rule)+" ")],1)]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"pad"},[a("el-checkbox",{model:{value:t.isTimeOff,callback:function(a){e.$set(t,"isTimeOff",a)},expression:"item.isTimeOff"}},[e._v("调休假")])],1),[a("el-time-select",{staticStyle:{width:"100px"},attrs:{"picker-options":{start:"01:00",step:"00:15",end:"23:59"},disabled:!1===t.isTimeOff},model:{value:t.ruleStartTime,callback:function(a){e.$set(t,"ruleStartTime",a)},expression:"item.ruleStartTime"}}),a("el-time-select",{staticStyle:{width:"100px"},attrs:{"picker-options":{start:"01:00",step:"00:15",end:"23:59",minTime:t.startTime},disabled:!1===t.isTimeOff},model:{value:t.ruleEndTime,callback:function(a){e.$set(t,"ruleEndTime",a)},expression:"item.ruleEndTime"}})]],2)])],1)],1)})),0),a("el-form-item",{attrs:{label:"打卡验证：",prop:"isClock"}},[a("el-switch",{model:{value:e.overtimeBase.isClock,callback:function(t){e.$set(e.overtimeBase,"isClock",t)},expression:"overtimeBase.isClock"}}),e._v(" 加班需要有打卡记录 ")],1),a("el-form-item",{attrs:{label:"开启补偿：",prop:"isCompensationint"}},[a("el-switch",{model:{value:e.overtimeBase.isCompensationint,callback:function(t){e.$set(e.overtimeBase,"isCompensationint",t)},expression:"overtimeBase.isCompensationint"}})],1),a("el-form-item",{attrs:{label:"调休假设置：",prop:"latestEffectDate"}},[a("div",{staticClass:"ruleInfo"},[e._v(" 最晚有效期： 次年 "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.overtimeBase.latestEffectDate,callback:function(t){e.$set(e.overtimeBase,"latestEffectDate",t)},expression:"overtimeBase.latestEffectDate"}})],1)]),a("el-form-item",{attrs:{label:"",prop:"unit"}},[a("div",{staticClass:"ruleInfo"},[a("p",[e._v(" 请假最小单位 "),a("el-input",{staticStyle:{width:"50px"},model:{value:e.overtimeBase.unit,callback:function(t){e.$set(e.overtimeBase,"unit",t)},expression:"overtimeBase.unit"}}),e._v("天 ")],1)])])],1),a("div",{staticClass:"el-dialog__footer dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleOvertime}},[e._v("保存更新")]),a("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1)],1)],1)],1)},u=[],p=(a("d3b7"),a("159b"),a("8f00")),m=a("8975"),f=a("1eef"),v=a("ed08"),b={name:"Add",props:[],data:function(){return{dialogFormVisible:!1,isShowSelect:!1,formOfEmployment:"",activeName:"first",formBase:{morningStartTime:"",morningEndTime:"",afternoonStartTime:"",afternoonEndTime:"",departmentId:""},leaveBase:{departmentId:""},deductionsBase:{departmentId:""},overtimeBase:{departmentId:"",isClock:!1,isCompensationint:!1,latestEffectDate:"",unit:"",rules:l.overtimeType},departmentData:[],stateData:[],tylelist:[],deductionList:[],oldNum:"",rules:{departmentId:[{required:!0,message:"请选择部门",trigger:"change"}],morningStartTime:[{required:!0,message:"请选择时间",trigger:"change"}]},overtimeRule:{unit:[{required:!0,message:"调休单位不能为空(",trigger:"blur"}],departmentId:[{required:!0,message:"请选择部门",trigger:"change"}],isClock:[{required:!0,message:"请选择打卡验证",trigger:"change"}],isCompensationint:[{required:!0,message:"请选择补偿",trigger:"change"}],latestEffectDate:[{required:!0,message:"请选择时间",trigger:"change"}]}}},computed:{inpNum:function(){return this.oldNum}},created:function(){this.getDepartments(),this.stateData=l},methods:{getDepartments:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])();case 2:a=t.sent,n=a.depts,e.departmentData=n,e.formBase.departmentId=e.leaveBase.departmentId=e.deductionsBase.departmentId=e.overtimeBase.departmentId=e.departmentData[0].id,e.handleChange(e.leaveBase.departmentId);case 7:case"end":return t.stop()}}),t)})))()},dialogFormV:function(){this.dialogFormVisible=!0},dialogFormH:function(){this.dialogFormVisible=!1},clearFormDate:function(){this.formBase={}},handleClose:function(){this.dialogFormH(),this.clearFormDate()},createData:function(){var e=this;this.formBase.formOfEmployment=this.formOfEmployment,this.$refs.dataForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,Object(p["a"])(e.formBase);case 3:e.$emit("clearFormDate",e.formBase),e.formBase={},e.$emit("doQuery",e.requestParameters),e.dialogFormVisible=!1;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleChange:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["h"])({departmentId:e});case 2:t.formBase=a.sent;case 3:case"end":return a.stop()}}),a)})))()},handleChangeLeave:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.leaveBase.departmentId=e,t.stateData.type.forEach((function(t){t.isEnable=!1,t.departmentId=e})),a.next=4,Object(c["k"])({departmentId:e});case 4:n=a.sent,n.forEach((function(e){0===e.isEnable?e.isEnable=!0:e.isEnable=!1,t.stateData.type.forEach((function(t){t.leaveType===e.leaveType&&(t.isEnable=e.isEnable)}))}));case 6:case"end":return a.stop()}}),a)})))()},handleChangeDeductions:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.deductionsBase.departmentId=e,t.stateData.departmentType.forEach((function(t){t.departmentId=e,t.isEnable=!1})),a.next=4,Object(c["j"])({departmentId:e}).then((function(e){}));case 4:n=a.sent,n.forEach((function(e){0===e.isEnable?e.isEnable=!0:e.isEnable=!1,t.stateData.departmentType.forEach((function(t){t.dedTypeCode===e.dedTypeCode&&(t.isEnable=e.isEnable)}))}));case 6:case"end":return a.stop()}}),a)})))()},handleChangeovertime:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.overtimeBase.departmentId=e,t.overtimeBase.rules.forEach((function(t){t.departmentId=e,t.isEnable=t.isTimeOff=!1,t.ruleEndTime=t.ruleStartTime=""})),t.overtimeBase.latestEffectDate="",t.overtimeBase.unit="",t.overtimeBase.isClock=t.overtimeBase.isCompensationint=!1,a.next=7,Object(c["l"])({departmentId:e});case 7:n=a.sent,null===n.dayOffConfigs&&null===n.extraDutyConfig||(t.overtimeBase.departmentId=n.dayOffConfigs.departmentId,t.overtimeBase.latestEffectDate=n.dayOffConfigs.latestEffectDate,t.overtimeBase.unit=n.dayOffConfigs.unit,t.overtimeBase.isClock=n.extraDutyConfig.isClock,t.overtimeBase.isCompensationint=n.extraDutyConfig.isCompensationint),0===t.overtimeBase.isClock?t.overtimeBase.isClock=!0:t.overtimeBase.isClock=!1,0===t.overtimeBase.isCompensationint?t.overtimeBase.isClock=!0:t.overtimeBase.isCompensationint=!1,n.extraDutyRuleList.length>0&&(n.extraDutyRuleList.forEach((function(e){0===e.isEnable?e.isEnable=!0:e.isEnable=!1,0===e.isTimeOff?e.isTimeOff=!0:e.isTimeOff=!1})),t.overtimeBase.rules=n.extraDutyRuleList);case 12:case"end":return a.stop()}}),a)})))()},handleAttendance:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.dataForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,Object(c["b"])(e.formBase);case 3:e.$emit("dataSearch"),e.handleClose();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},handleLeave:function(){var e=this;this.$refs.leaveForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return e.tylelist=e.stateData.type,e.tylelist.forEach((function(e){e.isEnable?e.isEnable="0":e.isEnable="1"})),t.next=5,Object(c["m"])(e.tylelist);case 5:e.$emit("dataSearch"),e.handleClose();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleDeductions:function(){var e=this;this.$refs.deductionsForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){var n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return n=e.stateData.departmentType,n.forEach((function(e){e.isEnable?e.isEnable="0":e.isEnable="1"})),t.next=5,Object(c["c"])(n);case 5:e.$emit("dataSearch"),e.handleClose();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleOvertime:function(){var e=this;this.$refs.overtimeForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){var n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=10;break}return n=e.overtimeBase,n.latestEffectDate=v["a"](n.latestEffectDate),!0===n.isClock?n.isClock="0":n.isClock="1",!0===n.isCompensationint?n.isCompensationint="0":n.isCompensationint="1",n.rules.forEach((function(e){!0===e.isEnable?e.isEnable="0":e.isEnable="1",!0===e.isTimeOff?e.isTimeOff="0":e.isTimeOff="1"})),t.next=8,Object(c["o"])(n);case 8:e.$emit("dataSearch"),e.handleClose();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},handleClick:function(e,t){"0"===e.index&&""!==this.formBase.departmentId&&this.handleChange(this.formBase.departmentId),"1"===e.index?""!==this.leaveBase.departmentId&&this.handleChangeLeave(this.leaveBase.departmentId):"2"===e.index?""!==this.deductionsBase.departmentId&&this.handleChangeDeductions(this.deductionsBase.departmentId):""!==this.overtimeBase.departmentId&&this.handleChangeovertime(this.overtimeBase.departmentId)},typeTip:function(e){this.$message.error(e)},handleInput:function(e){Object(m["getInteger"])(e,this.typeTip)},handleInputPoint:function(e){Object(m["getIntegerPoint"])(e)},handleStatus:function(e,t){if(t.departmentId=this.deductionsBase.departmentId,""===this.deductionsBase.departmentId)return this.$message.error("请选择部门"),!1}}},h=b,g=(a("5efd"),a("bad6"),a("2877")),w=Object(g["a"])(h,d,u,!1,null,"39f89b80",null),y=w.exports,_={name:"Attendances",components:{AttendanceSet:y},data:function(){return{list:[],selectData:[],stateData:l,departments:[],total:100,attendanceRecord:"",monthOfReport:"",centerDialogVisible:!1,tipsDialogVisible:!1,month:"",yearMonth:"",loading:!1,attendInfo:{month:"",getDate:"",getInfo:"",name:"",counts:"",tobeTaskCount:""},formData:{page:1,pagesize:10,keyword:this.keyword,deptID:[],stateID:""},page:{page:1,pagesize:10,total:0},modifyData:{userId:"",day:"",adtStatu:""}}},created:function(){this.getAttendancesList(),this.getDepartments()},methods:{handleSub:function(){this.tipsDialogVisible=!1,this.$message.success("提醒成功")},handleTip:function(){this.tipsDialogVisible=!0},handleSet:function(){this.$refs.set.dialogFormV()},handleCloseModal:function(){this.$refs.set.dialogFormH()},getDepartments:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])();case 2:a=t.sent,n=a.depts,e.departments=n;case 5:case"end":return t.stop()}}),t)})))()},getAttendancesList:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,n,i,o,l,d,u,p;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(c["i"])(Object(r["a"])({},e.page));case 3:a=t.sent,n=a.data,i=a.monthOfReport,o=a.tobeTaskCount,e.list=n.rows,e.page.total=n.total,e.attendInfo.counts=n.total,e.attendInfo.month=i,e.attendInfo.tobeTaskCount=o,l=new Date,d=l.getFullYear(),u=i,p=new Date(d,u,0),e.monthOfReport=p.getDate(),e.yearMonth=d+(""+u<10?"0"+u:u),e.month=i,e.loading=!1;case 20:case"end":return t.stop()}}),t)})))()},btnOK:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["q"])(e.modifyData);case 2:e.centerDialogVisible=!1,e.getAttendancesList();case 4:case"end":return t.stop()}}),t)})))()},pageChange:function(e){this.page.page=e,this.getAttendancesList()},showChangeDialog:function(e,t,a){this.modifyData.userId=e.id,this.modifyData.day=a.day,this.modifyData.departmentId=e.departmentId,this.modifyData.adtStatu=a.adtStatu+"",""!==a.adtStatu&&(this.attendInfo.getDate=parseInt(t+1),this.attendInfo.getInfo=a.adtStatu,this.attendInfo.name=e.name,this.centerDialogVisible=!0)}}},I=_,k=(a("38c0"),Object(g["a"])(I,n,i,!1,null,"1b3556e8",null));t["default"]=k.exports},bad6:function(e,t,a){"use strict";a("e8cd")},e8cd:function(e,t,a){},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("53ca"),a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("2c3e"),a("25f0"),a("d3b7"),a("4d90"),a("159b");function n(e,t){var a=[];return e.forEach((function(i){if(i.pid===t){var r=n(e,i.id);r.length&&(i.children=r),a.push(i)}})),a}},f1e3:function(e,t,a){"use strict";a.d(t,"i",(function(){return i})),a.d(t,"g",(function(){return r})),a.d(t,"q",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"n",(function(){return d})),a.d(t,"p",(function(){return u})),a.d(t,"m",(function(){return p})),a.d(t,"k",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"j",(function(){return v})),a.d(t,"o",(function(){return b})),a.d(t,"l",(function(){return h})),a.d(t,"b",(function(){return g})),a.d(t,"h",(function(){return w})),a.d(t,"d",(function(){return y}));a("99af");var n=a("b775");function i(e){return Object(n["a"])({url:"/attendances",params:e})}function r(e){return Object(n["a"])({url:"/attendances/archive/".concat(e.userId,"/").concat(e.yearMonth)})}function s(e){return Object(n["a"])({url:"/attendances/".concat(e.userId),method:"put",data:e})}function o(e){return Object(n["a"])({url:"/attendances/reports/year",params:e})}function l(e){return Object(n["a"])({url:"/attendances/reports/".concat(e.atteArchiveMonthlyId),params:e})}function c(e){return Object(n["a"])({url:"/attendances/archives",params:e})}function d(e){return Object(n["a"])({url:"/attendances/newReports",params:e})}function u(e){return Object(n["a"])({url:"/attendances/reports",params:e})}function p(e){return Object(n["a"])({url:"/cfg/leave",method:"put",data:e})}function m(e){return Object(n["a"])({url:"/cfg/leave/list",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/cfg/deduction",method:"put",data:e})}function v(e){return Object(n["a"])({url:"/cfg/ded/list",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/cfg/extDuty",method:"put",data:e})}function h(e){return Object(n["a"])({url:"/cfg/extDuty/item",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/cfg/atte",method:"put",data:e})}function w(e){return Object(n["a"])({url:"/cfg/atte/item",method:"post",data:e})}function y(e){return Object(n["a"])({url:"/employees/archives/".concat(e.month),method:"put",data:e})}}}]);