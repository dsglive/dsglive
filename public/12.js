webpackJsonp([12],{

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

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1003);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("89ca57fc", content, false, {});
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

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Confirm.vue","sourceRoot":""}]);

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

/***/ 1005:
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

/***/ 1006:
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

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("1905db58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966295c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ArchivedDsg.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4966295c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ArchivedDsg.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.compress--icon[data-v-4966295c] {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/pages/Dsg/resources/assets/js/pages/Dsg/ArchivedDsg.vue"],"names":[],"mappings":";AAoaA;EACA,kBAAA;EACA,mBAAA;CACA","file":"ArchivedDsg.vue","sourcesContent":["<template>\n  <main-layout>\n    <v-container fluid>\n      <!-- Search and Action Buttons -->\n      <v-layout \n        row \n        wrap>\n        <v-flex \n          xs12 \n        >\n          <v-card \n            light \n            flat\n          >\n            <v-card-title>\n              <v-text-field\n                v-model=\"search\"\n                append-icon=\"search\"\n                label=\"Search Receiving\"\n                single-line\n                hide-details\n                light\n              />\n            </v-card-title>\n          </v-card>\n        </v-flex>\n      </v-layout>\n      <!-- Dsg Data Table -->\n      <v-data-table\n        v-model=\"selected\"\n        :headers=\"headers\"\n        :items=\"items\"\n        :search=\"search\"\n        :pagination.sync=\"pagination\"\n        item-key=\"id\"\n      >\n        <!-- Header Section -->\n        <template\n          slot=\"headers\" \n          slot-scope=\"props\"\n        >\n          <tr>\n            <th \n              v-for=\"header in props.headers\" \n              :key=\"header.text\"\n              :class=\"['column sortable', pagination.descending ? 'desc' : 'asc', \n                       header.value === pagination.sortBy ? 'name' : '', \n                       {'text-xs-left': header.align === 'left', \n                        'text-xs-right': header.align === 'right', \n                        'text-xs-center': header.align === 'center'},\n                       $vuetify.breakpoint.width >= 600 && 'title']\"\n              @click=\"changeSort(header.value)\"\n            >\n              <span>\n                <v-icon>arrow_upward</v-icon>\n                {{ header.text }}\n              </span>\n            </th>\n          </tr>\n        </template>\n        <!-- Row Section -->\n        <template \n          slot=\"items\" \n          slot-scope=\"props\"\n        >\n          <tr>\n            <td \n              class=\"title text-xs-center\" \n              style=\"width:10%;margin-left:0px;margin-right:0px;padding-left:0px;padding-right:0px;\"\n            >\n              <v-btn \n                v-if=\"$auth.check(['warehouse','admin'])\"\n                flat \n                icon \n                color=\"indigo\" \n                class=\"compress--icon\"\n                @click=\"viewArchived(props.item)\"\n              >\n                <v-icon>search</v-icon>\n              </v-btn>\n              <v-btn \n                v-if=\"$auth.check('admin')\"\n                flat \n                icon \n                color=\"orange\" \n                class=\"compress--icon\"\n                @click=\"restoreDsg(props.item)\"\n              >\n                <v-icon>restore</v-icon>\n              </v-btn>\n              <v-btn \n                v-if=\"$auth.check('admin')\"\n                flat \n                icon \n                color=\"error\" \n                class=\"compress--icon\"\n                @click=\"openDialog(props.item)\"\n              >\n                <v-icon>fa-trash</v-icon>\n              </v-btn>\n            </td>\n            <td class=\"title text-xs-left accent--text\">\n              {{ props.item.id }}\n            </td>\n            <td \n              :class=\"{'red--text': props.item.customer_id === null || props.item.customer_id === 1001, 'accent--text': props.item.customer_id > 1001}\" \n              class=\"title text-xs-left\"\n            >\n              {{ props.item.customer_name }}\n            </td>\n            <td \n              :class=\"{'red--text': props.item.client_id === null || props.item.client_id === 1, 'accent--text': props.item.client_id > 1}\" \n              class=\"title text-xs-left\"\n            >\n              {{ props.item.client_name }}\n            </td>\n            <td \n              :class=\"{'red--text': props.item.shipper_id === null || props.item.shipper_id === 1, 'accent--text': props.item.shipper_id > 1}\"\n              class=\"title text-xs-left\"\n            >\n              {{ props.item.shipper_name }}\n            </td>\n            <td class=\"title text-xs-center accent--text\">\n              {{ props.item.total_pieces }}\n            </td>\n            <td class=\"title text-xs-center accent--text\">\n              {{ props.item.total_cube }}\n            </td>\n            <td \n              v-if=\"$auth.check('admin')\"\n              class=\"title text-xs-center accent--text\"\n            >\n              {{ props.item.receiving_amount }}\n            </td>\n          </tr>\n        </template>\n        <!-- Pagination Section -->\n        <template \n          slot=\"pageText\"\n          slot-scope=\"{ pageStart, pageStop }\"\n        >\n          From {{ pageStart }} to {{ pageStop }}\n        </template>\n        <!-- No Data Section -->\n        <template slot=\"no-data\">\n          <v-alert \n            :value=\"true\" \n            color=\"blue-grey\" \n            icon=\"warning\">\n            Opps! No Dsg has been Archived Yet! \n          </v-alert>\n        </template>\n        <!-- No Search Result Section -->\n        <v-alert \n          slot=\"no-results\" \n          :value=\"true\" \n          color=\"blue-grey\" \n          icon=\"warning\">\n          Your search for \"{{ search }}\" found no results.\n        </v-alert>\n      </v-data-table>\n      <confirm \n        :callback=\"confirmed(forceDelete)\" \n      />\n    </v-container>\n  </main-layout>\n</template>\n\n<script>\nimport MainLayout from \"Layouts/Main.vue\";\nimport validationError from \"Mixins/validation-error\";\nimport confirmation from \"Mixins/confirmation\";\nimport { Form } from \"vform\";\nimport swal from \"sweetalert2\";\nimport Confirm from \"Components/dsg/Confirm.vue\";\nexport default {\n  components: {\n    MainLayout,\n    Confirm\n  },\n  mixins: [validationError, confirmation],\n  data: () => ({\n    contentClass: { grey: true, \"lighten-4\": true, \"accent--text\": true },\n    dialog: false,\n    /* table */\n    headers: [\n      { text: \"Actions\", value: \"actions\", align: \"center\", sortable: false },\n      //   { text: \"Status\", value: \"active\", align: \"left\", sortable: true },\n      { text: \"DSG#\", value: \"id\", align: \"left\", sortable: true },\n      {\n        text: \"Customer\",\n        value: \"customer_name\",\n        align: \"left\",\n        sortable: true\n      },\n      { text: \"Client\", value: \"client_name\", align: \"left\", sortable: true },\n      { text: \"Shipper\", value: \"shipper_name\", align: \"left\", sortable: true },\n      { text: \"Pieces\", value: \"total_pieces\", align: \"left\", sortable: true },\n      { text: \"Cu.ft\", value: \"total_cube\", align: \"left\", sortable: true },\n      {\n        text: \"Amount($)\",\n        value: \"receiving_amount\",\n        align: \"left\",\n        sortable: true\n      }\n    ],\n    items: [],\n    selected: [],\n    pagination: {\n      sortBy: \"name\"\n    },\n    dsgForm: new Form({}),\n    toggleForm: new Form({\n      toggle: false,\n      dsg_id: null\n    }),\n    search: \"\",\n    deleteDsgForm: new Form({\n      dsg_id: null\n    }),\n    domain: window.location.hostname\n  }),\n  watch: {\n    items: {\n      handler: function(newValue) {},\n      deep: true\n    }\n  },\n  mounted() {\n    let self = this;\n    self.fetchDsg();\n    if (self.$auth.check(\"warehouse\")) {\n      self.$delete(self.headers, 7);\n    }\n  },\n  methods: {\n    restoreDsg(dsg) {\n      let self = this;\n      self.toggleForm.toggle = false;\n      self.toggleForm.dsg_id = dsg.id;\n      let index = _.findIndex(self.items, { id: dsg.id });\n      axios\n        .post(route(\"api.dsg.restoreArchived\"), self.toggleForm)\n        .then(response => {\n          if (response.data.status === true) {\n            self.$delete(self.items, index);\n            let toggleModal = swal.mixin({\n              confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n              buttonsStyling: false\n            });\n            toggleModal({\n              title: \"Success!\",\n              html: '<p class=\"title\">DSG Has Been Restored To Receiving.,</p>',\n              type: \"success\",\n              confirmButtonText: \"Back\"\n            });\n          }\n        })\n        .catch(errors => {\n          let toggleModal = swal.mixin({\n            confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n            buttonsStyling: false\n          });\n          toggleModal({\n            title: \"Oops! Forbidden Action!\",\n            html: '<p class=\"title\">' + errors.response.data.message + \"</p>\",\n            type: \"warning\",\n            confirmButtonText: \"Back\"\n          });\n        });\n    },\n    viewArchived(dsg) {\n      vm.$router.push({\n        name: \"view-archived-dsg\",\n        params: { id: `${dsg.id}` }\n      });\n    },\n    async fetchDsg() {\n      let self = this;\n      self.dsgForm.busy = true;\n      try {\n        const payload = await axios.post(\n          route(\"api.dsg.indexArchived\"),\n          self.dsgForm\n        );\n        self.items = payload.data.data;\n        self.dsgForm = new Form({});\n      } catch ({ errors, message }) {\n        if (errors) {\n          self.dsgForm.errors.set(errors);\n        }\n        if (message) {\n        }\n        self.dsgForm.busy = false;\n      }\n    },\n    forceDelete(dsg) {\n      let self = this;\n      self.deleteDsgForm.dsg_id = dsg.id;\n      let index = _.findIndex(self.items, { id: dsg.id });\n      axios\n        .post(route(\"api.dsg.forceDelete\"), self.deleteDsgForm)\n        .then(response => {\n          if (response.data.status === true) {\n            self.$delete(self.items, index);\n            let toggleModal = swal.mixin({\n              confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n              buttonsStyling: false\n            });\n            toggleModal({\n              title: \"Success\",\n              html: `<p class=\"title\">Dsg Removed From The Database!</p>`,\n              type: \"success\",\n              confirmButtonText: \"Back\"\n            });\n          }\n        })\n        .catch(errors => {\n          const deleteModal = swal.mixin({\n            confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n            buttonsStyling: false\n          });\n          deleteModal({\n            title: \"Oops! Forbidden Action!\",\n            html: '<p class=\"title\">' + errors.response.data.message + \"</p>\",\n            type: \"warning\",\n            confirmButtonText: \"Back\"\n          });\n        });\n    },\n    async massRestore() {\n      let self = this;\n      let selected = _.map(self.selected, \"id\");\n      let toggleStatusForm = new Form({\n        selected\n      });\n\n      try {\n        const payload = await axios.post(\n          route(\"api.dsg.massRestore\"),\n          toggleStatusForm\n        );\n        let updated = payload.data.updated;\n        _.map(updated, id => {\n          let index = _.findIndex(self.items, { id });\n          self.$delete(self.items, index);\n        });\n        let toggleModal = swal.mixin({\n          confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n          buttonsStyling: false\n        });\n        toggleModal({\n          title: \"Success\",\n          html: `<p class=\"title\">${payload.data.message}</p>`,\n          type: \"success\",\n          confirmButtonText: \"Back\"\n        });\n      } catch ({ errors, message }) {\n        if (errors) {\n          console.log(errors);\n        }\n        if (message) {\n          console.log(message);\n        }\n      }\n    },\n    async massForceDelete() {\n      let self = this;\n      let selected = _.map(self.selected, \"id\");\n      let toggleStatusForm = new Form({\n        selected\n      });\n\n      try {\n        const payload = await axios.post(\n          route(\"api.dsg.massForceDelete\"),\n          toggleStatusForm\n        );\n        let updated = payload.data.updated;\n        console.log(updated);\n        _.map(updated, id => {\n          let index = _.findIndex(self.items, { id });\n          self.items[index].active = true;\n        });\n        let toggleModal = swal.mixin({\n          confirmButtonClass: \"v-btn blue-grey  subheading white--text\",\n          buttonsStyling: false\n        });\n        toggleModal({\n          title: \"Success\",\n          html: `<p class=\"title\">${payload.data.message}</p>`,\n          type: \"success\",\n          confirmButtonText: \"Back\"\n        });\n      } catch ({ errors, message }) {\n        if (errors) {\n          console.log(errors);\n        }\n        if (message) {\n          console.log(message);\n        }\n      }\n    },\n    toggleAll() {\n      if (this.selected.length) this.selected = [];\n      else this.selected = this.items.slice();\n    },\n    changeSort(column) {\n      if (this.pagination.sortBy === column) {\n        this.pagination.descending = !this.pagination.descending;\n      } else {\n        this.pagination.sortBy = column;\n        this.pagination.descending = false;\n      }\n    }\n  }\n};\n</script>\n\n<style scoped>\n.compress--icon {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Layouts_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Mixins_confirmation__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vform__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_dsg_Confirm_vue__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_dsg_Confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_Components_dsg_Confirm_vue__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Confirm: __WEBPACK_IMPORTED_MODULE_7_Components_dsg_Confirm_vue___default.a
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3_Mixins_validation_error__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_Mixins_confirmation__["a" /* default */]],
  data: function data() {
    return {
      contentClass: { grey: true, "lighten-4": true, "accent--text": true },
      dialog: false,
      /* table */
      headers: [{ text: "Actions", value: "actions", align: "center", sortable: false },
      //   { text: "Status", value: "active", align: "left", sortable: true },
      { text: "DSG#", value: "id", align: "left", sortable: true }, {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      }, { text: "Client", value: "client_name", align: "left", sortable: true }, { text: "Shipper", value: "shipper_name", align: "left", sortable: true }, { text: "Pieces", value: "total_pieces", align: "left", sortable: true }, { text: "Cu.ft", value: "total_cube", align: "left", sortable: true }, {
        text: "Amount($)",
        value: "receiving_amount",
        align: "left",
        sortable: true
      }],
      items: [],
      selected: [],
      pagination: {
        sortBy: "name"
      },
      dsgForm: new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({}),
      toggleForm: new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({
        toggle: false,
        dsg_id: null
      }),
      search: "",
      deleteDsgForm: new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({
        dsg_id: null
      }),
      domain: window.location.hostname
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
    self.fetchDsg();
    if (self.$auth.check("warehouse")) {
      self.$delete(self.headers, 7);
    }
  },

  methods: {
    restoreDsg: function restoreDsg(dsg) {
      var self = this;
      self.toggleForm.toggle = false;
      self.toggleForm.dsg_id = dsg.id;
      var index = _.findIndex(self.items, { id: dsg.id });
      axios.post(route("api.dsg.restoreArchived"), self.toggleForm).then(function (response) {
        if (response.data.status === true) {
          self.$delete(self.items, index);
          var toggleModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Success!",
            html: '<p class="title">DSG Has Been Restored To Receiving.,</p>',
            type: "success",
            confirmButtonText: "Back"
          });
        }
      }).catch(function (errors) {
        var toggleModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
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
    viewArchived: function viewArchived(dsg) {
      vm.$router.push({
        name: "view-archived-dsg",
        params: { id: "" + dsg.id }
      });
    },
    fetchDsg: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var self, payload, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;

                self.dsgForm.busy = true;
                _context.prev = 2;
                _context.next = 5;
                return axios.post(route("api.dsg.indexArchived"), self.dsgForm);

              case 5:
                payload = _context.sent;

                self.items = payload.data.data;
                self.dsgForm = new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({});
                _context.next = 17;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                errors = _context.t0.errors;
                message = _context.t0.message;

                if (errors) {
                  self.dsgForm.errors.set(errors);
                }
                if (message) {}
                self.dsgForm.busy = false;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function fetchDsg() {
        return _ref.apply(this, arguments);
      }

      return fetchDsg;
    }(),
    forceDelete: function forceDelete(dsg) {
      var self = this;
      self.deleteDsgForm.dsg_id = dsg.id;
      var index = _.findIndex(self.items, { id: dsg.id });
      axios.post(route("api.dsg.forceDelete"), self.deleteDsgForm).then(function (response) {
        if (response.data.status === true) {
          self.$delete(self.items, index);
          var toggleModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Success",
            html: "<p class=\"title\">Dsg Removed From The Database!</p>",
            type: "success",
            confirmButtonText: "Back"
          });
        }
      }).catch(function (errors) {
        var deleteModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
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
    massRestore: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var self, selected, toggleStatusForm, payload, updated, toggleModal, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                selected = _.map(self.selected, "id");
                toggleStatusForm = new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({
                  selected: selected
                });
                _context2.prev = 3;
                _context2.next = 6;
                return axios.post(route("api.dsg.massRestore"), toggleStatusForm);

              case 6:
                payload = _context2.sent;
                updated = payload.data.updated;

                _.map(updated, function (id) {
                  var index = _.findIndex(self.items, { id: id });
                  self.$delete(self.items, index);
                });
                toggleModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
                  confirmButtonClass: "v-btn blue-grey  subheading white--text",
                  buttonsStyling: false
                });

                toggleModal({
                  title: "Success",
                  html: "<p class=\"title\">" + payload.data.message + "</p>",
                  type: "success",
                  confirmButtonText: "Back"
                });
                _context2.next = 19;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);
                errors = _context2.t0.errors;
                message = _context2.t0.message;

                if (errors) {
                  console.log(errors);
                }
                if (message) {
                  console.log(message);
                }

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      function massRestore() {
        return _ref3.apply(this, arguments);
      }

      return massRestore;
    }(),
    massForceDelete: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_1__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var self, selected, toggleStatusForm, payload, updated, toggleModal, errors, message;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                selected = _.map(self.selected, "id");
                toggleStatusForm = new __WEBPACK_IMPORTED_MODULE_5_vform__["Form"]({
                  selected: selected
                });
                _context3.prev = 3;
                _context3.next = 6;
                return axios.post(route("api.dsg.massForceDelete"), toggleStatusForm);

              case 6:
                payload = _context3.sent;
                updated = payload.data.updated;

                console.log(updated);
                _.map(updated, function (id) {
                  var index = _.findIndex(self.items, { id: id });
                  self.items[index].active = true;
                });
                toggleModal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.mixin({
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

      function massForceDelete() {
        return _ref5.apply(this, arguments);
      }

      return massForceDelete;
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

/***/ 1146:
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
                              label: "Search Receiving",
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
                "item-key": "id"
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
                            _vm.$auth.check(["warehouse", "admin"])
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "compress--icon",
                                    attrs: {
                                      flat: "",
                                      icon: "",
                                      color: "indigo"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.viewArchived(props.item)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("search")])],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$auth.check("admin")
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "compress--icon",
                                    attrs: {
                                      flat: "",
                                      icon: "",
                                      color: "orange"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.restoreDsg(props.item)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("restore")])],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$auth.check("admin")
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "compress--icon",
                                    attrs: {
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
                              : _vm._e()
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
                                _vm._s(props.item.id) +
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
                                props.item.customer_id === null ||
                                props.item.customer_id === 1001,
                              "accent--text": props.item.customer_id > 1001
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.customer_name) +
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
                          { staticClass: "title text-xs-center accent--text" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.item.total_pieces) +
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
                                _vm._s(props.item.total_cube) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.$auth.check("admin")
                          ? _c(
                              "td",
                              {
                                staticClass: "title text-xs-center accent--text"
                              },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(props.item.receiving_amount) +
                                    "\n          "
                                )
                              ]
                            )
                          : _vm._e()
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
                        "\n          Opps! No Dsg has been Archived Yet! \n        "
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
          ),
          _vm._v(" "),
          _c("confirm", { attrs: { callback: _vm.confirmed(_vm.forceDelete) } })
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
    require("vue-hot-reload-api")      .rerender("data-v-4966295c", module.exports)
  }
}

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1143)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(1145)
/* template */
var __vue_template__ = __webpack_require__(1146)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4966295c"
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
Component.options.__file = "resources/assets/js/pages/Dsg/ArchivedDsg.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4966295c", Component.options)
  } else {
    hotAPI.reload("data-v-4966295c", Component.options)
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

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(968);

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

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(969), __esModule: true };

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(970);
module.exports = __webpack_require__(45).Object.assign;


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(76);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(971) });


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(375);
var gOPS = __webpack_require__(972);
var pIE = __webpack_require__(973);
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

