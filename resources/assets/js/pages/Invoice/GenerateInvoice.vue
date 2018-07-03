<template>
  <main-layout>
    <v-container fluid>
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs6
        >
          <v-dialog
            ref="date_started"
            v-model="date_started_modal"
            :return-value.sync="form.date_started"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="form.date_started"
              label="Date Started"
              prepend-icon="event_available"
              style="margin-top:26px;"
              readonly
            />
            <v-date-picker 
              v-model="form.date_started" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_started_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_started.save(form.date_started)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          xs6
        >
          <v-dialog
            ref="date_ended"
            v-model="date_ended_modal"
            :return-value.sync="form.date_ended"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="form.date_ended"
              label="Date Ended"
              prepend-icon="event_available"
              style="margin-top:26px;"
              readonly
            />
            <v-date-picker 
              v-model="form.date_ended" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_ended_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_ended.save(form.date_ended)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          d-flex 
          xs12 
          sm7>
          <v-layout 
            row 
            wrap>
            <v-flex d-flex>
              <v-card 
                light 
                flat
              >
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search Customers"
                    single-line
                    hide-details
                    light
                  />
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex 
          d-flex 
          xs12 
          sm5 
          child-flex>
          <v-layout 
            row 
            wrap>
            <v-flex class="xs12 white">
              <v-btn 
                v-if="selected.length>0"
                :disabled="!$auth.check('admin')" 
                block 
                color="blue darken-4" 
                dark
                flat
                @click="massCreateInvoice">
                Generate Invoice
                <v-icon
                  large
                  right
                  color="blue darken-4" 
                >
                  all_inbox
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- User Data Table -->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        select-all
        item-key="id"
      >
        <!-- Header Section -->
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.native="toggleAll"
              />
            </th>
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
            <td class="title text-xs-left">
              <v-checkbox
                :active="props.selected"
                :input-value="props.selected"
                @click="props.selected = !props.selected"
              />
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.customer_name }}
            </td>

            <td class="title text-xs-left accent--text">
              <span v-if="props.item.receiving_fee">{{ props.item.receiving_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.storage_fee">{{ props.item.storage_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.delivery_fee">{{ props.item.delivery_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.misc_fee">{{ props.item.misc_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.total">{{ props.item.total.toFixed(4) }}</span>
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
            Pick Date Started and Date Ended To
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="generateInvoice">
              Fetch Billables
              <v-icon
                right
                color="primary" 
              >
                attach_money
              </v-icon>
            </v-btn>
          </v-alert>
        </template>
        <!-- No Search Result Section -->
        <v-alert 
          slot="no-results" 
          :value="true" 
          color="blue-grey" 
          icon="warning">
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
      {
        text: "Customer",
        value: "customer_name",
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
      { text: "Total", value: "total", align: "left", sortable: true }
    ],
    items: [],
    selected: [],
    mass_create_invoices: new Form({}),
    pagination: {
      sortBy: "name"
    },
    toggleForm: new Form({}),
    search: "",
    domain: window.location.hostname,
    form: new Form({
      date_started: "",
      date_ended: ""
    }),
    date_started_modal: "",
    date_ended_modal: ""
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    }
  },
  methods: {
    massCreateInvoice() {
    let self = this;
    let customers = [];
    for (let index = 0; index < self.selected.length; index++) {
          customers.push(self.selected[index]['customer_id'])
        }
        self.mass_create_invoices = self.selected
      axios
        .post(route("api.invoice.massCreateInvoice"), self.mass_create_invoices)
        .then(response => {
          console.log("invoices", response.data);
        });
    },
    async generateInvoice() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.invoice.generate"),
          self.form
        );
        self.items = payload.data.data;
        for (let index = 0; index < self.items.length; index++) {
          self.items[index]["total"] =
            self.items[index]["receiving_fee"] +
            self.items[index]["delivery_fee"] +
            self.items[index]["misc_fee"] +
            self.items[index]["storage_fee"];
        }
      } catch (errors) {
        let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Validation Error!",
            html: '<p class="title">Please Pick a Date Started and Date Ended!</p>',
            type: "warning",
            confirmButtonText: "Back"
          });
      }
    },
    viewInvoice(customer) {
      vm.$router.push({
        name: "view-invoice",
        params: { id: `${customer.id}` }
      });
    },
    toggleStatus(customer) {
      let self = this;
      self.toggleForm = customer;
      axios
        .post(route("api.invoice.create"), self.toggleForm)
        .then(response => {
          console.log(response.data);
          toggleForm: new Form({});
        })
        .catch(errors => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Oops! Forbidden Action!",
            html: '<p class="title">' + errors.response.data.message + "</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
          toggleForm: new Form({});
        });
    },
    toProperCase(key) {
      let newStr = key.replace(/_/g, " ");
      return newStr.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    async massDeactivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massDeactivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = false;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    async massActivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massActivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = true;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
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

