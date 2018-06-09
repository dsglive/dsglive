import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import swal from "sweetalert2";
Vue.use(VueAxios, axios);

window.axios = axios;
Vue.axios.defaults.baseURL = 'http://dsglive.test';

// axios.defaults.baseURL = 'http://dsglive.test/api';

window.axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        const modal1 = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        modal1({
          title: "OOPS! " + error.response.status + " ERROR",
          html: '<p class="title">' + error.response.data.message + "</p>",
          type: "warning",
          confirmButtonText: "Ok",
          footer:
            '<a href="/support" style="color:red;">Account Not Yet Active? Contact Support</a>'
        });
        //! If You Wawnt to Override the LocalStorage Name
        //! check provider.js for the `${storageNamespace}.${tokenPrefix}_token`
        window.localStorage.removeItem("vue-authenticate.vueauth_token");
        vm.$store.commit("auth/setMe", null);
        vm.$store.commit("auth/isAuthenticated", false);
        vm.$router.push({ name: "login" });
        break;
      case 403:
        const modal2 = swal.mixin({
          confirmButtonClass: "v-btn blue-grey subheading white--text",
          buttonsStyling: false
        });
        modal2({
          title: "Forbidden! " + error.response.status + " ERROR",
          html: '<p class="title">' + error.response.data.message + "</p>",
          type: "error",
          confirmButtonText: "BACK",
          footer:
            '<p style="color:red;">Your Account Is Restricted To Do This Action</p>'
        });
        break;
        case 429:
        const modal3 = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        modal3({
          title: "OOPS! " + error.response.status + " ERROR",
          html: '<p class="title">' + error.response.data.message + "</p>",
          type: "warning",
          confirmButtonText: "Ok",
          footer:
            '<p style="color:red;">Slow Down Cowboy! You Making Request Too Fast!</p>'
        });
        break;
    }
    return Promise.reject(error);
  }
);
