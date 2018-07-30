<template>
  <main-layout>
    <v-container fluid>
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs4
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
          xs4
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
          v-if="items.length < 1" 
          xs4
        >
          <v-btn 
            :disabled="form.date_started === null && form.date_ended === null"
            style="margin-top:25px;" 
            block 
            color="blue darken-4" 
            dark
            flat
            @click="generateInvoice">
            Fetch Billables
            <v-icon
              color="blue darken-4"
            >
              attach_money
            </v-icon>
          </v-btn>
        </v-flex>
        <v-flex 
          d-flex 
          xs12
        >
          <v-layout 
            row 
            wrap>
            <v-flex 
              v-if="form.date_started && form.date_ended"
              xs12
            >
              <v-alert 
                v-if="selected.length < 1"
                :value="items.length > 0" 
                color="secondary" 
                icon="warning">
                Note: Check An Item/s On The Table To Generate An Invoice
              </v-alert>
              <v-btn
                v-else
                :loading="mass_create_invoices.busy"
                :disabled="mass_create_invoices.busy"
                color="teal lighten-2"
                block
                class="white--text"
                @click.native="massCreateInvoice"
              >
                Generate Invoices
                <v-icon 
                  right 
                  dark>schedule</v-icon>
              </v-btn>
            </v-flex>
            <v-flex 
              xs12
            >
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
        
      </v-layout>
      <!-- User Data Table -->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        select-all
        item-key="customer_name"
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
                @click.native="props.selected = !props.selected"
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
    },
    selected: {
      handler: function(newValue) {},
      deep: true
    }
  },
  methods: {
    massCreateInvoice() {
      let self = this;
      let customers = [];
      for (let index = 0; index < self.selected.length; index++) {
        customers.push(self.selected[index]["customer_id"]);
      }
      self.mass_create_invoices = self.selected;
      axios
        .post(route("api.invoice.massCreateInvoice"), self.mass_create_invoices)
        .then(response => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Success!",
            html: '<p class="title">Invoice Generated!</p>',
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "invoices" }));
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
        let items = payload.data.data;
        for (let index = 0; index < items.length; index++) {
          items[index]["total"] =
            items[index]["receiving_fee"] +
            items[index]["delivery_fee"] +
            items[index]["misc_fee"] +
            items[index]["storage_fee"];
          if (items[index]["total"] > 0) {
            self.items.push(items[index]);
          }
        }
        let message = "You Successfully Fetch Billable Customers.";
        if (self.items.length < 1) {
          message = "No Billable Customer Yet.";
        }
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success!",
          html: `<p class="title">${message}</p>`,
          type: "warning",
          confirmButtonText: "Back"
        });
      } catch (errors) {
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Validation Error!",
          html:
            '<p class="title">Please Pick a Date Started and Date Ended!</p>',
          type: "warning",
          confirmButtonText: "Back"
        });
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

