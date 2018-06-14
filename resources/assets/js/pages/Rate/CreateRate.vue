<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar class="primary">
        <v-btn 
          flat 
          icon 
          color="white"
          @click.native="redirectBack()"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Rate Creation Page</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no Rate Account Login Yet Redirect to Authentication Page -->
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
      >
        <v-flex 
          xs12
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.name"
            :error-messages="errorMessages('name')"
            :class="{ 'error--text': hasErrors('name') }"
            label="Name"
            prepend-icon="fa-percent"
            data-vv-name="name"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.amount"
            :error-messages="errorMessages('amount')"
            :class="{ 'error--text': hasErrors('amount') }"
            label="Amount"
            prepend-icon="attach_money"
            data-vv-name="amount"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-autocomplete
            :items="types"
            v-model="form.type"
            :error-messages="errorMessages('type')"
            :class="{ 'error--text': hasErrors('type') }"
            color="blue-grey"
            light
            clearable
            label="Select Rate Type"
            required
            prepend-icon="fa-tags"
            data-vv-name="roles"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-switch
            v-model="form.active"
            :label="getStatus(form.active)"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-btn 
            :loading="form.busy" 
            :disabled="errors.any() || form.busy"
            block
            color="accent"
            @click="submit()"
          >
            Save <v-icon right>save</v-icon>
          </v-btn>
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
      name: null,
      amount: null,
      type: null,
      active: false,
    }),
    types:['handling','storage']
  }),
  methods: {
    getStatus(status) {
      if (status) {
        return "Status: Active";
      } else {
        return "Status: Inactive";
      }
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.createRate();
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
    createRate() {
      let self = this;
      self.form.busy = true;

      self.form
        .post(route("api.rate.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Rate Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "rates" }));
        })
        .catch(errors => {});
    },
    resetForm() {
      let self = this;
      self.form = new Form({
        name: null,
        amount: null,
        type: null,
        active: false,
      });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "rates" }));
    }
  }
};
</script>
