webpackJsonp([42],{"2gGM":function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=0)}({0:function(t,e,r){t.exports=r("lVK7")},OMN4:function(t,e){t.exports=r("mtWM")},lVK7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("OMN4"),s=r.n(n);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){if(null===t||"object"!==o(t))return t;var e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(function(r){e[r]=i(t[r])}),e}function a(t){return Array.isArray(t)?t:[t]}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,r,n;return e=t,(r=[{key:"set",value:function(t,e){var r,n,s;"object"===c(t)?this.errors=t:this.set(u({},this.errors,(r={},n=t,s=a(e),n in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r)))}},{key:"all",value:function(){return this.errors}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"hasAny",value:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.some(function(e){return t.has(e)})}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.has(t))return this.getAll(t)[0]}},{key:"getAll",value:function(t){return a(this.errors[t]||[])}},{key:"only",value:function(){for(var t=this,e=[],r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return n.forEach(function(r){var n=t.get(r);n&&e.push(n)}),e}},{key:"flatten",value:function(){return Object.values(this.errors).reduce(function(t,e){return t.concat(e)},[])}},{key:"clear",value:function(t){var e=this,r={};t&&Object.keys(this.errors).forEach(function(n){n!==t&&(r[n]=e.errors[n])}),this.set(r)}}])&&l(e.prototype,r),n&&l(e,n),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.busy=!1,this.successful=!1,this.errors=new f,this.originalData=i(e),Object.assign(this,e)}var e,r,n;return e=t,(r=[{key:"fill",value:function(t){var e=this;this.keys().forEach(function(r){e[r]=t[r]})}},{key:"data",value:function(){var t=this;return this.keys().reduce(function(e,r){return v({},e,function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},r,t[r]))},{})}},{key:"keys",value:function(){return Object.keys(this).filter(function(e){return!t.ignore.includes(e)})}},{key:"startProcessing",value:function(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function(){this.busy=!1,this.successful=!0}},{key:"clear",value:function(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function(){var e=this;Object.keys(this).filter(function(e){return!t.ignore.includes(e)}).forEach(function(t){e[t]=i(e.originalData[t])})}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var o="get"===t?{params:this.data()}:this.data();return new Promise(function(i,a){s.a.request(v({url:r.route(e),method:t,data:o},n)).then(function(t){r.finishProcessing(),i(t)}).catch(function(t){r.busy=!1,t.response&&r.errors.set(r.extractErrors(t.response)),a(t)})})}},{key:"extractErrors",value:function(e){return e.data&&"object"===d(e.data)?e.data.errors?v({},e.data.errors):e.data.message?{error:e.data.message}:v({},e.data):{error:t.errorMessage}}},{key:"route",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;return t.routes.hasOwnProperty(e)&&(n=decodeURI(t.routes[e])),"object"!==d(r)&&(r={id:r}),Object.keys(r).forEach(function(t){n=n.replace("{".concat(t,"}"),r[t])}),n}},{key:"onKeydown",value:function(t){t.target.name&&this.errors.clear(t.target.name)}}])&&h(e.prototype,r),n&&h(e,n),t}();p.routes={},p.errorMessage="Something went wrong. Please try again.",p.ignore=["busy","successful","errors","originalData"];var m=p;function y(t,e,r,n,s,o,i,a){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(t,e){return c.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var b=y({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var t=this.$createElement,e=this._self._c||t;return this.form.errors.has(this.field)?e("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:this._s(this.form.errors.get(this.field))}}):this._e()},[],!1,null,null,null).exports,g={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.dismissible&&this.form.clear()}}},_=y({name:"alert-error",extends:g,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[t.form.errors.has("error")?r("div",{domProps:{innerHTML:t._s(t.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports,k=y({name:"alert-errors",extends:g,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t.message?r("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t._v(" "),r("ul",t._l(t.form.errors.flatten(),function(e){return r("li",{domProps:{innerHTML:t._s(e)}})}))]):t._e()},[],!1,null,null,null).exports,x=y({name:"alert-success",extends:g,props:{message:{type:String,default:""}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[r("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports;r.d(e,"Form",function(){return m}),r.d(e,"Errors",function(){return f}),r.d(e,"HasError",function(){return b}),r.d(e,"AlertError",function(){return _}),r.d(e,"AlertErrors",function(){return k}),r.d(e,"AlertSuccess",function(){return x}),r.d(e,"default",function(){return m})}})},"2yrZ":function(t,e,r){var n=r("VU/8")(null,r("tfR4"),!1,null,null,null);t.exports=n.exports},"MU/S":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal-layout",{staticClass:"white"},[r("v-card",{attrs:{flat:!0}},[r("v-toolbar",{staticClass:"primary"},[r("v-btn",{attrs:{flat:"",icon:"",color:"white"},nativeOn:{click:function(e){t.redirectBack()}}},[r("v-icon",[t._v("arrow_back")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-title",{staticClass:"text-xs-center white--text"},[t._v("Edit Bin")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{loading:t.form.busy,disabled:t.errors.any()||t.form.busy,flat:"",color:"white"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n          Save\n          "),r("v-icon",{attrs:{right:""}},[t._v("save")])],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,alpha_num:!0},expression:"{ required: true,alpha_num: true }"}],class:{"error--text":t.hasErrors("code")},attrs:{"error-messages":t.errorMessages("code"),label:"Code","prepend-icon":"view_module","data-vv-name":"code"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-switch",{attrs:{label:t.getStatus(t.form.active)},model:{value:t.form.active,callback:function(e){t.$set(t.form,"active",e)},expression:"form.active"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-btn",{attrs:{loading:t.form.busy,disabled:t.errors.any()||t.form.busy,block:"",color:"accent"},on:{click:function(e){t.submit()}}},[t._v("\n          Save "),r("v-icon",{attrs:{right:""}},[t._v("save")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},gvVL:function(t,e,r){"use strict";e.a={methods:{errorMessages:function(t){return this.errors.collect(t).concat(this.form.errors.only(t))},hasErrors:function(t){return this.errors.collect(t).concat(this.form.errors.only(t)).length>0}}}},hXvc:function(t,e,r){var n=r("VU/8")(r("yWWy"),r("MU/S"),!1,null,null,null);t.exports=n.exports},tfR4:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{standalone:""}},[e("v-content",{staticClass:"white"},[e("v-container",{staticClass:"pa-0 ma-0",attrs:{transition:"slide-x-transition",fluid:""}},[e("v-card",{attrs:{flat:!0}},[this._t("toolbar"),this._v(" "),this._t("default")],2)],1),this._v(" "),this._t("footer")],2)],1)},staticRenderFns:[]}},yWWy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),s=r.n(n),o=r("exGp"),i=r.n(o),a=r("2yrZ"),u=r.n(a),c=r("gvVL"),l=r("2gGM"),f=(r.n(l),r("e7x4")),d=r.n(f);e.default={components:{ModalLayout:u.a},mixins:[c.a],props:{id:{type:String,required:!0}},data:function(){return{form:new l.Form({code:null,active:!1})}},mounted:function(){this.fetchBin()},methods:{getStatus:function(t){return t?"Status: Active":"Status: Inactive"},submit:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.updateBin():d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Validation Error",html:'<p class="title">Please Fix Form Errors</p>',type:"warning",confirmButtonText:"Back"})})},updateBin:function(){var t=this,e=t.id;t.form.busy=!0,t.form.post(route("api.bin.update",{id:e}),t.form).then(function(e){console.log(e.data),t.$validator.reset(),d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success!",html:'<p class="title">Bin Updated!</p>',type:"success",confirmButtonText:"Ok"}),t.$nextTick(function(){return t.$router.push({name:"bins"})})}).catch(function(t){})},fetchBin:function(){var t=i()(s.a.mark(function t(){var e,r,n,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.id,r=this,t.prev=2,t.next=5,axios.get(route("api.bin.edit",{id:e}));case 5:n=t.sent,r.form.code=n.data.data.code,r.form.active=n.data.data.active,t.next=16;break;case 10:t.prev=10,t.t0=t.catch(2),o=t.t0.errors,i=t.t0.message,o&&console.log("fetchBin:errors",o),i&&console.log("fetchBin:error-message",i);case 16:case"end":return t.stop()}},t,this,[[2,10]])}));return function(){return t.apply(this,arguments)}}(),redirectBack:function(){var t=this;t.$nextTick(function(){return t.$router.push({name:"bins"})})}}}}});
//# sourceMappingURL=42.js.map