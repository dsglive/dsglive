webpackJsonp([29],{

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vform__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainLayout: __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__["a" /* default */]],
  data: function data() {
    return {
      contentClass: { grey: true, "lighten-4": true, "accent--text": true },
      dialog: false,
      /* table */
      headers: [{ text: "DSG#", value: "dsg_id", align: "left", sortable: true }, { text: "Style#", value: "style_no", align: "left", sortable: true }, {
        text: "Item Description",
        value: "description",
        align: "left",
        sortable: true
      }, { text: "Shipper", value: "shipper_name", align: "left", sortable: true }, { text: "Damage Description", value: "damage_description", align: "left", sortable: true }, { text: "Bin#", value: "bin_name", align: "left", sortable: true }, { text: "Cube", value: "cube", align: "left", sortable: true }],
      items: [],
      customers: [],
      clients: [],
      selected: [],
      unknownClient: {
        active: false,
        address_1: null,
        address_2: null,
        city: null,
        id: 1,
        name: "Unknown Client",
        state: null,
        zip: null
      },
      pagination: {
        sortBy: "dsg_id",
        rowPerPage: "all"
      },
      form: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
        customer_id: "",
        customer_name: "",
        client_name: "",
        client_id: ""
      }),
      search: "",
      domain: window.location.hostname
    };
  },
  computed: {
    total_cube: function total_cube() {
      var total = 0;
      this.items.forEach(function (item) {
        total += item.cube;
      });
      return total.toFixed(4) + " cu.ft";
    }
  },
  watch: {
    items: {
      handler: function handler(newValue) {},
      deep: true
    },
    "form.customer_id": {
      handler: function handler(newValue) {
        var self = this;
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
      },
      deep: false
    },
    "form.client_name": {
      handler: function handler(newName) {
        var self = this;
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
              self.fetchPackages();
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
      },
      deep: false
    }
  },
  mounted: function mounted() {
    var self = this;
    self.getCustomers();
  },

  methods: {
    viewPDF: function viewPDF() {
      var url = window.location.protocol + "//" + window.location.hostname + "/pdf/client-report/" + this.form.customer_id + "/" + this.form.client_id + "?sortBy=" + this.pagination.sortBy + "&orderBy=" + (this.pagination.descending ? "DESC" : "ASC");
      window.open(url);
    },
    getCustomers: function getCustomers() {
      var _this = this;

      axios.get(route("api.dsg.getCustomers")).then(function (response) {
        _this.customers = response.data.data;
      });
    },
    viewItem: function viewItem(id) {
      this.$router.push({
        name: "view-damaged-package",
        params: { id: "" + id }
      });
    },
    fetchPackages: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var self, payload, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;

                self.form.busy = true;
                _context.prev = 2;
                _context.next = 5;
                return axios.post(route("api.report.reportByClient"), self.form);

              case 5:
                payload = _context.sent;

                self.items = payload.data.data;
                _context.next = 16;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                errors = _context.t0.errors;
                message = _context.t0.message;

                if (errors) {
                  self.form.errors.set(errors);
                }
                if (message) {}
                self.form.busy = false;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function fetchPackages() {
        return _ref.apply(this, arguments);
      }

      return fetchPackages;
    }(),
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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main-layout",
    [
      _c(
        "v-jumbotron",
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
                    { attrs: { xs12: "", "text-xs-center": "" } },
                    [
                      _c("h2", { staticClass: "display-1" }, [
                        _vm._v("Client Report")
                      ]),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", md6: "", "offset-md3": "" } },
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
                          "prepend-icon": "supervised_user_circle",
                          "data-vv-name": "customer",
                          hint: "Choose Customer",
                          "persistent-hint": ""
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
                    { attrs: { xs12: "", md6: "", "offset-md3": "" } },
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
                          required: "",
                          label: "Choose Client",
                          light: "",
                          "prepend-icon": "fa-users",
                          "data-vv-name": "client",
                          hint: "Choose Customer",
                          "persistent-hint": ""
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
                  _vm.items.length > 0
                    ? _c(
                        "v-flex",
                        { attrs: { xs12: "", md6: "", "offset-md3": "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "secondary", block: "" },
                              on: {
                                click: function($event) {
                                  _vm.viewPDF()
                                }
                              }
                            },
                            [
                              _vm._v("\n            View As PDF\n            "),
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    color: "indigo lighten-4",
                                    right: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              picture_as_pdf\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-flex", { attrs: { xs12: "", "text-xs-center": "" } }, [
                    _c("h2", [
                      _vm._v("Total Items: " + _vm._s(_vm.items.length))
                    ]),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Total Cube: " + _vm._s(_vm.total_cube))])
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
        "v-container",
        { staticStyle: { "margin-top": "-120px" }, attrs: { fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
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
                              label: "Search Packages",
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
                "rows-per-page-items": [
                  { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 }
                ],
                "select-all": "",
                "item-key": "id",
                expand: "",
                "hide-actions": ""
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
                                _vm._s(props.item.dsg_id) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.style_no) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.description) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "title text-xs-left",
                            class: {
                              "red--text":
                                props.item.shipper_id === null ||
                                props.item.shipper_id === 1,
                              "accent--text": props.item.shipper_id > 1
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.shipper_name) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-left accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.damage_description) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.bin_name) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.cube) +
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
                    [
                      _vm._v(
                        "\n          Opps! There are No Items Yet At the Selected Client!\n        "
                      )
                    ]
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
    require("vue-hot-reload-api")      .rerender("data-v-7fefdc38", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1186)
/* template */
var __vue_template__ = __webpack_require__(1187)
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
Component.options.__file = "resources/assets/js/pages/Reports/Client.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fefdc38", Component.options)
  } else {
    hotAPI.reload("data-v-7fefdc38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 958:
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

var listToStyles = __webpack_require__(959)

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

/***/ 959:
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

/***/ 960:
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

/***/ 961:
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

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(967);

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

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(968), __esModule: true };

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(969);
module.exports = __webpack_require__(45).Object.assign;


/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(76);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(970) });


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(375);
var gOPS = __webpack_require__(971);
var pIE = __webpack_require__(972);
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

/***/ 971:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 972:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(974)
/* template */
var __vue_template__ = __webpack_require__(998)
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

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue__ = __webpack_require__(980);
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

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(976)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(978)
/* template */
var __vue_template__ = __webpack_require__(979)
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

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(977);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(958)("7d886588", content, false, {});
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

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AppNavBar.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 978:
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

