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
        <v-toolbar-title class="text-xs-center white--text">Edit Shipper</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no Shipper Account Login Yet Redirect to Authentication Page -->
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
            prepend-icon="fa-ship"
            data-vv-name="name"
          />
        </v-flex>
        <v-flex 
          class="md8 
          offset-md2">
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
          <v-text-field
            v-validate="{ required: true, email: true }"
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
            v-validate="{ required: true }"
            v-model="form.phone"
            :error-messages="errorMessages('phone')"
            :class="{ 'error--text': hasErrors('phone') }"
            label="Phone"
            prepend-icon="phone"
            data-vv-name="phone"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.address_1"
            :error-messages="errorMessages('address_1')"
            :class="{ 'error--text': hasErrors('address_1') }"
            label="Address 1"
            prepend-icon="looks_one"
            data-vv-name="address_1"
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
            v-validate="{ required: true }"
            v-model="form.city"
            :error-messages="errorMessages('city')"
            :class="{ 'error--text': hasErrors('city') }"
            label="City"
            prepend-icon="location_city"
            data-vv-name="city"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.state"
            :error-messages="errorMessages('state')"
            :class="{ 'error--text': hasErrors('state') }"
            label="State"
            prepend-icon="map"
            data-vv-name="state"
          />
        </v-flex>
        <v-flex 
          xs12 
          md8 
          offset-md2
        >
          <v-text-field
            v-validate="{ required: true }"
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
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
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
    }),
  }),
  mounted() {
    let self = this;
    self.fetchShipper();
  },
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
          self.updateShipper();
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
    updateShipper() {
      let self = this;
      let id = self.id;
      self.form.busy = true;

      self.form
        .post(route("api.shipper.update", { id }), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Shipper Updated!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "shippers" }));
        })
        .catch(errors => {});
    },
    async fetchShipper() {
      let id = this.id;
      let self = this;
      try {
        const payload = await axios.get(route("api.shipper.edit", { id }));
        self.form.name = payload.data.data.name;
        self.form.active = payload.data.data.active;
        self.form.email = payload.data.data.email;
        self.form.phone = payload.data.data.phone;
        self.form.address_1 = payload.data.data.address_1;
        self.form.address_2 = payload.data.data.address_2;
        self.form.city = payload.data.data.city;
        self.form.state = payload.data.data.state;
        self.form.zip = payload.data.data.zip;
        self.form.country = payload.data.data.country;
        self.form.notes = payload.data.data.notes;
        self.form.password = '',
        self.form.password_confirmation = ''
      } catch ({ errors, message }) {
        if (errors) {
          console.log("fetchShipper:errors", errors);
        }
        if (message) {
          console.log("fetchShipper:error-message", message);
        }
      }
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "shippers" }));
    }
  }
};
</script>
