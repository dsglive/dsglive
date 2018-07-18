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
            <h2 class="display-1">Client Report</h2>
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
            xs12
            md6
            offset-md3>
            <v-autocomplete
              v-validate="'required'"
              :items="clients"
              v-model="form.client_name"
              :error-messages="errorMessages('client')"
              :class="{ 'error--text': hasErrors('client') }"
              item-text="name"
              item-value="name"
              required
              label="Choose Client"
              light
              prepend-icon="fa-users"
              data-vv-name="client"
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
      style="margin-top:-120px;"
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
              {{ props.item.dsg_id }}
            </td>
            <td 
              :class="{'red--text': props.item.shipper_id === null || props.item.shipper_id === 1, 'accent--text': props.item.shipper_id > 1}" 
              class="title text-xs-left"
            >
              {{ props.item.shipper_name }}
            </td>
            <td 
              class="title text-xs-left"
            >
              {{ props.item.bin_name }}
            </td>
            <td 
              class="title text-xs-left"
            >
              {{ props.item.po_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.style_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.description }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.cube }}
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
            Opps! There are No Packages At the Selected Customer!
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
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "DSG#", value: "dsg_id", align: "left", sortable: true },
      { text: "Shipper", value: "shipper_name", align: "left", sortable: true },
      { text: "Bin", value: "bin_name", align: "left", sortable: true },
      { text: "PO#", value: "po_no", align: "left", sortable: true },
      { text: "Style#", value: "style_no", align: "left", sortable: true },
      {
        text: "Description",
        value: "description",
        align: "left",
        sortable: true
      },
      { text: "Cube", value: "cube", align: "left", sortable: true }
    ],
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
      sortBy: "name",
      rowPerPage: "all"
    },
    form: new Form({
      customer_id: "",
      customer_name: "",
      client_name: "",
      client_id: ""
    }),
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
    }
  },
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
    "form.customer_id": {
      handler: function(newValue) {
        let self = this;
        let customer_id = null;
        let customer_name = null;

        if (newValue != undefined) {
          let customer = _.find(self.customers, function(c) {
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
      handler: function(newName) {
        let self = this;
        let client_id = null;
        let client_name = newName;

        if (newName != null || newName != undefined) {
          if (self.clients.length > 0) {
            let client = _.find(self.clients, function(c) {
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
  mounted() {
    let self = this;
    self.getCustomers();
  },
  methods: {
    viewPDF() {
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/client-report/${this.form.customer_id}/${this.form.client_id}`;
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
    async fetchPackages() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.reportByClient"),
          self.form
        );
        self.items = payload.data.data;
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

