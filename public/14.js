webpackJsonp([14],{"/Yw+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.check("admin")?n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1zB9":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"inspire"}},[e("left-side-bar"),this._v(" "),e("app-nav-bar"),this._v(" "),e("v-content",{staticClass:"white",attrs:{transition:"slide-x-transition",fluid:"","pa-0":"","ma-0":""}},[this._t("default")],2)],1)},staticRenderFns:[]}},"2gGM":function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=0)}({0:function(t,e,n){t.exports=n("lVK7")},OMN4:function(t,e){t.exports=n("mtWM")},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OMN4"),i=n.n(r);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){if(null===t||"object"!==o(t))return t;var e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(function(n){e[n]=a(t[n])}),e}function s(t){return Array.isArray(t)?t:[t]}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,r;return e=t,(n=[{key:"set",value:function(t,e){var n,r,i;"object"===l(t)?this.errors=t:this.set(c({},this.errors,(n={},r=t,i=s(e),r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)))}},{key:"all",value:function(){return this.errors}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"hasAny",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.some(function(e){return t.has(e)})}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.has(t))return this.getAll(t)[0]}},{key:"getAll",value:function(t){return s(this.errors[t]||[])}},{key:"only",value:function(){for(var t=this,e=[],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){var r=t.get(n);r&&e.push(r)}),e}},{key:"flatten",value:function(){return Object.values(this.errors).reduce(function(t,e){return t.concat(e)},[])}},{key:"clear",value:function(t){var e=this,n={};t&&Object.keys(this.errors).forEach(function(r){r!==t&&(n[r]=e.errors[r])}),this.set(n)}}])&&u(e.prototype,n),r&&u(e,r),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.busy=!1,this.successful=!1,this.errors=new f,this.originalData=a(e),Object.assign(this,e)}var e,n,r;return e=t,(n=[{key:"fill",value:function(t){var e=this;this.keys().forEach(function(n){e[n]=t[n]})}},{key:"data",value:function(){var t=this;return this.keys().reduce(function(e,n){return v({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t[n]))},{})}},{key:"keys",value:function(){return Object.keys(this).filter(function(e){return!t.ignore.includes(e)})}},{key:"startProcessing",value:function(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function(){this.busy=!1,this.successful=!0}},{key:"clear",value:function(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function(){var e=this;Object.keys(this).filter(function(e){return!t.ignore.includes(e)}).forEach(function(t){e[t]=a(e.originalData[t])})}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var o="get"===t?{params:this.data()}:this.data();return new Promise(function(a,s){i.a.request(v({url:n.route(e),method:t,data:o},r)).then(function(t){n.finishProcessing(),a(t)}).catch(function(t){n.busy=!1,t.response&&n.errors.set(n.extractErrors(t.response)),s(t)})})}},{key:"extractErrors",value:function(e){return e.data&&"object"===d(e.data)?e.data.errors?v({},e.data.errors):e.data.message?{error:e.data.message}:v({},e.data):{error:t.errorMessage}}},{key:"route",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;return t.routes.hasOwnProperty(e)&&(r=decodeURI(t.routes[e])),"object"!==d(n)&&(n={id:n}),Object.keys(n).forEach(function(t){r=r.replace("{".concat(t,"}"),n[t])}),r}},{key:"onKeydown",value:function(t){t.target.name&&this.errors.clear(t.target.name)}}])&&h(e.prototype,n),r&&h(e,r),t}();p.routes={},p.errorMessage="Something went wrong. Please try again.",p.ignore=["busy","successful","errors","originalData"];var _=p;function m(t,e,n,r,i,o,a,s){var c=typeof(t=t||{}).default;"object"!==c&&"function"!==c||(t=t.default);var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId=o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var f=u.render;u.render=function(t,e){return l.call(e),f(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var g=m({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var t=this.$createElement,e=this._self._c||t;return this.form.errors.has(this.field)?e("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:this._s(this.form.errors.get(this.field))}}):this._e()},[],!1,null,null,null).exports,y={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.dismissible&&this.form.clear()}}},b=m({name:"alert-error",extends:y,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[t.form.errors.has("error")?n("div",{domProps:{innerHTML:t._s(t.form.errors.get("error"))}}):n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports,x=m({name:"alert-errors",extends:y,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t.message?n("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t._v(" "),n("ul",t._l(t.form.errors.flatten(),function(e){return n("li",{domProps:{innerHTML:t._s(e)}})}))]):t._e()},[],!1,null,null,null).exports,k=m({name:"alert-success",extends:y,props:{message:{type:String,default:""}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.successful?n("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports;n.d(e,"Form",function(){return _}),n.d(e,"Errors",function(){return f}),n.d(e,"HasError",function(){return g}),n.d(e,"AlertError",function(){return b}),n.d(e,"AlertErrors",function(){return x}),n.d(e,"AlertSuccess",function(){return k}),n.d(e,"default",function(){return _})}})},"2l/E":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.check("admin")?n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"2xzx":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[n("v-toolbar-side-icon",{staticClass:"white--text",nativeOn:{click:function(e){e.stopPropagation(),t.toggleDrawer()}}}),t._v(" "),t.extension?n("v-toolbar-title",{staticClass:"text-xs-center ml-0 pl-3",class:t.$vuetify.breakpoint.width<=1264&&"pr-3",style:t.$vuetify.breakpoint.width>1264&&"width: 300px",attrs:{slot:"extension"},slot:"extension"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1):n("v-toolbar-title",{staticClass:"text-xs-center"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1),t._v(" "),n("v-spacer"),t._v(" "),t.showLogo?n("img",{staticClass:"hidden-md-and-up",attrs:{src:t.logo}}):t._e(),t._v(" "),n("v-spacer")],1)},staticRenderFns:[]}},"5t+f":function(t,e,n){var r=n("VU/8")(n("EU3A"),n("daS7"),!1,null,null,null);t.exports=r.exports},"7/uR":function(t,e,n){var r=n("VU/8")(n("f+SC"),n("V3I1"),!1,function(t){n("AbWS")},"data-v-9d2d5a76",null);t.exports=r.exports},AbWS:function(t,e,n){var r=n("Qkdk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("2ab3e8dc",r,!0,{})},DKZf:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("woOf"),o=(r=i)&&r.__esModule?r:{default:r};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},EU3A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),o=n("7/uR"),a=n.n(o),s=n("NYxO"),c=n("PS5i"),l=n.n(c),u=n("deHX"),f=n.n(u),d=Object(s.b)("auth").mapState;e.default={components:{VLink:a.a,InventoryLinks:l.a,InvoiceLinks:f.a},data:function(){return{drawer:!1}},computed:i()({},d({isAuthenticated:"isAuthenticated"})),created:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return this.drawer=!1;case"md":case"lg":case"xl":return this.drawer=!0}},mounted:function(){var t=this;Bus.$on("toggleDrawer",function(){t.drawer=!t.drawer})}}},EpMA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"collections_bookmark",title:"Inventories",items:[{title:"Unknown Report",href:"/reports/unknown",action:"fa-question-circle"},{title:"Damaged Report",href:"/reports/damaged",action:"broken_image"},{title:"Bin Report",href:"/reports/bin",action:"apps"},{title:"Customer Report",href:"/reports/customer",action:"local_library"},{title:"Client Report",href:"/reports/clients",action:"perm_contact_calendar"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},GRBD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("onlB"),i=n.n(r),o=n("gvVL"),a=n("2gGM"),s=(n.n(a),n("e7x4")),c=n.n(s);e.default={components:{MainLayout:i.a},mixins:[o.a],data:function(){return{rowsPerPageItems:[1,2],contentClass:{grey:!0,"lighten-4":!0,"accent--text":!0},dialog:!1,headers:[{text:"ID",value:"id",align:"left",sortable:!0},{text:"Customer",value:"customer_name",align:"left",sortable:!0},{text:"Started At",value:"date_started",align:"left",sortable:!0},{text:"Ended At",value:"date_ended",align:"left",sortable:!0},{text:"Receiving",value:"receiving_fee",align:"left",sortable:!0},{text:"Storage",value:"storage_fee",align:"left",sortable:!0},{text:"Delivery",value:"delivery_fee",align:"left",sortable:!0},{text:"Misc",value:"misc_fee",align:"left",sortable:!0},{text:"Total",value:"total",align:"left",sortable:!0},{text:"Actions",value:"actions",align:"left",sortable:!1}],items:[],selected:[],pagination:{sortBy:"name"},search:"",domain:window.location.hostname}},watch:{items:{handler:function(t){},deep:!0}},mounted:function(){this.fetchInvoices()},methods:{viewInvoice:function(t){var e=this;e.$nextTick(function(){return e.$router.push({name:"view-invoice",params:{id:""+t.id}})})},deleteInvoice:function(t){var e=this,n=t.id,r=_.findIndex(e.items,{id:t.id});axios.get(route("api.invoice.delete",{id:n})).then(function(t){200===t.status&&(e.$delete(e.items,r),c.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success",html:'<p class="title">'+t.data.message+"</p>",type:"success",confirmButtonText:"Back"}))}).catch(function(t){c.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Oops! Something Went Wrong...",html:'<p class="title">'+t.response.data.message+"</p>",type:"error",confirmButtonText:"Back"})})},goToGenerateInvoice:function(){var t=this;t.$nextTick(function(){return t.$router.push({name:"generate-invoices"})})},fetchInvoices:function(){var t=this;axios.post(route("api.invoice.index")).then(function(e){t.items=e.data})},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}}}},JRPR:function(t,e,n){var r=n("jTAZ");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("19ca4adb",r,!0,{})},LRiQ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",xs12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{light:"",flat:""}},[n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"search",label:"Search Customer","single-line":"","hide-details":"",light:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,pagination:t.pagination,"select-all":"","item-key":"id",expand:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",t._l(e.headers,function(e){return n("th",{key:e.text,class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"name":"",{"text-xs-left":"left"===e.align,"text-xs-right":"right"===e.align,"text-xs-center":"center"===e.align},t.$vuetify.breakpoint.width>=600&&"title"],on:{click:function(n){t.changeSort(e.value)}}},[n("span",[n("v-icon",[t._v("arrow_upward")]),t._v("\n              "+t._s(e.text)+"\n            ")],1)])}))]}},{key:"items",fn:function(e){return[n("tr",[n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.id)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.customer_name)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.date_started)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.date_ended)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.receiving_fee?n("span",[t._v(t._s(e.item.receiving_fee.toFixed(4)))]):t._e()]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.storage_fee?n("span",[t._v(t._s(e.item.storage_fee.toFixed(4)))]):t._e()]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.delivery_fee?n("span",[t._v(t._s(e.item.delivery_fee.toFixed(4)))]):t._e()]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.misc_fee?n("span",[t._v(t._s(e.item.misc_fee.toFixed(4)))]):t._e()]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[e.item.total?n("span",[t._v(t._s(e.item.total.toFixed(4)))]):t._e()]),t._v(" "),n("td",{staticClass:"title text-xs-center"},[n("v-flex",{staticClass:"xs12"},[n("v-btn",{attrs:{disabled:!t.$auth.check("admin"),flat:"",icon:"",color:"amber lighten-2"},on:{click:function(n){t.viewInvoice(e.item)}}},[n("v-icon",[t._v("fa-eye")])],1)],1),t._v(" "),n("v-flex",{staticClass:"xs12"},[n("v-btn",{attrs:{disabled:!t.$auth.check("admin"),flat:"",icon:"",color:"error"},on:{click:function(n){t.deleteInvoice(e.item)}}},[n("v-icon",[t._v("fa-trash")])],1)],1)],1)])]}},{key:"pageText",fn:function(e){var n=e.pageStart,r=e.pageStop;return[t._v("\n        From "+t._s(n)+" to "+t._s(r)+"\n      ")]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:!0,color:"blue-grey",icon:"warning"}},[t._v("\n          Oops! No Invoices Yet!\n          "),n("v-btn",{attrs:{disabled:!t.$auth.check("admin"),color:"white",flat:"",dark:""},on:{click:t.goToGenerateInvoice}},[t._v("\n            Generate Invoice\n            "),n("v-icon",{attrs:{right:""}},[t._v("\n              confirmation_number\n            ")])],1)],1)],1),t._v(" "),n("v-alert",{attrs:{slot:"no-results",value:!0,color:"blue-grey",icon:"warning"},slot:"no-results"},[t._v('\n        Your search for "'+t._s(t.search)+'" found no results.\n      ')])],2)],1)],1)},staticRenderFns:[]}},"Mj/S":function(t,e,n){var r=n("DKZf");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("f995ac46",r,!0,{})},N76W:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("ockC"),i=n.n(r),o=n("5t+f"),a=n.n(o);e.default={components:{AppNavBar:i.a,LeftSideBar:a.a}}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},PS5i:function(t,e,n){var r=n("VU/8")(n("EpMA"),n("2l/E"),!1,function(t){n("XKz9")},null,null);t.exports=r.exports},Qkdk:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".styleAvatar[data-v-9d2d5a76]{position:relative;margin-left:-55px}",""])},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var r=n("lktj"),i=n("1kS7"),o=n("NpIQ"),a=n("sB3e"),s=n("MU5D"),c=Object.assign;t.exports=!c||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,l=1,u=i.f,f=o.f;c>l;)for(var d,v=s(arguments[l++]),h=u?r(v).concat(u(v)):r(v),p=h.length,_=0;p>_;)f.call(v,d=h[_++])&&(n[d]=v[d]);return n}:c},V3I1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{class:[{styleAvatar:t.avatarOn}],attrs:{avatar:t.avatarOn},nativeOn:{click:function(e){t.navigate(t.href)}}},[t.iconOn&&!t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-avatar",[n("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{style:{color:t.isActive?t.activeColor:t.linkColor}},[n("span",{style:{cursor:t.href?"pointer":""}},[t._v(t._s(t.title))])])],1),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e()],1)},staticRenderFns:[]}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},VA5K:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"card_membership",title:"Invoices",items:[{title:"Generate Invoice",href:"/invoices/generate",action:"schedule"},{title:"Invoices",href:"/invoices",action:"all_inbox"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},XKz9:function(t,e,n){var r=n("vs+F");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("94e1a2c6",r,!0,{})},daS7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"blue-grey",attrs:{clipped:t.$vuetify.breakpoint.width<=1264&&!0,fixed:"","hide-overlay":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"blue-grey",attrs:{dense:""}},[t.$auth.check("admin")?n("v-subheader",{staticClass:"white--text"},[t._v("Admin Area")]):t._e(),t._v(" "),t.$auth.check("warehouse")?n("v-subheader",{staticClass:"white--text"},[t._v("Warehouse Area")]):t._e(),t._v(" "),t.$auth.check("customer")?n("v-subheader",{staticClass:"white--text"},[t._v("Customer Area")]):t._e(),t._v(" "),t.$auth.check(["admin","customer","warehouse"])?n("v-link",{attrs:{title:"Dashboard",href:"/dashboard",icon:"fa-tachometer","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Users",href:"/users",icon:"supervised_user_circle","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Shippers",href:"/shippers",icon:"fa-ship","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Rates",href:"/rates",icon:"attach_money","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Bins",href:"/bins",icon:"view_module","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Receiving",href:"/receiving",icon:"receipt","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("inventory-links"),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Logistics",href:"/logistics",icon:"confirmation_number","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Miscellaneous",href:"/miscellaneous",icon:"note_add","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("invoice-links"),t._v(" "),t.$auth.check(["warehouse"])?n("v-link",{attrs:{title:"Warehouse",href:"/warehouse",icon:"location_city","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["customer"])?n("v-link",{attrs:{title:"Clients",href:"/clients",icon:"business_center","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Settings",href:"/settings",icon:"fa-cogs","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Logout",href:"/logout",icon:"power_settings_new","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e()],1)],1)},staticRenderFns:[]}},deHX:function(t,e,n){var r=n("VU/8")(n("VA5K"),n("/Yw+"),!1,function(t){n("Mj/S")},null,null);t.exports=r.exports},"f+SC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dark:{type:Boolean,default:function(){return!1}},href:{type:String,required:!0},title:{type:String,required:!0},avatar:{type:String,default:function(){return""}},icon:{type:String,default:function(){return""}},iconColor:{type:String,default:function(){return this.dark?"#fafafa":"#78909C"}},linkColor:{type:String,default:function(){return this.dark?"#fafafa":"#e3b500"}},activeColor:{type:String,default:function(){return"#f5c300"}}},computed:{isActive:function(){return this.href===this.$route.path},isDark:function(){return!0===this.dark},avatarOn:function(){return!!this.avatar},iconOn:function(){return!!this.icon}},methods:{navigate:function(t){this.isURL(t)?window.open(t):this.$router.push({path:""+t})},isURL:function(t){var e=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");return t.length<2083&&e.test(t)}}}},g4we:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{extension:!1,showLogo:!1,logo:"/img/logo.png",showIcon:!1,title:"DSG Live"}},created:function(){var t=this;Bus.$on("header-extension-visible",function(e){t.extension=e})},methods:{toggleDrawer:function(){Bus.$emit("toggleDrawer")}}}},gvVL:function(t,e,n){"use strict";e.a={methods:{errorMessages:function(t){return this.errors.collect(t).concat(this.form.errors.only(t))},hasErrors:function(t){return this.errors.collect(t).concat(this.form.errors.only(t)).length>0}}}},jTAZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},ockC:function(t,e,n){var r=n("VU/8")(n("g4we"),n("2xzx"),!1,function(t){n("JRPR")},null,null);t.exports=r.exports},onlB:function(t,e,n){var r=n("VU/8")(n("N76W"),n("1zB9"),!1,null,null,null);t.exports=r.exports},rjj0:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n("tTVk"),o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},f=null,d="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(_(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(_(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function p(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function _(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(v){var i=c++;r=s||(s=p()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=p(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){l=n,f=r||{};var a=i(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=o[s.id]).refs--,n.push(c)}e?h(a=i(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}};var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function y(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},"rv2+":function(t,e,n){var r=n("VU/8")(n("GRBD"),n("LRiQ"),!1,null,null,null);t.exports=r.exports},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},"vs+F":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}}});