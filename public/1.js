webpackJsonp([1],{"/Yw+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$auth.check("admin")?a("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return a("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return a("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(a){t.loadview(e)}}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),a("v-list-tile-action",[a("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"/lvI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{stats:{clients:null,receiving:null,damaged:null,unknown:null,undelivered:null,balance:null}}},mounted:function(){this.getStats()},methods:{getStats:function(){var t=this;axios.post(route("api.dashboard.customer.getStats")).then(function(e){t.stats=e.data.data})}}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"1zB9":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"inspire"}},[e("left-side-bar"),this._v(" "),e("app-nav-bar"),this._v(" "),e("v-content",{staticClass:"white",attrs:{transition:"slide-x-transition",fluid:"","pa-0":"","ma-0":""}},[this._t("default")],2)],1)},staticRenderFns:[]}},"2l/E":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$auth.check("admin")?a("v-list",{staticClass:"blue-grey",attrs:{dark:""}},t._l(t.items,function(e){return a("v-list-group",{key:e.title,attrs:{"no-action":"","active-class":"accent--text"},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.action))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1),t._v(" "),t._l(e.items,function(e){return a("v-list-tile",{key:e.title,style:{color:t.isActive(e)?t.activeColor:t.linkColor},on:{click:function(a){t.loadview(e)}}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),a("v-list-tile-action",[a("v-icon",{attrs:{color:t.isActive(e)?"teal":"white"}},[t._v(t._s(e.action))])],1)],1)})],2)})):t._e()},staticRenderFns:[]}},"2xzx":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{color:"primary",fixed:"",app:""}},[a("v-toolbar-side-icon",{staticClass:"white--text",nativeOn:{click:function(e){e.stopPropagation(),t.toggleDrawer()}}}),t._v(" "),t.extension?a("v-toolbar-title",{staticClass:"text-xs-center ml-0 pl-3",class:t.$vuetify.breakpoint.width<=1264&&"pr-3",style:t.$vuetify.breakpoint.width>1264&&"width: 300px",attrs:{slot:"extension"},slot:"extension"},[t.showIcon?a("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),a("span",{staticClass:"hidden-md-and-down"},[a("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1):a("v-toolbar-title",{staticClass:"text-xs-center"},[t.showIcon?a("v-icon",{staticClass:"ml-3 hidden-md-and-down accent"},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),a("span",{staticClass:"hidden-md-and-down"},[a("span",{staticClass:"white--text"},[t._v(t._s(t.title))])])],1),t._v(" "),a("v-spacer"),t._v(" "),t.showLogo?a("img",{staticClass:"hidden-md-and-up",attrs:{src:t.logo}}):t._e(),t._v(" "),a("v-spacer")],1)},staticRenderFns:[]}},"35CK":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","pa-5":"","ma-5":""}},[a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"amber lighten-4"}},[t._v("fa-users")]),t._v(" Clients: "+t._s(t.stats.clients)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Active Clients)")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"brown lighten-3"}},[t._v("location_city")]),t._v(" Receiving  : "+t._s(t.stats.receiving)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Actived DSG)")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"teal lighten-4"}},[t._v("receipt")]),t._v(" Unpaid: "+t._s(t.stats.balance)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Balance)")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"red accent-1"}},[t._v("broken_image")]),t._v(" Damaged Items: "+t._s(t.stats.damaged)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Needs Repair)")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"blue lighten-5"}},[t._v("fa-question-circle")]),t._v(" Unknown Clients: "+t._s(t.stats.unknown)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Needs Identification)")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"110px"}},[a("v-card-text",{staticClass:"title pa-5"},[a("v-icon",{attrs:{large:"",color:"indigo lighten-4"}},[t._v("fa-truck")]),t._v(" Undelivered: "+t._s(t.stats.undelivered)+"\n        "),a("br"),t._v(" "),a("span",{staticClass:"caption"},[t._v("(Available For Delivery)")])],1)],1)],1)],1)},staticRenderFns:[]}},"5t+f":function(t,e,a){var i=a("VU/8")(a("EU3A"),a("daS7"),!1,null,null,null);t.exports=i.exports},"7/uR":function(t,e,a){var i=a("VU/8")(a("f+SC"),a("V3I1"),!1,function(t){a("AbWS")},"data-v-9d2d5a76",null);t.exports=i.exports},"7lh9":function(t,e,a){var i=a("Dvs+");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("67f6b21e",i,!0,{})},AbWS:function(t,e,a){var i=a("Qkdk");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2ab3e8dc",i,!0,{})},"B+0i":function(t,e,a){var i=a("VU/8")(a("dK5C"),a("d3EM"),!1,function(t){a("loWG")},null,null);t.exports=i.exports},DKZf:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var i,n=a("woOf"),s=(i=n)&&i.__esModule?i:{default:i};e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}},"Dvs+":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},EU3A:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s=a("7/uR"),r=a.n(s),o=a("NYxO"),c=a("PS5i"),l=a.n(c),u=a("deHX"),v=a.n(u),d=Object(o.b)("auth").mapState;e.default={components:{VLink:r.a,InventoryLinks:l.a,InvoiceLinks:v.a},data:function(){return{drawer:!1}},computed:n()({},d({isAuthenticated:"isAuthenticated"})),created:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return this.drawer=!1;case"md":case"lg":case"xl":return this.drawer=!0}},mounted:function(){var t=this;Bus.$on("toggleDrawer",function(){t.drawer=!t.drawer})}}},EpMA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"collections_bookmark",title:"Inventories",items:[{title:"Unknown Report",href:"/reports/unknown",action:"fa-question-circle"},{title:"Damaged Report",href:"/reports/damaged",action:"broken_image"},{title:"Bin Report",href:"/reports/bin",action:"apps"},{title:"Customer Report",href:"/reports/customer",action:"local_library"},{title:"Client Report",href:"/reports/clients",action:"perm_contact_calendar"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},FHDG:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main-layout",[this.$auth.check(["admin","warehouse"])?e("admin-dash-panel"):this._e(),this._v(" "),this.$auth.check("customer")?e("customer-dash-panel"):this._e()],1)},staticRenderFns:[]}},JRPR:function(t,e,a){var i=a("jTAZ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("19ca4adb",i,!0,{})},"Mj/S":function(t,e,a){var i=a("DKZf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("f995ac46",i,!0,{})},N76W:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("ockC"),n=a.n(i),s=a("5t+f"),r=a.n(s);e.default={components:{AppNavBar:n.a,LeftSideBar:r.a}}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},PS5i:function(t,e,a){var i=a("VU/8")(a("EpMA"),a("2l/E"),!1,function(t){a("XKz9")},null,null);t.exports=i.exports},Qkdk:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".styleAvatar[data-v-9d2d5a76]{position:relative;margin-left:-55px}",""])},R4wc:function(t,e,a){var i=a("kM2E");i(i.S+i.F,"Object",{assign:a("To3L")})},RFxC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("onlB"),n=a.n(i),s=a("B+0i"),r=a.n(s),o=a("mJy+"),c=a.n(o);e.default={components:{MainLayout:n.a,AdminDashPanel:r.a,CustomerDashPanel:c.a}}},T8Ha:function(t,e,a){var i=a("VU/8")(a("RFxC"),a("FHDG"),!1,null,null,null);t.exports=i.exports},To3L:function(t,e,a){"use strict";var i=a("lktj"),n=a("1kS7"),s=a("NpIQ"),r=a("sB3e"),o=a("MU5D"),c=Object.assign;t.exports=!c||a("S82l")(function(){var t={},e={},a=Symbol(),i="abcdefghijklmnopqrst";return t[a]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var a=r(t),c=arguments.length,l=1,u=n.f,v=s.f;c>l;)for(var d,f=o(arguments[l++]),h=u?i(f).concat(u(f)):i(f),p=h.length,_=0;p>_;)v.call(f,d=h[_++])&&(a[d]=f[d]);return a}:c},V3I1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-tile",{class:[{styleAvatar:t.avatarOn}],attrs:{avatar:t.avatarOn},nativeOn:{click:function(e){t.navigate(t.href)}}},[t.iconOn&&!t.avatarOn?a("v-list-tile-action",[a("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e(),t._v(" "),t.iconOn&&t.avatarOn?a("v-list-tile-avatar",[a("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{style:{color:t.isActive?t.activeColor:t.linkColor}},[a("span",{style:{cursor:t.href?"pointer":""}},[t._v(t._s(t.title))])])],1),t._v(" "),t.iconOn&&t.avatarOn?a("v-list-tile-action",[a("v-icon",{style:{color:t.isActive?t.activeColor:t.iconColor,cursor:t.href?"pointer":""}},[t._v(t._s(t.icon))])],1):t._e()],1)},staticRenderFns:[]}},V3tA:function(t,e,a){a("R4wc"),t.exports=a("FeBl").Object.assign},VA5K:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeColor:"#4DB6AC",linkColor:"#fffff",items:[{action:"card_membership",title:"Invoices",items:[{title:"Generate Invoice",href:"/invoices/generate",action:"schedule"},{title:"Invoices",href:"/invoices",action:"all_inbox"}]}]}},methods:{isActive:function(t){return t.href===this.$route.path},loadview:function(t){this.$router.push({path:""+t.href})}}}},XKz9:function(t,e,a){var i=a("vs+F");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("94e1a2c6",i,!0,{})},d3EM:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","px-5":"","mx-5":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-alert",{staticClass:"text-xs-center blue-grey--text",attrs:{value:!0,type:"info","my-0":"","py-0":"","mx-3":"","px-3":""}},[t._v("\n      Note: Press Ctrl or CMD + F5 To Do Hard Page Refresh If You Experience Blank Page Unresponsive Due to Old Cached Of Assets (Only In Development Stage)\n    ")])],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"pink lighten-4"}},[t._v("\n          supervised_user_circle\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Unknown Customer")]),t._v("\n        "+t._s(t.stats.unknown_customer)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"cyan lighten-3"}},[t._v("\n          person_pin\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Unknown Client")]),t._v("\n        "+t._s(t.stats.unknown_client)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"indigo lighten-5"}},[t._v("\n          directions_boat\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Unknown Shipper")]),t._v("\n        "+t._s(t.stats.unknown_shipper)+"\n        "),a("br")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"brown lighten-3"}},[t._v("\n          domain\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Dsg Warehouse")]),t._v("\n        "+t._s(t.stats.dsg_warehouse)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"teal lighten-3"}},[t._v("\n          receipt\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Dsg Receiving")]),t._v("\n        "+t._s(t.stats.dsg_receiving)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"blue-grey lighten-5"}},[t._v("\n          archive\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Archived DSG")]),t._v("\n        "+t._s(t.stats.dsg_archived)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"amber lighten-2"}},[t._v("\n          fa-truck\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Undelivered Packages")]),t._v("\n        "+t._s(t.stats.undelivered)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"red accent-4"}},[t._v("\n          broken_image\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Damaged Packages")]),t._v("\n        "+t._s(t.stats.damaged_packages)+"\n      ")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:"","text-xs-center":""}},[a("v-card",{staticClass:"ma-1",attrs:{color:"blue-grey white--text",height:"150px"}},[a("v-card-text",{staticClass:"title",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"150px"}},[a("v-icon",{attrs:{"x-large":"",color:"blue lighten-2"}},[t._v("\n          build\n        ")]),t._v(" "),a("v-subheader",{staticClass:"white--text"},[t._v("Repaired Packages")]),t._v("\n        "+t._s(t.stats.repaired_packages)+"\n      ")],1)],1)],1)],1)},staticRenderFns:[]}},dK5C:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{stats:{dsg_warehouse:null,dsg_receiving:null,dsg_archived:null,repaired_packages:null,damaged_packages:null,unknown_customer:null,unknown_client:null,undelivered:null}}},mounted:function(){this.getStats()},methods:{getStats:function(){var t=this;axios.post(route("api.dashboard.admin.getStats")).then(function(e){t.stats=e.data.data})}}}},daS7:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"blue-grey",attrs:{clipped:t.$vuetify.breakpoint.width<=1264&&!0,fixed:"","hide-overlay":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"blue-grey",attrs:{dense:""}},[t.$auth.check("admin")?a("v-subheader",{staticClass:"white--text"},[t._v("Admin Area")]):t._e(),t._v(" "),t.$auth.check("warehouse")?a("v-subheader",{staticClass:"white--text"},[t._v("Warehouse Area")]):t._e(),t._v(" "),t.$auth.check("customer")?a("v-subheader",{staticClass:"white--text"},[t._v("Customer Area")]):t._e(),t._v(" "),t.$auth.check(["admin","customer","warehouse"])?a("v-link",{attrs:{title:"Dashboard",href:"/dashboard",icon:"fa-tachometer","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Users",href:"/users",icon:"supervised_user_circle","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Shippers",href:"/shippers",icon:"fa-ship","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Rates",href:"/rates",icon:"attach_money","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Bins",href:"/bins",icon:"view_module","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Receiving",href:"/receiving",icon:"receipt","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),a("inventory-links"),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Logistics",href:"/logistics",icon:"confirmation_number","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check("admin")?a("v-link",{attrs:{title:"Miscellaneous",href:"/miscellaneous",icon:"note_add","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),a("invoice-links"),t._v(" "),t.$auth.check(["warehouse"])?a("v-link",{attrs:{title:"Warehouse",href:"/warehouse",icon:"location_city","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check(["customer"])?a("v-link",{attrs:{title:"Clients",href:"/clients",icon:"business_center","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?a("v-link",{attrs:{title:"Settings",href:"/settings",icon:"fa-cogs","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e(),t._v(" "),t.$auth.check()?a("v-link",{attrs:{title:"Logout",href:"/logout",icon:"power_settings_new","link-color":"white","active-color":"#4db6ac","icon-color":"#fafafa"}}):t._e()],1)],1)},staticRenderFns:[]}},deHX:function(t,e,a){var i=a("VU/8")(a("VA5K"),a("/Yw+"),!1,function(t){a("Mj/S")},null,null);t.exports=i.exports},"f+SC":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dark:{type:Boolean,default:function(){return!1}},href:{type:String,required:!0},title:{type:String,required:!0},avatar:{type:String,default:function(){return""}},icon:{type:String,default:function(){return""}},iconColor:{type:String,default:function(){return this.dark?"#fafafa":"#78909C"}},linkColor:{type:String,default:function(){return this.dark?"#fafafa":"#e3b500"}},activeColor:{type:String,default:function(){return"#f5c300"}}},computed:{isActive:function(){return this.href===this.$route.path},isDark:function(){return!0===this.dark},avatarOn:function(){return!!this.avatar},iconOn:function(){return!!this.icon}},methods:{navigate:function(t){this.isURL(t)?window.open(t):this.$router.push({path:""+t})},isURL:function(t){var e=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");return t.length<2083&&e.test(t)}}}},g4we:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{extension:!1,showLogo:!1,logo:"/img/logo.png",showIcon:!1,title:"DSG Live"}},created:function(){var t=this;Bus.$on("header-extension-visible",function(e){t.extension=e})},methods:{toggleDrawer:function(){Bus.$emit("toggleDrawer")}}}},jTAZ:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},kdyq:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},loWG:function(t,e,a){var i=a("kdyq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2def5961",i,!0,{})},"mJy+":function(t,e,a){var i=a("VU/8")(a("/lvI"),a("35CK"),!1,function(t){a("7lh9")},null,null);t.exports=i.exports},ockC:function(t,e,a){var i=a("VU/8")(a("g4we"),a("2xzx"),!1,function(t){a("JRPR")},null,null);t.exports=i.exports},onlB:function(t,e,a){var i=a("VU/8")(a("N76W"),a("1zB9"),!1,null,null,null);t.exports=i.exports},rjj0:function(t,e,a){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,l=!1,u=function(){},v=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var a=t[e],i=s[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(_(a.parts[n]));i.parts.length>a.parts.length&&(i.parts.length=a.parts.length)}else{var r=[];for(n=0;n<a.parts.length;n++)r.push(_(a.parts[n]));s[a.id]={id:a.id,refs:1,parts:r}}}}function p(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function _(t){var e,a,i=document.querySelector("style["+d+'~="'+t.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(f){var n=c++;i=o||(o=p()),e=m.bind(null,i,n,!1),a=m.bind(null,i,n,!0)}else i=p(),e=function(t,e){var a=e.css,i=e.media,n=e.sourceMap;i&&t.setAttribute("media",i);v.ssrId&&t.setAttribute(d,e.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,i),a=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else a()}}t.exports=function(t,e,a,i){l=a,v=i||{};var r=n(t,e);return h(r),function(e){for(var a=[],i=0;i<r.length;i++){var o=r[i];(c=s[o.id]).refs--,a.push(c)}e?h(r=n(t,e)):r=[];for(i=0;i<a.length;i++){var c;if(0===(c=a[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}};var x,g=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function m(t,e,a,i){var n=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],i={},n=0;n<e.length;n++){var s=e[n],r=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(o):a.push(i[r]={id:r,parts:[o]})}return a}},"vs+F":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".v-list__group__header__append-icon{color:#fff!important}",""])},woOf:function(t,e,a){t.exports={default:a("V3tA"),__esModule:!0}}});