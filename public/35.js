webpackJsonp([35],{"0iHF":function(e,t,a){(t=e.exports=a("FZ+f")(!1)).push([e.i,"",""])},"2yrZ":function(e,t,a){function i(e){a("pwLK")}var n,r=null,s,o=!1,l,d=null,c=null,m=a("VU/8")(null,a("dgbI"),!1,i,null,null);e.exports=m.exports},Da4K:function(e,t,a){function i(e){a("YVGI")}var n,r,s,o=!1,l,d=null,c=null,m=a("VU/8")(a("gDjt"),a("mFbT"),!1,i,null,null);e.exports=m.exports},N7NN:function(e,t){var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("v-card",{attrs:{light:!0}},[a("v-toolbar",{attrs:{color:"primary"}},[a("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:e.close}},[a("v-icon",[e._v("arrow_back")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-title",{staticClass:"white--text"},[e._v("Item # "+e._s(e.id)+" Images")]),e._v(" "),a("v-spacer")],1),e._v(" "),e.images.length>0?a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.images,function(t){return a("v-flex",{key:t,attrs:{xs12:"",md4:"","px-2":"","py-2":""}},[a("v-card-media",{attrs:{src:t,height:"250px",contain:""},on:{click:function(a){e.viewFullImage(t)}}})],1)}))],1):a("v-container",{attrs:{fluid:""}},[a("v-alert",{attrs:{value:!0,type:"info",color:"amber",icon:"warning",transition:"scale-transition",outline:""}},[e._v("\n        No Uploaded Images For This Item\n      ")])],1)],1)],1)},i=[];e.exports={render:a,staticRenderFns:i}},OGqB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{id:{type:String,required:!0},images:{type:Array,required:!0,default:function e(){return[]}}},data:function e(){return{modal:!1}},mounted:function e(){var t=this;Bus.$on("view-package-"+this.id+"-images",function(){t.modal=!0})},methods:{close:function e(){this.modal=!1},viewFullImage:function e(t){window.open(t)}}}},PZOX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("2yrZ"),n=a.n(i),r=a("nkjN"),s=a.n(r),o=a("Da4K"),l=a.n(o);t.default={components:{ModalLayout:n.a,Images:s.a,DamageImages:l.a},props:{id:{type:String,required:!0}},data:function e(){return{item:{},bins:[],handling_rates:[],storage_rates:[]}},watch:{item:{handler:function e(t){},deep:!1}},mounted:function e(){this.fetchPackage()},methods:{viewDamageImages:function e(){Bus.$emit("view-damaged-package-"+this.id+"-images")},viewImages:function e(){Bus.$emit("view-package-"+this.id+"-images")},redirectBack:function e(){var t=this;return t.$nextTick(function(){return t.$router.go(-1)})},fetchPackage:function e(){var t=this;axios.post(route("api.report.viewPackage",{package:this.id})).then(function(e){t.item=e.data.data})},getDamageStatus:function e(t){return t?"Damaged: Yes":"Damaged: No"},getRepairedStatus:function e(t){return t?"Repaired: Yes":"Repaired: No"}}}},YVGI:function(e,t,a){var i=a("aCck");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("rjj0")("6be32da2",i,!0,{})},aCck:function(e,t,a){(t=e.exports=a("FZ+f")(!1)).push([e.i,"",""])},dgbI:function(e,t){var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{standalone:""}},[a("v-content",{staticClass:"white"},[a("v-container",{staticClass:"pa-0 ma-0",attrs:{transition:"slide-x-transition",fluid:""}},[a("v-card",{attrs:{flat:!0}},[e._t("toolbar"),e._v(" "),e._t("default")],2)],1),e._v(" "),e._t("footer")],2)],1)},i=[];e.exports={render:a,staticRenderFns:i}},fcHn:function(e,t,a){var i=a("0iHF");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("rjj0")("1fdae21f",i,!0,{})},gDjt:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{id:{type:String,required:!0},images:{type:Array,required:!0,default:function e(){return[]}}},data:function e(){return{modal:!1}},mounted:function e(){var t=this;Bus.$on("view-damaged-package-"+this.id+"-images",function(){t.modal=!0})},methods:{close:function e(){this.modal=!1},viewFullImage:function e(t){window.open(t)}}}},ivo9:function(e,t,a){function i(e){a("vHES")}var n,r,s,o=!1,l,d=null,c=null,m=a("VU/8")(a("PZOX"),a("m+1Y"),!1,i,null,null);e.exports=m.exports},k2aa:function(e,t,a){(t=e.exports=a("FZ+f")(!1)).push([e.i,"",""])},"m+1Y":function(e,t){var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal-layout",[a("v-toolbar",{staticClass:"primary",attrs:{fixed:"",app:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"white"},nativeOn:{click:function(t){e.redirectBack()}}},[a("v-icon",[e._v("arrow_back")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-title",{staticClass:"text-xs-center white--text"},[e._v("View Item ID# "+e._s(e.id))]),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:"","pa-2":""}},[a("v-flex",{attrs:{sm12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Customer","prepend-icon":"supervised_user_circle"},model:{value:e.item.customer_name,callback:function(t){e.$set(e.item,"customer_name",t)},expression:"item.customer_name"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Client","prepend-icon":"fa-users"},model:{value:e.item.client_name,callback:function(t){e.$set(e.item,"client_name",t)},expression:"item.client_name"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"DSG No.","prepend-icon":"local_offer"},model:{value:e.item.dsg_id,callback:function(t){e.$set(e.item,"dsg_id",t)},expression:"item.dsg_id"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"PO No.","prepend-icon":"bookmark"},model:{value:e.item.po_no,callback:function(t){e.$set(e.item,"po_no",t)},expression:"item.po_no"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Date Received","prepend-icon":"event_available"},model:{value:e.item.date_received,callback:function(t){e.$set(e.item,"date_received",t)},expression:"item.date_received"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Date Processed","prepend-icon":"event_note"},model:{value:e.item.date_processed,callback:function(t){e.$set(e.item,"date_processed",t)},expression:"item.date_processed"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Bin",light:"","prepend-icon":"view_comfy"},model:{value:e.item.bin_name,callback:function(t){e.$set(e.item,"bin_name",t)},expression:"item.bin_name"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Handling Note",light:"","prepend-icon":"receipt"},model:{value:e.item.handling_type,callback:function(t){e.$set(e.item,"handling_type",t)},expression:"item.handling_type"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Store At",light:"","prepend-icon":"dns"},model:{value:e.item.store_at,callback:function(t){e.$set(e.item,"store_at",t)},expression:"item.store_at"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Style No.","prepend-icon":"style"},model:{value:e.item.style_no,callback:function(t){e.$set(e.item,"style_no",t)},expression:"item.style_no"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Length",suffix:"ft","prepend-icon":"keyboard_tab"},model:{value:e.item.length,callback:function(t){e.$set(e.item,"length",t)},expression:"item.length"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Width",suffix:"ft","prepend-icon":"swap_horiz"},model:{value:e.item.width,callback:function(t){e.$set(e.item,"width",t)},expression:"item.width"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Height",suffix:"ft","prepend-icon":"swap_vert"},model:{value:e.item.height,callback:function(t){e.$set(e.item,"height",t)},expression:"item.height"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-text-field",{attrs:{readonly:"",label:"Cube",suffix:"ft³","prepend-icon":"fa-cube"},model:{value:e.item.cube,callback:function(t){e.$set(e.item,"cube",t)},expression:"item.cube"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md2:""}},[a("v-switch",{attrs:{label:e.getDamageStatus(e.item.damaged),readonly:""},model:{value:e.item.damaged,callback:function(t){e.$set(e.item,"damaged",t)},expression:"item.damaged"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","pa-2":""}},[a("v-flex",{attrs:{sm12:"",md6:"","px-3":""}},[a("v-subheader",[e._v("\n          Item Description:\n          "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(t){e.viewImages()}}},[a("v-icon",{attrs:{color:"blue"}},[e._v("\n              image\n            ")])],1)],1),e._v(" "),a("v-text-field",{attrs:{readonly:""},model:{value:e.item.description,callback:function(t){e.$set(e.item,"description",t)},expression:"item.description"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md6:"","px-3":""}},[e.item.damaged?a("v-subheader",[e._v("\n          Damage Description:\n          "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(t){e.viewDamageImages()}}},[a("v-icon",{attrs:{color:"red"}},[e._v("\n              broken_image\n            ")])],1)],1):e._e(),e._v(" "),e.item.damaged?a("v-text-field",{attrs:{readonly:""},model:{value:e.item.damage_description,callback:function(t){e.$set(e.item,"damage_description",t)},expression:"item.damage_description"}}):e._e()],1)],1),e._v(" "),e.item.damaged?a("v-layout",{attrs:{row:"",wrap:""}},[e.item.repaired?a("v-flex",{attrs:{sm12:"",md2:"","order-md2":""}},[a("v-switch",{attrs:{label:e.getRepairedStatus(e.item.repaired),readonly:""},model:{value:e.item.repaired,callback:function(t){e.$set(e.item,"repaired",t)},expression:"item.repaired"}})],1):a("v-flex",{attrs:{sm12:"",md2:"","offset-md10":""}},[a("v-switch",{attrs:{label:e.getRepairedStatus(e.item.repaired),readonly:""},model:{value:e.item.repaired,callback:function(t){e.$set(e.item,"repaired",t)},expression:"item.repaired"}})],1),e._v(" "),e.item.repaired?a("v-flex",{attrs:{sm12:"","offset-md8":"",md2:""}},[a("v-text-field",{attrs:{label:"Date Repaired","prepend-icon":"event_note",readonly:""},model:{value:e.item.date_repaired,callback:function(t){e.$set(e.item,"date_repaired",t)},expression:"item.date_repaired"}})],1):e._e()],1):e._e()],1),e._v(" "),a("images",{attrs:{id:e.id,images:e.item.package_images}}),e._v(" "),a("damage-images",{attrs:{id:e.id,images:e.item.damaged_images}})],1)},i=[];e.exports={render:a,staticRenderFns:i}},mFbT:function(e,t){var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("v-card",{attrs:{light:!0}},[a("v-toolbar",{attrs:{color:"primary"}},[a("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:e.close}},[a("v-icon",[e._v("arrow_back")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-title",{staticClass:"white--text"},[e._v("Item # "+e._s(e.id)+" Damaged Images")]),e._v(" "),a("v-spacer")],1),e._v(" "),e.images.length>0?a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.images,function(t){return a("v-flex",{key:t,attrs:{xs12:"",md4:"","px-2":"","py-2":""}},[a("v-card-media",{attrs:{src:t,height:"250px",contain:""},on:{click:function(a){e.viewFullImage(t)}}})],1)}))],1):a("v-container",{attrs:{fluid:""}},[a("v-alert",{attrs:{value:!0,type:"info",color:"amber",icon:"warning",transition:"scale-transition",outline:""}},[e._v("\n        No Uploaded Damaged Images For This Item\n      ")])],1)],1)],1)},i=[];e.exports={render:a,staticRenderFns:i}},nkjN:function(e,t,a){function i(e){a("fcHn")}var n,r,s,o=!1,l,d=null,c=null,m=a("VU/8")(a("OGqB"),a("N7NN"),!1,i,null,null);e.exports=m.exports},pwLK:function(e,t,a){var i=a("zr7H");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("rjj0")("57bf4ea8",i,!0,{})},rjj0:function(e,t,a){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},m=null,u="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var a=e[t],i=r[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(g(a.parts[n]));i.parts.length>a.parts.length&&(i.parts.length=a.parts.length)}else{for(var s=[],n=0;n<a.parts.length;n++)s.push(g(a.parts[n]));r[a.id]={id:a.id,refs:1,parts:s}}}}function f(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,a,i=document.querySelector("style["+u+'~="'+e.id+'"]');if(i){if(d)return c;i.parentNode.removeChild(i)}if(v){var n=l++;i=o||(o=f()),t=h.bind(null,i,n,!1),a=h.bind(null,i,n,!0)}else i=f(),t=b.bind(null,i),a=function(){i.parentNode.removeChild(i)};return t(e),function i(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}e.exports=function(e,t,a,i){d=a,m=i||{};var s=n(e,t);return p(s),function t(a){for(var i=[],o=0;o<s.length;o++){var l=s[o],d;(d=r[l.id]).refs--,i.push(d)}a?p(s=n(e,a)):s=[];for(var o=0;o<i.length;o++){var d;if(0===(d=i[o]).refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete r[d.id]}}}};var _=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")}),x;function h(e,t,a,i){var n=a?"":i.css;if(e.styleSheet)e.styleSheet.cssText=_(t,n);else{var r=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function b(e,t){var a=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),m.ssrId&&e.setAttribute(u,t.id),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}},tTVk:function(e,t){e.exports=function e(t,a){for(var i=[],n={},r=0;r<a.length;r++){var s=a[r],o=s[0],l,d,c,m={id:t+":"+r,css:s[1],media:s[2],sourceMap:s[3]};n[o]?n[o].parts.push(m):i.push(n[o]={id:o,parts:[m]})}return i}},vHES:function(e,t,a){var i=a("k2aa");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("rjj0")("975cd370",i,!0,{})},zr7H:function(e,t,a){(t=e.exports=a("FZ+f")(!1)).push([e.i,".v-messages__message{color:#e57373}",""])}});