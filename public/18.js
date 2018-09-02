webpackJsonp([18],{

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

/***/ 1163:
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
        packages: []
      }),
      po_no: null,
      date_received: null,
      bins: [],
      date_received_modal: false,
      date_processed: null,
      date_processed_modal: false,
      employees: [],
      packages: [],
      handling_rates: [],
      storage_rates: []
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
    packages: {
      handler: function handler(newValue) {
        var self = this;
        self.form.total_pieces = newValue.length;
        self.updateTotalCube();
        self.updateReceivingAmount();
      },
      deep: true
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
          return self.$router.push({ name: "warehouse" });
        });
      }).catch(function (errors) {
        console.log(errors.response.data);
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
        return self.$router.push({ name: "warehouse" });
      });
    }
  }
});

/***/ }),

/***/ 1164:
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
                  _c("v-text-field", {
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
                      "error-messages": _vm.errorMessages("customer"),
                      required: "",
                      label: "Type Customer Name",
                      "prepend-icon": "supervised_user_circle",
                      "data-vv-name": "customer"
                    },
                    model: {
                      value: _vm.form.customer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "customer_name", $$v)
                      },
                      expression: "form.customer_name"
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
                  _c("v-text-field", {
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
                      "error-messages": _vm.errorMessages("client"),
                      required: "",
                      label: "Type Client Name",
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
                  _c("v-text-field", {
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
                      "error-messages": _vm.errorMessages("shipper"),
                      required: "",
                      label: "Type Shipper Name",
                      "prepend-icon": "fa-ship",
                      "data-vv-name": "shipper"
                    },
                    model: {
                      value: _vm.form.shipper_name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "shipper_name", $$v)
                      },
                      expression: "form.shipper_name"
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
                    { attrs: { xs12: "", lg3: "" } },
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
                    { attrs: { xs12: "", lg3: "" } },
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
                item: item,
                index: key + 1,
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
    require("vue-hot-reload-api")      .rerender("data-v-4aabb4ce", module.exports)
  }
}

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1163)
/* template */
var __vue_template__ = __webpack_require__(1164)
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
Component.options.__file = "resources/assets/js/pages/Warehouse/CreateWarehouse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aabb4ce", Component.options)
  } else {
    hotAPI.reload("data-v-4aabb4ce", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2Fkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWU/ODhmZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZT9mYmE2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZT8zNjBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlP2E5ZGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWU/NjAzNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWU/M2E5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZT8yMWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlP2YwMjYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZT80ZDVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWU/OTI0YSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeGtlc2hpL2ltYWdlLWNvbXByZXNzb3IvZGlzdC9pbWFnZS1jb21wcmVzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtdXBsb2FkLWNvbXBvbmVudC9kaXN0L3Z1ZS11cGxvYWQtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRzLnZ1ZT8yZTM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWU/MzdhYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWU/ZmEyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlPzM3YjEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZT9hMzViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlPzM3ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvV2FyZWhvdXNlL0NyZWF0ZVdhcmVob3VzZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9XYXJlaG91c2UvQ3JlYXRlV2FyZWhvdXNlLnZ1ZT8zYzgyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvV2FyZWhvdXNlL0NyZWF0ZVdhcmVob3VzZS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3ZhbGlkYXRpb24tZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Zmb3JtL2Rpc3QvdmZvcm0uY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZT9kMWY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWU/YWFlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlPzliMjQiXSwibmFtZXMiOlsibWV0aG9kcyIsImVycm9yTWVzc2FnZXMiLCJmaWVsZCIsImVycm9ycyIsImNvbGxlY3QiLCJjb25jYXQiLCJmb3JtIiwib25seSIsImhhc0Vycm9ycyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBMFo7QUFDMVo7QUFDQSwrQ0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBc007QUFDdE07QUFDQTtBQUNBO0FBQ0EsNkNBQTBaO0FBQzFaO0FBQ0EsK0NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxz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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGFBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQVFEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixlQUFlLFFBQVE7QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOzs7Ozs7OztBQ3IzQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxx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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxXQUFXLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxx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Q0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLGFBQWEsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVXBsb2Fkcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWZjNjc5NGFhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXBsb2Fkcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWZjNjc5NGFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZmM2Nzk0YWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTljOGJjMzNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW1hZ2VzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbWFnZXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OWM4YmMzM1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ltYWdlcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU5YzhiYzMzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTljOGJjMzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5YzhiYzMzXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNhYzYzZWYwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWM4YmMzM1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbWFnZXMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5YzhiYzMzXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTljOGJjMzNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJJbWFnZXMudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTljOGJjMzNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IiwiPHRlbXBsYXRlPlxuICA8di1kaWFsb2cgXG4gICAgdi1tb2RlbD1cIm1vZGFsXCIgXG4gICAgZnVsbHNjcmVlbiBcbiAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCI+XG4gICAgPHYtY2FyZCA6bGlnaHQ9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgaWNvbiBcbiAgICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCIgXG4gICAgICAgICAgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICA8di1pY29uPmFycm93X2JhY2s8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cIndoaXRlLS10ZXh0XCI+SXRlbSAjIHt7IGlkIH19IEltYWdlczwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8IS0tIGFkZCBIZXJlIEltYWdlcyAtLT5cbiAgICAgIDx2LWNvbnRhaW5lciBcbiAgICAgICAgdi1pZj1cImltYWdlcy5sZW5ndGggPiAwXCIgXG4gICAgICAgIGZsdWlkXG4gICAgICA+XG4gICAgICAgIDx2LWxheW91dCBcbiAgICAgICAgICByb3cgXG4gICAgICAgICAgd3JhcFxuICAgICAgICA+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtZm9yPVwiaW1hZ2UgaW4gaW1hZ2VzXCIgXG4gICAgICAgICAgICA6a2V5PVwiaW1hZ2VcIlxuICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgbWQ0XG4gICAgICAgICAgICBweC0yXG4gICAgICAgICAgICBweS0yXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtY2FyZC1tZWRpYVxuICAgICAgICAgICAgICA6c3JjPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNTBweFwiXG4gICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgQGNsaWNrPVwidmlld0Z1bGxJbWFnZShpbWFnZSlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cblxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgIDx2LWNvbnRhaW5lciBcbiAgICAgICAgdi1lbHNlIFxuICAgICAgICBmbHVpZD5cbiAgICAgICAgPHYtYWxlcnRcbiAgICAgICAgICA6dmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgaWNvbj1cIndhcm5pbmdcIlxuICAgICAgICAgIHRyYW5zaXRpb249XCJzY2FsZS10cmFuc2l0aW9uXCJcbiAgICAgICAgICBvdXRsaW5lXG4gICAgICAgID5cbiAgICAgICAgICBObyBVcGxvYWRlZCBJbWFnZXMgRm9yIFRoaXMgSXRlbVxuICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgIDwvdi1jYXJkPlxuICA8L3YtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIG1vZGFsOiBmYWxzZVxuICB9KSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgQnVzLiRvbihgdmlldy1wYWNrYWdlLSR7dGhpcy5pZH0taW1hZ2VzYCwgKCkgPT4ge1xuICAgICAgc2VsZi5tb2RhbCA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICB9LFxuICAgIHZpZXdGdWxsSW1hZ2UoaW1hZ2UpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGltYWdlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0ltYWdlcy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1kaWFsb2dcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBcIlwiLCB0cmFuc2l0aW9uOiBcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLm1vZGFsID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlnaHQ6IHRydWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJJdGVtICMgXCIgKyBfdm0uX3MoX3ZtLmlkKSArIFwiIEltYWdlc1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmltYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kNDogXCJcIiwgXCJweC0yXCI6IFwiXCIsIFwicHktMlwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLW1lZGlhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGltYWdlLCBoZWlnaHQ6IFwiMjUwcHhcIiwgY29udGFpbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3RnVsbEltYWdlKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImFtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBObyBVcGxvYWRlZCBJbWFnZXMgRm9yIFRoaXMgSXRlbVxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTU5YzhiYzMzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01OWM4YmMzM1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9JbWFnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OThjYmVjMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYW1hZ2VJbWFnZXMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RhbWFnZUltYWdlcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU5OGNiZWMyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFtYWdlSW1hZ2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTk4Y2JlYzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OThjYmVjMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTk4Y2JlYzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFtYWdlSW1hZ2VzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYTlkNGFiMjJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5OGNiZWMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZUltYWdlcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTk4Y2JlYzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFtYWdlSW1hZ2VzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OThjYmVjMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkRhbWFnZUltYWdlcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OThjYmVjMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCI8dGVtcGxhdGU+XG4gIDx2LWRpYWxvZyBcbiAgICB2LW1vZGVsPVwibW9kYWxcIiBcbiAgICBmdWxsc2NyZWVuIFxuICAgIHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIj5cbiAgICA8di1jYXJkIDpsaWdodD1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICBpY29uIFxuICAgICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIiBcbiAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgIDx2LWljb24+YXJyb3dfYmFjazwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwid2hpdGUtLXRleHRcIj5JdGVtICMge3sgaWQgfX0gRGFtYWdlZCBJbWFnZXM8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPCEtLSBhZGQgSGVyZSBJbWFnZXMgLS0+XG4gICAgICA8di1jb250YWluZXJcbiAgICAgICAgdi1pZj1cImltYWdlcy5sZW5ndGggPiAwXCJcbiAgICAgICAgZmx1aWQgXG4gICAgICA+XG4gICAgICAgIDx2LWxheW91dCBcbiAgICAgICAgICByb3cgXG4gICAgICAgICAgd3JhcFxuICAgICAgICA+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtZm9yPVwiaW1hZ2UgaW4gaW1hZ2VzXCIgXG4gICAgICAgICAgICA6a2V5PVwiaW1hZ2VcIlxuICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgbWQ0XG4gICAgICAgICAgICBweC0yXG4gICAgICAgICAgICBweS0yXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtY2FyZC1tZWRpYVxuICAgICAgICAgICAgICA6c3JjPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNTBweFwiXG4gICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgQGNsaWNrPVwidmlld0Z1bGxJbWFnZShpbWFnZSlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cblxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgIDx2LWNvbnRhaW5lciBcbiAgICAgICAgdi1lbHNlIFxuICAgICAgICBmbHVpZD5cbiAgICAgICAgPHYtYWxlcnRcbiAgICAgICAgICA6dmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgaWNvbj1cIndhcm5pbmdcIlxuICAgICAgICAgIHRyYW5zaXRpb249XCJzY2FsZS10cmFuc2l0aW9uXCJcbiAgICAgICAgICBvdXRsaW5lXG4gICAgICAgID5cbiAgICAgICAgICBObyBVcGxvYWRlZCBEYW1hZ2VkIEltYWdlcyBGb3IgVGhpcyBJdGVtXG4gICAgICAgIDwvdi1hbGVydD5cbiAgICAgIDwvdi1jb250YWluZXI+XG4gICAgPC92LWNhcmQ+XG4gIDwvdi1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgbW9kYWw6IGZhbHNlXG4gIH0pLFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKGB2aWV3LWRhbWFnZWQtcGFja2FnZS0ke3RoaXMuaWR9LWltYWdlc2AsICgpID0+IHtcbiAgICAgIHNlbGYubW9kYWwgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XG4gICAgfSxcbiAgICB2aWV3RnVsbEltYWdlKGltYWdlKSB7XG4gICAgICB3aW5kb3cub3BlbihpbWFnZSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZGlhbG9nXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogXCJcIiwgdHJhbnNpdGlvbjogXCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIiB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5tb2RhbCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS5tb2RhbCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpZ2h0OiB0cnVlIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiSXRlbSAjIFwiICsgX3ZtLl9zKF92bS5pZCkgKyBcIiBEYW1hZ2VkIEltYWdlc1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmltYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kNDogXCJcIiwgXCJweC0yXCI6IFwiXCIsIFwicHktMlwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLW1lZGlhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGltYWdlLCBoZWlnaHQ6IFwiMjUwcHhcIiwgY29udGFpbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3RnVsbEltYWdlKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImFtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBObyBVcGxvYWRlZCBEYW1hZ2VkIEltYWdlcyBGb3IgVGhpcyBJdGVtXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTk4Y2JlYzJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU5OGNiZWMyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhY2thZ2VzL0RhbWFnZUltYWdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIgMzUgMzYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTEwMGMyMWNhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhY2thZ2VzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9QYWNrYWdlcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTEwMGMyMWNhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGFja2FnZXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMDBjMjFjYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEwMGMyMWNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xMDBjMjFjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWNrYWdlcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjg0YmJkNjc0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xMDBjMjFjYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWNrYWdlcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTAwYzIxY2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZXMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTEwMGMyMWNhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL1BhY2thZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiUGFja2FnZXMudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTAwYzIxY2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiPHRlbXBsYXRlPlxuICA8di1sYXlvdXQgXG4gICAgcm93XG4gICAgd3JhcFxuICAgIHBhLTNcbiAgICBtYS0zXG4gID5cbiAgICA8di1jYXJkPlxuICAgICAgPHYtdG9vbGJhciBjbGFzcz1cImJsdWUtZ3JleVwiPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICB2LWlmPVwiIXJlYWRvbmx5XCJcbiAgICAgICAgICBmbGF0IFxuICAgICAgICAgIGljb25cbiAgICAgICAgICBjb2xvcj1cImJsdWUgbGlnaHRlbi00XCIgXG4gICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cImFkZE5ld1BhY2thZ2UoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1pY29uIHgtbGFyZ2U+YWRkX2NpcmNsZTwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICB2LWlmPVwiIXJlYWRvbmx5XCJcbiAgICAgICAgICBmbGF0IFxuICAgICAgICAgIGljb25cbiAgICAgICAgICBjb2xvcj1cImdyZWVuIGxpZ2h0ZW4tMlwiIFxuICAgICAgICAgIEBjbGljay5uYXRpdmU9XCJjbG9uZVBhY2thZ2UoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1pY29uIHgtbGFyZ2U+ZmlsZV9jb3B5PC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LW1kLWNlbnRlciB3aGl0ZS0tdGV4dFwiPkl0ZW0ge3sgaW5kZXggfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtYnRuXG4gICAgICAgICAgdi1pZj1cIiFyZWFkb25seVwiXG4gICAgICAgICAgZmxhdCBcbiAgICAgICAgICBpY29uXG4gICAgICAgICAgY29sb3I9XCJyZWRcIiBcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwiZGVsZXRlUGFja2FnZShpdGVtLmlkKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8di1pY29uIHgtbGFyZ2U+Y2xvc2U8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICBmbHVpZFxuICAgICAgICBncmlkLWxpc3QtbWRcbiAgICAgID5cbiAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwXG4gICAgICAgICAgcGEtMlxuICAgICAgICA+XG4gICAgICAgICAgPCEtLSA2ZmxleCB0YWItLT5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5zdHlsZV9ub1wiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdHlsZSBOby5cIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJzdHlsZVwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJPcHRpb25hbFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGVzY3JpcHRpb25gKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGVzY3JpcHRpb25gKSB9XCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aW5kZXh9LmRlc2NyaXB0aW9uYFwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgICBsYWJlbD1cIkl0ZW0gRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5sZW5ndGhcIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZ3RoXCJcbiAgICAgICAgICAgICAgc3VmZml4PVwiZnRcIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJrZXlib2FyZF90YWJcIlxuICAgICAgICAgICAgICBoaW50PVwiT3B0aW9uYWxcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0ud2lkdGhcIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxuICAgICAgICAgICAgICBzdWZmaXg9XCJmdFwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInN3YXBfaG9yaXpcIlxuICAgICAgICAgICAgICBoaW50PVwiT3B0aW9uYWxcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uaGVpZ2h0XCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkhlaWdodFwiXG4gICAgICAgICAgICAgIHN1ZmZpeD1cImZ0XCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwic3dhcF92ZXJ0XCJcbiAgICAgICAgICAgICAgaGludD1cIk9wdGlvbmFsXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uY3ViZVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5jdWJlYClcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmN1YmVgKSB9XCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkN1YmVcIlxuICAgICAgICAgICAgICBzdWZmaXg9XCJmdMKzXCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtY3ViZVwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uY3ViZWBcIlxuICAgICAgICAgICAgICBoaW50PVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIDppdGVtcz1cImJpbnNcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5iaW5faWRcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uYmluX2lkYClcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmJpbl9pZGApIH1cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIGl0ZW0tdGV4dD1cImNvZGVcIlxuICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBCaW5cIlxuICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJ2aWV3X2NvbWZ5XCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5iaW5faWRgXCJcbiAgICAgICAgICAgICAgaGludD1cIkNob29zZSBCaW5cIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kMlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIDppdGVtcz1cInN0b3JlX2F0XCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uc3RvcmVfYXRcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uc3RvcmVfYXRgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uc3RvcmVfYXRgKSB9XCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD1cIlN0b3JlIEF0XCJcbiAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZG5zXCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5zdG9yZV9hdGBcIlxuICAgICAgICAgICAgICBoaW50PVwiQ2hvb3NlIFN0b3JlIEF0XCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICA6aXRlbXM9XCJoYW5kbGluZ1JhdGVzXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uaGFuZGxpbmdfdHlwZVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5oYW5kbGluZ190eXBlYClcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmhhbmRsaW5nX3R5cGVgKSB9XCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgSGFuZGxpbmcgTm90ZVwiXG4gICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInJlY2VpcHRcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpdGVyYXRpb259LmhhbmRsaW5nX3R5cGVgXCJcbiAgICAgICAgICAgICAgaGludD1cIkNob29zZSBIYW5kbGluZyBOb3RlXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1zd2l0Y2hcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5kYW1hZ2VkXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiZ2V0RGFtYWdlU3RhdHVzKGl0ZW0uZGFtYWdlZClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgdi1pZj1cIml0ZW0uZGFtYWdlZFwiXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQ6IGl0ZW0uZGFtYWdlZCdcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kYW1hZ2VfZGVzY3JpcHRpb25gKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGFtYWdlX2Rlc2NyaXB0aW9uYCkgfVwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJSZXF1aXJlZCBJZiBNYXJrZWQgQXMgRGFtYWdlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uZGFtYWdlX2Rlc2NyaXB0aW9uYFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgICAgICBsYWJlbD1cIkRhbWFnZWQgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgPHYtbGF5b3V0XG4gICAgICAgICAgcm93IFxuICAgICAgICAgIHdyYXBcbiAgICAgICAgICBwYS0yXG4gICAgICAgID5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQ2IFxuICAgICAgICAgICAgcHgtM1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgQGNsaWNrPVwidmlld0ltYWdlcygpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBJdGVtIEltYWdlc1xuICAgICAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgIHYtaWY9XCIhcmVhZG9ubHlcIiBcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuUGFja2FnZUltYWdlc01vZGFsKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVcGxvYWQgUGFja2FnZSBJbWFnZXMgXG4gICAgICAgICAgICAgIDx2LWljb24gXG4gICAgICAgICAgICAgICAgcmlnaHQgXG4gICAgICAgICAgICAgID5hZGRfcGhvdG9fYWx0ZXJuYXRlPC92LWljb24+XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPHBhY2thZ2UtaW1hZ2VzLXVwbG9hZGVyIFxuICAgICAgICAgICAgICA6aWQ9XCJpdGVtLmlkXCIgXG4gICAgICAgICAgICAgIDppdGVtPVwiaXRlbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB2LWlmPVwiaXRlbS5kYW1hZ2VkXCJcbiAgICAgICAgICAgIHNtMTJcbiAgICAgICAgICAgIG1kNiBcbiAgICAgICAgICAgIHB4LTNcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInZpZXdEYW1hZ2VJbWFnZXMoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgRGFtYWdlIEltYWdlc1xuICAgICAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBicm9rZW5faW1hZ2VcbiAgICAgICAgICAgICAgPC92LWljb24+XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICB2LWlmPVwiIXJlYWRvbmx5XCIgXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5EYW1hZ2VkSW1hZ2VzTW9kYWwoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFVwbG9hZCBEYW1hZ2VkIEltYWdlcyA8di1pY29uIHJpZ2h0PmJyb2tlbl9pbWFnZTwvdi1pY29uPlxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDxkYW1hZ2VkLWltYWdlcy11cGxvYWRlciBcbiAgICAgICAgICAgICAgOmlkPVwiaXRlbS5pZFwiIFxuICAgICAgICAgICAgICA6aXRlbT1cIml0ZW1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgXG4gICAgICAgIDx2LWxheW91dFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwXG4gICAgICAgID5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQ4XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxuICAgICAgICAgICAgICBOb3RlczpcbiAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgICA8di10ZXh0YXJlYVxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLm5vdGVzXCJcbiAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0ubm90ZXNgKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKGBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0ubm90ZXNgKSB9XCJcbiAgICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgaGludD1cIk9wdGlvbmFsXCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5ub3Rlc2BcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtaWY9XCJpdGVtLmRhbWFnZWRcIlxuICAgICAgICAgICAgc20xMlxuICAgICAgICAgICAgbWQyXG4gICAgICAgICAgICBvcmRlci1tZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgIElzIEl0ZW0gUmVwYWlyZWQ/XG4gICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxuICAgICAgICAgICAgPHYtc3dpdGNoXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0ucmVwYWlyZWRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJnZXRSZXBhaXJlZFN0YXR1cyhpdGVtLnJlcGFpcmVkKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB2LWlmPVwiaXRlbS5yZXBhaXJlZFwiXG4gICAgICAgICAgICBzbTEyXG4gICAgICAgICAgICBtZDJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1zdWJoZWFkZXI+XG4gICAgICAgICAgICAgIFdoZW4gaXMgaXQgUmVwYWlyZWQ/XG4gICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5kYXRlX3JlcGFpcmVkYClcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycyhgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhdGVfcmVwYWlyZWRgKSB9XCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBSZXBhaXJlZFwiXG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImV2ZW50X25vdGVcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhdGVfcmVwYWlyZWRgXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3BlbkRhdGVSZXBhaXJlZE1vZGFsKClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICA6cmVmPVwiYGRhdGVfcmVwYWlyZWRfJHtpdGVtLmlkfWBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9yZXBhaXJlZF9tb2RhbFwiXG4gICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cIml0ZW0uZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgICAgbGF6eVxuICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8di1kYXRlLXBpY2tlciBcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uZGF0ZV9yZXBhaXJlZFwiIFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU+XG4gICAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkYXRlX3JlcGFpcmVkX21vZGFsID0gZmFsc2VcIj5DYW5jZWw8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmUoaXRlbSxpdGVtLmRhdGVfcmVwYWlyZWQpXCI+T0s8L3YtYnRuPlxuICAgICAgICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICBcbiAgICAgIDwvdi1jb250YWluZXI+ICBcbiAgICAgIDxpbWFnZXMgXG4gICAgICAgIDppZD1cImAke2l0ZW0uaWR9YFwiXG4gICAgICAgIDppbWFnZXM9XCJpdGVtLnBhY2thZ2VfaW1hZ2VzXCJcbiAgICAgIC8+XG4gICAgICA8ZGFtYWdlLWltYWdlcyBcbiAgICAgICAgOmlkPVwiYCR7aXRlbS5pZH1gXCIgXG4gICAgICAgIDppbWFnZXM9XCJpdGVtLmRhbWFnZWRfaW1hZ2VzXCJcbiAgICAgIC8+XG4gICAgPC92LWNhcmQ+XG4gIDwvdi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFBhY2thZ2VJbWFnZXNVcGxvYWRlciBmcm9tIFwiQ29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlclwiO1xuaW1wb3J0IERhbWFnZWRJbWFnZXNVcGxvYWRlciBmcm9tIFwiQ29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlclwiO1xuaW1wb3J0IHZhbGlkYXRpb25FcnJvciBmcm9tIFwiTWl4aW5zL3ZhbGlkYXRpb24tZXJyb3JcIjtcbmltcG9ydCBJbWFnZXMgZnJvbSBcIkNvbXBvbmVudHMvcGFja2FnZXMvSW1hZ2VzLnZ1ZVwiO1xuaW1wb3J0IERhbWFnZUltYWdlcyBmcm9tIFwiQ29tcG9uZW50cy9wYWNrYWdlcy9EYW1hZ2VJbWFnZXMudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFBhY2thZ2VJbWFnZXNVcGxvYWRlcixcbiAgICBEYW1hZ2VkSW1hZ2VzVXBsb2FkZXIsXG4gICAgSW1hZ2VzLFxuICAgIERhbWFnZUltYWdlc1xuICB9LFxuICBtaXhpbnM6IFt2YWxpZGF0aW9uRXJyb3JdLFxuICBwcm9wczoge1xuICAgIGl0ZW06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwYWNrYWdlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYmluczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxpbmdSYXRlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RvcmFnZVJhdGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIGl0ZXJhdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBzdG9yZV9hdDogW1wicmFja1wiLCBcImZsb29yXCJdLFxuICAgIGRhdGVfcmVwYWlyZWRfbW9kYWw6IGZhbHNlLFxuICAgIGRhdGVfcmVwYWlyZWQ6IG51bGxcbiAgfSksXG4gIHdhdGNoOiB7XG4gICAgXCJpdGVtLmxlbmd0aFwiKG5ld3ZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZXRvdGFsQ3ViZSgpO1xuICAgIH0sXG4gICAgXCJpdGVtLndpZHRoXCIobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRldG90YWxDdWJlKCk7XG4gICAgfSxcbiAgICBcIml0ZW0uaGVpZ2h0XCIobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRldG90YWxDdWJlKCk7XG4gICAgfSxcbiAgICBcIml0ZW0uaGFuZGxpbmdfdHlwZVwiKG5ld1ZhbHVlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgcmF0ZSA9IF8uZmluZChzZWxmLmhhbmRsaW5nUmF0ZXMsIGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuaWQgPT09IG5ld1ZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzZWxmLml0ZW0uaGFuZGxpbmdfZmVlID0gcmF0ZS5hbW91bnQ7XG4gICAgfSxcbiAgICBcIml0ZW0uc3RvcmVfYXRcIihuZXdWYWx1ZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHJhdGUgPSBfLmZpbmQoc2VsZi5zdG9yYWdlUmF0ZXMsIGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgbGV0IG5hbWUgPSByLm5hbWU7XG4gICAgICAgIGxldCBuYW1lQXJyYXkgPSBuYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbmFtZSA9IG5hbWVBcnJheVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbmFtZSA9PT0gbmV3VmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuaXRlbS5zdG9yYWdlX2ZlZSA9IHJhdGUuYW1vdW50O1xuICAgIH0sXG4gICAgXCJpdGVtLmJpbl9pZFwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSBudWxsIHx8IG5ld1ZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmJpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGJpbiA9IF8uZmluZChzZWxmLmJpbnMsIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIuaWQgPT09IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYmluICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLml0ZW0uYmluX25hbWUgPSBiaW4uY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5pdGVtLmJpbl9uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbkRhdGVSZXBhaXJlZE1vZGFsKCkge1xuICAgICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHRoaXMuZGF0ZV9yZXBhaXJlZF9tb2RhbCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3RGFtYWdlSW1hZ2VzKCkge1xuICAgICAgQnVzLiRlbWl0KGB2aWV3LWRhbWFnZWQtcGFja2FnZS0ke3RoaXMuaXRlbS5pZH0taW1hZ2VzYCk7XG4gICAgfSxcbiAgICB2aWV3SW1hZ2VzKCkge1xuICAgICAgQnVzLiRlbWl0KGB2aWV3LXBhY2thZ2UtJHt0aGlzLml0ZW0uaWR9LWltYWdlc2ApO1xuICAgIH0sXG4gICAgY2xvbmVQYWNrYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgYXhpb3MucG9zdChyb3V0ZShcImFwaS5wYWNrYWdlLmFkZFwiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBpdGVtID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICBpdGVtLmRzZ19pZCA9IHNlbGYuaXRlbS5kc2dfaWQ7XG4gICAgICAgIGl0ZW0uZGF0ZV9yZWNlaXZlZCA9IHNlbGYuaXRlbS5kYXRlX3JlY2VpdmVkO1xuICAgICAgICBpdGVtLmRhdGVfcHJvY2Vzc2VkID0gc2VsZi5pdGVtLmRhdGVfcHJvY2Vzc2VkO1xuICAgICAgICBpdGVtLmNsaWVudF9pZCA9IHNlbGYuaXRlbS5jbGllbnRfaWQ7XG4gICAgICAgIGl0ZW0uY2xpZW50X25hbWUgPSBzZWxmLml0ZW0uY2xpZW50X25hbWU7XG4gICAgICAgIGl0ZW0uY3VzdG9tZXJfaWQgPSBzZWxmLml0ZW0uY3VzdG9tZXJfaWQ7XG4gICAgICAgIGl0ZW0uY3VzdG9tZXJfbmFtZSA9IHNlbGYuaXRlbS5jdXN0b21lcl9uYW1lO1xuICAgICAgICBpdGVtLnNoaXBwZXJfaWQgPSBzZWxmLml0ZW0uc2hpcHBlcl9pZDtcbiAgICAgICAgaXRlbS5zaGlwcGVyX25hbWUgPSBzZWxmLml0ZW0uc2hpcHBlcl9uYW1lO1xuXG4gICAgICAgIGl0ZW0uYmluX2lkID0gc2VsZi5pdGVtLmJpbl9pZDtcbiAgICAgICAgaXRlbS5iaW5fbmFtZSA9IHNlbGYuaXRlbS5iaW5fbmFtZTtcblxuICAgICAgICBpdGVtLnBvX25vID0gc2VsZi5pdGVtLnBvX25vO1xuICAgICAgICBpdGVtLnN0eWxlX25vID0gc2VsZi5pdGVtLnN0eWxlX25vO1xuXG4gICAgICAgIGl0ZW0ubGVuZ3RoID0gc2VsZi5pdGVtLmxlbmd0aDtcbiAgICAgICAgaXRlbS53aWR0aCA9IHNlbGYuaXRlbS53aWR0aDtcbiAgICAgICAgaXRlbS5oZWlnaHQgPSBzZWxmLml0ZW0uaGVpZ2h0O1xuICAgICAgICBpdGVtLmN1YmUgPSBzZWxmLml0ZW0uY3ViZTtcblxuICAgICAgICBpdGVtLmRhbWFnZWQgPSBzZWxmLml0ZW0uZGFtYWdlZDtcbiAgICAgICAgaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb24gPSBzZWxmLml0ZW0uZGFtYWdlX2Rlc2NyaXB0aW9uO1xuICAgICAgICBpdGVtLnJlcGFpcmVkID0gc2VsZi5pdGVtLnJlcGFpcmVkO1xuICAgICAgICBpdGVtLmRhdGVfcmVwYWlyZWQgPSBzZWxmLml0ZW0uZGF0ZV9yZXBhaXJlZDtcblxuICAgICAgICBpdGVtLmhhbmRsaW5nX2ZlZSA9IHNlbGYuaXRlbS5oYW5kbGluZ19mZWU7XG4gICAgICAgIGl0ZW0uaGFuZGxpbmdfdHlwZSA9IHNlbGYuaXRlbS5oYW5kbGluZ190eXBlO1xuICAgICAgICBpdGVtLnN0b3JlX2F0ID0gc2VsZi5pdGVtLnN0b3JlX2F0O1xuICAgICAgICBpdGVtLnN0b3JhZ2VfZmVlID0gc2VsZi5pdGVtLnN0b3JhZ2VfZmVlO1xuXG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBzZWxmLml0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIHNlbGYucGFja2FnZXMucHVzaChpdGVtKTtcbiAgICAgICAgc2VsZi5mb3JtLnBhY2thZ2VzLnB1c2goaXRlbSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZE5ld1BhY2thZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBheGlvcy5wb3N0KHJvdXRlKFwiYXBpLnBhY2thZ2UuYWRkXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IGl0ZW0gPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIGl0ZW0uZGF0ZV9yZWNlaXZlZCA9IHNlbGYuaXRlbS5kYXRlX3JlY2VpdmVkO1xuICAgICAgICBpdGVtLmRhdGVfcHJvY2Vzc2VkID0gc2VsZi5pdGVtLmRhdGVfcHJvY2Vzc2VkO1xuICAgICAgICBpdGVtLnBvX25vID0gc2VsZi5pdGVtLnBvX25vO1xuICAgICAgICBpdGVtLmN1c3RvbWVyX2lkID0gc2VsZi5mb3JtLmN1c3RvbWVyX2lkO1xuICAgICAgICBpdGVtLmN1c3RvbWVyX25hbWUgPSBzZWxmLmZvcm0uY3VzdG9tZXJfbmFtZTtcbiAgICAgICAgaXRlbS5jbGllbnRfaWQgPSBzZWxmLmZvcm0uY2xpZW50X2lkO1xuICAgICAgICBpdGVtLmNsaWVudF9uYW1lID0gc2VsZi5mb3JtLmNsaWVudF9uYW1lO1xuICAgICAgICBpdGVtLnNoaXBwZXJfaWQgPSBzZWxmLmZvcm0uc2hpcHBlcl9pZDtcbiAgICAgICAgaXRlbS5zaGlwcGVyX25hbWUgPSBzZWxmLmZvcm0uc2hpcHBlcl9uYW1lO1xuICAgICAgICBzZWxmLnBhY2thZ2VzLnB1c2goaXRlbSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZXRvdGFsQ3ViZSgpIHtcbiAgICAgIGxldCB2b2x1bWUgPSB0aGlzLml0ZW0ubGVuZ3RoICogdGhpcy5pdGVtLndpZHRoICogdGhpcy5pdGVtLmhlaWdodDtcbiAgICAgIHRoaXMuaXRlbS5jdWJlID0gTWF0aC5jZWlsKCh2b2x1bWUgLyAxNzI4KS50b0ZpeGVkKDQpKTtcbiAgICB9LFxuICAgIHNhdmUoaXRlbSwgZGF0ZSkge1xuICAgICAgbGV0IHJlZiA9IGBkYXRlX3JlcGFpcmVkXyR7aXRlbS5pZH1gO1xuICAgICAgdGhpcy4kcmVmc1tyZWZdLnNhdmUoZGF0ZSk7XG4gICAgfSxcbiAgICB0b2dnbGVNb2RhbChpZCkge1xuICAgICAgdGhpcy5kYXRlX3JlcGFpcmVkX21vZGFsID0gIXRoaXMuZGF0ZV9yZXBhaXJlZF9tb2RhbDtcbiAgICB9LFxuICAgIG9wZW5QYWNrYWdlSW1hZ2VzTW9kYWwoKSB7XG4gICAgICBCdXMuJGVtaXQoYHVwbG9hZC1wYWNrYWdlLWltYWdlcy0ke3RoaXMuaXRlbS5pZH1gKTtcbiAgICB9LFxuICAgIG9wZW5EYW1hZ2VkSW1hZ2VzTW9kYWwoKSB7XG4gICAgICBCdXMuJGVtaXQoYHVwbG9hZC1kYW1hZ2VkLWltYWdlcy0ke3RoaXMuaXRlbS5pZH1gKTtcbiAgICB9LFxuICAgIGRlbGV0ZVBhY2thZ2UoaWQpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGF4aW9zLnBvc3Qocm91dGUoXCJhcGkucGFja2FnZS5kZWxldGVcIiwgeyBpZCB9KSkudGhlbigoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHNlbGYucGFja2FnZXMsIHsgaWQgfSk7XG4gICAgICAgIHNlbGYucGFja2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3RvcmVBdChzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIFwiU3RvcmUgQXQ6IEZsb29yXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJTdG9yZSBBdDogUmFja1wiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0RGFtYWdlU3RhdHVzKHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gXCJEYW1hZ2VkOiBZZXNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIkRhbWFnZWQ6IE5vXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRSZXBhaXJlZFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVwYWlyZWQ6IFllc1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiUmVwYWlyZWQ6IE5vXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9QYWNrYWdlcy52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIzMGE4NWYwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjMwYTg1ZjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIzMGE4NWYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjMwYTg1ZjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjMwYTg1ZjBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjNlZjBhOTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIzMGE4NWYwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhY2thZ2VJbWFnZXNVcGxvYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjMwYTg1ZjBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMzBhODVmMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIzMGE4NWYwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiPHRlbXBsYXRlPlxuICA8di1kaWFsb2cgXG4gICAgdi1tb2RlbD1cIm1vZGFsXCIgXG4gICAgZnVsbHNjcmVlbiBcbiAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCI+XG4gICAgPHYtY2FyZCA6bGlnaHQ9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIGNvbG9yPVwiYmx1ZSBsaWdodGVuLTJcIj5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGljb24gXG4gICAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiIFxuICAgICAgICAgIEBjbGljaz1cImNsb3NlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPlVwbG9hZCBJbWFnZXMgUElEOiB7eyBpZCB9fSA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHVwbG9hZHMgXG4gICAgICAgIDpzaW5nbGU9XCJzaW5nbGVcIlxuICAgICAgICA6cG9zdC11cmw9XCJwb3N0VXJsXCIgXG4gICAgICAgIDpmaWxlLWtleT1cImZpbGVLZXlcIlxuICAgICAgICA6aXRlbT1cIml0ZW1cIi8+XG4gICAgPC92LWNhcmQ+XG4gIDwvdi1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHVwbG9hZHMgZnJvbSBcIkNvbXBvbmVudHMvVXBsb2Fkc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICB1cGxvYWRzXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpdGVtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBzaW5nbGU6IGZhbHNlLFxuICAgIG1vZGFsOiBmYWxzZSxcbiAgICBmaWxlS2V5OiBcInBhY2thZ2VfaW1hZ2VzXCJcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgcG9zdFVybCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBpZCA9IHNlbGYuaWQ7XG4gICAgICByZXR1cm4gcm91dGUoXCJhcGkucGFja2FnZS51cGxvYWRQYWNrYWdlSW1hZ2VzXCIsIHsgaWQgfSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKGB1cGxvYWQtcGFja2FnZS1pbWFnZXMtJHt0aGlzLml0ZW0uaWR9YCwgKCkgPT4ge1xuICAgICAgc2VsZi5tb2RhbCA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZUdhbGxlcnlNb2RhbCgpIHtcbiAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvUGFja2FnZUltYWdlc1VwbG9hZGVyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPHYtY29udGFpbmVyIGZsdWlkPlxuICAgIDx2LWxheW91dCBcbiAgICAgIHJvdyBcbiAgICAgIHdyYXBcbiAgICA+XG4gICAgICA8di1zcGFjZXIvPlxuXG4gICAgICA8ZmlsZS11cGxvYWRcbiAgICAgICAgdi1pZj1cIiFpc09wdGlvblwiIFxuICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICA6cG9zdC1hY3Rpb249XCJwb3N0QWN0aW9uXCJcbiAgICAgICAgOnB1dC1hY3Rpb249XCJwdXRBY3Rpb25cIlxuICAgICAgICA6bmFtZT1cImZpbGVLZXlcIlxuICAgICAgICA6ZXh0ZW5zaW9ucz1cImV4dGVuc2lvbnNcIlxuICAgICAgICA6YWNjZXB0PVwiYWNjZXB0XCJcbiAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICA6ZGlyZWN0b3J5PVwiZGlyZWN0b3J5XCJcbiAgICAgICAgOnNpemU9XCJzaXplIHx8IDBcIlxuICAgICAgICA6dGhyZWFkPVwidGhyZWFkIDwgMSA/IDEgOiAodGhyZWFkID4gNSA/IDUgOiB0aHJlYWQpXCJcbiAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgOmRyb3A9XCJkcm9wXCJcbiAgICAgICAgOmRyb3AtZGlyZWN0b3J5PVwiZHJvcERpcmVjdG9yeVwiXG4gICAgICAgIDphZGQtaW5kZXg9XCJhZGRJbmRleFwiXG4gICAgICAgIHYtbW9kZWw9XCJmaWxlc1wiXG4gICAgICAgIGNsYXNzPVwidi1idG4gdi1idG4tLWZsYXQgdGhlbWUtLWRhcmsgYmx1ZS0tdGV4dCBteC01IHB5LTJcIlxuICAgICAgICBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiXG4gICAgICAgIEBpbnB1dC1maWx0ZXI9XCJpbnB1dEZpbHRlclwiXG4gICAgICAgIEBpbnB1dC1maWxlPVwiaW5wdXRGaWxlXCJcbiAgICAgID5cbiAgICAgICAgQ2hvb3NlIEZpbGVzXG4gICAgICA8L2ZpbGUtdXBsb2FkPlxuICAgICAgPHYtYnRuIFxuICAgICAgICB2LWVsc2VcbiAgICAgICAgZmxhdCBcbiAgICAgICAgaWNvbiBcbiAgICAgICAgY29sb3I9XCJyZWQgZGFya2VuLTRcIiBcbiAgICAgICAgQGNsaWNrLm5hdGl2ZT1cImlzT3B0aW9uID0gIWlzT3B0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICA8L3YtYnRuPlxuICAgICAgPHYtYnRuIFxuICAgICAgICB2LWlmPVwiIWlzT3B0aW9uXCJcbiAgICAgICAgZmxhdCBcbiAgICAgICAgaWNvbiBcbiAgICAgICAgY29sb3I9XCJhbWJlciBsaWdodGVuLTJcIiBcbiAgICAgICAgQGNsaWNrLm5hdGl2ZT1cImlzT3B0aW9uID0gIWlzT3B0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHYtaWNvbj5mYS1jb2c8L3YtaWNvbj5cbiAgICAgIDwvdi1idG4+XG4gICAgPC92LWxheW91dD5cbiAgICBcbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICB2LWlmPVwiIWlzT3B0aW9uXCJcbiAgICAgIDpoZWFkZXJzPVwidGhcIlxuICAgICAgOml0ZW1zPVwiZmlsZXNcIlxuICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICA6cm93cy1wZXItcGFnZS1pdGVtcz1cInBlclBhZ2VEYXRhXCJcbiAgICAgIG5vLWRhdGEtdGV4dD1cIkNsaWNrIGBDaG9vc2UgRmlsZXNgIEJ1dHRvbiBUbyBVcGxvYWQgRmlsZXMuXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgXG4gICAgICAgIHNsb3Q9XCJpdGVtc1wiIFxuICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgPlxuXG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCI+XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHYtaWY9XCJwcm9wcy5pdGVtLnRodW1iXCIgXG4gICAgICAgICAgICA6c3JjPVwicHJvcHMuaXRlbS50aHVtYlwiIFxuICAgICAgICAgICAgd2lkdGg9XCI0MFwiIFxuICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiIFxuICAgICAgICAgID5cbiAgICAgICAgICA8c3BhbiB2LWVsc2U+Tm8gSW1hZ2U8L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCI+XG4gICAgICAgICAgPHYtZWRpdC1kaWFsb2dcbiAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICBsYXp5XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmltYXJ5LS10ZXh0XCI+e3sgcHJvcHMuaXRlbS5uYW1lIHwgdHJ1bmNhdGUoMjApIH19PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgc2xvdD1cImlucHV0XCIgXG4gICAgICAgICAgICAgIGNsYXNzPVwibXQtMyB0ZXh0LXhzLWNlbnRlciB0aXRsZSBwcmltYXJ5LS10ZXh0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVXBkYXRlIE5hbWVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHNsb3Q9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLm5hbWVcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCJbbWF4SW5wdXRdXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcbiAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcbiAgICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8L3YtZWRpdC1kaWFsb2c+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCI+e3sgcHJvcHMuaXRlbS5zaXplIHwgZm9ybWF0U2l6ZSB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCI+XG4gICAgICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXJcbiAgICAgICAgICAgIHYtaWY9XCJwcm9wcy5pdGVtLmFjdGl2ZSB8fCBwcm9wcy5pdGVtLnByb2dyZXNzICE9PSAnMC4wMCdcIlxuICAgICAgICAgICAgOnNpemU9XCI0NVwiXG4gICAgICAgICAgICA6d2lkdGg9XCI1XCJcbiAgICAgICAgICAgIDpyb3RhdGU9XCIzNjBcIlxuICAgICAgICAgICAgOnZhbHVlPVwicHJvZ3Jlc3MocHJvcHMuaXRlbS5wcm9ncmVzcylcIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb25cIj57eyBwcm9ncmVzcyhwcm9wcy5pdGVtLnByb2dyZXNzKSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3YtcHJvZ3Jlc3MtY2lyY3VsYXI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwhLS0gc3RhdHVzIC0tPlxuICAgICAgICA8dGQgXG4gICAgICAgICAgdi1pZj1cInByb3BzLml0ZW0uZXJyb3JcIiBcbiAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHByb3BzLml0ZW0uZXJyb3IgfX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIFxuICAgICAgICAgIHYtZWxzZS1pZj1cInByb3BzLml0ZW0uc3VjY2Vzc1wiIFxuICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAgc3VjY2Vzc1xuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgXG4gICAgICAgICAgdi1lbHNlLWlmPVwicHJvcHMuaXRlbS5hY3RpdmVcIiBcbiAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIGFjdGl2ZVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgXG4gICAgICAgICAgdi1lbHNlIFxuICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIHByaW1hcnktLXRleHRcIj5cbiAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICB2LWlmPVwicHJvcHMuaXRlbS5hY3RpdmVcIiBcbiAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgICBjb2xvcj1cInJlZCBkYXJrZW4tNFwiIFxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cInByb3BzLml0ZW0uYWN0aXZlID8gJHJlZnMudXBsb2FkLnVwZGF0ZShwcm9wcy5pdGVtLCB7ZXJyb3I6ICdjYW5jZWwnfSkgOiBmYWxzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtaWNvbj5mYS10aW1lczwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgdi1lbHNlLWlmPVwicHJvcHMuaXRlbS5lcnJvciAmJiBwcm9wcy5pdGVtLmVycm9yICE9PSAnY29tcHJlc3NpbmcnICYmICRyZWZzLnVwbG9hZC5mZWF0dXJlcy5odG1sNVwiIFxuICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgIGljb24gXG4gICAgICAgICAgICBjb2xvcj1cImluZm9cIiBcbiAgICAgICAgICAgIEBjbGljay5uYXRpdmU9XCIkcmVmcy51cGxvYWQudXBkYXRlKHByb3BzLml0ZW0sIHthY3RpdmU6IHRydWUsIGVycm9yOiAnJywgcHJvZ3Jlc3M6ICcwLjAwJ30pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1pY29uPmZhLXJlZnJlc2g8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgIHYtZWxzZSBcbiAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICBpY29uIFxuICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIEBjbGljay5uYXRpdmU9XCJwcm9wcy5pdGVtLnN1Y2Nlc3MgfHwgcHJvcHMuaXRlbS5lcnJvciA9PT0gJ2NvbXByZXNzaW5nJyA/IGZhbHNlIDogJHJlZnMudXBsb2FkLnVwZGF0ZShwcm9wcy5pdGVtLCB7YWN0aXZlOiB0cnVlfSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LWljb24+ZmEtdXBsb2FkPC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgaWNvbiBcbiAgICAgICAgICAgIGNvbG9yPVwicmVkIGxpZ2h0ZW4tMlwiIFxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cInJlbW92ZShwcm9wcy5pdGVtKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtaWNvbj5mYS10cmFzaDwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC92LWRhdGEtdGFibGU+XG5cbiAgICA8di1sYXlvdXRcbiAgICAgIHYtaWY9XCIhaXNPcHRpb25cIiBcbiAgICAgIHJvdyBcbiAgICAgIHdyYXBcbiAgICA+XG4gICAgICA8di1mbGV4IFxuICAgICAgICBzbTEyXG4gICAgICAgIG1kNlxuICAgICAgPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgdi1zaG93PVwiZmlsZXMubGVuZ3RoID4gMFwiXG4gICAgICAgICAgZGFyayBcbiAgICAgICAgICBibG9ja1xuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBjb2xvcj1cInRlYWwgbGlnaHRlbi0yXCIgXG4gICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cIiRyZWZzLnVwbG9hZC5hY3RpdmUgPSB0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgIFN0YXJ0IFVwbG9hZCBcbiAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgcmlnaHQgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgcGxheV9hcnJvd1xuICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IFxuICAgICAgICBzbTEyXG4gICAgICAgIG1kNlxuICAgICAgPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgdi1zaG93PVwiJHJlZnMudXBsb2FkICYmICRyZWZzLnVwbG9hZC5hY3RpdmVcIlxuICAgICAgICAgIGRhcmsgXG4gICAgICAgICAgYmxvY2tcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgY29sb3I9XCJlcnJvclwiIFxuICAgICAgICAgIEBjbGljay5uYXRpdmU9XCIkcmVmcy51cGxvYWQuYWN0aXZlID0gZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgU3RvcCBVcGxvYWQgXG4gICAgICAgICAgPHYtaWNvbiBcbiAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgc3RvcFxuICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gXG4gICAgICAgICAgdi1pZj1cIiRyZWZzLnVwbG9hZCAmJiAhJHJlZnMudXBsb2FkLmFjdGl2ZSAmJiBmaWxlcy5sZW5ndGggPiAwXCJcbiAgICAgICAgICBkYXJrIFxuICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGNvbG9yPVwicmVkIGxpZ2h0ZW4tMlwiXG4gICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cImZpbGVzID0gW11cIlxuICAgICAgICA+XG4gICAgICAgICAgUmVtb3ZlIEFsbCBGaWxlcyBcbiAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBmYS10cmFzaFxuICAgICAgICAgIDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgICA8di1sYXlvdXQgXG4gICAgICB2LWlmPVwiaXNPcHRpb25cIiBcbiAgICAgIHJvdyBcbiAgICAgIHdyYXBcbiAgICA+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgdi1tb2RlbD1cImFjY2VwdFwiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ21pbWUtdHlwZScpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cImZhLWZpbGUtY29kZS1vIFwiXG4gICAgICAgICAgbGFiZWw9XCJBY2NlcHRcIlxuICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgaGludD1cIkFsbG93IHVwbG9hZCBtaW1lIHR5cGVcIlxuICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIGRhdGEtdnYtbmFtZT1cIm1pbWUtdHlwZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ2V4dGVuc2lvbicpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cImZhLWNvZ3NcIlxuICAgICAgICAgIGxhYmVsPVwiRXh0ZW5zaW9uc1wiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBoaW50PVwiQWxsb3cgdXBsb2FkIGZpbGUgZXh0ZW5zaW9uXCJcbiAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJleHRlbnNpb25cIlxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LW1vZGVsPVwicHV0QWN0aW9uXCJcbiAgICAgICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cImh0dHBcIlxuICAgICAgICAgIGxhYmVsPVwiUHV0IFVybFwiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBoaW50PVwiRGlzYWJsZWQgaWYgRW1wdHksIEFmdGVyIHRoZSBzaHV0ZG93biwgdXNlIHRoZSBQT1NUIG1ldGhvZCB0byB1cGxvYWRcIlxuICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgdi1tb2RlbD1cInBvc3RBY3Rpb25cIlxuICAgICAgICAgIDpsaWdodD1cInRydWVcIlxuICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9ycy5jb2xsZWN0KCdwb3N0LXVybCcpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cImh0dHBcIlxuICAgICAgICAgIGxhYmVsPVwiUG9zdCBVcmxcIlxuICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgaGludD1cIkRlZmF1bHQgUG9zdCBVUkxcIlxuICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInBvc3QtdXJsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxudW1lcmljfG1pbl92YWx1ZToxJ1wiXG4gICAgICAgICAgdi1tb2RlbD1cInRocmVhZFwiXG4gICAgICAgICAgOmxpZ2h0PVwidHJ1ZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JzLmNvbGxlY3QoJ3RocmVhZCcpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cImZhLWN1YmVzXCJcbiAgICAgICAgICBsYWJlbD1cIlRocmVhZFwiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBoaW50PVwiQWxzbyB1cGxvYWQgdGhlIG51bWJlciBvZiBmaWxlcyBhdCB0aGUgc2FtZSB0aW1lIChudW1iZXIgb2YgdGhyZWFkcylcIlxuICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInRocmVhZFwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cInNpemVcIlxuICAgICAgICAgIDpsaWdodD1cInRydWVcIlxuICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9ycy5jb2xsZWN0KCdtYXgtc2l6ZScpXCJcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cInRyZW5kaW5nX3VwXCJcbiAgICAgICAgICBsYWJlbD1cIk1heCBzaXplXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGhpbnQ9XCJTaXplIFVuaXQgaW4gYnl0ZVwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgZGF0YS12di1uYW1lPVwibWF4LXNpemVcIlxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJtaW5TaXplXCJcbiAgICAgICAgICA6bGlnaHQ9XCJ0cnVlXCJcbiAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvcnMuY29sbGVjdCgnbWluLXNpemUnKVwiXG4gICAgICAgICAgYXBwZW5kLWljb249XCJ0cmVuZGluZ19kb3duXCJcbiAgICAgICAgICBsYWJlbD1cIk1pbiBzaXplXCJcbiAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgIGhpbnQ9XCJTaXplIFVuaXQgaW4gYnl0ZVwiXG4gICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgZGF0YS12di1uYW1lPVwibWluLXNpemVcIlxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJhdXRvQ29tcHJlc3NcIlxuICAgICAgICAgIDpsaWdodD1cInRydWVcIlxuICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9ycy5jb2xsZWN0KCdhdXRvLWNvbXByZXNzJylcIlxuICAgICAgICAgIGFwcGVuZC1pY29uPVwiZmEtY29tcHJlc3NcIlxuICAgICAgICAgIGxhYmVsPVwiQXV0b21hdGljYWxseSBjb21wcmVzc1wiXG4gICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJhdXRvLWNvbXByZXNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgXG4gICAgICAgICAgdi1pZj1cImF1dG9Db21wcmVzcyA+IDBcIlxuICAgICAgICAgIGNsYXNzPVwiZ3JleS0tdGV4dCBjYXB0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIE1vcmUgdGhhbiB7eyBhdXRvQ29tcHJlc3MgfCBmb3JtYXRTaXplIH19IGZpbGVzIGFyZSBhdXRvbWF0aWNhbGx5IGNvbXByZXNzZWRcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBcbiAgICAgICAgICB2LWVsc2UgXG4gICAgICAgICAgY2xhc3M9XCJncmV5LS10ZXh0IGNhcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgU2V0IHVwIGF1dG9tYXRpYyBjb21wcmVzc2lvblxuICAgICAgICA8L3A+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtY2hlY2tib3ggXG4gICAgICAgICAgOmxhYmVsPVwiYERyYWcgYW5kIGRyb3AgdXBsb2FkOiAke2Ryb3AudG9TdHJpbmcoKX1gXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZHJvcFwiIFxuICAgICAgICAgIGxpZ2h0XG4gICAgICAgIC8+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtY2hlY2tib3ggXG4gICAgICAgICAgOmxhYmVsPVwiYE5vdCBjaGVja2VkLCBmaWx0ZXIgdGhlIGRyYWdnZWQgZm9sZGVyOiAke2Ryb3BEaXJlY3RvcnkudG9TdHJpbmcoKX1gXCIgXG4gICAgICAgICAgdi1tb2RlbD1cImRyb3BEaXJlY3RvcnlcIiBcbiAgICAgICAgICBsaWdodFxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LWNoZWNrYm94IFxuICAgICAgICAgIDpsYWJlbD1cImBBdXRvbWF0aWNhbGx5IGFjdGl2YXRlIHVwbG9hZDogJHt1cGxvYWRBdXRvLnRvU3RyaW5nKCl9YFwiIFxuICAgICAgICAgIHYtbW9kZWw9XCJ1cGxvYWRBdXRvXCJcbiAgICAgICAgICBsaWdodFxuICAgICAgICAvPlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSW1hZ2VDb21wcmVzc29yIGZyb20gXCJAeGtlc2hpL2ltYWdlLWNvbXByZXNzb3JcIjtcbmltcG9ydCBGaWxlVXBsb2FkIGZyb20gXCJ2dWUtdXBsb2FkLWNvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRmlsZVVwbG9hZFxuICB9LFxuICBwcm9wczoge1xuICAgIGZpbGVLZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwdXRVcmw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHBvc3RVcmw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzaW5nbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoOiBbXG4gICAgICAgIHsgdGV4dDogXCJUaHVtYlwiLCB2YWx1ZTogXCJ0aHVtYlwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICAgIHsgdGV4dDogXCJOYW1lXCIsIHZhbHVlOiBcIm5hbWVcIiwgYWxpZ246IFwibGVmdFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgICB7IHRleHQ6IFwiU2l6ZVwiLCB2YWx1ZTogXCJzaXplXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlByb2dyZXNzXCIsIHZhbHVlOiBcInByb2dyZXNzXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlN0YXR1c1wiLCB2YWx1ZTogXCJzcGVlZFwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICAgIHsgdGV4dDogXCJBY3Rpb25zXCIsIGFsaWduOiBcImNlbnRlclwiLCBzb3J0YWJsZTogZmFsc2UgfVxuICAgICAgXSxcbiAgICAgIGZpbGVzOiBbXSxcbiAgICAgIC8qIGZpbGUgY29uZmlnICovXG4gICAgICBhY2NlcHQ6IFwiaW1hZ2UvcG5nLGltYWdlL2dpZixpbWFnZS9qcGVnLGltYWdlL3dlYnBcIixcbiAgICAgIGV4dGVuc2lvbnM6IFwiZ2lmLGpwZyxqcGVnLHBuZyx3ZWJwXCIsXG4gICAgICBtaW5TaXplOiAxMDI0LFxuICAgICAgc2l6ZTogMTAyNCAqIDEwMjQgKiAxMCxcbiAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgZGlyZWN0b3J5OiBmYWxzZSxcbiAgICAgIGRyb3A6IHRydWUsXG4gICAgICBkcm9wRGlyZWN0b3J5OiB0cnVlLFxuICAgICAgYWRkSW5kZXg6IGZhbHNlLFxuICAgICAgdGhyZWFkOiAzLFxuICAgICAgbmFtZTogXCJmaWxlXCIsXG4gICAgICBwb3N0QWN0aW9uOiBcIi91cGxvYWRzL3Bvc3RcIixcbiAgICAgIHB1dEFjdGlvbjogXCIvdXBsb2Fkcy9wdXRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUNzcmYtVG9rZW5cIjogQXBwLmNzcmZUb2tlbixcbiAgICAgICAgLyogYWRkZWQgYWNjZXNzIHRva2VuICovXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiXCJcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIF9jc3JmX3Rva2VuOiBBcHAuY3NyZlRva2VuXG4gICAgICB9LFxuICAgICAgYXV0b0NvbXByZXNzOiAxMDI0ICogMTAyNCxcbiAgICAgIHVwbG9hZEF1dG86IGZhbHNlLFxuICAgICAgLyogZmlsZSBvcHRpb24gKi9cbiAgICAgIGlzT3B0aW9uOiBmYWxzZSxcbiAgICAgIC8qIGZpbGUgbmFtZSB2YWxpZGF0aW9uICovXG4gICAgICBtYXhJbnB1dDogdiA9PiB2Lmxlbmd0aCA8PSAzMCB8fCBcIklucHV0IHRvbyBsb25nIVwiLFxuICAgICAgLyogZmlsZSBwZXIgcGFnZSAqL1xuICAgICAgcGVyUGFnZURhdGE6IFsxMCwgMjUsIDUwLCB7IHRleHQ6IFwiQWxsXCIsIHZhbHVlOiAtMSB9XVxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZmlsZUtleShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmV3VmFsdWU7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucG9zdEFjdGlvbiA9IHRoaXMucG9zdFVybCA/IHRoaXMucG9zdFVybCA6IFwiL3VwbG9hZHMvcG9zdFwiO1xuICAgIHRoaXMucHV0QWN0aW9uID0gdGhpcy5wdXRVcmwgPyB0aGlzLnB1dFVybCA6IG51bGw7XG4gICAgdGhpcy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt2bS4kYXV0aC50b2tlbigpfWA7XG4gICAgaWYgKHRoaXMuc2luZ2xlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHByb2dyZXNzKHByb3BzKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwcm9wcyk7XG4gICAgfSxcbiAgICByZW1vdmUoZmlsZSkge1xuICAgICAgdGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKGZpbGUpO1xuICAgIH0sXG4gICAgaW5wdXRGaWx0ZXIobmV3RmlsZSwgb2xkRmlsZSwgcHJldmVudCkge1xuICAgICAgaWYgKG5ld0ZpbGUgJiYgIW9sZEZpbGUpIHtcbiAgICAgICAgLy8gQmVmb3JlIGFkZGluZyBhIGZpbGVcbiAgICAgICAgLy8g5re75Yqg5paH5Lu25YmNXG5cbiAgICAgICAgLy8gRmlsdGVyIHN5c3RlbSBmaWxlcyBvciBoaWRlIGZpbGVzXG4gICAgICAgIC8vIOi/h+a7pOezu+e7n+aWh+S7tiDlkozpmpDol4/mlofku7ZcbiAgICAgICAgaWYgKC8oXFwvfF4pKFRodW1ic1xcLmRifGRlc2t0b3BcXC5pbml8XFwuLispJC8udGVzdChuZXdGaWxlLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbHRlciBwaHAgaHRtbCBqcyBmaWxlXG4gICAgICAgIC8vIOi/h+a7pCBwaHAgaHRtbCBqcyDmlofku7ZcbiAgICAgICAgaWYgKC9cXC4ocGhwNT98aHRtbD98anN4PykkL2kudGVzdChuZXdGaWxlLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG9tYXRpYyBjb21wcmVzc2lvblxuICAgICAgICAvLyDoh6rliqjljovnvKlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5ld0ZpbGUuZmlsZSAmJlxuICAgICAgICAgIG5ld0ZpbGUudHlwZS5zdWJzdHIoMCwgNikgPT09IFwiaW1hZ2UvXCIgJiZcbiAgICAgICAgICB0aGlzLmF1dG9Db21wcmVzcyA+IDAgJiZcbiAgICAgICAgICB0aGlzLmF1dG9Db21wcmVzcyA8IG5ld0ZpbGUuc2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICBuZXdGaWxlLmVycm9yID0gXCJjb21wcmVzc2luZ1wiO1xuICAgICAgICAgIGNvbnN0IGltYWdlQ29tcHJlc3NvciA9IG5ldyBJbWFnZUNvbXByZXNzb3IobnVsbCwge1xuICAgICAgICAgICAgY29udmVydFNpemU6IEluZmluaXR5LFxuICAgICAgICAgICAgbWF4V2lkdGg6IDEwMjQsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDEwMjRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbWFnZUNvbXByZXNzb3JcbiAgICAgICAgICAgIC5jb21wcmVzcyhuZXdGaWxlLmZpbGUpXG4gICAgICAgICAgICAudGhlbihmaWxlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQudXBkYXRlKG5ld0ZpbGUsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLnVwZGF0ZShuZXdGaWxlLCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlIHx8IFwiY29tcHJlc3NcIlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdGaWxlICYmICghb2xkRmlsZSB8fCBuZXdGaWxlLmZpbGUgIT09IG9sZEZpbGUuZmlsZSkpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgYmxvYiBmaWVsZFxuICAgICAgICAvLyDliJvlu7ogYmxvYiDlrZfmrrVcbiAgICAgICAgbmV3RmlsZS5ibG9iID0gXCJcIjtcbiAgICAgICAgbGV0IFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgaWYgKFVSTCAmJiBVUkwuY3JlYXRlT2JqZWN0VVJMKSB7XG4gICAgICAgICAgbmV3RmlsZS5ibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXdGaWxlLmZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGh1bWJuYWlsc1xuICAgICAgICAvLyDnvKnnlaXlm75cbiAgICAgICAgbmV3RmlsZS50aHVtYiA9IFwiXCI7XG4gICAgICAgIGlmIChuZXdGaWxlLmJsb2IgJiYgbmV3RmlsZS50eXBlLnN1YnN0cigwLCA2KSA9PT0gXCJpbWFnZS9cIikge1xuICAgICAgICAgIG5ld0ZpbGUudGh1bWIgPSBuZXdGaWxlLmJsb2I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gYWRkLCB1cGRhdGUsIHJlbW92ZSBGaWxlIEV2ZW50XG4gICAgaW5wdXRGaWxlKG5ld0ZpbGUsIG9sZEZpbGUpIHtcbiAgICAgIGlmIChuZXdGaWxlICYmIG9sZEZpbGUpIHtcbiAgICAgICAgLy8gdXBkYXRlXG5cbiAgICAgICAgaWYgKG5ld0ZpbGUuYWN0aXZlICYmICFvbGRGaWxlLmFjdGl2ZSkge1xuICAgICAgICAgIC8vIGJlZm9yZVNlbmRcblxuICAgICAgICAgIC8vIG1pbiBzaXplXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV3RmlsZS5zaXplID49IDAgJiZcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA+IDAgJiZcbiAgICAgICAgICAgIG5ld0ZpbGUuc2l6ZSA8IHRoaXMubWluU2l6ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWQudXBkYXRlKG5ld0ZpbGUsIHsgZXJyb3I6IFwic2l6ZVwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdGaWxlLnByb2dyZXNzICE9PSBvbGRGaWxlLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gcHJvZ3Jlc3NcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdGaWxlLmVycm9yICYmICFvbGRGaWxlLmVycm9yKSB7XG4gICAgICAgICAgLy8gZXJyb3JcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdGaWxlLnN1Y2Nlc3MgJiYgIW9sZEZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgIC8vISBQVVNIIFRPIEFSUkFZIE5FVyBJTUFHRVMsIFdlIENhbiBVc2UgVGhpcyBUTyBEaXNwbGF5IGF0IFBhY2thZ2VcbiAgICAgICAgICBsZXQgbGluayA9IG5ld0ZpbGUucmVzcG9uc2VbdGhpcy5maWxlS2V5XTtcbiAgICAgICAgICBpZiAodGhpcy5maWxlS2V5ID09PSBcImRhbWFnZWRfaW1hZ2VzXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW0uZGFtYWdlZF9pbWFnZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtLmRhbWFnZWRfaW1hZ2VzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLml0ZW0uZGFtYWdlZF9pbWFnZXMucHVzaChsaW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZmlsZUtleSA9PT0gXCJwYWNrYWdlX2ltYWdlc1wiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtLnBhY2thZ2VfaW1hZ2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbS5wYWNrYWdlX2ltYWdlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pdGVtLnBhY2thZ2VfaW1hZ2VzLnB1c2gobGluayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbmV3RmlsZSAmJiBvbGRGaWxlKSB7XG4gICAgICAgIC8vIHJlbW92ZVxuICAgICAgICBpZiAob2xkRmlsZS5zdWNjZXNzICYmIG9sZEZpbGUucmVzcG9uc2UuaWQpIHtcbiAgICAgICAgICAvLyAkLmFqYXgoe1xuICAgICAgICAgIC8vICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgICAgLy8gICB1cmw6ICcvdXBsb2FkL2RlbGV0ZT9pZD0nICsgb2xkRmlsZS5yZXNwb25zZS5pZCxcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgYWN0aXZhdGUgdXBsb2FkXG4gICAgICBpZiAoXG4gICAgICAgIEJvb2xlYW4obmV3RmlsZSkgIT09IEJvb2xlYW4ob2xkRmlsZSkgfHxcbiAgICAgICAgb2xkRmlsZS5lcnJvciAhPT0gbmV3RmlsZS5lcnJvclxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLnVwbG9hZEF1dG8gJiYgIXRoaXMuJHJlZnMudXBsb2FkLmFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuJHJlZnMudXBsb2FkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlIiwiLyohXG4gKiBJbWFnZSBDb21wcmVzc29yIHYwLjUuM1xuICogaHR0cHM6Ly9naXRodWIuY29tL3hrZXNoaS9pbWFnZS1jb21wcmVzc29yXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IFhrZXNoaVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNy0xMi0yOVQwNjoxMToyMC4wMjJaXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkltYWdlQ29tcHJlc3NvciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBjYW52YXNUb0Jsb2IgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKlxuICogSmF2YVNjcmlwdCBDYW52YXMgdG8gQmxvYlxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICpcbiAqIENvcHlyaWdodCAyMDEyLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvbiBzdGFja292ZXJmbG93IHVzZXIgU3RvaXZlJ3MgY29kZSBzbmlwcGV0OlxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICovXG5cbi8qIGdsb2JhbCBhdG9iLCBCbG9iLCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBDYW52YXNQcm90b3R5cGUgPVxuICAgIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlO1xuICB2YXIgaGFzQmxvYkNvbnN0cnVjdG9yID1cbiAgICB3aW5kb3cuQmxvYiAmJlxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpO1xuICB2YXIgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9XG4gICAgaGFzQmxvYkNvbnN0cnVjdG9yICYmXG4gICAgd2luZG93LlVpbnQ4QXJyYXkgJiZcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCk7XG4gIHZhciBCbG9iQnVpbGRlciA9XG4gICAgd2luZG93LkJsb2JCdWlsZGVyIHx8XG4gICAgd2luZG93LldlYktpdEJsb2JCdWlsZGVyIHx8XG4gICAgd2luZG93Lk1vekJsb2JCdWlsZGVyIHx8XG4gICAgd2luZG93Lk1TQmxvYkJ1aWxkZXI7XG4gIHZhciBkYXRhVVJJUGF0dGVybiA9IC9eZGF0YTooKC4qPykoO2NoYXJzZXQ9Lio/KT8pKDtiYXNlNjQpPywvO1xuICB2YXIgZGF0YVVSTHRvQmxvYiA9XG4gICAgKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiZcbiAgICB3aW5kb3cuYXRvYiAmJlxuICAgIHdpbmRvdy5BcnJheUJ1ZmZlciAmJlxuICAgIHdpbmRvdy5VaW50OEFycmF5ICYmXG4gICAgZnVuY3Rpb24gKGRhdGFVUkkpIHtcbiAgICAgIHZhciBtYXRjaGVzLFxuICAgICAgICBtZWRpYVR5cGUsXG4gICAgICAgIGlzQmFzZTY0LFxuICAgICAgICBkYXRhU3RyaW5nLFxuICAgICAgICBieXRlU3RyaW5nLFxuICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgaW50QXJyYXksXG4gICAgICAgIGksXG4gICAgICAgIGJiO1xuICAgICAgLy8gUGFyc2UgdGhlIGRhdGFVUkkgY29tcG9uZW50cyBhcyBwZXIgUkZDIDIzOTdcbiAgICAgIG1hdGNoZXMgPSBkYXRhVVJJLm1hdGNoKGRhdGFVUklQYXR0ZXJuKTtcbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZGF0YSBVUkknKVxuICAgICAgfVxuICAgICAgLy8gRGVmYXVsdCB0byB0ZXh0L3BsYWluO2NoYXJzZXQ9VVMtQVNDSUlcbiAgICAgIG1lZGlhVHlwZSA9IG1hdGNoZXNbMl1cbiAgICAgICAgPyBtYXRjaGVzWzFdXG4gICAgICAgIDogJ3RleHQvcGxhaW4nICsgKG1hdGNoZXNbM10gfHwgJztjaGFyc2V0PVVTLUFTQ0lJJyk7XG4gICAgICBpc0Jhc2U2NCA9ICEhbWF0Y2hlc1s0XTtcbiAgICAgIGRhdGFTdHJpbmcgPSBkYXRhVVJJLnNsaWNlKG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZzpcbiAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnk6XG4gICAgICAgIGJ5dGVTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YVN0cmluZyk7XG4gICAgICB9XG4gICAgICAvLyBXcml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlcjpcbiAgICAgIGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICAgIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG4gICAgICAvLyBXcml0ZSB0aGUgQXJyYXlCdWZmZXIgKG9yIEFycmF5QnVmZmVyVmlldykgdG8gYSBibG9iOlxuICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2hhc0FycmF5QnVmZmVyVmlld1N1cHBvcnQgPyBpbnRBcnJheSA6IGFycmF5QnVmZmVyXSwge1xuICAgICAgICAgIHR5cGU6IG1lZGlhVHlwZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcbiAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgICByZXR1cm4gYmIuZ2V0QmxvYihtZWRpYVR5cGUpXG4gICAgfTtcbiAgaWYgKHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCAmJiAhQ2FudmFzUHJvdG90eXBlLnRvQmxvYikge1xuICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1YWxpdHkgJiYgQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYubW96R2V0QXNGaWxlKCdibG9iJywgdHlwZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICB1bmRlZmluZWQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRhdGFVUkx0b0Jsb2JcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRhdGFVUkx0b0Jsb2I7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRhdGFVUkx0b0Jsb2IgPSBkYXRhVVJMdG9CbG9iO1xuICB9XG59KSh3aW5kb3cpO1xufSk7XG5cbi8qIGdsb2JhbHMgQmxvYiAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQmxvYiA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiB4IGluc3RhbmNlb2YgQmxvYiB8fCB0b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBCbG9iXSc7XG59O1xuXG52YXIgREVGQVVMVFMgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgcmVhZCB0aGUgaW1hZ2UncyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uLFxuICAgKiBhbmQgdGhlbiByb3RhdGUgb3IgZmxpcCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBjaGVja09yaWVudGF0aW9uOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4IHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBtYXhXaWR0aDogSW5maW5pdHksXG5cbiAgLyoqXG4gICAqIFRoZSBtYXggaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBtYXhIZWlnaHQ6IEluZmluaXR5LFxuXG4gIC8qKlxuICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBtaW5XaWR0aDogMCxcblxuICAvKipcbiAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1pbkhlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIHdpZHRoIG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgd2lkdGg6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIHNvdXJjZSBpbWFnZSB3aWxsIGJlIHVzZWQuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBoZWlnaHQ6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogVGhlIHF1YWxpdHkgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICogSXQgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIGAwYCBhbmQgYDFgLFxuICAgKiBhbmQgb25seSBhdmFpbGFibGUgZm9yIGBpbWFnZS9qcGVnYCBhbmQgYGltYWdlL3dlYnBgIGltYWdlcy5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnQvdG9CbG9iIGNhbnZhcy50b0Jsb2J9LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcXVhbGl0eTogMC44LFxuXG4gIC8qKlxuICAgKiBUaGUgbWltZSB0eXBlIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1pbWVUeXBlOiAnYXV0bycsXG5cbiAgLyoqXG4gICAqIFBORyBmaWxlcyBvdmVyIHRoaXMgdmFsdWUgKDVNIGJ5IGRlZmF1bHQpIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgKiBUbyBkaXNhYmxlIHRoaXMsIGp1c3Qgc2V0IHRoZSB2YWx1ZSB0byBgSW5maW5pdHlgLlxuICAgKiBDaGVjayBvdXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS94a2VzaGkvaW1hZ2UtY29tcHJlc3Nvci9pc3N1ZXMvMiAjMn0uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBjb252ZXJ0U2l6ZTogNTAwMDAwMCxcblxuICAvKipcbiAgICogVGhlIHN1Y2Nlc3MgY2FsbGJhY2sgZm9yIHRoZSBpbWFnZSBjb21wcmVzc2luZyBwcm9jZXNzLlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFRoZSBjb21wcmVzc2VkIGltYWdlIEZpbGUgb2JqZWN0LlxuICAgKiBAZXhhbXBsZVxuICAgKiBmdW5jdGlvbiAoZmlsZSkgeyBjb25zb2xlLmxvZyhmaWxlKSB9XG4gICAqL1xuICBzdWNjZXNzOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgY2FsbGJhY2sgZm9yIHRoZSBpbWFnZSBjb21wcmVzc2luZyBwcm9jZXNzLlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciAtIEFuIEVycm9yIG9iamVjdC5cbiAgICogQGV4YW1wbGVcbiAgICogZnVuY3Rpb24gKGVycikgeyBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkgfVxuICAgKi9cbiAgZXJyb3I6IG51bGxcbn07XG5cbnZhciBSRUdFWFBfSU1BR0VfVFlQRSA9IC9eaW1hZ2VcXC8uKyQvO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG1pbWUgdHlwZSBvZiBpbWFnZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIGlzIGEgbWltZSB0eXBlIG9mIGltYWdlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW1hZ2VUeXBlKHZhbHVlKSB7XG4gIHJldHVybiBSRUdFWFBfSU1BR0VfVFlQRS50ZXN0KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGltYWdlIHR5cGUgdG8gZXh0ZW5zaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGltYWdlIHR5cGUgdG8gY29udmVydC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1ZGVEb3Q9dHJ1ZV0gLSBJbmNsdWRlIGEgbGVhZGluZyBkb3Qgb3Igbm90LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdGhlIGltYWdlIGV4dGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gaW1hZ2VUeXBlVG9FeHRlbnNpb24odmFsdWUpIHtcbiAgdmFyIGluY2x1ZGVEb3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgdmFyIGV4dGVuc2lvbiA9IGlzSW1hZ2VUeXBlKHZhbHVlKSA/IHZhbHVlLnN1YnN0cig2KSA6ICcnO1xuXG4gIGlmIChleHRlbnNpb24gPT09ICdqcGVnJykge1xuICAgIGV4dGVuc2lvbiA9ICdqcGcnO1xuICB9XG5cbiAgaWYgKGV4dGVuc2lvbiAmJiBpbmNsdWRlRG90KSB7XG4gICAgZXh0ZW5zaW9uID0gJy4nICsgZXh0ZW5zaW9uO1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuc2lvbjtcbn1cblxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8qKlxuICogR2V0IHN0cmluZyBmcm9tIGNoYXIgY29kZSBpbiBkYXRhIHZpZXcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnQgaW5kZXguXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIHJlYWQgbGVuZ3RoLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICovXG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgc3RhcnQsIGxlbmd0aCkge1xuICB2YXIgc3RyID0gJyc7XG4gIHZhciBpID0gdm9pZCAwO1xuXG4gIGxlbmd0aCArPSBzdGFydDtcblxuICBmb3IgKGkgPSBzdGFydDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG52YXIgX3dpbmRvdyQxID0gd2luZG93O1xudmFyIGJ0b2EgPSBfd2luZG93JDEuYnRvYTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYXJyYXkgYnVmZmVyIHRvIERhdGEgVVJMLlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBEYXRhIFVSTC5cbiAqL1xuXG5mdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICB2YXIgbGVuZ3RoID0gdWludDgubGVuZ3RoO1xuXG4gIHZhciBkYXRhID0gJyc7XG4gIHZhciBpID0gdm9pZCAwO1xuXG4gIC8vIFR5cGVkQXJyYXkucHJvdG90eXBlLmZvckVhY2ggaXMgbm90IHN1cHBvcnRlZCBpbiBzb21lIGJyb3dzZXJzLlxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBkYXRhICs9IGZyb21DaGFyQ29kZSh1aW50OFtpXSk7XG4gIH1cblxuICByZXR1cm4gJ2RhdGE6JyArIG1pbWVUeXBlICsgJztiYXNlNjQsJyArIGJ0b2EoZGF0YSk7XG59XG5cbi8qKlxuICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgdmFyIG9yaWVudGF0aW9uID0gdm9pZCAwO1xuICB2YXIgbGl0dGxlRW5kaWFuID0gdm9pZCAwO1xuICB2YXIgYXBwMVN0YXJ0ID0gdm9pZCAwO1xuICB2YXIgaWZkU3RhcnQgPSB2b2lkIDA7XG5cbiAgLy8gT25seSBoYW5kbGUgSlBFRyBpbWFnZSAoc3RhcnQgYnkgMHhGRkQ4KVxuICBpZiAoZGF0YVZpZXcuZ2V0VWludDgoMCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgoMSkgPT09IDB4RDgpIHtcbiAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICB2YXIgb2Zmc2V0ID0gMjtcblxuICAgIHdoaWxlIChvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcHAxU3RhcnQpIHtcbiAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgdmFyIHRpZmZPZmZzZXQgPSBhcHAxU3RhcnQgKyAxMDtcblxuICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgIHZhciBlbmRpYW5uZXNzID0gZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpO1xuXG4gICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG5cbiAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREIC8qIGJpZ0VuZGlhbiAqLykge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCArIDIsIGxpdHRsZUVuZGlhbikgPT09IDB4MDAyQSkge1xuICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICBpZmRTdGFydCA9IHRpZmZPZmZzZXQgKyBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaWZkU3RhcnQpIHtcbiAgICB2YXIgX2xlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQxNihpZmRTdGFydCwgbGl0dGxlRW5kaWFuKTtcbiAgICB2YXIgX29mZnNldCA9IHZvaWQgMDtcbiAgICB2YXIgaSA9IHZvaWQgMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG5cbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyIC8qIE9yaWVudGF0aW9uICovKSB7XG4gICAgICAgICAgLy8gOCBpcyB0aGUgb2Zmc2V0IG9mIHRoZSBjdXJyZW50IHRhZydzIHZhbHVlXG4gICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgIG9yaWVudGF0aW9uID0gZGF0YVZpZXcuZ2V0VWludDE2KF9vZmZzZXQsIGxpdHRsZUVuZGlhbik7XG5cbiAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihfb2Zmc2V0LCAxLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9yaWVudGF0aW9uO1xufVxuXG4vKipcbiAqIFBhcnNlIEV4aWYgT3JpZW50YXRpb24gdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICB2YXIgcm90YXRlID0gMDtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICBjYXNlIDI6XG4gICAgICBzY2FsZVggPSAtMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gUm90YXRlIGxlZnQgMTgwwrBcbiAgICBjYXNlIDM6XG4gICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBGbGlwIHZlcnRpY2FsXG4gICAgY2FzZSA0OlxuICAgICAgc2NhbGVZID0gLTE7XG4gICAgICBicmVhaztcblxuICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG4gICAgY2FzZSA1OlxuICAgICAgcm90YXRlID0gOTA7XG4gICAgICBzY2FsZVkgPSAtMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gUm90YXRlIHJpZ2h0IDkwwrBcbiAgICBjYXNlIDY6XG4gICAgICByb3RhdGUgPSA5MDtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTDCsFxuICAgIGNhc2UgNzpcbiAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgc2NhbGVYID0gLTE7XG4gICAgICBicmVhaztcblxuICAgIC8vIFJvdGF0ZSBsZWZ0IDkwwrBcbiAgICBjYXNlIDg6XG4gICAgICByb3RhdGUgPSAtOTA7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvdGF0ZTogcm90YXRlLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgX3dpbmRvdyA9IHdpbmRvdztcbnZhciBBcnJheUJ1ZmZlciQxID0gX3dpbmRvdy5BcnJheUJ1ZmZlcjtcbnZhciBGaWxlUmVhZGVyID0gX3dpbmRvdy5GaWxlUmVhZGVyO1xuXG52YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xudmFyIFJFR0VYUF9FWFRFTlNJT04gPSAvXFwuXFx3KyQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaW1hZ2UgY29tcHJlc3Nvci5cbiAqIEBjbGFzc1xuICovXG5cbnZhciBJbWFnZUNvbXByZXNzb3IgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3Igb2YgSW1hZ2VDb21wcmVzc29yLlxuICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucyBmb3IgY29tcHJlc3NpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBJbWFnZUNvbXByZXNzb3IoZmlsZSwgb3B0aW9ucykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEltYWdlQ29tcHJlc3Nvcik7XG5cbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5jb21wcmVzcyhmaWxlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gY29tcHJlc3MgbWV0aG9kLlxuICAgKiBAcGFyYW0ge0ZpbGV8QmxvYn0gZmlsZSAtIFRoZSB0YXJnZXQgaW1hZ2UgZmlsZSBmb3IgY29tcHJlc3NpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucyBmb3IgY29tcHJlc3NpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSBpbnN0YW5jZS5cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhJbWFnZUNvbXByZXNzb3IsIFt7XG4gICAga2V5OiAnY29tcHJlc3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wcmVzcyhmaWxlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBERUZBVUxUUywgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCFpc0Jsb2IoZmlsZSkpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZTtcblxuICAgICAgICBpZiAoIWlzSW1hZ2VUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGltYWdlIEZpbGUgb3IgQmxvYiBvYmplY3QuJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVVJMICYmICFGaWxlUmVhZGVyKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlIGN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGltYWdlIGNvbXByZXNzaW9uLicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVJMICYmICFvcHRpb25zLmNoZWNrT3JpZW50YXRpb24pIHtcbiAgICAgICAgICByZXNvbHZlKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKEZpbGVSZWFkZXIpIHtcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICB2YXIgY2hlY2tPcmllbnRhdGlvbiA9IG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbiAmJiBtaW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LnJlc3VsdDtcblxuXG4gICAgICAgICAgICByZXNvbHZlKGNoZWNrT3JpZW50YXRpb24gPyBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIHVybDogYXJyYXlCdWZmZXJUb0RhdGFVUkwocmVzdWx0LCBtaW1lVHlwZSlcbiAgICAgICAgICAgIH0sIHBhcnNlT3JpZW50YXRpb24oZ2V0T3JpZW50YXRpb24ocmVzdWx0KSkpIDoge1xuICAgICAgICAgICAgICB1cmw6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIub25hYm9ydCA9IHJlamVjdDtcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcblxuICAgICAgICAgIGlmIChjaGVja09yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKF9leHRlbmRzKHt9LCBkYXRhLCB7XG4gICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbWFnZS5vbmFib3J0ID0gcmVqZWN0O1xuICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgaW1hZ2UuYWx0ID0gZmlsZS5uYW1lO1xuICAgICAgICAgIGltYWdlLnNyYyA9IGRhdGEudXJsO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBfcmVmMi5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjIubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgIF9yZWYyJHJvdGF0ZSA9IF9yZWYyLnJvdGF0ZSxcbiAgICAgICAgICAgIHJvdGF0ZSA9IF9yZWYyJHJvdGF0ZSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYyJHJvdGF0ZSxcbiAgICAgICAgICAgIF9yZWYyJHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgICAgICAgIHNjYWxlWCA9IF9yZWYyJHNjYWxlWCA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJHNjYWxlWCxcbiAgICAgICAgICAgIF9yZWYyJHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgICAgICAgIHNjYWxlWSA9IF9yZWYyJHNjYWxlWSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJHNjYWxlWTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgICB2YXIgbWF4V2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1heFdpZHRoLCAwKSB8fCBJbmZpbml0eTtcbiAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWluV2lkdGgsIDApIHx8IDA7XG4gICAgICAgICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWF4KG9wdGlvbnMubWluSGVpZ2h0LCAwKSB8fCAwO1xuICAgICAgICAgIHZhciB3aWR0aCA9IG5hdHVyYWxXaWR0aDtcbiAgICAgICAgICB2YXIgaGVpZ2h0ID0gbmF0dXJhbEhlaWdodDtcblxuICAgICAgICAgIGlmIChtYXhXaWR0aCA8IEluZmluaXR5ICYmIG1heEhlaWdodCA8IEluZmluaXR5KSB7XG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1heFdpZHRoIDwgSW5maW5pdHkpIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChtYXhIZWlnaHQgPCBJbmZpbml0eSkge1xuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWluV2lkdGggPiAwICYmIG1pbkhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGlmIChtaW5IZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgIG1pbkhlaWdodCA9IG1pbldpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaW5XaWR0aCA9IG1pbkhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWluV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBtaW5IZWlnaHQgPSBtaW5XaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWluSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgbWluV2lkdGggPSBtaW5IZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy53aWR0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB3aWR0aCA9IF9vcHRpb25zLndpZHRoO1xuXG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgX29wdGlvbnMyID0gb3B0aW9ucztcbiAgICAgICAgICAgIGhlaWdodCA9IF9vcHRpb25zMi5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCBtaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuXG4gICAgICAgICAgdmFyIGRlc3RYID0gLXdpZHRoIC8gMjtcbiAgICAgICAgICB2YXIgZGVzdFkgPSAtaGVpZ2h0IC8gMjtcbiAgICAgICAgICB2YXIgZGVzdFdpZHRoID0gd2lkdGg7XG4gICAgICAgICAgdmFyIGRlc3RIZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlKSAlIDE4MCA9PT0gOTApIHtcbiAgICAgICAgICAgIHZhciBfd2lkdGgkaGVpZ2h0ID0ge1xuICAgICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IHdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2lkdGggPSBfd2lkdGgkaGVpZ2h0LndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gX3dpZHRoJGhlaWdodC5oZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGZpbGwgY29sb3IgKCMwMDAsIGJsYWNrKVxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIE1hdGguZmxvb3IoZGVzdFgpLCBNYXRoLmZsb29yKGRlc3RZKSwgTWF0aC5mbG9vcihkZXN0V2lkdGgpLCBNYXRoLmZsb29yKGRlc3RIZWlnaHQpKTtcbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgICAgICAgIGlmICghaXNJbWFnZVR5cGUob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG4gICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG9wdGlvbnMuY29udmVydFNpemUgJiYgb3B0aW9ucy5taW1lVHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChjYW52YXMudG9CbG9iKSB7XG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKGRvbmUsIG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbmUoY2FudmFzVG9CbG9iKGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmF0dXJhbFdpZHRoID0gX3JlZjMubmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9yZWYzLm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICByZXN1bHQgPSBfcmVmMy5yZXN1bHQ7XG5cbiAgICAgICAgaWYgKFVSTCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoaW1hZ2Uuc3JjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIG9yaWdpbmFsIGZpbGUgaWYgdGhlIHJlc3VsdCBpcyBncmVhdGVyIHRoYW4gaXQgYW5kIHdpdGhvdXQgc2l6ZSByZWxhdGVkIG9wdGlvbnNcbiAgICAgICAgICBpZiAocmVzdWx0LnNpemUgPiBmaWxlLnNpemUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgcmVzdWx0Lmxhc3RNb2RpZmllZCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgcmVzdWx0Lmxhc3RNb2RpZmllZERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBmaWxlLm5hbWU7XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGV4dGVuc2lvbiB0byBtYXRjaCBpdHMgdHlwZVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5uYW1lICYmIHJlc3VsdC50eXBlICE9PSBmaWxlLnR5cGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZS5yZXBsYWNlKFJFR0VYUF9FWFRFTlNJT04sIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHJlc3VsdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICAgICAgICByZXN1bHQgPSBmaWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVzdWx0ID0gcmVzdWx0O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbWFnZUNvbXByZXNzb3I7XG59KCk7XG5cbnJldHVybiBJbWFnZUNvbXByZXNzb3I7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AeGtlc2hpL2ltYWdlLWNvbXByZXNzb3IvZGlzdC9pbWFnZS1jb21wcmVzc29yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiLyohXG4gKiBOYW1lOiB2dWUtdXBsb2FkLWNvbXBvbmVudFxuICogVmVyc2lvbjogMi44LjlcbiAqIEF1dGhvcjogTGlhbll1ZVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwuVnVlVXBsb2FkQ29tcG9uZW50ID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgWEhSIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIHZhciBjcmVhdGVSZXF1ZXN0ID0gZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChvcHRpb25zKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnLCBvcHRpb25zLnVybCk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB4aHI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgWEhSIHJlcXVlc3Qgd2l0aCBjZXJ0YWluIGJvZHlcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5XG4gICAqL1xuICB2YXIgc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiBzZW5kUmVxdWVzdCh4aHIsIGJvZHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoeGhyLnJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgWEhSIHJlcXVlc3Qgd2l0aCBjZXJ0YWluIGZvcm0gZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG4gIHZhciBzZW5kRm9ybVJlcXVlc3QgPSBmdW5jdGlvbiBzZW5kRm9ybVJlcXVlc3QoeGhyLCBkYXRhKSB7XG4gICAgdmFyIGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGRhdGEpIHtcbiAgICAgIGJvZHkuYXBwZW5kKG5hbWUsIGRhdGFbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCh4aHIucmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBzZW5kcyBYSFIgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBmdW5jdGlvbiByZXF1ZXN0IChvcHRpb25zKSB7XG4gICAgdmFyIHhociA9IGNyZWF0ZVJlcXVlc3Qob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc2VuZFJlcXVlc3QoeGhyLCBvcHRpb25zLmJvZHkpO1xuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIHZhciBDaHVua1VwbG9hZEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2h1bmtVcGxvYWRIYW5kbGVyKGZpbGUsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua1VwbG9hZEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtYXggcmV0cmllcyBmcm9tIG9wdGlvbnNcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKENodW5rVXBsb2FkSGFuZGxlciwgW3tcbiAgICAgIGtleTogJ2NyZWF0ZUNodW5rcycsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFsbCB0aGUgY2h1bmtzIGluIHRoZSBpbml0aWFsIHN0YXRlXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaHVua3MoKSB7XG4gICAgICAgIHRoaXMuY2h1bmtzID0gW107XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgdmFyIGVuZCA9IHRoaXMuY2h1bmtTaXplO1xuICAgICAgICB3aGlsZSAoc3RhcnQgPCB0aGlzLmZpbGVTaXplKSB7XG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICBibG9iOiB0aGlzLmZpbGUuZmlsZS5zbGljZShzdGFydCwgZW5kKSxcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiBzdGFydCxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByZXRyaWVzOiB0aGlzLm1heFJldHJpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzdGFydCA9IGVuZDtcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHRoaXMuY2h1bmtTaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlcyB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIGZpbGUgd2l0aCB0aGUgaGFuZGxlcidzIHByb2dyZXNzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwZGF0ZUZpbGVQcm9ncmVzcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRmlsZVByb2dyZXNzKCkge1xuICAgICAgICB0aGlzLmZpbGUucHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdWVzIHRoZSB1cGxvYWQgcHJvY2Vzc1xuICAgICAgICogLSBTdG9wcyBhbGwgYWN0aXZlIHJlcXVlc3RzXG4gICAgICAgKiAtIFNldHMgdGhlIGZpbGUgbm90IGFjdGl2ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdwYXVzZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuZmlsZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdG9wQ2h1bmtzKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RvcHMgYWxsIHRoZSBjdXJyZW50IGNodW5rc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzdG9wQ2h1bmtzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wQ2h1bmtzKCkge1xuICAgICAgICB0aGlzLmNodW5rc1VwbG9hZGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICAgIGNodW5rLnhoci5hYm9ydCgpO1xuICAgICAgICAgIGNodW5rLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXN1bWVzIHRoZSBmaWxlIHVwbG9hZFxuICAgICAgICogLSBTZXRzIHRoZSBmaWxlIGFjdGl2ZVxuICAgICAgICogLSBTdGFydHMgdGhlIGZvbGxvd2luZyBjaHVua3NcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAncmVzdW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuZmlsZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0Q2h1bmtpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydHMgdGhlIGZpbGUgdXBsb2FkXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMgUHJvbWlzZVxuICAgICAgICogLSByZXNvbHZlICBUaGUgZmlsZSB3YXMgdXBsb2FkZWRcbiAgICAgICAqIC0gcmVqZWN0ICAgVGhlIGZpbGUgdXBsb2FkIGZhaWxlZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1cGxvYWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgX3RoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RhcnQgcGhhc2VcbiAgICAgICAqIFNlbmRzIGEgcmVxdWVzdCB0byB0aGUgYmFja2VuZCB0byBpbml0aWFsaXNlIHRoZSBjaHVua3NcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB1cmw6IHRoaXMuYWN0aW9uLFxuICAgICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24odGhpcy5zdGFydEJvZHksIHtcbiAgICAgICAgICAgIHBoYXNlOiAnc3RhcnQnLFxuICAgICAgICAgICAgbWltZV90eXBlOiB0aGlzLmZpbGVUeXBlLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5maWxlU2l6ZSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuZmlsZU5hbWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBfdGhpczIuZmlsZS5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIucmVqZWN0KCdzZXJ2ZXInKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczIuc2Vzc2lvbklkID0gcmVzLmRhdGEuc2Vzc2lvbl9pZDtcbiAgICAgICAgICBfdGhpczIuY2h1bmtTaXplID0gcmVzLmRhdGEuZW5kX29mZnNldDtcblxuICAgICAgICAgIF90aGlzMi5jcmVhdGVDaHVua3MoKTtcbiAgICAgICAgICBfdGhpczIuc3RhcnRDaHVua2luZygpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgX3RoaXMyLmZpbGUucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgX3RoaXMyLnJlamVjdCgnc2VydmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0byB1cGxvYWQgY2h1bmtzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0YXJ0Q2h1bmtpbmcnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0Q2h1bmtpbmcoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXhBY3RpdmVDaHVua3M7IGkrKykge1xuICAgICAgICAgIHRoaXMudXBsb2FkTmV4dENodW5rKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGxvYWRzIHRoZSBuZXh0IGNodW5rXG4gICAgICAgKiAtIFdvbid0IGRvIGFueXRoaW5nIGlmIHRoZSBwcm9jZXNzIGlzIHBhdXNlZFxuICAgICAgICogLSBXaWxsIHN0YXJ0IGZpbmlzaCBwaGFzZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjaHVua3MgdG8gdXBsb2FkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwbG9hZE5leHRDaHVuaycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBsb2FkTmV4dENodW5rKCkge1xuICAgICAgICBpZiAodGhpcy5maWxlLmFjdGl2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0NodW5rc1RvVXBsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRDaHVuayh0aGlzLmNodW5rc1RvVXBsb2FkWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jaHVua3NVcGxvYWRpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maW5pc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGxvYWRzIGEgY2h1bmtcbiAgICAgICAqIC0gU2VuZHMgdGhlIGNodW5rIHRvIHRoZSBiYWNrZW5kXG4gICAgICAgKiAtIFNldHMgdGhlIGNodW5rIGFzIHVwbG9hZGVkIGlmIGV2ZXJ5dGhpbmcgd2VudCB3ZWxsXG4gICAgICAgKiAtIERlY3JlYXNlcyB0aGUgbnVtYmVyIG9mIHJldHJpZXMgaWYgYW55dGhpbmcgd2VudCB3cm9uZ1xuICAgICAgICogLSBGYWlscyBpZiB0aGVyZSBhcmUgbm8gbW9yZSByZXRyaWVzXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNodW5rXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwbG9hZENodW5rJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGxvYWRDaHVuayhjaHVuaykge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBjaHVuay5wcm9ncmVzcyA9IDA7XG4gICAgICAgIGNodW5rLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsZVByb2dyZXNzKCk7XG4gICAgICAgIGNodW5rLnhociA9IGNyZWF0ZVJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICB1cmw6IHRoaXMuYWN0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNodW5rLnhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICBjaHVuay5wcm9ncmVzcyA9IE1hdGgucm91bmQoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCAqIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgc2VuZEZvcm1SZXF1ZXN0KGNodW5rLnhociwgT2JqZWN0LmFzc2lnbih0aGlzLnVwbG9hZEJvZHksIHtcbiAgICAgICAgICBwaGFzZTogJ3VwbG9hZCcsXG4gICAgICAgICAgc2Vzc2lvbl9pZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICAgICAgc3RhcnRfb2Zmc2V0OiBjaHVuay5zdGFydE9mZnNldCxcbiAgICAgICAgICBjaHVuazogY2h1bmsuYmxvYlxuICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY2h1bmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgY2h1bmsudXBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2h1bmsucmV0cmllcy0tIDw9IDApIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnN0b3BDaHVua3MoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZWplY3QoJ3VwbG9hZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMy51cGxvYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNodW5rLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjaHVuay5yZXRyaWVzLS0gPD0gMCkge1xuICAgICAgICAgICAgX3RoaXMzLnN0b3BDaHVua3MoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVqZWN0KCd1cGxvYWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczMudXBsb2FkTmV4dENodW5rKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpbmlzaCBwaGFzZVxuICAgICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIHRvIGZpbmlzaCB0aGUgcHJvY2Vzc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaW5pc2gnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVGaWxlUHJvZ3Jlc3MoKTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmhlYWRlcnMsIHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB1cmw6IHRoaXMuYWN0aW9uLFxuICAgICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24odGhpcy5maW5pc2hCb2R5LCB7XG4gICAgICAgICAgICBwaGFzZTogJ2ZpbmlzaCcsXG4gICAgICAgICAgICBzZXNzaW9uX2lkOiB0aGlzLnNlc3Npb25JZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIF90aGlzNC5maWxlLnJlc3BvbnNlID0gcmVzO1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVqZWN0KCdzZXJ2ZXInKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczQucmVzb2x2ZShyZXMpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgX3RoaXM0LmZpbGUucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgX3RoaXM0LnJlamVjdCgnc2VydmVyJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ21heFJldHJpZXMnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLm9wdGlvbnMubWF4UmV0cmllcyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgbWF4IG51bWJlciBvZiBhY3RpdmUgY2h1bmtzIGJlaW5nIHVwbG9hZGVkIGF0IG9uY2UgZnJvbSBvcHRpb25zXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ21heEFjdGl2ZUNodW5rcycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMub3B0aW9ucy5tYXhBY3RpdmUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGZpbGUgdHlwZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaWxlVHlwZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS50eXBlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGZpbGUgc2l6ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaWxlU2l6ZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5zaXplO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGZpbGUgc2l6ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaWxlTmFtZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5uYW1lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgYWN0aW9uICh1cmwpIHRvIHVwbG9hZCB0aGUgZmlsZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgYm9keSB0byBiZSBtZXJnZWQgd2hlbiBzZW5kaW5nIHRoZSByZXF1ZXN0IGluIHN0YXJ0IHBoYXNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3N0YXJ0Qm9keScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFydEJvZHkgfHwge307XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgYm9keSB0byBiZSBtZXJnZWQgd2hlbiBzZW5kaW5nIHRoZSByZXF1ZXN0IGluIHVwbG9hZCBwaGFzZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1cGxvYWRCb2R5JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVwbG9hZEJvZHkgfHwge307XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgYm9keSB0byBiZSBtZXJnZWQgd2hlbiBzZW5kaW5nIHRoZSByZXF1ZXN0IGluIGZpbmlzaCBwaGFzZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaW5pc2hCb2R5JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmlzaEJvZHkgfHwge307XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgaGVhZGVycyBvZiB0aGUgcmVxdWVzdHMgZnJvbSBvcHRpb25zXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hlYWRlcnMnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIGl0J3MgcmVhZHkgdG8gdXBsb2FkIGZpbGVzIG9yIG5vdFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWFkeVRvVXBsb2FkJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNodW5rcztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBwcm9ncmVzcyBvZiB0aGUgY2h1bmsgdXBsb2FkXG4gICAgICAgKiAtIEdldHMgYWxsIHRoZSBjb21wbGV0ZWQgY2h1bmtzXG4gICAgICAgKiAtIEdldHMgdGhlIHByb2dyZXNzIG9mIGFsbCB0aGUgY2h1bmtzIHRoYXQgYXJlIGJlaW5nIHVwbG9hZGVkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Byb2dyZXNzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB2YXIgY29tcGxldGVkUHJvZ3Jlc3MgPSB0aGlzLmNodW5rc1VwbG9hZGVkLmxlbmd0aCAvIHRoaXMuY2h1bmtzLmxlbmd0aCAqIDEwMDtcbiAgICAgICAgdmFyIHVwbG9hZGluZ1Byb2dyZXNzID0gdGhpcy5jaHVua3NVcGxvYWRpbmcucmVkdWNlKGZ1bmN0aW9uIChwcm9ncmVzcywgY2h1bmspIHtcbiAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKyAoY2h1bmsucHJvZ3Jlc3MgfCAwKSAvIF90aGlzNS5jaHVua3MubGVuZ3RoO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5taW4oY29tcGxldGVkUHJvZ3Jlc3MgKyB1cGxvYWRpbmdQcm9ncmVzcywgMTAwKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIGFsbCB0aGUgY2h1bmtzIHRoYXQgYXJlIHBlbmRpbmcgdG8gYmUgdXBsb2FkZWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnY2h1bmtzVG9VcGxvYWQnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rcy5maWx0ZXIoZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgcmV0dXJuICFjaHVuay5hY3RpdmUgJiYgIWNodW5rLnVwbG9hZGVkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRoZXJlIGFyZSBjaHVua3MgdG8gdXBsb2FkIG9yIG5vdFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYXNDaHVua3NUb1VwbG9hZCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzVG9VcGxvYWQubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIGFsbCB0aGUgY2h1bmtzIHRoYXQgYXJlIHVwbG9hZGluZ1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjaHVua3NVcGxvYWRpbmcnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rcy5maWx0ZXIoZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgcmV0dXJuICEhY2h1bmsueGhyICYmICEhY2h1bmsuYWN0aXZlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIGFsbCB0aGUgY2h1bmtzIHRoYXQgaGF2ZSBmaW5pc2hlZCB1cGxvYWRpbmdcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnY2h1bmtzVXBsb2FkZWQnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNodW5rcy5maWx0ZXIoZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgcmV0dXJuICEhY2h1bmsudXBsb2FkZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDaHVua1VwbG9hZEhhbmRsZXI7XG4gIH0oKTtcblxuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuICAvL1xuXG4gIHZhciBzY3JpcHQgPSB7XG4gICAgbWV0aG9kczoge1xuICAgICAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJHBhcmVudC5hZGRJbnB1dEZpbGUoZS50YXJnZXQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgbmV3IHRoaXMuY29uc3RydWN0b3Ioe1xuICAgICAgICAgIHBhcmVudDogdGhpcy4kcGFyZW50LFxuICAgICAgICAgIGVsOiB0aGlzLiRlbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIF9fdnVlX3NjcmlwdF9fID0gc2NyaXB0O1xuXG4gIC8qIHRlbXBsYXRlICovXG4gIHZhciBfX3Z1ZV9yZW5kZXJfXyA9IGZ1bmN0aW9uIF9fdnVlX3JlbmRlcl9fKCkge1xuICAgIHZhciBfdm0gPSB0aGlzO3ZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2g7cmV0dXJuIF9jKCdpbnB1dCcsIHsgYXR0cnM6IHsgXCJ0eXBlXCI6IFwiZmlsZVwiLCBcIm5hbWVcIjogX3ZtLiRwYXJlbnQubmFtZSwgXCJpZFwiOiBfdm0uJHBhcmVudC5pbnB1dElkIHx8IF92bS4kcGFyZW50Lm5hbWUsIFwiYWNjZXB0XCI6IF92bS4kcGFyZW50LmFjY2VwdCwgXCJjYXB0dXJlXCI6IF92bS4kcGFyZW50LmNhcHR1cmUsIFwid2Via2l0ZGlyZWN0b3J5XCI6IF92bS4kcGFyZW50LmRpcmVjdG9yeSAmJiBfdm0uJHBhcmVudC5mZWF0dXJlcy5kaXJlY3RvcnksIFwiZGlyZWN0b3J5XCI6IF92bS4kcGFyZW50LmRpcmVjdG9yeSAmJiBfdm0uJHBhcmVudC5mZWF0dXJlcy5kaXJlY3RvcnksIFwibXVsdGlwbGVcIjogX3ZtLiRwYXJlbnQubXVsdGlwbGUgJiYgX3ZtLiRwYXJlbnQuZmVhdHVyZXMuaHRtbDUgfSwgb246IHsgXCJjaGFuZ2VcIjogX3ZtLmNoYW5nZSB9IH0pO1xuICB9O1xuICB2YXIgX192dWVfc3RhdGljUmVuZGVyRm5zX18gPSBbXTtcblxuICB2YXIgX192dWVfdGVtcGxhdGVfXyA9IHR5cGVvZiBfX3Z1ZV9yZW5kZXJfXyAhPT0gJ3VuZGVmaW5lZCcgPyB7IHJlbmRlcjogX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZuczogX192dWVfc3RhdGljUmVuZGVyRm5zX18gfSA6IHt9O1xuICAvKiBzdHlsZSAqL1xuICB2YXIgX192dWVfaW5qZWN0X3N0eWxlc19fID0gdW5kZWZpbmVkO1xuICAvKiBzY29wZWQgKi9cbiAgdmFyIF9fdnVlX3Njb3BlX2lkX18gPSB1bmRlZmluZWQ7XG4gIC8qIG1vZHVsZSBpZGVudGlmaWVyICovXG4gIHZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gdW5kZWZpbmVkO1xuICAvKiBmdW5jdGlvbmFsIHRlbXBsYXRlICovXG4gIHZhciBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18gPSBmYWxzZTtcbiAgLyogY29tcG9uZW50IG5vcm1hbGl6ZXIgKi9cbiAgZnVuY3Rpb24gX192dWVfbm9ybWFsaXplX18odGVtcGxhdGUsIHN0eWxlLCBzY3JpcHQkJDEsIHNjb3BlLCBmdW5jdGlvbmFsLCBtb2R1bGVJZGVudGlmaWVyLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc2NyaXB0JCQxIHx8IHt9O1xuXG4gICAgaWYgKCFjb21wb25lbnQucmVuZGVyKSB7XG4gICAgICBjb21wb25lbnQucmVuZGVyID0gdGVtcGxhdGUucmVuZGVyO1xuICAgICAgY29tcG9uZW50LnN0YXRpY1JlbmRlckZucyA9IHRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgIGNvbXBvbmVudC5fY29tcGlsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoZnVuY3Rpb25hbCkgY29tcG9uZW50LmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudC5fc2NvcGVJZCA9IHNjb3BlO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgKi9cbiAgZnVuY3Rpb24gX192dWVfY3JlYXRlX2luamVjdG9yX18oKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdmFyIHN0eWxlcyA9IF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLnN0eWxlcyB8fCAoX192dWVfY3JlYXRlX2luamVjdG9yX18uc3R5bGVzID0ge30pO1xuICAgIHZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXFxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFkZFN0eWxlKGlkLCBjc3MpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIGlkICsgJ1wiXScpKSByZXR1cm47IC8vIFNTUiBzdHlsZXMgYXJlIHByZXNlbnQuXG5cbiAgICAgIHZhciBncm91cCA9IGlzT2xkSUUgPyBjc3MubWVkaWEgfHwgJ2RlZmF1bHQnIDogaWQ7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbZ3JvdXBdIHx8IChzdHlsZXNbZ3JvdXBdID0geyBpZHM6IFtdLCBwYXJ0czogW10sIGVsZW1lbnQ6IHVuZGVmaW5lZCB9KTtcblxuICAgICAgaWYgKCFzdHlsZS5pZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIHZhciBjb2RlID0gY3NzLnNvdXJjZTtcbiAgICAgICAgdmFyIGluZGV4ID0gc3R5bGUuaWRzLmxlbmd0aDtcblxuICAgICAgICBzdHlsZS5pZHMucHVzaChpZCk7XG5cbiAgICAgICAgaWYgKGNzcy5tYXApIHtcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAgICAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgICAgICAgY29kZSArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgY3NzLm1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG4gICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICAgICAgICBjb2RlICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3MubWFwKSkpKSArICcgKi8nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50ID0gc3R5bGUuZWxlbWVudCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLWdyb3VwPScgKyBncm91cCArICddJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0eWxlLmVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZWwgPSBzdHlsZS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICAgIGlmIChjc3MubWVkaWEpIGVsLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjc3MubWVkaWEpO1xuICAgICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnLCBncm91cCk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcsICcwJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoc3R5bGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcpKTtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHlsZS5lbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5wYXJ0cy5wdXNoKGNvZGUpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGUucGFydHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpO1xuICAgICAgICAgIHZhciBub2RlcyA9IHN0eWxlLmVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICBpZiAobm9kZXNbaW5kZXhdKSBzdHlsZS5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkgc3R5bGUuZWxlbWVudC5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGVzW2luZGV4XSk7ZWxzZSBzdHlsZS5lbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLyogc3R5bGUgaW5qZWN0IFNTUiAqL1xuXG4gIHZhciBJbnB1dEZpbGUgPSBfX3Z1ZV9ub3JtYWxpemVfXyhfX3Z1ZV90ZW1wbGF0ZV9fLCBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18sIHR5cGVvZiBfX3Z1ZV9zY3JpcHRfXyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV9zY29wZV9pZF9fLCBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18sIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18sIHR5cGVvZiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyA6IGZ1bmN0aW9uICgpIHt9LCB0eXBlb2YgX192dWVfY3JlYXRlX2luamVjdG9yX3Nzcl9fICE9PSAndW5kZWZpbmVkJyA/IF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9zc3JfXyA6IGZ1bmN0aW9uICgpIHt9KTtcblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG4gIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuICB2YXIgQ0hVTktfREVGQVVMVF9PUFRJT05TID0ge1xuICAgIGhlYWRlcnM6IHt9LFxuICAgIGFjdGlvbjogJycsXG4gICAgbWluU2l6ZTogMTA0ODU3NixcbiAgICBtYXhBY3RpdmU6IDMsXG4gICAgbWF4UmV0cmllczogNSxcblxuICAgIGhhbmRsZXI6IENodW5rVXBsb2FkSGFuZGxlclxuICB9O1xuXG4gIHZhciBzY3JpcHQkMSA9IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBJbnB1dEZpbGU6IElucHV0RmlsZVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgIGlucHV0SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2ZpbGUnXG4gICAgICB9LFxuXG4gICAgICBhY2NlcHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICBjYXB0dXJlOiB7fSxcblxuICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgbWF4aW11bToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFkZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IFtCb29sZWFuLCBOdW1iZXJdXG4gICAgICB9LFxuXG4gICAgICBkaXJlY3Rvcnk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgcG9zdEFjdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIHB1dEFjdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIGN1c3RvbUFjdGlvbjoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgICAgfSxcblxuICAgICAgaGVhZGVyczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgdGltZW91dDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGRyb3A6IHtcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGRyb3BEaXJlY3Rvcnk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgc2l6ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgZGVmYXVsdDogQXJyYXlcbiAgICAgIH0sXG5cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBkZWZhdWx0OiBBcnJheVxuICAgICAgfSxcblxuICAgICAgdGhyZWFkOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMVxuICAgICAgfSxcblxuICAgICAgLy8gQ2h1bmsgdXBsb2FkIGVuYWJsZWRcbiAgICAgIGNodW5rRW5hYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gQ2h1bmsgdXBsb2FkIHByb3BlcnRpZXNcbiAgICAgIGNodW5rOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgcmV0dXJuIENIVU5LX0RFRkFVTFRfT1BUSU9OUztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZXM6IHRoaXMudmFsdWUsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgaHRtbDU6IHRydWUsXG4gICAgICAgICAgZGlyZWN0b3J5OiBmYWxzZSxcbiAgICAgICAgICBkcmFnOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRyb3BBY3RpdmU6IGZhbHNlLFxuXG4gICAgICAgIHVwbG9hZGluZzogMCxcblxuICAgICAgICBkZXN0cm95OiBmYWxzZVxuICAgICAgfTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBtb3VudGVkXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgaW5wdXQubXVsdGlwbGUgPSB0cnVlO1xuXG4gICAgICAvLyBodG1sNSDnibnlvoFcbiAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgJiYgaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgLy8g5LiK5Lyg55uu5b2V54m55b6BXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQud2Via2l0ZGlyZWN0b3J5ID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGlucHV0LmRpcmVjdG9yeSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhpcy5mZWF0dXJlcy5kaXJlY3RvcnkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5ouW5ou954m55b6BXG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmh0bWw1ICYmIHR5cGVvZiBpbnB1dC5vbmRyb3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5mZWF0dXJlcy5kcm9wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5odG1sNSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWxlcyDlrprkvY3nvJPlrZhcbiAgICAgIHRoaXMubWFwcyA9IHt9O1xuXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8g5pu05paw5LiL54i257qnXG4gICAgICAgIGlmICh0aGlzLiRwYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmi5bmi73muLLmn5NcbiAgICAgICAgdGhpcy53YXRjaERyb3AodGhpcy5kcm9wKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIGJlZm9yZURlc3Ryb3lcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgLy8g5bey6ZSA5q+BXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuXG4gICAgICAvLyDorr7nva7miJDkuI3mv4DmtLtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIC8qKlxuICAgICAgICogdXBsb2FkaW5nIOato+WcqOS4iuS8oOeahOe6v+eoi1xuICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiB1cGxvYWRlZCDmlofku7bliJfooajmmK/lkKblhajpg6jlt7LkuIrkvKBcbiAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAgICovXG4gICAgICB1cGxvYWRlZDogZnVuY3Rpb24gdXBsb2FkZWQoKSB7XG4gICAgICAgIHZhciBmaWxlID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmaWxlID0gdGhpcy5maWxlc1tpXTtcbiAgICAgICAgICBpZiAoZmlsZS5maWxlT2JqZWN0ICYmICFmaWxlLmVycm9yICYmICFmaWxlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgY2h1bmtPcHRpb25zOiBmdW5jdGlvbiBjaHVua09wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKENIVU5LX0RFRkFVTFRfT1BUSU9OUywgdGhpcy5jaHVuayk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBbJ2ZpbGUtdXBsb2FkcycsIHRoaXMuZmVhdHVyZXMuaHRtbDUgPyAnZmlsZS11cGxvYWRzLWh0bWw1JyA6ICdmaWxlLXVwbG9hZHMtaHRtbDQnLCB0aGlzLmZlYXR1cmVzLmRpcmVjdG9yeSAmJiB0aGlzLmRpcmVjdG9yeSA/ICdmaWxlLXVwbG9hZHMtZGlyZWN0b3J5JyA6IHVuZGVmaW5lZCwgdGhpcy5mZWF0dXJlcy5kcm9wICYmIHRoaXMuZHJvcCA/ICdmaWxlLXVwbG9hZHMtZHJvcCcgOiB1bmRlZmluZWRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgYWN0aXZlOiBmdW5jdGlvbiBhY3RpdmUoX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLndhdGNoQWN0aXZlKF9hY3RpdmUpO1xuICAgICAgfSxcbiAgICAgIGRyb3BBY3RpdmU6IGZ1bmN0aW9uIGRyb3BBY3RpdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRwYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKHZhbHVlKSB7XG4gICAgICAgIHRoaXMud2F0Y2hEcm9wKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZmlsZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsZXMgPT09IGZpbGVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcblxuICAgICAgICB2YXIgb2xkTWFwcyA9IHRoaXMubWFwcztcblxuICAgICAgICAvLyDph43lhpkgbWFwcyDnvJPlrZhcbiAgICAgICAgdGhpcy5tYXBzID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1tpXTtcbiAgICAgICAgICB0aGlzLm1hcHNbZmlsZS5pZF0gPSBmaWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkLCB1cGRhdGVcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubWFwcykge1xuICAgICAgICAgIHZhciBuZXdGaWxlID0gdGhpcy5tYXBzW2tleV07XG4gICAgICAgICAgdmFyIG9sZEZpbGUgPSBvbGRNYXBzW2tleV07XG4gICAgICAgICAgaWYgKG5ld0ZpbGUgIT09IG9sZEZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbGUobmV3RmlsZSwgb2xkRmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVsZXRlXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gb2xkTWFwcykge1xuICAgICAgICAgIGlmICghdGhpcy5tYXBzW19rZXldKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRGaWxlKHVuZGVmaW5lZCwgb2xkTWFwc1tfa2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgLy8g5riF56m6XG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuXG4gICAgICAgICAgLy8g5a6a5L2NXG4gICAgICAgICAgdGhpcy5tYXBzID0ge307XG5cbiAgICAgICAgICAvLyDkuovku7ZcbiAgICAgICAgICB0aGlzLmVtaXRJbnB1dCgpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEZpbGUodW5kZWZpbmVkLCBmaWxlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDpgInmi6lcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaWQpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tYXBzW2lkLmlkXSB8fCBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1hcHNbaWRdIHx8IGZhbHNlO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDmt7vliqBcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKF9maWxlcykge1xuICAgICAgICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuYWRkSW5kZXg7XG5cbiAgICAgICAgdmFyIGZpbGVzID0gX2ZpbGVzO1xuICAgICAgICB2YXIgaXNBcnJheSA9IGZpbGVzIGluc3RhbmNlb2YgQXJyYXk7XG5cbiAgICAgICAgLy8g5LiN5piv5pWw57uE5pW055CG5oiQ5pWw57uEXG4gICAgICAgIGlmICghaXNBcnJheSkge1xuICAgICAgICAgIGZpbGVzID0gW2ZpbGVzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmBjeWOhuinhOiMg+WvueixoVxuICAgICAgICB2YXIgYWRkRmlsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBmaWxlID0gZmlsZXNbaV07XG4gICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaHRtbDUgJiYgZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICAgIGZpbGUgPSB7XG4gICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGggfHwgZmlsZS5yZWxhdGl2ZVBhdGggfHwgZmlsZS5uYW1lIHx8ICd1bmtub3duJyxcbiAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZmlsZU9iamVjdCA9IGZhbHNlO1xuICAgICAgICAgIGlmIChmaWxlLmZpbGVPYmplY3QgPT09IGZhbHNlKSA7IGVsc2UgaWYgKGZpbGUuZmlsZU9iamVjdCkge1xuICAgICAgICAgICAgZmlsZU9iamVjdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5lbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZpbGVPYmplY3QgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGZpbGUuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICAgIGZpbGVPYmplY3QgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmlsZU9iamVjdCkge1xuICAgICAgICAgICAgZmlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgZmlsZU9iamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgc2l6ZTogLTEsXG4gICAgICAgICAgICAgIG5hbWU6ICdGaWxlbmFtZScsXG4gICAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICBwdXRBY3Rpb246IHRoaXMucHV0QWN0aW9uLFxuICAgICAgICAgICAgICBwb3N0QWN0aW9uOiB0aGlzLnBvc3RBY3Rpb24sXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dFxuICAgICAgICAgICAgfSwgZmlsZSwge1xuICAgICAgICAgICAgICByZXNwb25zZToge30sXG5cbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICcwLjAwJywgLy8g5Y+q6K+7XG4gICAgICAgICAgICAgIHNwZWVkOiAwIC8vIOWPquivu1xuICAgICAgICAgICAgICAvLyB4aHI6IGZhbHNlLCAgICAgICAgICAgICAgICAvLyDlj6ror7tcbiAgICAgICAgICAgICAgLy8gaWZyYW1lOiBmYWxzZSwgICAgICAgICAgICAgLy8g5Y+q6K+7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmlsZS5kYXRhID0gX2V4dGVuZHMoe30sIHRoaXMuZGF0YSwgZmlsZS5kYXRhID8gZmlsZS5kYXRhIDoge30pO1xuXG4gICAgICAgICAgICBmaWxlLmhlYWRlcnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5oZWFkZXJzLCBmaWxlLmhlYWRlcnMgPyBmaWxlLmhlYWRlcnMgOiB7fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5b+F6aG75YyF5ZCrIGlkXG4gICAgICAgICAgaWYgKCFmaWxlLmlkKSB7XG4gICAgICAgICAgICBmaWxlLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmVtaXRGaWx0ZXIoZmlsZSwgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5pyA5aSn5pWw6YeP6ZmQ5Yi2XG4gICAgICAgICAgaWYgKHRoaXMubWF4aW11bSA+IDEgJiYgYWRkRmlsZXMubGVuZ3RoICsgdGhpcy5maWxlcy5sZW5ndGggPj0gdGhpcy5tYXhpbXVtKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRGaWxlcy5wdXNoKGZpbGUpO1xuXG4gICAgICAgICAgLy8g5pyA5aSn5pWw6YeP6ZmQ5Yi2XG4gICAgICAgICAgaWYgKHRoaXMubWF4aW11bSA9PT0gMSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5rKh5pyJ5paH5Lu2XG4gICAgICAgIGlmICghYWRkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5pivIDEg5riF56m6XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0gPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDov5vljrsgZmlsZXNcbiAgICAgICAgdmFyIG5ld0ZpbGVzID0gdm9pZCAwO1xuICAgICAgICBpZiAoaW5kZXggPT09IHRydWUgfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICBuZXdGaWxlcyA9IGFkZEZpbGVzLmNvbmNhdCh0aGlzLmZpbGVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCkge1xuICAgICAgICAgIG5ld0ZpbGVzID0gYWRkRmlsZXMuY29uY2F0KFtdKTtcbiAgICAgICAgICBuZXdGaWxlcy5zcGxpY2UoaW5kZXgsIDAsIGFkZEZpbGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdGaWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KGFkZEZpbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsZXMgPSBuZXdGaWxlcztcblxuICAgICAgICAvLyDlrprkvY1cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFkZEZpbGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBfZmlsZTIgPSBhZGRGaWxlc1tfaV07XG4gICAgICAgICAgdGhpcy5tYXBzW19maWxlMi5pZF0gPSBfZmlsZTI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkuovku7ZcbiAgICAgICAgdGhpcy5lbWl0SW5wdXQoKTtcbiAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgYWRkRmlsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgIHRoaXMuZW1pdEZpbGUoYWRkRmlsZXNbX2kyXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0FycmF5ID8gYWRkRmlsZXMgOiBhZGRGaWxlc1swXTtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g5re75Yqg6KGo5Y2V5paH5Lu2XG4gICAgICBhZGRJbnB1dEZpbGU6IGZ1bmN0aW9uIGFkZElucHV0RmlsZShlbCkge1xuICAgICAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAgICAgaWYgKGVsLmZpbGVzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBlbC5maWxlc1tpXTtcbiAgICAgICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoIHx8IGZpbGUucmVsYXRpdmVQYXRoIHx8IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICBlbDogZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbmFtZXMgPSBlbC52YWx1ZS5yZXBsYWNlKC9cXFxcL2csICcvJykuc3BsaXQoJy8nKTtcbiAgICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWVzW25hbWVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgZWw6IGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGZpbGVzKTtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g5re75YqgIERhdGFUcmFuc2ZlclxuICAgICAgYWRkRGF0YVRyYW5zZmVyOiBmdW5jdGlvbiBhZGREYXRhVHJhbnNmZXIoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpbGVzID0gW107XG4gICAgICAgIGlmIChkYXRhVHJhbnNmZXIuaXRlbXMgJiYgZGF0YVRyYW5zZmVyLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YVRyYW5zZmVyLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRhdGFUcmFuc2Zlci5pdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmdldEFzRW50cnkpIHtcbiAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZ2V0QXNFbnRyeSgpIHx8IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ud2Via2l0R2V0QXNFbnRyeSkge1xuICAgICAgICAgICAgICBpdGVtID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCkgfHwgaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGkpIHtcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgLy8g57uT5p2fIOaWh+S7tuaVsOmHj+Wkp+S6jiDmnIDlpKfmlbDph49cbiAgICAgICAgICAgICAgaWYgKCFpdGVtIHx8IF90aGlzLm1heGltdW0gPiAwICYmIGZpbGVzLmxlbmd0aCA+PSBfdGhpcy5tYXhpbXVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoX3RoaXMuYWRkKGZpbGVzKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3RoaXMuZ2V0RW50cnkoaXRlbSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2guYXBwbHkoZmlsZXMsIF90b0NvbnN1bWFibGVBcnJheShyZXN1bHRzKSk7XG4gICAgICAgICAgICAgICAgZm9yRWFjaChpICsgMSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvckVhY2goMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKGRhdGFUcmFuc2Zlci5maWxlc1tfaTNdKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heGltdW0gPiAwICYmIGZpbGVzLmxlbmd0aCA+PSB0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5hZGQoZmlsZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDojrflvpcgZW50cnlcbiAgICAgIGdldEVudHJ5OiBmdW5jdGlvbiBnZXRFbnRyeShlbnRyeSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpZiAoZW50cnkuaXNGaWxlKSB7XG4gICAgICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoW3tcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgbmFtZTogcGF0aCArIGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5ICYmIF90aGlzMi5kcm9wRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBkaXJSZWFkZXIgPSBlbnRyeS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHZhciByZWFkRW50cmllcyA9IGZ1bmN0aW9uIHJlYWRFbnRyaWVzKCkge1xuICAgICAgICAgICAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goaSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyaWVzW2ldICYmIGkgPT09IDAgfHwgX3RoaXMyLm1heGltdW0gPiAwICYmIGZpbGVzLmxlbmd0aCA+PSBfdGhpczIubWF4aW11bSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoIWVudHJpZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdGhpczIuZ2V0RW50cnkoZW50cmllc1tpXSwgcGF0aCArIGVudHJ5Lm5hbWUgKyAnLycpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMucHVzaC5hcHBseShmaWxlcywgX3RvQ29uc3VtYWJsZUFycmF5KHJlc3VsdHMpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChpICsgMSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvckVhY2goMCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShpZDEsIGlkMikge1xuICAgICAgICB2YXIgZmlsZTEgPSB0aGlzLmdldChpZDEpO1xuICAgICAgICB2YXIgZmlsZTIgPSB0aGlzLmdldChpZDIpO1xuICAgICAgICBpZiAoIWZpbGUxIHx8ICFmaWxlMiB8fCBmaWxlMSA9PT0gZmlsZTIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoW10pO1xuICAgICAgICB2YXIgaW5kZXgxID0gZmlsZXMuaW5kZXhPZihmaWxlMSk7XG4gICAgICAgIHZhciBpbmRleDIgPSBmaWxlcy5pbmRleE9mKGZpbGUyKTtcbiAgICAgICAgaWYgKGluZGV4MSA9PT0gLTEgfHwgaW5kZXgyID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaWxlc1tpbmRleDFdID0gZmlsZTI7XG4gICAgICAgIGZpbGVzW2luZGV4Ml0gPSBmaWxlMTtcbiAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgICAgICB0aGlzLmVtaXRJbnB1dCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g56e76ZmkXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpZCkge1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5lbWl0RmlsdGVyKHVuZGVmaW5lZCwgZmlsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoW10pO1xuICAgICAgICAgIHZhciBpbmRleCA9IGZpbGVzLmluZGV4T2YoZmlsZSk7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncmVtb3ZlJywgZmlsZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuXG4gICAgICAgICAgLy8g5a6a5L2NXG4gICAgICAgICAgZGVsZXRlIHRoaXMubWFwc1tmaWxlLmlkXTtcblxuICAgICAgICAgIC8vIOS6i+S7tlxuICAgICAgICAgIHRoaXMuZW1pdElucHV0KCk7XG4gICAgICAgICAgdGhpcy5lbWl0RmlsZSh1bmRlZmluZWQsIGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDmm7TmlrBcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIHZhciBuZXdGaWxlID0gX2V4dGVuZHMoe30sIGZpbGUsIGRhdGEpO1xuICAgICAgICAgIC8vIOWBnOeUqOW/hemhu+WKoOS4iumUmeivr1xuICAgICAgICAgIGlmIChmaWxlLmZpbGVPYmplY3QgJiYgZmlsZS5hY3RpdmUgJiYgIW5ld0ZpbGUuYWN0aXZlICYmICFuZXdGaWxlLmVycm9yICYmICFuZXdGaWxlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG5ld0ZpbGUuZXJyb3IgPSAnYWJvcnQnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmVtaXRGaWx0ZXIobmV3RmlsZSwgZmlsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChbXSk7XG4gICAgICAgICAgdmFyIGluZGV4ID0gZmlsZXMuaW5kZXhPZihmaWxlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUnLCBmaWxlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlsZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdGaWxlKTtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG5cbiAgICAgICAgICAvLyDliKDpmaQgIOaXp+WumuS9jSDlhpnlhaUg5paw5a6a5L2NIO+8iOW3suS+v+aUr+aMgeS/ruaUuWlkKVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLm1hcHNbZmlsZS5pZF07XG4gICAgICAgICAgdGhpcy5tYXBzW25ld0ZpbGUuaWRdID0gbmV3RmlsZTtcblxuICAgICAgICAgIC8vIOS6i+S7tlxuICAgICAgICAgIHRoaXMuZW1pdElucHV0KCk7XG4gICAgICAgICAgdGhpcy5lbWl0RmlsZShuZXdGaWxlLCBmaWxlKTtcbiAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG5cbiAgICAgIC8vIOmihOWkhOeQhiDkuovku7Yg6L+H5ruk5ZmoXG4gICAgICBlbWl0RmlsdGVyOiBmdW5jdGlvbiBlbWl0RmlsdGVyKG5ld0ZpbGUsIG9sZEZpbGUpIHtcbiAgICAgICAgdmFyIGlzUHJldmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dC1maWx0ZXInLCBuZXdGaWxlLCBvbGRGaWxlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXNQcmV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gaXNQcmV2ZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlzUHJldmVudDtcbiAgICAgIH0sXG5cblxuICAgICAgLy8g5aSE55CG5ZCOIOS6i+S7tiDliIblj5FcbiAgICAgIGVtaXRGaWxlOiBmdW5jdGlvbiBlbWl0RmlsZShuZXdGaWxlLCBvbGRGaWxlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0LWZpbGUnLCBuZXdGaWxlLCBvbGRGaWxlKTtcbiAgICAgICAgaWYgKG5ld0ZpbGUgJiYgbmV3RmlsZS5maWxlT2JqZWN0ICYmIG5ld0ZpbGUuYWN0aXZlICYmICghb2xkRmlsZSB8fCAhb2xkRmlsZS5hY3RpdmUpKSB7XG4gICAgICAgICAgdGhpcy51cGxvYWRpbmcrKztcbiAgICAgICAgICAvLyDmv4DmtLtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMy51cGxvYWQobmV3RmlsZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgbmV3RmlsZSA9IF90aGlzMy5nZXQobmV3RmlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZpbGUgJiYgbmV3RmlsZS5maWxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMudXBkYXRlKG5ld0ZpbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogIW5ld0ZpbGUuZXJyb3JcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczMudXBkYXRlKG5ld0ZpbGUsIHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlLmNvZGUgfHwgZS5lcnJvciB8fCBlLm1lc3NhZ2UgfHwgZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiA1MCArIDUwLCAxMCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCghbmV3RmlsZSB8fCAhbmV3RmlsZS5maWxlT2JqZWN0IHx8ICFuZXdGaWxlLmFjdGl2ZSkgJiYgb2xkRmlsZSAmJiBvbGRGaWxlLmZpbGVPYmplY3QgJiYgb2xkRmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAvLyDlgZzmraJcbiAgICAgICAgICB0aGlzLnVwbG9hZGluZy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Ieq5Yqo5bu257ut5r+A5rS7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAoQm9vbGVhbihuZXdGaWxlKSAhPT0gQm9vbGVhbihvbGRGaWxlKSB8fCBuZXdGaWxlLmFjdGl2ZSAhPT0gb2xkRmlsZS5hY3RpdmUpKSB7XG4gICAgICAgICAgdGhpcy53YXRjaEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVtaXRJbnB1dDogZnVuY3Rpb24gZW1pdElucHV0KCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuZmlsZXMpO1xuICAgICAgfSxcblxuXG4gICAgICAvLyDkuIrkvKBcbiAgICAgIHVwbG9hZDogZnVuY3Rpb24gdXBsb2FkKGlkKSB7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5nZXQoaWQpO1xuXG4gICAgICAgIC8vIOiiq+WIoOmZpFxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ25vdF9leGlzdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4jeaYr+aWh+S7tuWvueixoVxuICAgICAgICBpZiAoIWZpbGUuZmlsZU9iamVjdCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnZmlsZV9vYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaciemUmeivr+ebtOaOpeWTjeW6lFxuICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmaWxlLmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW3suWujOaIkOebtOaOpeWTjeW6lFxuICAgICAgICBpZiAoZmlsZS5zdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWQjue8gFxuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgKGV4dGVuc2lvbnMubGVuZ3RoIHx8IHR5cGVvZiBleHRlbnNpb25zLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgaWYgKCh0eXBlb2YgZXh0ZW5zaW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZXh0ZW5zaW9ucykpICE9PSAnb2JqZWN0JyB8fCAhKGV4dGVuc2lvbnMgaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4dGVuc2lvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGV4dGVuc2lvbnMgPSBleHRlbnNpb25zLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXh0ZW5zaW9ucyA9IG5ldyBSZWdFeHAoJ1xcXFwuKCcgKyBleHRlbnNpb25zLmpvaW4oJ3wnKS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykgKyAnKSQnLCAnaScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmlsZS5uYW1lLnNlYXJjaChleHRlbnNpb25zKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnZXh0ZW5zaW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aSn5bCPXG4gICAgICAgIGlmICh0aGlzLnNpemUgPiAwICYmIGZpbGUuc2l6ZSA+PSAwICYmIGZpbGUuc2l6ZSA+IHRoaXMuc2l6ZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQWN0aW9uKGZpbGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaHRtbDUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zaG91bGRVc2VDaHVua1VwbG9hZChmaWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkQ2h1bmsoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWxlLnB1dEFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkUHV0KGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmlsZS5wb3N0QWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRIdG1sNShmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGUucG9zdEFjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnVwbG9hZEh0bWw0KGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTm8gYWN0aW9uIGNvbmZpZ3VyZWQnKTtcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRoaXMgZmlsZSBzaG91bGQgYmUgdXBsb2FkZWQgdXNpbmcgY2h1bmsgdXBsb2FkIG9yIG5vdFxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSBPYmplY3QgZmlsZVxuICAgICAgICovXG4gICAgICBzaG91bGRVc2VDaHVua1VwbG9hZDogZnVuY3Rpb24gc2hvdWxkVXNlQ2h1bmtVcGxvYWQoZmlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaHVua0VuYWJsZWQgJiYgISF0aGlzLmNodW5rT3B0aW9ucy5oYW5kbGVyICYmIGZpbGUuc2l6ZSA+IHRoaXMuY2h1bmtPcHRpb25zLm1pblNpemU7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVXBsb2FkIGEgZmlsZSB1c2luZyBDaHVuayBtZXRob2RcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gRmlsZSBmaWxlXG4gICAgICAgKi9cbiAgICAgIHVwbG9hZENodW5rOiBmdW5jdGlvbiB1cGxvYWRDaHVuayhmaWxlKSB7XG4gICAgICAgIHZhciBIYW5kbGVyQ2xhc3MgPSB0aGlzLmNodW5rT3B0aW9ucy5oYW5kbGVyO1xuICAgICAgICBmaWxlLmNodW5rID0gbmV3IEhhbmRsZXJDbGFzcyhmaWxlLCB0aGlzLmNodW5rT3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGZpbGUuY2h1bmsudXBsb2FkKCk7XG4gICAgICB9LFxuICAgICAgdXBsb2FkUHV0OiBmdW5jdGlvbiB1cGxvYWRQdXQoZmlsZSkge1xuICAgICAgICB2YXIgcXVlcnlzID0gW107XG4gICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGZpbGUuZGF0YSkge1xuICAgICAgICAgIHZhbHVlID0gZmlsZS5kYXRhW2tleV07XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5cy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBxdWVyeVN0cmluZyA9IHF1ZXJ5cy5sZW5ndGggPyAoZmlsZS5wdXRBY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBxdWVyeXMuam9pbignJicpIDogJyc7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ1BVVCcsIGZpbGUucHV0QWN0aW9uICsgcXVlcnlTdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRYaHIoeGhyLCBmaWxlLCBmaWxlLmZpbGUpO1xuICAgICAgfSxcbiAgICAgIHVwbG9hZEh0bWw1OiBmdW5jdGlvbiB1cGxvYWRIdG1sNShmaWxlKSB7XG4gICAgICAgIHZhciBmb3JtID0gbmV3IHdpbmRvdy5Gb3JtRGF0YSgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmaWxlLmRhdGEpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpbGUuZGF0YVtrZXldO1xuICAgICAgICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSwgdmFsdWUubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3JtLmFwcGVuZChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybS5hcHBlbmQodGhpcy5uYW1lLCBmaWxlLmZpbGUsIGZpbGUuZmlsZS5maWxlbmFtZSB8fCBmaWxlLm5hbWUpO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgZmlsZS5wb3N0QWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkWGhyKHhociwgZmlsZSwgZm9ybSk7XG4gICAgICB9LFxuICAgICAgdXBsb2FkWGhyOiBmdW5jdGlvbiB1cGxvYWRYaHIoeGhyLCBfZmlsZSwgYm9keSkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgZmlsZSA9IF9maWxlO1xuICAgICAgICB2YXIgc3BlZWRUaW1lID0gMDtcbiAgICAgICAgdmFyIHNwZWVkTG9hZGVkID0gMDtcblxuICAgICAgICAvLyDov5vluqbmnaFcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyDov5jmnKrlvIDlp4vkuIrkvKAg5bey5Yig6ZmkIOacqua/gOa0u1xuICAgICAgICAgIGZpbGUgPSBfdGhpczQuZ2V0KGZpbGUpO1xuICAgICAgICAgIGlmICghZS5sZW5ndGhDb21wdXRhYmxlIHx8ICFmaWxlIHx8ICFmaWxlLmZpbGVPYmplY3QgfHwgIWZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g6L+b5bqmIOmAn+W6piDmr4/np5Lmm7TmlrDkuIDmrKFcbiAgICAgICAgICB2YXIgc3BlZWRUaW1lMiA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgIGlmIChzcGVlZFRpbWUyID09PSBzcGVlZFRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BlZWRUaW1lID0gc3BlZWRUaW1lMjtcblxuICAgICAgICAgIGZpbGUgPSBfdGhpczQudXBkYXRlKGZpbGUsIHtcbiAgICAgICAgICAgIHByb2dyZXNzOiAoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgc3BlZWQ6IGUubG9hZGVkIC0gc3BlZWRMb2FkZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcGVlZExvYWRlZCA9IGUubG9hZGVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOajgOafpea/gOa0u+eKtuaAgVxuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZmlsZSA9IF90aGlzNC5nZXQoZmlsZSk7XG4gICAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS5maWxlT2JqZWN0ICYmICFmaWxlLnN1Y2Nlc3MgJiYgIWZpbGUuZXJyb3IgJiYgZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDE7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBjb21wbGV0ZSA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiBmbihlKSB7XG4gICAgICAgICAgICAvLyDlt7Lnu4/lpITnkIbov4fkuoZcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgIGludGVydmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGUgPSBfdGhpczQuZ2V0KGZpbGUpO1xuXG4gICAgICAgICAgICAvLyDkuI3lrZjlnKjnm7TmjqXlk43lupRcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdub3RfZXhpc3RzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOS4jeaYr+aWh+S7tuWvueixoVxuICAgICAgICAgICAgaWYgKCFmaWxlLmZpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnZmlsZV9vYmplY3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pyJ6ZSZ6K+v6Ieq5Yqo5ZON5bqUXG4gICAgICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGZpbGUuZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmnKrmv4DmtLtcbiAgICAgICAgICAgIGlmICghZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnYWJvcnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5bey5a6M5oiQIOebtOaOpeebuOW6lFxuICAgICAgICAgICAgaWYgKGZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAndGltZW91dCc6XG4gICAgICAgICAgICAgIGNhc2UgJ2Fib3J0JzpcbiAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gZS50eXBlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgaWYgKCF4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ25ldHdvcmsnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnc2VydmVyJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ2RlbmllZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICdzZXJ2ZXInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnZGVuaWVkJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YS5wcm9ncmVzcyA9ICcxMDAuMDAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJy9qc29uJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5yZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5yZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pu05pawXG4gICAgICAgICAgICBmaWxlID0gX3RoaXM0LnVwZGF0ZShmaWxlLCBkYXRhKTtcblxuICAgICAgICAgICAgLy8g55u45bqU6ZSZ6K+vXG4gICAgICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGZpbGUuZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlk43lupRcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGUpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyDkuovku7ZcbiAgICAgICAgICB4aHIub25sb2FkID0gZm47XG4gICAgICAgICAgeGhyLm9uZXJyb3IgPSBmbjtcbiAgICAgICAgICB4aHIub25hYm9ydCA9IGZuO1xuICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmbjtcblxuICAgICAgICAgIC8vIOi2heaXtlxuICAgICAgICAgIGlmIChmaWxlLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gZmlsZS50aW1lb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGhlYWRlcnNcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlsZS5oZWFkZXJzKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGZpbGUuaGVhZGVyc1trZXldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDmm7TmlrAgeGhyXG4gICAgICAgICAgZmlsZSA9IF90aGlzNC51cGRhdGUoZmlsZSwgeyB4aHI6IHhociB9KTtcblxuICAgICAgICAgIC8vIOW8gOWni+S4iuS8oFxuICAgICAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB1cGxvYWRIdG1sNDogZnVuY3Rpb24gdXBsb2FkSHRtbDQoX2ZpbGUpIHtcbiAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpbGUgPSBfZmlsZTtcbiAgICAgICAgdmFyIG9uS2V5ZG93biA9IGZ1bmN0aW9uIG9uS2V5ZG93bihlKSB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuaWQgPSAndXBsb2FkLWlmcmFtZS0nICsgZmlsZS5pZDtcbiAgICAgICAgaWZyYW1lLm5hbWUgPSAndXBsb2FkLWlmcmFtZS0nICsgZmlsZS5pZDtcbiAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOjFweDtoZWlnaHQ6MXB4O3RvcDotOTk5ZW07cG9zaXRpb246YWJzb2x1dGU7IG1hcmdpbi10b3A6LTk5OWVtOycpO1xuXG4gICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgICAgIGZvcm0uYWN0aW9uID0gZmlsZS5wb3N0QWN0aW9uO1xuXG4gICAgICAgIGZvcm0ubmFtZSA9ICd1cGxvYWQtZm9ybS0nICsgZmlsZS5pZDtcblxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ1BPU1QnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICd1cGxvYWQtaWZyYW1lLScgKyBmaWxlLmlkKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2VuY3R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGlucHV0ID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmlsZS5kYXRhKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWxlLmRhdGFba2V5XTtcbiAgICAgICAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBrZXk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlsZS5lbCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIHZhciBnZXRSZXNwb25zZURhdGEgPSBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGEoKSB7XG4gICAgICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICAgIGRvYyA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICBpZiAoIWRvYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZG9jID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudCA/IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgOiBpZnJhbWUuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgZG9jID0gaWZyYW1lLmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZG9jICYmIGRvYy5ib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jLmJvZHkuaW5uZXJIVE1MO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZmlsZSA9IF90aGlzNS51cGRhdGUoZmlsZSwgeyBpZnJhbWU6IGlmcmFtZSB9KTtcblxuICAgICAgICAgICAgLy8g5LiN5a2Y5ZyoXG4gICAgICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnbm90X2V4aXN0cycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlrprml7bmo4Dmn6VcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZmlsZSA9IF90aGlzNS5nZXQoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChmaWxlICYmIGZpbGUuZmlsZU9iamVjdCAmJiAhZmlsZS5zdWNjZXNzICYmICFmaWxlLmVycm9yICYmIGZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmcmFtZS5vbmFib3J0KHsgdHlwZTogZmlsZSA/ICdhYm9ydCcgOiAnbm90X2V4aXN0cycgfSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICB2YXIgY29tcGxldGUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiBmbihlKSB7XG4gICAgICAgICAgICAgIC8vIOW3sue7j+WkhOeQhui/h+S6hlxuICAgICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGludGVydmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDlhbPpl60gZXNjIOS6i+S7tlxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuXG4gICAgICAgICAgICAgIGZpbGUgPSBfdGhpczUuZ2V0KGZpbGUpO1xuXG4gICAgICAgICAgICAgIC8vIOS4jeWtmOWcqOebtOaOpeWTjeW6lFxuICAgICAgICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdub3RfZXhpc3RzJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDkuI3mmK/mlofku7blr7nosaFcbiAgICAgICAgICAgICAgaWYgKCFmaWxlLmZpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdmaWxlX29iamVjdCcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8g5pyJ6ZSZ6K+v6Ieq5Yqo5ZON5bqUXG4gICAgICAgICAgICAgIGlmIChmaWxlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChmaWxlLmVycm9yKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIOacqua/gOa0u1xuICAgICAgICAgICAgICBpZiAoIWZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnYWJvcnQnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIOW3suWujOaIkCDnm7TmjqXnm7jlupRcbiAgICAgICAgICAgICAgaWYgKGZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gZ2V0UmVzcG9uc2VEYXRhKCk7XG4gICAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICdhYm9ydCc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gZmlsZS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lcnJvciA9ICduZXR3b3JrJztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZXJyb3IgPSAnZGVuaWVkJztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gZmlsZS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVycm9yID0gJ25ldHdvcmsnO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm9ncmVzcyA9ICcxMDAuMDAnO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN1YnN0cigwLCAxKSA9PT0gJ3snICYmIHJlc3BvbnNlLnN1YnN0cihyZXNwb25zZS5sZW5ndGggLSAxLCAxKSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyDmm7TmlrBcbiAgICAgICAgICAgICAgZmlsZSA9IF90aGlzNS51cGRhdGUoZmlsZSwgZGF0YSk7XG5cbiAgICAgICAgICAgICAgaWYgKGZpbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGZpbGUuZXJyb3IpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8g5ZON5bqUXG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5LqL5Lu2XG4gICAgICAgICAgICBpZnJhbWUub25sb2FkID0gZm47XG4gICAgICAgICAgICBpZnJhbWUub25lcnJvciA9IGZuO1xuICAgICAgICAgICAgaWZyYW1lLm9uYWJvcnQgPSBmbjtcblxuICAgICAgICAgICAgLy8g56aB5q2iIGVzYyDplK5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG5cbiAgICAgICAgICAgIC8vIOaPkOS6pFxuICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmcmFtZS5wYXJlbnROb2RlICYmIGlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmcmFtZS5wYXJlbnROb2RlICYmIGlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgd2F0Y2hBY3RpdmU6IGZ1bmN0aW9uIHdhdGNoQWN0aXZlKGFjdGl2ZSkge1xuICAgICAgICB2YXIgZmlsZSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGZpbGUgPSB0aGlzLmZpbGVzW2luZGV4XSkge1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgaWYgKCFmaWxlLmZpbGVPYmplY3QpIDsgZWxzZSBpZiAoYWN0aXZlICYmICF0aGlzLmRlc3Ryb3kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZGluZyA+PSB0aGlzLnRocmVhZCB8fCB0aGlzLnVwbG9hZGluZyAmJiAhdGhpcy5mZWF0dXJlcy5odG1sNSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZmlsZS5hY3RpdmUgJiYgIWZpbGUuZXJyb3IgJiYgIWZpbGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShmaWxlLCB7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlKGZpbGUsIHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXBsb2FkaW5nID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHdhdGNoRHJvcDogZnVuY3Rpb24gd2F0Y2hEcm9wKF9lbCkge1xuICAgICAgICB2YXIgZWwgPSBfZWw7XG4gICAgICAgIGlmICghdGhpcy5mZWF0dXJlcy5kcm9wKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56e76Zmk5oyC6L29XG4gICAgICAgIGlmICh0aGlzLmRyb3BFbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMub25EcmFnZW50ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMub25EcmFnbGVhdmUsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRyb3BFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5vbkRyYWdvdmVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRyb3BFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRHJvcCwgZmFsc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgZWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSB8fCB0aGlzLiRyb290LiRlbC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVsID0gdGhpcy4kcGFyZW50LiRlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJvcEVsZW1lbnQgPSBlbDtcblxuICAgICAgICBpZiAodGhpcy5kcm9wRWxlbWVudCkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMub25EcmFnZW50ZXIsIGZhbHNlKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLm9uRHJhZ2xlYXZlLCBmYWxzZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRyb3BFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5vbkRyYWdvdmVyLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5kcm9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5vbkRyb3AsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRHJhZ2VudGVyOiBmdW5jdGlvbiBvbkRyYWdlbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3BBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmRyb3BBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25EcmFnbGVhdmU6IGZ1bmN0aW9uIG9uRHJhZ2xlYXZlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBlLnRhcmdldCA9PT0gZS5leHBsaWNpdE9yaWdpbmFsVGFyZ2V0IHx8IGUuc2NyZWVuWCA9PT0gMCAmJiBlLnNjcmVlblkgPT09IDAgJiYgIWUuZnJvbUVsZW1lbnQgJiYgZS5vZmZzZXRYIDw9IDApIHtcbiAgICAgICAgICB0aGlzLmRyb3BBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRHJhZ292ZXI6IGZ1bmN0aW9uIG9uRHJhZ292ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgb25Eb2N1bWVudERyb3A6IGZ1bmN0aW9uIG9uRG9jdW1lbnREcm9wKCkge1xuICAgICAgICB0aGlzLmRyb3BBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBvbkRyb3A6IGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGREYXRhVHJhbnNmZXIoZS5kYXRhVHJhbnNmZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgX192dWVfc2NyaXB0X18kMSA9IHNjcmlwdCQxO1xuXG4gIC8qIHRlbXBsYXRlICovXG4gIHZhciBfX3Z1ZV9yZW5kZXJfXyQxID0gZnVuY3Rpb24gX192dWVfcmVuZGVyX18oKSB7XG4gICAgdmFyIF92bSA9IHRoaXM7dmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtyZXR1cm4gX2MoJ2xhYmVsJywgeyBjbGFzczogX3ZtLmNsYXNzTmFtZSB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0LWZpbGUnKV0sIDIpO1xuICB9O1xuICB2YXIgX192dWVfc3RhdGljUmVuZGVyRm5zX18kMSA9IFtdO1xuXG4gIHZhciBfX3Z1ZV90ZW1wbGF0ZV9fJDEgPSB0eXBlb2YgX192dWVfcmVuZGVyX18kMSAhPT0gJ3VuZGVmaW5lZCcgPyB7IHJlbmRlcjogX192dWVfcmVuZGVyX18kMSwgc3RhdGljUmVuZGVyRm5zOiBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyQxIH0gOiB7fTtcbiAgLyogc3R5bGUgKi9cbiAgdmFyIF9fdnVlX2luamVjdF9zdHlsZXNfXyQxID0gZnVuY3Rpb24gKGluamVjdCkge1xuICAgIGlmICghaW5qZWN0KSByZXR1cm47XG4gICAgaW5qZWN0KFwiZGF0YS12LTAwYzk3YzA0XzBcIiwgeyBzb3VyY2U6IFwiXFxuLmZpbGUtdXBsb2Fkc3tvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2tcXG59XFxuLmZpbGUtdXBsb2Fkcy5maWxlLXVwbG9hZHMtaHRtbDQgaW5wdXRbdHlwZT1maWxlXXtvcGFjaXR5OjA7Zm9udC1zaXplOjIwZW07ei1pbmRleDoxO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcXG59XFxuLmZpbGUtdXBsb2Fkcy5maWxlLXVwbG9hZHMtaHRtbDUgaW5wdXRbdHlwZT1maWxlXXtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246Zml4ZWQ7d2lkdGg6MXB4O2hlaWdodDoxcHg7ei1pbmRleDotMTtvcGFjaXR5OjBcXG59XCIsIG1hcDogdW5kZWZpbmVkLCBtZWRpYTogdW5kZWZpbmVkIH0pO1xuICB9O1xuICAvKiBzY29wZWQgKi9cbiAgdmFyIF9fdnVlX3Njb3BlX2lkX18kMSA9IHVuZGVmaW5lZDtcbiAgLyogbW9kdWxlIGlkZW50aWZpZXIgKi9cbiAgdmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18kMSA9IHVuZGVmaW5lZDtcbiAgLyogZnVuY3Rpb25hbCB0ZW1wbGF0ZSAqL1xuICB2YXIgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fJDEgPSBmYWxzZTtcbiAgLyogY29tcG9uZW50IG5vcm1hbGl6ZXIgKi9cbiAgZnVuY3Rpb24gX192dWVfbm9ybWFsaXplX18kMSh0ZW1wbGF0ZSwgc3R5bGUsIHNjcmlwdCwgc2NvcGUsIGZ1bmN0aW9uYWwsIG1vZHVsZUlkZW50aWZpZXIsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUikge1xuICAgIHZhciBjb21wb25lbnQgPSBzY3JpcHQgfHwge307XG5cbiAgICBpZiAoIWNvbXBvbmVudC5yZW5kZXIpIHtcbiAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSB0ZW1wbGF0ZS5yZW5kZXI7XG4gICAgICBjb21wb25lbnQuc3RhdGljUmVuZGVyRm5zID0gdGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgY29tcG9uZW50Ll9jb21waWxlZCA9IHRydWU7XG5cbiAgICAgIGlmIChmdW5jdGlvbmFsKSBjb21wb25lbnQuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50Ll9zY29wZUlkID0gc2NvcGU7XG5cbiAgICB7XG4gICAgICB2YXIgaG9vayA9IHZvaWQgMDtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBob29rID0gZnVuY3Rpb24gaG9vayhjb250ZXh0KSB7XG4gICAgICAgICAgc3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChob29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gY29tcG9uZW50LnJlbmRlcjtcbiAgICAgICAgICBjb21wb25lbnQucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgdmFyIGV4aXN0aW5nID0gY29tcG9uZW50LmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICBjb21wb25lbnQuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgKi9cbiAgZnVuY3Rpb24gX192dWVfY3JlYXRlX2luamVjdG9yX18kMSgpIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB2YXIgc3R5bGVzID0gX192dWVfY3JlYXRlX2luamVjdG9yX18kMS5zdHlsZXMgfHwgKF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fJDEuc3R5bGVzID0ge30pO1xuICAgIHZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXFxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFkZFN0eWxlKGlkLCBjc3MpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIGlkICsgJ1wiXScpKSByZXR1cm47IC8vIFNTUiBzdHlsZXMgYXJlIHByZXNlbnQuXG5cbiAgICAgIHZhciBncm91cCA9IGlzT2xkSUUgPyBjc3MubWVkaWEgfHwgJ2RlZmF1bHQnIDogaWQ7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbZ3JvdXBdIHx8IChzdHlsZXNbZ3JvdXBdID0geyBpZHM6IFtdLCBwYXJ0czogW10sIGVsZW1lbnQ6IHVuZGVmaW5lZCB9KTtcblxuICAgICAgaWYgKCFzdHlsZS5pZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIHZhciBjb2RlID0gY3NzLnNvdXJjZTtcbiAgICAgICAgdmFyIGluZGV4ID0gc3R5bGUuaWRzLmxlbmd0aDtcblxuICAgICAgICBzdHlsZS5pZHMucHVzaChpZCk7XG5cbiAgICAgICAgaWYgKGNzcy5tYXApIHtcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAgICAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgICAgICAgY29kZSArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgY3NzLm1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG4gICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICAgICAgICBjb2RlICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3MubWFwKSkpKSArICcgKi8nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50ID0gc3R5bGUuZWxlbWVudCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLWdyb3VwPScgKyBncm91cCArICddJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0eWxlLmVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZWwgPSBzdHlsZS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICAgIGlmIChjc3MubWVkaWEpIGVsLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjc3MubWVkaWEpO1xuICAgICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnLCBncm91cCk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcsICcwJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoc3R5bGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcpKTtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHlsZS5lbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5wYXJ0cy5wdXNoKGNvZGUpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGUucGFydHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpO1xuICAgICAgICAgIHZhciBub2RlcyA9IHN0eWxlLmVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICBpZiAobm9kZXNbaW5kZXhdKSBzdHlsZS5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGVzW2luZGV4XSk7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkgc3R5bGUuZWxlbWVudC5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGVzW2luZGV4XSk7ZWxzZSBzdHlsZS5lbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgLyogc3R5bGUgaW5qZWN0IFNTUiAqL1xuXG4gIHZhciBGaWxlVXBsb2FkID0gX192dWVfbm9ybWFsaXplX18kMShfX3Z1ZV90ZW1wbGF0ZV9fJDEsIF9fdnVlX2luamVjdF9zdHlsZXNfXyQxLCB0eXBlb2YgX192dWVfc2NyaXB0X18kMSA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IF9fdnVlX3NjcmlwdF9fJDEsIF9fdnVlX3Njb3BlX2lkX18kMSwgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fJDEsIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18kMSwgdHlwZW9mIF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fJDEgIT09ICd1bmRlZmluZWQnID8gX192dWVfY3JlYXRlX2luamVjdG9yX18kMSA6IGZ1bmN0aW9uICgpIHt9LCB0eXBlb2YgX192dWVfY3JlYXRlX2luamVjdG9yX3Nzcl9fICE9PSAndW5kZWZpbmVkJyA/IF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9zc3JfXyA6IGZ1bmN0aW9uICgpIHt9KTtcblxuICB2YXIgRmlsZVVwbG9hZCQxID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGRlZmF1bHQ6IEZpbGVVcGxvYWRcbiAgfSk7XG5cbiAgdmFyIHJlcXVpcmUkJDAgPSAoIEZpbGVVcGxvYWQkMSAmJiBGaWxlVXBsb2FkICkgfHwgRmlsZVVwbG9hZCQxO1xuXG4gIHZhciBzcmMgPSByZXF1aXJlJCQwO1xuXG4gIHJldHVybiBzcmM7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtdXBsb2FkLWNvbXBvbmVudC9kaXN0L3Z1ZS11cGxvYWQtY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaXNPcHRpb25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJmaWxlLXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuIHYtYnRuLS1mbGF0IHRoZW1lLS1kYXJrIGJsdWUtLXRleHQgbXgtNSBweS0yXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcInBvc3QtYWN0aW9uXCI6IF92bS5wb3N0QWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBcInB1dC1hY3Rpb25cIjogX3ZtLnB1dEFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpbGVLZXksXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IF92bS5leHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IF92bS5hY2NlcHQsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBfdm0ubXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogX3ZtLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogX3ZtLnNpemUgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS50aHJlYWQgPCAxID8gMSA6IF92bS50aHJlYWQgPiA1ID8gNSA6IF92bS50aHJlYWQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZHJvcDogX3ZtLmRyb3AsXG4gICAgICAgICAgICAgICAgICAgIFwiZHJvcC1kaXJlY3RvcnlcIjogX3ZtLmRyb3BEaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkLWluZGV4XCI6IF92bS5hZGRJbmRleFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtZmlsdGVyXCI6IF92bS5pbnB1dEZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1maWxlXCI6IF92bS5pbnB1dEZpbGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGVzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIENob29zZSBGaWxlc1xcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBcInJlZCBkYXJrZW4tNFwiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzT3B0aW9uID0gIV92bS5pc09wdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X2JhY2tcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5pc09wdGlvblxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaWNvbjogXCJcIiwgY29sb3I6IFwiYW1iZXIgbGlnaHRlbi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNPcHRpb24gPSAhX3ZtLmlzT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmEtY29nXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uaXNPcHRpb25cbiAgICAgICAgPyBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0udGgsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZmlsZXMsXG4gICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtaXRlbXNcIjogX3ZtLnBlclBhZ2VEYXRhLFxuICAgICAgICAgICAgICBcIm5vLWRhdGEtdGV4dFwiOiBcIkNsaWNrIGBDaG9vc2UgRmlsZXNgIEJ1dHRvbiBUbyBVcGxvYWQgRmlsZXMuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0udGh1bWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHByb3BzLml0ZW0udGh1bWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTm8gSW1hZ2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZWRpdC1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYXJnZTogXCJcIiwgbGF6eTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwcmltYXJ5LS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwidHJ1bmNhdGVcIikocHJvcHMuaXRlbS5uYW1lLCAyMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtMyB0ZXh0LXhzLWNlbnRlciB0aXRsZSBwcmltYXJ5LS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiaW5wdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVXBkYXRlIE5hbWVcXG4gICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbX3ZtLm1heElucHV0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLml0ZW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLl9mKFwiZm9ybWF0U2l6ZVwiKShwcm9wcy5pdGVtLnNpemUpKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdCBwcmltYXJ5LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmFjdGl2ZSB8fCBwcm9wcy5pdGVtLnByb2dyZXNzICE9PSBcIjAuMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXByb2dyZXNzLWNpcmN1bGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAzNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9ncmVzcyhwcm9wcy5pdGVtLnByb2dyZXNzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ0ZWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FwdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2dyZXNzKHByb3BzLml0ZW0ucHJvZ3Jlc3MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5lcnJvclxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5lcnJvcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5pdGVtLnN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIHN1Y2Nlc3NcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IHByaW1hcnktLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIGFjdGl2ZVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgcHJpbWFyeS0tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIHByaW1hcnktLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZCBkYXJrZW4tNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uJHJlZnMudXBsb2FkLnVwZGF0ZShwcm9wcy5pdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXRpbWVzXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5pdGVtLmVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5lcnJvciAhPT0gXCJjb21wcmVzc2luZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLnVwbG9hZC5mZWF0dXJlcy5odG1sNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy51cGxvYWQudXBkYXRlKHByb3BzLml0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXJlZnJlc2hcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJibHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5lcnJvciA9PT0gXCJjb21wcmVzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLiRyZWZzLnVwbG9hZC51cGRhdGUocHJvcHMuaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXVwbG9hZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkIGxpZ2h0ZW4tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVtb3ZlKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXRyYXNoXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmlzT3B0aW9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGVzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZXMubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInRlYWwgbGlnaHRlbi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy51cGxvYWQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgU3RhcnQgVXBsb2FkIFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgcGxheV9hcnJvd1xcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQ2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kcmVmcy51cGxvYWQgJiYgX3ZtLiRyZWZzLnVwbG9hZC5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHJlZnMudXBsb2FkICYmICRyZWZzLnVwbG9hZC5hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGFyazogXCJcIiwgYmxvY2s6IFwiXCIsIGZsYXQ6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMudXBsb2FkLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBTdG9wIFVwbG9hZCBcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIHN0b3BcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLnVwbG9hZCAmJlxuICAgICAgICAgICAgICAgICAgIV92bS4kcmVmcy51cGxvYWQuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgICBfdm0uZmlsZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWQgbGlnaHRlbi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBSZW1vdmUgQWxsIEZpbGVzIFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBmYS10cmFzaFxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNPcHRpb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9ycy5jb2xsZWN0KFwibWltZS10eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJmYS1maWxlLWNvZGUtbyBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY2NlcHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJBbGxvdyB1cGxvYWQgbWltZSB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcIm1pbWUtdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NlcHQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjY2VwdCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJleHRlbnNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImZhLWNvZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFeHRlbnNpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQWxsb3cgdXBsb2FkIGZpbGUgZXh0ZW5zaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImV4dGVuc2lvblwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5leHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRlbnNpb25zID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJodHRwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUHV0IFVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEaXNhYmxlZCBpZiBFbXB0eSwgQWZ0ZXIgdGhlIHNodXRkb3duLCB1c2UgdGhlIFBPU1QgbWV0aG9kIHRvIHVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnB1dEFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHV0QWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInB1dEFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvcnMuY29sbGVjdChcInBvc3QtdXJsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJodHRwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUG9zdCBVcmxcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJEZWZhdWx0IFBvc3QgVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInBvc3QtdXJsXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3RBY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RBY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdEFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG51bWVyaWN8bWluX3ZhbHVlOjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfG51bWVyaWN8bWluX3ZhbHVlOjEnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJ0aHJlYWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImZhLWN1YmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGhyZWFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFsc28gdXBsb2FkIHRoZSBudW1iZXIgb2YgZmlsZXMgYXQgdGhlIHNhbWUgdGltZSAobnVtYmVyIG9mIHRocmVhZHMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInRocmVhZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50aHJlYWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRocmVhZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JzLmNvbGxlY3QoXCJtYXgtc2l6ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwidHJlbmRpbmdfdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNYXggc2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlNpemUgVW5pdCBpbiBieXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcIm1heC1zaXplXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNpemUgPSBfdm0uX24oJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9ycy5jb2xsZWN0KFwibWluLXNpemVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInRyZW5kaW5nX2Rvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNaW4gc2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlNpemUgVW5pdCBpbiBieXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcIm1pbi1zaXplXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1pblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1pblNpemUgPSBfdm0uX24oJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtaW5TaXplXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9ycy5jb2xsZWN0KFwiYXV0by1jb21wcmVzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwiZmEtY29tcHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRvbWF0aWNhbGx5IGNvbXByZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYXV0by1jb21wcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hdXRvQ29tcHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF1dG9Db21wcmVzcyA9IF92bS5fbigkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImF1dG9Db21wcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hdXRvQ29tcHJlc3MgPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleS0tdGV4dCBjYXB0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgTW9yZSB0aGFuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwiZm9ybWF0U2l6ZVwiKShfdm0uYXV0b0NvbXByZXNzKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGZpbGVzIGFyZSBhdXRvbWF0aWNhbGx5IGNvbXByZXNzZWRcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleS0tdGV4dCBjYXB0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBTZXQgdXAgYXV0b21hdGljIGNvbXByZXNzaW9uXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRHJhZyBhbmQgZHJvcCB1cGxvYWQ6IFwiICsgX3ZtLmRyb3AudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZHJvcCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkcm9wXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5vdCBjaGVja2VkLCBmaWx0ZXIgdGhlIGRyYWdnZWQgZm9sZGVyOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZHJvcERpcmVjdG9yeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kcm9wRGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kcm9wRGlyZWN0b3J5ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRyb3BEaXJlY3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0b21hdGljYWxseSBhY3RpdmF0ZSB1cGxvYWQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cGxvYWRBdXRvLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVwbG9hZEF1dG8sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVwbG9hZEF1dG8gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXBsb2FkQXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZmM2Nzk0YWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWZjNjc5NGFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZGlhbG9nXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogXCJcIiwgdHJhbnNpdGlvbjogXCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIiB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5tb2RhbCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS5tb2RhbCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpZ2h0OiB0cnVlIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBsaWdodGVuLTJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZUdhbGxlcnlNb2RhbCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X2JhY2tcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlVwbG9hZCBJbWFnZXMgUElEOiBcIiArIF92bS5fcyhfdm0uaWQpICsgXCIgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVwbG9hZHNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2luZ2xlOiBfdm0uc2luZ2xlLFxuICAgICAgICAgICAgICBcInBvc3QtdXJsXCI6IF92bS5wb3N0VXJsLFxuICAgICAgICAgICAgICBcImZpbGUta2V5XCI6IF92bS5maWxlS2V5LFxuICAgICAgICAgICAgICBpdGVtOiBfdm0uaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMzBhODVmMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjMwYTg1ZjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9QYWNrYWdlSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZjk1ODVkN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBmOTU4NWQ3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZjk1ODVkN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBmOTU4NWQ3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2Fkcy9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBmOTU4NWQ3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNjMmFiMmNmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZjk1ODVkN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYW1hZ2VkSW1hZ2VzVXBsb2FkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBmOTU4NWQ3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGY5NTg1ZDdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWRzL0RhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMTcgMTggMTkgMjAgMjEgMjIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkRhbWFnZWRJbWFnZXNVcGxvYWRlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wZjk1ODVkN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsIjx0ZW1wbGF0ZT5cbiAgPHYtZGlhbG9nIFxuICAgIHYtbW9kZWw9XCJtb2RhbFwiIFxuICAgIGZ1bGxzY3JlZW4gXG4gICAgdHJhbnNpdGlvbj1cImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiPlxuICAgIDx2LWNhcmQgOmxpZ2h0PVwidHJ1ZVwiPlxuICAgICAgPHYtdG9vbGJhciBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgIDx2LWJ0biBcbiAgICAgICAgICBpY29uIFxuICAgICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIiBcbiAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgIDx2LWljb24+YXJyb3dfYmFjazwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwid2hpdGUtLXRleHRcIj5VcGxvYWQgRGFtYWdlZCBJbWFnZXMgUElEOiB7eyBpZCB9fTwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8dXBsb2FkcyBcbiAgICAgICAgOnNpbmdsZT1cInNpbmdsZVwiXG4gICAgICAgIDpwb3N0LXVybD1cInBvc3RVcmxcIiBcbiAgICAgICAgOmZpbGUta2V5PVwiZmlsZUtleVwiXG4gICAgICAgIDppdGVtPVwiaXRlbVwiLz5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXBsb2FkcyBmcm9tIFwiQ29tcG9uZW50cy9VcGxvYWRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIHVwbG9hZHNcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGl0ZW06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHNpbmdsZTogZmFsc2UsXG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIGZpbGVLZXk6IFwiZGFtYWdlZF9pbWFnZXNcIlxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwb3N0VXJsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGlkID0gc2VsZi5pZDtcbiAgICAgIHJldHVybiByb3V0ZShcImFwaS5wYWNrYWdlLnVwbG9hZERhbWFnZUltYWdlXCIsIHsgaWQgfSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKGB1cGxvYWQtZGFtYWdlZC1pbWFnZXMtJHt0aGlzLml0ZW0uaWR9YCwgKCkgPT4ge1xuICAgICAgc2VsZi5tb2RhbCA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWRpYWxvZ1wiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IFwiXCIsIHRyYW5zaXRpb246IFwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCIgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0ubW9kYWwsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0ubW9kYWwgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgeyBhdHRyczogeyBsaWdodDogdHJ1ZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcImVycm9yXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJVcGxvYWQgRGFtYWdlZCBJbWFnZXMgUElEOiBcIiArIF92bS5fcyhfdm0uaWQpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1cGxvYWRzXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNpbmdsZTogX3ZtLnNpbmdsZSxcbiAgICAgICAgICAgICAgXCJwb3N0LXVybFwiOiBfdm0ucG9zdFVybCxcbiAgICAgICAgICAgICAgXCJmaWxlLWtleVwiOiBfdm0uZmlsZUtleSxcbiAgICAgICAgICAgICAgaXRlbTogX3ZtLml0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGY5NTg1ZDdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBmOTU4NWQ3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZHMvRGFtYWdlZEltYWdlc1VwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAxNyAxOCAxOSAyMCAyMSAyMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiLCBcInBhLTNcIjogXCJcIiwgXCJtYS0zXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaWNvbjogXCJcIiwgY29sb3I6IFwiYmx1ZSBsaWdodGVuLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGROZXdQYWNrYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IFwieC1sYXJnZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiYWRkX2NpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaWNvbjogXCJcIiwgY29sb3I6IFwiZ3JlZW4gbGlnaHRlbi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvbmVQYWNrYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IFwieC1sYXJnZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZmlsZV9jb3B5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW1kLWNlbnRlciB3aGl0ZS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkl0ZW0gXCIgKyBfdm0uX3MoX3ZtLmluZGV4KSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVQYWNrYWdlKF92bS5pdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgXCJ4LWxhcmdlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIsIFwiZ3JpZC1saXN0LW1kXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIsIFwicGEtMlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3R5bGUgTm8uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJPcHRpb25hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnN0eWxlX25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic3R5bGVfbm9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc3R5bGVfbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImBwYWNrYWdlcy4ke2luZGV4fS5kZXNjcmlwdGlvbmBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJSZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJdGVtIERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJkZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImtleWJvYXJkX3RhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk9wdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGVuZ3RoXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiV2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcImZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwic3dhcF9ob3JpelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk9wdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJ3aWR0aFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS53aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInN3YXBfdmVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk9wdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiaGVpZ2h0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmN1YmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmN1YmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDdWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJmdMKzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZmEtY3ViZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uY3ViZWBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJSZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmN1YmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJjdWJlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmN1YmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmJpbl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmJpbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5iaW5faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcImNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNob29zZSBCaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwidmlld19jb21meVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uYmluX2lkYFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNob29zZSBCaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaW5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaW5faWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmluX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5zdG9yZV9hdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnN0b3JlX2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIuc3RvcmVfYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RvcmUgQXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZG5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5zdG9yZV9hdGBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDaG9vc2UgU3RvcmUgQXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5zdG9yZV9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInN0b3JlX2F0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnN0b3JlX2F0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5oYW5kbGluZ190eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaGFuZGxpbmdSYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmhhbmRsaW5nX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNob29zZSBIYW5kbGluZyBOb3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInJlY2VpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImBwYWNrYWdlcy4ke2l0ZXJhdGlvbn0uaGFuZGxpbmdfdHlwZWBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDaG9vc2UgSGFuZGxpbmcgTm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmhhbmRsaW5nX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJoYW5kbGluZ190eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmhhbmRsaW5nX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS5nZXREYW1hZ2VTdGF0dXMoX3ZtLml0ZW0uZGFtYWdlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZGFtYWdlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRhbWFnZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZGFtYWdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXRlbS5kYW1hZ2VkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiLCBtZDQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZDogaXRlbS5kYW1hZ2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkOiBpdGVtLmRhbWFnZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVyYXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmRhbWFnZV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVyYXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmRhbWFnZV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJSZXF1aXJlZCBJZiBNYXJrZWQgQXMgRGFtYWdlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhbWFnZV9kZXNjcmlwdGlvbmBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEYW1hZ2VkIERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZGFtYWdlX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJkYW1hZ2VfZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiwgXCJwYS0yXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kNjogXCJcIiwgXCJweC0zXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJsb2NrOiBcIlwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3SW1hZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFZpZXcgSXRlbSBJbWFnZXNcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgaW1hZ2VcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJsb2NrOiBcIlwiLCBjb2xvcjogXCJibHVlXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlblBhY2thZ2VJbWFnZXNNb2RhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBVcGxvYWQgUGFja2FnZSBJbWFnZXMgXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJhZGRfcGhvdG9fYWx0ZXJuYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYWNrYWdlLWltYWdlcy11cGxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLml0ZW0uaWQsIGl0ZW06IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmRhbWFnZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kNjogXCJcIiwgXCJweC0zXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3RGFtYWdlSW1hZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFZpZXcgRGFtYWdlIEltYWdlc1xcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBicm9rZW5faW1hZ2VcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuRGFtYWdlZEltYWdlc01vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFVwbG9hZCBEYW1hZ2VkIEltYWdlcyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImJyb2tlbl9pbWFnZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRhbWFnZWQtaW1hZ2VzLXVwbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLml0ZW0uaWQsIGl0ZW06IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQ4OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgTm90ZXM6XFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlcy5cIiArIF92bS5pdGVyYXRpb24gKyBcIi5ub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZXMuXCIgKyBfdm0uaXRlcmF0aW9uICsgXCIubm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IFwiMjU1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIk9wdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiYHBhY2thZ2VzLiR7aXRlcmF0aW9ufS5ub3Rlc2BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcIm5vdGVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLm5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmRhbWFnZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtMTI6IFwiXCIsIG1kMjogXCJcIiwgXCJvcmRlci1tZDJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgSXMgSXRlbSBSZXBhaXJlZD9cXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uZ2V0UmVwYWlyZWRTdGF0dXMoX3ZtLml0ZW0ucmVwYWlyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnJlcGFpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJyZXBhaXJlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnJlcGFpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXRlbS5yZXBhaXJlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc20xMjogXCJcIiwgbWQyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXN1YmhlYWRlclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBXaGVuIGlzIGl0IFJlcGFpcmVkP1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmRhdGVfcmVwYWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0ucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VzLlwiICsgX3ZtLml0ZXJhdGlvbiArIFwiLmRhdGVfcmVwYWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgUmVwYWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRfbm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJgcGFja2FnZXMuJHtpdGVyYXRpb259LmRhdGVfcmVwYWlyZWRgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuRGF0ZVJlcGFpcmVkTW9kYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5kYXRlX3JlcGFpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJkYXRlX3JlcGFpcmVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJkYXRlX3JlcGFpcmVkX1wiICsgX3ZtLml0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uaXRlbS5kYXRlX3JlcGFpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjkwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImRhdGVfcmVwYWlyZWRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX3JlcGFpcmVkX21vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcmVwYWlyZWRfbW9kYWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX3JlcGFpcmVkX21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5kYXRlX3JlcGFpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJkYXRlX3JlcGFpcmVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZGF0ZV9yZXBhaXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9yZXBhaXJlZF9tb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uZGF0ZV9yZXBhaXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPS1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbWFnZXNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiXCIgKyBfdm0uaXRlbS5pZCwgaW1hZ2VzOiBfdm0uaXRlbS5wYWNrYWdlX2ltYWdlcyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRhbWFnZS1pbWFnZXNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiXCIgKyBfdm0uaXRlbS5pZCwgaW1hZ2VzOiBfdm0uaXRlbS5kYW1hZ2VkX2ltYWdlcyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTEwMGMyMWNhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xMDBjMjFjYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvUGFja2FnZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDE3IDE4IDE5IDIwIDIxIDIyIiwiPHRlbXBsYXRlPlxuICA8bW9kYWwtbGF5b3V0IGNsYXNzPVwid2hpdGVcIj5cbiAgICA8di1jYXJkIDpmbGF0PVwidHJ1ZVwiPlxuICAgICAgPHYtdG9vbGJhciBcbiAgICAgICAgZml4ZWQgXG4gICAgICAgIGFwcCBcbiAgICAgICAgY2xhc3M9XCJwcmltYXJ5XCJcbiAgICAgID5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgaWNvbiBcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwicmVkaXJlY3RCYWNrKClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciB3aGl0ZS0tdGV4dFwiPkNyZWF0ZSBOZXcgRFNHPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItaXRlbXM+XG4gICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICA6bG9hZGluZz1cImZvcm0uYnVzeVwiIFxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZXJyb3JzLmFueSgpIHx8IGZvcm0uYnVzeVwiXG4gICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cInN1Ym1pdCgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8di1pY29uIHJpZ2h0PnNhdmU8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtdG9vbGJhci1pdGVtcz5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXBcbiAgICAgICAgbXktMFxuICAgICAgICBweS0wXG4gICAgICAgIG14LTNcbiAgICAgICAgcHgtM1xuICAgICAgPlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzRcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmN1c3RvbWVyX25hbWVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnY3VzdG9tZXInKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnY3VzdG9tZXInKSB9XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgQ3VzdG9tZXIgTmFtZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImN1c3RvbWVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGc0XG4gICAgICAgID5cblxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNsaWVudF9uYW1lXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2NsaWVudCcpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdjbGllbnQnKSB9XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgQ2xpZW50IE5hbWVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtdXNlcnNcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiY2xpZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGc0XG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaGlwcGVyX25hbWVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnc2hpcHBlcicpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdzaGlwcGVyJykgfVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJUeXBlIFNoaXBwZXIgTmFtZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJmYS1zaGlwXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInNoaXBwZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgOml0ZW1zPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJlY2VpdmVkX2J5XCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3JlY2VpdmVkX2J5JylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ3JlY2VpdmVkX2J5JykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJSZWNlaXZlZCBCeVwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImhvd190b19yZWdcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwicmVjZWl2ZWRfYnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgOml0ZW1zPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLndyaXR0ZW5fYnlcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnd3JpdHRlbl9ieScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCd3cml0dGVuX2J5JykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJXcml0dGVuIEJ5XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBjaGlwc1xuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibG9jYWxfbGlicmFyeVwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJ3cml0dGVuX2J5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGczXG4gICAgICAgID5cbiAgICAgICAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgIDppdGVtcz1cImVtcGxveWVlc1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5pbnNwZWN0ZWRfYnlcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnaW5zcGVjdGVkX2J5JylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ2luc3BlY3RlZF9ieScpIH1cIlxuICAgICAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGxhYmVsPVwiSW5zcGVjdGVkIEJ5XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBjaGlwc1xuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImluc3BlY3RlZF9ieVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnM1xuICAgICAgICA+XG4gICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICA6aXRlbXM9XCJlbXBsb3llZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubG9jYXRlZF9ieVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCdsb2NhdGVkX2J5JylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ2xvY2F0ZWRfYnknKSB9XCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIkxvY2F0ZWQgQnlcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJwZXJzb25fcGluXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImxvY2F0ZWRfYnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwb19ub1wiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgbGFiZWw9XCJQTyBOby5cIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiYm9va21hcmtcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgbGcyPlxuICAgICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgcmVmPVwiZGF0ZV9yZWNlaXZlZFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9yZWNlaXZlZF9tb2RhbFwiXG4gICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlX3JlY2VpdmVkXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlX3JlY2VpdmVkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIFJlY2VpdmVkXCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRfYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8di1kYXRlLXBpY2tlciBcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVfcmVjZWl2ZWRcIiBcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGF0ZV9yZWNlaXZlZF9tb2RhbCA9IGZhbHNlXCI+Q2FuY2VsPC92LWJ0bj5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMuZGF0ZV9yZWNlaXZlZC5zYXZlKGRhdGVfcmVjZWl2ZWQpXCI+T0s8L3YtYnRuPlxuICAgICAgICAgICAgPC92LWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgbGcyPlxuICAgICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgcmVmPVwiZGF0ZV9wcm9jZXNzZWRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVfcHJvY2Vzc2VkX21vZGFsXCJcbiAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVfcHJvY2Vzc2VkXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlX3Byb2Nlc3NlZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBQcm9jZXNzZWRcIlxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJldmVudF9ub3RlXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8di1kYXRlLXBpY2tlciBcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVfcHJvY2Vzc2VkXCIgXG4gICAgICAgICAgICAgIHNjcm9sbGFibGU+XG4gICAgICAgICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIEBjbGljaz1cImRhdGVfcHJvY2Vzc2VkX21vZGFsID0gZmFsc2VcIj5DYW5jZWw8L3YtYnRuPlxuICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcmVmcy5kYXRlX3Byb2Nlc3NlZC5zYXZlKGRhdGVfcHJvY2Vzc2VkKVwiPk9LPC92LWJ0bj5cbiAgICAgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cbiAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB2LWlmPVwicGFja2FnZXMubGVuZ3RoPjBcIlxuICAgICAgICAgIHhzMTIgXG4gICAgICAgICAgbGczPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRvdGFsX3BpZWNlc1wiXG4gICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQaWVjZXNcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHYtaWY9XCJwYWNrYWdlcy5sZW5ndGg+MFwiXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBsZzM+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udG90YWxfY3ViZVwiXG4gICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBDdWJlXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImZhLWN1YmVzXCJcbiAgICAgICAgICAgIHN1ZmZpeD1cImZ0wrNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICAgIDwhLS0gUGFja2FnZXMgL0l0ZW0gRm9ybSAtLT5cbiAgICAgIDx2LWxheW91dCBcbiAgICAgICAgcm93IFxuICAgICAgICB3cmFwXG4gICAgICAgIG15LTBcbiAgICAgICAgcHktMFxuICAgICAgICBteC0zXG4gICAgICAgIHB4LTNcbiAgICAgID5cbiAgICAgICAgPHYtZmxleFxuICAgICAgICAgIHYtaWY9XCIhcGFja2FnZXMubGVuZ3RoPjBcIiBcbiAgICAgICAgICB4czEyXG4gICAgICAgID5cbiAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJlcnJvcnMuYW55KClcIlxuICAgICAgICAgICAgY29sb3I9XCJibHVlLWdyZXlcIlxuICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIlxuICAgICAgICAgICAgQGNsaWNrPVwiYWRkTmV3UGFja2FnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIE5ldyBQYWNrYWdlIDx2LWljb24gcmlnaHQ+bGlicmFyeV9hZGQ8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgXG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPCEtLSBQYWNrYWdlIEFyZWEgLS0+XG4gICAgICA8cGFja2FnZXMgXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sa2V5KSBpbiBwYWNrYWdlc1wiIFxuICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgOml0ZW09XCJpdGVtXCJcbiAgICAgICAgOmluZGV4PVwia2V5ICsgMVwiXG4gICAgICAgIDpwYWNrYWdlcz1cInBhY2thZ2VzXCJcbiAgICAgICAgOmJpbnM9XCJiaW5zXCJcbiAgICAgICAgOmhhbmRsaW5nLXJhdGVzPVwiaGFuZGxpbmdfcmF0ZXNcIlxuICAgICAgICA6c3RvcmFnZS1yYXRlcz1cInN0b3JhZ2VfcmF0ZXNcIlxuICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgLz5cbiAgICAgIDwhLS0gRW5kIFBhY2thZ2UgLS0+XG4gICAgPC92LWNhcmQ+XG5cbiAgPC9tb2RhbC1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1vZGFsTGF5b3V0IGZyb20gXCJMYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVwiO1xuaW1wb3J0IHZhbGlkYXRpb25FcnJvciBmcm9tIFwiTWl4aW5zL3ZhbGlkYXRpb24tZXJyb3JcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwidmZvcm1cIjtcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuaW1wb3J0IFBhY2thZ2VzIGZyb20gXCJDb21wb25lbnRzL2RzZy9QYWNrYWdlc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTW9kYWxMYXlvdXQsXG4gICAgUGFja2FnZXNcbiAgfSxcbiAgbWl4aW5zOiBbdmFsaWRhdGlvbkVycm9yXSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICAvKiBBbHdheXMgRGVjbGFyZSBZb3VyIEZvcm0gT2JqZWN0ICovXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGNsaWVudF9pZDogbnVsbCxcbiAgICAgIGNsaWVudF9uYW1lOiBudWxsLFxuICAgICAgY3VzdG9tZXJfaWQ6IG51bGwsXG4gICAgICBjdXN0b21lcl9uYW1lOiBudWxsLFxuICAgICAgc2hpcHBlcl9pZDogbnVsbCxcbiAgICAgIHNoaXBwZXJfbmFtZTogbnVsbCxcbiAgICAgIHJlY2VpdmVkX2J5OiBudWxsLFxuICAgICAgcmVjZWl2ZWRfYnlfbmFtZTogbnVsbCxcbiAgICAgIHdyaXR0ZW5fYnk6IG51bGwsXG4gICAgICB3cml0dGVuX2J5X25hbWU6IG51bGwsXG4gICAgICBpbnNwZWN0ZWRfYnk6IG51bGwsXG4gICAgICBpbnNwZWN0ZWRfYnlfbmFtZTogbnVsbCxcbiAgICAgIGxvY2F0ZWRfYnk6IG51bGwsXG4gICAgICBsb2NhdGVkX2J5X25hbWU6IG51bGwsXG4gICAgICB0b3RhbF9waWVjZXM6IDAsXG4gICAgICB0b3RhbF9jdWJlOiAwLFxuICAgICAgcmVjZWl2aW5nX2Ftb3VudDogMCxcbiAgICAgIHBhY2thZ2VzOiBbXVxuICAgIH0pLFxuICAgIHBvX25vOiBudWxsLFxuICAgIGRhdGVfcmVjZWl2ZWQ6IG51bGwsXG4gICAgYmluczogW10sXG4gICAgZGF0ZV9yZWNlaXZlZF9tb2RhbDogZmFsc2UsXG4gICAgZGF0ZV9wcm9jZXNzZWQ6IG51bGwsXG4gICAgZGF0ZV9wcm9jZXNzZWRfbW9kYWw6IGZhbHNlLFxuICAgIGVtcGxveWVlczogW10sXG4gICAgcGFja2FnZXM6IFtdLFxuICAgIGhhbmRsaW5nX3JhdGVzOiBbXSxcbiAgICBzdG9yYWdlX3JhdGVzOiBbXSxcbiAgfSksXG4gIHdhdGNoOiB7XG4gICAgcG9fbm86IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5wYWNrYWdlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0ucG9fbm8gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIGRhdGVfcmVjZWl2ZWQ6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5wYWNrYWdlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uZGF0ZV9yZWNlaXZlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH0sXG4gICAgZGF0ZV9wcm9jZXNzZWQ6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5wYWNrYWdlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgIHNlbGYucGFja2FnZXNbaV0uZGF0ZV9wcm9jZXNzZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIGJpbnM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIHBhY2thZ2VzOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuZm9ybS50b3RhbF9waWVjZXMgPSBuZXdWYWx1ZS5sZW5ndGg7XG4gICAgICAgIHNlbGYudXBkYXRlVG90YWxDdWJlKCk7XG4gICAgICAgIHNlbGYudXBkYXRlUmVjZWl2aW5nQW1vdW50KCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH0sXG4gICAgXCJmb3JtLnJlY2VpdmVkX2J5XCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld0lEKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAobmV3SUQgIT0gbnVsbCB8fCBuZXdJRCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoc2VsZi5lbXBsb3llZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gXy5maW5kKHNlbGYuZW1wbG95ZWVzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmlkID09IG5ld0lEO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZW1wbG95ZWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS5yZWNlaXZlZF9ieSA9IGVtcGxveWVlLmlkO1xuICAgICAgICAgICAgICBzZWxmLmZvcm0ucmVjZWl2ZWRfYnlfbmFtZSA9IGVtcGxveWVlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZm9ybS5yZWNlaXZlZF9ieSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLnJlY2VpdmVkX2J5X25hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9LFxuICAgIFwiZm9ybS53cml0dGVuX2J5XCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld0lEKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAobmV3SUQgIT0gbnVsbCB8fCBuZXdJRCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoc2VsZi5lbXBsb3llZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGVtcGxveWVlID0gXy5maW5kKHNlbGYuZW1wbG95ZWVzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmlkID09IG5ld0lEO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZW1wbG95ZWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS53cml0dGVuX2J5ID0gZW1wbG95ZWUuaWQ7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS53cml0dGVuX2J5X25hbWUgPSBlbXBsb3llZS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmZvcm0ud3JpdHRlbl9ieSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLndyaXR0ZW5fYnlfbmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLmluc3BlY3RlZF9ieVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdJRCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG5ld0lEICE9IG51bGwgfHwgbmV3SUQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHNlbGYuZW1wbG95ZWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IF8uZmluZChzZWxmLmVtcGxveWVlcywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PSBuZXdJRDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVtcGxveWVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLmZvcm0uaW5zcGVjdGVkX2J5ID0gZW1wbG95ZWUuaWQ7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS5pbnNwZWN0ZWRfYnlfbmFtZSA9IGVtcGxveWVlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZm9ybS5pbnNwZWN0ZWRfYnkgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5pbnNwZWN0ZWRfYnlfbmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLmxvY2F0ZWRfYnlcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3SUQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChuZXdJRCAhPSBudWxsIHx8IG5ld0lEICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmVtcGxveWVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBfLmZpbmQoc2VsZi5lbXBsb3llZXMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuaWQgPT0gbmV3SUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbXBsb3llZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmxvY2F0ZWRfYnkgPSBlbXBsb3llZS5pZDtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmxvY2F0ZWRfYnlfbmFtZSA9IGVtcGxveWVlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZm9ybS5sb2NhdGVkX2J5ID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0ubG9jYXRlZF9ieV9uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0RW1wbG95ZWVzKCk7XG4gICAgdGhpcy5nZXRCaW5zKCk7XG4gICAgdGhpcy5nZXRIYW5kbGluZ1JhdGVzKCk7XG4gICAgdGhpcy5nZXRTdG9yYWdlUmF0ZXMoKTtcbiAgICB0aGlzLmRhdGVfcmVjZWl2ZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIHRoaXMuZGF0ZV9wcm9jZXNzZWQgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlUmVjZWl2aW5nQW1vdW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHRvdGFsID0gc2VsZi5wYWNrYWdlcy5sZW5ndGg7XG4gICAgICBsZXQgcmVjZWl2aW5nQW1vdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICByZWNlaXZpbmdBbW91bnQgKz0gc2VsZi5wYWNrYWdlc1tpXS5oYW5kbGluZ19mZWU7XG4gICAgICB9XG4gICAgICBzZWxmLmZvcm0ucmVjZWl2aW5nX2Ftb3VudCA9IHJlY2VpdmluZ0Ftb3VudDtcbiAgICB9LFxuICAgIHVwZGF0ZVRvdGFsQ3ViZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCB0b3RhbCA9IHRoaXMucGFja2FnZXMubGVuZ3RoO1xuICAgICAgbGV0IHRvdGFsQ3ViZSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgdG90YWxDdWJlID0gdG90YWxDdWJlICsgTnVtYmVyKHNlbGYucGFja2FnZXNbaV0uY3ViZSk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuZm9ybS50b3RhbF9jdWJlID0gdG90YWxDdWJlO1xuICAgIH0sXG4gICAgZ2V0SGFuZGxpbmdSYXRlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGF4aW9zLmdldChyb3V0ZShcImFwaS5kc2cuZ2V0SGFuZGxpbmdSYXRlc1wiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNlbGYuaGFuZGxpbmdfcmF0ZXMgPSByZXNwb25zZS5kYXRhLnJhdGVzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRTdG9yYWdlUmF0ZXMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBheGlvcy5nZXQocm91dGUoXCJhcGkuZHNnLmdldFN0b3JhZ2VSYXRlc1wiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNlbGYuc3RvcmFnZV9yYXRlcyA9IHJlc3BvbnNlLmRhdGEucmF0ZXM7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEJpbnMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBheGlvcy5wb3N0KHJvdXRlKFwiYXBpLmJpbi5pbmRleFwiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHNlbGYuYmlucyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkTmV3UGFja2FnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGF4aW9zLnBvc3Qocm91dGUoXCJhcGkucGFja2FnZS5hZGRcIikpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICBpdGVtLmRhdGVfcmVjZWl2ZWQgPSBzZWxmLmRhdGVfcmVjZWl2ZWQ7XG4gICAgICAgICAgICBpdGVtLmRhdGVfcHJvY2Vzc2VkID0gc2VsZi5kYXRlX3Byb2Nlc3NlZDtcbiAgICAgICAgICAgIGl0ZW0ucG9fbm8gPSBzZWxmLnBvX25vO1xuICAgICAgICAgICAgaXRlbS5jdXN0b21lcl9pZCA9IHNlbGYuZm9ybS5jdXN0b21lcl9pZDtcbiAgICAgICAgICAgIGl0ZW0uY3VzdG9tZXJfbmFtZSA9IHNlbGYuZm9ybS5jdXN0b21lcl9uYW1lO1xuICAgICAgICAgICAgaXRlbS5jbGllbnRfaWQgPSBzZWxmLmZvcm0uY2xpZW50X2lkO1xuICAgICAgICAgICAgaXRlbS5jbGllbnRfbmFtZSA9IHNlbGYuZm9ybS5jbGllbnRfbmFtZTtcbiAgICAgICAgICAgIGl0ZW0uc2hpcHBlcl9pZCA9IHNlbGYuZm9ybS5zaGlwcGVyX2lkO1xuICAgICAgICAgICAgaXRlbS5zaGlwcGVyX25hbWUgPSBzZWxmLmZvcm0uc2hpcHBlcl9uYW1lO1xuICAgICAgICAgICAgc2VsZi5wYWNrYWdlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGlvbk1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiBgVmFsaWRhdGlvbiBFcnJvcmAsXG4gICAgICAgICAgICBodG1sOiBgPHAgY2xhc3M9XCJ0aXRsZVwiPlBsZWFzZSBGaXggRm9ybSBFcnJvcnM8L3A+YCxcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQmFja1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0RW1wbG95ZWVzKCkge1xuICAgICAgYXhpb3MuZ2V0KHJvdXRlKFwiYXBpLmRzZy5nZXRFbXBsb3llZXNcIikpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmVtcGxveWVlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U2hpcHBlcnMoKSB7XG4gICAgICBheGlvcy5nZXQocm91dGUoXCJhcGkuZHNnLmdldFNoaXBwZXJzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zaGlwcGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Q3VzdG9tZXJzKCkge1xuICAgICAgYXhpb3MuZ2V0KHJvdXRlKFwiYXBpLmRzZy5nZXRDdXN0b21lcnNcIikpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmN1c3RvbWVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3RhdHVzKHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gXCJTdGF0dXM6IEFjdGl2ZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiU3RhdHVzOiBJbmFjdGl2ZVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgc2VsZi5jcmVhdGVEc2coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRpb25Nb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogYFZhbGlkYXRpb24gRXJyb3JgLFxuICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj5QbGVhc2UgRml4IEZvcm0gRXJyb3JzPC9wPmAsXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZURzZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZm9ybS5idXN5ID0gdHJ1ZTtcbiAgICAgIHNlbGYuZm9ybS5wYWNrYWdlcyA9IHNlbGYucGFja2FnZXM7XG4gICAgICBzZWxmLmZvcm0uZGF0ZV9wcm9jZXNzZWQgPSBzZWxmLmRhdGVfcHJvY2Vzc2VkO1xuICAgICAgc2VsZi5mb3JtXG4gICAgICAgIC5wb3N0KHJvdXRlKFwiYXBpLmRzZy5jcmVhdGVcIikpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBzZWxmLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN1Y2Nlc3NNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxuICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj5EU0cgSGFzIEJlZW4gQ3JlYXRlZCE8L3A+YCxcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuJG5leHRUaWNrKCgpID0+IHNlbGYuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJ3YXJlaG91c2VcIiB9KSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBjb25zdCBmYWlsZWRNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZmFpbGVkTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVmFsaWRhdGlvbiBFcnJvciFcIixcbiAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+UGxlYXNlIENvbXBsZXRlIEZvcm0gVG8gU3VibWl0ITwvcD5gLFxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5mb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBjbGllbnRfaWQ6IG51bGwsXG4gICAgICAgIGNsaWVudF9uYW1lOiBudWxsLFxuICAgICAgICBjdXN0b21lcl9pZDogbnVsbCxcbiAgICAgICAgY3VzdG9tZXJfbmFtZTogbnVsbCxcbiAgICAgICAgc2hpcHBlcl9pZDogbnVsbCxcbiAgICAgICAgc2hpcHBlcl9uYW1lOiBudWxsLFxuICAgICAgICByZWNlaXZlZF9ieTogbnVsbCxcbiAgICAgICAgcmVjZWl2ZWRfYnlfbmFtZTogbnVsbCxcbiAgICAgICAgd3JpdHRlbl9ieTogbnVsbCxcbiAgICAgICAgd3JpdHRlbl9ieV9uYW1lOiBudWxsLFxuICAgICAgICBpbnNwZWN0ZWRfYnk6IG51bGwsXG4gICAgICAgIGluc3BlY3RlZF9ieV9uYW1lOiBudWxsLFxuICAgICAgICBsb2NhdGVkX2J5OiBudWxsLFxuICAgICAgICBsb2NhdGVkX2J5X25hbWU6IG51bGwsXG4gICAgICAgIHRvdGFsX3BpZWNlczogbnVsbCxcbiAgICAgICAgdG90YWxfY3ViZTogbnVsbCxcbiAgICAgICAgcmVjZWl2aW5nX2Ftb3VudDogbnVsbCxcbiAgICAgICAgcGFja2FnZXM6IFtdXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlZGlyZWN0QmFjaygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuJG5leHRUaWNrKCgpID0+IHNlbGYuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJ3YXJlaG91c2VcIiB9KSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9XYXJlaG91c2UvQ3JlYXRlV2FyZWhvdXNlLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJtb2RhbC1sYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIndoaXRlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgeyBhdHRyczogeyBmbGF0OiB0cnVlIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJpbWFyeVwiLCBhdHRyczogeyBmaXhlZDogXCJcIiwgYXBwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBcIndoaXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVkaXJlY3RCYWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyIHdoaXRlLS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ3JlYXRlIE5ldyBEU0dcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLWl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5lcnJvcnMuYW55KCkgfHwgX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgU2F2ZVxcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sIFtfdm0uX3YoXCJzYXZlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiXCIsXG4gICAgICAgICAgICAgICAgd3JhcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm15LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIm14LTNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB4LTNcIjogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiY3VzdG9tZXJcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiY3VzdG9tZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBDdXN0b21lciBOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjdXN0b21lclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmN1c3RvbWVyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY3VzdG9tZXJfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY3VzdG9tZXJfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJjbGllbnRcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiY2xpZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgQ2xpZW50IE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImZhLXVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jbGllbnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjbGllbnRfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY2xpZW50X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwic2hpcHBlclwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJzaGlwcGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgU2hpcHBlciBOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS1zaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJzaGlwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2hpcHBlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNoaXBwZXJfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2hpcHBlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwicmVjZWl2ZWRfYnlcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmVtcGxveWVlcyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwicmVjZWl2ZWRfYnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZWNlaXZlZCBCeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG93X3RvX3JlZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicmVjZWl2ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZWNlaXZlZF9ieSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyZWNlaXZlZF9ieVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVjZWl2ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJ3cml0dGVuX2J5XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5lbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcIndyaXR0ZW5fYnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJXcml0dGVuIEJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpcHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJsb2NhbF9saWJyYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ3cml0dGVuX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ud3JpdHRlbl9ieSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ3cml0dGVuX2J5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS53cml0dGVuX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiaW5zcGVjdGVkX2J5XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5lbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImluc3BlY3RlZF9ieVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkluc3BlY3RlZCBCeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJpbnNwZWN0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5pbnNwZWN0ZWRfYnksXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaW5zcGVjdGVkX2J5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5pbnNwZWN0ZWRfYnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJsb2NhdGVkX2J5XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5lbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImxvY2F0ZWRfYnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMb2NhdGVkIEJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpcHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25fcGluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJsb2NhdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubG9jYXRlZF9ieSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJsb2NhdGVkX2J5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sb2NhdGVkX2J5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBPIE5vLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYm9va21hcmtcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9fbm8sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvX25vID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvX25vXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJkYXRlX3JlY2VpdmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlX3JlY2VpdmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI5MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcmVjZWl2ZWQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVfcmVjZWl2ZWRfbW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkX21vZGFsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX3JlY2VpdmVkX21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRlIFJlY2VpdmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRfYXZhaWxhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9yZWNlaXZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV9yZWNlaXZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX3JlY2VpdmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVfcmVjZWl2ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcmVjZWl2ZWRfbW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLmRhdGVfcmVjZWl2ZWQuc2F2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3JlY2VpdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT0tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZGF0ZV9wcm9jZXNzZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVfcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI5MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX3Byb2Nlc3NlZF9tb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkX21vZGFsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX3Byb2Nlc3NlZF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBQcm9jZXNzZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudF9ub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9wcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9wcm9jZXNzZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX3Byb2Nlc3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX3Byb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9wcm9jZXNzZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV9wcm9jZXNzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkX21vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5kYXRlX3Byb2Nlc3NlZC5zYXZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfcHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT0tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5wYWNrYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsIFBpZWNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udG90YWxfcGllY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidG90YWxfcGllY2VzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRvdGFsX3BpZWNlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5wYWNrYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsIEN1YmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS1jdWJlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiZnTCs1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRvdGFsX2N1YmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0b3RhbF9jdWJlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRvdGFsX2N1YmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiXCIsXG4gICAgICAgICAgICAgICAgd3JhcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm15LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIm14LTNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB4LTNcIjogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLnBhY2thZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5lcnJvcnMuYW55KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGROZXdQYWNrYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBBZGQgTmV3IFBhY2thZ2UgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImxpYnJhcnlfYWRkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ucGFja2FnZXMsIGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwicGFja2FnZXNcIiwge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgIGluZGV4OiBrZXkgKyAxLFxuICAgICAgICAgICAgICAgIHBhY2thZ2VzOiBfdm0ucGFja2FnZXMsXG4gICAgICAgICAgICAgICAgYmluczogX3ZtLmJpbnMsXG4gICAgICAgICAgICAgICAgXCJoYW5kbGluZy1yYXRlc1wiOiBfdm0uaGFuZGxpbmdfcmF0ZXMsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlLXJhdGVzXCI6IF92bS5zdG9yYWdlX3JhdGVzLFxuICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRhYWJiNGNlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00YWFiYjRjZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvV2FyZWhvdXNlL0NyZWF0ZVdhcmVob3VzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NyZWF0ZVdhcmVob3VzZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRhYWJiNGNlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ3JlYXRlV2FyZWhvdXNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1dhcmVob3VzZS9DcmVhdGVXYXJlaG91c2UudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRhYWJiNGNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGFhYmI0Y2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvV2FyZWhvdXNlL0NyZWF0ZVdhcmVob3VzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLyogdGhpcyBtaXhpbnMgaXMgcmVzcG9uc2libGUgZm9yIGNvbmNhdGluYXRpbmcgZXJyb3IgbWVzc2FnZXMgZnJvbSB2Zm9ybSBhbmQgdmVlLXZhbGlkYXRlICAqL1xuICBtZXRob2RzOiB7XG4gICAgLyogZXJyb3JCYWcgaXMgcmVsYXRhZWQgdG8gdmVlVmFsaWRhdGUgY29uZmlnIG5hbWUqL1xuICAgIC8qIGZvcm0gaXMgcmVsYXRlZCB0byB2Zm9ybSAqL1xuICAgIGVycm9yTWVzc2FnZXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5jb2xsZWN0KGZpZWxkKS5jb25jYXQodGhpcy5mb3JtLmVycm9ycy5vbmx5KGZpZWxkKSk7XG4gICAgfSxcbiAgICBoYXNFcnJvcnMoZmllbGQpIHtcbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9yc1xuICAgICAgICAuY29sbGVjdChmaWVsZClcbiAgICAgICAgLmNvbmNhdCh0aGlzLmZvcm0uZXJyb3JzLm9ubHkoZmllbGQpKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy92YWxpZGF0aW9uLWVycm9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIDA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImxWSzdcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiT01ONFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwibFZLN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcImF4aW9zXCJcbnZhciBleHRlcm5hbF9fYXhpb3NfID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIk9NTjRcIik7XG52YXIgZXh0ZXJuYWxfX2F4aW9zX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9fYXhpb3NfKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdXRpbC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXHJcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xuZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgY29weSA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgY29weVtrZXldID0gZGVlcENvcHkob2JqW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGNvcHk7XG59XG4vKipcclxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgd3JhcCBpdCBpbiBvbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSAge0FueX0gdmFsdWVcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xuXG5mdW5jdGlvbiBhcnJheVdyYXAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvRXJyb3JzLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBFcnJvcnNfX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIEVycm9yc19fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxudmFyIEVycm9yc19FcnJvcnMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgZXJyb3IgYmFnIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBFcnJvcnMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVycm9ycyk7XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZXJyb3JzIG9iamVjdCBvciBmaWVsZCBlcnJvciBtZXNzYWdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZmllbGRcclxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3x1bmRlZmluZWR9IG1lc3NhZ2VzXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRXJyb3JzLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGZpZWxkLCBtZXNzYWdlcykge1xuICAgICAgaWYgKEVycm9yc19fdHlwZW9mKGZpZWxkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBmaWVsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KF9leHRlbmRzKHt9LCB0aGlzLmVycm9ycywgX2RlZmluZVByb3BlcnR5KHt9LCBmaWVsZCwgYXJyYXlXcmFwKG1lc3NhZ2VzKSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBpcyBhbiBlcnJvciBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGZvciB0aGUgZ2l2ZW4gZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgey4uLlN0cmluZ30gZmllbGRzXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoYXNBbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzQW55KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZmllbGRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRzLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oYXMoZmllbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFueVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbnkoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICBTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkKSB7XG4gICAgICBpZiAodGhpcy5oYXMoZmllbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbChmaWVsZClbMF07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbChmaWVsZCkge1xuICAgICAgcmV0dXJuIGFycmF5V3JhcCh0aGlzLmVycm9yc1tmaWVsZF0gfHwgW10pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHsuLi5TdHJpbmd9IGZpZWxkc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9ubHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25seSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbWVzc2FnZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZmllbGRzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IF90aGlzMi5nZXQoZmllbGQpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3JzIGluIGEgZmxhdCBhcnJheS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmxhdHRlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbGF0dGVuKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lcnJvcnMpLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8dW5kZWZpbmVkfSBmaWVsZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcihmaWVsZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBlcnJvcnMgPSB7fTtcblxuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoa2V5ICE9PSBmaWVsZCkge1xuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSBfdGhpczMuZXJyb3JzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoZXJyb3JzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJyb3JzO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0Zvcm0uanNcbmZ1bmN0aW9uIEZvcm1fX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEZvcm1fX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBGb3JtX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gRm9ybV9fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gRm9ybV9fZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBGb3JtX19leHRlbmRzKCkgeyBGb3JtX19leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIEZvcm1fX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBGb3JtX19jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIEZvcm1fX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBGb3JtX19jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIEZvcm1fX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cbnZhciBGb3JtX0Zvcm0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiBGb3JtKCkge1xuICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIEZvcm1fX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzX0Vycm9ycygpO1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGVlcENvcHkoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuICAvKipcbiAgICogRmlsbCBmb3JtIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuXG5cbiAgRm9ybV9fY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICBrZXk6IFwiZmlsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGRhdGEpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmtleXMoKS5yZWR1Y2UoZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgZGF0YSwgRm9ybV9fZGVmaW5lUHJvcGVydHkoe30sIGtleSwgX3RoaXMyW2tleV0pKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGRhdGEga2V5cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwia2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhRm9ybS5pZ25vcmUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRQcm9jZXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0UHJvY2Vzc2luZygpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmlzaCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluaXNoUHJvY2Vzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5pc2hQcm9jZXNzaW5nKCkge1xuICAgICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZm9ybSBlcnJvcnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFGb3JtLmlnbm9yZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzM1trZXldID0gZGVlcENvcHkoX3RoaXMzLm9yaWdpbmFsRGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgR0VUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdnZXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUE9TVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRjaCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHV0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZSh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGRhdGEgdmlhIGFuIEhUVFAgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWV0aG9kIChnZXQsIHBvc3QsIHBhdGNoLCBwdXQpXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNvbmZpZyAoYXhpb3MgY29uZmlnKVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJtaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0KG1ldGhvZCwgdXJsKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB0aGlzLnN0YXJ0UHJvY2Vzc2luZygpO1xuICAgICAgdmFyIGRhdGEgPSBtZXRob2QgPT09ICdnZXQnID8ge1xuICAgICAgICBwYXJhbXM6IHRoaXMuZGF0YSgpXG4gICAgICB9IDogdGhpcy5kYXRhKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBleHRlcm5hbF9fYXhpb3NfX2RlZmF1bHQuYS5yZXF1ZXN0KEZvcm1fX2V4dGVuZHMoe1xuICAgICAgICAgIHVybDogX3RoaXM0LnJvdXRlKHVybCksXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9LCBjb25maWcpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIF90aGlzNC5maW5pc2hQcm9jZXNzaW5nKCk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXM0LmJ1c3kgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXM0LmVycm9ycy5zZXQoX3RoaXM0LmV4dHJhY3RFcnJvcnMoZXJyb3IucmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBlcnJvcnMgZnJvbSB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RFcnJvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdEVycm9ycyhyZXNwb25zZSkge1xuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8IEZvcm1fX3R5cGVvZihyZXNwb25zZS5kYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogRm9ybS5lcnJvck1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgbmFtZWQgcm91dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyb3V0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3V0ZShuYW1lKSB7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgdXJsID0gbmFtZTtcblxuICAgICAgaWYgKEZvcm0ucm91dGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHVybCA9IGRlY29kZVVSSShGb3JtLnJvdXRlc1tuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChGb3JtX190eXBlb2YocGFyYW1ldGVycykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgaWQ6IHBhcmFtZXRlcnNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwie1wiLmNvbmNhdChrZXksIFwifVwiKSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgZXJyb3JzIG9uIGtleWRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtO1xufSgpO1xuXG5Gb3JtX0Zvcm0ucm91dGVzID0ge307XG5Gb3JtX0Zvcm0uZXJyb3JNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLic7XG5Gb3JtX0Zvcm0uaWdub3JlID0gWydidXN5JywgJ3N1Y2Nlc3NmdWwnLCAnZXJyb3JzJywgJ29yaWdpbmFsRGF0YSddO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjX0Zvcm0gPSAoRm9ybV9Gb3JtKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbi8vXG4vL1xuLy9cbi8vXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBIYXNFcnJvciA9ICh7XG4gIG5hbWU6ICdoYXMtZXJyb3InLFxuICBwcm9wczoge1xuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBmaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Mzg5YTZkZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5oYXMoX3ZtLmZpZWxkKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoX3ZtLmZpZWxkKSl9fSk6X3ZtLl9lKCl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEhhc0Vycm9yLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfSGFzRXJyb3IgPSAoQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0LmpzXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydCA9ICh7XG4gIHByb3BzOiB7XG4gICAgZm9ybToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRpc21pc3NpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc21pc3M6IGZ1bmN0aW9uIGRpc21pc3MoKSB7XG4gICAgICBpZiAodGhpcy5kaXNtaXNzaWJsZSkge1xuICAgICAgICB0aGlzLmZvcm0uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydEVycm9yID0gKHtcbiAgbmFtZTogJ2FsZXJ0LWVycm9yJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWU3M2FhN2M4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbnZhciBBbGVydEVycm9yX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5hbnkoKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZGVmYXVsdFwiLFsoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZXJyb3InKSk/X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdlcnJvcicpKX19KTpfYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KV0pXSwyKTpfdm0uX2UoKX1cbnZhciBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRFcnJvcl9Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3IsXG4gIEFsZXJ0RXJyb3JfcmVuZGVyLFxuICBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydEVycm9yID0gKEFsZXJ0RXJyb3JfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRFcnJvcnMgPSAoe1xuICBuYW1lOiAnYWxlcnQtZXJyb3JzJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQyMmE2NTkxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG52YXIgQWxlcnRFcnJvcnNfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmFueSgpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLm1lc3NhZ2UpP19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3VsJyxfdm0uX2woKF92bS5mb3JtLmVycm9ycy5mbGF0dGVuKCkpLGZ1bmN0aW9uKGVycm9yKXtyZXR1cm4gX2MoJ2xpJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKGVycm9yKX19KX0pKV0pOl92bS5fZSgpfVxudmFyIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydEVycm9yc19Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3JzLFxuICBBbGVydEVycm9yc19yZW5kZXIsXG4gIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRFcnJvcnMgPSAoQWxlcnRFcnJvcnNfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydFN1Y2Nlc3MgPSAoe1xuICBuYW1lOiAnYWxlcnQtc3VjY2VzcycsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGFmZGI4YThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG52YXIgQWxlcnRTdWNjZXNzX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLnN1Y2Nlc3NmdWwpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJkZWZhdWx0XCIsW19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pXSldLDIpOl92bS5fZSgpfVxudmFyIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydFN1Y2Nlc3NfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydFN1Y2Nlc3MsXG4gIEFsZXJ0U3VjY2Vzc19yZW5kZXIsXG4gIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydFN1Y2Nlc3MgPSAoQWxlcnRTdWNjZXNzX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvaW5kZXguanNcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJGb3JtXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3JjX0Zvcm07IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVycm9yc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEVycm9yc19FcnJvcnM7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkhhc0Vycm9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19IYXNFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvcnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0RXJyb3JzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydFN1Y2Nlc3NcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0U3VjY2VzczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY19Gb3JtOyB9KTtcblxuXG5cblxuXG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92Zm9ybS9kaXN0L3Zmb3JtLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gOTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzcgMzggMzkgNDAgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRhOTUzMDYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsTGF5b3V0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IG51bGxcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWRhOTUzMDYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTW9kYWxMYXlvdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRhOTUzMDYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGE5NTMwNjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDk2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRhOTUzMDYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsTGF5b3V0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYjhiYjdkMTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRhOTUzMDYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsTGF5b3V0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kYTk1MzA2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbExheW91dC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZGE5NTMwNjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDk2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LW1lc3NhZ2VzX19tZXNzYWdlIHtcXG4gIGNvbG9yOiAjZTU3MzczO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0JBO0VBQ0EsZUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbExheW91dC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHYtYXBwIFxcbiAgICB2LWNsb2FrIFxcbiAgICBzdGFuZGFsb25lXFxuICA+XFxuICAgIDx2LWNvbnRlbnQgY2xhc3M9XFxcIndoaXRlXFxcIj5cXG4gICAgICA8di1jb250YWluZXIgXFxuICAgICAgICB0cmFuc2l0aW9uPVxcXCJzbGlkZS14LXRyYW5zaXRpb25cXFwiIFxcbiAgICAgICAgZmx1aWQgXFxuICAgICAgICBjbGFzcz1cXFwicGEtMCBtYS0wXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDx2LWNhcmQgOmZsYXQ9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJ0b29sYmFyXFxcIi8+XFxuICAgICAgICAgIDxzbG90Lz5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgPHNsb3QgbmFtZT1cXFwiZm9vdGVyXFxcIi8+XFxuICAgIDwvdi1jb250ZW50PlxcbiAgPC92LWFwcD5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4udi1tZXNzYWdlc19fbWVzc2FnZSB7XFxuICBjb2xvcjogI2U1NzM3MztcXG59XFxuPC9zdHlsZT5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZGE5NTMwNjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDk2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgeyBhdHRyczogeyBzdGFuZGFsb25lOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtMCBtYS0wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRyYW5zaXRpb246IFwic2xpZGUteC10cmFuc2l0aW9uXCIsIGZsdWlkOiBcIlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl90KFwidG9vbGJhclwiKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJmb290ZXJcIilcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWRhOTUzMDYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kYTk1MzA2MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDk2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDE3IDE4IDE5IDIwIDIxIDIyIDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2Il0sInNvdXJjZVJvb3QiOiIifQ==