webpackJsonp([44],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ModalLayout: __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default.a
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      /* Always Declare Your Form Object */
      customer: {
        customer_id: null,
        receiving_fee: 0,
        delivery_fee: 0,
        storage_fee: 0,
        misc_fee: 0
      },
      clients: [],
      headers: [{ text: "Client Name", value: "client_name[0]", align: "left", sortable: true }, {
        text: "Receiving Fee",
        value: "receiving_fee",
        align: "left",
        sortable: true
      }, {
        text: "Delivery Fee",
        value: "delivery_fee",
        align: "left",
        sortable: true
      }, {
        text: "Storage Fee",
        value: "storage_fee",
        align: "left",
        sortable: true
      }, { text: "Misc Fee", value: "misc_fee", align: "left", sortable: true }, { text: "Total", value: "total", align: "left", sortable: true }],
      items: [],
      selected: [],
      pagination: {
        sortBy: "name"
      },
      search: ""
    };
  },
  watch: {
    clients: {
      handler: function handler(newValue) {},
      deep: true
    },
    customer: {
      handler: function handler(newValue) {},
      deep: false
    }
  },
  created: function created() {
    this.fetchInvoice();
  },

  methods: {
    redirectBack: function redirectBack() {
      var self = this;
      self.$nextTick(function () {
        return self.$router.push({ name: "invoices" });
      });
    },
    fetchInvoice: function fetchInvoice() {
      var id = this.id;
      var self = this;
      axios.get(route("api.invoice.view", { id: id })).then(function (response) {
        var data = response.data;
        self.clients = data.clients;
        self.customer = data.customer;
        self.items = data.clients;
        self.items.forEach(function (element) {
          console.log('element', element);
          element.receiving_fee = _.sum(element.receiving_fee);
          element.delivery_fee = _.sum(element.delivery_fee);
          element.misc_fee = _.sum(element.misc_fee);
          element.storage_fee = _.sum(element.storage_fee);
          element.total = element.receiving_fee + element.delivery_fee + element.misc_fee + element.storage_fee;
        });
      });
    }
  }
});

/***/ }),

/***/ 1123:
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
            _vm._v("Viewing Invoice# " + _vm._s(_vm.id))
          ]),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-layout",
            {
              attrs: { row: "", wrap: "", "my-3": "", "py-3": "", "px-1": "" }
            },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", lg2: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      light: "",
                      readonly: "",
                      disabled: "",
                      label: "Customer"
                    },
                    model: {
                      value: _vm.customer.customer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "customer_name", $$v)
                      },
                      expression: "customer.customer_name"
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
                      readonly: "",
                      disabled: "",
                      label: "Receiving Fee"
                    },
                    model: {
                      value: _vm.customer.receiving_fee,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "receiving_fee", $$v)
                      },
                      expression: "customer.receiving_fee"
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
                      readonly: "",
                      disabled: "",
                      label: "Delivery Fee"
                    },
                    model: {
                      value: _vm.customer.delivery_fee,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "delivery_fee", $$v)
                      },
                      expression: "customer.delivery_fee"
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
                      readonly: "",
                      disabled: "",
                      label: "Storage Fee"
                    },
                    model: {
                      value: _vm.customer.storage_fee,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "storage_fee", $$v)
                      },
                      expression: "customer.storage_fee"
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
                      readonly: "",
                      disabled: "",
                      label: "Misc Fee"
                    },
                    model: {
                      value: _vm.customer.misc_fee,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "misc_fee", $$v)
                      },
                      expression: "customer.misc_fee"
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
                      readonly: "",
                      disabled: "",
                      label: "Total"
                    },
                    model: {
                      value: _vm.customer.total,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "total", $$v)
                      },
                      expression: "customer.total"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", "px-1": "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "search",
                      label: "Search Client",
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
                "item-key": "client_id"
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
                                _vm.$vuetify.breakpoint.width >= 600 && "title"
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
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.client_name[0]) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            props.item.receiving_fee
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(props.item.receiving_fee.toFixed(4))
                                  )
                                ])
                              : _c("span", [
                                  _vm._v(_vm._s(props.item.receiving_fee))
                                ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            props.item.delivery_fee
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(props.item.delivery_fee.toFixed(4))
                                  )
                                ])
                              : _c("span", [
                                  _vm._v(_vm._s(props.item.delivery_fee))
                                ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            props.item.storage_fee
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(props.item.storage_fee.toFixed(4))
                                  )
                                ])
                              : _c("span", [
                                  _vm._v(_vm._s(props.item.storage_fee))
                                ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            props.item.misc_fee
                              ? _c("span", [
                                  _vm._v(_vm._s(props.item.misc_fee.toFixed(4)))
                                ])
                              : _c("span", [
                                  _vm._v(_vm._s(props.item.misc_fee))
                                ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.total.toFixed(4)) +
                                "\n          "
                            )
                          ]
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
                    [_vm._v("\n          Opps! No Clients\n        ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-cac12ace", module.exports)
  }
}

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1122)
/* template */
var __vue_template__ = __webpack_require__(1123)
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
Component.options.__file = "resources/assets/js/pages/Invoice/ViewInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cac12ace", Component.options)
  } else {
    hotAPI.reload("data-v-cac12ace", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(951)
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

/***/ 951:
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