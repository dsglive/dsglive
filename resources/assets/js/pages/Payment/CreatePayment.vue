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
        <v-toolbar-title class="text-xs-center white--text">Create New Payment</v-toolbar-title>
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
            v-model="form.user_id"
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
          <v-dialog
            ref="date_paid"
            v-model="date_paid_modal"
            :return-value.sync="form.date_paid"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="form.date_paid"
              label="Date Paid"
              prepend-icon="event_available"
              style="margin-top:26px;"
              readonly
            />
            <v-date-picker 
              v-model="form.date_paid" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_paid_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_paid.save(form.date_paid)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          xs12 
          lg3
          offset-lg1

        >
          <v-text-field
            v-validate="{ required: true}"
            v-model="form.transaction_id"
            :error-messages="errorMessages('transaction_id')"
            :class="{ 'error--text': hasErrors('transaction_id') }"
            light
            label="Transaction No."
            prepend-icon="receipt"
            data-vv-name="transaction_id"
            hint="Reference No. ie.: Paypal Transaction Number Or Invoice No."
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12 
          lg3
        >
          <v-text-field
            v-validate="{ required: true}"
            v-model="form.type"
            :error-messages="errorMessages('type')"
            :class="{ 'error--text': hasErrors('type') }"
            light
            label="Payment Type"
            prepend-icon="credit_card"
            data-vv-name="type"
            hint="ie.: Check,Cash,Credit Card etc"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12 
          lg4
        >
          <v-text-field
            v-validate="{ required: true,decimal:2, min_value:0 }"
            v-model="form.amount"
            :error-messages="errorMessages('amount')"
            :class="{ 'error--text': hasErrors('amount') }"
            light
            label="Amount Paid"
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
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
      user_id: null,
      transaction_id:null,
      date_paid: null,
      amount: null,
      type: null,
      notes: null
    }),
    date_paid_modal: false,
    customers: []
  }),
  watch: {
    customers: {
      handler: function(newValue) {},
      deep: true
    }
  },
  mounted() {
    this.getInitialData();
    this.form.date_paid = moment().format("YYYY-MM-DD");
  },
  methods: {
    getInitialData() {
      axios.get(route("api.payment.getCustomers")).then(response => {
        console.log("customers", response.data.data);
        this.customers = response.data.data;
      });
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.createPayment();
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
    createPayment() {
      let self = this;
      self.form.busy = true;
      self.form
        .post(route("api.payment.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Payment Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "payments" }));
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
      self.$nextTick(() => self.$router.push({ name: "payments" }));
    }
  }
};
</script>
