import "~/bootstrap";
import "babel-polyfill";
import "vuetify/src/stylus/app.styl";
import "~/plugins";
import store from "~/store";
import App from "~/App.vue";
import router from "./router";
import Vue from "vue";


Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
})

window.vm = new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
