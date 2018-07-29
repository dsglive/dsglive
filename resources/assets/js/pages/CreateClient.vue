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
        <v-toolbar-title class="text-xs-center white--text">Client Creation Page</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no Client Account Login Yet Redirect to Authentication Page -->
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
            label="Client Name"
            prepend-icon="fa-user"
            data-vv-name="name"
          />
        </v-flex>
        <!-- <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-switch
            v-model="form.active"
            :label="getStatus(form.active)"
          />
        </v-flex> -->
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ email: true }"
            v-model="form.email"
            :error-messages="errorMessages('email')"
            :class="{ 'error--text': hasErrors('email') }"
            label="Email"
            prepend-icon="mail"
            data-vv-name="email"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-model="form.phone"
            label="Phone"
            prepend-icon="phone"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-model="form.address_1"
            label="Address 1"
            prepend-icon="looks_one"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-model="form.address_2"
            label="Address 2"
            prepend-icon="looks_two"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-model="form.city"
            label="City"
            prepend-icon="location_city"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-model="form.state"
            label="State"
            prepend-icon="map"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ regex: /^\d{5}(?:[-\s]\d{4})?$/ }"
            v-model="form.zip"
            :error-messages="errorMessages('zip')"
            :class="{ 'error--text': hasErrors('zip') }"
            label="Zip"
            prepend-icon="markunread_mailbox"
            data-vv-name="zip"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-textarea
            v-model="form.notes"
            color="teal"
          >
            <div slot="label">
              Notes <small>(optional)</small>
            </div>
          </v-textarea>
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
      active: false,
      email: null,
      phone: null,
      address_1: null,
      address_2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      notes: null
    }),
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
          self.createClient();
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
    createClient() {
      let self = this;
      self.form.busy = true;

      self.form
        .post(route("api.client.create"))
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Client Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "clients" }));
        })
        .catch(errors => {});
    },
    resetForm() {
      let self = this;
      self.form = new Form({
        active: false,
        name: null,
        email: null,
        phone: null,
        address_1: null,
        address_2: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        notes: null
      });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "clients" }));
    }
  }
};
</script>
