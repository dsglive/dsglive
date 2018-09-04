<template>
  <main-layout>
    <v-container 
      fluid>
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs12 
          text-xs-center>
          <h1>Customer Management Report</h1>
        </v-flex>
        <v-flex 
          xs12
          offset-md4
          md4
          text-xs-center>
          <v-btn
            v-if="items.length <1"
            block
            color="blue lighten-2"
            flat
            @click="viewPDF"
          >
            View PDF/Download Report
          </v-btn>
        </v-flex>
      </v-layout>
      <!-- Dsg Data Table -->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        :rows-per-page-items="[{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
        select-all
        item-key="id"
        expand
        hide-actions
      >
        <!-- Header Section -->
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
            <th colspan="3">
              <v-toolbar 
                flat
                color="white"
              >
                <v-dialog
                  ref="from"
                  v-model="date_from"
                  :return-value.sync="form.from"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="form.from"
                    label="Date From"
                    prepend-icon="event_available"
                    style="margin-top:26px;"
                    readonly
                  />
                  <v-date-picker 
                    v-model="form.from" 
                    scrollable>
                    <v-spacer/>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="date_from = false">Cancel</v-btn>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="$refs.from.save(form.from)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              
                <v-dialog
                  ref="to"
                  v-model="date_to"
                  :return-value.sync="form.to"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="form.to"
                    label="Date To"
                    prepend-icon="event_available"
                    style="margin-top:26px;"
                    readonly
                  />
                  <v-date-picker 
                    v-model="form.to" 
                    scrollable>
                    <v-spacer/>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="date_to = false">Cancel</v-btn>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="$refs.to.save(form.to)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              
              </v-toolbar>
            </th>
            <th colspan="2">
              <v-toolbar 
                flat
                color="white"
              >
                <v-autocomplete
                  v-model="sortBy"
                  :items="sorts"
                  return-object
                  editable
                  flat
                  label="Sort By"
                  hide-details
                  overflow
                  style="margin-top:5px;"
                />
                <v-btn 
                  flat
                  @click="toggleOrderBy"
                >
                  <v-icon :color="orderColor">{{ sortIcon }}</v-icon>
                  Order By: {{ order }}
                </v-btn>
              </v-toolbar>
            </th>
            <th colspan="3">
              <v-toolbar 
                flat
                color="white"
              >
                <v-autocomplete
                  v-validate="'required'"
                  :items="customers"
                  v-model="form.customer_id"
                  :error-messages="errorMessages('customer')"
                  :class="{ 'error--text': hasErrors('customer') }"
                  item-text="name"
                  item-value="id"
                  required
                  label="Choose Customer"
                  light
                  prepend-icon="supervised_user_circle"
                  data-vv-name="customer"
                  flat
                  hide-details
                  overflow
                  style="margin-top:5px;"
                />
                <v-btn 
                  flat
                  @click="searchCustomerInvoice"
                >
                  <v-icon color="teal">search</v-icon>
                  Search
                </v-btn>
              </v-toolbar>
            </th>
          </tr>
          <tr>
            <th colspan="6">
              <v-card 
                light 
                flat
              >
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search Invoices"
                    single-line
                    hide-details
                    light
                  />
                </v-card-title>
              </v-card>
            </th>
          </tr>
          <tr>
            <th 
              v-for="header in props.headers" 
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', 
                       header.value === pagination.sortBy ? 'name' : '', 
                       {'text-xs-left': header.align === 'left', 
                        'text-xs-right': header.align === 'right', 
                        'text-xs-center': header.align === 'center'},
                       $vuetify.breakpoint.width >= 600 && 'title']"
              @click="changeSort(header.value)"
            >
              <span>
                <v-icon>arrow_upward</v-icon>
                {{ header.text }}
              </span>
            </th>
          </tr>
        </template>
        <!-- Row Section -->
        <template 
          slot="items" 
          slot-scope="props"
        >
          <tr>
            <td class="title text-xs-left accent--text">
              {{ props.item.created_at }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.receiving_fee }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.storage_fee }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.delivery_fee }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.misc_fee }}
            </td>
            <td class="title text-xs-right accent--text">
              {{ props.item.total }}
            </td>
          </tr>
        </template>
        <!-- Pagination Section -->
        <template 
          slot="pageText"
          slot-scope="{ pageStart, pageStop }"
        >
          From {{ pageStart }} to {{ pageStop }}
        </template>
        <!-- No Data Section -->
        <template slot="no-data">
          <v-alert 
            :value="true" 
            color="blue-grey" 
            icon="warning">
            Opps! There Are No Invoice Report Generated Yet.
          </v-alert>
        </template>
        <!-- No Search Result Section -->
        <v-alert 
          slot="no-results" 
          :value="true" 
          color="blue-grey" 
          icon="warning"
        >
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";

