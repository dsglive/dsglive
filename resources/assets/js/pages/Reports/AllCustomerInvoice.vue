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
            @click="generateWeeklyReport">
            Generate Customer Weekly Invoice
            <v-icon
              right
              color="blue darken-4"
            >
              assessment
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
            <v-flex 
              xs12
            >
              <v-btn 
                v-if="items.length>0"
                style="margin-top:25px;" 
                block 
                color="indigo darken-2" 
                dark
                flat
                @click="viewPDF">
                View All Customer Invoice PDF
                <v-icon
                  right
                  color="blue darken-4"
                >
                  picture_as_pdf
                </v-icon>
              </v-btn>
            </v-flex>   
          </v-layout>
        </v-flex>
        
      </v-layout>
      <!-- User Data Table -->
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        item-key="customer_name"
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
              {{ props.item.customer_name }}
            </td>

            <td class="title text-xs-left accent--text">
              <span v-if="props.item.receiving_fee">${{ props.item.receiving_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.storage_fee">${{ props.item.storage_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.delivery_fee">${{ props.item.delivery_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.misc_fee">${{ props.item.misc_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.total">${{ props.item.total.toFixed(2) }}</span>
              <span v-else>$0.00</span>
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
              @click="generateWeeklyReport">
              Generate Customer Weekly Invoice
              <v-icon
                right
              >
                picture_as_pdf
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
    pagination: {
      sortBy: "name",
      rowPerPage: "all"
    },
    search: "",
    form: new Form({
      date_started: "",
      date_ended: ""
    }),
    date_started_modal: "",
    date_ended_modal: "",
    domain: window.location.hostname
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    }
  },
  methods: {
      viewPDF(){
          let url = `${window.location.protocol}//${this.domain}/pdf/total-all-customer-invoice?date_started=${this.form.date_started}&date_ended=${this.form.date_ended}`
          let win = window.open(url, '_blank');
              win.focus();
      },
    async generateWeeklyReport() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.total-all-customer-invoice"),
          self.form
        );
        let items = payload.data.customers;
        self.items = items
        let message = `All Customer Invoice Report Generated!`;
        if (self.items.length < 1) {
          message = "No Invoice For that Billing Cycle.";
        }
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success!",
          html: `<p class="title">${message}</p>`,
          type: "success",
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

