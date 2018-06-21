<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar class="primary">
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Welcome To DSG Live</v-toolbar-title>
        <v-spacer/>
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
                  :error-messages="errorMessages('username')"
                  :class="{ 'error--text': hasErrors('username') }"
                  class="primary--text"
                  name="username"
                  label="Type Your Username"
                  data-vv-name="username"
                  prepend-icon="fa-at"
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
                  v-validate="'required|min:6'"
                  v-model="form.password"
                  :append-icon="icon"
                  :type="!password_visible ? 'password' : 'text'"
                  :error-messages="errorMessages('password')"
                  :class="{ 'error--text': hasErrors('password') }"
                  class="primary--text"
                  name="password"
                  label="Enter your password"
                  hint="At least 6 characters"
                  data-vv-name="password"
                  counter="255"
                  prepend-icon="fa-key"
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
              text-xs-center
            >
              <v-btn 
                :loading="form.busy" 
                :disabled="errors.any()"
                block 
                type="submit" 
                color="primary"
              >
                Sign In 
                <v-icon right>fa-sign-in</v-icon>
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
import { Form } from "vform";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");

export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
      username: "",
      password: ""
    }),
    password_visible: false
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  methods: {
    login() {
      let self = this;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.submit(self.form);
      }
    },
    /* act  as method we can execute , from our vuex store auth module */
    ...mapActions({
      /* rename store.auth action login to submit */
      submit: "login"
    })
  }
};
</script>
