webpackJsonp([37],{

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Layouts_ModalLayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Mixins_validation_error__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform__ = __webpack_require__(948);
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
        rate: "",
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
      return "DSG# " + item.dsg_id + "|Style# " + item.style_no + "|Description: " + item.description;
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
          return self.$router.push({ name: "logistics" });
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
        return self.$router.push({ name: "logistics" });
      });
    }
  }
});

/***/ }),

/***/ 1084:
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
    require("vue-hot-reload-api")      .rerender("data-v-10ca036e", module.exports)
  }
}

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1083)
/* template */
var __vue_template__ = __webpack_require__(1084)
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
Component.options.__file = "resources/assets/js/pages/Logistics/CreateLogistics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10ca036e", Component.options)
  } else {
    hotAPI.reload("data-v-10ca036e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 947:
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

/***/ 948:
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