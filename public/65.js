webpackJsonp([65],{

/***/ 1188:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filters: [{ text: "Filter By DSG#", value: "dsg_id", title: "Search by DSG" }, {
        text: "Filter By Style#",
        value: "style_no",
        title: "Search by Style No."
      }, {
        text: "Filter By Shipper",
        value: "shipper_name",
        title: "Search by Shipper"
      }, {
        text: "Filter By Description",
        value: "description",
        title: "Search by Description"
      }],
      sorts: [{ text: "Sort By DSG#", value: "dsg_id", title: "Sort By DSG" }, {
        text: "Sort By Style#",
        value: "style_no",
        title: "Sort By Style No."
      }, {
        text: "Sort By Shipper",
        value: "shipper_name",
        title: "Sort By Shipper"
      }, {
        text: "Sort By Description",
        value: "description",
        title: "Sort By Description"
      }],
      sortBy: {
        text: "Sorty By DSG#",
        value: "dsg_id",
        title: "Sort By DSG#"
      },
      searchBy: {
        text: "Filter By DSG#",
        value: "dsg_id",
        title: "Search By DSG"
      },
      searchOrderBy: "ASC",
      orderColor: "teal",
      date_from: false,
      date_to: false,
      contentClass: { grey: true, "lighten-4": true, "accent--text": true },
      dialog: false,
      /* table */
      headers: [{ text: "Client", value: "client_name", align: "left", sortable: true }, { text: "DSG#", value: "dsg_id", align: "left", sortable: true }, { text: "Style#", value: "style_no", align: "left", sortable: true }, { text: "Shipper", value: "shipper_name", align: "left", sortable: true }, {
        text: "Description",
        value: "description",
        align: "left",
        sortable: true
      }, {
        text: "Damage",
        value: "damage_description",
        align: "left",
        sortable: true
      }, { text: "Cube", value: "cube", align: "left", sortable: true }, {
        text: "Date Received",
        value: "date_received",
        align: "left",
        sortable: true
      }],
      items: [],
      fetch_items: [],
      toggle_items: false,
      customers: [],
      selected: [],
      pagination: {
        sortBy: "client_name",
        rowPerPage: "all"
      },
      form: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
        customer_id: ""
      }),
      // server side search packages
      searchForm: new __WEBPACK_IMPORTED_MODULE_4_vform__["Form"]({
        customer_id: null,
        from: null,
        to: null,
        searchBy: {
          text: "Filter By DSG#",
          value: "dsg_id",
          title: "Search By DSG"
        },
        sortBy: {
          text: "Sorty By DSG#",
          value: "dsg_id",
          title: "Sort By DSG#"
        },
        search: null,
        orderBy: "ASC"
      }),
      // local search client side
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
    },
    sortIcon: function sortIcon() {
      if (this.searchOrderBy === "ASC") {
        return "fa-sort-amount-asc";
      }
      return "fa-sort-amount-desc";
    }
  },
  watch: {
    items: {
      handler: function handler(newValue) {},
      deep: true
    },
    fetch_items: {
      handler: function handler(newValue) {},
      deep: true
    },
    "form.customer_id": function formCustomer_id(newValue) {
      this.searchForm.customer_id = newValue;
      this.fetchPackages();
    },
    searchOrderBy: function searchOrderBy(newValue) {
      this.searchForm.orderBy = newValue;
    },
    searchBy: function searchBy(newValue) {
      this.searchForm.searchBy = newValue;
    },
    sortBy: function sortBy(newValue) {
      this.searchForm.sortBy = newValue;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.getCustomers();
  },

  methods: {
    viewCustomPDF: function viewCustomPDF() {
      var packages = [];
      this.items.forEach(function (item) {
        packages.push(item.id);
      });
      var string = "";
      packages.forEach(function (item) {
        string += "&packages[]=" + item;
      });
      var url = window.location.protocol + "//" + window.location.hostname + "/pdf/custom-customer-report/" + this.form.customer_id + "?sortBy=" + this.pagination.sortBy + "&orderBy=" + (this.pagination.descending ? "DESC" : "ASC") + string;
      window.open(url);
    },
    revertBack: function revertBack() {
      this.toggle_items = !this.toggle_items;
      this.items = this.fetch_items;
    },
    toggleOrderBy: function toggleOrderBy() {
      if (this.searchOrderBy === "ASC") {
        this.searchOrderBy = "DESC";
        this.orderColor = "orange";
      } else {
        this.searchOrderBy = "ASC";
        this.orderColor = "teal";
      }
    },

    //! rework viewPDF
    viewPDF: function viewPDF() {
      var url = window.location.protocol + "//" + window.location.hostname + "/pdf/customer-report/" + this.form.customer_id + "?sortBy=" + this.pagination.sortBy + "&orderBy=" + (this.pagination.descending ? "DESC" : "ASC");
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
    searchPackages: function searchPackages() {
      var self = this;
      console.log("searching...");
      self.searchForm.busy = true;
      self.$validator.validateAll();
      if (self.searchForm.from && !self.searchForm.to || !self.searchForm.from && self.searchForm.to) {
        var toggleModal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        var message = "";
        if (!self.searchForm.from) {
          message = "Please Filled Up Date Received From";
        }
        if (!self.searchForm.to) {
          message = "Please Filled Up Date Received To";
        }
        toggleModal({
          title: "Validation Error!",
          html: '<p class="title">' + message + "</p>",
          type: "warning",
          confirmButtonText: "Back"
        });
      }

      if (!self.errors.any()) {
        axios
        // create API Endpoint for searching
        .post(route("api.report.searchCustomerReport"), self.searchForm).then(function (response) {
          console.log(response.data.data);
          self.items = response.data.data;
          self.toggle_items = true;
        }).catch(function (error) {
          console.log(error);
        });
      }
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
                return axios.post(route("api.report.reportByCustomer"), self.form);

              case 5:
                payload = _context.sent;

                self.items = payload.data.data;
                self.fetch_items = payload.data.data;
                _context.next = 17;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                errors = _context.t0.errors;
                message = _context.t0.message;

                if (errors) {
                  self.form.errors.set(errors);
                }
                if (message) {}
                self.form.busy = false;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
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

/***/ 1189:
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
                        _vm._v("Customer Report")
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
                  _vm.items.length > 0
                    ? _c(
                        "v-flex",
                        { attrs: { xs12: "", md6: "", "offset-md3": "" } },
                        [
                          !_vm.toggle_items
                            ? _c(
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
                                  _vm._v(
                                    "\n            View As PDF\n            "
                                  ),
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
                            : _c(
                                "v-btn",
                                {
                                  attrs: { color: "secondary", block: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.viewCustomPDF()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n            View Custom PDF Report\n            "
                                  ),
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
        { staticStyle: { "margin-top": "-170px" }, attrs: { fluid: "" } },
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
                      _c("tr", [
                        _c(
                          "th",
                          { attrs: { colspan: "3" } },
                          [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "", color: "white" } },
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    ref: "from",
                                    attrs: {
                                      "return-value": _vm.searchForm.from,
                                      persistent: "",
                                      lazy: "",
                                      "full-width": "",
                                      width: "290px"
                                    },
                                    on: {
                                      "update:returnValue": function($event) {
                                        _vm.$set(_vm.searchForm, "from", $event)
                                      }
                                    },
                                    model: {
                                      value: _vm.date_from,
                                      callback: function($$v) {
                                        _vm.date_from = $$v
                                      },
                                      expression: "date_from"
                                    }
                                  },
                                  [
                                    _c("v-text-field", {
                                      staticStyle: { "margin-top": "26px" },
                                      attrs: {
                                        slot: "activator",
                                        label: "Date Received From",
                                        "prepend-icon": "event_available",
                                        readonly: ""
                                      },
                                      slot: "activator",
                                      model: {
                                        value: _vm.searchForm.from,
                                        callback: function($$v) {
                                          _vm.$set(_vm.searchForm, "from", $$v)
                                        },
                                        expression: "searchForm.from"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-date-picker",
                                      {
                                        attrs: { scrollable: "" },
                                        model: {
                                          value: _vm.searchForm.from,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.searchForm,
                                              "from",
                                              $$v
                                            )
                                          },
                                          expression: "searchForm.from"
                                        }
                                      },
                                      [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.date_from = false
                                              }
                                            }
                                          },
                                          [_vm._v("Cancel")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.$refs.from.save(
                                                  _vm.searchForm.from
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-dialog",
                                  {
                                    ref: "to",
                                    attrs: {
                                      "return-value": _vm.searchForm.to,
                                      persistent: "",
                                      lazy: "",
                                      "full-width": "",
                                      width: "290px"
                                    },
                                    on: {
                                      "update:returnValue": function($event) {
                                        _vm.$set(_vm.searchForm, "to", $event)
                                      }
                                    },
                                    model: {
                                      value: _vm.date_to,
                                      callback: function($$v) {
                                        _vm.date_to = $$v
                                      },
                                      expression: "date_to"
                                    }
                                  },
                                  [
                                    _c("v-text-field", {
                                      staticStyle: { "margin-top": "26px" },
                                      attrs: {
                                        slot: "activator",
                                        label: "Date Received To",
                                        "prepend-icon": "event_available",
                                        readonly: ""
                                      },
                                      slot: "activator",
                                      model: {
                                        value: _vm.searchForm.to,
                                        callback: function($$v) {
                                          _vm.$set(_vm.searchForm, "to", $$v)
                                        },
                                        expression: "searchForm.to"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-date-picker",
                                      {
                                        attrs: { scrollable: "" },
                                        model: {
                                          value: _vm.searchForm.to,
                                          callback: function($$v) {
                                            _vm.$set(_vm.searchForm, "to", $$v)
                                          },
                                          expression: "searchForm.to"
                                        }
                                      },
                                      [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.date_to = false
                                              }
                                            }
                                          },
                                          [_vm._v("Cancel")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.$refs.to.save(
                                                  _vm.searchForm.to
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
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { attrs: { colspan: "2" } },
                          [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "", color: "white" } },
                              [
                                _c("v-autocomplete", {
                                  staticStyle: { "margin-top": "5px" },
                                  attrs: {
                                    items: _vm.sorts,
                                    "return-object": "",
                                    editable: "",
                                    flat: "",
                                    label: "Sort By",
                                    "hide-details": "",
                                    overflow: ""
                                  },
                                  model: {
                                    value: _vm.sortBy,
                                    callback: function($$v) {
                                      _vm.sortBy = $$v
                                    },
                                    expression: "sortBy"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { flat: "" },
                                    on: { click: _vm.toggleOrderBy }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: _vm.orderColor } },
                                      [_vm._v(_vm._s(_vm.sortIcon))]
                                    ),
                                    _vm._v(
                                      "\n                Order By: " +
                                        _vm._s(_vm.searchOrderBy) +
                                        "\n              "
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
                          "th",
                          { attrs: { colspan: "3" } },
                          [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "", color: "white" } },
                              [
                                _c("v-autocomplete", {
                                  staticStyle: { "margin-top": "5px" },
                                  attrs: {
                                    items: _vm.filters,
                                    "return-object": "",
                                    editable: "",
                                    flat: "",
                                    label: "Filter By",
                                    "hide-details": "",
                                    overflow: ""
                                  },
                                  model: {
                                    value: _vm.searchBy,
                                    callback: function($$v) {
                                      _vm.searchBy = $$v
                                    },
                                    expression: "searchBy"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "form",
                                  {
                                    staticStyle: { "margin-top": "20px" },
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        _vm.searchPackages()
                                      }
                                    }
                                  },
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
                                      staticClass: "primary--text",
                                      class: {
                                        "error--text": _vm.hasErrors("search")
                                      },
                                      staticStyle: { "margin-top": "5px" },
                                      attrs: {
                                        label: _vm.searchBy.title,
                                        "error-messages": _vm.errorMessages(
                                          "search"
                                        ),
                                        "data-vv-name": "search",
                                        "append-icon": "search",
                                        "single-line": "",
                                        "px-2": ""
                                      },
                                      on: {
                                        "click:append": function() {
                                          return _vm.searchPackages()
                                        }
                                      },
                                      model: {
                                        value: _vm.searchForm.search,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.searchForm,
                                            "search",
                                            $$v
                                          )
                                        },
                                        expression: "searchForm.search"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                !_vm.toggle_items
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: { flat: "" },
                                        on: { click: _vm.searchPackages }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "teal" } },
                                          [_vm._v("search")]
                                        ),
                                        _vm._v(
                                          "\n                Search\n              "
                                        )
                                      ],
                                      1
                                    )
                                  : _c(
                                      "v-btn",
                                      {
                                        attrs: { flat: "" },
                                        on: { click: _vm.revertBack }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "amber" } },
                                          [_vm._v("arrow_back")]
                                        ),
                                        _vm._v(
                                          "\n                Back\n              "
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
                      ]),
                      _vm._v(" "),
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
                          {
                            staticClass: "title text-xs-left",
                            class: {
                              "red--text":
                                props.item.client_id === null ||
                                props.item.client_id === 1,
                              "accent--text": props.item.client_id > 1
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.client_name) +
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
                                _vm._s(props.item.shipper_name) +
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
                                _vm._s(props.item.cube) +
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
                                _vm._s(props.item.date_received) +
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
                        "\n          Opps! There are No Items Yet At the Selected Customer!\n        "
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
    require("vue-hot-reload-api")      .rerender("data-v-0d6ca58b", module.exports)
  }
}

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1188)
/* template */
var __vue_template__ = __webpack_require__(1189)
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
Component.options.__file = "resources/assets/js/pages/Reports/Customer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d6ca58b", Component.options)
  } else {
    hotAPI.reload("data-v-0d6ca58b", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0N1c3RvbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlcG9ydHMvQ3VzdG9tZXIudnVlPzNiMWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0N1c3RvbWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzAzOTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzI5ODIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWU/OTM5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlPzg5ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZT9mYTU5Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWU/NDc5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWU/MzQ1YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlPzI3OTQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZT8wNDQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlP2I5MWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/YzIwOCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/ZWIxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZT9lNDA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZT8zZDMzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJlcnJvck1lc3NhZ2VzIiwiZmllbGQiLCJlcnJvcnMiLCJjb2xsZWN0IiwiY29uY2F0IiwiZm9ybSIsIm9ubHkiLCJoYXNFcnJvcnMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxnQkFBZ0IsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bWFpbi1sYXlvdXQ+XG4gICAgPHYtanVtYm90cm9uPlxuICAgICAgPHYtY29udGFpbmVyIFxuICAgICAgICBmbHVpZD5cbiAgICAgICAgPHYtbGF5b3V0IFxuICAgICAgICAgIHJvdyBcbiAgICAgICAgICB3cmFwPlxuICAgICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICB0ZXh0LXhzLWNlbnRlclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImRpc3BsYXktMVwiPkN1c3RvbWVyIFJlcG9ydDwvaDI+XG4gICAgICAgICAgICA8di1kaXZpZGVyLz5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgbWQ2XG4gICAgICAgICAgICBvZmZzZXQtbWQzPlxuICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgOml0ZW1zPVwiY3VzdG9tZXJzXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY3VzdG9tZXJfaWRcIlxuICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCdjdXN0b21lcicpXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ2N1c3RvbWVyJykgfVwiXG4gICAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBDdXN0b21lclwiXG4gICAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIlxuICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJjdXN0b21lclwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJDaG9vc2UgQ3VzdG9tZXJcIlxuICAgICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICAgIHYtaWY9XCJpdGVtcy5sZW5ndGg+MFwiXG4gICAgICAgICAgICB4czEyXG4gICAgICAgICAgICBtZDZcbiAgICAgICAgICAgIG9mZnNldC1tZDNcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgIHYtaWY9XCIhdG9nZ2xlX2l0ZW1zXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgQGNsaWNrPVwidmlld1BERigpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBBcyBQREZcbiAgICAgICAgICAgICAgPHYtaWNvbiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluZGlnbyBsaWdodGVuLTRcIiBcbiAgICAgICAgICAgICAgICByaWdodD5cbiAgICAgICAgICAgICAgICBwaWN0dXJlX2FzX3BkZlxuICAgICAgICAgICAgICA8L3YtaWNvbj5cblxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCIgXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIEBjbGljaz1cInZpZXdDdXN0b21QREYoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgQ3VzdG9tIFBERiBSZXBvcnRcbiAgICAgICAgICAgICAgPHYtaWNvbiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluZGlnbyBsaWdodGVuLTRcIiBcbiAgICAgICAgICAgICAgICByaWdodD5cbiAgICAgICAgICAgICAgICBwaWN0dXJlX2FzX3BkZlxuICAgICAgICAgICAgICA8L3YtaWNvbj5cblxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8di1mbGV4IFxuICAgICAgICAgICAgeHMxMiBcbiAgICAgICAgICAgIHRleHQteHMtY2VudGVyPlxuICAgICAgICAgICAgPGgyPlRvdGFsIEl0ZW1zOiB7eyBpdGVtcy5sZW5ndGggfX08L2gyPlxuICAgICAgICAgICAgPGgyPlRvdGFsIEN1YmU6IHt7IHRvdGFsX2N1YmUgfX08L2gyPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICA8L3YtanVtYm90cm9uPlxuICAgIDx2LWNvbnRhaW5lciBcbiAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDotMTcwcHg7XCJcbiAgICAgIGZsdWlkPlxuICAgICAgPCEtLSBTZWFyY2ggYW5kIEFjdGlvbiBCdXR0b25zIC0tPlxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXA+XG4gICAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgICA8di1jYXJkIFxuICAgICAgICAgICAgbGlnaHQgXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBQYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcbiAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICAgIDwhLS0gRHNnIERhdGEgVGFibGUgLS0+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJbeyd0ZXh0JzonJHZ1ZXRpZnkuZGF0YUl0ZXJhdG9yLnJvd3NQZXJQYWdlQWxsJywndmFsdWUnOi0xfV1cIlxuICAgICAgICBzZWxlY3QtYWxsXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxuICAgICAgICBleHBhbmRcbiAgICAgICAgaGlkZS1hY3Rpb25zXG4gICAgICA+XG4gICAgICAgIDwhLS0gSGVhZGVyIFNlY3Rpb24gLS0+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIHNsb3Q9XCJoZWFkZXJzXCIgXG4gICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICA8di10b29sYmFyIFxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgICAgcmVmPVwiZnJvbVwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV9mcm9tXCJcbiAgICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cInNlYXJjaEZvcm0uZnJvbVwiXG4gICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50XG4gICAgICAgICAgICAgICAgICBsYXp5XG4gICAgICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoRm9ybS5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIFJlY2VpdmVkIEZyb21cIlxuICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJldmVudF9hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi10b3A6MjZweDtcIlxuICAgICAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoRm9ybS5mcm9tXCIgXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRhdGVfZnJvbSA9IGZhbHNlXCI+Q2FuY2VsPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMuZnJvbS5zYXZlKHNlYXJjaEZvcm0uZnJvbSlcIj5PSzwvdi1idG4+XG4gICAgICAgICAgICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgICByZWY9XCJ0b1wiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJzZWFyY2hGb3JtLnRvXCJcbiAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hGb3JtLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIFJlY2VpdmVkIFRvXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRfYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjI2cHg7XCJcbiAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8di1kYXRlLXBpY2tlciBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaEZvcm0udG9cIiBcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGF0ZV90byA9IGZhbHNlXCI+Q2FuY2VsPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMudG8uc2F2ZShzZWFyY2hGb3JtLnRvKVwiPk9LPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICAgIDx2LXRvb2xiYXIgXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic29ydEJ5XCJcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cInNvcnRzXCJcbiAgICAgICAgICAgICAgICAgIHJldHVybi1vYmplY3RcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNvcnQgQnlcIlxuICAgICAgICAgICAgICAgICAgaGlkZS1kZXRhaWxzXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvd1xuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlT3JkZXJCeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XCJvcmRlckNvbG9yXCI+e3sgc29ydEljb24gfX08L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgIE9yZGVyIEJ5OiB7eyBzZWFyY2hPcmRlckJ5IH19XG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICAgIDx2LXRvb2xiYXIgXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoQnlcIlxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiZmlsdGVyc1wiXG4gICAgICAgICAgICAgICAgICByZXR1cm4tb2JqZWN0XG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZVxuICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgQnlcIlxuICAgICAgICAgICAgICAgICAgaGlkZS1kZXRhaWxzXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvd1xuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGZvcm0gXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi10b3A6MjBweDtcIiBcbiAgICAgICAgICAgICAgICAgIEBzdWJtaXQucHJldmVudD1cInNlYXJjaFBhY2thZ2VzKClcIj5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoRm9ybS5zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJzZWFyY2hCeS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3NlYXJjaCcpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ3NlYXJjaCcpIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByaW1hcnktLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBhcHBlbmQtaWNvbj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIHB4LTJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s6YXBwZW5kPVwiKCkgPT4gc2VhcmNoUGFja2FnZXMoKVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8di1idG4gXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiIXRvZ2dsZV9pdGVtc1wiXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWFyY2hQYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5zZWFyY2g8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXZlcnRCYWNrXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwiYW1iZXJcIj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIFxuICAgICAgICAgICAgICB2LWZvcj1cImhlYWRlciBpbiBwcm9wcy5oZWFkZXJzXCIgXG4gICAgICAgICAgICAgIDprZXk9XCJoZWFkZXIudGV4dFwiXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsnY29sdW1uIHNvcnRhYmxlJywgcGFnaW5hdGlvbi5kZXNjZW5kaW5nID8gJ2Rlc2MnIDogJ2FzYycsIFxuICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPT09IHBhZ2luYXRpb24uc29ydEJ5ID8gJ25hbWUnIDogJycsIFxuICAgICAgICAgICAgICAgICAgICAgICB7J3RleHQteHMtbGVmdCc6IGhlYWRlci5hbGlnbiA9PT0gJ2xlZnQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLXJpZ2h0JzogaGVhZGVyLmFsaWduID09PSAncmlnaHQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLWNlbnRlcic6IGhlYWRlci5hbGlnbiA9PT0gJ2NlbnRlcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAkdnVldGlmeS5icmVha3BvaW50LndpZHRoID49IDYwMCAmJiAndGl0bGUnXVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDx2LWljb24+YXJyb3dfdXB3YXJkPC92LWljb24+XG4gICAgICAgICAgICAgICAge3sgaGVhZGVyLnRleHQgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFJvdyBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgXG4gICAgICAgICAgc2xvdD1cIml0ZW1zXCIgXG4gICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBcbiAgICAgICAgICAgICAgOmNsYXNzPVwieydyZWQtLXRleHQnOiBwcm9wcy5pdGVtLmNsaWVudF9pZCA9PT0gbnVsbCB8fCBwcm9wcy5pdGVtLmNsaWVudF9pZCA9PT0gMSwgJ2FjY2VudC0tdGV4dCc6IHByb3BzLml0ZW0uY2xpZW50X2lkID4gMX1cIiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLmNsaWVudF9uYW1lIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLmRzZ19pZCB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLnN0eWxlX25vIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uc2hpcHBlcl9uYW1lIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsncmVkLS10ZXh0JzogcHJvcHMuaXRlbS5zaGlwcGVyX2lkID09PSBudWxsIHx8IHByb3BzLml0ZW0uc2hpcHBlcl9pZCA9PT0gMSwgJ2FjY2VudC0tdGV4dCc6IHByb3BzLml0ZW0uc2hpcHBlcl9pZCA+IDF9XCIgXG4gICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5kYW1hZ2VfZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcIj5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5jdWJlIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uZGF0ZV9yZWNlaXZlZCB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFBhZ2luYXRpb24gU2VjdGlvbiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIFxuICAgICAgICAgIHNsb3Q9XCJwYWdlVGV4dFwiXG4gICAgICAgICAgc2xvdC1zY29wZT1cInsgcGFnZVN0YXJ0LCBwYWdlU3RvcCB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIEZyb20ge3sgcGFnZVN0YXJ0IH19IHRvIHt7IHBhZ2VTdG9wIH19XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gTm8gRGF0YSBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cbiAgICAgICAgICA8di1hbGVydCBcbiAgICAgICAgICAgIDp2YWx1ZT1cInRydWVcIiBcbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZS1ncmV5XCIgXG4gICAgICAgICAgICBpY29uPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgT3BwcyEgVGhlcmUgYXJlIE5vIEl0ZW1zIFlldCBBdCB0aGUgU2VsZWN0ZWQgQ3VzdG9tZXIhXG4gICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIE5vIFNlYXJjaCBSZXN1bHQgU2VjdGlvbiAtLT5cbiAgICAgICAgPHYtYWxlcnQgXG4gICAgICAgICAgc2xvdD1cIm5vLXJlc3VsdHNcIiBcbiAgICAgICAgICA6dmFsdWU9XCJ0cnVlXCIgXG4gICAgICAgICAgY29sb3I9XCJibHVlLWdyZXlcIiBcbiAgICAgICAgICBpY29uPVwid2FybmluZ1wiXG4gICAgICAgID5cbiAgICAgICAgICBZb3VyIHNlYXJjaCBmb3IgXCJ7eyBzZWFyY2ggfX1cIiBmb3VuZCBubyByZXN1bHRzLlxuICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L21haW4tbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJMYXlvdXRzL01haW4udnVlXCI7XG5pbXBvcnQgdmFsaWRhdGlvbkVycm9yIGZyb20gXCJNaXhpbnMvdmFsaWRhdGlvbi1lcnJvclwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJ2Zm9ybVwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE1haW5MYXlvdXRcbiAgfSxcbiAgbWl4aW5zOiBbdmFsaWRhdGlvbkVycm9yXSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiRmlsdGVyIEJ5IERTRyNcIiwgdmFsdWU6IFwiZHNnX2lkXCIsIHRpdGxlOiBcIlNlYXJjaCBieSBEU0dcIiB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkZpbHRlciBCeSBTdHlsZSNcIixcbiAgICAgICAgdmFsdWU6IFwic3R5bGVfbm9cIixcbiAgICAgICAgdGl0bGU6IFwiU2VhcmNoIGJ5IFN0eWxlIE5vLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkZpbHRlciBCeSBTaGlwcGVyXCIsXG4gICAgICAgIHZhbHVlOiBcInNoaXBwZXJfbmFtZVwiLFxuICAgICAgICB0aXRsZTogXCJTZWFyY2ggYnkgU2hpcHBlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkZpbHRlciBCeSBEZXNjcmlwdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICB0aXRsZTogXCJTZWFyY2ggYnkgRGVzY3JpcHRpb25cIlxuICAgICAgfVxuICAgIF0sXG4gICAgc29ydHM6IFtcbiAgICAgIHsgdGV4dDogXCJTb3J0IEJ5IERTRyNcIiwgdmFsdWU6IFwiZHNnX2lkXCIsIHRpdGxlOiBcIlNvcnQgQnkgRFNHXCIgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJTb3J0IEJ5IFN0eWxlI1wiLFxuICAgICAgICB2YWx1ZTogXCJzdHlsZV9ub1wiLFxuICAgICAgICB0aXRsZTogXCJTb3J0IEJ5IFN0eWxlIE5vLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlNvcnQgQnkgU2hpcHBlclwiLFxuICAgICAgICB2YWx1ZTogXCJzaGlwcGVyX25hbWVcIixcbiAgICAgICAgdGl0bGU6IFwiU29ydCBCeSBTaGlwcGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiU29ydCBCeSBEZXNjcmlwdGlvblwiLFxuICAgICAgICB2YWx1ZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICB0aXRsZTogXCJTb3J0IEJ5IERlc2NyaXB0aW9uXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHNvcnRCeToge1xuICAgICAgdGV4dDogXCJTb3J0eSBCeSBEU0cjXCIsXG4gICAgICB2YWx1ZTogXCJkc2dfaWRcIixcbiAgICAgIHRpdGxlOiBcIlNvcnQgQnkgRFNHI1wiXG4gICAgfSxcbiAgICBzZWFyY2hCeToge1xuICAgICAgdGV4dDogXCJGaWx0ZXIgQnkgRFNHI1wiLFxuICAgICAgdmFsdWU6IFwiZHNnX2lkXCIsXG4gICAgICB0aXRsZTogXCJTZWFyY2ggQnkgRFNHXCJcbiAgICB9LFxuICAgIHNlYXJjaE9yZGVyQnk6IFwiQVNDXCIsXG4gICAgb3JkZXJDb2xvcjogXCJ0ZWFsXCIsXG4gICAgZGF0ZV9mcm9tOiBmYWxzZSxcbiAgICBkYXRlX3RvOiBmYWxzZSxcbiAgICBjb250ZW50Q2xhc3M6IHsgZ3JleTogdHJ1ZSwgXCJsaWdodGVuLTRcIjogdHJ1ZSwgXCJhY2NlbnQtLXRleHRcIjogdHJ1ZSB9LFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgLyogdGFibGUgKi9cbiAgICBoZWFkZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiQ2xpZW50XCIsIHZhbHVlOiBcImNsaWVudF9uYW1lXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgdGV4dDogXCJEU0cjXCIsIHZhbHVlOiBcImRzZ19pZFwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiU3R5bGUjXCIsIHZhbHVlOiBcInN0eWxlX25vXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgdGV4dDogXCJTaGlwcGVyXCIsIHZhbHVlOiBcInNoaXBwZXJfbmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgdmFsdWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJEYW1hZ2VcIixcbiAgICAgICAgdmFsdWU6IFwiZGFtYWdlX2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6IFwiQ3ViZVwiLCB2YWx1ZTogXCJjdWJlXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJEYXRlIFJlY2VpdmVkXCIsXG4gICAgICAgIHZhbHVlOiBcImRhdGVfcmVjZWl2ZWRcIixcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaXRlbXM6IFtdLFxuICAgIGZldGNoX2l0ZW1zOiBbXSxcbiAgICB0b2dnbGVfaXRlbXM6IGZhbHNlLFxuICAgIGN1c3RvbWVyczogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIHNvcnRCeTogXCJjbGllbnRfbmFtZVwiLFxuICAgICAgcm93UGVyUGFnZTogXCJhbGxcIlxuICAgIH0sXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgY3VzdG9tZXJfaWQ6IFwiXCJcbiAgICB9KSxcbiAgICAvLyBzZXJ2ZXIgc2lkZSBzZWFyY2ggcGFja2FnZXNcbiAgICBzZWFyY2hGb3JtOiBuZXcgRm9ybSh7XG4gICAgICBjdXN0b21lcl9pZDogbnVsbCxcbiAgICAgIGZyb206IG51bGwsXG4gICAgICB0bzogbnVsbCxcbiAgICAgIHNlYXJjaEJ5OiB7XG4gICAgICAgIHRleHQ6IFwiRmlsdGVyIEJ5IERTRyNcIixcbiAgICAgICAgdmFsdWU6IFwiZHNnX2lkXCIsXG4gICAgICAgIHRpdGxlOiBcIlNlYXJjaCBCeSBEU0dcIlxuICAgICAgfSxcbiAgICAgIHNvcnRCeToge1xuICAgICAgICB0ZXh0OiBcIlNvcnR5IEJ5IERTRyNcIixcbiAgICAgICAgdmFsdWU6IFwiZHNnX2lkXCIsXG4gICAgICAgIHRpdGxlOiBcIlNvcnQgQnkgRFNHI1wiXG4gICAgICB9LFxuICAgICAgc2VhcmNoOiBudWxsLFxuICAgICAgb3JkZXJCeTogXCJBU0NcIlxuICAgIH0pLFxuICAgIC8vIGxvY2FsIHNlYXJjaCBjbGllbnQgc2lkZVxuICAgIHNlYXJjaDogXCJcIixcbiAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuICB9KSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0b3RhbF9jdWJlKCkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdG90YWwgKz0gaXRlbS5jdWJlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYCR7dG90YWwudG9GaXhlZCg0KX0gY3UuZnRgO1xuICAgIH0sXG4gICAgc29ydEljb24oKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hPcmRlckJ5ID09PSBcIkFTQ1wiKSB7XG4gICAgICAgIHJldHVybiBcImZhLXNvcnQtYW1vdW50LWFzY1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiZmEtc29ydC1hbW91bnQtZGVzY1wiO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHt9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH0sXG4gICAgZmV0Y2hfaXRlbXM6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7fSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIFwiZm9ybS5jdXN0b21lcl9pZFwiKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaEZvcm0uY3VzdG9tZXJfaWQgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuZmV0Y2hQYWNrYWdlcygpO1xuICAgIH0sXG4gICAgc2VhcmNoT3JkZXJCeShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2hGb3JtLm9yZGVyQnkgPSBuZXdWYWx1ZTtcbiAgICB9LFxuICAgIHNlYXJjaEJ5KG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaEZvcm0uc2VhcmNoQnkgPSBuZXdWYWx1ZTtcbiAgICB9LFxuICAgIHNvcnRCeShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2hGb3JtLnNvcnRCeSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5nZXRDdXN0b21lcnMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHZpZXdDdXN0b21QREYoKSB7XG4gICAgICBsZXQgcGFja2FnZXMgPSBbXTtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgcGFja2FnZXMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHN0cmluZyA9IFwiXCI7XG4gICAgICBwYWNrYWdlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBzdHJpbmcgKz0gYCZwYWNrYWdlc1tdPSR7aXRlbX1gO1xuICAgICAgfSk7XG4gICAgICBsZXQgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICB9L3BkZi9jdXN0b20tY3VzdG9tZXItcmVwb3J0LyR7dGhpcy5mb3JtLmN1c3RvbWVyX2lkfT9zb3J0Qnk9JHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnNvcnRCeVxuICAgICAgfSZvcmRlckJ5PSR7dGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyBcIkRFU0NcIiA6IFwiQVNDXCJ9JHtzdHJpbmd9YDtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgfSxcbiAgICByZXZlcnRCYWNrKCkge1xuICAgICAgdGhpcy50b2dnbGVfaXRlbXMgPSAhdGhpcy50b2dnbGVfaXRlbXM7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5mZXRjaF9pdGVtcztcbiAgICB9LFxuICAgIHRvZ2dsZU9yZGVyQnkoKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hPcmRlckJ5ID09PSBcIkFTQ1wiKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoT3JkZXJCeSA9IFwiREVTQ1wiO1xuICAgICAgICB0aGlzLm9yZGVyQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWFyY2hPcmRlckJ5ID0gXCJBU0NcIjtcbiAgICAgICAgdGhpcy5vcmRlckNvbG9yID0gXCJ0ZWFsXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyEgcmV3b3JrIHZpZXdQREZcbiAgICB2aWV3UERGKCkge1xuICAgICAgbGV0IHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgfS9wZGYvY3VzdG9tZXItcmVwb3J0LyR7dGhpcy5mb3JtLmN1c3RvbWVyX2lkfT9zb3J0Qnk9JHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnNvcnRCeVxuICAgICAgfSZvcmRlckJ5PSR7dGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyBcIkRFU0NcIiA6IFwiQVNDXCJ9YDtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgfSxcbiAgICBnZXRDdXN0b21lcnMoKSB7XG4gICAgICBheGlvcy5nZXQocm91dGUoXCJhcGkuZHNnLmdldEN1c3RvbWVyc1wiKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3SXRlbShpZCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiBcInZpZXctZGFtYWdlZC1wYWNrYWdlXCIsXG4gICAgICAgIHBhcmFtczogeyBpZDogYCR7aWR9YCB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNlYXJjaFBhY2thZ2VzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcuLi5cIik7XG4gICAgICBzZWxmLnNlYXJjaEZvcm0uYnVzeSA9IHRydWU7XG4gICAgICBzZWxmLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcbiAgICAgIGlmIChcbiAgICAgICAgKHNlbGYuc2VhcmNoRm9ybS5mcm9tICYmICFzZWxmLnNlYXJjaEZvcm0udG8pIHx8XG4gICAgICAgICghc2VsZi5zZWFyY2hGb3JtLmZyb20gJiYgc2VsZi5zZWFyY2hGb3JtLnRvKVxuICAgICAgKSB7XG4gICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgaWYgKCFzZWxmLnNlYXJjaEZvcm0uZnJvbSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBcIlBsZWFzZSBGaWxsZWQgVXAgRGF0ZSBSZWNlaXZlZCBGcm9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLnNlYXJjaEZvcm0udG8pIHtcbiAgICAgICAgICBtZXNzYWdlID0gXCJQbGVhc2UgRmlsbGVkIFVwIERhdGUgUmVjZWl2ZWQgVG9cIjtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiVmFsaWRhdGlvbiBFcnJvciFcIixcbiAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XCJ0aXRsZVwiPicgKyBtZXNzYWdlICsgXCI8L3A+XCIsXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQmFja1wiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuZXJyb3JzLmFueSgpKSB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgLy8gY3JlYXRlIEFQSSBFbmRwb2ludCBmb3Igc2VhcmNoaW5nXG4gICAgICAgICAgLnBvc3Qocm91dGUoXCJhcGkucmVwb3J0LnNlYXJjaEN1c3RvbWVyUmVwb3J0XCIpLCBzZWxmLnNlYXJjaEZvcm0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIHNlbGYuaXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZV9pdGVtcyA9IHRydWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hQYWNrYWdlcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZm9ybS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgIHJvdXRlKFwiYXBpLnJlcG9ydC5yZXBvcnRCeUN1c3RvbWVyXCIpLFxuICAgICAgICAgIHNlbGYuZm9ybVxuICAgICAgICApO1xuICAgICAgICBzZWxmLml0ZW1zID0gcGF5bG9hZC5kYXRhLmRhdGE7XG4gICAgICAgIHNlbGYuZmV0Y2hfaXRlbXMgPSBwYXlsb2FkLmRhdGEuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgIHNlbGYuZm9ybS5lcnJvcnMuc2V0KGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmZvcm0uYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbmdlU29ydChjb2x1bW4pIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID09PSBjb2x1bW4pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPSAhdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID0gY29sdW1uO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0N1c3RvbWVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJtYWluLWxheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtanVtYm90cm9uXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIFwidGV4dC14cy1jZW50ZXJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ3VzdG9tZXIgUmVwb3J0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kNjogXCJcIiwgXCJvZmZzZXQtbWQzXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwiY3VzdG9tZXJcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY3VzdG9tZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiY3VzdG9tZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hvb3NlIEN1c3RvbWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjdXN0b21lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNob29zZSBDdXN0b21lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmN1c3RvbWVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiY3VzdG9tZXJfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY3VzdG9tZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kNjogXCJcIiwgXCJvZmZzZXQtbWQzXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnRvZ2dsZV9pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInNlY29uZGFyeVwiLCBibG9jazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52aWV3UERGKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFZpZXcgQXMgUERGXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmRpZ28gbGlnaHRlbi00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBwaWN0dXJlX2FzX3BkZlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzZWNvbmRhcnlcIiwgYmxvY2s6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmlld0N1c3RvbVBERigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBWaWV3IEN1c3RvbSBQREYgUmVwb3J0XFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmRpZ28gbGlnaHRlbi00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBwaWN0dXJlX2FzX3BkZlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgXCJ0ZXh0LXhzLWNlbnRlclwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBJdGVtczogXCIgKyBfdm0uX3MoX3ZtLml0ZW1zLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJUb3RhbCBDdWJlOiBcIiArIF92bS5fcyhfdm0udG90YWxfY3ViZSkpXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiLTE3MHB4XCIgfSwgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsaWdodDogXCJcIiwgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoIFBhY2thZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLWl0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCIkdnVldGlmeS5kYXRhSXRlcmF0b3Iucm93c1BlclBhZ2VBbGxcIiwgdmFsdWU6IC0xIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIGV4cGFuZDogXCJcIixcbiAgICAgICAgICAgICAgICBcImhpZGUtYWN0aW9uc1wiOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnaW5hdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLnNlYXJjaEZvcm0uZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI5MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoRm9ybSwgXCJmcm9tXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfZnJvbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVfZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjI2cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBSZWNlaXZlZCBGcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudF9hdmFpbGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoRm9ybS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2hGb3JtLCBcImZyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hGb3JtLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoRm9ybS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoRm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoRm9ybS5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZV9mcm9tID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5mcm9tLnNhdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2hGb3JtLmZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT0tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5zZWFyY2hGb3JtLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjkwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2hGb3JtLCBcInRvXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3RvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjI2cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBSZWNlaXZlZCBUb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRfYXZhaWxhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaEZvcm0udG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaEZvcm0sIFwidG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hGb3JtLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaEZvcm0udG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2hGb3JtLCBcInRvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaEZvcm0udG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX3RvID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy50by5zYXZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoRm9ybS50b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPS1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnNvcnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tb2JqZWN0XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTb3J0IEJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNvcnRCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRCeSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic29ydEJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVPcmRlckJ5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBfdm0ub3JkZXJDb2xvciB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zb3J0SWNvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgT3JkZXIgQnk6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlYXJjaE9yZGVyQnkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi1vYmplY3RcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZpbHRlciBCeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaEJ5ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hCeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFBhY2thZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByaW1hcnktLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJzZWFyY2hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLnNlYXJjaEJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0yXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrOmFwcGVuZFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoUGFja2FnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaEZvcm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoRm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaEZvcm0uc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS50b2dnbGVfaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZWFyY2hQYWNrYWdlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwic2VhcmNoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgU2VhcmNoXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJldmVydEJhY2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJhbWJlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgQmFja1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwcm9wcy5oZWFkZXJzLCBmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGhlYWRlci50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4gc29ydGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb24uZGVzY2VuZGluZyA/IFwiZGVzY1wiIDogXCJhc2NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnZhbHVlID09PSBfdm0ucGFnaW5hdGlvbi5zb3J0QnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWxlZnRcIjogaGVhZGVyLmFsaWduID09PSBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtcmlnaHRcIjogaGVhZGVyLmFsaWduID09PSBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiOiBoZWFkZXIuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPj0gNjAwICYmIFwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlU29ydChoZWFkZXIudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJhcnJvd191cHdhcmRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaGVhZGVyLnRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkLS10ZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uY2xpZW50X2lkID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uY2xpZW50X2lkID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NlbnQtLXRleHRcIjogcHJvcHMuaXRlbS5jbGllbnRfaWQgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLmNsaWVudF9uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uZHNnX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5zdHlsZV9ubykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uc2hpcHBlcl9uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5kZXNjcmlwdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVkLS10ZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uc2hpcHBlcl9pZCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY2VudC0tdGV4dFwiOiBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLmRhbWFnZV9kZXNjcmlwdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uY3ViZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uZGF0ZV9yZWNlaXZlZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJwYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZVN0YXJ0ID0gcmVmLnBhZ2VTdGFydFxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZVN0b3AgPSByZWYucGFnZVN0b3BcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgRnJvbSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYWdlU3RhcnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgdG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocGFnZVN0b3ApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWUtZ3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBPcHBzISBUaGVyZSBhcmUgTm8gSXRlbXMgWWV0IEF0IHRoZSBTZWxlY3RlZCBDdXN0b21lciFcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwibm8tcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJuby1yZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWFyY2gpICtcbiAgICAgICAgICAgICAgICAgICAgICAnXCIgZm91bmQgbm8gcmVzdWx0cy5cXG4gICAgICAnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTBkNmNhNThiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wZDZjYTU4YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVwb3J0cy9DdXN0b21lci52dWVcbi8vIG1vZHVsZSBpZCA9IDExODlcbi8vIG1vZHVsZSBjaHVua3MgPSA2NSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0N1c3RvbWVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGQ2Y2E1OGJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DdXN0b21lci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXBvcnRzL0N1c3RvbWVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZDZjYTU4YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBkNmNhNThiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlcG9ydHMvQ3VzdG9tZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5NDhcbi8vIG1vZHVsZSBjaHVua3MgPSA2NSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDk1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkgMjAgMjEgMzIgMzMgMzQgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkgMjAgMjEgMzIgMzMgMzQgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTcgNTggNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjggNjkiLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8qIHRoaXMgbWl4aW5zIGlzIHJlc3BvbnNpYmxlIGZvciBjb25jYXRpbmF0aW5nIGVycm9yIG1lc3NhZ2VzIGZyb20gdmZvcm0gYW5kIHZlZS12YWxpZGF0ZSAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8qIGVycm9yQmFnIGlzIHJlbGF0YWVkIHRvIHZlZVZhbGlkYXRlIGNvbmZpZyBuYW1lKi9cbiAgICAvKiBmb3JtIGlzIHJlbGF0ZWQgdG8gdmZvcm0gKi9cbiAgICBlcnJvck1lc3NhZ2VzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuY29sbGVjdChmaWVsZCkuY29uY2F0KHRoaXMuZm9ybS5lcnJvcnMub25seShmaWVsZCkpO1xuICAgIH0sXG4gICAgaGFzRXJyb3JzKGZpZWxkKSB7XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5lcnJvcnNcbiAgICAgICAgLmNvbGxlY3QoZmllbGQpXG4gICAgICAgIC5jb25jYXQodGhpcy5mb3JtLmVycm9ycy5vbmx5KGZpZWxkKSk7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyAwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJsVks3XCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIk9NTjRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImxWSzdcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogZXh0ZXJuYWwgXCJheGlvc1wiXG52YXIgZXh0ZXJuYWxfX2F4aW9zXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJPTU40XCIpO1xudmFyIGV4dGVybmFsX19heGlvc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oZXh0ZXJuYWxfX2F4aW9zXyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3V0aWwuanNcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxyXG4gKiBEZWVwIGNvcHkgdGhlIGdpdmVuIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cbmZ1bmN0aW9uIGRlZXBDb3B5KG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIGNvcHkgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKTtcbiAgfSk7XG4gIHJldHVybiBjb3B5O1xufVxuLyoqXHJcbiAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIHdyYXAgaXQgaW4gb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtBbnl9IHZhbHVlXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cblxuZnVuY3Rpb24gYXJyYXlXcmFwKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0Vycm9ycy5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gRXJyb3JzX190eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBFcnJvcnNfX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBFcnJvcnNfX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBFcnJvcnNfX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cbnZhciBFcnJvcnNfRXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGVycm9yIGJhZyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRXJyb3JzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvcnMpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuICAvKipcclxuICAgKiBTZXQgdGhlIGVycm9ycyBvYmplY3Qgb3IgZmllbGQgZXJyb3IgbWVzc2FnZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGZpZWxkXHJcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd8dW5kZWZpbmVkfSBtZXNzYWdlc1xyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVycm9ycywgW3tcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZCwgbWVzc2FnZXMpIHtcbiAgICAgIGlmIChFcnJvcnNfX3R5cGVvZihmaWVsZCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZmllbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChfZXh0ZW5kcyh7fSwgdGhpcy5lcnJvcnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgZmllbGQsIGFycmF5V3JhcChtZXNzYWdlcykpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgaXMgYW4gZXJyb3IgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoYXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBhcmUgYW55IGVycm9ycyBmb3IgdGhlIGdpdmVuIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHsuLi5TdHJpbmd9IGZpZWxkc1xyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzQW55XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0FueSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGZpZWxkc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGFzKGZpZWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBhcmUgYW55IGVycm9ycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW55KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgU3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChmaWVsZCkge1xuICAgICAgaWYgKHRoaXMuaGFzKGZpZWxkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoZmllbGQpWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoZmllbGQpIHtcbiAgICAgIHJldHVybiBhcnJheVdyYXAodGhpcy5lcnJvcnNbZmllbGRdIHx8IFtdKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7Li4uU3RyaW5nfSBmaWVsZHNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbmx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9ubHkoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG1lc3NhZ2VzID0gW107XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZmllbGRzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGZpZWxkc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBfdGhpczIuZ2V0KGZpZWxkKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9ycyBpbiBhIGZsYXQgYXJyYXkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZsYXR0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxhdHRlbigpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIENsZWFyIG9uZSBvciBhbGwgZXJyb3IgZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfHVuZGVmaW5lZH0gZmllbGRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoZmllbGQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXJyb3JzID0ge307XG5cbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSAhPT0gZmllbGQpIHtcbiAgICAgICAgICAgIGVycm9yc1trZXldID0gX3RoaXMzLmVycm9yc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0KGVycm9ycyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVycm9ycztcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9Gb3JtLmpzXG5mdW5jdGlvbiBGb3JtX190eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBGb3JtX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgRm9ybV9fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIEZvcm1fX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gRm9ybV9fZXh0ZW5kcygpIHsgRm9ybV9fZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBGb3JtX19leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gRm9ybV9fY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gRm9ybV9fY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgRm9ybV9fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG52YXIgRm9ybV9Gb3JtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBGb3JtX19jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtKTtcblxuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc19FcnJvcnMoKTtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRlZXBDb3B5KGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbiAgLyoqXG4gICAqIEZpbGwgZm9ybSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cblxuXG4gIEZvcm1fX2NyZWF0ZUNsYXNzKEZvcm0sIFt7XG4gICAga2V5OiBcImZpbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsbChkYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5rZXlzKCkucmVkdWNlKGZ1bmN0aW9uIChkYXRhLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIGRhdGEsIEZvcm1fX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIF90aGlzMltrZXldKSk7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhIGtleXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImtleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIUZvcm0uaWdub3JlLmluY2x1ZGVzKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnQgcHJvY2Vzc2luZyB0aGUgZm9ybS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0UHJvY2Vzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFByb2Nlc3NpbmcoKSB7XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5pc2ggcHJvY2Vzc2luZyB0aGUgZm9ybS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZpbmlzaFByb2Nlc3NpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluaXNoUHJvY2Vzc2luZygpIHtcbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGZvcm0gZXJyb3JzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhRm9ybS5pZ25vcmUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpczNba2V5XSA9IGRlZXBDb3B5KF90aGlzMy5vcmlnaW5hbERhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIEdFVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZ2V0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBPU1QgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2godXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1dCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncHV0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIERFTEVURSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxldGUodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBkYXRhIHZpYSBhbiBIVFRQIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1ldGhvZCAoZ2V0LCBwb3N0LCBwYXRjaCwgcHV0KVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWcgKGF4aW9zIGNvbmZpZylcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3VibWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdChtZXRob2QsIHVybCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdGhpcy5zdGFydFByb2Nlc3NpbmcoKTtcbiAgICAgIHZhciBkYXRhID0gbWV0aG9kID09PSAnZ2V0JyA/IHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmRhdGEoKVxuICAgICAgfSA6IHRoaXMuZGF0YSgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZXh0ZXJuYWxfX2F4aW9zX19kZWZhdWx0LmEucmVxdWVzdChGb3JtX19leHRlbmRzKHtcbiAgICAgICAgICB1cmw6IF90aGlzNC5yb3V0ZSh1cmwpLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSwgY29uZmlnKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBfdGhpczQuZmluaXNoUHJvY2Vzc2luZygpO1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIF90aGlzNC5idXN5ID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF90aGlzNC5lcnJvcnMuc2V0KF90aGlzNC5leHRyYWN0RXJyb3JzKGVycm9yLnJlc3BvbnNlKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgZXJyb3JzIGZyb20gdGhlIHJlc3BvbnNlIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0RXJyb3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RFcnJvcnMocmVzcG9uc2UpIHtcbiAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCBGb3JtX190eXBlb2YocmVzcG9uc2UuZGF0YSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6IEZvcm0uZXJyb3JNZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycykge1xuICAgICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgcmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgcmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIG5hbWVkIHJvdXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicm91dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91dGUobmFtZSkge1xuICAgICAgdmFyIHBhcmFtZXRlcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIHVybCA9IG5hbWU7XG5cbiAgICAgIGlmIChGb3JtLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICB1cmwgPSBkZWNvZGVVUkkoRm9ybS5yb3V0ZXNbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoRm9ybV9fdHlwZW9mKHBhcmFtZXRlcnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgIGlkOiBwYXJhbWV0ZXJzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIntcIi5jb25jYXQoa2V5LCBcIn1cIiksIHBhcmFtZXRlcnNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIGVycm9ycyBvbiBrZXlkb3duLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybTtcbn0oKTtcblxuRm9ybV9Gb3JtLnJvdXRlcyA9IHt9O1xuRm9ybV9Gb3JtLmVycm9yTWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuRm9ybV9Gb3JtLmlnbm9yZSA9IFsnYnVzeScsICdzdWNjZXNzZnVsJywgJ2Vycm9ycycsICdvcmlnaW5hbERhdGEnXTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNyY19Gb3JtID0gKEZvcm1fRm9ybSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG4vL1xuLy9cbi8vXG4vL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgSGFzRXJyb3IgPSAoe1xuICBuYW1lOiAnaGFzLWVycm9yJyxcbiAgcHJvcHM6IHtcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZmllbGQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDM4OWE2ZGRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuaGFzKF92bS5maWVsZCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiLGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KF92bS5maWVsZCkpfX0pOl92bS5fZSgpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBIYXNFcnJvcixcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0hhc0Vycm9yID0gKENvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydC5qc1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnQgPSAoe1xuICBwcm9wczoge1xuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkaXNtaXNzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNtaXNzOiBmdW5jdGlvbiBkaXNtaXNzKCkge1xuICAgICAgaWYgKHRoaXMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRFcnJvciA9ICh7XG4gIG5hbWU6ICdhbGVydC1lcnJvcicsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdUaGVyZSB3ZXJlIHNvbWUgcHJvYmxlbXMgd2l0aCB5b3VyIGlucHV0LidcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lNzNhYTdjOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG52YXIgQWxlcnRFcnJvcl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuYW55KCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImRlZmF1bHRcIixbKF92bS5mb3JtLmVycm9ycy5oYXMoJ2Vycm9yJykpP19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgnZXJyb3InKSl9fSk6X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSldKV0sMik6X3ZtLl9lKCl9XG52YXIgQWxlcnRFcnJvcl9zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0RXJyb3JfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydEVycm9yLFxuICBBbGVydEVycm9yX3JlbmRlcixcbiAgQWxlcnRFcnJvcl9zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0RXJyb3JfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydEVycm9yX19fdnVlX3N0eWxlc19fLFxuICBBbGVydEVycm9yX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRFcnJvciA9IChBbGVydEVycm9yX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0RXJyb3JzID0gKHtcbiAgbmFtZTogJ2FsZXJ0LWVycm9ycycsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdUaGVyZSB3ZXJlIHNvbWUgcHJvYmxlbXMgd2l0aCB5b3VyIGlucHV0LidcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MjJhNjU5MVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxudmFyIEFsZXJ0RXJyb3JzX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5hbnkoKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5tZXNzYWdlKT9fYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd1bCcsX3ZtLl9sKChfdm0uZm9ybS5lcnJvcnMuZmxhdHRlbigpKSxmdW5jdGlvbihlcnJvcil7cmV0dXJuIF9jKCdsaScse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhlcnJvcil9fSl9KSldKTpfdm0uX2UoKX1cbnZhciBBbGVydEVycm9yc19zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRFcnJvcnNfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydEVycm9ycyxcbiAgQWxlcnRFcnJvcnNfcmVuZGVyLFxuICBBbGVydEVycm9yc19zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0RXJyb3JzID0gKEFsZXJ0RXJyb3JzX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRTdWNjZXNzID0gKHtcbiAgbmFtZTogJ2FsZXJ0LXN1Y2Nlc3MnLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBhZmRiOGE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxudmFyIEFsZXJ0U3VjY2Vzc19yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5zdWNjZXNzZnVsKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1zdWNjZXNzIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZGVmYXVsdFwiLFtfYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KV0pXSwyKTpfdm0uX2UoKX1cbnZhciBBbGVydFN1Y2Nlc3Nfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRTdWNjZXNzX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRTdWNjZXNzLFxuICBBbGVydFN1Y2Nlc3NfcmVuZGVyLFxuICBBbGVydFN1Y2Nlc3Nfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRTdWNjZXNzID0gKEFsZXJ0U3VjY2Vzc19Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2luZGV4LmpzXG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRm9ybVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY19Gb3JtOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJFcnJvcnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBFcnJvcnNfRXJyb3JzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJIYXNFcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfSGFzRXJyb3I7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0RXJyb3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0RXJyb3I7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0RXJyb3JzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydEVycm9yczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRTdWNjZXNzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydFN1Y2Nlc3M7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzcmNfRm9ybTsgfSk7XG5cblxuXG5cblxuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDk2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE4IDE5IDIwIDMyIDMzIDM0IDM2IDM3IDM4IDM5IDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDk2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCAzNyA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCAzNyA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDM3IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5Njlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgMzcgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgMzcgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgMzcgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA5NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgMzcgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYWluLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2NjYmYxNWVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9NYWluLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2NjYmYxNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zY2NiZjE1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlXG4vLyBtb2R1bGUgaWQgPSA5NzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiPHRlbXBsYXRlPlxuICA8di1hcHAgXG4gICAgdi1jbG9hayBcbiAgICBpZD1cImluc3BpcmVcIlxuICA+XG4gICAgPGxlZnQtc2lkZS1iYXIvPlxuICAgIDxhcHAtbmF2LWJhci8+XG4gICAgPHYtY29udGVudFxuICAgICAgdHJhbnNpdGlvbj1cInNsaWRlLXgtdHJhbnNpdGlvblwiIFxuICAgICAgZmx1aWRcbiAgICAgIHBhLTBcbiAgICAgIG1hLTBcbiAgICAgIGNsYXNzPVwid2hpdGVcIlxuICAgID5cbiAgICAgIDxzbG90Lz5cbiAgICA8L3YtY29udGVudD5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQXBwTmF2QmFyIGZyb20gXCIuLi9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXCI7XG5pbXBvcnQgTGVmdFNpZGVCYXIgZnJvbSBcIi4uL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBBcHBOYXZCYXIsXG4gICAgTGVmdFNpZGVCYXJcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NjhhNjY0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2OGE2NjQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiN2Q4ODY1ODhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02NjhhNjY0NlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJBcHBOYXZCYXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjY4YTY2NDZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIjx0ZW1wbGF0ZT5cbiAgPHYtdG9vbGJhciBcbiAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICBmaXhlZCBcbiAgICBhcHBcbiAgPlxuICAgIDx2LXRvb2xiYXItc2lkZS1pY29uIFxuICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiXG4gICAgICBAY2xpY2submF0aXZlLnN0b3A9XCJ0b2dnbGVEcmF3ZXIoKVwiXG4gICAgLz5cbiAgICA8IS0tIFRpdGxlIC0tPlxuICAgIDx2LXRvb2xiYXItdGl0bGUgXG4gICAgICB2LWlmPVwiZXh0ZW5zaW9uXCIgXG4gICAgICBzbG90PVwiZXh0ZW5zaW9uXCIgXG4gICAgICA6Y2xhc3M9XCIkdnVldGlmeS5icmVha3BvaW50LndpZHRoIDw9IDEyNjQgJiYgJ3ByLTMnXCIgXG4gICAgICA6c3R5bGU9XCIkdnVldGlmeS5icmVha3BvaW50LndpZHRoID4gMTI2NCAmJiAnd2lkdGg6IDMwMHB4J1wiIFxuICAgICAgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBtbC0wIHBsLTNcIlxuICAgID5cbiAgICAgIDx2LWljb24gXG4gICAgICAgIHYtaWY9XCJzaG93SWNvblwiIFxuICAgICAgICBjbGFzcz1cIm1sLTMgaGlkZGVuLW1kLWFuZC1kb3duIGFjY2VudFwiXG4gICAgICA+XG4gICAgICAgIHt7IGljb24gfX1cbiAgICAgIDwvdi1pY29uPlxuICAgICAgPHNwYW4gXG4gICAgICAgIGNsYXNzPVwiaGlkZGVuLW1kLWFuZC1kb3duXCIgXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2hpdGUtLXRleHRcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICA8di10b29sYmFyLXRpdGxlIFxuICAgICAgdi1lbHNlIFxuICAgICAgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiXG4gICAgPlxuICAgICAgPHYtaWNvbiBcbiAgICAgICAgdi1pZj1cInNob3dJY29uXCIgXG4gICAgICAgIGNsYXNzPVwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgaWNvbiB9fVxuICAgICAgPC92LWljb24+XG4gICAgICA8c3BhbiBcbiAgICAgICAgY2xhc3M9XCJoaWRkZW4tbWQtYW5kLWRvd25cIiBcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgIDx2LXNwYWNlci8+XG4gICAgPCEtLSBjZW50ZXIgbG9nbyAtLT5cbiAgICA8aW1nIFxuICAgICAgdi1pZj1cInNob3dMb2dvXCIgXG4gICAgICA6c3JjPVwibG9nb1wiIFxuICAgICAgY2xhc3M9XCJoaWRkZW4tbWQtYW5kLXVwXCIgXG4gICAgPlxuICAgIDx2LXNwYWNlci8+XG4gIDwvdi10b29sYmFyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBleHRlbnNpb246IGZhbHNlLFxuICAgIHNob3dMb2dvOiBmYWxzZSxcbiAgICBsb2dvOiBcIi9pbWcvbG9nby5wbmdcIixcbiAgICBzaG93SWNvbjogZmFsc2UsXG4gICAgdGl0bGU6IFwiRFNHIExpdmVcIlxuICB9KSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvKiBFbWl0IE9uIGEgQ2hpbGQgQ29tcG9uZW50IElmIFlvdSBXYW50IFRoaXMgVG8gQmUgVmlzaWJsZSAqL1xuICAgIEJ1cy4kb24oXCJoZWFkZXItZXh0ZW5zaW9uLXZpc2libGVcIiwgdmlzaWJpbGl0eSA9PiB7XG4gICAgICB0aGlzLmV4dGVuc2lvbiA9IHZpc2liaWxpdHk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICBCdXMuJGVtaXQoXCJ0b2dnbGVEcmF3ZXJcIik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtdG9vbGJhclwiLFxuICAgIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBmaXhlZDogXCJcIiwgYXBwOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci1zaWRlLWljb25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiLFxuICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgX3ZtLnRvZ2dsZURyYXdlcigpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZXh0ZW5zaW9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciBtbC0wIHBsLTNcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoIDw9IDEyNjQgJiYgXCJwci0zXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+IDEyNjQgJiYgXCJ3aWR0aDogMzAwcHhcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJleHRlbnNpb25cIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImV4dGVuc2lvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uc2hvd0ljb25cbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTMgaGlkZGVuLW1kLWFuZC1kb3duIGFjY2VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLW1kLWFuZC1kb3duXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnNob3dJY29uXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIGhpZGRlbi1tZC1hbmQtZG93biBhY2NlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmljb24pICsgXCJcXG4gICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhpZGRlbi1tZC1hbmQtZG93blwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dMb2dvXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLW1kLWFuZC11cFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ubG9nbyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjY4YTY2NDZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY2OGE2NjQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGVmdFNpZGVCYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xODkyYzBjYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xlZnRTaWRlQmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xODkyYzBjYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE4OTJjMGNhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIjx0ZW1wbGF0ZT5cbiAgPHYtbmF2aWdhdGlvbi1kcmF3ZXJcbiAgICB2LW1vZGVsPVwiZHJhd2VyXCJcbiAgICA6Y2xpcHBlZD1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPD0gMTI2NCAmJiB0cnVlXCJcbiAgICBmaXhlZFxuICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCJcbiAgICBoaWRlLW92ZXJsYXlcbiAgICBhcHBcbiAgPlxuICAgIDx2LWxpc3QgXG4gICAgICBkZW5zZSBcbiAgICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCI+XG4gICAgICA8IS0tIEV4cGFuZGFibGUgR3JvdXAgTGlua3MgZnJvbSBHcm91cCBMaW5rIC0tPlxuICAgICAgPHYtc3ViaGVhZGVyIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIiBcbiAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPkFkbWluIEFyZWE8L3Ytc3ViaGVhZGVyPlxuICAgICAgPHYtc3ViaGVhZGVyIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ3dhcmVob3VzZScpXCIgXG4gICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIj5XYXJlaG91c2UgQXJlYTwvdi1zdWJoZWFkZXI+XG4gICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnY3VzdG9tZXInKVwiIFxuICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCI+Q3VzdG9tZXIgQXJlYTwvdi1zdWJoZWFkZXI+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbicsJ2N1c3RvbWVyJywnd2FyZWhvdXNlJ10pXCJcbiAgICAgICAgdGl0bGU9XCJEYXNoYm9hcmRcIlxuICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXG4gICAgICAgIGljb249XCJmYS10YWNob21ldGVyXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWydhZG1pbiddKVwiXG4gICAgICAgIHRpdGxlPVwiVHV0b3JpYWxzXCJcbiAgICAgICAgaHJlZj1cIi90dXRvcmlhbHNcIlxuICAgICAgICBpY29uPVwibW92aWVcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDwhLS0gQWRtaW4gT25seSBBY2Nlc3NpYmxlIC0tPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJVc2Vyc1wiIFxuICAgICAgICBocmVmPVwiL3VzZXJzXCIgXG4gICAgICAgIGljb249XCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlNoaXBwZXJzXCIgXG4gICAgICAgIGhyZWY9XCIvc2hpcHBlcnNcIiBcbiAgICAgICAgaWNvbj1cImZhLXNoaXBcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJSYXRlc1wiIFxuICAgICAgICBocmVmPVwiL3JhdGVzXCIgXG4gICAgICAgIGljb249XCJhdHRhY2hfbW9uZXlcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiQmluc1wiIFxuICAgICAgICBocmVmPVwiL2JpbnNcIiBcbiAgICAgICAgaWNvbj1cInZpZXdfbW9kdWxlXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIFdhcmVob3VzZSBUeXBlIEFjY291bnQgLS0+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soWyd3YXJlaG91c2UnLCdhZG1pbiddKVwiXG4gICAgICAgIHRpdGxlPVwiV2FyZWhvdXNlXCJcbiAgICAgICAgaHJlZj1cIi93YXJlaG91c2VcIlxuICAgICAgICBpY29uPVwibG9jYXRpb25fY2l0eVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnYWRtaW4nLCd3YXJlaG91c2UnXSlcIlxuICAgICAgICB0aXRsZT1cIlJlY2VpdmluZ1wiIFxuICAgICAgICBocmVmPVwiL3JlY2VpdmluZ1wiIFxuICAgICAgICBpY29uPVwicmVjZWlwdFwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnYWRtaW4nLCd3YXJlaG91c2UnXSlcIlxuICAgICAgICB0aXRsZT1cIkFyY2hpdmVkXCIgXG4gICAgICAgIGhyZWY9XCIvYXJjaGl2ZWQvZHNnXCIgXG4gICAgICAgIGljb249XCJhcmNoaXZlXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIENvbGxhcHNpYmxlIE1lbnUgLS0+XG4gICAgICA8aW52ZW50b3J5LWxpbmtzLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiVGlja2V0c1wiIFxuICAgICAgICBocmVmPVwiL3RpY2tldHNcIiBcbiAgICAgICAgaWNvbj1cImNvbmZpcm1hdGlvbl9udW1iZXJcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiTWlzY2VsbGFuZW91c1wiIFxuICAgICAgICBocmVmPVwiL21pc2NlbGxhbmVvdXNcIiBcbiAgICAgICAgaWNvbj1cIm5vdGVfYWRkXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8aW52b2ljZS1saW5rcy8+XG4gICAgICBcbiAgICAgIDwhLS0gQ3VzdG9tZXIgQWNjb3VudCBUeXBlIC0tPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnY3VzdG9tZXInXSlcIlxuICAgICAgICB0aXRsZT1cIkNsaWVudHNcIlxuICAgICAgICBocmVmPVwiL2NsaWVudHNcIlxuICAgICAgICBpY29uPVwiYnVzaW5lc3NfY2VudGVyXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIEFsbCBVc2VyIFR5cGVzIC0tPlxuICAgICAgXG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soKVwiXG4gICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIiBcbiAgICAgICAgaHJlZj1cIi9zZXR0aW5nc1wiIFxuICAgICAgICBpY29uPVwiZmEtY29nc1wiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKClcIlxuICAgICAgICB0aXRsZT1cIkxvZ291dFwiIFxuICAgICAgICBocmVmPVwiL2xvZ291dFwiXG4gICAgICAgIGljb249XCJwb3dlcl9zZXR0aW5nc19uZXdcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICA8L3YtbGlzdD5cbiAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9WTGluay52dWVcIjtcbmltcG9ydCB7IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmNvbnN0IHsgbWFwU3RhdGUgfSA9IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzKFwiYXV0aFwiKTtcbmltcG9ydCBJbnZlbnRvcnlMaW5rcyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rc1wiO1xuaW1wb3J0IEludm9pY2VMaW5rcyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnZvaWNlTGlua3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFZMaW5rLFxuICAgIEludmVudG9yeUxpbmtzLFxuICAgIEludm9pY2VMaW5rc1xuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGRyYXdlcjogZmFsc2VcbiAgfSksXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBcImlzQXV0aGVudGljYXRlZFwiXG4gICAgfSlcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc3dpdGNoIChzZWxmLiR2dWV0aWZ5LmJyZWFrcG9pbnQubmFtZSkge1xuICAgICAgY2FzZSBcInhzXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSBmYWxzZSk7XG4gICAgICBjYXNlIFwic21cIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IGZhbHNlKTtcbiAgICAgIGNhc2UgXCJtZFwiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gdHJ1ZSk7XG4gICAgICBjYXNlIFwibGdcIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IHRydWUpO1xuICAgICAgY2FzZSBcInhsXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSB0cnVlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIEJ1cy4kb24oXCJ0b2dnbGVEcmF3ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmRyYXdlciA9ICFzZWxmLmRyYXdlcjtcbiAgICB9KTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WTGluay52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMGY4YzJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WTGluay52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJjMGY4YzJlXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmMwZjhjMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYzBmOGMyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMGU1YTQzZTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMGY4YzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVkxpbmsudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMGY4YzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVkxpbmsudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjMGY4YzJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc3R5bGVBdmF0YXJbZGF0YS12LTJjMGY4YzJlXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogLTU1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS91cmlhaC9TaXRlcy9kc2dsaXZlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUFFXCIsXCJmaWxlXCI6XCJWTGluay52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0eWxlQXZhdGFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAtNTVweDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzBmOGMyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCI8dGVtcGxhdGU+XG4gIDx2LWxpc3QtdGlsZSBcbiAgICA6YXZhdGFyPVwiYXZhdGFyT25cIiBcbiAgICA6Y2xhc3M9XCJbeyBzdHlsZUF2YXRhcjogYXZhdGFyT24gfV1cIiBcbiAgICBAY2xpY2submF0aXZlPVwibmF2aWdhdGUoaHJlZilcIlxuICA+XG4gICAgPHYtbGlzdC10aWxlLWFjdGlvbiB2LWlmPVwiaWNvbk9uICYmICFhdmF0YXJPblwiPlxuICAgICAgPHYtaWNvbiA6c3R5bGU9XCJ7Y29sb3I6IGlzQWN0aXZlID8gYWN0aXZlQ29sb3IgOiBpY29uQ29sb3IsIGN1cnNvcjogaHJlZiA/ICdwb2ludGVyJyA6ICcnfVwiPnt7IGljb24gfX08L3YtaWNvbj5cbiAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICA8di1saXN0LXRpbGUtYXZhdGFyIHYtaWY9XCJpY29uT24gJiYgYXZhdGFyT25cIj5cbiAgICAgIDxpbWcgXG4gICAgICAgIDpzcmM9XCJhdmF0YXJcIiBcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgID5cbiAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cbiAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgIDx2LWxpc3QtdGlsZS10aXRsZSA6c3R5bGU9XCJ7Y29sb3I6IGlzQWN0aXZlID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XCI+XG4gICAgICAgIDxzcGFuIDpzdHlsZT1cIntjdXJzb3I6IGhyZWYgPyAncG9pbnRlcicgOiAnJ31cIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24gdi1pZj1cImljb25PbiAmJiBhdmF0YXJPblwiPlxuICAgICAgPHYtaWNvbiA6c3R5bGU9XCJ7Y29sb3I6IGlzQWN0aXZlID8gYWN0aXZlQ29sb3IgOiBpY29uQ29sb3IsIGN1cnNvcjogaHJlZiA/ICdwb2ludGVyJyA6ICcnfVwiPnt7IGljb24gfX08L3YtaWNvbj5cbiAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgPC92LWxpc3QtdGlsZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgZGFyazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhyZWY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGljb25Db2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFyayA/IFwiI2ZhZmFmYVwiIDogXCIjNzg5MDlDXCI7IC8vIHdoaXRlIG9yIGJsdWUtZ3JleSBsaWdodGVuLTFcbiAgICAgIH1cbiAgICB9LFxuICAgIGxpbmtDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFyayA/IFwiI2ZhZmFmYVwiIDogXCIjZTNiNTAwXCI7IC8vIHdoaXRlIG9yIGJsdWUtZ3JleSBsaWdodGVuLTFcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gXCIjZjVjMzAwXCI7IC8vIHRlYWwgbGlnaHRlbiAyXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzQWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcbiAgICB9LFxuICAgIGlzRGFyaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhcmsgPT09IHRydWU7XG4gICAgfSxcbiAgICBhdmF0YXJPbigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuYXZhdGFyO1xuICAgIH0sXG4gICAgaWNvbk9uKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5pY29uO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG5hdmlnYXRlKGhyZWYpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIC8qIGlmIHZhbGlkIHVybCAqL1xuICAgICAgaWYgKHNlbGYuaXNVUkwoaHJlZikpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oaHJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiB3aGVuIHVzaW5nIHZ1ZSByb3V0ZXIgcGF0aCAqL1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke2hyZWZ9YCB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzVVJMKHN0cikge1xuICAgICAgdmFyIHVybFJlZ2V4ID1cbiAgICAgICAgXCJeKD8hbWFpbHRvOikoPzooPzpodHRwfGh0dHBzfGZ0cCk6Ly8pKD86XFxcXFMrKD86OlxcXFxTKik/QCk/KD86KD86KD86WzEtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswMV1cXFxcZHwyMlswLTNdKSg/OlxcXFwuKD86MT9cXFxcZHsxLDJ9fDJbMC00XVxcXFxkfDI1WzAtNV0pKXsyfSg/OlxcXFwuKD86WzAtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswLTRdXFxcXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSstPykqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykoPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSstPykqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZl17Mix9KSkpfGxvY2FsaG9zdCkoPzo6XFxcXGR7Miw1fSk/KD86KC98XFxcXD98IylbXlxcXFxzXSopPyRcIjtcbiAgICAgIHZhciB1cmwgPSBuZXcgUmVnRXhwKHVybFJlZ2V4LCBcImlcIik7XG4gICAgICByZXR1cm4gc3RyLmxlbmd0aCA8IDIwODMgJiYgdXJsLnRlc3Qoc3RyKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnN0eWxlQXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTU1cHg7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1saXN0LXRpbGVcIixcbiAgICB7XG4gICAgICBjbGFzczogW3sgc3R5bGVBdmF0YXI6IF92bS5hdmF0YXJPbiB9XSxcbiAgICAgIGF0dHJzOiB7IGF2YXRhcjogX3ZtLmF2YXRhck9uIH0sXG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLm5hdmlnYXRlKF92bS5ocmVmKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uaWNvbk9uICYmICFfdm0uYXZhdGFyT25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZSA/IF92bS5hY3RpdmVDb2xvciA6IF92bS5pY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogX3ZtLmhyZWYgPyBcInBvaW50ZXJcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pY29uT24gJiYgX3ZtLmF2YXRhck9uXG4gICAgICAgID8gX2MoXCJ2LWxpc3QtdGlsZS1hdmF0YXJcIiwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogXCJcIiB9IH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1saXN0LXRpbGUtdGl0bGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IF92bS5pc0FjdGl2ZSA/IF92bS5hY3RpdmVDb2xvciA6IF92bS5saW5rQ29sb3IgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3R5bGU6IHsgY3Vyc29yOiBfdm0uaHJlZiA/IFwicG9pbnRlclwiIDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pY29uT24gJiYgX3ZtLmF2YXRhck9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUgPyBfdm0uYWN0aXZlQ29sb3IgOiBfdm0uaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IF92bS5ocmVmID8gXCJwb2ludGVyXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaWNvbikpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjMGY4YzJlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYzBmOGMyZVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzliNzQxOThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jOWI3NDE5OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWI3NDE5OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ1MTFiY2NjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWI3NDE5OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWM5Yjc0MTk4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS91cmlhaC9TaXRlcy9kc2dsaXZlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnSUE7RUFDQSwwQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJJbnZlbnRvcnlMaW5rcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHYtbGlzdCBcXG4gICAgY2xhc3M9XFxcImJsdWUtZ3JleVxcXCJcXG4gICAgZGFya1xcbiAgPlxcbiAgICA8di1saXN0LWdyb3VwXFxuICAgICAgdi1mb3I9XFxcIml0ZW0gaW4gaXRlbXNcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwiaXRlbS5hY3RpdmVcXFwiXFxuICAgICAgOmtleT1cXFwiaXRlbS50aXRsZVxcXCJcXG4gICAgICBuby1hY3Rpb25cXG4gICAgICBhY3RpdmUtY2xhc3M9XFxcImFjY2VudC0tdGV4dFxcXCJcXG4gICAgPlxcbiAgICAgIDx2LWxpc3QtdGlsZSBzbG90PVxcXCJhY3RpdmF0b3JcXFwiPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwid2hpdGVcXFwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgPC92LWxpc3QtdGlsZT5cXG5cXG4gICAgICA8di1saXN0LXRpbGVcXG4gICAgICAgIHYtZm9yPVxcXCJzdWJJdGVtIGluIGl0ZW0uaXRlbXNcXFwiIFxcbiAgICAgICAgdi1pZj1cXFwiJGF1dGguY2hlY2soc3ViSXRlbS5hdXRoKVxcXCJcXG4gICAgICAgIDprZXk9XFxcInN1Ykl0ZW0udGl0bGVcXFwiXFxuICAgICAgICA6c3R5bGU9XFxcIntjb2xvcjogaXNBY3RpdmUoc3ViSXRlbSkgPyBhY3RpdmVDb2xvciA6IGxpbmtDb2xvcn1cXFwiXFxuICAgICAgICBAY2xpY2s9XFxcImxvYWR2aWV3KHN1Ykl0ZW0pXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgc3ViSXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuXFxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cXFwiaXNBY3RpdmUoc3ViSXRlbSkgPyAndGVhbCcgOiAnd2hpdGUnXFxcIj57eyBzdWJJdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgPC92LWxpc3QtZ3JvdXA+XFxuICA8L3YtbGlzdD5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBhY3RpdmVDb2xvcjogXFxcIiM0REI2QUNcXFwiLFxcbiAgICAgIGxpbmtDb2xvcjogXFxcIiNmZmZmZlxcXCIsXFxuICAgICAgaXRlbXM6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgYWN0aW9uOiBcXFwiY29sbGVjdGlvbnNfYm9va21hcmtcXFwiLFxcbiAgICAgICAgICB0aXRsZTogXFxcIkludmVudG9yaWVzXFxcIixcXG4gICAgICAgICAgaXRlbXM6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkFsbCBVbmtub3duIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvYWxsLXVua25vd24tcmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiVW5rbm93biBDdXN0b21lclxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdW5rbm93bi1jdXN0b21lclxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiVW5rbm93biBDbGllbnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3Vua25vd24tY2xpZW50XFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImZhLXVzZXJzXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIiwgXFxcImN1c3RvbWVyXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiVW5rbm93biBTaGlwcGVyXFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmtub3duLXNoaXBwZXJcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiZmEtc2hpcFxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkRhbWFnZWQgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy9kYW1hZ2VkXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImJyb2tlbl9pbWFnZVxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlJlcGFpcmVkIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvcmVwYWlyZWRcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwiYnVpbGRcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiLCBcXFwiY3VzdG9tZXJcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJVbmRlbGl2ZXJlZCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3VuZGVsaXZlcmVkXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImZhLXRydWNrXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIiwgXFxcImN1c3RvbWVyXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQmluIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvYmluXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImFwcHNcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkN1c3RvbWVyIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvY3VzdG9tZXJcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwibG9jYWxfbGlicmFyeVxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiQ2xpZW50IFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvY2xpZW50c1xcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJwZXJtX2NvbnRhY3RfY2FsZW5kYXJcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICBdXFxuICAgICAgICB9XFxuICAgICAgXVxcbiAgICB9O1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgaXNBY3RpdmUoaXRlbSkge1xcbiAgICAgIHJldHVybiBpdGVtLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XFxuICAgIH0sXFxuICAgIGxvYWR2aWV3KHN1Ykl0ZW0pIHtcXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke3N1Ykl0ZW0uaHJlZn1gIH0pO1xcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYzliNzQxOThcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCI8dGVtcGxhdGU+XG4gIDx2LWxpc3QgXG4gICAgY2xhc3M9XCJibHVlLWdyZXlcIlxuICAgIGRhcmtcbiAgPlxuICAgIDx2LWxpc3QtZ3JvdXBcbiAgICAgIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiXG4gICAgICB2LW1vZGVsPVwiaXRlbS5hY3RpdmVcIlxuICAgICAgOmtleT1cIml0ZW0udGl0bGVcIlxuICAgICAgbm8tYWN0aW9uXG4gICAgICBhY3RpdmUtY2xhc3M9XCJhY2NlbnQtLXRleHRcIlxuICAgID5cbiAgICAgIDx2LWxpc3QtdGlsZSBzbG90PVwiYWN0aXZhdG9yXCI+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtaWNvbiBjb2xvcj1cIndoaXRlXCI+e3sgaXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBpdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgPC92LWxpc3QtdGlsZT5cblxuICAgICAgPHYtbGlzdC10aWxlXG4gICAgICAgIHYtZm9yPVwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXCIgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhzdWJJdGVtLmF1dGgpXCJcbiAgICAgICAgOmtleT1cInN1Ykl0ZW0udGl0bGVcIlxuICAgICAgICA6c3R5bGU9XCJ7Y29sb3I6IGlzQWN0aXZlKHN1Ykl0ZW0pID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XCJcbiAgICAgICAgQGNsaWNrPVwibG9hZHZpZXcoc3ViSXRlbSlcIlxuICAgICAgPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgc3ViSXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cblxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gOmNvbG9yPVwiaXNBY3RpdmUoc3ViSXRlbSkgPyAndGVhbCcgOiAnd2hpdGUnXCI+e3sgc3ViSXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICA8L3YtbGlzdC10aWxlPlxuICAgIDwvdi1saXN0LWdyb3VwPlxuICA8L3YtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUNvbG9yOiBcIiM0REI2QUNcIixcbiAgICAgIGxpbmtDb2xvcjogXCIjZmZmZmZcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhY3Rpb246IFwiY29sbGVjdGlvbnNfYm9va21hcmtcIixcbiAgICAgICAgICB0aXRsZTogXCJJbnZlbnRvcmllc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBVbmtub3duIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2FsbC11bmtub3duLXJlcG9ydFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiZmEtcXVlc3Rpb24tY2lyY2xlXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJVbmtub3duIEN1c3RvbWVyXCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdW5rbm93bi1jdXN0b21lclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW5rbm93biBDbGllbnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy91bmtub3duLWNsaWVudFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiZmEtdXNlcnNcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIiwgXCJjdXN0b21lclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW5rbm93biBTaGlwcGVyXCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdW5rbm93bi1zaGlwcGVyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJmYS1zaGlwXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJEYW1hZ2VkIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2RhbWFnZWRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImJyb2tlbl9pbWFnZVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiLCBcImN1c3RvbWVyXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJSZXBhaXJlZCBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9yZXBhaXJlZFwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiYnVpbGRcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIiwgXCJjdXN0b21lclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW5kZWxpdmVyZWQgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdW5kZWxpdmVyZWRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXRydWNrXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkJpbiBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9iaW5cIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImFwcHNcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkN1c3RvbWVyIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2N1c3RvbWVyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJsb2NhbF9saWJyYXJ5XCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJDbGllbnQgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvY2xpZW50c1wiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwicGVybV9jb250YWN0X2NhbGVuZGFyXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGlzQWN0aXZlKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XG4gICAgfSxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke3N1Ykl0ZW0uaHJlZn1gIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1saXN0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIiwgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcInYtbGlzdC1ncm91cFwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpdGVtLnRpdGxlLFxuICAgICAgICAgIGF0dHJzOiB7IFwibm8tYWN0aW9uXCI6IFwiXCIsIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcImFjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFjdGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSwgc2xvdDogXCJhY3RpdmF0b3JcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmFjdGlvbikpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woaXRlbS5pdGVtcywgZnVuY3Rpb24oc3ViSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kYXV0aC5jaGVjayhzdWJJdGVtLmF1dGgpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3ViSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlKHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5hY3RpdmVDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubGlua0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWR2aWV3KHN1Ykl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Ykl0ZW0udGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKSA/IFwidGVhbFwiIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLmFjdGlvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICB9KVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWM5Yjc0MTk4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1jOWI3NDE5OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMzIgMzMgMzQgNTkgNjAgNjEgNjIgNjMgNjQgNjUgNjYgNjcgNjgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zOWU2MDc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM5ZTYwNzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0MDEyNjk2YlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM5ZTYwNzdhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAzMiAzMyAzNCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStFQTtFQUNBLDBCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkludm9pY2VMaW5rcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHYtbGlzdCBcXG4gICAgdi1pZj1cXFwiJGF1dGguY2hlY2soJ2FkbWluJylcXFwiIFxcbiAgICBjbGFzcz1cXFwiYmx1ZS1ncmV5XFxcIlxcbiAgICBkYXJrXFxuICA+XFxuICAgIDx2LWxpc3QtZ3JvdXBcXG4gICAgICB2LWZvcj1cXFwiaXRlbSBpbiBpdGVtc1xcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJpdGVtLmFjdGl2ZVxcXCJcXG4gICAgICA6a2V5PVxcXCJpdGVtLnRpdGxlXFxcIlxcbiAgICAgIG5vLWFjdGlvblxcbiAgICAgIGFjdGl2ZS1jbGFzcz1cXFwiYWNjZW50LS10ZXh0XFxcIlxcbiAgICA+XFxuICAgICAgPHYtbGlzdC10aWxlIHNsb3Q9XFxcImFjdGl2YXRvclxcXCI+XFxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJ3aGl0ZVxcXCI+e3sgaXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBpdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICA8L3YtbGlzdC10aWxlPlxcblxcbiAgICAgIDx2LWxpc3QtdGlsZVxcbiAgICAgICAgdi1mb3I9XFxcInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1xcXCJcXG4gICAgICAgIDprZXk9XFxcInN1Ykl0ZW0udGl0bGVcXFwiXFxuICAgICAgICA6c3R5bGU9XFxcIntjb2xvcjogaXNBY3RpdmUoc3ViSXRlbSkgPyBhY3RpdmVDb2xvciA6IGxpbmtDb2xvcn1cXFwiXFxuICAgICAgICBAY2xpY2s9XFxcImxvYWR2aWV3KHN1Ykl0ZW0pXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgc3ViSXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuXFxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cXFwiaXNBY3RpdmUoc3ViSXRlbSkgPyAndGVhbCcgOiAnd2hpdGUnXFxcIj57eyBzdWJJdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgPC92LWxpc3QtZ3JvdXA+XFxuICA8L3YtbGlzdD5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBhY3RpdmVDb2xvcjogXFxcIiM0REI2QUNcXFwiLFxcbiAgICAgIGxpbmtDb2xvcjogXFxcIiNmZmZmZlxcXCIsXFxuICAgICAgaXRlbXM6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgYWN0aW9uOiBcXFwiY2FyZF9tZW1iZXJzaGlwXFxcIixcXG4gICAgICAgICAgdGl0bGU6IFxcXCJJbnZvaWNlc1xcXCIsXFxuICAgICAgICAgIGl0ZW1zOiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJHZW5lcmF0ZSBJbnZvaWNlXFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvaW52b2ljZXMvZ2VuZXJhdGVcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwic2NoZWR1bGVcXFwiXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7IHRpdGxlOiBcXFwiSW52b2ljZXNcXFwiLCBocmVmOiBcXFwiL2ludm9pY2VzXFxcIiwgYWN0aW9uOiBcXFwiYWxsX2luYm94XFxcIiB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiV2Vla2x5IFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdG90YWwtYWxsLWN1c3RvbWVyLWludm9pY2VcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwicGljdHVyZV9hc19wZGZcXFwiXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICBdXFxuICAgICAgICB9XFxuICAgICAgXVxcbiAgICB9O1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgaXNBY3RpdmUoaXRlbSkge1xcbiAgICAgIHJldHVybiBpdGVtLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XFxuICAgIH0sXFxuICAgIGxvYWR2aWV3KHN1Ykl0ZW0pIHtcXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAke3N1Ykl0ZW0uaHJlZn1gIH0pO1xcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzllNjA3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwiPHRlbXBsYXRlPlxuICA8di1saXN0IFxuICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiIFxuICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCJcbiAgICBkYXJrXG4gID5cbiAgICA8di1saXN0LWdyb3VwXG4gICAgICB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgdi1tb2RlbD1cIml0ZW0uYWN0aXZlXCJcbiAgICAgIDprZXk9XCJpdGVtLnRpdGxlXCJcbiAgICAgIG5vLWFjdGlvblxuICAgICAgYWN0aXZlLWNsYXNzPVwiYWNjZW50LS10ZXh0XCJcbiAgICA+XG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cImFjdGl2YXRvclwiPlxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG5cbiAgICAgIDx2LWxpc3QtdGlsZVxuICAgICAgICB2LWZvcj1cInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1wiXG4gICAgICAgIDprZXk9XCJzdWJJdGVtLnRpdGxlXCJcbiAgICAgICAgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiXG4gICAgICAgIEBjbGljaz1cImxvYWR2aWV3KHN1Ykl0ZW0pXCJcbiAgICAgID5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1wiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICA8L3YtbGlzdC1ncm91cD5cbiAgPC92LWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDb2xvcjogXCIjNERCNkFDXCIsXG4gICAgICBsaW5rQ29sb3I6IFwiI2ZmZmZmXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uOiBcImNhcmRfbWVtYmVyc2hpcFwiLFxuICAgICAgICAgIHRpdGxlOiBcIkludm9pY2VzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiR2VuZXJhdGUgSW52b2ljZVwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9pbnZvaWNlcy9nZW5lcmF0ZVwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwic2NoZWR1bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiSW52b2ljZXNcIiwgaHJlZjogXCIvaW52b2ljZXNcIiwgYWN0aW9uOiBcImFsbF9pbmJveFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIldlZWtseSBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy90b3RhbC1hbGwtY3VzdG9tZXItaW52b2ljZVwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwicGljdHVyZV9hc19wZGZcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpc0FjdGl2ZShpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xuICAgIH0sXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICA/IF9jKFxuICAgICAgICBcInYtbGlzdFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsdWUtZ3JleVwiLCBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSxcbiAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1hY3Rpb25cIjogXCJcIiwgXCJhY3RpdmUtY2xhc3NcIjogXCJhY2NlbnQtLXRleHRcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcImFjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWN0aXZlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiB9LCBzbG90OiBcImFjdGl2YXRvclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uYWN0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChpdGVtLml0ZW1zLCBmdW5jdGlvbihzdWJJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Ykl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uYWN0aXZlQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmxpbmtDb2xvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkdmlldyhzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUoc3ViSXRlbSkgPyBcInRlYWxcIiA6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc3ViSXRlbS5hY3Rpb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTM5ZTYwNzdhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zOWU2MDc3YVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGNsaXBwZWQ6IF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoIDw9IDEyNjQgJiYgdHJ1ZSxcbiAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgIFwiaGlkZS1vdmVybGF5XCI6IFwiXCIsXG4gICAgICAgIGFwcDogXCJcIlxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0uZHJhd2VyLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLmRyYXdlciA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcImRyYXdlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIiwgYXR0cnM6IHsgZGVuc2U6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFkbWluIEFyZWFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJ3YXJlaG91c2VcIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIldhcmVob3VzZSBBcmVhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiY3VzdG9tZXJcIilcbiAgICAgICAgICAgID8gX2MoXCJ2LXN1YmhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkN1c3RvbWVyIEFyZWFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiYWRtaW5cIiwgXCJjdXN0b21lclwiLCBcIndhcmVob3VzZVwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYS10YWNob21ldGVyXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlR1dG9yaWFsc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdHV0b3JpYWxzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1vdmllXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdXNlcnNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2hpcHBlcnNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3NoaXBwZXJzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhLXNoaXBcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJhdGVzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9yYXRlc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJpbnNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2JpbnNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwidmlld19tb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wid2FyZWhvdXNlXCIsIFwiYWRtaW5cIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2FyZWhvdXNlXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi93YXJlaG91c2VcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibG9jYXRpb25fY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWNlaXZpbmdcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3JlY2VpdmluZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJyZWNlaXB0XCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyY2hpdmVkXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9hcmNoaXZlZC9kc2dcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiYXJjaGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW52ZW50b3J5LWxpbmtzXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJUaWNrZXRzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi90aWNrZXRzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImNvbmZpcm1hdGlvbl9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pc2NlbGxhbmVvdXNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL21pc2NlbGxhbmVvdXNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibm90ZV9hZGRcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImludm9pY2UtbGlua3NcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiY3VzdG9tZXJcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvY2xpZW50c1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJidXNpbmVzc19jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9zZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYS1jb2dzXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKClcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJMb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2xvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJwb3dlcl9zZXR0aW5nc19uZXdcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE4OTJjMGNhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xODkyYzBjYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvTGVmdFNpZGVCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJpbnNwaXJlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwibGVmdC1zaWRlLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFwcC1uYXYtYmFyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGVudFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzbGlkZS14LXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIGZsdWlkOiBcIlwiLFxuICAgICAgICAgICAgXCJwYS0wXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1hLTBcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtM2NjYmYxNWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNjY2JmMTVlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlXG4vLyBtb2R1bGUgaWQgPSA5OThcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDMyIDMzIDM0IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4Il0sInNvdXJjZVJvb3QiOiIifQ==