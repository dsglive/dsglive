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
        <v-toolbar-title class="text-xs-center white--text">Registration Page</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no User Account Login Yet Redirect to Authentication Page -->
          <v-btn 
            flat 
            color="white" 
            @click.native="goHome()"
          >
            <v-icon>fa-home</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text style="padding-top:100px;">
        <v-container fluid>
          <form @submit.prevent="register()">
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  v-validate="'required|max:255|min:6|alpha_dash'"
                  v-model="form.username"
                  :error-messages="errorMessages('username')"
                  :class="{ 'error--text': hasErrors('username') }"
                  class="primary--text"
                  name="username"
                  label="Username"
                  data-vv-name="username"
                  counter="255"
                  prepend-icon="fa-user"
                />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  v-validate="'required|email'"
                  v-model="form.email"
                  :error-messages="errorMessages('email')"
                  :class="{ 'error--text': hasErrors('email') }"
                  class="primary--text"
                  name="email"
                  label="Email"
                  data-vv-name="email"
                  prepend-icon="email"
                  type="email"
                  counter="255"
                />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  v-validate="'required|min:6|confirmed:confirmation'"
                  v-model="form.password"
                  :append-icon="icon"
                  :type="!password_visible ? 'password' : 'text'"
                  :error-messages="errorMessages('password')"
                  :class="{ 'error--text': hasErrors('password') }"
                  class="primary--text"
                  name="password"
                  label="Password"
                  data-vv-name="password"
                  prepend-icon="fa-key"
                  counter="255"
                  @click:append="() => (password_visible = !password_visible)"
                />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  ref="confirmation"
                  v-model="form.password_confirmation"
                  :append-icon="icon"
                  :type="!password_visible ? 'password' : 'text'"
                  :error-messages="errorMessages('password_confirmation')"
                  :class="{ 'error--text': hasErrors('password_confirmation') }"
                  class="primary--text"
                  name="password_confirmation"
                  label="Confirm Password"
                  prepend-icon="fa-copy"
                  counter="255"
                  @click:append="() => (password_visible = !password_visible)"
                />
              </v-flex>
            </v-layout>
            <v-flex 
              xs12 
              sm12 
              md4 
              offset-md4 
              lg4 
              offset-lg4 
              xl4 
              offset-xl4
            >
              <v-btn 
                :loading="form.busy" 
                :disabled="errors.any()" 
                :class="{primary: !form.busy, error: form.busy}" 
                type="submit" 
                block
              >
                Register
              </v-btn>
              <v-btn 
                block 
                flat 
                class="white--text" 
                color="teal lighten-2" 
                @click.native="goToLogin()"
              >
                Already Have An Account? Go Login
              </v-btn>
            </v-flex>
          </form>
        </v-container>

      </v-card-text>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");
import { Form } from "vform";

export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  data: () => ({
    form: new Form({
      email: null,
      password: null,
      username: null,
      password_confirmation: null,
      role: null
    }),
    password_visible: false
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  mounted() {
    let self = this;
    /* Make Sure We Only Load Registration Page If Not Authenticated */
    self.form.role = "customer";
  },
  methods: {
    ...mapActions({
      submit: "register"
    }),
    goHome() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "home" }));
    },
    goToLogin() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "login" }));
    },
    redirectBack() {
      let self = this;
      return self.$nextTick(() => self.$router.go(-1));
    },
    register() {
      let self = this;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.submit(self.form);
      }
    }
  }
};
</script>
