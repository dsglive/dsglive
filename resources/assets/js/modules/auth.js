import Vue from "vue";
import swal from "sweetalert2";

const state = {
  me: null,
  isAuthenticated: false
};

const getters = {
  getMe: state => state.me,
  isAuthenticated: () => vm.$auth.check()
};

const actions = {
  /* Tested Working */
  /* form : name, email ,password, password_confirmation */
  async register({ commit, dispatch }, form) {
    form.busy = true;
    form.clear();
    try {
      await vm.$auth
        .register({
          data: form
        })
        .then(response => {
          const registeredModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          registeredModal({
            title: "Congrats!!!",
            html: `<p class="title">You Have Successfully Registered!</p>`,
            type: "success",
            confirmButtonText: "Close",
            footer:
              '<p style="color:blue;" class="subheading">You may Logged In Now.</p>'
          });
        });

      form.busy = false;
    } catch ({ response }) {
      if (response.status === 400) {
        const registerModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        registerModal({
          title: "Bad Request! " + response.status + " ERROR",
          html: `<p class="title">${response.data.message}</p>`,
          type: "warning",
          confirmButtonText: "Ok",
          footer:
            '<a href="/login" style="color:blue;" class="subheading">Already Have An Account?</a>'
        });
      }
      if (response.status === 422) {
        form.errors.set(response.data.errors);
      }
      form.busy = false;
    }
  },
  /* Tested Working */
  /* form : username ,password */
  async login({ commit, dispatch }, form) {
    form.busy = true;
    form.clear();
    try {
      await vm.$auth
        .login({
          data: form
        })
        .then(response => {
          commit("isAuthenticated", {
            isAuthenticated: vm.$auth.check()
          });
          vm.$auth.user(response.data.data);
          commit("setMe", vm.$auth.user());
        });

      form.busy = false;
      vm.$router.push({ name: "dashboard" });
    } catch ({ response }) {
      if (response.status === 400) {
        const loginModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        loginModal({
          title: "Bad Request! " + response.status + " ERROR",
          html: '<p class="title">' + response.data.message + "</p>",
          type: "warning",
          confirmButtonText: "Ok",
          footer:
            '<a href="/support" style="color:red;" class="subheading">Forgot Your Password? Contact Support</a>'
        });
      }
      if (response.status === 422) {
        form.errors.set(response.data.errors);
      }

      form.busy = false;
    }
  },
  /* form : name,email ,provider(fb),provider_user_id(fb_id) */
  async socialauth({ commit, dispatch }, form) {
    form.busy = true;
    try {
      await App.post(route("api.auth.social"), form).then(() => {
        commit("isAuthenticated", {
          isAuthenticated: vm.$auth.check()
        });
      });

      await dispatch("fetchMe");
      form.busy = false;

      vm.$router.push({ name: "dashboard" });
    } catch ({ errors, message }) {
      form.errors.set(errors);
      form.busy = false;
    }
  },
  /* Tested Working */
  /* Remove Access Token Cookie */
  async logout({ commit }, form) {
    form.busy = true;
    try {
      await vm.$auth
        .logout({
          // make api call
          makeRequest: true
        })
        .then(() => {
          commit("isAuthenticated", {
            isAuthenticated: vm.$auth.check()
          });
          commit("setMe", null);
        });
      form.busy = false;
      vm.$router.push({ name: "home" });
    } catch ({ response }) {
      if (response.status >= 500) {
        const logoutModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        logoutModal({
          title: "Server Error: " + response.status,
          html: `<p class="title">${response.data.message}</p>`,
          type: "warning",
          confirmButtonText: "Ok",
          footer: `<a href="/support" style="color:red;" class="subheading">Contact Your System Administrator</a>`
        });
      }
      form.busy = false;
    }
  },
  /* Tested Working */
  /* Get User Profile , Roles and Permissions */
  async fetchMe({ commit }) {
    try {
      const payload = await axios.post(route("api.@me"));
      commit("setMe", payload.data.data);
    } catch ({ errors, message }) {
      if (errors) {
        console.log(errors);
      }
      if (message) {
        console.log(message);
      }
    }
  },
  /* Tested Working */
  /* form : username ,password, password_confirmation, token */
  async passwordreset({ commit, dispatch }, form) {
    form.busy = true;
    try {
      await App.post(route("api.auth.reset-password"), form).then(() => {
        commit("isAuthenticated", {
          isAuthenticated: vm.$auth.check()
        });
        form.busy = false;
      });
      await dispatch("fetchMe");
    } catch ({ errors, message }) {
      form.errors.set(errors);
      form.busy = false;
    }
  }
};

const mutations = {
  setMe: (state, payload) => {
    state.me = payload;
  },
  isAuthenticated: (state, payload) => {
    state.isAuthenticated = payload.isAuthenticated;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
