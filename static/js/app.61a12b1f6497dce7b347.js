webpackJsonp([1],{Hhvn:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("7+uW"),n=e("mtWM"),i=e.n(n),r=e("Rf8U"),l=e.n(r),a=(e("K3J8"),e("/ocq")),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("nav",{staticClass:"navbar fixed-top navbar-expand px-5"},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item"},[this._v("首頁")]),o("li",{staticClass:"nav-item"},[this._v("關於我")]),o("li",{staticClass:"nav-item dropdown nav-active",attrs:{"data-toggle":"dropdown"}},[this._v("網頁工具"),o("div",{staticClass:"dropdown-menu"},[o("a",{staticClass:"dropdown-item"},[this._v("SASS色卡工具")]),o("a",{staticClass:"dropdown-item"},[this._v("網格工具")])])])])])}]};var d=e("VU/8")(null,c,!1,function(t){e("mAri")},null,null).exports,u=e("7t+N"),C=e.n(u),p={data:function(){return{colorsheet:[]}},methods:{strCopy:function(t){var o=C()("<textarea>");C()("body").append(o),o.val(t).select(),document.execCommand("Copy"),o.remove()},copyAll:function(){this.strCopy(this.getColorsheet)}},computed:{getColorsheet:function(){var t=[];return this.colorsheet.forEach(function(o){t.push("$"+o.colorName+": "+o.colorCode+";")}),t.join("\n")}},created:function(){var t=this;t.$bus.$on("initColorsheet",function(o){t.colorsheet=o})}},m={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"div m-4 mb-5 border rounded"},[e("ul",{staticClass:"px-3 py-2 m-0",attrs:{id:"colorsheet"}},t._l(t.colorsheet,function(o){return e("li",[t._v("$"+t._s(o.colorName)+": "+t._s(o.colorCode)+";")])})),e("div",{staticClass:"copyBtn text-center py-2",on:{click:t.copyAll}},[e("i",{staticClass:"fas fa-clipboard mr-2"}),t._v("COPY ALL")])])},staticRenderFns:[]},v={components:{SidebarSass:e("VU/8")(p,m,!1,null,null,null).exports},props:["newTitle"],data:function(){return{title:this.newTitle}},created:function(){}},h={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-3 d-none d-lg-block p-0",attrs:{id:"sidebar"}},[o("div",{staticClass:"top position-relative",style:{backgroundColor:this.title.bgColor}},[o("div",{staticClass:"title pl-4 pb-3"},[o("h5",{domProps:{innerHTML:this._s(this.title.subText)}}),o("h1",{staticClass:"m-0",domProps:{innerHTML:this._s(this.title.titleText)}})])]),o("div",{staticClass:"bottom d-flex flex-column bg-white"},[o("SidebarSass")],1)])},staticRenderFns:[]};var f=e("VU/8")(v,h,!1,function(t){e("wrIW")},"data-v-5aa387b4",null).exports,_=e("woOf"),b=e.n(_),w={name:"SassColorGuide",data:function(){return{colorinit:"\n        $color_bg: #E0CAD0;\n        $color_pink: #CE7597;\n        $color_pinkL: #FDBBC9;\n        $color_gray: #AAB7C6;\n        $color_top: #9C4215;\n        $color_md_1: #F3D1BA;\n        $color_md_2: #F7E1CD;\n        ",colorsheet:[],tempColor:{},newColorName:"",newColorCode:""}},methods:{strCopy:function(t){var o=C()("<textarea>");C()("body").append(o),o.val(t).select(),document.execCommand("Copy"),o.remove()},copyColorCode:function(t){this.tempColor=b()({},t),this.strCopy(this.tempColor.colorCode);var o=C()("#"+this.tempColor.colorName+" .color-block");o.append('<div class="colorActive animated fadeOut">'),setTimeout(function(){return o.empty()},1e3)},addColor:function(){this.validColorName&&this.validColorHex&&(this.colorsheet.push({colorName:this.newColorName,colorCode:this.newColorCode}),this.newColorName="",this.newColorCode="")},removeColor:function(t){console.log(t),this.colorsheet.splice(t,1)},editColor:function(t){this.tempColor=b()({},t),console.log("edit")}},computed:{colorInit:function(){var t=[];return this.colorinit.split("\n").forEach(function(o,e){-1!==o.indexOf("color")&&t.push({colorName:o.split(":")[0].split("$")[1],colorCode:o.split(":")[1].trim().split(";")[0]})}),t},validColorName:function(){return""!==this.newColorName.trim()},validColorNameStyle:function(){return""===this.newColorName?"":this.validColorName?"":"is-invalid"},validColorHex:function(){return/^#.[0-9a-f]+$/.test(this.newColorCode)},validColorHexStyle:function(){return""===this.newColorCode?"":this.validColorHex?"":"is-invalid"}},created:function(){this.colorsheet=this.colorInit,this.$bus.$emit("initColorsheet",this.colorsheet)}},x={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[t._l(t.colorsheet,function(o,s){return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 p-3"},[e("div",{staticClass:"removeArea"},[e("div",{staticClass:"removeBtn",on:{click:function(o){o.preventDefault(),t.removeColor(s)}}},[e("i",{staticClass:"fas fa-times"})])]),e("div",{staticClass:"color-card rounded",attrs:{id:o.colorName},on:{click:function(e){e.preventDefault(),t.copyColorCode(o)}}},[e("div",{staticClass:"color-block",style:{backgroundColor:o.colorCode}}),e("div",{staticClass:"color-info bg-white pl-2 py-2",on:{dblclick:function(e){e.preventDefault(),t.editColor(o)}}},[e("div",{staticClass:"color-name"},[t._v(t._s(o.colorName.toUpperCase()))]),e("div",{staticClass:"color-code"},[t._v(t._s(o.colorCode.toUpperCase()))])])])])}),e("div",{staticClass:"addContainer",attrs:{tabindex:"1"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newColorName,expression:"newColorName"}],staticClass:"form-control mr-3",class:t.validColorNameStyle,attrs:{type:"text",placeholder:"變數名稱"},domProps:{value:t.newColorName},on:{input:function(o){o.target.composing||(t.newColorName=o.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newColorCode,expression:"newColorCode"}],staticClass:"form-control",class:t.validColorHexStyle,attrs:{type:"text",placeholder:"#DDC9F2"},domProps:{value:t.newColorCode},on:{input:function(o){o.target.composing||(t.newColorCode=o.target.value)}}}),e("div",{staticClass:"addBtn",on:{click:function(o){o.preventDefault(),t.addColor()}}},[e("i",{staticClass:"fas fa-plus"})])])],2)},staticRenderFns:[]};var y={components:{Navbar:d,Sidebar:f,SassColorGuide:e("VU/8")(w,x,!1,function(t){e("xAEK")},"data-v-c0d2c7fc",null).exports},data:function(){return{SassColorGuide:{titleText:"SASS 色卡工具",subText:"COLOR GUIDE<br>HTML COLOR CODES",bgColor:"#FDBBC9"}}}},g={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("Navbar"),o("div",{staticClass:"container-fluid pt-5"},[o("div",{staticClass:"row"},[this.SassColorGuide.titleText?o("Sidebar",{attrs:{"new-title":this.SassColorGuide}}):this._e(),o("div",{staticClass:"col offset-lg-3 offset-0 bg-light",staticStyle:{"min-height":"100vh"}},[o("div",{staticClass:"container p-5"},[o("SassColorGuide")],1)])],1)])],1)},staticRenderFns:[]},N=e("VU/8")(y,g,!1,null,null,null).exports;s.a.use(a.a);var S=new a.a({routes:[{name:"首頁",path:"/",component:N},{name:"WebTools",path:"/webtools",component:N}]}),$={name:"App",components:{WebTools:N},created:function(){this.$http.get("https://randomuser.me/api/").then(function(t){})}},A={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]};var E=e("VU/8")($,A,!1,function(t){e("Hhvn")},null,null).exports;s.a.prototype.$bus=new s.a,s.a.use(l.a,i.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:E},template:"<App/>",router:S})},mAri:function(t,o){},wrIW:function(t,o){},xAEK:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.61a12b1f6497dce7b347.js.map