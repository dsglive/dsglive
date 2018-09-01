<template>
  <main-layout>
    <v-jumbotron>
      <v-container 
        fluid>
        <v-layout 
          row 
          wrap>
          <v-flex 
            xs12
            text-xs-center
          >
            <h2 class="display-1">Customer Report</h2>
            <v-divider/>
          </v-flex>
          <v-flex 
            xs12
            md6
            offset-md3>
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
              hint="Choose Customer"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            v-if="items.length>0"
            xs12
            md6
            offset-md3
          >
            <v-btn 
              v-if="!toggle_items"
              color="secondary" 
              block
              @click="viewPDF()"
            >
              View As PDF
              <v-icon 
                color="indigo lighten-4" 
                right>
                picture_as_pdf
              </v-icon>

            </v-btn>
            <v-btn 
              v-else
              color="secondary" 
              block
              @click="viewCustomPDF()"
            >
              View Custom PDF Report
              <v-icon 
                color="indigo lighten-4" 
                right>
                picture_as_pdf
              </v-icon>

            </v-btn>
          </v-flex>
          <v-flex 
            xs12 
            text-xs-center>
            <h2>Total Items: {{ items.length }}</h2>
            <h2>Total Cube: {{ total_cube }}</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container 
      style="margin-top:-170px;"
      fluid>
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex xs12>
          <v-card 
            light 
            flat
          >
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search Packages"
                single-line
                hide-details
                light
              />
            </v-card-title>
          </v-card>
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
                  :return-value.sync="searchForm.from"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="searchForm.from"
                    label="Date Received From"
                    prepend-icon="event_available"
                    style="margin-top:26px;"
                    readonly
                  />
                  <v-date-picker 
                    v-model="searchForm.from" 
                    scrollable>
                    <v-spacer/>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="date_from = false">Cancel</v-btn>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="$refs.from.save(searchForm.from)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              
                <v-dialog
                  ref="to"
                  v-model="date_to"
                  :return-value.sync="searchForm.to"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="searchForm.to"
                    label="Date Received To"
                    prepend-icon="event_available"
                    style="margin-top:26px;"
                    readonly
                  />
                  <v-date-picker 
                    v-model="searchForm.to" 
                    scrollable>
                    <v-spacer/>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="date_to = false">Cancel</v-btn>
                    <v-btn 
                      flat 
                      color="primary" 
                      @click="$refs.to.save(searchForm.to)">OK</v-btn>
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
                  Order By: {{ searchOrderBy }}
                </v-btn>
              </v-toolbar>
            </th>
            <th colspan="3">
              <v-toolbar 
                flat
                color="white"
              >
                <v-autocomplete
                  v-model="searchBy"
                  :items="filters"
                  return-object
                  editable
                  flat
                  label="Filter By"
                  hide-details
                  overflow
                  style="margin-top:5px;"
                />
                <form 
                  style="margin-top:20px;" 
                  @submit.prevent="searchPackages()">
                  <v-text-field
                    v-validate="'required'"
                    v-model="searchForm.search"
                    :label="searchBy.title"
                    :error-messages="errorMessages('search')"
                    :class="{ 'error--text': hasErrors('search') }"
                    class="primary--text"
                    data-vv-name="search"
                    append-icon="search"
                    single-line
                    px-2
                    style="margin-top:5px;"
                    @click:append="() => searchPackages()"
                  />
                </form>
                <v-btn 
                  v-if="!toggle_items"
                  flat
                  @click="searchPackages"
                >
                  <v-icon color="teal">search</v-icon>
                  Search
                </v-btn>
                <v-btn 
                  v-else
                  flat
                  @click="revertBack"
                >
                  <v-icon color="amber">arrow_back</v-icon>
                  Back
                </v-btn>
              </v-toolbar>
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
            <td 
              :class="{'red--text': props.item.client_id === null || props.item.client_id === 1, 'accent--text': props.item.client_id > 1}" 
              class="title text-xs-left"
            >
              {{ props.item.client_name }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.dsg_id }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.style_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.shipper_name }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.description }}
            </td>
            <td 
              :class="{'red--text': props.item.shipper_id === null || props.item.shipper_id === 1, 'accent--text': props.item.shipper_id > 1}" 
              class="title text-xs-left"
            >
              {{ props.item.damage_description }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.cube }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.date_received }}
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
            Opps! There are No Items Yet At the Selected Customer!
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
    filters: [
      { text: "Filter By DSG#", value: "dsg_id", title: "Search by DSG" },
      {
        text: "Filter By Style#",
        value: "style_no",
        title: "Search by Style No."
      },
      {
        text: "Filter By Shipper",
        value: "shipper_name",
        title: "Search by Shipper"
      },
      {
        text: "Filter By Description",
        value: "description",
        title: "Search by Description"
      }
    ],
    sorts: [
      { text: "Sort By DSG#", value: "dsg_id", title: "Sort By DSG" },
      {
        text: "Sort By Style#",
        value: "style_no",
        title: "Sort By Style No."
      },
      {
        text: "Sort By Shipper",
        value: "shipper_name",
        title: "Sort By Shipper"
      },
      {
        text: "Sort By Description",
        value: "description",
        title: "Sort By Description"
      }
    ],
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
    headers: [
      { text: "Client", value: "client_name", align: "left", sortable: true },
      { text: "DSG#", value: "dsg_id", align: "left", sortable: true },
      { text: "Style#", value: "style_no", align: "left", sortable: true },
      { text: "Shipper", value: "shipper_name", align: "left", sortable: true },
      {
        text: "Description",
        value: "description",
        align: "left",
        sortable: true
      },
      {
        text: "Damage",
        value: "damage_description",
        align: "left",
        sortable: true
      },
      { text: "Cube", value: "cube", align: "left", sortable: true },
      {
        text: "Date Received",
        value: "date_received",
        align: "left",
        sortable: true
      }
    ],
    items: [],
    fetch_items: [],
    toggle_items: false,
    customers: [],
    selected: [],
    pagination: {
      sortBy: "client_name",
      rowPerPage: "all"
    },
    form: new Form({
      customer_id: ""
    }),
    // server side search packages
    searchForm: new Form({
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
  }),
  computed: {
    total_cube() {
      let total = 0;
      this.items.forEach(item => {
        total += item.cube;
      });
      return `${total.toFixed(4)} cu.ft`;
    },
    sortIcon() {
      if (this.searchOrderBy === "ASC") {
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
    fetch_items: {
      handler: function(newValue) {},
      deep: true
    },
    "form.customer_id"(newValue) {
      this.searchForm.customer_id = newValue;
      this.fetchPackages();
    },
    searchOrderBy(newValue) {
      this.searchForm.orderBy = newValue;
    },
    searchBy(newValue) {
      this.searchForm.searchBy = newValue;
    },
    sortBy(newValue) {
      this.searchForm.sortBy = newValue;
    }
  },
  mounted() {
    let self = this;
    self.getCustomers();
  },
  methods: {
    viewCustomPDF() {
      let packages = [];
      this.items.forEach(item => {
        packages.push(item.id);
      });
      let string = "";
      packages.forEach(item => {
        string += `&packages[]=${item}`;
      });
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/custom-customer-report/${this.form.customer_id}?sortBy=${
        this.pagination.sortBy
      }&orderBy=${this.pagination.descending ? "DESC" : "ASC"}${string}`;
      window.open(url);
    },
    revertBack() {
      this.toggle_items = !this.toggle_items;
      this.items = this.fetch_items;
    },
    toggleOrderBy() {
      if (this.searchOrderBy === "ASC") {
        this.searchOrderBy = "DESC";
        this.orderColor = "orange";
      } else {
        this.searchOrderBy = "ASC";
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
    viewItem(id) {
      this.$router.push({
        name: "view-damaged-package",
        params: { id: `${id}` }
      });
    },
    searchPackages() {
      let self = this;
      console.log("searching...");
      self.searchForm.busy = true;
      self.$validator.validateAll();
      if (
        (self.searchForm.from && !self.searchForm.to) ||
        (!self.searchForm.from && self.searchForm.to)
      ) {
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        let message = "";
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
          .post(route("api.report.searchCustomerReport"), self.searchForm)
          .then(response => {
            console.log(response.data.data);
            self.items = response.data.data;
            self.toggle_items = true;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    async fetchPackages() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.reportByCustomer"),
          self.form
        );
        self.items = payload.data.data;
        self.fetch_items = payload.data.data;
      } catch ({ errors, message }) {
        if (errors) {
          self.form.errors.set(errors);
        }
        if (message) {
        }
        self.form.busy = false;
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

