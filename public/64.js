webpackJsonp([64],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { fullscreen: "", transition: "dialog-bottom-transition" },
      model: {
        value: _vm.modal,
        callback: function($$v) {
          _vm.modal = $$v
        },
        expression: "modal"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { light: true } },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "primary" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "white--text",
                  attrs: { icon: "" },
                  on: { click: _vm.close }
                },
                [_c("v-icon", [_vm._v("arrow_back")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v("Item # " + _vm._s(_vm.id) + " Images")
              ]),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          ),
          _vm._v(" "),
          _vm.images.length > 0
            ? _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    _vm._l(_vm.images, function(image) {
                      return _c(
                        "v-flex",
                        {
                          key: image,
                          attrs: { xs12: "", md4: "", "px-2": "", "py-2": "" }
                        },
                        [
                          _c("v-card-media", {
                            attrs: { src: image, height: "250px", contain: "" },
                            on: {
                              click: function($event) {
                                _vm.viewFullImage(image)
                              }
                            }
                          })
                        ],
                        1
                      )
                    })
                  )
                ],
                1
              )
            : _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-alert",
                    {
                      attrs: {
                        value: true,
                        type: "info",
                        color: "amber",
                        icon: "warning",
                        transition: "scale-transition",
                        outline: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n        No Uploaded Images For This Item\n      "
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59c8bc33", module.exports)
  }
}

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1002)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1004)
/* template */
var __vue_template__ = __webpack_require__(1005)
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
Component.options.__file = "resources/assets/js/components/packages/DamageImages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-598cbec2", Component.options)
  } else {
    hotAPI.reload("data-v-598cbec2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1003);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(954)("2473b866", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-598cbec2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamageImages.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-598cbec2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamageImages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1004:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      modal: false
    };
  },
  mounted: function mounted() {
    var self = this;
    Bus.$on("view-damaged-package-" + this.id + "-images", function () {
      self.modal = true;
    });
  },

  methods: {
    close: function close() {
      this.modal = false;
    },
    viewFullImage: function viewFullImage(image) {
      window.open(image);
    }
  }
});

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { fullscreen: "", transition: "dialog-bottom-transition" },
      model: {
        value: _vm.modal,
        callback: function($$v) {
          _vm.modal = $$v
        },
        expression: "modal"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { light: true } },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "primary" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "white--text",
                  attrs: { icon: "" },
                  on: { click: _vm.close }
                },
                [_c("v-icon", [_vm._v("arrow_back")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v("Item # " + _vm._s(_vm.id) + " Damaged Images")
              ]),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          ),
          _vm._v(" "),
          _vm.images.length > 0
            ? _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    _vm._l(_vm.images, function(image) {
                      return _c(
                        "v-flex",
                        {
                          key: image,
                          attrs: { xs12: "", md4: "", "px-2": "", "py-2": "" }
                        },
                        [
                          _c("v-card-media", {
                            attrs: { src: image, height: "250px", contain: "" },
                            on: {
                              click: function($event) {
                                _vm.viewFullImage(image)
                              }
                            }
                          })
                        ],
                        1
                      )
                    })
                  )
                ],
                1
              )
            : _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-alert",
                    {
                      attrs: {
                        value: true,
                        type: "info",
                        color: "amber",
                        icon: "warning",
                        transition: "scale-transition",
                        outline: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n        No Uploaded Damaged Images For This Item\n      "
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-598cbec2", module.exports)
  }
}

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1176)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1178)
/* template */
var __vue_template__ = __webpack_require__(1179)
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
Component.options.__file = "resources/assets/js/pages/Reports/ViewPackage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b9ad1c4", Component.options)
  } else {
    hotAPI.reload("data-v-4b9ad1c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(954)("49a9db62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b9ad1c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ViewPackage.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b9ad1c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ViewPackage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_packages_Images_vue__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_packages_Images_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Components_packages_Images_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_packages_DamageImages_vue__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_packages_DamageImages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Components_packages_DamageImages_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ModalLayout: __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default.a,
    Images: __WEBPACK_IMPORTED_MODULE_1_Components_packages_Images_vue___default.a,
    DamageImages: __WEBPACK_IMPORTED_MODULE_2_Components_packages_DamageImages_vue___default.a
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      item: {},
      bins: [],
      handling_rates: [],
      storage_rates: []
    };
  },
  watch: {
    item: {
      handler: function handler(newValue) {},
      deep: false
    }
  },
  mounted: function mounted() {
    this.fetchPackage();
  },

  methods: {
    viewDamageImages: function viewDamageImages() {
      Bus.$emit("view-damaged-package-" + this.id + "-images");
    },
    viewImages: function viewImages() {
      Bus.$emit("view-package-" + this.id + "-images");
    },
    redirectBack: function redirectBack() {
      var self = this;
      return self.$nextTick(function () {
        return self.$router.go(-1);
      });
    },
    fetchPackage: function fetchPackage() {
      var self = this;
      axios.post(route("api.report.viewPackage", { package: this.id })).then(function (response) {
        self.item = response.data.data;
      });
    },
    getDamageStatus: function getDamageStatus(status) {
      if (status) {
        return "Damaged: Yes";
      } else {
        return "Damaged: No";
      }
    },
    getRepairedStatus: function getRepairedStatus(status) {
      if (status) {
        return "Repaired: Yes";
      } else {
        return "Repaired: No";
      }
    }
  }
});

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal-layout",
    [
      _c(
        "v-toolbar",
        { staticClass: "primary", attrs: { fixed: "", app: "" } },
        [
          _c(
            "v-btn",
            {
              attrs: { flat: "", icon: "", color: "white" },
              nativeOn: {
                click: function($event) {
                  _vm.redirectBack()
                }
              }
            },
            [_c("v-icon", [_vm._v("arrow_back")])],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "text-xs-center white--text" }, [
            _vm._v("View Item ID# " + _vm._s(_vm.id))
          ]),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-md": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "", "pa-2": "" } },
            [
              _c(
                "v-flex",
                { attrs: { sm12: "", md4: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Customer",
                      "prepend-icon": "supervised_user_circle"
                    },
                    model: {
                      value: _vm.item.customer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "customer_name", $$v)
                      },
                      expression: "item.customer_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md4: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Client",
                      "prepend-icon": "fa-users"
                    },
                    model: {
                      value: _vm.item.client_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "client_name", $$v)
                      },
                      expression: "item.client_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md4: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "DSG No.",
                      "prepend-icon": "local_offer"
                    },
                    model: {
                      value: _vm.item.dsg_id,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "dsg_id", $$v)
                      },
                      expression: "item.dsg_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "PO No.",
                      "prepend-icon": "bookmark"
                    },
                    model: {
                      value: _vm.item.po_no,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "po_no", $$v)
                      },
                      expression: "item.po_no"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Date Received",
                      "prepend-icon": "event_available"
                    },
                    model: {
                      value: _vm.item.date_received,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "date_received", $$v)
                      },
                      expression: "item.date_received"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Date Processed",
                      "prepend-icon": "event_note"
                    },
                    model: {
                      value: _vm.item.date_processed,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "date_processed", $$v)
                      },
                      expression: "item.date_processed"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Bin",
                      light: "",
                      "prepend-icon": "view_comfy"
                    },
                    model: {
                      value: _vm.item.bin_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "bin_name", $$v)
                      },
                      expression: "item.bin_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Handling Note",
                      light: "",
                      "prepend-icon": "receipt"
                    },
                    model: {
                      value: _vm.item.handling_type,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "handling_type", $$v)
                      },
                      expression: "item.handling_type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Store At",
                      light: "",
                      "prepend-icon": "dns"
                    },
                    model: {
                      value: _vm.item.store_at,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "store_at", $$v)
                      },
                      expression: "item.store_at"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Style No.",
                      "prepend-icon": "style"
                    },
                    model: {
                      value: _vm.item.style_no,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "style_no", $$v)
                      },
                      expression: "item.style_no"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Length",
                      suffix: "ft",
                      "prepend-icon": "keyboard_tab"
                    },
                    model: {
                      value: _vm.item.length,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "length", $$v)
                      },
                      expression: "item.length"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Width",
                      suffix: "ft",
                      "prepend-icon": "swap_horiz"
                    },
                    model: {
                      value: _vm.item.width,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "width", $$v)
                      },
                      expression: "item.width"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Height",
                      suffix: "ft",
                      "prepend-icon": "swap_vert"
                    },
                    model: {
                      value: _vm.item.height,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "height", $$v)
                      },
                      expression: "item.height"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      readonly: "",
                      label: "Cube",
                      suffix: "ft³",
                      "prepend-icon": "fa-cube"
                    },
                    model: {
                      value: _vm.item.cube,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "cube", $$v)
                      },
                      expression: "item.cube"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md2: "" } },
                [
                  _c("v-switch", {
                    attrs: {
                      label: _vm.getDamageStatus(_vm.item.damaged),
                      readonly: ""
                    },
                    model: {
                      value: _vm.item.damaged,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "damaged", $$v)
                      },
                      expression: "item.damaged"
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
            { attrs: { row: "", wrap: "", "pa-2": "" } },
            [
              _c(
                "v-flex",
                { attrs: { sm12: "", md6: "", "px-3": "" } },
                [
                  _c(
                    "v-subheader",
                    [
                      _vm._v("\n          Item Description:\n          "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { flat: "", icon: "" },
                          on: {
                            click: function($event) {
                              _vm.viewImages()
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { color: "blue" } }, [
                            _vm._v("\n              image\n            ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { readonly: "" },
                    model: {
                      value: _vm.item.description,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "description", $$v)
                      },
                      expression: "item.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md6: "", "px-3": "" } },
                [
                  _vm.item.damaged
                    ? _c(
                        "v-subheader",
                        [
                          _vm._v("\n          Damage Description:\n          "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { flat: "", icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.viewDamageImages()
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { color: "red" } }, [
                                _vm._v(
                                  "\n              broken_image\n            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.item.damaged
                    ? _c("v-text-field", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.item.damage_description,
                          callback: function($$v) {
                            _vm.$set(_vm.item, "damage_description", $$v)
                          },
                          expression: "item.damage_description"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.item.damaged
            ? _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  !_vm.item.repaired
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", md2: "", "offset-md10": "" } },
                        [
                          _c("v-switch", {
                            attrs: {
                              label: _vm.getRepairedStatus(_vm.item.repaired),
                              readonly: ""
                            },
                            model: {
                              value: _vm.item.repaired,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "repaired", $$v)
                              },
                              expression: "item.repaired"
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "v-flex",
                        { attrs: { sm12: "", md2: "", "order-md2": "" } },
                        [
                          _c("v-switch", {
                            attrs: {
                              label: _vm.getRepairedStatus(_vm.item.repaired),
                              readonly: ""
                            },
                            model: {
                              value: _vm.item.repaired,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "repaired", $$v)
                              },
                              expression: "item.repaired"
                            }
                          })
                        ],
                        1
                      ),
                  _vm._v(" "),
                  _vm.item.repaired
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", "offset-md8": "", md2: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Date Repaired",
                              "prepend-icon": "event_note",
                              readonly: ""
                            },
                            model: {
                              value: _vm.item.date_repaired,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "date_repaired", $$v)
                              },
                              expression: "item.date_repaired"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("images", { attrs: { id: _vm.id, images: _vm.item.package_images } }),
      _vm._v(" "),
      _c("damage-images", {
        attrs: { id: _vm.id, images: _vm.item.damaged_images }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-4b9ad1c4", module.exports)
  }
}

/***/ }),

/***/ 954:
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

var listToStyles = __webpack_require__(955)

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

/***/ 955:
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

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(959)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(961)
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
Component.options.__file = "resources/assets/js/layouts/ModalLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da953062", Component.options)
  } else {
    hotAPI.reload("data-v-da953062", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(960);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(954)("d26755d4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da953062\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalLayout.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da953062\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalLayout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.v-messages__message {\n  color: #e57373;\n}\n", ""]);

// exports


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { standalone: "" } },
    [
      _c(
        "v-content",
        { staticClass: "white" },
        [
          _c(
            "v-container",
            {
              staticClass: "pa-0 ma-0",
              attrs: { transition: "slide-x-transition", fluid: "" }
            },
            [
              _c(
                "v-card",
                { attrs: { flat: true } },
                [_vm._t("toolbar"), _vm._v(" "), _vm._t("default")],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("footer")
        ],
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
    require("vue-hot-reload-api")      .rerender("data-v-da953062", module.exports)
  }
}

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(997)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(999)
/* template */
var __vue_template__ = __webpack_require__(1000)
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
Component.options.__file = "resources/assets/js/components/packages/Images.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59c8bc33", Component.options)
  } else {
    hotAPI.reload("data-v-59c8bc33", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(998);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(954)("6e21f6e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59c8bc33\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Images.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59c8bc33\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Images.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 999:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      modal: false
    };
  },
  mounted: function mounted() {
    var self = this;
    Bus.$on("view-package-" + this.id + "-images", function () {
      self.modal = true;
    });
  },

  methods: {
    close: function close() {
      this.modal = false;
    },
    viewFullImage: function viewFullImage(image) {
      window.open(image);
    }
  }
});

/***/ })

});