export default {
  components: {
    MainLayout
  },
  mixins: [validationError],
  data: () => ({
    sorts: [
      {
        text: "Sort By Date",
        value: "created_at",
        title: "Sort By Date"
      },
      {
        text: "Sort By Receiving",
        value: "receiving_fee",
        title: "Sort By Receiving"
      },
      {
        text: "Sort By Storage",
        value: "storage_fee",
        title: "Sort By Storage"
      },
      {
        text: "Sort By Delivery",
        value: "delivery_fee",
        title: "Sort By Delivery"
      },
      {
        text: "Sort By Misc",
        value: "misc_fee",
        title: "Sort By Misc"
      },
      {
        text: "Sort By Total",
        value: "total",
        title: "Sort By Total"
      }
    ],
    sortBy: {
      text: "Sort By Date",
      value: "created_at",
      title: "Sort By Date"
    },
    order: "ASC",
    orderColor: "teal",
    date_from: false,
    date_to: false,
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      {
        text: "Invoice Date",
        value: "created_at",
        align: "left",
        sortable: true
      },
      {
        text: "Receiving",
        value: "receiving_fee",
        align: "left",
        sortable: true
      },
      { text: "Storage", value: "storage_fee", align: "left", sortable: true },
      {
        text: "Delivery",
        value: "delivery_fee",
        align: "left",
        sortable: true
      },
      { text: "Misc", value: "misc_fee", align: "left", sortable: true },
      { text: "Total Bill", value: "total", align: "right", sortable: true }
    ],
    items: [],
    customers: [],
    selected: [],
    pagination: {
      sortBy: "created_at",
      rowPerPage: "all"
    },
    // server side search packages
    form: new Form({
      customer_id: null,
      from: null,
      to: null,
      sortBy: 'created_at',
      orderBy: "ASC"
    }),
    // local search client side
    search: "",
    domain: window.location.hostname
  }),
  computed: {
    sortIcon() {
      if (this.order === "ASC") {
        return "fa-sort-amount-asc";
      }
      return "fa-sort-amount-desc";
    }
  },
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
    "form.customer_id"(newValue) {
      this.form.customer_id = newValue;
      this.searchCustomerInvoice();
    },
    order(newValue) {
      this.form.orderBy = newValue;
    },
    sortBy(newValue) {
      this.form.sortBy = newValue.value;
    }
  },
  mounted() {
    let self = this;
    self.getCustomers();
  },
  methods: {
    toggleOrderBy() {
      if (this.order === "ASC") {
        this.order = "DESC";
        this.orderColor = "orange";
      } else {
        this.order = "ASC";
        this.orderColor = "teal";
      }
    },
    //! rework viewPDF
    viewPDF() {
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/customer-report/${this.form.customer_id}?sortBy=${
        this.pagination.sortBy
      }&orderBy=${this.pagination.descending ? "DESC" : "ASC"}`;
      window.open(url);
    },
    getCustomers() {
      axios.get(route("api.dsg.getCustomers")).then(response => {
        this.customers = response.data.data;
      });
    },
    searchCustomerInvoice() {
      let self = this;
      self.form.busy = true;
      self.$validator.validateAll();
      if (
        (self.form.from && !self.form.to) ||
        (!self.form.from && self.form.to)
      ) {
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        let message = "";
        if (!self.form.from) {
          message = "Please Filled Up Date Received From";
        }
        if (!self.form.to) {
          message = "Please Filled Up Date Received To";
        }
        toggleModal({
          title: "Validation Error!",
          html: '<p class="title">' + message + "</p>",
          type: "warning",
          confirmButtonText: "Back"
        });
        return;
      }

      if (!self.errors.any()) {
        axios
          // create API Endpoint for searching
          .post(route("api.report.searchCustomerInvoice"), self.form)
          .then(response => {
            console.log(response.data.invoices);
            self.items = response.data.invoices;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>

