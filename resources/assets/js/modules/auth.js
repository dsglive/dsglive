import Vue from "vue";
import { VueAuthenticate } from "vue-authenticate";
import providers from "Services/providers";
import swal from "sweetalert2";
const vueAuth = new VueAuthenticate(Vue.prototype.$http, providers);

const state = {
  me: null,
  isAuthenticated: false
};

const getters = {
  getMe: state => state.me,
  isAuthenticated: () => vueAuth.isAuthenticated()
};

const actions = {
  /* Tested Working */
  /* form : name, email ,password, password_confirmation */
  async register({ commit, dispatch }, form) {
    form.busy = true;
    form.clear();
    try {
      await vueAuth.register(form).then(() => {
        commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
      });

      await dispatch("fetchMe");

      form.busy = false;
      vm.$router.push({ name: "dashboard" });
    } catch ({ response }) {
      if (response.status === 400) {
        const registerModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        registerModal({
          title: "Bad Request! " + response.status + " ERROR",
          html: '<p class="title">' + response.data.message + "</p>",
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
      await vueAuth.login(form).then(response => {
        commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
      });

      await dispatch("fetchMe");

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
            '<a href="/register" style="color:red;" class="subheading">No Account Yet? Register First</a>'
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
          isAuthenticated: vueAuth.isAuthenticated()
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
      await vueAuth.logout().then(() => {
        commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
        commit("setMe", null);
      });

      form.busy = false;
      vm.$router.push({ name: "home" });
    } catch ({ errors, message }) {
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
          isAuthenticated: vueAuth.isAuthenticated()
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
