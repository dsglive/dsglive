<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.width <= 1264 && true"
    fixed
    class="blue-grey"
    hide-overlay
    app
  >
    <v-list 
      dense 
      class="blue-grey">
      <!-- V-For Links From Menu -->
      <!-- Individual Link (Custom Additional) -->
      <v-link 
        title="Home" 
        href="/" 
        icon="fa-home"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        :href="'/support'" 
        title="Support" 
        icon="message"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Expandable Group Links from Group Link -->
      <v-subheader class="white--text">Members Area</v-subheader>
      <!-- Admin Only Accessible -->
      <v-link 
        v-if="$auth.check('admin')"
        title="Users" 
        href="/users" 
        icon="supervised_user_circle"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Shippers" 
        href="/shippers" 
        icon="fa-ship"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      
      <v-link 
        v-if="$auth.check('admin')"
        title="Rates" 
        href="/rates" 
        icon="attach_money"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Bins" 
        href="/bins" 
        icon="view_module"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Receiving" 
        href="/receiving" 
        icon="receipt"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Collapsible Menu -->
      <inventory-links/>
      <v-link 
        v-if="$auth.check('admin')"
        title="Logistics" 
        href="/logistics" 
        icon="fa-sitemap"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Invoicing" 
        href="/invoicing" 
        icon="fa-money"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Warehouse Type Account -->
      <v-link 
        v-if="$auth.check(['warehouse'])"
        title="Warehouse"
        href="/warehouse"
        icon="location_city"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Customer Account Type -->
      <v-link 
        v-if="$auth.check(['customer'])"
        title="Clients"
        href="/clients"
        icon="business_center"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- All User Types -->
      <v-link 
        v-if="isAuthenticated"
        title="Dashboard"
        href="/dashboard" 
        icon="fa-tachometer"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="isAuthenticated"
        title="Settings" 
        href="/settings" 
        icon="fa-cogs"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="isAuthenticated"
        title="Logout" 
        href="/logout"
        icon="power_settings_new"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Guest Links -->
      <v-link 
        v-if="!isAuthenticated" 
        title="Login" 
        href="/login'"
        icon="fa-key"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="!isAuthenticated"
        title="Register"
        href="/register" 
        icon="fa-user-plus"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import VLink from "../components/VLink.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("auth");
import InventoryLinks from "../components/InventoryLinks"

export default {
  components: {
    VLink,
    InventoryLinks
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapState({
      isAuthenticated: "isAuthenticated"
    })
  },
  created() {
    let self = this;
    switch (self.$vuetify.breakpoint.name) {
      case "xs":
        return (self.drawer = false);
      case "sm":
        return (self.drawer = false);
      case "md":
        return (self.drawer = true);
      case "lg":
        return (self.drawer = true);
      case "xl":
        return (self.drawer = true);
    }
  },
  mounted() {
    let self = this;
    Bus.$on("toggleDrawer", function() {
      self.drawer = !self.drawer;
    });
  }
};
</script>
