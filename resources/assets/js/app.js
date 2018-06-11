import "~/bootstrap";
import "babel-polyfill";
import "vuetify/src/stylus/app.styl";
import "~/plugins";
import store from "~/store";
import App from "~/App.vue";
import router from "./router";
import Vue from "vue";

// Configure Vue Auth Options Here
// https://github.com/websanova/vue-auth/blob/master/docs/Options.md
Vue.use(require("@websanova/vue-auth"), {
  auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
  http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
  router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
  rolesVar: "roles",
  fetchData: { url: "@me", method: "POST", enabled: true },
  tokenStore: ["localStorage"],
  tokenDefaultName: "auth_token",
  notFoundRedirect: { path: "/404.html" },
  forbiddenRedirect: { path: "/403.html" },
  // override fetch user and manually do it on our store
  loginData: {
    fetchUser: false
  },
  // we dont need to refresh token since we got non expiring token
  refreshData:{
    enabled: false
  }
});

window.vm = new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
