webpackJsonp([28],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1zB9":function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("left-side-bar"),t._v(" "),r("app-nav-bar"),t._v(" "),r("v-content",{staticClass:"white",attrs:{transition:"slide-x-transition",fluid:"","pa-0":"","ma-0":""}},[t._t("default")],2)],1)},n=[];t.exports={render:r,staticRenderFns:n}},"2gGM":function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function e(){return t.default}:function e(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=0)}({0:function(t,e,r){t.exports=r("lVK7")},OMN4:function(t,e){t.exports=r("mtWM")},lVK7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("OMN4"),i=r.n(n);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function a(t){if(null===t||"object"!==o(t))return t;var e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(function(r){e[r]=a(t[r])}),e}function s(t){return Array.isArray(t)?t:[t]}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),t}var h=function(){function t(){f(this,t),this.errors={}}return v(t,[{key:"set",value:function t(e,r){"object"===u(e)?this.errors=e:this.set(c({},this.errors,l({},e,s(r))))}},{key:"all",value:function t(){return this.errors}},{key:"has",value:function t(e){return this.errors.hasOwnProperty(e)}},{key:"hasAny",value:function t(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return n.some(function(t){return e.has(t)})}},{key:"any",value:function t(){return Object.keys(this.errors).length>0}},{key:"get",value:function t(e){if(this.has(e))return this.getAll(e)[0]}},{key:"getAll",value:function t(e){return s(this.errors[e]||[])}},{key:"only",value:function t(){for(var e=this,r=[],n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return i.forEach(function(t){var n=e.get(t);n&&r.push(n)}),r}},{key:"flatten",value:function t(){return Object.values(this.errors).reduce(function(t,e){return t.concat(e)},[])}},{key:"clear",value:function t(e){var r=this,n={};e&&Object.keys(this.errors).forEach(function(t){t!==e&&(n[t]=r.errors[t])}),this.set(n)}}]),t}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e&&g(t.prototype,e),r&&g(t,r),t}var k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(this,t),this.busy=!1,this.successful=!1,this.errors=new h,this.originalData=a(e),Object.assign(this,e)}return b(t,[{key:"fill",value:function t(e){var r=this;this.keys().forEach(function(t){r[t]=e[t]})}},{key:"data",value:function t(){var e=this;return this.keys().reduce(function(t,r){return _({},t,m({},r,e[r]))},{})}},{key:"keys",value:function e(){return Object.keys(this).filter(function(e){return!t.ignore.includes(e)})}},{key:"startProcessing",value:function t(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function t(){this.busy=!1,this.successful=!0}},{key:"clear",value:function t(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function e(){var r=this;Object.keys(this).filter(function(e){return!t.ignore.includes(e)}).forEach(function(t){r[t]=a(r.originalData[t])})}},{key:"get",value:function t(e){return this.submit("get",e)}},{key:"post",value:function t(e){return this.submit("post",e)}},{key:"patch",value:function t(e){return this.submit("patch",e)}},{key:"put",value:function t(e){return this.submit("put",e)}},{key:"delete",value:function t(e){return this.submit("delete",e)}},{key:"submit",value:function t(e,r){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var a="get"===e?{params:this.data()}:this.data();return new Promise(function(t,s){i.a.request(_({url:n.route(r),method:e,data:a},o)).then(function(e){n.finishProcessing(),t(e)}).catch(function(t){n.busy=!1,t.response&&n.errors.set(n.extractErrors(t.response)),s(t)})})}},{key:"extractErrors",value:function e(r){return r.data&&"object"===p(r.data)?r.data.errors?_({},r.data.errors):r.data.message?{error:r.data.message}:_({},r.data):{error:t.errorMessage}}},{key:"route",value:function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r;return t.routes.hasOwnProperty(r)&&(i=decodeURI(t.routes[r])),"object"!==p(n)&&(n={id:n}),Object.keys(n).forEach(function(t){i=i.replace("{".concat(t,"}"),n[t])}),i}},{key:"onKeydown",value:function t(e){e.target.name&&this.errors.clear(e.target.name)}}]),t}();k.routes={},k.errorMessage="Something went wrong. Please try again.",k.ignore=["busy","successful","errors","originalData"];var x=k,w,C,S;function O(t,e,r,n,i,o,a,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var c="function"==typeof t?t.options:t,u;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function t(e,r){return u.call(r),f(e,r)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}var j=!1,$=null,A=null,P=null,E,R=O({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.errors.has(t.field)?r("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:t._s(t.form.errors.get(t.field))}}):t._e()},[],!1,null,null,null).exports,M={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function t(){this.dismissible&&this.form.clear()}}},T,B,U,I=!1,D=null,L=null,V=null,F,N=O({name:"alert-error",extends:M,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[t.form.errors.has("error")?r("div",{domProps:{innerHTML:t._s(t.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports,q,G,H,W=!1,z=null,X=null,Z=null,K,J=O({name:"alert-errors",extends:M,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t.message?r("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t._v(" "),r("ul",t._l(t.form.errors.flatten(),function(e){return r("li",{domProps:{innerHTML:t._s(e)}})}))]):t._e()},[],!1,null,null,null).exports,Q,Y,tt,et=!1,rt=null,nt=null,it=null,ot,at=O({name:"alert-success",extends:M,props:{message:{type:String,default:""}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[r("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports;r.d(e,"Form",function(){return x}),r.d(e,"Errors",function(){return h}),r.d(e,"HasError",function(){return R}),r.d(e,"AlertError",function(){return N}),r.d(e,"AlertErrors",function(){return J}),r.d(e,"AlertSuccess",function(){return at}),r.d(e,"default",function(){return x})}})},"2xzx":function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[r("v-toolbar-side-icon",{staticClass:"white--text",nativeOn:{click:function(e){e.stopPropagation(),t.toggleDrawer()}}}),t._v(" "),t.extension?r("v-toolbar-title",{staticClass:"text-xs-center ml-0 pl-3",class:t.$vuetify.breakpoint.width<=1264&&"pr-3",style:t.$vuetify.breakpoint.width>1264&&"width: 300px",attrs:{slot:"extension"},slot:"extension"},[t.showIcon?r("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),r("span",{staticClass:"hidden-md-and-down"},[r("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1):r("v-toolbar-title",{staticClass:"text-xs-center"},[t.showIcon?r("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),r("span",{staticClass:"hidden-md-and-down"},[r("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1),t._v(" "),r("v-spacer"),t._v(" "),t.showLogo?r("img",{staticClass:"hidden-md-and-up",attrs:{src:t.logo}}):t._e(),t._v(" "),r("v-spacer")],1)},n=[];t.exports={render:r,staticRenderFns:n}},"5t+f":function(t,e,r){var n,i,o,a=!1,s=null,l=null,c=null,u=r("VU/8")(r("EU3A"),r("yuWV"),!1,null,null,null);t.exports=u.exports},"7/uR":function(t,e,r){function n(t){r("AbWS")}var i,o,a,s=!1,l,c,u=null,f=r("VU/8")(r("f+SC"),r("V3I1"),!1,n,"data-v-9d2d5a76",null);t.exports=f.exports},"9qyG":function(t,e,r){(e=t.exports=r("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},AbWS:function(t,e,r){var n=r("Qkdk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("rjj0")("2ab3e8dc",n,!0,{})},Dd8w:function(t,e,r){"use strict";e.__esModule=!0;var n,i=o(r("woOf"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}},EU3A:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),o=r("7/uR"),a=r.n(o),s=r("NYxO"),l=r("PS5i"),c=r.n(l),u=r("deHX"),f=r.n(u),d,v=Object(s.b)("auth").mapState;e.default={components:{VLink:a.a,InventoryLinks:c.a,InvoiceLinks:f.a},data:function t(){return{drawer:!1}},computed:i()({},v({isAuthenticated:"isAuthenticated"})),created:function t(){var e=this;switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return this.drawer=!1;case"md":case"lg":case"xl":return this.drawer=!0}},mounted:function t(){var e=this;Bus.$on("toggleDrawer",function(){e.drawer=!e.drawer})}}},EpMA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"collections_bookmark",title:"Inventories",items:[{title:"All Unknown Report",href:"/reports/all-unknown-report",action:"fa-question-circle",auth:["admin"]},{title:"Unknown Customer",href:"/reports/unknown-customer",action:"supervised_user_circle",auth:["admin","warehouse"]},{title:"Unknown Client",href:"/reports/unknown-client",action:"fa-users",auth:["admin","warehouse","customer"]},{title:"Unknown Shipper",href:"/reports/unknown-shipper",action:"fa-ship",auth:["admin","warehouse"]},{title:"Damaged Report",href:"/reports/damaged",action:"broken_image",auth:["admin","warehouse","customer"]},{title:"Repaired Report",href:"/reports/repaired",action:"build",auth:["admin","warehouse","customer"]},{title:"Undelivered Report",href:"/reports/undelivered",action:"fa-truck",auth:["admin","warehouse","customer"]},{title:"Bin Report",href:"/reports/bin",action:"apps",auth:["admin"]},{title:"Customer Report",href:"/reports/customer",action:"local_library",auth:["admin"]},{title:"Client Report",href:"/reports/clients",action:"perm_contact_calendar",auth:["admin"]}]}]}},methods:{isActive:function t(e){return e.href===this.$route.path},loadview:function t(e){this.$router.push({path:""+e.href})}}}},IoXK:function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main-layout",[r("v-jumbotron",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("h2",{staticClass:"display-1"},[t._v("Customer Report")]),t._v(" "),r("v-divider")],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[r("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"error--text":t.hasErrors("customer")},attrs:{items:t.customers,"error-messages":t.errorMessages("customer"),"item-text":"name","item-value":"id",required:"",label:"Choose Customer",light:"","prepend-icon":"supervised_user_circle","data-vv-name":"customer",hint:"Choose Customer","persistent-hint":""},model:{value:t.form.customer_id,callback:function(e){t.$set(t.form,"customer_id",e)},expression:"form.customer_id"}})],1),t._v(" "),t.items.length>0?r("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[r("v-btn",{attrs:{color:"secondary",block:""},on:{click:function(e){t.viewPDF()}}},[t._v("\n            View As PDF\n            "),r("v-icon",{attrs:{color:"indigo lighten-4",right:""}},[t._v("\n              picture_as_pdf\n            ")])],1)],1):t._e(),t._v(" "),r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("h2",[t._v("Total Items: "+t._s(t.items.length))]),t._v(" "),r("h2",[t._v("Total Cube: "+t._s(t.total_cube))])])],1)],1)],1),t._v(" "),r("v-container",{staticStyle:{"margin-top":"-190px"},attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{light:"",flat:""}},[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":"search",label:"Search Packages","single-line":"","hide-details":"",light:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,pagination:t.pagination,"rows-per-page-items":[{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],"select-all":"","item-key":"id",expand:"","hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[r("tr",t._l(e.headers,function(e){return r("th",{key:e.text,class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"name":"",{"text-xs-left":"left"===e.align,"text-xs-right":"right"===e.align,"text-xs-center":"center"===e.align},t.$vuetify.breakpoint.width>=600&&"title"],on:{click:function(r){t.changeSort(e.value)}}},[r("span",[r("v-icon",[t._v("arrow_upward")]),t._v("\n              "+t._s(e.text)+"\n            ")],1)])}))]}},{key:"items",fn:function(e){return[r("tr",[r("td",{staticClass:"title text-xs-left",class:{"red--text":null===e.item.client_id||1===e.item.client_id,"accent--text":e.item.client_id>1}},[t._v("\n            "+t._s(e.item.client_name)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.dsg_id)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-center accent--text"},[t._v("\n            "+t._s(e.item.style_no)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-center accent--text"},[t._v("\n            "+t._s(e.item.description)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-left",class:{"red--text":null===e.item.shipper_id||1===e.item.shipper_id,"accent--text":e.item.shipper_id>1}},[t._v("\n            "+t._s(e.item.shipper_name)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.damage_description)+"\n          ")]),t._v(" "),r("td",{staticClass:"title text-xs-center accent--text"},[t._v("\n            "+t._s(e.item.cube)+"\n          ")])])]}},{key:"pageText",fn:function(e){var r=e.pageStart,n=e.pageStop;return[t._v("\n        From "+t._s(r)+" to "+t._s(n)+"\n      ")]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[r("template",{slot:"no-data"},[r("v-alert",{attrs:{value:!0,color:"blue-grey",icon:"warning"}},[t._v("\n          Opps! There are No Items Yet At the Selected Customer!\n        ")])],1),t._v(" "),r("v-alert",{attrs:{slot:"no-results",value:!0,color:"blue-grey",icon:"warning"},slot:"no-results"},[t._v('\n        Your search for "'+t._s(t.search)+'" found no results.\n      ')])],2)],1)],1)},n=[];t.exports={render:r,staticRenderFns:n}},JRPR:function(t,e,r){var n=r("jTAZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("rjj0")("19ca4adb",n,!0,{})},N76W:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("ockC"),i=r.n(n),o=r("5t+f"),a=r.n(o);e.default={components:{AppNavBar:i.a,LeftSideBar:a.a}}},NH3I:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),i=r.n(n),o=r("exGp"),a=r.n(o),s=r("onlB"),l=r.n(s),c=r("gvVL"),u=r("2gGM"),f=r.n(u),d=r("e7x4"),v=r.n(d);e.default={components:{MainLayout:l.a},mixins:[c.a],data:function t(){return{contentClass:{grey:!0,"lighten-4":!0,"accent--text":!0},dialog:!1,headers:[{text:"Client",value:"client_name",align:"left",sortable:!0},{text:"DSG#",value:"dsg_id",align:"left",sortable:!0},{text:"Style#",value:"style_no",align:"left",sortable:!0},{text:"Description",value:"description",align:"left",sortable:!0},{text:"Damage",value:"damage_description",align:"left",sortable:!0},{text:"Cube",value:"cube",align:"left",sortable:!0}],items:[],customers:[],selected:[],pagination:{sortBy:"client_name",rowPerPage:"all"},form:new u.Form({customer_id:""}),search:"",domain:window.location.hostname}},computed:{total_cube:function t(){var e=0;return this.items.forEach(function(t){e+=t.cube}),e.toFixed(4)+" cu.ft"}},watch:{items:{handler:function t(e){},deep:!0},"form.customer_id":function t(){this.fetchPackages()}},mounted:function t(){var e=this;this.getCustomers()},methods:{viewPDF:function t(){var e=window.location.protocol+"//"+window.location.hostname+"/pdf/customer-report/"+this.form.customer_id+"?sortBy="+this.pagination.sortBy+"&orderBy="+(this.pagination.descending?"DESC":"ASC");window.open(e)},getCustomers:function t(){var e=this;axios.get(route("api.dsg.getCustomers")).then(function(t){e.customers=t.data.data})},viewItem:function t(e){this.$router.push({name:"view-damaged-package",params:{id:""+e}})},fetchPackages:function(){var t=a()(i.a.mark(function t(){var e,r,n,o;return i.a.wrap(function t(i){for(;;)switch(i.prev=i.next){case 0:return(e=this).form.busy=!0,i.prev=2,i.next=5,axios.post(route("api.report.reportByCustomer"),e.form);case 5:r=i.sent,e.items=r.data.data,i.next=16;break;case 9:i.prev=9,i.t0=i.catch(2),n=i.t0.errors,o=i.t0.message,n&&e.form.errors.set(n),e.form.busy=!1;case 16:case"end":return i.stop()}},t,this,[[2,9]])}));function e(){return t.apply(this,arguments)}return e}(),changeSort:function t(e){this.pagination.sortBy===e?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=e,this.pagination.descending=!1)}}}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},PS5i:function(t,e,r){function n(t){r("oud2")}var i,o,a,s=!1,l,c=null,u=null,f=r("VU/8")(r("EpMA"),r("qkTt"),!1,n,null,null);t.exports=f.exports},Qkdk:function(t,e,r){(e=t.exports=r("FZ+f")(!1)).push([t.i,".styleAvatar[data-v-9d2d5a76]{position:relative;margin-left:-55px}",""])},R4wc:function(t,e,r){var n=r("kM2E");n(n.S+n.F,"Object",{assign:r("To3L")})},To3L:function(t,e,r){"use strict";var n=r("lktj"),i=r("1kS7"),o=r("NpIQ"),a=r("sB3e"),s=r("MU5D"),l=Object.assign;t.exports=!l||r("S82l")(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=l({},t)[r]||Object.keys(l({},e)).join("")!=n})?function t(e,r){for(var l=a(e),c=arguments.length,u=1,f=i.f,d=o.f;c>u;)for(var v=s(arguments[u++]),h=f?n(v).concat(f(v)):n(v),p=h.length,m=0,_;p>m;)d.call(v,_=h[m++])&&(l[_]=v[_]);return l}:l},V3I1:function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-tile",{class:[{styleAvatar:t.avatarOn}],attrs:{avatar:t.avatarOn},nativeOn:{click:function(e){t.navigate(t.href)}}},[t.iconOn&&!t.avatarOn?r("v-list-tile-action",[r("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),t.iconOn&&t.avatarOn?r("v-list-tile-avatar",[r("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{style:{color:t.isActive?t.activeColor:t.linkColor}},[r("span",{style:{cursor:t.href?"pointer":""}},[t._v(t._s(t.title))])])],1),t._v(" "),t.iconOn&&t.avatarOn?r("v-list-tile-action",[r("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e()],1)},n=[];t.exports={render:r,staticRenderFns:n}},V3tA:function(t,e,r){r("R4wc"),t.exports=r("FeBl").Object.assign},VA5K:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"card_membership",title:"Invoices",items:[{title:"Generate Invoice",href:"/invoices/generate",action:"schedule"},{title:"Invoices",href:"/invoices",action:"all_inbox"},{title:"Weekly Report",href:"/reports/total-all-customer-invoice",action:"picture_as_pdf"}]}]}},methods:{isActive:function t(e){return e.href===this.$route.path},loadview:function t(e){this.$router.push({path:""+e.href})}}}},XR5y:function(t,e,r){(e=t.exports=r("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},Z2Ga:function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$auth.check("admin")?r("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return r("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(r){t.$set(e,"active",r)},expression:"item.active"}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-action",[r("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return r("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(r){t.loadview(e)}}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-list-tile-action",[r("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},n=[];t.exports={render:r,staticRenderFns:n}},deHX:function(t,e,r){function n(t){r("o/m3")}var i,o,a,s=!1,l,c=null,u=null,f=r("VU/8")(r("VA5K"),r("Z2Ga"),!1,n,null,null);t.exports=f.exports},"f+SC":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dark:{type:Boolean,default:function t(){return!1}},href:{type:String,required:!0},title:{type:String,required:!0},avatar:{type:String,default:function t(){return""}},icon:{type:String,default:function t(){return""}},iconColor:{type:String,default:function t(){return this.dark?"#fafafa":"#78909C"}},linkColor:{type:String,default:function t(){return this.dark?"#fafafa":"#e3b500"}},activeColor:{type:String,default:function t(){return"#f5c300"}}},computed:{isActive:function t(){return this.href===this.$route.path},isDark:function t(){return!0===this.dark},avatarOn:function t(){return!!this.avatar},iconOn:function t(){return!!this.icon}},methods:{navigate:function t(e){var r=this;this.isURL(e)?window.open(e):this.$router.push({path:""+e})},isURL:function t(e){var r,n=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");return e.length<2083&&n.test(e)}}}},g4we:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{extension:!1,showLogo:!1,logo:"/img/logo.png",showIcon:!1,title:"DSG Live"}},created:function t(){var e=this;Bus.$on("header-extension-visible",function(t){e.extension=t})},methods:{toggleDrawer:function t(){Bus.$emit("toggleDrawer")}}}},gvVL:function(t,e,r){"use strict";e.a={methods:{errorMessages:function t(e){return this.errors.collect(e).concat(this.form.errors.only(e))},hasErrors:function t(e){var r;return this.errors.collect(e).concat(this.form.errors.only(e)).length>0}}}},jTAZ:function(t,e,r){(e=t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"o/m3":function(t,e,r){var n=r("XR5y");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("rjj0")("8d960562",n,!0,{})},ockC:function(t,e,r){function n(t){r("JRPR")}var i,o,a,s=!1,l,c=null,u=null,f=r("VU/8")(r("g4we"),r("2xzx"),!1,n,null,null);t.exports=f.exports},onlB:function(t,e,r){var n,i,o,a=!1,s=null,l=null,c=null,u=r("VU/8")(r("N76W"),r("1zB9"),!1,null,null,null);t.exports=u.exports},oud2:function(t,e,r){var n=r("9qyG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("rjj0")("ad00c2fe",n,!0,{})},qkTt:function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return r("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(r){t.$set(e,"active",r)},expression:"item.active"}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-action",[r("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return t.$auth.check(e.auth)?r("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(r){t.loadview(e)}}},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-list-tile-action",[r("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1):t._e()})],2)}))},n=[];t.exports={render:r,staticRenderFns:n}},rjj0:function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r("tTVk"),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},f=null,d="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(m(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(m(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function p(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,r,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(c)return u;n.parentNode.removeChild(n)}if(v){var i=l++;n=s||(s=p()),e=g.bind(null,n,i,!1),r=g.bind(null,n,i,!0)}else n=p(),e=b.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function n(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else r()}}t.exports=function(t,e,r,n){c=r,f=n||{};var a=i(t,e);return h(a),function e(r){for(var n=[],s=0;s<a.length;s++){var l=a[s],c;(c=o[l.id]).refs--,n.push(c)}r?h(a=i(t,r)):a=[];for(var s=0;s<n.length;s++){var c;if(0===(c=n[s]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}};var _=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")}),y;function g(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function b(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),f.ssrId&&t.setAttribute(d,e.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},tTVk:function(t,e){t.exports=function t(e,r){for(var n=[],i={},o=0;o<r.length;o++){var a=r[o],s=a[0],l,c,u,f={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};i[s]?i[s].parts.push(f):n.push(i[s]={id:s,parts:[f]})}return n}},woOf:function(t,e,r){t.exports={default:r("V3tA"),__esModule:!0}},yCRL:function(t,e,r){var n,i,o,a=!1,s=null,l=null,c=null,u=r("VU/8")(r("NH3I"),r("IoXK"),!1,null,null,null);t.exports=u.exports},yuWV:function(t,e){var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{staticClass:"blue-grey",attrs:{clipped:t.$vuetify.breakpoint.width<=1264&&!0,fixed:"","hide-overlay":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"blue-grey",attrs:{dense:""}},[t.$auth.check("admin")?r("v-subheader",{staticClass:"white--text"},[t._v("Admin Area")]):t._e(),t._v(" "),t.$auth.check("warehouse")?r("v-subheader",{staticClass:"white--text"},[t._v("Warehouse Area")]):t._e(),t._v(" "),t.$auth.check("customer")?r("v-subheader",{staticClass:"white--text"},[t._v("Customer Area")]):t._e(),t._v(" "),t.$auth.check(["admin","customer","warehouse"])?r("v-link",{attrs:{title:"Dashboard",href:"/dashboard",icon:"fa-tachometer","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin"])?r("v-link",{attrs:{title:"Tutorials",href:"/tutorials",icon:"movie","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Users",href:"/users",icon:"supervised_user_circle","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Shippers",href:"/shippers",icon:"fa-ship","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Rates",href:"/rates",icon:"attach_money","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Bins",href:"/bins",icon:"view_module","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["warehouse","admin"])?r("v-link",{attrs:{title:"Warehouse",href:"/warehouse",icon:"location_city","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin","warehouse"])?r("v-link",{attrs:{title:"Receiving",href:"/receiving",icon:"receipt","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin","warehouse"])?r("v-link",{attrs:{title:"Archived",href:"/archived/dsg",icon:"archive","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),r("inventory-links"),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Tickets",href:"/tickets",icon:"confirmation_number","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?r("v-link",{attrs:{title:"Miscellaneous",href:"/miscellaneous",icon:"note_add","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),r("invoice-links"),t._v(" "),t.$auth.check(["customer"])?r("v-link",{attrs:{title:"Clients",href:"/clients",icon:"business_center","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?r("v-link",{attrs:{title:"Settings",href:"/settings",icon:"fa-cogs","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?r("v-link",{attrs:{title:"Logout",href:"/logout",icon:"power_settings_new","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e()],1)],1)},n=[];t.exports={render:r,staticRenderFns:n}}});