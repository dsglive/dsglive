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
        <v-toolbar-title class="text-xs-center white--text">Customer Login Page</v-toolbar-title>
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
      <v-card-text style="padding-top:150px;">
        <v-container fluid>
          <form @submit.prevent="login()">
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
                  v-validate="'required|alpha_dash|min:6'"
                  v-model="form.username"
                  :error-messages="validationerrors.collect('username')"
                  :class="{ 'error--text': validationerrors.has('username') }"
                  class="primary--text"
                  name="username"
                  label="Type Your Username"
                  data-vv-name="username"
                  prepend-icon="fa-at"
                  counter="255"
                />
                <has-error 
                  :form="form" 
                  class="error--text pl-5" 
                  field="username"
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
                  v-validate="'required|min:6'"
                  v-model="form.password"
                  :append-icon="icon"
                  :append-icon-cb="() => (password_visible = !password_visible)"
                  :type="!password_visible ? 'password' : 'text'"
                  :error-messages="validationerrors.collect('password')"
                  class="primary--text"
                  name="password"
                  label="Enter your password"
                  hint="At least 6 characters"
                  data-vv-name="password"
                  counter="255"
                  prepend-icon="fa-key"
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
              text-xs-center
            >
              <v-btn 
                :loading="form.busy" 
                :disabled="validationerrors.any()" 
                block 
                type="submit" 
                color="primary"
              >
                Sign In 
                <v-icon right>fa-sign-in</v-icon>
              </v-btn>
            </v-flex>
          </form>
          <v-layout 
            row
            wrap
          >
            <v-flex 
              xs6 
              md2 
              offset-md4 
              pa-0
            >
              <v-btn 
                dark 
                block 
                color="secondary" 
                @click.native="goToRegister()"
              >
                No Account Yet?
              </v-btn>
            </v-flex>
            <v-flex 
              xs6 
              md2 
              pa-0
            >
              <v-btn 
                dark 
                block
                color="error" 
                @click.native="resetPassword()"
              >
                Forgot Password?
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>

      </v-card-text>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import { createNamespacedHelpers } from "vuex";
import { Form } from "vform";
const { mapActions, mapState } = createNamespacedHelpers("auth");

export default {
  components: {
    ModalLayout
  },
  data: () => ({
    form: new Form({
      username: "",
      password: ""
    }),
    password_visible: false
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    },
    ...mapState({
      isAuthenticated: "isAuthenticated"
    })
  },
  mounted() {
    let self = this;
    /* Make Sure We Only Load Login Page If Not Authenticated */
    if (self.isAuthenticated) {
      /* nextick make sure our modal wount be visible before redirect */
      return self.$nextTick(() => self.$router.go(-1));
    }
  },
  methods: {
    resetPassword() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "forgotpassword" }));
    },
    goHome() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "home" }));
    },
    goToRegister() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "register" }));
    },
    redirectBack() {
      let self = this;
      return self.$nextTick(() => self.$router.go(-1));
    },
    login() {
      let self = this;
      self.$validator.validateAll();
      if (!self.validationerrors.any()) {
        self.submit(self.form);
      }
    },
    ...mapActions({
      submit: "login"
    })
  }
};
</script>
