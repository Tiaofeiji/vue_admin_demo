webpackJsonp([23],{qhji:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t={name:"Password",data:function(){return{form:{name:"admin-lixi",passOld:"",passNew1:"",passNew2:""},rules:{passOld:[{required:!0,message:"旧密码不能为空！",trigger:"blur"},{min:6,max:20,message:"密码为6-20个字符"}],passNew1:[{required:!0,message:"新密码不能为空！",trigger:"blur"},{min:6,max:20,message:"密码为6-20个字符"}],passNew2:[{required:!0,message:"确认密码不能为空！",trigger:"blur"},{min:6,max:20,message:"密码为6-20个字符"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){e?console.log("验证通过"):console.log("不通过")})},resetForm:function(e){this.$refs[e].resetFields()}}},a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("el-main",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[e._v("用户管理")]),e._v(" "),r("el-breadcrumb-item",[e._v("重置密码")])],1),e._v(" "),r("el-form",{ref:"form",staticClass:"content-form-warp",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"旧密码",prop:"passOld"}},[r("el-input",{attrs:{type:"text"},model:{value:e.form.passOld,callback:function(s){e.$set(e.form,"passOld",s)},expression:"form.passOld"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"新密码",prop:"passNew1"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.passNew1,callback:function(s){e.$set(e.form,"passNew1",s)},expression:"form.passNew1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认新密码",prop:"passNew2"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.passNew2,callback:function(s){e.$set(e.form,"passNew2",s)},expression:"form.passNew2"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(s){e.submitForm("form")}}},[e._v("点击确认")]),e._v(" "),r("el-button",{on:{click:function(s){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},l=[],o={render:a,staticRenderFns:l},m=o,n=r("/Xao"),i=n(t,m,!1,null,null,null);s.default=i.exports}});