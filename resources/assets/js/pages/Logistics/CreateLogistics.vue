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
        <v-toolbar-title class="text-xs-center white--text">Create New DSG</v-toolbar-title>
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
        >
          <v-radio-group 
            v-model="form.type" 
            hint="What Type Of Ticket Is This?"
            persistent-hint
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
          <v-combobox
            v-validate="'required'"
            v-model="form.client_name"
            :items="clients"
            :error-messages="errorMessages('client')"
            :class="{ 'error--text': hasErrors('client') }"
            :error="form.client_id === null"
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
          lg4>
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
              readonly
            />
            <v-date-picker 
              v-model="form.date_delivered" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="delivery_date_modal = false">Cancel</v-btn>
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
        >
          <v-text-field
            v-validate="{ required: true }"
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
            v-validate="{ required: true }"
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
            v-validate="{ required: true }"
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
            v-validate="{ required: true }"
            v-model="form.travel_time"
            :error-messages="errorMessages('travel_time')"
            :class="{ 'error--text': hasErrors('travel_time') }"
            light
            label="Prep Time"
            prepend-icon="access_time"
            data-vv-name="travel_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
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
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.total_time"
            :error-messages="errorMessages('total_time')"
            :class="{ 'error--text': hasErrors('total_time') }"
            light
            label="Total Time"
            prepend-icon="av_timer"
            data-vv-name="total_time"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.rate"
            :error-messages="errorMessages('rate')"
            :class="{ 'error--text': hasErrors('rate') }"
            light
            label="Rate"
            prepend-icon="money"
            data-vv-name="rate"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.surchage"
            :error-messages="errorMessages('surchage')"
            :class="{ 'error--text': hasErrors('surchage') }"
            light
            label="Surchage"
            prepend-icon="fa-percent"
            data-vv-name="surchage"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.total_charges"
            :error-messages="errorMessages('total_charges')"
            :class="{ 'error--text': hasErrors('total_charges') }"
            light
            label="Total Charges"
            prepend-icon="attach_money"
            data-vv-name="total_charges"
          />
        </v-flex>
        <v-flex xs12>
          <v-textarea
            v-model="form.notes"
            label="Notes"
            counter
            maxlength="255"
            full-width
            single-line
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.pu_address_1"
            :error-messages="errorMessages('pu_address_1')"
            :class="{ 'error--text': hasErrors('pu_address_1') }"
            light
            label="Address 1"
            prepend-icon="looks_one"
            data-vv-name="pu_address_1"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.pu_address_2"
            :error-messages="errorMessages('pu_address_2')"
            :class="{ 'error--text': hasErrors('pu_address_2') }"
            light
            label="Address 2"
            prepend-icon="looks_two"
            data-vv-name="pu_address_2"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.pu_city"
            :error-messages="errorMessages('pu_city')"
            :class="{ 'error--text': hasErrors('pu_city') }"
            light
            label="City"
            prepend-icon="attach_money"
            data-vv-name="pu_city"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.pu_state"
            :error-messages="errorMessages('pu_state')"
            :class="{ 'error--text': hasErrors('pu_state') }"
            light
            label="State"
            prepend-icon="attach_money"
            data-vv-name="pu_state"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.pu_zip"
            :error-messages="errorMessages('pu_zip')"
            :class="{ 'error--text': hasErrors('pu_zip') }"
            light
            label="Zip"
            prepend-icon="map"
            data-vv-name="pu_zip"
          />
        </v-flex>
        <!-- DROP OFF ADDRESS -->
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.do_address_1"
            :error-messages="errorMessages('do_address_1')"
            :class="{ 'error--text': hasErrors('do_address_1') }"
            light
            label="Address 1"
            prepend-icon="looks_one"
            data-vv-name="do_address_1"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.do_address_2"
            :error-messages="errorMessages('do_address_2')"
            :class="{ 'error--text': hasErrors('do_address_2') }"
            light
            label="Address 2"
            prepend-icon="attach_money"
            data-vv-name="do_address_2"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.do_city"
            :error-messages="errorMessages('do_city')"
            :class="{ 'error--text': hasErrors('do_city') }"
            light
            label="State"
            prepend-icon="attach_money"
            data-vv-name="do_city"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.do_state"
            :error-messages="errorMessages('do_state')"
            :class="{ 'error--text': hasErrors('do_state') }"
            light
            label="State"
            prepend-icon="attach_money"
            data-vv-name="do_state"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.do_zip"
            :error-messages="errorMessages('do_zip')"
            :class="{ 'error--text': hasErrors('do_zip') }"
            light
            label="Zip"
            prepend-icon="map"
            data-vv-name="do_zip"
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
    ModalLayout,
  },
  mixins: [validationError],
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
      type: false,
      client_id: null,
      client_name: null,
      customer_id: null,
      customer_name: null,
      date_delivered: null,
      start_time: null,
      end_time: null,
      prep_time: null,
      travel_time: null,
      clean_up_time: null,
      total_time: null,
      rate: null,
      surchage: null,
      total_charges: null,
      notes: null,
      do_address_1: null,
      do_address_2: null,
      do_city:null,
      do_state:null,
      do_zip:null,
      pu_address_1: null,
      pu_address_2: null,
      pu_city:null,
      pu_state:null,
      pu_zip:null,
      packages: []
    }),
    date_delivered_modal: false,
    customers: [],
    clients: [],
    packages: [],
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
          self.form.customer_name = customer.name;
          self.form.client_name = null;
          self.form.client_id = null;
          customer_id = newValue;
          customer_name = customer.name;
        } else {
          self.clients = [];
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
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
      },
      deep: false
    },
  },
  mounted() {
    this.getInitialData();
    this.form.date_delivered = moment().format("YYYY-MM-DD");
  },
  methods: {
    getInitialData() {
      axios.get(route("api.logistics.getInitialData")).then(response => {
        this.customers = response.data.data.customers;
      });
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.createLogistics();
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
    createLogistics() {
      let self = this;
      self.form.busy = true;
      self.form
        .post(route("api.logistics.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">DSG Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "dsg" }));
        })
        .catch(errors => {
            console.log(errors.response.data)
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
      self.$nextTick(() => self.$router.push({ name: "logistics" }));
    }
  }
};
</script>
