webpackJsonp([33],{"0fhT":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),i=n("exGp"),o=n.n(i),s=n("onlB"),l=n.n(s),c=n("gvVL"),u=n("2gGM"),f=n.n(u),d=n("e7x4"),v=n.n(d);e.default={components:{MainLayout:l.a},mixins:[c.a],data:function t(){return{contentClass:{grey:!0,"lighten-4":!0,"accent--text":!0},dialog:!1,headers:[{text:"Customer",value:"customer_name",align:"left",sortable:!0},{text:"Receiving",value:"receiving_fee",align:"left",sortable:!0},{text:"Storage",value:"storage_fee",align:"left",sortable:!0},{text:"Delivery",value:"delivery_fee",align:"left",sortable:!0},{text:"Misc",value:"misc_fee",align:"left",sortable:!0},{text:"Total",value:"total",align:"left",sortable:!0}],items:[],selected:[],mass_create_invoices:new u.Form({}),pagination:{sortBy:"name"},toggleForm:new u.Form({}),search:"",domain:window.location.hostname,form:new u.Form({date_started:"",date_ended:""}),date_started_modal:"",date_ended_modal:""}},watch:{items:{handler:function t(e){},deep:!0},selected:{handler:function t(e){},deep:!0}},methods:{massCreateInvoice:function t(){for(var e=this,n=[],r=0;r<e.selected.length;r++)n.push(e.selected[r].customer_id);e.mass_create_invoices=e.selected,axios.post(route("api.invoice.massCreateInvoice"),e.mass_create_invoices).then(function(t){var n;v.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success!",html:'<p class="title">Invoice Generated!</p>',type:"success",confirmButtonText:"Ok"}),e.$nextTick(function(){return e.$router.push({name:"invoices"})})})},generateInvoice:function(){var t=o()(a.a.mark(function t(){var e,n,r,i,o,s,l;return a.a.wrap(function t(a){for(;;)switch(a.prev=a.next){case 0:return(e=this).form.busy=!0,a.prev=2,a.next=5,axios.post(route("api.invoice.generate"),e.form);case 5:for(n=a.sent,r=n.data.data,i=0;i<r.length;i++)r[i].total=r[i].receiving_fee+r[i].delivery_fee+r[i].misc_fee+r[i].storage_fee,r[i].total>0&&e.items.push(r[i]);o="You Successfully Fetch Billable Customers.",e.items.length<1&&(o="No Billable Customer Yet."),(s=v.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1}))({title:"Success!",html:'<p class="title">'+o+"</p>",type:"warning",confirmButtonText:"Back"}),a.next=18;break;case 14:a.prev=14,a.t0=a.catch(2),(l=v.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1}))({title:"Validation Error!",html:'<p class="title">Please Pick a Date Started and Date Ended!</p>',type:"warning",confirmButtonText:"Back"});case 18:case"end":return a.stop()}},t,this,[[2,14]])}));function e(){return t.apply(this,arguments)}return e}(),toggleAll:function t(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},changeSort:function t(e){this.pagination.sortBy===e?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=e,this.pagination.descending=!1)}}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1zB9":function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("left-side-bar"),t._v(" "),n("app-nav-bar"),t._v(" "),n("v-content",{staticClass:"white",attrs:{transition:"slide-x-transition",fluid:"","pa-0":"","ma-0":""}},[t._t("default")],2)],1)},r=[];t.exports={render:n,staticRenderFns:r}},"2gGM":function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function e(){return t.default}:function e(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=0)}({0:function(t,e,n){t.exports=n("lVK7")},OMN4:function(t,e){t.exports=n("mtWM")},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OMN4"),a=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t){if(null===t||"object"!==i(t))return t;var e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(function(n){e[n]=o(t[n])}),e}function s(t){return Array.isArray(t)?t:[t]}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var h=function(){function t(){f(this,t),this.errors={}}return v(t,[{key:"set",value:function t(e,n){"object"===u(e)?this.errors=e:this.set(c({},this.errors,l({},e,s(n))))}},{key:"all",value:function t(){return this.errors}},{key:"has",value:function t(e){return this.errors.hasOwnProperty(e)}},{key:"hasAny",value:function t(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return r.some(function(t){return e.has(t)})}},{key:"any",value:function t(){return Object.keys(this.errors).length>0}},{key:"get",value:function t(e){if(this.has(e))return this.getAll(e)[0]}},{key:"getAll",value:function t(e){return s(this.errors[e]||[])}},{key:"only",value:function t(){for(var e=this,n=[],r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return a.forEach(function(t){var r=e.get(t);r&&n.push(r)}),n}},{key:"flatten",value:function t(){return Object.values(this.errors).reduce(function(t,e){return t.concat(e)},[])}},{key:"clear",value:function t(e){var n=this,r={};e&&Object.keys(this.errors).forEach(function(t){t!==e&&(r[t]=n.errors[t])}),this.set(r)}}]),t}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}var k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(this,t),this.busy=!1,this.successful=!1,this.errors=new h,this.originalData=o(e),Object.assign(this,e)}return b(t,[{key:"fill",value:function t(e){var n=this;this.keys().forEach(function(t){n[t]=e[t]})}},{key:"data",value:function t(){var e=this;return this.keys().reduce(function(t,n){return _({},t,m({},n,e[n]))},{})}},{key:"keys",value:function e(){return Object.keys(this).filter(function(e){return!t.ignore.includes(e)})}},{key:"startProcessing",value:function t(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function t(){this.busy=!1,this.successful=!0}},{key:"clear",value:function t(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function e(){var n=this;Object.keys(this).filter(function(e){return!t.ignore.includes(e)}).forEach(function(t){n[t]=o(n.originalData[t])})}},{key:"get",value:function t(e){return this.submit("get",e)}},{key:"post",value:function t(e){return this.submit("post",e)}},{key:"patch",value:function t(e){return this.submit("patch",e)}},{key:"put",value:function t(e){return this.submit("put",e)}},{key:"delete",value:function t(e){return this.submit("delete",e)}},{key:"submit",value:function t(e,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var o="get"===e?{params:this.data()}:this.data();return new Promise(function(t,s){a.a.request(_({url:r.route(n),method:e,data:o},i)).then(function(e){r.finishProcessing(),t(e)}).catch(function(t){r.busy=!1,t.response&&r.errors.set(r.extractErrors(t.response)),s(t)})})}},{key:"extractErrors",value:function e(n){return n.data&&"object"===p(n.data)?n.data.errors?_({},n.data.errors):n.data.message?{error:n.data.message}:_({},n.data):{error:t.errorMessage}}},{key:"route",value:function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n;return t.routes.hasOwnProperty(n)&&(a=decodeURI(t.routes[n])),"object"!==p(r)&&(r={id:r}),Object.keys(r).forEach(function(t){a=a.replace("{".concat(t,"}"),r[t])}),a}},{key:"onKeydown",value:function t(e){e.target.name&&this.errors.clear(e.target.name)}}]),t}();k.routes={},k.errorMessage="Something went wrong. Please try again.",k.ignore=["busy","successful","errors","originalData"];var x=k,w,C,S;function $(t,e,n,r,a,i,o,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var c="function"==typeof t?t.options:t,u;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function t(e,n){return u.call(n),f(e,n)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}var O=!1,j=null,A=null,E=null,P,R=$({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.has(t.field)?n("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:t._s(t.form.errors.get(t.field))}}):t._e()},[],!1,null,null,null).exports,T={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function t(){this.dismissible&&this.form.clear()}}},B,M,F,I=!1,U=null,V=null,D=null,L,N=$({name:"alert-error",extends:T,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[t.form.errors.has("error")?n("div",{domProps:{innerHTML:t._s(t.form.errors.get("error"))}}):n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports,G,q,z,W=!1,H=null,Z=null,K=null,X,Q=$({name:"alert-errors",extends:T,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t.message?n("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t._v(" "),n("ul",t._l(t.form.errors.flatten(),function(e){return n("li",{domProps:{innerHTML:t._s(e)}})}))]):t._e()},[],!1,null,null,null).exports,J,Y,tt,et=!1,nt=null,rt=null,at=null,it,ot=$({name:"alert-success",extends:T,props:{message:{type:String,default:""}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.successful?n("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports;n.d(e,"Form",function(){return x}),n.d(e,"Errors",function(){return h}),n.d(e,"HasError",function(){return R}),n.d(e,"AlertError",function(){return N}),n.d(e,"AlertErrors",function(){return Q}),n.d(e,"AlertSuccess",function(){return ot}),n.d(e,"default",function(){return x})}})},"2xzx":function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[n("v-toolbar-side-icon",{staticClass:"white--text",nativeOn:{click:function(e){e.stopPropagation(),t.toggleDrawer()}}}),t._v(" "),t.extension?n("v-toolbar-title",{staticClass:"text-xs-center ml-0 pl-3",class:t.$vuetify.breakpoint.width<=1264&&"pr-3",style:t.$vuetify.breakpoint.width>1264&&"width: 300px",attrs:{slot:"extension"},slot:"extension"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1):n("v-toolbar-title",{staticClass:"text-xs-center"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1),t._v(" "),n("v-spacer"),t._v(" "),t.showLogo?n("img",{staticClass:"hidden-md-and-up",attrs:{src:t.logo}}):t._e(),t._v(" "),n("v-spacer")],1)},r=[];t.exports={render:n,staticRenderFns:r}},"5t+f":function(t,e,n){var r,a,i,o=!1,s=null,l=null,c=null,u=n("VU/8")(n("EU3A"),n("yuWV"),!1,null,null,null);t.exports=u.exports},"7/uR":function(t,e,n){function r(t){n("AbWS")}var a,i,o,s=!1,l,c,u=null,f=n("VU/8")(n("f+SC"),n("V3I1"),!1,r,"data-v-9d2d5a76",null);t.exports=f.exports},"9qyG":function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},AbWS:function(t,e,n){var r=n("Qkdk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("rjj0")("2ab3e8dc",r,!0,{})},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,a=i(n("woOf"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},EU3A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),i=n("7/uR"),o=n.n(i),s=n("NYxO"),l=n("PS5i"),c=n.n(l),u=n("deHX"),f=n.n(u),d,v=Object(s.b)("auth").mapState;e.default={components:{VLink:o.a,InventoryLinks:c.a,InvoiceLinks:f.a},data:function t(){return{drawer:!1}},computed:a()({},v({isAuthenticated:"isAuthenticated"})),created:function t(){var e=this;switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return this.drawer=!1;case"md":case"lg":case"xl":return this.drawer=!0}},mounted:function t(){var e=this;Bus.$on("toggleDrawer",function(){e.drawer=!e.drawer})}}},EpMA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"collections_bookmark",title:"Inventories",items:[{title:"All Unknown Report",href:"/reports/all-unknown-report",action:"fa-question-circle",auth:["admin"]},{title:"Unknown Customer",href:"/reports/unknown-customer",action:"supervised_user_circle",auth:["admin","warehouse"]},{title:"Unknown Client",href:"/reports/unknown-client",action:"fa-users",auth:["admin","warehouse","customer"]},{title:"Unknown Shipper",href:"/reports/unknown-shipper",action:"fa-ship",auth:["admin","warehouse"]},{title:"Damaged Report",href:"/reports/damaged",action:"broken_image",auth:["admin","warehouse","customer"]},{title:"Repaired Report",href:"/reports/repaired",action:"build",auth:["admin","warehouse","customer"]},{title:"Undelivered Report",href:"/reports/undelivered",action:"fa-truck",auth:["admin","warehouse","customer"]},{title:"Bin Report",href:"/reports/bin",action:"apps",auth:["admin"]},{title:"Customer Report",href:"/reports/customer",action:"local_library",auth:["admin"]},{title:"Client Report",href:"/reports/clients",action:"perm_contact_calendar",auth:["admin"]}]}]}},methods:{isActive:function t(e){return e.href===this.$route.path},loadview:function t(e){this.$router.push({path:""+e.href})}}}},JRPR:function(t,e,n){var r=n("jTAZ");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("rjj0")("19ca4adb",r,!0,{})},N76W:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("ockC"),a=n.n(r),i=n("5t+f"),o=n.n(i);e.default={components:{AppNavBar:a.a,LeftSideBar:o.a}}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},PS5i:function(t,e,n){function r(t){n("oud2")}var a,i,o,s=!1,l,c=null,u=null,f=n("VU/8")(n("EpMA"),n("qkTt"),!1,r,null,null);t.exports=f.exports},Q82P:function(t,e,n){var r,a,i,o=!1,s=null,l=null,c=null,u=n("VU/8")(n("0fhT"),n("imed"),!1,null,null,null);t.exports=u.exports},Qkdk:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,".styleAvatar[data-v-9d2d5a76]{position:relative;margin-left:-55px}",""])},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var r=n("lktj"),a=n("1kS7"),i=n("NpIQ"),o=n("sB3e"),s=n("MU5D"),l=Object.assign;t.exports=!l||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r})?function t(e,n){for(var l=o(e),c=arguments.length,u=1,f=a.f,d=i.f;c>u;)for(var v=s(arguments[u++]),h=f?r(v).concat(f(v)):r(v),p=h.length,m=0,_;p>m;)d.call(v,_=h[m++])&&(l[_]=v[_]);return l}:l},V3I1:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{class:[{styleAvatar:t.avatarOn}],attrs:{avatar:t.avatarOn},nativeOn:{click:function(e){t.navigate(t.href)}}},[t.iconOn&&!t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-avatar",[n("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{style:{color:t.isActive?t.activeColor:t.linkColor}},[n("span",{style:{cursor:t.href?"pointer":""}},[t._v(t._s(t.title))])])],1),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e()],1)},r=[];t.exports={render:n,staticRenderFns:r}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},VA5K:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"card_membership",title:"Invoices",items:[{title:"Generate Invoice",href:"/invoices/generate",action:"schedule"},{title:"Invoices",href:"/invoices",action:"all_inbox"},{title:"Weekly Report",href:"/reports/total-all-customer-invoice",action:"picture_as_pdf"}]}]}},methods:{isActive:function t(e){return e.href===this.$route.path},loadview:function t(e){this.$router.push({path:""+e.href})}}}},XR5y:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},Z2Ga:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.check("admin")?n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},r=[];t.exports={render:n,staticRenderFns:r}},deHX:function(t,e,n){function r(t){n("o/m3")}var a,i,o,s=!1,l,c=null,u=null,f=n("VU/8")(n("VA5K"),n("Z2Ga"),!1,r,null,null);t.exports=f.exports},"f+SC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dark:{type:Boolean,default:function t(){return!1}},href:{type:String,required:!0},title:{type:String,required:!0},avatar:{type:String,default:function t(){return""}},icon:{type:String,default:function t(){return""}},iconColor:{type:String,default:function t(){return this.dark?"#fafafa":"#78909C"}},linkColor:{type:String,default:function t(){return this.dark?"#fafafa":"#e3b500"}},activeColor:{type:String,default:function t(){return"#f5c300"}}},computed:{isActive:function t(){return this.href===this.$route.path},isDark:function t(){return!0===this.dark},avatarOn:function t(){return!!this.avatar},iconOn:function t(){return!!this.icon}},methods:{navigate:function t(e){var n=this;this.isURL(e)?window.open(e):this.$router.push({path:""+e})},isURL:function t(e){var n,r=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");return e.length<2083&&r.test(e)}}}},g4we:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function t(){return{extension:!1,showLogo:!1,logo:"/img/logo.png",showIcon:!1,title:"DSG Live"}},created:function t(){var e=this;Bus.$on("header-extension-visible",function(t){e.extension=t})},methods:{toggleDrawer:function t(){Bus.$emit("toggleDrawer")}}}},gvVL:function(t,e,n){"use strict";e.a={methods:{errorMessages:function t(e){return this.errors.collect(e).concat(this.form.errors.only(e))},hasErrors:function t(e){var n;return this.errors.collect(e).concat(this.form.errors.only(e)).length>0}}}},imed:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-dialog",{ref:"date_started",attrs:{"return-value":t.form.date_started,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.form,"date_started",e)}},model:{value:t.date_started_modal,callback:function(e){t.date_started_modal=e},expression:"date_started_modal"}},[n("v-text-field",{staticStyle:{"margin-top":"26px"},attrs:{slot:"activator",label:"Date Started","prepend-icon":"event_available",readonly:""},slot:"activator",model:{value:t.form.date_started,callback:function(e){t.$set(t.form,"date_started",e)},expression:"form.date_started"}}),t._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:t.form.date_started,callback:function(e){t.$set(t.form,"date_started",e)},expression:"form.date_started"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.date_started_modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.date_started.save(t.form.date_started)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-dialog",{ref:"date_ended",attrs:{"return-value":t.form.date_ended,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.form,"date_ended",e)}},model:{value:t.date_ended_modal,callback:function(e){t.date_ended_modal=e},expression:"date_ended_modal"}},[n("v-text-field",{staticStyle:{"margin-top":"26px"},attrs:{slot:"activator",label:"Date Ended","prepend-icon":"event_available",readonly:""},slot:"activator",model:{value:t.form.date_ended,callback:function(e){t.$set(t.form,"date_ended",e)},expression:"form.date_ended"}}),t._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:t.form.date_ended,callback:function(e){t.$set(t.form,"date_ended",e)},expression:"form.date_ended"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.date_ended_modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.date_ended.save(t.form.date_ended)}}},[t._v("OK")])],1)],1)],1),t._v(" "),t.items.length<1?n("v-flex",{attrs:{xs4:""}},[n("v-btn",{staticStyle:{"margin-top":"25px"},attrs:{disabled:null===t.form.date_started&&null===t.form.date_ended,block:"",color:"blue darken-4",dark:"",flat:""},on:{click:t.generateInvoice}},[t._v("\n          Fetch Billables\n          "),n("v-icon",{attrs:{color:"blue darken-4"}},[t._v("\n            attach_money\n          ")])],1)],1):t._e(),t._v(" "),n("v-flex",{attrs:{"d-flex":"",xs12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t.form.date_started&&t.form.date_ended?n("v-flex",{attrs:{xs12:""}},[t.selected.length<1?n("v-alert",{attrs:{value:t.items.length>0,color:"secondary",icon:"warning"}},[t._v("\n              Note: Check An Item/s On The Table To Generate An Invoice\n            ")]):n("v-btn",{staticClass:"white--text",attrs:{loading:t.mass_create_invoices.busy,disabled:t.mass_create_invoices.busy,color:"teal lighten-2",block:""},nativeOn:{click:function(e){return t.massCreateInvoice(e)}}},[t._v("\n              Generate Invoices\n              "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("schedule")])],1)],1):t._e(),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",{attrs:{light:"",flat:""}},[n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"search",label:"Search Customers","single-line":"","hide-details":"",light:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,pagination:t.pagination,"select-all":"","item-key":"customer_name"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",[n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},nativeOn:{click:function(e){return t.toggleAll(e)}}})],1),t._v(" "),t._l(e.headers,function(e){return n("th",{key:e.text,class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"name":"",{"text-xs-left":"left"===e.align,"text-xs-right":"right"===e.align,"text-xs-center":"center"===e.align},t.$vuetify.breakpoint.width>=600&&"title"],on:{click:function(n){t.changeSort(e.value)}}},[n("span",[n("v-icon",[t._v("arrow_upward")]),t._v("\n              "+t._s(e.text)+"\n            ")],1)])})],2)]}},{key:"items",fn:function(e){return[n("tr",[n("td",{staticClass:"title text-xs-left"},[n("v-checkbox",{attrs:{active:e.selected,"input-value":e.selected},nativeOn:{click:function(t){e.selected=!e.selected}}})],1),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.customer_name)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.receiving_fee?n("span",[t._v("$"+t._s(e.item.receiving_fee.toFixed(2)))]):n("span",[t._v("$0.00")])]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.storage_fee?n("span",[t._v("$"+t._s(e.item.storage_fee.toFixed(2)))]):n("span",[t._v("$0.00")])]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.delivery_fee?n("span",[t._v("$"+t._s(e.item.delivery_fee.toFixed(2)))]):n("span",[t._v("$0.00")])]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.misc_fee?n("span",[t._v("$"+t._s(e.item.misc_fee.toFixed(2)))]):n("span",[t._v("$0.00")])]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.total?n("span",[t._v("$"+t._s(e.item.total.toFixed(2)))]):n("span",[t._v("$0.00")])])])]}},{key:"pageText",fn:function(e){var n=e.pageStart,r=e.pageStop;return[t._v("\n        From "+t._s(n)+" to "+t._s(r)+"\n      ")]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:!0,color:"blue-grey",icon:"warning"}},[t._v("\n          Pick Date Started and Date Ended To\n          "),n("v-btn",{attrs:{disabled:!t.$auth.check("admin"),color:"white",flat:"",dark:""},on:{click:t.generateInvoice}},[t._v("\n            Fetch Billables\n            "),n("v-icon",{attrs:{right:""}},[t._v("\n              attach_money\n            ")])],1)],1)],1),t._v(" "),n("v-alert",{attrs:{slot:"no-results",value:!0,color:"blue-grey",icon:"warning"},slot:"no-results"},[t._v('\n        Your search for "'+t._s(t.search)+'" found no results.\n      ')])],2)],1)],1)},r=[];t.exports={render:n,staticRenderFns:r}},jTAZ:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"o/m3":function(t,e,n){var r=n("XR5y");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("rjj0")("8d960562",r,!0,{})},ockC:function(t,e,n){function r(t){n("JRPR")}var a,i,o,s=!1,l,c=null,u=null,f=n("VU/8")(n("g4we"),n("2xzx"),!1,r,null,null);t.exports=f.exports},onlB:function(t,e,n){var r,a,i,o=!1,s=null,l=null,c=null,u=n("VU/8")(n("N76W"),n("1zB9"),!1,null,null,null);t.exports=u.exports},oud2:function(t,e,n){var r=n("9qyG");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("rjj0")("ad00c2fe",r,!0,{})},qkTt:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return t.$auth.check(e.auth)?n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1):t._e()})],2)}))},r=[];t.exports={render:n,staticRenderFns:r}},rjj0:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n("tTVk"),i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},f=null,d="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:o}}}}function p(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(v){var a=l++;r=s||(s=p()),e=g.bind(null,r,a,!1),n=g.bind(null,r,a,!0)}else r=p(),e=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function r(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}t.exports=function(t,e,n,r){c=n,f=r||{};var o=a(t,e);return h(o),function e(n){for(var r=[],s=0;s<o.length;s++){var l=o[s],c;(c=i[l.id]).refs--,r.push(c)}n?h(o=a(t,n)):o=[];for(var s=0;s<r.length;s++){var c;if(0===(c=r[s]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var _=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")}),y;function g(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function b(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(d,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},tTVk:function(t,e){t.exports=function t(e,n){for(var r=[],a={},i=0;i<n.length;i++){var o=n[i],s=o[0],l,c,u,f={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(f):r.push(a[s]={id:s,parts:[f]})}return r}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},yuWV:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"blue-grey",attrs:{clipped:t.$vuetify.breakpoint.width<=1264&&!0,fixed:"","hide-overlay":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"blue-grey",attrs:{dense:""}},[t.$auth.check("admin")?n("v-subheader",{staticClass:"white--text"},[t._v("Admin Area")]):t._e(),t._v(" "),t.$auth.check("warehouse")?n("v-subheader",{staticClass:"white--text"},[t._v("Warehouse Area")]):t._e(),t._v(" "),t.$auth.check("customer")?n("v-subheader",{staticClass:"white--text"},[t._v("Customer Area")]):t._e(),t._v(" "),t.$auth.check(["admin","customer","warehouse"])?n("v-link",{attrs:{title:"Dashboard",href:"/dashboard",icon:"fa-tachometer","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin"])?n("v-link",{attrs:{title:"Tutorials",href:"/tutorials",icon:"movie","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Users",href:"/users",icon:"supervised_user_circle","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Shippers",href:"/shippers",icon:"fa-ship","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Rates",href:"/rates",icon:"attach_money","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Bins",href:"/bins",icon:"view_module","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["warehouse","admin"])?n("v-link",{attrs:{title:"Warehouse",href:"/warehouse",icon:"location_city","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin","warehouse"])?n("v-link",{attrs:{title:"Receiving",href:"/receiving",icon:"receipt","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["admin","warehouse"])?n("v-link",{attrs:{title:"Archived",href:"/archived/dsg",icon:"archive","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("inventory-links"),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Tickets",href:"/tickets",icon:"confirmation_number","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Miscellaneous",href:"/miscellaneous",icon:"note_add","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("invoice-links"),t._v(" "),t.$auth.check(["customer"])?n("v-link",{attrs:{title:"Clients",href:"/clients",icon:"business_center","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Settings",href:"/settings",icon:"fa-cogs","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Logout",href:"/logout",icon:"power_settings_new","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e()],1)],1)},r=[];t.exports={render:n,staticRenderFns:r}}});