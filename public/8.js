webpackJsonp([8],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1001);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("4012696b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39e6077a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InvoiceLinks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39e6077a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InvoiceLinks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InvoiceLinks.vue"],"names":[],"mappings":";AAyFA;EACA,0BAAA;CACA","file":"InvoiceLinks.vue","sourcesContent":["<template>\n  <v-list \n    v-if=\"$auth.check('admin')\" \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"card_membership\",\n          title: \"Invoices\",\n          items: [\n            {\n              title: \"Generate Invoice\",\n              href: \"/invoices/generate\",\n              action: \"schedule\"\n            },\n            { title: \"Invoices\", href: \"/invoices\", action: \"all_inbox\" },\n            {\n              title: \"Weekly Report\",\n              href: \"/reports/total-all-customer-invoice\",\n              action: \"picture_as_pdf\"\n            },\n            {\n              title: \"Customer Invoice Report\",\n              href: \"/reports/customer-invoice-report\",\n              action: \"perm_contact_calendar\"\n            },\n            {\n              title: \"Client Invoice Report\",\n              href: \"/reports/client-invoice-report\",\n              action: \"perm_identity\"\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeColor: "#4DB6AC",
      linkColor: "#fffff",
      items: [{
        action: "card_membership",
        title: "Invoices",
        items: [{
          title: "Generate Invoice",
          href: "/invoices/generate",
          action: "schedule"
        }, { title: "Invoices", href: "/invoices", action: "all_inbox" }, {
          title: "Weekly Report",
          href: "/reports/total-all-customer-invoice",
          action: "picture_as_pdf"
        }, {
          title: "Customer Invoice Report",
          href: "/reports/customer-invoice-report",
          action: "perm_contact_calendar"
        }, {
          title: "Client Invoice Report",
          href: "/reports/client-invoice-report",
          action: "perm_identity"
        }]
      }]
    };
  },

  methods: {
    isActive: function isActive(item) {
      return item.href === this.$route.path;
    },
    loadview: function loadview(subItem) {
      this.$router.push({ path: "" + subItem.href });
    }
  }
});

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$auth.check("admin")
    ? _c(
        "v-list",
        { staticClass: "blue-grey", attrs: { dark: "" } },
        _vm._l(_vm.items, function(item) {
          return _c(
            "v-list-group",
            {
              key: item.title,
              attrs: { "no-action": "", "active-class": "accent--text" },
              model: {
                value: item.active,
                callback: function($$v) {
                  _vm.$set(item, "active", $$v)
                },
                expression: "item.active"
              }
            },
            [
              _c(
                "v-list-tile",
                { attrs: { slot: "activator" }, slot: "activator" },
                [
                  _c(
                    "v-list-tile-action",
                    [
                      _c("v-icon", { attrs: { color: "white" } }, [
                        _vm._v(_vm._s(item.action))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v(_vm._s(item.title))])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(item.items, function(subItem) {
                return _c(
                  "v-list-tile",
                  {
                    key: subItem.title,
                    style: {
                      color: _vm.isActive(subItem)
                        ? _vm.activeColor
                        : _vm.linkColor
                    },
                    on: {
                      click: function($event) {
                        _vm.loadview(subItem)
                      }
                    }
                  },
                  [
                    _c(
                      "v-list-tile-content",
                      [
                        _c("v-list-tile-title", [_vm._v(_vm._s(subItem.title))])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-tile-action",
                      [
                        _c(
                          "v-icon",
                          {
                            attrs: {
                              color: _vm.isActive(subItem) ? "teal" : "white"
                            }
                          },
                          [_vm._v(_vm._s(subItem.action))]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        })
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39e6077a", module.exports)
  }
}

/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      staticClass: "blue-grey",
      attrs: {
        clipped: _vm.$vuetify.breakpoint.width <= 1264 && true,
        fixed: "",
        "hide-overlay": "",
        app: ""
      },
      model: {
        value: _vm.drawer,
        callback: function($$v) {
          _vm.drawer = $$v
        },
        expression: "drawer"
      }
    },
    [
      _c(
        "v-list",
        { staticClass: "blue-grey", attrs: { dense: "" } },
        [
          _vm.$auth.check("admin")
            ? _c("v-subheader", { staticClass: "white--text" }, [
                _vm._v("Admin Area")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("warehouse")
            ? _c("v-subheader", { staticClass: "white--text" }, [
                _vm._v("Warehouse Area")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("customer")
            ? _c("v-subheader", { staticClass: "white--text" }, [
                _vm._v("Customer Area")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["admin", "customer", "warehouse"])
            ? _c("v-link", {
                attrs: {
                  title: "Dashboard",
                  href: "/dashboard",
                  icon: "fa-tachometer",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["admin"])
            ? _c("v-link", {
                attrs: {
                  title: "Tutorials",
                  href: "/tutorials",
                  icon: "movie",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Users",
                  href: "/users",
                  icon: "supervised_user_circle",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Shippers",
                  href: "/shippers",
                  icon: "fa-ship",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Rates",
                  href: "/rates",
                  icon: "attach_money",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Bins",
                  href: "/bins",
                  icon: "view_module",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["warehouse", "admin"])
            ? _c("v-link", {
                attrs: {
                  title: "Warehouse",
                  href: "/warehouse",
                  icon: "location_city",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["admin", "warehouse"])
            ? _c("v-link", {
                attrs: {
                  title: "Receiving",
                  href: "/receiving",
                  icon: "receipt",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["admin", "warehouse"])
            ? _c("v-link", {
                attrs: {
                  title: "Archived",
                  href: "/archived/dsg",
                  icon: "archive",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("inventory-links"),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Tickets",
                  href: "/tickets",
                  icon: "confirmation_number",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Miscellaneous",
                  href: "/miscellaneous",
                  icon: "note_add",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check("admin")
            ? _c("v-link", {
                attrs: {
                  title: "Payments",
                  href: "/payments",
                  icon: "attach_money",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("invoice-links"),
          _vm._v(" "),
          _vm.$auth.check(["customer"])
            ? _c("v-link", {
                attrs: {
                  title: "Clients",
                  href: "/clients",
                  icon: "business_center",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check(["customer"])
            ? _c("v-link", {
                attrs: {
                  title: "Invoices",
                  href: "/invoices",
                  icon: "all_inbox",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check()
            ? _c("v-link", {
                attrs: {
                  title: "Settings",
                  href: "/settings",
                  icon: "fa-cogs",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$auth.check()
            ? _c("v-link", {
                attrs: {
                  title: "Logout",
                  href: "/logout",
                  icon: "power_settings_new",
                  "link-color": "white",
                  "active-color": "#4db6ac",
                  "icon-color": "#fafafa"
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1892c0ca", module.exports)
  }
}

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c("left-side-bar"),
      _vm._v(" "),
      _c("app-nav-bar"),
      _vm._v(" "),
      _c(
        "v-content",
        {
          staticClass: "white",
          attrs: {
            transition: "slide-x-transition",
            fluid: "",
            "pa-0": "",
            "ma-0": ""
          }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ccbf15e", module.exports)
  }
}

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1007)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1009)
/* template */
var __vue_template__ = __webpack_require__(1010)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dsg/Confirm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-308df882", Component.options)
  } else {
    hotAPI.reload("data-v-308df882", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1008);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("89ca57fc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-308df882\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Confirm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-308df882\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Confirm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Confirm.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    callback: {
      type: Function,
      required: true
    },
    message: {
      type: String,
      default: function _default() {
        return "Deleting This Dsg Record , Will Also Delete All Associated Data Attach To It Such As Images and Items. Also Note That Some Data In The System That Exist Which Reference To This Dsg Record Will Break its Functionality Such As Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!";
      }
    },
    title: {
      type: String,
      default: function _default() {
        return "Are You Sure You Want To Delete This?";
      }
    },
    action: {
      type: String,
      default: function _default() {
        return "Yes , I Understand";
      }
    }
  },
  data: function data() {
    return {
      dialog: false,
      params: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    Bus.$on("open-confirmation", function (params) {
      _this.dialog = true;
      _this.params = params;
    });
  },

  methods: {
    closeDialog: function closeDialog() {
      this.dialog = false;
    },
    confirm: function confirm() {
      if (this.callback) {
        if (this.params != undefined) {
          this.dialog = false;

          this.callback(this.params);
        } else {
          this.dialog = false;
          this.callback();
        }
      }
    }
  }
});

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { width: "500" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "headline primary", attrs: { dark: "" } },
            [
              _c("span", { staticClass: "white--text" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v("\n      " + _vm._s(_vm.message) + "\n    ")
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "secondary" },
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("arrow_left")]),
                  _vm._v("\n        Back\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", flat: "" },
                  on: {
                    click: function($event) {
                      _vm.confirm()
                    }
                  }
                },
                [_vm._v("\n        " + _vm._s(_vm.action) + "\n      ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-308df882", module.exports)
  }
}

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    confirmed: function confirmed(cb) {
      var self = this;
      return function (params) {
        cb(params);
      };
    },
    openDialog: function openDialog(item) {
      Bus.$emit("open-confirmation", item);
    }
  }
});

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("15088148", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fc1b997\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fc1b997\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.compress--icon[data-v-6fc1b997] {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/pages/Shipper/resources/assets/js/pages/Shipper/Index.vue"],"names":[],"mappings":";AA6pBA;EACA,kBAAA;EACA,mBAAA;CACA","file":"Index.vue","sourcesContent":["<template>\n  <main-layout>\n    <v-container fluid>\n      <!-- Search and Action Buttons -->\n      <v-layout \n        row \n        wrap>\n        <v-flex \n          d-flex \n          xs12 \n          sm7>\n          <v-layout \n            row \n            wrap>\n            <v-flex d-flex>\n              <v-card \n                light \n                flat\n              >\n                <v-card-title>\n                  <v-text-field\n                    v-model=\"search\"\n                    append-icon=\"search\"\n                    label=\"Search Shippers\"\n                    single-line\n                    hide-details\n                    light\n                  />\n                </v-card-title>\n              </v-card>\n            </v-flex>\n          </v-layout>\n        </v-flex>\n        <v-flex \n          d-flex \n          xs12 \n          sm5 \n          child-flex>\n          <v-layout \n            row \n            wrap>\n            <v-flex \n              xs12 \n              class=\"white\"\n              d-flex>\n              <v-btn \n                :disabled=\"!$auth.check('admin')\" \n                block \n                color=\"accent\" \n                dark\n                flat\n                @click=\"createShipper\">\n                Create New Shipper\n                <v-icon\n                  right\n                  color=\"accent\" \n                >\n                  fa-ship\n                </v-icon>\n                <v-icon\n                  right\n                  color=\"accent\" \n                >\n                  fa-plus-circle\n                </v-icon>\n              </v-btn>\n            </v-flex>\n            <v-flex \n              xs12 \n              d-flex>\n              <v-flex class=\"xs6 white\">\n                <v-btn \n                  v-if=\"selected.length > 0\"\n                  :disabled=\"!$auth.check('admin')\" \n                  block \n                  color=\"blue darken-4\" \n                  dark\n                  flat\n                  @click=\"massActivate\">\n                  <v-icon\n                    large\n                    color=\"blue darken-4\" \n                  >\n                    link\n                  </v-icon>\n                  Activate Selected\n                </v-btn>\n              </v-flex>\n              <v-flex class=\"xs6 white\">\n                <v-btn \n                  v-if=\"selected.length > 0\"\n                  :disabled=\"!$auth.check('admin')\" \n                  block \n                  flat\n                  color=\"error\" \n                  dark\n                  @click=\"massDeactivate\">\n                  <v-icon\n                    large\n                    color=\"error\" \n                  >\n                    link_off\n                  </v-icon>\n                  Deactivate Selected\n                </v-btn>\n              </v-flex>\n            </v-flex>\n          </v-layout>\n          \n        </v-flex>\n      </v-layout>\n      <!-- Shipper Data Table -->\n      <v-data-table\n        v-model=\"selected\"\n        :headers=\"headers\"\n        :items=\"items\"\n        :search=\"search\"\n        :pagination.sync=\"pagination\"\n        select-all\n        item-key=\"id\"\n        expand\n      >\n        <!-- Header Section -->\n        <template\n          slot=\"headers\" \n          slot-scope=\"props\"\n        >\n          <tr>\n            <th>\n              <v-checkbox\n                :input-value=\"props.all\"\n                :indeterminate=\"props.indeterminate\"\n                primary\n                hide-details\n                @click.native=\"toggleAll\"\n              />\n            </th>\n            <th \n              v-for=\"header in props.headers\" \n              :key=\"header.text\"\n              :class=\"['column sortable', pagination.descending ? 'desc' : 'asc', \n                       header.value === pagination.sortBy ? 'name' : '', \n                       {'text-xs-left': header.align === 'left', \n                        'text-xs-right': header.align === 'right', \n                        'text-xs-center': header.align === 'center'},\n                       $vuetify.breakpoint.width >= 600 && 'title']\"\n              @click=\"changeSort(header.value)\"\n            >\n              <span>\n                <v-icon>arrow_upward</v-icon>\n                {{ header.text }}\n              </span>\n            </th>\n          </tr>\n        </template>\n        <!-- Row Section -->\n        <template \n          slot=\"items\" \n          slot-scope=\"props\"\n        >\n          <tr>\n            <td \n              class=\"title text-xs-left\"\n              style=\"width:5%;\"\n            >\n              <v-checkbox\n                :active=\"props.selected\"\n                :input-value=\"props.selected\"\n                @click=\"props.selected = !props.selected\"\n              />\n            </td>\n            <td \n              class=\"title text-xs-center\"\n              style=\"width:10%;margin-left:0px;margin-right:0px;padding-left:0px;padding-right:0px;\"\n            >\n              <v-btn \n                :disabled=\"!$auth.check('admin')\" \n                :class=\"{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }\" \n                light \n                flat \n                icon \n                class=\"compress--icon\"\n                @click=\"props.expanded = !props.expanded\"\n              >\n                <v-icon v-if=\"!props.expanded\">fa-expand</v-icon>\n                <v-icon v-if=\"props.expanded\">fa-compress</v-icon>\n              </v-btn>\n              <v-btn \n                :disabled=\"!$auth.check('admin')\" \n                flat \n                icon \n                color=\"blue\" \n                class=\"compress--icon\"\n                @click=\"editShipper(props.item)\"\n              >\n                <v-icon>fa-pencil</v-icon>\n              </v-btn>\n              <v-btn \n                :disabled=\"!$auth.check('admin')\" \n                flat \n                icon \n                color=\"error\" \n                class=\"compress--icon\"\n                @click=\"openDialog(props.item)\"\n              >\n                <v-icon>fa-trash</v-icon>\n              </v-btn>\n            </td>\n            <td class=\"title text-xs-left accent--text\">\n              {{ props.item.name }}\n            </td>\n            <td class=\"title text-xs-left accent--text\">\n              <v-switch\n                v-model=\"props.item.active\"\n                :label=\"getStatus(props.item.active)\"\n                @change=\"toggleStatus(props.item)\"\n              />\n            </td>\n          </tr>\n        </template>\n        <!-- Pagination Section -->\n        <template \n          slot=\"pageText\"\n          slot-scope=\"{ pageStart, pageStop }\"\n        >\n          From {{ pageStart }} to {{ pageStop }}\n        </template>\n        <!-- Expand Section -->\n        <template \n          slot=\"expand\" \n          slot-scope=\"props\"\n        >\n          <v-container fluid>\n            <v-card \n              light \n              flat \n              text-xs-center\n            >\n              <v-card-media\n                class=\"white--text blue-grey\"\n                height=\"75px\"\n              >\n                <v-container \n                  fill-height \n                  fluid\n                >\n                  <v-layout fill-height>\n                    <v-flex \n                      xs12 \n                      align-end \n                      flexbox\n                    >\n                      <span class=\"headline\">{{ props.item.name }}</span>\n                    </v-flex>\n                  </v-layout>\n                </v-container>\n              </v-card-media>\n              <v-card-title>\n                <v-container fluid>\n                  \n                  <p \n                    class=\"title accent--text\"\n                  >\n                    Account Details\n                  </p>\n                  <v-layout \n                    row \n                    wrap\n                  >\n                    <v-flex \n                      xs6\n                      px-1>\n                      <v-text-field\n                        v-model=\"props.item.email\"\n                        label=\"Email\"\n                        prepend-icon=\"fa-envelope\"\n                        light\n                        readonly\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1>\n                      <v-text-field\n                        v-model=\"props.item.phone\"\n                        label=\"Phone\"\n                        light\n                        readonly\n                        prepend-icon=\"phone\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.address_1\"\n                        label=\"Address 1\"\n                        light\n                        readonly\n                        prepend-icon=\"looks_one\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.address_2\"\n                        label=\"Address 2\"\n                        light\n                        readonly\n                        prepend-icon=\"looks_two\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.city\"\n                        label=\"City\"\n                        light\n                        readonly\n                        prepend-icon=\"location_city\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.state\"\n                        label=\"State\"\n                        light\n                        readonly\n                        prepend-icon=\"map\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.zip\"\n                        label=\"Zip\"\n                        light\n                        readonly\n                        prepend-icon=\"markunread_mailbox\"\n                      />\n                    </v-flex>\n                    <v-flex \n                      xs6\n                      px-1\n                    >\n                      <v-text-field\n                        :value=\"props.item.country\"\n                        label=\"Country\"\n                        light\n                        readonly\n                        prepend-icon=\"flag\"\n                      />\n                    </v-flex>\n                  </v-layout>\n                  <v-layout \n                    row \n                    wrap\n                  >\n                    <v-flex \n                      xs12\n                    >\n                      <v-switch\n                        v-model=\"props.item.active\"\n                        :label=\"getStatus(props.item.active)\"\n                        readonly\n                      />\n                    </v-flex>\n                    <v-flex xs12>\n                      <v-textarea\n                        v-model=\"props.item.notes\"\n                        color=\"primary\"\n                        readonly\n                      >\n                        <div slot=\"label\">\n                          <span class=\"title\">Notes: </span>\n                        </div>\n                      </v-textarea>\n                    </v-flex>\n                  </v-layout>\n\n                </v-container>\n              </v-card-title>\n\n            </v-card>\n          </v-container>\n        </template>\n        <!-- No Data Section -->\n        <template slot=\"no-data\">\n          <v-alert \n            :value=\"true\" \n            color=\"blue-grey\" \n            icon=\"warning\">\n            Opps! No Shipper Yet!, \n            <v-btn \n              :disabled=\"!$auth.check('admin')\" \n              color=\"white\" \n              flat\n              dark\n              @click=\"createShipper\">\n              Create New Shipper\n              <v-icon\n                right\n              >\n                fa-user-plus\n              </v-icon>\n            </v-btn>\n          </v-alert>\n        </template>\n        <!-- No Search Result Section -->\n        <v-alert \n          slot=\"no-results\" \n          :value=\"true\" \n          color=\"blue-grey\" \n          icon=\"warning\">\n          Your search for \"{{ search }}\" found no results.\n        </v-alert>\n      </v-data-table>\n      <confirm \n        :callback=\"confirmed(deleteShipper)\" \n        :message=\"message\"\n      />\n    </v-container>\n  </main-layout>\n</template>\n\n<script>\nimport MainLayout from \"Layouts/Main.vue\";\nimport validationError from \"Mixins/validation-error\";\nimport { Form } from \"vform\";\nimport swal from \"sweetalert2\";\nimport Confirm from \"Components/dsg/Confirm.vue\";\nimport confirmation from \"Mixins/confirmation\";\n\nexport default {\n  components: {\n    MainLayout,\n    Confirm\n  },\n  mixins: [validationError, confirmation],\n  data: () => ({\n    contentClass: { grey: true, \"lighten-4\": true, \"accent--text\": true },\n    dialog: false,\n    /* table */\n    headers: [\n      { text: \"Actions\", value: \"actions\", align: \"center\", sortable: false },\n      { text: \"Name\", value: \"name\", align: \"left\", sortable: true },\n      { text: \"Status\", value: \"active\", align: \"left\", sortable: true }\n    ],\n    items: [],\n    selected: [],\n    pagination: {\n      sortBy: \"name\"\n    },\n    shippersForm: new Form({}),\n    toggleForm: new Form({\n      toggle: false,\n      shipper_id: null\n    }),\n    search: \"\",\n    deleteShipperForm: new Form({\n      shipper_id: null\n    }),\n    domain: window.location.hostname,\n    message:\n      \"Warning! Deleting This Shipper Record Has Some Repercusion To The Sytem, Some Features That Reference To This Shipper Record Will Break its Functionality Such As DSG, Logistics, Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!\"\n  }),\n  watch: {\n    items: {\n      handler: function(newValue) {},\n      deep: true\n    }\n  },\n  mounted() {\n    let self = this;\n    self.fetchShippers();\n  },\n  methods: {\n    editShipper(shipper) {\n      vm.$router.push({\n        name: \"edit-shipper\",\n        params: { id: `${shipper.id}` }\n      });\n    },\n    createShipper() {\n      vm.$router.push({ name: \"create-shipper\" });\n    },\n    toggleStatus(shipper) {\n      let self = this;\n      self.toggleForm.toggle = shipper.active;\n      self.toggleForm.shipper_id = shipper.id;\n      axios\n        .post(route(\"api.shipper.toggleStatus\"), self.toggleForm)\n        .then(response => {\n          console.log(response.data);\n        })\n        .catch(errors => {\n          let toggleModal = swal.mixin({\n            confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n            buttonsStyling: false\n          });\n          toggleModal({\n            title: \"Oops! Forbidden Action!\",\n            html: '<p class=\"title\">' + errors.response.data.message + \"</p>\",\n            type: \"warning\",\n            confirmButtonText: \"Back\"\n          });\n        });\n    },\n    getStatus(status) {\n      if (status) {\n        return \"Active\";\n      } else {\n        return \"Inactive\";\n      }\n    },\n    async fetchShippers() {\n      let self = this;\n      self.shippersForm.busy = true;\n      try {\n        const payload = await axios.post(\n          route(\"api.shipper.index\"),\n          self.shippersForm\n        );\n        self.items = payload.data.data;\n        self.shippersForm = new Form({});\n      } catch ({ errors, message }) {\n        if (errors) {\n          self.shippersForm.errors.set(errors);\n        }\n        if (message) {\n        }\n        self.shippersForm.busy = false;\n      }\n    },\n    deleteShipper(shipper) {\n      let self = this;\n      self.deleteShipperForm.shipper_id = shipper.id;\n      let index = _.findIndex(self.items, { id: shipper.id });\n      axios\n        .post(route(\"api.shipper.delete\"), self.deleteShipperForm)\n        .then(response => {\n          if (response.data.status === true) {\n            self.$delete(self.items, index);\n            let toggleModal = swal.mixin({\n              confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n              buttonsStyling: false\n            });\n            toggleModal({\n              title: \"Success\",\n              html: `<p class=\"title\">Shipper Deleted!</p>`,\n              type: \"success\",\n              confirmButtonText: \"Back\"\n            });\n          }\n        })\n        .catch(errors => {\n          const deleteModal = swal.mixin({\n            confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n            buttonsStyling: false\n          });\n          deleteModal({\n            title: \"Oops! Forbidden Action!\",\n            html: '<p class=\"title\">' + errors.response.data.message + \"</p>\",\n            type: \"warning\",\n            confirmButtonText: \"Back\"\n          });\n        });\n    },\n    async massDeactivate() {\n      let self = this;\n      let selected = _.map(self.selected, \"id\");\n      let toggleStatusForm = new Form({\n        selected\n      });\n\n      try {\n        const payload = await axios.post(\n          route(\"api.shipper.massDeactivate\"),\n          toggleStatusForm\n        );\n        let updated = payload.data.updated;\n        console.log(updated);\n        _.map(updated, id => {\n          let index = _.findIndex(self.items, { id });\n          self.items[index].active = false;\n        });\n        let toggleModal = swal.mixin({\n          confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n          buttonsStyling: false\n        });\n        toggleModal({\n          title: \"Success\",\n          html: `<p class=\"title\">${payload.data.message}</p>`,\n          type: \"success\",\n          confirmButtonText: \"Back\"\n        });\n      } catch ({ errors, message }) {\n        if (errors) {\n          console.log(errors);\n        }\n        if (message) {\n          console.log(message);\n        }\n      }\n    },\n    async massActivate() {\n      let self = this;\n      let selected = _.map(self.selected, \"id\");\n      let toggleStatusForm = new Form({\n        selected\n      });\n\n      try {\n        const payload = await axios.post(\n          route(\"api.shipper.massActivate\"),\n          toggleStatusForm\n        );\n        let updated = payload.data.updated;\n        console.log(updated);\n        _.map(updated, id => {\n          let index = _.findIndex(self.items, { id });\n          self.items[index].active = true;\n        });\n        let toggleModal = swal.mixin({\n          confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n          buttonsStyling: false\n        });\n        toggleModal({\n          title: \"Success\",\n          html: `<p class=\"title\">${payload.data.message}</p>`,\n          type: \"success\",\n          confirmButtonText: \"Back\"\n        });\n      } catch ({ errors, message }) {\n        if (errors) {\n          console.log(errors);\n        }\n        if (message) {\n          console.log(message);\n        }\n      }\n    },\n    toggleAll() {\n      if (this.selected.length) this.selected = [];\n      else this.selected = this.items.slice();\n    },\n    changeSort(column) {\n      if (this.pagination.sortBy === column) {\n        this.pagination.descending = !this.pagination.descending;\n      } else {\n        this.pagination.sortBy = column;\n        this.pagination.descending = false;\n      }\n    }\n  }\n};\n</script>\n\n<style scoped>\n.compress--icon {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vform__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_dsg_Confirm_vue__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_dsg_Confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_Components_dsg_Confirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Mixins_confirmation__ = __webpack_require__(1011);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MainLayout: __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue___default.a,
    Confirm: __WEBPACK_IMPORTED_MODULE_6_Components_dsg_Confirm_vue___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7_Mixins_confirmation__["a" /* default */]],
  data: function data() {
    return {
      contentClass: { grey: true, "lighten-4": true, "accent--text": true },
      dialog: false,
      /* table */
      headers: [{ text: "Actions", value: "actions", align: "center", sortable: false }, { text: "Name", value: "name", align: "left", sortable: true }, { text: "Status", value: "active", align: "left", sortable: true }],
      items: [],
      selected: [],
      pagination: {
        sortBy: "name"
      },
      shippersForm: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({}),
      toggleForm: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
        toggle: false,
        shipper_id: null
      }),
      search: "",
      deleteShipperForm: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
        shipper_id: null
      }),
      domain: window.location.hostname,
      message: "Warning! Deleting This Shipper Record Has Some Repercusion To The Sytem, Some Features That Reference To This Shipper Record Will Break its Functionality Such As DSG, Logistics, Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!"
    };
  },
  watch: {
    items: {
      handler: function handler(newValue) {},
      deep: true
    }
  },
  mounted: function mounted() {
    var self = this;
    self.fetchShippers();
  },

  methods: {
    editShipper: function editShipper(shipper) {
      vm.$router.push({
        name: "edit-shipper",
        params: { id: "" + shipper.id }
      });
    },
    createShipper: function createShipper() {
      vm.$router.push({ name: "create-shipper" });
    },
    toggleStatus: function toggleStatus(shipper) {
      var self = this;
      self.toggleForm.toggle = shipper.active;
      self.toggleForm.shipper_id = shipper.id;
      axios.post(route("api.shipper.toggleStatus"), self.toggleForm).then(function (response) {
        console.log(response.data);
      }).catch(function (errors) {
        var toggleModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Oops! Forbidden Action!",
          html: '<p class="title">' + errors.response.data.message + "</p>",
          type: "warning",
          confirmButtonText: "Back"
        });
      });
    },
    getStatus: function getStatus(status) {
      if (status) {
        return "Active";
      } else {
        return "Inactive";
      }
    },
    fetchShippers: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var self, payload, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;

                self.shippersForm.busy = true;
                _context.prev = 2;
                _context.next = 5;
                return axios.post(route("api.shipper.index"), self.shippersForm);

              case 5:
                payload = _context.sent;

                self.items = payload.data.data;
                self.shippersForm = new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({});
                _context.next = 17;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                errors = _context.t0.errors;
                message = _context.t0.message;

                if (errors) {
                  self.shippersForm.errors.set(errors);
                }
                if (message) {}
                self.shippersForm.busy = false;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function fetchShippers() {
        return _ref.apply(this, arguments);
      }

      return fetchShippers;
    }(),
    deleteShipper: function deleteShipper(shipper) {
      var self = this;
      self.deleteShipperForm.shipper_id = shipper.id;
      var index = _.findIndex(self.items, { id: shipper.id });
      axios.post(route("api.shipper.delete"), self.deleteShipperForm).then(function (response) {
        if (response.data.status === true) {
          self.$delete(self.items, index);
          var toggleModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Success",
            html: "<p class=\"title\">Shipper Deleted!</p>",
            type: "success",
            confirmButtonText: "Back"
          });
        }
      }).catch(function (errors) {
        var deleteModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        deleteModal({
          title: "Oops! Forbidden Action!",
          html: '<p class="title">' + errors.response.data.message + "</p>",
          type: "warning",
          confirmButtonText: "Back"
        });
      });
    },
    massDeactivate: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var self, selected, toggleStatusForm, payload, updated, toggleModal, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                selected = _.map(self.selected, "id");
                toggleStatusForm = new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
                  selected: selected
                });
                _context2.prev = 3;
                _context2.next = 6;
                return axios.post(route("api.shipper.massDeactivate"), toggleStatusForm);

              case 6:
                payload = _context2.sent;
                updated = payload.data.updated;

                console.log(updated);
                _.map(updated, function (id) {
                  var index = _.findIndex(self.items, { id: id });
                  self.items[index].active = false;
                });
                toggleModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
                  confirmButtonClass: "v-btn blue-grey  subheading white--text",
                  buttonsStyling: false
                });

                toggleModal({
                  title: "Success",
                  html: "<p class=\"title\">" + payload.data.message + "</p>",
                  type: "success",
                  confirmButtonText: "Back"
                });
                _context2.next = 20;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                errors = _context2.t0.errors;
                message = _context2.t0.message;

                if (errors) {
                  console.log(errors);
                }
                if (message) {
                  console.log(message);
                }

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 14]]);
      }));

      function massDeactivate() {
        return _ref3.apply(this, arguments);
      }

      return massDeactivate;
    }(),
    massActivate: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var self, selected, toggleStatusForm, payload, updated, toggleModal, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                selected = _.map(self.selected, "id");
                toggleStatusForm = new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
                  selected: selected
                });
                _context3.prev = 3;
                _context3.next = 6;
                return axios.post(route("api.shipper.massActivate"), toggleStatusForm);

              case 6:
                payload = _context3.sent;
                updated = payload.data.updated;

                console.log(updated);
                _.map(updated, function (id) {
                  var index = _.findIndex(self.items, { id: id });
                  self.items[index].active = true;
                });
                toggleModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
                  confirmButtonClass: "v-btn blue-grey  subheading white--text",
                  buttonsStyling: false
                });

                toggleModal({
                  title: "Success",
                  html: "<p class=\"title\">" + payload.data.message + "</p>",
                  type: "success",
                  confirmButtonText: "Back"
                });
                _context3.next = 20;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](3);
                errors = _context3.t0.errors;
                message = _context3.t0.message;

                if (errors) {
                  console.log(errors);
                }
                if (message) {
                  console.log(message);
                }

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 14]]);
      }));

      function massActivate() {
        return _ref5.apply(this, arguments);
      }

      return massActivate;
    }(),
    toggleAll: function toggleAll() {
      if (this.selected.length) this.selected = [];else this.selected = this.items.slice();
    },
    changeSort: function changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
});

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main-layout",
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs12: "", sm7: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { "d-flex": "" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { light: "", flat: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": "search",
                                      label: "Search Shippers",
                                      "single-line": "",
                                      "hide-details": "",
                                      light: ""
                                    },
                                    model: {
                                      value: _vm.search,
                                      callback: function($$v) {
                                        _vm.search = $$v
                                      },
                                      expression: "search"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                {
                  attrs: { "d-flex": "", xs12: "", sm5: "", "child-flex": "" }
                },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          staticClass: "white",
                          attrs: { xs12: "", "d-flex": "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                disabled: !_vm.$auth.check("admin"),
                                block: "",
                                color: "accent",
                                dark: "",
                                flat: ""
                              },
                              on: { click: _vm.createShipper }
                            },
                            [
                              _vm._v(
                                "\n              Create New Shipper\n              "
                              ),
                              _c(
                                "v-icon",
                                { attrs: { right: "", color: "accent" } },
                                [
                                  _vm._v(
                                    "\n                fa-ship\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                { attrs: { right: "", color: "accent" } },
                                [
                                  _vm._v(
                                    "\n                fa-plus-circle\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", "d-flex": "" } },
                        [
                          _c(
                            "v-flex",
                            { staticClass: "xs6 white" },
                            [
                              _vm.selected.length > 0
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        disabled: !_vm.$auth.check("admin"),
                                        block: "",
                                        color: "blue darken-4",
                                        dark: "",
                                        flat: ""
                                      },
                                      on: { click: _vm.massActivate }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            large: "",
                                            color: "blue darken-4"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  link\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                Activate Selected\n              "
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { staticClass: "xs6 white" },
                            [
                              _vm.selected.length > 0
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        disabled: !_vm.$auth.check("admin"),
                                        block: "",
                                        flat: "",
                                        color: "error",
                                        dark: ""
                                      },
                                      on: { click: _vm.massDeactivate }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { large: "", color: "error" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  link_off\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                Deactivate Selected\n              "
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-data-table",
            {
              attrs: {
                headers: _vm.headers,
                items: _vm.items,
                search: _vm.search,
                pagination: _vm.pagination,
                "select-all": "",
                "item-key": "id",
                expand: ""
              },
              on: {
                "update:pagination": function($event) {
                  _vm.pagination = $event
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "headers",
                  fn: function(props) {
                    return [
                      _c(
                        "tr",
                        [
                          _c(
                            "th",
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  "input-value": props.all,
                                  indeterminate: props.indeterminate,
                                  primary: "",
                                  "hide-details": ""
                                },
                                nativeOn: {
                                  click: function($event) {
                                    return _vm.toggleAll($event)
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(props.headers, function(header) {
                            return _c(
                              "th",
                              {
                                key: header.text,
                                class: [
                                  "column sortable",
                                  _vm.pagination.descending ? "desc" : "asc",
                                  header.value === _vm.pagination.sortBy
                                    ? "name"
                                    : "",
                                  {
                                    "text-xs-left": header.align === "left",
                                    "text-xs-right": header.align === "right",
                                    "text-xs-center": header.align === "center"
                                  },
                                  _vm.$vuetify.breakpoint.width >= 600 &&
                                    "title"
                                ],
                                on: {
                                  click: function($event) {
                                    _vm.changeSort(header.value)
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  [
                                    _c("v-icon", [_vm._v("arrow_upward")]),
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(header.text) +
                                        "\n            "
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  }
                },
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "title text-xs-left",
                            staticStyle: { width: "5%" }
                          },
                          [
                            _c("v-checkbox", {
                              attrs: {
                                active: props.selected,
                                "input-value": props.selected
                              },
                              on: {
                                click: function($event) {
                                  props.selected = !props.selected
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "title text-xs-center",
                            staticStyle: {
                              width: "10%",
                              "margin-left": "0px",
                              "margin-right": "0px",
                              "padding-left": "0px",
                              "padding-right": "0px"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "compress--icon",
                                class: {
                                  "amber--text": props.expanded,
                                  amber: props.expanded,
                                  teal: !props.expanded,
                                  "teal--text": !props.expanded
                                },
                                attrs: {
                                  disabled: !_vm.$auth.check("admin"),
                                  light: "",
                                  flat: "",
                                  icon: ""
                                },
                                on: {
                                  click: function($event) {
                                    props.expanded = !props.expanded
                                  }
                                }
                              },
                              [
                                !props.expanded
                                  ? _c("v-icon", [_vm._v("fa-expand")])
                                  : _vm._e(),
                                _vm._v(" "),
                                props.expanded
                                  ? _c("v-icon", [_vm._v("fa-compress")])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "compress--icon",
                                attrs: {
                                  disabled: !_vm.$auth.check("admin"),
                                  flat: "",
                                  icon: "",
                                  color: "blue"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.editShipper(props.item)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("fa-pencil")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "compress--icon",
                                attrs: {
                                  disabled: !_vm.$auth.check("admin"),
                                  flat: "",
                                  icon: "",
                                  color: "error"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.openDialog(props.item)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("fa-trash")])],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.name) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            _c("v-switch", {
                              attrs: {
                                label: _vm.getStatus(props.item.active)
                              },
                              on: {
                                change: function($event) {
                                  _vm.toggleStatus(props.item)
                                }
                              },
                              model: {
                                value: props.item.active,
                                callback: function($$v) {
                                  _vm.$set(props.item, "active", $$v)
                                },
                                expression: "props.item.active"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "pageText",
                  fn: function(ref) {
                    var pageStart = ref.pageStart
                    var pageStop = ref.pageStop
                    return [
                      _vm._v(
                        "\n        From " +
                          _vm._s(pageStart) +
                          " to " +
                          _vm._s(pageStop) +
                          "\n      "
                      )
                    ]
                  }
                },
                {
                  key: "expand",
                  fn: function(props) {
                    return [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              attrs: {
                                light: "",
                                flat: "",
                                "text-xs-center": ""
                              }
                            },
                            [
                              _c(
                                "v-card-media",
                                {
                                  staticClass: "white--text blue-grey",
                                  attrs: { height: "75px" }
                                },
                                [
                                  _c(
                                    "v-container",
                                    { attrs: { "fill-height": "", fluid: "" } },
                                    [
                                      _c(
                                        "v-layout",
                                        { attrs: { "fill-height": "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            {
                                              attrs: {
                                                xs12: "",
                                                "align-end": "",
                                                flexbox: ""
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "headline" },
                                                [
                                                  _vm._v(
                                                    _vm._s(props.item.name)
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                [
                                  _c(
                                    "v-container",
                                    { attrs: { fluid: "" } },
                                    [
                                      _c(
                                        "p",
                                        { staticClass: "title accent--text" },
                                        [
                                          _vm._v(
                                            "\n                  Account Details\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-layout",
                                        { attrs: { row: "", wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Email",
                                                  "prepend-icon": "fa-envelope",
                                                  light: "",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: props.item.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      props.item,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "props.item.email"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Phone",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon": "phone"
                                                },
                                                model: {
                                                  value: props.item.phone,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      props.item,
                                                      "phone",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "props.item.phone"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.address_1,
                                                  label: "Address 1",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon": "looks_one"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.address_2,
                                                  label: "Address 2",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon": "looks_two"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.city,
                                                  label: "City",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon":
                                                    "location_city"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.state,
                                                  label: "State",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon": "map"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.zip,
                                                  label: "Zip",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon":
                                                    "markunread_mailbox"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs6: "", "px-1": "" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  value: props.item.country,
                                                  label: "Country",
                                                  light: "",
                                                  readonly: "",
                                                  "prepend-icon": "flag"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-layout",
                                        { attrs: { row: "", wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c("v-switch", {
                                                attrs: {
                                                  label: _vm.getStatus(
                                                    props.item.active
                                                  ),
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: props.item.active,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      props.item,
                                                      "active",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "props.item.active"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { xs12: "" } },
                                            [
                                              _c(
                                                "v-textarea",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    readonly: ""
                                                  },
                                                  model: {
                                                    value: props.item.notes,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        props.item,
                                                        "notes",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "props.item.notes"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      attrs: { slot: "label" },
                                                      slot: "label"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "title"
                                                        },
                                                        [_vm._v("Notes: ")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "template",
                { slot: "no-data" },
                [
                  _c(
                    "v-alert",
                    {
                      attrs: {
                        value: true,
                        color: "blue-grey",
                        icon: "warning"
                      }
                    },
                    [
                      _vm._v("\n          Opps! No Shipper Yet!, \n          "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled: !_vm.$auth.check("admin"),
                            color: "white",
                            flat: "",
                            dark: ""
                          },
                          on: { click: _vm.createShipper }
                        },
                        [
                          _vm._v(
                            "\n            Create New Shipper\n            "
                          ),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v("\n              fa-user-plus\n            ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-alert",
                {
                  attrs: {
                    slot: "no-results",
                    value: true,
                    color: "blue-grey",
                    icon: "warning"
                  },
                  slot: "no-results"
                },
                [
                  _vm._v(
                    '\n        Your search for "' +
                      _vm._s(_vm.search) +
                      '" found no results.\n      '
                  )
                ]
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("confirm", {
            attrs: {
              callback: _vm.confirmed(_vm.deleteShipper),
              message: _vm.message
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6fc1b997", module.exports)
  }
}

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1113)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1115)
/* template */
var __vue_template__ = __webpack_require__(1116)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6fc1b997"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/Shipper/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fc1b997", Component.options)
  } else {
    hotAPI.reload("data-v-6fc1b997", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(966)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 966:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /* this mixins is responsible for concatinating error messages from vform and vee-validate  */
  methods: {
    /* errorBag is relataed to veeValidate config name*/
    /* form is related to vform */
    errorMessages: function errorMessages(field) {
      return this.errors.collect(field).concat(this.form.errors.only(field));
    },
    hasErrors: function hasErrors(field) {
      var errors = this.errors.collect(field).concat(this.form.errors.only(field));
      if (errors.length > 0) {
        return true;
      }
      return false;
    }
  }
});

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lVK7");


/***/ }),

/***/ "OMN4":
/***/ (function(module, exports) {

module.exports = __webpack_require__(372);

/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__("OMN4");
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// CONCATENATED MODULE: ./src/util.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Deep copy the given object.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function deepCopy(obj) {
  if (obj === null || _typeof(obj) !== 'object') {
    return obj;
  }

  var copy = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key]);
  });
  return copy;
}
/**
 * If the given value is not an array, wrap it in one.
 *
 * @param  {Any} value
 * @return {Array}
 */

function arrayWrap(value) {
  return Array.isArray(value) ? value : [value];
}
// CONCATENATED MODULE: ./src/Errors.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Errors__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Errors__typeof = function _typeof(obj) { return typeof obj; }; } else { Errors__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Errors__typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Errors_Errors =
/*#__PURE__*/
function () {
  /**
   * Create a new error bag instance.
   */
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }
  /**
   * Set the errors object or field error messages.
   *
   * @param {Object|String} field
   * @param {Array|String|undefined} messages
   */


  _createClass(Errors, [{
    key: "set",
    value: function set(field, messages) {
      if (Errors__typeof(field) === 'object') {
        this.errors = field;
      } else {
        this.set(_extends({}, this.errors, _defineProperty({}, field, arrayWrap(messages))));
      }
    }
    /**
     * Get all the errors.
     *
     * @return {Object}
     */

  }, {
    key: "all",
    value: function all() {
      return this.errors;
    }
    /**
     * Determine if there is an error for the given field.
     *
     * @param  {String} field
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
    /**
     * Determine if there are any errors for the given fields.
     *
     * @param  {...String} fields
     * @return {Boolean}
     */

  }, {
    key: "hasAny",
    value: function hasAny() {
      var _this = this;

      for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {
        fields[_key] = arguments[_key];
      }

      return fields.some(function (field) {
        return _this.has(field);
      });
    }
    /**
     * Determine if there are any errors.
     *
     * @return {Boolean}
     */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
    /**
     * Get the first error message for the given field.
     *
     * @param  String} field
     * @return {String|undefined}
     */

  }, {
    key: "get",
    value: function get(field) {
      if (this.has(field)) {
        return this.getAll(field)[0];
      }
    }
    /**
     * Get all the error messages for the given field.
     *
     * @param  {String} field
     * @return {Array}
     */

  }, {
    key: "getAll",
    value: function getAll(field) {
      return arrayWrap(this.errors[field] || []);
    }
    /**
     * Get the error message for the given fields.
     *
     * @param  {...String} fields
     * @return {Array}
     */

  }, {
    key: "only",
    value: function only() {
      var _this2 = this;

      var messages = [];

      for (var _len2 = arguments.length, fields = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fields[_key2] = arguments[_key2];
      }

      fields.forEach(function (field) {
        var message = _this2.get(field);

        if (message) {
          messages.push(message);
        }
      });
      return messages;
    }
    /**
     * Get all the errors in a flat array.
     *
     * @return {Array}
     */

  }, {
    key: "flatten",
    value: function flatten() {
      return Object.values(this.errors).reduce(function (a, b) {
        return a.concat(b);
      }, []);
    }
    /**
     * Clear one or all error fields.
     *
     * @param {String|undefined} field
     */

  }, {
    key: "clear",
    value: function clear(field) {
      var _this3 = this;

      var errors = {};

      if (field) {
        Object.keys(this.errors).forEach(function (key) {
          if (key !== field) {
            errors[key] = _this3.errors[key];
          }
        });
      }

      this.set(errors);
    }
  }]);

  return Errors;
}();


// CONCATENATED MODULE: ./src/Form.js
function Form__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Form__typeof = function _typeof(obj) { return typeof obj; }; } else { Form__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Form__typeof(obj); }

function Form__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Form__extends() { Form__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Form__extends.apply(this, arguments); }

function Form__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Form__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Form__createClass(Constructor, protoProps, staticProps) { if (protoProps) Form__defineProperties(Constructor.prototype, protoProps); if (staticProps) Form__defineProperties(Constructor, staticProps); return Constructor; }





var Form_Form =
/*#__PURE__*/
function () {
  /**
   * Create a new form instance.
   *
   * @param {Object} data
   */
  function Form() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Form__classCallCheck(this, Form);

    this.busy = false;
    this.successful = false;
    this.errors = new Errors_Errors();
    this.originalData = deepCopy(data);
    Object.assign(this, data);
  }
  /**
   * Fill form data.
   *
   * @param {Object} data
   */


  Form__createClass(Form, [{
    key: "fill",
    value: function fill(data) {
      var _this = this;

      this.keys().forEach(function (key) {
        _this[key] = data[key];
      });
    }
    /**
     * Get the form data.
     *
     * @return {Object}
     */

  }, {
    key: "data",
    value: function data() {
      var _this2 = this;

      return this.keys().reduce(function (data, key) {
        return Form__extends({}, data, Form__defineProperty({}, key, _this2[key]));
      }, {});
    }
    /**
     * Get the form data keys.
     *
     * @return {Array}
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this).filter(function (key) {
        return !Form.ignore.includes(key);
      });
    }
    /**
     * Start processing the form.
     */

  }, {
    key: "startProcessing",
    value: function startProcessing() {
      this.errors.clear();
      this.busy = true;
      this.successful = false;
    }
    /**
     * Finish processing the form.
     */

  }, {
    key: "finishProcessing",
    value: function finishProcessing() {
      this.busy = false;
      this.successful = true;
    }
    /**
     * Clear the form errors.
     */

  }, {
    key: "clear",
    value: function clear() {
      this.errors.clear();
      this.successful = false;
    }
    /**
     * Reset the form fields.
     */

  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      Object.keys(this).filter(function (key) {
        return !Form.ignore.includes(key);
      }).forEach(function (key) {
        _this3[key] = deepCopy(_this3.originalData[key]);
      });
    }
    /**
     * Submit the from via a GET request.
     *
     * @param  {String} url
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(url) {
      return this.submit('get', url);
    }
    /**
     * Submit the from via a POST request.
     *
     * @param  {String} url
     * @return {Promise}
     */

  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
    /**
     * Submit the from via a PATCH request.
     *
     * @param  {String} url
     * @return {Promise}
     */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
     * Submit the from via a PUT request.
     *
     * @param  {String} url
     * @return {Promise}
     */

  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
    /**
     * Submit the from via a DELETE request.
     *
     * @param  {String} url
     * @return {Promise}
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
    /**
     * Submit the form data via an HTTP request.
     *
     * @param  {String} method (get, post, patch, put)
     * @param  {String} url
     * @param  {Object} config (axios config)
     * @return {Promise}
     */

  }, {
    key: "submit",
    value: function submit(method, url) {
      var _this4 = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.startProcessing();
      var data = method === 'get' ? {
        params: this.data()
      } : this.data();
      return new Promise(function (resolve, reject) {
        external__axios__default.a.request(Form__extends({
          url: _this4.route(url),
          method: method,
          data: data
        }, config)).then(function (response) {
          _this4.finishProcessing();

          resolve(response);
        }).catch(function (error) {
          _this4.busy = false;

          if (error.response) {
            _this4.errors.set(_this4.extractErrors(error.response));
          }

          reject(error);
        });
      });
    }
    /**
     * Extract the errors from the response object.
     *
     * @param  {Object} response
     * @return {Object}
     */

  }, {
    key: "extractErrors",
    value: function extractErrors(response) {
      if (!response.data || Form__typeof(response.data) !== 'object') {
        return {
          error: Form.errorMessage
        };
      }

      if (response.data.errors) {
        return Form__extends({}, response.data.errors);
      }

      if (response.data.message) {
        return {
          error: response.data.message
        };
      }

      return Form__extends({}, response.data);
    }
    /**
     * Get a named route.
     *
     * @param  {String} name
     * @return {Object} parameters
     * @return {String}
     */

  }, {
    key: "route",
    value: function route(name) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = name;

      if (Form.routes.hasOwnProperty(name)) {
        url = decodeURI(Form.routes[name]);
      }

      if (Form__typeof(parameters) !== 'object') {
        parameters = {
          id: parameters
        };
      }

      Object.keys(parameters).forEach(function (key) {
        url = url.replace("{".concat(key, "}"), parameters[key]);
      });
      return url;
    }
    /**
     * Clear errors on keydown.
     *
     * @param {KeyboardEvent} event
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      if (event.target.name) {
        this.errors.clear(event.target.name);
      }
    }
  }]);

  return Form;
}();

Form_Form.routes = {};
Form_Form.errorMessage = 'Something went wrong. Please try again.';
Form_Form.ignore = ['busy', 'successful', 'errors', 'originalData'];
/* harmony default export */ var src_Form = (Form_Form);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//Otinsoft//Code//github//vform//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HasError.vue
//
//
//
//
/* harmony default export */ var HasError = ({
  name: 'has-error',
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4389a6dd","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/HasError.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.form.errors.has(_vm.field))?_c('div',{staticClass:"help-block invalid-feedback",domProps:{"innerHTML":_vm._s(_vm.form.errors.get(_vm.field))}}):_vm._e()}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/HasError.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  HasError,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_HasError = (Component.exports);

// CONCATENATED MODULE: ./src/components/Alert.js
/* harmony default export */ var Alert = ({
  props: {
    form: {
      type: Object,
      required: true
    },
    dismissible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dismiss: function dismiss() {
      if (this.dismissible) {
        this.form.clear();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//Otinsoft//Code//github//vform//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AlertError.vue
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AlertError = ({
  name: 'alert-error',
  extends: Alert,
  props: {
    message: {
      type: String,
      default: 'There were some problems with your input.'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e73aa7c8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AlertError.vue
var AlertError_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.dismiss}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]):_vm._e(),_vm._v(" "),_vm._t("default",[(_vm.form.errors.has('error'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('error'))}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})])],2):_vm._e()}
var AlertError_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/AlertError.vue
/* script */


/* template */

/* template functional */
var AlertError___vue_template_functional__ = false
/* styles */
var AlertError___vue_styles__ = null
/* scopeId */
var AlertError___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AlertError___vue_module_identifier__ = null

var AlertError_Component = normalizeComponent(
  AlertError,
  AlertError_render,
  AlertError_staticRenderFns,
  AlertError___vue_template_functional__,
  AlertError___vue_styles__,
  AlertError___vue_scopeId__,
  AlertError___vue_module_identifier__
)

/* harmony default export */ var components_AlertError = (AlertError_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//Otinsoft//Code//github//vform//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AlertErrors.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AlertErrors = ({
  name: 'alert-errors',
  extends: Alert,
  props: {
    message: {
      type: String,
      default: 'There were some problems with your input.'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-422a6591","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AlertErrors.vue
var AlertErrors_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.dismiss}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]):_vm._e(),_vm._v(" "),(_vm.message)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),_vm._v(" "),_c('ul',_vm._l((_vm.form.errors.flatten()),function(error){return _c('li',{domProps:{"innerHTML":_vm._s(error)}})}))]):_vm._e()}
var AlertErrors_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/AlertErrors.vue
/* script */


/* template */

/* template functional */
var AlertErrors___vue_template_functional__ = false
/* styles */
var AlertErrors___vue_styles__ = null
/* scopeId */
var AlertErrors___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AlertErrors___vue_module_identifier__ = null

var AlertErrors_Component = normalizeComponent(
  AlertErrors,
  AlertErrors_render,
  AlertErrors_staticRenderFns,
  AlertErrors___vue_template_functional__,
  AlertErrors___vue_styles__,
  AlertErrors___vue_scopeId__,
  AlertErrors___vue_module_identifier__
)

/* harmony default export */ var components_AlertErrors = (AlertErrors_Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//Otinsoft//Code//github//vform//node_modules//.cache//cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AlertSuccess.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AlertSuccess = ({
  name: 'alert-success',
  extends: Alert,
  props: {
    message: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0afdb8a8","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AlertSuccess.vue
var AlertSuccess_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.form.successful)?_c('div',{staticClass:"alert alert-success alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.dismiss}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]):_vm._e(),_vm._v(" "),_vm._t("default",[_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})])],2):_vm._e()}
var AlertSuccess_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/AlertSuccess.vue
/* script */


/* template */

/* template functional */
var AlertSuccess___vue_template_functional__ = false
/* styles */
var AlertSuccess___vue_styles__ = null
/* scopeId */
var AlertSuccess___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AlertSuccess___vue_module_identifier__ = null

var AlertSuccess_Component = normalizeComponent(
  AlertSuccess,
  AlertSuccess_render,
  AlertSuccess_staticRenderFns,
  AlertSuccess___vue_template_functional__,
  AlertSuccess___vue_styles__,
  AlertSuccess___vue_scopeId__,
  AlertSuccess___vue_module_identifier__
)

/* harmony default export */ var components_AlertSuccess = (AlertSuccess_Component.exports);

// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Form", function() { return src_Form; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors_Errors; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HasError", function() { return components_HasError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlertError", function() { return components_AlertError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlertErrors", function() { return components_AlertErrors; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlertSuccess", function() { return components_AlertSuccess; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "default", function() { return src_Form; });








/***/ })

/******/ });

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(974);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(975), __esModule: true };

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(976);
module.exports = __webpack_require__(45).Object.assign;


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(76);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(977) });


/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(375);
var gOPS = __webpack_require__(978);
var pIE = __webpack_require__(979);
var toObject = __webpack_require__(377);
var IObject = __webpack_require__(376);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(155)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 978:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 979:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(981)
/* template */
var __vue_template__ = __webpack_require__(1005)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/layouts/Main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ccbf15e", Component.options)
  } else {
    hotAPI.reload("data-v-3ccbf15e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppNavBar: __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue___default.a,
    LeftSideBar: __WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue___default.a
  }
});

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(983)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(985)
/* template */
var __vue_template__ = __webpack_require__(986)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/partials/AppNavBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-668a6646", Component.options)
  } else {
    hotAPI.reload("data-v-668a6646", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(984);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("7d886588", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-668a6646\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-668a6646\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AppNavBar.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      extension: false,
      showLogo: false,
      logo: "/img/logo.png",
      showIcon: false,
      title: "DSG Live"
    };
  },
  created: function created() {
    var _this = this;

    /* Emit On a Child Component If You Want This To Be Visible */
    Bus.$on("header-extension-visible", function (visibility) {
      _this.extension = visibility;
    });
  },

  methods: {
    toggleDrawer: function toggleDrawer() {
      Bus.$emit("toggleDrawer");
    }
  }
});

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-toolbar",
    { attrs: { color: "primary", fixed: "", app: "" } },
    [
      _c("v-toolbar-side-icon", {
        staticClass: "white--text",
        nativeOn: {
          click: function($event) {
            $event.stopPropagation()
            _vm.toggleDrawer()
          }
        }
      }),
      _vm._v(" "),
      _vm.extension
        ? _c(
            "v-toolbar-title",
            {
              staticClass: "text-xs-center ml-0 pl-3",
              class: _vm.$vuetify.breakpoint.width <= 1264 && "pr-3",
              style: _vm.$vuetify.breakpoint.width > 1264 && "width: 300px",
              attrs: { slot: "extension" },
              slot: "extension"
            },
            [
              _vm.showIcon
                ? _c(
                    "v-icon",
                    { staticClass: "ml-3 hidden-md-and-down accent" },
                    [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-md-and-down" }, [
                _c("span", { staticClass: "white--text" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              ])
            ],
            1
          )
        : _c(
            "v-toolbar-title",
            { staticClass: "text-xs-center" },
            [
              _vm.showIcon
                ? _c(
                    "v-icon",
                    { staticClass: "ml-3 hidden-md-and-down accent" },
                    [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-md-and-down" }, [
                _c("span", { staticClass: "white--text" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              ])
            ],
            1
          ),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _vm.showLogo
        ? _c("img", {
            staticClass: "hidden-md-and-up",
            attrs: { src: _vm.logo }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-spacer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-668a6646", module.exports)
  }
}

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(988)
/* template */
var __vue_template__ = __webpack_require__(1004)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/partials/LeftSideBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1892c0ca", Component.options)
  } else {
    hotAPI.reload("data-v-1892c0ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var _createNamespacedHelp = Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* createNamespacedHelpers */])("auth"),
    mapState = _createNamespacedHelp.mapState;



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VLink: __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue___default.a,
    InventoryLinks: __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks___default.a,
    InvoiceLinks: __WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks___default.a
  },
  data: function data() {
    return {
      drawer: false
    };
  },
  computed: __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends___default()({}, mapState({
    isAuthenticated: "isAuthenticated"
  })),
  created: function created() {
    var self = this;
    switch (self.$vuetify.breakpoint.name) {
      case "xs":
        return self.drawer = false;
      case "sm":
        return self.drawer = false;
      case "md":
        return self.drawer = true;
      case "lg":
        return self.drawer = true;
      case "xl":
        return self.drawer = true;
    }
  },
  mounted: function mounted() {
    var self = this;
    Bus.$on("toggleDrawer", function () {
      self.drawer = !self.drawer;
    });
  }
});

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(990)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(992)
/* template */
var __vue_template__ = __webpack_require__(993)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c0f8c2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/VLink.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c0f8c2e", Component.options)
  } else {
    hotAPI.reload("data-v-2c0f8c2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(991);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("0e5a43e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c0f8c2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VLink.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c0f8c2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VLink.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.styleAvatar[data-v-2c0f8c2e] {\n  position: relative;\n  margin-left: -55px;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/VLink.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,mBAAmB;CAAE","file":"VLink.vue","sourcesContent":[".styleAvatar {\n  position: relative;\n  margin-left: -55px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    dark: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: function _default() {
        return "";
      }
    },
    icon: {
      type: String,
      default: function _default() {
        return "";
      }
    },
    iconColor: {
      type: String,
      default: function _default() {
        return this.dark ? "#fafafa" : "#78909C"; // white or blue-grey lighten-1
      }
    },
    linkColor: {
      type: String,
      default: function _default() {
        return this.dark ? "#fafafa" : "#e3b500"; // white or blue-grey lighten-1
      }
    },
    activeColor: {
      type: String,
      default: function _default() {
        return "#f5c300"; // teal lighten 2
      }
    }
  },
  computed: {
    isActive: function isActive() {
      return this.href === this.$route.path;
    },
    isDark: function isDark() {
      return this.dark === true;
    },
    avatarOn: function avatarOn() {
      return !!this.avatar;
    },
    iconOn: function iconOn() {
      return !!this.icon;
    }
  },
  methods: {
    navigate: function navigate(href) {
      var self = this;
      /* if valid url */
      if (self.isURL(href)) {
        window.open(href);
      } else {
        /* when using vue router path */
        this.$router.push({ path: "" + href });
      }
    },
    isURL: function isURL(str) {
      var urlRegex = "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
      var url = new RegExp(urlRegex, "i");
      return str.length < 2083 && url.test(str);
    }
  }
});

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-tile",
    {
      class: [{ styleAvatar: _vm.avatarOn }],
      attrs: { avatar: _vm.avatarOn },
      nativeOn: {
        click: function($event) {
          _vm.navigate(_vm.href)
        }
      }
    },
    [
      _vm.iconOn && !_vm.avatarOn
        ? _c(
            "v-list-tile-action",
            [
              _c(
                "v-icon",
                {
                  style: {
                    color: _vm.isActive ? _vm.activeColor : _vm.iconColor,
                    cursor: _vm.href ? "pointer" : ""
                  }
                },
                [_vm._v(_vm._s(_vm.icon))]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.iconOn && _vm.avatarOn
        ? _c("v-list-tile-avatar", [
            _c("img", { attrs: { src: _vm.avatar, alt: "" } })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-list-tile-content",
        [
          _c(
            "v-list-tile-title",
            {
              style: { color: _vm.isActive ? _vm.activeColor : _vm.linkColor }
            },
            [
              _c("span", { style: { cursor: _vm.href ? "pointer" : "" } }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.iconOn && _vm.avatarOn
        ? _c(
            "v-list-tile-action",
            [
              _c(
                "v-icon",
                {
                  style: {
                    color: _vm.isActive ? _vm.activeColor : _vm.iconColor,
                    cursor: _vm.href ? "pointer" : ""
                  }
                },
                [_vm._v(_vm._s(_vm.icon))]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c0f8c2e", module.exports)
  }
}

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(995)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(997)
/* template */
var __vue_template__ = __webpack_require__(998)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/InventoryLinks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9b74198", Component.options)
  } else {
    hotAPI.reload("data-v-c9b74198", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(996);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("4511bccc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c9b74198\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InventoryLinks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c9b74198\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InventoryLinks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InventoryLinks.vue"],"names":[],"mappings":";AAgIA;EACA,0BAAA;CACA","file":"InventoryLinks.vue","sourcesContent":["<template>\n  <v-list \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\" \n        v-if=\"$auth.check(subItem.auth)\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"collections_bookmark\",\n          title: \"Inventories\",\n          items: [\n            {\n              title: \"All Unknown Report\",\n              href: \"/reports/all-unknown-report\",\n              action: \"fa-question-circle\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Unknown Customer\",\n              href: \"/reports/unknown-customer\",\n              action: \"supervised_user_circle\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Unknown Client\",\n              href: \"/reports/unknown-client\",\n              action: \"fa-users\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Unknown Shipper\",\n              href: \"/reports/unknown-shipper\",\n              action: \"fa-ship\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Damaged Report\",\n              href: \"/reports/damaged\",\n              action: \"broken_image\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Repaired Report\",\n              href: \"/reports/repaired\",\n              action: \"build\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Undelivered Report\",\n              href: \"/reports/undelivered\",\n              action: \"fa-truck\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Bin Report\",\n              href: \"/reports/bin\",\n              action: \"apps\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Customer Report\",\n              href: \"/reports/customer\",\n              action: \"local_library\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Client Report\",\n              href: \"/reports/clients\",\n              action: \"perm_contact_calendar\",\n              auth: [\"admin\"]\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeColor: "#4DB6AC",
      linkColor: "#fffff",
      items: [{
        action: "collections_bookmark",
        title: "Inventories",
        items: [{
          title: "All Unknown Report",
          href: "/reports/all-unknown-report",
          action: "fa-question-circle",
          auth: ["admin"]
        }, {
          title: "Unknown Customer",
          href: "/reports/unknown-customer",
          action: "supervised_user_circle",
          auth: ["admin", "warehouse"]
        }, {
          title: "Unknown Client",
          href: "/reports/unknown-client",
          action: "fa-users",
          auth: ["admin", "warehouse", "customer"]
        }, {
          title: "Unknown Shipper",
          href: "/reports/unknown-shipper",
          action: "fa-ship",
          auth: ["admin", "warehouse"]
        }, {
          title: "Damaged Report",
          href: "/reports/damaged",
          action: "broken_image",
          auth: ["admin", "warehouse", "customer"]
        }, {
          title: "Repaired Report",
          href: "/reports/repaired",
          action: "build",
          auth: ["admin", "warehouse", "customer"]
        }, {
          title: "Undelivered Report",
          href: "/reports/undelivered",
          action: "fa-truck",
          auth: ["admin", "warehouse", "customer"]
        }, {
          title: "Bin Report",
          href: "/reports/bin",
          action: "apps",
          auth: ["admin"]
        }, {
          title: "Customer Report",
          href: "/reports/customer",
          action: "local_library",
          auth: ["admin"]
        }, {
          title: "Client Report",
          href: "/reports/clients",
          action: "perm_contact_calendar",
          auth: ["admin"]
        }]
      }]
    };
  },

  methods: {
    isActive: function isActive(item) {
      return item.href === this.$route.path;
    },
    loadview: function loadview(subItem) {
      this.$router.push({ path: "" + subItem.href });
    }
  }
});

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list",
    { staticClass: "blue-grey", attrs: { dark: "" } },
    _vm._l(_vm.items, function(item) {
      return _c(
        "v-list-group",
        {
          key: item.title,
          attrs: { "no-action": "", "active-class": "accent--text" },
          model: {
            value: item.active,
            callback: function($$v) {
              _vm.$set(item, "active", $$v)
            },
            expression: "item.active"
          }
        },
        [
          _c(
            "v-list-tile",
            { attrs: { slot: "activator" }, slot: "activator" },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "white" } }, [
                    _vm._v(_vm._s(item.action))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [_c("v-list-tile-title", [_vm._v(_vm._s(item.title))])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(item.items, function(subItem) {
            return _vm.$auth.check(subItem.auth)
              ? _c(
                  "v-list-tile",
                  {
                    key: subItem.title,
                    style: {
                      color: _vm.isActive(subItem)
                        ? _vm.activeColor
                        : _vm.linkColor
                    },
                    on: {
                      click: function($event) {
                        _vm.loadview(subItem)
                      }
                    }
                  },
                  [
                    _c(
                      "v-list-tile-content",
                      [
                        _c("v-list-tile-title", [_vm._v(_vm._s(subItem.title))])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-tile-action",
                      [
                        _c(
                          "v-icon",
                          {
                            attrs: {
                              color: _vm.isActive(subItem) ? "teal" : "white"
                            }
                          },
                          [_vm._v(_vm._s(subItem.action))]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          })
        ],
        2
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c9b74198", module.exports)
  }
}

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1000)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1002)
/* template */
var __vue_template__ = __webpack_require__(1003)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/InvoiceLinks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39e6077a", Component.options)
  } else {
    hotAPI.reload("data-v-39e6077a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZT9iOTFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlP2MyMDgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlP2ViMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWU/ZTQwNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWU/M2QzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWU/YTNiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlP2YwNTkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZT85ZjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NoaXBwZXIvSW5kZXgudnVlPzViOTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaGlwcGVyL0luZGV4LnZ1ZT9hNmEzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NoaXBwZXIvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2hpcHBlci9JbmRleC52dWU/YTRlMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NoaXBwZXIvSW5kZXgudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy92YWxpZGF0aW9uLWVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92Zm9ybS9kaXN0L3Zmb3JtLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWU/MDM5MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWU/Mjk4MiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZT85Mzk3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWU/ODk4MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlP2ZhNTkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZT80Nzk0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZT8zNDVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWU/Mjc5NCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlPzA0NDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWUiXSwibmFtZXMiOlsibWV0aG9kcyIsImNvbmZpcm1lZCIsImNiIiwic2VsZiIsInBhcmFtcyIsIm9wZW5EaWFsb2ciLCJpdGVtIiwiQnVzIiwiJGVtaXQiLCJlcnJvck1lc3NhZ2VzIiwiZmllbGQiLCJlcnJvcnMiLCJjb2xsZWN0IiwiY29uY2F0IiwiZm9ybSIsIm9ubHkiLCJoYXNFcnJvcnMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxzQ0FBbU87QUFDbk87QUFDQTtBQUNBO0FBQ0Esb0VBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGtGQUFrRjtBQUNsTyx5SkFBeUosa0ZBQWtGO0FBQzNPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGdFQUFpRSw4QkFBOEIsR0FBRyxVQUFVLDJKQUEySixNQUFNLFdBQVcsMGFBQTBhLGVBQWUsd0dBQXdHLGNBQWMsNkxBQTZMLG1EQUFtRCxpSEFBaUgsaUJBQWlCLDBKQUEwSixrQkFBa0IsMklBQTJJLFlBQVksY0FBYywwRkFBMEYsMkdBQTJHLDRJQUE0SSxnQkFBZ0Isa0VBQWtFLGdCQUFnQixnS0FB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Q2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQWlEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQWlEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBLDBCQUFtTTtBQUNuTTtBQUNBO0FBQ0E7QUFDQSw2Q0FBMFo7QUFDMVo7QUFDQSwrQ0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDAxMjY5NmJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zOWU2MDc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS91cmlhaC9TaXRlcy9kc2dsaXZlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeUZBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52b2ljZUxpbmtzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1saXN0IFxcbiAgICB2LWlmPVxcXCIkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCIgXFxuICAgIGNsYXNzPVxcXCJibHVlLWdyZXlcXFwiXFxuICAgIGRhcmtcXG4gID5cXG4gICAgPHYtbGlzdC1ncm91cFxcbiAgICAgIHYtZm9yPVxcXCJpdGVtIGluIGl0ZW1zXFxcIlxcbiAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWN0aXZlXFxcIlxcbiAgICAgIDprZXk9XFxcIml0ZW0udGl0bGVcXFwiXFxuICAgICAgbm8tYWN0aW9uXFxuICAgICAgYWN0aXZlLWNsYXNzPVxcXCJhY2NlbnQtLXRleHRcXFwiXFxuICAgID5cXG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcIndoaXRlXFxcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuXFxuICAgICAgPHYtbGlzdC10aWxlXFxuICAgICAgICB2LWZvcj1cXFwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXFxcIlxcbiAgICAgICAgOmtleT1cXFwic3ViSXRlbS50aXRsZVxcXCJcXG4gICAgICAgIDpzdHlsZT1cXFwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVxcXCJcXG4gICAgICAgIEBjbGljaz1cXFwibG9hZHZpZXcoc3ViSXRlbSlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBzdWJJdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gOmNvbG9yPVxcXCJpc0FjdGl2ZShzdWJJdGVtKSA/ICd0ZWFsJyA6ICd3aGl0ZSdcXFwiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICA8L3YtbGlzdC1ncm91cD5cXG4gIDwvdi1saXN0PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGFjdGl2ZUNvbG9yOiBcXFwiIzREQjZBQ1xcXCIsXFxuICAgICAgbGlua0NvbG9yOiBcXFwiI2ZmZmZmXFxcIixcXG4gICAgICBpdGVtczogW1xcbiAgICAgICAge1xcbiAgICAgICAgICBhY3Rpb246IFxcXCJjYXJkX21lbWJlcnNoaXBcXFwiLFxcbiAgICAgICAgICB0aXRsZTogXFxcIkludm9pY2VzXFxcIixcXG4gICAgICAgICAgaXRlbXM6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkdlbmVyYXRlIEludm9pY2VcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9pbnZvaWNlcy9nZW5lcmF0ZVxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJzY2hlZHVsZVxcXCJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHsgdGl0bGU6IFxcXCJJbnZvaWNlc1xcXCIsIGhyZWY6IFxcXCIvaW52b2ljZXNcXFwiLCBhY3Rpb246IFxcXCJhbGxfaW5ib3hcXFwiIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJXZWVrbHkgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy90b3RhbC1hbGwtY3VzdG9tZXItaW52b2ljZVxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJwaWN0dXJlX2FzX3BkZlxcXCJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ3VzdG9tZXIgSW52b2ljZSBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2N1c3RvbWVyLWludm9pY2UtcmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcInBlcm1fY29udGFjdF9jYWxlbmRhclxcXCJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2xpZW50IEludm9pY2UgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9jbGllbnQtaW52b2ljZS1yZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwicGVybV9pZGVudGl0eVxcXCJcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIF1cXG4gICAgICAgIH1cXG4gICAgICBdXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBpc0FjdGl2ZShpdGVtKSB7XFxuICAgICAgcmV0dXJuIGl0ZW0uaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcXG4gICAgfSxcXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7c3ViSXRlbS5ocmVmfWAgfSk7XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zOWU2MDc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiPHRlbXBsYXRlPlxuICA8di1saXN0IFxuICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCJcbiAgICBkYXJrXG4gID5cbiAgICA8di1saXN0LWdyb3VwXG4gICAgICB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgdi1tb2RlbD1cIml0ZW0uYWN0aXZlXCJcbiAgICAgIDprZXk9XCJpdGVtLnRpdGxlXCJcbiAgICAgIG5vLWFjdGlvblxuICAgICAgYWN0aXZlLWNsYXNzPVwiYWNjZW50LS10ZXh0XCJcbiAgICA+XG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cImFjdGl2YXRvclwiPlxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG5cbiAgICAgIDx2LWxpc3QtdGlsZVxuICAgICAgICB2LWZvcj1cInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1wiXG4gICAgICAgIDprZXk9XCJzdWJJdGVtLnRpdGxlXCJcbiAgICAgICAgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiXG4gICAgICAgIEBjbGljaz1cImxvYWR2aWV3KHN1Ykl0ZW0pXCJcbiAgICAgID5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1wiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICA8L3YtbGlzdC1ncm91cD5cbiAgPC92LWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDb2xvcjogXCIjNERCNkFDXCIsXG4gICAgICBsaW5rQ29sb3I6IFwiI2ZmZmZmXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uOiBcImNhcmRfbWVtYmVyc2hpcFwiLFxuICAgICAgICAgIHRpdGxlOiBcIkludm9pY2VzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhdGUgSW52b2ljZVwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9pbnZvaWNlcy9nZW5lcmF0ZVwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwic2NoZWR1bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiSW52b2ljZXNcIiwgaHJlZjogXCIvaW52b2ljZXNcIiwgYWN0aW9uOiBcImFsbF9pbmJveFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIldlZWtseSBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy90b3RhbC1hbGwtY3VzdG9tZXItaW52b2ljZVwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwicGljdHVyZV9hc19wZGZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ3VzdG9tZXIgSW52b2ljZSBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9jdXN0b21lci1pbnZvaWNlLXJlcG9ydFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwicGVybV9jb250YWN0X2NhbGVuZGFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNsaWVudCBJbnZvaWNlIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2NsaWVudC1pbnZvaWNlLXJlcG9ydFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwicGVybV9pZGVudGl0eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzQWN0aXZlKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XG4gICAgfSxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke3N1Ykl0ZW0uaHJlZn1gIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgID8gX2MoXG4gICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsIGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWFjdGlvblwiOiBcIlwiLCBcImFjdGl2ZS1jbGFzc1wiOiBcImFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwiYWN0aXZlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiIH0sIHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hY3Rpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uaXRlbXMsIGZ1bmN0aW9uKHN1Ykl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3ViSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlKHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5hY3RpdmVDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubGlua0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWR2aWV3KHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Ykl0ZW0udGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKSA/IFwidGVhbFwiIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLmFjdGlvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzllNjA3N2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM5ZTYwNzdhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGNsaXBwZWQ6IF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoIDw9IDEyNjQgJiYgdHJ1ZSxcbiAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgIFwiaGlkZS1vdmVybGF5XCI6IFwiXCIsXG4gICAgICAgIGFwcDogXCJcIlxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0uZHJhd2VyLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLmRyYXdlciA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIiwgYXR0cnM6IHsgZGVuc2U6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFkbWluIEFyZWFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJ3YXJlaG91c2VcIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIldhcmVob3VzZSBBcmVhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiY3VzdG9tZXJcIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkN1c3RvbWVyIEFyZWFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiYWRtaW5cIiwgXCJjdXN0b21lclwiLCBcIndhcmVob3VzZVwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYS10YWNob21ldGVyXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlR1dG9yaWFsc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdHV0b3JpYWxzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1vdmllXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdXNlcnNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2hpcHBlcnNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3NoaXBwZXJzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLXNoaXBcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJhdGVzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9yYXRlc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJpbnNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2JpbnNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwidmlld19tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wid2FyZWhvdXNlXCIsIFwiYWRtaW5cIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2FyZWhvdXNlXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi93YXJlaG91c2VcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibG9jYXRpb25fY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWNlaXZpbmdcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3JlY2VpdmluZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJyZWNlaXB0XCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyY2hpdmVkXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9hcmNoaXZlZC9kc2dcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiYXJjaGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW52ZW50b3J5LWxpbmtzXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJUaWNrZXRzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi90aWNrZXRzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImNvbmZpcm1hdGlvbl9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pc2NlbGxhbmVvdXNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL21pc2NlbGxhbmVvdXNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibm90ZV9hZGRcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBheW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9wYXltZW50c1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImludm9pY2UtbGlua3NcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiY3VzdG9tZXJcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvY2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJidXNpbmVzc19jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiY3VzdG9tZXJcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW52b2ljZXNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2ludm9pY2VzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImFsbF9pbmJveFwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjaygpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3NldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLWNvZ3NcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvbG9nb3V0XCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcInBvd2VyX3NldHRpbmdzX25ld1wiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMTg5MmMwY2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4OTJjMGNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJpbnNwaXJlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwibGVmdC1zaWRlLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFwcC1uYXYtYmFyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGVudFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzbGlkZS14LXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIGZsdWlkOiBcIlwiLFxuICAgICAgICAgICAgXCJwYS0wXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1hLTBcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtM2NjYmYxNWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNjY2JmMTVlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSA2MCA2MSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzA4ZGY4ODJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29uZmlybS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29uZmlybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMwOGRmODgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29uZmlybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzA4ZGY4ODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMDhkZjg4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAzOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMDhkZjg4MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db25maXJtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiODljYTU3ZmNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMwOGRmODgyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbmZpcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMwOGRmODgyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbmZpcm0udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTMwOGRmODgyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDM4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJDb25maXJtLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTMwOGRmODgyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDM4IiwiPHRlbXBsYXRlPlxuICA8di1kaWFsb2dcbiAgICB2LW1vZGVsPVwiZGlhbG9nXCJcbiAgICB3aWR0aD1cIjUwMFwiXG4gID5cbiAgICA8di1jYXJkPlxuICAgICAgPHYtY2FyZC10aXRsZVxuICAgICAgICBjbGFzcz1cImhlYWRsaW5lIHByaW1hcnlcIlxuICAgICAgICBkYXJrXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2hpdGUtLXRleHRcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvdi1jYXJkLXRpdGxlPlxuXG4gICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgIHt7IG1lc3NhZ2UgfX1cbiAgICAgIDwvdi1jYXJkLXRleHQ+XG5cbiAgICAgIDx2LWRpdmlkZXIvPlxuXG4gICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICBmbGF0IFxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCIgXG4gICAgICAgICAgQGNsaWNrPVwiZGlhbG9nID0gZmFsc2VcIj5cbiAgICAgICAgICA8di1pY29uIGxlZnQ+YXJyb3dfbGVmdDwvdi1pY29uPlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtYnRuXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgQGNsaWNrPVwiY29uZmlybSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGFjdGlvbiB9fVxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2FsbGJhY2s6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJEZWxldGluZyBUaGlzIERzZyBSZWNvcmQgLCBXaWxsIEFsc28gRGVsZXRlIEFsbCBBc3NvY2lhdGVkIERhdGEgQXR0YWNoIFRvIEl0IFN1Y2ggQXMgSW1hZ2VzIGFuZCBJdGVtcy4gQWxzbyBOb3RlIFRoYXQgU29tZSBEYXRhIEluIFRoZSBTeXN0ZW0gVGhhdCBFeGlzdCBXaGljaCBSZWZlcmVuY2UgVG8gVGhpcyBEc2cgUmVjb3JkIFdpbGwgQnJlYWsgaXRzIEZ1bmN0aW9uYWxpdHkgU3VjaCBBcyBJbnZvaWNpbmcuIE9ubHkgUHJvY2VlZCBJZiBZb3UgVGhpbmsgVGhlcmUgV2lsbCBCZSBObyBTaWRlIEVmZmVjdCBPZiBXaGF0IFlvdSBXaWxsIEJlIERvaW5nIVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgVG8gRGVsZXRlIFRoaXM/XCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJZZXMgLCBJIFVuZGVyc3RhbmRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZGlhbG9nOiBmYWxzZSxcbiAgICBwYXJhbXM6IG51bGxcbiAgfSksXG4gIG1vdW50ZWQoKSB7XG4gICAgQnVzLiRvbihcIm9wZW4tY29uZmlybWF0aW9uXCIsIHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5wYXJhbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWRpYWxvZ1wiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjUwMFwiIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lIHByaW1hcnlcIiwgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGxlZnQ6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYXJyb3dfbGVmdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBCYWNrXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY29uZmlybSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5hY3Rpb24pICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzA4ZGY4ODJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMwOGRmODgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAzOCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIGNvbmZpcm1lZChjYikge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcyA9PiB7XG4gICAgICAgIGNiKHBhcmFtcyk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgb3BlbkRpYWxvZyhpdGVtKSB7XG4gICAgICBCdXMuJGVtaXQoXCJvcGVuLWNvbmZpcm1hdGlvblwiLCBpdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb25maXJtYXRpb24uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmZjMWI5OTdcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbmRleC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE1MDg4MTQ4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZmMxYjk5N1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZmMxYjk5N1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZmMxYjk5N1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NoaXBwZXIvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY29tcHJlc3MtLWljb25bZGF0YS12LTZmYzFiOTk3XSB7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIG1hcmdpbi1yaWdodDogLTVweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VyaWFoL1NpdGVzL2RzZ2xpdmUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaGlwcGVyL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2hpcHBlci9JbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZwQkE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NBQ0FcIixcImZpbGVcIjpcIkluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8bWFpbi1sYXlvdXQ+XFxuICAgIDx2LWNvbnRhaW5lciBmbHVpZD5cXG4gICAgICA8IS0tIFNlYXJjaCBhbmQgQWN0aW9uIEJ1dHRvbnMgLS0+XFxuICAgICAgPHYtbGF5b3V0IFxcbiAgICAgICAgcm93IFxcbiAgICAgICAgd3JhcD5cXG4gICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgIGQtZmxleCBcXG4gICAgICAgICAgeHMxMiBcXG4gICAgICAgICAgc203PlxcbiAgICAgICAgICA8di1sYXlvdXQgXFxuICAgICAgICAgICAgcm93IFxcbiAgICAgICAgICAgIHdyYXA+XFxuICAgICAgICAgICAgPHYtZmxleCBkLWZsZXg+XFxuICAgICAgICAgICAgICA8di1jYXJkIFxcbiAgICAgICAgICAgICAgICBsaWdodCBcXG4gICAgICAgICAgICAgICAgZmxhdFxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiU2VhcmNoIFNoaXBwZXJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcXG4gICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICA8di1mbGV4IFxcbiAgICAgICAgICBkLWZsZXggXFxuICAgICAgICAgIHhzMTIgXFxuICAgICAgICAgIHNtNSBcXG4gICAgICAgICAgY2hpbGQtZmxleD5cXG4gICAgICAgICAgPHYtbGF5b3V0IFxcbiAgICAgICAgICAgIHJvdyBcXG4gICAgICAgICAgICB3cmFwPlxcbiAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICB4czEyIFxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgZC1mbGV4PlxcbiAgICAgICAgICAgICAgPHYtYnRuIFxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCIgXFxuICAgICAgICAgICAgICAgIGJsb2NrIFxcbiAgICAgICAgICAgICAgICBjb2xvcj1cXFwiYWNjZW50XFxcIiBcXG4gICAgICAgICAgICAgICAgZGFya1xcbiAgICAgICAgICAgICAgICBmbGF0XFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiY3JlYXRlU2hpcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgU2hpcHBlclxcbiAgICAgICAgICAgICAgICA8di1pY29uXFxuICAgICAgICAgICAgICAgICAgcmlnaHRcXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiYWNjZW50XFxcIiBcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIGZhLXNoaXBcXG4gICAgICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICAgICAgICAgIDx2LWljb25cXG4gICAgICAgICAgICAgICAgICByaWdodFxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJhY2NlbnRcXFwiIFxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgZmEtcGx1cy1jaXJjbGVcXG4gICAgICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICB4czEyIFxcbiAgICAgICAgICAgICAgZC1mbGV4PlxcbiAgICAgICAgICAgICAgPHYtZmxleCBjbGFzcz1cXFwieHM2IHdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtYnRuIFxcbiAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiXFxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhJGF1dGguY2hlY2soJ2FkbWluJylcXFwiIFxcbiAgICAgICAgICAgICAgICAgIGJsb2NrIFxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJibHVlIGRhcmtlbi00XFxcIiBcXG4gICAgICAgICAgICAgICAgICBkYXJrXFxuICAgICAgICAgICAgICAgICAgZmxhdFxcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwibWFzc0FjdGl2YXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8di1pY29uXFxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcImJsdWUgZGFya2VuLTRcXFwiIFxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIGxpbmtcXG4gICAgICAgICAgICAgICAgICA8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICBBY3RpdmF0ZSBTZWxlY3RlZFxcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICA8di1mbGV4IGNsYXNzPVxcXCJ4czYgd2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1idG4gXFxuICAgICAgICAgICAgICAgICAgdi1pZj1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCJcXG4gICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCIgXFxuICAgICAgICAgICAgICAgICAgYmxvY2sgXFxuICAgICAgICAgICAgICAgICAgZmxhdFxcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJlcnJvclxcXCIgXFxuICAgICAgICAgICAgICAgICAgZGFya1xcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwibWFzc0RlYWN0aXZhdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDx2LWljb25cXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZXJyb3JcXFwiIFxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIGxpbmtfb2ZmXFxuICAgICAgICAgICAgICAgICAgPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgRGVhY3RpdmF0ZSBTZWxlY3RlZFxcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgIFxcbiAgICAgICAgPC92LWZsZXg+XFxuICAgICAgPC92LWxheW91dD5cXG4gICAgICA8IS0tIFNoaXBwZXIgRGF0YSBUYWJsZSAtLT5cXG4gICAgICA8di1kYXRhLXRhYmxlXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXG4gICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcbiAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXG4gICAgICAgIDpzZWFyY2g9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XFxcInBhZ2luYXRpb25cXFwiXFxuICAgICAgICBzZWxlY3QtYWxsXFxuICAgICAgICBpdGVtLWtleT1cXFwiaWRcXFwiXFxuICAgICAgICBleHBhbmRcXG4gICAgICA+XFxuICAgICAgICA8IS0tIEhlYWRlciBTZWN0aW9uIC0tPlxcbiAgICAgICAgPHRlbXBsYXRlXFxuICAgICAgICAgIHNsb3Q9XFxcImhlYWRlcnNcXFwiIFxcbiAgICAgICAgICBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5cXG4gICAgICAgICAgICAgIDx2LWNoZWNrYm94XFxuICAgICAgICAgICAgICAgIDppbnB1dC12YWx1ZT1cXFwicHJvcHMuYWxsXFxcIlxcbiAgICAgICAgICAgICAgICA6aW5kZXRlcm1pbmF0ZT1cXFwicHJvcHMuaW5kZXRlcm1pbmF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxcbiAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcXG4gICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cXFwidG9nZ2xlQWxsXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgIDx0aCBcXG4gICAgICAgICAgICAgIHYtZm9yPVxcXCJoZWFkZXIgaW4gcHJvcHMuaGVhZGVyc1xcXCIgXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJoZWFkZXIudGV4dFxcXCJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWydjb2x1bW4gc29ydGFibGUnLCBwYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyAnZGVzYycgOiAnYXNjJywgXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPT09IHBhZ2luYXRpb24uc29ydEJ5ID8gJ25hbWUnIDogJycsIFxcbiAgICAgICAgICAgICAgICAgICAgICAgeyd0ZXh0LXhzLWxlZnQnOiBoZWFkZXIuYWxpZ24gPT09ICdsZWZ0JywgXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMtcmlnaHQnOiBoZWFkZXIuYWxpZ24gPT09ICdyaWdodCcsIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLWNlbnRlcic6IGhlYWRlci5hbGlnbiA9PT0gJ2NlbnRlcid9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+PSA2MDAgJiYgJ3RpdGxlJ11cXFwiXFxuICAgICAgICAgICAgICBAY2xpY2s9XFxcImNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5hcnJvd191cHdhcmQ8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAge3sgaGVhZGVyLnRleHQgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gUm93IFNlY3Rpb24gLS0+XFxuICAgICAgICA8dGVtcGxhdGUgXFxuICAgICAgICAgIHNsb3Q9XFxcIml0ZW1zXFxcIiBcXG4gICAgICAgICAgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQgXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1sZWZ0XFxcIlxcbiAgICAgICAgICAgICAgc3R5bGU9XFxcIndpZHRoOjUlO1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8di1jaGVja2JveFxcbiAgICAgICAgICAgICAgICA6YWN0aXZlPVxcXCJwcm9wcy5zZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgICAgOmlucHV0LXZhbHVlPVxcXCJwcm9wcy5zZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwcm9wcy5zZWxlY3RlZCA9ICFwcm9wcy5zZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1jZW50ZXJcXFwiXFxuICAgICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6MTAlO21hcmdpbi1sZWZ0OjBweDttYXJnaW4tcmlnaHQ6MHB4O3BhZGRpbmctbGVmdDowcHg7cGFkZGluZy1yaWdodDowcHg7XFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDx2LWJ0biBcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhJGF1dGguY2hlY2soJ2FkbWluJylcXFwiIFxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsnYW1iZXItLXRleHQnOiBwcm9wcy5leHBhbmRlZCwgJ2FtYmVyJzogcHJvcHMuZXhwYW5kZWQsICd0ZWFsJzogIXByb3BzLmV4cGFuZGVkLCAndGVhbC0tdGV4dCc6ICFwcm9wcy5leHBhbmRlZCB9XFxcIiBcXG4gICAgICAgICAgICAgICAgbGlnaHQgXFxuICAgICAgICAgICAgICAgIGZsYXQgXFxuICAgICAgICAgICAgICAgIGljb24gXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjb21wcmVzcy0taWNvblxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwcm9wcy5leHBhbmRlZCA9ICFwcm9wcy5leHBhbmRlZFxcXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPHYtaWNvbiB2LWlmPVxcXCIhcHJvcHMuZXhwYW5kZWRcXFwiPmZhLWV4cGFuZDwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICA8di1pY29uIHYtaWY9XFxcInByb3BzLmV4cGFuZGVkXFxcIj5mYS1jb21wcmVzczwvdi1pY29uPlxcbiAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgIDx2LWJ0biBcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhJGF1dGguY2hlY2soJ2FkbWluJylcXFwiIFxcbiAgICAgICAgICAgICAgICBmbGF0IFxcbiAgICAgICAgICAgICAgICBpY29uIFxcbiAgICAgICAgICAgICAgICBjb2xvcj1cXFwiYmx1ZVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjb21wcmVzcy0taWNvblxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJlZGl0U2hpcHBlcihwcm9wcy5pdGVtKVxcXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5mYS1wZW5jaWw8L3YtaWNvbj5cXG4gICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICA8di1idG4gXFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiISRhdXRoLmNoZWNrKCdhZG1pbicpXFxcIiBcXG4gICAgICAgICAgICAgICAgZmxhdCBcXG4gICAgICAgICAgICAgICAgaWNvbiBcXG4gICAgICAgICAgICAgICAgY29sb3I9XFxcImVycm9yXFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbXByZXNzLS1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9wZW5EaWFsb2cocHJvcHMuaXRlbSlcXFwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDx2LWljb24+ZmEtdHJhc2g8L3YtaWNvbj5cXG4gICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRpdGxlIHRleHQteHMtbGVmdCBhY2NlbnQtLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5uYW1lIH19XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRpdGxlIHRleHQteHMtbGVmdCBhY2NlbnQtLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAgPHYtc3dpdGNoXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLml0ZW0uYWN0aXZlXFxcIlxcbiAgICAgICAgICAgICAgICA6bGFiZWw9XFxcImdldFN0YXR1cyhwcm9wcy5pdGVtLmFjdGl2ZSlcXFwiXFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInRvZ2dsZVN0YXR1cyhwcm9wcy5pdGVtKVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8IS0tIFBhZ2luYXRpb24gU2VjdGlvbiAtLT5cXG4gICAgICAgIDx0ZW1wbGF0ZSBcXG4gICAgICAgICAgc2xvdD1cXFwicGFnZVRleHRcXFwiXFxuICAgICAgICAgIHNsb3Qtc2NvcGU9XFxcInsgcGFnZVN0YXJ0LCBwYWdlU3RvcCB9XFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICBGcm9tIHt7IHBhZ2VTdGFydCB9fSB0byB7eyBwYWdlU3RvcCB9fVxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gRXhwYW5kIFNlY3Rpb24gLS0+XFxuICAgICAgICA8dGVtcGxhdGUgXFxuICAgICAgICAgIHNsb3Q9XFxcImV4cGFuZFxcXCIgXFxuICAgICAgICAgIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XFxuICAgICAgICAgICAgPHYtY2FyZCBcXG4gICAgICAgICAgICAgIGxpZ2h0IFxcbiAgICAgICAgICAgICAgZmxhdCBcXG4gICAgICAgICAgICAgIHRleHQteHMtY2VudGVyXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPHYtY2FyZC1tZWRpYVxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwid2hpdGUtLXRleHQgYmx1ZS1ncmV5XFxcIlxcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjc1cHhcXFwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBcXG4gICAgICAgICAgICAgICAgICBmaWxsLWhlaWdodCBcXG4gICAgICAgICAgICAgICAgICBmbHVpZFxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IGZpbGwtaGVpZ2h0PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcXG4gICAgICAgICAgICAgICAgICAgICAgeHMxMiBcXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tZW5kIFxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4Ym94XFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgcHJvcHMuaXRlbS5uYW1lIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgIDwvdi1jYXJkLW1lZGlhPlxcbiAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkPlxcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgIDxwIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRpdGxlIGFjY2VudC0tdGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50IERldGFpbHNcXG4gICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IFxcbiAgICAgICAgICAgICAgICAgICAgcm93IFxcbiAgICAgICAgICAgICAgICAgICAgd3JhcFxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxcbiAgICAgICAgICAgICAgICAgICAgICBweC0xPlxcbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuaXRlbS5lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiRW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJmYS1lbnZlbG9wZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxcbiAgICAgICAgICAgICAgICAgICAgICBweC0xPlxcbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuaXRlbS5waG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiUGhvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRcXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxcbiAgICAgICAgICAgICAgICAgICAgICBweC0xXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInByb3BzLml0ZW0uYWRkcmVzc18xXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJBZGRyZXNzIDFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRcXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cXFwibG9va3Nfb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxcbiAgICAgICAgICAgICAgICAgICAgICB4czZcXG4gICAgICAgICAgICAgICAgICAgICAgcHgtMVxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVxcXCJwcm9wcy5pdGVtLmFkZHJlc3NfMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiQWRkcmVzcyAyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XFxcImxvb2tzX3R3b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcXG4gICAgICAgICAgICAgICAgICAgICAgeHM2XFxuICAgICAgICAgICAgICAgICAgICAgIHB4LTFcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwicHJvcHMuaXRlbS5jaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJDaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XFxcImxvY2F0aW9uX2NpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxcbiAgICAgICAgICAgICAgICAgICAgICBweC0xXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInByb3BzLml0ZW0uc3RhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIlN0YXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XFxcIm1hcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcXG4gICAgICAgICAgICAgICAgICAgICAgeHM2XFxuICAgICAgICAgICAgICAgICAgICAgIHB4LTFcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwicHJvcHMuaXRlbS56aXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIlppcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJtYXJrdW5yZWFkX21haWxib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxcbiAgICAgICAgICAgICAgICAgICAgICBweC0xXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInByb3BzLml0ZW0uY291bnRyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiQ291bnRyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJmbGFnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICAgICAgICA8di1sYXlvdXQgXFxuICAgICAgICAgICAgICAgICAgICByb3cgXFxuICAgICAgICAgICAgICAgICAgICB3cmFwXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcXG4gICAgICAgICAgICAgICAgICAgICAgeHMxMlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8di1zd2l0Y2hcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9wcy5pdGVtLmFjdGl2ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XFxcImdldFN0YXR1cyhwcm9wcy5pdGVtLmFjdGl2ZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPlxcbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0YXJlYVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLml0ZW0ubm90ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cXFwibGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj5Ob3RlczogPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxuXFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPCEtLSBObyBEYXRhIFNlY3Rpb24gLS0+XFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxuICAgICAgICAgIDx2LWFsZXJ0IFxcbiAgICAgICAgICAgIDp2YWx1ZT1cXFwidHJ1ZVxcXCIgXFxuICAgICAgICAgICAgY29sb3I9XFxcImJsdWUtZ3JleVxcXCIgXFxuICAgICAgICAgICAgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxuICAgICAgICAgICAgT3BwcyEgTm8gU2hpcHBlciBZZXQhLCBcXG4gICAgICAgICAgICA8di1idG4gXFxuICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCIgXFxuICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiIFxcbiAgICAgICAgICAgICAgZmxhdFxcbiAgICAgICAgICAgICAgZGFya1xcbiAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjcmVhdGVTaGlwcGVyXFxcIj5cXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXcgU2hpcHBlclxcbiAgICAgICAgICAgICAgPHYtaWNvblxcbiAgICAgICAgICAgICAgICByaWdodFxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICBmYS11c2VyLXBsdXNcXG4gICAgICAgICAgICAgIDwvdi1pY29uPlxcbiAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgIDwvdi1hbGVydD5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8IS0tIE5vIFNlYXJjaCBSZXN1bHQgU2VjdGlvbiAtLT5cXG4gICAgICAgIDx2LWFsZXJ0IFxcbiAgICAgICAgICBzbG90PVxcXCJuby1yZXN1bHRzXFxcIiBcXG4gICAgICAgICAgOnZhbHVlPVxcXCJ0cnVlXFxcIiBcXG4gICAgICAgICAgY29sb3I9XFxcImJsdWUtZ3JleVxcXCIgXFxuICAgICAgICAgIGljb249XFxcIndhcm5pbmdcXFwiPlxcbiAgICAgICAgICBZb3VyIHNlYXJjaCBmb3IgXFxcInt7IHNlYXJjaCB9fVxcXCIgZm91bmQgbm8gcmVzdWx0cy5cXG4gICAgICAgIDwvdi1hbGVydD5cXG4gICAgICA8L3YtZGF0YS10YWJsZT5cXG4gICAgICA8Y29uZmlybSBcXG4gICAgICAgIDpjYWxsYmFjaz1cXFwiY29uZmlybWVkKGRlbGV0ZVNoaXBwZXIpXFxcIiBcXG4gICAgICAgIDptZXNzYWdlPVxcXCJtZXNzYWdlXFxcIlxcbiAgICAgIC8+XFxuICAgIDwvdi1jb250YWluZXI+XFxuICA8L21haW4tbGF5b3V0PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFxcXCJMYXlvdXRzL01haW4udnVlXFxcIjtcXG5pbXBvcnQgdmFsaWRhdGlvbkVycm9yIGZyb20gXFxcIk1peGlucy92YWxpZGF0aW9uLWVycm9yXFxcIjtcXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcXFwidmZvcm1cXFwiO1xcbmltcG9ydCBzd2FsIGZyb20gXFxcInN3ZWV0YWxlcnQyXFxcIjtcXG5pbXBvcnQgQ29uZmlybSBmcm9tIFxcXCJDb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZVxcXCI7XFxuaW1wb3J0IGNvbmZpcm1hdGlvbiBmcm9tIFxcXCJNaXhpbnMvY29uZmlybWF0aW9uXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIE1haW5MYXlvdXQsXFxuICAgIENvbmZpcm1cXG4gIH0sXFxuICBtaXhpbnM6IFt2YWxpZGF0aW9uRXJyb3IsIGNvbmZpcm1hdGlvbl0sXFxuICBkYXRhOiAoKSA9PiAoe1xcbiAgICBjb250ZW50Q2xhc3M6IHsgZ3JleTogdHJ1ZSwgXFxcImxpZ2h0ZW4tNFxcXCI6IHRydWUsIFxcXCJhY2NlbnQtLXRleHRcXFwiOiB0cnVlIH0sXFxuICAgIGRpYWxvZzogZmFsc2UsXFxuICAgIC8qIHRhYmxlICovXFxuICAgIGhlYWRlcnM6IFtcXG4gICAgICB7IHRleHQ6IFxcXCJBY3Rpb25zXFxcIiwgdmFsdWU6IFxcXCJhY3Rpb25zXFxcIiwgYWxpZ246IFxcXCJjZW50ZXJcXFwiLCBzb3J0YWJsZTogZmFsc2UgfSxcXG4gICAgICB7IHRleHQ6IFxcXCJOYW1lXFxcIiwgdmFsdWU6IFxcXCJuYW1lXFxcIiwgYWxpZ246IFxcXCJsZWZ0XFxcIiwgc29ydGFibGU6IHRydWUgfSxcXG4gICAgICB7IHRleHQ6IFxcXCJTdGF0dXNcXFwiLCB2YWx1ZTogXFxcImFjdGl2ZVxcXCIsIGFsaWduOiBcXFwibGVmdFxcXCIsIHNvcnRhYmxlOiB0cnVlIH1cXG4gICAgXSxcXG4gICAgaXRlbXM6IFtdLFxcbiAgICBzZWxlY3RlZDogW10sXFxuICAgIHBhZ2luYXRpb246IHtcXG4gICAgICBzb3J0Qnk6IFxcXCJuYW1lXFxcIlxcbiAgICB9LFxcbiAgICBzaGlwcGVyc0Zvcm06IG5ldyBGb3JtKHt9KSxcXG4gICAgdG9nZ2xlRm9ybTogbmV3IEZvcm0oe1xcbiAgICAgIHRvZ2dsZTogZmFsc2UsXFxuICAgICAgc2hpcHBlcl9pZDogbnVsbFxcbiAgICB9KSxcXG4gICAgc2VhcmNoOiBcXFwiXFxcIixcXG4gICAgZGVsZXRlU2hpcHBlckZvcm06IG5ldyBGb3JtKHtcXG4gICAgICBzaGlwcGVyX2lkOiBudWxsXFxuICAgIH0pLFxcbiAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcXG4gICAgbWVzc2FnZTpcXG4gICAgICBcXFwiV2FybmluZyEgRGVsZXRpbmcgVGhpcyBTaGlwcGVyIFJlY29yZCBIYXMgU29tZSBSZXBlcmN1c2lvbiBUbyBUaGUgU3l0ZW0sIFNvbWUgRmVhdHVyZXMgVGhhdCBSZWZlcmVuY2UgVG8gVGhpcyBTaGlwcGVyIFJlY29yZCBXaWxsIEJyZWFrIGl0cyBGdW5jdGlvbmFsaXR5IFN1Y2ggQXMgRFNHLCBMb2dpc3RpY3MsIEludm9pY2luZy4gT25seSBQcm9jZWVkIElmIFlvdSBUaGluayBUaGVyZSBXaWxsIEJlIE5vIFNpZGUgRWZmZWN0IE9mIFdoYXQgWW91IFdpbGwgQmUgRG9pbmchXFxcIlxcbiAgfSksXFxuICB3YXRjaDoge1xcbiAgICBpdGVtczoge1xcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcXG4gICAgICBkZWVwOiB0cnVlXFxuICAgIH1cXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgIHNlbGYuZmV0Y2hTaGlwcGVycygpO1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgZWRpdFNoaXBwZXIoc2hpcHBlcikge1xcbiAgICAgIHZtLiRyb3V0ZXIucHVzaCh7XFxuICAgICAgICBuYW1lOiBcXFwiZWRpdC1zaGlwcGVyXFxcIixcXG4gICAgICAgIHBhcmFtczogeyBpZDogYCR7c2hpcHBlci5pZH1gIH1cXG4gICAgICB9KTtcXG4gICAgfSxcXG4gICAgY3JlYXRlU2hpcHBlcigpIHtcXG4gICAgICB2bS4kcm91dGVyLnB1c2goeyBuYW1lOiBcXFwiY3JlYXRlLXNoaXBwZXJcXFwiIH0pO1xcbiAgICB9LFxcbiAgICB0b2dnbGVTdGF0dXMoc2hpcHBlcikge1xcbiAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICBzZWxmLnRvZ2dsZUZvcm0udG9nZ2xlID0gc2hpcHBlci5hY3RpdmU7XFxuICAgICAgc2VsZi50b2dnbGVGb3JtLnNoaXBwZXJfaWQgPSBzaGlwcGVyLmlkO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucG9zdChyb3V0ZShcXFwiYXBpLnNoaXBwZXIudG9nZ2xlU3RhdHVzXFxcIiksIHNlbGYudG9nZ2xlRm9ybSlcXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XFxuICAgICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXFxcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFxcXCIsXFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICB0b2dnbGVNb2RhbCh7XFxuICAgICAgICAgICAgdGl0bGU6IFxcXCJPb3BzISBGb3JiaWRkZW4gQWN0aW9uIVxcXCIsXFxuICAgICAgICAgICAgaHRtbDogJzxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+JyArIGVycm9ycy5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgKyBcXFwiPC9wPlxcXCIsXFxuICAgICAgICAgICAgdHlwZTogXFxcIndhcm5pbmdcXFwiLFxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcXFwiQmFja1xcXCJcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG4gICAgZ2V0U3RhdHVzKHN0YXR1cykge1xcbiAgICAgIGlmIChzdGF0dXMpIHtcXG4gICAgICAgIHJldHVybiBcXFwiQWN0aXZlXFxcIjtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgcmV0dXJuIFxcXCJJbmFjdGl2ZVxcXCI7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBhc3luYyBmZXRjaFNoaXBwZXJzKCkge1xcbiAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICBzZWxmLnNoaXBwZXJzRm9ybS5idXN5ID0gdHJ1ZTtcXG4gICAgICB0cnkge1xcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGF4aW9zLnBvc3QoXFxuICAgICAgICAgIHJvdXRlKFxcXCJhcGkuc2hpcHBlci5pbmRleFxcXCIpLFxcbiAgICAgICAgICBzZWxmLnNoaXBwZXJzRm9ybVxcbiAgICAgICAgKTtcXG4gICAgICAgIHNlbGYuaXRlbXMgPSBwYXlsb2FkLmRhdGEuZGF0YTtcXG4gICAgICAgIHNlbGYuc2hpcHBlcnNGb3JtID0gbmV3IEZvcm0oe30pO1xcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcXG4gICAgICAgIGlmIChlcnJvcnMpIHtcXG4gICAgICAgICAgc2VsZi5zaGlwcGVyc0Zvcm0uZXJyb3JzLnNldChlcnJvcnMpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcXG4gICAgICAgIH1cXG4gICAgICAgIHNlbGYuc2hpcHBlcnNGb3JtLmJ1c3kgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGRlbGV0ZVNoaXBwZXIoc2hpcHBlcikge1xcbiAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICBzZWxmLmRlbGV0ZVNoaXBwZXJGb3JtLnNoaXBwZXJfaWQgPSBzaGlwcGVyLmlkO1xcbiAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHNlbGYuaXRlbXMsIHsgaWQ6IHNoaXBwZXIuaWQgfSk7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5wb3N0KHJvdXRlKFxcXCJhcGkuc2hpcHBlci5kZWxldGVcXFwiKSwgc2VsZi5kZWxldGVTaGlwcGVyRm9ybSlcXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XFxuICAgICAgICAgICAgc2VsZi4kZGVsZXRlKHNlbGYuaXRlbXMsIGluZGV4KTtcXG4gICAgICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXFxcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFxcXCIsXFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB0b2dnbGVNb2RhbCh7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+U2hpcHBlciBEZWxldGVkITwvcD5gLFxcbiAgICAgICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XFxuICAgICAgICAgIGNvbnN0IGRlbGV0ZU1vZGFsID0gc3dhbC5taXhpbih7XFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIGRlbGV0ZU1vZGFsKHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIk9vcHMhIEZvcmJpZGRlbiBBY3Rpb24hXFxcIixcXG4gICAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XFxcInRpdGxlXFxcIj4nICsgZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZSArIFxcXCI8L3A+XFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBhc3luYyBtYXNzRGVhY3RpdmF0ZSgpIHtcXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgICAgbGV0IHNlbGVjdGVkID0gXy5tYXAoc2VsZi5zZWxlY3RlZCwgXFxcImlkXFxcIik7XFxuICAgICAgbGV0IHRvZ2dsZVN0YXR1c0Zvcm0gPSBuZXcgRm9ybSh7XFxuICAgICAgICBzZWxlY3RlZFxcbiAgICAgIH0pO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXhpb3MucG9zdChcXG4gICAgICAgICAgcm91dGUoXFxcImFwaS5zaGlwcGVyLm1hc3NEZWFjdGl2YXRlXFxcIiksXFxuICAgICAgICAgIHRvZ2dsZVN0YXR1c0Zvcm1cXG4gICAgICAgICk7XFxuICAgICAgICBsZXQgdXBkYXRlZCA9IHBheWxvYWQuZGF0YS51cGRhdGVkO1xcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZCk7XFxuICAgICAgICBfLm1hcCh1cGRhdGVkLCBpZCA9PiB7XFxuICAgICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHNlbGYuaXRlbXMsIHsgaWQgfSk7XFxuICAgICAgICAgIHNlbGYuaXRlbXNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXFxuICAgICAgICB9KTtcXG4gICAgICAgIHRvZ2dsZU1vZGFsKHtcXG4gICAgICAgICAgdGl0bGU6IFxcXCJTdWNjZXNzXFxcIixcXG4gICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+JHtwYXlsb2FkLmRhdGEubWVzc2FnZX08L3A+YCxcXG4gICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXFxcIkJhY2tcXFwiXFxuICAgICAgICB9KTtcXG4gICAgICB9IGNhdGNoICh7IGVycm9ycywgbWVzc2FnZSB9KSB7XFxuICAgICAgICBpZiAoZXJyb3JzKSB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XFxuICAgICAgICB9XFxuICAgICAgICBpZiAobWVzc2FnZSkge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGFzeW5jIG1hc3NBY3RpdmF0ZSgpIHtcXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgICAgbGV0IHNlbGVjdGVkID0gXy5tYXAoc2VsZi5zZWxlY3RlZCwgXFxcImlkXFxcIik7XFxuICAgICAgbGV0IHRvZ2dsZVN0YXR1c0Zvcm0gPSBuZXcgRm9ybSh7XFxuICAgICAgICBzZWxlY3RlZFxcbiAgICAgIH0pO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXhpb3MucG9zdChcXG4gICAgICAgICAgcm91dGUoXFxcImFwaS5zaGlwcGVyLm1hc3NBY3RpdmF0ZVxcXCIpLFxcbiAgICAgICAgICB0b2dnbGVTdGF0dXNGb3JtXFxuICAgICAgICApO1xcbiAgICAgICAgbGV0IHVwZGF0ZWQgPSBwYXlsb2FkLmRhdGEudXBkYXRlZDtcXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWQpO1xcbiAgICAgICAgXy5tYXAodXBkYXRlZCwgaWQgPT4ge1xcbiAgICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleChzZWxmLml0ZW1zLCB7IGlkIH0pO1xcbiAgICAgICAgICBzZWxmLml0ZW1zW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xcbiAgICAgICAgfSk7XFxuICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXFxuICAgICAgICB9KTtcXG4gICAgICAgIHRvZ2dsZU1vZGFsKHtcXG4gICAgICAgICAgdGl0bGU6IFxcXCJTdWNjZXNzXFxcIixcXG4gICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+JHtwYXlsb2FkLmRhdGEubWVzc2FnZX08L3A+YCxcXG4gICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXFxcIkJhY2tcXFwiXFxuICAgICAgICB9KTtcXG4gICAgICB9IGNhdGNoICh7IGVycm9ycywgbWVzc2FnZSB9KSB7XFxuICAgICAgICBpZiAoZXJyb3JzKSB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XFxuICAgICAgICB9XFxuICAgICAgICBpZiAobWVzc2FnZSkge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIHRvZ2dsZUFsbCgpIHtcXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5sZW5ndGgpIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXG4gICAgICBlbHNlIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLml0ZW1zLnNsaWNlKCk7XFxuICAgIH0sXFxuICAgIGNoYW5nZVNvcnQoY29sdW1uKSB7XFxuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbi5zb3J0QnkgPT09IGNvbHVtbikge1xcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPSAhdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmc7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5zb3J0QnkgPSBjb2x1bW47XFxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZyA9IGZhbHNlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uY29tcHJlc3MtLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTZmYzFiOTk3XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2hpcHBlci9JbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxuICA8bWFpbi1sYXlvdXQ+XG4gICAgPHYtY29udGFpbmVyIGZsdWlkPlxuICAgICAgPCEtLSBTZWFyY2ggYW5kIEFjdGlvbiBCdXR0b25zIC0tPlxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXA+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgZC1mbGV4IFxuICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgc203PlxuICAgICAgICAgIDx2LWxheW91dCBcbiAgICAgICAgICAgIHJvdyBcbiAgICAgICAgICAgIHdyYXA+XG4gICAgICAgICAgICA8di1mbGV4IGQtZmxleD5cbiAgICAgICAgICAgICAgPHYtY2FyZCBcbiAgICAgICAgICAgICAgICBsaWdodCBcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBTaGlwcGVyc1wiXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICBkLWZsZXggXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBzbTUgXG4gICAgICAgICAgY2hpbGQtZmxleD5cbiAgICAgICAgICA8di1sYXlvdXQgXG4gICAgICAgICAgICByb3cgXG4gICAgICAgICAgICB3cmFwPlxuICAgICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgICAgeHMxMiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGQtZmxleD5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgICAgICAgICAgICAgIGJsb2NrIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYWNjZW50XCIgXG4gICAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVTaGlwcGVyXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBTaGlwcGVyXG4gICAgICAgICAgICAgICAgPHYtaWNvblxuICAgICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYWNjZW50XCIgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgZmEtc2hpcFxuICAgICAgICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgIDx2LWljb25cbiAgICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImFjY2VudFwiIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGZhLXBsdXMtY2lyY2xlXG4gICAgICAgICAgICAgICAgPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgICAgIGQtZmxleD5cbiAgICAgICAgICAgICAgPHYtZmxleCBjbGFzcz1cInhzNiB3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgICAgICAgICAgICAgICAgYmxvY2sgXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWUgZGFya2VuLTRcIiBcbiAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1hc3NBY3RpdmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHYtaWNvblxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWUgZGFya2VuLTRcIiBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICAgICAgPC92LWljb24+XG4gICAgICAgICAgICAgICAgICBBY3RpdmF0ZSBTZWxlY3RlZFxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8di1mbGV4IGNsYXNzPVwieHM2IHdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiISRhdXRoLmNoZWNrKCdhZG1pbicpXCIgXG4gICAgICAgICAgICAgICAgICBibG9jayBcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIiBcbiAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1hc3NEZWFjdGl2YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIiBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgbGlua19vZmZcbiAgICAgICAgICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgRGVhY3RpdmF0ZSBTZWxlY3RlZFxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICBcbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPCEtLSBTaGlwcGVyIERhdGEgVGFibGUgLS0+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgc2VsZWN0LWFsbFxuICAgICAgICBpdGVtLWtleT1cImlkXCJcbiAgICAgICAgZXhwYW5kXG4gICAgICA+XG4gICAgICAgIDwhLS0gSGVhZGVyIFNlY3Rpb24gLS0+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIHNsb3Q9XCJoZWFkZXJzXCIgXG4gICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICA6aW5wdXQtdmFsdWU9XCJwcm9wcy5hbGxcIlxuICAgICAgICAgICAgICAgIDppbmRldGVybWluYXRlPVwicHJvcHMuaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgIEBjbGljay5uYXRpdmU9XCJ0b2dnbGVBbGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBcbiAgICAgICAgICAgICAgdi1mb3I9XCJoZWFkZXIgaW4gcHJvcHMuaGVhZGVyc1wiIFxuICAgICAgICAgICAgICA6a2V5PVwiaGVhZGVyLnRleHRcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ2NvbHVtbiBzb3J0YWJsZScsIHBhZ2luYXRpb24uZGVzY2VuZGluZyA/ICdkZXNjJyA6ICdhc2MnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnZhbHVlID09PSBwYWdpbmF0aW9uLnNvcnRCeSA/ICduYW1lJyA6ICcnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgeyd0ZXh0LXhzLWxlZnQnOiBoZWFkZXIuYWxpZ24gPT09ICdsZWZ0JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC14cy1yaWdodCc6IGhlYWRlci5hbGlnbiA9PT0gJ3JpZ2h0JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC14cy1jZW50ZXInOiBoZWFkZXIuYWxpZ24gPT09ICdjZW50ZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+PSA2MDAgJiYgJ3RpdGxlJ11cIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VTb3J0KGhlYWRlci52YWx1ZSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8di1pY29uPmFycm93X3Vwd2FyZDwvdi1pY29uPlxuICAgICAgICAgICAgICAgIHt7IGhlYWRlci50ZXh0IH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBSb3cgU2VjdGlvbiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIFxuICAgICAgICAgIHNsb3Q9XCJpdGVtc1wiIFxuICAgICAgICAgIHNsb3Qtc2NvcGU9XCJwcm9wc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0XCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDo1JTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgICAgICAgIDphY3RpdmU9XCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgOmlucHV0LXZhbHVlPVwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInByb3BzLnNlbGVjdGVkID0gIXByb3BzLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjEwJTttYXJnaW4tbGVmdDowcHg7bWFyZ2luLXJpZ2h0OjBweDtwYWRkaW5nLWxlZnQ6MHB4O3BhZGRpbmctcmlnaHQ6MHB4O1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhJGF1dGguY2hlY2soJ2FkbWluJylcIiBcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2FtYmVyLS10ZXh0JzogcHJvcHMuZXhwYW5kZWQsICdhbWJlcic6IHByb3BzLmV4cGFuZGVkLCAndGVhbCc6ICFwcm9wcy5leHBhbmRlZCwgJ3RlYWwtLXRleHQnOiAhcHJvcHMuZXhwYW5kZWQgfVwiIFxuICAgICAgICAgICAgICAgIGxpZ2h0IFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgaWNvbiBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbXByZXNzLS1pY29uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJwcm9wcy5leHBhbmRlZCA9ICFwcm9wcy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1pY29uIHYtaWY9XCIhcHJvcHMuZXhwYW5kZWRcIj5mYS1leHBhbmQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICA8di1pY29uIHYtaWY9XCJwcm9wcy5leHBhbmRlZFwiPmZhLWNvbXByZXNzPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhJGF1dGguY2hlY2soJ2FkbWluJylcIiBcbiAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgIGljb24gXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb21wcmVzcy0taWNvblwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdFNoaXBwZXIocHJvcHMuaXRlbSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtaWNvbj5mYS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgaWNvbiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb21wcmVzcy0taWNvblwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib3BlbkRpYWxvZyhwcm9wcy5pdGVtKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1pY29uPmZhLXRyYXNoPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLm5hbWUgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnQgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIDx2LXN3aXRjaFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLmFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiZ2V0U3RhdHVzKHByb3BzLml0ZW0uYWN0aXZlKVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInRvZ2dsZVN0YXR1cyhwcm9wcy5pdGVtKVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gUGFnaW5hdGlvbiBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgXG4gICAgICAgICAgc2xvdD1cInBhZ2VUZXh0XCJcbiAgICAgICAgICBzbG90LXNjb3BlPVwieyBwYWdlU3RhcnQsIHBhZ2VTdG9wIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgRnJvbSB7eyBwYWdlU3RhcnQgfX0gdG8ge3sgcGFnZVN0b3AgfX1cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBFeHBhbmQgU2VjdGlvbiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIFxuICAgICAgICAgIHNsb3Q9XCJleHBhbmRcIiBcbiAgICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgPHYtY2FyZCBcbiAgICAgICAgICAgICAgbGlnaHQgXG4gICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgIHRleHQteHMtY2VudGVyXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2LWNhcmQtbWVkaWFcbiAgICAgICAgICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0IGJsdWUtZ3JleVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgXG4gICAgICAgICAgICAgICAgICBmaWxsLWhlaWdodCBcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IGZpbGwtaGVpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tZW5kIFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhib3hcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBwcm9wcy5pdGVtLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cbiAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRpdGxlIGFjY2VudC0tdGV4dFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnQgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgICAgICAgICAgICByb3cgXG4gICAgICAgICAgICAgICAgICAgIHdyYXBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgICAgICAgICAgICB4czZcbiAgICAgICAgICAgICAgICAgICAgICBweC0xPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgeHM2XG4gICAgICAgICAgICAgICAgICAgICAgcHgtMT5cbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS5waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxuICAgICAgICAgICAgICAgICAgICAgIHB4LTFcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInByb3BzLml0ZW0uYWRkcmVzc18xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibG9va3Nfb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgICAgICAgICAgICB4czZcbiAgICAgICAgICAgICAgICAgICAgICBweC0xXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwcm9wcy5pdGVtLmFkZHJlc3NfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImxvb2tzX3R3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgeHM2XG4gICAgICAgICAgICAgICAgICAgICAgcHgtMVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicHJvcHMuaXRlbS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImxvY2F0aW9uX2NpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxuICAgICAgICAgICAgICAgICAgICAgIHB4LTFcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInByb3BzLml0ZW0uc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgeHM2XG4gICAgICAgICAgICAgICAgICAgICAgcHgtMVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicHJvcHMuaXRlbS56aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJaaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJtYXJrdW5yZWFkX21haWxib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIHhzNlxuICAgICAgICAgICAgICAgICAgICAgIHB4LTFcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInByb3BzLml0ZW0uY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJmbGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICA8di1sYXlvdXQgXG4gICAgICAgICAgICAgICAgICAgIHJvdyBcbiAgICAgICAgICAgICAgICAgICAgd3JhcFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIHhzMTJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLml0ZW0uYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImdldFN0YXR1cyhwcm9wcy5pdGVtLmFjdGl2ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS5ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+Tm90ZXM6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gTm8gRGF0YSBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cbiAgICAgICAgICA8di1hbGVydCBcbiAgICAgICAgICAgIDp2YWx1ZT1cInRydWVcIiBcbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZS1ncmV5XCIgXG4gICAgICAgICAgICBpY29uPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgT3BwcyEgTm8gU2hpcHBlciBZZXQhLCBcbiAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgOmRpc2FibGVkPVwiISRhdXRoLmNoZWNrKCdhZG1pbicpXCIgXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIiBcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVNoaXBwZXJcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBTaGlwcGVyXG4gICAgICAgICAgICAgIDx2LWljb25cbiAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgZmEtdXNlci1wbHVzXG4gICAgICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gTm8gU2VhcmNoIFJlc3VsdCBTZWN0aW9uIC0tPlxuICAgICAgICA8di1hbGVydCBcbiAgICAgICAgICBzbG90PVwibm8tcmVzdWx0c1wiIFxuICAgICAgICAgIDp2YWx1ZT1cInRydWVcIiBcbiAgICAgICAgICBjb2xvcj1cImJsdWUtZ3JleVwiIFxuICAgICAgICAgIGljb249XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwie3sgc2VhcmNoIH19XCIgZm91bmQgbm8gcmVzdWx0cy5cbiAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICA8Y29uZmlybSBcbiAgICAgICAgOmNhbGxiYWNrPVwiY29uZmlybWVkKGRlbGV0ZVNoaXBwZXIpXCIgXG4gICAgICAgIDptZXNzYWdlPVwibWVzc2FnZVwiXG4gICAgICAvPlxuICAgIDwvdi1jb250YWluZXI+XG4gIDwvbWFpbi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkxheW91dHMvTWFpbi52dWVcIjtcbmltcG9ydCB2YWxpZGF0aW9uRXJyb3IgZnJvbSBcIk1peGlucy92YWxpZGF0aW9uLWVycm9yXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInZmb3JtXCI7XG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbmltcG9ydCBDb25maXJtIGZyb20gXCJDb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZVwiO1xuaW1wb3J0IGNvbmZpcm1hdGlvbiBmcm9tIFwiTWl4aW5zL2NvbmZpcm1hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBNYWluTGF5b3V0LFxuICAgIENvbmZpcm1cbiAgfSxcbiAgbWl4aW5zOiBbdmFsaWRhdGlvbkVycm9yLCBjb25maXJtYXRpb25dLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGNvbnRlbnRDbGFzczogeyBncmV5OiB0cnVlLCBcImxpZ2h0ZW4tNFwiOiB0cnVlLCBcImFjY2VudC0tdGV4dFwiOiB0cnVlIH0sXG4gICAgZGlhbG9nOiBmYWxzZSxcbiAgICAvKiB0YWJsZSAqL1xuICAgIGhlYWRlcnM6IFtcbiAgICAgIHsgdGV4dDogXCJBY3Rpb25zXCIsIHZhbHVlOiBcImFjdGlvbnNcIiwgYWxpZ246IFwiY2VudGVyXCIsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgICAgeyB0ZXh0OiBcIk5hbWVcIiwgdmFsdWU6IFwibmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiU3RhdHVzXCIsIHZhbHVlOiBcImFjdGl2ZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH1cbiAgICBdLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgc29ydEJ5OiBcIm5hbWVcIlxuICAgIH0sXG4gICAgc2hpcHBlcnNGb3JtOiBuZXcgRm9ybSh7fSksXG4gICAgdG9nZ2xlRm9ybTogbmV3IEZvcm0oe1xuICAgICAgdG9nZ2xlOiBmYWxzZSxcbiAgICAgIHNoaXBwZXJfaWQ6IG51bGxcbiAgICB9KSxcbiAgICBzZWFyY2g6IFwiXCIsXG4gICAgZGVsZXRlU2hpcHBlckZvcm06IG5ldyBGb3JtKHtcbiAgICAgIHNoaXBwZXJfaWQ6IG51bGxcbiAgICB9KSxcbiAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgICBtZXNzYWdlOlxuICAgICAgXCJXYXJuaW5nISBEZWxldGluZyBUaGlzIFNoaXBwZXIgUmVjb3JkIEhhcyBTb21lIFJlcGVyY3VzaW9uIFRvIFRoZSBTeXRlbSwgU29tZSBGZWF0dXJlcyBUaGF0IFJlZmVyZW5jZSBUbyBUaGlzIFNoaXBwZXIgUmVjb3JkIFdpbGwgQnJlYWsgaXRzIEZ1bmN0aW9uYWxpdHkgU3VjaCBBcyBEU0csIExvZ2lzdGljcywgSW52b2ljaW5nLiBPbmx5IFByb2NlZWQgSWYgWW91IFRoaW5rIFRoZXJlIFdpbGwgQmUgTm8gU2lkZSBFZmZlY3QgT2YgV2hhdCBZb3UgV2lsbCBCZSBEb2luZyFcIlxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHt9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5mZXRjaFNoaXBwZXJzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBlZGl0U2hpcHBlcihzaGlwcGVyKSB7XG4gICAgICB2bS4kcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiBcImVkaXQtc2hpcHBlclwiLFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IGAke3NoaXBwZXIuaWR9YCB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZVNoaXBwZXIoKSB7XG4gICAgICB2bS4kcm91dGVyLnB1c2goeyBuYW1lOiBcImNyZWF0ZS1zaGlwcGVyXCIgfSk7XG4gICAgfSxcbiAgICB0b2dnbGVTdGF0dXMoc2hpcHBlcikge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi50b2dnbGVGb3JtLnRvZ2dsZSA9IHNoaXBwZXIuYWN0aXZlO1xuICAgICAgc2VsZi50b2dnbGVGb3JtLnNoaXBwZXJfaWQgPSBzaGlwcGVyLmlkO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3Qocm91dGUoXCJhcGkuc2hpcHBlci50b2dnbGVTdGF0dXNcIiksIHNlbGYudG9nZ2xlRm9ybSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRvZ2dsZU1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk9vcHMhIEZvcmJpZGRlbiBBY3Rpb24hXCIsXG4gICAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XCJ0aXRsZVwiPicgKyBlcnJvcnMucmVzcG9uc2UuZGF0YS5tZXNzYWdlICsgXCI8L3A+XCIsXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIFwiQWN0aXZlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJJbmFjdGl2ZVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hTaGlwcGVycygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuc2hpcHBlcnNGb3JtLmJ1c3kgPSB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgcm91dGUoXCJhcGkuc2hpcHBlci5pbmRleFwiKSxcbiAgICAgICAgICBzZWxmLnNoaXBwZXJzRm9ybVxuICAgICAgICApO1xuICAgICAgICBzZWxmLml0ZW1zID0gcGF5bG9hZC5kYXRhLmRhdGE7XG4gICAgICAgIHNlbGYuc2hpcHBlcnNGb3JtID0gbmV3IEZvcm0oe30pO1xuICAgICAgfSBjYXRjaCAoeyBlcnJvcnMsIG1lc3NhZ2UgfSkge1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgc2VsZi5zaGlwcGVyc0Zvcm0uZXJyb3JzLnNldChlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zaGlwcGVyc0Zvcm0uYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlU2hpcHBlcihzaGlwcGVyKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmRlbGV0ZVNoaXBwZXJGb3JtLnNoaXBwZXJfaWQgPSBzaGlwcGVyLmlkO1xuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZDogc2hpcHBlci5pZCB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHJvdXRlKFwiYXBpLnNoaXBwZXIuZGVsZXRlXCIpLCBzZWxmLmRlbGV0ZVNoaXBwZXJGb3JtKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLiRkZWxldGUoc2VsZi5pdGVtcywgaW5kZXgpO1xuICAgICAgICAgICAgbGV0IHRvZ2dsZU1vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBodG1sOiBgPHAgY2xhc3M9XCJ0aXRsZVwiPlNoaXBwZXIgRGVsZXRlZCE8L3A+YCxcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGVNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVsZXRlTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiT29wcyEgRm9yYmlkZGVuIEFjdGlvbiFcIixcbiAgICAgICAgICAgIGh0bWw6ICc8cCBjbGFzcz1cInRpdGxlXCI+JyArIGVycm9ycy5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgKyBcIjwvcD5cIixcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQmFja1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgbWFzc0RlYWN0aXZhdGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBfLm1hcChzZWxmLnNlbGVjdGVkLCBcImlkXCIpO1xuICAgICAgbGV0IHRvZ2dsZVN0YXR1c0Zvcm0gPSBuZXcgRm9ybSh7XG4gICAgICAgIHNlbGVjdGVkXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgcm91dGUoXCJhcGkuc2hpcHBlci5tYXNzRGVhY3RpdmF0ZVwiKSxcbiAgICAgICAgICB0b2dnbGVTdGF0dXNGb3JtXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1cGRhdGVkID0gcGF5bG9hZC5kYXRhLnVwZGF0ZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWQpO1xuICAgICAgICBfLm1hcCh1cGRhdGVkLCBpZCA9PiB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZCB9KTtcbiAgICAgICAgICBzZWxmLml0ZW1zW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZ2dsZU1vZGFsKHtcbiAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj4ke3BheWxvYWQuZGF0YS5tZXNzYWdlfTwvcD5gLFxuICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgbWFzc0FjdGl2YXRlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHNlbGVjdGVkID0gXy5tYXAoc2VsZi5zZWxlY3RlZCwgXCJpZFwiKTtcbiAgICAgIGxldCB0b2dnbGVTdGF0dXNGb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICBzZWxlY3RlZFxuICAgICAgfSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgIHJvdXRlKFwiYXBpLnNoaXBwZXIubWFzc0FjdGl2YXRlXCIpLFxuICAgICAgICAgIHRvZ2dsZVN0YXR1c0Zvcm1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHVwZGF0ZWQgPSBwYXlsb2FkLmRhdGEudXBkYXRlZDtcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZCk7XG4gICAgICAgIF8ubWFwKHVwZGF0ZWQsIGlkID0+IHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleChzZWxmLml0ZW1zLCB7IGlkIH0pO1xuICAgICAgICAgIHNlbGYuaXRlbXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+JHtwYXlsb2FkLmRhdGEubWVzc2FnZX08L3A+YCxcbiAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh7IGVycm9ycywgbWVzc2FnZSB9KSB7XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUFsbCgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmxlbmd0aCkgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkID0gdGhpcy5pdGVtcy5zbGljZSgpO1xuICAgIH0sXG4gICAgY2hhbmdlU29ydChjb2x1bW4pIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID09PSBjb2x1bW4pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPSAhdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID0gY29sdW1uO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbXByZXNzLS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2hpcHBlci9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibWFpbi1sYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHMxMjogXCJcIiwgc203OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGlnaHQ6IFwiXCIsIGZsYXQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2ggU2hpcHBlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzMTI6IFwiXCIsIHNtNTogXCJcIiwgXCJjaGlsZC1mbGV4XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czEyOiBcIlwiLCBcImQtZmxleFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVNoaXBwZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBTaGlwcGVyXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiLCBjb2xvcjogXCJhY2NlbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBmYS1zaGlwXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByaWdodDogXCJcIiwgY29sb3I6IFwiYWNjZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgZmEtcGx1cy1jaXJjbGVcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgXCJkLWZsZXhcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ4czYgd2hpdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlIGRhcmtlbi00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubWFzc0FjdGl2YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWUgZGFya2VuLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIGxpbmtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBBY3RpdmF0ZSBTZWxlY3RlZFxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInhzNiB3aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubWFzc0RlYWN0aXZhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgbGlua19vZmZcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBEZWFjdGl2YXRlIFNlbGVjdGVkXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgZXhwYW5kOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnaW5hdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtdmFsdWVcIjogcHJvcHMuYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHByb3BzLmluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVBbGwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHByb3BzLmhlYWRlcnMsIGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBoZWFkZXIudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtbiBzb3J0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyBcImRlc2NcIiA6IFwiYXNjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnZhbHVlID09PSBfdm0ucGFnaW5hdGlvbi5zb3J0QnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtbGVmdFwiOiBoZWFkZXIuYWxpZ24gPT09IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLXJpZ2h0XCI6IGhlYWRlci5hbGlnbiA9PT0gXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiOiBoZWFkZXIuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoID49IDYwMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X3Vwd2FyZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhoZWFkZXIudGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvcHMuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtdmFsdWVcIjogcHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSAhcHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wcmVzcy0taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1iZXItLXRleHRcIjogcHJvcHMuZXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1iZXI6IHByb3BzLmV4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYWw6ICFwcm9wcy5leHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlYWwtLXRleHRcIjogIXByb3BzLmV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5leHBhbmRlZCA9ICFwcm9wcy5leHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLmV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtZXhwYW5kXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5leHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLWNvbXByZXNzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcHJlc3MtLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdFNoaXBwZXIocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXBlbmNpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXByZXNzLS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuRGlhbG9nKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYS10cmFzaFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uZ2V0U3RhdHVzKHByb3BzLml0ZW0uYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZVN0YXR1cyhwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMuaXRlbSwgXCJhY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLml0ZW0uYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcInBhZ2VUZXh0XCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlU3RhcnQgPSByZWYucGFnZVN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlU3RvcCA9IHJlZi5wYWdlU3RvcFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBGcm9tIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBhZ2VTdGFydCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB0byBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYWdlU3RvcCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZXhwYW5kXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1tZWRpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHQgYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjc1cHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJmaWxsLWhlaWdodFwiOiBcIlwiLCBmbHVpZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZmlsbC1oZWlnaHRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHMxMjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tZW5kXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4Ym94OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBEZXRhaWxzXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzNjogXCJcIiwgXCJweC0xXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS1lbnZlbG9wZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5pdGVtLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzNjogXCJcIiwgXCJweC0xXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5pdGVtLnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzNjogXCJcIiwgXCJweC0xXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0uYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImxvb2tzX29uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIsIFwicHgtMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLmFkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRkcmVzcyAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJsb29rc190d29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHM2OiBcIlwiLCBcInB4LTFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvY2F0aW9uX2NpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHM2OiBcIlwiLCBcInB4LTFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcIm1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIsIFwicHgtMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLnppcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWmlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmt1bnJlYWRfbWFpbGJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czY6IFwiXCIsIFwicHgtMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLmNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvdW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImZsYWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS5nZXRTdGF0dXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcHMuaXRlbS5hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcHMuaXRlbS5ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vdGVzOiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBPcHBzISBObyBTaGlwcGVyIFlldCEsIFxcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVNoaXBwZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgQ3JlYXRlIE5ldyBTaGlwcGVyXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIGZhLXVzZXItcGx1c1xcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJuby1yZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzbG90OiBcIm5vLXJlc3VsdHNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAnXFxuICAgICAgICBZb3VyIHNlYXJjaCBmb3IgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlYXJjaCkgK1xuICAgICAgICAgICAgICAgICAgICAgICdcIiBmb3VuZCBubyByZXN1bHRzLlxcbiAgICAgICdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiY29uZmlybVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjYWxsYmFjazogX3ZtLmNvbmZpcm1lZChfdm0uZGVsZXRlU2hpcHBlciksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IF92bS5tZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZmYzFiOTk3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZmMxYjk5N1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaGlwcGVyL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZmYzFiOTk3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmZjMWI5OTdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNmZjMWI5OTdcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaGlwcGVyL0luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZmMxYjk5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZmYzFiOTk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NoaXBwZXIvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSA5MTdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLyogdGhpcyBtaXhpbnMgaXMgcmVzcG9uc2libGUgZm9yIGNvbmNhdGluYXRpbmcgZXJyb3IgbWVzc2FnZXMgZnJvbSB2Zm9ybSBhbmQgdmVlLXZhbGlkYXRlICAqL1xuICBtZXRob2RzOiB7XG4gICAgLyogZXJyb3JCYWcgaXMgcmVsYXRhZWQgdG8gdmVlVmFsaWRhdGUgY29uZmlnIG5hbWUqL1xuICAgIC8qIGZvcm0gaXMgcmVsYXRlZCB0byB2Zm9ybSAqL1xuICAgIGVycm9yTWVzc2FnZXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5jb2xsZWN0KGZpZWxkKS5jb25jYXQodGhpcy5mb3JtLmVycm9ycy5vbmx5KGZpZWxkKSk7XG4gICAgfSxcbiAgICBoYXNFcnJvcnMoZmllbGQpIHtcbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9yc1xuICAgICAgICAuY29sbGVjdChmaWVsZClcbiAgICAgICAgLmNvbmNhdCh0aGlzLmZvcm0uZXJyb3JzLm9ubHkoZmllbGQpKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy92YWxpZGF0aW9uLWVycm9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIDA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImxWSzdcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiT01ONFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwibFZLN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcImF4aW9zXCJcbnZhciBleHRlcm5hbF9fYXhpb3NfID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIk9NTjRcIik7XG52YXIgZXh0ZXJuYWxfX2F4aW9zX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9fYXhpb3NfKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdXRpbC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXHJcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xuZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgY29weSA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgY29weVtrZXldID0gZGVlcENvcHkob2JqW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGNvcHk7XG59XG4vKipcclxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgd3JhcCBpdCBpbiBvbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSAge0FueX0gdmFsdWVcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xuXG5mdW5jdGlvbiBhcnJheVdyYXAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvRXJyb3JzLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBFcnJvcnNfX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIEVycm9yc19fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxudmFyIEVycm9yc19FcnJvcnMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgZXJyb3IgYmFnIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBFcnJvcnMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVycm9ycyk7XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZXJyb3JzIG9iamVjdCBvciBmaWVsZCBlcnJvciBtZXNzYWdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZmllbGRcclxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3x1bmRlZmluZWR9IG1lc3NhZ2VzXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRXJyb3JzLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGZpZWxkLCBtZXNzYWdlcykge1xuICAgICAgaWYgKEVycm9yc19fdHlwZW9mKGZpZWxkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBmaWVsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KF9leHRlbmRzKHt9LCB0aGlzLmVycm9ycywgX2RlZmluZVByb3BlcnR5KHt9LCBmaWVsZCwgYXJyYXlXcmFwKG1lc3NhZ2VzKSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBpcyBhbiBlcnJvciBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGZvciB0aGUgZ2l2ZW4gZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgey4uLlN0cmluZ30gZmllbGRzXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoYXNBbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzQW55KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZmllbGRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRzLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oYXMoZmllbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFueVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbnkoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICBTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkKSB7XG4gICAgICBpZiAodGhpcy5oYXMoZmllbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbChmaWVsZClbMF07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbChmaWVsZCkge1xuICAgICAgcmV0dXJuIGFycmF5V3JhcCh0aGlzLmVycm9yc1tmaWVsZF0gfHwgW10pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHsuLi5TdHJpbmd9IGZpZWxkc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9ubHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25seSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbWVzc2FnZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZmllbGRzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IF90aGlzMi5nZXQoZmllbGQpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3JzIGluIGEgZmxhdCBhcnJheS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmxhdHRlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbGF0dGVuKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lcnJvcnMpLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8dW5kZWZpbmVkfSBmaWVsZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcihmaWVsZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBlcnJvcnMgPSB7fTtcblxuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoa2V5ICE9PSBmaWVsZCkge1xuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSBfdGhpczMuZXJyb3JzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoZXJyb3JzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJyb3JzO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0Zvcm0uanNcbmZ1bmN0aW9uIEZvcm1fX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEZvcm1fX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBGb3JtX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gRm9ybV9fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gRm9ybV9fZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBGb3JtX19leHRlbmRzKCkgeyBGb3JtX19leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIEZvcm1fX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBGb3JtX19jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIEZvcm1fX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBGb3JtX19jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIEZvcm1fX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cbnZhciBGb3JtX0Zvcm0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiBGb3JtKCkge1xuICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIEZvcm1fX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzX0Vycm9ycygpO1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGVlcENvcHkoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuICAvKipcbiAgICogRmlsbCBmb3JtIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuXG5cbiAgRm9ybV9fY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICBrZXk6IFwiZmlsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGRhdGEpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmtleXMoKS5yZWR1Y2UoZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgZGF0YSwgRm9ybV9fZGVmaW5lUHJvcGVydHkoe30sIGtleSwgX3RoaXMyW2tleV0pKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGRhdGEga2V5cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwia2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhRm9ybS5pZ25vcmUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRQcm9jZXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0UHJvY2Vzc2luZygpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmlzaCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluaXNoUHJvY2Vzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5pc2hQcm9jZXNzaW5nKCkge1xuICAgICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZm9ybSBlcnJvcnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFGb3JtLmlnbm9yZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzM1trZXldID0gZGVlcENvcHkoX3RoaXMzLm9yaWdpbmFsRGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgR0VUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdnZXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUE9TVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRjaCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHV0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZSh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGRhdGEgdmlhIGFuIEhUVFAgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWV0aG9kIChnZXQsIHBvc3QsIHBhdGNoLCBwdXQpXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNvbmZpZyAoYXhpb3MgY29uZmlnKVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJtaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0KG1ldGhvZCwgdXJsKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB0aGlzLnN0YXJ0UHJvY2Vzc2luZygpO1xuICAgICAgdmFyIGRhdGEgPSBtZXRob2QgPT09ICdnZXQnID8ge1xuICAgICAgICBwYXJhbXM6IHRoaXMuZGF0YSgpXG4gICAgICB9IDogdGhpcy5kYXRhKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBleHRlcm5hbF9fYXhpb3NfX2RlZmF1bHQuYS5yZXF1ZXN0KEZvcm1fX2V4dGVuZHMoe1xuICAgICAgICAgIHVybDogX3RoaXM0LnJvdXRlKHVybCksXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9LCBjb25maWcpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIF90aGlzNC5maW5pc2hQcm9jZXNzaW5nKCk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXM0LmJ1c3kgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXM0LmVycm9ycy5zZXQoX3RoaXM0LmV4dHJhY3RFcnJvcnMoZXJyb3IucmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBlcnJvcnMgZnJvbSB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RFcnJvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdEVycm9ycyhyZXNwb25zZSkge1xuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8IEZvcm1fX3R5cGVvZihyZXNwb25zZS5kYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogRm9ybS5lcnJvck1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgbmFtZWQgcm91dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyb3V0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3V0ZShuYW1lKSB7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgdXJsID0gbmFtZTtcblxuICAgICAgaWYgKEZvcm0ucm91dGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHVybCA9IGRlY29kZVVSSShGb3JtLnJvdXRlc1tuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChGb3JtX190eXBlb2YocGFyYW1ldGVycykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgaWQ6IHBhcmFtZXRlcnNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwie1wiLmNvbmNhdChrZXksIFwifVwiKSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgZXJyb3JzIG9uIGtleWRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtO1xufSgpO1xuXG5Gb3JtX0Zvcm0ucm91dGVzID0ge307XG5Gb3JtX0Zvcm0uZXJyb3JNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLic7XG5Gb3JtX0Zvcm0uaWdub3JlID0gWydidXN5JywgJ3N1Y2Nlc3NmdWwnLCAnZXJyb3JzJywgJ29yaWdpbmFsRGF0YSddO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjX0Zvcm0gPSAoRm9ybV9Gb3JtKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbi8vXG4vL1xuLy9cbi8vXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBIYXNFcnJvciA9ICh7XG4gIG5hbWU6ICdoYXMtZXJyb3InLFxuICBwcm9wczoge1xuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBmaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Mzg5YTZkZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5oYXMoX3ZtLmZpZWxkKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoX3ZtLmZpZWxkKSl9fSk6X3ZtLl9lKCl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEhhc0Vycm9yLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfSGFzRXJyb3IgPSAoQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0LmpzXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydCA9ICh7XG4gIHByb3BzOiB7XG4gICAgZm9ybToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRpc21pc3NpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc21pc3M6IGZ1bmN0aW9uIGRpc21pc3MoKSB7XG4gICAgICBpZiAodGhpcy5kaXNtaXNzaWJsZSkge1xuICAgICAgICB0aGlzLmZvcm0uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydEVycm9yID0gKHtcbiAgbmFtZTogJ2FsZXJ0LWVycm9yJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWU3M2FhN2M4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbnZhciBBbGVydEVycm9yX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5hbnkoKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZGVmYXVsdFwiLFsoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZXJyb3InKSk/X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdlcnJvcicpKX19KTpfYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KV0pXSwyKTpfdm0uX2UoKX1cbnZhciBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRFcnJvcl9Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3IsXG4gIEFsZXJ0RXJyb3JfcmVuZGVyLFxuICBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydEVycm9yID0gKEFsZXJ0RXJyb3JfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRFcnJvcnMgPSAoe1xuICBuYW1lOiAnYWxlcnQtZXJyb3JzJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQyMmE2NTkxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG52YXIgQWxlcnRFcnJvcnNfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmFueSgpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLm1lc3NhZ2UpP19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3VsJyxfdm0uX2woKF92bS5mb3JtLmVycm9ycy5mbGF0dGVuKCkpLGZ1bmN0aW9uKGVycm9yKXtyZXR1cm4gX2MoJ2xpJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKGVycm9yKX19KX0pKV0pOl92bS5fZSgpfVxudmFyIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydEVycm9yc19Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3JzLFxuICBBbGVydEVycm9yc19yZW5kZXIsXG4gIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRFcnJvcnMgPSAoQWxlcnRFcnJvcnNfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydFN1Y2Nlc3MgPSAoe1xuICBuYW1lOiAnYWxlcnQtc3VjY2VzcycsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGFmZGI4YThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG52YXIgQWxlcnRTdWNjZXNzX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLnN1Y2Nlc3NmdWwpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJkZWZhdWx0XCIsW19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pXSldLDIpOl92bS5fZSgpfVxudmFyIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydFN1Y2Nlc3NfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydFN1Y2Nlc3MsXG4gIEFsZXJ0U3VjY2Vzc19yZW5kZXIsXG4gIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydFN1Y2Nlc3MgPSAoQWxlcnRTdWNjZXNzX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvaW5kZXguanNcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJGb3JtXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3JjX0Zvcm07IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVycm9yc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEVycm9yc19FcnJvcnM7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkhhc0Vycm9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19IYXNFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvcnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0RXJyb3JzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydFN1Y2Nlc3NcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0U3VjY2VzczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY19Gb3JtOyB9KTtcblxuXG5cblxuXG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92Zm9ybS9kaXN0L3Zmb3JtLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gOTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzggMzkgNDAgNDEgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjAgNjEiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gOTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM5IDYwIDYxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM5IDYwIDYxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzkgNjAgNjEiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzOSA2MCA2MSIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzOSA2MCA2MSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDk3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzOSA2MCA2MSIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDk3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzOSA2MCA2MSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01haW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2NiZjE1ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01haW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zY2NiZjE1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNjY2JmMTVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCI8dGVtcGxhdGU+XG4gIDx2LWFwcCBcbiAgICB2LWNsb2FrIFxuICAgIGlkPVwiaW5zcGlyZVwiXG4gID5cbiAgICA8bGVmdC1zaWRlLWJhci8+XG4gICAgPGFwcC1uYXYtYmFyLz5cbiAgICA8di1jb250ZW50XG4gICAgICB0cmFuc2l0aW9uPVwic2xpZGUteC10cmFuc2l0aW9uXCIgXG4gICAgICBmbHVpZFxuICAgICAgcGEtMFxuICAgICAgbWEtMFxuICAgICAgY2xhc3M9XCJ3aGl0ZVwiXG4gICAgPlxuICAgICAgPHNsb3QvPlxuICAgIDwvdi1jb250ZW50PlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBcHBOYXZCYXIgZnJvbSBcIi4uL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcIjtcbmltcG9ydCBMZWZ0U2lkZUJhciBmcm9tIFwiLi4vcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEFwcE5hdkJhcixcbiAgICBMZWZ0U2lkZUJhclxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2OGE2NjQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjY4YTY2NDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSA2MCA2MSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3ZDg4NjU4OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY2OGE2NjQ2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkFwcE5hdkJhci52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02NjhhNjY0NlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiPHRlbXBsYXRlPlxuICA8di10b29sYmFyIFxuICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgIGZpeGVkIFxuICAgIGFwcFxuICA+XG4gICAgPHYtdG9vbGJhci1zaWRlLWljb24gXG4gICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCJcbiAgICAgIEBjbGljay5uYXRpdmUuc3RvcD1cInRvZ2dsZURyYXdlcigpXCJcbiAgICAvPlxuICAgIDwhLS0gVGl0bGUgLS0+XG4gICAgPHYtdG9vbGJhci10aXRsZSBcbiAgICAgIHYtaWY9XCJleHRlbnNpb25cIiBcbiAgICAgIHNsb3Q9XCJleHRlbnNpb25cIiBcbiAgICAgIDpjbGFzcz1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiAncHItMydcIiBcbiAgICAgIDpzdHlsZT1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPiAxMjY0ICYmICd3aWR0aDogMzAwcHgnXCIgXG4gICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyIG1sLTAgcGwtM1wiXG4gICAgPlxuICAgICAgPHYtaWNvbiBcbiAgICAgICAgdi1pZj1cInNob3dJY29uXCIgXG4gICAgICAgIGNsYXNzPVwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgaWNvbiB9fVxuICAgICAgPC92LWljb24+XG4gICAgICA8c3BhbiBcbiAgICAgICAgY2xhc3M9XCJoaWRkZW4tbWQtYW5kLWRvd25cIiBcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgIDx2LXRvb2xiYXItdGl0bGUgXG4gICAgICB2LWVsc2UgXG4gICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyXCJcbiAgICA+XG4gICAgICA8di1pY29uIFxuICAgICAgICB2LWlmPVwic2hvd0ljb25cIiBcbiAgICAgICAgY2xhc3M9XCJtbC0zIGhpZGRlbi1tZC1hbmQtZG93biBhY2NlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyBpY29uIH19XG4gICAgICA8L3YtaWNvbj5cbiAgICAgIDxzcGFuIFxuICAgICAgICBjbGFzcz1cImhpZGRlbi1tZC1hbmQtZG93blwiIFxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIndoaXRlLS10ZXh0XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgPHYtc3BhY2VyLz5cbiAgICA8IS0tIGNlbnRlciBsb2dvIC0tPlxuICAgIDxpbWcgXG4gICAgICB2LWlmPVwic2hvd0xvZ29cIiBcbiAgICAgIDpzcmM9XCJsb2dvXCIgXG4gICAgICBjbGFzcz1cImhpZGRlbi1tZC1hbmQtdXBcIiBcbiAgICA+XG4gICAgPHYtc3BhY2VyLz5cbiAgPC92LXRvb2xiYXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIGV4dGVuc2lvbjogZmFsc2UsXG4gICAgc2hvd0xvZ286IGZhbHNlLFxuICAgIGxvZ286IFwiL2ltZy9sb2dvLnBuZ1wiLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICB0aXRsZTogXCJEU0cgTGl2ZVwiXG4gIH0pLFxuICBjcmVhdGVkKCkge1xuICAgIC8qIEVtaXQgT24gYSBDaGlsZCBDb21wb25lbnQgSWYgWW91IFdhbnQgVGhpcyBUbyBCZSBWaXNpYmxlICovXG4gICAgQnVzLiRvbihcImhlYWRlci1leHRlbnNpb24tdmlzaWJsZVwiLCB2aXNpYmlsaXR5ID0+IHtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uID0gdmlzaWJpbGl0eTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgIEJ1cy4kZW1pdChcInRvZ2dsZURyYXdlclwiKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi10b29sYmFyXCIsXG4gICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZpeGVkOiBcIlwiLCBhcHA6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXNpZGUtaWNvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIsXG4gICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5leHRlbnNpb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyIG1sLTAgcGwtM1wiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiBcInByLTNcIixcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoID4gMTI2NCAmJiBcIndpZHRoOiAzMDBweFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImV4dGVuc2lvblwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zaG93SWNvblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5pY29uKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW4tbWQtYW5kLWRvd25cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uc2hvd0ljb25cbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgaGlkZGVuLW1kLWFuZC1kb3duIGFjY2VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLW1kLWFuZC1kb3duXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvd0xvZ29cbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRkZW4tbWQtYW5kLXVwXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5sb2dvIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NjhhNjY0NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjY4YTY2NDZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MZWZ0U2lkZUJhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4OTJjMGNhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGVmdFNpZGVCYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE4OTJjMGNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTg5MmMwY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiPHRlbXBsYXRlPlxuICA8di1uYXZpZ2F0aW9uLWRyYXdlclxuICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgIDpjbGlwcGVkPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA8PSAxMjY0ICYmIHRydWVcIlxuICAgIGZpeGVkXG4gICAgY2xhc3M9XCJibHVlLWdyZXlcIlxuICAgIGhpZGUtb3ZlcmxheVxuICAgIGFwcFxuICA+XG4gICAgPHYtbGlzdCBcbiAgICAgIGRlbnNlIFxuICAgICAgY2xhc3M9XCJibHVlLWdyZXlcIj5cbiAgICAgIDwhLS0gRXhwYW5kYWJsZSBHcm91cCBMaW5rcyBmcm9tIEdyb3VwIExpbmsgLS0+XG4gICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCI+QWRtaW4gQXJlYTwvdi1zdWJoZWFkZXI+XG4gICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnd2FyZWhvdXNlJylcIiBcbiAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPldhcmVob3VzZSBBcmVhPC92LXN1YmhlYWRlcj5cbiAgICAgIDx2LXN1YmhlYWRlciBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdjdXN0b21lcicpXCIgXG4gICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIj5DdXN0b21lciBBcmVhPC92LXN1YmhlYWRlcj5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJywnY3VzdG9tZXInLCd3YXJlaG91c2UnXSlcIlxuICAgICAgICB0aXRsZT1cIkRhc2hib2FyZFwiXG4gICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgaWNvbj1cImZhLXRhY2hvbWV0ZXJcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJ10pXCJcbiAgICAgICAgdGl0bGU9XCJUdXRvcmlhbHNcIlxuICAgICAgICBocmVmPVwiL3R1dG9yaWFsc1wiXG4gICAgICAgIGljb249XCJtb3ZpZVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBBZG1pbiBPbmx5IEFjY2Vzc2libGUgLS0+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlVzZXJzXCIgXG4gICAgICAgIGhyZWY9XCIvdXNlcnNcIiBcbiAgICAgICAgaWNvbj1cInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiU2hpcHBlcnNcIiBcbiAgICAgICAgaHJlZj1cIi9zaGlwcGVyc1wiIFxuICAgICAgICBpY29uPVwiZmEtc2hpcFwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgXG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlJhdGVzXCIgXG4gICAgICAgIGhyZWY9XCIvcmF0ZXNcIiBcbiAgICAgICAgaWNvbj1cImF0dGFjaF9tb25leVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJCaW5zXCIgXG4gICAgICAgIGhyZWY9XCIvYmluc1wiIFxuICAgICAgICBpY29uPVwidmlld19tb2R1bGVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gV2FyZWhvdXNlIFR5cGUgQWNjb3VudCAtLT5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ3dhcmVob3VzZScsJ2FkbWluJ10pXCJcbiAgICAgICAgdGl0bGU9XCJXYXJlaG91c2VcIlxuICAgICAgICBocmVmPVwiL3dhcmVob3VzZVwiXG4gICAgICAgIGljb249XCJsb2NhdGlvbl9jaXR5XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbicsJ3dhcmVob3VzZSddKVwiXG4gICAgICAgIHRpdGxlPVwiUmVjZWl2aW5nXCIgXG4gICAgICAgIGhyZWY9XCIvcmVjZWl2aW5nXCIgXG4gICAgICAgIGljb249XCJyZWNlaXB0XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbicsJ3dhcmVob3VzZSddKVwiXG4gICAgICAgIHRpdGxlPVwiQXJjaGl2ZWRcIiBcbiAgICAgICAgaHJlZj1cIi9hcmNoaXZlZC9kc2dcIiBcbiAgICAgICAgaWNvbj1cImFyY2hpdmVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gQ29sbGFwc2libGUgTWVudSAtLT5cbiAgICAgIDxpbnZlbnRvcnktbGlua3MvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJUaWNrZXRzXCIgXG4gICAgICAgIGhyZWY9XCIvdGlja2V0c1wiIFxuICAgICAgICBpY29uPVwiY29uZmlybWF0aW9uX251bWJlclwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJNaXNjZWxsYW5lb3VzXCIgXG4gICAgICAgIGhyZWY9XCIvbWlzY2VsbGFuZW91c1wiIFxuICAgICAgICBpY29uPVwibm90ZV9hZGRcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiUGF5bWVudHNcIiBcbiAgICAgICAgaHJlZj1cIi9wYXltZW50c1wiIFxuICAgICAgICBpY29uPVwiYXR0YWNoX21vbmV5XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8aW52b2ljZS1saW5rcy8+XG4gICAgICBcbiAgICAgIDwhLS0gQ3VzdG9tZXIgQWNjb3VudCBUeXBlIC0tPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnY3VzdG9tZXInXSlcIlxuICAgICAgICB0aXRsZT1cIkNsaWVudHNcIlxuICAgICAgICBocmVmPVwiL2NsaWVudHNcIlxuICAgICAgICBpY29uPVwiYnVzaW5lc3NfY2VudGVyXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIEFsbCBVc2VyIFR5cGVzIC0tPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnY3VzdG9tZXInXSlcIlxuICAgICAgICB0aXRsZT1cIkludm9pY2VzXCIgXG4gICAgICAgIGhyZWY9XCIvaW52b2ljZXNcIiBcbiAgICAgICAgaWNvbj1cImFsbF9pbmJveFwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKClcIlxuICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCIgXG4gICAgICAgIGhyZWY9XCIvc2V0dGluZ3NcIiBcbiAgICAgICAgaWNvbj1cImZhLWNvZ3NcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygpXCJcbiAgICAgICAgdGl0bGU9XCJMb2dvdXRcIiBcbiAgICAgICAgaHJlZj1cIi9sb2dvdXRcIlxuICAgICAgICBpY29uPVwicG93ZXJfc2V0dGluZ3NfbmV3XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgPC92LWxpc3Q+XG4gIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVkxpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvVkxpbmsudnVlXCI7XG5pbXBvcnQgeyBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyB9IGZyb20gXCJ2dWV4XCI7XG5jb25zdCB7IG1hcFN0YXRlIH0gPSBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyhcImF1dGhcIik7XG5pbXBvcnQgSW52ZW50b3J5TGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3NcIjtcbmltcG9ydCBJbnZvaWNlTGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWTGluayxcbiAgICBJbnZlbnRvcnlMaW5rcyxcbiAgICBJbnZvaWNlTGlua3NcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBkcmF3ZXI6IGZhbHNlXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogXCJpc0F1dGhlbnRpY2F0ZWRcIlxuICAgIH0pXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHN3aXRjaCAoc2VsZi4kdnVldGlmeS5icmVha3BvaW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgXCJ4c1wiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gZmFsc2UpO1xuICAgICAgY2FzZSBcInNtXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSBmYWxzZSk7XG4gICAgICBjYXNlIFwibWRcIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IHRydWUpO1xuICAgICAgY2FzZSBcImxnXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSB0cnVlKTtcbiAgICAgIGNhc2UgXCJ4bFwiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gdHJ1ZSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKFwidG9nZ2xlRHJhd2VyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5kcmF3ZXIgPSAhc2VsZi5kcmF3ZXI7XG4gICAgfSk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVkxpbmsudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVkxpbmsudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYzBmOGMyZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMGY4YzJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMwZjhjMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjBlNWE0M2U0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzBmOGMyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnN0eWxlQXZhdGFyW2RhdGEtdi0yYzBmOGMyZV0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IC01NXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FBRVwiLFwiZmlsZVwiOlwiVkxpbmsudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdHlsZUF2YXRhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogLTU1cHg7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMwZjhjMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiPHRlbXBsYXRlPlxuICA8di1saXN0LXRpbGUgXG4gICAgOmF2YXRhcj1cImF2YXRhck9uXCIgXG4gICAgOmNsYXNzPVwiW3sgc3R5bGVBdmF0YXI6IGF2YXRhck9uIH1dXCIgXG4gICAgQGNsaWNrLm5hdGl2ZT1cIm5hdmlnYXRlKGhyZWYpXCJcbiAgPlxuICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24gdi1pZj1cImljb25PbiAmJiAhYXZhdGFyT25cIj5cbiAgICAgIDx2LWljb24gOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogaWNvbkNvbG9yLCBjdXJzb3I6IGhyZWYgPyAncG9pbnRlcicgOiAnJ31cIj57eyBpY29uIH19PC92LWljb24+XG4gICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgPHYtbGlzdC10aWxlLWF2YXRhciB2LWlmPVwiaWNvbk9uICYmIGF2YXRhck9uXCI+XG4gICAgICA8aW1nIFxuICAgICAgICA6c3JjPVwiYXZhdGFyXCIgXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICA+XG4gICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICA8di1saXN0LXRpbGUtdGl0bGUgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiPlxuICAgICAgICA8c3BhbiA6c3R5bGU9XCJ7Y3Vyc29yOiBocmVmID8gJ3BvaW50ZXInIDogJyd9XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICA8di1saXN0LXRpbGUtYWN0aW9uIHYtaWY9XCJpY29uT24gJiYgYXZhdGFyT25cIj5cbiAgICAgIDx2LWljb24gOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogaWNvbkNvbG9yLCBjdXJzb3I6IGhyZWYgPyAncG9pbnRlcicgOiAnJ31cIj57eyBpY29uIH19PC92LWljb24+XG4gICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gIDwvdi1saXN0LXRpbGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhcms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBpY29uQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhcmsgPyBcIiNmYWZhZmFcIiA6IFwiIzc4OTA5Q1wiOyAvLyB3aGl0ZSBvciBibHVlLWdyZXkgbGlnaHRlbi0xXG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhcmsgPyBcIiNmYWZhZmFcIiA6IFwiI2UzYjUwMFwiOyAvLyB3aGl0ZSBvciBibHVlLWdyZXkgbGlnaHRlbi0xXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiI2Y1YzMwMFwiOyAvLyB0ZWFsIGxpZ2h0ZW4gMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0FjdGl2ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XG4gICAgfSxcbiAgICBpc0RhcmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXJrID09PSB0cnVlO1xuICAgIH0sXG4gICAgYXZhdGFyT24oKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmF2YXRhcjtcbiAgICB9LFxuICAgIGljb25PbigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuaWNvbjtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBuYXZpZ2F0ZShocmVmKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAvKiBpZiB2YWxpZCB1cmwgKi9cbiAgICAgIGlmIChzZWxmLmlzVVJMKGhyZWYpKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogd2hlbiB1c2luZyB2dWUgcm91dGVyIHBhdGggKi9cbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtocmVmfWAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1VSTChzdHIpIHtcbiAgICAgIHZhciB1cmxSZWdleCA9XG4gICAgICAgIFwiXig/IW1haWx0bzopKD86KD86aHR0cHxodHRwc3xmdHApOi8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kXCI7XG4gICAgICB2YXIgdXJsID0gbmV3IFJlZ0V4cCh1cmxSZWdleCwgXCJpXCIpO1xuICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPCAyMDgzICYmIHVybC50ZXN0KHN0cik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zdHlsZUF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC01NXB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGlzdC10aWxlXCIsXG4gICAge1xuICAgICAgY2xhc3M6IFt7IHN0eWxlQXZhdGFyOiBfdm0uYXZhdGFyT24gfV0sXG4gICAgICBhdHRyczogeyBhdmF0YXI6IF92bS5hdmF0YXJPbiB9LFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5uYXZpZ2F0ZShfdm0uaHJlZilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLmljb25PbiAmJiAhX3ZtLmF2YXRhck9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUgPyBfdm0uYWN0aXZlQ29sb3IgOiBfdm0uaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IF92bS5ocmVmID8gXCJwb2ludGVyXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaWNvbikpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaWNvbk9uICYmIF92bS5hdmF0YXJPblxuICAgICAgICA/IF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlLXRpdGxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uaXNBY3RpdmUgPyBfdm0uYWN0aXZlQ29sb3IgOiBfdm0ubGlua0NvbG9yIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0eWxlOiB7IGN1cnNvcjogX3ZtLmhyZWYgPyBcInBvaW50ZXJcIiA6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaWNvbk9uICYmIF92bS5hdmF0YXJPblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlID8gX3ZtLmFjdGl2ZUNvbG9yIDogX3ZtLmljb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBfdm0uaHJlZiA/IFwicG9pbnRlclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmljb24pKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzBmOGMyZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMwZjhjMmVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM5Yjc0MTk4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzliNzQxOThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0NTExYmNjY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1jOWI3NDE5OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSA2MCA2MSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0lBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52ZW50b3J5TGlua3MudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDx2LWxpc3QgXFxuICAgIGNsYXNzPVxcXCJibHVlLWdyZXlcXFwiXFxuICAgIGRhcmtcXG4gID5cXG4gICAgPHYtbGlzdC1ncm91cFxcbiAgICAgIHYtZm9yPVxcXCJpdGVtIGluIGl0ZW1zXFxcIlxcbiAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWN0aXZlXFxcIlxcbiAgICAgIDprZXk9XFxcIml0ZW0udGl0bGVcXFwiXFxuICAgICAgbm8tYWN0aW9uXFxuICAgICAgYWN0aXZlLWNsYXNzPVxcXCJhY2NlbnQtLXRleHRcXFwiXFxuICAgID5cXG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcIndoaXRlXFxcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuXFxuICAgICAgPHYtbGlzdC10aWxlXFxuICAgICAgICB2LWZvcj1cXFwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBcXG4gICAgICAgIHYtaWY9XFxcIiRhdXRoLmNoZWNrKHN1Ykl0ZW0uYXV0aClcXFwiXFxuICAgICAgICA6a2V5PVxcXCJzdWJJdGVtLnRpdGxlXFxcIlxcbiAgICAgICAgOnN0eWxlPVxcXCJ7Y29sb3I6IGlzQWN0aXZlKHN1Ykl0ZW0pID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJsb2FkdmlldyhzdWJJdGVtKVxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcblxcbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XFxcImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1xcXCI+e3sgc3ViSXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgIDwvdi1saXN0LWdyb3VwPlxcbiAgPC92LWxpc3Q+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgYWN0aXZlQ29sb3I6IFxcXCIjNERCNkFDXFxcIixcXG4gICAgICBsaW5rQ29sb3I6IFxcXCIjZmZmZmZcXFwiLFxcbiAgICAgIGl0ZW1zOiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGFjdGlvbjogXFxcImNvbGxlY3Rpb25zX2Jvb2ttYXJrXFxcIixcXG4gICAgICAgICAgdGl0bGU6IFxcXCJJbnZlbnRvcmllc1xcXCIsXFxuICAgICAgICAgIGl0ZW1zOiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJBbGwgVW5rbm93biBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2FsbC11bmtub3duLXJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS1xdWVzdGlvbi1jaXJjbGVcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gQ3VzdG9tZXJcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3Vua25vd24tY3VzdG9tZXJcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gQ2xpZW50XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmtub3duLWNsaWVudFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS11c2Vyc1xcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gU2hpcHBlclxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdW5rbm93bi1zaGlwcGVyXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImZhLXNoaXBcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJEYW1hZ2VkIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvZGFtYWdlZFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJicm9rZW5faW1hZ2VcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiLCBcXFwiY3VzdG9tZXJcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJSZXBhaXJlZCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3JlcGFpcmVkXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImJ1aWxkXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIiwgXFxcImN1c3RvbWVyXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiVW5kZWxpdmVyZWQgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmRlbGl2ZXJlZFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS10cnVja1xcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkJpbiBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2JpblxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJhcHBzXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDdXN0b21lciBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2N1c3RvbWVyXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImxvY2FsX2xpYnJhcnlcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkNsaWVudCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2NsaWVudHNcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwicGVybV9jb250YWN0X2NhbGVuZGFyXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgXVxcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfTtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIGlzQWN0aXZlKGl0ZW0pIHtcXG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xcbiAgICB9LFxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XFxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWM5Yjc0MTk4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwiPHRlbXBsYXRlPlxuICA8di1saXN0IFxuICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCJcbiAgICBkYXJrXG4gID5cbiAgICA8di1saXN0LWdyb3VwXG4gICAgICB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgdi1tb2RlbD1cIml0ZW0uYWN0aXZlXCJcbiAgICAgIDprZXk9XCJpdGVtLnRpdGxlXCJcbiAgICAgIG5vLWFjdGlvblxuICAgICAgYWN0aXZlLWNsYXNzPVwiYWNjZW50LS10ZXh0XCJcbiAgICA+XG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cImFjdGl2YXRvclwiPlxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG5cbiAgICAgIDx2LWxpc3QtdGlsZVxuICAgICAgICB2LWZvcj1cInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1wiIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soc3ViSXRlbS5hdXRoKVwiXG4gICAgICAgIDprZXk9XCJzdWJJdGVtLnRpdGxlXCJcbiAgICAgICAgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiXG4gICAgICAgIEBjbGljaz1cImxvYWR2aWV3KHN1Ykl0ZW0pXCJcbiAgICAgID5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1wiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICA8L3YtbGlzdC1ncm91cD5cbiAgPC92LWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDb2xvcjogXCIjNERCNkFDXCIsXG4gICAgICBsaW5rQ29sb3I6IFwiI2ZmZmZmXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uOiBcImNvbGxlY3Rpb25zX2Jvb2ttYXJrXCIsXG4gICAgICAgICAgdGl0bGU6IFwiSW52ZW50b3JpZXNcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgVW5rbm93biBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9hbGwtdW5rbm93bi1yZXBvcnRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXF1ZXN0aW9uLWNpcmNsZVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW5rbm93biBDdXN0b21lclwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3Vua25vd24tY3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVua25vd24gQ2xpZW50XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdW5rbm93bi1jbGllbnRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXVzZXJzXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVua25vd24gU2hpcHBlclwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3Vua25vd24tc2hpcHBlclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiZmEtc2hpcFwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGFtYWdlZCBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9kYW1hZ2VkXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJicm9rZW5faW1hZ2VcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIiwgXCJjdXN0b21lclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiUmVwYWlyZWQgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvcmVwYWlyZWRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImJ1aWxkXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVuZGVsaXZlcmVkIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3VuZGVsaXZlcmVkXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJmYS10cnVja1wiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiLCBcImN1c3RvbWVyXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJCaW4gUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvYmluXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJhcHBzXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJDdXN0b21lciBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9jdXN0b21lclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwibG9jYWxfbGlicmFyeVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50IFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2NsaWVudHNcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInBlcm1fY29udGFjdF9jYWxlbmRhclwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpc0FjdGl2ZShpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xuICAgIH0sXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGlzdFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsIGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LFxuICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJ2LWxpc3QtZ3JvdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaXRlbS50aXRsZSxcbiAgICAgICAgICBhdHRyczogeyBcIm5vLWFjdGlvblwiOiBcIlwiLCBcImFjdGl2ZS1jbGFzc1wiOiBcImFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJhY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiIH0sIHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hY3Rpb24pKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKGl0ZW0uaXRlbXMsIGZ1bmN0aW9uKHN1Ykl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJGF1dGguY2hlY2soc3ViSXRlbS5hdXRoKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Ykl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uYWN0aXZlQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmxpbmtDb2xvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkdmlldyhzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUoc3ViSXRlbSkgPyBcInRlYWxcIiA6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc3ViSXRlbS5hY3Rpb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1jOWI3NDE5OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzliNzQxOThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OThcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDYwIDYxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzllNjA3N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zOWU2MDc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgNjAgNjEiXSwic291cmNlUm9vdCI6IiJ9