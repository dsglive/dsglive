webpackJsonp([17],{"/Yw+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.check("admin")?n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1zB9":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"inspire"}},[e("left-side-bar"),this._v(" "),e("app-nav-bar"),this._v(" "),e("v-content",{staticClass:"white",attrs:{transition:"slide-x-transition",fluid:"","pa-0":"","ma-0":""}},[this._t("default")],2)],1)},staticRenderFns:[]}},"2gGM":function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=0)}({0:function(t,e,n){t.exports=n("lVK7")},OMN4:function(t,e){t.exports=n("mtWM")},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OMN4"),i=n.n(r);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){if(null===t||"object"!==a(t))return t;var e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(function(n){e[n]=o(t[n])}),e}function s(t){return Array.isArray(t)?t:[t]}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,r;return e=t,(n=[{key:"set",value:function(t,e){var n,r,i;"object"===c(t)?this.errors=t:this.set(l({},this.errors,(n={},r=t,i=s(e),r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)))}},{key:"all",value:function(){return this.errors}},{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"hasAny",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.some(function(e){return t.has(e)})}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.has(t))return this.getAll(t)[0]}},{key:"getAll",value:function(t){return s(this.errors[t]||[])}},{key:"only",value:function(){for(var t=this,e=[],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){var r=t.get(n);r&&e.push(r)}),e}},{key:"flatten",value:function(){return Object.values(this.errors).reduce(function(t,e){return t.concat(e)},[])}},{key:"clear",value:function(t){var e=this,n={};t&&Object.keys(this.errors).forEach(function(r){r!==t&&(n[r]=e.errors[r])}),this.set(n)}}])&&u(e.prototype,n),r&&u(e,r),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.busy=!1,this.successful=!1,this.errors=new f,this.originalData=o(e),Object.assign(this,e)}var e,n,r;return e=t,(n=[{key:"fill",value:function(t){var e=this;this.keys().forEach(function(n){e[n]=t[n]})}},{key:"data",value:function(){var t=this;return this.keys().reduce(function(e,n){return v({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t[n]))},{})}},{key:"keys",value:function(){return Object.keys(this).filter(function(e){return!t.ignore.includes(e)})}},{key:"startProcessing",value:function(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function(){this.busy=!1,this.successful=!0}},{key:"clear",value:function(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function(){var e=this;Object.keys(this).filter(function(e){return!t.ignore.includes(e)}).forEach(function(t){e[t]=o(e.originalData[t])})}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing();var a="get"===t?{params:this.data()}:this.data();return new Promise(function(o,s){i.a.request(v({url:n.route(e),method:t,data:a},r)).then(function(t){n.finishProcessing(),o(t)}).catch(function(t){n.busy=!1,t.response&&n.errors.set(n.extractErrors(t.response)),s(t)})})}},{key:"extractErrors",value:function(e){return e.data&&"object"===d(e.data)?e.data.errors?v({},e.data.errors):e.data.message?{error:e.data.message}:v({},e.data):{error:t.errorMessage}}},{key:"route",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;return t.routes.hasOwnProperty(e)&&(r=decodeURI(t.routes[e])),"object"!==d(n)&&(n={id:n}),Object.keys(n).forEach(function(t){r=r.replace("{".concat(t,"}"),n[t])}),r}},{key:"onKeydown",value:function(t){t.target.name&&this.errors.clear(t.target.name)}}])&&p(e.prototype,n),r&&p(e,r),t}();h.routes={},h.errorMessage="Something went wrong. Please try again.",h.ignore=["busy","successful","errors","originalData"];var m=h;function _(t,e,n,r,i,a,o,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId=a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}var g=_({name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}},function(){var t=this.$createElement,e=this._self._c||t;return this.form.errors.has(this.field)?e("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:this._s(this.form.errors.get(this.field))}}):this._e()},[],!1,null,null,null).exports,y={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.dismissible&&this.form.clear()}}},b=_({name:"alert-error",extends:y,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[t.form.errors.has("error")?n("div",{domProps:{innerHTML:t._s(t.form.errors.get("error"))}}):n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports,x=_({name:"alert-errors",extends:y,props:{message:{type:String,default:"There were some problems with your input."}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.errors.any()?n("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t.message?n("div",{domProps:{innerHTML:t._s(t.message)}}):t._e(),t._v(" "),n("ul",t._l(t.form.errors.flatten(),function(e){return n("li",{domProps:{innerHTML:t._s(e)}})}))]):t._e()},[],!1,null,null,null).exports,k=_({name:"alert-success",extends:y,props:{message:{type:String,default:""}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.form.successful?n("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t.dismissible?n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e(),t._v(" "),t._t("default",[n("div",{domProps:{innerHTML:t._s(t.message)}})])],2):t._e()},[],!1,null,null,null).exports;n.d(e,"Form",function(){return m}),n.d(e,"Errors",function(){return f}),n.d(e,"HasError",function(){return g}),n.d(e,"AlertError",function(){return b}),n.d(e,"AlertErrors",function(){return x}),n.d(e,"AlertSuccess",function(){return k}),n.d(e,"default",function(){return m})}})},"2l/E":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$auth.check("admin")?n("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(n){t.loadview(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"2xzx":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[n("v-toolbar-side-icon",{staticClass:"white--text",nativeOn:{click:function(e){e.stopPropagation(),t.toggleDrawer()}}}),t._v(" "),t.extension?n("v-toolbar-title",{staticClass:"text-xs-center ml-0 pl-3",class:t.$vuetify.breakpoint.width<=1264&&"pr-3",style:t.$vuetify.breakpoint.width>1264&&"width: 300px",attrs:{slot:"extension"},slot:"extension"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1):n("v-toolbar-title",{staticClass:"text-xs-center"},[t.showIcon?n("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1),t._v(" "),n("v-spacer"),t._v(" "),t.showLogo?n("img",{staticClass:"hidden-md-and-up",attrs:{src:t.logo}}):t._e(),t._v(" "),n("v-spacer")],1)},staticRenderFns:[]}},"5t+f":function(t,e,n){var r=n("VU/8")(n("EU3A"),n("daS7"),!1,null,null,null);t.exports=r.exports},"7/uR":function(t,e,n){var r=n("VU/8")(n("f+SC"),n("V3I1"),!1,function(t){n("AbWS")},"data-v-9d2d5a76",null);t.exports=r.exports},AbWS:function(t,e,n){var r=n("Qkdk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("2ab3e8dc",r,!0,{})},DKZf:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("woOf"),a=(r=i)&&r.__esModule?r:{default:r};e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},EU3A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),a=n("7/uR"),o=n.n(a),s=n("NYxO"),l=n("PS5i"),c=n.n(l),u=n("deHX"),f=n.n(u),d=Object(s.b)("auth").mapState;e.default={components:{VLink:o.a,InventoryLinks:c.a,InvoiceLinks:f.a},data:function(){return{drawer:!1}},computed:i()({},d({isAuthenticated:"isAuthenticated"})),created:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return this.drawer=!1;case"md":case"lg":case"xl":return this.drawer=!0}},mounted:function(){var t=this;Bus.$on("toggleDrawer",function(){t.drawer=!t.drawer})}}},EpMA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"collections_bookmark",title:"Inventories",items:[{title:"Unknown Report",href:"/reports/unknown",action:"fa-question-circle"},{title:"Damaged Report",href:"/reports/damaged",action:"broken_image"},{title:"Bin Report",href:"/reports/bin",action:"apps"},{title:"Customer Report",href:"/reports/customer",action:"local_library"},{title:"Client Report",href:"/reports/clients",action:"perm_contact_calendar"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},JRPR:function(t,e,n){var r=n("jTAZ");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("19ca4adb",r,!0,{})},"Mj/S":function(t,e,n){var r=n("DKZf");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("f995ac46",r,!0,{})},N76W:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("ockC"),i=n.n(r),a=n("5t+f"),o=n.n(a);e.default={components:{AppNavBar:i.a,LeftSideBar:o.a}}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4ta:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),a=n("exGp"),o=n.n(a),s=n("onlB"),l=n.n(s),c=n("gvVL"),u=n("2gGM"),f=(n.n(u),n("e7x4")),d=n.n(f);e.default={components:{MainLayout:l.a},mixins:[c.a],data:function(){return{contentClass:{grey:!0,"lighten-4":!0,"accent--text":!0},dialog:!1,headers:[{text:"Name",value:"name",align:"left",sortable:!0},{text:"Email",value:"email",align:"left",sortable:!0},{text:"Actions",value:"actions",align:"center",sortable:!1}],items:[],selected:[],pagination:{sortBy:"name"},clientsForm:new u.Form({}),toggleForm:new u.Form({toggle:!1,client_id:null}),search:"",deleteClientForm:new u.Form({client_id:null}),domain:window.location.hostname}},watch:{items:{handler:function(t){},deep:!0}},mounted:function(){this.fetchClients()},methods:{editClient:function(t){vm.$router.push({name:"edit-client",params:{id:""+t.id}})},createClient:function(){vm.$router.push({name:"create-client"})},toggleStatus:function(t){this.toggleForm.toggle=t.active,this.toggleForm.client_id=t.id,axios.post(route("api.client.toggleStatus"),this.toggleForm).then(function(t){console.log(t.data)}).catch(function(t){d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Oops! Forbidden Action!",html:'<p class="title">'+t.response.data.message+"</p>",type:"warning",confirmButtonText:"Back"})})},getStatus:function(t){return t?"Active":"Inactive"},fetchClients:function(){var t=o()(i.a.mark(function t(){var e,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).clientsForm.busy=!0,t.prev=2,t.next=5,axios.post(route("api.client.index"),e.clientsForm);case 5:n=t.sent,e.items=n.data.data,e.clientsForm=new u.Form({}),t.next=17;break;case 10:t.prev=10,t.t0=t.catch(2),r=t.t0.errors,t.t0.message,r&&e.clientsForm.errors.set(r),e.clientsForm.busy=!1;case 17:case"end":return t.stop()}},t,this,[[2,10]])}));return function(){return t.apply(this,arguments)}}(),deleteClient:function(t){var e=this;e.deleteClientForm.client_id=t.id;var n=_.findIndex(e.items,{id:t.id});axios.post(route("api.client.delete"),e.deleteClientForm).then(function(t){!0===t.data.status&&(e.$delete(e.items,n),d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success",html:'<p class="title">Client Deleted!</p>',type:"success",confirmButtonText:"Back"}))}).catch(function(t){d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Oops! Forbidden Action!",html:'<p class="title">'+t.response.data.message+"</p>",type:"warning",confirmButtonText:"Back"})})},massDeactivate:function(){var t=o()(i.a.mark(function t(){var e,n,r,a,o,s,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n=_.map(e.selected,"id"),r=new u.Form({selected:n}),t.prev=3,t.next=6,axios.post(route("api.client.massDeactivate"),r);case 6:a=t.sent,o=a.data.updated,console.log(o),_.map(o,function(t){var n=_.findIndex(e.items,{id:t});e.items[n].active=!1}),d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success",html:'<p class="title">'+a.data.message+"</p>",type:"success",confirmButtonText:"Back"}),t.next=20;break;case 14:t.prev=14,t.t0=t.catch(3),s=t.t0.errors,l=t.t0.message,s&&console.log(s),l&&console.log(l);case 20:case"end":return t.stop()}},t,this,[[3,14]])}));return function(){return t.apply(this,arguments)}}(),massActivate:function(){var t=o()(i.a.mark(function t(){var e,n,r,a,o,s,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n=_.map(e.selected,"id"),r=new u.Form({selected:n}),t.prev=3,t.next=6,axios.post(route("api.client.massActivate"),r);case 6:a=t.sent,o=a.data.updated,console.log(o),_.map(o,function(t){var n=_.findIndex(e.items,{id:t});e.items[n].active=!0}),d.a.mixin({confirmButtonClass:"v-btn blue-grey  subheading white--text",buttonsStyling:!1})({title:"Success",html:'<p class="title">'+a.data.message+"</p>",type:"success",confirmButtonText:"Back"}),t.next=20;break;case 14:t.prev=14,t.t0=t.catch(3),s=t.t0.errors,l=t.t0.message,s&&console.log(s),l&&console.log(l);case 20:case"end":return t.stop()}},t,this,[[3,14]])}));return function(){return t.apply(this,arguments)}}(),toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.items.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}}}},"PK/p":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",xs12:"",sm7:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{light:"",flat:""}},[n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"search",label:"Search Clients","single-line":"","hide-details":"",light:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{"d-flex":"",xs12:"",sm5:"","child-flex":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"white",attrs:{xs12:"","d-flex":""}},[n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),block:"",color:"primary",dark:"",flat:""},on:{click:t.createClient}},[t._v("\n              Create New Client\n              "),n("v-icon",{attrs:{right:"",color:"primary"}},[t._v("\n                fa-user-plus\n              ")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"","d-flex":""}},[n("v-flex",{staticClass:"xs6 white"},[t.selected.length>0?n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),block:"",color:"blue darken-4",dark:"",flat:""},on:{click:t.massActivate}},[n("v-icon",{attrs:{large:"",color:"blue darken-4"}},[t._v("\n                  link\n                ")]),t._v("\n                Activate Selected\n              ")],1):t._e()],1),t._v(" "),n("v-flex",{staticClass:"xs6 white"},[t.selected.length>0?n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),block:"",flat:"",color:"error",dark:""},on:{click:t.massDeactivate}},[n("v-icon",{attrs:{large:"",color:"error"}},[t._v("\n                  link_off\n                ")]),t._v("\n                Deactivate Selected\n              ")],1):t._e()],1)],1)],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search,pagination:t.pagination,"select-all":"","item-key":"id",expand:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",t._l(e.headers,function(e){return n("th",{key:e.text,class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"name":"",{"text-xs-left":"left"===e.align,"text-xs-right":"right"===e.align,"text-xs-center":"center"===e.align},t.$vuetify.breakpoint.width>=600&&"title"],on:{click:function(n){t.changeSort(e.value)}}},[n("span",[n("v-icon",[t._v("arrow_upward")]),t._v("\n              "+t._s(e.text)+"\n            ")],1)])}))]}},{key:"items",fn:function(e){return[n("tr",[n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.name)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-left accent--text"},[t._v("\n            "+t._s(e.item.email)+"\n          ")]),t._v(" "),n("td",{staticClass:"title text-xs-center"},[n("v-flex",{staticClass:"xs12"},[n("v-btn",{class:{"amber--text":e.expanded,amber:e.expanded,teal:!e.expanded,"teal--text":!e.expanded},attrs:{disabled:!t.$auth.check("customer"),light:"",flat:"",icon:""},on:{click:function(t){e.expanded=!e.expanded}}},[e.expanded?t._e():n("v-icon",[t._v("fa-expand")]),t._v(" "),e.expanded?n("v-icon",[t._v("fa-compress")]):t._e()],1)],1),t._v(" "),n("v-flex",{staticClass:"xs12"},[n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),flat:"",icon:"",color:"blue"},on:{click:function(n){t.editClient(e.item)}}},[n("v-icon",[t._v("fa-pencil")])],1)],1),t._v(" "),n("v-flex",{staticClass:"xs12"},[n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),flat:"",icon:"",color:"error"},on:{click:function(n){t.deleteClient(e.item)}}},[n("v-icon",[t._v("fa-trash")])],1)],1)],1)])]}},{key:"pageText",fn:function(e){var n=e.pageStart,r=e.pageStop;return[t._v("\n        From "+t._s(n)+" to "+t._s(r)+"\n      ")]}},{key:"expand",fn:function(e){return[n("v-container",{attrs:{fluid:""}},[n("v-card",{attrs:{light:"",flat:"","text-xs-center":""}},[n("v-card-media",{staticClass:"white--text blue-grey",attrs:{height:"75px"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[t._v(t._s(e.item.name))])])],1)],1)],1),t._v(" "),n("v-card-title",[n("v-container",{attrs:{fluid:""}},[n("p",{staticClass:"title accent--text"},[t._v("\n                  Account Details\n                ")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{label:"Email","prepend-icon":"fa-envelope",light:"",readonly:""},model:{value:e.item.email,callback:function(n){t.$set(e.item,"email",n)},expression:"props.item.email"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{label:"Phone",light:"",readonly:"","prepend-icon":"phone"},model:{value:e.item.phone,callback:function(n){t.$set(e.item,"phone",n)},expression:"props.item.phone"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.address_1,label:"Address 1",light:"",readonly:"","prepend-icon":"looks_one"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.address_2,label:"Address 2",light:"",readonly:"","prepend-icon":"looks_two"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.city,label:"City",light:"",readonly:"","prepend-icon":"location_city"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.state,label:"State",light:"",readonly:"","prepend-icon":"map"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.zip,label:"Zip",light:"",readonly:"","prepend-icon":"markunread_mailbox"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","px-1":""}},[n("v-text-field",{attrs:{value:e.item.country,label:"Country",light:"",readonly:"","prepend-icon":"flag"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-switch",{attrs:{label:t.getStatus(e.item.active),readonly:""},model:{value:e.item.active,callback:function(n){t.$set(e.item,"active",n)},expression:"props.item.active"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{color:"primary",readonly:""},model:{value:e.item.notes,callback:function(n){t.$set(e.item,"notes",n)},expression:"props.item.notes"}},[n("div",{attrs:{slot:"label"},slot:"label"},[n("span",{staticClass:"title"},[t._v("Notes: ")])])])],1)],1)],1)],1)],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("template",{slot:"no-data"},[n("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v("\n          Opps! No Client Yet!, \n          "),n("v-btn",{attrs:{disabled:!t.$auth.check("customer"),color:"primary",flat:"",dark:""},on:{click:t.createClient}},[t._v("\n            Create New Client\n            "),n("v-icon",{attrs:{right:"",color:"primary"}},[t._v("\n              fa-user-plus\n            ")])],1)],1)],1),t._v(" "),n("v-alert",{attrs:{slot:"no-results",value:!0,color:"blue-grey",icon:"warning"},slot:"no-results"},[t._v('\n        Your search for "'+t._s(t.search)+'" found no results.\n      ')])],2)],1)],1)},staticRenderFns:[]}},PS5i:function(t,e,n){var r=n("VU/8")(n("EpMA"),n("2l/E"),!1,function(t){n("XKz9")},null,null);t.exports=r.exports},Qkdk:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".styleAvatar[data-v-9d2d5a76]{position:relative;margin-left:-55px}",""])},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var r=n("lktj"),i=n("1kS7"),a=n("NpIQ"),o=n("sB3e"),s=n("MU5D"),l=Object.assign;t.exports=!l||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r})?function(t,e){for(var n=o(t),l=arguments.length,c=1,u=i.f,f=a.f;l>c;)for(var d,v=s(arguments[c++]),p=u?r(v).concat(u(v)):r(v),h=p.length,m=0;h>m;)f.call(v,d=p[m++])&&(n[d]=v[d]);return n}:l},V3I1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{class:[{styleAvatar:t.avatarOn}],attrs:{avatar:t.avatarOn},nativeOn:{click:function(e){t.navigate(t.href)}}},[t.iconOn&&!t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-avatar",[n("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{style:{color:t.isActive?t.activeColor:t.linkColor}},[n("span",{style:{cursor:t.href?"pointer":""}},[t._v(t._s(t.title))])])],1),t._v(" "),t.iconOn&&t.avatarOn?n("v-list-tile-action",[n("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e()],1)},staticRenderFns:[]}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},VA5K:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"card_membership",title:"Invoices",items:[{title:"Generate Invoice",href:"/invoices/generate",action:"schedule"},{title:"Invoices",href:"/invoices",action:"all_inbox"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},XKz9:function(t,e,n){var r=n("vs+F");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("94e1a2c6",r,!0,{})},Y8fs:function(t,e,n){var r=n("VU/8")(n("O4ta"),n("PK/p"),!1,null,null,null);t.exports=r.exports},daS7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"blue-grey",attrs:{clipped:t.$vuetify.breakpoint.width<=1264&&!0,fixed:"","hide-overlay":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"blue-grey",attrs:{dense:""}},[t.$auth.check("admin")?n("v-subheader",{staticClass:"white--text"},[t._v("Admin Area")]):t._e(),t._v(" "),t.$auth.check("warehouse")?n("v-subheader",{staticClass:"white--text"},[t._v("Warehouse Area")]):t._e(),t._v(" "),t.$auth.check("customer")?n("v-subheader",{staticClass:"white--text"},[t._v("Customer Area")]):t._e(),t._v(" "),t.$auth.check(["admin","customer","warehouse"])?n("v-link",{attrs:{title:"Dashboard",href:"/dashboard",icon:"fa-tachometer","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Users",href:"/users",icon:"supervised_user_circle","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Shippers",href:"/shippers",icon:"fa-ship","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Rates",href:"/rates",icon:"attach_money","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Bins",href:"/bins",icon:"view_module","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Receiving",href:"/receiving",icon:"receipt","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("inventory-links"),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Logistics",href:"/logistics",icon:"confirmation_number","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?n("v-link",{attrs:{title:"Miscellaneous",href:"/miscellaneous",icon:"note_add","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),n("invoice-links"),t._v(" "),t.$auth.check(["warehouse"])?n("v-link",{attrs:{title:"Warehouse",href:"/warehouse",icon:"location_city","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["customer"])?n("v-link",{attrs:{title:"Clients",href:"/clients",icon:"business_center","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Settings",href:"/settings",icon:"fa-cogs","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?n("v-link",{attrs:{title:"Logout",href:"/logout",icon:"power_settings_new","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e()],1)],1)},staticRenderFns:[]}},deHX:function(t,e,n){var r=n("VU/8")(n("VA5K"),n("/Yw+"),!1,function(t){n("Mj/S")},null,null);t.exports=r.exports},"f+SC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dark:{type:Boolean,default:function(){return!1}},href:{type:String,required:!0},title:{type:String,required:!0},avatar:{type:String,default:function(){return""}},icon:{type:String,default:function(){return""}},iconColor:{type:String,default:function(){return this.dark?"#fafafa":"#78909C"}},linkColor:{type:String,default:function(){return this.dark?"#fafafa":"#e3b500"}},activeColor:{type:String,default:function(){return"#f5c300"}}},computed:{isActive:function(){return this.href===this.$route.path},isDark:function(){return!0===this.dark},avatarOn:function(){return!!this.avatar},iconOn:function(){return!!this.icon}},methods:{navigate:function(t){this.isURL(t)?window.open(t):this.$router.push({path:""+t})},isURL:function(t){var e=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");return t.length<2083&&e.test(t)}}}},g4we:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{extension:!1,showLogo:!1,logo:"/img/logo.png",showIcon:!1,title:"DSG Live"}},created:function(){var t=this;Bus.$on("header-extension-visible",function(e){t.extension=e})},methods:{toggleDrawer:function(){Bus.$emit("toggleDrawer")}}}},gvVL:function(t,e,n){"use strict";e.a={methods:{errorMessages:function(t){return this.errors.collect(t).concat(this.form.errors.only(t))},hasErrors:function(t){return this.errors.collect(t).concat(this.form.errors.only(t)).length>0}}}},jTAZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},ockC:function(t,e,n){var r=n("VU/8")(n("g4we"),n("2xzx"),!1,function(t){n("JRPR")},null,null);t.exports=r.exports},onlB:function(t,e,n){var r=n("VU/8")(n("N76W"),n("1zB9"),!1,null,null,null);t.exports=r.exports},rjj0:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n("tTVk"),a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},f=null,d="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(m(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(v){var i=l++;r=s||(s=h()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=h(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,f=r||{};var o=i(t,e);return p(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r];(l=a[s.id]).refs--,n.push(l)}e?p(o=i(t,e)):o=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}};var _,g=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function y(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s={id:t+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}},"vs+F":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}}});