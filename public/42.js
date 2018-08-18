webpackJsonp([42],{"2gGM":function(e,t,r){e.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}({0:function(e,t,r){e.exports=r("lVK7")},OMN4:function(e,t){e.exports=r("mtWM")},lVK7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("OMN4"),s=r.n(a);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function i(e){if(null===e||"object"!==n(e))return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(r){t[r]=i(e[r])}),t}function o(e){return Array.isArray(e)?e:[e]}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p=function(){function e(){d(this,e),this.errors={}}return m(e,[{key:"set",value:function e(t,r){"object"===u(t)?this.errors=t:this.set(c({},this.errors,l({},t,o(r))))}},{key:"all",value:function e(){return this.errors}},{key:"has",value:function e(t){return this.errors.hasOwnProperty(t)}},{key:"hasAny",value:function e(){for(var t=this,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return a.some(function(e){return t.has(e)})}},{key:"any",value:function e(){return Object.keys(this.errors).length>0}},{key:"get",value:function e(t){if(this.has(t))return this.getAll(t)[0]}},{key:"getAll",value:function e(t){return o(this.errors[t]||[])}},{key:"only",value:function e(){for(var t=this,r=[],a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return s.forEach(function(e){var a=t.get(e);a&&r.push(a)}),r}},{key:"flatten",value:function e(){return Object.values(this.errors).reduce(function(e,t){return e.concat(t)},[])}},{key:"clear",value:function e(t){var r=this,a={};t&&Object.keys(this.errors).forEach(function(e){e!==t&&(a[e]=r.errors[e])}),this.set(a)}}]),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}var b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,e),this.busy=!1,this.successful=!1,this.errors=new p,this.originalData=i(t),Object.assign(this,t)}return x(e,[{key:"fill",value:function e(t){var r=this;this.keys().forEach(function(e){r[e]=t[e]})}},{key:"data",value:function e(){var t=this;return this.keys().reduce(function(e,r){return h({},e,_({},r,t[r]))},{})}},{key:"keys",value:function t(){return Object.keys(this).filter(function(t){return!e.ignore.includes(t)})}},{key:"startProcessing",value:function e(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function e(){this.busy=!1,this.successful=!0}},{key:"clear",value:function e(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function t(){var r=this;Object.keys(this).filter(function(t){return!e.ignore.includes(t)}).forEach(function(e){r[e]=i(r.originalData[e])})}},{key:"get",value:function e(t){return this.submit("get",t)}},{key:"post",value:function e(t){return this.submit("post",t)}},{key:"patch",value:function e(t){return this.submit("patch",t)}},{key:"put",value:function e(t){return this.submit("put",t)}},{key:"delete",value:function e(t){return this.submit("delete",t)}},{key:"submit",value:function e(t,r){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var i="get"===t?{params:this.data()}:this.data();return new Promise(function(e,o){s.a.request(h({url:a.route(r),method:t,data:i},n)).then(function(t){a.finishProcessing(),e(t)}).catch(function(e){a.busy=!1,e.response&&a.errors.set(a.extractErrors(e.response)),o(e)})})}},{key:"extractErrors",value:function t(r){return r.data&&"object"===v(r.data)?r.data.errors?h({},r.data.errors):r.data.message?{error:r.data.message}:h({},r.data):{error:e.errorMessage}}},{key:"route",value:function t(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r;return e.routes.hasOwnProperty(r)&&(s=decodeURI(e.routes[r])),"object"!==v(a)&&(a={id:a}),Object.keys(a).forEach(function(e){s=s.replace("{".concat(e,"}"),a[e])}),s}},{key:"onKeydown",value:function e(t){t.target.name&&this.errors.clear(t.target.name)}}]),e}();b.routes={},b.errorMessage="Something went wrong. Please try again.",b.ignore=["busy","successful","errors","originalData"];var k=b,w,C,T;function $(e,t,r,a,s,n,i,o){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c="function"==typeof e?e.options:e,u;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId=n),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):s&&(u=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function e(t,r){return u.call(r),d(t,r)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}var E=!1,S=null,O=null,M=null,j,P=$({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.has(e.field)?r("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:e._s(e.form.errors.get(e.field))}}):e._e()},[],!1,null,null,null).exports,N={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function e(){this.dismissible&&this.form.clear()}}},z,A,F,D=!1,B=null,L=null,U=null,I,q=$({name:"alert-error",extends:N,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[e.form.errors.has("error")?r("div",{domProps:{innerHTML:e._s(e.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},[],!1,null,null,null).exports,R,V,H,K=!1,X=null,Z=null,G=null,W,Y=$({name:"alert-errors",extends:N,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.message?r("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),e._v(" "),r("ul",e._l(e.form.errors.flatten(),function(t){return r("li",{domProps:{innerHTML:e._s(t)}})}))]):e._e()},[],!1,null,null,null).exports,J,Q,ee,te=!1,re=null,ae=null,se=null,ne,ie=$({name:"alert-success",extends:N,props:{message:{type:String,default:""}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},[],!1,null,null,null).exports;r.d(t,"Form",function(){return k}),r.d(t,"Errors",function(){return p}),r.d(t,"HasError",function(){return P}),r.d(t,"AlertError",function(){return q}),r.d(t,"AlertErrors",function(){return Y}),r.d(t,"AlertSuccess",function(){return ie}),r.d(t,"default",function(){return k})}})},"2yrZ":function(e,t,r){function a(e){r("pwLK")}var s,n=null,i,o=!1,l,c=null,u=null,d=r("VU/8")(null,r("dgbI"),!1,a,null,null);e.exports=d.exports},"8/zB":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("2yrZ"),s=r.n(a),n=r("gvVL"),i=r("2gGM"),o=r.n(i),l=r("e7x4"),c=r.n(l);t.default={components:{ModalLayout:s.a},mixins:[n.a],data:function e(){return{form:new i.Form({type:!1,client_id:null,client_name:null,customer_id:null,customer_name:null,date_delivered:null,start_time:"",end_time:"",prep_time:0,travel_time:0,clean_up_time:0,total_time:0,rate:0,surcharge:0,total_charges:"",notes:null,do_address_1:null,do_address_2:null,do_city:null,do_state:null,do_zip:null,pu_address_1:null,pu_address_2:null,pu_city:null,pu_state:null,pu_zip:null,packages:[]}),date_delivered_modal:!1,customers:[],clients:[],client:{id:null,active:!1,name:null,do_address_1:null,do_address_2:null,do_city:null,do_state:null,do_zip:null},packages:[],selected:[],unknownClient:{active:!1,address_1:null,address_2:null,city:null,id:1,name:"Unknown Client",state:null,zip:null}}},watch:{customers:{handler:function e(t){},deep:!0},"form.customer_id":{handler:function e(t){var r=this,a=null,s=null;if(void 0!=t){var n=_.find(this.customers,function(e){return e.id===t});this.clients=n.clients,_.remove(this.clients,{id:1}),this.clients.unshift(this.unknownClient),this.form.customer_name=n.name,this.form.client_name=null,this.form.client_id=null,a=t,s=n.name}else this.clients=[],this.clients.push(this.unknownClient),this.form.customer_id=null,this.form.customer_name=null,this.form.client_name=null,this.form.client_id=null},deep:!1},"form.client_name":{handler:function e(t){var r=this,a=null,s=t;if(null!=t||void 0!=t){if(this.clients.length>0){var n=_.find(this.clients,function(e){return e.name==t});void 0!=n&&(this.form.client_name=n.name,this.form.client_id=n.id,a=n.id,s=n.name,this.getClientPackages(),this.setDropOffAddress(n))}}else this.form.client_id=null,this.form.client_name=null},deep:!1},"form.start_time":{handler:function e(t){this.debouncedComputeTotal()},deep:!1},"form.end_time":{handler:function e(t){this.debouncedComputeTotal()},deep:!1},"form.prep_time":{handler:function e(t){this.debouncedComputeTotal()},deep:!1},"form.travel_time":{handler:function e(t){this.debouncedComputeTotal()},deep:!1},"form.clean_up_time":{handler:function e(t){this.debouncedComputeTotal()},deep:!1},"form.rate":{handler:function e(t){this.computeTotalCharge()},deep:!1},"form.surcharge":{handler:function e(t){this.computeTotalCharge()},deep:!1}},created:function e(){this.debouncedComputeTotal=_.debounce(this.computeTotal,2e3)},mounted:function e(){this.getInitialData(),this.form.date_delivered=moment().format("YYYY-MM-DD"),this.form.type="field_transfer"},methods:{toggleAll:function e(){var t=this;0===this.selected.length?this.selected=this.packages.map(function(e){return e.id}):this.selected=[],this.form.packages=this.selected},workingTime:function e(){var t=this.form.start_time,r=this.form.end_time,a=0,s=0,n=0,i=0;if(null!==t){var o=(t.match(/\d/g)||[]).length;o>1&&(a=parseInt(t.substring(0,2))),o>3&&(s=parseInt(t.substring(2,4)))}if(null!==r){var l=(r.match(/\d/g)||[]).length;l>1&&(n=parseInt(r.substring(0,2))),l>3&&(i=parseInt(r.substring(2,4)))}var c=0,u=0;return(c=n-a)<0&&(c=0),(u=Math.abs(i-s)/60)<0&&(u=0),c+u},setDropOffAddress:function e(t){this.client={id:t.id,active:t.active,name:t.name,do_address_1:t.address_1,do_address_2:t.address_2,do_city:t.city,do_state:t.state,do_zip:t.zip},this.form.do_address_1=t.address_1,this.form.do_address_2=t.address_2,this.form.do_city=t.city,this.form.do_state=t.state,this.form.do_zip=t.zip},computeTotal:function e(){var t=this.workingTime(),r=this.form.prep_time?this.form.prep_time:0,a=this.form.travel_time?this.form.travel_time:0,s=this.form.clean_up_time?this.form.clean_up_time:0;console.log("working_time",parseFloat(t)),console.log("prep_time",parseFloat(r)),console.log("travel_time",parseFloat(a)),console.log("clean_up_time",parseFloat(s));var n=0;return n+=parseFloat(t),n+=parseFloat(r),n+=parseFloat(a),(n+=parseFloat(s))<0&&(n=0),this.form.total_time=n.toFixed(4),n},computeTotalCharge:function e(){var t=parseFloat(this.form.total_time),r=parseFloat(this.form.rate),a=parseFloat(this.form.surcharge)/100;null!==this.form.surcharge&&""!==this.form.surcharge||(a=0);var s=t*r,n=0;n=s+a*s,this.form.total_charges=n.toFixed(4)},getText:function e(t){return t.dsg_id+" | "+t.style_no+" | "+t.description},getInitialData:function e(){var t=this;axios.get(route("api.logistics.getInitialData")).then(function(e){t.customers=e.data.data.customers})},getClientPackages:function e(){var t=this;axios.get(route("api.logistics.getClientPackages",{client:this.form.client_id})).then(function(e){t.form.packages=[],t.packages=e.data})},submit:function e(){var t=this;this.$validator.validateAll().then(function(e){var r;e?t.createLogistics():c.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Validation Error",html:'<p class="title">Please Fix Form Errors</p>',type:"warning",confirmButtonText:"Back"})})},createLogistics:function e(){var t=this;t.form.busy=!0,"field_transfer"===t.form.type&&delete t.form.packages,"delivery_ticket"===t.form.type&&(delete t.form.pu_address_1,delete t.form.pu_address_2,delete t.form.pu_city,delete t.form.pu_state,delete t.form.pu_zip),t.form.post(route("api.logistics.create"),t.form).then(function(e){var r;console.log(e.data),t.$validator.reset(),c.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success!",html:'<p class="title">Ticket Has Been Created!</p>',type:"success",confirmButtonText:"Ok"}),t.$nextTick(function(){return t.$router.push({name:"tickets"})})}).catch(function(e){var r;console.log(e.response.data),"field_transfer"===t.form.type&&(t.form.packages=[]),"delivery_ticket"===t.form.type&&(t.form.pu_address_1="",t.form.pu_address_2="",t.form.pu_city="",t.form.pu_state="",t.form.pu_zip=""),c.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Validation Error!",html:'<p class="title">Please Complete Form To Submit!</p>',type:"error",confirmButtonText:"Ok"})})},redirectBack:function e(){var t=this;t.$nextTick(function(){return t.$router.push({name:"tickets"})})}}}},EfXT:function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal-layout",{staticClass:"white"},[r("v-card",{attrs:{flat:!0}},[r("v-toolbar",{staticClass:"primary",attrs:{fixed:"",app:""}},[r("v-btn",{attrs:{flat:"",icon:"",color:"white"},nativeOn:{click:function(t){e.redirectBack()}}},[r("v-icon",[e._v("arrow_back")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-title",{staticClass:"text-xs-center white--text"},[e._v("Create New Ticket")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{loading:e.form.busy,disabled:e.errors.any()||e.form.busy,flat:"",color:"white"},nativeOn:{click:function(t){e.submit()}}},[e._v("\n          Save\n          "),r("v-icon",{attrs:{right:""}},[e._v("save")])],1)],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:"","my-0":"","py-0":"","mx-3":"","px-3":""}},[r("v-flex",{attrs:{xs12:"",lg2:"","offset-lg1":""}},[r("v-subheader",{staticClass:"indigo--text",staticStyle:{"margin-left":"-15px"}},[e._v("\n          What Type Of Ticket Is This?\n        ")]),e._v(" "),r("v-radio-group",{staticStyle:{"margin-top":"-15px"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("v-radio",{attrs:{value:"delivery_ticket",label:"Delivery Ticket"}}),e._v(" "),r("v-radio",{attrs:{value:"field_transfer",label:"Field Transfer"}})],1)],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg3:""}},[r("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"error--text":e.hasErrors("customer")},attrs:{items:e.customers,"error-messages":e.errorMessages("customer"),"item-text":"name","item-value":"id",required:"",label:"Choose Customer",light:"",chips:"","prepend-icon":"supervised_user_circle","data-vv-name":"customer"},model:{value:e.form.customer_id,callback:function(t){e.$set(e.form,"customer_id",t)},expression:"form.customer_id"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg3:""}},[r("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"error--text":e.hasErrors("client")},attrs:{items:e.clients,"error-messages":e.errorMessages("client"),"item-text":"name","item-value":"name",chips:"",light:"",dense:"",required:"",label:"Choose Client or Type Name","prepend-icon":"fa-users","data-vv-name":"client"},model:{value:e.form.client_name,callback:function(t){e.$set(e.form,"client_name",t)},expression:"form.client_name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-dialog",{ref:"date_delivered",attrs:{"return-value":e.form.date_delivered,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(t){e.$set(e.form,"date_delivered",t)}},model:{value:e.date_delivered_modal,callback:function(t){e.date_delivered_modal=t},expression:"date_delivered_modal"}},[r("v-text-field",{staticStyle:{"margin-top":"26px"},attrs:{slot:"activator",label:"Delivery Date","prepend-icon":"event_available",readonly:""},slot:"activator",model:{value:e.form.date_delivered,callback:function(t){e.$set(e.form,"date_delivered",t)},expression:"form.date_delivered"}}),e._v(" "),r("v-date-picker",{attrs:{scrollable:""},model:{value:e.form.date_delivered,callback:function(t){e.$set(e.form,"date_delivered",t)},expression:"form.date_delivered"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.date_delivered_modal=!1}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.date_delivered.save(e.form.date_delivered)}}},[e._v("OK")])],1)],1)],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:"","offset-lg1":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/},expression:"{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/}"}],class:{"error--text":e.hasErrors("start_time")},attrs:{"error-messages":e.errorMessages("start_time"),light:"",label:"Start Time","prepend-icon":"timer","data-vv-name":"start_time"},model:{value:e.form.start_time,callback:function(t){e.$set(e.form,"start_time",t)},expression:"form.start_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/,min_value:e.form.start_time},expression:"{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/,min_value:form.start_time}"}],class:{"error--text":e.hasErrors("end_time")},attrs:{"error-messages":e.errorMessages("end_time"),light:"",label:"End Time","prepend-icon":"timer","data-vv-name":"end_time"},model:{value:e.form.end_time,callback:function(t){e.$set(e.form,"end_time",t)},expression:"form.end_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("prep_time")},attrs:{"error-messages":e.errorMessages("prep_time"),light:"",label:"Prep Time","prepend-icon":"access_time","data-vv-name":"prep_time"},model:{value:e.form.prep_time,callback:function(t){e.$set(e.form,"prep_time",t)},expression:"form.prep_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("travel_time")},attrs:{"error-messages":e.errorMessages("travel_time"),light:"",label:"Travel Time","prepend-icon":"access_time","data-vv-name":"travel_time"},model:{value:e.form.travel_time,callback:function(t){e.$set(e.form,"travel_time",t)},expression:"form.travel_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("clean_up_time")},attrs:{"error-messages":e.errorMessages("clean_up_time"),light:"",label:"Clean Up Time","prepend-icon":"access_time","data-vv-name":"clean_up_time"},model:{value:e.form.clean_up_time,callback:function(t){e.$set(e.form,"clean_up_time",t)},expression:"form.clean_up_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:"","offset-lg1":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("total_time")},attrs:{"error-messages":e.errorMessages("total_time"),light:"",readonly:"",disabled:"",label:"Total Time","prepend-icon":"av_timer","data-vv-name":"total_time",hint:"Total No. Of Hours","persistent-hint":""},model:{value:e.form.total_time,callback:function(t){e.$set(e.form,"total_time",t)},expression:"form.total_time"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("rate")},attrs:{"error-messages":e.errorMessages("rate"),light:"",label:"Rate","prepend-icon":"fa-money","data-vv-name":"rate",hint:"Delivery Charge Rate","persistent-hint":""},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg3:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("surcharge")},attrs:{"error-messages":e.errorMessages("surcharge"),light:"",label:"Surchage","prepend-icon":"money","append-icon":"fa-percent","data-vv-name":"surcharge",hint:"Percentage ie. 20% = 20","persistent-hint":""},model:{value:e.form.surcharge,callback:function(t){e.$set(e.form,"surcharge",t)},expression:"form.surcharge"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg3:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{decimal:4,min_value:0},expression:"{ decimal:4, min_value:0 }"}],class:{"error--text":e.hasErrors("total_charges")},attrs:{"error-messages":e.errorMessages("total_charges"),light:"",readonly:"",disabled:"",label:"Total Charges","prepend-icon":"attach_money",suffix:"USD","data-vv-name":"total_charges",hint:"Delivery Fee","persistent-hint":""},model:{value:e.form.total_charges,callback:function(t){e.$set(e.form,"total_charges",t)},expression:"form.total_charges"}})],1)],1),e._v(" "),"field_transfer"===e.form.type?r("v-layout",{attrs:{row:"",wrap:"","my-0":"","py-0":"","mx-3":"","px-3":""}},[r("v-flex",{attrs:{xs12:"",lg10:"","offset-lg1":""}},[r("v-alert",{staticClass:"text-xs-center",attrs:{value:!0,type:"info",color:"secondary","my-0":"","py-0":"","mx-3":"","px-3":""}},[e._v("\n          Pick Up Address\n        ")])],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:"","offset-lg1":""}},[r("v-text-field",{attrs:{light:"",label:"Address 1","prepend-icon":"looks_one"},model:{value:e.form.pu_address_1,callback:function(t){e.$set(e.form,"pu_address_1",t)},expression:"form.pu_address_1"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"Address 2","prepend-icon":"looks_two"},model:{value:e.form.pu_address_2,callback:function(t){e.$set(e.form,"pu_address_2",t)},expression:"form.pu_address_2"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"City","prepend-icon":"location_city"},model:{value:e.form.pu_city,callback:function(t){e.$set(e.form,"pu_city",t)},expression:"form.pu_city"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"State","prepend-icon":"map"},model:{value:e.form.pu_state,callback:function(t){e.$set(e.form,"pu_state",t)},expression:"form.pu_state"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^\d{5}(?:[-\s]\d{4})?$/},expression:"{ regex: /^\\d{5}(?:[-\\s]\\d{4})?$/ }"}],class:{"error--text":e.hasErrors("pu_zip")},attrs:{"error-messages":e.errorMessages("pu_zip"),light:"",label:"Zip","prepend-icon":"markunread_mailbox","data-vv-name":"pu_zip"},model:{value:e.form.pu_zip,callback:function(t){e.$set(e.form,"pu_zip",t)},expression:"form.pu_zip"}})],1)],1):e._e(),e._v(" "),r("v-layout",{attrs:{row:"",wrap:"","my-0":"","py-0":"","mx-3":"","px-3":""}},[r("v-flex",{attrs:{xs12:"",lg10:"","offset-lg1":""}},[r("span",{staticClass:"text-xs-center title"}),e._v(" "),r("v-alert",{staticClass:"text-xs-center",attrs:{value:!0,type:"info",color:"secondary","my-0":"","py-0":"","mx-3":"","px-3":""}},[e._v("\n          Drop Off Address\n        ")])],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:"","offset-lg1":""}},[r("v-text-field",{attrs:{light:"",label:"Address 1","prepend-icon":"looks_one"},model:{value:e.form.do_address_1,callback:function(t){e.$set(e.form,"do_address_1",t)},expression:"form.do_address_1"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"Address 2","prepend-icon":"looks_two"},model:{value:e.form.do_address_2,callback:function(t){e.$set(e.form,"do_address_2",t)},expression:"form.do_address_2"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"City","prepend-icon":"location_city"},model:{value:e.form.do_city,callback:function(t){e.$set(e.form,"do_city",t)},expression:"form.do_city"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{attrs:{light:"",label:"State","prepend-icon":"map"},model:{value:e.form.do_state,callback:function(t){e.$set(e.form,"do_state",t)},expression:"form.do_state"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",lg2:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^\d{5}(?:[-\s]\d{4})?$/},expression:"{ regex: /^\\d{5}(?:[-\\s]\\d{4})?$/ }"}],class:{"error--text":e.hasErrors("do_zip")},attrs:{"error-messages":e.errorMessages("do_zip"),light:"",label:"Zip","prepend-icon":"markunread_mailbox","data-vv-name":"do_zip"},model:{value:e.form.do_zip,callback:function(t){e.$set(e.form,"do_zip",t)},expression:"form.do_zip"}})],1)],1),e._v(" "),"delivery_ticket"===e.form.type?r("v-layout",{attrs:{row:"",wrap:"","my-0":"","py-0":"","mx-3":"","px-3":""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":""}},[r("v-subheader",[e._v("\n          Items To Be Delivered ("+e._s(e.packages.length)+")\n        ")]),e._v(" "),e.packages.length>0?r("v-btn",{attrs:{color:"secondary"},on:{click:e.toggleAll}},[0===e.selected.length?r("span",[e._v("Select All")]):r("span",[e._v("Unselect All")])]):e._e(),e._v(" "),r("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"error--text":e.hasErrors("packages")},attrs:{items:e.packages,"error-messages":e.errorMessages("packages"),"item-text":e.getText,"item-value":"id",hint:"Choose Packages To Be Delivered","persistent-hint":"","no-data-text":"No Client's Packages For Delivery",required:"","max-height":"auto",light:"",outline:"",tags:"",chips:"","deletable-chips":"","full-width":"",multiple:"","multi-line":"",dense:"",auto:"","hide-selected":"","small-chips":"",clearable:"","data-vv-name":"packages"},model:{value:e.form.packages,callback:function(t){e.$set(e.form,"packages",t)},expression:"form.packages"}})],1)],1):e._e(),e._v(" "),r("v-layout",{attrs:{row:"",wrap:"","my-0":"","py-0":"","mx-3":"","px-3":""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":""}},[r("v-subheader",[e._v("\n          Notes:\n        ")]),e._v(" "),r("v-textarea",{attrs:{counter:"",maxlength:"255","full-width":"",outline:"",hint:"(Optional)","persistent-hint":""},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}})],1)],1)],1)],1)},a=[];e.exports={render:r,staticRenderFns:a}},dgbI:function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{standalone:""}},[r("v-content",{staticClass:"white"},[r("v-container",{staticClass:"pa-0 ma-0",attrs:{transition:"slide-x-transition",fluid:""}},[r("v-card",{attrs:{flat:!0}},[e._t("toolbar"),e._v(" "),e._t("default")],2)],1),e._v(" "),e._t("footer")],2)],1)},a=[];e.exports={render:r,staticRenderFns:a}},gvVL:function(e,t,r){"use strict";t.a={methods:{errorMessages:function e(t){return this.errors.collect(t).concat(this.form.errors.only(t))},hasErrors:function e(t){var r;return this.errors.collect(t).concat(this.form.errors.only(t)).length>0}}}},pwLK:function(e,t,r){var a=r("zr7H");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=r("rjj0")("57bf4ea8",a,!0,{})},rjj0:function(e,t,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=r("tTVk"),n={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var r=e[t],a=n[r.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(_(r.parts[s]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(_(r.parts[s]));n[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function _(e){var t,r,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(c)return u;a.parentNode.removeChild(a)}if(m){var s=l++;a=o||(o=v()),t=y.bind(null,a,s,!1),r=y.bind(null,a,s,!0)}else a=v(),t=x.bind(null,a),r=function(){a.parentNode.removeChild(a)};return t(e),function a(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else r()}}e.exports=function(e,t,r,a){c=r,d=a||{};var i=s(e,t);return p(i),function t(r){for(var a=[],o=0;o<i.length;o++){var l=i[o],c;(c=n[l.id]).refs--,a.push(c)}r?p(i=s(e,r)):i=[];for(var o=0;o<a.length;o++){var c;if(0===(c=a[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete n[c.id]}}}};var h=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")}),g;function y(e,t,r,a){var s=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=h(t,s);else{var n=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(n,i[t]):e.appendChild(n)}}function x(e,t){var r=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(f,t.id),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},tTVk:function(e,t){e.exports=function e(t,r){for(var a=[],s={},n=0;n<r.length;n++){var i=r[n],o=i[0],l,c,u,d={id:t+":"+n,css:i[1],media:i[2],sourceMap:i[3]};s[o]?s[o].parts.push(d):a.push(s[o]={id:o,parts:[d]})}return a}},zXW5:function(e,t,r){var a,s,n,i=!1,o=null,l=null,c=null,u=r("VU/8")(r("8/zB"),r("EfXT"),!1,null,null,null);e.exports=u.exports},zr7H:function(e,t,r){(t=e.exports=r("FZ+f")(!1)).push([e.i,".v-messages__message{color:#e57373}",""])}});