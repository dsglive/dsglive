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
        <v-text-field
          v-model="form.username"
          label="Username"
          prepend-icon="alternate_email"
          readonly
          disabled
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="'required|min:6'"
          v-model="form.old_password"
          :append-icon="icon"
          :append-icon-cb="() => (password_visible = !password_visible)"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('old_password')"
          :class="{ 'error--text': hasErrors('old_password') }"
          class="primary--text"
          name="password"
          label="Password"
          data-vv-name="old_password"
          prepend-icon="security"
          counter="255"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="'required|min:6|confirmed:confirmation'"
          v-model="form.password"
          :append-icon="icon"
          :append-icon-cb="() => (password_visible = !password_visible)"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('password')"
          :class="{ 'error--text': hasErrors('password') }"
          class="primary--text"
          name="password"
          label="Password"
          data-vv-name="password"
          prepend-icon="fiber_new"
          counter="255"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="'required|min:6'"
          ref="confirmation"
          v-model="form.password_confirmation"
          :append-icon="icon"
          :append-icon-cb="() => (password_visible = !password_visible)"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('password_confirmation')"
          :class="{ 'error--text': hasErrors('password_confirmation') }"
          class="primary--text"
          name="password_confirmation"
          label="Confirm New Password"
          data-vv-name="password_confirmation"
          prepend-icon="done_all"
          counter="255"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-btn 
          :loading="form.busy"
          :disabled="errors.any()"
          :class="{primary: !form.busy, warning: form.busy}"
          block
          color="accent" 
          @click="changePassword()"
        >
          Change Password <v-icon right>fa-send</v-icon>
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
      username: null,
      old_password: null,
      password: null,
      password_confirmation: null
    }),
    password_visible: false
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    }),
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  mounted() {
    let self = this;
    self.form.username = self.getMe.username;
  },
  methods: {
    changePassword() {
      console.log("changing password");
      let self = this;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.form.busy = true;
        self.form
          .post(route("api.user.updateAccount"))
          .then(({ data }) => {
            console.log(data.message);
            const accountModal = swal.mixin({
              confirmButtonClass: "v-btn success  subheading white--text",
              buttonsStyling: false
            });
            accountModal({
              title: "Success!",
              html: '<p class="title">' + data.message + "</p>",
              type: "success",
              confirmButtonText: "Ok"
            });
            self.resetForm();
          })
          .catch(({ response }) => {
            self.form.errors.set(response.data.errors);
          });
      }
    },
    resetForm() {
      let self = this;
      self.form.old_password = null;
      self.form.password = null;
      self.form.password_confirmation = null;
      self.form.clear();
      self.errors.clear();
    }
  }
};
</script>
