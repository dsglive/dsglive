webpackJsonp([44],{"2gGM":function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}({0:function(e,t,r){e.exports=r("lVK7")},OMN4:function(e,t){e.exports=r("mtWM")},lVK7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("OMN4"),s=r.n(n);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function a(e){if(null===e||"object"!==o(e))return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(r){t[r]=a(e[r])}),t}function i(e){return Array.isArray(e)?e:[e]}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var p=function(){function e(){f(this,e),this.errors={}}return m(e,[{key:"set",value:function e(t,r){"object"===c(t)?this.errors=t:this.set(u({},this.errors,l({},t,i(r))))}},{key:"all",value:function e(){return this.errors}},{key:"has",value:function e(t){return this.errors.hasOwnProperty(t)}},{key:"hasAny",value:function e(){for(var t=this,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return n.some(function(e){return t.has(e)})}},{key:"any",value:function e(){return Object.keys(this.errors).length>0}},{key:"get",value:function e(t){if(this.has(t))return this.getAll(t)[0]}},{key:"getAll",value:function e(t){return i(this.errors[t]||[])}},{key:"only",value:function e(){for(var t=this,r=[],n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return s.forEach(function(e){var n=t.get(e);n&&r.push(n)}),r}},{key:"flatten",value:function e(){return Object.values(this.errors).reduce(function(e,t){return e.concat(t)},[])}},{key:"clear",value:function e(t){var r=this,n={};t&&Object.keys(this.errors).forEach(function(e){e!==t&&(n[e]=r.errors[e])}),this.set(n)}}]),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,e),this.busy=!1,this.successful=!1,this.errors=new p,this.originalData=a(t),Object.assign(this,t)}return _(e,[{key:"fill",value:function e(t){var r=this;this.keys().forEach(function(e){r[e]=t[e]})}},{key:"data",value:function e(){var t=this;return this.keys().reduce(function(e,r){return y({},e,h({},r,t[r]))},{})}},{key:"keys",value:function t(){return Object.keys(this).filter(function(t){return!e.ignore.includes(t)})}},{key:"startProcessing",value:function e(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function e(){this.busy=!1,this.successful=!0}},{key:"clear",value:function e(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function t(){var r=this;Object.keys(this).filter(function(t){return!e.ignore.includes(t)}).forEach(function(e){r[e]=a(r.originalData[e])})}},{key:"get",value:function e(t){return this.submit("get",t)}},{key:"post",value:function e(t){return this.submit("post",t)}},{key:"patch",value:function e(t){return this.submit("patch",t)}},{key:"put",value:function e(t){return this.submit("put",t)}},{key:"delete",value:function e(t){return this.submit("delete",t)}},{key:"submit",value:function e(t,r){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var a="get"===t?{params:this.data()}:this.data();return new Promise(function(e,i){s.a.request(y({url:n.route(r),method:t,data:a},o)).then(function(t){n.finishProcessing(),e(t)}).catch(function(e){n.busy=!1,e.response&&n.errors.set(n.extractErrors(e.response)),i(e)})})}},{key:"extractErrors",value:function t(r){return r.data&&"object"===v(r.data)?r.data.errors?y({},r.data.errors):r.data.message?{error:r.data.message}:y({},r.data):{error:e.errorMessage}}},{key:"route",value:function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r;return e.routes.hasOwnProperty(r)&&(s=decodeURI(e.routes[r])),"object"!==v(n)&&(n={id:n}),Object.keys(n).forEach(function(e){s=s.replace("{".concat(e,"}"),n[e])}),s}},{key:"onKeydown",value:function e(t){t.target.name&&this.errors.clear(t.target.name)}}]),e}();x.routes={},x.errorMessage="Something went wrong. Please try again.",x.ignore=["busy","successful","errors","originalData"];var k=x,w,S,C;function E(e,t,r,n,s,o,a,i){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var u="function"==typeof e?e.options:e,c;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):s&&(c=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function e(t,r){return c.call(r),f(t,r)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}var O=!1,j=null,$=null,P=null,T,M=E({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.has(e.field)?r("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:e._s(e.form.errors.get(e.field))}}):e._e()},[],!1,null,null,null).exports,A={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function e(){this.dismissible&&this.form.clear()}}},L,N,B,R=!1,U=null,V=null,z=null,F,H=E({name:"alert-error",extends:A,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[e.form.errors.has("error")?r("div",{domProps:{innerHTML:e._s(e.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},[],!1,null,null,null).exports,q,I,D,K=!1,G=null,X=null,Z=null,J,W=E({name:"alert-errors",extends:A,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.message?r("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),e._v(" "),r("ul",e._l(e.form.errors.flatten(),function(t){return r("li",{domProps:{innerHTML:e._s(t)}})}))]):e._e()},[],!1,null,null,null).exports,Q,Y,ee,te=!1,re=null,ne=null,se=null,oe,ae=E({name:"alert-success",extends:A,props:{message:{type:String,default:""}}},function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},[],!1,null,null,null).exports;r.d(t,"Form",function(){return k}),r.d(t,"Errors",function(){return p}),r.d(t,"HasError",function(){return M}),r.d(t,"AlertError",function(){return H}),r.d(t,"AlertErrors",function(){return W}),r.d(t,"AlertSuccess",function(){return ae}),r.d(t,"default",function(){return k})}})},"2yrZ":function(e,t,r){function n(e){r("pwLK")}var s,o=null,a,i=!1,l,u=null,c=null,f=r("VU/8")(null,r("dgbI"),!1,n,null,null);e.exports=f.exports},"7E4D":function(e,t,r){var n,s,o,a=!1,i=null,l=null,u=null,c=r("VU/8")(r("XcuT"),r("aLys"),!1,null,null,null);e.exports=c.exports},XcuT:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2yrZ"),s=r.n(n),o=r("gvVL"),a=r("2gGM"),i=r.n(a),l=r("e7x4"),u=r.n(l);t.default={components:{ModalLayout:s.a},mixins:[o.a],data:function e(){return{form:new a.Form({name:null,active:!1,email:null,phone:null,address_1:null,address_2:null,city:null,state:null,zip:null,country:null,notes:null})}},methods:{getStatus:function e(t){return t?"Status: Active":"Status: Inactive"},submit:function e(){var t=this;this.$validator.validateAll().then(function(e){var r;e?t.createShipper():u.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Validation Error",html:'<p class="title">Please Fix Form Errors</p>',type:"warning",confirmButtonText:"Back"})})},createShipper:function e(){var t=this;t.form.busy=!0,t.form.post(route("api.shipper.create"),t.form).then(function(e){var r;console.log(e.data),t.$validator.reset(),u.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success!",html:'<p class="title">Shipper Has Been Created!</p>',type:"success",confirmButtonText:"Ok"}),t.$nextTick(function(){return t.$router.push({name:"shippers"})})}).catch(function(e){})},resetForm:function e(){var t=this;this.form=new a.Form({active:!1,name:null,email:null,phone:null,address_1:null,address_2:null,city:null,state:null,zip:null,country:null,notes:null})},redirectBack:function e(){var t=this;t.$nextTick(function(){return t.$router.push({name:"shippers"})})}}}},aLys:function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal-layout",{staticClass:"white"},[r("v-card",{attrs:{flat:!0}},[r("v-toolbar",{staticClass:"primary"},[r("v-btn",{attrs:{flat:"",icon:"",color:"white"},nativeOn:{click:function(t){e.redirectBack()}}},[r("v-icon",[e._v("arrow_back")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-title",{staticClass:"text-xs-center white--text"},[e._v("Shipper Creation Page")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{loading:e.form.busy,disabled:e.errors.any()||e.form.busy,flat:"",color:"white"},nativeOn:{click:function(t){e.submit()}}},[e._v("\n          Save\n          "),r("v-icon",{attrs:{right:""}},[e._v("save")])],1)],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],class:{"error--text":e.hasErrors("name")},attrs:{"error-messages":e.errorMessages("name"),label:"Name","prepend-icon":"fa-ship","data-vv-name":"name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-switch",{attrs:{label:e.getStatus(e.form.active)},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{email:!0},expression:"{ email: true }"}],class:{"error--text":e.hasErrors("email")},attrs:{"error-messages":e.errorMessages("email"),label:"Email","prepend-icon":"mail","data-vv-name":"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{attrs:{label:"Phone","prepend-icon":"phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{attrs:{label:"Address 1","prepend-icon":"looks_one"},model:{value:e.form.address_1,callback:function(t){e.$set(e.form,"address_1",t)},expression:"form.address_1"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{attrs:{label:"Address 2","prepend-icon":"looks_two"},model:{value:e.form.address_2,callback:function(t){e.$set(e.form,"address_2",t)},expression:"form.address_2"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{attrs:{label:"City","prepend-icon":"location_city"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{attrs:{label:"State","prepend-icon":"map"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^\d{5}(?:[-\s]\d{4})?$/},expression:"{ regex: /^\\d{5}(?:[-\\s]\\d{4})?$/ }"}],class:{"error--text":e.hasErrors("zip")},attrs:{"error-messages":e.errorMessages("zip"),label:"Zip","prepend-icon":"markunread_mailbox","data-vv-name":"zip"},model:{value:e.form.zip,callback:function(t){e.$set(e.form,"zip",t)},expression:"form.zip"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-textarea",{attrs:{color:"teal"},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}},[r("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n            Notes "),r("small",[e._v("(optional)")])])])],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-btn",{attrs:{loading:e.form.busy,disabled:e.errors.any()||e.form.busy,block:"",color:"accent"},on:{click:function(t){e.submit()}}},[e._v("\n          Save "),r("v-icon",{attrs:{right:""}},[e._v("save")])],1)],1)],1)],1)],1)},n=[];e.exports={render:r,staticRenderFns:n}},dgbI:function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{standalone:""}},[r("v-content",{staticClass:"white"},[r("v-container",{staticClass:"pa-0 ma-0",attrs:{transition:"slide-x-transition",fluid:""}},[r("v-card",{attrs:{flat:!0}},[e._t("toolbar"),e._v(" "),e._t("default")],2)],1),e._v(" "),e._t("footer")],2)],1)},n=[];e.exports={render:r,staticRenderFns:n}},gvVL:function(e,t,r){"use strict";t.a={methods:{errorMessages:function e(t){return this.errors.collect(t).concat(this.form.errors.only(t))},hasErrors:function e(t){var r;return this.errors.collect(t).concat(this.form.errors.only(t)).length>0}}}},pwLK:function(e,t,r){var n=r("zr7H");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("rjj0")("57bf4ea8",n,!0,{})},rjj0:function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=r("tTVk"),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,u=!1,c=function(){},f=null,d="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var r=e[t],n=o[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(h(r.parts[s]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],s=0;s<r.parts.length;s++)a.push(h(r.parts[s]));o[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(m){var s=l++;n=i||(i=v()),t=g.bind(null,n,s,!1),r=g.bind(null,n,s,!0)}else n=v(),t=_.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function n(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else r()}}e.exports=function(e,t,r,n){u=r,f=n||{};var a=s(e,t);return p(a),function t(r){for(var n=[],i=0;i<a.length;i++){var l=a[i],u;(u=o[l.id]).refs--,n.push(u)}r?p(a=s(e,r)):a=[];for(var i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}};var y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")}),b;function g(e,t,r,n){var s=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,s);else{var o=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function _(e,t){var r=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(d,t.id),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},tTVk:function(e,t){e.exports=function e(t,r){for(var n=[],s={},o=0;o<r.length;o++){var a=r[o],i=a[0],l,u,c,f={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};s[i]?s[i].parts.push(f):n.push(s[i]={id:i,parts:[f]})}return n}},zr7H:function(e,t,r){(t=e.exports=r("FZ+f")(!1)).push([e.i,".v-messages__message{color:#e57373}",""])}});