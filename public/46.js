webpackJsonp([46],{

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Mixins_validation_error__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_1_Mixins_validation_error__["a" /* default */]],
  data: function data() {
    return {
      /* Always Declare Your Form Object */
      form: new __WEBPACK_IMPORTED_MODULE_2_vform__["Form"]({
        type: false,
        client_id: null,
        client_name: null,
        customer_id: null,
        customer_name: null,
        date_delivered: null,
        start_time: "",
        end_time: "",
        prep_time: 0,
        travel_time: 0,
        clean_up_time: 0,
        total_time: 0,
        rate: 0,
        surcharge: 0,
        total_charges: "",
        notes: null,
        do_address_1: null,
        do_address_2: null,
        do_city: null,
        do_state: null,
        do_zip: null,
        pu_address_1: null,
        pu_address_2: null,
        pu_city: null,
        pu_state: null,
        pu_zip: null,
        packages: []
      }),
      date_delivered_modal: false,
      customers: [],
      clients: [],
      client: {
        id: null,
        active: false,
        name: null,
        do_address_1: null,
        do_address_2: null,
        do_city: null,
        do_state: null,
        do_zip: null
      },
      packages: [],
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
      }
    };
  },
  watch: {
    customers: {
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
              this.getClientPackages();
              this.setDropOffAddress(client);
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
      },
      deep: false
    },
    "form.start_time": {
      handler: function handler(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.end_time": {
      handler: function handler(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.prep_time": {
      handler: function handler(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.travel_time": {
      handler: function handler(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.clean_up_time": {
      handler: function handler(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.rate": {
      handler: function handler(newName) {
        this.computeTotalCharge();
      },
      deep: false
    },
    "form.surcharge": {
      handler: function handler(newName) {
        this.computeTotalCharge();
      },
      deep: false
    }
  },
  created: function created() {
    this.debouncedComputeTotal = _.debounce(this.computeTotal, 2000);
  },
  mounted: function mounted() {
    this.getInitialData();
    this.form.date_delivered = moment().format("YYYY-MM-DD");
    this.form.type = "field_transfer";
  },

  methods: {
    toggleAll: function toggleAll() {
      var self = this;
      if (this.selected.length === 0) {
        this.selected = this.packages.map(function (item) {
          return item.id;
        });
      } else {
        this.selected = [];
      }
      this.form.packages = this.selected;
    },
    workingTime: function workingTime() {
      var start_time = this.form.start_time;
      var end_time = this.form.end_time;
      var start_hr = 0;
      var start_min = 0;
      var end_hr = 0;
      var end_min = 0;
      if (start_time !== null) {
        var start_count = (start_time.match(/\d/g) || []).length;
        if (start_count > 1) {
          start_hr = parseInt(start_time.substring(0, 2));
        }
        if (start_count > 3) {
          start_min = parseInt(start_time.substring(2, 4));
        }
      }
      if (end_time !== null) {
        var end_count = (end_time.match(/\d/g) || []).length;
        if (end_count > 1) {
          end_hr = parseInt(end_time.substring(0, 2));
        }
        if (end_count > 3) {
          end_min = parseInt(end_time.substring(2, 4));
        }
      }
      var hr_diff = 0;
      var min_diff = 0;
      hr_diff = end_hr - start_hr;
      if (hr_diff < 0) {
        hr_diff = 0;
      }
      min_diff = Math.abs(end_min - start_min) / 60;
      if (min_diff < 0) {
        min_diff = 0;
      }
      return hr_diff + min_diff;
    },
    setDropOffAddress: function setDropOffAddress(client) {
      this.client = {
        id: client.id,
        active: client.active,
        name: client.name,
        do_address_1: client.address_1,
        do_address_2: client.address_2,
        do_city: client.city,
        do_state: client.state,
        do_zip: client.zip
      };
      this.form.do_address_1 = client.address_1;
      this.form.do_address_2 = client.address_2;
      this.form.do_city = client.city;
      this.form.do_state = client.state;
      this.form.do_zip = client.zip;
    },
    computeTotal: function computeTotal() {
      var working_time = this.workingTime();
      var prep_time = this.form.prep_time ? this.form.prep_time : 0;
      var travel_time = this.form.travel_time ? this.form.travel_time : 0;
      var clean_up_time = this.form.clean_up_time ? this.form.clean_up_time : 0;
      console.log("working_time", parseFloat(working_time));
      console.log("prep_time", parseFloat(prep_time));
      console.log("travel_time", parseFloat(travel_time));
      console.log("clean_up_time", parseFloat(clean_up_time));
      var total = 0;
      total += parseFloat(working_time);
      total += parseFloat(prep_time);
      total += parseFloat(travel_time);
      total += parseFloat(clean_up_time);
      if (total < 0) {
        total = 0;
      }
      this.form.total_time = total.toFixed(4);
      return total;
    },
    computeTotalCharge: function computeTotalCharge() {
      var total_time = parseFloat(this.form.total_time);
      var rate = parseFloat(this.form.rate);
      var surcharge = parseFloat(this.form.surcharge) / 100;
      if (this.form.surcharge === null || this.form.surcharge === "") {
        surcharge = 0;
      }
      var total_rate = total_time * rate;
      var total = 0;
      total = total_rate + surcharge * total_rate;
      this.form.total_charges = total.toFixed(4);
    },

    getText: function getText(item) {
      return item.dsg_id + " | " + item.style_no + " | " + item.description;
    },
    getInitialData: function getInitialData() {
      var _this = this;

      axios.get(route("api.logistics.getInitialData")).then(function (response) {
        _this.customers = response.data.data.customers;
      });
    },
    getClientPackages: function getClientPackages() {
      var _this2 = this;

      axios.get(route("api.logistics.getClientPackages", {
        client: this.form.client_id
      })).then(function (response) {
        _this2.form.packages = [];
        _this2.packages = response.data;
      });
    },
    submit: function submit() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // eslint-disable-next-line
          self.createLogistics();
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
    createLogistics: function createLogistics() {
      var self = this;
      self.form.busy = true;
      if (self.form.type === "field_transfer") {
        delete self.form.packages;
      }
      if (self.form.type === "delivery_ticket") {
        delete self.form.pu_address_1;
        delete self.form.pu_address_2;
        delete self.form.pu_city;
        delete self.form.pu_state;
        delete self.form.pu_zip;
      }
      self.form.post(route("api.logistics.create"), self.form).then(function (response) {
        console.log(response.data);
        self.$validator.reset();
        var successModal = __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        successModal({
          title: "Success!",
          html: "<p class=\"title\">Ticket Has Been Created!</p>",
          type: "success",
          confirmButtonText: "Ok"
        });
        self.$nextTick(function () {
          return self.$router.push({ name: "tickets" });
        });
      }).catch(function (errors) {
        console.log(errors.response.data);
        if (self.form.type === "field_transfer") {
          self.form.packages = [];
        }
        if (self.form.type === "delivery_ticket") {
          self.form.pu_address_1 = "";
          self.form.pu_address_2 = "";
          self.form.pu_city = "";
          self.form.pu_state = "";
          self.form.pu_zip = "";
        }
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
    redirectBack: function redirectBack() {
      var self = this;
      self.$nextTick(function () {
        return self.$router.push({ name: "tickets" });
      });
    }
  }
});

/***/ }),

/***/ 1162:
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
                [_vm._v("Create New Ticket")]
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
                { attrs: { xs12: "", lg2: "", "offset-lg1": "" } },
                [
                  _c(
                    "v-subheader",
                    {
                      staticClass: "indigo--text",
                      staticStyle: { "margin-left": "-15px" }
                    },
                    [
                      _vm._v(
                        "\n          What Type Of Ticket Is This?\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-radio-group",
                    {
                      staticStyle: { "margin-top": "-15px" },
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    },
                    [
                      _c("v-radio", {
                        attrs: {
                          value: "delivery_ticket",
                          label: "Delivery Ticket"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-radio", {
                        attrs: {
                          value: "field_transfer",
                          label: "Field Transfer"
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
                { attrs: { xs12: "", lg2: "" } },
                [
                  _c(
                    "v-dialog",
                    {
                      ref: "date_delivered",
                      attrs: {
                        "return-value": _vm.form.date_delivered,
                        persistent: "",
                        lazy: "",
                        "full-width": "",
                        width: "290px"
                      },
                      on: {
                        "update:returnValue": function($event) {
                          _vm.$set(_vm.form, "date_delivered", $event)
                        }
                      },
                      model: {
                        value: _vm.date_delivered_modal,
                        callback: function($$v) {
                          _vm.date_delivered_modal = $$v
                        },
                        expression: "date_delivered_modal"
                      }
                    },
                    [
                      _c("v-text-field", {
                        staticStyle: { "margin-top": "26px" },
                        attrs: {
                          slot: "activator",
                          label: "Delivery Date",
                          "prepend-icon": "event_available",
                          readonly: ""
                        },
                        slot: "activator",
                        model: {
                          value: _vm.form.date_delivered,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date_delivered", $$v)
                          },
                          expression: "form.date_delivered"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-date-picker",
                        {
                          attrs: { scrollable: "" },
                          model: {
                            value: _vm.form.date_delivered,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "date_delivered", $$v)
                            },
                            expression: "form.date_delivered"
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
                                  _vm.date_delivered_modal = false
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
                                  _vm.$refs.date_delivered.save(
                                    _vm.form.date_delivered
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
                { attrs: { xs12: "", lg2: "", "offset-lg1": "" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: {
                          regex: /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/
                        },
                        expression:
                          "{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/}"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("start_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("start_time"),
                      light: "",
                      label: "Start Time",
                      "prepend-icon": "timer",
                      "data-vv-name": "start_time"
                    },
                    model: {
                      value: _vm.form.start_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "start_time", $$v)
                      },
                      expression: "form.start_time"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: {
                          regex: /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/,
                          min_value: _vm.form.start_time
                        },
                        expression:
                          "{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/,min_value:form.start_time}"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("end_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("end_time"),
                      light: "",
                      label: "End Time",
                      "prepend-icon": "timer",
                      "data-vv-name": "end_time"
                    },
                    model: {
                      value: _vm.form.end_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "end_time", $$v)
                      },
                      expression: "form.end_time"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("prep_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("prep_time"),
                      light: "",
                      label: "Prep Time",
                      "prepend-icon": "access_time",
                      "data-vv-name": "prep_time"
                    },
                    model: {
                      value: _vm.form.prep_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "prep_time", $$v)
                      },
                      expression: "form.prep_time"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("travel_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("travel_time"),
                      light: "",
                      label: "Travel Time",
                      "prepend-icon": "access_time",
                      "data-vv-name": "travel_time"
                    },
                    model: {
                      value: _vm.form.travel_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "travel_time", $$v)
                      },
                      expression: "form.travel_time"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("clean_up_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("clean_up_time"),
                      light: "",
                      label: "Clean Up Time",
                      "prepend-icon": "access_time",
                      "data-vv-name": "clean_up_time"
                    },
                    model: {
                      value: _vm.form.clean_up_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "clean_up_time", $$v)
                      },
                      expression: "form.clean_up_time"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg2: "", "offset-lg1": "" } },
                [
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("total_time") },
                    attrs: {
                      "error-messages": _vm.errorMessages("total_time"),
                      light: "",
                      readonly: "",
                      disabled: "",
                      label: "Total Time",
                      "prepend-icon": "av_timer",
                      "data-vv-name": "total_time",
                      hint: "Total No. Of Hours",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.total_time,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "total_time", $$v)
                      },
                      expression: "form.total_time"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("rate") },
                    attrs: {
                      "error-messages": _vm.errorMessages("rate"),
                      light: "",
                      label: "Rate",
                      "prepend-icon": "fa-money",
                      "data-vv-name": "rate",
                      hint: "Delivery Charge Rate",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.rate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "rate", $$v)
                      },
                      expression: "form.rate"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("surcharge") },
                    attrs: {
                      "error-messages": _vm.errorMessages("surcharge"),
                      light: "",
                      label: "Surchage",
                      "prepend-icon": "money",
                      "append-icon": "fa-percent",
                      "data-vv-name": "surcharge",
                      hint: "Percentage ie. 20% = 20",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.surcharge,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "surcharge", $$v)
                      },
                      expression: "form.surcharge"
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
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { decimal: 4, min_value: 0 },
                        expression: "{ decimal:4, min_value:0 }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("total_charges") },
                    attrs: {
                      "error-messages": _vm.errorMessages("total_charges"),
                      light: "",
                      readonly: "",
                      disabled: "",
                      label: "Total Charges",
                      "prepend-icon": "attach_money",
                      suffix: "USD",
                      "data-vv-name": "total_charges",
                      hint: "Delivery Fee",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.total_charges,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "total_charges", $$v)
                      },
                      expression: "form.total_charges"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.form.type === "field_transfer"
            ? _c(
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
                    { attrs: { xs12: "", lg10: "", "offset-lg1": "" } },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass: "text-xs-center",
                          attrs: {
                            value: true,
                            type: "info",
                            color: "secondary",
                            "my-0": "",
                            "py-0": "",
                            "mx-3": "",
                            "px-3": ""
                          }
                        },
                        [_vm._v("\n          Pick Up Address\n        ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg2: "", "offset-lg1": "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          light: "",
                          label: "Address 1",
                          "prepend-icon": "looks_one"
                        },
                        model: {
                          value: _vm.form.pu_address_1,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "pu_address_1", $$v)
                          },
                          expression: "form.pu_address_1"
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
                          label: "Address 2",
                          "prepend-icon": "looks_two"
                        },
                        model: {
                          value: _vm.form.pu_address_2,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "pu_address_2", $$v)
                          },
                          expression: "form.pu_address_2"
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
                          label: "City",
                          "prepend-icon": "location_city"
                        },
                        model: {
                          value: _vm.form.pu_city,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "pu_city", $$v)
                          },
                          expression: "form.pu_city"
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
                          label: "State",
                          "prepend-icon": "map"
                        },
                        model: {
                          value: _vm.form.pu_state,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "pu_state", $$v)
                          },
                          expression: "form.pu_state"
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
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: { regex: /^\d{5}(?:[-\s]\d{4})?$/ },
                            expression: "{ regex: /^\\d{5}(?:[-\\s]\\d{4})?$/ }"
                          }
                        ],
                        class: { "error--text": _vm.hasErrors("pu_zip") },
                        attrs: {
                          "error-messages": _vm.errorMessages("pu_zip"),
                          light: "",
                          label: "Zip",
                          "prepend-icon": "markunread_mailbox",
                          "data-vv-name": "pu_zip"
                        },
                        model: {
                          value: _vm.form.pu_zip,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "pu_zip", $$v)
                          },
                          expression: "form.pu_zip"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
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
                { attrs: { xs12: "", lg10: "", "offset-lg1": "" } },
                [
                  _c("span", { staticClass: "text-xs-center title" }),
                  _vm._v(" "),
                  _c(
                    "v-alert",
                    {
                      staticClass: "text-xs-center",
                      attrs: {
                        value: true,
                        type: "info",
                        color: "secondary",
                        "my-0": "",
                        "py-0": "",
                        "mx-3": "",
                        "px-3": ""
                      }
                    },
                    [_vm._v("\n          Drop Off Address\n        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg2: "", "offset-lg1": "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      light: "",
                      label: "Address 1",
                      "prepend-icon": "looks_one"
                    },
                    model: {
                      value: _vm.form.do_address_1,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "do_address_1", $$v)
                      },
                      expression: "form.do_address_1"
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
                      label: "Address 2",
                      "prepend-icon": "looks_two"
                    },
                    model: {
                      value: _vm.form.do_address_2,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "do_address_2", $$v)
                      },
                      expression: "form.do_address_2"
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
                      label: "City",
                      "prepend-icon": "location_city"
                    },
                    model: {
                      value: _vm.form.do_city,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "do_city", $$v)
                      },
                      expression: "form.do_city"
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
                    attrs: { light: "", label: "State", "prepend-icon": "map" },
                    model: {
                      value: _vm.form.do_state,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "do_state", $$v)
                      },
                      expression: "form.do_state"
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
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { regex: /^\d{5}(?:[-\s]\d{4})?$/ },
                        expression: "{ regex: /^\\d{5}(?:[-\\s]\\d{4})?$/ }"
                      }
                    ],
                    class: { "error--text": _vm.hasErrors("do_zip") },
                    attrs: {
                      "error-messages": _vm.errorMessages("do_zip"),
                      light: "",
                      label: "Zip",
                      "prepend-icon": "markunread_mailbox",
                      "data-vv-name": "do_zip"
                    },
                    model: {
                      value: _vm.form.do_zip,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "do_zip", $$v)
                      },
                      expression: "form.do_zip"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.form.type === "delivery_ticket"
            ? _c(
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
                    { attrs: { xs10: "", "offset-xs1": "" } },
                    [
                      _c("v-subheader", [
                        _vm._v(
                          "\n          Items To Be Delivered (" +
                            _vm._s(_vm.packages.length) +
                            ")\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.packages.length > 0
                        ? _c(
                            "v-btn",
                            {
                              attrs: { color: "secondary" },
                              on: { click: _vm.toggleAll }
                            },
                            [
                              _vm.selected.length === 0
                                ? _c("span", [_vm._v("Select All")])
                                : _c("span", [_vm._v("Unselect All")])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-autocomplete", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: { "error--text": _vm.hasErrors("packages") },
                        attrs: {
                          items: _vm.packages,
                          "error-messages": _vm.errorMessages("packages"),
                          "item-text": _vm.getText,
                          "item-value": "id",
                          hint: "Choose Packages To Be Delivered",
                          "persistent-hint": "",
                          "no-data-text": "No Client's Packages For Delivery",
                          required: "",
                          "max-height": "auto",
                          light: "",
                          outline: "",
                          tags: "",
                          chips: "",
                          "deletable-chips": "",
                          "full-width": "",
                          multiple: "",
                          "multi-line": "",
                          dense: "",
                          auto: "",
                          "hide-selected": "",
                          "small-chips": "",
                          clearable: "",
                          "data-vv-name": "packages"
                        },
                        model: {
                          value: _vm.form.packages,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "packages", $$v)
                          },
                          expression: "form.packages"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
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
                { attrs: { xs10: "", "offset-xs1": "" } },
                [
                  _c("v-subheader", [_vm._v("\n          Notes:\n        ")]),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      counter: "",
                      maxlength: "255",
                      "full-width": "",
                      outline: "",
                      hint: "(Optional)",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.form.notes,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "notes", $$v)
                      },
                      expression: "form.notes"
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-008ff92d", module.exports)
  }
}

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1161)
/* template */
var __vue_template__ = __webpack_require__(1162)
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
Component.options.__file = "resources/assets/js/pages/Tickets/CreateTicket.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-008ff92d", Component.options)
  } else {
    hotAPI.reload("data-v-008ff92d", Component.options)
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

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(970)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(972)
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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(971);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(965)("b8bb7d10", content, false, {});
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

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-messages__message {\n  color: #e57373;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/layouts/resources/assets/js/layouts/ModalLayout.vue"],"names":[],"mappings":";AAsBA;EACA,eAAA;CACA","file":"ModalLayout.vue","sourcesContent":["<template>\n  <v-app \n    v-cloak \n    standalone\n  >\n    <v-content class=\"white\">\n      <v-container \n        transition=\"slide-x-transition\" \n        fluid \n        class=\"pa-0 ma-0\"\n      >\n        <v-card :flat=\"true\">\n          <slot name=\"toolbar\"/>\n          <slot/>\n        </v-card>\n      </v-container>\n      <slot name=\"footer\"/>\n    </v-content>\n  </v-app>\n</template>\n\n<style>\n.v-messages__message {\n  color: #e57373;\n}\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 972:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9UaWNrZXRzL0NyZWF0ZVRpY2tldC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9UaWNrZXRzL0NyZWF0ZVRpY2tldC52dWU/ZDQxYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1RpY2tldHMvQ3JlYXRlVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlP2QxZjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZT9hYWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWU/OWIyNCJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZXJyb3JNZXNzYWdlcyIsImZpZWxkIiwiZXJyb3JzIiwiY29sbGVjdCIsImNvbmNhdCIsImZvcm0iLCJvbmx5IiwiaGFzRXJyb3JzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGlCQUFpQixFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUJBQXVCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLGFBQWEsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bW9kYWwtbGF5b3V0IGNsYXNzPVwid2hpdGVcIj5cbiAgICA8di1jYXJkIDpmbGF0PVwidHJ1ZVwiPlxuICAgICAgPHYtdG9vbGJhciBcbiAgICAgICAgZml4ZWQgXG4gICAgICAgIGFwcCBcbiAgICAgICAgY2xhc3M9XCJwcmltYXJ5XCJcbiAgICAgID5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgaWNvbiBcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBAY2xpY2submF0aXZlPVwicmVkaXJlY3RCYWNrKClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHYtaWNvbj5hcnJvd19iYWNrPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciB3aGl0ZS0tdGV4dFwiPkNyZWF0ZSBOZXcgVGlja2V0PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LXRvb2xiYXItaXRlbXM+XG4gICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICA6bG9hZGluZz1cImZvcm0uYnVzeVwiIFxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZXJyb3JzLmFueSgpIHx8IGZvcm0uYnVzeVwiXG4gICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZT1cInN1Ym1pdCgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8di1pY29uIHJpZ2h0PnNhdmU8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtdG9vbGJhci1pdGVtcz5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXBcbiAgICAgICAgbXktMFxuICAgICAgICBweS0wXG4gICAgICAgIG14LTNcbiAgICAgICAgcHgtM1xuICAgICAgPlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgICBvZmZzZXQtbGcxXG4gICAgICAgID5cbiAgICAgICAgICA8di1zdWJoZWFkZXIgXG4gICAgICAgICAgICBjbGFzcz1cImluZGlnby0tdGV4dFwiIFxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tbGVmdDotMTVweDtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFdoYXQgVHlwZSBPZiBUaWNrZXQgSXMgVGhpcz9cbiAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxuICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udHlwZVwiIFxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOi0xNXB4O1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtcmFkaW9cbiAgICAgICAgICAgICAgdmFsdWU9XCJkZWxpdmVyeV90aWNrZXRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRlbGl2ZXJ5IFRpY2tldFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHYtcmFkaW9cbiAgICAgICAgICAgICAgdmFsdWU9XCJmaWVsZF90cmFuc2ZlclwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmllbGQgVHJhbnNmZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3YtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgOml0ZW1zPVwiY3VzdG9tZXJzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmN1c3RvbWVyX2lkXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2N1c3RvbWVyJylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ2N1c3RvbWVyJykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgQ3VzdG9tZXJcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImN1c3RvbWVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cblxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY2xpZW50X25hbWVcIlxuICAgICAgICAgICAgOml0ZW1zPVwiY2xpZW50c1wiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCdjbGllbnQnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnY2xpZW50JykgfVwiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBsYWJlbD1cIkNob29zZSBDbGllbnQgb3IgVHlwZSBOYW1lXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImZhLXVzZXJzXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImNsaWVudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyIFxuICAgICAgICAgIGxnMj5cbiAgICAgICAgICA8di1kaWFsb2dcbiAgICAgICAgICAgIHJlZj1cImRhdGVfZGVsaXZlcmVkXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlX2RlbGl2ZXJlZF9tb2RhbFwiXG4gICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJmb3JtLmRhdGVfZGVsaXZlcmVkXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgIGxhenlcbiAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRhdGVfZGVsaXZlcmVkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZWxpdmVyeSBEYXRlXCJcbiAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRfYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOjI2cHg7XCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8di1kYXRlLXBpY2tlciBcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGF0ZV9kZWxpdmVyZWRcIiBcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGF0ZV9kZWxpdmVyZWRfbW9kYWwgPSBmYWxzZVwiPkNhbmNlbDwvdi1idG4+XG4gICAgICAgICAgICAgIDx2LWJ0biBcbiAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmRhdGVfZGVsaXZlcmVkLnNhdmUoZm9ybS5kYXRlX2RlbGl2ZXJlZClcIj5PSzwvdi1idG4+XG4gICAgICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnMlxuICAgICAgICAgIG9mZnNldC1sZzFcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlZ2V4Oi9eKCgoKFswLTFdWzAtOV0pfCgyWzAtM10pKTo/WzAtNV1bMC05XSl8KDI0Oj8wMCkpJC99XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXJ0X3RpbWVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnc3RhcnRfdGltZScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdzdGFydF90aW1lJykgfVwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBUaW1lXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInRpbWVyXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cInN0YXJ0X3RpbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlZ2V4Oi9eKCgoKFswLTFdWzAtOV0pfCgyWzAtM10pKTo/WzAtNV1bMC05XSl8KDI0Oj8wMCkpJC8sbWluX3ZhbHVlOmZvcm0uc3RhcnRfdGltZX1cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW5kX3RpbWVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygnZW5kX3RpbWUnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnZW5kX3RpbWUnKSB9XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIkVuZCBUaW1lXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInRpbWVyXCJcbiAgICAgICAgICAgIGRhdGEtdnYtbmFtZT1cImVuZF90aW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwieyBkZWNpbWFsOjQsIG1pbl92YWx1ZTowIH1cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucHJlcF90aW1lXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3ByZXBfdGltZScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdwcmVwX3RpbWUnKSB9XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIlByZXAgVGltZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJhY2Nlc3NfdGltZVwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJwcmVwX3RpbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50cmF2ZWxfdGltZVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJlcnJvck1lc3NhZ2VzKCd0cmF2ZWxfdGltZScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCd0cmF2ZWxfdGltZScpIH1cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiVHJhdmVsIFRpbWVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiYWNjZXNzX3RpbWVcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwidHJhdmVsX3RpbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jbGVhbl91cF90aW1lXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2NsZWFuX3VwX3RpbWUnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygnY2xlYW5fdXBfdGltZScpIH1cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiQ2xlYW4gVXAgVGltZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJhY2Nlc3NfdGltZVwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJjbGVhbl91cF90aW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgICAgb2Zmc2V0LWxnMVxuICAgICAgICA+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cInsgZGVjaW1hbDo0LCBtaW5fdmFsdWU6MCB9XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRvdGFsX3RpbWVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygndG90YWxfdGltZScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCd0b3RhbF90aW1lJykgfVwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFRpbWVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiYXZfdGltZXJcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwidG90YWxfdGltZVwiXG4gICAgICAgICAgICBoaW50PVwiVG90YWwgTm8uIE9mIEhvdXJzXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yYXRlXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3JhdGUnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygncmF0ZScpIH1cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiUmF0ZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJmYS1tb25leVwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJyYXRlXCJcbiAgICAgICAgICAgIGhpbnQ9XCJEZWxpdmVyeSBDaGFyZ2UgUmF0ZVwiXG4gICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGczXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwieyBkZWNpbWFsOjQsIG1pbl92YWx1ZTowIH1cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3VyY2hhcmdlXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3N1cmNoYXJnZScpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdzdXJjaGFyZ2UnKSB9XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIlN1cmNoYWdlXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1vbmV5XCJcbiAgICAgICAgICAgIGFwcGVuZC1pY29uPVwiZmEtcGVyY2VudFwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJzdXJjaGFyZ2VcIlxuICAgICAgICAgICAgaGludD1cIlBlcmNlbnRhZ2UgaWUuIDIwJSA9IDIwXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzNcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50b3RhbF9jaGFyZ2VzXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ3RvdGFsX2NoYXJnZXMnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygndG90YWxfY2hhcmdlcycpIH1cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBDaGFyZ2VzXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImF0dGFjaF9tb25leVwiXG4gICAgICAgICAgICBzdWZmaXg9XCJVU0RcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwidG90YWxfY2hhcmdlc1wiXG4gICAgICAgICAgICBoaW50PVwiRGVsaXZlcnkgRmVlXCJcbiAgICAgICAgICAgIHBlcnNpc3RlbnQtaGludFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8IS0tIERST1AgT0ZGIEFERFJFU1MgLS0+XG4gICAgICAgIFxuICAgICAgPC92LWxheW91dD5cblxuICAgICAgPHYtbGF5b3V0IFxuICAgICAgICB2LWlmPVwiZm9ybS50eXBlPT09J2ZpZWxkX3RyYW5zZmVyJ1wiXG4gICAgICAgIHJvdyBcbiAgICAgICAgd3JhcFxuICAgICAgICBteS0wXG4gICAgICAgIHB5LTBcbiAgICAgICAgbXgtM1xuICAgICAgICBweC0zXG4gICAgICA+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMiBcbiAgICAgICAgICBsZzEwXG4gICAgICAgICAgb2Zmc2V0LWxnMT5cbiAgICAgICAgICA8di1hbGVydFxuICAgICAgICAgICAgOnZhbHVlPVwidHJ1ZVwiXG4gICAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyXCJcbiAgICAgICAgICAgIG15LTBcbiAgICAgICAgICAgIHB5LTBcbiAgICAgICAgICAgIG14LTNcbiAgICAgICAgICAgIHB4LTNcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQaWNrIFVwIEFkZHJlc3NcbiAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgICBvZmZzZXQtbGcxXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5wdV9hZGRyZXNzXzFcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyAxXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImxvb2tzX29uZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnMlxuICAgICAgICA+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucHVfYWRkcmVzc18yXCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgMlwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJsb29rc190d29cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnB1X2NpdHlcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiQ2l0eVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJsb2NhdGlvbl9jaXR5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5wdV9zdGF0ZVwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJtYXBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtdmFsaWRhdGU9XCJ7IHJlZ2V4OiAvXlxcZHs1fSg/OlstXFxzXVxcZHs0fSk/JC8gfVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5wdV96aXBcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygncHVfemlwJylcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZXJyb3ItLXRleHQnOiBoYXNFcnJvcnMoJ3B1X3ppcCcpIH1cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiWmlwXCJcbiAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1hcmt1bnJlYWRfbWFpbGJveFwiXG4gICAgICAgICAgICBkYXRhLXZ2LW5hbWU9XCJwdV96aXBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICAgIDx2LWxheW91dCBcbiAgICAgICAgcm93IFxuICAgICAgICB3cmFwXG4gICAgICAgIG15LTBcbiAgICAgICAgcHktMFxuICAgICAgICBteC0zXG4gICAgICAgIHB4LTNcbiAgICAgID5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcxMFxuICAgICAgICAgIG9mZnNldC1sZzE+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciB0aXRsZVwiLz5cbiAgICAgICAgICA8di1hbGVydFxuICAgICAgICAgICAgOnZhbHVlPVwidHJ1ZVwiXG4gICAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQteHMtY2VudGVyXCJcbiAgICAgICAgICAgIG15LTBcbiAgICAgICAgICAgIHB5LTBcbiAgICAgICAgICAgIG14LTNcbiAgICAgICAgICAgIHB4LTNcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEcm9wIE9mZiBBZGRyZXNzXG4gICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgICAgb2Zmc2V0LWxnMVxuICAgICAgICA+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZG9fYWRkcmVzc18xXCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgMVwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJsb29rc19vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTJcbiAgICAgICAgICBsZzJcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRvX2FkZHJlc3NfMlwiXG4gICAgICAgICAgICBsaWdodFxuICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIDJcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibG9va3NfdHdvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kb19jaXR5XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIkNpdHlcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibG9jYXRpb25fY2l0eVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggXG4gICAgICAgICAgeHMxMlxuICAgICAgICAgIGxnMlxuICAgICAgICA+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZG9fc3RhdGVcIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIGxhYmVsPVwiU3RhdGVcIlxuICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwibWFwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEyXG4gICAgICAgICAgbGcyXG4gICAgICAgID5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LXZhbGlkYXRlPVwieyByZWdleDogL15cXGR7NX0oPzpbLVxcc11cXGR7NH0pPyQvIH1cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZG9femlwXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cImVycm9yTWVzc2FnZXMoJ2RvX3ppcCcpXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Vycm9yLS10ZXh0JzogaGFzRXJyb3JzKCdkb196aXAnKSB9XCJcbiAgICAgICAgICAgIGxpZ2h0XG4gICAgICAgICAgICBsYWJlbD1cIlppcFwiXG4gICAgICAgICAgICBwcmVwZW5kLWljb249XCJtYXJrdW5yZWFkX21haWxib3hcIlxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwiZG9femlwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8di1sYXlvdXRcbiAgICAgICAgdi1pZj1cImZvcm0udHlwZT09PSdkZWxpdmVyeV90aWNrZXQnXCJcbiAgICAgICAgcm93IFxuICAgICAgICB3cmFwXG4gICAgICAgIG15LTBcbiAgICAgICAgcHktMFxuICAgICAgICBteC0zXG4gICAgICAgIHB4LTNcbiAgICAgID5cbiAgICAgICAgPHYtZmxleCBcbiAgICAgICAgICB4czEwIFxuICAgICAgICAgIG9mZnNldC14czFcbiAgICAgICAgPlxuICAgICAgICAgIDx2LXN1YmhlYWRlclxuICAgICAgICAgID5cbiAgICAgICAgICAgIEl0ZW1zIFRvIEJlIERlbGl2ZXJlZCAoe3sgcGFja2FnZXMubGVuZ3RoIH19KVxuICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgdi1pZj1cInBhY2thZ2VzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlQWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic2VsZWN0ZWQubGVuZ3RoID09PTBcIj5TZWxlY3QgQWxsPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlVuc2VsZWN0IEFsbDwvc3Bhbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIlxuICAgICAgICAgICAgOml0ZW1zPVwicGFja2FnZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFja2FnZXNcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiZXJyb3JNZXNzYWdlcygncGFja2FnZXMnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdlcnJvci0tdGV4dCc6IGhhc0Vycm9ycygncGFja2FnZXMnKSB9XCJcbiAgICAgICAgICAgIDppdGVtLXRleHQ9XCJnZXRUZXh0XCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICBoaW50PVwiQ2hvb3NlIFBhY2thZ2VzIFRvIEJlIERlbGl2ZXJlZFwiXG4gICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIG5vLWRhdGEtdGV4dD1cIk5vIENsaWVudCdzIFBhY2thZ2VzIEZvciBEZWxpdmVyeVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbWF4LWhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICBkZWxldGFibGUtY2hpcHNcbiAgICAgICAgICAgIGZ1bGwtd2lkdGhcbiAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICBtdWx0aS1saW5lXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgYXV0b1xuICAgICAgICAgICAgaGlkZS1zZWxlY3RlZFxuICAgICAgICAgICAgc21hbGwtY2hpcHNcbiAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgZGF0YS12di1uYW1lPVwicGFja2FnZXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICAgIDx2LWxheW91dFxuICAgICAgICByb3cgXG4gICAgICAgIHdyYXBcbiAgICAgICAgbXktMFxuICAgICAgICBweS0wXG4gICAgICAgIG14LTNcbiAgICAgICAgcHgtM1xuICAgICAgPlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTAgXG4gICAgICAgICAgb2Zmc2V0LXhzMVxuICAgICAgICA+XG4gICAgICAgICAgPHYtc3ViaGVhZGVyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTm90ZXM6XG4gICAgICAgICAgPC92LXN1YmhlYWRlcj5cblxuICAgICAgICAgIDx2LXRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5ub3Rlc1wiXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICBtYXhsZW5ndGg9XCIyNTVcIlxuICAgICAgICAgICAgZnVsbC13aWR0aFxuICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgaGludD1cIihPcHRpb25hbClcIlxuICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgLz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgIDwvdi1jYXJkPlxuXG4gIDwvbW9kYWwtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNb2RhbExheW91dCBmcm9tIFwiTGF5b3V0cy9Nb2RhbExheW91dC52dWVcIjtcbmltcG9ydCB2YWxpZGF0aW9uRXJyb3IgZnJvbSBcIk1peGlucy92YWxpZGF0aW9uLWVycm9yXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInZmb3JtXCI7XG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE1vZGFsTGF5b3V0XG4gIH0sXG4gIG1peGluczogW3ZhbGlkYXRpb25FcnJvcl0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgLyogQWx3YXlzIERlY2xhcmUgWW91ciBGb3JtIE9iamVjdCAqL1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIHR5cGU6IGZhbHNlLFxuICAgICAgY2xpZW50X2lkOiBudWxsLFxuICAgICAgY2xpZW50X25hbWU6IG51bGwsXG4gICAgICBjdXN0b21lcl9pZDogbnVsbCxcbiAgICAgIGN1c3RvbWVyX25hbWU6IG51bGwsXG4gICAgICBkYXRlX2RlbGl2ZXJlZDogbnVsbCxcbiAgICAgIHN0YXJ0X3RpbWU6IFwiXCIsXG4gICAgICBlbmRfdGltZTogXCJcIixcbiAgICAgIHByZXBfdGltZTogMCxcbiAgICAgIHRyYXZlbF90aW1lOiAwLFxuICAgICAgY2xlYW5fdXBfdGltZTogMCxcbiAgICAgIHRvdGFsX3RpbWU6IDAsXG4gICAgICByYXRlOiAwLFxuICAgICAgc3VyY2hhcmdlOiAwLFxuICAgICAgdG90YWxfY2hhcmdlczogXCJcIixcbiAgICAgIG5vdGVzOiBudWxsLFxuICAgICAgZG9fYWRkcmVzc18xOiBudWxsLFxuICAgICAgZG9fYWRkcmVzc18yOiBudWxsLFxuICAgICAgZG9fY2l0eTogbnVsbCxcbiAgICAgIGRvX3N0YXRlOiBudWxsLFxuICAgICAgZG9femlwOiBudWxsLFxuICAgICAgcHVfYWRkcmVzc18xOiBudWxsLFxuICAgICAgcHVfYWRkcmVzc18yOiBudWxsLFxuICAgICAgcHVfY2l0eTogbnVsbCxcbiAgICAgIHB1X3N0YXRlOiBudWxsLFxuICAgICAgcHVfemlwOiBudWxsLFxuICAgICAgcGFja2FnZXM6IFtdXG4gICAgfSksXG4gICAgZGF0ZV9kZWxpdmVyZWRfbW9kYWw6IGZhbHNlLFxuICAgIGN1c3RvbWVyczogW10sXG4gICAgY2xpZW50czogW10sXG4gICAgY2xpZW50OiB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgZG9fYWRkcmVzc18xOiBudWxsLFxuICAgICAgZG9fYWRkcmVzc18yOiBudWxsLFxuICAgICAgZG9fY2l0eTogbnVsbCxcbiAgICAgIGRvX3N0YXRlOiBudWxsLFxuICAgICAgZG9femlwOiBudWxsXG4gICAgfSxcbiAgICBwYWNrYWdlczogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHVua25vd25DbGllbnQ6IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBhZGRyZXNzXzE6IG51bGwsXG4gICAgICBhZGRyZXNzXzI6IG51bGwsXG4gICAgICBjaXR5OiBudWxsLFxuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiBcIlVua25vd24gQ2xpZW50XCIsXG4gICAgICBzdGF0ZTogbnVsbCxcbiAgICAgIHppcDogbnVsbFxuICAgIH0sXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIGN1c3RvbWVyczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHt9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH0sXG4gICAgXCJmb3JtLmN1c3RvbWVyX2lkXCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGN1c3RvbWVyX2lkID0gbnVsbDtcbiAgICAgICAgbGV0IGN1c3RvbWVyX25hbWUgPSBudWxsO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsZXQgY3VzdG9tZXIgPSBfLmZpbmQoc2VsZi5jdXN0b21lcnMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjLmlkID09PSBuZXdWYWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLmNsaWVudHMgPSBjdXN0b21lci5jbGllbnRzO1xuICAgICAgICAgIF8ucmVtb3ZlKHNlbGYuY2xpZW50cywge1xuICAgICAgICAgICAgaWQ6IDFcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLmNsaWVudHMudW5zaGlmdChzZWxmLnVua25vd25DbGllbnQpO1xuICAgICAgICAgIHNlbGYuZm9ybS5jdXN0b21lcl9uYW1lID0gY3VzdG9tZXIubmFtZTtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X25hbWUgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfaWQgPSBudWxsO1xuICAgICAgICAgIGN1c3RvbWVyX2lkID0gbmV3VmFsdWU7XG4gICAgICAgICAgY3VzdG9tZXJfbmFtZSA9IGN1c3RvbWVyLm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5jbGllbnRzID0gW107XG4gICAgICAgICAgc2VsZi5jbGllbnRzLnB1c2goc2VsZi51bmtub3duQ2xpZW50KTtcbiAgICAgICAgICBzZWxmLmZvcm0uY3VzdG9tZXJfaWQgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5jdXN0b21lcl9uYW1lID0gbnVsbDtcbiAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X25hbWUgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZm9ybS5jbGllbnRfaWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9LFxuICAgIFwiZm9ybS5jbGllbnRfbmFtZVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdOYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IG51bGw7XG4gICAgICAgIGxldCBjbGllbnRfbmFtZSA9IG5ld05hbWU7XG5cbiAgICAgICAgaWYgKG5ld05hbWUgIT0gbnVsbCB8fCBuZXdOYW1lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzZWxmLmNsaWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNsaWVudCA9IF8uZmluZChzZWxmLmNsaWVudHMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGMubmFtZSA9PSBuZXdOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLmZvcm0uY2xpZW50X25hbWUgPSBjbGllbnQubmFtZTtcbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9pZCA9IGNsaWVudC5pZDtcbiAgICAgICAgICAgICAgY2xpZW50X2lkID0gY2xpZW50LmlkO1xuICAgICAgICAgICAgICBjbGllbnRfbmFtZSA9IGNsaWVudC5uYW1lO1xuICAgICAgICAgICAgICB0aGlzLmdldENsaWVudFBhY2thZ2VzKCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RHJvcE9mZkFkZHJlc3MoY2xpZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9pZCA9IG51bGw7XG4gICAgICAgICAgc2VsZi5mb3JtLmNsaWVudF9uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0uc3RhcnRfdGltZVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkQ29tcHV0ZVRvdGFsKCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9LFxuICAgIFwiZm9ybS5lbmRfdGltZVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkQ29tcHV0ZVRvdGFsKCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9LFxuICAgIFwiZm9ybS5wcmVwX3RpbWVcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICB0aGlzLmRlYm91bmNlZENvbXB1dGVUb3RhbCgpO1xuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0udHJhdmVsX3RpbWVcIjoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICB0aGlzLmRlYm91bmNlZENvbXB1dGVUb3RhbCgpO1xuICAgICAgfSxcbiAgICAgIGRlZXA6IGZhbHNlXG4gICAgfSxcbiAgICBcImZvcm0uY2xlYW5fdXBfdGltZVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkQ29tcHV0ZVRvdGFsKCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9LFxuICAgIFwiZm9ybS5yYXRlXCI6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlVG90YWxDaGFyZ2UoKTtcbiAgICAgIH0sXG4gICAgICBkZWVwOiBmYWxzZVxuICAgIH0sXG4gICAgXCJmb3JtLnN1cmNoYXJnZVwiOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbihuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVRvdGFsQ2hhcmdlKCk7XG4gICAgICB9LFxuICAgICAgZGVlcDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5kZWJvdW5jZWRDb21wdXRlVG90YWwgPSBfLmRlYm91bmNlKHRoaXMuY29tcHV0ZVRvdGFsLCAyMDAwKTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmdldEluaXRpYWxEYXRhKCk7XG4gICAgdGhpcy5mb3JtLmRhdGVfZGVsaXZlcmVkID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICB0aGlzLmZvcm0udHlwZSA9IFwiZmllbGRfdHJhbnNmZXJcIjtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZUFsbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0wKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnBhY2thZ2VzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gIFtdXG4gICAgICB9XG4gICAgICB0aGlzLmZvcm0ucGFja2FnZXMgPSB0aGlzLnNlbGVjdGVkO1xuICAgIH0sXG4gICAgd29ya2luZ1RpbWUoKSB7XG4gICAgICBsZXQgc3RhcnRfdGltZSA9IHRoaXMuZm9ybS5zdGFydF90aW1lO1xuICAgICAgbGV0IGVuZF90aW1lID0gdGhpcy5mb3JtLmVuZF90aW1lO1xuICAgICAgbGV0IHN0YXJ0X2hyID0gMDtcbiAgICAgIGxldCBzdGFydF9taW4gPSAwO1xuICAgICAgbGV0IGVuZF9ociA9IDA7XG4gICAgICBsZXQgZW5kX21pbiA9IDA7XG4gICAgICBpZiAoc3RhcnRfdGltZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgc3RhcnRfY291bnQgPSAoc3RhcnRfdGltZS5tYXRjaCgvXFxkL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIGlmIChzdGFydF9jb3VudCA+IDEpIHtcbiAgICAgICAgICBzdGFydF9ociA9IHBhcnNlSW50KHN0YXJ0X3RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfY291bnQgPiAzKSB7XG4gICAgICAgICAgc3RhcnRfbWluID0gcGFyc2VJbnQoc3RhcnRfdGltZS5zdWJzdHJpbmcoMiwgNCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZW5kX3RpbWUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGVuZF9jb3VudCA9IChlbmRfdGltZS5tYXRjaCgvXFxkL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIGlmIChlbmRfY291bnQgPiAxKSB7XG4gICAgICAgICAgZW5kX2hyID0gcGFyc2VJbnQoZW5kX3RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kX2NvdW50ID4gMykge1xuICAgICAgICAgIGVuZF9taW4gPSBwYXJzZUludChlbmRfdGltZS5zdWJzdHJpbmcoMiwgNCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgaHJfZGlmZiA9IDA7XG4gICAgICBsZXQgbWluX2RpZmYgPSAwO1xuICAgICAgaHJfZGlmZiA9IGVuZF9ociAtIHN0YXJ0X2hyO1xuICAgICAgaWYgKGhyX2RpZmYgPCAwKSB7XG4gICAgICAgIGhyX2RpZmYgPSAwO1xuICAgICAgfVxuICAgICAgbWluX2RpZmYgPSBNYXRoLmFicyhlbmRfbWluIC0gc3RhcnRfbWluKSAvIDYwO1xuICAgICAgaWYgKG1pbl9kaWZmIDwgMCkge1xuICAgICAgICBtaW5fZGlmZiA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaHJfZGlmZiArIG1pbl9kaWZmO1xuICAgIH0sXG4gICAgc2V0RHJvcE9mZkFkZHJlc3MoY2xpZW50KSB7XG4gICAgICB0aGlzLmNsaWVudCA9IHtcbiAgICAgICAgaWQ6IGNsaWVudC5pZCxcbiAgICAgICAgYWN0aXZlOiBjbGllbnQuYWN0aXZlLFxuICAgICAgICBuYW1lOiBjbGllbnQubmFtZSxcbiAgICAgICAgZG9fYWRkcmVzc18xOiBjbGllbnQuYWRkcmVzc18xLFxuICAgICAgICBkb19hZGRyZXNzXzI6IGNsaWVudC5hZGRyZXNzXzIsXG4gICAgICAgIGRvX2NpdHk6IGNsaWVudC5jaXR5LFxuICAgICAgICBkb19zdGF0ZTogY2xpZW50LnN0YXRlLFxuICAgICAgICBkb196aXA6IGNsaWVudC56aXBcbiAgICAgIH07XG4gICAgICB0aGlzLmZvcm0uZG9fYWRkcmVzc18xID0gY2xpZW50LmFkZHJlc3NfMTtcbiAgICAgIHRoaXMuZm9ybS5kb19hZGRyZXNzXzIgPSBjbGllbnQuYWRkcmVzc18yO1xuICAgICAgdGhpcy5mb3JtLmRvX2NpdHkgPSBjbGllbnQuY2l0eTtcbiAgICAgIHRoaXMuZm9ybS5kb19zdGF0ZSA9IGNsaWVudC5zdGF0ZTtcbiAgICAgIHRoaXMuZm9ybS5kb196aXAgPSBjbGllbnQuemlwO1xuICAgIH0sXG4gICAgY29tcHV0ZVRvdGFsKCkge1xuICAgICAgbGV0IHdvcmtpbmdfdGltZSA9IHRoaXMud29ya2luZ1RpbWUoKTtcbiAgICAgIGxldCBwcmVwX3RpbWUgPSB0aGlzLmZvcm0ucHJlcF90aW1lID8gdGhpcy5mb3JtLnByZXBfdGltZSA6IDA7XG4gICAgICBsZXQgdHJhdmVsX3RpbWUgPSB0aGlzLmZvcm0udHJhdmVsX3RpbWUgPyB0aGlzLmZvcm0udHJhdmVsX3RpbWUgOiAwO1xuICAgICAgbGV0IGNsZWFuX3VwX3RpbWUgPSB0aGlzLmZvcm0uY2xlYW5fdXBfdGltZSA/IHRoaXMuZm9ybS5jbGVhbl91cF90aW1lIDogMDtcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ190aW1lXCIsIHBhcnNlRmxvYXQod29ya2luZ190aW1lKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInByZXBfdGltZVwiLCBwYXJzZUZsb2F0KHByZXBfdGltZSkpO1xuICAgICAgY29uc29sZS5sb2coXCJ0cmF2ZWxfdGltZVwiLCBwYXJzZUZsb2F0KHRyYXZlbF90aW1lKSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFuX3VwX3RpbWVcIiwgcGFyc2VGbG9hdChjbGVhbl91cF90aW1lKSk7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JraW5nX3RpbWUpO1xuICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdChwcmVwX3RpbWUpO1xuICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh0cmF2ZWxfdGltZSk7XG4gICAgICB0b3RhbCArPSBwYXJzZUZsb2F0KGNsZWFuX3VwX3RpbWUpO1xuICAgICAgaWYgKHRvdGFsIDwgMCkge1xuICAgICAgICB0b3RhbCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm0udG90YWxfdGltZSA9IHRvdGFsLnRvRml4ZWQoNCk7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSxcbiAgICBjb21wdXRlVG90YWxDaGFyZ2UoKSB7XG4gICAgICBsZXQgdG90YWxfdGltZSA9IHBhcnNlRmxvYXQodGhpcy5mb3JtLnRvdGFsX3RpbWUpO1xuICAgICAgbGV0IHJhdGUgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS5yYXRlKTtcbiAgICAgIGxldCBzdXJjaGFyZ2UgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS5zdXJjaGFyZ2UpIC8gMTAwO1xuICAgICAgaWYgKHRoaXMuZm9ybS5zdXJjaGFyZ2UgPT09IG51bGwgfHwgdGhpcy5mb3JtLnN1cmNoYXJnZSA9PT0gXCJcIikge1xuICAgICAgICBzdXJjaGFyZ2UgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IHRvdGFsX3JhdGUgPSB0b3RhbF90aW1lICogcmF0ZTtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICB0b3RhbCA9IHRvdGFsX3JhdGUgKyBzdXJjaGFyZ2UgKiB0b3RhbF9yYXRlO1xuICAgICAgdGhpcy5mb3JtLnRvdGFsX2NoYXJnZXMgPSB0b3RhbC50b0ZpeGVkKDQpO1xuICAgIH0sXG4gICAgZ2V0VGV4dDogZnVuY3Rpb24gZ2V0VGV4dChpdGVtKSB7XG4gICAgICByZXR1cm4gYCR7aXRlbS5kc2dfaWR9IHwgJHtpdGVtLnN0eWxlX25vfSB8ICR7XG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIH1gO1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbERhdGEoKSB7XG4gICAgICBheGlvcy5nZXQocm91dGUoXCJhcGkubG9naXN0aWNzLmdldEluaXRpYWxEYXRhXCIpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSByZXNwb25zZS5kYXRhLmRhdGEuY3VzdG9tZXJzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRDbGllbnRQYWNrYWdlcygpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgcm91dGUoXCJhcGkubG9naXN0aWNzLmdldENsaWVudFBhY2thZ2VzXCIsIHtcbiAgICAgICAgICAgIGNsaWVudDogdGhpcy5mb3JtLmNsaWVudF9pZFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybS5wYWNrYWdlcyA9IFtdO1xuICAgICAgICAgIHRoaXMucGFja2FnZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHNlbGYuY3JlYXRlTG9naXN0aWNzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6IGBWYWxpZGF0aW9uIEVycm9yYCxcbiAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+UGxlYXNlIEZpeCBGb3JtIEVycm9yczwvcD5gLFxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVMb2dpc3RpY3MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmZvcm0uYnVzeSA9IHRydWU7XG4gICAgICBpZiAoc2VsZi5mb3JtLnR5cGUgPT09IFwiZmllbGRfdHJhbnNmZXJcIikge1xuICAgICAgICBkZWxldGUgc2VsZi5mb3JtLnBhY2thZ2VzO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGYuZm9ybS50eXBlID09PSBcImRlbGl2ZXJ5X3RpY2tldFwiKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmLmZvcm0ucHVfYWRkcmVzc18xO1xuICAgICAgICBkZWxldGUgc2VsZi5mb3JtLnB1X2FkZHJlc3NfMjtcbiAgICAgICAgZGVsZXRlIHNlbGYuZm9ybS5wdV9jaXR5O1xuICAgICAgICBkZWxldGUgc2VsZi5mb3JtLnB1X3N0YXRlO1xuICAgICAgICBkZWxldGUgc2VsZi5mb3JtLnB1X3ppcDtcbiAgICAgIH1cbiAgICAgIHNlbGYuZm9ybVxuICAgICAgICAucG9zdChyb3V0ZShcImFwaS5sb2dpc3RpY3MuY3JlYXRlXCIpLCBzZWxmLmZvcm0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBzZWxmLiR2YWxpZGF0b3IucmVzZXQoKTtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN1Y2Nlc3NNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxuICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj5UaWNrZXQgSGFzIEJlZW4gQ3JlYXRlZCE8L3A+YCxcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuJG5leHRUaWNrKCgpID0+IHNlbGYuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJ0aWNrZXRzXCIgfSkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgaWYgKHNlbGYuZm9ybS50eXBlID09PSBcImZpZWxkX3RyYW5zZmVyXCIpIHtcbiAgICAgICAgICAgIHNlbGYuZm9ybS5wYWNrYWdlcyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZi5mb3JtLnR5cGUgPT09IFwiZGVsaXZlcnlfdGlja2V0XCIpIHtcbiAgICAgICAgICAgIHNlbGYuZm9ybS5wdV9hZGRyZXNzXzEgPSBcIlwiO1xuICAgICAgICAgICAgc2VsZi5mb3JtLnB1X2FkZHJlc3NfMiA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLmZvcm0ucHVfY2l0eSA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLmZvcm0ucHVfc3RhdGUgPSBcIlwiO1xuICAgICAgICAgICAgc2VsZi5mb3JtLnB1X3ppcCA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZhaWxlZE1vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmYWlsZWRNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJWYWxpZGF0aW9uIEVycm9yIVwiLFxuICAgICAgICAgICAgaHRtbDogYDxwIGNsYXNzPVwidGl0bGVcIj5QbGVhc2UgQ29tcGxldGUgRm9ybSBUbyBTdWJtaXQhPC9wPmAsXG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVkaXJlY3RCYWNrKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi4kbmV4dFRpY2soKCkgPT4gc2VsZi4kcm91dGVyLnB1c2goeyBuYW1lOiBcInRpY2tldHNcIiB9KSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9UaWNrZXRzL0NyZWF0ZVRpY2tldC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibW9kYWwtbGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmxhdDogdHJ1ZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnlcIiwgYXR0cnM6IHsgZml4ZWQ6IFwiXCIsIGFwcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlyZWN0QmFjaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciB3aGl0ZS0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNyZWF0ZSBOZXcgVGlja2V0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZXJyb3JzLmFueSgpIHx8IF92bS5mb3JtLmJ1c3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFNhdmVcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LCBbX3ZtLl92KFwic2F2ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgIHdyYXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJteS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJweS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJteC0zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJweC0zXCI6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiwgXCJvZmZzZXQtbGcxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtc3ViaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmRpZ28tLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiLTE1cHhcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBXaGF0IFR5cGUgT2YgVGlja2V0IElzIFRoaXM/XFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCItMTVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImRlbGl2ZXJ5X3RpY2tldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZWxpdmVyeSBUaWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImZpZWxkX3RyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZpZWxkIFRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcImN1c3RvbWVyXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jdXN0b21lcnMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImN1c3RvbWVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hvb3NlIEN1c3RvbWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpcHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzdXBlcnZpc2VkX3VzZXJfY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJjdXN0b21lclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmN1c3RvbWVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImN1c3RvbWVyX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jdXN0b21lcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1hdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcImNsaWVudFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2xpZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiY2xpZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlwczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaG9vc2UgQ2xpZW50IG9yIFR5cGUgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZmEtdXNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNsaWVudFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNsaWVudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNsaWVudF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jbGllbnRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZGF0ZV9kZWxpdmVyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmZvcm0uZGF0ZV9kZWxpdmVyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjkwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlX2RlbGl2ZXJlZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlX2RlbGl2ZXJlZF9tb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVfZGVsaXZlcmVkX21vZGFsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlX2RlbGl2ZXJlZF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiMjZweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZWxpdmVyeSBEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRfYXZhaWxhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kYXRlX2RlbGl2ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRhdGVfZGVsaXZlcmVkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVfZGVsaXZlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNjcm9sbGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGF0ZV9kZWxpdmVyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGF0ZV9kZWxpdmVyZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVfZGVsaXZlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlX2RlbGl2ZXJlZF9tb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMuZGF0ZV9kZWxpdmVyZWQuc2F2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmRhdGVfZGVsaXZlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT0tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIsIFwib2Zmc2V0LWxnMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiAvXigoKChbMC0xXVswLTldKXwoMlswLTNdKSk6P1swLTVdWzAtOV0pfCgyNDo/MDApKSQvXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7IHJlZ2V4Oi9eKCgoKFswLTFdWzAtOV0pfCgyWzAtM10pKTo/WzAtNV1bMC05XSl8KDI0Oj8wMCkpJC99XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInN0YXJ0X3RpbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwic3RhcnRfdGltZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFydCBUaW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ0aW1lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwic3RhcnRfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXJ0X3RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhcnRfdGltZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhcnRfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IC9eKCgoKFswLTFdWzAtOV0pfCgyWzAtM10pKTo/WzAtNV1bMC05XSl8KDI0Oj8wMCkpJC8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbl92YWx1ZTogX3ZtLmZvcm0uc3RhcnRfdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwieyByZWdleDovXigoKChbMC0xXVswLTldKXwoMlswLTNdKSk6P1swLTVdWzAtOV0pfCgyNDo/MDApKSQvLG1pbl92YWx1ZTpmb3JtLnN0YXJ0X3RpbWV9XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcImVuZF90aW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImVuZF90aW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVuZCBUaW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ0aW1lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwiZW5kX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbmRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbmRfdGltZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW5kX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IGRlY2ltYWw6IDQsIG1pbl92YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJwcmVwX3RpbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwicHJlcF90aW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlByZXAgVGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYWNjZXNzX3RpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInByZXBfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnByZXBfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwcmVwX3RpbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnByZXBfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgZGVjaW1hbDogNCwgbWluX3ZhbHVlOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInsgZGVjaW1hbDo0LCBtaW5fdmFsdWU6MCB9XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInRyYXZlbF90aW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcInRyYXZlbF90aW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRyYXZlbCBUaW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhY2Nlc3NfdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwidHJhdmVsX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50cmF2ZWxfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0cmF2ZWxfdGltZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHJhdmVsX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IGRlY2ltYWw6IDQsIG1pbl92YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IGRlY2ltYWw6NCwgbWluX3ZhbHVlOjAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJjbGVhbl91cF90aW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcImNsZWFuX3VwX3RpbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2xlYW4gVXAgVGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYWNjZXNzX3RpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcImNsZWFuX3VwX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jbGVhbl91cF90aW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImNsZWFuX3VwX3RpbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNsZWFuX3VwX3RpbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiLCBcIm9mZnNldC1sZzFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBkZWNpbWFsOiA0LCBtaW5fdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwieyBkZWNpbWFsOjQsIG1pbl92YWx1ZTowIH1cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJlcnJvci0tdGV4dFwiOiBfdm0uaGFzRXJyb3JzKFwidG90YWxfdGltZVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJ0b3RhbF90aW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsIFRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF2X3RpbWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ0b3RhbF90aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJUb3RhbCBOby4gT2YgSG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRvdGFsX3RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidG90YWxfdGltZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udG90YWxfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgZGVjaW1hbDogNCwgbWluX3ZhbHVlOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInsgZGVjaW1hbDo0LCBtaW5fdmFsdWU6MCB9XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInJhdGVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwicmF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYS1tb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS12di1uYW1lXCI6IFwicmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRGVsaXZlcnkgQ2hhcmdlIFJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgZGVjaW1hbDogNCwgbWluX3ZhbHVlOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInsgZGVjaW1hbDo0LCBtaW5fdmFsdWU6MCB9XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInN1cmNoYXJnZVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJzdXJjaGFyZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3VyY2hhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcIm1vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcImZhLXBlcmNlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtbmFtZVwiOiBcInN1cmNoYXJnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGVyY2VudGFnZSBpZS4gMjAlID0gMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN1cmNoYXJnZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdXJjaGFyZ2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN1cmNoYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgZGVjaW1hbDogNCwgbWluX3ZhbHVlOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInsgZGVjaW1hbDo0LCBtaW5fdmFsdWU6MCB9XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZXJyb3ItLXRleHRcIjogX3ZtLmhhc0Vycm9ycyhcInRvdGFsX2NoYXJnZXNcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwidG90YWxfY2hhcmdlc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBDaGFyZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiVVNEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJ0b3RhbF9jaGFyZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJEZWxpdmVyeSBGZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInBlcnNpc3RlbnQtaGludFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRvdGFsX2NoYXJnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidG90YWxfY2hhcmdlc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udG90YWxfY2hhcmdlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5mb3JtLnR5cGUgPT09IFwiZmllbGRfdHJhbnNmZXJcIlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB3cmFwOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm15LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJweS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibXgtM1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcInB4LTNcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcxMDogXCJcIiwgXCJvZmZzZXQtbGcxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm15LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LTNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4LTNcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBQaWNrIFVwIEFkZHJlc3NcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiLCBcIm9mZnNldC1sZzFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRkcmVzcyAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibG9va3Nfb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucHVfYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicHVfYWRkcmVzc18xXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnB1X2FkZHJlc3NfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZHJlc3MgMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImxvb2tzX3R3b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnB1X2FkZHJlc3NfMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInB1X2FkZHJlc3NfMlwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wdV9hZGRyZXNzXzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibG9jYXRpb25fY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnB1X2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwdV9jaXR5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnB1X2NpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcIm1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnB1X3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicHVfc3RhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucHVfc3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyByZWdleDogL15cXGR7NX0oPzpbLVxcc11cXGR7NH0pPyQvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IHJlZ2V4OiAvXlxcXFxkezV9KD86Wy1cXFxcc11cXFxcZHs0fSk/JC8gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJwdV96aXBcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmVycm9yTWVzc2FnZXMoXCJwdV96aXBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJaaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJtYXJrdW5yZWFkX21haWxib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwdV96aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wdV96aXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwdV96aXBcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucHVfemlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiXCIsXG4gICAgICAgICAgICAgICAgd3JhcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm15LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIm14LTNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB4LTNcIjogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcxMDogXCJcIiwgXCJvZmZzZXQtbGcxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyIHRpdGxlXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJteS0wXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXgtM1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0zXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgRHJvcCBPZmYgQWRkcmVzc1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiLCBcIm9mZnNldC1sZzFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibG9va3Nfb25lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZG9fYWRkcmVzc18xLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRvX2FkZHJlc3NfMVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZG9fYWRkcmVzc18xXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZHJlc3MgMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibG9va3NfdHdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZG9fYWRkcmVzc18yLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRvX2FkZHJlc3NfMlwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZG9fYWRkcmVzc18yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIGxnMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImxvY2F0aW9uX2NpdHlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kb19jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRvX2NpdHlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRvX2NpdHlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbGcyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxpZ2h0OiBcIlwiLCBsYWJlbDogXCJTdGF0ZVwiLCBcInByZXBlbmQtaWNvblwiOiBcIm1hcFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRvX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRvX3N0YXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kb19zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBsZzI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgcmVnZXg6IC9eXFxkezV9KD86Wy1cXHNdXFxkezR9KT8kLyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ7IHJlZ2V4OiAvXlxcXFxkezV9KD86Wy1cXFxcc11cXFxcZHs0fSk/JC8gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJkb196aXBcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5lcnJvck1lc3NhZ2VzKFwiZG9femlwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlppcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwibWFya3VucmVhZF9tYWlsYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJkb196aXBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kb196aXAsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZG9femlwXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kb196aXBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZm9ybS50eXBlID09PSBcImRlbGl2ZXJ5X3RpY2tldFwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHdyYXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibXktMFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcInB5LTBcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJteC0zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHgtM1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEwOiBcIlwiLCBcIm9mZnNldC14czFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3ViaGVhZGVyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgSXRlbXMgVG8gQmUgRGVsaXZlcmVkIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYWNrYWdlcy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFja2FnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic2Vjb25kYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlQWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZC5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNlbGVjdCBBbGxcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVW5zZWxlY3QgQWxsXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImVycm9yLS10ZXh0XCI6IF92bS5oYXNFcnJvcnMoXCJwYWNrYWdlc1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wYWNrYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uZXJyb3JNZXNzYWdlcyhcInBhY2thZ2VzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBfdm0uZ2V0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDaG9vc2UgUGFja2FnZXMgVG8gQmUgRGVsaXZlcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tZGF0YS10ZXh0XCI6IFwiTm8gQ2xpZW50J3MgUGFja2FnZXMgRm9yIERlbGl2ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlwczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWxldGFibGUtY2hpcHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG86IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1zZWxlY3RlZFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNtYWxsLWNoaXBzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LW5hbWVcIjogXCJwYWNrYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhY2thZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFja2FnZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFja2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCJcIixcbiAgICAgICAgICAgICAgICB3cmFwOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXktMFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHktMFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXgtM1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHgtM1wiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEwOiBcIlwiLCBcIm9mZnNldC14czFcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXN1YmhlYWRlclwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgIE5vdGVzOlxcbiAgICAgICAgXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCIyNTVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiKE9wdGlvbmFsKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGVyc2lzdGVudC1oaW50XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibm90ZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5vdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMDhmZjkyZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA4ZmY5MmRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1RpY2tldHMvQ3JlYXRlVGlja2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQ2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ3JlYXRlVGlja2V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA4ZmY5MmRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DcmVhdGVUaWNrZXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVGlja2V0cy9DcmVhdGVUaWNrZXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAwOGZmOTJkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDA4ZmY5MmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVGlja2V0cy9DcmVhdGVUaWNrZXQudnVlXG4vLyBtb2R1bGUgaWQgPSA5MzRcbi8vIG1vZHVsZSBjaHVua3MgPSA0NiIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDk2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjAgNjEiLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8qIHRoaXMgbWl4aW5zIGlzIHJlc3BvbnNpYmxlIGZvciBjb25jYXRpbmF0aW5nIGVycm9yIG1lc3NhZ2VzIGZyb20gdmZvcm0gYW5kIHZlZS12YWxpZGF0ZSAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8qIGVycm9yQmFnIGlzIHJlbGF0YWVkIHRvIHZlZVZhbGlkYXRlIGNvbmZpZyBuYW1lKi9cbiAgICAvKiBmb3JtIGlzIHJlbGF0ZWQgdG8gdmZvcm0gKi9cbiAgICBlcnJvck1lc3NhZ2VzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuY29sbGVjdChmaWVsZCkuY29uY2F0KHRoaXMuZm9ybS5lcnJvcnMub25seShmaWVsZCkpO1xuICAgIH0sXG4gICAgaGFzRXJyb3JzKGZpZWxkKSB7XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5lcnJvcnNcbiAgICAgICAgLmNvbGxlY3QoZmllbGQpXG4gICAgICAgIC5jb25jYXQodGhpcy5mb3JtLmVycm9ycy5vbmx5KGZpZWxkKSk7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyAwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJsVks3XCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIk9NTjRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImxWSzdcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogZXh0ZXJuYWwgXCJheGlvc1wiXG52YXIgZXh0ZXJuYWxfX2F4aW9zXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJPTU40XCIpO1xudmFyIGV4dGVybmFsX19heGlvc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oZXh0ZXJuYWxfX2F4aW9zXyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3V0aWwuanNcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxyXG4gKiBEZWVwIGNvcHkgdGhlIGdpdmVuIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cbmZ1bmN0aW9uIGRlZXBDb3B5KG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIGNvcHkgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKTtcbiAgfSk7XG4gIHJldHVybiBjb3B5O1xufVxuLyoqXHJcbiAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIHdyYXAgaXQgaW4gb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtBbnl9IHZhbHVlXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cblxuZnVuY3Rpb24gYXJyYXlXcmFwKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0Vycm9ycy5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gRXJyb3JzX190eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBFcnJvcnNfX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBFcnJvcnNfX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBFcnJvcnNfX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cbnZhciBFcnJvcnNfRXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGVycm9yIGJhZyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRXJyb3JzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvcnMpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuICAvKipcclxuICAgKiBTZXQgdGhlIGVycm9ycyBvYmplY3Qgb3IgZmllbGQgZXJyb3IgbWVzc2FnZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGZpZWxkXHJcbiAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd8dW5kZWZpbmVkfSBtZXNzYWdlc1xyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVycm9ycywgW3tcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChmaWVsZCwgbWVzc2FnZXMpIHtcbiAgICAgIGlmIChFcnJvcnNfX3R5cGVvZihmaWVsZCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZmllbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChfZXh0ZW5kcyh7fSwgdGhpcy5lcnJvcnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgZmllbGQsIGFycmF5V3JhcChtZXNzYWdlcykpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0aGUgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgaXMgYW4gZXJyb3IgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoYXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBhcmUgYW55IGVycm9ycyBmb3IgdGhlIGdpdmVuIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHsuLi5TdHJpbmd9IGZpZWxkc1xyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzQW55XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0FueSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGZpZWxkc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGFzKGZpZWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0aGVyZSBhcmUgYW55IGVycm9ycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW55KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgU3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChmaWVsZCkge1xuICAgICAgaWYgKHRoaXMuaGFzKGZpZWxkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwoZmllbGQpWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9yIG1lc3NhZ2VzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoZmllbGQpIHtcbiAgICAgIHJldHVybiBhcnJheVdyYXAodGhpcy5lcnJvcnNbZmllbGRdIHx8IFtdKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7Li4uU3RyaW5nfSBmaWVsZHNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbmx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9ubHkoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG1lc3NhZ2VzID0gW107XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZmllbGRzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGZpZWxkc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBfdGhpczIuZ2V0KGZpZWxkKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9ycyBpbiBhIGZsYXQgYXJyYXkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZsYXR0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxhdHRlbigpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIENsZWFyIG9uZSBvciBhbGwgZXJyb3IgZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfHVuZGVmaW5lZH0gZmllbGRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoZmllbGQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZXJyb3JzID0ge307XG5cbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSAhPT0gZmllbGQpIHtcbiAgICAgICAgICAgIGVycm9yc1trZXldID0gX3RoaXMzLmVycm9yc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0KGVycm9ycyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVycm9ycztcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9Gb3JtLmpzXG5mdW5jdGlvbiBGb3JtX190eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBGb3JtX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgRm9ybV9fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIEZvcm1fX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gRm9ybV9fZXh0ZW5kcygpIHsgRm9ybV9fZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBGb3JtX19leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gRm9ybV9fY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gRm9ybV9fY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBGb3JtX19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgRm9ybV9fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG52YXIgRm9ybV9Gb3JtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBGb3JtX19jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtKTtcblxuICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc19FcnJvcnMoKTtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRlZXBDb3B5KGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbiAgLyoqXG4gICAqIEZpbGwgZm9ybSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cblxuXG4gIEZvcm1fX2NyZWF0ZUNsYXNzKEZvcm0sIFt7XG4gICAga2V5OiBcImZpbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsbChkYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5rZXlzKCkucmVkdWNlKGZ1bmN0aW9uIChkYXRhLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIGRhdGEsIEZvcm1fX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIF90aGlzMltrZXldKSk7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBkYXRhIGtleXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImtleXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIUZvcm0uaWdub3JlLmluY2x1ZGVzKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnQgcHJvY2Vzc2luZyB0aGUgZm9ybS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0UHJvY2Vzc2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFByb2Nlc3NpbmcoKSB7XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5pc2ggcHJvY2Vzc2luZyB0aGUgZm9ybS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZpbmlzaFByb2Nlc3NpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluaXNoUHJvY2Vzc2luZygpIHtcbiAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGZvcm0gZXJyb3JzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhRm9ybS5pZ25vcmUuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpczNba2V5XSA9IGRlZXBDb3B5KF90aGlzMy5vcmlnaW5hbERhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIEdFVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZ2V0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBPU1QgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2godXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1dCh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncHV0JywgdXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmcm9tIHZpYSBhIERFTEVURSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxldGUodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBkYXRhIHZpYSBhbiBIVFRQIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1ldGhvZCAoZ2V0LCBwb3N0LCBwYXRjaCwgcHV0KVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWcgKGF4aW9zIGNvbmZpZylcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3VibWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdChtZXRob2QsIHVybCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdGhpcy5zdGFydFByb2Nlc3NpbmcoKTtcbiAgICAgIHZhciBkYXRhID0gbWV0aG9kID09PSAnZ2V0JyA/IHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmRhdGEoKVxuICAgICAgfSA6IHRoaXMuZGF0YSgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZXh0ZXJuYWxfX2F4aW9zX19kZWZhdWx0LmEucmVxdWVzdChGb3JtX19leHRlbmRzKHtcbiAgICAgICAgICB1cmw6IF90aGlzNC5yb3V0ZSh1cmwpLFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSwgY29uZmlnKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBfdGhpczQuZmluaXNoUHJvY2Vzc2luZygpO1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIF90aGlzNC5idXN5ID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF90aGlzNC5lcnJvcnMuc2V0KF90aGlzNC5leHRyYWN0RXJyb3JzKGVycm9yLnJlc3BvbnNlKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgZXJyb3JzIGZyb20gdGhlIHJlc3BvbnNlIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0RXJyb3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RFcnJvcnMocmVzcG9uc2UpIHtcbiAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCBGb3JtX190eXBlb2YocmVzcG9uc2UuZGF0YSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6IEZvcm0uZXJyb3JNZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycykge1xuICAgICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgcmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3I6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gRm9ybV9fZXh0ZW5kcyh7fSwgcmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIG5hbWVkIHJvdXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicm91dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91dGUobmFtZSkge1xuICAgICAgdmFyIHBhcmFtZXRlcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIHVybCA9IG5hbWU7XG5cbiAgICAgIGlmIChGb3JtLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICB1cmwgPSBkZWNvZGVVUkkoRm9ybS5yb3V0ZXNbbmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoRm9ybV9fdHlwZW9mKHBhcmFtZXRlcnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgIGlkOiBwYXJhbWV0ZXJzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIntcIi5jb25jYXQoa2V5LCBcIn1cIiksIHBhcmFtZXRlcnNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIGVycm9ycyBvbiBrZXlkb3duLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25LZXlkb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybTtcbn0oKTtcblxuRm9ybV9Gb3JtLnJvdXRlcyA9IHt9O1xuRm9ybV9Gb3JtLmVycm9yTWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuRm9ybV9Gb3JtLmlnbm9yZSA9IFsnYnVzeScsICdzdWNjZXNzZnVsJywgJ2Vycm9ycycsICdvcmlnaW5hbERhdGEnXTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNyY19Gb3JtID0gKEZvcm1fRm9ybSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG4vL1xuLy9cbi8vXG4vL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgSGFzRXJyb3IgPSAoe1xuICBuYW1lOiAnaGFzLWVycm9yJyxcbiAgcHJvcHM6IHtcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZmllbGQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDM4OWE2ZGRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuaGFzKF92bS5maWVsZCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtYmxvY2sgaW52YWxpZC1mZWVkYmFja1wiLGRvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KF92bS5maWVsZCkpfX0pOl92bS5fZSgpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBIYXNFcnJvcixcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0hhc0Vycm9yID0gKENvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydC5qc1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnQgPSAoe1xuICBwcm9wczoge1xuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkaXNtaXNzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNtaXNzOiBmdW5jdGlvbiBkaXNtaXNzKCkge1xuICAgICAgaWYgKHRoaXMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRFcnJvciA9ICh7XG4gIG5hbWU6ICdhbGVydC1lcnJvcicsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdUaGVyZSB3ZXJlIHNvbWUgcHJvYmxlbXMgd2l0aCB5b3VyIGlucHV0LidcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lNzNhYTdjOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG52YXIgQWxlcnRFcnJvcl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuYW55KCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImRlZmF1bHRcIixbKF92bS5mb3JtLmVycm9ycy5oYXMoJ2Vycm9yJykpP19jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgnZXJyb3InKSl9fSk6X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSldKV0sMik6X3ZtLl9lKCl9XG52YXIgQWxlcnRFcnJvcl9zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3IudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0RXJyb3JfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydEVycm9yLFxuICBBbGVydEVycm9yX3JlbmRlcixcbiAgQWxlcnRFcnJvcl9zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0RXJyb3JfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydEVycm9yX19fdnVlX3N0eWxlc19fLFxuICBBbGVydEVycm9yX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRFcnJvciA9IChBbGVydEVycm9yX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0RXJyb3JzID0gKHtcbiAgbmFtZTogJ2FsZXJ0LWVycm9ycycsXG4gIGV4dGVuZHM6IEFsZXJ0LFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdUaGVyZSB3ZXJlIHNvbWUgcHJvYmxlbXMgd2l0aCB5b3VyIGlucHV0LidcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MjJhNjU5MVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxudmFyIEFsZXJ0RXJyb3JzX3JlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gKF92bS5mb3JtLmVycm9ycy5hbnkoKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5tZXNzYWdlKT9fYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd1bCcsX3ZtLl9sKChfdm0uZm9ybS5lcnJvcnMuZmxhdHRlbigpKSxmdW5jdGlvbihlcnJvcil7cmV0dXJuIF9jKCdsaScse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhlcnJvcil9fSl9KSldKTpfdm0uX2UoKX1cbnZhciBBbGVydEVycm9yc19zdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21wb25lbnRzL0FsZXJ0RXJyb3JzLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0RXJyb3JzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRFcnJvcnNfQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBBbGVydEVycm9ycyxcbiAgQWxlcnRFcnJvcnNfcmVuZGVyLFxuICBBbGVydEVycm9yc19zdGF0aWNSZW5kZXJGbnMsXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3Njb3BlSWRfXyxcbiAgQWxlcnRFcnJvcnNfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0RXJyb3JzID0gKEFsZXJ0RXJyb3JzX0NvbXBvbmVudC5leHBvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgQWxlcnRTdWNjZXNzID0gKHtcbiAgbmFtZTogJ2FsZXJ0LXN1Y2Nlc3MnLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBhZmRiOGE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxudmFyIEFsZXJ0U3VjY2Vzc19yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5zdWNjZXNzZnVsKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1zdWNjZXNzIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e1wicm9sZVwiOlwiYWxlcnRcIn19LFsoX3ZtLmRpc21pc3NpYmxlKT9fYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e1wiY2xpY2tcIjpfdm0uZGlzbWlzc319LFtfYygnc3Bhbicse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbX3ZtLl92KFwiw5dcIildKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX3ZtLl90KFwiZGVmYXVsdFwiLFtfYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5tZXNzYWdlKX19KV0pXSwyKTpfdm0uX2UoKX1cbnZhciBBbGVydFN1Y2Nlc3Nfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG4vKiBzY3JpcHQgKi9cblxuXG4vKiB0ZW1wbGF0ZSAqL1xuXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuXG52YXIgQWxlcnRTdWNjZXNzX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRTdWNjZXNzLFxuICBBbGVydFN1Y2Nlc3NfcmVuZGVyLFxuICBBbGVydFN1Y2Nlc3Nfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfc3R5bGVzX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfQWxlcnRTdWNjZXNzID0gKEFsZXJ0U3VjY2Vzc19Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2luZGV4LmpzXG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRm9ybVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY19Gb3JtOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJFcnJvcnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBFcnJvcnNfRXJyb3JzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJIYXNFcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfSGFzRXJyb3I7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0RXJyb3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0FsZXJ0RXJyb3I7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0RXJyb3JzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydEVycm9yczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQWxlcnRTdWNjZXNzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydFN1Y2Nlc3M7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzcmNfRm9ybTsgfSk7XG5cblxuXG5cblxuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDk2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDQwIDQxIDQyIDQzIDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kYTk1MzA2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbExheW91dC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSBudWxsXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kYTk1MzA2MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vZGFsTGF5b3V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01vZGFsTGF5b3V0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kYTk1MzA2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRhOTUzMDYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA5Njlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAxOCAxOSAyMCAyMSAyMiAyMyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kYTk1MzA2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbExheW91dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImI4YmI3ZDEwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kYTk1MzA2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbExheW91dC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZGE5NTMwNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWxMYXlvdXQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWRhOTUzMDYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA5NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAxOCAxOSAyMCAyMSAyMiAyMyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1tZXNzYWdlc19fbWVzc2FnZSB7XFxuICBjb2xvcjogI2U1NzM3MztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VyaWFoL1NpdGVzL2RzZ2xpdmUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9Nb2RhbExheW91dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNCQTtFQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTW9kYWxMYXlvdXQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDx2LWFwcCBcXG4gICAgdi1jbG9hayBcXG4gICAgc3RhbmRhbG9uZVxcbiAgPlxcbiAgICA8di1jb250ZW50IGNsYXNzPVxcXCJ3aGl0ZVxcXCI+XFxuICAgICAgPHYtY29udGFpbmVyIFxcbiAgICAgICAgdHJhbnNpdGlvbj1cXFwic2xpZGUteC10cmFuc2l0aW9uXFxcIiBcXG4gICAgICAgIGZsdWlkIFxcbiAgICAgICAgY2xhc3M9XFxcInBhLTAgbWEtMFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1jYXJkIDpmbGF0PVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgPHNsb3QgbmFtZT1cXFwidG9vbGJhclxcXCIvPlxcbiAgICAgICAgICA8c2xvdC8+XFxuICAgICAgICA8L3YtY2FyZD5cXG4gICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgIDxzbG90IG5hbWU9XFxcImZvb3RlclxcXCIvPlxcbiAgICA8L3YtY29udGVudD5cXG4gIDwvdi1hcHA+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuLnYtbWVzc2FnZXNfX21lc3NhZ2Uge1xcbiAgY29sb3I6ICNlNTczNzM7XFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWRhOTUzMDYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA5NzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAxOCAxOSAyMCAyMSAyMiAyMyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgc3RhbmRhbG9uZTogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250ZW50XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid2hpdGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTAgbWEtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0cmFuc2l0aW9uOiBcInNsaWRlLXgtdHJhbnNpdGlvblwiLCBmbHVpZDogXCJcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdChcInRvb2xiYXJcIiksIF92bS5fdihcIiBcIiksIF92bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl90KFwiZm9vdGVyXCIpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1kYTk1MzA2MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZGE5NTMwNjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTW9kYWxMYXlvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA5NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAxOCAxOSAyMCAyMSAyMiAyMyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSJdLCJzb3VyY2VSb290IjoiIn0=