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
            <v-flex 
              xs12 
              class="white"
              d-flex>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                block 
                color="primary" 
                dark
                flat
                @click="generateInvoice()">
                Generate Invoice
                <v-icon
                  right
                  color="primary" 
                >
                  schedule
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex 
              xs12 
              d-flex>
              <v-flex class="xs6 white">
                <v-btn 
                  v-if="selected.length > 0"
                  :disabled="!$auth.check('admin')" 
                  block 
                  color="blue darken-4" 
                  dark
                  flat
                  @click="massActivate">
                  <v-icon
                    large
                    color="blue darken-4" 
                  >
                    link
                  </v-icon>
                  Activate Selected
                </v-btn>
              </v-flex>
              <v-flex class="xs6 white">
                <v-btn 
                  v-if="selected.length > 0"
                  :disabled="!$auth.check('admin')" 
                  block 
                  flat
                  color="error" 
                  dark
                  @click="massDeactivate">
                  <v-icon
                    large
                    color="error" 
                  >
                    link_off
                  </v-icon>
                  Deactivate Selected
                </v-btn>
              </v-flex>
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
        expand
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
              {{ props.item.id }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.customer_name }}
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
            <td class="title text-xs-left accent--text">
              {{ props.item.weekly_total }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.total_balance }}
            </td>
            <td class="title text-xs-center">
              <v-flex class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
                  light 
                  flat 
                  icon 
                  @click="props.expanded = !props.expanded"
                >
                  <v-icon v-if="!props.expanded">fa-expand</v-icon>
                  <v-icon v-if="props.expanded">fa-compress</v-icon>
                </v-btn>
              </v-flex>
              <v-flex class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="blue" 
                  @click="viewInvoice(props.item)"
                >
                  <v-icon>fa-eye</v-icon>
                </v-btn>
              </v-flex>
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
        <!-- Expand Section -->
        <template 
          slot="expand" 
          slot-scope="props"
        >
          <v-container fluid>
            <v-card 
              light 
              flat 
              text-xs-center
            >
              <v-card-media
                class="white--text blue-grey"
                height="75px"
              >
                <v-container 
                  fill-height 
                  fluid
                >
                  <v-layout fill-height>
                    <v-flex 
                      xs12 
                      align-end 
                      flexbox
                    >
                      <v-avatar text-xs-left>
                        <img 
                          :src="props.item.avatar" 
                          :alt="props.item.name"
                        >
                      </v-avatar>
                      <span class="headline">{{ props.item.name }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <v-container fluid>
                  
                  <p 
                    class="title accent--text"
                  >
                    Account Details
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.username"
                        label="Username"
                        prepend-icon="fa-at"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        :value="props.item.company_name"
                        label="Company Name"
                        light
                        readonly
                        prepend-icon="domain"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.email"
                        label="Email"
                        prepend-icon="fa-envelope"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.phone"
                        label="Phone"
                        light
                        readonly
                        prepend-icon="phone"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.first_name"
                        label="First Name"
                        light
                        readonly
                        prepend-icon="person"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.last_name"
                        label="Last Name"
                        light
                        readonly
                        prepend-icon="people"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.address_1"
                        label="Address 1"
                        light
                        readonly
                        prepend-icon="looks_one"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.address_2"
                        label="Address 2"
                        light
                        readonly
                        prepend-icon="looks_two"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.city"
                        label="City"
                        light
                        readonly
                        prepend-icon="location_city"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.state"
                        label="State"
                        light
                        readonly
                        prepend-icon="map"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.zip"
                        label="Zip"
                        light
                        readonly
                        prepend-icon="markunread_mailbox"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                    >
                      <v-switch
                        v-model="props.item.active"
                        :label="getStatus(props.item.active)"
                        readonly
                      />
                    </v-flex>
                    
                  </v-layout>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <v-textarea
                        v-model="props.item.notes"
                        color="primary"
                        readonly
                      >
                        <div slot="label">
                          <span class="title">Notes: </span>
                        </div>
                      </v-textarea>
                    </v-flex>
                  </v-layout>

                </v-container>
              </v-card-title>

            </v-card>
          </v-container>
        </template>
        <!-- No Data Section -->
        <template slot="no-data">
          <v-alert 
            :value="true" 
            color="blue-grey" 
            icon="warning">
            No Invoice Generated Yet!
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="generateInvoice">
              Generate Invoice
              <v-icon
                right
                color="primary" 
              >
                schedule
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
      { text: "ID", value: "id", align: "left", sortable: true },
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
      {
        text: "Week Total",
        value: "weekly_total",
        align: "left",
        sortable: true
      },
      {
        text: "Total Balance",
        value: "total_balance",
        align: "left",
        sortable: true
      },
      { text: "Actions", value: "actions", align: "right", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    toggleForm: new Form({
      toggle: false,
      invoice_id: null
    }),
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
  mounted() {
    let self = this;
    self.generateInvoice();
  },
  methods: {
    async generateInvoice() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.invoice.generate"),
          self.form
        );
        self.items = payload.data.data;
        self.form = new Form({
          date_started: "",
          date_ended: ""
        });
      } catch ({ errors, message }) {
        if (errors) {
          self.form.errors.set(errors);
        }
        if (message) {
        }
        self.form.busy = false;
      }
    },
    viewInvoice(invoice) {
      vm.$router.push({
        name: "view-invoice",
        params: { id: `${invoice.id}` }
      });
    },
    toggleStatus(invoice) {
      let self = this;
      self.toggleForm.toggle = invoice.active;
      self.toggleForm.invoice_id = invoice.id;
      axios
        .post(route("api.invoice.toggleStatus"), self.toggleForm)
        .then(response => {
          console.log(response.data);
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
        });
    },
    getStatus(status) {
      if (status) {
        return "Active";
      } else {
        return "Inactive";
      }
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