/***/ 979:
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

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(981)
/* template */
var __vue_template__ = __webpack_require__(997)
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

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks__ = __webpack_require__(992);
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

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(984);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(958)("0e5a43e4", content, false, {});
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

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.styleAvatar[data-v-2c0f8c2e] {\n  position: relative;\n  margin-left: -55px;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/VLink.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,mBAAmB;CAAE","file":"VLink.vue","sourcesContent":[".styleAvatar {\n  position: relative;\n  margin-left: -55px; }\n"],"sourceRoot":""}]);

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

/***/ 986:
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

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(988)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(990)
/* template */
var __vue_template__ = __webpack_require__(991)
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

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(989);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(958)("4511bccc", content, false, {});
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

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InventoryLinks.vue"],"names":[],"mappings":";AAgIA;EACA,0BAAA;CACA","file":"InventoryLinks.vue","sourcesContent":["<template>\n  <v-list \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\" \n        v-if=\"$auth.check(subItem.auth)\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"collections_bookmark\",\n          title: \"Inventories\",\n          items: [\n            {\n              title: \"All Unknown Report\",\n              href: \"/reports/all-unknown-report\",\n              action: \"fa-question-circle\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Unknown Customer\",\n              href: \"/reports/unknown-customer\",\n              action: \"supervised_user_circle\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Unknown Client\",\n              href: \"/reports/unknown-client\",\n              action: \"fa-users\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Unknown Shipper\",\n              href: \"/reports/unknown-shipper\",\n              action: \"fa-ship\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Damaged Report\",\n              href: \"/reports/damaged\",\n              action: \"broken_image\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Repaired Report\",\n              href: \"/reports/repaired\",\n              action: \"build\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Undelivered Report\",\n              href: \"/reports/undelivered\",\n              action: \"fa-truck\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Bin Report\",\n              href: \"/reports/bin\",\n              action: \"apps\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Customer Report\",\n              href: \"/reports/customer\",\n              action: \"local_library\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Client Report\",\n              href: \"/reports/clients\",\n              action: \"perm_contact_calendar\",\n              auth: [\"admin\"]\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 990:
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

/***/ 991:
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

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(993)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(995)
/* template */
var __vue_template__ = __webpack_require__(996)
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


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(994);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(958)("4012696b", content, false, {});
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

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InvoiceLinks.vue"],"names":[],"mappings":";AA+EA;EACA,0BAAA;CACA","file":"InvoiceLinks.vue","sourcesContent":["<template>\n  <v-list \n    v-if=\"$auth.check('admin')\" \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"card_membership\",\n          title: \"Invoices\",\n          items: [\n            {\n              title: \"Generate Invoice\",\n              href: \"/invoices/generate\",\n              action: \"schedule\"\n            },\n            { title: \"Invoices\", href: \"/invoices\", action: \"all_inbox\" },\n            {\n              title: \"Weekly Report\",\n              href: \"/reports/total-all-customer-invoice\",\n              action: \"picture_as_pdf\"\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 995:
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

/***/ 996:
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

/***/ 997:
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

/***/ 998:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0NsaWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0NsaWVudC52dWU/NTUwYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlcG9ydHMvQ2xpZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzAzOTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzI5ODIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWU/OTM5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlPzg5ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZT9mYTU5Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWU/NDc5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWU/MzQ1YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlPzI3OTQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZT8wNDQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlP2I5MWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/YzIwOCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/ZWIxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZT9lNDA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZT8zZDMzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJlcnJvck1lc3NhZ2VzIiwiZmllbGQiLCJlcnJvcnMiLCJjb2xsZWN0IiwiY29uY2F0IiwiZm9ybSIsIm9ubHkiLCJoYXNFcnJvcnMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBaUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBaUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxnQkFBZ0IsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bWFpbi1sYXlvdXQ+XG4gICAgPHYtanVtYm90cm9uPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICBmbHVpZD5cbiAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwPlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICB0ZXh0LXhzLWNlbnRlclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImRpc3BsYXktMVwiPkNsaWVudCBSZXBvcnQ8L2gyPlxuICAgICAgICAgICAgPHYtZGl2aWRlci8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHhzMTJcbiAgICAgICAgICAgIG1kNlxuICAgICAgICAgICAgb2Zmc2V0LW1kMz5cbiAgICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgIDppdGVtcz1cImN1c3RvbWVyc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmN1c3RvbWVyX2lkXCJcbiAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnY3VzdG9tZXInKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdjdXN0b21lcicpIH1cIlxuICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgQ3VzdG9tZXJcIlxuICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCJcbiAgICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiY3VzdG9tZXJcIlxuICAgICAgICAgICAgICBoaW50PVwiQ2hvb3NlIEN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICBtZDZcbiAgICAgICAgICAgIG9mZnNldC1tZDM+XG4gICAgICAgICAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICA6aXRlbXM9XCJjbGllbnRzXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY2xpZW50X25hbWVcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCdjbGllbnQnKVwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdjbGllbnQnKSB9XCJcbiAgICAgICAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgQ2xpZW50XCJcbiAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZmEtdXNlcnNcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJjbGllbnRcIlxuICAgICAgICAgICAgICBoaW50PVwiQ2hvb3NlIEN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB2LWlmPVwiaXRlbXMubGVuZ3RoPjBcIlxuICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgbWQ2XG4gICAgICAgICAgICBvZmZzZXQtbWQzXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiIFxuICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICBAY2xpY2s9XCJ2aWV3UERGKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IEFzIFBERlxuICAgICAgICAgICAgICA8di1pY29uIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5kaWdvIGxpZ2h0ZW4tNFwiIFxuICAgICAgICAgICAgICAgIHJpZ2h0PlxuICAgICAgICAgICAgICAgIHBpY3R1cmVfYXNfcGRmXG4gICAgICAgICAgICAgIDwvdi1pY29uPlxuXG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB4czEyIFxuICAgICAgICAgICAgdGV4dC14cy1jZW50ZXI+XG4gICAgICAgICAgICA8aDI+VG90YWwgSXRlbXM6IHt7IGl0ZW1zLmxlbmd0aCB9fTwvaDI+XG4gICAgICAgICAgICA8aDI+VG90YWwgQ3ViZToge3sgdG90YWxfY3ViZSB9fTwvaDI+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgIDwvdi1qdW1ib3Ryb24+XG4gICAgPHYtY29udGFpbmVyIFxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOi0xMjBweDtcIlxuICAgICAgZmx1aWQ+XG4gICAgICA8IS0tIFNlYXJjaCBhbmQgQWN0aW9uIEJ1dHRvbnMgLS0+XG4gICAgICA8di1sYXlvdXQgXG4gICAgICAgIHJvdyBcbiAgICAgICAgd3JhcD5cbiAgICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICAgIDx2LWNhcmQgXG4gICAgICAgICAgICBsaWdodCBcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIFBhY2thZ2VzXCJcbiAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPCEtLSBEc2cgRGF0YSBUYWJsZSAtLT5cbiAgICAgIDx2LWRhdGEtdGFibGVcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkXCJcbiAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgOnBhZ2luYXRpb24uc3luYz1cInBhZ2luYXRpb25cIlxuICAgICAgICA6cm93cy1wZXItcGFnZS1pdGVtcz1cIlt7J3RleHQnOickdnVldGlmeS5kYXRhSXRlcmF0b3Iucm93c1BlclBhZ2VBbGwnLCd2YWx1ZSc6LTF9XVwiXG4gICAgICAgIHNlbGVjdC1hbGxcbiAgICAgICAgaXRlbS1rZXk9XCJpZFwiXG4gICAgICAgIGV4cGFuZFxuICAgICAgICBoaWRlLWFjdGlvbnNcbiAgICAgID5cbiAgICAgICAgPCEtLSBIZWFkZXIgU2VjdGlvbiAtLT5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgc2xvdD1cImhlYWRlcnNcIiBcbiAgICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIFxuICAgICAgICAgICAgICB2LWZvcj1cImhlYWRlciBpbiBwcm9wcy5oZWFkZXJzXCIgXG4gICAgICAgICAgICAgIDprZXk9XCJoZWFkZXIudGV4dFwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsnY29sdW1uIHNvcnRhYmxlJywgcGFnaW5hdGlvbi5kZXNjZW5kaW5nID8gJ2Rlc2MnIDogJ2FzYycsIFxuICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPT09IHBhZ2luYXRpb24uc29ydEJ5ID8gJ25hbWUnIDogJycsIFxuICAgICAgICAgICAgICAgICAgICAgICB7J3RleHQteHMtbGVmdCc6IGhlYWRlci5hbGlnbiA9PT0gJ2xlZnQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLXJpZ2h0JzogaGVhZGVyLmFsaWduID09PSAncmlnaHQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLWNlbnRlcic6IGhlYWRlci5hbGlnbiA9PT0gJ2NlbnRlcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAkdnVldGlmeS5icmVha3BvaW50LndpZHRoID49IDYwMCAmJiAndGl0bGUnXVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDx2LWljb24+YXJyb3dfdXB3YXJkPC92LWljb24+XG4gICAgICAgICAgICAgICAge3sgaGVhZGVyLnRleHQgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFJvdyBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgXG4gICAgICAgICAgc2xvdD1cIml0ZW1zXCIgXG4gICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBhY2NlbnQtLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5kc2dfaWQgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5zdHlsZV9ubyB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIFxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3JlZC0tdGV4dCc6IHByb3BzLml0ZW0uc2hpcHBlcl9pZCA9PT0gbnVsbCB8fCBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPT09IDEsICdhY2NlbnQtLXRleHQnOiBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPiAxfVwiIFxuICAgICAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uc2hpcHBlcl9uYW1lIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIFxuICAgICAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdCBhY2NlbnQtLXRleHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLmRhbWFnZV9kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLmJpbl9uYW1lIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uY3ViZSB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFBhZ2luYXRpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIFxuICAgICAgICAgIHNsb3Q9XCJwYWdlVGV4dFwiXG4gICAgICAgICAgc2xvdC1zY29wZT1cInsgcGFnZVN0YXJ0LCBwYWdlU3RvcCB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIEZyb20ge3sgcGFnZVN0YXJ0IH19IHRvIHt7IHBhZ2VTdG9wIH19XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gTm8gRGF0YSBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cbiAgICAgICAgICA8di1hbGVydCBcbiAgICAgICAgICAgIDp2YWx1ZT1cInRydWVcIiBcbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZS1ncmV5XCIgXG4gICAgICAgICAgICBpY29uPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgT3BwcyEgVGhlcmUgYXJlIE5vIEl0ZW1zIFlldCBBdCB0aGUgU2VsZWN0ZWQgQ2xpZW50IVxuICAgICAgICAgIDwvdi1hbGVydD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBObyBTZWFyY2ggUmVzdWx0IFNlY3Rpb24gLS0+XG4gICAgICAgIDx2LWFsZXJ0IFxuICAgICAgICAgIHNsb3Q9XCJuby1yZXN1bHRzXCIgXG4gICAgICAgICAgOnZhbHVlPVwidHJ1ZVwiIFxuICAgICAgICAgIGNvbG9yPVwiYmx1ZS1ncmV5XCIgXG4gICAgICAgICAgaWNvbj1cIndhcm5pbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwie3sgc2VhcmNoIH19XCIgZm91bmQgbm8gcmVzdWx0cy5cbiAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgPC9tYWluLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiTGF5b3V0cy9NYWluLnZ1ZVwiO1xuaW1wb3J0IHZhbGlkYXRpb25FcnJvciBmcm9tIFwiTWl4aW5zL3ZhbGlkYXRpb24tZXJyb3JcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwidmZvcm1cIjtcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBNYWluTGF5b3V0XG4gIH0sXG4gIG1peGluczogW3ZhbGlkYXRpb25FcnJvcl0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgY29udGVudENsYXNzOiB7IGdyZXk6IHRydWUsIFwibGlnaHRlbi00XCI6IHRydWUsIFwiYWNjZW50LS10ZXh0XCI6IHRydWUgfSxcbiAgICBkaWFsb2c6IGZhbHNlLFxuICAgIC8qIHRhYmxlICovXG4gICAgaGVhZGVyczogW1xuICAgICAgeyB0ZXh0OiBcIkRTRyNcIiwgdmFsdWU6IFwiZHNnX2lkXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgdGV4dDogXCJTdHlsZSNcIiwgdmFsdWU6IFwic3R5bGVfbm9cIiwgYWxpZ246IFwibGVmdFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkl0ZW0gRGVzY3JpcHRpb25cIixcbiAgICAgICAgdmFsdWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJTaGlwcGVyXCIsIHZhbHVlOiBcInNoaXBwZXJfbmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiRGFtYWdlIERlc2NyaXB0aW9uXCIsIHZhbHVlOiBcImRhbWFnZV9kZXNjcmlwdGlvblwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiQmluI1wiLCB2YWx1ZTogXCJiaW5fbmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiQ3ViZVwiLCB2YWx1ZTogXCJjdWJlXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfVxuICAgIF0sXG4gICAgaXRlbXM6IFtdLFxuICAgIGN1c3RvbWVyczogW10sXG4gICAgY2xpZW50czogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHVua25vd25DbGllbnQ6IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBhZGRyZXNzXzE6IG51bGwsXG4gICAgICBhZGRyZXNzXzI6IG51bGwsXG4gICAgICBjaXR5OiBudWxsLFxuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiBcIlVua25vd24gQ2xpZW50XCIsXG4gICAgICBzdGF0ZTogbnVsbCxcbiAgICAgIHppcDogbnVsbFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgc29ydEJ5OiBcImRzZ19pZFwiLFxuICAgICAgcm93UGVyUGFnZTogXCJhbGxcIlxuICAgIH0sXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgY3VzdG9tZXJfaWQ6IFwiXCIsXG4gICAgICBjdXN0b21lcl9uYW1lOiBcIlwiLFxuICAgICAgY2xpZW50X25hbWU6IFwiXCIsXG4gICAgICBjbGllbnRfaWQ6IFwiXCJcbiAgICB9KSxcbiAgICBzZWFyY2g6IFwiXCIsXG4gICAgZG9tYWluOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgdG90YWxfY3ViZSgpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRvdGFsICs9IGl0ZW0uY3ViZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGAke3RvdGFsLnRvRml4ZWQoNCl9IGN1LmZ0YDtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIFwiZm9ybS5jdXN0b21lcl9pZFwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjdXN0b21lcl9pZCA9IG51bGw7XG4gICAgICAgIGxldCBjdXN0b21lcl9uYW1lID0gbnVsbDtcblxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyID0gXy5maW5kKHNlbGYuY3VzdG9tZXJzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICByZXR1cm4gYy5pZCA9PT0gbmV3VmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi5jbGllbnRzID0gY3VzdG9tZXIuY2xpZW50cztcbiAgICAgICAgICBfLnJlbW92ZShzZWxmLmNsaWVudHMsIHtcbiAgICAgICAgICAgIGlkOiAxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi5jbGllbnRzLnVuc2hpZnQoc2VsZi51bmtub3duQ2xpZW50KTtcbiAgICAgICAgICBzZWxmLmZvcm0uY3VzdG9tZXJfbmFtZSA9IGN1c3RvbWVyLm5hbWU7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9uYW1lID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X2lkID0gbnVsbDtcbiAgICAgICAgICBjdXN0b21lcl9pZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgIGN1c3RvbWVyX25hbWUgPSBjdXN0b21lci5uYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuY2xpZW50cyA9IFtdO1xuICAgICAgICAgIHNlbGYuY2xpZW50cy5wdXNoKHNlbGYudW5rbm93bkNsaWVudCk7XG4gICAgICAgICAgc2VsZi5mb3JtLmN1c3RvbWVyX2lkID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0uY3VzdG9tZXJfbmFtZSA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9uYW1lID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X2lkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0uY2xpZW50X25hbWVcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjbGllbnRfaWQgPSBudWxsO1xuICAgICAgICBsZXQgY2xpZW50X25hbWUgPSBuZXdOYW1lO1xuXG4gICAgICAgIGlmIChuZXdOYW1lICE9IG51bGwgfHwgbmV3TmFtZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoc2VsZi5jbGllbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjbGllbnQgPSBfLmZpbmQoc2VsZi5jbGllbnRzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjLm5hbWUgPT0gbmV3TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNsaWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9uYW1lID0gY2xpZW50Lm5hbWU7XG4gICAgICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfaWQgPSBjbGllbnQuaWQ7XG4gICAgICAgICAgICAgIGNsaWVudF9pZCA9IGNsaWVudC5pZDtcbiAgICAgICAgICAgICAgY2xpZW50X25hbWUgPSBjbGllbnQubmFtZTtcbiAgICAgICAgICAgICAgc2VsZi5mZXRjaFBhY2thZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfaWQgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfbmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5nZXRDdXN0b21lcnMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHZpZXdQREYoKSB7XG4gICAgICBsZXQgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICB9L3BkZi9jbGllbnQtcmVwb3J0LyR7dGhpcy5mb3JtLmN1c3RvbWVyX2lkfS8ke1xuICAgICAgICB0aGlzLmZvcm0uY2xpZW50X2lkXG4gICAgICB9P3NvcnRCeT0ke3RoaXMucGFnaW5hdGlvbi5zb3J0Qnl9Jm9yZGVyQnk9JHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyBcIkRFU0NcIiA6IFwiQVNDXCJcbiAgICAgIH1gO1xuICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICB9LFxuICAgIGdldEN1c3RvbWVycygpIHtcbiAgICAgIGF4aW9zLmdldChyb3V0ZShcImFwaS5kc2cuZ2V0Q3VzdG9tZXJzXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXdJdGVtKGlkKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgIG5hbWU6IFwidmlldy1kYW1hZ2VkLXBhY2thZ2VcIixcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBgJHtpZH1gIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hQYWNrYWdlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZm9ybS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgIHJvdXRlKFwiYXBpLnJlcG9ydC5yZXBvcnRCeUNsaWVudFwiKSxcbiAgICAgICAgICBzZWxmLmZvcm1cbiAgICAgICAgKTtcbiAgICAgICAgc2VsZi5pdGVtcyA9IHBheWxvYWQuZGF0YS5kYXRhO1xuICAgICAgfSBjYXRjaCAoeyBlcnJvcnMsIG1lc3NhZ2UgfSkge1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgc2VsZi5mb3JtLmVycm9ycy5zZXQoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZm9ybS5idXN5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VTb3J0KGNvbHVtbikge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbi5zb3J0QnkgPT09IGNvbHVtbikge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZyA9ICF0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5zb3J0QnkgPSBjb2x1bW47XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5kZXNjZW5kaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlcG9ydHMvQ2xpZW50LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJtYWluLWxheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtanVtYm90cm9uXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIFwidGV4dC14cy1jZW50ZXJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpZW50IFJlcG9ydFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBtZDY6IFwiXCIsIFwib2Zmc2V0LW1kM1wiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcImN1c3RvbWVyXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmN1c3RvbWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImN1c3RvbWVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNob29zZSBDdXN0b21lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDaG9vc2UgQ3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jdXN0b21lcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImN1c3RvbWVyX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmN1c3RvbWVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kNjogXCJcIiwgXCJvZmZzZXQtbWQzXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiY2xpZW50XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmNsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJjbGllbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaG9vc2UgQ2xpZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImZhLXVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiY2xpZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ2hvb3NlIEN1c3RvbWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY2xpZW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjbGllbnRfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jbGllbnRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQ2OiBcIlwiLCBcIm9mZnNldC1tZDNcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzZWNvbmRhcnlcIiwgYmxvY2s6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmlld1BERigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFZpZXcgQXMgUERGXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5kaWdvIGxpZ2h0ZW4tNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgcGljdHVyZV9hc19wZGZcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIFwidGV4dC14cy1jZW50ZXJcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVG90YWwgSXRlbXM6IFwiICsgX3ZtLl9zKF92bS5pdGVtcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiVG90YWwgQ3ViZTogXCIgKyBfdm0uX3MoX3ZtLnRvdGFsX2N1YmUpKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIi0xMjBweFwiIH0sIGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGlnaHQ6IFwiXCIsIGZsYXQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaCBQYWNrYWdlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS1pdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiJHZ1ZXRpZnkuZGF0YUl0ZXJhdG9yLnJvd3NQZXJQYWdlQWxsXCIsIHZhbHVlOiAtMSB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdC1hbGxcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICBleHBhbmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWFjdGlvbnNcIjogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2luYXRpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ucGFnaW5hdGlvbiA9ICRldmVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImhlYWRlcnNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHByb3BzLmhlYWRlcnMsIGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaGVhZGVyLnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtbiBzb3J0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnaW5hdGlvbi5kZXNjZW5kaW5nID8gXCJkZXNjXCIgOiBcImFzY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPT09IF92bS5wYWdpbmF0aW9uLnNvcnRCeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtbGVmdFwiOiBoZWFkZXIuYWxpZ24gPT09IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cy1yaWdodFwiOiBoZWFkZXIuYWxpZ24gPT09IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyXCI6IGhlYWRlci5hbGlnbiA9PT0gXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+PSA2MDAgJiYgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGFuZ2VTb3J0KGhlYWRlci52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImFycm93X3Vwd2FyZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhoZWFkZXIudGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uZHNnX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5zdHlsZV9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZC0tdGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5zaGlwcGVyX2lkID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NlbnQtLXRleHRcIjogcHJvcHMuaXRlbS5zaGlwcGVyX2lkID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5zaGlwcGVyX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnQgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLmJpbl9uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5jdWJlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcInBhZ2VUZXh0XCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlU3RhcnQgPSByZWYucGFnZVN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlU3RvcCA9IHJlZi5wYWdlU3RvcFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBGcm9tIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBhZ2VTdGFydCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB0byBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYWdlU3RvcCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIE9wcHMhIFRoZXJlIGFyZSBObyBJdGVtcyBZZXQgQXQgdGhlIFNlbGVjdGVkIENsaWVudCFcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwibm8tcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJuby1yZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWFyY2gpICtcbiAgICAgICAgICAgICAgICAgICAgICAnXCIgZm91bmQgbm8gcmVzdWx0cy5cXG4gICAgICAnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdmZWZkYzM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZmVmZGMzOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVwb3J0cy9DbGllbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DbGllbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZmVmZGMzOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0NsaWVudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZlZmRjMzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmVmZGMzOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0NsaWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDk0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gOTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLyogdGhpcyBtaXhpbnMgaXMgcmVzcG9uc2libGUgZm9yIGNvbmNhdGluYXRpbmcgZXJyb3IgbWVzc2FnZXMgZnJvbSB2Zm9ybSBhbmQgdmVlLXZhbGlkYXRlICAqL1xuICBtZXRob2RzOiB7XG4gICAgLyogZXJyb3JCYWcgaXMgcmVsYXRhZWQgdG8gdmVlVmFsaWRhdGUgY29uZmlnIG5hbWUqL1xuICAgIC8qIGZvcm0gaXMgcmVsYXRlZCB0byB2Zm9ybSAqL1xuICAgIGVycm9yTWVzc2FnZXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5jb2xsZWN0KGZpZWxkKS5jb25jYXQodGhpcy5mb3JtLmVycm9ycy5vbmx5KGZpZWxkKSk7XG4gICAgfSxcbiAgICBoYXNFcnJvcnMoZmllbGQpIHtcbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9yc1xuICAgICAgICAuY29sbGVjdChmaWVsZClcbiAgICAgICAgLmNvbmNhdCh0aGlzLmZvcm0uZXJyb3JzLm9ubHkoZmllbGQpKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy92YWxpZGF0aW9uLWVycm9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIDA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImxWSzdcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiT01ONFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwibFZLN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcImF4aW9zXCJcbnZhciBleHRlcm5hbF9fYXhpb3NfID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIk9NTjRcIik7XG52YXIgZXh0ZXJuYWxfX2F4aW9zX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9fYXhpb3NfKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdXRpbC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXHJcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xuZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgY29weSA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgY29weVtrZXldID0gZGVlcENvcHkob2JqW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGNvcHk7XG59XG4vKipcclxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgd3JhcCBpdCBpbiBvbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSAge0FueX0gdmFsdWVcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xuXG5mdW5jdGlvbiBhcnJheVdyYXAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvRXJyb3JzLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBFcnJvcnNfX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IEVycm9yc19fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIEVycm9yc19fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxudmFyIEVycm9yc19FcnJvcnMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgZXJyb3IgYmFnIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBFcnJvcnMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVycm9ycyk7XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZXJyb3JzIG9iamVjdCBvciBmaWVsZCBlcnJvciBtZXNzYWdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZmllbGRcclxuICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3x1bmRlZmluZWR9IG1lc3NhZ2VzXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRXJyb3JzLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGZpZWxkLCBtZXNzYWdlcykge1xuICAgICAgaWYgKEVycm9yc19fdHlwZW9mKGZpZWxkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBmaWVsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KF9leHRlbmRzKHt9LCB0aGlzLmVycm9ycywgX2RlZmluZVByb3BlcnR5KHt9LCBmaWVsZCwgYXJyYXlXcmFwKG1lc3NhZ2VzKSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBpcyBhbiBlcnJvciBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGZvciB0aGUgZ2l2ZW4gZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgey4uLlN0cmluZ30gZmllbGRzXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoYXNBbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzQW55KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZmllbGRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRzLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oYXMoZmllbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFueVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbnkoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICBTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGZpZWxkKSB7XG4gICAgICBpZiAodGhpcy5oYXMoZmllbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbChmaWVsZClbMF07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbChmaWVsZCkge1xuICAgICAgcmV0dXJuIGFycmF5V3JhcCh0aGlzLmVycm9yc1tmaWVsZF0gfHwgW10pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHsuLi5TdHJpbmd9IGZpZWxkc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9ubHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25seSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbWVzc2FnZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgZmllbGRzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IF90aGlzMi5nZXQoZmllbGQpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3JzIGluIGEgZmxhdCBhcnJheS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmxhdHRlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbGF0dGVuKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lcnJvcnMpLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8dW5kZWZpbmVkfSBmaWVsZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcihmaWVsZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBlcnJvcnMgPSB7fTtcblxuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoa2V5ICE9PSBmaWVsZCkge1xuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSBfdGhpczMuZXJyb3JzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoZXJyb3JzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJyb3JzO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0Zvcm0uanNcbmZ1bmN0aW9uIEZvcm1fX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IEZvcm1fX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBGb3JtX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gRm9ybV9fdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gRm9ybV9fZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBGb3JtX19leHRlbmRzKCkgeyBGb3JtX19leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIEZvcm1fX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBGb3JtX19jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIEZvcm1fX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBGb3JtX19jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIEZvcm1fX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cbnZhciBGb3JtX0Zvcm0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiBGb3JtKCkge1xuICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIEZvcm1fX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzX0Vycm9ycygpO1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGVlcENvcHkoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuICAvKipcbiAgICogRmlsbCBmb3JtIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuXG5cbiAgRm9ybV9fY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICBrZXk6IFwiZmlsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGRhdGEpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmtleXMoKS5yZWR1Y2UoZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgZGF0YSwgRm9ybV9fZGVmaW5lUHJvcGVydHkoe30sIGtleSwgX3RoaXMyW2tleV0pKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGRhdGEga2V5cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwia2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhRm9ybS5pZ25vcmUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRQcm9jZXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0UHJvY2Vzc2luZygpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmlzaCBwcm9jZXNzaW5nIHRoZSBmb3JtLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluaXNoUHJvY2Vzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5pc2hQcm9jZXNzaW5nKCkge1xuICAgICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZm9ybSBlcnJvcnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFGb3JtLmlnbm9yZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzM1trZXldID0gZGVlcENvcHkoX3RoaXMzLm9yaWdpbmFsRGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgR0VUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdnZXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUE9TVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRjaCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHV0KHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZSh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGRhdGEgdmlhIGFuIEhUVFAgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWV0aG9kIChnZXQsIHBvc3QsIHBhdGNoLCBwdXQpXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNvbmZpZyAoYXhpb3MgY29uZmlnKVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJtaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0KG1ldGhvZCwgdXJsKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB0aGlzLnN0YXJ0UHJvY2Vzc2luZygpO1xuICAgICAgdmFyIGRhdGEgPSBtZXRob2QgPT09ICdnZXQnID8ge1xuICAgICAgICBwYXJhbXM6IHRoaXMuZGF0YSgpXG4gICAgICB9IDogdGhpcy5kYXRhKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBleHRlcm5hbF9fYXhpb3NfX2RlZmF1bHQuYS5yZXF1ZXN0KEZvcm1fX2V4dGVuZHMoe1xuICAgICAgICAgIHVybDogX3RoaXM0LnJvdXRlKHVybCksXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9LCBjb25maWcpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIF90aGlzNC5maW5pc2hQcm9jZXNzaW5nKCk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXM0LmJ1c3kgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXM0LmVycm9ycy5zZXQoX3RoaXM0LmV4dHJhY3RFcnJvcnMoZXJyb3IucmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBlcnJvcnMgZnJvbSB0aGUgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RFcnJvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdEVycm9ycyhyZXNwb25zZSkge1xuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8IEZvcm1fX3R5cGVvZihyZXNwb25zZS5kYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogRm9ybS5lcnJvck1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCByZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgbmFtZWQgcm91dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyb3V0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3V0ZShuYW1lKSB7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgdXJsID0gbmFtZTtcblxuICAgICAgaWYgKEZvcm0ucm91dGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHVybCA9IGRlY29kZVVSSShGb3JtLnJvdXRlc1tuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChGb3JtX190eXBlb2YocGFyYW1ldGVycykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgaWQ6IHBhcmFtZXRlcnNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwie1wiLmNvbmNhdChrZXksIFwifVwiKSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgZXJyb3JzIG9uIGtleWRvd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbktleWRvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtO1xufSgpO1xuXG5Gb3JtX0Zvcm0ucm91dGVzID0ge307XG5Gb3JtX0Zvcm0uZXJyb3JNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLic7XG5Gb3JtX0Zvcm0uaWdub3JlID0gWydidXN5JywgJ3N1Y2Nlc3NmdWwnLCAnZXJyb3JzJywgJ29yaWdpbmFsRGF0YSddO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjX0Zvcm0gPSAoRm9ybV9Gb3JtKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbi8vXG4vL1xuLy9cbi8vXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBIYXNFcnJvciA9ICh7XG4gIG5hbWU6ICdoYXMtZXJyb3InLFxuICBwcm9wczoge1xuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBmaWVsZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Mzg5YTZkZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5oYXMoX3ZtLmZpZWxkKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIsZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoX3ZtLmZpZWxkKSl9fSk6X3ZtLl9lKCl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEhhc0Vycm9yLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfSGFzRXJyb3IgPSAoQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0LmpzXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydCA9ICh7XG4gIHByb3BzOiB7XG4gICAgZm9ybToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRpc21pc3NpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc21pc3M6IGZ1bmN0aW9uIGRpc21pc3MoKSB7XG4gICAgICBpZiAodGhpcy5kaXNtaXNzaWJsZSkge1xuICAgICAgICB0aGlzLmZvcm0uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydEVycm9yID0gKHtcbiAgbmFtZTogJ2FsZXJ0LWVycm9yJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWU3M2FhN2M4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbnZhciBBbGVydEVycm9yX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5hbnkoKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZGVmYXVsdFwiLFsoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZXJyb3InKSk/X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdlcnJvcicpKX19KTpfYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KV0pXSwyKTpfdm0uX2UoKX1cbnZhciBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRFcnJvcl9Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3IsXG4gIEFsZXJ0RXJyb3JfcmVuZGVyLFxuICBBbGVydEVycm9yX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydEVycm9yID0gKEFsZXJ0RXJyb3JfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRFcnJvcnMgPSAoe1xuICBuYW1lOiAnYWxlcnQtZXJyb3JzJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1RoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQyMmE2NTkxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG52YXIgQWxlcnRFcnJvcnNfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmFueSgpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLm1lc3NhZ2UpP19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3VsJyxfdm0uX2woKF92bS5mb3JtLmVycm9ycy5mbGF0dGVuKCkpLGZ1bmN0aW9uKGVycm9yKXtyZXR1cm4gX2MoJ2xpJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKGVycm9yKX19KX0pKV0pOl92bS5fZSgpfVxudmFyIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvcnMudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydEVycm9yc19Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0RXJyb3JzLFxuICBBbGVydEVycm9yc19yZW5kZXIsXG4gIEFsZXJ0RXJyb3JzX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRFcnJvcnNfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRFcnJvcnMgPSAoQWxlcnRFcnJvcnNfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydFN1Y2Nlc3MgPSAoe1xuICBuYW1lOiAnYWxlcnQtc3VjY2VzcycsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGFmZGI4YThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG52YXIgQWxlcnRTdWNjZXNzX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLnN1Y2Nlc3NmdWwpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJkZWZhdWx0XCIsW19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pXSldLDIpOl92bS5fZSgpfVxudmFyIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydFN1Y2Nlc3NfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydFN1Y2Nlc3MsXG4gIEFsZXJ0U3VjY2Vzc19yZW5kZXIsXG4gIEFsZXJ0U3VjY2Vzc19zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydFN1Y2Nlc3MgPSAoQWxlcnRTdWNjZXNzX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvaW5kZXguanNcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJGb3JtXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3JjX0Zvcm07IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkVycm9yc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEVycm9yc19FcnJvcnM7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkhhc0Vycm9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19IYXNFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRFcnJvcjsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRFcnJvcnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0RXJyb3JzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydFN1Y2Nlc3NcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0U3VjY2VzczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY19Gb3JtOyB9KTtcblxuXG5cblxuXG5cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92Zm9ybS9kaXN0L3Zmb3JtLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gOTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzYgMzcgMzggMzkgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gOTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM3IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzciLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDk3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDk3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01haW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2NiZjE1ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01haW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zY2NiZjE1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNjY2JmMTVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCI8dGVtcGxhdGU+XG4gIDx2LWFwcCBcbiAgICB2LWNsb2FrIFxuICAgIGlkPVwiaW5zcGlyZVwiXG4gID5cbiAgICA8bGVmdC1zaWRlLWJhci8+XG4gICAgPGFwcC1uYXYtYmFyLz5cbiAgICA8di1jb250ZW50XG4gICAgICB0cmFuc2l0aW9uPVwic2xpZGUteC10cmFuc2l0aW9uXCIgXG4gICAgICBmbHVpZFxuICAgICAgcGEtMFxuICAgICAgbWEtMFxuICAgICAgY2xhc3M9XCJ3aGl0ZVwiXG4gICAgPlxuICAgICAgPHNsb3QvPlxuICAgIDwvdi1jb250ZW50PlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBcHBOYXZCYXIgZnJvbSBcIi4uL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcIjtcbmltcG9ydCBMZWZ0U2lkZUJhciBmcm9tIFwiLi4vcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEFwcE5hdkJhcixcbiAgICBMZWZ0U2lkZUJhclxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2OGE2NjQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjY4YTY2NDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3ZDg4NjU4OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY2OGE2NjQ2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkFwcE5hdkJhci52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02NjhhNjY0NlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiPHRlbXBsYXRlPlxuICA8di10b29sYmFyIFxuICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgIGZpeGVkIFxuICAgIGFwcFxuICA+XG4gICAgPHYtdG9vbGJhci1zaWRlLWljb24gXG4gICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCJcbiAgICAgIEBjbGljay5uYXRpdmUuc3RvcD1cInRvZ2dsZURyYXdlcigpXCJcbiAgICAvPlxuICAgIDwhLS0gVGl0bGUgLS0+XG4gICAgPHYtdG9vbGJhci10aXRsZSBcbiAgICAgIHYtaWY9XCJleHRlbnNpb25cIiBcbiAgICAgIHNsb3Q9XCJleHRlbnNpb25cIiBcbiAgICAgIDpjbGFzcz1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiAncHItMydcIiBcbiAgICAgIDpzdHlsZT1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPiAxMjY0ICYmICd3aWR0aDogMzAwcHgnXCIgXG4gICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyIG1sLTAgcGwtM1wiXG4gICAgPlxuICAgICAgPHYtaWNvbiBcbiAgICAgICAgdi1pZj1cInNob3dJY29uXCIgXG4gICAgICAgIGNsYXNzPVwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgaWNvbiB9fVxuICAgICAgPC92LWljb24+XG4gICAgICA8c3BhbiBcbiAgICAgICAgY2xhc3M9XCJoaWRkZW4tbWQtYW5kLWRvd25cIiBcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgIDx2LXRvb2xiYXItdGl0bGUgXG4gICAgICB2LWVsc2UgXG4gICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyXCJcbiAgICA+XG4gICAgICA8di1pY29uIFxuICAgICAgICB2LWlmPVwic2hvd0ljb25cIiBcbiAgICAgICAgY2xhc3M9XCJtbC0zIGhpZGRlbi1tZC1hbmQtZG93biBhY2NlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyBpY29uIH19XG4gICAgICA8L3YtaWNvbj5cbiAgICAgIDxzcGFuIFxuICAgICAgICBjbGFzcz1cImhpZGRlbi1tZC1hbmQtZG93blwiIFxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIndoaXRlLS10ZXh0XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgPHYtc3BhY2VyLz5cbiAgICA8IS0tIGNlbnRlciBsb2dvIC0tPlxuICAgIDxpbWcgXG4gICAgICB2LWlmPVwic2hvd0xvZ29cIiBcbiAgICAgIDpzcmM9XCJsb2dvXCIgXG4gICAgICBjbGFzcz1cImhpZGRlbi1tZC1hbmQtdXBcIiBcbiAgICA+XG4gICAgPHYtc3BhY2VyLz5cbiAgPC92LXRvb2xiYXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIGV4dGVuc2lvbjogZmFsc2UsXG4gICAgc2hvd0xvZ286IGZhbHNlLFxuICAgIGxvZ286IFwiL2ltZy9sb2dvLnBuZ1wiLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICB0aXRsZTogXCJEU0cgTGl2ZVwiXG4gIH0pLFxuICBjcmVhdGVkKCkge1xuICAgIC8qIEVtaXQgT24gYSBDaGlsZCBDb21wb25lbnQgSWYgWW91IFdhbnQgVGhpcyBUbyBCZSBWaXNpYmxlICovXG4gICAgQnVzLiRvbihcImhlYWRlci1leHRlbnNpb24tdmlzaWJsZVwiLCB2aXNpYmlsaXR5ID0+IHtcbiAgICAgIHRoaXMuZXh0ZW5zaW9uID0gdmlzaWJpbGl0eTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgIEJ1cy4kZW1pdChcInRvZ2dsZURyYXdlclwiKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi10b29sYmFyXCIsXG4gICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZpeGVkOiBcIlwiLCBhcHA6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXNpZGUtaWNvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIsXG4gICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBfdm0udG9nZ2xlRHJhd2VyKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5leHRlbnNpb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyIG1sLTAgcGwtM1wiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiBcInByLTNcIixcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoID4gMTI2NCAmJiBcIndpZHRoOiAzMDBweFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImV4dGVuc2lvblwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zaG93SWNvblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5pY29uKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW4tbWQtYW5kLWRvd25cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uc2hvd0ljb25cbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgaGlkZGVuLW1kLWFuZC1kb3duIGFjY2VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLW1kLWFuZC1kb3duXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvd0xvZ29cbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRkZW4tbWQtYW5kLXVwXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5sb2dvIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NjhhNjY0NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjY4YTY2NDZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MZWZ0U2lkZUJhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4OTJjMGNhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGVmdFNpZGVCYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE4OTJjMGNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTg5MmMwY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiPHRlbXBsYXRlPlxuICA8di1uYXZpZ2F0aW9uLWRyYXdlclxuICAgIHYtbW9kZWw9XCJkcmF3ZXJcIlxuICAgIDpjbGlwcGVkPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA8PSAxMjY0ICYmIHRydWVcIlxuICAgIGZpeGVkXG4gICAgY2xhc3M9XCJibHVlLWdyZXlcIlxuICAgIGhpZGUtb3ZlcmxheVxuICAgIGFwcFxuICA+XG4gICAgPHYtbGlzdCBcbiAgICAgIGRlbnNlIFxuICAgICAgY2xhc3M9XCJibHVlLWdyZXlcIj5cbiAgICAgIDwhLS0gRXhwYW5kYWJsZSBHcm91cCBMaW5rcyBmcm9tIEdyb3VwIExpbmsgLS0+XG4gICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCI+QWRtaW4gQXJlYTwvdi1zdWJoZWFkZXI+XG4gICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnd2FyZWhvdXNlJylcIiBcbiAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPldhcmVob3VzZSBBcmVhPC92LXN1YmhlYWRlcj5cbiAgICAgIDx2LXN1YmhlYWRlciBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdjdXN0b21lcicpXCIgXG4gICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIj5DdXN0b21lciBBcmVhPC92LXN1YmhlYWRlcj5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJywnY3VzdG9tZXInLCd3YXJlaG91c2UnXSlcIlxuICAgICAgICB0aXRsZT1cIkRhc2hib2FyZFwiXG4gICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgaWNvbj1cImZhLXRhY2hvbWV0ZXJcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJ10pXCJcbiAgICAgICAgdGl0bGU9XCJUdXRvcmlhbHNcIlxuICAgICAgICBocmVmPVwiL3R1dG9yaWFsc1wiXG4gICAgICAgIGljb249XCJtb3ZpZVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBBZG1pbiBPbmx5IEFjY2Vzc2libGUgLS0+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlVzZXJzXCIgXG4gICAgICAgIGhyZWY9XCIvdXNlcnNcIiBcbiAgICAgICAgaWNvbj1cInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiU2hpcHBlcnNcIiBcbiAgICAgICAgaHJlZj1cIi9zaGlwcGVyc1wiIFxuICAgICAgICBpY29uPVwiZmEtc2hpcFwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgXG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlJhdGVzXCIgXG4gICAgICAgIGhyZWY9XCIvcmF0ZXNcIiBcbiAgICAgICAgaWNvbj1cImF0dGFjaF9tb25leVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJCaW5zXCIgXG4gICAgICAgIGhyZWY9XCIvYmluc1wiIFxuICAgICAgICBpY29uPVwidmlld19tb2R1bGVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gV2FyZWhvdXNlIFR5cGUgQWNjb3VudCAtLT5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ3dhcmVob3VzZScsJ2FkbWluJ10pXCJcbiAgICAgICAgdGl0bGU9XCJXYXJlaG91c2VcIlxuICAgICAgICBocmVmPVwiL3dhcmVob3VzZVwiXG4gICAgICAgIGljb249XCJsb2NhdGlvbl9jaXR5XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbicsJ3dhcmVob3VzZSddKVwiXG4gICAgICAgIHRpdGxlPVwiUmVjZWl2aW5nXCIgXG4gICAgICAgIGhyZWY9XCIvcmVjZWl2aW5nXCIgXG4gICAgICAgIGljb249XCJyZWNlaXB0XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbicsJ3dhcmVob3VzZSddKVwiXG4gICAgICAgIHRpdGxlPVwiQXJjaGl2ZWRcIiBcbiAgICAgICAgaHJlZj1cIi9hcmNoaXZlZC9kc2dcIiBcbiAgICAgICAgaWNvbj1cImFyY2hpdmVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gQ29sbGFwc2libGUgTWVudSAtLT5cbiAgICAgIDxpbnZlbnRvcnktbGlua3MvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJUaWNrZXRzXCIgXG4gICAgICAgIGhyZWY9XCIvdGlja2V0c1wiIFxuICAgICAgICBpY29uPVwiY29uZmlybWF0aW9uX251bWJlclwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJNaXNjZWxsYW5lb3VzXCIgXG4gICAgICAgIGhyZWY9XCIvbWlzY2VsbGFuZW91c1wiIFxuICAgICAgICBpY29uPVwibm90ZV9hZGRcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDxpbnZvaWNlLWxpbmtzLz5cbiAgICAgIFxuICAgICAgPCEtLSBDdXN0b21lciBBY2NvdW50IFR5cGUgLS0+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydjdXN0b21lciddKVwiXG4gICAgICAgIHRpdGxlPVwiQ2xpZW50c1wiXG4gICAgICAgIGhyZWY9XCIvY2xpZW50c1wiXG4gICAgICAgIGljb249XCJidXNpbmVzc19jZW50ZXJcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gQWxsIFVzZXIgVHlwZXMgLS0+XG4gICAgICBcbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygpXCJcbiAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiIFxuICAgICAgICBocmVmPVwiL3NldHRpbmdzXCIgXG4gICAgICAgIGljb249XCJmYS1jb2dzXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soKVwiXG4gICAgICAgIHRpdGxlPVwiTG9nb3V0XCIgXG4gICAgICAgIGhyZWY9XCIvbG9nb3V0XCJcbiAgICAgICAgaWNvbj1cInBvd2VyX3NldHRpbmdzX25ld1wiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgIDwvdi1saXN0PlxuICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZMaW5rIGZyb20gXCIuLi9jb21wb25lbnRzL1ZMaW5rLnZ1ZVwiO1xuaW1wb3J0IHsgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgfSBmcm9tIFwidnVleFwiO1xuY29uc3QgeyBtYXBTdGF0ZSB9ID0gY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMoXCJhdXRoXCIpO1xuaW1wb3J0IEludmVudG9yeUxpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzXCI7XG5pbXBvcnQgSW52b2ljZUxpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL0ludm9pY2VMaW5rc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgVkxpbmssXG4gICAgSW52ZW50b3J5TGlua3MsXG4gICAgSW52b2ljZUxpbmtzXG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZHJhd2VyOiBmYWxzZVxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IFwiaXNBdXRoZW50aWNhdGVkXCJcbiAgICB9KVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzd2l0Y2ggKHNlbGYuJHZ1ZXRpZnkuYnJlYWtwb2ludC5uYW1lKSB7XG4gICAgICBjYXNlIFwieHNcIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IGZhbHNlKTtcbiAgICAgIGNhc2UgXCJzbVwiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gZmFsc2UpO1xuICAgICAgY2FzZSBcIm1kXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSB0cnVlKTtcbiAgICAgIGNhc2UgXCJsZ1wiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gdHJ1ZSk7XG4gICAgICBjYXNlIFwieGxcIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IHRydWUpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgQnVzLiRvbihcInRvZ2dsZURyYXdlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuZHJhd2VyID0gIXNlbGYuZHJhd2VyO1xuICAgIH0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMGY4YzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVkxpbmsudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMmMwZjhjMmVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzBmOGMyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjMGY4YzJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMGY4YzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVkxpbmsudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwZTVhNDNlNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMwZjhjMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zdHlsZUF2YXRhcltkYXRhLXYtMmMwZjhjMmVdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAtNTVweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VyaWFoL1NpdGVzL2RzZ2xpdmUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUVcIixcImZpbGVcIjpcIlZMaW5rLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3R5bGVBdmF0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IC01NXB4OyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjMGY4YzJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGlzdC10aWxlIFxuICAgIDphdmF0YXI9XCJhdmF0YXJPblwiIFxuICAgIDpjbGFzcz1cIlt7IHN0eWxlQXZhdGFyOiBhdmF0YXJPbiB9XVwiIFxuICAgIEBjbGljay5uYXRpdmU9XCJuYXZpZ2F0ZShocmVmKVwiXG4gID5cbiAgICA8di1saXN0LXRpbGUtYWN0aW9uIHYtaWY9XCJpY29uT24gJiYgIWF2YXRhck9uXCI+XG4gICAgICA8di1pY29uIDpzdHlsZT1cIntjb2xvcjogaXNBY3RpdmUgPyBhY3RpdmVDb2xvciA6IGljb25Db2xvciwgY3Vyc29yOiBocmVmID8gJ3BvaW50ZXInIDogJyd9XCI+e3sgaWNvbiB9fTwvdi1pY29uPlxuICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgIDx2LWxpc3QtdGlsZS1hdmF0YXIgdi1pZj1cImljb25PbiAmJiBhdmF0YXJPblwiPlxuICAgICAgPGltZyBcbiAgICAgICAgOnNyYz1cImF2YXRhclwiIFxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgPlxuICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgPHYtbGlzdC10aWxlLXRpdGxlIDpzdHlsZT1cIntjb2xvcjogaXNBY3RpdmUgPyBhY3RpdmVDb2xvciA6IGxpbmtDb2xvcn1cIj5cbiAgICAgICAgPHNwYW4gOnN0eWxlPVwie2N1cnNvcjogaHJlZiA/ICdwb2ludGVyJyA6ICcnfVwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgPC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgPHYtbGlzdC10aWxlLWFjdGlvbiB2LWlmPVwiaWNvbk9uICYmIGF2YXRhck9uXCI+XG4gICAgICA8di1pY29uIDpzdHlsZT1cIntjb2xvcjogaXNBY3RpdmUgPyBhY3RpdmVDb2xvciA6IGljb25Db2xvciwgY3Vyc29yOiBocmVmID8gJ3BvaW50ZXInIDogJyd9XCI+e3sgaWNvbiB9fTwvdi1pY29uPlxuICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICA8L3YtbGlzdC10aWxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXJrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgaHJlZjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgaWNvbkNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXJrID8gXCIjZmFmYWZhXCIgOiBcIiM3ODkwOUNcIjsgLy8gd2hpdGUgb3IgYmx1ZS1ncmV5IGxpZ2h0ZW4tMVxuICAgICAgfVxuICAgIH0sXG4gICAgbGlua0NvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXJrID8gXCIjZmFmYWZhXCIgOiBcIiNlM2I1MDBcIjsgLy8gd2hpdGUgb3IgYmx1ZS1ncmV5IGxpZ2h0ZW4tMVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBcIiNmNWMzMDBcIjsgLy8gdGVhbCBsaWdodGVuIDJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xuICAgIH0sXG4gICAgaXNEYXJrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGFyayA9PT0gdHJ1ZTtcbiAgICB9LFxuICAgIGF2YXRhck9uKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5hdmF0YXI7XG4gICAgfSxcbiAgICBpY29uT24oKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmljb247XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbmF2aWdhdGUoaHJlZikge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgLyogaWYgdmFsaWQgdXJsICovXG4gICAgICBpZiAoc2VsZi5pc1VSTChocmVmKSkge1xuICAgICAgICB3aW5kb3cub3BlbihocmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIHdoZW4gdXNpbmcgdnVlIHJvdXRlciBwYXRoICovXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7aHJlZn1gIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNVUkwoc3RyKSB7XG4gICAgICB2YXIgdXJsUmVnZXggPVxuICAgICAgICBcIl4oPyFtYWlsdG86KSg/Oig/Omh0dHB8aHR0cHN8ZnRwKTovLykoPzpcXFxcUysoPzo6XFxcXFMqKT9AKT8oPzooPzooPzpbMS05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAxXVxcXFxkfDIyWzAtM10pKD86XFxcXC4oPzoxP1xcXFxkezEsMn18MlswLTRdXFxcXGR8MjVbMC01XSkpezJ9KD86XFxcXC4oPzpbMC05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAtNF1cXFxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKy0/KSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKSg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKy0/KSpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rKSooPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmXXsyLH0pKSl8bG9jYWxob3N0KSg/OjpcXFxcZHsyLDV9KT8oPzooL3xcXFxcP3wjKVteXFxcXHNdKik/JFwiO1xuICAgICAgdmFyIHVybCA9IG5ldyBSZWdFeHAodXJsUmVnZXgsIFwiaVwiKTtcbiAgICAgIHJldHVybiBzdHIubGVuZ3RoIDwgMjA4MyAmJiB1cmwudGVzdChzdHIpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uc3R5bGVBdmF0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtNTVweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbeyBzdHlsZUF2YXRhcjogX3ZtLmF2YXRhck9uIH1dLFxuICAgICAgYXR0cnM6IHsgYXZhdGFyOiBfdm0uYXZhdGFyT24gfSxcbiAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0ubmF2aWdhdGUoX3ZtLmhyZWYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5pY29uT24gJiYgIV92bS5hdmF0YXJPblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlID8gX3ZtLmFjdGl2ZUNvbG9yIDogX3ZtLmljb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBfdm0uaHJlZiA/IFwicG9pbnRlclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmljb24pKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmljb25PbiAmJiBfdm0uYXZhdGFyT25cbiAgICAgICAgPyBfYyhcInYtbGlzdC10aWxlLWF2YXRhclwiLCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhciwgYWx0OiBcIlwiIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS10aXRsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogX3ZtLmlzQWN0aXZlID8gX3ZtLmFjdGl2ZUNvbG9yIDogX3ZtLmxpbmtDb2xvciB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdHlsZTogeyBjdXJzb3I6IF92bS5ocmVmID8gXCJwb2ludGVyXCIgOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmljb25PbiAmJiBfdm0uYXZhdGFyT25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZSA/IF92bS5hY3RpdmVDb2xvciA6IF92bS5pY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogX3ZtLmhyZWYgPyBcInBvaW50ZXJcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmMwZjhjMmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJjMGY4YzJlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWI3NDE5OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWI3NDE5OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jOWI3NDE5OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM5Yjc0MTk4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDUxMWJjY2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWI3NDE5OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYzliNzQxOThcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VyaWFoL1NpdGVzL2RzZ2xpdmUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdJQTtFQUNBLDBCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkludmVudG9yeUxpbmtzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1saXN0IFxcbiAgICBjbGFzcz1cXFwiYmx1ZS1ncmV5XFxcIlxcbiAgICBkYXJrXFxuICA+XFxuICAgIDx2LWxpc3QtZ3JvdXBcXG4gICAgICB2LWZvcj1cXFwiaXRlbSBpbiBpdGVtc1xcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJpdGVtLmFjdGl2ZVxcXCJcXG4gICAgICA6a2V5PVxcXCJpdGVtLnRpdGxlXFxcIlxcbiAgICAgIG5vLWFjdGlvblxcbiAgICAgIGFjdGl2ZS1jbGFzcz1cXFwiYWNjZW50LS10ZXh0XFxcIlxcbiAgICA+XFxuICAgICAgPHYtbGlzdC10aWxlIHNsb3Q9XFxcImFjdGl2YXRvclxcXCI+XFxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJ3aGl0ZVxcXCI+e3sgaXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBpdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICA8L3YtbGlzdC10aWxlPlxcblxcbiAgICAgIDx2LWxpc3QtdGlsZVxcbiAgICAgICAgdi1mb3I9XFxcInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1xcXCIgXFxuICAgICAgICB2LWlmPVxcXCIkYXV0aC5jaGVjayhzdWJJdGVtLmF1dGgpXFxcIlxcbiAgICAgICAgOmtleT1cXFwic3ViSXRlbS50aXRsZVxcXCJcXG4gICAgICAgIDpzdHlsZT1cXFwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVxcXCJcXG4gICAgICAgIEBjbGljaz1cXFwibG9hZHZpZXcoc3ViSXRlbSlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBzdWJJdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gOmNvbG9yPVxcXCJpc0FjdGl2ZShzdWJJdGVtKSA/ICd0ZWFsJyA6ICd3aGl0ZSdcXFwiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICA8L3YtbGlzdC1ncm91cD5cXG4gIDwvdi1saXN0PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGFjdGl2ZUNvbG9yOiBcXFwiIzREQjZBQ1xcXCIsXFxuICAgICAgbGlua0NvbG9yOiBcXFwiI2ZmZmZmXFxcIixcXG4gICAgICBpdGVtczogW1xcbiAgICAgICAge1xcbiAgICAgICAgICBhY3Rpb246IFxcXCJjb2xsZWN0aW9uc19ib29rbWFya1xcXCIsXFxuICAgICAgICAgIHRpdGxlOiBcXFwiSW52ZW50b3JpZXNcXFwiLFxcbiAgICAgICAgICBpdGVtczogW1xcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQWxsIFVua25vd24gUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9hbGwtdW5rbm93bi1yZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiZmEtcXVlc3Rpb24tY2lyY2xlXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVbmtub3duIEN1c3RvbWVyXFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmtub3duLWN1c3RvbWVyXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVbmtub3duIENsaWVudFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdW5rbm93bi1jbGllbnRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiZmEtdXNlcnNcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiLCBcXFwiY3VzdG9tZXJcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVbmtub3duIFNoaXBwZXJcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3Vua25vd24tc2hpcHBlclxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS1zaGlwXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiRGFtYWdlZCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2RhbWFnZWRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiYnJva2VuX2ltYWdlXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIiwgXFxcImN1c3RvbWVyXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiUmVwYWlyZWQgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9yZXBhaXJlZFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJidWlsZFxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVuZGVsaXZlcmVkIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdW5kZWxpdmVyZWRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiZmEtdHJ1Y2tcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiLCBcXFwiY3VzdG9tZXJcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJCaW4gUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9iaW5cXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiYXBwc1xcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ3VzdG9tZXIgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9jdXN0b21lclxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJsb2NhbF9saWJyYXJ5XFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDbGllbnQgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9jbGllbnRzXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcInBlcm1fY29udGFjdF9jYWxlbmRhclxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIl1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIF1cXG4gICAgICAgIH1cXG4gICAgICBdXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBpc0FjdGl2ZShpdGVtKSB7XFxuICAgICAgcmV0dXJuIGl0ZW0uaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcXG4gICAgfSxcXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7c3ViSXRlbS5ocmVmfWAgfSk7XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1jOWI3NDE5OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGlzdCBcbiAgICBjbGFzcz1cImJsdWUtZ3JleVwiXG4gICAgZGFya1xuICA+XG4gICAgPHYtbGlzdC1ncm91cFxuICAgICAgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCJcbiAgICAgIHYtbW9kZWw9XCJpdGVtLmFjdGl2ZVwiXG4gICAgICA6a2V5PVwiaXRlbS50aXRsZVwiXG4gICAgICBuby1hY3Rpb25cbiAgICAgIGFjdGl2ZS1jbGFzcz1cImFjY2VudC0tdGV4dFwiXG4gICAgPlxuICAgICAgPHYtbGlzdC10aWxlIHNsb3Q9XCJhY3RpdmF0b3JcIj5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICA8L3YtbGlzdC10aWxlPlxuXG4gICAgICA8di1saXN0LXRpbGVcbiAgICAgICAgdi1mb3I9XCJzdWJJdGVtIGluIGl0ZW0uaXRlbXNcIiBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKHN1Ykl0ZW0uYXV0aClcIlxuICAgICAgICA6a2V5PVwic3ViSXRlbS50aXRsZVwiXG4gICAgICAgIDpzdHlsZT1cIntjb2xvcjogaXNBY3RpdmUoc3ViSXRlbSkgPyBhY3RpdmVDb2xvciA6IGxpbmtDb2xvcn1cIlxuICAgICAgICBAY2xpY2s9XCJsb2FkdmlldyhzdWJJdGVtKVwiXG4gICAgICA+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBzdWJJdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XCJpc0FjdGl2ZShzdWJJdGVtKSA/ICd0ZWFsJyA6ICd3aGl0ZSdcIj57eyBzdWJJdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgPC92LWxpc3QtZ3JvdXA+XG4gIDwvdi1saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlQ29sb3I6IFwiIzREQjZBQ1wiLFxuICAgICAgbGlua0NvbG9yOiBcIiNmZmZmZlwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGlvbjogXCJjb2xsZWN0aW9uc19ib29rbWFya1wiLFxuICAgICAgICAgIHRpdGxlOiBcIkludmVudG9yaWVzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIFVua25vd24gUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvYWxsLXVua25vd24tcmVwb3J0XCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJmYS1xdWVzdGlvbi1jaXJjbGVcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVua25vd24gQ3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy91bmtub3duLWN1c3RvbWVyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJVbmtub3duIENsaWVudFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3Vua25vd24tY2xpZW50XCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJmYS11c2Vyc1wiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiLCBcImN1c3RvbWVyXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJVbmtub3duIFNoaXBwZXJcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy91bmtub3duLXNoaXBwZXJcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXNoaXBcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkRhbWFnZWQgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvZGFtYWdlZFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiYnJva2VuX2ltYWdlXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlJlcGFpcmVkIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3JlcGFpcmVkXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJidWlsZFwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiLCBcImN1c3RvbWVyXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJVbmRlbGl2ZXJlZCBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy91bmRlbGl2ZXJlZFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiZmEtdHJ1Y2tcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIiwgXCJjdXN0b21lclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQmluIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2JpblwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiYXBwc1wiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ3VzdG9tZXIgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvY3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImxvY2FsX2xpYnJhcnlcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNsaWVudCBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9jbGllbnRzXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJwZXJtX2NvbnRhY3RfY2FsZW5kYXJcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNBY3RpdmUoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcbiAgICB9LFxuICAgIGxvYWR2aWV3KHN1Ykl0ZW0pIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7c3ViSXRlbS5ocmVmfWAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxpc3RcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJsdWUtZ3JleVwiLCBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSxcbiAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwidi1saXN0LWdyb3VwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgYXR0cnM6IHsgXCJuby1hY3Rpb25cIjogXCJcIiwgXCJhY3RpdmUtY2xhc3NcIjogXCJhY2NlbnQtLXRleHRcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwiYWN0aXZlXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWN0aXZlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiB9LCBzbG90OiBcImFjdGl2YXRvclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ3aGl0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uYWN0aW9uKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGl0bGUpKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChpdGVtLml0ZW1zLCBmdW5jdGlvbihzdWJJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRhdXRoLmNoZWNrKHN1Ykl0ZW0uYXV0aClcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdWJJdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUoc3ViSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmFjdGl2ZUNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5saW5rQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZHZpZXcoc3ViSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3Moc3ViSXRlbS50aXRsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlKHN1Ykl0ZW0pID8gXCJ0ZWFsXCIgOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Ykl0ZW0uYWN0aW9uKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIH0pXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYzliNzQxOThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWM5Yjc0MTk4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM5ZTYwNzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzllNjA3N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQwMTI2OTZiXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzllNjA3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS91cmlhaC9TaXRlcy9kc2dsaXZlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0VBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52b2ljZUxpbmtzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8di1saXN0IFxcbiAgICB2LWlmPVxcXCIkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCIgXFxuICAgIGNsYXNzPVxcXCJibHVlLWdyZXlcXFwiXFxuICAgIGRhcmtcXG4gID5cXG4gICAgPHYtbGlzdC1ncm91cFxcbiAgICAgIHYtZm9yPVxcXCJpdGVtIGluIGl0ZW1zXFxcIlxcbiAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWN0aXZlXFxcIlxcbiAgICAgIDprZXk9XFxcIml0ZW0udGl0bGVcXFwiXFxuICAgICAgbm8tYWN0aW9uXFxuICAgICAgYWN0aXZlLWNsYXNzPVxcXCJhY2NlbnQtLXRleHRcXFwiXFxuICAgID5cXG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcIndoaXRlXFxcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuXFxuICAgICAgPHYtbGlzdC10aWxlXFxuICAgICAgICB2LWZvcj1cXFwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXFxcIlxcbiAgICAgICAgOmtleT1cXFwic3ViSXRlbS50aXRsZVxcXCJcXG4gICAgICAgIDpzdHlsZT1cXFwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVxcXCJcXG4gICAgICAgIEBjbGljaz1cXFwibG9hZHZpZXcoc3ViSXRlbSlcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBzdWJJdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gOmNvbG9yPVxcXCJpc0FjdGl2ZShzdWJJdGVtKSA/ICd0ZWFsJyA6ICd3aGl0ZSdcXFwiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICA8L3YtbGlzdC1ncm91cD5cXG4gIDwvdi1saXN0PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGFjdGl2ZUNvbG9yOiBcXFwiIzREQjZBQ1xcXCIsXFxuICAgICAgbGlua0NvbG9yOiBcXFwiI2ZmZmZmXFxcIixcXG4gICAgICBpdGVtczogW1xcbiAgICAgICAge1xcbiAgICAgICAgICBhY3Rpb246IFxcXCJjYXJkX21lbWJlcnNoaXBcXFwiLFxcbiAgICAgICAgICB0aXRsZTogXFxcIkludm9pY2VzXFxcIixcXG4gICAgICAgICAgaXRlbXM6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkdlbmVyYXRlIEludm9pY2VcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9pbnZvaWNlcy9nZW5lcmF0ZVxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJzY2hlZHVsZVxcXCJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHsgdGl0bGU6IFxcXCJJbnZvaWNlc1xcXCIsIGhyZWY6IFxcXCIvaW52b2ljZXNcXFwiLCBhY3Rpb246IFxcXCJhbGxfaW5ib3hcXFwiIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJXZWVrbHkgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy90b3RhbC1hbGwtY3VzdG9tZXItaW52b2ljZVxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJwaWN0dXJlX2FzX3BkZlxcXCJcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIF1cXG4gICAgICAgIH1cXG4gICAgICBdXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBpc0FjdGl2ZShpdGVtKSB7XFxuICAgICAgcmV0dXJuIGl0ZW0uaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcXG4gICAgfSxcXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7c3ViSXRlbS5ocmVmfWAgfSk7XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zOWU2MDc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCI8dGVtcGxhdGU+XG4gIDx2LWxpc3QgXG4gICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCIgXG4gICAgY2xhc3M9XCJibHVlLWdyZXlcIlxuICAgIGRhcmtcbiAgPlxuICAgIDx2LWxpc3QtZ3JvdXBcbiAgICAgIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiXG4gICAgICB2LW1vZGVsPVwiaXRlbS5hY3RpdmVcIlxuICAgICAgOmtleT1cIml0ZW0udGl0bGVcIlxuICAgICAgbm8tYWN0aW9uXG4gICAgICBhY3RpdmUtY2xhc3M9XCJhY2NlbnQtLXRleHRcIlxuICAgID5cbiAgICAgIDx2LWxpc3QtdGlsZSBzbG90PVwiYWN0aXZhdG9yXCI+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtaWNvbiBjb2xvcj1cIndoaXRlXCI+e3sgaXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBpdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgPC92LWxpc3QtdGlsZT5cblxuICAgICAgPHYtbGlzdC10aWxlXG4gICAgICAgIHYtZm9yPVwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXCJcbiAgICAgICAgOmtleT1cInN1Ykl0ZW0udGl0bGVcIlxuICAgICAgICA6c3R5bGU9XCJ7Y29sb3I6IGlzQWN0aXZlKHN1Ykl0ZW0pID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XCJcbiAgICAgICAgQGNsaWNrPVwibG9hZHZpZXcoc3ViSXRlbSlcIlxuICAgICAgPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgc3ViSXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cblxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gOmNvbG9yPVwiaXNBY3RpdmUoc3ViSXRlbSkgPyAndGVhbCcgOiAnd2hpdGUnXCI+e3sgc3ViSXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICA8L3YtbGlzdC10aWxlPlxuICAgIDwvdi1saXN0LWdyb3VwPlxuICA8L3YtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUNvbG9yOiBcIiM0REI2QUNcIixcbiAgICAgIGxpbmtDb2xvcjogXCIjZmZmZmZcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhY3Rpb246IFwiY2FyZF9tZW1iZXJzaGlwXCIsXG4gICAgICAgICAgdGl0bGU6IFwiSW52b2ljZXNcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJHZW5lcmF0ZSBJbnZvaWNlXCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL2ludm9pY2VzL2dlbmVyYXRlXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJzY2hlZHVsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJJbnZvaWNlc1wiLCBocmVmOiBcIi9pbnZvaWNlc1wiLCBhY3Rpb246IFwiYWxsX2luYm94XCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiV2Vla2x5IFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3RvdGFsLWFsbC1jdXN0b21lci1pbnZvaWNlXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJwaWN0dXJlX2FzX3BkZlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzQWN0aXZlKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XG4gICAgfSxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke3N1Ykl0ZW0uaHJlZn1gIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgID8gX2MoXG4gICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsIGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWFjdGlvblwiOiBcIlwiLCBcImFjdGl2ZS1jbGFzc1wiOiBcImFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwiYWN0aXZlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiIH0sIHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hY3Rpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uaXRlbXMsIGZ1bmN0aW9uKHN1Ykl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3ViSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlKHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5hY3RpdmVDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubGlua0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWR2aWV3KHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Ykl0ZW0udGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKSA/IFwidGVhbFwiIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLmFjdGlvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzllNjA3N2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM5ZTYwNzdhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJsdWUtZ3JleVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgY2xpcHBlZDogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiB0cnVlLFxuICAgICAgICBmaXhlZDogXCJcIixcbiAgICAgICAgXCJoaWRlLW92ZXJsYXlcIjogXCJcIixcbiAgICAgICAgYXBwOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5kcmF3ZXIsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0uZHJhd2VyID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwiZHJhd2VyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsdWUtZ3JleVwiLCBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtc3ViaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRtaW4gQXJlYVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcIndhcmVob3VzZVwiKVxuICAgICAgICAgICAgPyBfYyhcInYtc3ViaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiV2FyZWhvdXNlIEFyZWFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJjdXN0b21lclwiKVxuICAgICAgICAgICAgPyBfYyhcInYtc3ViaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3VzdG9tZXIgQXJlYVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJhZG1pblwiLCBcImN1c3RvbWVyXCIsIFwid2FyZWhvdXNlXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLXRhY2hvbWV0ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiYWRtaW5cIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHV0b3JpYWxzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi90dXRvcmlhbHNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibW92aWVcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi91c2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaGlwcGVyc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvc2hpcHBlcnNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtc2hpcFwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmF0ZXNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3JhdGVzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQmluc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYmluc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJ2aWV3X21vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJ3YXJlaG91c2VcIiwgXCJhZG1pblwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJXYXJlaG91c2VcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3dhcmVob3VzZVwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJsb2NhdGlvbl9jaXR5XCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlY2VpdmluZ1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvcmVjZWl2aW5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcInJlY2VpcHRcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJjaGl2ZWRcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FyY2hpdmVkL2RzZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJhcmNoaXZlXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnZlbnRvcnktbGlua3NcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldHNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3RpY2tldHNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiY29uZmlybWF0aW9uX251bWJlclwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTWlzY2VsbGFuZW91c1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvbWlzY2VsbGFuZW91c1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJub3RlX2FkZFwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW52b2ljZS1saW5rc1wiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJjdXN0b21lclwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJDbGllbnRzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9jbGllbnRzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImJ1c2luZXNzX2NlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjaygpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3NldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLWNvZ3NcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvbG9nb3V0XCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcInBvd2VyX3NldHRpbmdzX25ld1wiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMTg5MmMwY2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4OTJjMGNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJsZWZ0LXNpZGUtYmFyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYXBwLW5hdi1iYXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250ZW50XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNsaWRlLXgtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgZmx1aWQ6IFwiXCIsXG4gICAgICAgICAgICBcInBhLTBcIjogXCJcIixcbiAgICAgICAgICAgIFwibWEtMFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zY2NiZjE1ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2NjYmYxNWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDk5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiXSwic291cmNlUm9vdCI6IiJ9