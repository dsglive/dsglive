<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar 
        fixed 
        app 
        class="primary"
      >
        <v-btn 
          flat 
          icon 
          color="white"
          @click.native="redirectBack()"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Update Ticket# {{ id }}</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn
            :loading="form.busy" 
            :disabled="errors.any() || form.busy"
            flat 
            color="white" 
            @click.native="submit()"
          >
            Save
            <v-icon right>save</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout 
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-subheader 
            class="indigo--text" 
            style="margin-left:-15px;"
          >
            What Type Of Ticket Is This?
          </v-subheader>
          <v-radio-group 
            v-model="form.type" 
            style="margin-top:-15px;"
          >
            <v-radio
              value="delivery_ticket"
              label="Delivery Ticket"
            />
            <v-radio
              value="field_transfer"
              label="Field Transfer"
            />
          </v-radio-group>
        </v-flex>
        <v-flex 
          xs12
          lg3
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
            chips
            prepend-icon="supervised_user_circle"
            data-vv-name="customer"
          />
        </v-flex>

        <v-flex 
          xs12
          lg3
        >
          <v-autocomplete
            v-validate="'required'"
            v-model="form.client_name"
            :items="clients"
            :error-messages="errorMessages('client')"
            :class="{ 'error--text': hasErrors('client') }"
            item-text="name"
            item-value="name"
            chips
            light
            dense
            required
            label="Choose Client or Type Name"
            prepend-icon="fa-users"
            data-vv-name="client"
          />
        </v-flex>

        <v-flex 
          xs12 
          lg2>
          <v-dialog
            ref="date_delivered"
            v-model="date_delivered_modal"
            :return-value.sync="form.date_delivered"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="form.date_delivered"
              label="Delivery Date"
              prepend-icon="event_available"
              style="margin-top:26px;"
              readonly
            />
            <v-date-picker 
              v-model="form.date_delivered" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_delivered_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_delivered.save(form.date_delivered)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-validate="{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/}"
            v-model="form.start_time"
            :error-messages="errorMessages('start_time')"
            :class="{ 'error--text': hasErrors('start_time') }"
            light
            label="Start Time"
            prepend-icon="timer"
            data-vv-name="start_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ regex:/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9])|(24:?00))$/,min_value:form.start_time}"
            v-model="form.end_time"
            :error-messages="errorMessages('end_time')"
            :class="{ 'error--text': hasErrors('end_time') }"
            light
            label="End Time"
            prepend-icon="timer"
            data-vv-name="end_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.prep_time"
            :error-messages="errorMessages('prep_time')"
            :class="{ 'error--text': hasErrors('prep_time') }"
            light
            label="Prep Time"
            prepend-icon="access_time"
            data-vv-name="prep_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.travel_time"
            :error-messages="errorMessages('travel_time')"
            :class="{ 'error--text': hasErrors('travel_time') }"
            light
            label="Travel Time"
            prepend-icon="access_time"
            data-vv-name="travel_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.clean_up_time"
            :error-messages="errorMessages('clean_up_time')"
            :class="{ 'error--text': hasErrors('clean_up_time') }"
            light
            label="Clean Up Time"
            prepend-icon="access_time"
            data-vv-name="clean_up_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.total_time"
            :error-messages="errorMessages('total_time')"
            :class="{ 'error--text': hasErrors('total_time') }"
            light
            readonly
            disabled
            label="Total Time"
            prepend-icon="av_timer"
            data-vv-name="total_time"
            hint="Total No. Of Hours"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.rate"
            :error-messages="errorMessages('rate')"
            :class="{ 'error--text': hasErrors('rate') }"
            light
            label="Rate"
            prepend-icon="fa-money"
            data-vv-name="rate"
            hint="Delivery Charge Rate"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.surcharge"
            :error-messages="errorMessages('surcharge')"
            :class="{ 'error--text': hasErrors('surcharge') }"
            light
            label="Surchage"
            prepend-icon="money"
            append-icon="fa-percent"
            data-vv-name="surcharge"
            hint="Percentage ie. 20% = 20"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-validate="{ decimal:4, min_value:0 }"
            v-model="form.total_charges"
            :error-messages="errorMessages('total_charges')"
            :class="{ 'error--text': hasErrors('total_charges') }"
            light
            readonly
            disabled
            label="Total Charges"
            prepend-icon="attach_money"
            suffix="USD"
            data-vv-name="total_charges"
            hint="Delivery Fee"
            persistent-hint
          />
        </v-flex>
        <!-- DROP OFF ADDRESS -->
        
      </v-layout>

      <v-layout 
        v-if="form.type==='field_transfer'"
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs12 
          lg10
          offset-lg1>
          <v-alert
            :value="true"
            type="info"
            color="secondary"
            class="text-xs-center"
            my-0
            py-0
            mx-3
            px-3
          >
            Pick Up Address
          </v-alert>
        </v-flex>
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-model="form.pu_address_1"
            light
            label="Address 1"
            prepend-icon="looks_one"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.pu_address_2"
            light
            label="Address 2"
            prepend-icon="looks_two"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.pu_city"
            light
            label="City"
            prepend-icon="location_city"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.pu_state"
            light
            label="State"
            prepend-icon="map"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ regex: /^\d{5}(?:[-\s]\d{4})?$/ }"
            v-model="form.pu_zip"
            :error-messages="errorMessages('pu_zip')"
            :class="{ 'error--text': hasErrors('pu_zip') }"
            light
            label="Zip"
            prepend-icon="markunread_mailbox"
            data-vv-name="pu_zip"
          />
        </v-flex>
      </v-layout>
      <v-layout 
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs12
          lg10
          offset-lg1>
          <span class="text-xs-center title"/>
          <v-alert
            :value="true"
            type="info"
            color="secondary"
            class="text-xs-center"
            my-0
            py-0
            mx-3
            px-3
          >
            Drop Off Address
          </v-alert>
        </v-flex>
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-model="form.do_address_1"
            light
            label="Address 1"
            prepend-icon="looks_one"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.do_address_2"
            light
            label="Address 2"
            prepend-icon="looks_two"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.do_city"
            light
            label="City"
            prepend-icon="location_city"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="form.do_state"
            light
            label="State"
            prepend-icon="map"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ regex: /^\d{5}(?:[-\s]\d{4})?$/ }"
            v-model="form.do_zip"
            :error-messages="errorMessages('do_zip')"
            :class="{ 'error--text': hasErrors('do_zip') }"
            light
            label="Zip"
            prepend-icon="markunread_mailbox"
            data-vv-name="do_zip"
          />
        </v-flex>
      </v-layout>
      <v-layout
        v-if="form.type==='delivery_ticket'"
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs10 
          offset-xs1
        >
          <v-subheader
          >
            Items To Be Delivered ({{ packages.length }})
          </v-subheader>
          <v-btn 
            v-if="packages.length > 0"
            color="secondary"
            @click="toggleAll"
          >
            <span v-if="selected.length ===0">Select All</span>
            <span v-else>Unselect All</span>
          </v-btn>
          <v-autocomplete
            v-validate="'required'"
            :items="packages"
            v-model="form.packages"
            :error-messages="errorMessages('packages')"
            :class="{ 'error--text': hasErrors('packages') }"
            :item-text="getText"
            item-value="id"
            hint="Choose Packages To Be Delivered"
            persistent-hint
            no-data-text="No Client's Packages For Delivery"
            required
            max-height="auto"
            light
            outline
            tags
            chips
            deletable-chips
            full-width
            multiple
            multi-line
            dense
            auto
            hide-selected
            small-chips
            clearable
            data-vv-name="packages"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs10 
          offset-xs1
        >
          <v-subheader
          >
            Notes:
          </v-subheader>

          <v-textarea
            v-model="form.notes"
            counter
            maxlength="255"
            full-width
            outline
            hint="(Optional)"
            persistent-hint
          />
        </v-flex>
      </v-layout>
    </v-card>

  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
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
    packages: [],
    delivered_packages: [],
    choosen_packages: [],
    customer_id: null,
    client_id: null,
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
  }),
  watch: {
    customers: {
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
          self.packages = [];
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
              this.getClientPackages();
              this.setDropOffAddress(client);
            }
          }
        } else {
          self.form.client_id = client_id;
          self.form.client_name = newName;
          self.packages = [];
        }
      },
      deep: false
    },
    "form.packages": {
      handler: function(newValue) {
        if (
          this.client_id === this.form.client_id &&
          this.client_name === this.form.client_name
        ) {
          this.choosen_packages = newValue;
        }
      },
      deep: false
    },
    "form.start_time": {
      handler: function(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.end_time": {
      handler: function(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.prep_time": {
      handler: function(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.travel_time": {
      handler: function(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.clean_up_time": {
      handler: function(newName) {
        this.debouncedComputeTotal();
      },
      deep: false
    },
    "form.rate": {
      handler: function(newName) {
        this.computeTotalCharge();
      },
      deep: false
    },
    "form.surcharge": {
      handler: function(newName) {
        this.computeTotalCharge();
      },
      deep: false
    }
  },
  created() {
    this.getInitialData();
    this.fetchTicket();
    this.debouncedComputeTotal = _.debounce(this.computeTotal, 2000);
  },
  methods: {
    toggleAll() {
      let self = this;
      if (this.selected.length === 0) {
        this.selected = this.packages.map(item => {
          return item.id;
        });
      } else {
        this.selected = [];
      }
      this.form.packages = this.selected;
    },
    setDropOffAddress(client) {
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
    fetchTicket() {
      let id = this.id;
      let self = this;
      axios.get(route("api.logistics.edit", { id })).then(response => {
        let ticket = response.data.data;
        self.form.type = ticket.type;
        self.form.client_id = ticket.client_id;
        self.form.client_name = ticket.client_name;
        self.form.customer_id = ticket.customer_id;
        self.form.customer_name = ticket.customer_name;
        self.form.date_delivered = ticket.date_delivered;
        self.form.start_time = ticket.start_time;
        self.form.end_time = ticket.end_time;
        self.form.prep_time = ticket.prep_time;
        self.form.travel_time = ticket.travel_time;
        self.form.clean_up_time = ticket.clean_up_time;
        self.form.total_time = ticket.total_time;
        self.form.rate = ticket.rate ? ticket.rate : 0;
        self.form.surcharge = ticket.surcharge;
        self.form.total_charges = ticket.total_charges;
        self.form.notes = ticket.notes;
        self.form.do_address_1 = ticket.do_address_1;
        self.form.do_address_2 = ticket.do_address_2;
        self.form.do_city = ticket.do_city;
        self.form.do_state = ticket.do_state;
        self.form.do_zip = ticket.do_zip;
        self.form.pu_address_1 = ticket.pu_address_1;
        self.form.pu_address_2 = ticket.pu_address_2;
        self.form.pu_city = ticket.pu_city;
        self.form.pu_state = ticket.pu_state;
        self.form.pu_zip = ticket.pu_zip;

        self.delivered_packages = ticket.items;
        self.packages = ticket.items;

        self.client_name = ticket.client_name;
        self.client_id = ticket.client_id;

        self.choosen_packages = ticket.packages;
        self.form.packages = ticket.packages;
      });
      setTimeout(() => {
        self.form.client_name = self.client_name;
      }, 1000);
    },
    workingTime() {
      let start_time = this.form.start_time;
      let end_time = this.form.end_time;
      let start_hr = 0;
      let start_min = 0;
      let end_hr = 0;
      let end_min = 0;
      if (start_time !== null) {
        let start_count = (start_time.match(/\d/g) || []).length;
        if (start_count > 1) {
          start_hr = parseInt(start_time.substring(0, 2));
        }
        if (start_count > 3) {
          start_min = parseInt(start_time.substring(2, 4));
        }
      }
      if (end_time !== null) {
        let end_count = (end_time.match(/\d/g) || []).length;
        if (end_count > 1) {
          end_hr = parseInt(end_time.substring(0, 2));
        }
        if (end_count > 3) {
          end_min = parseInt(end_time.substring(2, 4));
        }
      }
      let hr_diff = 0;
      let min_diff = 0;
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
    computeTotal() {
      let working_time = this.workingTime();
      let prep_time = this.form.prep_time ? this.form.prep_time : 0;
      let travel_time = this.form.travel_time ? this.form.travel_time : 0;
      let clean_up_time = this.form.clean_up_time ? this.form.clean_up_time : 0;
      console.log("working_time", parseFloat(working_time));
      console.log("prep_time", parseFloat(prep_time));
      console.log("travel_time", parseFloat(travel_time));
      console.log("clean_up_time", parseFloat(clean_up_time));
      let total = 0;
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
    computeTotalCharge() {
      let total_time = parseFloat(this.form.total_time);
      let rate = parseFloat(this.form.rate);
      let surcharge = parseFloat(this.form.surcharge) / 100;
      if (this.form.surcharge === null || this.form.surcharge === "") {
        surcharge = 0;
      }
      let total_rate = total_time * rate;
      let total = 0;
      total = total_rate + surcharge * total_rate;
      this.form.total_charges = total.toFixed(4);
    },
    getText: function getText(item) {
      return `DSG# ${item.dsg_id}|Style# ${item.style_no}|Description: ${
        item.description
      }`;
    },
    getInitialData() {
      axios.get(route("api.logistics.getInitialData")).then(response => {
        this.customers = response.data.data.customers;
      });
    },
    getClientPackages() {
      let self = this;
      axios
        .get(
          route("api.logistics.getClientPackages", {
            client: self.form.client_id
          })
        )
        .then(response => {
          let undelivered = response.data;
          if (
            self.client_id === self.form.client_id &&
            self.client_name === self.form.client_name
          ) {
            self.packages = undelivered.concat(self.delivered_packages);
            self.form.packages = self.choosen_packages;
          } else {
            self.packages = undelivered;
            self.form.packages = [];
          }
        });
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.updateLogistics();
        } else {
          const validationModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal({
            title: `Validation Error`,
            html: `<p class="title">Please Fix Form Errors</p>`,
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    updateLogistics() {
      let self = this;
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
      self.form
        .post(route("api.logistics.update", { logistic: self.id }), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Ticket Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "tickets" }));
        })
        .catch(errors => {
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
          const failedModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          failedModal({
            title: "Validation Error!",
            html: `<p class="title">Please Complete Form To Submit!</p>`,
            type: "error",
            confirmButtonText: "Ok"
          });
        });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "tickets" }));
    }
  }
};
</script>
