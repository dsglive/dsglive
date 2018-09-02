webpackJsonp([22],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1025)
/* template */
var __vue_template__ = __webpack_require__(1028)
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
Component.options.__file = "resources/assets/js/components/Uploads.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc6794aa", Component.options)
  } else {
    hotAPI.reload("data-v-fc6794aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1008)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1010)
/* template */
var __vue_template__ = __webpack_require__(1011)
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

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1009);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("3ac63ef0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59c8bc33\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Images.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59c8bc33\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Images.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Images.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1010:
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

/***/ }),

/***/ 1011:
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

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1013)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1015)
/* template */
var __vue_template__ = __webpack_require__(1016)
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

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1014);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("a9d4ab22", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-598cbec2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamageImages.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-598cbec2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamageImages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"DamageImages.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1015:
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

/***/ 1016:
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

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1018)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1020)
/* template */
var __vue_template__ = __webpack_require__(1035)
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
Component.options.__file = "resources/assets/js/components/dsg/Packages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-100c21ca", Component.options)
  } else {
    hotAPI.reload("data-v-100c21ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1019);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("84bbd674", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-100c21ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Packages.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-100c21ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Packages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Packages.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_uploads_PackageImagesUploader__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_uploads_PackageImagesUploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Components_uploads_PackageImagesUploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_uploads_DamagedImagesUploader__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_uploads_DamagedImagesUploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Components_uploads_DamagedImagesUploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Mixins_validation_error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_packages_Images_vue__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_packages_Images_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Components_packages_Images_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_packages_DamageImages_vue__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_packages_DamageImages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Components_packages_DamageImages_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PackageImagesUploader: __WEBPACK_IMPORTED_MODULE_0_Components_uploads_PackageImagesUploader___default.a,
    DamagedImagesUploader: __WEBPACK_IMPORTED_MODULE_1_Components_uploads_DamagedImagesUploader___default.a,
    Images: __WEBPACK_IMPORTED_MODULE_3_Components_packages_Images_vue___default.a,
    DamageImages: __WEBPACK_IMPORTED_MODULE_4_Components_packages_DamageImages_vue___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_2_Mixins_validation_error__["a" /* default */]],
  props: {
    item: {
      type: Object,
      required: true
    },
    packages: {
      type: Array,
      required: true
    },
    bins: {
      type: Array,
      required: true
    },
    handlingRates: {
      type: Array,
      required: true
    },
    storageRates: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 1
    },
    iteration: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      store_at: ["rack", "floor"],
      date_repaired_modal: false,
      date_repaired: null
    };
  },
  watch: {
    "item.length": function itemLength(newvalue) {
      this.updatetotalCube();
    },
    "item.width": function itemWidth(newValue) {
      this.updatetotalCube();
    },
    "item.height": function itemHeight(newValue) {
      this.updatetotalCube();
    },
    "item.handling_type": function itemHandling_type(newValue) {
      var self = this;
      var rate = _.find(self.handlingRates, function (r) {
        return r.id === newValue;
      });
      self.item.handling_fee = rate.amount;
    },
    "item.store_at": function itemStore_at(newValue) {
      var self = this;
      var rate = _.find(self.storageRates, function (r) {
        var name = r.name;
        var nameArray = name.split(" ");
        name = nameArray[0].toLowerCase();
        return name === newValue;
      });
      self.item.storage_fee = rate.amount;
    },

    "item.bin_id": {
      handler: function handler(newValue) {
        var self = this;
        if (newValue != null || newValue != undefined) {
          if (self.bins.length > 0) {
            var bin = _.find(self.bins, function (b) {
              return b.id === newValue;
            });
            if (bin != undefined) {
              self.item.bin_name = bin.code;
            }
          }
        } else {
          self.item.bin_name = null;
        }
      },
      deep: false
    }
  },
  methods: {
    openDateRepairedModal: function openDateRepairedModal() {
      if (!this.readonly) {
        this.date_repaired_modal = true;
      }
    },
    viewDamageImages: function viewDamageImages() {
      Bus.$emit("view-damaged-package-" + this.item.id + "-images");
    },
    viewImages: function viewImages() {
      Bus.$emit("view-package-" + this.item.id + "-images");
    },
    clonePackage: function clonePackage() {
      var self = this;
      axios.post(route("api.package.add")).then(function (response) {
        var item = response.data.data;
        item.dsg_id = self.item.dsg_id;
        item.date_received = self.item.date_received;
        item.date_processed = self.item.date_processed;
        item.client_id = self.item.client_id;
        item.client_name = self.item.client_name;
        item.customer_id = self.item.customer_id;
        item.customer_name = self.item.customer_name;
        item.shipper_id = self.item.shipper_id;
        item.shipper_name = self.item.shipper_name;

        item.bin_id = self.item.bin_id;
        item.bin_name = self.item.bin_name;

        item.po_no = self.item.po_no;
        item.style_no = self.item.style_no;

        item.length = self.item.length;
        item.width = self.item.width;
        item.height = self.item.height;
        item.cube = self.item.cube;

        item.damaged = self.item.damaged;
        item.damage_description = self.item.damage_description;
        item.repaired = self.item.repaired;
        item.date_repaired = self.item.date_repaired;

        item.handling_fee = self.item.handling_fee;
        item.handling_type = self.item.handling_type;
        item.store_at = self.item.store_at;
        item.storage_fee = self.item.storage_fee;

        item.description = self.item.description;
        self.packages.push(item);
        self.form.packages.push(item);
      });
    },
    addNewPackage: function addNewPackage() {
      var self = this;
      axios.post(route("api.package.add")).then(function (response) {
        var item = response.data.data;
        item.date_received = self.item.date_received;
        item.date_processed = self.item.date_processed;
        item.po_no = self.item.po_no;
        item.customer_id = self.form.customer_id;
        item.customer_name = self.form.customer_name;
        item.client_id = self.form.client_id;
        item.client_name = self.form.client_name;
        item.shipper_id = self.form.shipper_id;
        item.shipper_name = self.form.shipper_name;
        self.packages.push(item);
      });
    },
    updatetotalCube: function updatetotalCube() {
      var volume = this.item.length * this.item.width * this.item.height;
      this.item.cube = Math.ceil((volume / 1728).toFixed(4));
    },
    save: function save(item, date) {
      var ref = "date_repaired_" + item.id;
      this.$refs[ref].save(date);
    },
    toggleModal: function toggleModal(id) {
      this.date_repaired_modal = !this.date_repaired_modal;
    },
    openPackageImagesModal: function openPackageImagesModal() {
      Bus.$emit("upload-package-images-" + this.item.id);
    },
    openDamagedImagesModal: function openDamagedImagesModal() {
      Bus.$emit("upload-damaged-images-" + this.item.id);
    },
    deletePackage: function deletePackage(id) {
      var self = this;
      axios.post(route("api.package.delete", { id: id })).then(function () {
        var index = _.findIndex(self.packages, { id: id });
        self.packages.splice(index, 1);
      });
    },
    getStoreAt: function getStoreAt(status) {
      if (status) {
        return "Store At: Floor";
      } else {
        return "Store At: Rack";
      }
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

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1022)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1024)
/* template */
var __vue_template__ = __webpack_require__(1029)
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
Component.options.__file = "resources/assets/js/components/uploads/PackageImagesUploader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-230a85f0", Component.options)
  } else {
    hotAPI.reload("data-v-230a85f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1023);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("63ef0a90", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-230a85f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PackageImagesUploader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-230a85f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PackageImagesUploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"PackageImagesUploader.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Uploads__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Uploads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Components_Uploads__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    uploads: __WEBPACK_IMPORTED_MODULE_0_Components_Uploads___default.a
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      single: false,
      modal: false,
      fileKey: "package_images"
    };
  },
  computed: {
    postUrl: function postUrl() {
      var self = this;
      var id = self.id;
      return route("api.package.uploadPackageImages", { id: id });
    }
  },
  mounted: function mounted() {
    var self = this;
    Bus.$on("upload-package-images-" + this.item.id, function () {
      self.modal = true;
    });
  },

  methods: {
    closeGalleryModal: function closeGalleryModal() {
      this.modal = false;
    }
  }
});

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xkeshi_image_compressor__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xkeshi_image_compressor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xkeshi_image_compressor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_upload_component__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_upload_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_upload_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FileUpload: __WEBPACK_IMPORTED_MODULE_1_vue_upload_component___default.a
  },
  props: {
    fileKey: {
      type: String,
      required: true
    },
    putUrl: {
      type: String,
      default: ""
    },
    postUrl: {
      type: String,
      required: true
    },
    single: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      th: [{ text: "Thumb", value: "thumb", align: "left", sortable: true }, { text: "Name", value: "name", align: "left", sortable: true }, { text: "Size", value: "size", align: "left", sortable: true }, { text: "Progress", value: "progress", align: "left", sortable: true }, { text: "Status", value: "speed", align: "left", sortable: true }, { text: "Actions", align: "center", sortable: false }],
      files: [],
      /* file config */
      accept: "image/png,image/gif,image/jpeg,image/webp",
      extensions: "gif,jpg,jpeg,png,webp",
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: "file",
      postAction: "/uploads/post",
      putAction: "/uploads/put",
      headers: {
        "X-Csrf-Token": App.csrfToken,
        /* added access token */
        Authorization: ""
      },
      data: {
        _csrf_token: App.csrfToken
      },
      autoCompress: 1024 * 1024,
      uploadAuto: false,
      /* file option */
      isOption: false,
      /* file name validation */
      maxInput: function maxInput(v) {
        return v.length <= 30 || "Input too long!";
      },
      /* file per page */
      perPageData: [10, 25, 50, { text: "All", value: -1 }]
    };
  },

  watch: {
    fileKey: function fileKey(newValue) {
      this.name = newValue;
    }
  },
  mounted: function mounted() {
    this.postAction = this.postUrl ? this.postUrl : "/uploads/post";
    this.putAction = this.putUrl ? this.putUrl : null;
    this.headers["Authorization"] = "Bearer " + vm.$auth.token();
    if (this.single === true) {
      this.multiple = false;
    } else {
      this.multiple = true;
    }
  },

  methods: {
    progress: function progress(props) {
      return Math.round(props);
    },
    remove: function remove(file) {
      this.$refs.upload.remove(file);
    },
    inputFilter: function inputFilter(newFile, oldFile, prevent) {
      var _this = this;

      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }

        // Automatic compression
        // 自动压缩
        if (newFile.file && newFile.type.substr(0, 6) === "image/" && this.autoCompress > 0 && this.autoCompress < newFile.size) {
          newFile.error = "compressing";
          var imageCompressor = new __WEBPACK_IMPORTED_MODULE_0__xkeshi_image_compressor___default.a(null, {
            convertSize: Infinity,
            maxWidth: 1024,
            maxHeight: 1024
          });
          imageCompressor.compress(newFile.file).then(function (file) {
            _this.$refs.upload.update(newFile, {
              error: "",
              file: file,
              size: file.size,
              type: file.type
            });
          }).catch(function (err) {
            _this.$refs.upload.update(newFile, {
              error: err.message || "compress"
            });
          });
        }
      }

      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = "";
        var URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }

        // Thumbnails
        // 缩略图
        newFile.thumb = "";
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob;
        }
      }
    },


    // add, update, remove File Event
    inputFile: function inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update

        if (newFile.active && !oldFile.active) {
          // beforeSend

          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: "size" });
          }
        }

        if (newFile.progress !== oldFile.progress) {
          // progress
        }

        if (newFile.error && !oldFile.error) {
          // error
        }

        if (newFile.success && !oldFile.success) {
          //! PUSH TO ARRAY NEW IMAGES, We Can Use This TO Display at Package
          var link = newFile.response[this.fileKey];
          if (this.fileKey === "damaged_images") {
            if (this.item.damaged_images === null) {
              this.item.damaged_images = [];
            }
            this.item.damaged_images.push(link);
          }
          if (this.fileKey === "package_images") {
            if (this.item.package_images === null) {
              this.item.package_images = [];
            }
            this.item.package_images.push(link);
          }
        }
      }

      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }

      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    }
  }
});

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Image Compressor v0.5.3
 * https://github.com/xkeshi/image-compressor
 *
 * Copyright (c) 2017 Xkeshi
 * Released under the MIT license
 *
 * Date: 2017-12-29T06:11:20.022Z
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ImageCompressor = factory());
}(this, (function () { 'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var canvasToBlob = createCommonjsModule(function (module) {
/*
 * JavaScript Canvas to Blob
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/* global atob, Blob, define */

(function (window) {
  'use strict';

  var CanvasPrototype =
    window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;
  var hasBlobConstructor =
    window.Blob &&
    (function () {
      try {
        return Boolean(new Blob())
      } catch (e) {
        return false
      }
    })();
  var hasArrayBufferViewSupport =
    hasBlobConstructor &&
    window.Uint8Array &&
    (function () {
      try {
        return new Blob([new Uint8Array(100)]).size === 100
      } catch (e) {
        return false
      }
    })();
  var BlobBuilder =
    window.BlobBuilder ||
    window.WebKitBlobBuilder ||
    window.MozBlobBuilder ||
    window.MSBlobBuilder;
  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
  var dataURLtoBlob =
    (hasBlobConstructor || BlobBuilder) &&
    window.atob &&
    window.ArrayBuffer &&
    window.Uint8Array &&
    function (dataURI) {
      var matches,
        mediaType,
        isBase64,
        dataString,
        byteString,
        arrayBuffer,
        intArray,
        i,
        bb;
      // Parse the dataURI components as per RFC 2397
      matches = dataURI.match(dataURIPattern);
      if (!matches) {
        throw new Error('invalid data URI')
      }
      // Default to text/plain;charset=US-ASCII
      mediaType = matches[2]
        ? matches[1]
        : 'text/plain' + (matches[3] || ';charset=US-ASCII');
      isBase64 = !!matches[4];
      dataString = dataURI.slice(matches[0].length);
      if (isBase64) {
        // Convert base64 to raw binary data held in a string:
        byteString = atob(dataString);
      } else {
        // Convert base64/URLEncoded data component to raw binary:
        byteString = decodeURIComponent(dataString);
      }
      // Write the bytes of the string to an ArrayBuffer:
      arrayBuffer = new ArrayBuffer(byteString.length);
      intArray = new Uint8Array(arrayBuffer);
      for (i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }
      // Write the ArrayBuffer (or ArrayBufferView) to a blob:
      if (hasBlobConstructor) {
        return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
          type: mediaType
        })
      }
      bb = new BlobBuilder();
      bb.append(arrayBuffer);
      return bb.getBlob(mediaType)
    };
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
            callback(dataURLtoBlob(self.toDataURL(type, quality)));
          } else {
            callback(self.mozGetAsFile('blob', type));
          }
        });
      };
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          callback(dataURLtoBlob(self.toDataURL(type, quality)));
        });
      };
    }
  }
  if (false) {
    undefined(function () {
      return dataURLtoBlob
    });
  } else if ('object' === 'object' && module.exports) {
    module.exports = dataURLtoBlob;
  } else {
    window.dataURLtoBlob = dataURLtoBlob;
  }
})(window);
});

/* globals Blob */
'use strict';
var toString = Object.prototype.toString;

var isBlob = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};

var DEFAULTS = {
  /**
   * Indicates if read the image's Exif Orientation information,
   * and then rotate or flip the image automatically.
   * @type {boolean}
   */
  checkOrientation: true,

  /**
   * The max width of the output image.
   * @type {number}
   */
  maxWidth: Infinity,

  /**
   * The max height of the output image.
   * @type {number}
   */
  maxHeight: Infinity,

  /**
   * The min width of the output image.
   * @type {number}
   */
  minWidth: 0,

  /**
   * The min height of the output image.
   * @type {number}
   */
  minHeight: 0,

  /**
   * The width of the output image.
   * If not specified, the natural width of the source image will be used.
   * @type {number}
   */
  width: undefined,

  /**
   * The height of the output image.
   * If not specified, the natural height of the source image will be used.
   * @type {number}
   */
  height: undefined,

  /**
   * The quality of the output image.
   * It must be a number between `0` and `1`,
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.8,

  /**
   * The mime type of the output image.
   * By default, the original mime type of the source image file will be used.
   * @type {string}
   */
  mimeType: 'auto',

  /**
   * PNG files over this value (5M by default) will be converted to JPEGs.
   * To disable this, just set the value to `Infinity`.
   * Check out {@link https://github.com/xkeshi/image-compressor/issues/2 #2}.
   * @type {number}
   */
  convertSize: 5000000,

  /**
   * The success callback for the image compressing process.
   * @type {Function}
   * @param {File} file - The compressed image File object.
   * @example
   * function (file) { console.log(file) }
   */
  success: null,

  /**
   * The error callback for the image compressing process.
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) { console.log(err.message) }
   */
  error: null
};

var REGEXP_IMAGE_TYPE = /^image\/.+$/;

/**
 * Check if the given value is a mime type of image.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
 */
function isImageType(value) {
  return REGEXP_IMAGE_TYPE.test(value);
}

/**
 * Convert image type to extension.
 * @param {string} value - The image type to convert.
 * @param {boolean} [includeDot=true] - Include a leading dot or not.
 * @returns {boolean} Returns the image extension.
 */
function imageTypeToExtension(value) {
  var includeDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var extension = isImageType(value) ? value.substr(6) : '';

  if (extension === 'jpeg') {
    extension = 'jpg';
  }

  if (extension && includeDot) {
    extension = '.' + extension;
  }

  return extension;
}

var fromCharCode = String.fromCharCode;

/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i = void 0;

  length += start;

  for (i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

var _window$1 = window;
var btoa = _window$1.btoa;

/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */

function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var uint8 = new Uint8Array(arrayBuffer);
  var length = uint8.length;

  var data = '';
  var i = void 0;

  // TypedArray.prototype.forEach is not supported in some browsers.
  for (i = 0; i < length; i += 1) {
    data += fromCharCode(uint8[i]);
  }

  return 'data:' + mimeType + ';base64,' + btoa(data);
}

/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation = void 0;
  var littleEndian = void 0;
  var app1Start = void 0;
  var ifdStart = void 0;

  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    var length = dataView.byteLength;
    var offset = 2;

    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }

      offset += 1;
    }
  }

  if (app1Start) {
    var exifIDCode = app1Start + 4;
    var tiffOffset = app1Start + 10;

    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      var endianness = dataView.getUint16(tiffOffset);

      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }

  if (ifdStart) {
    var _length = dataView.getUint16(ifdStart, littleEndian);
    var _offset = void 0;
    var i = void 0;

    for (i = 0; i < _length; i += 1) {
      _offset = ifdStart + i * 12 + 2;

      if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
          // 8 is the offset of the current tag's value
          _offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(_offset, littleEndian);

          // Override the orientation with its default value
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
    }
  }

  return orientation;
}

/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */
function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;

    // Rotate left 180°
    case 3:
      rotate = -180;
      break;

    // Flip vertical
    case 4:
      scaleY = -1;
      break;

    // Flip vertical and rotate right 90°
    case 5:
      rotate = 90;
      scaleY = -1;
      break;

    // Rotate right 90°
    case 6:
      rotate = 90;
      break;

    // Flip horizontal and rotate right 90°
    case 7:
      rotate = 90;
      scaleX = -1;
      break;

    // Rotate left 90°
    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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

var _window = window;
var ArrayBuffer$1 = _window.ArrayBuffer;
var FileReader = _window.FileReader;

var URL = window.URL || window.webkitURL;
var REGEXP_EXTENSION = /\.\w+$/;

/**
 * Creates a new image compressor.
 * @class
 */

var ImageCompressor = function () {
  /**
   * The constructor of ImageCompressor.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   */
  function ImageCompressor(file, options) {
    classCallCheck(this, ImageCompressor);

    this.result = null;

    if (file) {
      this.compress(file, options);
    }
  }

  /**
   * The main compress method.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   * @returns {Promise} - A Promise instance.
   */


  createClass(ImageCompressor, [{
    key: 'compress',
    value: function compress(file, options) {
      var _this = this;

      var image = new Image();

      options = _extends({}, DEFAULTS, options);

      if (!ArrayBuffer$1) {
        options.checkOrientation = false;
      }

      return new Promise(function (resolve, reject) {
        if (!isBlob(file)) {
          reject(new Error('The first argument must be a File or Blob object.'));
          return;
        }

        var mimeType = file.type;

        if (!isImageType(mimeType)) {
          reject(new Error('The first argument must be an image File or Blob object.'));
          return;
        }

        if (!URL && !FileReader) {
          reject(new Error('The current browser does not support image compression.'));
          return;
        }

        if (URL && !options.checkOrientation) {
          resolve(URL.createObjectURL(file));
        } else if (FileReader) {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';

          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;


            resolve(checkOrientation ? _extends({
              url: arrayBufferToDataURL(result, mimeType)
            }, parseOrientation(getOrientation(result))) : {
              url: result
            });
          };
          reader.onabort = reject;
          reader.onerror = reject;

          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }).then(function (data) {
        return new Promise(function (resolve, reject) {
          image.onload = function () {
            return resolve(_extends({}, data, {
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight
            }));
          };
          image.onabort = reject;
          image.onerror = reject;
          image.alt = file.name;
          image.src = data.url;
        });
      }).then(function (_ref2) {
        var naturalWidth = _ref2.naturalWidth,
            naturalHeight = _ref2.naturalHeight,
            _ref2$rotate = _ref2.rotate,
            rotate = _ref2$rotate === undefined ? 0 : _ref2$rotate,
            _ref2$scaleX = _ref2.scaleX,
            scaleX = _ref2$scaleX === undefined ? 1 : _ref2$scaleX,
            _ref2$scaleY = _ref2.scaleY,
            scaleY = _ref2$scaleY === undefined ? 1 : _ref2$scaleY;
        return new Promise(function (resolve) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          var aspectRatio = naturalWidth / naturalHeight;
          var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
          var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
          var minWidth = Math.max(options.minWidth, 0) || 0;
          var minHeight = Math.max(options.minHeight, 0) || 0;
          var width = naturalWidth;
          var height = naturalHeight;

          if (maxWidth < Infinity && maxHeight < Infinity) {
            if (maxHeight * aspectRatio > maxWidth) {
              maxHeight = maxWidth / aspectRatio;
            } else {
              maxWidth = maxHeight * aspectRatio;
            }
          } else if (maxWidth < Infinity) {
            maxHeight = maxWidth / aspectRatio;
          } else if (maxHeight < Infinity) {
            maxWidth = maxHeight * aspectRatio;
          }

          if (minWidth > 0 && minHeight > 0) {
            if (minHeight * aspectRatio > minWidth) {
              minHeight = minWidth / aspectRatio;
            } else {
              minWidth = minHeight * aspectRatio;
            }
          } else if (minWidth > 0) {
            minHeight = minWidth / aspectRatio;
          } else if (minHeight > 0) {
            minWidth = minHeight * aspectRatio;
          }

          if (options.width > 0) {
            var _options = options;
            width = _options.width;

            height = width / aspectRatio;
          } else if (options.height > 0) {
            var _options2 = options;
            height = _options2.height;

            width = height * aspectRatio;
          }

          width = Math.min(Math.max(width, minWidth), maxWidth);
          height = Math.min(Math.max(height, minHeight), maxHeight);

          var destX = -width / 2;
          var destY = -height / 2;
          var destWidth = width;
          var destHeight = height;

          if (Math.abs(rotate) % 180 === 90) {
            var _width$height = {
              width: height,
              height: width
            };
            width = _width$height.width;
            height = _width$height.height;
          }

          canvas.width = width;
          canvas.height = height;

          // Override the default fill color (#000, black)
          context.fillStyle = 'transparent';
          context.fillRect(0, 0, width, height);
          context.save();
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.scale(scaleX, scaleY);
          context.drawImage(image, Math.floor(destX), Math.floor(destY), Math.floor(destWidth), Math.floor(destHeight));
          context.restore();

          if (!isImageType(options.mimeType)) {
            options.mimeType = file.type;
          }

          // Converts PNG files over the `convertSize` to JPEGs.
          if (file.size > options.convertSize && options.mimeType === 'image/png') {
            options.mimeType = 'image/jpeg';
          }

          var done = function done(result) {
            resolve({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          };

          if (canvas.toBlob) {
            canvas.toBlob(done, options.mimeType, options.quality);
          } else {
            done(canvasToBlob(canvas.toDataURL(options.mimeType, options.quality)));
          }
        });
      }).then(function (_ref3) {
        var naturalWidth = _ref3.naturalWidth,
            naturalHeight = _ref3.naturalHeight,
            result = _ref3.result;

        if (URL) {
          URL.revokeObjectURL(image.src);
        }

        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (result.size > file.size && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight)) {
            result = file;
          } else {
            var date = new Date();

            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name;

            // Convert the extension to match its type
            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }

        _this.result = result;

        if (options.success) {
          options.success(result);
        }

        return Promise.resolve(result);
      }).catch(function (err) {
        if (!options.error) {
          throw err;
        }

        options.error(err);
      });
    }
  }]);
  return ImageCompressor;
}();

return ImageCompressor;

})));


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Name: vue-upload-component
 * Version: 2.8.9
 * Author: LianYue
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueUploadComponent = factory());
}(this, (function () { 'use strict';

  /**
   * Creates a XHR request
   *
   * @param {Object} options
   */
  var createRequest = function createRequest(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', options.url);
    xhr.responseType = 'json';
    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }

    return xhr;
  };

  /**
   * Sends a XHR request with certain body
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} body
   */
  var sendRequest = function sendRequest(xhr, body) {
    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }
          resolve(response);
        } else {
          reject(xhr.response);
        }
      };
      xhr.onerror = function () {
        return reject(xhr.response);
      };
      xhr.send(JSON.stringify(body));
    });
  };

  /**
   * Sends a XHR request with certain form data
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} data
   */
  var sendFormRequest = function sendFormRequest(xhr, data) {
    var body = new FormData();
    for (var name in data) {
      body.append(name, data[name]);
    }

    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }
          resolve(response);
        } else {
          reject(xhr.response);
        }
      };
      xhr.onerror = function () {
        return reject(xhr.response);
      };
      xhr.send(body);
    });
  };

  /**
   * Creates and sends XHR request
   *
   * @param {Object} options
   *
   * @returns Promise
   */
  function request (options) {
    var xhr = createRequest(options);

    return sendRequest(xhr, options.body);
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ChunkUploadHandler = function () {
    /**
     * Constructor
     *
     * @param {File} file
     * @param {Object} options
     */
    function ChunkUploadHandler(file, options) {
      _classCallCheck(this, ChunkUploadHandler);

      this.file = file;
      this.options = options;
    }

    /**
     * Gets the max retries from options
     */


    _createClass(ChunkUploadHandler, [{
      key: 'createChunks',


      /**
       * Creates all the chunks in the initial state
       */
      value: function createChunks() {
        this.chunks = [];

        var start = 0;
        var end = this.chunkSize;
        while (start < this.fileSize) {
          this.chunks.push({
            blob: this.file.file.slice(start, end),
            startOffset: start,
            active: false,
            retries: this.maxRetries
          });
          start = end;
          end = start + this.chunkSize;
        }
      }

      /**
       * Updates the progress of the file with the handler's progress
       */

    }, {
      key: 'updateFileProgress',
      value: function updateFileProgress() {
        this.file.progress = this.progress;
      }

      /**
       * Paues the upload process
       * - Stops all active requests
       * - Sets the file not active
       */

    }, {
      key: 'pause',
      value: function pause() {
        this.file.active = false;
        this.stopChunks();
      }

      /**
       * Stops all the current chunks
       */

    }, {
      key: 'stopChunks',
      value: function stopChunks() {
        this.chunksUploading.forEach(function (chunk) {
          chunk.xhr.abort();
          chunk.active = false;
        });
      }

      /**
       * Resumes the file upload
       * - Sets the file active
       * - Starts the following chunks
       */

    }, {
      key: 'resume',
      value: function resume() {
        this.file.active = true;
        this.startChunking();
      }

      /**
       * Starts the file upload
       *
       * @returns Promise
       * - resolve  The file was uploaded
       * - reject   The file upload failed
       */

    }, {
      key: 'upload',
      value: function upload() {
        var _this = this;

        this.promise = new Promise(function (resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
        this.start();

        return this.promise;
      }

      /**
       * Start phase
       * Sends a request to the backend to initialise the chunks
       */

    }, {
      key: 'start',
      value: function start() {
        var _this2 = this;

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.startBody, {
            phase: 'start',
            mime_type: this.fileType,
            size: this.fileSize,
            name: this.fileName
          })
        }).then(function (res) {
          if (res.status !== 'success') {
            _this2.file.response = res;
            return _this2.reject('server');
          }

          _this2.sessionId = res.data.session_id;
          _this2.chunkSize = res.data.end_offset;

          _this2.createChunks();
          _this2.startChunking();
        }).catch(function (res) {
          _this2.file.response = res;
          _this2.reject('server');
        });
      }

      /**
       * Starts to upload chunks
       */

    }, {
      key: 'startChunking',
      value: function startChunking() {
        for (var i = 0; i < this.maxActiveChunks; i++) {
          this.uploadNextChunk();
        }
      }

      /**
       * Uploads the next chunk
       * - Won't do anything if the process is paused
       * - Will start finish phase if there are no more chunks to upload
       */

    }, {
      key: 'uploadNextChunk',
      value: function uploadNextChunk() {
        if (this.file.active) {
          if (this.hasChunksToUpload) {
            return this.uploadChunk(this.chunksToUpload[0]);
          }

          if (this.chunksUploading.length === 0) {
            return this.finish();
          }
        }
      }

      /**
       * Uploads a chunk
       * - Sends the chunk to the backend
       * - Sets the chunk as uploaded if everything went well
       * - Decreases the number of retries if anything went wrong
       * - Fails if there are no more retries
       *
       * @param {Object} chunk
       */

    }, {
      key: 'uploadChunk',
      value: function uploadChunk(chunk) {
        var _this3 = this;

        chunk.progress = 0;
        chunk.active = true;
        this.updateFileProgress();
        chunk.xhr = createRequest({
          method: 'POST',
          headers: this.headers,
          url: this.action
        });

        chunk.xhr.upload.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            chunk.progress = Math.round(evt.loaded / evt.total * 100);
          }
        }, false);

        sendFormRequest(chunk.xhr, Object.assign(this.uploadBody, {
          phase: 'upload',
          session_id: this.sessionId,
          start_offset: chunk.startOffset,
          chunk: chunk.blob
        })).then(function (res) {
          chunk.active = false;
          if (res.status === 'success') {
            chunk.uploaded = true;
          } else {
            if (chunk.retries-- <= 0) {
              _this3.stopChunks();
              return _this3.reject('upload');
            }
          }

          _this3.uploadNextChunk();
        }).catch(function () {
          chunk.active = false;
          if (chunk.retries-- <= 0) {
            _this3.stopChunks();
            return _this3.reject('upload');
          }

          _this3.uploadNextChunk();
        });
      }

      /**
       * Finish phase
       * Sends a request to the backend to finish the process
       */

    }, {
      key: 'finish',
      value: function finish() {
        var _this4 = this;

        this.updateFileProgress();

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.finishBody, {
            phase: 'finish',
            session_id: this.sessionId
          })
        }).then(function (res) {
          _this4.file.response = res;
          if (res.status !== 'success') {
            return _this4.reject('server');
          }

          _this4.resolve(res);
        }).catch(function (res) {
          _this4.file.response = res;
          _this4.reject('server');
        });
      }
    }, {
      key: 'maxRetries',
      get: function get() {
        return parseInt(this.options.maxRetries);
      }

      /**
       * Gets the max number of active chunks being uploaded at once from options
       */

    }, {
      key: 'maxActiveChunks',
      get: function get() {
        return parseInt(this.options.maxActive);
      }

      /**
       * Gets the file type
       */

    }, {
      key: 'fileType',
      get: function get() {
        return this.file.type;
      }

      /**
       * Gets the file size
       */

    }, {
      key: 'fileSize',
      get: function get() {
        return this.file.size;
      }

      /**
       * Gets the file size
       */

    }, {
      key: 'fileName',
      get: function get() {
        return this.file.name;
      }

      /**
       * Gets action (url) to upload the file
       */

    }, {
      key: 'action',
      get: function get() {
        return this.options.action || null;
      }

      /**
       * Gets the body to be merged when sending the request in start phase
       */

    }, {
      key: 'startBody',
      get: function get() {
        return this.options.startBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in upload phase
       */

    }, {
      key: 'uploadBody',
      get: function get() {
        return this.options.uploadBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in finish phase
       */

    }, {
      key: 'finishBody',
      get: function get() {
        return this.options.finishBody || {};
      }

      /**
       * Gets the headers of the requests from options
       */

    }, {
      key: 'headers',
      get: function get() {
        return this.options.headers || {};
      }

      /**
       * Whether it's ready to upload files or not
       */

    }, {
      key: 'readyToUpload',
      get: function get() {
        return !!this.chunks;
      }

      /**
       * Gets the progress of the chunk upload
       * - Gets all the completed chunks
       * - Gets the progress of all the chunks that are being uploaded
       */

    }, {
      key: 'progress',
      get: function get() {
        var _this5 = this;

        var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
        var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
          return progress + (chunk.progress | 0) / _this5.chunks.length;
        }, 0);

        return Math.min(completedProgress + uploadingProgress, 100);
      }

      /**
       * Gets all the chunks that are pending to be uploaded
       */

    }, {
      key: 'chunksToUpload',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !chunk.active && !chunk.uploaded;
        });
      }

      /**
       * Whether there are chunks to upload or not
       */

    }, {
      key: 'hasChunksToUpload',
      get: function get() {
        return this.chunksToUpload.length > 0;
      }

      /**
       * Gets all the chunks that are uploading
       */

    }, {
      key: 'chunksUploading',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.xhr && !!chunk.active;
        });
      }

      /**
       * Gets all the chunks that have finished uploading
       */

    }, {
      key: 'chunksUploaded',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.uploaded;
        });
      }
    }]);

    return ChunkUploadHandler;
  }();

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    methods: {
      change: function change(e) {
        this.$destroy();
        this.$parent.addInputFile(e.target);
        // eslint-disable-next-line
        new this.constructor({
          parent: this.$parent,
          el: this.$el
        });
      }
    }
  };

  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { attrs: { "type": "file", "name": _vm.$parent.name, "id": _vm.$parent.inputId || _vm.$parent.name, "accept": _vm.$parent.accept, "capture": _vm.$parent.capture, "webkitdirectory": _vm.$parent.directory && _vm.$parent.features.directory, "directory": _vm.$parent.directory && _vm.$parent.features.directory, "multiple": _vm.$parent.multiple && _vm.$parent.features.html5 }, on: { "change": _vm.change } });
  };
  var __vue_staticRenderFns__ = [];

  var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = script$$1 || {};

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var InputFile = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var CHUNK_DEFAULT_OPTIONS = {
    headers: {},
    action: '',
    minSize: 1048576,
    maxActive: 3,
    maxRetries: 5,

    handler: ChunkUploadHandler
  };

  var script$1 = {
    components: {
      InputFile: InputFile
    },
    props: {
      inputId: {
        type: String
      },

      name: {
        type: String,
        default: 'file'
      },

      accept: {
        type: String
      },

      capture: {},

      multiple: {
        type: Boolean
      },

      maximum: {
        type: Number,
        default: function _default() {
          return this.multiple ? 0 : 1;
        }
      },

      addIndex: {
        type: [Boolean, Number]
      },

      directory: {
        type: Boolean
      },

      postAction: {
        type: String
      },

      putAction: {
        type: String
      },

      customAction: {
        type: Function
      },

      headers: {
        type: Object,
        default: Object
      },

      data: {
        type: Object,
        default: Object
      },

      timeout: {
        type: Number,
        default: 0
      },

      drop: {
        default: false
      },

      dropDirectory: {
        type: Boolean,
        default: true
      },

      size: {
        type: Number,
        default: 0
      },

      extensions: {
        default: Array
      },

      value: {
        type: Array,
        default: Array
      },

      thread: {
        type: Number,
        default: 1
      },

      // Chunk upload enabled
      chunkEnabled: {
        type: Boolean,
        default: false
      },

      // Chunk upload properties
      chunk: {
        type: Object,
        default: function _default() {
          return CHUNK_DEFAULT_OPTIONS;
        }
      }
    },

    data: function data() {
      return {
        files: this.value,
        features: {
          html5: true,
          directory: false,
          drag: false
        },

        active: false,
        dropActive: false,

        uploading: 0,

        destroy: false
      };
    },


    /**
     * mounted
     * @return {[type]} [description]
     */
    mounted: function mounted() {
      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;

      // html5 特征
      if (window.FormData && input.files) {
        // 上传目录特征
        if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
          this.features.directory = true;
        }

        // 拖拽特征
        if (this.features.html5 && typeof input.ondrop !== 'undefined') {
          this.features.drop = true;
        }
      } else {
        this.features.html5 = false;
      }

      // files 定位缓存
      this.maps = {};

      this.$nextTick(function () {

        // 更新下父级
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }

        // 拖拽渲染
        this.watchDrop(this.drop);
      });
    },


    /**
     * beforeDestroy
     * @return {[type]} [description]
     */
    beforeDestroy: function beforeDestroy() {
      // 已销毁
      this.destroy = true;

      // 设置成不激活
      this.active = false;
    },


    computed: {
      /**
       * uploading 正在上传的线程
       * @return {[type]} [description]
       */

      /**
       * uploaded 文件列表是否全部已上传
       * @return {[type]} [description]
       */
      uploaded: function uploaded() {
        var file = void 0;
        for (var i = 0; i < this.files.length; i++) {
          file = this.files[i];
          if (file.fileObject && !file.error && !file.success) {
            return false;
          }
        }
        return true;
      },
      chunkOptions: function chunkOptions() {
        return Object.assign(CHUNK_DEFAULT_OPTIONS, this.chunk);
      },
      className: function className() {
        return ['file-uploads', this.features.html5 ? 'file-uploads-html5' : 'file-uploads-html4', this.features.directory && this.directory ? 'file-uploads-directory' : undefined, this.features.drop && this.drop ? 'file-uploads-drop' : undefined];
      }
    },

    watch: {
      active: function active(_active) {
        this.watchActive(_active);
      },
      dropActive: function dropActive() {
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }
      },
      drop: function drop(value) {
        this.watchDrop(value);
      },
      value: function value(files) {
        if (this.files === files) {
          return;
        }
        this.files = files;

        var oldMaps = this.maps;

        // 重写 maps 缓存
        this.maps = {};
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }

        // add, update
        for (var key in this.maps) {
          var newFile = this.maps[key];
          var oldFile = oldMaps[key];
          if (newFile !== oldFile) {
            this.emitFile(newFile, oldFile);
          }
        }

        // delete
        for (var _key in oldMaps) {
          if (!this.maps[_key]) {
            this.emitFile(undefined, oldMaps[_key]);
          }
        }
      }
    },

    methods: {

      // 清空
      clear: function clear() {
        if (this.files.length) {
          var files = this.files;
          this.files = [];

          // 定位
          this.maps = {};

          // 事件
          this.emitInput();
          for (var i = 0; i < files.length; i++) {
            this.emitFile(undefined, files[i]);
          }
        }
        return true;
      },


      // 选择
      get: function get(id) {
        if (!id) {
          return false;
        }

        if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
          return this.maps[id.id] || false;
        }

        return this.maps[id] || false;
      },


      // 添加
      add: function add(_files) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.addIndex;

        var files = _files;
        var isArray = files instanceof Array;

        // 不是数组整理成数组
        if (!isArray) {
          files = [files];
        }

        // 遍历规范对象
        var addFiles = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (this.features.html5 && file instanceof Blob) {
            file = {
              file: file,
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
              type: file.type
            };
          }
          var fileObject = false;
          if (file.fileObject === false) ; else if (file.fileObject) {
            fileObject = true;
          } else if (typeof Element !== 'undefined' && file.el instanceof Element) {
            fileObject = true;
          } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
            fileObject = true;
          }
          if (fileObject) {
            file = _extends({
              fileObject: true,
              size: -1,
              name: 'Filename',
              type: '',
              active: false,
              error: '',
              success: false,
              putAction: this.putAction,
              postAction: this.postAction,
              timeout: this.timeout
            }, file, {
              response: {},

              progress: '0.00', // 只读
              speed: 0 // 只读
              // xhr: false,                // 只读
              // iframe: false,             // 只读
            });

            file.data = _extends({}, this.data, file.data ? file.data : {});

            file.headers = _extends({}, this.headers, file.headers ? file.headers : {});
          }

          // 必须包含 id
          if (!file.id) {
            file.id = Math.random().toString(36).substr(2);
          }

          if (this.emitFilter(file, undefined)) {
            continue;
          }

          // 最大数量限制
          if (this.maximum > 1 && addFiles.length + this.files.length >= this.maximum) {
            break;
          }

          addFiles.push(file);

          // 最大数量限制
          if (this.maximum === 1) {
            break;
          }
        }

        // 没有文件
        if (!addFiles.length) {
          return false;
        }

        // 如果是 1 清空
        if (this.maximum === 1) {
          this.clear();
        }

        // 添加进去 files
        var newFiles = void 0;
        if (index === true || index === 0) {
          newFiles = addFiles.concat(this.files);
        } else if (index) {
          newFiles = addFiles.concat([]);
          newFiles.splice(index, 0, addFiles);
        } else {
          newFiles = this.files.concat(addFiles);
        }

        this.files = newFiles;

        // 定位
        for (var _i = 0; _i < addFiles.length; _i++) {
          var _file2 = addFiles[_i];
          this.maps[_file2.id] = _file2;
        }

        // 事件
        this.emitInput();
        for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
          this.emitFile(addFiles[_i2], undefined);
        }

        return isArray ? addFiles : addFiles[0];
      },


      // 添加表单文件
      addInputFile: function addInputFile(el) {
        var files = [];
        if (el.files) {
          for (var i = 0; i < el.files.length; i++) {
            var file = el.files[i];
            files.push({
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name,
              type: file.type,
              file: file,
              el: el
            });
          }
        } else {
          var names = el.value.replace(/\\/g, '/').split('/');
          files.push({
            name: names[names.length - 1],
            el: el
          });
        }
        return this.add(files);
      },


      // 添加 DataTransfer
      addDataTransfer: function addDataTransfer(dataTransfer) {
        var _this = this;

        var files = [];
        if (dataTransfer.items && dataTransfer.items.length) {
          var items = [];
          for (var i = 0; i < dataTransfer.items.length; i++) {
            var item = dataTransfer.items[i];
            if (item.getAsEntry) {
              item = item.getAsEntry() || item.getAsFile();
            } else if (item.webkitGetAsEntry) {
              item = item.webkitGetAsEntry() || item.getAsFile();
            } else {
              item = item.getAsFile();
            }
            if (item) {
              items.push(item);
            }
          }

          return new Promise(function (resolve, reject) {
            var forEach = function forEach(i) {
              var item = items[i];
              // 结束 文件数量大于 最大数量
              if (!item || _this.maximum > 0 && files.length >= _this.maximum) {
                return resolve(_this.add(files));
              }
              _this.getEntry(item).then(function (results) {
                files.push.apply(files, _toConsumableArray(results));
                forEach(i + 1);
              });
            };
            forEach(0);
          });
        }

        if (dataTransfer.files.length) {
          for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
            files.push(dataTransfer.files[_i3]);
            if (this.maximum > 0 && files.length >= this.maximum) {
              break;
            }
          }
          return Promise.resolve(this.add(files));
        }

        return Promise.resolve([]);
      },


      // 获得 entry
      getEntry: function getEntry(entry) {
        var _this2 = this;

        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return new Promise(function (resolve, reject) {
          if (entry.isFile) {
            entry.file(function (file) {
              resolve([{
                size: file.size,
                name: path + file.name,
                type: file.type,
                file: file
              }]);
            });
          } else if (entry.isDirectory && _this2.dropDirectory) {
            var files = [];
            var dirReader = entry.createReader();
            var readEntries = function readEntries() {
              dirReader.readEntries(function (entries) {
                var forEach = function forEach(i) {
                  if (!entries[i] && i === 0 || _this2.maximum > 0 && files.length >= _this2.maximum) {
                    return resolve(files);
                  }
                  if (!entries[i]) {
                    return readEntries();
                  }
                  _this2.getEntry(entries[i], path + entry.name + '/').then(function (results) {
                    files.push.apply(files, _toConsumableArray(results));
                    forEach(i + 1);
                  });
                };
                forEach(0);
              });
            };
            readEntries();
          } else {
            resolve([]);
          }
        });
      },
      replace: function replace(id1, id2) {
        var file1 = this.get(id1);
        var file2 = this.get(id2);
        if (!file1 || !file2 || file1 === file2) {
          return false;
        }
        var files = this.files.concat([]);
        var index1 = files.indexOf(file1);
        var index2 = files.indexOf(file2);
        if (index1 === -1 || index2 === -1) {
          return false;
        }
        files[index1] = file2;
        files[index2] = file1;
        this.files = files;
        this.emitInput();
        return true;
      },


      // 移除
      remove: function remove(id) {
        var file = this.get(id);
        if (file) {
          if (this.emitFilter(undefined, file)) {
            return false;
          }
          var files = this.files.concat([]);
          var index = files.indexOf(file);
          if (index === -1) {
            console.error('remove', file);
            return false;
          }
          files.splice(index, 1);
          this.files = files;

          // 定位
          delete this.maps[file.id];

          // 事件
          this.emitInput();
          this.emitFile(undefined, file);
        }
        return file;
      },


      // 更新
      update: function update(id, data) {
        var file = this.get(id);
        if (file) {
          var newFile = _extends({}, file, data);
          // 停用必须加上错误
          if (file.fileObject && file.active && !newFile.active && !newFile.error && !newFile.success) {
            newFile.error = 'abort';
          }

          if (this.emitFilter(newFile, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);
          if (index === -1) {
            console.error('update', file);
            return false;
          }
          files.splice(index, 1, newFile);
          this.files = files;

          // 删除  旧定位 写入 新定位 （已便支持修改id)
          delete this.maps[file.id];
          this.maps[newFile.id] = newFile;

          // 事件
          this.emitInput();
          this.emitFile(newFile, file);
          return newFile;
        }
        return false;
      },


      // 预处理 事件 过滤器
      emitFilter: function emitFilter(newFile, oldFile) {
        var isPrevent = false;
        this.$emit('input-filter', newFile, oldFile, function () {
          isPrevent = true;
          return isPrevent;
        });
        return isPrevent;
      },


      // 处理后 事件 分发
      emitFile: function emitFile(newFile, oldFile) {
        this.$emit('input-file', newFile, oldFile);
        if (newFile && newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
          this.uploading++;
          // 激活
          this.$nextTick(function () {
            var _this3 = this;

            setTimeout(function () {
              _this3.upload(newFile).then(function () {
                // eslint-disable-next-line
                newFile = _this3.get(newFile);
                if (newFile && newFile.fileObject) {
                  _this3.update(newFile, {
                    active: false,
                    success: !newFile.error
                  });
                }
              }).catch(function (e) {
                _this3.update(newFile, {
                  active: false,
                  success: false,
                  error: e.code || e.error || e.message || e
                });
              });
            }, parseInt(Math.random() * 50 + 50, 10));
          });
        } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
          // 停止
          this.uploading--;
        }

        // 自动延续激活
        if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
          this.watchActive(true);
        }
      },
      emitInput: function emitInput() {
        this.$emit('input', this.files);
      },


      // 上传
      upload: function upload(id) {
        var file = this.get(id);

        // 被删除
        if (!file) {
          return Promise.reject('not_exists');
        }

        // 不是文件对象
        if (!file.fileObject) {
          return Promise.reject('file_object');
        }

        // 有错误直接响应
        if (file.error) {
          return Promise.reject(file.error);
        }

        // 已完成直接响应
        if (file.success) {
          return Promise.resolve(file);
        }

        // 后缀
        var extensions = this.extensions;
        if (extensions && (extensions.length || typeof extensions.length === 'undefined')) {
          if ((typeof extensions === 'undefined' ? 'undefined' : _typeof(extensions)) !== 'object' || !(extensions instanceof RegExp)) {
            if (typeof extensions === 'string') {
              extensions = extensions.split(',').map(function (value) {
                return value.trim();
              }).filter(function (value) {
                return value;
              });
            }
            extensions = new RegExp('\\.(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');
          }
          if (file.name.search(extensions) === -1) {
            return Promise.reject('extension');
          }
        }

        // 大小
        if (this.size > 0 && file.size >= 0 && file.size > this.size) {
          return Promise.reject('size');
        }

        if (this.customAction) {
          return this.customAction(file, this);
        }

        if (this.features.html5) {
          if (this.shouldUseChunkUpload(file)) {
            return this.uploadChunk(file);
          }
          if (file.putAction) {
            return this.uploadPut(file);
          }
          if (file.postAction) {
            return this.uploadHtml5(file);
          }
        }
        if (file.postAction) {
          return this.uploadHtml4(file);
        }
        return Promise.reject('No action configured');
      },


      /**
       * Whether this file should be uploaded using chunk upload or not
       *
       * @param Object file
       */
      shouldUseChunkUpload: function shouldUseChunkUpload(file) {
        return this.chunkEnabled && !!this.chunkOptions.handler && file.size > this.chunkOptions.minSize;
      },


      /**
       * Upload a file using Chunk method
       *
       * @param File file
       */
      uploadChunk: function uploadChunk(file) {
        var HandlerClass = this.chunkOptions.handler;
        file.chunk = new HandlerClass(file, this.chunkOptions);

        return file.chunk.upload();
      },
      uploadPut: function uploadPut(file) {
        var querys = [];
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value !== null && value !== undefined) {
            querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }
        var queryString = querys.length ? (file.putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', file.putAction + queryString);
        return this.uploadXhr(xhr, file, file.file);
      },
      uploadHtml5: function uploadHtml5(file) {
        var form = new window.FormData();
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            if (value instanceof File) {
              form.append(key, value, value.name);
            } else {
              form.append(key, JSON.stringify(value));
            }
          } else if (value !== null && value !== undefined) {
            form.append(key, value);
          }
        }
        form.append(this.name, file.file, file.file.filename || file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', file.postAction);
        return this.uploadXhr(xhr, file, form);
      },
      uploadXhr: function uploadXhr(xhr, _file, body) {
        var _this4 = this;

        var file = _file;
        var speedTime = 0;
        var speedLoaded = 0;

        // 进度条
        xhr.upload.onprogress = function (e) {
          // 还未开始上传 已删除 未激活
          file = _this4.get(file);
          if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
            return;
          }

          // 进度 速度 每秒更新一次
          var speedTime2 = Math.round(Date.now() / 1000);
          if (speedTime2 === speedTime) {
            return;
          }
          speedTime = speedTime2;

          file = _this4.update(file, {
            progress: (e.loaded / e.total * 100).toFixed(2),
            speed: e.loaded - speedLoaded
          });
          speedLoaded = e.loaded;
        };

        // 检查激活状态
        var interval = setInterval(function () {
          file = _this4.get(file);
          if (file && file.fileObject && !file.success && !file.error && file.active) {
            return;
          }

          if (interval) {
            clearInterval(interval);
            interval = false;
          }

          try {
            xhr.abort();
            xhr.timeout = 1;
          } catch (e) {}
        }, 100);

        return new Promise(function (resolve, reject) {
          var complete = void 0;
          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }
            complete = true;
            if (interval) {
              clearInterval(interval);
              interval = false;
            }

            file = _this4.get(file);

            // 不存在直接响应
            if (!file) {
              return reject('not_exists');
            }

            // 不是文件对象
            if (!file.fileObject) {
              return reject('file_object');
            }

            // 有错误自动响应
            if (file.error) {
              return reject(file.error);
            }

            // 未激活
            if (!file.active) {
              return reject('abort');
            }

            // 已完成 直接相应
            if (file.success) {
              return resolve(file);
            }

            var data = {};

            switch (e.type) {
              case 'timeout':
              case 'abort':
                data.error = e.type;
                break;
              case 'error':
                if (!xhr.status) {
                  data.error = 'network';
                } else if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                }
                break;
              default:
                if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                } else {
                  data.progress = '100.00';
                }
            }

            if (xhr.responseText) {
              var contentType = xhr.getResponseHeader('Content-Type');
              if (contentType && contentType.indexOf('/json') !== -1) {
                data.response = JSON.parse(xhr.responseText);
              } else {
                data.response = xhr.responseText;
              }
            }

            // 更新
            file = _this4.update(file, data);

            // 相应错误
            if (file.error) {
              return reject(file.error);
            }

            // 响应
            return resolve(file);
          };

          // 事件
          xhr.onload = fn;
          xhr.onerror = fn;
          xhr.onabort = fn;
          xhr.ontimeout = fn;

          // 超时
          if (file.timeout) {
            xhr.timeout = file.timeout;
          }

          // headers
          for (var key in file.headers) {
            xhr.setRequestHeader(key, file.headers[key]);
          }

          // 更新 xhr
          file = _this4.update(file, { xhr: xhr });

          // 开始上传
          xhr.send(body);
        });
      },
      uploadHtml4: function uploadHtml4(_file) {
        var _this5 = this;

        var file = _file;
        var onKeydown = function onKeydown(e) {
          if (e.keyCode === 27) {
            e.preventDefault();
          }
        };

        var iframe = document.createElement('iframe');
        iframe.id = 'upload-iframe-' + file.id;
        iframe.name = 'upload-iframe-' + file.id;
        iframe.src = 'about:blank';
        iframe.setAttribute('style', 'width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;');

        var form = document.createElement('form');

        form.action = file.postAction;

        form.name = 'upload-form-' + file.id;

        form.setAttribute('method', 'POST');
        form.setAttribute('target', 'upload-iframe-' + file.id);
        form.setAttribute('enctype', 'multipart/form-data');

        var value = void 0;
        var input = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            value = JSON.stringify(value);
          }
          if (value !== null && value !== undefined) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
          }
        }
        form.appendChild(file.el);

        document.body.appendChild(iframe).appendChild(form);

        var getResponseData = function getResponseData() {
          var doc = void 0;
          try {
            if (iframe.contentWindow) {
              doc = iframe.contentWindow.document;
            }
          } catch (err) {}
          if (!doc) {
            try {
              doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
            } catch (err) {
              doc = iframe.document;
            }
          }
          if (doc && doc.body) {
            return doc.body.innerHTML;
          }
          return null;
        };

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            file = _this5.update(file, { iframe: iframe });

            // 不存在
            if (!file) {
              return reject('not_exists');
            }

            // 定时检查
            var interval = setInterval(function () {
              file = _this5.get(file);
              if (file && file.fileObject && !file.success && !file.error && file.active) {
                return;
              }

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              iframe.onabort({ type: file ? 'abort' : 'not_exists' });
            }, 100);

            var complete = void 0;
            var fn = function fn(e) {
              // 已经处理过了
              if (complete) {
                return;
              }
              complete = true;

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              // 关闭 esc 事件
              document.body.removeEventListener('keydown', onKeydown);

              file = _this5.get(file);

              // 不存在直接响应
              if (!file) {
                return reject('not_exists');
              }

              // 不是文件对象
              if (!file.fileObject) {
                return reject('file_object');
              }

              // 有错误自动响应
              if (file.error) {
                return reject(file.error);
              }

              // 未激活
              if (!file.active) {
                return reject('abort');
              }

              // 已完成 直接相应
              if (file.success) {
                return resolve(file);
              }

              var response = getResponseData();
              var data = {};
              switch (e.type) {
                case 'abort':
                  data.error = 'abort';
                  break;
                case 'error':
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.error = 'denied';
                  }
                  break;
                default:
                  if (file.error) {
                    data.error = file.error;
                  } else if (data === null) {
                    data.error = 'network';
                  } else {
                    data.progress = '100.00';
                  }
              }

              if (response !== null) {
                if (response && response.substr(0, 1) === '{' && response.substr(response.length - 1, 1) === '}') {
                  try {
                    response = JSON.parse(response);
                  } catch (err) {}
                }
                data.response = response;
              }

              // 更新
              file = _this5.update(file, data);

              if (file.error) {
                return reject(file.error);
              }

              // 响应
              return resolve(file);
            };

            // 添加事件
            iframe.onload = fn;
            iframe.onerror = fn;
            iframe.onabort = fn;

            // 禁止 esc 键
            document.body.addEventListener('keydown', onKeydown);

            // 提交
            form.submit();
          }, 50);
        }).then(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        }).catch(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        });
      },
      watchActive: function watchActive(active) {
        var file = void 0;
        var index = 0;
        while (file = this.files[index]) {
          index++;
          if (!file.fileObject) ; else if (active && !this.destroy) {
            if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
              break;
            }
            if (!file.active && !file.error && !file.success) {
              this.update(file, { active: true });
            }
          } else {
            if (file.active) {
              this.update(file, { active: false });
            }
          }
        }
        if (this.uploading === 0) {
          this.active = false;
        }
      },
      watchDrop: function watchDrop(_el) {
        var el = _el;
        if (!this.features.drop) {
          return;
        }

        // 移除挂载
        if (this.dropElement) {
          try {
            document.removeEventListener('dragenter', this.onDragenter, false);
            document.removeEventListener('dragleave', this.onDragleave, false);
            document.removeEventListener('drop', this.onDocumentDrop, false);
            this.dropElement.removeEventListener('dragover', this.onDragover, false);
            this.dropElement.removeEventListener('drop', this.onDrop, false);
          } catch (e) {}
        }

        if (!el) {
          el = false;
        } else if (typeof el === 'string') {
          el = document.querySelector(el) || this.$root.$el.querySelector(el);
        } else if (el === true) {
          el = this.$parent.$el;
        }

        this.dropElement = el;

        if (this.dropElement) {
          document.addEventListener('dragenter', this.onDragenter, false);
          document.addEventListener('dragleave', this.onDragleave, false);
          document.addEventListener('drop', this.onDocumentDrop, false);
          this.dropElement.addEventListener('dragover', this.onDragover, false);
          this.dropElement.addEventListener('drop', this.onDrop, false);
        }
      },
      onDragenter: function onDragenter(e) {
        e.preventDefault();
        if (!this.dropActive) {
          this.dropActive = true;
        }
      },
      onDragleave: function onDragleave(e) {
        e.preventDefault();
        if (e.target.nodeName === 'HTML' || e.target === e.explicitOriginalTarget || e.screenX === 0 && e.screenY === 0 && !e.fromElement && e.offsetX <= 0) {
          this.dropActive = false;
        }
      },
      onDragover: function onDragover(e) {
        e.preventDefault();
      },
      onDocumentDrop: function onDocumentDrop() {
        this.dropActive = false;
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        this.addDataTransfer(e.dataTransfer);
      }
    }
  };

  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.className }, [_vm._t("default"), _vm._v(" "), _c('input-file')], 2);
  };
  var __vue_staticRenderFns__$1 = [];

  var __vue_template__$1 = typeof __vue_render__$1 !== 'undefined' ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 } : {};
  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) return;
    inject("data-v-00c97c04_0", { source: "\n.file-uploads{overflow:hidden;position:relative;text-align:center;display:inline-block\n}\n.file-uploads.file-uploads-html4 input[type=file]{opacity:0;font-size:20em;z-index:1;top:0;left:0;right:0;bottom:0;position:absolute;width:100%;height:100%\n}\n.file-uploads.file-uploads-html5 input[type=file]{overflow:hidden;position:fixed;width:1px;height:1px;z-index:-1;opacity:0\n}", map: undefined, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = script || {};

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook = void 0;
      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var FileUpload = __vue_normalize__$1(__vue_template__$1, __vue_inject_styles__$1, typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  var FileUpload$1 = /*#__PURE__*/Object.freeze({
    default: FileUpload
  });

  var require$$0 = ( FileUpload$1 && FileUpload ) || FileUpload$1;

  var src = require$$0;

  return src;

})));


/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          !_vm.isOption
            ? _c(
                "file-upload",
                {
                  ref: "upload",
                  staticClass:
                    "v-btn v-btn--flat theme--dark blue--text mx-5 py-2",
                  staticStyle: { cursor: "pointer" },
                  attrs: {
                    "post-action": _vm.postAction,
                    "put-action": _vm.putAction,
                    name: _vm.fileKey,
                    extensions: _vm.extensions,
                    accept: _vm.accept,
                    multiple: _vm.multiple,
                    directory: _vm.directory,
                    size: _vm.size || 0,
                    thread:
                      _vm.thread < 1 ? 1 : _vm.thread > 5 ? 5 : _vm.thread,
                    headers: _vm.headers,
                    data: _vm.data,
                    drop: _vm.drop,
                    "drop-directory": _vm.dropDirectory,
                    "add-index": _vm.addIndex
                  },
                  on: {
                    "input-filter": _vm.inputFilter,
                    "input-file": _vm.inputFile
                  },
                  model: {
                    value: _vm.files,
                    callback: function($$v) {
                      _vm.files = $$v
                    },
                    expression: "files"
                  }
                },
                [_vm._v("\n      Choose Files\n    ")]
              )
            : _c(
                "v-btn",
                {
                  attrs: { flat: "", icon: "", color: "red darken-4" },
                  nativeOn: {
                    click: function($event) {
                      _vm.isOption = !_vm.isOption
                    }
                  }
                },
                [_c("v-icon", [_vm._v("arrow_back")])],
                1
              ),
          _vm._v(" "),
          !_vm.isOption
            ? _c(
                "v-btn",
                {
                  attrs: { flat: "", icon: "", color: "amber lighten-2" },
                  nativeOn: {
                    click: function($event) {
                      _vm.isOption = !_vm.isOption
                    }
                  }
                },
                [_c("v-icon", [_vm._v("fa-cog")])],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      !_vm.isOption
        ? _c("v-data-table", {
            attrs: {
              headers: _vm.th,
              items: _vm.files,
              light: true,
              "rows-per-page-items": _vm.perPageData,
              "no-data-text": "Click `Choose Files` Button To Upload Files."
            },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c(
                      "td",
                      { staticClass: "title text-xs-left primary--text" },
                      [
                        props.item.thumb
                          ? _c("img", {
                              attrs: {
                                src: props.item.thumb,
                                width: "40",
                                height: "auto"
                              }
                            })
                          : _c("span", [_vm._v("No Image")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "title text-xs-left primary--text" },
                      [
                        _c(
                          "v-edit-dialog",
                          { attrs: { large: "", lazy: "" } },
                          [
                            _c("span", { staticClass: "primary--text" }, [
                              _vm._v(
                                _vm._s(_vm._f("truncate")(props.item.name, 20))
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mt-3 text-xs-center title primary--text",
                                attrs: { slot: "input" },
                                slot: "input"
                              },
                              [_vm._v("\n            Update Name\n          ")]
                            ),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                slot: "input",
                                rules: [_vm.maxInput],
                                label: "Edit",
                                "single-line": "",
                                counter: "",
                                autofocus: ""
                              },
                              slot: "input",
                              model: {
                                value: props.item.name,
                                callback: function($$v) {
                                  _vm.$set(props.item, "name", $$v)
                                },
                                expression: "props.item.name"
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
                      "td",
                      { staticClass: "title text-xs-left primary--text" },
                      [_vm._v(_vm._s(_vm._f("formatSize")(props.item.size)))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "title text-xs-left primary--text" },
                      [
                        props.item.active || props.item.progress !== "0.00"
                          ? _c(
                              "v-progress-circular",
                              {
                                attrs: {
                                  size: 45,
                                  width: 5,
                                  rotate: 360,
                                  value: _vm.progress(props.item.progress),
                                  color: "teal"
                                }
                              },
                              [
                                _c("span", { staticClass: "caption" }, [
                                  _vm._v(
                                    _vm._s(_vm.progress(props.item.progress))
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    props.item.error
                      ? _c(
                          "td",
                          { staticClass: "title text-xs-left primary--text" },
                          [
                            _vm._v(
                              "\n        " +
                                _vm._s(props.item.error) +
                                "\n      "
                            )
                          ]
                        )
                      : props.item.success
                        ? _c(
                            "td",
                            { staticClass: "title text-xs-left primary--text" },
                            [_vm._v("\n        success\n      ")]
                          )
                        : props.item.active
                          ? _c(
                              "td",
                              {
                                staticClass: "title text-xs-left primary--text"
                              },
                              [_vm._v("\n        active\n      ")]
                            )
                          : _c("td", {
                              staticClass: "title text-xs-left primary--text"
                            }),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "title text-xs-center primary--text" },
                      [
                        props.item.active
                          ? _c(
                              "v-btn",
                              {
                                attrs: {
                                  flat: "",
                                  icon: "",
                                  color: "red darken-4"
                                },
                                nativeOn: {
                                  click: function($event) {
                                    props.item.active
                                      ? _vm.$refs.upload.update(props.item, {
                                          error: "cancel"
                                        })
                                      : false
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("fa-times")])],
                              1
                            )
                          : props.item.error &&
                            props.item.error !== "compressing" &&
                            _vm.$refs.upload.features.html5
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { flat: "", icon: "", color: "info" },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.$refs.upload.update(props.item, {
                                        active: true,
                                        error: "",
                                        progress: "0.00"
                                      })
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("fa-refresh")])],
                                1
                              )
                            : _c(
                                "v-btn",
                                {
                                  attrs: { flat: "", icon: "", color: "blue" },
                                  nativeOn: {
                                    click: function($event) {
                                      props.item.success ||
                                      props.item.error === "compressing"
                                        ? false
                                        : _vm.$refs.upload.update(props.item, {
                                            active: true
                                          })
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("fa-upload")])],
                                1
                              ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              flat: "",
                              icon: "",
                              color: "red lighten-2"
                            },
                            nativeOn: {
                              click: function($event) {
                                _vm.remove(props.item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("fa-trash")])],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isOption
        ? _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { sm12: "", md6: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.files.length > 0,
                          expression: "files.length > 0"
                        }
                      ],
                      attrs: {
                        dark: "",
                        block: "",
                        flat: "",
                        color: "teal lighten-2"
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.$refs.upload.active = true
                        }
                      }
                    },
                    [
                      _vm._v("\n        Start Upload \n        "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("\n          play_arrow\n        ")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "", md6: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.$refs.upload && _vm.$refs.upload.active,
                          expression: "$refs.upload && $refs.upload.active"
                        }
                      ],
                      attrs: { dark: "", block: "", flat: "", color: "error" },
                      nativeOn: {
                        click: function($event) {
                          _vm.$refs.upload.active = false
                        }
                      }
                    },
                    [
                      _vm._v("\n        Stop Upload \n        "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("\n          stop\n        ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$refs.upload &&
                  !_vm.$refs.upload.active &&
                  _vm.files.length > 0
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            dark: "",
                            block: "",
                            flat: "",
                            color: "red lighten-2"
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.files = []
                            }
                          }
                        },
                        [
                          _vm._v("\n        Remove All Files \n        "),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v("\n          fa-trash\n        ")
                          ])
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
        : _vm._e(),
      _vm._v(" "),
      _vm.isOption
        ? _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("mime-type"),
                      "append-icon": "fa-file-code-o ",
                      label: "Accept",
                      color: "info",
                      hint: "Allow upload mime type",
                      "persistent-hint": "",
                      "data-vv-name": "mime-type"
                    },
                    model: {
                      value: _vm.accept,
                      callback: function($$v) {
                        _vm.accept = $$v
                      },
                      expression: "accept"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("extension"),
                      "append-icon": "fa-cogs",
                      label: "Extensions",
                      color: "info",
                      hint: "Allow upload file extension",
                      "persistent-hint": "",
                      "data-vv-name": "extension"
                    },
                    model: {
                      value: _vm.extensions,
                      callback: function($$v) {
                        _vm.extensions = $$v
                      },
                      expression: "extensions"
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
                  _c("v-text-field", {
                    attrs: {
                      light: true,
                      "append-icon": "http",
                      label: "Put Url",
                      color: "info",
                      hint:
                        "Disabled if Empty, After the shutdown, use the POST method to upload",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.putAction,
                      callback: function($$v) {
                        _vm.putAction = $$v
                      },
                      expression: "putAction"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("post-url"),
                      "append-icon": "http",
                      label: "Post Url",
                      color: "info",
                      hint: "Default Post URL",
                      "persistent-hint": "",
                      "data-vv-name": "post-url"
                    },
                    model: {
                      value: _vm.postAction,
                      callback: function($$v) {
                        _vm.postAction = $$v
                      },
                      expression: "postAction"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric|min_value:1",
                        expression: "'required|numeric|min_value:1'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("thread"),
                      "append-icon": "fa-cubes",
                      label: "Thread",
                      color: "info",
                      hint:
                        "Also upload the number of files at the same time (number of threads)",
                      "persistent-hint": "",
                      "data-vv-name": "thread"
                    },
                    model: {
                      value: _vm.thread,
                      callback: function($$v) {
                        _vm.thread = $$v
                      },
                      expression: "thread"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("max-size"),
                      "append-icon": "trending_up",
                      label: "Max size",
                      color: "info",
                      hint: "Size Unit in byte",
                      "persistent-hint": "",
                      "data-vv-name": "max-size"
                    },
                    model: {
                      value: _vm.size,
                      callback: function($$v) {
                        _vm.size = _vm._n($$v)
                      },
                      expression: "size"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("min-size"),
                      "append-icon": "trending_down",
                      label: "Min size",
                      color: "info",
                      hint: "Size Unit in byte",
                      "persistent-hint": "",
                      "data-vv-name": "min-size"
                    },
                    model: {
                      value: _vm.minSize,
                      callback: function($$v) {
                        _vm.minSize = _vm._n($$v)
                      },
                      expression: "minSize"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      light: true,
                      "error-messages": _vm.errors.collect("auto-compress"),
                      "append-icon": "fa-compress",
                      label: "Automatically compress",
                      color: "info",
                      "data-vv-name": "auto-compress"
                    },
                    model: {
                      value: _vm.autoCompress,
                      callback: function($$v) {
                        _vm.autoCompress = _vm._n($$v)
                      },
                      expression: "autoCompress"
                    }
                  }),
                  _vm._v(" "),
                  _vm.autoCompress > 0
                    ? _c("p", { staticClass: "grey--text caption" }, [
                        _vm._v(
                          "\n        More than " +
                            _vm._s(_vm._f("formatSize")(_vm.autoCompress)) +
                            " files are automatically compressed\n      "
                        )
                      ])
                    : _c("p", { staticClass: "grey--text caption" }, [
                        _vm._v("\n        Set up automatic compression\n      ")
                      ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-checkbox", {
                    attrs: {
                      label: "Drag and drop upload: " + _vm.drop.toString(),
                      light: ""
                    },
                    model: {
                      value: _vm.drop,
                      callback: function($$v) {
                        _vm.drop = $$v
                      },
                      expression: "drop"
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
                  _c("v-checkbox", {
                    attrs: {
                      label:
                        "Not checked, filter the dragged folder: " +
                        _vm.dropDirectory.toString(),
                      light: ""
                    },
                    model: {
                      value: _vm.dropDirectory,
                      callback: function($$v) {
                        _vm.dropDirectory = $$v
                      },
                      expression: "dropDirectory"
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
                  _c("v-checkbox", {
                    attrs: {
                      label:
                        "Automatically activate upload: " +
                        _vm.uploadAuto.toString(),
                      light: ""
                    },
                    model: {
                      value: _vm.uploadAuto,
                      callback: function($$v) {
                        _vm.uploadAuto = $$v
                      },
                      expression: "uploadAuto"
                    }
                  })
                ],
                1
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
    require("vue-hot-reload-api")      .rerender("data-v-fc6794aa", module.exports)
  }
}

/***/ }),

/***/ 1029:
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
            { attrs: { color: "blue lighten-2" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "white--text",
                  attrs: { icon: "" },
                  on: { click: _vm.closeGalleryModal }
                },
                [_c("v-icon", [_vm._v("arrow_back")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v("Upload Images PID: " + _vm._s(_vm.id) + " ")
              ]),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          ),
          _vm._v(" "),
          _c("uploads", {
            attrs: {
              single: _vm.single,
              "post-url": _vm.postUrl,
              "file-key": _vm.fileKey,
              item: _vm.item
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
    require("vue-hot-reload-api")      .rerender("data-v-230a85f0", module.exports)
  }
}

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1031)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1033)
/* template */
var __vue_template__ = __webpack_require__(1034)
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
Component.options.__file = "resources/assets/js/components/uploads/DamagedImagesUploader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f9585d7", Component.options)
  } else {
    hotAPI.reload("data-v-0f9585d7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1032);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("3c2ab2cf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f9585d7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamagedImagesUploader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f9585d7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DamagedImagesUploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"DamagedImagesUploader.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Uploads__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Uploads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Components_Uploads__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    uploads: __WEBPACK_IMPORTED_MODULE_0_Components_Uploads___default.a
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      single: false,
      modal: false,
      fileKey: "damaged_images"
    };
  },
  computed: {
    postUrl: function postUrl() {
      var self = this;
      var id = self.id;
      return route("api.package.uploadDamageImage", { id: id });
    }
  },
  mounted: function mounted() {
    var self = this;
    Bus.$on("upload-damaged-images-" + this.item.id, function () {
      self.modal = true;
    });
  },

  methods: {
    close: function close() {
      this.modal = false;
    }
  }
});

/***/ }),

/***/ 1034:
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
            { attrs: { color: "error" } },
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
                _vm._v("Upload Damaged Images PID: " + _vm._s(_vm.id))
              ]),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          ),
          _vm._v(" "),
          _c("uploads", {
            attrs: {
              single: _vm.single,
              "post-url": _vm.postUrl,
              "file-key": _vm.fileKey,
              item: _vm.item
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
    require("vue-hot-reload-api")      .rerender("data-v-0f9585d7", module.exports)
  }
}

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "pa-3": "", "ma-3": "" } },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { staticClass: "blue-grey" },
            [
              !_vm.readonly
                ? _c(
                    "v-btn",
                    {
                      attrs: { flat: "", icon: "", color: "blue lighten-4" },
                      nativeOn: {
                        click: function($event) {
                          _vm.addNewPackage()
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { "x-large": "" } }, [
                        _vm._v("add_circle")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.readonly
                ? _c(
                    "v-btn",
                    {
                      attrs: { flat: "", icon: "", color: "green lighten-2" },
                      nativeOn: {
                        click: function($event) {
                          _vm.clonePackage()
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { "x-large": "" } }, [
                        _vm._v("file_copy")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-title",
                { staticClass: "text-md-center white--text" },
                [_vm._v("Item " + _vm._s(_vm.index))]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              !_vm.readonly
                ? _c(
                    "v-btn",
                    {
                      attrs: { flat: "", icon: "", color: "red" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deletePackage(_vm.item.id)
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { "x-large": "" } }, [
                        _vm._v("close")
                      ])
                    ],
                    1
                  )
                : _vm._e()
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
                    { attrs: { sm12: "", md2: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          readonly: _vm.readonly,
                          label: "Style No.",
                          "prepend-icon": "style",
                          hint: "Optional",
                          "persistent-hint": ""
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
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".description"
                          )
                        },
                        attrs: {
                          readonly: _vm.readonly,
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".description"
                          ),
                          "data-vv-name": "`packages.${index}.description`",
                          hint: "Required",
                          "persistent-hint": "",
                          label: "Item Description"
                        },
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
                    { attrs: { sm12: "", md2: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          readonly: _vm.readonly,
                          label: "Length",
                          suffix: "ft",
                          "prepend-icon": "keyboard_tab",
                          hint: "Optional",
                          "persistent-hint": ""
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
                          readonly: _vm.readonly,
                          label: "Width",
                          suffix: "ft",
                          "prepend-icon": "swap_horiz",
                          hint: "Optional",
                          "persistent-hint": ""
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
                          readonly: _vm.readonly,
                          label: "Height",
                          suffix: "ft",
                          "prepend-icon": "swap_vert",
                          hint: "Optional",
                          "persistent-hint": ""
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
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".cube"
                          )
                        },
                        attrs: {
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".cube"
                          ),
                          readonly: _vm.readonly,
                          label: "Cube",
                          suffix: "ft³",
                          "prepend-icon": "fa-cube",
                          "data-vv-name": "`packages.${iteration}.cube`",
                          hint: "Required",
                          "persistent-hint": ""
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
                      _c("v-autocomplete", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".bin_id"
                          )
                        },
                        attrs: {
                          items: _vm.bins,
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".bin_id"
                          ),
                          readonly: _vm.readonly,
                          "item-text": "code",
                          "item-value": "id",
                          required: "",
                          label: "Choose Bin",
                          light: "",
                          "prepend-icon": "view_comfy",
                          "data-vv-name": "`packages.${iteration}.bin_id`",
                          hint: "Choose Bin",
                          "persistent-hint": ""
                        },
                        model: {
                          value: _vm.item.bin_id,
                          callback: function($$v) {
                            _vm.$set(_vm.item, "bin_id", $$v)
                          },
                          expression: "item.bin_id"
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
                      _c("v-autocomplete", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".store_at"
                          )
                        },
                        attrs: {
                          items: _vm.store_at,
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".store_at"
                          ),
                          readonly: _vm.readonly,
                          required: "",
                          label: "Store At",
                          light: "",
                          "prepend-icon": "dns",
                          "data-vv-name": "`packages.${iteration}.store_at`",
                          hint: "Choose Store At",
                          "persistent-hint": ""
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
                      _c("v-autocomplete", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".handling_type"
                          )
                        },
                        attrs: {
                          items: _vm.handlingRates,
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".handling_type"
                          ),
                          readonly: _vm.readonly,
                          "item-text": "name",
                          "item-value": "id",
                          required: "",
                          label: "Choose Handling Note",
                          light: "",
                          "prepend-icon": "receipt",
                          "data-vv-name":
                            "`packages.${iteration}.handling_type`",
                          hint: "Choose Handling Note",
                          "persistent-hint": ""
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
                      _c("v-switch", {
                        attrs: {
                          readonly: _vm.readonly,
                          label: _vm.getDamageStatus(_vm.item.damaged)
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
                  ),
                  _vm._v(" "),
                  _vm.item.damaged
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", md4: "" } },
                        [
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required: item.damaged",
                                expression: "'required: item.damaged'"
                              }
                            ],
                            class: {
                              "error--text": _vm.hasErrors(
                                "packages." +
                                  _vm.iteration +
                                  ".damage_description"
                              )
                            },
                            attrs: {
                              readonly: _vm.readonly,
                              "error-messages": _vm.errorMessages(
                                "packages." +
                                  _vm.iteration +
                                  ".damage_description"
                              ),
                              hint: "Required If Marked As Damaged",
                              "data-vv-name":
                                "`packages.${iteration}.damage_description`",
                              "persistent-hint": "",
                              label: "Damaged Description"
                            },
                            model: {
                              value: _vm.item.damage_description,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "damage_description", $$v)
                              },
                              expression: "item.damage_description"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
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
                        "v-btn",
                        {
                          attrs: { block: "", color: "secondary", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.viewImages()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            View Item Images\n            "
                          ),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v("\n              image\n            ")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.readonly
                        ? _c(
                            "v-btn",
                            {
                              attrs: { block: "", color: "blue", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.openPackageImagesModal()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            Upload Package Images \n            "
                              ),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("add_photo_alternate")
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("package-images-uploader", {
                        attrs: { id: _vm.item.id, item: _vm.item }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.item.damaged
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", md6: "", "px-3": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                dark: "",
                                color: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  _vm.viewDamageImages()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            View Damage Images\n            "
                              ),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v(
                                  "\n              broken_image\n            "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          !_vm.readonly
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    block: "",
                                    color: "error",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.openDamagedImagesModal()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n            Upload Damaged Images "
                                  ),
                                  _c("v-icon", { attrs: { right: "" } }, [
                                    _vm._v("broken_image")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("damaged-images-uploader", {
                            attrs: { id: _vm.item.id, item: _vm.item }
                          })
                        ],
                        1
                      )
                    : _vm._e()
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
                    { attrs: { sm12: "", md8: "" } },
                    [
                      _c("v-subheader", [
                        _vm._v("\n            Notes:\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "error--text": _vm.hasErrors(
                            "packages." + _vm.iteration + ".notes"
                          )
                        },
                        attrs: {
                          readonly: _vm.readonly,
                          "error-messages": _vm.errorMessages(
                            "packages." + _vm.iteration + ".notes"
                          ),
                          counter: "",
                          maxlength: "255",
                          "full-width": "",
                          outline: "",
                          hint: "Optional",
                          "data-vv-name": "`packages.${iteration}.notes`",
                          "persistent-hint": ""
                        },
                        model: {
                          value: _vm.item.notes,
                          callback: function($$v) {
                            _vm.$set(_vm.item, "notes", $$v)
                          },
                          expression: "item.notes"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.item.damaged
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", md2: "", "order-md2": "" } },
                        [
                          _c("v-subheader", [
                            _vm._v(
                              "\n            Is Item Repaired?\n          "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-switch", {
                            attrs: {
                              readonly: _vm.readonly,
                              label: _vm.getRepairedStatus(_vm.item.repaired)
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
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.item.repaired
                    ? _c(
                        "v-flex",
                        { attrs: { sm12: "", md2: "" } },
                        [
                          _c("v-subheader", [
                            _vm._v(
                              "\n            When is it Repaired?\n          "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            class: {
                              "error--text": _vm.hasErrors(
                                "packages." + _vm.iteration + ".date_repaired"
                              )
                            },
                            attrs: {
                              readonly: _vm.readonly,
                              "error-messages": _vm.errorMessages(
                                "packages." + _vm.iteration + ".date_repaired"
                              ),
                              label: "Date Repaired",
                              "prepend-icon": "event_note",
                              "data-vv-name":
                                "`packages.${iteration}.date_repaired`"
                            },
                            on: {
                              click: function($event) {
                                _vm.openDateRepairedModal()
                              }
                            },
                            model: {
                              value: _vm.item.date_repaired,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "date_repaired", $$v)
                              },
                              expression: "item.date_repaired"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              ref: "date_repaired_" + _vm.item.id,
                              attrs: {
                                "return-value": _vm.item.date_repaired,
                                persistent: "",
                                lazy: "",
                                "full-width": "",
                                width: "290px"
                              },
                              on: {
                                "update:returnValue": function($event) {
                                  _vm.$set(_vm.item, "date_repaired", $event)
                                }
                              },
                              model: {
                                value: _vm.date_repaired_modal,
                                callback: function($$v) {
                                  _vm.date_repaired_modal = $$v
                                },
                                expression: "date_repaired_modal"
                              }
                            },
                            [
                              _c(
                                "v-date-picker",
                                {
                                  attrs: {
                                    disabled: _vm.readonly,
                                    scrollable: ""
                                  },
                                  model: {
                                    value: _vm.item.date_repaired,
                                    callback: function($$v) {
                                      _vm.$set(_vm.item, "date_repaired", $$v)
                                    },
                                    expression: "item.date_repaired"
                                  }
                                },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { flat: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.date_repaired_modal = false
                                        }
                                      }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { flat: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.save(
                                            _vm.item,
                                            _vm.item.date_repaired
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("OK")]
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
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("images", {
            attrs: { id: "" + _vm.item.id, images: _vm.item.package_images }
          }),
          _vm._v(" "),
          _c("damage-images", {
            attrs: { id: "" + _vm.item.id, images: _vm.item.damaged_images }
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
    require("vue-hot-reload-api")      .rerender("data-v-100c21ca", module.exports)
  }
}

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Mixins_validation_error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_dsg_Packages__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_dsg_Packages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Components_dsg_Packages__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Packages: __WEBPACK_IMPORTED_MODULE_4_Components_dsg_Packages___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1_Mixins_validation_error__["a" /* default */]],
  data: function data() {
    return {
      /* Always Declare Your Form Object */
      form: new __WEBPACK_IMPORTED_MODULE_2_vform__["Form"]({
        active: false,
        client_id: null,
        client_name: null,
        customer_id: null,
        customer_name: null,
        shipper_id: null,
        shipper_name: null,
        received_by: null,
        received_by_name: null,
        written_by: null,
        written_by_name: null,
        inspected_by: null,
        inspected_by_name: null,
        located_by: null,
        located_by_name: null,
        total_pieces: 0,
        total_cube: 0,
        receiving_amount: 0,
        date_processed: null,
        packages: []
      }),
      po_no: null,
      date_received: null,
      bins: [],
      date_received_modal: false,
      date_processed: null,
      date_processed_modal: false,
      customers: [],
      clients: [],
      shippers: [],
      employees: [],
      packages: [],
      handling_rates: [],
      storage_rates: [],
      unknownClient: {
        active: false,
        address_1: null,
        address_2: null,
        city: null,
        id: 1,
        name: "Unknown Client",
        state: null,
        zip: null
      }
    };
  },
  watch: {
    po_no: {
      handler: function handler(newValue) {
        var self = this;
        var total = this.packages.length;
        for (var i = 0; i < total; i++) {
          self.packages[i].po_no = newValue;
        }
      },
      deep: true
    },
    date_received: {
      handler: function handler(newValue) {
        var self = this;
        var total = this.packages.length;
        for (var i = 0; i < total; i++) {
          self.packages[i].date_received = newValue;
        }
      },
      deep: true
    },
    date_processed: {
      handler: function handler(newValue) {
        var self = this;
        var total = this.packages.length;
        for (var i = 0; i < total; i++) {
          self.packages[i].date_processed = newValue;
        }
      },
      deep: true
    },
    bins: {
      handler: function handler(newValue) {},
      deep: true
    },
    customers: {
      handler: function handler(newValue) {},
      deep: true
    },
    shippers: {
      handler: function handler(newValue) {},
      deep: true
    },
    employees: {
      handler: function handler(newValue) {},
      deep: true
    },
    packages: {
      handler: function handler(newValue) {
        var self = this;
        self.form.total_pieces = newValue.length;
        self.updateTotalCube();
        self.updateReceivingAmount();
      },
      deep: true
    },
    "form.packages": {
      handler: function handler(newValue) {},
      deep: true
    },
    "form.customer_id": {
      handler: function handler(newValue) {
        var self = this;
        var total = this.packages.length;
        var customer_id = null;
        var customer_name = null;

        if (newValue != undefined) {
          var customer = _.find(self.customers, function (c) {
            return c.id === newValue;
          });
          self.clients = customer.clients;
          _.remove(self.clients, {
            id: 1
          });
          self.clients.unshift(self.unknownClient);
          self.form.customer_name = customer.name;
          self.form.client_name = null;
          self.form.client_id = null;
          customer_id = newValue;
          customer_name = customer.name;
        } else {
          self.clients = [];
          self.clients.push(self.unknownClient);
          self.form.customer_id = null;
          self.form.customer_name = null;
          self.form.client_name = null;
          self.form.client_id = null;
        }
        for (var i = 0; i < total; i++) {
          self.packages[i].customer_id = customer_id;
          self.packages[i].customer_name = customer_name;
        }
      },
      deep: false
    },
    "form.shipper_id": {
      handler: function handler(newValue) {
        var self = this;
        var total = this.packages.length;
        var shipper_id = null;
        var shipper_name = null;

        if (newValue != undefined) {
          var shipper = _.find(self.shippers, function (c) {
            return c.id === newValue;
          });
          self.form.shipper_name = shipper.name;
          shipper_id = shipper.id;
          shipper_name = shipper.name;
        }
        for (var i = 0; i < total; i++) {
          self.packages[i].shipper_id = shipper_id;
          self.packages[i].shipper_name = shipper_name;
        }
      },
      deep: false
    },
    "form.client_name": {
      handler: function handler(newName) {
        var self = this;
        var total = this.packages.length;
        var client_id = null;
        var client_name = newName;

        if (newName != null || newName != undefined) {
          if (self.clients.length > 0) {
            var client = _.find(self.clients, function (c) {
              return c.name == newName;
            });
            if (client != undefined) {
              self.form.client_name = client.name;
              self.form.client_id = client.id;
              client_id = client.id;
              client_name = client.name;
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
        for (var i = 0; i < total; i++) {
          self.packages[i].client_id = client_id;
          self.packages[i].client_name = client_name;
        }
      },
      deep: false
    },
    "form.received_by": {
      handler: function handler(newID) {
        var self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            var employee = _.find(self.employees, function (e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.received_by = employee.id;
              self.form.received_by_name = employee.name;
            }
          }
        } else {
          self.form.received_by = null;
          self.form.received_by_name = null;
        }
      },
      deep: false
    },
    "form.written_by": {
      handler: function handler(newID) {
        var self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            var employee = _.find(self.employees, function (e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.written_by = employee.id;
              self.form.written_by_name = employee.name;
            }
          }
        } else {
          self.form.written_by = null;
          self.form.written_by_name = null;
        }
      },
      deep: false
    },
    "form.inspected_by": {
      handler: function handler(newID) {
        var self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            var employee = _.find(self.employees, function (e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.inspected_by = employee.id;
              self.form.inspected_by_name = employee.name;
            }
          }
        } else {
          self.form.inspected_by = null;
          self.form.inspected_by_name = null;
        }
      },
      deep: false
    },
    "form.located_by": {
      handler: function handler(newID) {
        var self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            var employee = _.find(self.employees, function (e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.located_by = employee.id;
              self.form.located_by_name = employee.name;
            }
          }
        } else {
          self.form.located_by = null;
          self.form.located_by_name = null;
        }
      },
      deep: false
    }
  },
  mounted: function mounted() {
    this.getCustomers();
    this.getShippers();
    this.getEmployees();
    this.getBins();
    this.getHandlingRates();
    this.getStorageRates();
    this.date_received = moment().format("YYYY-MM-DD");
    this.date_processed = moment().format("YYYY-MM-DD");
  },

  methods: {
    updateReceivingAmount: function updateReceivingAmount() {
      var self = this;
      var total = self.packages.length;
      var receivingAmount = 0;
      for (var i = 0; i < total; i++) {
        receivingAmount += self.packages[i].handling_fee;
      }
      self.form.receiving_amount = receivingAmount;
    },
    updateTotalCube: function updateTotalCube() {
      var self = this;
      var total = this.packages.length;
      var totalCube = 0;
      for (var i = 0; i < total; i++) {
        totalCube = totalCube + Number(self.packages[i].cube);
      }

      self.form.total_cube = totalCube;
    },
    getHandlingRates: function getHandlingRates() {
      var self = this;
      axios.get(route("api.dsg.getHandlingRates")).then(function (response) {
        self.handling_rates = response.data.rates;
      });
    },
    getStorageRates: function getStorageRates() {
      var self = this;
      axios.get(route("api.dsg.getStorageRates")).then(function (response) {
        self.storage_rates = response.data.rates;
      });
    },
    getBins: function getBins() {
      var self = this;
      axios.post(route("api.bin.index")).then(function (response) {
        self.bins = response.data.data;
      });
    },
    addNewPackage: function addNewPackage() {
      var self = this;
      self.$validator.validateAll().then(function (result) {
        if (result) {
          axios.post(route("api.package.add")).then(function (response) {
            var item = response.data.data;
            item.date_received = self.date_received;
            item.date_processed = self.date_processed;
            item.po_no = self.po_no;
            item.customer_id = self.form.customer_id;
            item.customer_name = self.form.customer_name;
            item.client_id = self.form.client_id;
            item.client_name = self.form.client_name;
            item.shipper_id = self.form.shipper_id;
            item.shipper_name = self.form.shipper_name;
            self.packages.push(item);
            self.form.packages.push(item);
          });
        } else {
          var validationModal = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal({
            title: "Validation Error",
            html: "<p class=\"title\">Please Fix Form Errors</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    getEmployees: function getEmployees() {
      var _this = this;

      axios.get(route("api.dsg.getEmployees")).then(function (response) {
        _this.employees = response.data.data;
      });
    },
    getShippers: function getShippers() {
      var _this2 = this;

      axios.get(route("api.dsg.getShippers")).then(function (response) {
        _this2.shippers = response.data.data;
      });
    },
    getCustomers: function getCustomers() {
      var _this3 = this;

      axios.get(route("api.dsg.getCustomers")).then(function (response) {
        _this3.customers = response.data.data;
      });
    },
    getStatus: function getStatus(status) {
      if (status) {
        return "Status: Active";
      } else {
        return "Status: Inactive";
      }
    },
    submit: function submit() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // eslint-disable-next-line
          self.createDsg();
        } else {
          var validationModal = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal({
            title: "Validation Error",
            html: "<p class=\"title\">Please Fix Form Errors</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    createDsg: function createDsg() {
      var self = this;
      self.form.busy = true;
      self.form.packages = self.packages;
      self.form.date_processed = self.date_processed;
      self.form.post(route("api.dsg.create")).then(function (response) {
        console.log(response.data);
        self.$validator.reset();
        var successModal = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        successModal({
          title: "Success!",
          html: "<p class=\"title\">DSG Has Been Created!</p>",
          type: "success",
          confirmButtonText: "Ok"
        });
        self.$nextTick(function () {
          return self.$router.push({ name: "dsg" });
        });
      }).catch(function (errors) {
        var failedModal = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        failedModal({
          title: "Validation Error!",
          html: "<p class=\"title\">Please Complete Form To Submit!</p>",
          type: "error",
          confirmButtonText: "Ok"
        });
      });
    },
    resetForm: function resetForm() {
      var self = this;
      self.form = new __WEBPACK_IMPORTED_MODULE_2_vform__["Form"]({
        active: false,
        client_id: null,
        client_name: null,
        customer_id: null,
        customer_name: null,
        shipper_id: null,
        shipper_name: null,
        received_by: null,
        received_by_name: null,
        written_by: null,
        written_by_name: null,
        inspected_by: null,
        inspected_by_name: null,
        located_by: null,
        located_by_name: null,
        total_pieces: null,
        total_cube: null,
        receiving_amount: null,
        packages: []
      });
    },
    redirectBack: function redirectBack() {
      var self = this;
      self.$nextTick(function () {
        return self.$router.push({ name: "dsg" });
      });
    }
  }
});

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal-layout",
    { staticClass: "white" },
    [
      _c(
        "v-card",
        { attrs: { flat: true } },
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
              _c(
                "v-toolbar-title",
                { staticClass: "text-xs-center white--text" },
                [_vm._v("Create New DSG")]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.form.busy,
                        disabled: _vm.errors.any() || _vm.form.busy,
                        flat: "",
                        color: "white"
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.submit()
                        }
                      }
                    },
                    [
                      _vm._v("\n          Save\n          "),
                      _c("v-icon", { attrs: { right: "" } }, [_vm._v("save")])
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
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "my-0": "",
                "py-0": "",
                "mx-3": "",
                "px-3": ""
              }
            },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", lg4: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("customer") },
                    attrs: {
                      items: _vm.customers,
                      "error-messages": _vm.errorMessages("customer"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Choose Customer",
                      light: "",
                      chips: "",
                      "prepend-icon": "supervised_user_circle",
                      "data-vv-name": "customer"
                    },
                    model: {
                      value: _vm.form.customer_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "customer_id", $$v)
                      },
                      expression: "form.customer_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg4: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("client") },
                    attrs: {
                      items: _vm.clients,
                      "error-messages": _vm.errorMessages("client"),
                      "item-text": "name",
                      "item-value": "name",
                      chips: "",
                      light: "",
                      dense: "",
                      required: "",
                      label: "Choose Client or Type Name",
                      "prepend-icon": "fa-users",
                      "data-vv-name": "client"
                    },
                    model: {
                      value: _vm.form.client_name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "client_name", $$v)
                      },
                      expression: "form.client_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg4: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("shipper") },
                    attrs: {
                      items: _vm.shippers,
                      "error-messages": _vm.errorMessages("shipper"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Choose Shipper",
                      light: "",
                      chips: "",
                      "prepend-icon": "fa-ship",
                      "data-vv-name": "shipper"
                    },
                    model: {
                      value: _vm.form.shipper_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "shipper_id", $$v)
                      },
                      expression: "form.shipper_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg3: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("received_by") },
                    attrs: {
                      items: _vm.employees,
                      "error-messages": _vm.errorMessages("received_by"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Received By",
                      light: "",
                      chips: "",
                      "prepend-icon": "how_to_reg",
                      "data-vv-name": "received_by"
                    },
                    model: {
                      value: _vm.form.received_by,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "received_by", $$v)
                      },
                      expression: "form.received_by"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg3: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("written_by") },
                    attrs: {
                      items: _vm.employees,
                      "error-messages": _vm.errorMessages("written_by"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Written By",
                      light: "",
                      chips: "",
                      "prepend-icon": "local_library",
                      "data-vv-name": "written_by"
                    },
                    model: {
                      value: _vm.form.written_by,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "written_by", $$v)
                      },
                      expression: "form.written_by"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg3: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("inspected_by") },
                    attrs: {
                      items: _vm.employees,
                      "error-messages": _vm.errorMessages("inspected_by"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Inspected By",
                      light: "",
                      chips: "",
                      "prepend-icon": "search",
                      "data-vv-name": "inspected_by"
                    },
                    model: {
                      value: _vm.form.inspected_by,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "inspected_by", $$v)
                      },
                      expression: "form.inspected_by"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg3: "" } },
                [
                  _c("v-autocomplete", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("located_by") },
                    attrs: {
                      items: _vm.employees,
                      "error-messages": _vm.errorMessages("located_by"),
                      "item-text": "name",
                      "item-value": "id",
                      required: "",
                      label: "Located By",
                      light: "",
                      chips: "",
                      "prepend-icon": "person_pin",
                      "data-vv-name": "located_by"
                    },
                    model: {
                      value: _vm.form.located_by,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "located_by", $$v)
                      },
                      expression: "form.located_by"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      light: "",
                      label: "PO No.",
                      "prepend-icon": "bookmark"
                    },
                    model: {
                      value: _vm.po_no,
                      callback: function($$v) {
                        _vm.po_no = $$v
                      },
                      expression: "po_no"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg2: "" } },
                [
                  _c(
                    "v-dialog",
                    {
                      ref: "date_received",
                      attrs: {
                        "return-value": _vm.date_received,
                        persistent: "",
                        lazy: "",
                        "full-width": "",
                        width: "290px"
                      },
                      on: {
                        "update:returnValue": function($event) {
                          _vm.date_received = $event
                        }
                      },
                      model: {
                        value: _vm.date_received_modal,
                        callback: function($$v) {
                          _vm.date_received_modal = $$v
                        },
                        expression: "date_received_modal"
                      }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          slot: "activator",
                          label: "Date Received",
                          "prepend-icon": "event_available",
                          readonly: ""
                        },
                        slot: "activator",
                        model: {
                          value: _vm.date_received,
                          callback: function($$v) {
                            _vm.date_received = $$v
                          },
                          expression: "date_received"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { scrollable: "" },
                          model: {
                            value: _vm.date_received,
                            callback: function($$v) {
                              _vm.date_received = $$v
                            },
                            expression: "date_received"
                          }
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { flat: "", color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.date_received_modal = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { flat: "", color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.$refs.date_received.save(
                                    _vm.date_received
                                  )
                                }
                              }
                            },
                            [_vm._v("OK")]
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
                { attrs: { xs12: "", lg2: "" } },
                [
                  _c(
                    "v-dialog",
                    {
                      ref: "date_processed",
                      attrs: {
                        "return-value": _vm.date_processed,
                        persistent: "",
                        lazy: "",
                        "full-width": "",
                        width: "290px"
                      },
                      on: {
                        "update:returnValue": function($event) {
                          _vm.date_processed = $event
                        }
                      },
                      model: {
                        value: _vm.date_processed_modal,
                        callback: function($$v) {
                          _vm.date_processed_modal = $$v
                        },
                        expression: "date_processed_modal"
                      }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          slot: "activator",
                          label: "Date Processed",
                          "prepend-icon": "event_note",
                          readonly: ""
                        },
                        slot: "activator",
                        model: {
                          value: _vm.date_processed,
                          callback: function($$v) {
                            _vm.date_processed = $$v
                          },
                          expression: "date_processed"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { scrollable: "" },
                          model: {
                            value: _vm.date_processed,
                            callback: function($$v) {
                              _vm.date_processed = $$v
                            },
                            expression: "date_processed"
                          }
                        },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { flat: "", color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.date_processed_modal = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { flat: "", color: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.$refs.date_processed.save(
                                    _vm.date_processed
                                  )
                                }
                              }
                            },
                            [_vm._v("OK")]
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
              _vm.packages.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "", lg2: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          readonly: "",
                          label: "Total Pieces",
                          "prepend-icon": "category"
                        },
                        model: {
                          value: _vm.form.total_pieces,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_pieces", $$v)
                          },
                          expression: "form.total_pieces"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.packages.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "", lg2: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          readonly: "",
                          label: "Total Cube",
                          "prepend-icon": "fa-cubes",
                          suffix: "ft³"
                        },
                        model: {
                          value: _vm.form.total_cube,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_cube", $$v)
                          },
                          expression: "form.total_cube"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.packages.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "", lg2: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          readonly: "",
                          "prepend-icon": "attach_money",
                          label: "Receiving Amount",
                          suffix: "USD"
                        },
                        model: {
                          value: _vm.form.receiving_amount,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "receiving_amount", $$v)
                          },
                          expression: "form.receiving_amount"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "my-0": "",
                "py-0": "",
                "mx-3": "",
                "px-3": ""
              }
            },
            [
              !_vm.packages.length > 0
                ? _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: {
                            disabled: _vm.errors.any(),
                            color: "blue-grey",
                            block: ""
                          },
                          on: { click: _vm.addNewPackage }
                        },
                        [
                          _vm._v("\n          Add New Package "),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v("library_add")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.packages, function(item, key) {
            return _c("packages", {
              key: key,
              attrs: {
                index: key + 1,
                iteration: key,
                item: item,
                packages: _vm.packages,
                bins: _vm.bins,
                "handling-rates": _vm.handling_rates,
                "storage-rates": _vm.storage_rates,
                form: _vm.form
              }
            })
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-9af71c10", module.exports)
  }
}

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1139)
/* template */
var __vue_template__ = __webpack_require__(1140)
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
Component.options.__file = "resources/assets/js/pages/Dsg/CreateDsg.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9af71c10", Component.options)
  } else {
    hotAPI.reload("data-v-9af71c10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 959:
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

var listToStyles = __webpack_require__(960)

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

/***/ 960:
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

/***/ 961:
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

/***/ 962:
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

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(964)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(966)
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

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(965);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("b8bb7d10", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da953062\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalLayout.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da953062\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalLayout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-messages__message {\n  color: #e57373;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/layouts/resources/assets/js/layouts/ModalLayout.vue"],"names":[],"mappings":";AAsBA;EACA,eAAA;CACA","file":"ModalLayout.vue","sourcesContent":["<template>\n  <v-app \n    v-cloak \n    standalone\n  >\n    <v-content class=\"white\">\n      <v-container \n        transition=\"slide-x-transition\" \n        fluid \n        class=\"pa-0 ma-0\"\n      >\n        <v-card :flat=\"true\">\n          <slot name=\"toolbar\"/>\n          <slot/>\n        </v-card>\n      </v-container>\n      <slot name=\"footer\"/>\n    </v-content>\n  </v-app>\n</template>\n\n<style>\n.v-messages__message {\n  color: #e57373;\n}\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 966:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2Fkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWU/ODhmZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZT9mYmE2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZT8zNjBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlP2E5ZGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWU/NjAzNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWU/M2E5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZT8yMWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlP2YwMjYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZT80ZDVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWU/OTI0YSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeGtlc2hpL2ltYWdlLWNvbXByZXNzb3IvZGlzdC9pbWFnZS1jb21wcmVzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtdXBsb2FkLWNvbXBvbmVudC9kaXN0L3Z1ZS11cGxvYWQtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRzLnZ1ZT8yZTM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWU/MzdhYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWU/ZmEyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlPzM3YjEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZT9hMzViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlPzM3ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0NyZWF0ZURzZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQ3JlYXRlRHNnLnZ1ZT83MDViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0NyZWF0ZURzZy52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3ZhbGlkYXRpb24tZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Zmb3JtL2Rpc3QvdmZvcm0uY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZT9kMWY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWU/YWFlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlPzliMjQiXSwibmFtZXMiOlsibWV0aG9kcyIsImVycm9yTWVzc2FnZXMiLCJmaWVsZCIsImVycm9ycyIsImNvbGxlY3QiLCJjb25jYXQiLCJmb3JtIiwib25seSIsImhhc0Vycm9ycyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBMFo7QUFDMVo7QUFDQSwrQ0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNkNBQTBaO0FBQzFaO0FBQ0EsK0NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0Esb0VBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHFPQUFzTyxzRkFBc0Y7O0FBRTVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0RBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxpQkFEQTtBQUVBLG9CQUZBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFMQSxHQURBO0FBY0E7QUFBQTtBQUNBO0FBREE7QUFBQSxHQWRBO0FBaUJBLFNBakJBLHFCQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXRCQTs7QUF1QkE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsaUJBSkEseUJBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQTtBQU5BO0FBdkJBLEc7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUF5RDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLG1CQUFtQixFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFlBQVksRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxvQkFBb0IsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxZQUFZLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQSwwQkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNkNBQTBaO0FBQzFaO0FBQ0EsK0NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0Esb0VBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHFPQUFzTyw0RkFBNEY7O0FBRWxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0RBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxpQkFEQTtBQUVBLG9CQUZBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFMQSxHQURBO0FBY0E7QUFBQTtBQUNBO0FBREE7QUFBQSxHQWRBO0FBaUJBLFNBakJBLHFCQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQXRCQTs7QUF1QkE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsaUJBSkEseUJBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQTtBQU5BO0FBdkJBLEc7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUF5RDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLG1CQUFtQixFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFlBQVksRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxvQkFBb0IsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxZQUFZLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQSwwQkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNkNBQTBaO0FBQzFaO0FBQ0EsK0NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBeU87QUFDek87QUFDQTtBQUNBO0FBQ0Esb0VBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHV3Q0FBd3dDLHdGQUF3Rjs7QUFFaDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrREFFQTtBQUNBO0FBQ0EsMkdBREE7QUFFQSwyR0FGQTtBQUdBLGtGQUhBO0FBSUE7QUFKQSxHQURBO0FBT0Esb0ZBUEE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGlCQURBO0FBRUE7QUFGQSxLQUxBO0FBU0E7QUFDQSxpQkFEQTtBQUVBO0FBRkEsS0FUQTtBQWFBO0FBQ0EsaUJBREE7QUFFQTtBQUZBLEtBYkE7QUFpQkE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsS0FqQkE7QUFxQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FyQkE7QUF5QkE7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0F6QkE7QUE2QkE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0E3QkE7QUFpQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFqQ0EsR0FSQTtBQThDQTtBQUFBO0FBQ0EsaUNBREE7QUFFQSxnQ0FGQTtBQUdBO0FBSEE7QUFBQSxHQTlDQTtBQW1EQTtBQUNBLGlCQURBLHNCQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGdCQUpBLHFCQUlBLFFBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLGlCQVBBLHNCQU9BLFFBUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLHdCQVZBLDZCQVVBLFFBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBaEJBO0FBaUJBLG1CQWpCQSx3QkFpQkEsUUFqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFDQSxLQTFCQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVRBLE1BU0E7QUFDQTtBQUNBO0FBQ0EsT0FmQTtBQWdCQTtBQWhCQTtBQTNCQSxHQW5EQTtBQWlHQTtBQUNBLHlCQURBLG1DQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLG9CQU5BLDhCQU1BO0FBQ0E7QUFDQSxLQVJBO0FBU0EsY0FUQSx3QkFTQTtBQUNBO0FBQ0EsS0FYQTtBQVlBLGdCQVpBLDBCQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQXBDQTtBQXFDQSxLQW5EQTtBQW9EQSxpQkFwREEsMkJBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVpBO0FBYUEsS0FuRUE7QUFvRUEsbUJBcEVBLDZCQW9FQTtBQUNBO0FBQ0E7QUFDQSxLQXZFQTtBQXdFQSxRQXhFQSxnQkF3RUEsSUF4RUEsRUF3RUEsSUF4RUEsRUF3RUE7QUFDQTtBQUNBO0FBQ0EsS0EzRUE7QUE0RUEsZUE1RUEsdUJBNEVBLEVBNUVBLEVBNEVBO0FBQ0E7QUFDQSxLQTlFQTtBQStFQSwwQkEvRUEsb0NBK0VBO0FBQ0E7QUFDQSxLQWpGQTtBQWtGQSwwQkFsRkEsb0NBa0ZBO0FBQ0E7QUFDQSxLQXBGQTtBQXFGQSxpQkFyRkEseUJBcUZBLEVBckZBLEVBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0EzRkE7QUE0RkEsY0E1RkEsc0JBNEZBLE1BNUZBLEVBNEZBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQWxHQTtBQW1HQSxtQkFuR0EsMkJBbUdBLE1BbkdBLEVBbUdBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXpHQTtBQTBHQSxxQkExR0EsNkJBMEdBLE1BMUdBLEVBMEdBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWhIQTtBQWpHQSxHOzs7Ozs7O0FDNVpBO0FBQ0E7QUFDQTtBQUNBLDBCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBMFo7QUFDMVo7QUFDQSwrQ0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHNDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQSxvRUFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0osa0ZBQWtGO0FBQ3hPLCtKQUErSixrRkFBa0Y7QUFDalA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsNktBQThLLHFHQUFxRzs7QUFFblI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29CQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFMQSxHQUpBO0FBY0E7QUFBQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBQUEsR0FkQTtBQW1CQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBLEdBbkJBO0FBMEJBLFNBMUJBLHFCQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQS9CQTs7QUFnQ0E7QUFDQSxxQkFEQSwrQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQWhDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUxBO0FBU0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FUQTtBQWFBO0FBQ0EsbUJBREE7QUFFQTtBQUZBLEtBYkE7QUFpQkE7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFqQkEsR0FKQTtBQTBCQSxNQTFCQSxrQkEwQkE7QUFDQTtBQUNBLFdBQ0EsZ0VBREEsRUFFQSw4REFGQSxFQUdBLDhEQUhBLEVBSUEsc0VBSkEsRUFLQSxpRUFMQSxFQU1BLHFEQU5BLENBREE7QUFTQSxlQVRBO0FBVUE7QUFDQSx5REFYQTtBQVlBLHlDQVpBO0FBYUEsbUJBYkE7QUFjQSw0QkFkQTtBQWVBLG9CQWZBO0FBZ0JBLHNCQWhCQTtBQWlCQSxnQkFqQkE7QUFrQkEseUJBbEJBO0FBbUJBLHFCQW5CQTtBQW9CQSxlQXBCQTtBQXFCQSxrQkFyQkE7QUFzQkEsaUNBdEJBO0FBdUJBLCtCQXZCQTtBQXdCQTtBQUNBLHFDQURBO0FBRUE7QUFDQTtBQUhBLE9BeEJBO0FBNkJBO0FBQ0E7QUFEQSxPQTdCQTtBQWdDQSwrQkFoQ0E7QUFpQ0EsdUJBakNBO0FBa0NBO0FBQ0EscUJBbkNBO0FBb0NBO0FBQ0E7QUFBQTtBQUFBLE9BckNBO0FBc0NBO0FBQ0E7QUF2Q0E7QUF5Q0EsR0FwRUE7O0FBcUVBO0FBQ0EsV0FEQSxtQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0FyRUE7QUEwRUEsU0ExRUEscUJBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxHQW5GQTs7QUFvRkE7QUFDQSxZQURBLG9CQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsa0JBSUEsSUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsZUFQQSx1QkFPQSxPQVBBLEVBT0EsT0FQQSxFQU9BLE9BUEEsRUFPQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQ0EsZ0JBQ0Esc0NBREEsSUFFQSxxQkFGQSxJQUdBLGdDQUpBLEVBS0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQSwwQkFDQSxRQURBLENBQ0EsWUFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx3QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTtBQU1BLFdBVEEsRUFVQSxLQVZBLENBVUE7QUFDQTtBQUNBO0FBREE7QUFHQSxXQWRBO0FBZUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4RUE7OztBQTBFQTtBQUNBLGFBM0VBLHFCQTJFQSxPQTNFQSxFQTJFQSxPQTNFQSxFQTJFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQ0EscUJBQ0EsZ0JBREEsSUFFQSwyQkFIQSxFQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUNBLHlDQUNBLCtCQUZBLEVBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeklBO0FBcEZBLEc7Ozs7Ozs7QUN2WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhGQUE4RjtBQUM5RyxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkRBQTZEO0FBQzdFLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osYUFBYSxLQUFLO0FBQ2xCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixhQUFhLE1BQU07QUFDbkI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGFBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQVFEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixlQUFlLFFBQVE7QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOzs7Ozs7OztBQ3IzQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FB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QUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxXQUFXLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFB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Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsaUJBQWlCLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsYUFBYSxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9VcGxvYWRzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmM2Nzk0YWFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9VcGxvYWRzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2Fkcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZmM2Nzk0YWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mYzY3OTRhYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWM4YmMzM1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbWFnZXMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ltYWdlcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU5YzhiYzMzXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW1hZ2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTljOGJjMzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OWM4YmMzM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTljOGJjMzNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW1hZ2VzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2FjNjNlZjBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5YzhiYzMzXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTljOGJjMzNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW1hZ2VzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OWM4YmMzM1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkltYWdlcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OWM4YmMzM1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCI8dGVtcGxhdGU+XG4gIDx2LWRpYWxvZyBcbiAgICB2LW1vZGVsPVwibW9kYWxcIiBcbiAgICBmdWxsc2NyZWVuIFxuICAgIHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIj5cbiAgICA8di1jYXJkIDpsaWdodD1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICBpY29uIFxuICAgICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIiBcbiAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgIDx2LWljb24+YXJyb3dfYmFjazwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwid2hpdGUtLXRleHRcIj5JdGVtICMge3sgaWQgfX0gSW1hZ2VzPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDwhLS0gYWRkIEhlcmUgSW1hZ2VzIC0tPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICB2LWlmPVwiaW1hZ2VzLmxlbmd0aCA+IDBcIiBcbiAgICAgICAgZmx1aWRcbiAgICAgID5cbiAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwXG4gICAgICAgID5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgdi1mb3I9XCJpbWFnZSBpbiBpbWFnZXNcIiBcbiAgICAgICAgICAgIDprZXk9XCJpbWFnZVwiXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICBtZDRcbiAgICAgICAgICAgIHB4LTJcbiAgICAgICAgICAgIHB5LTJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1jYXJkLW1lZGlhXG4gICAgICAgICAgICAgIDpzcmM9XCJpbWFnZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICBAY2xpY2s9XCJ2aWV3RnVsbEltYWdlKGltYWdlKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuXG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICB2LWVsc2UgXG4gICAgICAgIGZsdWlkPlxuICAgICAgICA8di1hbGVydFxuICAgICAgICAgIDp2YWx1ZT1cInRydWVcIlxuICAgICAgICAgIHR5cGU9XCJpbmZvXCJcbiAgICAgICAgICBjb2xvcj1cImFtYmVyXCJcbiAgICAgICAgICBpY29uPVwid2FybmluZ1wiXG4gICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIE5vIFVwbG9hZGVkIEltYWdlcyBGb3IgVGhpcyBJdGVtXG4gICAgICAgIDwvdi1hbGVydD5cbiAgICAgIDwvdi1jb250YWluZXI+XG4gICAgPC92LWNhcmQ+XG4gIDwvdi1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgbW9kYWw6IGZhbHNlXG4gIH0pLFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKGB2aWV3LXBhY2thZ2UtJHt0aGlzLmlkfS1pbWFnZXNgLCAoKSA9PiB7XG4gICAgICBzZWxmLm1vZGFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5tb2RhbCA9IGZhbHNlO1xuICAgIH0sXG4gICAgdmlld0Z1bGxJbWFnZShpbWFnZSkge1xuICAgICAgd2luZG93Lm9wZW4oaW1hZ2UpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWRpYWxvZ1wiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IFwiXCIsIHRyYW5zaXRpb246IFwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCIgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0ubW9kYWwsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0ubW9kYWwgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgeyBhdHRyczogeyBsaWdodDogdHJ1ZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X2JhY2tcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkl0ZW0gIyBcIiArIF92bS5fcyhfdm0uaWQpICsgXCIgSW1hZ2VzXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaW1hZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQ0OiBcIlwiLCBcInB4LTJcIjogXCJcIiwgXCJweS0yXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtbWVkaWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaW1hZ2UsIGhlaWdodDogXCIyNTBweFwiLCBjb250YWluOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdGdWxsSW1hZ2UoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIE5vIFVwbG9hZGVkIEltYWdlcyBGb3IgVGhpcyBJdGVtXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTljOGJjMzNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU5YzhiYzMzXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5OGNiZWMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZUltYWdlcy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFtYWdlSW1hZ2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTk4Y2JlYzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYW1hZ2VJbWFnZXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvRGFtYWdlSW1hZ2VzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OThjYmVjMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU5OGNiZWMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvRGFtYWdlSW1hZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiAzNSAzNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OThjYmVjMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYW1hZ2VJbWFnZXMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhOWQ0YWIyMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTk4Y2JlYzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFtYWdlSW1hZ2VzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OThjYmVjMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYW1hZ2VJbWFnZXMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU5OGNiZWMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvRGFtYWdlSW1hZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiAzNSAzNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiRGFtYWdlSW1hZ2VzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU5OGNiZWMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvRGFtYWdlSW1hZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiAzNSAzNiIsIjx0ZW1wbGF0ZT5cbiAgPHYtZGlhbG9nIFxuICAgIHYtbW9kZWw9XCJtb2RhbFwiIFxuICAgIGZ1bGxzY3JlZW4gXG4gICAgdHJhbnNpdGlvbj1cImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiPlxuICAgIDx2LWNhcmQgOmxpZ2h0PVwidHJ1ZVwiPlxuICAgICAgPHYtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGljb24gXG4gICAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIFxuICAgICAgICAgIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPkl0ZW0gIyB7eyBpZCB9fSBEYW1hZ2VkIEltYWdlczwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8IS0tIGFkZCBIZXJlIEltYWdlcyAtLT5cbiAgICAgIDx2LWNvbnRhaW5lclxuICAgICAgICB2LWlmPVwiaW1hZ2VzLmxlbmd0aCA+IDBcIlxuICAgICAgICBmbHVpZCBcbiAgICAgID5cbiAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwXG4gICAgICAgID5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgdi1mb3I9XCJpbWFnZSBpbiBpbWFnZXNcIiBcbiAgICAgICAgICAgIDprZXk9XCJpbWFnZVwiXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICBtZDRcbiAgICAgICAgICAgIHB4LTJcbiAgICAgICAgICAgIHB5LTJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1jYXJkLW1lZGlhXG4gICAgICAgICAgICAgIDpzcmM9XCJpbWFnZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICBAY2xpY2s9XCJ2aWV3RnVsbEltYWdlKGltYWdlKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuXG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICB2LWVsc2UgXG4gICAgICAgIGZsdWlkPlxuICAgICAgICA8di1hbGVydFxuICAgICAgICAgIDp2YWx1ZT1cInRydWVcIlxuICAgICAgICAgIHR5cGU9XCJpbmZvXCJcbiAgICAgICAgICBjb2xvcj1cImFtYmVyXCJcbiAgICAgICAgICBpY29uPVwid2FybmluZ1wiXG4gICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIE5vIFVwbG9hZGVkIERhbWFnZWQgSW1hZ2VzIEZvciBUaGlzIEl0ZW1cbiAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWFnZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBtb2RhbDogZmFsc2VcbiAgfSksXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIEJ1cy4kb24oYHZpZXctZGFtYWdlZC1wYWNrYWdlLSR7dGhpcy5pZH0taW1hZ2VzYCwgKCkgPT4ge1xuICAgICAgc2VsZi5tb2RhbCA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICB9LFxuICAgIHZpZXdGdWxsSW1hZ2UoaW1hZ2UpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGltYWdlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1kaWFsb2dcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBcIlwiLCB0cmFuc2l0aW9uOiBcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLm1vZGFsID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlnaHQ6IHRydWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJJdGVtICMgXCIgKyBfdm0uX3MoX3ZtLmlkKSArIFwiIERhbWFnZWQgSW1hZ2VzXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaW1hZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQ0OiBcIlwiLCBcInB4LTJcIjogXCJcIiwgXCJweS0yXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtbWVkaWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaW1hZ2UsIGhlaWdodDogXCIyNTBweFwiLCBjb250YWluOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdGdWxsSW1hZ2UoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIE5vIFVwbG9hZGVkIERhbWFnZWQgSW1hZ2VzIEZvciBUaGlzIEl0ZW1cXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01OThjYmVjMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTk4Y2JlYzJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvRGFtYWdlSW1hZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiAzNSAzNiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTAwYzIxY2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZXMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BhY2thZ2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTAwYzIxY2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWNrYWdlcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTEwMGMyMWNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTAwYzIxY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTEwMGMyMWNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhY2thZ2VzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiODRiYmQ2NzRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTEwMGMyMWNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhY2thZ2VzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xMDBjMjFjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWNrYWdlcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTAwYzIxY2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJQYWNrYWdlcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xMDBjMjFjYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9QYWNrYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCBcbiAgICByb3dcbiAgICB3cmFwXG4gICAgcGEtM1xuICAgIG1hLTNcbiAgPlxuICAgIDx2LWNhcmQ+XG4gICAgICA8di10b29sYmFyIGNsYXNzPVwiYmx1ZS1ncmV5XCI+XG4gICAgICAgIDx2LWJ0blxuICAgICAgICAgIHYtaWY9XCIhcmVhZG9ubHlcIlxuICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIGNvbG9yPVwiYmx1ZSBsaWdodGVuLTRcIiBcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwiYWRkTmV3UGFja2FnZSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWljb24geC1sYXJnZT5hZGRfY2lyY2xlPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0blxuICAgICAgICAgIHYtaWY9XCIhcmVhZG9ubHlcIlxuICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIGNvbG9yPVwiZ3JlZW4gbGlnaHRlbi0yXCIgXG4gICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cImNsb25lUGFja2FnZSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWljb24geC1sYXJnZT5maWxlX2NvcHk8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtbWQtY2VudGVyIHdoaXRlLS10ZXh0XCI+SXRlbSB7eyBpbmRleCB9fTwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICB2LWlmPVwiIXJlYWRvbmx5XCJcbiAgICAgICAgICBmbGF0IFxuICAgICAgICAgIGljb25cbiAgICAgICAgICBjb2xvcj1cInJlZFwiIFxuICAgICAgICAgIEBjbGljay5uYXRpdmU9XCJkZWxldGVQYWNrYWdlKGl0ZW0uaWQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWljb24geC1sYXJnZT5jbG9zZTwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8di1jb250YWluZXIgXG4gICAgICAgIGZsdWlkXG4gICAgICAgIGdyaWQtbGlzdC1tZFxuICAgICAgPlxuICAgICAgICA8di1sYXlvdXQgXG4gICAgICAgICAgcm93IFxuICAgICAgICAgIHdyYXBcbiAgICAgICAgICBwYS0yXG4gICAgICAgID5cbiAgICAgICAgICA8IS0tIDZmbGV4IHRhYi0tPlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnN0eWxlX25vXCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlN0eWxlIE5vLlwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInN0eWxlXCJcbiAgICAgICAgICAgICAgaGludD1cIk9wdGlvbmFsXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kZXNjcmlwdGlvbmApXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kZXNjcmlwdGlvbmApIH1cIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpbmRleH0uZGVzY3JpcHRpb25gXCJcbiAgICAgICAgICAgICAgaGludD1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAgIGxhYmVsPVwiSXRlbSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLmxlbmd0aFwiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5ndGhcIlxuICAgICAgICAgICAgICBzdWZmaXg9XCJmdFwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImtleWJvYXJkX3RhYlwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJPcHRpb25hbFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS53aWR0aFwiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJXaWR0aFwiXG4gICAgICAgICAgICAgIHN1ZmZpeD1cImZ0XCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwic3dhcF9ob3JpelwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJPcHRpb25hbFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5oZWlnaHRcIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiSGVpZ2h0XCJcbiAgICAgICAgICAgICAgc3VmZml4PVwiZnRcIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJzd2FwX3ZlcnRcIlxuICAgICAgICAgICAgICBoaW50PVwiT3B0aW9uYWxcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5jdWJlXCJcbiAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmN1YmVgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uY3ViZWApIH1cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ3ViZVwiXG4gICAgICAgICAgICAgIHN1ZmZpeD1cImZ0wrNcIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJmYS1jdWJlXCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5jdWJlYFwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgOml0ZW1zPVwiYmluc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLmJpbl9pZFwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5iaW5faWRgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uYmluX2lkYCkgfVwiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgaXRlbS10ZXh0PVwiY29kZVwiXG4gICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIEJpblwiXG4gICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInZpZXdfY29tZnlcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpdGVyYXRpb259LmJpbl9pZGBcIlxuICAgICAgICAgICAgICBoaW50PVwiQ2hvb3NlIEJpblwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgOml0ZW1zPVwic3RvcmVfYXRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5zdG9yZV9hdFwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5zdG9yZV9hdGApXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5zdG9yZV9hdGApIH1cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RvcmUgQXRcIlxuICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJkbnNcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpdGVyYXRpb259LnN0b3JlX2F0YFwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJDaG9vc2UgU3RvcmUgQXRcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIDppdGVtcz1cImhhbmRsaW5nUmF0ZXNcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5oYW5kbGluZ190eXBlXCJcbiAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmhhbmRsaW5nX3R5cGVgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uaGFuZGxpbmdfdHlwZWApIH1cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBIYW5kbGluZyBOb3RlXCJcbiAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwicmVjZWlwdFwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uaGFuZGxpbmdfdHlwZWBcIlxuICAgICAgICAgICAgICBoaW50PVwiQ2hvb3NlIEhhbmRsaW5nIE5vdGVcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXN3aXRjaFxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLmRhbWFnZWRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJnZXREYW1hZ2VTdGF0dXMoaXRlbS5kYW1hZ2VkKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB2LWlmPVwiaXRlbS5kYW1hZ2VkXCJcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kNFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZDogaXRlbS5kYW1hZ2VkJ1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLmRhbWFnZV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhbWFnZV9kZXNjcmlwdGlvbmApXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kYW1hZ2VfZGVzY3JpcHRpb25gKSB9XCJcbiAgICAgICAgICAgICAgaGludD1cIlJlcXVpcmVkIElmIE1hcmtlZCBBcyBEYW1hZ2VkXCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kYW1hZ2VfZGVzY3JpcHRpb25gXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAgIGxhYmVsPVwiRGFtYWdlZCBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8di1sYXlvdXRcbiAgICAgICAgICByb3cgXG4gICAgICAgICAgd3JhcFxuICAgICAgICAgIHBhLTJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDYgXG4gICAgICAgICAgICBweC0zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBAY2xpY2s9XCJ2aWV3SW1hZ2VzKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IEl0ZW0gSW1hZ2VzXG4gICAgICAgICAgICAgIDx2LWljb24gXG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgdi1pZj1cIiFyZWFkb25seVwiIFxuICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5QYWNrYWdlSW1hZ2VzTW9kYWwoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFVwbG9hZCBQYWNrYWdlIEltYWdlcyBcbiAgICAgICAgICAgICAgPHYtaWNvbiBcbiAgICAgICAgICAgICAgICByaWdodCBcbiAgICAgICAgICAgICAgPmFkZF9waG90b19hbHRlcm5hdGU8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8cGFja2FnZS1pbWFnZXMtdXBsb2FkZXIgXG4gICAgICAgICAgICAgIDppZD1cIml0ZW0uaWRcIiBcbiAgICAgICAgICAgICAgOml0ZW09XCJpdGVtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtaWY9XCJpdGVtLmRhbWFnZWRcIlxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQ2IFxuICAgICAgICAgICAgcHgtM1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwidmlld0RhbWFnZUltYWdlcygpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBEYW1hZ2UgSW1hZ2VzXG4gICAgICAgICAgICAgIDx2LWljb24gXG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGJyb2tlbl9pbWFnZVxuICAgICAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgIHYtaWY9XCIhcmVhZG9ubHlcIiBcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3BlbkRhbWFnZWRJbWFnZXNNb2RhbCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVXBsb2FkIERhbWFnZWQgSW1hZ2VzIDx2LWljb24gcmlnaHQ+YnJva2VuX2ltYWdlPC92LWljb24+XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPGRhbWFnZWQtaW1hZ2VzLXVwbG9hZGVyIFxuICAgICAgICAgICAgICA6aWQ9XCJpdGVtLmlkXCIgXG4gICAgICAgICAgICAgIDppdGVtPVwiaXRlbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgPHYtbGF5b3V0XG4gICAgICAgICAgcm93IFxuICAgICAgICAgIHdyYXBcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDhcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgIE5vdGVzOlxuICAgICAgICAgICAgPC92LXN1YmhlYWRlcj5cbiAgICAgICAgICAgIDx2LXRleHRhcmVhXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0ubm90ZXNcIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5ub3Rlc2ApXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5ub3Rlc2ApIH1cIlxuICAgICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICAgIG1heGxlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICBoaW50PVwiT3B0aW9uYWxcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpdGVyYXRpb259Lm5vdGVzYFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgdi1pZj1cIml0ZW0uZGFtYWdlZFwiXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICAgIG9yZGVyLW1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgSXMgSXRlbSBSZXBhaXJlZD9cbiAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICA8di1zd2l0Y2hcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5yZXBhaXJlZFwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cImdldFJlcGFpcmVkU3RhdHVzKGl0ZW0ucmVwYWlyZWQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtaWY9XCJpdGVtLnJlcGFpcmVkXCJcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXN1YmhlYWRlcj5cbiAgICAgICAgICAgICAgV2hlbiBpcyBpdCBSZXBhaXJlZD9cbiAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhdGVfcmVwYWlyZWRgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGF0ZV9yZXBhaXJlZGApIH1cIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5kYXRlX3JlcGFpcmVkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIFJlcGFpcmVkXCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRfbm90ZVwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGF0ZV9yZXBhaXJlZGBcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuRGF0ZVJlcGFpcmVkTW9kYWwoKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgIDpyZWY9XCJgZGF0ZV9yZXBhaXJlZF8ke2l0ZW0uaWR9YFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlX3JlcGFpcmVkX21vZGFsXCJcbiAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiaXRlbS5kYXRlX3JlcGFpcmVkXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5kYXRlX3JlcGFpcmVkXCIgXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRhdGVfcmVwYWlyZWRfbW9kYWwgPSBmYWxzZVwiPkNhbmNlbDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZShpdGVtLGl0ZW0uZGF0ZV9yZXBhaXJlZClcIj5PSzwvdi1idG4+XG4gICAgICAgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIFxuICAgICAgPC92LWNvbnRhaW5lcj4gIFxuICAgICAgPGltYWdlcyBcbiAgICAgICAgOmlkPVwiYCR7aXRlbS5pZH1gXCJcbiAgICAgICAgOmltYWdlcz1cIml0ZW0ucGFja2FnZV9pbWFnZXNcIlxuICAgICAgLz5cbiAgICAgIDxkYW1hZ2UtaW1hZ2VzIFxuICAgICAgICA6aWQ9XCJgJHtpdGVtLmlkfWBcIiBcbiAgICAgICAgOmltYWdlcz1cIml0ZW0uZGFtYWdlZF9pbWFnZXNcIlxuICAgICAgLz5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUGFja2FnZUltYWdlc1VwbG9hZGVyIGZyb20gXCJDb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyXCI7XG5pbXBvcnQgRGFtYWdlZEltYWdlc1VwbG9hZGVyIGZyb20gXCJDb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyXCI7XG5pbXBvcnQgdmFsaWRhdGlvbkVycm9yIGZyb20gXCJNaXhpbnMvdmFsaWRhdGlvbi1lcnJvclwiO1xuaW1wb3J0IEltYWdlcyBmcm9tIFwiQ29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXCI7XG5pbXBvcnQgRGFtYWdlSW1hZ2VzIGZyb20gXCJDb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgUGFja2FnZUltYWdlc1VwbG9hZGVyLFxuICAgIERhbWFnZWRJbWFnZXNVcGxvYWRlcixcbiAgICBJbWFnZXMsXG4gICAgRGFtYWdlSW1hZ2VzXG4gIH0sXG4gIG1peGluczogW3ZhbGlkYXRpb25FcnJvcl0sXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHBhY2thZ2VzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBiaW5zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBoYW5kbGluZ1JhdGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzdG9yYWdlUmF0ZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMVxuICAgIH0sXG4gICAgaXRlcmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHN0b3JlX2F0OiBbXCJyYWNrXCIsIFwiZmxvb3JcIl0sXG4gICAgZGF0ZV9yZXBhaXJlZF9tb2RhbDogZmFsc2UsXG4gICAgZGF0ZV9yZXBhaXJlZDogbnVsbFxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICBcIml0ZW0ubGVuZ3RoXCIobmV3dmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRldG90YWxDdWJlKCk7XG4gICAgfSxcbiAgICBcIml0ZW0ud2lkdGhcIihuZXdWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGV0b3RhbEN1YmUoKTtcbiAgICB9LFxuICAgIFwiaXRlbS5oZWlnaHRcIihuZXdWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGV0b3RhbEN1YmUoKTtcbiAgICB9LFxuICAgIFwiaXRlbS5oYW5kbGluZ190eXBlXCIobmV3VmFsdWUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCByYXRlID0gXy5maW5kKHNlbGYuaGFuZGxpbmdSYXRlcywgZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gci5pZCA9PT0gbmV3VmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuaXRlbS5oYW5kbGluZ19mZWUgPSByYXRlLmFtb3VudDtcbiAgICB9LFxuICAgIFwiaXRlbS5zdG9yZV9hdFwiKG5ld1ZhbHVlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgcmF0ZSA9IF8uZmluZChzZWxmLnN0b3JhZ2VSYXRlcywgZnVuY3Rpb24ocikge1xuICAgICAgICBsZXQgbmFtZSA9IHIubmFtZTtcbiAgICAgICAgbGV0IG5hbWVBcnJheSA9IG5hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBuYW1lID0gbmFtZUFycmF5WzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBuYW1lID09PSBuZXdWYWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5pdGVtLnN0b3JhZ2VfZmVlID0gcmF0ZS5hbW91bnQ7XG4gICAgfSxcbiAgICBcIml0ZW0uYmluX2lkXCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwgfHwgbmV3VmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHNlbGYuYmlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYmluID0gXy5maW5kKHNlbGYuYmlucywgZnVuY3Rpb24oYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5pZCA9PT0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChiaW4gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNlbGYuaXRlbS5iaW5fbmFtZSA9IGJpbi5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLml0ZW0uYmluX25hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuRGF0ZVJlcGFpcmVkTW9kYWwoKSB7XG4gICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgdGhpcy5kYXRlX3JlcGFpcmVkX21vZGFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdEYW1hZ2VJbWFnZXMoKSB7XG4gICAgICBCdXMuJGVtaXQoYHZpZXctZGFtYWdlZC1wYWNrYWdlLSR7dGhpcy5pdGVtLmlkfS1pbWFnZXNgKTtcbiAgICB9LFxuICAgIHZpZXdJbWFnZXMoKSB7XG4gICAgICBCdXMuJGVtaXQoYHZpZXctcGFja2FnZS0ke3RoaXMuaXRlbS5pZH0taW1hZ2VzYCk7XG4gICAgfSxcbiAgICBjbG9uZVBhY2thZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBheGlvcy5wb3N0KHJvdXRlKFwiYXBpLnBhY2thZ2UuYWRkXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IGl0ZW0gPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIGl0ZW0uZHNnX2lkID0gc2VsZi5pdGVtLmRzZ19pZDtcbiAgICAgICAgaXRlbS5kYXRlX3JlY2VpdmVkID0gc2VsZi5pdGVtLmRhdGVfcmVjZWl2ZWQ7XG4gICAgICAgIGl0ZW0uZGF0ZV9wcm9jZXNzZWQgPSBzZWxmLml0ZW0uZGF0ZV9wcm9jZXNzZWQ7XG4gICAgICAgIGl0ZW0uY2xpZW50X2lkID0gc2VsZi5pdGVtLmNsaWVudF9pZDtcbiAgICAgICAgaXRlbS5jbGllbnRfbmFtZSA9IHNlbGYuaXRlbS5jbGllbnRfbmFtZTtcbiAgICAgICAgaXRlbS5jdXN0b21lcl9pZCA9IHNlbGYuaXRlbS5jdXN0b21lcl9pZDtcbiAgICAgICAgaXRlbS5jdXN0b21lcl9uYW1lID0gc2VsZi5pdGVtLmN1c3RvbWVyX25hbWU7XG4gICAgICAgIGl0ZW0uc2hpcHBlcl9pZCA9IHNlbGYuaXRlbS5zaGlwcGVyX2lkO1xuICAgICAgICBpdGVtLnNoaXBwZXJfbmFtZSA9IHNlbGYuaXRlbS5zaGlwcGVyX25hbWU7XG5cbiAgICAgICAgaXRlbS5iaW5faWQgPSBzZWxmLml0ZW0uYmluX2lkO1xuICAgICAgICBpdGVtLmJpbl9uYW1lID0gc2VsZi5pdGVtLmJpbl9uYW1lO1xuXG4gICAgICAgIGl0ZW0ucG9fbm8gPSBzZWxmLml0ZW0ucG9fbm87XG4gICAgICAgIGl0ZW0uc3R5bGVfbm8gPSBzZWxmLml0ZW0uc3R5bGVfbm87XG5cbiAgICAgICAgaXRlbS5sZW5ndGggPSBzZWxmLml0ZW0ubGVuZ3RoO1xuICAgICAgICBpdGVtLndpZHRoID0gc2VsZi5pdGVtLndpZHRoO1xuICAgICAgICBpdGVtLmhlaWdodCA9IHNlbGYuaXRlbS5oZWlnaHQ7XG4gICAgICAgIGl0ZW0uY3ViZSA9IHNlbGYuaXRlbS5jdWJlO1xuXG4gICAgICAgIGl0ZW0uZGFtYWdlZCA9IHNlbGYuaXRlbS5kYW1hZ2VkO1xuICAgICAgICBpdGVtLmRhbWFnZV9kZXNjcmlwdGlvbiA9IHNlbGYuaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW0ucmVwYWlyZWQgPSBzZWxmLml0ZW0ucmVwYWlyZWQ7XG4gICAgICAgIGl0ZW0uZGF0ZV9yZXBhaXJlZCA9IHNlbGYuaXRlbS5kYXRlX3JlcGFpcmVkO1xuXG4gICAgICAgIGl0ZW0uaGFuZGxpbmdfZmVlID0gc2VsZi5pdGVtLmhhbmRsaW5nX2ZlZTtcbiAgICAgICAgaXRlbS5oYW5kbGluZ190eXBlID0gc2VsZi5pdGVtLmhhbmRsaW5nX3R5cGU7XG4gICAgICAgIGl0ZW0uc3RvcmVfYXQgPSBzZWxmLml0ZW0uc3RvcmVfYXQ7XG4gICAgICAgIGl0ZW0uc3RvcmFnZV9mZWUgPSBzZWxmLml0ZW0uc3RvcmFnZV9mZWU7XG5cbiAgICAgICAgaXRlbS5kZXNjcmlwdGlvbiA9IHNlbGYuaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgc2VsZi5wYWNrYWdlcy5wdXNoKGl0ZW0pO1xuICAgICAgICBzZWxmLmZvcm0ucGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkTmV3UGFja2FnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGF4aW9zLnBvc3Qocm91dGUoXCJhcGkucGFja2FnZS5hZGRcIikpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgaXRlbSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgaXRlbS5kYXRlX3JlY2VpdmVkID0gc2VsZi5pdGVtLmRhdGVfcmVjZWl2ZWQ7XG4gICAgICAgIGl0ZW0uZGF0ZV9wcm9jZXNzZWQgPSBzZWxmLml0ZW0uZGF0ZV9wcm9jZXNzZWQ7XG4gICAgICAgIGl0ZW0ucG9fbm8gPSBzZWxmLml0ZW0ucG9fbm87XG4gICAgICAgIGl0ZW0uY3VzdG9tZXJfaWQgPSBzZWxmLmZvcm0uY3VzdG9tZXJfaWQ7XG4gICAgICAgIGl0ZW0uY3VzdG9tZXJfbmFtZSA9IHNlbGYuZm9ybS5jdXN0b21lcl9uYW1lO1xuICAgICAgICBpdGVtLmNsaWVudF9pZCA9IHNlbGYuZm9ybS5jbGllbnRfaWQ7XG4gICAgICAgIGl0ZW0uY2xpZW50X25hbWUgPSBzZWxmLmZvcm0uY2xpZW50X25hbWU7XG4gICAgICAgIGl0ZW0uc2hpcHBlcl9pZCA9IHNlbGYuZm9ybS5zaGlwcGVyX2lkO1xuICAgICAgICBpdGVtLnNoaXBwZXJfbmFtZSA9IHNlbGYuZm9ybS5zaGlwcGVyX25hbWU7XG4gICAgICAgIHNlbGYucGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRldG90YWxDdWJlKCkge1xuICAgICAgbGV0IHZvbHVtZSA9IHRoaXMuaXRlbS5sZW5ndGggKiB0aGlzLml0ZW0ud2lkdGggKiB0aGlzLml0ZW0uaGVpZ2h0O1xuICAgICAgdGhpcy5pdGVtLmN1YmUgPSBNYXRoLmNlaWwoKHZvbHVtZSAvIDE3MjgpLnRvRml4ZWQoNCkpO1xuICAgIH0sXG4gICAgc2F2ZShpdGVtLCBkYXRlKSB7XG4gICAgICBsZXQgcmVmID0gYGRhdGVfcmVwYWlyZWRfJHtpdGVtLmlkfWA7XG4gICAgICB0aGlzLiRyZWZzW3JlZl0uc2F2ZShkYXRlKTtcbiAgICB9LFxuICAgIHRvZ2dsZU1vZGFsKGlkKSB7XG4gICAgICB0aGlzLmRhdGVfcmVwYWlyZWRfbW9kYWwgPSAhdGhpcy5kYXRlX3JlcGFpcmVkX21vZGFsO1xuICAgIH0sXG4gICAgb3BlblBhY2thZ2VJbWFnZXNNb2RhbCgpIHtcbiAgICAgIEJ1cy4kZW1pdChgdXBsb2FkLXBhY2thZ2UtaW1hZ2VzLSR7dGhpcy5pdGVtLmlkfWApO1xuICAgIH0sXG4gICAgb3BlbkRhbWFnZWRJbWFnZXNNb2RhbCgpIHtcbiAgICAgIEJ1cy4kZW1pdChgdXBsb2FkLWRhbWFnZWQtaW1hZ2VzLSR7dGhpcy5pdGVtLmlkfWApO1xuICAgIH0sXG4gICAgZGVsZXRlUGFja2FnZShpZCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXhpb3MucG9zdChyb3V0ZShcImFwaS5wYWNrYWdlLmRlbGV0ZVwiLCB7IGlkIH0pKS50aGVuKCgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5wYWNrYWdlcywgeyBpZCB9KTtcbiAgICAgICAgc2VsZi5wYWNrYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRTdG9yZUF0KHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gXCJTdG9yZSBBdDogRmxvb3JcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlN0b3JlIEF0OiBSYWNrXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXREYW1hZ2VTdGF0dXMoc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBcIkRhbWFnZWQ6IFllc1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiRGFtYWdlZDogTm9cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFJlcGFpcmVkU3RhdHVzKHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gXCJSZXBhaXJlZDogWWVzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJSZXBhaXJlZDogTm9cIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjMwYTg1ZjBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMzBhODVmMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjMwYTg1ZjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMzBhODVmMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMzBhODVmMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2M2VmMGE5MFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjMwYTg1ZjBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMzBhODVmMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIzMGE4NWYwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJQYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjMwYTg1ZjBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCI8dGVtcGxhdGU+XG4gIDx2LWRpYWxvZyBcbiAgICB2LW1vZGVsPVwibW9kYWxcIiBcbiAgICBmdWxsc2NyZWVuIFxuICAgIHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIj5cbiAgICA8di1jYXJkIDpsaWdodD1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgY29sb3I9XCJibHVlIGxpZ2h0ZW4tMlwiPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgaWNvbiBcbiAgICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCIgXG4gICAgICAgICAgQGNsaWNrPVwiY2xvc2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICA8di1pY29uPmFycm93X2JhY2s8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cIndoaXRlLS10ZXh0XCI+VXBsb2FkIEltYWdlcyBQSUQ6IHt7IGlkIH19IDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8dXBsb2FkcyBcbiAgICAgICAgOnNpbmdsZT1cInNpbmdsZVwiXG4gICAgICAgIDpwb3N0LXVybD1cInBvc3RVcmxcIiBcbiAgICAgICAgOmZpbGUta2V5PVwiZmlsZUtleVwiXG4gICAgICAgIDppdGVtPVwiaXRlbVwiLz5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXBsb2FkcyBmcm9tIFwiQ29tcG9uZW50cy9VcGxvYWRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIHVwbG9hZHNcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGl0ZW06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHNpbmdsZTogZmFsc2UsXG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIGZpbGVLZXk6IFwicGFja2FnZV9pbWFnZXNcIlxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwb3N0VXJsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGlkID0gc2VsZi5pZDtcbiAgICAgIHJldHVybiByb3V0ZShcImFwaS5wYWNrYWdlLnVwbG9hZFBhY2thZ2VJbWFnZXNcIiwgeyBpZCB9KTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIEJ1cy4kb24oYHVwbG9hZC1wYWNrYWdlLWltYWdlcy0ke3RoaXMuaXRlbS5pZH1gLCAoKSA9PiB7XG4gICAgICBzZWxmLm1vZGFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlR2FsbGVyeU1vZGFsKCkge1xuICAgICAgdGhpcy5tb2RhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgPHYtbGF5b3V0IFxuICAgICAgcm93IFxuICAgICAgd3JhcFxuICAgID5cbiAgICAgIDx2LXNwYWNlci8+XG5cbiAgICAgIDxmaWxlLXVwbG9hZFxuICAgICAgICB2LWlmPVwiIWlzT3B0aW9uXCIgXG4gICAgICAgIHJlZj1cInVwbG9hZFwiXG4gICAgICAgIDpwb3N0LWFjdGlvbj1cInBvc3RBY3Rpb25cIlxuICAgICAgICA6cHV0LWFjdGlvbj1cInB1dEFjdGlvblwiXG4gICAgICAgIDpuYW1lPVwiZmlsZUtleVwiXG4gICAgICAgIDpleHRlbnNpb25zPVwiZXh0ZW5zaW9uc1wiXG4gICAgICAgIDphY2NlcHQ9XCJhY2NlcHRcIlxuICAgICAgICA6bXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgICAgIDpkaXJlY3Rvcnk9XCJkaXJlY3RvcnlcIlxuICAgICAgICA6c2l6ZT1cInNpemUgfHwgMFwiXG4gICAgICAgIDp0aHJlYWQ9XCJ0aHJlYWQgPCAxID8gMSA6ICh0aHJlYWQgPiA1ID8gNSA6IHRocmVhZClcIlxuICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICA6ZGF0YT1cImRhdGFcIlxuICAgICAgICA6ZHJvcD1cImRyb3BcIlxuICAgICAgICA6ZHJvcC1kaXJlY3Rvcnk9XCJkcm9wRGlyZWN0b3J5XCJcbiAgICAgICAgOmFkZC1pbmRleD1cImFkZEluZGV4XCJcbiAgICAgICAgdi1tb2RlbD1cImZpbGVzXCJcbiAgICAgICAgY2xhc3M9XCJ2LWJ0biB2LWJ0bi0tZmxhdCB0aGVtZS0tZGFyayBibHVlLS10ZXh0IG14LTUgcHktMlwiXG4gICAgICAgIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7XCJcbiAgICAgICAgQGlucHV0LWZpbHRlcj1cImlucHV0RmlsdGVyXCJcbiAgICAgICAgQGlucHV0LWZpbGU9XCJpbnB1dEZpbGVcIlxuICAgICAgPlxuICAgICAgICBDaG9vc2UgRmlsZXNcbiAgICAgIDwvZmlsZS11cGxvYWQ+XG4gICAgICA8di1idG4gXG4gICAgICAgIHYtZWxzZVxuICAgICAgICBmbGF0IFxuICAgICAgICBpY29uIFxuICAgICAgICBjb2xvcj1cInJlZCBkYXJrZW4tNFwiIFxuICAgICAgICBAY2xpY2submF0aXZlPVwiaXNPcHRpb24gPSAhaXNPcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8di1pY29uPmFycm93X2JhY2s8L3YtaWNvbj5cbiAgICAgIDwvdi1idG4+XG4gICAgICA8di1idG4gXG4gICAgICAgIHYtaWY9XCIhaXNPcHRpb25cIlxuICAgICAgICBmbGF0IFxuICAgICAgICBpY29uIFxuICAgICAgICBjb2xvcj1cImFtYmVyIGxpZ2h0ZW4tMlwiIFxuICAgICAgICBAY2xpY2submF0aXZlPVwiaXNPcHRpb24gPSAhaXNPcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8di1pY29uPmZhLWNvZzwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICA8L3YtbGF5b3V0PlxuICAgIFxuICAgIDx2LWRhdGEtdGFibGVcbiAgICAgIHYtaWY9XCIhaXNPcHRpb25cIlxuICAgICAgOmhlYWRlcnM9XCJ0aFwiXG4gICAgICA6aXRlbXM9XCJmaWxlc1wiXG4gICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgIDpyb3dzLXBlci1wYWdlLWl0ZW1zPVwicGVyUGFnZURhdGFcIlxuICAgICAgbm8tZGF0YS10ZXh0PVwiQ2xpY2sgYENob29zZSBGaWxlc2AgQnV0dG9uIFRvIFVwbG9hZCBGaWxlcy5cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSBcbiAgICAgICAgc2xvdD1cIml0ZW1zXCIgXG4gICAgICAgIHNsb3Qtc2NvcGU9XCJwcm9wc1wiXG4gICAgICA+XG5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIj5cbiAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgdi1pZj1cInByb3BzLml0ZW0udGh1bWJcIiBcbiAgICAgICAgICAgIDpzcmM9XCJwcm9wcy5pdGVtLnRodW1iXCIgXG4gICAgICAgICAgICB3aWR0aD1cIjQwXCIgXG4gICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCIgXG4gICAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIHYtZWxzZT5ObyBJbWFnZTwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIj5cbiAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xuICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgIGxhenlcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW1hcnktLXRleHRcIj57eyBwcm9wcy5pdGVtLm5hbWUgfCB0cnVuY2F0ZSgyMCkgfX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBzbG90PVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zIHRleHQteHMtY2VudGVyIHRpdGxlIHByaW1hcnktLXRleHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVcGRhdGUgTmFtZVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgc2xvdD1cImlucHV0XCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLml0ZW0ubmFtZVwiXG4gICAgICAgICAgICAgIDpydWxlcz1cIlttYXhJbnB1dF1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxuICAgICAgICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgLz5cblxuICAgICAgICAgIDwvdi1lZGl0LWRpYWxvZz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIj57eyBwcm9wcy5pdGVtLnNpemUgfCBmb3JtYXRTaXplIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIj5cbiAgICAgICAgICA8di1wcm9ncmVzcy1jaXJjdWxhclxuICAgICAgICAgICAgdi1pZj1cInByb3BzLml0ZW0uYWN0aXZlIHx8IHByb3BzLml0ZW0ucHJvZ3Jlc3MgIT09ICcwLjAwJ1wiXG4gICAgICAgICAgICA6c2l6ZT1cIjQ1XCJcbiAgICAgICAgICAgIDp3aWR0aD1cIjVcIlxuICAgICAgICAgICAgOnJvdGF0ZT1cIjM2MFwiXG4gICAgICAgICAgICA6dmFsdWU9XCJwcm9ncmVzcyhwcm9wcy5pdGVtLnByb2dyZXNzKVwiXG4gICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvblwiPnt7IHByb2dyZXNzKHByb3BzLml0ZW0ucHJvZ3Jlc3MpIH19PC9zcGFuPlxuICAgICAgICAgIDwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPCEtLSBzdGF0dXMgLS0+XG4gICAgICAgIDx0ZCBcbiAgICAgICAgICB2LWlmPVwicHJvcHMuaXRlbS5lcnJvclwiIFxuICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgcHJvcHMuaXRlbS5lcnJvciB9fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgXG4gICAgICAgICAgdi1lbHNlLWlmPVwicHJvcHMuaXRlbS5zdWNjZXNzXCIgXG4gICAgICAgICAgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICBzdWNjZXNzXG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBcbiAgICAgICAgICB2LWVsc2UtaWY9XCJwcm9wcy5pdGVtLmFjdGl2ZVwiIFxuICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAgYWN0aXZlXG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBcbiAgICAgICAgICB2LWVsc2UgXG4gICAgICAgICAgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgcHJpbWFyeS0tdGV4dFwiPlxuICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgIHYtaWY9XCJwcm9wcy5pdGVtLmFjdGl2ZVwiIFxuICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgIGNvbG9yPVwicmVkIGRhcmtlbi00XCIgXG4gICAgICAgICAgICBAY2xpY2submF0aXZlPVwicHJvcHMuaXRlbS5hY3RpdmUgPyAkcmVmcy51cGxvYWQudXBkYXRlKHByb3BzLml0ZW0sIHtlcnJvcjogJ2NhbmNlbCd9KSA6IGZhbHNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1pY29uPmZhLXRpbWVzPC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICB2LWVsc2UtaWY9XCJwcm9wcy5pdGVtLmVycm9yICYmIHByb3BzLml0ZW0uZXJyb3IgIT09ICdjb21wcmVzc2luZycgJiYgJHJlZnMudXBsb2FkLmZlYXR1cmVzLmh0bWw1XCIgXG4gICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgaWNvbiBcbiAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiIFxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cIiRyZWZzLnVwbG9hZC51cGRhdGUocHJvcHMuaXRlbSwge2FjdGl2ZTogdHJ1ZSwgZXJyb3I6ICcnLCBwcm9ncmVzczogJzAuMDAnfSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWljb24+ZmEtcmVmcmVzaDwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgdi1lbHNlIFxuICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgIGljb24gXG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cInByb3BzLml0ZW0uc3VjY2VzcyB8fCBwcm9wcy5pdGVtLmVycm9yID09PSAnY29tcHJlc3NpbmcnID8gZmFsc2UgOiAkcmVmcy51cGxvYWQudXBkYXRlKHByb3BzLml0ZW0sIHthY3RpdmU6IHRydWV9KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtaWNvbj5mYS11cGxvYWQ8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICBpY29uIFxuICAgICAgICAgICAgY29sb3I9XCJyZWQgbGlnaHRlbi0yXCIgXG4gICAgICAgICAgICBAY2xpY2submF0aXZlPVwicmVtb3ZlKHByb3BzLml0ZW0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1pY29uPmZhLXRyYXNoPC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L3YtZGF0YS10YWJsZT5cblxuICAgIDx2LWxheW91dFxuICAgICAgdi1pZj1cIiFpc09wdGlvblwiIFxuICAgICAgcm93IFxuICAgICAgd3JhcFxuICAgID5cbiAgICAgIDx2LWZsZXggXG4gICAgICAgIHNtMTJcbiAgICAgICAgbWQ2XG4gICAgICA+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICB2LXNob3c9XCJmaWxlcy5sZW5ndGggPiAwXCJcbiAgICAgICAgICBkYXJrIFxuICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNvbG9yPVwidGVhbCBsaWdodGVuLTJcIiBcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwiJHJlZnMudXBsb2FkLmFjdGl2ZSA9IHRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgU3RhcnQgVXBsb2FkIFxuICAgICAgICAgIDx2LWljb24gXG4gICAgICAgICAgICByaWdodCBcbiAgICAgICAgICA+XG4gICAgICAgICAgICBwbGF5X2Fycm93XG4gICAgICAgICAgPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggXG4gICAgICAgIHNtMTJcbiAgICAgICAgbWQ2XG4gICAgICA+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICB2LXNob3c9XCIkcmVmcy51cGxvYWQgJiYgJHJlZnMudXBsb2FkLmFjdGl2ZVwiXG4gICAgICAgICAgZGFyayBcbiAgICAgICAgICBibG9ja1xuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBjb2xvcj1cImVycm9yXCIgXG4gICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cIiRyZWZzLnVwbG9hZC5hY3RpdmUgPSBmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICBTdG9wIFVwbG9hZCBcbiAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBzdG9wXG4gICAgICAgICAgPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICB2LWlmPVwiJHJlZnMudXBsb2FkICYmICEkcmVmcy51cGxvYWQuYWN0aXZlICYmIGZpbGVzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgIGRhcmsgXG4gICAgICAgICAgYmxvY2tcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgY29sb3I9XCJyZWQgbGlnaHRlbi0yXCJcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwiZmlsZXMgPSBbXVwiXG4gICAgICAgID5cbiAgICAgICAgICBSZW1vdmUgQWxsIEZpbGVzIFxuICAgICAgICAgIDx2LWljb24gXG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgID5cbiAgICAgICAgICAgIGZhLXRyYXNoXG4gICAgICAgICAgPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDx2LWxheW91dCBcbiAgICAgIHYtaWY9XCJpc09wdGlvblwiIFxuICAgICAgcm93IFxuICAgICAgd3JhcFxuICAgID5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsPVwiYWNjZXB0XCJcbiAgICAgICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvcnMuY29sbGVjdCgnbWltZS10eXBlJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiZmEtZmlsZS1jb2RlLW8gXCJcbiAgICAgICAgICBsYWJlbD1cIkFjY2VwdFwiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBoaW50PVwiQWxsb3cgdXBsb2FkIG1pbWUgdHlwZVwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgZGF0YS12di1uYW1lPVwibWltZS10eXBlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgIHYtbW9kZWw9XCJleHRlbnNpb25zXCJcbiAgICAgICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvcnMuY29sbGVjdCgnZXh0ZW5zaW9uJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiZmEtY29nc1wiXG4gICAgICAgICAgbGFiZWw9XCJFeHRlbnNpb25zXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGhpbnQ9XCJBbGxvdyB1cGxvYWQgZmlsZSBleHRlbnNpb25cIlxuICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImV4dGVuc2lvblwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtbW9kZWw9XCJwdXRBY3Rpb25cIlxuICAgICAgICAgIDpsaWdodD1cInRydWVcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiaHR0cFwiXG4gICAgICAgICAgbGFiZWw9XCJQdXQgVXJsXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGhpbnQ9XCJEaXNhYmxlZCBpZiBFbXB0eSwgQWZ0ZXIgdGhlIHNodXRkb3duLCB1c2UgdGhlIFBPU1QgbWV0aG9kIHRvIHVwbG9hZFwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsPVwicG9zdEFjdGlvblwiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ3Bvc3QtdXJsJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiaHR0cFwiXG4gICAgICAgICAgbGFiZWw9XCJQb3N0IFVybFwiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBoaW50PVwiRGVmYXVsdCBQb3N0IFVSTFwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgZGF0YS12di1uYW1lPVwicG9zdC11cmxcIlxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfG51bWVyaWN8bWluX3ZhbHVlOjEnXCJcbiAgICAgICAgICB2LW1vZGVsPVwidGhyZWFkXCJcbiAgICAgICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvcnMuY29sbGVjdCgndGhyZWFkJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiZmEtY3ViZXNcIlxuICAgICAgICAgIGxhYmVsPVwiVGhyZWFkXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGhpbnQ9XCJBbHNvIHVwbG9hZCB0aGUgbnVtYmVyIG9mIGZpbGVzIGF0IHRoZSBzYW1lIHRpbWUgKG51bWJlciBvZiB0aHJlYWRzKVwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgZGF0YS12di1uYW1lPVwidGhyZWFkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwic2l6ZVwiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ21heC1zaXplJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwidHJlbmRpbmdfdXBcIlxuICAgICAgICAgIGxhYmVsPVwiTWF4IHNpemVcIlxuICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgaGludD1cIlNpemUgVW5pdCBpbiBieXRlXCJcbiAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJtYXgtc2l6ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cIm1pblNpemVcIlxuICAgICAgICAgIDpsaWdodD1cInRydWVcIlxuICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9ycy5jb2xsZWN0KCdtaW4tc2l6ZScpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cInRyZW5kaW5nX2Rvd25cIlxuICAgICAgICAgIGxhYmVsPVwiTWluIHNpemVcIlxuICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgaGludD1cIlNpemUgVW5pdCBpbiBieXRlXCJcbiAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJtaW4tc2l6ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cImF1dG9Db21wcmVzc1wiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ2F1dG8tY29tcHJlc3MnKVwiXG4gICAgICAgICAgYXBwZW5kLWljb249XCJmYS1jb21wcmVzc1wiXG4gICAgICAgICAgbGFiZWw9XCJBdXRvbWF0aWNhbGx5IGNvbXByZXNzXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImF1dG8tY29tcHJlc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8cCBcbiAgICAgICAgICB2LWlmPVwiYXV0b0NvbXByZXNzID4gMFwiXG4gICAgICAgICAgY2xhc3M9XCJncmV5LS10ZXh0IGNhcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgTW9yZSB0aGFuIHt7IGF1dG9Db21wcmVzcyB8IGZvcm1hdFNpemUgfX0gZmlsZXMgYXJlIGF1dG9tYXRpY2FsbHkgY29tcHJlc3NlZFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIFxuICAgICAgICAgIHYtZWxzZSBcbiAgICAgICAgICBjbGFzcz1cImdyZXktLXRleHQgY2FwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICBTZXQgdXAgYXV0b21hdGljIGNvbXByZXNzaW9uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di1jaGVja2JveCBcbiAgICAgICAgICA6bGFiZWw9XCJgRHJhZyBhbmQgZHJvcCB1cGxvYWQ6ICR7ZHJvcC50b1N0cmluZygpfWBcIlxuICAgICAgICAgIHYtbW9kZWw9XCJkcm9wXCIgXG4gICAgICAgICAgbGlnaHRcbiAgICAgICAgLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di1jaGVja2JveCBcbiAgICAgICAgICA6bGFiZWw9XCJgTm90IGNoZWNrZWQsIGZpbHRlciB0aGUgZHJhZ2dlZCBmb2xkZXI6ICR7ZHJvcERpcmVjdG9yeS50b1N0cmluZygpfWBcIiBcbiAgICAgICAgICB2LW1vZGVsPVwiZHJvcERpcmVjdG9yeVwiIFxuICAgICAgICAgIGxpZ2h0XG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtY2hlY2tib3ggXG4gICAgICAgICAgOmxhYmVsPVwiYEF1dG9tYXRpY2FsbHkgYWN0aXZhdGUgdXBsb2FkOiAke3VwbG9hZEF1dG8udG9TdHJpbmcoKX1gXCIgXG4gICAgICAgICAgdi1tb2RlbD1cInVwbG9hZEF1dG9cIlxuICAgICAgICAgIGxpZ2h0XG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbWFnZUNvbXByZXNzb3IgZnJvbSBcIkB4a2VzaGkvaW1hZ2UtY29tcHJlc3NvclwiO1xuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSBcInZ1ZS11cGxvYWQtY29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBGaWxlVXBsb2FkXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZmlsZUtleToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHB1dFVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgcG9zdFVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHNpbmdsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpdGVtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGg6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlRodW1iXCIsIHZhbHVlOiBcInRodW1iXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk5hbWVcIiwgdmFsdWU6IFwibmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICAgIHsgdGV4dDogXCJTaXplXCIsIHZhbHVlOiBcInNpemVcIiwgYWxpZ246IFwibGVmdFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgICB7IHRleHQ6IFwiUHJvZ3Jlc3NcIiwgdmFsdWU6IFwicHJvZ3Jlc3NcIiwgYWxpZ246IFwibGVmdFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgICB7IHRleHQ6IFwiU3RhdHVzXCIsIHZhbHVlOiBcInNwZWVkXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkFjdGlvbnNcIiwgYWxpZ246IFwiY2VudGVyXCIsIHNvcnRhYmxlOiBmYWxzZSB9XG4gICAgICBdLFxuICAgICAgZmlsZXM6IFtdLFxuICAgICAgLyogZmlsZSBjb25maWcgKi9cbiAgICAgIGFjY2VwdDogXCJpbWFnZS9wbmcsaW1hZ2UvZ2lmLGltYWdlL2pwZWcsaW1hZ2Uvd2VicFwiLFxuICAgICAgZXh0ZW5zaW9uczogXCJnaWYsanBnLGpwZWcscG5nLHdlYnBcIixcbiAgICAgIG1pblNpemU6IDEwMjQsXG4gICAgICBzaXplOiAxMDI0ICogMTAyNCAqIDEwLFxuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICBkaXJlY3Rvcnk6IGZhbHNlLFxuICAgICAgZHJvcDogdHJ1ZSxcbiAgICAgIGRyb3BEaXJlY3Rvcnk6IHRydWUsXG4gICAgICBhZGRJbmRleDogZmFsc2UsXG4gICAgICB0aHJlYWQ6IDMsXG4gICAgICBuYW1lOiBcImZpbGVcIixcbiAgICAgIHBvc3RBY3Rpb246IFwiL3VwbG9hZHMvcG9zdFwiLFxuICAgICAgcHV0QWN0aW9uOiBcIi91cGxvYWRzL3B1dFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtQ3NyZi1Ub2tlblwiOiBBcHAuY3NyZlRva2VuLFxuICAgICAgICAvKiBhZGRlZCBhY2Nlc3MgdG9rZW4gKi9cbiAgICAgICAgQXV0aG9yaXphdGlvbjogXCJcIlxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgX2NzcmZfdG9rZW46IEFwcC5jc3JmVG9rZW5cbiAgICAgIH0sXG4gICAgICBhdXRvQ29tcHJlc3M6IDEwMjQgKiAxMDI0LFxuICAgICAgdXBsb2FkQXV0bzogZmFsc2UsXG4gICAgICAvKiBmaWxlIG9wdGlvbiAqL1xuICAgICAgaXNPcHRpb246IGZhbHNlLFxuICAgICAgLyogZmlsZSBuYW1lIHZhbGlkYXRpb24gKi9cbiAgICAgIG1heElucHV0OiB2ID0+IHYubGVuZ3RoIDw9IDMwIHx8IFwiSW5wdXQgdG9vIGxvbmchXCIsXG4gICAgICAvKiBmaWxlIHBlciBwYWdlICovXG4gICAgICBwZXJQYWdlRGF0YTogWzEwLCAyNSwgNTAsIHsgdGV4dDogXCJBbGxcIiwgdmFsdWU6IC0xIH1dXG4gICAgfTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBmaWxlS2V5KG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5wb3N0QWN0aW9uID0gdGhpcy5wb3N0VXJsID8gdGhpcy5wb3N0VXJsIDogXCIvdXBsb2Fkcy9wb3N0XCI7XG4gICAgdGhpcy5wdXRBY3Rpb24gPSB0aGlzLnB1dFVybCA/IHRoaXMucHV0VXJsIDogbnVsbDtcbiAgICB0aGlzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3ZtLiRhdXRoLnRva2VuKCl9YDtcbiAgICBpZiAodGhpcy5zaW5nbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcHJvZ3Jlc3MocHJvcHMpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHByb3BzKTtcbiAgICB9LFxuICAgIHJlbW92ZShmaWxlKSB7XG4gICAgICB0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoZmlsZSk7XG4gICAgfSxcbiAgICBpbnB1dEZpbHRlcihuZXdGaWxlLCBvbGRGaWxlLCBwcmV2ZW50KSB7XG4gICAgICBpZiAobmV3RmlsZSAmJiAhb2xkRmlsZSkge1xuICAgICAgICAvLyBCZWZvcmUgYWRkaW5nIGEgZmlsZVxuICAgICAgICAvLyDmt7vliqDmlofku7bliY1cblxuICAgICAgICAvLyBGaWx0ZXIgc3lzdGVtIGZpbGVzIG9yIGhpZGUgZmlsZXNcbiAgICAgICAgLy8g6L+H5ruk57O757uf5paH5Lu2IOWSjOmakOiXj+aWh+S7tlxuICAgICAgICBpZiAoLyhcXC98XikoVGh1bWJzXFwuZGJ8ZGVza3RvcFxcLmluaXxcXC4uKykkLy50ZXN0KG5ld0ZpbGUubmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJldmVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlsdGVyIHBocCBodG1sIGpzIGZpbGVcbiAgICAgICAgLy8g6L+H5rukIHBocCBodG1sIGpzIOaWh+S7tlxuICAgICAgICBpZiAoL1xcLihwaHA1P3xodG1sP3xqc3g/KSQvaS50ZXN0KG5ld0ZpbGUubmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJldmVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0b21hdGljIGNvbXByZXNzaW9uXG4gICAgICAgIC8vIOiHquWKqOWOi+e8qVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbmV3RmlsZS5maWxlICYmXG4gICAgICAgICAgbmV3RmlsZS50eXBlLnN1YnN0cigwLCA2KSA9PT0gXCJpbWFnZS9cIiAmJlxuICAgICAgICAgIHRoaXMuYXV0b0NvbXByZXNzID4gMCAmJlxuICAgICAgICAgIHRoaXMuYXV0b0NvbXByZXNzIDwgbmV3RmlsZS5zaXplXG4gICAgICAgICkge1xuICAgICAgICAgIG5ld0ZpbGUuZXJyb3IgPSBcImNvbXByZXNzaW5nXCI7XG4gICAgICAgICAgY29uc3QgaW1hZ2VDb21wcmVzc29yID0gbmV3IEltYWdlQ29tcHJlc3NvcihudWxsLCB7XG4gICAgICAgICAgICBjb252ZXJ0U2l6ZTogSW5maW5pdHksXG4gICAgICAgICAgICBtYXhXaWR0aDogMTAyNCxcbiAgICAgICAgICAgIG1heEhlaWdodDogMTAyNFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGltYWdlQ29tcHJlc3NvclxuICAgICAgICAgICAgLmNvbXByZXNzKG5ld0ZpbGUuZmlsZSlcbiAgICAgICAgICAgIC50aGVuKGZpbGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC51cGRhdGUobmV3RmlsZSwge1xuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQudXBkYXRlKG5ld0ZpbGUsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgXCJjb21wcmVzc1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0ZpbGUgJiYgKCFvbGRGaWxlIHx8IG5ld0ZpbGUuZmlsZSAhPT0gb2xkRmlsZS5maWxlKSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBibG9iIGZpZWxkXG4gICAgICAgIC8vIOWIm+W7uiBibG9iIOWtl+autVxuICAgICAgICBuZXdGaWxlLmJsb2IgPSBcIlwiO1xuICAgICAgICBsZXQgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICBpZiAoVVJMICYmIFVSTC5jcmVhdGVPYmplY3RVUkwpIHtcbiAgICAgICAgICBuZXdGaWxlLmJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld0ZpbGUuZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaHVtYm5haWxzXG4gICAgICAgIC8vIOe8qeeVpeWbvlxuICAgICAgICBuZXdGaWxlLnRodW1iID0gXCJcIjtcbiAgICAgICAgaWYgKG5ld0ZpbGUuYmxvYiAmJiBuZXdGaWxlLnR5cGUuc3Vic3RyKDAsIDYpID09PSBcImltYWdlL1wiKSB7XG4gICAgICAgICAgbmV3RmlsZS50aHVtYiA9IG5ld0ZpbGUuYmxvYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBhZGQsIHVwZGF0ZSwgcmVtb3ZlIEZpbGUgRXZlbnRcbiAgICBpbnB1dEZpbGUobmV3RmlsZSwgb2xkRmlsZSkge1xuICAgICAgaWYgKG5ld0ZpbGUgJiYgb2xkRmlsZSkge1xuICAgICAgICAvLyB1cGRhdGVcblxuICAgICAgICBpZiAobmV3RmlsZS5hY3RpdmUgJiYgIW9sZEZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgLy8gYmVmb3JlU2VuZFxuXG4gICAgICAgICAgLy8gbWluIHNpemVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXdGaWxlLnNpemUgPj0gMCAmJlxuICAgICAgICAgICAgdGhpcy5taW5TaXplID4gMCAmJlxuICAgICAgICAgICAgbmV3RmlsZS5zaXplIDwgdGhpcy5taW5TaXplXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC51cGRhdGUobmV3RmlsZSwgeyBlcnJvcjogXCJzaXplXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0ZpbGUucHJvZ3Jlc3MgIT09IG9sZEZpbGUucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAvLyBwcm9ncmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0ZpbGUuZXJyb3IgJiYgIW9sZEZpbGUuZXJyb3IpIHtcbiAgICAgICAgICAvLyBlcnJvclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0ZpbGUuc3VjY2VzcyAmJiAhb2xkRmlsZS5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8hIFBVU0ggVE8gQVJSQVkgTkVXIElNQUdFUywgV2UgQ2FuIFVzZSBUaGlzIFRPIERpc3BsYXkgYXQgUGFja2FnZVxuICAgICAgICAgIGxldCBsaW5rID0gbmV3RmlsZS5yZXNwb25zZVt0aGlzLmZpbGVLZXldO1xuICAgICAgICAgIGlmICh0aGlzLmZpbGVLZXkgPT09IFwiZGFtYWdlZF9pbWFnZXNcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbS5kYW1hZ2VkX2ltYWdlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLml0ZW0uZGFtYWdlZF9pbWFnZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXRlbS5kYW1hZ2VkX2ltYWdlcy5wdXNoKGxpbmspO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5maWxlS2V5ID09PSBcInBhY2thZ2VfaW1hZ2VzXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW0ucGFja2FnZV9pbWFnZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtLnBhY2thZ2VfaW1hZ2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLml0ZW0ucGFja2FnZV9pbWFnZXMucHVzaChsaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFuZXdGaWxlICYmIG9sZEZpbGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlXG4gICAgICAgIGlmIChvbGRGaWxlLnN1Y2Nlc3MgJiYgb2xkRmlsZS5yZXNwb25zZS5pZCkge1xuICAgICAgICAgIC8vICQuYWpheCh7XG4gICAgICAgICAgLy8gICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgICAvLyAgIHVybDogJy91cGxvYWQvZGVsZXRlP2lkPScgKyBvbGRGaWxlLnJlc3BvbnNlLmlkLFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQXV0b21hdGljYWxseSBhY3RpdmF0ZSB1cGxvYWRcbiAgICAgIGlmIChcbiAgICAgICAgQm9vbGVhbihuZXdGaWxlKSAhPT0gQm9vbGVhbihvbGRGaWxlKSB8fFxuICAgICAgICBvbGRGaWxlLmVycm9yICE9PSBuZXdGaWxlLmVycm9yXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMudXBsb2FkQXV0byAmJiAhdGhpcy4kcmVmcy51cGxvYWQuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2Fkcy52dWUiLCIvKiFcbiAqIEltYWdlIENvbXByZXNzb3IgdjAuNS4zXG4gKiBodHRwczovL2dpdGh1Yi5jb20veGtlc2hpL2ltYWdlLWNvbXByZXNzb3JcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgWGtlc2hpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE3LTEyLTI5VDA2OjExOjIwLjAyMlpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuSW1hZ2VDb21wcmVzc29yID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGNhbnZhc1RvQmxvYiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qXG4gKiBKYXZhU2NyaXB0IENhbnZhcyB0byBCbG9iXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LUNhbnZhcy10by1CbG9iXG4gKlxuICogQ29weXJpZ2h0IDIwMTIsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uIHN0YWNrb3ZlcmZsb3cgdXNlciBTdG9pdmUncyBjb2RlIHNuaXBwZXQ6XG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS80OTk4OTA4XG4gKi9cblxuLyogZ2xvYmFsIGF0b2IsIEJsb2IsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKHdpbmRvdykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIENhbnZhc1Byb3RvdHlwZSA9XG4gICAgd2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gIHZhciBoYXNCbG9iQ29uc3RydWN0b3IgPVxuICAgIHdpbmRvdy5CbG9iICYmXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKG5ldyBCbG9iKCkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCk7XG4gIHZhciBoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0ID1cbiAgICBoYXNCbG9iQ29uc3RydWN0b3IgJiZcbiAgICB3aW5kb3cuVWludDhBcnJheSAmJlxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KDEwMCldKS5zaXplID09PSAxMDBcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKTtcbiAgdmFyIEJsb2JCdWlsZGVyID1cbiAgICB3aW5kb3cuQmxvYkJ1aWxkZXIgfHxcbiAgICB3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXIgfHxcbiAgICB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHxcbiAgICB3aW5kb3cuTVNCbG9iQnVpbGRlcjtcbiAgdmFyIGRhdGFVUklQYXR0ZXJuID0gL15kYXRhOigoLio/KSg7Y2hhcnNldD0uKj8pPykoO2Jhc2U2NCk/LC87XG4gIHZhciBkYXRhVVJMdG9CbG9iID1cbiAgICAoaGFzQmxvYkNvbnN0cnVjdG9yIHx8IEJsb2JCdWlsZGVyKSAmJlxuICAgIHdpbmRvdy5hdG9iICYmXG4gICAgd2luZG93LkFycmF5QnVmZmVyICYmXG4gICAgd2luZG93LlVpbnQ4QXJyYXkgJiZcbiAgICBmdW5jdGlvbiAoZGF0YVVSSSkge1xuICAgICAgdmFyIG1hdGNoZXMsXG4gICAgICAgIG1lZGlhVHlwZSxcbiAgICAgICAgaXNCYXNlNjQsXG4gICAgICAgIGRhdGFTdHJpbmcsXG4gICAgICAgIGJ5dGVTdHJpbmcsXG4gICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICBpbnRBcnJheSxcbiAgICAgICAgaSxcbiAgICAgICAgYmI7XG4gICAgICAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuICAgICAgbWF0Y2hlcyA9IGRhdGFVUkkubWF0Y2goZGF0YVVSSVBhdHRlcm4pO1xuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkYXRhIFVSSScpXG4gICAgICB9XG4gICAgICAvLyBEZWZhdWx0IHRvIHRleHQvcGxhaW47Y2hhcnNldD1VUy1BU0NJSVxuICAgICAgbWVkaWFUeXBlID0gbWF0Y2hlc1syXVxuICAgICAgICA/IG1hdGNoZXNbMV1cbiAgICAgICAgOiAndGV4dC9wbGFpbicgKyAobWF0Y2hlc1szXSB8fCAnO2NoYXJzZXQ9VVMtQVNDSUknKTtcbiAgICAgIGlzQmFzZTY0ID0gISFtYXRjaGVzWzRdO1xuICAgICAgZGF0YVN0cmluZyA9IGRhdGFVUkkuc2xpY2UobWF0Y2hlc1swXS5sZW5ndGgpO1xuICAgICAgaWYgKGlzQmFzZTY0KSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nOlxuICAgICAgICBieXRlU3RyaW5nID0gYXRvYihkYXRhU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFzZTY0L1VSTEVuY29kZWQgZGF0YSBjb21wb25lbnQgdG8gcmF3IGJpbmFyeTpcbiAgICAgICAgYnl0ZVN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhU3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIC8vIFdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyOlxuICAgICAgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgICAgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdyaXRlIHRoZSBBcnJheUJ1ZmZlciAob3IgQXJyYXlCdWZmZXJWaWV3KSB0byBhIGJsb2I6XG4gICAgICBpZiAoaGFzQmxvYkNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLCB7XG4gICAgICAgICAgdHlwZTogbWVkaWFUeXBlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiBiYi5nZXRCbG9iKG1lZGlhVHlwZSlcbiAgICB9O1xuICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgaWYgKENhbnZhc1Byb3RvdHlwZS5tb3pHZXRBc0ZpbGUpIHtcbiAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVhbGl0eSAmJiBDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5tb3pHZXRBc0ZpbGUoJ2Jsb2InLCB0eXBlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgIHVuZGVmaW5lZChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGF0YVVSTHRvQmxvYlxuICAgIH0pO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZGF0YVVSTHRvQmxvYjtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGF0YVVSTHRvQmxvYiA9IGRhdGFVUkx0b0Jsb2I7XG4gIH1cbn0pKHdpbmRvdyk7XG59KTtcblxuLyogZ2xvYmFscyBCbG9iICovXG4ndXNlIHN0cmljdCc7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNCbG9iID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuIHggaW5zdGFuY2VvZiBCbG9iIHx8IHRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn07XG5cbnZhciBERUZBVUxUUyA9IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiByZWFkIHRoZSBpbWFnZSdzIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAqIGFuZCB0aGVuIHJvdGF0ZSBvciBmbGlwIHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5LlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG5cbiAgLyoqXG4gICAqIFRoZSBtYXggd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1heFdpZHRoOiBJbmZpbml0eSxcblxuICAvKipcbiAgICogVGhlIG1heCBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1heEhlaWdodDogSW5maW5pdHksXG5cbiAgLyoqXG4gICAqIFRoZSBtaW4gd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1pbldpZHRoOiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgbWluSGVpZ2h0OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgd2lkdGggb2YgdGhlIHNvdXJjZSBpbWFnZSB3aWxsIGJlIHVzZWQuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB3aWR0aDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgKiBJdCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gYDBgIGFuZCBgMWAsXG4gICAqIGFuZCBvbmx5IGF2YWlsYWJsZSBmb3IgYGltYWdlL2pwZWdgIGFuZCBgaW1hZ2Uvd2VicGAgaW1hZ2VzLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2IgY2FudmFzLnRvQmxvYn0uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBxdWFsaXR5OiAwLjgsXG5cbiAgLyoqXG4gICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogQnkgZGVmYXVsdCwgdGhlIG9yaWdpbmFsIG1pbWUgdHlwZSBvZiB0aGUgc291cmNlIGltYWdlIGZpbGUgd2lsbCBiZSB1c2VkLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbWltZVR5cGU6ICdhdXRvJyxcblxuICAvKipcbiAgICogUE5HIGZpbGVzIG92ZXIgdGhpcyB2YWx1ZSAoNU0gYnkgZGVmYXVsdCkgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gSlBFR3MuXG4gICAqIFRvIGRpc2FibGUgdGhpcywganVzdCBzZXQgdGhlIHZhbHVlIHRvIGBJbmZpbml0eWAuXG4gICAqIENoZWNrIG91dCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3hrZXNoaS9pbWFnZS1jb21wcmVzc29yL2lzc3Vlcy8yICMyfS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGNvbnZlcnRTaXplOiA1MDAwMDAwLFxuXG4gIC8qKlxuICAgKiBUaGUgc3VjY2VzcyBjYWxsYmFjayBmb3IgdGhlIGltYWdlIGNvbXByZXNzaW5nIHByb2Nlc3MuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gVGhlIGNvbXByZXNzZWQgaW1hZ2UgRmlsZSBvYmplY3QuXG4gICAqIEBleGFtcGxlXG4gICAqIGZ1bmN0aW9uIChmaWxlKSB7IGNvbnNvbGUubG9nKGZpbGUpIH1cbiAgICovXG4gIHN1Y2Nlc3M6IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGltYWdlIGNvbXByZXNzaW5nIHByb2Nlc3MuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIC0gQW4gRXJyb3Igb2JqZWN0LlxuICAgKiBAZXhhbXBsZVxuICAgKiBmdW5jdGlvbiAoZXJyKSB7IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSB9XG4gICAqL1xuICBlcnJvcjogbnVsbFxufTtcblxudmFyIFJFR0VYUF9JTUFHRV9UWVBFID0gL15pbWFnZVxcLy4rJC87XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbWltZSB0eXBlIG9mIGltYWdlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbWFnZVR5cGUodmFsdWUpIHtcbiAgcmV0dXJuIFJFR0VYUF9JTUFHRV9UWVBFLnRlc3QodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgaW1hZ2UgdHlwZSB0byBjb252ZXJ0LlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVkZURvdD10cnVlXSAtIEluY2x1ZGUgYSBsZWFkaW5nIGRvdCBvciBub3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0aGUgaW1hZ2UgZXh0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiBpbWFnZVR5cGVUb0V4dGVuc2lvbih2YWx1ZSkge1xuICB2YXIgaW5jbHVkZURvdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICB2YXIgZXh0ZW5zaW9uID0gaXNJbWFnZVR5cGUodmFsdWUpID8gdmFsdWUuc3Vic3RyKDYpIDogJyc7XG5cbiAgaWYgKGV4dGVuc2lvbiA9PT0gJ2pwZWcnKSB7XG4gICAgZXh0ZW5zaW9uID0gJ2pwZyc7XG4gIH1cblxuICBpZiAoZXh0ZW5zaW9uICYmIGluY2x1ZGVEb3QpIHtcbiAgICBleHRlbnNpb24gPSAnLicgKyBleHRlbnNpb247XG4gIH1cblxuICByZXR1cm4gZXh0ZW5zaW9uO1xufVxuXG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLyoqXG4gKiBHZXQgc3RyaW5nIGZyb20gY2hhciBjb2RlIGluIGRhdGEgdmlldy5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IC0gVGhlIGRhdGEgdmlldyBmb3IgcmVhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgcmVhZCBsZW5ndGguXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVhZCByZXN1bHQuXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIGkgPSB2b2lkIDA7XG5cbiAgbGVuZ3RoICs9IHN0YXJ0O1xuXG4gIGZvciAoaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzdHIgKz0gZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGkpKTtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbnZhciBfd2luZG93JDEgPSB3aW5kb3c7XG52YXIgYnRvYSA9IF93aW5kb3ckMS5idG9hO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIC0gVGhlIG1pbWUgdHlwZSBvZiB0aGUgRGF0YSBVUkwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICovXG5cbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gIHZhciBsZW5ndGggPSB1aW50OC5sZW5ndGg7XG5cbiAgdmFyIGRhdGEgPSAnJztcbiAgdmFyIGkgPSB2b2lkIDA7XG5cbiAgLy8gVHlwZWRBcnJheS5wcm90b3R5cGUuZm9yRWFjaCBpcyBub3Qgc3VwcG9ydGVkIGluIHNvbWUgYnJvd3NlcnMuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGRhdGEgKz0gZnJvbUNoYXJDb2RlKHVpbnQ4W2ldKTtcbiAgfVxuXG4gIHJldHVybiAnZGF0YTonICsgbWltZVR5cGUgKyAnO2Jhc2U2NCwnICsgYnRvYShkYXRhKTtcbn1cblxuLyoqXG4gKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWFkIG9yaWVudGF0aW9uIHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRPcmllbnRhdGlvbihhcnJheUJ1ZmZlcikge1xuICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICB2YXIgb3JpZW50YXRpb24gPSB2b2lkIDA7XG4gIHZhciBsaXR0bGVFbmRpYW4gPSB2b2lkIDA7XG4gIHZhciBhcHAxU3RhcnQgPSB2b2lkIDA7XG4gIHZhciBpZmRTdGFydCA9IHZvaWQgMDtcblxuICAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG4gIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgIHZhciBsZW5ndGggPSBkYXRhVmlldy5ieXRlTGVuZ3RoO1xuICAgIHZhciBvZmZzZXQgPSAyO1xuXG4gICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgYXBwMVN0YXJ0ID0gb2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFwcDFTdGFydCkge1xuICAgIHZhciBleGlmSURDb2RlID0gYXBwMVN0YXJ0ICsgNDtcbiAgICB2YXIgdGlmZk9mZnNldCA9IGFwcDFTdGFydCArIDEwO1xuXG4gICAgaWYgKGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgZXhpZklEQ29kZSwgNCkgPT09ICdFeGlmJykge1xuICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG5cbiAgICAgIGxpdHRsZUVuZGlhbiA9IGVuZGlhbm5lc3MgPT09IDB4NDk0OTtcblxuICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsIGxpdHRsZUVuZGlhbik7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdElGRE9mZnNldCA+PSAweDAwMDAwMDA4KSB7XG4gICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpZmRTdGFydCkge1xuICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuICAgIHZhciBfb2Zmc2V0ID0gdm9pZCAwO1xuICAgIHZhciBpID0gdm9pZCAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgX29mZnNldCA9IGlmZFN0YXJ0ICsgaSAqIDEyICsgMjtcblxuICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAvLyA4IGlzIHRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgdGFnJ3MgdmFsdWVcbiAgICAgICAgICBfb2Zmc2V0ICs9IDg7XG5cbiAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICAgIC8vIE92ZXJyaWRlIHRoZSBvcmllbnRhdGlvbiB3aXRoIGl0cyBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3JpZW50YXRpb247XG59XG5cbi8qKlxuICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcmllbnRhdGlvbiAtIFRoZSBvcmllbnRhdGlvbiB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIHZhciByb3RhdGUgPSAwO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgIGNhc2UgMjpcbiAgICAgIHNjYWxlWCA9IC0xO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBSb3RhdGUgbGVmdCAxODDCsFxuICAgIGNhc2UgMzpcbiAgICAgIHJvdGF0ZSA9IC0xODA7XG4gICAgICBicmVhaztcblxuICAgIC8vIEZsaXAgdmVydGljYWxcbiAgICBjYXNlIDQ6XG4gICAgICBzY2FsZVkgPSAtMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRmxpcCB2ZXJ0aWNhbCBhbmQgcm90YXRlIHJpZ2h0IDkwwrBcbiAgICBjYXNlIDU6XG4gICAgICByb3RhdGUgPSA5MDtcbiAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBSb3RhdGUgcmlnaHQgOTDCsFxuICAgIGNhc2UgNjpcbiAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG4gICAgY2FzZSA3OlxuICAgICAgcm90YXRlID0gOTA7XG4gICAgICBzY2FsZVggPSAtMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gUm90YXRlIGxlZnQgOTDCsFxuICAgIGNhc2UgODpcbiAgICAgIHJvdGF0ZSA9IC05MDtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm90YXRlOiByb3RhdGUsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVlcbiAgfTtcbn1cblxudmFyIGFzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBhcmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgYXdhaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBfd2luZG93ID0gd2luZG93O1xudmFyIEFycmF5QnVmZmVyJDEgPSBfd2luZG93LkFycmF5QnVmZmVyO1xudmFyIEZpbGVSZWFkZXIgPSBfd2luZG93LkZpbGVSZWFkZXI7XG5cbnZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG52YXIgUkVHRVhQX0VYVEVOU0lPTiA9IC9cXC5cXHcrJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbWFnZSBjb21wcmVzc29yLlxuICogQGNsYXNzXG4gKi9cblxudmFyIEltYWdlQ29tcHJlc3NvciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBvZiBJbWFnZUNvbXByZXNzb3IuXG4gICAqIEBwYXJhbSB7RmlsZXxCbG9ifSBmaWxlIC0gVGhlIHRhcmdldCBpbWFnZSBmaWxlIGZvciBjb21wcmVzc2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICovXG4gIGZ1bmN0aW9uIEltYWdlQ29tcHJlc3NvcihmaWxlLCBvcHRpb25zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW1hZ2VDb21wcmVzc29yKTtcblxuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICB0aGlzLmNvbXByZXNzKGZpbGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBjb21wcmVzcyBtZXRob2QuXG4gICAqIEBwYXJhbSB7RmlsZXxCbG9ifSBmaWxlIC0gVGhlIHRhcmdldCBpbWFnZSBmaWxlIGZvciBjb21wcmVzc2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciBjb21wcmVzc2luZy5cbiAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIGluc3RhbmNlLlxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKEltYWdlQ29tcHJlc3NvciwgW3tcbiAgICBrZXk6ICdjb21wcmVzcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXByZXNzKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICBvcHRpb25zID0gX2V4dGVuZHMoe30sIERFRkFVTFRTLCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFBcnJheUJ1ZmZlciQxKSB7XG4gICAgICAgIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIWlzQmxvYihmaWxlKSkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgRmlsZSBvciBCbG9iIG9iamVjdC4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlO1xuXG4gICAgICAgIGlmICghaXNJbWFnZVR5cGUobWltZVR5cGUpKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gaW1hZ2UgRmlsZSBvciBCbG9iIG9iamVjdC4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFVUkwgJiYgIUZpbGVSZWFkZXIpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGUgY3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgaW1hZ2UgY29tcHJlc3Npb24uJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVUkwgJiYgIW9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgIHJlc29sdmUoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoRmlsZVJlYWRlcikge1xuICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHZhciBjaGVja09yaWVudGF0aW9uID0gb3B0aW9ucy5jaGVja09yaWVudGF0aW9uICYmIG1pbWVUeXBlID09PSAnaW1hZ2UvanBlZyc7XG5cbiAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xuXG5cbiAgICAgICAgICAgIHJlc29sdmUoY2hlY2tPcmllbnRhdGlvbiA/IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgdXJsOiBhcnJheUJ1ZmZlclRvRGF0YVVSTChyZXN1bHQsIG1pbWVUeXBlKVxuICAgICAgICAgICAgfSwgcGFyc2VPcmllbnRhdGlvbihnZXRPcmllbnRhdGlvbihyZXN1bHQpKSkgOiB7XG4gICAgICAgICAgICAgIHVybDogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gcmVqZWN0O1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgICAgICAgaWYgKGNoZWNrT3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoX2V4dGVuZHMoe30sIGRhdGEsIHtcbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGltYWdlLm9uYWJvcnQgPSByZWplY3Q7XG4gICAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICBpbWFnZS5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YS51cmw7XG4gICAgICAgIH0pO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmMi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgX3JlZjIkcm90YXRlID0gX3JlZjIucm90YXRlLFxuICAgICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB1bmRlZmluZWQgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgICAgX3JlZjIkc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgICAgICAgc2NhbGVYID0gX3JlZjIkc2NhbGVYID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkc2NhbGVYLFxuICAgICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgICAgc2NhbGVZID0gX3JlZjIkc2NhbGVZID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkc2NhbGVZO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB2YXIgYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChvcHRpb25zLm1heEhlaWdodCwgMCkgfHwgSW5maW5pdHk7XG4gICAgICAgICAgdmFyIG1pbldpZHRoID0gTWF0aC5tYXgob3B0aW9ucy5taW5XaWR0aCwgMCkgfHwgMDtcbiAgICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgICAgdmFyIHdpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBoZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKG1heFdpZHRoIDwgSW5maW5pdHkgJiYgbWF4SGVpZ2h0IDwgSW5maW5pdHkpIHtcbiAgICAgICAgICAgIGlmIChtYXhIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgIG1heEhlaWdodCA9IG1heFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtYXhXaWR0aCA9IG1heEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWF4V2lkdGggPCBJbmZpbml0eSkge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2UgaWYgKG1heEhlaWdodCA8IEluZmluaXR5KSB7XG4gICAgICAgICAgICBtYXhXaWR0aCA9IG1heEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtaW5XaWR0aCA+IDAgJiYgbWluSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgaWYgKG1pbkhlaWdodCAqIGFzcGVjdFJhdGlvID4gbWluV2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluSGVpZ2h0ID0gbWluV2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pbldpZHRoID0gbWluSGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5XaWR0aCA+IDApIHtcbiAgICAgICAgICAgIG1pbkhlaWdodCA9IG1pbldpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5IZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9IG1pbkhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLndpZHRoID4gMCkge1xuICAgICAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHdpZHRoID0gX29wdGlvbnMud2lkdGg7XG5cbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHZhciBfb3B0aW9uczIgPSBvcHRpb25zO1xuICAgICAgICAgICAgaGVpZ2h0ID0gX29wdGlvbnMyLmhlaWdodDtcblxuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIG1pbkhlaWdodCksIG1heEhlaWdodCk7XG5cbiAgICAgICAgICB2YXIgZGVzdFggPSAtd2lkdGggLyAyO1xuICAgICAgICAgIHZhciBkZXN0WSA9IC1oZWlnaHQgLyAyO1xuICAgICAgICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICB2YXIgZGVzdEhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGUpICUgMTgwID09PSA5MCkge1xuICAgICAgICAgICAgdmFyIF93aWR0aCRoZWlnaHQgPSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgICAgICAgIGhlaWdodDogd2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aWR0aCA9IF93aWR0aCRoZWlnaHQud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBfd2lkdGgkaGVpZ2h0LmhlaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmlsbCBjb2xvciAoIzAwMCwgYmxhY2spXG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICBjb250ZXh0LnJvdGF0ZShyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgTWF0aC5mbG9vcihkZXN0WCksIE1hdGguZmxvb3IoZGVzdFkpLCBNYXRoLmZsb29yKGRlc3RXaWR0aCksIE1hdGguZmxvb3IoZGVzdEhlaWdodCkpO1xuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDb252ZXJ0cyBQTkcgZmlsZXMgb3ZlciB0aGUgYGNvbnZlcnRTaXplYCB0byBKUEVHcy5cbiAgICAgICAgICBpZiAoZmlsZS5zaXplID4gb3B0aW9ucy5jb252ZXJ0U2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSAnaW1hZ2UvcG5nJykge1xuICAgICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICdpbWFnZS9qcGVnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoZG9uZSwgb3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9uZShjYW52YXNUb0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBfcmVmMy5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjMubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgIHJlc3VsdCA9IF9yZWYzLnJlc3VsdDtcblxuICAgICAgICBpZiAoVVJMKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIGdyZWF0ZXIgdGhhbiBpdCBhbmQgd2l0aG91dCBzaXplIHJlbGF0ZWQgb3B0aW9uc1xuICAgICAgICAgIGlmIChyZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiAhKG9wdGlvbnMud2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5oZWlnaHQgPiBuYXR1cmFsSGVpZ2h0IHx8IG9wdGlvbnMubWluV2lkdGggPiBuYXR1cmFsV2lkdGggfHwgb3B0aW9ucy5taW5IZWlnaHQgPiBuYXR1cmFsSGVpZ2h0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmlsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IGZpbGUubmFtZTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgZXh0ZW5zaW9uIHRvIG1hdGNoIGl0cyB0eXBlXG4gICAgICAgICAgICBpZiAocmVzdWx0Lm5hbWUgJiYgcmVzdWx0LnR5cGUgIT09IGZpbGUudHlwZSkge1xuICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lLnJlcGxhY2UoUkVHRVhQX0VYVEVOU0lPTiwgaW1hZ2VUeXBlVG9FeHRlbnNpb24ocmVzdWx0LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBvcmlnaW5hbCBmaWxlIGlmIHRoZSByZXN1bHQgaXMgbnVsbCBpbiBzb21lIGNhc2VzLlxuICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIW9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEltYWdlQ29tcHJlc3Nvcjtcbn0oKTtcblxucmV0dXJuIEltYWdlQ29tcHJlc3NvcjtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B4a2VzaGkvaW1hZ2UtY29tcHJlc3Nvci9kaXN0L2ltYWdlLWNvbXByZXNzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCIvKiFcbiAqIE5hbWU6IHZ1ZS11cGxvYWQtY29tcG9uZW50XG4gKiBWZXJzaW9uOiAyLjguOVxuICogQXV0aG9yOiBMaWFuWXVlXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5WdWVVcGxvYWRDb21wb25lbnQgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBYSFIgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcsIG9wdGlvbnMudXJsKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHhocjtcbiAgfTtcblxuICAvKipcbiAgICogU2VuZHMgYSBYSFIgcmVxdWVzdCB3aXRoIGNlcnRhaW4gYm9keVxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGJvZHlcbiAgICovXG4gIHZhciBzZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KHhociwgYm9keSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCh4aHIucmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU2VuZHMgYSBYSFIgcmVxdWVzdCB3aXRoIGNlcnRhaW4gZm9ybSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgdmFyIHNlbmRGb3JtUmVxdWVzdCA9IGZ1bmN0aW9uIHNlbmRGb3JtUmVxdWVzdCh4aHIsIGRhdGEpIHtcbiAgICB2YXIgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvciAodmFyIG5hbWUgaW4gZGF0YSkge1xuICAgICAgYm9keS5hcHBlbmQobmFtZSwgZGF0YVtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHhoci5yZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQoYm9keSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIHNlbmRzIFhIUiByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2VcbiAgICovXG4gIGZ1bmN0aW9uIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICB2YXIgeGhyID0gY3JlYXRlUmVxdWVzdChvcHRpb25zKTtcblxuICAgIHJldHVybiBzZW5kUmVxdWVzdCh4aHIsIG9wdGlvbnMuYm9keSk7XG4gIH1cblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgdmFyIENodW5rVXBsb2FkSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDaHVua1VwbG9hZEhhbmRsZXIoZmlsZSwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rVXBsb2FkSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1heCByZXRyaWVzIGZyb20gb3B0aW9uc1xuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2h1bmtVcGxvYWRIYW5kbGVyLCBbe1xuICAgICAga2V5OiAnY3JlYXRlQ2h1bmtzJyxcblxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYWxsIHRoZSBjaHVua3MgaW4gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNodW5rcygpIHtcbiAgICAgICAgdGhpcy5jaHVua3MgPSBbXTtcblxuICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5jaHVua1NpemU7XG4gICAgICAgIHdoaWxlIChzdGFydCA8IHRoaXMuZmlsZVNpemUpIHtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgIGJsb2I6IHRoaXMuZmlsZS5maWxlLnNsaWNlKHN0YXJ0LCBlbmQpLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHN0YXJ0LFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHJpZXM6IHRoaXMubWF4UmV0cmllc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgdGhpcy5jaHVua1NpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGRhdGVzIHRoZSBwcm9ncmVzcyBvZiB0aGUgZmlsZSB3aXRoIHRoZSBoYW5kbGVyJ3MgcHJvZ3Jlc3NcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAndXBkYXRlRmlsZVByb2dyZXNzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVGaWxlUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHRoaXMuZmlsZS5wcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUGF1ZXMgdGhlIHVwbG9hZCBwcm9jZXNzXG4gICAgICAgKiAtIFN0b3BzIGFsbCBhY3RpdmUgcmVxdWVzdHNcbiAgICAgICAqIC0gU2V0cyB0aGUgZmlsZSBub3QgYWN0aXZlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3BhdXNlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5maWxlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3BDaHVua3MoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTdG9wcyBhbGwgdGhlIGN1cnJlbnQgY2h1bmtzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0b3BDaHVua3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BDaHVua3MoKSB7XG4gICAgICAgIHRoaXMuY2h1bmtzVXBsb2FkaW5nLmZvckVhY2goZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgY2h1bmsueGhyLmFib3J0KCk7XG4gICAgICAgICAgY2h1bmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc3VtZXMgdGhlIGZpbGUgdXBsb2FkXG4gICAgICAgKiAtIFNldHMgdGhlIGZpbGUgYWN0aXZlXG4gICAgICAgKiAtIFN0YXJ0cyB0aGUgZm9sbG93aW5nIGNodW5rc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZXN1bWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5maWxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRDaHVua2luZygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0aGUgZmlsZSB1cGxvYWRcbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAgICAgKiAtIHJlc29sdmUgIFRoZSBmaWxlIHdhcyB1cGxvYWRlZFxuICAgICAgICogLSByZWplY3QgICBUaGUgZmlsZSB1cGxvYWQgZmFpbGVkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwbG9hZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBsb2FkKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICBfdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydCBwaGFzZVxuICAgICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIHRvIGluaXRpYWxpc2UgdGhlIGNodW5rc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzdGFydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaGVhZGVycywge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVybDogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgYm9keTogT2JqZWN0LmFzc2lnbih0aGlzLnN0YXJ0Qm9keSwge1xuICAgICAgICAgICAgcGhhc2U6ICdzdGFydCcsXG4gICAgICAgICAgICBtaW1lX3R5cGU6IHRoaXMuZmlsZVR5cGUsXG4gICAgICAgICAgICBzaXplOiB0aGlzLmZpbGVTaXplLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5maWxlTmFtZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIF90aGlzMi5maWxlLnJlc3BvbnNlID0gcmVzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZWplY3QoJ3NlcnZlcicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5zZXNzaW9uSWQgPSByZXMuZGF0YS5zZXNzaW9uX2lkO1xuICAgICAgICAgIF90aGlzMi5jaHVua1NpemUgPSByZXMuZGF0YS5lbmRfb2Zmc2V0O1xuXG4gICAgICAgICAgX3RoaXMyLmNyZWF0ZUNodW5rcygpO1xuICAgICAgICAgIF90aGlzMi5zdGFydENodW5raW5nKCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBfdGhpczIuZmlsZS5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICBfdGhpczIucmVqZWN0KCdzZXJ2ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RhcnRzIHRvIHVwbG9hZCBjaHVua3NcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnc3RhcnRDaHVua2luZycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRDaHVua2luZygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heEFjdGl2ZUNodW5rczsgaSsrKSB7XG4gICAgICAgICAgdGhpcy51cGxvYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVwbG9hZHMgdGhlIG5leHQgY2h1bmtcbiAgICAgICAqIC0gV29uJ3QgZG8gYW55dGhpbmcgaWYgdGhlIHByb2Nlc3MgaXMgcGF1c2VkXG4gICAgICAgKiAtIFdpbGwgc3RhcnQgZmluaXNoIHBoYXNlIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNodW5rcyB0byB1cGxvYWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAndXBsb2FkTmV4dENodW5rJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGxvYWROZXh0Q2h1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzQ2h1bmtzVG9VcGxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwbG9hZENodW5rKHRoaXMuY2h1bmtzVG9VcGxvYWRbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmNodW5rc1VwbG9hZGluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmlzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVwbG9hZHMgYSBjaHVua1xuICAgICAgICogLSBTZW5kcyB0aGUgY2h1bmsgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAqIC0gU2V0cyB0aGUgY2h1bmsgYXMgdXBsb2FkZWQgaWYgZXZlcnl0aGluZyB3ZW50IHdlbGxcbiAgICAgICAqIC0gRGVjcmVhc2VzIHRoZSBudW1iZXIgb2YgcmV0cmllcyBpZiBhbnl0aGluZyB3ZW50IHdyb25nXG4gICAgICAgKiAtIEZhaWxzIGlmIHRoZXJlIGFyZSBubyBtb3JlIHJldHJpZXNcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2h1bmtcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAndXBsb2FkQ2h1bmsnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZENodW5rKGNodW5rKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGNodW5rLnByb2dyZXNzID0gMDtcbiAgICAgICAgY2h1bmsuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxlUHJvZ3Jlc3MoKTtcbiAgICAgICAgY2h1bmsueGhyID0gY3JlYXRlUmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgIHVybDogdGhpcy5hY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2h1bmsueGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIGNodW5rLnByb2dyZXNzID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBzZW5kRm9ybVJlcXVlc3QoY2h1bmsueGhyLCBPYmplY3QuYXNzaWduKHRoaXMudXBsb2FkQm9keSwge1xuICAgICAgICAgIHBoYXNlOiAndXBsb2FkJyxcbiAgICAgICAgICBzZXNzaW9uX2lkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgICBzdGFydF9vZmZzZXQ6IGNodW5rLnN0YXJ0T2Zmc2V0LFxuICAgICAgICAgIGNodW5rOiBjaHVuay5ibG9iXG4gICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjaHVuay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBjaHVuay51cGxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaHVuay5yZXRyaWVzLS0gPD0gMCkge1xuICAgICAgICAgICAgICBfdGhpczMuc3RvcENodW5rcygpO1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlamVjdCgndXBsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMzLnVwbG9hZE5leHRDaHVuaygpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2h1bmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGNodW5rLnJldHJpZXMtLSA8PSAwKSB7XG4gICAgICAgICAgICBfdGhpczMuc3RvcENodW5rcygpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZWplY3QoJ3VwbG9hZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMy51cGxvYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmluaXNoIHBoYXNlXG4gICAgICAgKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQgdG8gZmluaXNoIHRoZSBwcm9jZXNzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbmlzaCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVQcm9ncmVzcygpO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaGVhZGVycywge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVybDogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgYm9keTogT2JqZWN0LmFzc2lnbih0aGlzLmZpbmlzaEJvZHksIHtcbiAgICAgICAgICAgIHBoYXNlOiAnZmluaXNoJyxcbiAgICAgICAgICAgIHNlc3Npb25faWQ6IHRoaXMuc2Vzc2lvbklkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgX3RoaXM0LmZpbGUucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZWplY3QoJ3NlcnZlcicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzNC5yZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBfdGhpczQuZmlsZS5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICBfdGhpczQucmVqZWN0KCdzZXJ2ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbWF4UmV0cmllcycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMub3B0aW9ucy5tYXhSZXRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBtYXggbnVtYmVyIG9mIGFjdGl2ZSBjaHVua3MgYmVpbmcgdXBsb2FkZWQgYXQgb25jZSBmcm9tIG9wdGlvbnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnbWF4QWN0aXZlQ2h1bmtzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5vcHRpb25zLm1heEFjdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgZmlsZSB0eXBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbGVUeXBlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlLnR5cGU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgZmlsZSBzaXplXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbGVTaXplJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgZmlsZSBzaXplXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbGVOYW1lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyBhY3Rpb24gKHVybCkgdG8gdXBsb2FkIHRoZSBmaWxlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hY3Rpb24gfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBib2R5IHRvIGJlIG1lcmdlZCB3aGVuIHNlbmRpbmcgdGhlIHJlcXVlc3QgaW4gc3RhcnQgcGhhc2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnc3RhcnRCb2R5JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YXJ0Qm9keSB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBib2R5IHRvIGJlIG1lcmdlZCB3aGVuIHNlbmRpbmcgdGhlIHJlcXVlc3QgaW4gdXBsb2FkIHBoYXNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwbG9hZEJvZHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXBsb2FkQm9keSB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBib2R5IHRvIGJlIG1lcmdlZCB3aGVuIHNlbmRpbmcgdGhlIHJlcXVlc3QgaW4gZmluaXNoIHBoYXNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbmlzaEJvZHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluaXNoQm9keSB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBoZWFkZXJzIG9mIHRoZSByZXF1ZXN0cyBmcm9tIG9wdGlvbnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnaGVhZGVycycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgaXQncyByZWFkeSB0byB1cGxvYWQgZmlsZXMgb3Igbm90XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlYWR5VG9VcGxvYWQnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2h1bmtzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIHByb2dyZXNzIG9mIHRoZSBjaHVuayB1cGxvYWRcbiAgICAgICAqIC0gR2V0cyBhbGwgdGhlIGNvbXBsZXRlZCBjaHVua3NcbiAgICAgICAqIC0gR2V0cyB0aGUgcHJvZ3Jlc3Mgb2YgYWxsIHRoZSBjaHVua3MgdGhhdCBhcmUgYmVpbmcgdXBsb2FkZWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjb21wbGV0ZWRQcm9ncmVzcyA9IHRoaXMuY2h1bmtzVXBsb2FkZWQubGVuZ3RoIC8gdGhpcy5jaHVua3MubGVuZ3RoICogMTAwO1xuICAgICAgICB2YXIgdXBsb2FkaW5nUHJvZ3Jlc3MgPSB0aGlzLmNodW5rc1VwbG9hZGluZy5yZWR1Y2UoZnVuY3Rpb24gKHByb2dyZXNzLCBjaHVuaykge1xuICAgICAgICAgIHJldHVybiBwcm9ncmVzcyArIChjaHVuay5wcm9ncmVzcyB8IDApIC8gX3RoaXM1LmNodW5rcy5sZW5ndGg7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihjb21wbGV0ZWRQcm9ncmVzcyArIHVwbG9hZGluZ1Byb2dyZXNzLCAxMDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgYWxsIHRoZSBjaHVua3MgdGhhdCBhcmUgcGVuZGluZyB0byBiZSB1cGxvYWRlZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjaHVua3NUb1VwbG9hZCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLmZpbHRlcihmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgICByZXR1cm4gIWNodW5rLmFjdGl2ZSAmJiAhY2h1bmsudXBsb2FkZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdGhlcmUgYXJlIGNodW5rcyB0byB1cGxvYWQgb3Igbm90XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhc0NodW5rc1RvVXBsb2FkJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaHVua3NUb1VwbG9hZC5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgYWxsIHRoZSBjaHVua3MgdGhhdCBhcmUgdXBsb2FkaW5nXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NodW5rc1VwbG9hZGluZycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLmZpbHRlcihmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgICByZXR1cm4gISFjaHVuay54aHIgJiYgISFjaHVuay5hY3RpdmU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgYWxsIHRoZSBjaHVua3MgdGhhdCBoYXZlIGZpbmlzaGVkIHVwbG9hZGluZ1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjaHVua3NVcGxvYWRlZCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLmZpbHRlcihmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgICByZXR1cm4gISFjaHVuay51cGxvYWRlZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENodW5rVXBsb2FkSGFuZGxlcjtcbiAgfSgpO1xuXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG4gIC8vXG5cbiAgdmFyIHNjcmlwdCA9IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kcGFyZW50LmFkZElucHV0RmlsZShlLnRhcmdldCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLiRwYXJlbnQsXG4gICAgICAgICAgZWw6IHRoaXMuJGVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgX192dWVfc2NyaXB0X18gPSBzY3JpcHQ7XG5cbiAgLyogdGVtcGxhdGUgKi9cbiAgdmFyIF9fdnVlX3JlbmRlcl9fID0gZnVuY3Rpb24gX192dWVfcmVuZGVyX18oKSB7XG4gICAgdmFyIF92bSA9IHRoaXM7dmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtyZXR1cm4gX2MoJ2lucHV0JywgeyBhdHRyczogeyBcInR5cGVcIjogXCJmaWxlXCIsIFwibmFtZVwiOiBfdm0uJHBhcmVudC5uYW1lLCBcImlkXCI6IF92bS4kcGFyZW50LmlucHV0SWQgfHwgX3ZtLiRwYXJlbnQubmFtZSwgXCJhY2NlcHRcIjogX3ZtLiRwYXJlbnQuYWNjZXB0LCBcImNhcHR1cmVcIjogX3ZtLiRwYXJlbnQuY2FwdHVyZSwgXCJ3ZWJraXRkaXJlY3RvcnlcIjogX3ZtLiRwYXJlbnQuZGlyZWN0b3J5ICYmIF92bS4kcGFyZW50LmZlYXR1cmVzLmRpcmVjdG9yeSwgXCJkaXJlY3RvcnlcIjogX3ZtLiRwYXJlbnQuZGlyZWN0b3J5ICYmIF92bS4kcGFyZW50LmZlYXR1cmVzLmRpcmVjdG9yeSwgXCJtdWx0aXBsZVwiOiBfdm0uJHBhcmVudC5tdWx0aXBsZSAmJiBfdm0uJHBhcmVudC5mZWF0dXJlcy5odG1sNSB9LCBvbjogeyBcImNoYW5nZVwiOiBfdm0uY2hhbmdlIH0gfSk7XG4gIH07XG4gIHZhciBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyA9IFtdO1xuXG4gIHZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gdHlwZW9mIF9fdnVlX3JlbmRlcl9fICE9PSAndW5kZWZpbmVkJyA/IHsgcmVuZGVyOiBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zOiBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyB9IDoge307XG4gIC8qIHN0eWxlICovXG4gIHZhciBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18gPSB1bmRlZmluZWQ7XG4gIC8qIHNjb3BlZCAqL1xuICB2YXIgX192dWVfc2NvcGVfaWRfXyA9IHVuZGVmaW5lZDtcbiAgLyogbW9kdWxlIGlkZW50aWZpZXIgKi9cbiAgdmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSB1bmRlZmluZWQ7XG4gIC8qIGZ1bmN0aW9uYWwgdGVtcGxhdGUgKi9cbiAgdmFyIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyA9IGZhbHNlO1xuICAvKiBjb21wb25lbnQgbm9ybWFsaXplciAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9ub3JtYWxpemVfXyh0ZW1wbGF0ZSwgc3R5bGUsIHNjcmlwdCQkMSwgc2NvcGUsIGZ1bmN0aW9uYWwsIG1vZHVsZUlkZW50aWZpZXIsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUikge1xuICAgIHZhciBjb21wb25lbnQgPSBzY3JpcHQkJDEgfHwge307XG5cbiAgICBpZiAoIWNvbXBvbmVudC5yZW5kZXIpIHtcbiAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSB0ZW1wbGF0ZS5yZW5kZXI7XG4gICAgICBjb21wb25lbnQuc3RhdGljUmVuZGVyRm5zID0gdGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgY29tcG9uZW50Ll9jb21waWxlZCA9IHRydWU7XG5cbiAgICAgIGlmIChmdW5jdGlvbmFsKSBjb21wb25lbnQuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50Ll9zY29wZUlkID0gc2NvcGU7XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG4gIC8qIHN0eWxlIGluamVjdCAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXygpIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB2YXIgc3R5bGVzID0gX192dWVfY3JlYXRlX2luamVjdG9yX18uc3R5bGVzIHx8IChfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXy5zdHlsZXMgPSB7fSk7XG4gICAgdmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gYWRkU3R5bGUoaWQsIGNzcykge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgaWQgKyAnXCJdJykpIHJldHVybjsgLy8gU1NSIHN0eWxlcyBhcmUgcHJlc2VudC5cblxuICAgICAgdmFyIGdyb3VwID0gaXNPbGRJRSA/IGNzcy5tZWRpYSB8fCAnZGVmYXVsdCcgOiBpZDtcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tncm91cF0gfHwgKHN0eWxlc1tncm91cF0gPSB7IGlkczogW10sIHBhcnRzOiBbXSwgZWxlbWVudDogdW5kZWZpbmVkIH0pO1xuXG4gICAgICBpZiAoIXN0eWxlLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBjc3Muc291cmNlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdHlsZS5pZHMubGVuZ3RoO1xuXG4gICAgICAgIHN0eWxlLmlkcy5wdXNoKGlkKTtcblxuICAgICAgICBpZiAoY3NzLm1hcCkge1xuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgICAgICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICAgICAgICBjb2RlICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBjc3MubWFwLnNvdXJjZXNbMF0gKyAnICovJztcbiAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgICAgICAgIGNvZGUgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzcy5tYXApKSkpICsgJyAqLyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQgPSBzdHlsZS5lbGVtZW50IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtZ3JvdXA9JyArIGdyb3VwICsgJ10nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3R5bGUuZWxlbWVudCkge1xuICAgICAgICAgIHZhciBlbCA9IHN0eWxlLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgICAgaWYgKGNzcy5tZWRpYSkgZWwuc2V0QXR0cmlidXRlKCdtZWRpYScsIGNzcy5tZWRpYSk7XG4gICAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcsIGdyb3VwKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgJzAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChzdHlsZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JykpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnLCBpbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnBhcnRzLnB1c2goY29kZSk7XG4gICAgICAgICAgc3R5bGUuZWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZS5wYXJ0cy5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSk7XG4gICAgICAgICAgdmFyIG5vZGVzID0gc3R5bGUuZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICAgIGlmIChub2Rlc1tpbmRleF0pIHN0eWxlLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoKSBzdHlsZS5lbGVtZW50Lmluc2VydEJlZm9yZSh0ZXh0Tm9kZSwgbm9kZXNbaW5kZXhdKTtlbHNlIHN0eWxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgU1NSICovXG5cbiAgdmFyIElucHV0RmlsZSA9IF9fdnVlX25vcm1hbGl6ZV9fKF9fdnVlX3RlbXBsYXRlX18sIF9fdnVlX2luamVjdF9zdHlsZXNfXywgdHlwZW9mIF9fdnVlX3NjcmlwdF9fID09PSAndW5kZWZpbmVkJyA/IHt9IDogX192dWVfc2NyaXB0X18sIF9fdnVlX3Njb3BlX2lkX18sIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXywgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXywgdHlwZW9mIF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fICE9PSAndW5kZWZpbmVkJyA/IF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fIDogZnVuY3Rpb24gKCkge30sIHR5cGVvZiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3Jfc3NyX18gIT09ICd1bmRlZmluZWQnID8gX192dWVfY3JlYXRlX2luamVjdG9yX3Nzcl9fIDogZnVuY3Rpb24gKCkge30pO1xuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4gIHZhciBDSFVOS19ERUZBVUxUX09QVElPTlMgPSB7XG4gICAgaGVhZGVyczoge30sXG4gICAgYWN0aW9uOiAnJyxcbiAgICBtaW5TaXplOiAxMDQ4NTc2LFxuICAgIG1heEFjdGl2ZTogMyxcbiAgICBtYXhSZXRyaWVzOiA1LFxuXG4gICAgaGFuZGxlcjogQ2h1bmtVcGxvYWRIYW5kbGVyXG4gIH07XG5cbiAgdmFyIHNjcmlwdCQxID0ge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIElucHV0RmlsZTogSW5wdXRGaWxlXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgaW5wdXRJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnZmlsZSdcbiAgICAgIH0sXG5cbiAgICAgIGFjY2VwdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIGNhcHR1cmU6IHt9LFxuXG4gICAgICBtdWx0aXBsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBtYXhpbXVtOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyAwIDogMTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYWRkSW5kZXg6IHtcbiAgICAgICAgdHlwZTogW0Jvb2xlYW4sIE51bWJlcl1cbiAgICAgIH0sXG5cbiAgICAgIGRpcmVjdG9yeToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBwb3N0QWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgcHV0QWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgY3VzdG9tQWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICB9LFxuXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICB0aW1lb3V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcblxuICAgICAgZHJvcDoge1xuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgZHJvcERpcmVjdG9yeToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICBzaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcblxuICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICBkZWZhdWx0OiBBcnJheVxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IEFycmF5XG4gICAgICB9LFxuXG4gICAgICB0aHJlYWQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAxXG4gICAgICB9LFxuXG4gICAgICAvLyBDaHVuayB1cGxvYWQgZW5hYmxlZFxuICAgICAgY2h1bmtFbmFibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvLyBDaHVuayB1cGxvYWQgcHJvcGVydGllc1xuICAgICAgY2h1bms6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgICByZXR1cm4gQ0hVTktfREVGQVVMVF9PUFRJT05TO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlczogdGhpcy52YWx1ZSxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICBodG1sNTogdHJ1ZSxcbiAgICAgICAgICBkaXJlY3Rvcnk6IGZhbHNlLFxuICAgICAgICAgIGRyYWc6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJvcEFjdGl2ZTogZmFsc2UsXG5cbiAgICAgICAgdXBsb2FkaW5nOiAwLFxuXG4gICAgICAgIGRlc3Ryb3k6IGZhbHNlXG4gICAgICB9O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIG1vdW50ZWRcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICBpbnB1dC5tdWx0aXBsZSA9IHRydWU7XG5cbiAgICAgIC8vIGh0bWw1IOeJueW+gVxuICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSAmJiBpbnB1dC5maWxlcykge1xuICAgICAgICAvLyDkuIrkvKDnm67lvZXnibnlvoFcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC53ZWJraXRkaXJlY3RvcnkgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgaW5wdXQuZGlyZWN0b3J5ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aGlzLmZlYXR1cmVzLmRpcmVjdG9yeSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmi5bmi73nibnlvoFcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaHRtbDUgJiYgdHlwZW9mIGlucHV0Lm9uZHJvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLmZlYXR1cmVzLmRyb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZlYXR1cmVzLmh0bWw1ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbGVzIOWumuS9jee8k+WtmFxuICAgICAgdGhpcy5tYXBzID0ge307XG5cbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyDmm7TmlrDkuIvniLbnuqdcbiAgICAgICAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgICAgICAgIHRoaXMuJHBhcmVudC4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaLluaLvea4suafk1xuICAgICAgICB0aGlzLndhdGNoRHJvcCh0aGlzLmRyb3ApO1xuICAgICAgfSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogYmVmb3JlRGVzdHJveVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAvLyDlt7LplIDmr4FcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG5cbiAgICAgIC8vIOiuvue9ruaIkOS4jea/gOa0u1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgLyoqXG4gICAgICAgKiB1cGxvYWRpbmcg5q2j5Zyo5LiK5Lyg55qE57q/56iLXG4gICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIHVwbG9hZGVkIOaWh+S7tuWIl+ihqOaYr+WQpuWFqOmDqOW3suS4iuS8oFxuICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICAgKi9cbiAgICAgIHVwbG9hZGVkOiBmdW5jdGlvbiB1cGxvYWRlZCgpIHtcbiAgICAgICAgdmFyIGZpbGUgPSB2b2lkIDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZpbGUgPSB0aGlzLmZpbGVzW2ldO1xuICAgICAgICAgIGlmIChmaWxlLmZpbGVPYmplY3QgJiYgIWZpbGUuZXJyb3IgJiYgIWZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjaHVua09wdGlvbnM6IGZ1bmN0aW9uIGNodW5rT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oQ0hVTktfREVGQVVMVF9PUFRJT05TLCB0aGlzLmNodW5rKTtcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6IGZ1bmN0aW9uIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFsnZmlsZS11cGxvYWRzJywgdGhpcy5mZWF0dXJlcy5odG1sNSA/ICdmaWxlLXVwbG9hZHMtaHRtbDUnIDogJ2ZpbGUtdXBsb2Fkcy1odG1sNCcsIHRoaXMuZmVhdHVyZXMuZGlyZWN0b3J5ICYmIHRoaXMuZGlyZWN0b3J5ID8gJ2ZpbGUtdXBsb2Fkcy1kaXJlY3RvcnknIDogdW5kZWZpbmVkLCB0aGlzLmZlYXR1cmVzLmRyb3AgJiYgdGhpcy5kcm9wID8gJ2ZpbGUtdXBsb2Fkcy1kcm9wJyA6IHVuZGVmaW5lZF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICBhY3RpdmU6IGZ1bmN0aW9uIGFjdGl2ZShfYWN0aXZlKSB7XG4gICAgICAgIHRoaXMud2F0Y2hBY3RpdmUoX2FjdGl2ZSk7XG4gICAgICB9LFxuICAgICAgZHJvcEFjdGl2ZTogZnVuY3Rpb24gZHJvcEFjdGl2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgICAgICAgIHRoaXMuJHBhcmVudC4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AodmFsdWUpIHtcbiAgICAgICAgdGhpcy53YXRjaERyb3AodmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShmaWxlcykge1xuICAgICAgICBpZiAodGhpcy5maWxlcyA9PT0gZmlsZXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuXG4gICAgICAgIHZhciBvbGRNYXBzID0gdGhpcy5tYXBzO1xuXG4gICAgICAgIC8vIOmHjeWGmSBtYXBzIOe8k+WtmFxuICAgICAgICB0aGlzLm1hcHMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGVzW2ldO1xuICAgICAgICAgIHRoaXMubWFwc1tmaWxlLmlkXSA9IGZpbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQsIHVwZGF0ZVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXBzKSB7XG4gICAgICAgICAgdmFyIG5ld0ZpbGUgPSB0aGlzLm1hcHNba2V5XTtcbiAgICAgICAgICB2YXIgb2xkRmlsZSA9IG9sZE1hcHNba2V5XTtcbiAgICAgICAgICBpZiAobmV3RmlsZSAhPT0gb2xkRmlsZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0RmlsZShuZXdGaWxlLCBvbGRGaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGVcbiAgICAgICAgZm9yICh2YXIgX2tleSBpbiBvbGRNYXBzKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLm1hcHNbX2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbGUodW5kZWZpbmVkLCBvbGRNYXBzW19rZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAvLyDmuIXnqbpcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5maWxlcztcbiAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG5cbiAgICAgICAgICAvLyDlrprkvY1cbiAgICAgICAgICB0aGlzLm1hcHMgPSB7fTtcblxuICAgICAgICAgIC8vIOS6i+S7tlxuICAgICAgICAgIHRoaXMuZW1pdElucHV0KCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbWl0RmlsZSh1bmRlZmluZWQsIGZpbGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOmAieaLqVxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihpZCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1hcHNbaWQuaWRdIHx8IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwc1tpZF0gfHwgZmFsc2U7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOa3u+WKoFxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQoX2ZpbGVzKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5hZGRJbmRleDtcblxuICAgICAgICB2YXIgZmlsZXMgPSBfZmlsZXM7XG4gICAgICAgIHZhciBpc0FycmF5ID0gZmlsZXMgaW5zdGFuY2VvZiBBcnJheTtcblxuICAgICAgICAvLyDkuI3mmK/mlbDnu4TmlbTnkIbmiJDmlbDnu4RcbiAgICAgICAgaWYgKCFpc0FycmF5KSB7XG4gICAgICAgICAgZmlsZXMgPSBbZmlsZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YGN5Y6G6KeE6IyD5a+56LGhXG4gICAgICAgIHZhciBhZGRGaWxlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5odG1sNSAmJiBmaWxlIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgZmlsZSA9IHtcbiAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLndlYmtpdFJlbGF0aXZlUGF0aCB8fCBmaWxlLnJlbGF0aXZlUGF0aCB8fCBmaWxlLm5hbWUgfHwgJ3Vua25vd24nLFxuICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBmaWxlT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGZpbGUuZmlsZU9iamVjdCA9PT0gZmFsc2UpIDsgZWxzZSBpZiAoZmlsZS5maWxlT2JqZWN0KSB7XG4gICAgICAgICAgICBmaWxlT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgZmlsZU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5maWxlIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgZmlsZU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWxlT2JqZWN0KSB7XG4gICAgICAgICAgICBmaWxlID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBmaWxlT2JqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICBzaXplOiAtMSxcbiAgICAgICAgICAgICAgbmFtZTogJ0ZpbGVuYW1lJyxcbiAgICAgICAgICAgICAgdHlwZTogJycsXG4gICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIHB1dEFjdGlvbjogdGhpcy5wdXRBY3Rpb24sXG4gICAgICAgICAgICAgIHBvc3RBY3Rpb246IHRoaXMucG9zdEFjdGlvbixcbiAgICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0XG4gICAgICAgICAgICB9LCBmaWxlLCB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlOiB7fSxcblxuICAgICAgICAgICAgICBwcm9ncmVzczogJzAuMDAnLCAvLyDlj6ror7tcbiAgICAgICAgICAgICAgc3BlZWQ6IDAgLy8g5Y+q6K+7XG4gICAgICAgICAgICAgIC8vIHhocjogZmFsc2UsICAgICAgICAgICAgICAgIC8vIOWPquivu1xuICAgICAgICAgICAgICAvLyBpZnJhbWU6IGZhbHNlLCAgICAgICAgICAgICAvLyDlj6ror7tcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmaWxlLmRhdGEgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kYXRhLCBmaWxlLmRhdGEgPyBmaWxlLmRhdGEgOiB7fSk7XG5cbiAgICAgICAgICAgIGZpbGUuaGVhZGVycyA9IF9leHRlbmRzKHt9LCB0aGlzLmhlYWRlcnMsIGZpbGUuaGVhZGVycyA/IGZpbGUuaGVhZGVycyA6IHt9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDlv4XpobvljIXlkKsgaWRcbiAgICAgICAgICBpZiAoIWZpbGUuaWQpIHtcbiAgICAgICAgICAgIGZpbGUuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZW1pdEZpbHRlcihmaWxlLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDmnIDlpKfmlbDph4/pmZDliLZcbiAgICAgICAgICBpZiAodGhpcy5tYXhpbXVtID4gMSAmJiBhZGRGaWxlcy5sZW5ndGggKyB0aGlzLmZpbGVzLmxlbmd0aCA+PSB0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZEZpbGVzLnB1c2goZmlsZSk7XG5cbiAgICAgICAgICAvLyDmnIDlpKfmlbDph4/pmZDliLZcbiAgICAgICAgICBpZiAodGhpcy5tYXhpbXVtID09PSAxKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmsqHmnInmlofku7ZcbiAgICAgICAgaWYgKCFhZGRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmmK8gMSDmuIXnqbpcbiAgICAgICAgaWYgKHRoaXMubWF4aW11bSA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa3u+WKoOi/m+WOuyBmaWxlc1xuICAgICAgICB2YXIgbmV3RmlsZXMgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdHJ1ZSB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgIG5ld0ZpbGVzID0gYWRkRmlsZXMuY29uY2F0KHRoaXMuZmlsZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4KSB7XG4gICAgICAgICAgbmV3RmlsZXMgPSBhZGRGaWxlcy5jb25jYXQoW10pO1xuICAgICAgICAgIG5ld0ZpbGVzLnNwbGljZShpbmRleCwgMCwgYWRkRmlsZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0ZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoYWRkRmlsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxlcyA9IG5ld0ZpbGVzO1xuXG4gICAgICAgIC8vIOWumuS9jVxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWRkRmlsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIF9maWxlMiA9IGFkZEZpbGVzW19pXTtcbiAgICAgICAgICB0aGlzLm1hcHNbX2ZpbGUyLmlkXSA9IF9maWxlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS6i+S7tlxuICAgICAgICB0aGlzLmVtaXRJbnB1dCgpO1xuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBhZGRGaWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgdGhpcy5lbWl0RmlsZShhZGRGaWxlc1tfaTJdLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQXJyYXkgPyBhZGRGaWxlcyA6IGFkZEZpbGVzWzBdO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDmt7vliqDooajljZXmlofku7ZcbiAgICAgIGFkZElucHV0RmlsZTogZnVuY3Rpb24gYWRkSW5wdXRGaWxlKGVsKSB7XG4gICAgICAgIHZhciBmaWxlcyA9IFtdO1xuICAgICAgICBpZiAoZWwuZmlsZXMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IGVsLmZpbGVzW2ldO1xuICAgICAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGggfHwgZmlsZS5yZWxhdGl2ZVBhdGggfHwgZmlsZS5uYW1lLFxuICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgIGVsOiBlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuYW1lcyA9IGVsLnZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5zcGxpdCgnLycpO1xuICAgICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICBlbDogZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGQoZmlsZXMpO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDmt7vliqAgRGF0YVRyYW5zZmVyXG4gICAgICBhZGREYXRhVHJhbnNmZXI6IGZ1bmN0aW9uIGFkZERhdGFUcmFuc2ZlcihkYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAgICAgaWYgKGRhdGFUcmFuc2Zlci5pdGVtcyAmJiBkYXRhVHJhbnNmZXIuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhVHJhbnNmZXIuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YVRyYW5zZmVyLml0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0QXNFbnRyeSkge1xuICAgICAgICAgICAgICBpdGVtID0gaXRlbS5nZXRBc0VudHJ5KCkgfHwgaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS53ZWJraXRHZXRBc0VudHJ5KSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKSB8fCBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goaSkge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAvLyDnu5PmnZ8g5paH5Lu25pWw6YeP5aSn5LqOIOacgOWkp+aVsOmHj1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0gfHwgX3RoaXMubWF4aW11bSA+IDAgJiYgZmlsZXMubGVuZ3RoID49IF90aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfdGhpcy5hZGQoZmlsZXMpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdGhpcy5nZXRFbnRyeShpdGVtKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaC5hcHBseShmaWxlcywgX3RvQ29uc3VtYWJsZUFycmF5KHJlc3VsdHMpKTtcbiAgICAgICAgICAgICAgICBmb3JFYWNoKGkgKyAxKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yRWFjaCgwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goZGF0YVRyYW5zZmVyLmZpbGVzW19pM10pO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4aW11bSA+IDAgJiYgZmlsZXMubGVuZ3RoID49IHRoaXMubWF4aW11bSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmFkZChmaWxlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOiOt+W+lyBlbnRyeVxuICAgICAgZ2V0RW50cnk6IGZ1bmN0aW9uIGdldEVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICAgICAgICAgIGVudHJ5LmZpbGUoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbe1xuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXRoICsgZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkgJiYgX3RoaXMyLmRyb3BEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGRpclJlYWRlciA9IGVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICAgICAgdmFyIHJlYWRFbnRyaWVzID0gZnVuY3Rpb24gcmVhZEVudHJpZXMoKSB7XG4gICAgICAgICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHZhciBmb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChpKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWVudHJpZXNbaV0gJiYgaSA9PT0gMCB8fCBfdGhpczIubWF4aW11bSA+IDAgJiYgZmlsZXMubGVuZ3RoID49IF90aGlzMi5tYXhpbXVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghZW50cmllc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF90aGlzMi5nZXRFbnRyeShlbnRyaWVzW2ldLCBwYXRoICsgZW50cnkubmFtZSArICcvJykudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBmaWxlcy5wdXNoLmFwcGx5KGZpbGVzLCBfdG9Db25zdW1hYmxlQXJyYXkocmVzdWx0cykpO1xuICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yRWFjaCgwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKGlkMSwgaWQyKSB7XG4gICAgICAgIHZhciBmaWxlMSA9IHRoaXMuZ2V0KGlkMSk7XG4gICAgICAgIHZhciBmaWxlMiA9IHRoaXMuZ2V0KGlkMik7XG4gICAgICAgIGlmICghZmlsZTEgfHwgIWZpbGUyIHx8IGZpbGUxID09PSBmaWxlMikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChbXSk7XG4gICAgICAgIHZhciBpbmRleDEgPSBmaWxlcy5pbmRleE9mKGZpbGUxKTtcbiAgICAgICAgdmFyIGluZGV4MiA9IGZpbGVzLmluZGV4T2YoZmlsZTIpO1xuICAgICAgICBpZiAoaW5kZXgxID09PSAtMSB8fCBpbmRleDIgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVzW2luZGV4MV0gPSBmaWxlMjtcbiAgICAgICAgZmlsZXNbaW5kZXgyXSA9IGZpbGUxO1xuICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgICAgIHRoaXMuZW1pdElucHV0KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDnp7vpmaRcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGlmICh0aGlzLmVtaXRGaWx0ZXIodW5kZWZpbmVkLCBmaWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChbXSk7XG4gICAgICAgICAgdmFyIGluZGV4ID0gZmlsZXMuaW5kZXhPZihmaWxlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdyZW1vdmUnLCBmaWxlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG5cbiAgICAgICAgICAvLyDlrprkvY1cbiAgICAgICAgICBkZWxldGUgdGhpcy5tYXBzW2ZpbGUuaWRdO1xuXG4gICAgICAgICAgLy8g5LqL5Lu2XG4gICAgICAgICAgdGhpcy5lbWl0SW5wdXQoKTtcbiAgICAgICAgICB0aGlzLmVtaXRGaWxlKHVuZGVmaW5lZCwgZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOabtOaWsFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmdldChpZCk7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgdmFyIG5ld0ZpbGUgPSBfZXh0ZW5kcyh7fSwgZmlsZSwgZGF0YSk7XG4gICAgICAgICAgLy8g5YGc55So5b+F6aG75Yqg5LiK6ZSZ6K+vXG4gICAgICAgICAgaWYgKGZpbGUuZmlsZU9iamVjdCAmJiBmaWxlLmFjdGl2ZSAmJiAhbmV3RmlsZS5hY3RpdmUgJiYgIW5ld0ZpbGUuZXJyb3IgJiYgIW5ld0ZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgbmV3RmlsZS5lcnJvciA9ICdhYm9ydCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZW1pdEZpbHRlcihuZXdGaWxlLCBmaWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmaWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KFtdKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBmaWxlcy5pbmRleE9mKGZpbGUpO1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VwZGF0ZScsIGZpbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWxlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0ZpbGUpO1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcblxuICAgICAgICAgIC8vIOWIoOmZpCAg5pen5a6a5L2NIOWGmeWFpSDmlrDlrprkvY0g77yI5bey5L6/5pSv5oyB5L+u5pS5aWQpXG4gICAgICAgICAgZGVsZXRlIHRoaXMubWFwc1tmaWxlLmlkXTtcbiAgICAgICAgICB0aGlzLm1hcHNbbmV3RmlsZS5pZF0gPSBuZXdGaWxlO1xuXG4gICAgICAgICAgLy8g5LqL5Lu2XG4gICAgICAgICAgdGhpcy5lbWl0SW5wdXQoKTtcbiAgICAgICAgICB0aGlzLmVtaXRGaWxlKG5ld0ZpbGUsIGZpbGUpO1xuICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g6aKE5aSE55CGIOS6i+S7tiDov4fmu6TlmahcbiAgICAgIGVtaXRGaWx0ZXI6IGZ1bmN0aW9uIGVtaXRGaWx0ZXIobmV3RmlsZSwgb2xkRmlsZSkge1xuICAgICAgICB2YXIgaXNQcmV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0LWZpbHRlcicsIG5ld0ZpbGUsIG9sZEZpbGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc1ByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBpc1ByZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXNQcmV2ZW50O1xuICAgICAgfSxcblxuXG4gICAgICAvLyDlpITnkIblkI4g5LqL5Lu2IOWIhuWPkVxuICAgICAgZW1pdEZpbGU6IGZ1bmN0aW9uIGVtaXRGaWxlKG5ld0ZpbGUsIG9sZEZpbGUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQtZmlsZScsIG5ld0ZpbGUsIG9sZEZpbGUpO1xuICAgICAgICBpZiAobmV3RmlsZSAmJiBuZXdGaWxlLmZpbGVPYmplY3QgJiYgbmV3RmlsZS5hY3RpdmUgJiYgKCFvbGRGaWxlIHx8ICFvbGRGaWxlLmFjdGl2ZSkpIHtcbiAgICAgICAgICB0aGlzLnVwbG9hZGluZysrO1xuICAgICAgICAgIC8vIOa/gOa0u1xuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnVwbG9hZChuZXdGaWxlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBuZXdGaWxlID0gX3RoaXMzLmdldChuZXdGaWxlKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3RmlsZSAmJiBuZXdGaWxlLmZpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMy51cGRhdGUobmV3RmlsZSwge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAhbmV3RmlsZS5lcnJvclxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMy51cGRhdGUobmV3RmlsZSwge1xuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGUuY29kZSB8fCBlLmVycm9yIHx8IGUubWVzc2FnZSB8fCBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDUwICsgNTAsIDEwKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFuZXdGaWxlIHx8ICFuZXdGaWxlLmZpbGVPYmplY3QgfHwgIW5ld0ZpbGUuYWN0aXZlKSAmJiBvbGRGaWxlICYmIG9sZEZpbGUuZmlsZU9iamVjdCAmJiBvbGRGaWxlLmFjdGl2ZSkge1xuICAgICAgICAgIC8vIOWBnOatolxuICAgICAgICAgIHRoaXMudXBsb2FkaW5nLS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyDoh6rliqjlu7bnu63mv4DmtLtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmIChCb29sZWFuKG5ld0ZpbGUpICE9PSBCb29sZWFuKG9sZEZpbGUpIHx8IG5ld0ZpbGUuYWN0aXZlICE9PSBvbGRGaWxlLmFjdGl2ZSkpIHtcbiAgICAgICAgICB0aGlzLndhdGNoQWN0aXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW1pdElucHV0OiBmdW5jdGlvbiBlbWl0SW5wdXQoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5maWxlcyk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOS4iuS8oFxuICAgICAgdXBsb2FkOiBmdW5jdGlvbiB1cGxvYWQoaWQpIHtcbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmdldChpZCk7XG5cbiAgICAgICAgLy8g6KKr5Yig6ZmkXG4gICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnbm90X2V4aXN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5LiN5piv5paH5Lu25a+56LGhXG4gICAgICAgIGlmICghZmlsZS5maWxlT2JqZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdmaWxlX29iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pyJ6ZSZ6K+v55u05o6l5ZON5bqUXG4gICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZpbGUuZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5bey5a6M5oiQ55u05o6l5ZON5bqUXG4gICAgICAgIGlmIChmaWxlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5ZCO57yAXG4gICAgICAgIHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiAoZXh0ZW5zaW9ucy5sZW5ndGggfHwgdHlwZW9mIGV4dGVuc2lvbnMubGVuZ3RoID09PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICBpZiAoKHR5cGVvZiBleHRlbnNpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihleHRlbnNpb25zKSkgIT09ICdvYmplY3QnIHx8ICEoZXh0ZW5zaW9ucyBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHRlbnNpb25zID0gbmV3IFJlZ0V4cCgnXFxcXC4oJyArIGV4dGVuc2lvbnMuam9pbignfCcpLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKSArICcpJCcsICdpJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWxlLm5hbWUuc2VhcmNoKGV4dGVuc2lvbnMpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdleHRlbnNpb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpKflsI9cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSA+IDAgJiYgZmlsZS5zaXplID49IDAgJiYgZmlsZS5zaXplID4gdGhpcy5zaXplKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdzaXplJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21BY3Rpb24oZmlsZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5odG1sNSkge1xuICAgICAgICAgIGlmICh0aGlzLnNob3VsZFVzZUNodW5rVXBsb2FkKGZpbGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRDaHVuayhmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbGUucHV0QWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRQdXQoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWxlLnBvc3RBY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwbG9hZEh0bWw1KGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsZS5wb3N0QWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkSHRtbDQoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBhY3Rpb24gY29uZmlndXJlZCcpO1xuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdGhpcyBmaWxlIHNob3VsZCBiZSB1cGxvYWRlZCB1c2luZyBjaHVuayB1cGxvYWQgb3Igbm90XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIE9iamVjdCBmaWxlXG4gICAgICAgKi9cbiAgICAgIHNob3VsZFVzZUNodW5rVXBsb2FkOiBmdW5jdGlvbiBzaG91bGRVc2VDaHVua1VwbG9hZChmaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rRW5hYmxlZCAmJiAhIXRoaXMuY2h1bmtPcHRpb25zLmhhbmRsZXIgJiYgZmlsZS5zaXplID4gdGhpcy5jaHVua09wdGlvbnMubWluU2l6ZTtcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGxvYWQgYSBmaWxlIHVzaW5nIENodW5rIG1ldGhvZFxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSBGaWxlIGZpbGVcbiAgICAgICAqL1xuICAgICAgdXBsb2FkQ2h1bms6IGZ1bmN0aW9uIHVwbG9hZENodW5rKGZpbGUpIHtcbiAgICAgICAgdmFyIEhhbmRsZXJDbGFzcyA9IHRoaXMuY2h1bmtPcHRpb25zLmhhbmRsZXI7XG4gICAgICAgIGZpbGUuY2h1bmsgPSBuZXcgSGFuZGxlckNsYXNzKGZpbGUsIHRoaXMuY2h1bmtPcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gZmlsZS5jaHVuay51cGxvYWQoKTtcbiAgICAgIH0sXG4gICAgICB1cGxvYWRQdXQ6IGZ1bmN0aW9uIHVwbG9hZFB1dChmaWxlKSB7XG4gICAgICAgIHZhciBxdWVyeXMgPSBbXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlsZS5kYXRhKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWxlLmRhdGFba2V5XTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcXVlcnlzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gcXVlcnlzLmxlbmd0aCA/IChmaWxlLnB1dEFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHF1ZXJ5cy5qb2luKCcmJykgOiAnJztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignUFVUJywgZmlsZS5wdXRBY3Rpb24gKyBxdWVyeVN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZFhocih4aHIsIGZpbGUsIGZpbGUuZmlsZSk7XG4gICAgICB9LFxuICAgICAgdXBsb2FkSHRtbDU6IGZ1bmN0aW9uIHVwbG9hZEh0bWw1KGZpbGUpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBuZXcgd2luZG93LkZvcm1EYXRhKCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGZpbGUuZGF0YSkge1xuICAgICAgICAgIHZhbHVlID0gZmlsZS5kYXRhW2tleV07XG4gICAgICAgICAgaWYgKHZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICBmb3JtLmFwcGVuZChrZXksIHZhbHVlLCB2YWx1ZS5uYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JtLmFwcGVuZCh0aGlzLm5hbWUsIGZpbGUuZmlsZSwgZmlsZS5maWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBmaWxlLnBvc3RBY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRYaHIoeGhyLCBmaWxlLCBmb3JtKTtcbiAgICAgIH0sXG4gICAgICB1cGxvYWRYaHI6IGZ1bmN0aW9uIHVwbG9hZFhocih4aHIsIF9maWxlLCBib2R5KSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaWxlID0gX2ZpbGU7XG4gICAgICAgIHZhciBzcGVlZFRpbWUgPSAwO1xuICAgICAgICB2YXIgc3BlZWRMb2FkZWQgPSAwO1xuXG4gICAgICAgIC8vIOi/m+W6puadoVxuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIOi/mOacquW8gOWni+S4iuS8oCDlt7LliKDpmaQg5pyq5r+A5rS7XG4gICAgICAgICAgZmlsZSA9IF90aGlzNC5nZXQoZmlsZSk7XG4gICAgICAgICAgaWYgKCFlLmxlbmd0aENvbXB1dGFibGUgfHwgIWZpbGUgfHwgIWZpbGUuZmlsZU9iamVjdCB8fCAhZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDov5vluqYg6YCf5bqmIOavj+enkuabtOaWsOS4gOasoVxuICAgICAgICAgIHZhciBzcGVlZFRpbWUyID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgaWYgKHNwZWVkVGltZTIgPT09IHNwZWVkVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGVlZFRpbWUgPSBzcGVlZFRpbWUyO1xuXG4gICAgICAgICAgZmlsZSA9IF90aGlzNC51cGRhdGUoZmlsZSwge1xuICAgICAgICAgICAgcHJvZ3Jlc3M6IChlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApLnRvRml4ZWQoMiksXG4gICAgICAgICAgICBzcGVlZDogZS5sb2FkZWQgLSBzcGVlZExvYWRlZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNwZWVkTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5qOA5p+l5r+A5rS754q25oCBXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmaWxlID0gX3RoaXM0LmdldChmaWxlKTtcbiAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmZpbGVPYmplY3QgJiYgIWZpbGUuc3VjY2VzcyAmJiAhZmlsZS5lcnJvciAmJiBmaWxlLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gMTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIGNvbXBsZXRlID0gdm9pZCAwO1xuICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKGUpIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+WkhOeQhui/h+S6hlxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsZSA9IF90aGlzNC5nZXQoZmlsZSk7XG5cbiAgICAgICAgICAgIC8vIOS4jeWtmOWcqOebtOaOpeWTjeW6lFxuICAgICAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ25vdF9leGlzdHMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5LiN5piv5paH5Lu25a+56LGhXG4gICAgICAgICAgICBpZiAoIWZpbGUuZmlsZU9iamVjdCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdmaWxlX29iamVjdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmnInplJnor6/oh6rliqjlk43lupRcbiAgICAgICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZmlsZS5lcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOacqua/gOa0u1xuICAgICAgICAgICAgaWYgKCFmaWxlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdhYm9ydCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlt7LlrozmiJAg55u05o6l55u45bqUXG4gICAgICAgICAgICBpZiAoZmlsZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICd0aW1lb3V0JzpcbiAgICAgICAgICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBlLnR5cGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICBpZiAoIXhoci5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnbmV0d29yayc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICdzZXJ2ZXInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnZGVuaWVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ3NlcnZlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICdkZW5pZWQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnByb2dyZXNzID0gJzEwMC4wMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5kZXhPZignL2pzb24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmm7TmlrBcbiAgICAgICAgICAgIGZpbGUgPSBfdGhpczQudXBkYXRlKGZpbGUsIGRhdGEpO1xuXG4gICAgICAgICAgICAvLyDnm7jlupTplJnor69cbiAgICAgICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZmlsZS5lcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWTjeW6lFxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIOS6i+S7tlxuICAgICAgICAgIHhoci5vbmxvYWQgPSBmbjtcbiAgICAgICAgICB4aHIub25lcnJvciA9IGZuO1xuICAgICAgICAgIHhoci5vbmFib3J0ID0gZm47XG4gICAgICAgICAgeGhyLm9udGltZW91dCA9IGZuO1xuXG4gICAgICAgICAgLy8g6LaF5pe2XG4gICAgICAgICAgaWYgKGZpbGUudGltZW91dCkge1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSBmaWxlLnRpbWVvdXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaGVhZGVyc1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmaWxlLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgZmlsZS5oZWFkZXJzW2tleV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOabtOaWsCB4aHJcbiAgICAgICAgICBmaWxlID0gX3RoaXM0LnVwZGF0ZShmaWxlLCB7IHhocjogeGhyIH0pO1xuXG4gICAgICAgICAgLy8g5byA5aeL5LiK5LygXG4gICAgICAgICAgeGhyLnNlbmQoYm9keSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHVwbG9hZEh0bWw0OiBmdW5jdGlvbiB1cGxvYWRIdG1sNChfZmlsZSkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB2YXIgZmlsZSA9IF9maWxlO1xuICAgICAgICB2YXIgb25LZXlkb3duID0gZnVuY3Rpb24gb25LZXlkb3duKGUpIHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5pZCA9ICd1cGxvYWQtaWZyYW1lLScgKyBmaWxlLmlkO1xuICAgICAgICBpZnJhbWUubmFtZSA9ICd1cGxvYWQtaWZyYW1lLScgKyBmaWxlLmlkO1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MXB4O2hlaWdodDoxcHg7dG9wOi05OTllbTtwb3NpdGlvbjphYnNvbHV0ZTsgbWFyZ2luLXRvcDotOTk5ZW07Jyk7XG5cbiAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgZm9ybS5hY3Rpb24gPSBmaWxlLnBvc3RBY3Rpb247XG5cbiAgICAgICAgZm9ybS5uYW1lID0gJ3VwbG9hZC1mb3JtLScgKyBmaWxlLmlkO1xuXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ3VwbG9hZC1pZnJhbWUtJyArIGZpbGUuaWQpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZW5jdHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICB2YXIgaW5wdXQgPSB2b2lkIDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmaWxlLmRhdGEpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpbGUuZGF0YVtrZXldO1xuICAgICAgICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmaWxlLmVsKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgdmFyIGdldFJlc3BvbnNlRGF0YSA9IGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YSgpIHtcbiAgICAgICAgICB2YXIgZG9jID0gdm9pZCAwO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgZG9jID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkb2MgPSBpZnJhbWUuY29udGVudERvY3VtZW50ID8gaWZyYW1lLmNvbnRlbnREb2N1bWVudCA6IGlmcmFtZS5kb2N1bWVudDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBkb2MgPSBpZnJhbWUuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkb2MgJiYgZG9jLmJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2MuYm9keS5pbm5lckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmaWxlID0gX3RoaXM1LnVwZGF0ZShmaWxlLCB7IGlmcmFtZTogaWZyYW1lIH0pO1xuXG4gICAgICAgICAgICAvLyDkuI3lrZjlnKhcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdub3RfZXhpc3RzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWumuaXtuajgOafpVxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBmaWxlID0gX3RoaXM1LmdldChmaWxlKTtcbiAgICAgICAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS5maWxlT2JqZWN0ICYmICFmaWxlLnN1Y2Nlc3MgJiYgIWZpbGUuZXJyb3IgJiYgZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWZyYW1lLm9uYWJvcnQoeyB0eXBlOiBmaWxlID8gJ2Fib3J0JyA6ICdub3RfZXhpc3RzJyB9KTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKGUpIHtcbiAgICAgICAgICAgICAgLy8g5bey57uP5aSE55CG6L+H5LqGXG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIOWFs+mXrSBlc2Mg5LqL5Lu2XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG5cbiAgICAgICAgICAgICAgZmlsZSA9IF90aGlzNS5nZXQoZmlsZSk7XG5cbiAgICAgICAgICAgICAgLy8g5LiN5a2Y5Zyo55u05o6l5ZON5bqUXG4gICAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ25vdF9leGlzdHMnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIOS4jeaYr+aWh+S7tuWvueixoVxuICAgICAgICAgICAgICBpZiAoIWZpbGUuZmlsZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ2ZpbGVfb2JqZWN0Jyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDmnInplJnor6/oh6rliqjlk43lupRcbiAgICAgICAgICAgICAgaWYgKGZpbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGZpbGUuZXJyb3IpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8g5pyq5r+A5rS7XG4gICAgICAgICAgICAgIGlmICghZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdhYm9ydCcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8g5bey5a6M5oiQIOebtOaOpeebuOW6lFxuICAgICAgICAgICAgICBpZiAoZmlsZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBnZXRSZXNwb25zZURhdGEoKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhYm9ydCc6XG4gICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ2Fib3J0JztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBmaWxlLmVycm9yO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ25ldHdvcmsnO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICdkZW5pZWQnO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSBmaWxlLmVycm9yO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnbmV0d29yayc7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2dyZXNzID0gJzEwMC4wMCc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3Vic3RyKDAsIDEpID09PSAneycgJiYgcmVzcG9uc2Uuc3Vic3RyKHJlc3BvbnNlLmxlbmd0aCAtIDEsIDEpID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIOabtOaWsFxuICAgICAgICAgICAgICBmaWxlID0gX3RoaXM1LnVwZGF0ZShmaWxlLCBkYXRhKTtcblxuICAgICAgICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZmlsZS5lcnJvcik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDlk43lupRcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDmt7vliqDkuovku7ZcbiAgICAgICAgICAgIGlmcmFtZS5vbmxvYWQgPSBmbjtcbiAgICAgICAgICAgIGlmcmFtZS5vbmVycm9yID0gZm47XG4gICAgICAgICAgICBpZnJhbWUub25hYm9ydCA9IGZuO1xuXG4gICAgICAgICAgICAvLyDnpoHmraIgZXNjIOmUrlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcblxuICAgICAgICAgICAgLy8g5o+Q5LqkXG4gICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWZyYW1lLnBhcmVudE5vZGUgJiYgaWZyYW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWZyYW1lLnBhcmVudE5vZGUgJiYgaWZyYW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB3YXRjaEFjdGl2ZTogZnVuY3Rpb24gd2F0Y2hBY3RpdmUoYWN0aXZlKSB7XG4gICAgICAgIHZhciBmaWxlID0gdm9pZCAwO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoZmlsZSA9IHRoaXMuZmlsZXNbaW5kZXhdKSB7XG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICBpZiAoIWZpbGUuZmlsZU9iamVjdCkgOyBlbHNlIGlmIChhY3RpdmUgJiYgIXRoaXMuZGVzdHJveSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkaW5nID49IHRoaXMudGhyZWFkIHx8IHRoaXMudXBsb2FkaW5nICYmICF0aGlzLmZlYXR1cmVzLmh0bWw1KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmaWxlLmFjdGl2ZSAmJiAhZmlsZS5lcnJvciAmJiAhZmlsZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlKGZpbGUsIHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGUoZmlsZSwgeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51cGxvYWRpbmcgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd2F0Y2hEcm9wOiBmdW5jdGlvbiB3YXRjaERyb3AoX2VsKSB7XG4gICAgICAgIHZhciBlbCA9IF9lbDtcbiAgICAgICAgaWYgKCF0aGlzLmZlYXR1cmVzLmRyb3ApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnp7vpmaTmjILovb1cbiAgICAgICAgaWYgKHRoaXMuZHJvcEVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5vbkRyYWdlbnRlciwgZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5vbkRyYWdsZWF2ZSwgZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLm9uRHJhZ292ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Ecm9wLCBmYWxzZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICBlbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIHx8IHRoaXMuJHJvb3QuJGVsLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsID09PSB0cnVlKSB7XG4gICAgICAgICAgZWwgPSB0aGlzLiRwYXJlbnQuJGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcm9wRWxlbWVudCA9IGVsO1xuXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbGVtZW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5vbkRyYWdlbnRlciwgZmFsc2UpO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMub25EcmFnbGVhdmUsIGZhbHNlKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5vbkRvY3VtZW50RHJvcCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZHJvcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLm9uRHJhZ292ZXIsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRyb3BFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRHJvcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25EcmFnZW50ZXI6IGZ1bmN0aW9uIG9uRHJhZ2VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZHJvcEFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuZHJvcEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkRyYWdsZWF2ZTogZnVuY3Rpb24gb25EcmFnbGVhdmUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGUudGFyZ2V0ID09PSBlLmV4cGxpY2l0T3JpZ2luYWxUYXJnZXQgfHwgZS5zY3JlZW5YID09PSAwICYmIGUuc2NyZWVuWSA9PT0gMCAmJiAhZS5mcm9tRWxlbWVudCAmJiBlLm9mZnNldFggPD0gMCkge1xuICAgICAgICAgIHRoaXMuZHJvcEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25EcmFnb3ZlcjogZnVuY3Rpb24gb25EcmFnb3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBvbkRvY3VtZW50RHJvcDogZnVuY3Rpb24gb25Eb2N1bWVudERyb3AoKSB7XG4gICAgICAgIHRoaXMuZHJvcEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIG9uRHJvcDogZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFkZERhdGFUcmFuc2ZlcihlLmRhdGFUcmFuc2Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBfX3Z1ZV9zY3JpcHRfXyQxID0gc2NyaXB0JDE7XG5cbiAgLyogdGVtcGxhdGUgKi9cbiAgdmFyIF9fdnVlX3JlbmRlcl9fJDEgPSBmdW5jdGlvbiBfX3Z1ZV9yZW5kZXJfXygpIHtcbiAgICB2YXIgX3ZtID0gdGhpczt2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO3JldHVybiBfYygnbGFiZWwnLCB7IGNsYXNzOiBfdm0uY2xhc3NOYW1lIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQtZmlsZScpXSwgMik7XG4gIH07XG4gIHZhciBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyQxID0gW107XG5cbiAgdmFyIF9fdnVlX3RlbXBsYXRlX18kMSA9IHR5cGVvZiBfX3Z1ZV9yZW5kZXJfXyQxICE9PSAndW5kZWZpbmVkJyA/IHsgcmVuZGVyOiBfX3Z1ZV9yZW5kZXJfXyQxLCBzdGF0aWNSZW5kZXJGbnM6IF9fdnVlX3N0YXRpY1JlbmRlckZuc19fJDEgfSA6IHt9O1xuICAvKiBzdHlsZSAqL1xuICB2YXIgX192dWVfaW5qZWN0X3N0eWxlc19fJDEgPSBmdW5jdGlvbiAoaW5qZWN0KSB7XG4gICAgaWYgKCFpbmplY3QpIHJldHVybjtcbiAgICBpbmplY3QoXCJkYXRhLXYtMDBjOTdjMDRfMFwiLCB7IHNvdXJjZTogXCJcXG4uZmlsZS11cGxvYWRze292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9ja1xcbn1cXG4uZmlsZS11cGxvYWRzLmZpbGUtdXBsb2Fkcy1odG1sNCBpbnB1dFt0eXBlPWZpbGVde29wYWNpdHk6MDtmb250LXNpemU6MjBlbTt6LWluZGV4OjE7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJVxcbn1cXG4uZmlsZS11cGxvYWRzLmZpbGUtdXBsb2Fkcy1odG1sNSBpbnB1dFt0eXBlPWZpbGVde292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpmaXhlZDt3aWR0aDoxcHg7aGVpZ2h0OjFweDt6LWluZGV4Oi0xO29wYWNpdHk6MFxcbn1cIiwgbWFwOiB1bmRlZmluZWQsIG1lZGlhOiB1bmRlZmluZWQgfSk7XG4gIH07XG4gIC8qIHNjb3BlZCAqL1xuICB2YXIgX192dWVfc2NvcGVfaWRfXyQxID0gdW5kZWZpbmVkO1xuICAvKiBtb2R1bGUgaWRlbnRpZmllciAqL1xuICB2YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyQxID0gdW5kZWZpbmVkO1xuICAvKiBmdW5jdGlvbmFsIHRlbXBsYXRlICovXG4gIHZhciBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18kMSA9IGZhbHNlO1xuICAvKiBjb21wb25lbnQgbm9ybWFsaXplciAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9ub3JtYWxpemVfXyQxKHRlbXBsYXRlLCBzdHlsZSwgc2NyaXB0LCBzY29wZSwgZnVuY3Rpb25hbCwgbW9kdWxlSWRlbnRpZmllciwgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSKSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IHNjcmlwdCB8fCB7fTtcblxuICAgIGlmICghY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgY29tcG9uZW50LnJlbmRlciA9IHRlbXBsYXRlLnJlbmRlcjtcbiAgICAgIGNvbXBvbmVudC5zdGF0aWNSZW5kZXJGbnMgPSB0ZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICBjb21wb25lbnQuX2NvbXBpbGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKGZ1bmN0aW9uYWwpIGNvbXBvbmVudC5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQuX3Njb3BlSWQgPSBzY29wZTtcblxuICAgIHtcbiAgICAgIHZhciBob29rID0gdm9pZCAwO1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbiBob29rKGNvbnRleHQpIHtcbiAgICAgICAgICBzdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhvb2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBjb21wb25lbnQucmVuZGVyO1xuICAgICAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBjb21wb25lbnQuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgIGNvbXBvbmVudC5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG4gIC8qIHN0eWxlIGluamVjdCAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyQxKCkge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBzdHlsZXMgPSBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyQxLnN0eWxlcyB8fCAoX192dWVfY3JlYXRlX2luamVjdG9yX18kMS5zdHlsZXMgPSB7fSk7XG4gICAgdmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gYWRkU3R5bGUoaWQsIGNzcykge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgaWQgKyAnXCJdJykpIHJldHVybjsgLy8gU1NSIHN0eWxlcyBhcmUgcHJlc2VudC5cblxuICAgICAgdmFyIGdyb3VwID0gaXNPbGRJRSA/IGNzcy5tZWRpYSB8fCAnZGVmYXVsdCcgOiBpZDtcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tncm91cF0gfHwgKHN0eWxlc1tncm91cF0gPSB7IGlkczogW10sIHBhcnRzOiBbXSwgZWxlbWVudDogdW5kZWZpbmVkIH0pO1xuXG4gICAgICBpZiAoIXN0eWxlLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBjc3Muc291cmNlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdHlsZS5pZHMubGVuZ3RoO1xuXG4gICAgICAgIHN0eWxlLmlkcy5wdXNoKGlkKTtcblxuICAgICAgICBpZiAoY3NzLm1hcCkge1xuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgICAgICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICAgICAgICBjb2RlICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBjc3MubWFwLnNvdXJjZXNbMF0gKyAnICovJztcbiAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgICAgICAgIGNvZGUgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzcy5tYXApKSkpICsgJyAqLyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQgPSBzdHlsZS5lbGVtZW50IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtZ3JvdXA9JyArIGdyb3VwICsgJ10nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3R5bGUuZWxlbWVudCkge1xuICAgICAgICAgIHZhciBlbCA9IHN0eWxlLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgICAgaWYgKGNzcy5tZWRpYSkgZWwuc2V0QXR0cmlidXRlKCdtZWRpYScsIGNzcy5tZWRpYSk7XG4gICAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcsIGdyb3VwKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgJzAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChzdHlsZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JykpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnLCBpbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnBhcnRzLnB1c2goY29kZSk7XG4gICAgICAgICAgc3R5bGUuZWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZS5wYXJ0cy5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSk7XG4gICAgICAgICAgdmFyIG5vZGVzID0gc3R5bGUuZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICAgIGlmIChub2Rlc1tpbmRleF0pIHN0eWxlLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZXNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoKSBzdHlsZS5lbGVtZW50Lmluc2VydEJlZm9yZSh0ZXh0Tm9kZSwgbm9kZXNbaW5kZXhdKTtlbHNlIHN0eWxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgU1NSICovXG5cbiAgdmFyIEZpbGVVcGxvYWQgPSBfX3Z1ZV9ub3JtYWxpemVfXyQxKF9fdnVlX3RlbXBsYXRlX18kMSwgX192dWVfaW5qZWN0X3N0eWxlc19fJDEsIHR5cGVvZiBfX3Z1ZV9zY3JpcHRfXyQxID09PSAndW5kZWZpbmVkJyA/IHt9IDogX192dWVfc2NyaXB0X18kMSwgX192dWVfc2NvcGVfaWRfXyQxLCBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18kMSwgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyQxLCB0eXBlb2YgX192dWVfY3JlYXRlX2luamVjdG9yX18kMSAhPT0gJ3VuZGVmaW5lZCcgPyBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyQxIDogZnVuY3Rpb24gKCkge30sIHR5cGVvZiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3Jfc3NyX18gIT09ICd1bmRlZmluZWQnID8gX192dWVfY3JlYXRlX2luamVjdG9yX3Nzcl9fIDogZnVuY3Rpb24gKCkge30pO1xuXG4gIHZhciBGaWxlVXBsb2FkJDEgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgZGVmYXVsdDogRmlsZVVwbG9hZFxuICB9KTtcblxuICB2YXIgcmVxdWlyZSQkMCA9ICggRmlsZVVwbG9hZCQxICYmIEZpbGVVcGxvYWQgKSB8fCBGaWxlVXBsb2FkJDE7XG5cbiAgdmFyIHNyYyA9IHJlcXVpcmUkJDA7XG5cbiAgcmV0dXJuIHNyYztcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS11cGxvYWQtY29tcG9uZW50L2Rpc3QvdnVlLXVwbG9hZC1jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5pc09wdGlvblxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImZpbGUtdXBsb2FkXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidi1idG4gdi1idG4tLWZsYXQgdGhlbWUtLWRhcmsgYmx1ZS0tdGV4dCBteC01IHB5LTJcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicG9zdC1hY3Rpb25cIjogX3ZtLnBvc3RBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIFwicHV0LWFjdGlvblwiOiBfdm0ucHV0QWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmlsZUtleSxcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogX3ZtLmV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdDogX3ZtLmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiBfdm0uZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBfdm0uc2l6ZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICB0aHJlYWQ6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRocmVhZCA8IDEgPyAxIDogX3ZtLnRocmVhZCA+IDUgPyA1IDogX3ZtLnRocmVhZCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBkcm9wOiBfdm0uZHJvcCxcbiAgICAgICAgICAgICAgICAgICAgXCJkcm9wLWRpcmVjdG9yeVwiOiBfdm0uZHJvcERpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgXCJhZGQtaW5kZXhcIjogX3ZtLmFkZEluZGV4XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1maWx0ZXJcIjogX3ZtLmlucHV0RmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0LWZpbGVcIjogX3ZtLmlucHV0RmlsZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZXMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgQ2hvb3NlIEZpbGVzXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaWNvbjogXCJcIiwgY29sb3I6IFwicmVkIGRhcmtlbi00XCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNPcHRpb24gPSAhX3ZtLmlzT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmlzT3B0aW9uXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJhbWJlciBsaWdodGVuLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc09wdGlvbiA9ICFfdm0uaXNPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYS1jb2dcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5pc09wdGlvblxuICAgICAgICA/IF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IF92bS50aCxcbiAgICAgICAgICAgICAgaXRlbXM6IF92bS5maWxlcyxcbiAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS1pdGVtc1wiOiBfdm0ucGVyUGFnZURhdGEsXG4gICAgICAgICAgICAgIFwibm8tZGF0YS10ZXh0XCI6IFwiQ2xpY2sgYENob29zZSBGaWxlc2AgQnV0dG9uIFRvIFVwbG9hZCBGaWxlcy5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS50aHVtYlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcHJvcHMuaXRlbS50aHVtYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJObyBJbWFnZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lZGl0LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhcmdlOiBcIlwiLCBsYXp5OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnktLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJ0cnVuY2F0ZVwiKShwcm9wcy5pdGVtLm5hbWUsIDIwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC0zIHRleHQteHMtY2VudGVyIHRpdGxlIHByaW1hcnktLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJpbnB1dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBVcGRhdGUgTmFtZVxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtfdm0ubWF4SW5wdXRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHByb3BzLml0ZW0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuaXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJmb3JtYXRTaXplXCIpKHByb3BzLml0ZW0uc2l6ZSkpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uYWN0aXZlIHx8IHByb3BzLml0ZW0ucHJvZ3Jlc3MgIT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcHJvZ3Jlc3MtY2lyY3VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA0NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGU6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2dyZXNzKHByb3BzLml0ZW0ucHJvZ3Jlc3MpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInRlYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjYXB0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZ3Jlc3MocHJvcHMuaXRlbS5wcm9ncmVzcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLmVycm9yKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLml0ZW0uc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgc3VjY2Vzc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5pdGVtLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgYWN0aXZlXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1jZW50ZXIgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkIGRhcmtlbi00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS4kcmVmcy51cGxvYWQudXBkYXRlKHByb3BzLml0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBcImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtdGltZXNcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLml0ZW0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmVycm9yICE9PSBcImNvbXByZXNzaW5nXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMudXBsb2FkLmZlYXR1cmVzLmh0bWw1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaWNvbjogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLnVwbG9hZC51cGRhdGUocHJvcHMuaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogXCIwLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtcmVmcmVzaFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmVycm9yID09PSBcImNvbXByZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uJHJlZnMudXBsb2FkLnVwZGF0ZShwcm9wcy5pdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtdXBsb2FkXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWQgbGlnaHRlbi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW1vdmUocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtdHJhc2hcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uaXNPcHRpb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlcy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwidGVhbCBsaWdodGVuLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLnVwbG9hZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBTdGFydCBVcGxvYWQgXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBwbGF5X2Fycm93XFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiRyZWZzLnVwbG9hZCAmJiBfdm0uJHJlZnMudXBsb2FkLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkcmVmcy51cGxvYWQgJiYgJHJlZnMudXBsb2FkLmFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXJrOiBcIlwiLCBibG9jazogXCJcIiwgZmxhdDogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy51cGxvYWQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFN0b3AgVXBsb2FkIFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgc3RvcFxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uJHJlZnMudXBsb2FkICYmXG4gICAgICAgICAgICAgICAgICAhX3ZtLiRyZWZzLnVwbG9hZC5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5maWxlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZCBsaWdodGVuLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFJlbW92ZSBBbGwgRmlsZXMgXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIGZhLXRyYXNoXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc09wdGlvblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJtaW1lLXR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImZhLWZpbGUtY29kZS1vIFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjY2VwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkFsbG93IHVwbG9hZCBtaW1lIHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibWltZS10eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWNjZXB0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvcnMuY29sbGVjdChcImV4dGVuc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwiZmEtY29nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkV4dGVuc2lvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJBbGxvdyB1cGxvYWQgZmlsZSBleHRlbnNpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dGVuc2lvbnMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImh0dHBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQdXQgVXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRpc2FibGVkIGlmIEVtcHR5LCBBZnRlciB0aGUgc2h1dGRvd24sIHVzZSB0aGUgUE9TVCBtZXRob2QgdG8gdXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHV0QWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wdXRBY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHV0QWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9ycy5jb2xsZWN0KFwicG9zdC11cmxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImh0dHBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQb3N0IFVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkRlZmF1bHQgUG9zdCBVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicG9zdC11cmxcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdEFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdEFjdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0QWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWR8bnVtZXJpY3xtaW5fdmFsdWU6MVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8bnVtZXJpY3xtaW5fdmFsdWU6MSdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvcnMuY29sbGVjdChcInRocmVhZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwiZmEtY3ViZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUaHJlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWxzbyB1cGxvYWQgdGhlIG51bWJlciBvZiBmaWxlcyBhdCB0aGUgc2FtZSB0aW1lIChudW1iZXIgb2YgdGhyZWFkcylcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwidGhyZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRocmVhZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udGhyZWFkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRocmVhZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvcnMuY29sbGVjdChcIm1heC1zaXplXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJ0cmVuZGluZ191cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1heCBzaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiU2l6ZSBVbml0IGluIGJ5dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibWF4LXNpemVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2l6ZSA9IF92bS5fbigkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNpemVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJtaW4tc2l6ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwidHJlbmRpbmdfZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1pbiBzaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiU2l6ZSBVbml0IGluIGJ5dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibWluLXNpemVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWluU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWluU2l6ZSA9IF92bS5fbigkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1pblNpemVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJhdXRvLWNvbXByZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJmYS1jb21wcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkF1dG9tYXRpY2FsbHkgY29tcHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJhdXRvLWNvbXByZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmF1dG9Db21wcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0b0NvbXByZXNzID0gX3ZtLl9uKCQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXV0b0NvbXByZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmF1dG9Db21wcmVzcyA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJncmV5LS10ZXh0IGNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBNb3JlIHRoYW4gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJmb3JtYXRTaXplXCIpKF92bS5hdXRvQ29tcHJlc3MpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZmlsZXMgYXJlIGF1dG9tYXRpY2FsbHkgY29tcHJlc3NlZFxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJncmV5LS10ZXh0IGNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFNldCB1cCBhdXRvbWF0aWMgY29tcHJlc3Npb25cXG4gICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEcmFnIGFuZCBkcm9wIHVwbG9hZDogXCIgKyBfdm0uZHJvcC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kcm9wLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kcm9wID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRyb3BcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm90IGNoZWNrZWQsIGZpbHRlciB0aGUgZHJhZ2dlZCBmb2xkZXI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kcm9wRGlyZWN0b3J5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRyb3BEaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRyb3BEaXJlY3RvcnkgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZHJvcERpcmVjdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRvbWF0aWNhbGx5IGFjdGl2YXRlIHVwbG9hZDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVwbG9hZEF1dG8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXBsb2FkQXV0byxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udXBsb2FkQXV0byA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1cGxvYWRBdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mYzY3OTRhYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZmM2Nzk0YWFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2Fkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1kaWFsb2dcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBcIlwiLCB0cmFuc2l0aW9uOiBcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLm1vZGFsID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlnaHQ6IHRydWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJibHVlIGxpZ2h0ZW4tMlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlR2FsbGVyeU1vZGFsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiVXBsb2FkIEltYWdlcyBQSUQ6IFwiICsgX3ZtLl9zKF92bS5pZCkgKyBcIiBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidXBsb2Fkc1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzaW5nbGU6IF92bS5zaW5nbGUsXG4gICAgICAgICAgICAgIFwicG9zdC11cmxcIjogX3ZtLnBvc3RVcmwsXG4gICAgICAgICAgICAgIFwiZmlsZS1rZXlcIjogX3ZtLmZpbGVLZXksXG4gICAgICAgICAgICAgIGl0ZW06IF92bS5pdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIzMGE4NWYwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMzBhODVmMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBmOTU4NWQ3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY5NTg1ZDdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTBmOTU4NWQ3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMGY5NTg1ZDdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY5NTg1ZDdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2MyYWIyY2ZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBmOTU4NWQ3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGY5NTg1ZDdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wZjk1ODVkN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTBmOTU4NWQ3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiPHRlbXBsYXRlPlxuICA8di1kaWFsb2cgXG4gICAgdi1tb2RlbD1cIm1vZGFsXCIgXG4gICAgZnVsbHNjcmVlbiBcbiAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCI+XG4gICAgPHYtY2FyZCA6bGlnaHQ9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIGNvbG9yPVwiZXJyb3JcIj5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGljb24gXG4gICAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIFxuICAgICAgICAgIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPlVwbG9hZCBEYW1hZ2VkIEltYWdlcyBQSUQ6IHt7IGlkIH19PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDx1cGxvYWRzIFxuICAgICAgICA6c2luZ2xlPVwic2luZ2xlXCJcbiAgICAgICAgOnBvc3QtdXJsPVwicG9zdFVybFwiIFxuICAgICAgICA6ZmlsZS1rZXk9XCJmaWxlS2V5XCJcbiAgICAgICAgOml0ZW09XCJpdGVtXCIvPlxuICAgIDwvdi1jYXJkPlxuICA8L3YtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1cGxvYWRzIGZyb20gXCJDb21wb25lbnRzL1VwbG9hZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgdXBsb2Fkc1xuICB9LFxuICBwcm9wczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2luZ2xlOiBmYWxzZSxcbiAgICBtb2RhbDogZmFsc2UsXG4gICAgZmlsZUtleTogXCJkYW1hZ2VkX2ltYWdlc1wiXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICAgIHBvc3RVcmwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgaWQgPSBzZWxmLmlkO1xuICAgICAgcmV0dXJuIHJvdXRlKFwiYXBpLnBhY2thZ2UudXBsb2FkRGFtYWdlSW1hZ2VcIiwgeyBpZCB9KTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIEJ1cy4kb24oYHVwbG9hZC1kYW1hZ2VkLWltYWdlcy0ke3RoaXMuaXRlbS5pZH1gLCAoKSA9PiB7XG4gICAgICBzZWxmLm1vZGFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5tb2RhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZGlhbG9nXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogXCJcIiwgdHJhbnNpdGlvbjogXCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIiB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5tb2RhbCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS5tb2RhbCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpZ2h0OiB0cnVlIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwiZXJyb3JcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X2JhY2tcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlVwbG9hZCBEYW1hZ2VkIEltYWdlcyBQSUQ6IFwiICsgX3ZtLl9zKF92bS5pZCkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVwbG9hZHNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2luZ2xlOiBfdm0uc2luZ2xlLFxuICAgICAgICAgICAgICBcInBvc3QtdXJsXCI6IF92bS5wb3N0VXJsLFxuICAgICAgICAgICAgICBcImZpbGUta2V5XCI6IF92bS5maWxlS2V5LFxuICAgICAgICAgICAgICBpdGVtOiBfdm0uaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wZjk1ODVkN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGY5NTg1ZDdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIsIFwicGEtM1wiOiBcIlwiLCBcIm1hLTNcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsdWUtZ3JleVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJibHVlIGxpZ2h0ZW4tNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZE5ld1BhY2thZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgXCJ4LWxhcmdlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJhZGRfY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJncmVlbiBsaWdodGVuLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbG9uZVBhY2thZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgXCJ4LWxhcmdlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmaWxlX2NvcHlcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtbWQtY2VudGVyIHdoaXRlLS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSXRlbSBcIiArIF92bS5fcyhfdm0uaW5kZXgpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVBhY2thZ2UoX3ZtLml0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBcIngtbGFyZ2VcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiwgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiwgXCJwYS0yXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdHlsZSBOby5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk9wdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc3R5bGVfbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJzdHlsZV9ub1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zdHlsZV9ub1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYHBhY2thZ2VzLiR7aW5kZXh9LmRlc2NyaXB0aW9uYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkl0ZW0gRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMZW5ndGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcImZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwia2V5Ym9hcmRfdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiT3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJsZW5ndGhcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJXaWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzd2FwX2hvcml6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiT3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcIndpZHRoXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLndpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcImZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwic3dhcF92ZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiT3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJoZWlnaHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uaGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuY3ViZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuY3ViZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkN1YmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcImZ0wrNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS1jdWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5jdWJlYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uY3ViZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImN1YmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uY3ViZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuYmluX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYmlucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmJpbl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hvb3NlIEJpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2aWV3X2NvbWZ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5iaW5faWRgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ2hvb3NlIEJpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaW5faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLnN0b3JlX2F0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uc3RvcmVfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5zdG9yZV9hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdG9yZSBBdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJkbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJgcGFja2FnZXMuJHtpdGVyYXRpb259LnN0b3JlX2F0YFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNob29zZSBTdG9yZSBBdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnN0b3JlX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic3RvcmVfYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc3RvcmVfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmhhbmRsaW5nX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5oYW5kbGluZ1JhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuaGFuZGxpbmdfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hvb3NlIEhhbmRsaW5nIE5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5oYW5kbGluZ190eXBlYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNob29zZSBIYW5kbGluZyBOb3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uaGFuZGxpbmdfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImhhbmRsaW5nX3R5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uaGFuZGxpbmdfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmdldERhbWFnZVN0YXR1cyhfdm0uaXRlbS5kYW1hZ2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5kYW1hZ2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZGFtYWdlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kYW1hZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmRhbWFnZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkOiBpdGVtLmRhbWFnZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQ6IGl0ZW0uZGFtYWdlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZXJhdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZGFtYWdlX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZXJhdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuZGFtYWdlX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlJlcXVpcmVkIElmIE1hcmtlZCBBcyBEYW1hZ2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGFtYWdlX2Rlc2NyaXB0aW9uYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhbWFnZWQgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRhbWFnZV9kZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmRhbWFnZV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiLCBcInBhLTJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQ2OiBcIlwiLCBcInB4LTNcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYmxvY2s6IFwiXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdJbWFnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVmlldyBJdGVtIEltYWdlc1xcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBpbWFnZVxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYmxvY2s6IFwiXCIsIGNvbG9yOiBcImJsdWVcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuUGFja2FnZUltYWdlc01vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFVwbG9hZCBQYWNrYWdlIEltYWdlcyBcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImFkZF9waG90b19hbHRlcm5hdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhY2thZ2UtaW1hZ2VzLXVwbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uaXRlbS5pZCwgaXRlbTogX3ZtLml0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uZGFtYWdlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQ2OiBcIlwiLCBcInB4LTNcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdEYW1hZ2VJbWFnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVmlldyBEYW1hZ2UgSW1hZ2VzXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIGJyb2tlbl9pbWFnZVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5EYW1hZ2VkSW1hZ2VzTW9kYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVXBsb2FkIERhbWFnZWQgSW1hZ2VzIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiYnJva2VuX2ltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGFtYWdlZC1pbWFnZXMtdXBsb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uaXRlbS5pZCwgaXRlbTogX3ZtLml0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDg6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXN1YmhlYWRlclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBOb3RlczpcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLm5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCIyNTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiT3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJgcGFja2FnZXMuJHtpdGVyYXRpb259Lm5vdGVzYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibm90ZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uZGFtYWdlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiLCBcIm9yZGVyLW1kMlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXN1YmhlYWRlclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBJcyBJdGVtIFJlcGFpcmVkP1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS5nZXRSZXBhaXJlZFN0YXR1cyhfdm0uaXRlbS5yZXBhaXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucmVwYWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInJlcGFpcmVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucmVwYWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pdGVtLnJlcGFpcmVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3ViaGVhZGVyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFdoZW4gaXMgaXQgUmVwYWlyZWQ/XFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBSZXBhaXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudF9ub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGF0ZV9yZXBhaXJlZGBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5EYXRlUmVwYWlyZWRNb2RhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmRhdGVfcmVwYWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRhdGVfcmVwYWlyZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kYXRlX3JlcGFpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImRhdGVfcmVwYWlyZWRfXCIgKyBfdm0uaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5pdGVtLmRhdGVfcmVwYWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZGF0ZV9yZXBhaXJlZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVfcmVwYWlyZWRfbW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZXBhaXJlZF9tb2RhbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVfcmVwYWlyZWRfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmRhdGVfcmVwYWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRhdGVfcmVwYWlyZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kYXRlX3JlcGFpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlcGFpcmVkX21vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5kYXRlX3JlcGFpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9LXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImltYWdlc1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJcIiArIF92bS5pdGVtLmlkLCBpbWFnZXM6IF92bS5pdGVtLnBhY2thZ2VfaW1hZ2VzIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGFtYWdlLWltYWdlc1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJcIiArIF92bS5pdGVtLmlkLCBpbWFnZXM6IF92bS5pdGVtLmRhbWFnZWRfaW1hZ2VzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMTAwYzIxY2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTEwMGMyMWNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9QYWNrYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCI8dGVtcGxhdGU+XG4gIDxtb2RhbC1sYXlvdXQgY2xhc3M9XCJ3aGl0ZVwiPlxuICAgIDx2LWNhcmQgOmZsYXQ9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIFxuICAgICAgICBmaXhlZCBcbiAgICAgICAgYXBwIFxuICAgICAgICBjbGFzcz1cInByaW1hcnlcIlxuICAgICAgPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgZmxhdCBcbiAgICAgICAgICBpY29uIFxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIEBjbGljay5uYXRpdmU9XCJyZWRpcmVjdEJhY2soKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1pY29uPmFycm93X2JhY2s8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQteHMtY2VudGVyIHdoaXRlLS10ZXh0XCI+Q3JlYXRlIE5ldyBEU0c8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtdG9vbGJhci1pdGVtcz5cbiAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgIDpsb2FkaW5nPVwiZm9ybS5idXN5XCIgXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJlcnJvcnMuYW55KCkgfHwgZm9ybS5idXN5XCJcbiAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCIgXG4gICAgICAgICAgICBAY2xpY2submF0aXZlPVwic3VibWl0KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDx2LWljb24gcmlnaHQ+c2F2ZTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8di1sYXlvdXQgXG4gICAgICAgIHJvdyBcbiAgICAgICAgd3JhcFxuICAgICAgICBteS0wXG4gICAgICAgIHB5LTBcbiAgICAgICAgbXgtM1xuICAgICAgICBweC0zXG4gICAgICA+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnNFxuICAgICAgICA+XG4gICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICA6aXRlbXM9XCJjdXN0b21lcnNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY3VzdG9tZXJfaWRcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnY3VzdG9tZXInKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnY3VzdG9tZXInKSB9XCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIkNob29zZSBDdXN0b21lclwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiY3VzdG9tZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzRcbiAgICAgICAgPlxuXG4gICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jbGllbnRfbmFtZVwiXG4gICAgICAgICAgICA6aXRlbXM9XCJjbGllbnRzXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2NsaWVudCcpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdjbGllbnQnKSB9XCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cIm5hbWVcIlxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIENsaWVudCBvciBUeXBlIE5hbWVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtdXNlcnNcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiY2xpZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGc0XG4gICAgICAgID5cbiAgICAgICAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgIDppdGVtcz1cInNoaXBwZXJzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNoaXBwZXJfaWRcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnc2hpcHBlcicpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdzaGlwcGVyJykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgU2hpcHBlclwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImZhLXNoaXBcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwic2hpcHBlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnM1xuICAgICAgICA+XG4gICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICA6aXRlbXM9XCJlbXBsb3llZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucmVjZWl2ZWRfYnlcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygncmVjZWl2ZWRfYnknKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygncmVjZWl2ZWRfYnknKSB9XCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIlJlY2VpdmVkIEJ5XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBjaGlwc1xuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiaG93X3RvX3JlZ1wiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJyZWNlaXZlZF9ieVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnM1xuICAgICAgICA+XG4gICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICA6aXRlbXM9XCJlbXBsb3llZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ud3JpdHRlbl9ieVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCd3cml0dGVuX2J5JylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ3dyaXR0ZW5fYnknKSB9XCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIldyaXR0ZW4gQnlcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJsb2NhbF9saWJyYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cIndyaXR0ZW5fYnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgOml0ZW1zPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmluc3BlY3RlZF9ieVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCdpbnNwZWN0ZWRfYnknKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnaW5zcGVjdGVkX2J5JykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJJbnNwZWN0ZWQgQnlcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiaW5zcGVjdGVkX2J5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGczXG4gICAgICAgID5cbiAgICAgICAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgIDppdGVtcz1cImVtcGxveWVlc1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5sb2NhdGVkX2J5XCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2xvY2F0ZWRfYnknKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnbG9jYXRlZF9ieScpIH1cIlxuICAgICAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGxhYmVsPVwiTG9jYXRlZCBCeVwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInBlcnNvbl9waW5cIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwibG9jYXRlZF9ieVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnMlxuICAgICAgICA+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cInBvX25vXCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIlBPIE5vLlwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJib29rbWFya1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBsZzI+XG4gICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICByZWY9XCJkYXRlX3JlY2VpdmVkXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlX3JlY2VpdmVkX21vZGFsXCJcbiAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVfcmVjZWl2ZWRcIlxuICAgICAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgZnVsbC13aWR0aFxuICAgICAgICAgICAgd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICBzbG90PVwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVfcmVjZWl2ZWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgUmVjZWl2ZWRcIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJldmVudF9hdmFpbGFibGVcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9yZWNlaXZlZFwiIFxuICAgICAgICAgICAgICBzY3JvbGxhYmxlPlxuICAgICAgICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkYXRlX3JlY2VpdmVkX21vZGFsID0gZmFsc2VcIj5DYW5jZWw8L3YtYnRuPlxuICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcmVmcy5kYXRlX3JlY2VpdmVkLnNhdmUoZGF0ZV9yZWNlaXZlZClcIj5PSzwvdi1idG4+XG4gICAgICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBsZzI+XG4gICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICByZWY9XCJkYXRlX3Byb2Nlc3NlZFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9wcm9jZXNzZWRfbW9kYWxcIlxuICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiZGF0ZV9wcm9jZXNzZWRcIlxuICAgICAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgZnVsbC13aWR0aFxuICAgICAgICAgICAgd2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICBzbG90PVwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVfcHJvY2Vzc2VkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIFByb2Nlc3NlZFwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImV2ZW50X25vdGVcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9wcm9jZXNzZWRcIiBcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGF0ZV9wcm9jZXNzZWRfbW9kYWwgPSBmYWxzZVwiPkNhbmNlbDwvdi1idG4+XG4gICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmRhdGVfcHJvY2Vzc2VkLnNhdmUoZGF0ZV9wcm9jZXNzZWQpXCI+T0s8L3YtYnRuPlxuICAgICAgICAgICAgPC92LWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHYtaWY9XCJwYWNrYWdlcy5sZW5ndGg+MFwiXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBsZzI+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udG90YWxfcGllY2VzXCJcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBpZWNlc1wiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJjYXRlZ29yeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgdi1pZj1cInBhY2thZ2VzLmxlbmd0aD4wXCJcbiAgICAgICAgICB4czEyIFxuICAgICAgICAgIGxnMj5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50b3RhbF9jdWJlXCJcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICBsYWJlbD1cIlRvdGFsIEN1YmVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtY3ViZXNcIlxuICAgICAgICAgICAgc3VmZml4PVwiZnTCs1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgdi1pZj1cInBhY2thZ2VzLmxlbmd0aD4wXCJcbiAgICAgICAgICB4czEyIFxuICAgICAgICAgIGxnMj5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yZWNlaXZpbmdfYW1vdW50XCJcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxuICAgICAgICAgICAgbGFiZWw9XCJSZWNlaXZpbmcgQW1vdW50XCJcbiAgICAgICAgICAgIHN1ZmZpeD1cIlVTRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPCEtLSBQYWNrYWdlcyAvSXRlbSBGb3JtIC0tPlxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXBcbiAgICAgICAgbXktMFxuICAgICAgICBweS0wXG4gICAgICAgIG14LTNcbiAgICAgICAgcHgtM1xuICAgICAgPlxuICAgICAgICA8di1mbGV4XG4gICAgICAgICAgdi1pZj1cIiFwYWNrYWdlcy5sZW5ndGg+MFwiIFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImVycm9ycy5hbnkoKVwiXG4gICAgICAgICAgICBjb2xvcj1cImJsdWUtZ3JleVwiXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJhZGROZXdQYWNrYWdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgTmV3IFBhY2thZ2UgPHYtaWNvbiByaWdodD5saWJyYXJ5X2FkZDwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICBcbiAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8IS0tIFBhY2thZ2UgQXJlYSAtLT5cbiAgICAgIDxwYWNrYWdlcyBcbiAgICAgICAgdi1mb3I9XCIoaXRlbSxrZXkpIGluIHBhY2thZ2VzXCIgXG4gICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICA6aW5kZXg9XCJrZXkrMVwiXG4gICAgICAgIDppdGVyYXRpb249XCJrZXlcIlxuICAgICAgICA6aXRlbT1cIml0ZW1cIlxuICAgICAgICA6cGFja2FnZXM9XCJwYWNrYWdlc1wiXG4gICAgICAgIDpiaW5zPVwiYmluc1wiXG4gICAgICAgIDpoYW5kbGluZy1yYXRlcz1cImhhbmRsaW5nX3JhdGVzXCJcbiAgICAgICAgOnN0b3JhZ2UtcmF0ZXM9XCJzdG9yYWdlX3JhdGVzXCJcbiAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIEVuZCBQYWNrYWdlIC0tPlxuICAgIDwvdi1jYXJkPlxuXG4gIDwvbW9kYWwtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNb2RhbExheW91dCBmcm9tIFwiTGF5b3V0cy9Nb2RhbExheW91dC52dWVcIjtcbmltcG9ydCB2YWxpZGF0aW9uRXJyb3IgZnJvbSBcIk1peGlucy92YWxpZGF0aW9uLWVycm9yXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInZmb3JtXCI7XG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbmltcG9ydCBQYWNrYWdlcyBmcm9tIFwiQ29tcG9uZW50cy9kc2cvUGFja2FnZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE1vZGFsTGF5b3V0LFxuICAgIFBhY2thZ2VzXG4gIH0sXG4gIG1peGluczogW3ZhbGlkYXRpb25FcnJvcl0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgLyogQWx3YXlzIERlY2xhcmUgWW91ciBGb3JtIE9iamVjdCAqL1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBjbGllbnRfaWQ6IG51bGwsXG4gICAgICBjbGllbnRfbmFtZTogbnVsbCxcbiAgICAgIGN1c3RvbWVyX2lkOiBudWxsLFxuICAgICAgY3VzdG9tZXJfbmFtZTogbnVsbCxcbiAgICAgIHNoaXBwZXJfaWQ6IG51bGwsXG4gICAgICBzaGlwcGVyX25hbWU6IG51bGwsXG4gICAgICByZWNlaXZlZF9ieTogbnVsbCxcbiAgICAgIHJlY2VpdmVkX2J5X25hbWU6IG51bGwsXG4gICAgICB3cml0dGVuX2J5OiBudWxsLFxuICAgICAgd3JpdHRlbl9ieV9uYW1lOiBudWxsLFxuICAgICAgaW5zcGVjdGVkX2J5OiBudWxsLFxuICAgICAgaW5zcGVjdGVkX2J5X25hbWU6IG51bGwsXG4gICAgICBsb2NhdGVkX2J5OiBudWxsLFxuICAgICAgbG9jYXRlZF9ieV9uYW1lOiBudWxsLFxuICAgICAgdG90YWxfcGllY2VzOiAwLFxuICAgICAgdG90YWxfY3ViZTogMCxcbiAgICAgIHJlY2VpdmluZ19hbW91bnQ6IDAsXG4gICAgICBkYXRlX3Byb2Nlc3NlZDogbnVsbCxcbiAgICAgIHBhY2thZ2VzOiBbXVxuICAgIH0pLFxuICAgIHBvX25vOiBudWxsLFxuICAgIGRhdGVfcmVjZWl2ZWQ6IG51bGwsXG4gICAgYmluczogW10sXG4gICAgZGF0ZV9yZWNlaXZlZF9tb2RhbDogZmFsc2UsXG4gICAgZGF0ZV9wcm9jZXNzZWQ6IG51bGwsXG4gICAgZGF0ZV9wcm9jZXNzZWRfbW9kYWw6IGZhbHNlLFxuICAgIGN1c3RvbWVyczogW10sXG4gICAgY2xpZW50czogW10sXG4gICAgc2hpcHBlcnM6IFtdLFxuICAgIGVtcGxveWVlczogW10sXG4gICAgcGFja2FnZXM6IFtdLFxuICAgIGhhbmRsaW5nX3JhdGVzOiBbXSxcbiAgICBzdG9yYWdlX3JhdGVzOiBbXSxcbiAgICB1bmtub3duQ2xpZW50OiB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgYWRkcmVzc18xOiBudWxsLFxuICAgICAgYWRkcmVzc18yOiBudWxsLFxuICAgICAgY2l0eTogbnVsbCxcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogXCJVbmtub3duIENsaWVudFwiLFxuICAgICAgc3RhdGU6IG51bGwsXG4gICAgICB6aXA6IG51bGxcbiAgICB9XG4gIH0pLFxuICB3YXRjaDoge1xuICAgIHBvX25vOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMucGFja2FnZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICBzZWxmLnBhY2thZ2VzW2ldLnBvX25vID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfSxcbiAgICBkYXRlX3JlY2VpdmVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMucGFja2FnZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICBzZWxmLnBhY2thZ2VzW2ldLmRhdGVfcmVjZWl2ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIGRhdGVfcHJvY2Vzc2VkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMucGFja2FnZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICBzZWxmLnBhY2thZ2VzW2ldLmRhdGVfcHJvY2Vzc2VkID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfSxcbiAgICBiaW5zOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge30sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfSxcbiAgICBjdXN0b21lcnM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIHNoaXBwZXJzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge30sXG4gICAgICBkZWVwOiB0cnVlXG4gICAgfSxcbiAgICBlbXBsb3llZXM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIHBhY2thZ2VzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuZm9ybS50b3RhbF9waWVjZXMgPSBuZXdWYWx1ZS5sZW5ndGg7XG4gICAgICAgIHNlbGYudXBkYXRlVG90YWxDdWJlKCk7XG4gICAgICAgIHNlbGYudXBkYXRlUmVjZWl2aW5nQW1vdW50KCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH0sXG4gICAgXCJmb3JtLnBhY2thZ2VzXCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIFwiZm9ybS5jdXN0b21lcl9pZFwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMucGFja2FnZXMubGVuZ3RoO1xuICAgICAgICBsZXQgY3VzdG9tZXJfaWQgPSBudWxsO1xuICAgICAgICBsZXQgY3VzdG9tZXJfbmFtZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxldCBjdXN0b21lciA9IF8uZmluZChzZWxmLmN1c3RvbWVycywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIGMuaWQgPT09IG5ld1ZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuY2xpZW50cyA9IGN1c3RvbWVyLmNsaWVudHM7XG4gICAgICAgICAgXy5yZW1vdmUoc2VsZi5jbGllbnRzLCB7XG4gICAgICAgICAgICBpZDogMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuY2xpZW50cy51bnNoaWZ0KHNlbGYudW5rbm93bkNsaWVudCk7XG4gICAgICAgICAgc2VsZi5mb3JtLmN1c3RvbWVyX25hbWUgPSBjdXN0b21lci5uYW1lO1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfbmFtZSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9pZCA9IG51bGw7XG4gICAgICAgICAgY3VzdG9tZXJfaWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICBjdXN0b21lcl9uYW1lID0gY3VzdG9tZXIubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNsaWVudHMgPSBbXTtcbiAgICAgICAgICBzZWxmLmNsaWVudHMucHVzaChzZWxmLnVua25vd25DbGllbnQpO1xuICAgICAgICAgIHNlbGYuZm9ybS5jdXN0b21lcl9pZCA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmN1c3RvbWVyX25hbWUgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfbmFtZSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9pZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgc2VsZi5wYWNrYWdlc1tpXS5jdXN0b21lcl9pZCA9IGN1c3RvbWVyX2lkO1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uY3VzdG9tZXJfbmFtZSA9IGN1c3RvbWVyX25hbWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLnNoaXBwZXJfaWRcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLnBhY2thZ2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IHNoaXBwZXJfaWQgPSBudWxsO1xuICAgICAgICBsZXQgc2hpcHBlcl9uYW1lID0gbnVsbDtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IHNoaXBwZXIgPSBfLmZpbmQoc2VsZi5zaGlwcGVycywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIGMuaWQgPT09IG5ld1ZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuZm9ybS5zaGlwcGVyX25hbWUgPSBzaGlwcGVyLm5hbWU7XG4gICAgICAgICAgc2hpcHBlcl9pZCA9IHNoaXBwZXIuaWQ7XG4gICAgICAgICAgc2hpcHBlcl9uYW1lID0gc2hpcHBlci5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uc2hpcHBlcl9pZCA9IHNoaXBwZXJfaWQ7XG4gICAgICAgICAgc2VsZi5wYWNrYWdlc1tpXS5zaGlwcGVyX25hbWUgPSBzaGlwcGVyX25hbWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLmNsaWVudF9uYW1lXCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld05hbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLnBhY2thZ2VzLmxlbmd0aDtcbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IG51bGw7XG4gICAgICAgIGxldCBjbGllbnRfbmFtZSA9IG5ld05hbWU7XG5cbiAgICAgICAgaWYgKG5ld05hbWUgIT0gbnVsbCB8fCBuZXdOYW1lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmNsaWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNsaWVudCA9IF8uZmluZChzZWxmLmNsaWVudHMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGMubmFtZSA9PSBuZXdOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X25hbWUgPSBjbGllbnQubmFtZTtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9pZCA9IGNsaWVudC5pZDtcbiAgICAgICAgICAgICAgY2xpZW50X2lkID0gY2xpZW50LmlkO1xuICAgICAgICAgICAgICBjbGllbnRfbmFtZSA9IGNsaWVudC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X2lkID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X25hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uY2xpZW50X25hbWUgPSBjbGllbnRfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0ucmVjZWl2ZWRfYnlcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3SUQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChuZXdJRCAhPSBudWxsIHx8IG5ld0lEICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmVtcGxveWVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBfLmZpbmQoc2VsZi5lbXBsb3llZXMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuaWQgPT0gbmV3SUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbXBsb3llZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLnJlY2VpdmVkX2J5ID0gZW1wbG95ZWUuaWQ7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS5yZWNlaXZlZF9ieV9uYW1lID0gZW1wbG95ZWUubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5mb3JtLnJlY2VpdmVkX2J5ID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0ucmVjZWl2ZWRfYnlfbmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLndyaXR0ZW5fYnlcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3SUQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChuZXdJRCAhPSBudWxsIHx8IG5ld0lEICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmVtcGxveWVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBfLmZpbmQoc2VsZi5lbXBsb3llZXMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuaWQgPT0gbmV3SUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbXBsb3llZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLndyaXR0ZW5fYnkgPSBlbXBsb3llZS5pZDtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLndyaXR0ZW5fYnlfbmFtZSA9IGVtcGxveWVlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZm9ybS53cml0dGVuX2J5ID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0ud3JpdHRlbl9ieV9uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0uaW5zcGVjdGVkX2J5XCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld0lEKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAobmV3SUQgIT0gbnVsbCB8fCBuZXdJRCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoc2VsZi5lbXBsb3llZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gXy5maW5kKHNlbGYuZW1wbG95ZWVzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmlkID09IG5ld0lEO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZW1wbG95ZWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS5pbnNwZWN0ZWRfYnkgPSBlbXBsb3llZS5pZDtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmluc3BlY3RlZF9ieV9uYW1lID0gZW1wbG95ZWUubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5mb3JtLmluc3BlY3RlZF9ieSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmluc3BlY3RlZF9ieV9uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0ubG9jYXRlZF9ieVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdJRCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG5ld0lEICE9IG51bGwgfHwgbmV3SUQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHNlbGYuZW1wbG95ZWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IF8uZmluZChzZWxmLmVtcGxveWVlcywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PSBuZXdJRDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVtcGxveWVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLmZvcm0ubG9jYXRlZF9ieSA9IGVtcGxveWVlLmlkO1xuICAgICAgICAgICAgICBzZWxmLmZvcm0ubG9jYXRlZF9ieV9uYW1lID0gZW1wbG95ZWUubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5mb3JtLmxvY2F0ZWRfYnkgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5sb2NhdGVkX2J5X25hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5nZXRDdXN0b21lcnMoKTtcbiAgICB0aGlzLmdldFNoaXBwZXJzKCk7XG4gICAgdGhpcy5nZXRFbXBsb3llZXMoKTtcbiAgICB0aGlzLmdldEJpbnMoKTtcbiAgICB0aGlzLmdldEhhbmRsaW5nUmF0ZXMoKTtcbiAgICB0aGlzLmdldFN0b3JhZ2VSYXRlcygpO1xuICAgIHRoaXMuZGF0ZV9yZWNlaXZlZCA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5kYXRlX3Byb2Nlc3NlZCA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVSZWNlaXZpbmdBbW91bnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgdG90YWwgPSBzZWxmLnBhY2thZ2VzLmxlbmd0aDtcbiAgICAgIGxldCByZWNlaXZpbmdBbW91bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIHJlY2VpdmluZ0Ftb3VudCArPSBzZWxmLnBhY2thZ2VzW2ldLmhhbmRsaW5nX2ZlZTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZm9ybS5yZWNlaXZpbmdfYW1vdW50ID0gcmVjZWl2aW5nQW1vdW50O1xuICAgIH0sXG4gICAgdXBkYXRlVG90YWxDdWJlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHRvdGFsID0gdGhpcy5wYWNrYWdlcy5sZW5ndGg7XG4gICAgICBsZXQgdG90YWxDdWJlID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB0b3RhbEN1YmUgPSB0b3RhbEN1YmUgKyBOdW1iZXIoc2VsZi5wYWNrYWdlc1tpXS5jdWJlKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5mb3JtLnRvdGFsX2N1YmUgPSB0b3RhbEN1YmU7XG4gICAgfSxcbiAgICBnZXRIYW5kbGluZ1JhdGVzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXhpb3MuZ2V0KHJvdXRlKFwiYXBpLmRzZy5nZXRIYW5kbGluZ1JhdGVzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2VsZi5oYW5kbGluZ19yYXRlcyA9IHJlc3BvbnNlLmRhdGEucmF0ZXM7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFN0b3JhZ2VSYXRlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGF4aW9zLmdldChyb3V0ZShcImFwaS5kc2cuZ2V0U3RvcmFnZVJhdGVzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2VsZi5zdG9yYWdlX3JhdGVzID0gcmVzcG9uc2UuZGF0YS5yYXRlcztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0QmlucygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGF4aW9zLnBvc3Qocm91dGUoXCJhcGkuYmluLmluZGV4XCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2VsZi5iaW5zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGROZXdQYWNrYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgYXhpb3MucG9zdChyb3V0ZShcImFwaS5wYWNrYWdlLmFkZFwiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIGl0ZW0uZGF0ZV9yZWNlaXZlZCA9IHNlbGYuZGF0ZV9yZWNlaXZlZDtcbiAgICAgICAgICAgIGl0ZW0uZGF0ZV9wcm9jZXNzZWQgPSBzZWxmLmRhdGVfcHJvY2Vzc2VkO1xuICAgICAgICAgICAgaXRlbS5wb19ubyA9IHNlbGYucG9fbm87XG4gICAgICAgICAgICBpdGVtLmN1c3RvbWVyX2lkID0gc2VsZi5mb3JtLmN1c3RvbWVyX2lkO1xuICAgICAgICAgICAgaXRlbS5jdXN0b21lcl9uYW1lID0gc2VsZi5mb3JtLmN1c3RvbWVyX25hbWU7XG4gICAgICAgICAgICBpdGVtLmNsaWVudF9pZCA9IHNlbGYuZm9ybS5jbGllbnRfaWQ7XG4gICAgICAgICAgICBpdGVtLmNsaWVudF9uYW1lID0gc2VsZi5mb3JtLmNsaWVudF9uYW1lO1xuICAgICAgICAgICAgaXRlbS5zaGlwcGVyX2lkID0gc2VsZi5mb3JtLnNoaXBwZXJfaWQ7XG4gICAgICAgICAgICBpdGVtLnNoaXBwZXJfbmFtZSA9IHNlbGYuZm9ybS5zaGlwcGVyX25hbWU7XG4gICAgICAgICAgICBzZWxmLnBhY2thZ2VzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBzZWxmLmZvcm0ucGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRpb25Nb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogYFZhbGlkYXRpb24gRXJyb3JgLFxuICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj5QbGVhc2UgRml4IEZvcm0gRXJyb3JzPC9wPmAsXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEVtcGxveWVlcygpIHtcbiAgICAgIGF4aW9zLmdldChyb3V0ZShcImFwaS5kc2cuZ2V0RW1wbG95ZWVzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5lbXBsb3llZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFNoaXBwZXJzKCkge1xuICAgICAgYXhpb3MuZ2V0KHJvdXRlKFwiYXBpLmRzZy5nZXRTaGlwcGVyc1wiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2hpcHBlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEN1c3RvbWVycygpIHtcbiAgICAgIGF4aW9zLmdldChyb3V0ZShcImFwaS5kc2cuZ2V0Q3VzdG9tZXJzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIFwiU3RhdHVzOiBBY3RpdmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlN0YXR1czogSW5hY3RpdmVcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHNlbGYuY3JlYXRlRHNnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IGBWYWxpZGF0aW9uIEVycm9yYCxcbiAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+UGxlYXNlIEZpeCBGb3JtIEVycm9yczwvcD5gLFxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVEc2coKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmZvcm0uYnVzeSA9IHRydWU7XG4gICAgICBzZWxmLmZvcm0ucGFja2FnZXMgPSBzZWxmLnBhY2thZ2VzO1xuICAgICAgc2VsZi5mb3JtLmRhdGVfcHJvY2Vzc2VkID0gc2VsZi5kYXRlX3Byb2Nlc3NlZDtcbiAgICAgIHNlbGYuZm9ybVxuICAgICAgICAucG9zdChyb3V0ZShcImFwaS5kc2cuY3JlYXRlXCIpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgc2VsZi4kdmFsaWRhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc01vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzdWNjZXNzTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcbiAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+RFNHIEhhcyBCZWVuIENyZWF0ZWQhPC9wPmAsXG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLiRuZXh0VGljaygoKSA9PiBzZWxmLiRyb3V0ZXIucHVzaCh7IG5hbWU6IFwiZHNnXCIgfSkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICBjb25zdCBmYWlsZWRNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZmFpbGVkTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVmFsaWRhdGlvbiBFcnJvciFcIixcbiAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+UGxlYXNlIENvbXBsZXRlIEZvcm0gVG8gU3VibWl0ITwvcD5gLFxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZm9ybSA9IG5ldyBGb3JtKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgY2xpZW50X2lkOiBudWxsLFxuICAgICAgICBjbGllbnRfbmFtZTogbnVsbCxcbiAgICAgICAgY3VzdG9tZXJfaWQ6IG51bGwsXG4gICAgICAgIGN1c3RvbWVyX25hbWU6IG51bGwsXG4gICAgICAgIHNoaXBwZXJfaWQ6IG51bGwsXG4gICAgICAgIHNoaXBwZXJfbmFtZTogbnVsbCxcbiAgICAgICAgcmVjZWl2ZWRfYnk6IG51bGwsXG4gICAgICAgIHJlY2VpdmVkX2J5X25hbWU6IG51bGwsXG4gICAgICAgIHdyaXR0ZW5fYnk6IG51bGwsXG4gICAgICAgIHdyaXR0ZW5fYnlfbmFtZTogbnVsbCxcbiAgICAgICAgaW5zcGVjdGVkX2J5OiBudWxsLFxuICAgICAgICBpbnNwZWN0ZWRfYnlfbmFtZTogbnVsbCxcbiAgICAgICAgbG9jYXRlZF9ieTogbnVsbCxcbiAgICAgICAgbG9jYXRlZF9ieV9uYW1lOiBudWxsLFxuICAgICAgICB0b3RhbF9waWVjZXM6IG51bGwsXG4gICAgICAgIHRvdGFsX2N1YmU6IG51bGwsXG4gICAgICAgIHJlY2VpdmluZ19hbW91bnQ6IG51bGwsXG4gICAgICAgIHBhY2thZ2VzOiBbXVxuICAgICAgfSk7XG4gICAgfSxcbiAgICByZWRpcmVjdEJhY2soKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLiRuZXh0VGljaygoKSA9PiBzZWxmLiRyb3V0ZXIucHVzaCh7IG5hbWU6IFwiZHNnXCIgfSkpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0NyZWF0ZURzZy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibW9kYWwtbGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmxhdDogdHJ1ZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnlcIiwgYXR0cnM6IHsgZml4ZWQ6IFwiXCIsIGFwcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlyZWN0QmFjaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciB3aGl0ZS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNyZWF0ZSBOZXcgRFNHXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZXJyb3JzLmFueSgpIHx8IF92bS5mb3JtLmJ1c3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFNhdmVcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbX3ZtLl92KFwic2F2ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgIHdyYXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJteS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJweS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJteC0zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJweC0zXCI6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiY3VzdG9tZXJcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmN1c3RvbWVycyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiY3VzdG9tZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaG9vc2UgQ3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlwczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY3VzdG9tZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY3VzdG9tZXJfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmN1c3RvbWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiY2xpZW50XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jbGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJjbGllbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlbnNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNob29zZSBDbGllbnQgb3IgVHlwZSBOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS11c2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY2xpZW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY2xpZW50X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNsaWVudF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwic2hpcHBlclwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uc2hpcHBlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcInNoaXBwZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaG9vc2UgU2hpcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZmEtc2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwic2hpcHBlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNoaXBwZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2hpcHBlcl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2hpcHBlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInJlY2VpdmVkX2J5XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5lbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcInJlY2VpdmVkX2J5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVjZWl2ZWQgQnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlwczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImhvd190b19yZWdcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInJlY2VpdmVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVjZWl2ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVjZWl2ZWRfYnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlY2VpdmVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwid3JpdHRlbl9ieVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJ3cml0dGVuX2J5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiV3JpdHRlbiBCeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibG9jYWxfbGlicmFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwid3JpdHRlbl9ieVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLndyaXR0ZW5fYnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwid3JpdHRlbl9ieVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ud3JpdHRlbl9ieVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcImluc3BlY3RlZF9ieVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJpbnNwZWN0ZWRfYnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJbnNwZWN0ZWQgQnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlwczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiaW5zcGVjdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaW5zcGVjdGVkX2J5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImluc3BlY3RlZF9ieVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaW5zcGVjdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwibG9jYXRlZF9ieVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJsb2NhdGVkX2J5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG9jYXRlZCBCeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uX3BpblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwibG9jYXRlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxvY2F0ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibG9jYXRlZF9ieVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubG9jYXRlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQTyBOby5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImJvb2ttYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvX25vLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb19ubyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb19ub1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZGF0ZV9yZWNlaXZlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZV9yZWNlaXZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX3JlY2VpdmVkX21vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZWNlaXZlZF9tb2RhbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV9yZWNlaXZlZF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBSZWNlaXZlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImV2ZW50X2F2YWlsYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVfcmVjZWl2ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZWNlaXZlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVfcmVjZWl2ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9yZWNlaXZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZWNlaXZlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX3JlY2VpdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkX21vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5kYXRlX3JlY2VpdmVkLnNhdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZWNlaXZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9LXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImRhdGVfcHJvY2Vzc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlX3Byb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3Byb2Nlc3NlZCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9wcm9jZXNzZWRfbW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3Byb2Nlc3NlZF9tb2RhbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV9wcm9jZXNzZWRfbW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgUHJvY2Vzc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRfbm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVfcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV9wcm9jZXNzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9wcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVfcHJvY2Vzc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3Byb2Nlc3NlZF9tb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMuZGF0ZV9wcm9jZXNzZWQuc2F2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3Byb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9LXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucGFja2FnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBQaWVjZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRvdGFsX3BpZWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRvdGFsX3BpZWNlc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50b3RhbF9waWVjZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucGFja2FnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBDdWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZmEtY3ViZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcImZ0wrNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50b3RhbF9jdWJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidG90YWxfY3ViZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50b3RhbF9jdWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBhY2thZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVjZWl2aW5nIEFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiVVNEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucmVjZWl2aW5nX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlY2VpdmluZ19hbW91bnRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVjZWl2aW5nX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCJcIixcbiAgICAgICAgICAgICAgICB3cmFwOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXktMFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHktMFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXgtM1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHgtM1wiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ucGFja2FnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmVycm9ycy5hbnkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZE5ld1BhY2thZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIEFkZCBOZXcgUGFja2FnZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibGlicmFyeV9hZGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5wYWNrYWdlcywgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJwYWNrYWdlc1wiLCB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGluZGV4OiBrZXkgKyAxLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbjoga2V5LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgcGFja2FnZXM6IF92bS5wYWNrYWdlcyxcbiAgICAgICAgICAgICAgICBiaW5zOiBfdm0uYmlucyxcbiAgICAgICAgICAgICAgICBcImhhbmRsaW5nLXJhdGVzXCI6IF92bS5oYW5kbGluZ19yYXRlcyxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2UtcmF0ZXNcIjogX3ZtLnN0b3JhZ2VfcmF0ZXMsXG4gICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOWFmNzFjMTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTlhZjcxYzEwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQ3JlYXRlRHNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ3JlYXRlRHNnLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOWFmNzFjMTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DcmVhdGVEc2cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0NyZWF0ZURzZy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOWFmNzFjMTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05YWY3MWMxMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQ3JlYXRlRHNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiZXhwb3J0IGRlZmF1bHQge1xuICAvKiB0aGlzIG1peGlucyBpcyByZXNwb25zaWJsZSBmb3IgY29uY2F0aW5hdGluZyBlcnJvciBtZXNzYWdlcyBmcm9tIHZmb3JtIGFuZCB2ZWUtdmFsaWRhdGUgICovXG4gIG1ldGhvZHM6IHtcbiAgICAvKiBlcnJvckJhZyBpcyByZWxhdGFlZCB0byB2ZWVWYWxpZGF0ZSBjb25maWcgbmFtZSovXG4gICAgLyogZm9ybSBpcyByZWxhdGVkIHRvIHZmb3JtICovXG4gICAgZXJyb3JNZXNzYWdlcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmNvbGxlY3QoZmllbGQpLmNvbmNhdCh0aGlzLmZvcm0uZXJyb3JzLm9ubHkoZmllbGQpKTtcbiAgICB9LFxuICAgIGhhc0Vycm9ycyhmaWVsZCkge1xuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZXJyb3JzXG4gICAgICAgIC5jb2xsZWN0KGZpZWxkKVxuICAgICAgICAuY29uY2F0KHRoaXMuZm9ybS5lcnJvcnMub25seShmaWVsZCkpO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3ZhbGlkYXRpb24tZXJyb3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gMDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwibFZLN1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJPTU40XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJsVks3XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IGV4dGVybmFsIFwiYXhpb3NcIlxudmFyIGV4dGVybmFsX19heGlvc18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiT01ONFwiKTtcbnZhciBleHRlcm5hbF9fYXhpb3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX19heGlvc18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy91dGlsLmpzXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKipcclxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXG5mdW5jdGlvbiBkZWVwQ29weShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciBjb3B5ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBjb3B5W2tleV0gPSBkZWVwQ29weShvYmpba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gY29weTtcbn1cbi8qKlxyXG4gKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGFuIGFycmF5LCB3cmFwIGl0IGluIG9uZS5cclxuICpcclxuICogQHBhcmFtICB7QW55fSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXG5cbmZ1bmN0aW9uIGFycmF5V3JhcCh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9FcnJvcnMuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIEVycm9yc19fdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgRXJyb3JzX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgRXJyb3JzX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gRXJyb3JzX190eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG52YXIgRXJyb3JzX0Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBlcnJvciBiYWcgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIEVycm9ycygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXJyb3JzKTtcblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0IHRoZSBlcnJvcnMgb2JqZWN0IG9yIGZpZWxkIGVycm9yIG1lc3NhZ2VzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBmaWVsZFxyXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfHVuZGVmaW5lZH0gbWVzc2FnZXNcclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFcnJvcnMsIFt7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZmllbGQsIG1lc3NhZ2VzKSB7XG4gICAgICBpZiAoRXJyb3JzX190eXBlb2YoZmllbGQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGZpZWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoX2V4dGVuZHMoe30sIHRoaXMuZXJyb3JzLCBfZGVmaW5lUHJvcGVydHkoe30sIGZpZWxkLCBhcnJheVdyYXAobWVzc2FnZXMpKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9ycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMgZm9yIHRoZSBnaXZlbiBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7Li4uU3RyaW5nfSBmaWVsZHNcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc0FueVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNBbnkoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZmllbGRzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBmaWVsZHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZHMuc29tZShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhhcyhmaWVsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYW55XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFueSgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIFN0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoZmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmhhcyhmaWVsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKGZpZWxkKVswXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRBbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKGZpZWxkKSB7XG4gICAgICByZXR1cm4gYXJyYXlXcmFwKHRoaXMuZXJyb3JzW2ZpZWxkXSB8fCBbXSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBlcnJvciBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgey4uLlN0cmluZ30gZmllbGRzXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25seVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmx5KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBtZXNzYWdlcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBmaWVsZHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gX3RoaXMyLmdldChmaWVsZCk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvcnMgaW4gYSBmbGF0IGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmbGF0dGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsYXR0ZW4oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3x1bmRlZmluZWR9IGZpZWxkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKGZpZWxkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGVycm9ycyA9IHt9O1xuXG4gICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChrZXkgIT09IGZpZWxkKSB7XG4gICAgICAgICAgICBlcnJvcnNba2V5XSA9IF90aGlzMy5lcnJvcnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldChlcnJvcnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFcnJvcnM7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvRm9ybS5qc1xuZnVuY3Rpb24gRm9ybV9fdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgRm9ybV9fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IEZvcm1fX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBGb3JtX190eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBGb3JtX19kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2V4dGVuZHMoKSB7IEZvcm1fX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gRm9ybV9fZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gRm9ybV9fZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIEZvcm1fX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgRm9ybV9fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIEZvcm1fX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cblxudmFyIEZvcm1fRm9ybSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZm9ybSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIEZvcm0oKSB7XG4gICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgRm9ybV9fY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnNfRXJyb3JzKCk7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkZWVwQ29weShkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG4gIC8qKlxuICAgKiBGaWxsIGZvcm0gZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG5cblxuICBGb3JtX19jcmVhdGVDbGFzcyhGb3JtLCBbe1xuICAgIGtleTogXCJmaWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGwoZGF0YSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMua2V5cygpLnJlZHVjZShmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCBkYXRhLCBGb3JtX19kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCBfdGhpczJba2V5XSkpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZGF0YSBrZXlzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJrZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFGb3JtLmlnbm9yZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHByb2Nlc3NpbmcgdGhlIGZvcm0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFByb2Nlc3NpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRQcm9jZXNzaW5nKCkge1xuICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluaXNoIHByb2Nlc3NpbmcgdGhlIGZvcm0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmaW5pc2hQcm9jZXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmlzaFByb2Nlc3NpbmcoKSB7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBmb3JtIGVycm9ycy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIUZvcm0uaWdub3JlLmluY2x1ZGVzKGtleSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMzW2tleV0gPSBkZWVwQ29weShfdGhpczMub3JpZ2luYWxEYXRhW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBHRVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2dldCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQT1NUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwb3N0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3Bvc3QnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUEFUQ0ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGNoKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQVVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXQodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdkZWxldGUnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gZGF0YSB2aWEgYW4gSFRUUCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXRob2QgKGdldCwgcG9zdCwgcGF0Y2gsIHB1dClcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY29uZmlnIChheGlvcyBjb25maWcpXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN1Ym1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQobWV0aG9kLCB1cmwpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHRoaXMuc3RhcnRQcm9jZXNzaW5nKCk7XG4gICAgICB2YXIgZGF0YSA9IG1ldGhvZCA9PT0gJ2dldCcgPyB7XG4gICAgICAgIHBhcmFtczogdGhpcy5kYXRhKClcbiAgICAgIH0gOiB0aGlzLmRhdGEoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGV4dGVybmFsX19heGlvc19fZGVmYXVsdC5hLnJlcXVlc3QoRm9ybV9fZXh0ZW5kcyh7XG4gICAgICAgICAgdXJsOiBfdGhpczQucm91dGUodXJsKSxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0sIGNvbmZpZykpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgX3RoaXM0LmZpbmlzaFByb2Nlc3NpbmcoKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBfdGhpczQuYnVzeSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfdGhpczQuZXJyb3JzLnNldChfdGhpczQuZXh0cmFjdEVycm9ycyhlcnJvci5yZXNwb25zZSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGVycm9ycyBmcm9tIHRoZSByZXNwb25zZSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdEVycm9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0RXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgRm9ybV9fdHlwZW9mKHJlc3BvbnNlLmRhdGEpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBGb3JtLmVycm9yTWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIHJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBuYW1lZCByb3V0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJvdXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdXRlKG5hbWUpIHtcbiAgICAgIHZhciBwYXJhbWV0ZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciB1cmwgPSBuYW1lO1xuXG4gICAgICBpZiAoRm9ybS5yb3V0ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdXJsID0gZGVjb2RlVVJJKEZvcm0ucm91dGVzW25hbWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEZvcm1fX3R5cGVvZihwYXJhbWV0ZXJzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICBpZDogcGFyYW1ldGVyc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJ7XCIuY29uY2F0KGtleSwgXCJ9XCIpLCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciBlcnJvcnMgb24ga2V5ZG93bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5ZG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubmFtZSkge1xuICAgICAgICB0aGlzLmVycm9ycy5jbGVhcihldmVudC50YXJnZXQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm07XG59KCk7XG5cbkZvcm1fRm9ybS5yb3V0ZXMgPSB7fTtcbkZvcm1fRm9ybS5lcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJztcbkZvcm1fRm9ybS5pZ25vcmUgPSBbJ2J1c3knLCAnc3VjY2Vzc2Z1bCcsICdlcnJvcnMnLCAnb3JpZ2luYWxEYXRhJ107XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzcmNfRm9ybSA9IChGb3JtX0Zvcm0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEhhc0Vycm9yID0gKHtcbiAgbmFtZTogJ2hhcy1lcnJvcicsXG4gIHByb3BzOiB7XG4gICAgZm9ybToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQzODlhNmRkXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmhhcyhfdm0uZmllbGQpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldChfdm0uZmllbGQpKX19KTpfdm0uX2UoKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgSGFzRXJyb3IsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19IYXNFcnJvciA9IChDb21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnQuanNcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0ID0gKHtcbiAgcHJvcHM6IHtcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZGlzbWlzc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzbWlzczogZnVuY3Rpb24gZGlzbWlzcygpIHtcbiAgICAgIGlmICh0aGlzLmRpc21pc3NpYmxlKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0RXJyb3IgPSAoe1xuICBuYW1lOiAnYWxlcnQtZXJyb3InLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnVGhlcmUgd2VyZSBzb21lIHByb2JsZW1zIHdpdGggeW91ciBpbnB1dC4nXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTczYWE3YzhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxudmFyIEFsZXJ0RXJyb3JfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmFueSgpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJkZWZhdWx0XCIsWyhfdm0uZm9ybS5lcnJvcnMuaGFzKCdlcnJvcicpKT9fYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ2Vycm9yJykpfX0pOl9jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pXSldLDIpOl92bS5fZSgpfVxudmFyIEFsZXJ0RXJyb3Jfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydEVycm9yX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRFcnJvcixcbiAgQWxlcnRFcnJvcl9yZW5kZXIsXG4gIEFsZXJ0RXJyb3Jfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydEVycm9yX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0RXJyb3IgPSAoQWxlcnRFcnJvcl9Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydEVycm9ycyA9ICh7XG4gIG5hbWU6ICdhbGVydC1lcnJvcnMnLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnVGhlcmUgd2VyZSBzb21lIHByb2JsZW1zIHdpdGggeW91ciBpbnB1dC4nXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDIyYTY1OTFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbnZhciBBbGVydEVycm9yc19yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuYW55KCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ubWVzc2FnZSk/X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygndWwnLF92bS5fbCgoX3ZtLmZvcm0uZXJyb3JzLmZsYXR0ZW4oKSksZnVuY3Rpb24oZXJyb3Ipe3JldHVybiBfYygnbGknLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoZXJyb3IpfX0pfSkpXSk6X3ZtLl9lKCl9XG52YXIgQWxlcnRFcnJvcnNfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0RXJyb3JzX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRFcnJvcnMsXG4gIEFsZXJ0RXJyb3JzX3JlbmRlcixcbiAgQWxlcnRFcnJvcnNfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydEVycm9yc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3N0eWxlc19fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydEVycm9ycyA9IChBbGVydEVycm9yc19Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0U3VjY2VzcyA9ICh7XG4gIG5hbWU6ICdhbGVydC1zdWNjZXNzJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wYWZkYjhhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbnZhciBBbGVydFN1Y2Nlc3NfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uc3VjY2Vzc2Z1bCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtc3VjY2VzcyBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImRlZmF1bHRcIixbX2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSldKV0sMik6X3ZtLl9lKCl9XG52YXIgQWxlcnRTdWNjZXNzX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0U3VjY2Vzc19Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0U3VjY2VzcyxcbiAgQWxlcnRTdWNjZXNzX3JlbmRlcixcbiAgQWxlcnRTdWNjZXNzX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3N0eWxlc19fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0U3VjY2VzcyA9IChBbGVydFN1Y2Nlc3NfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9pbmRleC5qc1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkZvcm1cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzcmNfRm9ybTsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRXJyb3JzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRXJyb3JzX0Vycm9yczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiSGFzRXJyb3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0hhc0Vycm9yOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydEVycm9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydEVycm9yOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydEVycm9yc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRFcnJvcnM7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0U3VjY2Vzc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRTdWNjZXNzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3JjX0Zvcm07IH0pO1xuXG5cblxuXG5cblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Zmb3JtL2Rpc3QvdmZvcm0uY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyAzOCAzOSA0MCA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGE5NTMwNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWxMYXlvdXQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gbnVsbFxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGE5NTMwNjJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbExheW91dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZGE5NTMwNjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kYTk1MzA2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGE5NTMwNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWxMYXlvdXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiOGJiN2QxMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGE5NTMwNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWxMYXlvdXQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRhOTUzMDYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsTGF5b3V0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1kYTk1MzA2MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbWVzc2FnZXNfX21lc3NhZ2Uge1xcbiAgY29sb3I6ICNlNTczNzM7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS91cmlhaC9TaXRlcy9kc2dsaXZlL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzQkE7RUFDQSxlQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1vZGFsTGF5b3V0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1hcHAgXFxuICAgIHYtY2xvYWsgXFxuICAgIHN0YW5kYWxvbmVcXG4gID5cXG4gICAgPHYtY29udGVudCBjbGFzcz1cXFwid2hpdGVcXFwiPlxcbiAgICAgIDx2LWNvbnRhaW5lciBcXG4gICAgICAgIHRyYW5zaXRpb249XFxcInNsaWRlLXgtdHJhbnNpdGlvblxcXCIgXFxuICAgICAgICBmbHVpZCBcXG4gICAgICAgIGNsYXNzPVxcXCJwYS0wIG1hLTBcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtY2FyZCA6ZmxhdD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgIDxzbG90IG5hbWU9XFxcInRvb2xiYXJcXFwiLz5cXG4gICAgICAgICAgPHNsb3QvPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICA8c2xvdCBuYW1lPVxcXCJmb290ZXJcXFwiLz5cXG4gICAgPC92LWNvbnRlbnQ+XFxuICA8L3YtYXBwPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHN0eWxlPlxcbi52LW1lc3NhZ2VzX19tZXNzYWdlIHtcXG4gIGNvbG9yOiAjZTU3MzczO1xcbn1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1kYTk1MzA2MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7IGF0dHJzOiB7IHN0YW5kYWxvbmU6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGVudFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndoaXRlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0wIG1hLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHJhbnNpdGlvbjogXCJzbGlkZS14LXRyYW5zaXRpb25cIiwgZmx1aWQ6IFwiXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IHRydWUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3QoXCJ0b29sYmFyXCIpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fdChcImZvb3RlclwiKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZGE5NTMwNjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWRhOTUzMDYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYiXSwic291cmNlUm9vdCI6IiJ9