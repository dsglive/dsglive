import { Store } from "vuex";
import createPersistedState from "vuex-persistedstate";
/* Add Below All Your Modules */
import auth from "Modules/auth";

export default new Store({
  modules: {
    auth,
    /* add other modules here */
  },

  plugins: [
    createPersistedState({
      /* Check All Options You Can Pass At this Link */
      /* https://github.com/robinvdvleuten/vuex-persistedstate#createpersistedstateoptions */
      key: "vuex-ls",
      // Declare All The State We Want to Persist (use dot anotation for object.key)
      paths: ["auth"]
    })
  ]
});
