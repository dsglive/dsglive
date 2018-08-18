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
        <v-toolbar-title class="text-xs-center white--text">Edit Miscellaneous ID# {{ id }}</v-toolbar-title>
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
          lg5
          offset-lg1
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
          lg5
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
          lg5
          offset-lg1
          style="margin-top:-10px;"
        >
          <v-dialog
            ref="invoice_date"
            v-model="invoice_date_modal"
            :return-value.sync="form.invoice_date"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="form.invoice_date"
              label="Delivery Date"
              prepend-icon="event_available"
              style="margin-top:26px;"
              readonly
            />
            <v-date-picker 
              v-model="form.invoice_date" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="invoice_date_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.invoice_date.save(form.invoice_date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          xs12
          lg5
        >
          <v-text-field
            v-validate="{ required: true,decimal:4, min_value:0 }"
            v-model="form.amount"
            :error-messages="errorMessages('amount')"
            :class="{ 'error--text': hasErrors('amount') }"
            light
            label="Amount"
            prepend-icon="attach_money"
            suffix="USD"
            data-vv-name="amount"
          />
        </v-flex>
        <!-- DROP OFF ADDRESS -->
        
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
      client_id: null,
      client_name: null,
      customer_id: null,
      customer_name: null,
      invoice_date: null,
      amount: null,
      notes: null
    }),
    invoice_date_modal: false,
    customers: [],
    clients: [],
    unknownClient: {
      active: false,
      address_1: null,
      address_2: null,
      city: null,
      id: 1,
      name: "Unknown Client",
      state: null,
      zip: null
    }
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
    this.fetchCustomersClient();
    this.fetchMisc();
  },
  methods: {
    fetchCustomersClient() {
      axios.get(route("api.misc.getCustomers")).then(response => {
        console.log("customers", response.data.data);
        this.customers = response.data.data;
      });
    },
    fetchMisc() {
      let self = this;
      axios.get(route("api.misc.edit", { misc: self.id })).then(response => {
        console.log(response.data);
        this.form.client_id = response.data.data.client_id;
        this.form.customer_id = response.data.data.customer_id;
        this.form.customer_name = response.data.data.customer_name;
        this.form.invoice_date = response.data.data.invoice_date;
        this.form.amount = response.data.data.amount;
        this.form.notes = response.data.data.notes;
        setTimeout(() => {
          this.form.client_name = response.data.data.client_name;
        }, 1000);
      });
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.updateMisc();
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
    updateMisc() {
      let self = this;
      self.form.busy = true;
      self.form
        .post(route("api.misc.update", { misc: self.id }), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Miscellaneous Has Been updated!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "misc" }));
        })
        .catch(errors => {
          console.log(errors.response.data);

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
      self.$nextTick(() => self.$router.push({ name: "misc" }));
    }
  }
};
</script>
