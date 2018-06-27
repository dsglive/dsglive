<template>
  <v-card flat>
    <v-layout 
      row 
      wrap
    >
      <v-flex 
        xs12
        md8 
        offset-md2
      >
        <v-alert 
          :value="true" 
          type="info"
          outline
          icon="fa-info-circle"
        >
          Note: This Will be Used as Default for Billing Details
        </v-alert>
        <v-text-field
          v-validate="{ required: true }"
          v-model="form.company_name"
          :error-messages="errorMessages('company_name')"
          :class="{ 'error--text': hasErrors('company_name') }"
          label="Company Name"
          prepend-icon="domain"
          data-vv-name="company_name"
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
          v-validate="{ required: true, regex: /^[a-zA-Z0-9 ]+$/ }"
          v-model="form.first_name"
          :error-messages="errorMessages('first_name')"
          :class="{ 'error--text': hasErrors('first_name') }"
          label="First Name"
          prepend-icon="person"
          data-vv-name="first_name"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: true, regex: /^[a-zA-Z0-9 ]+$/ }"
          v-model="form.last_name"
          :error-messages="errorMessages('last_name')"
          :class="{ 'error--text': hasErrors('last_name') }"
          label="Last Name"
          prepend-icon="people"
          data-vv-name="last_name"
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
        <v-btn 
          :loading="form.busy" 
          :disabled="errors.any() || form.busy || form.errors.any()" 
          block 
          color="accent"
          dark
          @click="updateProfile()"
        >
          Update Profile <v-icon right>fa-send</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("auth");

export default {
  mixins: [validationError],
  data: () => ({
    form: new Form({
      company_name: null,
      first_name: null,
      last_name: null,
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
    profile: {}
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    })
  },
  mounted() {
    let self = this;
    self.form.company_name = self.getMe.company_name;
    self.form.first_name = self.getMe.first_name;
    self.form.last_name = self.getMe.last_name;
    self.form.email = self.getMe.email;
    self.form.phone = self.getMe.phone;
    self.form.address_1 = self.getMe.address_1;
    self.form.address_2 = self.getMe.address_2;
    self.form.city = self.getMe.city;
    self.form.state = self.getMe.state;
    self.form.zip = self.getMe.zip;
    self.form.country = self.getMe.country;
    self.form.notes = self.getMe.notes;
  },
  methods: {
    ...mapMutations({
      setMe: "setMe"
    }),
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.updateProfile();
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
    async updateProfile() {
      let self = this;
      try {
        const payload = await axios.post(
          route("api.user.updateProfile"),
          self.form
        );
        self.$validator.reset();
        const successModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        successModal({
          title: "Success!",
          html: `<p class="title">Profile Updated!</p>`,
          type: "success",
          confirmButtonText: "Ok"
        });
        vm.$auth.user(payload.data.data);
        self.setMe(vm.$auth.user());
      } catch ({ errors, message }) {
        if (errors) {
          console.log("updateProfile:errors", errors);
        }
        if (message) {
          console.log("updateProfile:error-message", message);
        }
      }
    }
  }
};
</script>

<style>
</style>