/***/ 972:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 973:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(975)
/* template */
var __vue_template__ = __webpack_require__(999)
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

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AppNavBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_LeftSideBar_vue__ = __webpack_require__(981);
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

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(977)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(979)
/* template */
var __vue_template__ = __webpack_require__(980)
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

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(978);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("7d886588", content, false, {});
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

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AppNavBar.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 979:
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

/***/ 980:
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

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(982)
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

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_uriah_Sites_dsglive_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_InventoryLinks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InvoiceLinks__ = __webpack_require__(993);
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

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(984)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(986)
/* template */
var __vue_template__ = __webpack_require__(987)
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

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(985);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("0e5a43e4", content, false, {});
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

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.styleAvatar[data-v-2c0f8c2e] {\n  position: relative;\n  margin-left: -55px;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/VLink.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,mBAAmB;CAAE","file":"VLink.vue","sourcesContent":[".styleAvatar {\n  position: relative;\n  margin-left: -55px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 986:
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

/***/ 987:
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

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(989)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(991)
/* template */
var __vue_template__ = __webpack_require__(992)
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

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(990);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("4511bccc", content, false, {});
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

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InventoryLinks.vue"],"names":[],"mappings":";AAgIA;EACA,0BAAA;CACA","file":"InventoryLinks.vue","sourcesContent":["<template>\n  <v-list \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\" \n        v-if=\"$auth.check(subItem.auth)\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"collections_bookmark\",\n          title: \"Inventories\",\n          items: [\n            {\n              title: \"All Unknown Report\",\n              href: \"/reports/all-unknown-report\",\n              action: \"fa-question-circle\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Unknown Customer\",\n              href: \"/reports/unknown-customer\",\n              action: \"supervised_user_circle\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Unknown Client\",\n              href: \"/reports/unknown-client\",\n              action: \"fa-users\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Unknown Shipper\",\n              href: \"/reports/unknown-shipper\",\n              action: \"fa-ship\",\n              auth: [\"admin\", \"warehouse\"]\n            },\n            {\n              title: \"Damaged Report\",\n              href: \"/reports/damaged\",\n              action: \"broken_image\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Repaired Report\",\n              href: \"/reports/repaired\",\n              action: \"build\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Undelivered Report\",\n              href: \"/reports/undelivered\",\n              action: \"fa-truck\",\n              auth: [\"admin\", \"warehouse\", \"customer\"]\n            },\n            {\n              title: \"Bin Report\",\n              href: \"/reports/bin\",\n              action: \"apps\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Customer Report\",\n              href: \"/reports/customer\",\n              action: \"local_library\",\n              auth: [\"admin\"]\n            },\n            {\n              title: \"Client Report\",\n              href: \"/reports/clients\",\n              action: \"perm_contact_calendar\",\n              auth: [\"admin\"]\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 991:
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

/***/ 992:
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

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(994)
}
var normalizeComponent = __webpack_require__(371)
/* script */
var __vue_script__ = __webpack_require__(996)
/* template */
var __vue_template__ = __webpack_require__(997)
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

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(995);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(959)("4012696b", content, false, {});
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

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n", "", {"version":3,"sources":["/home/uriah/Sites/dsglive/resources/assets/js/components/resources/assets/js/components/InvoiceLinks.vue"],"names":[],"mappings":";AA+EA;EACA,0BAAA;CACA","file":"InvoiceLinks.vue","sourcesContent":["<template>\n  <v-list \n    v-if=\"$auth.check('admin')\" \n    class=\"blue-grey\"\n    dark\n  >\n    <v-list-group\n      v-for=\"item in items\"\n      v-model=\"item.active\"\n      :key=\"item.title\"\n      no-action\n      active-class=\"accent--text\"\n    >\n      <v-list-tile slot=\"activator\">\n        <v-list-tile-action>\n          <v-icon color=\"white\">{{ item.action }}</v-icon>\n        </v-list-tile-action>\n        <v-list-tile-content>\n          <v-list-tile-title>{{ item.title }}</v-list-tile-title>\n        </v-list-tile-content>\n      </v-list-tile>\n\n      <v-list-tile\n        v-for=\"subItem in item.items\"\n        :key=\"subItem.title\"\n        :style=\"{color: isActive(subItem) ? activeColor : linkColor}\"\n        @click=\"loadview(subItem)\"\n      >\n        <v-list-tile-content>\n          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>\n        </v-list-tile-content>\n\n        <v-list-tile-action>\n          <v-icon :color=\"isActive(subItem) ? 'teal' : 'white'\">{{ subItem.action }}</v-icon>\n        </v-list-tile-action>\n      </v-list-tile>\n    </v-list-group>\n  </v-list>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      activeColor: \"#4DB6AC\",\n      linkColor: \"#fffff\",\n      items: [\n        {\n          action: \"card_membership\",\n          title: \"Invoices\",\n          items: [\n            {\n              title: \"Generate Invoice\",\n              href: \"/invoices/generate\",\n              action: \"schedule\"\n            },\n            { title: \"Invoices\", href: \"/invoices\", action: \"all_inbox\" },\n            {\n              title: \"Weekly Report\",\n              href: \"/reports/total-all-customer-invoice\",\n              action: \"picture_as_pdf\"\n            }\n          ]\n        }\n      ]\n    };\n  },\n  methods: {\n    isActive(item) {\n      return item.href === this.$route.path;\n    },\n    loadview(subItem) {\n      this.$router.push({ path: `${subItem.href}` });\n    }\n  }\n};\n</script>\n\n<style>\n.v-list__group__header__append-icon {\n  color: #ffffff !important;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 996:
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

/***/ 997:
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

/***/ 998:
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

/***/ 999:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWU/YTNiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlP2YwNTkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZT85ZjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RzZy9BcmNoaXZlZERzZy52dWU/YTA1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RzZy9BcmNoaXZlZERzZy52dWU/MGY0NiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQXJjaGl2ZWREc2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0FyY2hpdmVkRHNnLnZ1ZT9kODA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0FyY2hpdmVkRHNnLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdmFsaWRhdGlvbi1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzAzOTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlPzI5ODIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWU/OTM5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlPzg5ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZMaW5rLnZ1ZT9mYTU5Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWU/NDc5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWU/MzQ1YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlPzI3OTQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZT8wNDQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlP2I5MWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/YzIwOCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWU/ZWIxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZT9lNDA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZT8zZDMzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJjb25maXJtZWQiLCJjYiIsInNlbGYiLCJwYXJhbXMiLCJvcGVuRGlhbG9nIiwiaXRlbSIsIkJ1cyIsIiRlbWl0IiwiZXJyb3JNZXNzYWdlcyIsImZpZWxkIiwiZXJyb3JzIiwiY29sbGVjdCIsImNvbmNhdCIsImZvcm0iLCJvbmx5IiwiaGFzRXJyb3JzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDBCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBMFo7QUFDMVo7QUFDQSwrQ0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHNDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQSxvRUFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0osa0ZBQWtG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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFpRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFtRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFtRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxnQkFBZ0IsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMDhkZjg4MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db25maXJtLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db25maXJtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzA4ZGY4ODJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db25maXJtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RzZy9Db25maXJtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMDhkZjg4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMwOGRmODgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDM3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMwOGRmODgyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbmZpcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4OWNhNTdmY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzA4ZGY4ODJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29uZmlybS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzA4ZGY4ODJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29uZmlybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzA4ZGY4ODJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMzciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkNvbmZpcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzA4ZGY4ODJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kc2cvQ29uZmlybS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMzciLCI8dGVtcGxhdGU+XG4gIDx2LWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJkaWFsb2dcIlxuICAgIHdpZHRoPVwiNTAwXCJcbiAgPlxuICAgIDx2LWNhcmQ+XG4gICAgICA8di1jYXJkLXRpdGxlXG4gICAgICAgIGNsYXNzPVwiaGVhZGxpbmUgcHJpbWFyeVwiXG4gICAgICAgIGRhcmtcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAge3sgbWVzc2FnZSB9fVxuICAgICAgPC92LWNhcmQtdGV4dD5cblxuICAgICAgPHYtZGl2aWRlci8+XG5cbiAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPHYtYnRuIFxuICAgICAgICAgIGZsYXQgXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPlxuICAgICAgICAgIDx2LWljb24gbGVmdD5hcnJvd19sZWZ0PC92LWljb24+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBAY2xpY2s9XCJjb25maXJtKClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgYWN0aW9uIH19XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgIDwvdi1jYXJkPlxuICA8L3YtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBjYWxsYmFjazoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIkRlbGV0aW5nIFRoaXMgRHNnIFJlY29yZCAsIFdpbGwgQWxzbyBEZWxldGUgQWxsIEFzc29jaWF0ZWQgRGF0YSBBdHRhY2ggVG8gSXQgU3VjaCBBcyBJbWFnZXMgYW5kIEl0ZW1zLiBBbHNvIE5vdGUgVGhhdCBTb21lIERhdGEgSW4gVGhlIFN5c3RlbSBUaGF0IEV4aXN0IFdoaWNoIFJlZmVyZW5jZSBUbyBUaGlzIERzZyBSZWNvcmQgV2lsbCBCcmVhayBpdHMgRnVuY3Rpb25hbGl0eSBTdWNoIEFzIEludm9pY2luZy4gT25seSBQcm9jZWVkIElmIFlvdSBUaGluayBUaGVyZSBXaWxsIEJlIE5vIFNpZGUgRWZmZWN0IE9mIFdoYXQgWW91IFdpbGwgQmUgRG9pbmchXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCBUbyBEZWxldGUgVGhpcz9cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIlllcyAsIEkgVW5kZXJzdGFuZFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBkaWFsb2c6IGZhbHNlLFxuICAgIHBhcmFtczogbnVsbFxuICB9KSxcbiAgbW91bnRlZCgpIHtcbiAgICBCdXMuJG9uKFwib3Blbi1jb25maXJtYXRpb25cIiwgcGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29uZmlybSgpIHtcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZGlhbG9nXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNTAwXCIgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgcHJpbWFyeVwiLCBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgbGVmdDogXCJcIiB9IH0sIFtfdm0uX3YoXCJhcnJvd19sZWZ0XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIEJhY2tcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jb25maXJtKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmFjdGlvbikgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zMDhkZjg4MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzA4ZGY4ODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDM3IiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgY29uZmlybWVkKGNiKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gcGFyYW1zID0+IHtcbiAgICAgICAgY2IocGFyYW1zKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBvcGVuRGlhbG9nKGl0ZW0pIHtcbiAgICAgIEJ1cy4kZW1pdChcIm9wZW4tY29uZmlybWF0aW9uXCIsIGl0ZW0pO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbmZpcm1hdGlvbi5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00OTY2Mjk1Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FyY2hpdmVkRHNnLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTkwNWRiNThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ5NjYyOTVjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXJjaGl2ZWREc2cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ5NjYyOTVjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXJjaGl2ZWREc2cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ5NjYyOTVjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0FyY2hpdmVkRHNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb21wcmVzcy0taWNvbltkYXRhLXYtNDk2NjI5NWNdIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RzZy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RzZy9BcmNoaXZlZERzZy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9hQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXJjaGl2ZWREc2cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxtYWluLWxheW91dD5cXG4gICAgPHYtY29udGFpbmVyIGZsdWlkPlxcbiAgICAgIDwhLS0gU2VhcmNoIGFuZCBBY3Rpb24gQnV0dG9ucyAtLT5cXG4gICAgICA8di1sYXlvdXQgXFxuICAgICAgICByb3cgXFxuICAgICAgICB3cmFwPlxcbiAgICAgICAgPHYtZmxleCBcXG4gICAgICAgICAgeHMxMiBcXG4gICAgICAgID5cXG4gICAgICAgICAgPHYtY2FyZCBcXG4gICAgICAgICAgICBsaWdodCBcXG4gICAgICAgICAgICBmbGF0XFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTZWFyY2ggUmVjZWl2aW5nXFxcIlxcbiAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxcbiAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcXG4gICAgICAgICAgICAgICAgbGlnaHRcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPC92LWZsZXg+XFxuICAgICAgPC92LWxheW91dD5cXG4gICAgICA8IS0tIERzZyBEYXRhIFRhYmxlIC0tPlxcbiAgICAgIDx2LWRhdGEtdGFibGVcXG4gICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcbiAgICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxuICAgICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcbiAgICAgICAgOnNlYXJjaD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgOnBhZ2luYXRpb24uc3luYz1cXFwicGFnaW5hdGlvblxcXCJcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8IS0tIEhlYWRlciBTZWN0aW9uIC0tPlxcbiAgICAgICAgPHRlbXBsYXRlXFxuICAgICAgICAgIHNsb3Q9XFxcImhlYWRlcnNcXFwiIFxcbiAgICAgICAgICBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aCBcXG4gICAgICAgICAgICAgIHYtZm9yPVxcXCJoZWFkZXIgaW4gcHJvcHMuaGVhZGVyc1xcXCIgXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJoZWFkZXIudGV4dFxcXCJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWydjb2x1bW4gc29ydGFibGUnLCBwYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyAnZGVzYycgOiAnYXNjJywgXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIudmFsdWUgPT09IHBhZ2luYXRpb24uc29ydEJ5ID8gJ25hbWUnIDogJycsIFxcbiAgICAgICAgICAgICAgICAgICAgICAgeyd0ZXh0LXhzLWxlZnQnOiBoZWFkZXIuYWxpZ24gPT09ICdsZWZ0JywgXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMtcmlnaHQnOiBoZWFkZXIuYWxpZ24gPT09ICdyaWdodCcsIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXhzLWNlbnRlcic6IGhlYWRlci5hbGlnbiA9PT0gJ2NlbnRlcid9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+PSA2MDAgJiYgJ3RpdGxlJ11cXFwiXFxuICAgICAgICAgICAgICBAY2xpY2s9XFxcImNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5hcnJvd191cHdhcmQ8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAge3sgaGVhZGVyLnRleHQgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gUm93IFNlY3Rpb24gLS0+XFxuICAgICAgICA8dGVtcGxhdGUgXFxuICAgICAgICAgIHNsb3Q9XFxcIml0ZW1zXFxcIiBcXG4gICAgICAgICAgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQgXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgc3R5bGU9XFxcIndpZHRoOjEwJTttYXJnaW4tbGVmdDowcHg7bWFyZ2luLXJpZ2h0OjBweDtwYWRkaW5nLWxlZnQ6MHB4O3BhZGRpbmctcmlnaHQ6MHB4O1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8di1idG4gXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiRhdXRoLmNoZWNrKFsnd2FyZWhvdXNlJywnYWRtaW4nXSlcXFwiXFxuICAgICAgICAgICAgICAgIGZsYXQgXFxuICAgICAgICAgICAgICAgIGljb24gXFxuICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJpbmRpZ29cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29tcHJlc3MtLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidmlld0FyY2hpdmVkKHByb3BzLml0ZW0pXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8di1pY29uPnNlYXJjaDwvdi1pY29uPlxcbiAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgIDx2LWJ0biBcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiJGF1dGguY2hlY2soJ2FkbWluJylcXFwiXFxuICAgICAgICAgICAgICAgIGZsYXQgXFxuICAgICAgICAgICAgICAgIGljb24gXFxuICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJvcmFuZ2VcXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29tcHJlc3MtLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicmVzdG9yZURzZyhwcm9wcy5pdGVtKVxcXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5yZXN0b3JlPC92LWljb24+XFxuICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgPHYtYnRuIFxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCJcXG4gICAgICAgICAgICAgICAgZmxhdCBcXG4gICAgICAgICAgICAgICAgaWNvbiBcXG4gICAgICAgICAgICAgICAgY29sb3I9XFxcImVycm9yXFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbXByZXNzLS1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9wZW5EaWFsb2cocHJvcHMuaXRlbSlcXFwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDx2LWljb24+ZmEtdHJhc2g8L3YtaWNvbj5cXG4gICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRpdGxlIHRleHQteHMtbGVmdCBhY2NlbnQtLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5pZCB9fVxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPHRkIFxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J3JlZC0tdGV4dCc6IHByb3BzLml0ZW0uY3VzdG9tZXJfaWQgPT09IG51bGwgfHwgcHJvcHMuaXRlbS5jdXN0b21lcl9pZCA9PT0gMTAwMSwgJ2FjY2VudC0tdGV4dCc6IHByb3BzLml0ZW0uY3VzdG9tZXJfaWQgPiAxMDAxfVxcXCIgXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1sZWZ0XFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uY3VzdG9tZXJfbmFtZSB9fVxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPHRkIFxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J3JlZC0tdGV4dCc6IHByb3BzLml0ZW0uY2xpZW50X2lkID09PSBudWxsIHx8IHByb3BzLml0ZW0uY2xpZW50X2lkID09PSAxLCAnYWNjZW50LS10ZXh0JzogcHJvcHMuaXRlbS5jbGllbnRfaWQgPiAxfVxcXCIgXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1sZWZ0XFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uY2xpZW50X25hbWUgfX1cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDx0ZCBcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwieydyZWQtLXRleHQnOiBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPT09IG51bGwgfHwgcHJvcHMuaXRlbS5zaGlwcGVyX2lkID09PSAxLCAnYWNjZW50LS10ZXh0JzogcHJvcHMuaXRlbS5zaGlwcGVyX2lkID4gMX1cXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwidGl0bGUgdGV4dC14cy1sZWZ0XFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uc2hpcHBlcl9uYW1lIH19XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFxcXCI+XFxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLnRvdGFsX3BpZWNlcyB9fVxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcXFwiPlxcbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS50b3RhbF9jdWJlIH19XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgXFxuICAgICAgICAgICAgICB2LWlmPVxcXCIkYXV0aC5jaGVjaygnYWRtaW4nKVxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5yZWNlaXZpbmdfYW1vdW50IH19XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8IS0tIFBhZ2luYXRpb24gU2VjdGlvbiAtLT5cXG4gICAgICAgIDx0ZW1wbGF0ZSBcXG4gICAgICAgICAgc2xvdD1cXFwicGFnZVRleHRcXFwiXFxuICAgICAgICAgIHNsb3Qtc2NvcGU9XFxcInsgcGFnZVN0YXJ0LCBwYWdlU3RvcCB9XFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICBGcm9tIHt7IHBhZ2VTdGFydCB9fSB0byB7eyBwYWdlU3RvcCB9fVxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwhLS0gTm8gRGF0YSBTZWN0aW9uIC0tPlxcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcbiAgICAgICAgICA8di1hbGVydCBcXG4gICAgICAgICAgICA6dmFsdWU9XFxcInRydWVcXFwiIFxcbiAgICAgICAgICAgIGNvbG9yPVxcXCJibHVlLWdyZXlcXFwiIFxcbiAgICAgICAgICAgIGljb249XFxcIndhcm5pbmdcXFwiPlxcbiAgICAgICAgICAgIE9wcHMhIE5vIERzZyBoYXMgYmVlbiBBcmNoaXZlZCBZZXQhIFxcbiAgICAgICAgICA8L3YtYWxlcnQ+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPCEtLSBObyBTZWFyY2ggUmVzdWx0IFNlY3Rpb24gLS0+XFxuICAgICAgICA8di1hbGVydCBcXG4gICAgICAgICAgc2xvdD1cXFwibm8tcmVzdWx0c1xcXCIgXFxuICAgICAgICAgIDp2YWx1ZT1cXFwidHJ1ZVxcXCIgXFxuICAgICAgICAgIGNvbG9yPVxcXCJibHVlLWdyZXlcXFwiIFxcbiAgICAgICAgICBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXG4gICAgICAgICAgWW91ciBzZWFyY2ggZm9yIFxcXCJ7eyBzZWFyY2ggfX1cXFwiIGZvdW5kIG5vIHJlc3VsdHMuXFxuICAgICAgICA8L3YtYWxlcnQ+XFxuICAgICAgPC92LWRhdGEtdGFibGU+XFxuICAgICAgPGNvbmZpcm0gXFxuICAgICAgICA6Y2FsbGJhY2s9XFxcImNvbmZpcm1lZChmb3JjZURlbGV0ZSlcXFwiIFxcbiAgICAgIC8+XFxuICAgIDwvdi1jb250YWluZXI+XFxuICA8L21haW4tbGF5b3V0PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFxcXCJMYXlvdXRzL01haW4udnVlXFxcIjtcXG5pbXBvcnQgdmFsaWRhdGlvbkVycm9yIGZyb20gXFxcIk1peGlucy92YWxpZGF0aW9uLWVycm9yXFxcIjtcXG5pbXBvcnQgY29uZmlybWF0aW9uIGZyb20gXFxcIk1peGlucy9jb25maXJtYXRpb25cXFwiO1xcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFxcXCJ2Zm9ybVxcXCI7XFxuaW1wb3J0IHN3YWwgZnJvbSBcXFwic3dlZXRhbGVydDJcXFwiO1xcbmltcG9ydCBDb25maXJtIGZyb20gXFxcIkNvbXBvbmVudHMvZHNnL0NvbmZpcm0udnVlXFxcIjtcXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIE1haW5MYXlvdXQsXFxuICAgIENvbmZpcm1cXG4gIH0sXFxuICBtaXhpbnM6IFt2YWxpZGF0aW9uRXJyb3IsIGNvbmZpcm1hdGlvbl0sXFxuICBkYXRhOiAoKSA9PiAoe1xcbiAgICBjb250ZW50Q2xhc3M6IHsgZ3JleTogdHJ1ZSwgXFxcImxpZ2h0ZW4tNFxcXCI6IHRydWUsIFxcXCJhY2NlbnQtLXRleHRcXFwiOiB0cnVlIH0sXFxuICAgIGRpYWxvZzogZmFsc2UsXFxuICAgIC8qIHRhYmxlICovXFxuICAgIGhlYWRlcnM6IFtcXG4gICAgICB7IHRleHQ6IFxcXCJBY3Rpb25zXFxcIiwgdmFsdWU6IFxcXCJhY3Rpb25zXFxcIiwgYWxpZ246IFxcXCJjZW50ZXJcXFwiLCBzb3J0YWJsZTogZmFsc2UgfSxcXG4gICAgICAvLyAgIHsgdGV4dDogXFxcIlN0YXR1c1xcXCIsIHZhbHVlOiBcXFwiYWN0aXZlXFxcIiwgYWxpZ246IFxcXCJsZWZ0XFxcIiwgc29ydGFibGU6IHRydWUgfSxcXG4gICAgICB7IHRleHQ6IFxcXCJEU0cjXFxcIiwgdmFsdWU6IFxcXCJpZFxcXCIsIGFsaWduOiBcXFwibGVmdFxcXCIsIHNvcnRhYmxlOiB0cnVlIH0sXFxuICAgICAge1xcbiAgICAgICAgdGV4dDogXFxcIkN1c3RvbWVyXFxcIixcXG4gICAgICAgIHZhbHVlOiBcXFwiY3VzdG9tZXJfbmFtZVxcXCIsXFxuICAgICAgICBhbGlnbjogXFxcImxlZnRcXFwiLFxcbiAgICAgICAgc29ydGFibGU6IHRydWVcXG4gICAgICB9LFxcbiAgICAgIHsgdGV4dDogXFxcIkNsaWVudFxcXCIsIHZhbHVlOiBcXFwiY2xpZW50X25hbWVcXFwiLCBhbGlnbjogXFxcImxlZnRcXFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxcbiAgICAgIHsgdGV4dDogXFxcIlNoaXBwZXJcXFwiLCB2YWx1ZTogXFxcInNoaXBwZXJfbmFtZVxcXCIsIGFsaWduOiBcXFwibGVmdFxcXCIsIHNvcnRhYmxlOiB0cnVlIH0sXFxuICAgICAgeyB0ZXh0OiBcXFwiUGllY2VzXFxcIiwgdmFsdWU6IFxcXCJ0b3RhbF9waWVjZXNcXFwiLCBhbGlnbjogXFxcImxlZnRcXFwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxcbiAgICAgIHsgdGV4dDogXFxcIkN1LmZ0XFxcIiwgdmFsdWU6IFxcXCJ0b3RhbF9jdWJlXFxcIiwgYWxpZ246IFxcXCJsZWZ0XFxcIiwgc29ydGFibGU6IHRydWUgfSxcXG4gICAgICB7XFxuICAgICAgICB0ZXh0OiBcXFwiQW1vdW50KCQpXFxcIixcXG4gICAgICAgIHZhbHVlOiBcXFwicmVjZWl2aW5nX2Ftb3VudFxcXCIsXFxuICAgICAgICBhbGlnbjogXFxcImxlZnRcXFwiLFxcbiAgICAgICAgc29ydGFibGU6IHRydWVcXG4gICAgICB9XFxuICAgIF0sXFxuICAgIGl0ZW1zOiBbXSxcXG4gICAgc2VsZWN0ZWQ6IFtdLFxcbiAgICBwYWdpbmF0aW9uOiB7XFxuICAgICAgc29ydEJ5OiBcXFwibmFtZVxcXCJcXG4gICAgfSxcXG4gICAgZHNnRm9ybTogbmV3IEZvcm0oe30pLFxcbiAgICB0b2dnbGVGb3JtOiBuZXcgRm9ybSh7XFxuICAgICAgdG9nZ2xlOiBmYWxzZSxcXG4gICAgICBkc2dfaWQ6IG51bGxcXG4gICAgfSksXFxuICAgIHNlYXJjaDogXFxcIlxcXCIsXFxuICAgIGRlbGV0ZURzZ0Zvcm06IG5ldyBGb3JtKHtcXG4gICAgICBkc2dfaWQ6IG51bGxcXG4gICAgfSksXFxuICAgIGRvbWFpbjogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lXFxuICB9KSxcXG4gIHdhdGNoOiB7XFxuICAgIGl0ZW1zOiB7XFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHt9LFxcbiAgICAgIGRlZXA6IHRydWVcXG4gICAgfVxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgc2VsZi5mZXRjaERzZygpO1xcbiAgICBpZiAoc2VsZi4kYXV0aC5jaGVjayhcXFwid2FyZWhvdXNlXFxcIikpIHtcXG4gICAgICBzZWxmLiRkZWxldGUoc2VsZi5oZWFkZXJzLCA3KTtcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgcmVzdG9yZURzZyhkc2cpIHtcXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgICAgc2VsZi50b2dnbGVGb3JtLnRvZ2dsZSA9IGZhbHNlO1xcbiAgICAgIHNlbGYudG9nZ2xlRm9ybS5kc2dfaWQgPSBkc2cuaWQ7XFxuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZDogZHNnLmlkIH0pO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucG9zdChyb3V0ZShcXFwiYXBpLmRzZy5yZXN0b3JlQXJjaGl2ZWRcXFwiKSwgc2VsZi50b2dnbGVGb3JtKVxcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcXG4gICAgICAgICAgICBzZWxmLiRkZWxldGUoc2VsZi5pdGVtcywgaW5kZXgpO1xcbiAgICAgICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsKHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiU3VjY2VzcyFcXFwiLFxcbiAgICAgICAgICAgICAgaHRtbDogJzxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+RFNHIEhhcyBCZWVuIFJlc3RvcmVkIFRvIFJlY2VpdmluZy4sPC9wPicsXFxuICAgICAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXFxcIkJhY2tcXFwiXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcXG4gICAgICAgICAgbGV0IHRvZ2dsZU1vZGFsID0gc3dhbC5taXhpbih7XFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIHRvZ2dsZU1vZGFsKHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIk9vcHMhIEZvcmJpZGRlbiBBY3Rpb24hXFxcIixcXG4gICAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XFxcInRpdGxlXFxcIj4nICsgZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZSArIFxcXCI8L3A+XFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICB2aWV3QXJjaGl2ZWQoZHNnKSB7XFxuICAgICAgdm0uJHJvdXRlci5wdXNoKHtcXG4gICAgICAgIG5hbWU6IFxcXCJ2aWV3LWFyY2hpdmVkLWRzZ1xcXCIsXFxuICAgICAgICBwYXJhbXM6IHsgaWQ6IGAke2RzZy5pZH1gIH1cXG4gICAgICB9KTtcXG4gICAgfSxcXG4gICAgYXN5bmMgZmV0Y2hEc2coKSB7XFxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xcbiAgICAgIHNlbGYuZHNnRm9ybS5idXN5ID0gdHJ1ZTtcXG4gICAgICB0cnkge1xcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGF4aW9zLnBvc3QoXFxuICAgICAgICAgIHJvdXRlKFxcXCJhcGkuZHNnLmluZGV4QXJjaGl2ZWRcXFwiKSxcXG4gICAgICAgICAgc2VsZi5kc2dGb3JtXFxuICAgICAgICApO1xcbiAgICAgICAgc2VsZi5pdGVtcyA9IHBheWxvYWQuZGF0YS5kYXRhO1xcbiAgICAgICAgc2VsZi5kc2dGb3JtID0gbmV3IEZvcm0oe30pO1xcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcXG4gICAgICAgIGlmIChlcnJvcnMpIHtcXG4gICAgICAgICAgc2VsZi5kc2dGb3JtLmVycm9ycy5zZXQoZXJyb3JzKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XFxuICAgICAgICB9XFxuICAgICAgICBzZWxmLmRzZ0Zvcm0uYnVzeSA9IGZhbHNlO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgZm9yY2VEZWxldGUoZHNnKSB7XFxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xcbiAgICAgIHNlbGYuZGVsZXRlRHNnRm9ybS5kc2dfaWQgPSBkc2cuaWQ7XFxuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZDogZHNnLmlkIH0pO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucG9zdChyb3V0ZShcXFwiYXBpLmRzZy5mb3JjZURlbGV0ZVxcXCIpLCBzZWxmLmRlbGV0ZURzZ0Zvcm0pXFxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gdHJ1ZSkge1xcbiAgICAgICAgICAgIHNlbGYuJGRlbGV0ZShzZWxmLml0ZW1zLCBpbmRleCk7XFxuICAgICAgICAgICAgbGV0IHRvZ2dsZU1vZGFsID0gc3dhbC5taXhpbih7XFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFxcXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcXFwiLFxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdG9nZ2xlTW9kYWwoe1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJTdWNjZXNzXFxcIixcXG4gICAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPkRzZyBSZW1vdmVkIEZyb20gVGhlIERhdGFiYXNlITwvcD5gLFxcbiAgICAgICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XFxuICAgICAgICAgIGNvbnN0IGRlbGV0ZU1vZGFsID0gc3dhbC5taXhpbih7XFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcXFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XFxcIixcXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIGRlbGV0ZU1vZGFsKHtcXG4gICAgICAgICAgICB0aXRsZTogXFxcIk9vcHMhIEZvcmJpZGRlbiBBY3Rpb24hXFxcIixcXG4gICAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XFxcInRpdGxlXFxcIj4nICsgZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZSArIFxcXCI8L3A+XFxcIixcXG4gICAgICAgICAgICB0eXBlOiBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBhc3luYyBtYXNzUmVzdG9yZSgpIHtcXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgICAgbGV0IHNlbGVjdGVkID0gXy5tYXAoc2VsZi5zZWxlY3RlZCwgXFxcImlkXFxcIik7XFxuICAgICAgbGV0IHRvZ2dsZVN0YXR1c0Zvcm0gPSBuZXcgRm9ybSh7XFxuICAgICAgICBzZWxlY3RlZFxcbiAgICAgIH0pO1xcblxcbiAgICAgIHRyeSB7XFxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXhpb3MucG9zdChcXG4gICAgICAgICAgcm91dGUoXFxcImFwaS5kc2cubWFzc1Jlc3RvcmVcXFwiKSxcXG4gICAgICAgICAgdG9nZ2xlU3RhdHVzRm9ybVxcbiAgICAgICAgKTtcXG4gICAgICAgIGxldCB1cGRhdGVkID0gcGF5bG9hZC5kYXRhLnVwZGF0ZWQ7XFxuICAgICAgICBfLm1hcCh1cGRhdGVkLCBpZCA9PiB7XFxuICAgICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHNlbGYuaXRlbXMsIHsgaWQgfSk7XFxuICAgICAgICAgIHNlbGYuJGRlbGV0ZShzZWxmLml0ZW1zLCBpbmRleCk7XFxuICAgICAgICB9KTtcXG4gICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFxcXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcXFwiLFxcbiAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcXG4gICAgICAgIH0pO1xcbiAgICAgICAgdG9nZ2xlTW9kYWwoe1xcbiAgICAgICAgICB0aXRsZTogXFxcIlN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICBodG1sOiBgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj4ke3BheWxvYWQuZGF0YS5tZXNzYWdlfTwvcD5gLFxcbiAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcXFwiQmFja1xcXCJcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcXG4gICAgICAgIGlmIChlcnJvcnMpIHtcXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgYXN5bmMgbWFzc0ZvcmNlRGVsZXRlKCkge1xcbiAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBfLm1hcChzZWxmLnNlbGVjdGVkLCBcXFwiaWRcXFwiKTtcXG4gICAgICBsZXQgdG9nZ2xlU3RhdHVzRm9ybSA9IG5ldyBGb3JtKHtcXG4gICAgICAgIHNlbGVjdGVkXFxuICAgICAgfSk7XFxuXFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxcbiAgICAgICAgICByb3V0ZShcXFwiYXBpLmRzZy5tYXNzRm9yY2VEZWxldGVcXFwiKSxcXG4gICAgICAgICAgdG9nZ2xlU3RhdHVzRm9ybVxcbiAgICAgICAgKTtcXG4gICAgICAgIGxldCB1cGRhdGVkID0gcGF5bG9hZC5kYXRhLnVwZGF0ZWQ7XFxuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkKTtcXG4gICAgICAgIF8ubWFwKHVwZGF0ZWQsIGlkID0+IHtcXG4gICAgICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZCB9KTtcXG4gICAgICAgICAgc2VsZi5pdGVtc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcXG4gICAgICAgIH0pO1xcbiAgICAgICAgbGV0IHRvZ2dsZU1vZGFsID0gc3dhbC5taXhpbih7XFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXFxcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFxcXCIsXFxuICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxcbiAgICAgICAgfSk7XFxuICAgICAgICB0b2dnbGVNb2RhbCh7XFxuICAgICAgICAgIHRpdGxlOiBcXFwiU3VjY2Vzc1xcXCIsXFxuICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPiR7cGF5bG9hZC5kYXRhLm1lc3NhZ2V9PC9wPmAsXFxuICAgICAgICAgIHR5cGU6IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFxcXCJCYWNrXFxcIlxcbiAgICAgICAgfSk7XFxuICAgICAgfSBjYXRjaCAoeyBlcnJvcnMsIG1lc3NhZ2UgfSkge1xcbiAgICAgICAgaWYgKGVycm9ycykge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcXG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICB0b2dnbGVBbGwoKSB7XFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQubGVuZ3RoKSB0aGlzLnNlbGVjdGVkID0gW107XFxuICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkID0gdGhpcy5pdGVtcy5zbGljZSgpO1xcbiAgICB9LFxcbiAgICBjaGFuZ2VTb3J0KGNvbHVtbikge1xcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID09PSBjb2x1bW4pIHtcXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5kZXNjZW5kaW5nID0gIXRoaXMucGFnaW5hdGlvbi5kZXNjZW5kaW5nO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID0gY29sdW1uO1xcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPSBmYWxzZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLmNvbXByZXNzLS1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00OTY2Mjk1Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RzZy9BcmNoaXZlZERzZy52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIjx0ZW1wbGF0ZT5cbiAgPG1haW4tbGF5b3V0PlxuICAgIDx2LWNvbnRhaW5lciBmbHVpZD5cbiAgICAgIDwhLS0gU2VhcmNoIGFuZCBBY3Rpb24gQnV0dG9ucyAtLT5cbiAgICAgIDx2LWxheW91dCBcbiAgICAgICAgcm93IFxuICAgICAgICB3cmFwPlxuICAgICAgICA8di1mbGV4IFxuICAgICAgICAgIHhzMTIgXG4gICAgICAgID5cbiAgICAgICAgICA8di1jYXJkIFxuICAgICAgICAgICAgbGlnaHQgXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBSZWNlaXZpbmdcIlxuICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXG4gICAgICAgICAgICAgICAgaGlkZS1kZXRhaWxzXG4gICAgICAgICAgICAgICAgbGlnaHRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8IS0tIERzZyBEYXRhIFRhYmxlIC0tPlxuICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRcIlxuICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxuICAgICAgICA6cGFnaW5hdGlvbi5zeW5jPVwicGFnaW5hdGlvblwiXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxuICAgICAgPlxuICAgICAgICA8IS0tIEhlYWRlciBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBzbG90PVwiaGVhZGVyc1wiIFxuICAgICAgICAgIHNsb3Qtc2NvcGU9XCJwcm9wc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggXG4gICAgICAgICAgICAgIHYtZm9yPVwiaGVhZGVyIGluIHByb3BzLmhlYWRlcnNcIiBcbiAgICAgICAgICAgICAgOmtleT1cImhlYWRlci50ZXh0XCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWydjb2x1bW4gc29ydGFibGUnLCBwYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyAnZGVzYycgOiAnYXNjJywgXG4gICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci52YWx1ZSA9PT0gcGFnaW5hdGlvbi5zb3J0QnkgPyAnbmFtZScgOiAnJywgXG4gICAgICAgICAgICAgICAgICAgICAgIHsndGV4dC14cy1sZWZ0JzogaGVhZGVyLmFsaWduID09PSAnbGVmdCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMtcmlnaHQnOiBoZWFkZXIuYWxpZ24gPT09ICdyaWdodCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQteHMtY2VudGVyJzogaGVhZGVyLmFsaWduID09PSAnY2VudGVyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPj0gNjAwICYmICd0aXRsZSddXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlU29ydChoZWFkZXIudmFsdWUpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHYtaWNvbj5hcnJvd191cHdhcmQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICB7eyBoZWFkZXIudGV4dCB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gUm93IFNlY3Rpb24gLS0+XG4gICAgICAgIDx0ZW1wbGF0ZSBcbiAgICAgICAgICBzbG90PVwiaXRlbXNcIiBcbiAgICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIFxuICAgICAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyXCIgXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAlO21hcmdpbi1sZWZ0OjBweDttYXJnaW4tcmlnaHQ6MHB4O3BhZGRpbmctbGVmdDowcHg7cGFkZGluZy1yaWdodDowcHg7XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ3dhcmVob3VzZScsJ2FkbWluJ10pXCJcbiAgICAgICAgICAgICAgICBmbGF0IFxuICAgICAgICAgICAgICAgIGljb24gXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmRpZ29cIiBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbXByZXNzLS1pY29uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2aWV3QXJjaGl2ZWQocHJvcHMuaXRlbSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtaWNvbj5zZWFyY2g8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICBpY29uIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb21wcmVzcy0taWNvblwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzdG9yZURzZyhwcm9wcy5pdGVtKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8di1pY29uPnJlc3RvcmU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPHYtYnRuIFxuICAgICAgICAgICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgICAgICAgICAgZmxhdCBcbiAgICAgICAgICAgICAgICBpY29uIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZXJyb3JcIiBcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbXByZXNzLS1pY29uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuRGlhbG9nKHByb3BzLml0ZW0pXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWljb24+ZmEtdHJhc2g8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnQgYWNjZW50LS10ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uaWQgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsncmVkLS10ZXh0JzogcHJvcHMuaXRlbS5jdXN0b21lcl9pZCA9PT0gbnVsbCB8fCBwcm9wcy5pdGVtLmN1c3RvbWVyX2lkID09PSAxMDAxLCAnYWNjZW50LS10ZXh0JzogcHJvcHMuaXRlbS5jdXN0b21lcl9pZCA+IDEwMDF9XCIgXG4gICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1sZWZ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5jdXN0b21lcl9uYW1lIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIFxuICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3JlZC0tdGV4dCc6IHByb3BzLml0ZW0uY2xpZW50X2lkID09PSBudWxsIHx8IHByb3BzLml0ZW0uY2xpZW50X2lkID09PSAxLCAnYWNjZW50LS10ZXh0JzogcHJvcHMuaXRlbS5jbGllbnRfaWQgPiAxfVwiIFxuICAgICAgICAgICAgICBjbGFzcz1cInRpdGxlIHRleHQteHMtbGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uY2xpZW50X25hbWUgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIDpjbGFzcz1cInsncmVkLS10ZXh0JzogcHJvcHMuaXRlbS5zaGlwcGVyX2lkID09PSBudWxsIHx8IHByb3BzLml0ZW0uc2hpcHBlcl9pZCA9PT0gMSwgJ2FjY2VudC0tdGV4dCc6IHByb3BzLml0ZW0uc2hpcHBlcl9pZCA+IDF9XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aXRsZSB0ZXh0LXhzLWxlZnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLnNoaXBwZXJfbmFtZSB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLnRvdGFsX3BpZWNlcyB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLnRvdGFsX2N1YmUgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgXG4gICAgICAgICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidGl0bGUgdGV4dC14cy1jZW50ZXIgYWNjZW50LS10ZXh0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgcHJvcHMuaXRlbS5yZWNlaXZpbmdfYW1vdW50IH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gUGFnaW5hdGlvbiBTZWN0aW9uIC0tPlxuICAgICAgICA8dGVtcGxhdGUgXG4gICAgICAgICAgc2xvdD1cInBhZ2VUZXh0XCJcbiAgICAgICAgICBzbG90LXNjb3BlPVwieyBwYWdlU3RhcnQsIHBhZ2VTdG9wIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgRnJvbSB7eyBwYWdlU3RhcnQgfX0gdG8ge3sgcGFnZVN0b3AgfX1cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBObyBEYXRhIFNlY3Rpb24gLS0+XG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxuICAgICAgICAgIDx2LWFsZXJ0IFxuICAgICAgICAgICAgOnZhbHVlPVwidHJ1ZVwiIFxuICAgICAgICAgICAgY29sb3I9XCJibHVlLWdyZXlcIiBcbiAgICAgICAgICAgIGljb249XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICBPcHBzISBObyBEc2cgaGFzIGJlZW4gQXJjaGl2ZWQgWWV0ISBcbiAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gTm8gU2VhcmNoIFJlc3VsdCBTZWN0aW9uIC0tPlxuICAgICAgICA8di1hbGVydCBcbiAgICAgICAgICBzbG90PVwibm8tcmVzdWx0c1wiIFxuICAgICAgICAgIDp2YWx1ZT1cInRydWVcIiBcbiAgICAgICAgICBjb2xvcj1cImJsdWUtZ3JleVwiIFxuICAgICAgICAgIGljb249XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwie3sgc2VhcmNoIH19XCIgZm91bmQgbm8gcmVzdWx0cy5cbiAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICA8Y29uZmlybSBcbiAgICAgICAgOmNhbGxiYWNrPVwiY29uZmlybWVkKGZvcmNlRGVsZXRlKVwiIFxuICAgICAgLz5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L21haW4tbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJMYXlvdXRzL01haW4udnVlXCI7XG5pbXBvcnQgdmFsaWRhdGlvbkVycm9yIGZyb20gXCJNaXhpbnMvdmFsaWRhdGlvbi1lcnJvclwiO1xuaW1wb3J0IGNvbmZpcm1hdGlvbiBmcm9tIFwiTWl4aW5zL2NvbmZpcm1hdGlvblwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJ2Zm9ybVwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiQ29tcG9uZW50cy9kc2cvQ29uZmlybS52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE1haW5MYXlvdXQsXG4gICAgQ29uZmlybVxuICB9LFxuICBtaXhpbnM6IFt2YWxpZGF0aW9uRXJyb3IsIGNvbmZpcm1hdGlvbl0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgY29udGVudENsYXNzOiB7IGdyZXk6IHRydWUsIFwibGlnaHRlbi00XCI6IHRydWUsIFwiYWNjZW50LS10ZXh0XCI6IHRydWUgfSxcbiAgICBkaWFsb2c6IGZhbHNlLFxuICAgIC8qIHRhYmxlICovXG4gICAgaGVhZGVyczogW1xuICAgICAgeyB0ZXh0OiBcIkFjdGlvbnNcIiwgdmFsdWU6IFwiYWN0aW9uc1wiLCBhbGlnbjogXCJjZW50ZXJcIiwgc29ydGFibGU6IGZhbHNlIH0sXG4gICAgICAvLyAgIHsgdGV4dDogXCJTdGF0dXNcIiwgdmFsdWU6IFwiYWN0aXZlXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgdGV4dDogXCJEU0cjXCIsIHZhbHVlOiBcImlkXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDdXN0b21lclwiLFxuICAgICAgICB2YWx1ZTogXCJjdXN0b21lcl9uYW1lXCIsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6IFwiQ2xpZW50XCIsIHZhbHVlOiBcImNsaWVudF9uYW1lXCIsIGFsaWduOiBcImxlZnRcIiwgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgdGV4dDogXCJTaGlwcGVyXCIsIHZhbHVlOiBcInNoaXBwZXJfbmFtZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiUGllY2VzXCIsIHZhbHVlOiBcInRvdGFsX3BpZWNlc1wiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IHRleHQ6IFwiQ3UuZnRcIiwgdmFsdWU6IFwidG90YWxfY3ViZVwiLCBhbGlnbjogXCJsZWZ0XCIsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQW1vdW50KCQpXCIsXG4gICAgICAgIHZhbHVlOiBcInJlY2VpdmluZ19hbW91bnRcIixcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaXRlbXM6IFtdLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBzb3J0Qnk6IFwibmFtZVwiXG4gICAgfSxcbiAgICBkc2dGb3JtOiBuZXcgRm9ybSh7fSksXG4gICAgdG9nZ2xlRm9ybTogbmV3IEZvcm0oe1xuICAgICAgdG9nZ2xlOiBmYWxzZSxcbiAgICAgIGRzZ19pZDogbnVsbFxuICAgIH0pLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBkZWxldGVEc2dGb3JtOiBuZXcgRm9ybSh7XG4gICAgICBkc2dfaWQ6IG51bGxcbiAgICB9KSxcbiAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuICB9KSxcbiAgd2F0Y2g6IHtcbiAgICBpdGVtczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24obmV3VmFsdWUpIHt9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5mZXRjaERzZygpO1xuICAgIGlmIChzZWxmLiRhdXRoLmNoZWNrKFwid2FyZWhvdXNlXCIpKSB7XG4gICAgICBzZWxmLiRkZWxldGUoc2VsZi5oZWFkZXJzLCA3KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZXN0b3JlRHNnKGRzZykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi50b2dnbGVGb3JtLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgc2VsZi50b2dnbGVGb3JtLmRzZ19pZCA9IGRzZy5pZDtcbiAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHNlbGYuaXRlbXMsIHsgaWQ6IGRzZy5pZCB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHJvdXRlKFwiYXBpLmRzZy5yZXN0b3JlQXJjaGl2ZWRcIiksIHNlbGYudG9nZ2xlRm9ybSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2VsZi4kZGVsZXRlKHNlbGYuaXRlbXMsIGluZGV4KTtcbiAgICAgICAgICAgIGxldCB0b2dnbGVNb2RhbCA9IHN3YWwubWl4aW4oe1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgICAgICAgIGh0bWw6ICc8cCBjbGFzcz1cInRpdGxlXCI+RFNHIEhhcyBCZWVuIFJlc3RvcmVkIFRvIFJlY2VpdmluZy4sPC9wPicsXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgbGV0IHRvZ2dsZU1vZGFsID0gc3dhbC5taXhpbih7XG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJPb3BzISBGb3JiaWRkZW4gQWN0aW9uIVwiLFxuICAgICAgICAgICAgaHRtbDogJzxwIGNsYXNzPVwidGl0bGVcIj4nICsgZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZSArIFwiPC9wPlwiLFxuICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3QXJjaGl2ZWQoZHNnKSB7XG4gICAgICB2bS4kcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiBcInZpZXctYXJjaGl2ZWQtZHNnXCIsXG4gICAgICAgIHBhcmFtczogeyBpZDogYCR7ZHNnLmlkfWAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaERzZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZHNnRm9ybS5idXN5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgIHJvdXRlKFwiYXBpLmRzZy5pbmRleEFyY2hpdmVkXCIpLFxuICAgICAgICAgIHNlbGYuZHNnRm9ybVxuICAgICAgICApO1xuICAgICAgICBzZWxmLml0ZW1zID0gcGF5bG9hZC5kYXRhLmRhdGE7XG4gICAgICAgIHNlbGYuZHNnRm9ybSA9IG5ldyBGb3JtKHt9KTtcbiAgICAgIH0gY2F0Y2ggKHsgZXJyb3JzLCBtZXNzYWdlIH0pIHtcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgIHNlbGYuZHNnRm9ybS5lcnJvcnMuc2V0KGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmRzZ0Zvcm0uYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZm9yY2VEZWxldGUoZHNnKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmRlbGV0ZURzZ0Zvcm0uZHNnX2lkID0gZHNnLmlkO1xuICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgoc2VsZi5pdGVtcywgeyBpZDogZHNnLmlkIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3Qocm91dGUoXCJhcGkuZHNnLmZvcmNlRGVsZXRlXCIpLCBzZWxmLmRlbGV0ZURzZ0Zvcm0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNlbGYuJGRlbGV0ZShzZWxmLml0ZW1zLCBpbmRleCk7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcInYtYnRuIGJsdWUtZ3JleSAgc3ViaGVhZGluZyB3aGl0ZS0tdGV4dFwiLFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9nZ2xlTW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+RHNnIFJlbW92ZWQgRnJvbSBUaGUgRGF0YWJhc2UhPC9wPmAsXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgY29uc3QgZGVsZXRlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJ2LWJ0biBibHVlLWdyZXkgIHN1YmhlYWRpbmcgd2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlbGV0ZU1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk9vcHMhIEZvcmJpZGRlbiBBY3Rpb24hXCIsXG4gICAgICAgICAgICBodG1sOiAnPHAgY2xhc3M9XCJ0aXRsZVwiPicgKyBlcnJvcnMucmVzcG9uc2UuZGF0YS5tZXNzYWdlICsgXCI8L3A+XCIsXG4gICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIkJhY2tcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIG1hc3NSZXN0b3JlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHNlbGVjdGVkID0gXy5tYXAoc2VsZi5zZWxlY3RlZCwgXCJpZFwiKTtcbiAgICAgIGxldCB0b2dnbGVTdGF0dXNGb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICBzZWxlY3RlZFxuICAgICAgfSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgIHJvdXRlKFwiYXBpLmRzZy5tYXNzUmVzdG9yZVwiKSxcbiAgICAgICAgICB0b2dnbGVTdGF0dXNGb3JtXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1cGRhdGVkID0gcGF5bG9hZC5kYXRhLnVwZGF0ZWQ7XG4gICAgICAgIF8ubWFwKHVwZGF0ZWQsIGlkID0+IHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleChzZWxmLml0ZW1zLCB7IGlkIH0pO1xuICAgICAgICAgIHNlbGYuJGRlbGV0ZShzZWxmLml0ZW1zLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+JHtwYXlsb2FkLmRhdGEubWVzc2FnZX08L3A+YCxcbiAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh7IGVycm9ycywgbWVzc2FnZSB9KSB7XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIG1hc3NGb3JjZURlbGV0ZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBzZWxlY3RlZCA9IF8ubWFwKHNlbGYuc2VsZWN0ZWQsIFwiaWRcIik7XG4gICAgICBsZXQgdG9nZ2xlU3RhdHVzRm9ybSA9IG5ldyBGb3JtKHtcbiAgICAgICAgc2VsZWN0ZWRcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICByb3V0ZShcImFwaS5kc2cubWFzc0ZvcmNlRGVsZXRlXCIpLFxuICAgICAgICAgIHRvZ2dsZVN0YXR1c0Zvcm1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHVwZGF0ZWQgPSBwYXlsb2FkLmRhdGEudXBkYXRlZDtcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZCk7XG4gICAgICAgIF8ubWFwKHVwZGF0ZWQsIGlkID0+IHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleChzZWxmLml0ZW1zLCB7IGlkIH0pO1xuICAgICAgICAgIHNlbGYuaXRlbXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9nZ2xlTW9kYWwgPSBzd2FsLm1peGluKHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6IFwidi1idG4gYmx1ZS1ncmV5ICBzdWJoZWFkaW5nIHdoaXRlLS10ZXh0XCIsXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICAgIGh0bWw6IGA8cCBjbGFzcz1cInRpdGxlXCI+JHtwYXlsb2FkLmRhdGEubWVzc2FnZX08L3A+YCxcbiAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJCYWNrXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh7IGVycm9ycywgbWVzc2FnZSB9KSB7XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUFsbCgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmxlbmd0aCkgdGhpcy5zZWxlY3RlZCA9IFtdO1xuICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkID0gdGhpcy5pdGVtcy5zbGljZSgpO1xuICAgIH0sXG4gICAgY2hhbmdlU29ydChjb2x1bW4pIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID09PSBjb2x1bW4pIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPSAhdGhpcy5wYWdpbmF0aW9uLmRlc2NlbmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uc29ydEJ5ID0gY29sdW1uO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZGVzY2VuZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbXByZXNzLS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0FyY2hpdmVkRHNnLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJtYWluLWxheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsaWdodDogXCJcIiwgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoIFJlY2VpdmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnaW5hdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocHJvcHMuaGVhZGVycywgZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBoZWFkZXIudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uIHNvcnRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uLmRlc2NlbmRpbmcgPyBcImRlc2NcIiA6IFwiYXNjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci52YWx1ZSA9PT0gX3ZtLnBhZ2luYXRpb24uc29ydEJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cy1sZWZ0XCI6IGhlYWRlci5hbGlnbiA9PT0gXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLXJpZ2h0XCI6IGhlYWRlci5hbGlnbiA9PT0gXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cy1jZW50ZXJcIjogaGVhZGVyLmFsaWduID09PSBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdnVldGlmeS5icmVha3BvaW50LndpZHRoID49IDYwMCAmJiBcInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZVNvcnQoaGVhZGVyLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiYXJyb3dfdXB3YXJkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGhlYWRlci50ZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJ3YXJlaG91c2VcIiwgXCJhZG1pblwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXByZXNzLS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmRpZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmlld0FyY2hpdmVkKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwic2VhcmNoXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wcmVzcy0taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3RvcmVEc2cocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJyZXN0b3JlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wcmVzcy0taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbkRpYWxvZyhwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhLXRyYXNoXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgdGV4dC14cy1sZWZ0IGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uaWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZC0tdGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmN1c3RvbWVyX2lkID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uY3VzdG9tZXJfaWQgPT09IDEwMDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY2VudC0tdGV4dFwiOiBwcm9wcy5pdGVtLmN1c3RvbWVyX2lkID4gMTAwMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5jdXN0b21lcl9uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWQtLXRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5jbGllbnRfaWQgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5jbGllbnRfaWQgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY2VudC0tdGV4dFwiOiBwcm9wcy5pdGVtLmNsaWVudF9pZCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0uY2xpZW50X25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZC0tdGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnNoaXBwZXJfaWQgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5zaGlwcGVyX2lkID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NlbnQtLXRleHRcIjogcHJvcHMuaXRlbS5zaGlwcGVyX2lkID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5zaGlwcGVyX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLnRvdGFsX3BpZWNlcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIHRleHQteHMtY2VudGVyIGFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0udG90YWxfY3ViZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZSB0ZXh0LXhzLWNlbnRlciBhY2NlbnQtLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0ucmVjZWl2aW5nX2Ftb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJwYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZVN0YXJ0ID0gcmVmLnBhZ2VTdGFydFxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZVN0b3AgPSByZWYucGFnZVN0b3BcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgRnJvbSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYWdlU3RhcnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgdG8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocGFnZVN0b3ApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWUtZ3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBPcHBzISBObyBEc2cgaGFzIGJlZW4gQXJjaGl2ZWQgWWV0ISBcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwibm8tcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJuby1yZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgWW91ciBzZWFyY2ggZm9yIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWFyY2gpICtcbiAgICAgICAgICAgICAgICAgICAgICAnXCIgZm91bmQgbm8gcmVzdWx0cy5cXG4gICAgICAnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvbmZpcm1cIiwgeyBhdHRyczogeyBjYWxsYmFjazogX3ZtLmNvbmZpcm1lZChfdm0uZm9yY2VEZWxldGUpIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ5NjYyOTVjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00OTY2Mjk1Y1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQXJjaGl2ZWREc2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ5NjYyOTVjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXJjaGl2ZWREc2cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FyY2hpdmVkRHNnLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDk2NjI5NWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FyY2hpdmVkRHNnLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNDk2NjI5NWNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Ec2cvQXJjaGl2ZWREc2cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ5NjYyOTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDk2NjI5NWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRHNnL0FyY2hpdmVkRHNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IiwiZXhwb3J0IGRlZmF1bHQge1xuICAvKiB0aGlzIG1peGlucyBpcyByZXNwb25zaWJsZSBmb3IgY29uY2F0aW5hdGluZyBlcnJvciBtZXNzYWdlcyBmcm9tIHZmb3JtIGFuZCB2ZWUtdmFsaWRhdGUgICovXG4gIG1ldGhvZHM6IHtcbiAgICAvKiBlcnJvckJhZyBpcyByZWxhdGFlZCB0byB2ZWVWYWxpZGF0ZSBjb25maWcgbmFtZSovXG4gICAgLyogZm9ybSBpcyByZWxhdGVkIHRvIHZmb3JtICovXG4gICAgZXJyb3JNZXNzYWdlcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmNvbGxlY3QoZmllbGQpLmNvbmNhdCh0aGlzLmZvcm0uZXJyb3JzLm9ubHkoZmllbGQpKTtcbiAgICB9LFxuICAgIGhhc0Vycm9ycyhmaWVsZCkge1xuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuZXJyb3JzXG4gICAgICAgIC5jb2xsZWN0KGZpZWxkKVxuICAgICAgICAuY29uY2F0KHRoaXMuZm9ybS5lcnJvcnMub25seShmaWVsZCkpO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3ZhbGlkYXRpb24tZXJyb3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gMDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwibFZLN1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJPTU40XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJsVks3XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IGV4dGVybmFsIFwiYXhpb3NcIlxudmFyIGV4dGVybmFsX19heGlvc18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiT01ONFwiKTtcbnZhciBleHRlcm5hbF9fYXhpb3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX19heGlvc18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy91dGlsLmpzXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKipcclxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXG5mdW5jdGlvbiBkZWVwQ29weShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciBjb3B5ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBjb3B5W2tleV0gPSBkZWVwQ29weShvYmpba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gY29weTtcbn1cbi8qKlxyXG4gKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGFuIGFycmF5LCB3cmFwIGl0IGluIG9uZS5cclxuICpcclxuICogQHBhcmFtICB7QW55fSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXG5cbmZ1bmN0aW9uIGFycmF5V3JhcCh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9FcnJvcnMuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIEVycm9yc19fdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgRXJyb3JzX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgRXJyb3JzX190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gRXJyb3JzX190eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG52YXIgRXJyb3JzX0Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBlcnJvciBiYWcgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIEVycm9ycygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXJyb3JzKTtcblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0IHRoZSBlcnJvcnMgb2JqZWN0IG9yIGZpZWxkIGVycm9yIG1lc3NhZ2VzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBmaWVsZFxyXG4gICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfHVuZGVmaW5lZH0gbWVzc2FnZXNcclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFcnJvcnMsIFt7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZmllbGQsIG1lc3NhZ2VzKSB7XG4gICAgICBpZiAoRXJyb3JzX190eXBlb2YoZmllbGQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGZpZWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoX2V4dGVuZHMoe30sIHRoaXMuZXJyb3JzLCBfZGVmaW5lUHJvcGVydHkoe30sIGZpZWxkLCBhcnJheVdyYXAobWVzc2FnZXMpKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgdGhlIGVycm9ycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGFuIGVycm9yIGZvciB0aGUgZ2l2ZW4gZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZFxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMgZm9yIHRoZSBnaXZlbiBmaWVsZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7Li4uU3RyaW5nfSBmaWVsZHNcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhc0FueVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNBbnkoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZmllbGRzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBmaWVsZHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZHMuc29tZShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhhcyhmaWVsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYW55XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFueSgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBmaWVsZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIFN0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoZmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmhhcyhmaWVsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKGZpZWxkKVswXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvciBtZXNzYWdlcyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmllbGRcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRBbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKGZpZWxkKSB7XG4gICAgICByZXR1cm4gYXJyYXlXcmFwKHRoaXMuZXJyb3JzW2ZpZWxkXSB8fCBbXSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBlcnJvciBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZmllbGRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgey4uLlN0cmluZ30gZmllbGRzXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25seVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmx5KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBtZXNzYWdlcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBmaWVsZHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gX3RoaXMyLmdldChmaWVsZCk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRoZSBlcnJvcnMgaW4gYSBmbGF0IGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmbGF0dGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsYXR0ZW4oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3x1bmRlZmluZWR9IGZpZWxkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKGZpZWxkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGVycm9ycyA9IHt9O1xuXG4gICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChrZXkgIT09IGZpZWxkKSB7XG4gICAgICAgICAgICBlcnJvcnNba2V5XSA9IF90aGlzMy5lcnJvcnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldChlcnJvcnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFcnJvcnM7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvRm9ybS5qc1xuZnVuY3Rpb24gRm9ybV9fdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgRm9ybV9fdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IEZvcm1fX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBGb3JtX190eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBGb3JtX19kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2V4dGVuZHMoKSB7IEZvcm1fX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gRm9ybV9fZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIEZvcm1fX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gRm9ybV9fZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIEZvcm1fX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgRm9ybV9fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIEZvcm1fX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG5cblxudmFyIEZvcm1fRm9ybSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZm9ybSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIEZvcm0oKSB7XG4gICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgRm9ybV9fY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnNfRXJyb3JzKCk7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkZWVwQ29weShkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG4gIC8qKlxuICAgKiBGaWxsIGZvcm0gZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG5cblxuICBGb3JtX19jcmVhdGVDbGFzcyhGb3JtLCBbe1xuICAgIGtleTogXCJmaWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGwoZGF0YSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMua2V5cygpLnJlZHVjZShmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIHJldHVybiBGb3JtX19leHRlbmRzKHt9LCBkYXRhLCBGb3JtX19kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCBfdGhpczJba2V5XSkpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZGF0YSBrZXlzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJrZXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFGb3JtLmlnbm9yZS5pbmNsdWRlcyhrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHByb2Nlc3NpbmcgdGhlIGZvcm0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFByb2Nlc3NpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRQcm9jZXNzaW5nKCkge1xuICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluaXNoIHByb2Nlc3NpbmcgdGhlIGZvcm0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmaW5pc2hQcm9jZXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmlzaFByb2Nlc3NpbmcoKSB7XG4gICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBmb3JtIGVycm9ycy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIUZvcm0uaWdub3JlLmluY2x1ZGVzKGtleSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMzW2tleV0gPSBkZWVwQ29weShfdGhpczMub3JpZ2luYWxEYXRhW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBHRVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2dldCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQT1NUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwb3N0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3Bvc3QnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZyb20gdmlhIGEgUEFUQ0ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGNoKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBQVVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXQodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZnJvbSB2aWEgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdkZWxldGUnLCB1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gZGF0YSB2aWEgYW4gSFRUUCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXRob2QgKGdldCwgcG9zdCwgcGF0Y2gsIHB1dClcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY29uZmlnIChheGlvcyBjb25maWcpXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN1Ym1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQobWV0aG9kLCB1cmwpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHRoaXMuc3RhcnRQcm9jZXNzaW5nKCk7XG4gICAgICB2YXIgZGF0YSA9IG1ldGhvZCA9PT0gJ2dldCcgPyB7XG4gICAgICAgIHBhcmFtczogdGhpcy5kYXRhKClcbiAgICAgIH0gOiB0aGlzLmRhdGEoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGV4dGVybmFsX19heGlvc19fZGVmYXVsdC5hLnJlcXVlc3QoRm9ybV9fZXh0ZW5kcyh7XG4gICAgICAgICAgdXJsOiBfdGhpczQucm91dGUodXJsKSxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0sIGNvbmZpZykpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgX3RoaXM0LmZpbmlzaFByb2Nlc3NpbmcoKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBfdGhpczQuYnVzeSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfdGhpczQuZXJyb3JzLnNldChfdGhpczQuZXh0cmFjdEVycm9ycyhlcnJvci5yZXNwb25zZSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGVycm9ycyBmcm9tIHRoZSByZXNwb25zZSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdEVycm9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0RXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgRm9ybV9fdHlwZW9mKHJlc3BvbnNlLmRhdGEpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBGb3JtLmVycm9yTWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIHJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEZvcm1fX2V4dGVuZHMoe30sIHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBuYW1lZCByb3V0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJvdXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdXRlKG5hbWUpIHtcbiAgICAgIHZhciBwYXJhbWV0ZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciB1cmwgPSBuYW1lO1xuXG4gICAgICBpZiAoRm9ybS5yb3V0ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdXJsID0gZGVjb2RlVVJJKEZvcm0ucm91dGVzW25hbWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEZvcm1fX3R5cGVvZihwYXJhbWV0ZXJzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICBpZDogcGFyYW1ldGVyc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJ7XCIuY29uY2F0KGtleSwgXCJ9XCIpLCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciBlcnJvcnMgb24ga2V5ZG93bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5ZG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubmFtZSkge1xuICAgICAgICB0aGlzLmVycm9ycy5jbGVhcihldmVudC50YXJnZXQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm07XG59KCk7XG5cbkZvcm1fRm9ybS5yb3V0ZXMgPSB7fTtcbkZvcm1fRm9ybS5lcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJztcbkZvcm1fRm9ybS5pZ25vcmUgPSBbJ2J1c3knLCAnc3VjY2Vzc2Z1bCcsICdlcnJvcnMnLCAnb3JpZ2luYWxEYXRhJ107XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzcmNfRm9ybSA9IChGb3JtX0Zvcm0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJDOi8vVXNlcnMvL090aW5zb2Z0Ly9Db2RlLy9naXRodWIvL3Zmb3JtLy9ub2RlX21vZHVsZXMvLy5jYWNoZS8vY2FjaGUtbG9hZGVyXCJ9IS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hhc0Vycm9yLnZ1ZVxuLy9cbi8vXG4vL1xuLy9cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEhhc0Vycm9yID0gKHtcbiAgbmFtZTogJ2hhcy1lcnJvcicsXG4gIHByb3BzOiB7XG4gICAgZm9ybToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQzODlhNmRkXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGFzRXJyb3IudnVlXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmhhcyhfdm0uZmllbGQpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIixkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldChfdm0uZmllbGQpKX19KTpfdm0uX2UoKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2NyaXB0RXhwb3J0cyA9IHNjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9IYXNFcnJvci52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgSGFzRXJyb3IsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19IYXNFcnJvciA9IChDb21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnQuanNcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0ID0gKHtcbiAgcHJvcHM6IHtcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZGlzbWlzc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzbWlzczogZnVuY3Rpb24gZGlzbWlzcygpIHtcbiAgICAgIGlmICh0aGlzLmRpc21pc3NpYmxlKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1wiY2FjaGVEaXJlY3RvcnlcIjpcIkM6Ly9Vc2Vycy8vT3RpbnNvZnQvL0NvZGUvL2dpdGh1Yi8vdmZvcm0vL25vZGVfbW9kdWxlcy8vLmNhY2hlLy9jYWNoZS1sb2FkZXJcIn0hLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYiEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQWxlcnRFcnJvci52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0RXJyb3IgPSAoe1xuICBuYW1lOiAnYWxlcnQtZXJyb3InLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnVGhlcmUgd2VyZSBzb21lIHByb2JsZW1zIHdpdGggeW91ciBpbnB1dC4nXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTczYWE3YzhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxudmFyIEFsZXJ0RXJyb3JfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uZXJyb3JzLmFueSgpKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7XCJyb2xlXCI6XCJhbGVydFwifX0sWyhfdm0uZGlzbWlzc2libGUpP19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7XCJjbGlja1wiOl92bS5kaXNtaXNzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtfdm0uX3YoXCLDl1wiKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfdm0uX3QoXCJkZWZhdWx0XCIsWyhfdm0uZm9ybS5lcnJvcnMuaGFzKCdlcnJvcicpKT9fYygnZGl2Jyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ2Vycm9yJykpfX0pOl9jKCdkaXYnLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoX3ZtLm1lc3NhZ2UpfX0pXSldLDIpOl92bS5fZSgpfVxudmFyIEFsZXJ0RXJyb3Jfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9yLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIEFsZXJ0RXJyb3JfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRFcnJvcl9fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydEVycm9yX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5cbnZhciBBbGVydEVycm9yX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRFcnJvcixcbiAgQWxlcnRFcnJvcl9yZW5kZXIsXG4gIEFsZXJ0RXJyb3Jfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydEVycm9yX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9zdHlsZXNfXyxcbiAgQWxlcnRFcnJvcl9fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0RXJyb3JfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0RXJyb3IgPSAoQWxlcnRFcnJvcl9Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBBbGVydEVycm9ycyA9ICh7XG4gIG5hbWU6ICdhbGVydC1lcnJvcnMnLFxuICBleHRlbmRzOiBBbGVydCxcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnVGhlcmUgd2VyZSBzb21lIHByb2JsZW1zIHdpdGggeW91ciBpbnB1dC4nXG4gICAgfVxuICB9XG59KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDIyYTY1OTFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbnZhciBBbGVydEVycm9yc19yZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIChfdm0uZm9ybS5lcnJvcnMuYW55KCkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ubWVzc2FnZSk/X2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygndWwnLF92bS5fbCgoX3ZtLmZvcm0uZXJyb3JzLmZsYXR0ZW4oKSksZnVuY3Rpb24oZXJyb3Ipe3JldHVybiBfYygnbGknLHtkb21Qcm9wczp7XCJpbm5lckhUTUxcIjpfdm0uX3MoZXJyb3IpfX0pfSkpXSk6X3ZtLl9lKCl9XG52YXIgQWxlcnRFcnJvcnNfc3RhdGljUmVuZGVyRm5zID0gW11cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9BbGVydEVycm9ycy52dWVcbi8qIHNjcmlwdCAqL1xuXG5cbi8qIHRlbXBsYXRlICovXG5cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBBbGVydEVycm9yc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgQWxlcnRFcnJvcnNfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0RXJyb3JzX0NvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgQWxlcnRFcnJvcnMsXG4gIEFsZXJ0RXJyb3JzX3JlbmRlcixcbiAgQWxlcnRFcnJvcnNfc3RhdGljUmVuZGVyRm5zLFxuICBBbGVydEVycm9yc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX3N0eWxlc19fLFxuICBBbGVydEVycm9yc19fX3Z1ZV9zY29wZUlkX18sXG4gIEFsZXJ0RXJyb3JzX19fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50c19BbGVydEVycm9ycyA9IChBbGVydEVycm9yc19Db21wb25lbnQuZXhwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XCJjYWNoZURpcmVjdG9yeVwiOlwiQzovL1VzZXJzLy9PdGluc29mdC8vQ29kZS8vZ2l0aHViLy92Zm9ybS8vbm9kZV9tb2R1bGVzLy8uY2FjaGUvL2NhY2hlLWxvYWRlclwifSEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9BbGVydFN1Y2Nlc3MudnVlXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIEFsZXJ0U3VjY2VzcyA9ICh7XG4gIG5hbWU6ICdhbGVydC1zdWNjZXNzJyxcbiAgZXh0ZW5kczogQWxlcnQsXG4gIHByb3BzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH1cbn0pO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wYWZkYjhhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0FsZXJ0U3VjY2Vzcy52dWVcbnZhciBBbGVydFN1Y2Nlc3NfcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLmZvcm0uc3VjY2Vzc2Z1bCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtc3VjY2VzcyBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntcInJvbGVcIjpcImFsZXJ0XCJ9fSxbKF92bS5kaXNtaXNzaWJsZSk/X2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmRpc21pc3N9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW192bS5fdihcIsOXXCIpXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF92bS5fdChcImRlZmF1bHRcIixbX2MoJ2Rpdicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0ubWVzc2FnZSl9fSldKV0sMik6X3ZtLl9lKCl9XG52YXIgQWxlcnRTdWNjZXNzX3N0YXRpY1JlbmRlckZucyA9IFtdXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvQWxlcnRTdWNjZXNzLnZ1ZVxuLyogc2NyaXB0ICovXG5cblxuLyogdGVtcGxhdGUgKi9cblxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgQWxlcnRTdWNjZXNzX19fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIEFsZXJ0U3VjY2Vzc19fX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBBbGVydFN1Y2Nlc3NfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcblxudmFyIEFsZXJ0U3VjY2Vzc19Db21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIEFsZXJ0U3VjY2VzcyxcbiAgQWxlcnRTdWNjZXNzX3JlbmRlcixcbiAgQWxlcnRTdWNjZXNzX3N0YXRpY1JlbmRlckZucyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgQWxlcnRTdWNjZXNzX19fdnVlX3N0eWxlc19fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfc2NvcGVJZF9fLFxuICBBbGVydFN1Y2Nlc3NfX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzX0FsZXJ0U3VjY2VzcyA9IChBbGVydFN1Y2Nlc3NfQ29tcG9uZW50LmV4cG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9pbmRleC5qc1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkZvcm1cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzcmNfRm9ybTsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRXJyb3JzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRXJyb3JzX0Vycm9yczsgfSk7XG4vKiBjb25jYXRlZCBoYXJtb255IHJlZXhwb3J0ICovX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiSGFzRXJyb3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb21wb25lbnRzX0hhc0Vycm9yOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydEVycm9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY29tcG9uZW50c19BbGVydEVycm9yOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJBbGVydEVycm9yc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRFcnJvcnM7IH0pO1xuLyogY29uY2F0ZWQgaGFybW9ueSByZWV4cG9ydCAqL19fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFsZXJ0U3VjY2Vzc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudHNfQWxlcnRTdWNjZXNzOyB9KTtcbi8qIGNvbmNhdGVkIGhhcm1vbnkgcmVleHBvcnQgKi9fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3JjX0Zvcm07IH0pO1xuXG5cblxuXG5cblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Zmb3JtL2Rpc3QvdmZvcm0uY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNyAzOCAzOSA0MCA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzgiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQgMzgiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDk2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzOCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM4IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM4IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gOTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM4IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gOTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWFpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNjY2JmMTVlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWFpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXlvdXRzL01haW4udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNjY2JmMTVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2NjYmYxNWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwIFxuICAgIHYtY2xvYWsgXG4gICAgaWQ9XCJpbnNwaXJlXCJcbiAgPlxuICAgIDxsZWZ0LXNpZGUtYmFyLz5cbiAgICA8YXBwLW5hdi1iYXIvPlxuICAgIDx2LWNvbnRlbnRcbiAgICAgIHRyYW5zaXRpb249XCJzbGlkZS14LXRyYW5zaXRpb25cIiBcbiAgICAgIGZsdWlkXG4gICAgICBwYS0wXG4gICAgICBtYS0wXG4gICAgICBjbGFzcz1cIndoaXRlXCJcbiAgICA+XG4gICAgICA8c2xvdC8+XG4gICAgPC92LWNvbnRlbnQ+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFwcE5hdkJhciBmcm9tIFwiLi4vcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVwiO1xuaW1wb3J0IExlZnRTaWRlQmFyIGZyb20gXCIuLi9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQXBwTmF2QmFyLFxuICAgIExlZnRTaWRlQmFyXG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2xheW91dHMvTWFpbi52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwTmF2QmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjY4YTY2NDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjY4YTY2NDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NjhhNjY0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9BcHBOYXZCYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjdkODg2NTg4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjhhNjY0NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BcHBOYXZCYXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTY2OGE2NjQ2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcE5hdkJhci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjY4YTY2NDZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiQXBwTmF2QmFyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY2OGE2NjQ2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0FwcE5hdkJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCI8dGVtcGxhdGU+XG4gIDx2LXRvb2xiYXIgXG4gICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgZml4ZWQgXG4gICAgYXBwXG4gID5cbiAgICA8di10b29sYmFyLXNpZGUtaWNvbiBcbiAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIlxuICAgICAgQGNsaWNrLm5hdGl2ZS5zdG9wPVwidG9nZ2xlRHJhd2VyKClcIlxuICAgIC8+XG4gICAgPCEtLSBUaXRsZSAtLT5cbiAgICA8di10b29sYmFyLXRpdGxlIFxuICAgICAgdi1pZj1cImV4dGVuc2lvblwiIFxuICAgICAgc2xvdD1cImV4dGVuc2lvblwiIFxuICAgICAgOmNsYXNzPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA8PSAxMjY0ICYmICdwci0zJ1wiIFxuICAgICAgOnN0eWxlPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA+IDEyNjQgJiYgJ3dpZHRoOiAzMDBweCdcIiBcbiAgICAgIGNsYXNzPVwidGV4dC14cy1jZW50ZXIgbWwtMCBwbC0zXCJcbiAgICA+XG4gICAgICA8di1pY29uIFxuICAgICAgICB2LWlmPVwic2hvd0ljb25cIiBcbiAgICAgICAgY2xhc3M9XCJtbC0zIGhpZGRlbi1tZC1hbmQtZG93biBhY2NlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyBpY29uIH19XG4gICAgICA8L3YtaWNvbj5cbiAgICAgIDxzcGFuIFxuICAgICAgICBjbGFzcz1cImhpZGRlbi1tZC1hbmQtZG93blwiIFxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIndoaXRlLS10ZXh0XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgPHYtdG9vbGJhci10aXRsZSBcbiAgICAgIHYtZWxzZSBcbiAgICAgIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIlxuICAgID5cbiAgICAgIDx2LWljb24gXG4gICAgICAgIHYtaWY9XCJzaG93SWNvblwiIFxuICAgICAgICBjbGFzcz1cIm1sLTMgaGlkZGVuLW1kLWFuZC1kb3duIGFjY2VudFwiXG4gICAgICA+XG4gICAgICAgIHt7IGljb24gfX1cbiAgICAgIDwvdi1pY29uPlxuICAgICAgPHNwYW4gXG4gICAgICAgIGNsYXNzPVwiaGlkZGVuLW1kLWFuZC1kb3duXCIgXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2hpdGUtLXRleHRcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICA8di1zcGFjZXIvPlxuICAgIDwhLS0gY2VudGVyIGxvZ28gLS0+XG4gICAgPGltZyBcbiAgICAgIHYtaWY9XCJzaG93TG9nb1wiIFxuICAgICAgOnNyYz1cImxvZ29cIiBcbiAgICAgIGNsYXNzPVwiaGlkZGVuLW1kLWFuZC11cFwiIFxuICAgID5cbiAgICA8di1zcGFjZXIvPlxuICA8L3YtdG9vbGJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZXh0ZW5zaW9uOiBmYWxzZSxcbiAgICBzaG93TG9nbzogZmFsc2UsXG4gICAgbG9nbzogXCIvaW1nL2xvZ28ucG5nXCIsXG4gICAgc2hvd0ljb246IGZhbHNlLFxuICAgIHRpdGxlOiBcIkRTRyBMaXZlXCJcbiAgfSksXG4gIGNyZWF0ZWQoKSB7XG4gICAgLyogRW1pdCBPbiBhIENoaWxkIENvbXBvbmVudCBJZiBZb3UgV2FudCBUaGlzIFRvIEJlIFZpc2libGUgKi9cbiAgICBCdXMuJG9uKFwiaGVhZGVyLWV4dGVuc2lvbi12aXNpYmxlXCIsIHZpc2liaWxpdHkgPT4ge1xuICAgICAgdGhpcy5leHRlbnNpb24gPSB2aXNpYmlsaXR5O1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgQnVzLiRlbWl0KFwidG9nZ2xlRHJhd2VyXCIpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LXRvb2xiYXJcIixcbiAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiwgZml4ZWQ6IFwiXCIsIGFwcDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItc2lkZS1pY29uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIF92bS50b2dnbGVEcmF3ZXIoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmV4dGVuc2lvblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXIgbWwtMCBwbC0zXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA8PSAxMjY0ICYmIFwicHItM1wiLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQud2lkdGggPiAxMjY0ICYmIFwid2lkdGg6IDMwMHB4XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiZXh0ZW5zaW9uXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJleHRlbnNpb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnNob3dJY29uXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0zIGhpZGRlbi1tZC1hbmQtZG93biBhY2NlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmljb24pICsgXCJcXG4gICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhpZGRlbi1tZC1hbmQtZG93blwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5zaG93SWNvblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBoaWRkZW4tbWQtYW5kLWRvd24gYWNjZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5pY29uKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW4tbWQtYW5kLWRvd25cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zaG93TG9nb1xuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1tZC1hbmQtdXBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxvZ28gfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY2OGE2NjQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02NjhhNjY0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFydGlhbHMvQXBwTmF2QmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xlZnRTaWRlQmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTg5MmMwY2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MZWZ0U2lkZUJhci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTg5MmMwY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xODkyYzBjYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYXJ0aWFscy9MZWZ0U2lkZUJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCI8dGVtcGxhdGU+XG4gIDx2LW5hdmlnYXRpb24tZHJhd2VyXG4gICAgdi1tb2RlbD1cImRyYXdlclwiXG4gICAgOmNsaXBwZWQ9XCIkdnVldGlmeS5icmVha3BvaW50LndpZHRoIDw9IDEyNjQgJiYgdHJ1ZVwiXG4gICAgZml4ZWRcbiAgICBjbGFzcz1cImJsdWUtZ3JleVwiXG4gICAgaGlkZS1vdmVybGF5XG4gICAgYXBwXG4gID5cbiAgICA8di1saXN0IFxuICAgICAgZGVuc2UgXG4gICAgICBjbGFzcz1cImJsdWUtZ3JleVwiPlxuICAgICAgPCEtLSBFeHBhbmRhYmxlIEdyb3VwIExpbmtzIGZyb20gR3JvdXAgTGluayAtLT5cbiAgICAgIDx2LXN1YmhlYWRlciBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCIgXG4gICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIj5BZG1pbiBBcmVhPC92LXN1YmhlYWRlcj5cbiAgICAgIDx2LXN1YmhlYWRlciBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCd3YXJlaG91c2UnKVwiIFxuICAgICAgICBjbGFzcz1cIndoaXRlLS10ZXh0XCI+V2FyZWhvdXNlIEFyZWE8L3Ytc3ViaGVhZGVyPlxuICAgICAgPHYtc3ViaGVhZGVyIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2N1c3RvbWVyJylcIiBcbiAgICAgICAgY2xhc3M9XCJ3aGl0ZS0tdGV4dFwiPkN1c3RvbWVyIEFyZWE8L3Ytc3ViaGVhZGVyPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnYWRtaW4nLCdjdXN0b21lcicsJ3dhcmVob3VzZSddKVwiXG4gICAgICAgIHRpdGxlPVwiRGFzaGJvYXJkXCJcbiAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxuICAgICAgICBpY29uPVwiZmEtdGFjaG9tZXRlclwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnYWRtaW4nXSlcIlxuICAgICAgICB0aXRsZT1cIlR1dG9yaWFsc1wiXG4gICAgICAgIGhyZWY9XCIvdHV0b3JpYWxzXCJcbiAgICAgICAgaWNvbj1cIm1vdmllXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIEFkbWluIE9ubHkgQWNjZXNzaWJsZSAtLT5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiVXNlcnNcIiBcbiAgICAgICAgaHJlZj1cIi91c2Vyc1wiIFxuICAgICAgICBpY29uPVwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKCdhZG1pbicpXCJcbiAgICAgICAgdGl0bGU9XCJTaGlwcGVyc1wiIFxuICAgICAgICBocmVmPVwiL3NoaXBwZXJzXCIgXG4gICAgICAgIGljb249XCJmYS1zaGlwXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygnYWRtaW4nKVwiXG4gICAgICAgIHRpdGxlPVwiUmF0ZXNcIiBcbiAgICAgICAgaHJlZj1cIi9yYXRlc1wiIFxuICAgICAgICBpY29uPVwiYXR0YWNoX21vbmV5XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIkJpbnNcIiBcbiAgICAgICAgaHJlZj1cIi9iaW5zXCIgXG4gICAgICAgIGljb249XCJ2aWV3X21vZHVsZVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBXYXJlaG91c2UgVHlwZSBBY2NvdW50IC0tPlxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKFsnd2FyZWhvdXNlJywnYWRtaW4nXSlcIlxuICAgICAgICB0aXRsZT1cIldhcmVob3VzZVwiXG4gICAgICAgIGhyZWY9XCIvd2FyZWhvdXNlXCJcbiAgICAgICAgaWNvbj1cImxvY2F0aW9uX2NpdHlcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJywnd2FyZWhvdXNlJ10pXCJcbiAgICAgICAgdGl0bGU9XCJSZWNlaXZpbmdcIiBcbiAgICAgICAgaHJlZj1cIi9yZWNlaXZpbmdcIiBcbiAgICAgICAgaWNvbj1cInJlY2VpcHRcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2FkbWluJywnd2FyZWhvdXNlJ10pXCJcbiAgICAgICAgdGl0bGU9XCJBcmNoaXZlZFwiIFxuICAgICAgICBocmVmPVwiL2FyY2hpdmVkL2RzZ1wiIFxuICAgICAgICBpY29uPVwiYXJjaGl2ZVwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBDb2xsYXBzaWJsZSBNZW51IC0tPlxuICAgICAgPGludmVudG9yeS1saW5rcy8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIlRpY2tldHNcIiBcbiAgICAgICAgaHJlZj1cIi90aWNrZXRzXCIgXG4gICAgICAgIGljb249XCJjb25maXJtYXRpb25fbnVtYmVyXCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgICA8di1saW5rIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIlxuICAgICAgICB0aXRsZT1cIk1pc2NlbGxhbmVvdXNcIiBcbiAgICAgICAgaHJlZj1cIi9taXNjZWxsYW5lb3VzXCIgXG4gICAgICAgIGljb249XCJub3RlX2FkZFwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPGludm9pY2UtbGlua3MvPlxuICAgICAgXG4gICAgICA8IS0tIEN1c3RvbWVyIEFjY291bnQgVHlwZSAtLT5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjayhbJ2N1c3RvbWVyJ10pXCJcbiAgICAgICAgdGl0bGU9XCJDbGllbnRzXCJcbiAgICAgICAgaHJlZj1cIi9jbGllbnRzXCJcbiAgICAgICAgaWNvbj1cImJ1c2luZXNzX2NlbnRlclwiXG4gICAgICAgIGxpbmstY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGFjdGl2ZS1jb2xvcj1cIiM0ZGI2YWNcIlxuICAgICAgICBpY29uLWNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBBbGwgVXNlciBUeXBlcyAtLT5cbiAgICAgIFxuICAgICAgPHYtbGluayBcbiAgICAgICAgdi1pZj1cIiRhdXRoLmNoZWNrKClcIlxuICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCIgXG4gICAgICAgIGhyZWY9XCIvc2V0dGluZ3NcIiBcbiAgICAgICAgaWNvbj1cImZhLWNvZ3NcIlxuICAgICAgICBsaW5rLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICBhY3RpdmUtY29sb3I9XCIjNGRiNmFjXCJcbiAgICAgICAgaWNvbi1jb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICAgIDx2LWxpbmsgXG4gICAgICAgIHYtaWY9XCIkYXV0aC5jaGVjaygpXCJcbiAgICAgICAgdGl0bGU9XCJMb2dvdXRcIiBcbiAgICAgICAgaHJlZj1cIi9sb2dvdXRcIlxuICAgICAgICBpY29uPVwicG93ZXJfc2V0dGluZ3NfbmV3XCJcbiAgICAgICAgbGluay1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgYWN0aXZlLWNvbG9yPVwiIzRkYjZhY1wiXG4gICAgICAgIGljb24tY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgIC8+XG4gICAgPC92LWxpc3Q+XG4gIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVkxpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvVkxpbmsudnVlXCI7XG5pbXBvcnQgeyBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyB9IGZyb20gXCJ2dWV4XCI7XG5jb25zdCB7IG1hcFN0YXRlIH0gPSBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyhcImF1dGhcIik7XG5pbXBvcnQgSW52ZW50b3J5TGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3NcIjtcbmltcG9ydCBJbnZvaWNlTGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWTGluayxcbiAgICBJbnZlbnRvcnlMaW5rcyxcbiAgICBJbnZvaWNlTGlua3NcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBkcmF3ZXI6IGZhbHNlXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogXCJpc0F1dGhlbnRpY2F0ZWRcIlxuICAgIH0pXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHN3aXRjaCAoc2VsZi4kdnVldGlmeS5icmVha3BvaW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgXCJ4c1wiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gZmFsc2UpO1xuICAgICAgY2FzZSBcInNtXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSBmYWxzZSk7XG4gICAgICBjYXNlIFwibWRcIjpcbiAgICAgICAgcmV0dXJuIChzZWxmLmRyYXdlciA9IHRydWUpO1xuICAgICAgY2FzZSBcImxnXCI6XG4gICAgICAgIHJldHVybiAoc2VsZi5kcmF3ZXIgPSB0cnVlKTtcbiAgICAgIGNhc2UgXCJ4bFwiOlxuICAgICAgICByZXR1cm4gKHNlbGYuZHJhd2VyID0gdHJ1ZSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBCdXMuJG9uKFwidG9nZ2xlRHJhd2VyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5kcmF3ZXIgPSAhc2VsZi5kcmF3ZXI7XG4gICAgfSk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwidnVlLWFwcFxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxbXFxcInRyYW5zZm9ybS1pbXBvcnRzXFxcIix7XFxcInZ1ZXRpZnlcXFwiOntcXFwidHJhbnNmb3JtXFxcIjpcXFwidnVldGlmeS9lczUvY29tcG9uZW50cy8ke21lbWJlcn1cXFwiLFxcXCJwcmV2ZW50RnVsbEltcG9ydFxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVkxpbmsudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVkxpbmsudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYzBmOGMyZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMGY4YzJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMwZjhjMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMwZjhjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WTGluay52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjBlNWE0M2U0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzBmOGMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZMaW5rLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzBmOGMyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnN0eWxlQXZhdGFyW2RhdGEtdi0yYzBmOGMyZV0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IC01NXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FBRVwiLFwiZmlsZVwiOlwiVkxpbmsudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdHlsZUF2YXRhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogLTU1cHg7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMwZjhjMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSA5ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiPHRlbXBsYXRlPlxuICA8di1saXN0LXRpbGUgXG4gICAgOmF2YXRhcj1cImF2YXRhck9uXCIgXG4gICAgOmNsYXNzPVwiW3sgc3R5bGVBdmF0YXI6IGF2YXRhck9uIH1dXCIgXG4gICAgQGNsaWNrLm5hdGl2ZT1cIm5hdmlnYXRlKGhyZWYpXCJcbiAgPlxuICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24gdi1pZj1cImljb25PbiAmJiAhYXZhdGFyT25cIj5cbiAgICAgIDx2LWljb24gOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogaWNvbkNvbG9yLCBjdXJzb3I6IGhyZWYgPyAncG9pbnRlcicgOiAnJ31cIj57eyBpY29uIH19PC92LWljb24+XG4gICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgPHYtbGlzdC10aWxlLWF2YXRhciB2LWlmPVwiaWNvbk9uICYmIGF2YXRhck9uXCI+XG4gICAgICA8aW1nIFxuICAgICAgICA6c3JjPVwiYXZhdGFyXCIgXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICA+XG4gICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICA8di1saXN0LXRpbGUtdGl0bGUgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiPlxuICAgICAgICA8c3BhbiA6c3R5bGU9XCJ7Y3Vyc29yOiBocmVmID8gJ3BvaW50ZXInIDogJyd9XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICA8di1saXN0LXRpbGUtYWN0aW9uIHYtaWY9XCJpY29uT24gJiYgYXZhdGFyT25cIj5cbiAgICAgIDx2LWljb24gOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZSA/IGFjdGl2ZUNvbG9yIDogaWNvbkNvbG9yLCBjdXJzb3I6IGhyZWYgPyAncG9pbnRlcicgOiAnJ31cIj57eyBpY29uIH19PC92LWljb24+XG4gICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gIDwvdi1saXN0LXRpbGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhcms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBpY29uQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhcmsgPyBcIiNmYWZhZmFcIiA6IFwiIzc4OTA5Q1wiOyAvLyB3aGl0ZSBvciBibHVlLWdyZXkgbGlnaHRlbi0xXG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhcmsgPyBcIiNmYWZhZmFcIiA6IFwiI2UzYjUwMFwiOyAvLyB3aGl0ZSBvciBibHVlLWdyZXkgbGlnaHRlbi0xXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiI2Y1YzMwMFwiOyAvLyB0ZWFsIGxpZ2h0ZW4gMlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0FjdGl2ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhyZWYgPT09IHRoaXMuJHJvdXRlLnBhdGg7XG4gICAgfSxcbiAgICBpc0RhcmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXJrID09PSB0cnVlO1xuICAgIH0sXG4gICAgYXZhdGFyT24oKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmF2YXRhcjtcbiAgICB9LFxuICAgIGljb25PbigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuaWNvbjtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBuYXZpZ2F0ZShocmVmKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAvKiBpZiB2YWxpZCB1cmwgKi9cbiAgICAgIGlmIChzZWxmLmlzVVJMKGhyZWYpKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogd2hlbiB1c2luZyB2dWUgcm91dGVyIHBhdGggKi9cbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtocmVmfWAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1VSTChzdHIpIHtcbiAgICAgIHZhciB1cmxSZWdleCA9XG4gICAgICAgIFwiXig/IW1haWx0bzopKD86KD86aHR0cHxodHRwc3xmdHApOi8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kXCI7XG4gICAgICB2YXIgdXJsID0gbmV3IFJlZ0V4cCh1cmxSZWdleCwgXCJpXCIpO1xuICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPCAyMDgzICYmIHVybC50ZXN0KHN0cik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zdHlsZUF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC01NXB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVkxpbmsudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGlzdC10aWxlXCIsXG4gICAge1xuICAgICAgY2xhc3M6IFt7IHN0eWxlQXZhdGFyOiBfdm0uYXZhdGFyT24gfV0sXG4gICAgICBhdHRyczogeyBhdmF0YXI6IF92bS5hdmF0YXJPbiB9LFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5uYXZpZ2F0ZShfdm0uaHJlZilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLmljb25PbiAmJiAhX3ZtLmF2YXRhck9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUgPyBfdm0uYWN0aXZlQ29sb3IgOiBfdm0uaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IF92bS5ocmVmID8gXCJwb2ludGVyXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaWNvbikpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaWNvbk9uICYmIF92bS5hdmF0YXJPblxuICAgICAgICA/IF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGlzdC10aWxlLXRpdGxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uaXNBY3RpdmUgPyBfdm0uYWN0aXZlQ29sb3IgOiBfdm0ubGlua0NvbG9yIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0eWxlOiB7IGN1cnNvcjogX3ZtLmhyZWYgPyBcInBvaW50ZXJcIiA6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaWNvbk9uICYmIF92bS5hdmF0YXJPblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlID8gX3ZtLmFjdGl2ZUNvbG9yIDogX3ZtLmljb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBfdm0uaHJlZiA/IFwicG9pbnRlclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmljb24pKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzBmOGMyZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMwZjhjMmVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9WTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IDk4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJ2dWUtYXBwXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFtcXFwidHJhbnNmb3JtLWltcG9ydHNcXFwiLHtcXFwidnVldGlmeVxcXCI6e1xcXCJ0cmFuc2Zvcm1cXFwiOlxcXCJ2dWV0aWZ5L2VzNS9jb21wb25lbnRzLyR7bWVtYmVyfVxcXCIsXFxcInByZXZlbnRGdWxsSW1wb3J0XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbnZlbnRvcnlMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM5Yjc0MTk4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzliNzQxOThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZlbnRvcnlMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0NTExYmNjY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzliNzQxOThcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52ZW50b3J5TGlua3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWM5Yjc0MTk4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludmVudG9yeUxpbmtzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1jOWI3NDE5OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1saXN0X19ncm91cF9faGVhZGVyX19hcHBlbmQtaWNvbiB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdXJpYWgvU2l0ZXMvZHNnbGl2ZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludmVudG9yeUxpbmtzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0lBO0VBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52ZW50b3J5TGlua3MudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDx2LWxpc3QgXFxuICAgIGNsYXNzPVxcXCJibHVlLWdyZXlcXFwiXFxuICAgIGRhcmtcXG4gID5cXG4gICAgPHYtbGlzdC1ncm91cFxcbiAgICAgIHYtZm9yPVxcXCJpdGVtIGluIGl0ZW1zXFxcIlxcbiAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWN0aXZlXFxcIlxcbiAgICAgIDprZXk9XFxcIml0ZW0udGl0bGVcXFwiXFxuICAgICAgbm8tYWN0aW9uXFxuICAgICAgYWN0aXZlLWNsYXNzPVxcXCJhY2NlbnQtLXRleHRcXFwiXFxuICAgID5cXG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcIndoaXRlXFxcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuXFxuICAgICAgPHYtbGlzdC10aWxlXFxuICAgICAgICB2LWZvcj1cXFwic3ViSXRlbSBpbiBpdGVtLml0ZW1zXFxcIiBcXG4gICAgICAgIHYtaWY9XFxcIiRhdXRoLmNoZWNrKHN1Ykl0ZW0uYXV0aClcXFwiXFxuICAgICAgICA6a2V5PVxcXCJzdWJJdGVtLnRpdGxlXFxcIlxcbiAgICAgICAgOnN0eWxlPVxcXCJ7Y29sb3I6IGlzQWN0aXZlKHN1Ykl0ZW0pID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJsb2FkdmlldyhzdWJJdGVtKVxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcblxcbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XFxcImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1xcXCI+e3sgc3ViSXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgIDwvdi1saXN0LWdyb3VwPlxcbiAgPC92LWxpc3Q+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgYWN0aXZlQ29sb3I6IFxcXCIjNERCNkFDXFxcIixcXG4gICAgICBsaW5rQ29sb3I6IFxcXCIjZmZmZmZcXFwiLFxcbiAgICAgIGl0ZW1zOiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGFjdGlvbjogXFxcImNvbGxlY3Rpb25zX2Jvb2ttYXJrXFxcIixcXG4gICAgICAgICAgdGl0bGU6IFxcXCJJbnZlbnRvcmllc1xcXCIsXFxuICAgICAgICAgIGl0ZW1zOiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJBbGwgVW5rbm93biBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2FsbC11bmtub3duLXJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS1xdWVzdGlvbi1jaXJjbGVcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gQ3VzdG9tZXJcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3Vua25vd24tY3VzdG9tZXJcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwic3VwZXJ2aXNlZF91c2VyX2NpcmNsZVxcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gQ2xpZW50XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmtub3duLWNsaWVudFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS11c2Vyc1xcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIlVua25vd24gU2hpcHBlclxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvdW5rbm93bi1zaGlwcGVyXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImZhLXNoaXBcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJEYW1hZ2VkIFJlcG9ydFxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL3JlcG9ydHMvZGFtYWdlZFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJicm9rZW5faW1hZ2VcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCIsIFxcXCJ3YXJlaG91c2VcXFwiLCBcXFwiY3VzdG9tZXJcXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJSZXBhaXJlZCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3JlcGFpcmVkXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImJ1aWxkXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiLCBcXFwid2FyZWhvdXNlXFxcIiwgXFxcImN1c3RvbWVyXFxcIl1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiVW5kZWxpdmVyZWQgUmVwb3J0XFxcIixcXG4gICAgICAgICAgICAgIGhyZWY6IFxcXCIvcmVwb3J0cy91bmRlbGl2ZXJlZFxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJmYS10cnVja1xcXCIsXFxuICAgICAgICAgICAgICBhdXRoOiBbXFxcImFkbWluXFxcIiwgXFxcIndhcmVob3VzZVxcXCIsIFxcXCJjdXN0b21lclxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkJpbiBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2JpblxcXCIsXFxuICAgICAgICAgICAgICBhY3Rpb246IFxcXCJhcHBzXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgdGl0bGU6IFxcXCJDdXN0b21lciBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2N1c3RvbWVyXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcImxvY2FsX2xpYnJhcnlcXFwiLFxcbiAgICAgICAgICAgICAgYXV0aDogW1xcXCJhZG1pblxcXCJdXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIkNsaWVudCBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL2NsaWVudHNcXFwiLFxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcXFwicGVybV9jb250YWN0X2NhbGVuZGFyXFxcIixcXG4gICAgICAgICAgICAgIGF1dGg6IFtcXFwiYWRtaW5cXFwiXVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgXVxcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfTtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIGlzQWN0aXZlKGl0ZW0pIHtcXG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xcbiAgICB9LFxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XFxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWM5Yjc0MTk4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwiPHRlbXBsYXRlPlxuICA8di1saXN0IFxuICAgIGNsYXNzPVwiYmx1ZS1ncmV5XCJcbiAgICBkYXJrXG4gID5cbiAgICA8di1saXN0LWdyb3VwXG4gICAgICB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgdi1tb2RlbD1cIml0ZW0uYWN0aXZlXCJcbiAgICAgIDprZXk9XCJpdGVtLnRpdGxlXCJcbiAgICAgIG5vLWFjdGlvblxuICAgICAgYWN0aXZlLWNsYXNzPVwiYWNjZW50LS10ZXh0XCJcbiAgICA+XG4gICAgICA8di1saXN0LXRpbGUgc2xvdD1cImFjdGl2YXRvclwiPlxuICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG5cbiAgICAgIDx2LWxpc3QtdGlsZVxuICAgICAgICB2LWZvcj1cInN1Ykl0ZW0gaW4gaXRlbS5pdGVtc1wiIFxuICAgICAgICB2LWlmPVwiJGF1dGguY2hlY2soc3ViSXRlbS5hdXRoKVwiXG4gICAgICAgIDprZXk9XCJzdWJJdGVtLnRpdGxlXCJcbiAgICAgICAgOnN0eWxlPVwie2NvbG9yOiBpc0FjdGl2ZShzdWJJdGVtKSA/IGFjdGl2ZUNvbG9yIDogbGlua0NvbG9yfVwiXG4gICAgICAgIEBjbGljaz1cImxvYWR2aWV3KHN1Ykl0ZW0pXCJcbiAgICAgID5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIDpjb2xvcj1cImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1wiPnt7IHN1Ykl0ZW0uYWN0aW9uIH19PC92LWljb24+XG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICA8L3YtbGlzdC1ncm91cD5cbiAgPC92LWxpc3Q+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVDb2xvcjogXCIjNERCNkFDXCIsXG4gICAgICBsaW5rQ29sb3I6IFwiI2ZmZmZmXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uOiBcImNvbGxlY3Rpb25zX2Jvb2ttYXJrXCIsXG4gICAgICAgICAgdGl0bGU6IFwiSW52ZW50b3JpZXNcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgVW5rbm93biBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9hbGwtdW5rbm93bi1yZXBvcnRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXF1ZXN0aW9uLWNpcmNsZVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW5rbm93biBDdXN0b21lclwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3Vua25vd24tY3VzdG9tZXJcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVua25vd24gQ2xpZW50XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdW5rbm93bi1jbGllbnRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImZhLXVzZXJzXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVua25vd24gU2hpcHBlclwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3Vua25vd24tc2hpcHBlclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwiZmEtc2hpcFwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGFtYWdlZCBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9kYW1hZ2VkXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJicm9rZW5faW1hZ2VcIixcbiAgICAgICAgICAgICAgYXV0aDogW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIiwgXCJjdXN0b21lclwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiUmVwYWlyZWQgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvcmVwYWlyZWRcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImJ1aWxkXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCIsIFwid2FyZWhvdXNlXCIsIFwiY3VzdG9tZXJcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVuZGVsaXZlcmVkIFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL3VuZGVsaXZlcmVkXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJmYS10cnVja1wiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiLCBcImN1c3RvbWVyXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJCaW4gUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvYmluXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJhcHBzXCIsXG4gICAgICAgICAgICAgIGF1dGg6IFtcImFkbWluXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJDdXN0b21lciBSZXBvcnRcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvcmVwb3J0cy9jdXN0b21lclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IFwibG9jYWxfbGlicmFyeVwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50IFJlcG9ydFwiLFxuICAgICAgICAgICAgICBocmVmOiBcIi9yZXBvcnRzL2NsaWVudHNcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInBlcm1fY29udGFjdF9jYWxlbmRhclwiLFxuICAgICAgICAgICAgICBhdXRoOiBbXCJhZG1pblwiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpc0FjdGl2ZShpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xuICAgIH0sXG4gICAgbG9hZHZpZXcoc3ViSXRlbSkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGlzdFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsIGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LFxuICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJ2LWxpc3QtZ3JvdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaXRlbS50aXRsZSxcbiAgICAgICAgICBhdHRyczogeyBcIm5vLWFjdGlvblwiOiBcIlwiLCBcImFjdGl2ZS1jbGFzc1wiOiBcImFjY2VudC0tdGV4dFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJhY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiIH0sIHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hY3Rpb24pKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgW19jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKGl0ZW0uaXRlbXMsIGZ1bmN0aW9uKHN1Ykl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJGF1dGguY2hlY2soc3ViSXRlbS5hdXRoKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Ykl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5pc0FjdGl2ZShzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uYWN0aXZlQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmxpbmtDb2xvclxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkdmlldyhzdWJJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhzdWJJdGVtLnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUoc3ViSXRlbSkgPyBcInRlYWxcIiA6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moc3ViSXRlbS5hY3Rpb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1jOWI3NDE5OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzliNzQxOThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52ZW50b3J5TGlua3MudnVlXG4vLyBtb2R1bGUgaWQgPSA5OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWU2MDc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JbnZvaWNlTGlua3MudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcInZ1ZS1hcHBcXFwiXV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sW1xcXCJ0cmFuc2Zvcm0taW1wb3J0c1xcXCIse1xcXCJ2dWV0aWZ5XFxcIjp7XFxcInRyYW5zZm9ybVxcXCI6XFxcInZ1ZXRpZnkvZXM1L2NvbXBvbmVudHMvJHttZW1iZXJ9XFxcIixcXFwicHJldmVudEZ1bGxJbXBvcnRcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzllNjA3N2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zOWU2MDc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDAxMjY5NmJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM5ZTYwNzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ludm9pY2VMaW5rcy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzllNjA3N2FcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW52b2ljZUxpbmtzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zOWU2MDc3YVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWVcbi8vIG1vZHVsZSBpZCA9IDk5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzMgMzQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbGlzdF9fZ3JvdXBfX2hlYWRlcl9fYXBwZW5kLWljb24ge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VyaWFoL1NpdGVzL2RzZ2xpdmUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnZvaWNlTGlua3MudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErRUE7RUFDQSwwQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJJbnZvaWNlTGlua3MudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDx2LWxpc3QgXFxuICAgIHYtaWY9XFxcIiRhdXRoLmNoZWNrKCdhZG1pbicpXFxcIiBcXG4gICAgY2xhc3M9XFxcImJsdWUtZ3JleVxcXCJcXG4gICAgZGFya1xcbiAgPlxcbiAgICA8di1saXN0LWdyb3VwXFxuICAgICAgdi1mb3I9XFxcIml0ZW0gaW4gaXRlbXNcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwiaXRlbS5hY3RpdmVcXFwiXFxuICAgICAgOmtleT1cXFwiaXRlbS50aXRsZVxcXCJcXG4gICAgICBuby1hY3Rpb25cXG4gICAgICBhY3RpdmUtY2xhc3M9XFxcImFjY2VudC0tdGV4dFxcXCJcXG4gICAgPlxcbiAgICAgIDx2LWxpc3QtdGlsZSBzbG90PVxcXCJhY3RpdmF0b3JcXFwiPlxcbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwid2hpdGVcXFwiPnt7IGl0ZW0uYWN0aW9uIH19PC92LWljb24+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgaXRlbS50aXRsZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgPC92LWxpc3QtdGlsZT5cXG5cXG4gICAgICA8di1saXN0LXRpbGVcXG4gICAgICAgIHYtZm9yPVxcXCJzdWJJdGVtIGluIGl0ZW0uaXRlbXNcXFwiXFxuICAgICAgICA6a2V5PVxcXCJzdWJJdGVtLnRpdGxlXFxcIlxcbiAgICAgICAgOnN0eWxlPVxcXCJ7Y29sb3I6IGlzQWN0aXZlKHN1Ykl0ZW0pID8gYWN0aXZlQ29sb3IgOiBsaW5rQ29sb3J9XFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJsb2FkdmlldyhzdWJJdGVtKVxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHN1Ykl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcblxcbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XFxcImlzQWN0aXZlKHN1Ykl0ZW0pID8gJ3RlYWwnIDogJ3doaXRlJ1xcXCI+e3sgc3ViSXRlbS5hY3Rpb24gfX08L3YtaWNvbj5cXG4gICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgIDwvdi1saXN0LWdyb3VwPlxcbiAgPC92LWxpc3Q+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgYWN0aXZlQ29sb3I6IFxcXCIjNERCNkFDXFxcIixcXG4gICAgICBsaW5rQ29sb3I6IFxcXCIjZmZmZmZcXFwiLFxcbiAgICAgIGl0ZW1zOiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGFjdGlvbjogXFxcImNhcmRfbWVtYmVyc2hpcFxcXCIsXFxuICAgICAgICAgIHRpdGxlOiBcXFwiSW52b2ljZXNcXFwiLFxcbiAgICAgICAgICBpdGVtczogW1xcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIHRpdGxlOiBcXFwiR2VuZXJhdGUgSW52b2ljZVxcXCIsXFxuICAgICAgICAgICAgICBocmVmOiBcXFwiL2ludm9pY2VzL2dlbmVyYXRlXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcInNjaGVkdWxlXFxcIlxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgeyB0aXRsZTogXFxcIkludm9pY2VzXFxcIiwgaHJlZjogXFxcIi9pbnZvaWNlc1xcXCIsIGFjdGlvbjogXFxcImFsbF9pbmJveFxcXCIgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICB0aXRsZTogXFxcIldlZWtseSBSZXBvcnRcXFwiLFxcbiAgICAgICAgICAgICAgaHJlZjogXFxcIi9yZXBvcnRzL3RvdGFsLWFsbC1jdXN0b21lci1pbnZvaWNlXFxcIixcXG4gICAgICAgICAgICAgIGFjdGlvbjogXFxcInBpY3R1cmVfYXNfcGRmXFxcIlxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgXVxcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfTtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIGlzQWN0aXZlKGl0ZW0pIHtcXG4gICAgICByZXR1cm4gaXRlbS5ocmVmID09PSB0aGlzLiRyb3V0ZS5wYXRoO1xcbiAgICB9LFxcbiAgICBsb2FkdmlldyhzdWJJdGVtKSB7XFxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgJHtzdWJJdGVtLmhyZWZ9YCB9KTtcXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM5ZTYwNzdhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGlzdCBcbiAgICB2LWlmPVwiJGF1dGguY2hlY2soJ2FkbWluJylcIiBcbiAgICBjbGFzcz1cImJsdWUtZ3JleVwiXG4gICAgZGFya1xuICA+XG4gICAgPHYtbGlzdC1ncm91cFxuICAgICAgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCJcbiAgICAgIHYtbW9kZWw9XCJpdGVtLmFjdGl2ZVwiXG4gICAgICA6a2V5PVwiaXRlbS50aXRsZVwiXG4gICAgICBuby1hY3Rpb25cbiAgICAgIGFjdGl2ZS1jbGFzcz1cImFjY2VudC0tdGV4dFwiXG4gICAgPlxuICAgICAgPHYtbGlzdC10aWxlIHNsb3Q9XCJhY3RpdmF0b3JcIj5cbiAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIj57eyBpdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IGl0ZW0udGl0bGUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICA8L3YtbGlzdC10aWxlPlxuXG4gICAgICA8di1saXN0LXRpbGVcbiAgICAgICAgdi1mb3I9XCJzdWJJdGVtIGluIGl0ZW0uaXRlbXNcIlxuICAgICAgICA6a2V5PVwic3ViSXRlbS50aXRsZVwiXG4gICAgICAgIDpzdHlsZT1cIntjb2xvcjogaXNBY3RpdmUoc3ViSXRlbSkgPyBhY3RpdmVDb2xvciA6IGxpbmtDb2xvcn1cIlxuICAgICAgICBAY2xpY2s9XCJsb2FkdmlldyhzdWJJdGVtKVwiXG4gICAgICA+XG4gICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyBzdWJJdGVtLnRpdGxlIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuXG4gICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtaWNvbiA6Y29sb3I9XCJpc0FjdGl2ZShzdWJJdGVtKSA/ICd0ZWFsJyA6ICd3aGl0ZSdcIj57eyBzdWJJdGVtLmFjdGlvbiB9fTwvdi1pY29uPlxuICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgPC92LWxpc3QtZ3JvdXA+XG4gIDwvdi1saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlQ29sb3I6IFwiIzREQjZBQ1wiLFxuICAgICAgbGlua0NvbG9yOiBcIiNmZmZmZlwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGlvbjogXCJjYXJkX21lbWJlcnNoaXBcIixcbiAgICAgICAgICB0aXRsZTogXCJJbnZvaWNlc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkdlbmVyYXRlIEludm9pY2VcIixcbiAgICAgICAgICAgICAgaHJlZjogXCIvaW52b2ljZXMvZ2VuZXJhdGVcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInNjaGVkdWxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkludm9pY2VzXCIsIGhyZWY6IFwiL2ludm9pY2VzXCIsIGFjdGlvbjogXCJhbGxfaW5ib3hcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogXCJXZWVrbHkgUmVwb3J0XCIsXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3JlcG9ydHMvdG90YWwtYWxsLWN1c3RvbWVyLWludm9pY2VcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBcInBpY3R1cmVfYXNfcGRmXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNBY3RpdmUoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaHJlZiA9PT0gdGhpcy4kcm91dGUucGF0aDtcbiAgICB9LFxuICAgIGxvYWR2aWV3KHN1Ykl0ZW0pIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYCR7c3ViSXRlbS5ocmVmfWAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi52LWxpc3RfX2dyb3VwX19oZWFkZXJfX2FwcGVuZC1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ludm9pY2VMaW5rcy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibHVlLWdyZXlcIiwgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sXG4gICAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInYtbGlzdC1ncm91cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYWN0aW9uXCI6IFwiXCIsIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWNjZW50LS10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJhY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFjdGl2ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIgfSwgc2xvdDogXCJhY3RpdmF0b3JcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ3aGl0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmFjdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtbGlzdC10aWxlLXRpdGxlXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGl0bGUpKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woaXRlbS5pdGVtcywgZnVuY3Rpb24oc3ViSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdWJJdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uaXNBY3RpdmUoc3ViSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmFjdGl2ZUNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5saW5rQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZHZpZXcoc3ViSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW192bS5fdihfdm0uX3Moc3ViSXRlbS50aXRsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmlzQWN0aXZlKHN1Ykl0ZW0pID8gXCJ0ZWFsXCIgOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHN1Ykl0ZW0uYWN0aW9uKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zOWU2MDc3YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzllNjA3N2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW52b2ljZUxpbmtzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBjbGlwcGVkOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC53aWR0aCA8PSAxMjY0ICYmIHRydWUsXG4gICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiLFxuICAgICAgICBhcHA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLmRyYXdlcixcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS5kcmF3ZXIgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJkcmF3ZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZS1ncmV5XCIsIGF0dHJzOiB7IGRlbnNlOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1zdWJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZG1pbiBBcmVhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwid2FyZWhvdXNlXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1zdWJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJXYXJlaG91c2UgQXJlYVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImN1c3RvbWVyXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1zdWJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJ3aGl0ZS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJDdXN0b21lciBBcmVhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImFkbWluXCIsIFwiY3VzdG9tZXJcIiwgXCJ3YXJlaG91c2VcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGFzaGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtdGFjaG9tZXRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJhZG1pblwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJUdXRvcmlhbHNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3R1dG9yaWFsc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtb3ZpZVwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlcnNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL3VzZXJzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcInN1cGVydmlzZWRfdXNlcl9jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soXCJhZG1pblwiKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNoaXBwZXJzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9zaGlwcGVyc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYS1zaGlwXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSYXRlc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvcmF0ZXNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJCaW5zXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9iaW5zXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcInZpZXdfbW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcIndhcmVob3VzZVwiLCBcImFkbWluXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldhcmVob3VzZVwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvd2FyZWhvdXNlXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImxvY2F0aW9uX2NpdHlcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uJGF1dGguY2hlY2soW1wiYWRtaW5cIiwgXCJ3YXJlaG91c2VcIl0pXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVjZWl2aW5nXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9yZWNlaXZpbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwicmVjZWlwdFwiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhbXCJhZG1pblwiLCBcIndhcmVob3VzZVwiXSlcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmNoaXZlZFwiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYXJjaGl2ZWQvZHNnXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcImFyY2hpdmVcIixcbiAgICAgICAgICAgICAgICAgIFwibGluay1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcIiM0ZGI2YWNcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1jb2xvclwiOiBcIiNmYWZhZmFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImludmVudG9yeS1saW5rc1wiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjayhcImFkbWluXCIpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0c1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdGlja2V0c1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJjb25maXJtYXRpb25fbnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFwiYWRtaW5cIilcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJNaXNjZWxsYW5lb3VzXCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9taXNjZWxsYW5lb3VzXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm5vdGVfYWRkXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnZvaWNlLWxpbmtzXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKFtcImN1c3RvbWVyXCJdKVxuICAgICAgICAgICAgPyBfYyhcInYtbGlua1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsaWVudHNcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2NsaWVudHNcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiYnVzaW5lc3NfY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLiRhdXRoLmNoZWNrKClcbiAgICAgICAgICAgID8gX2MoXCJ2LWxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgaHJlZjogXCIvc2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiZmEtY29nc1wiLFxuICAgICAgICAgICAgICAgICAgXCJsaW5rLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwiIzRkYjZhY1wiLFxuICAgICAgICAgICAgICAgICAgXCJpY29uLWNvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS4kYXV0aC5jaGVjaygpXG4gICAgICAgICAgICA/IF9jKFwidi1saW5rXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9nb3V0XCIsXG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwicG93ZXJfc2V0dGluZ3NfbmV3XCIsXG4gICAgICAgICAgICAgICAgICBcImxpbmstY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY29sb3JcIjogXCIjNGRiNmFjXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tY29sb3JcIjogXCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xODkyYzBjYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTg5MmMwY2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhcnRpYWxzL0xlZnRTaWRlQmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaW5zcGlyZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImxlZnQtc2lkZS1iYXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhcHAtbmF2LWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndoaXRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2xpZGUteC10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICBmbHVpZDogXCJcIixcbiAgICAgICAgICAgIFwicGEtMFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJtYS0wXCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNjY2JmMTVlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zY2NiZjE1ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvbGF5b3V0cy9NYWluLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCJdLCJzb3VyY2VSb290IjoiIn0=