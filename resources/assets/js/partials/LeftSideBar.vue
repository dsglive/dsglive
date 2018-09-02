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
      <!-- Expandable Group Links from Group Link -->
      <v-subheader 
        v-if="$auth.check('admin')" 
        class="white--text">Admin Area</v-subheader>
      <v-subheader 
        v-if="$auth.check('warehouse')" 
        class="white--text">Warehouse Area</v-subheader>
      <v-subheader 
        v-if="$auth.check('customer')" 
        class="white--text">Customer Area</v-subheader>
      <v-link 
        v-if="$auth.check(['admin','customer','warehouse'])"
        title="Dashboard"
        href="/dashboard"
        icon="fa-tachometer"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check(['admin'])"
        title="Tutorials"
        href="/tutorials"
        icon="movie"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
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
      <!-- Warehouse Type Account -->
      <v-link 
        v-if="$auth.check(['warehouse','admin'])"
        title="Warehouse"
        href="/warehouse"
        icon="location_city"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check(['admin','warehouse'])"
        title="Receiving" 
        href="/receiving" 
        icon="receipt"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check(['admin','warehouse'])"
        title="Archived" 
        href="/archived/dsg" 
        icon="archive"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Collapsible Menu -->
      <inventory-links/>
      <v-link 
        v-if="$auth.check('admin')"
        title="Tickets" 
        href="/tickets" 
        icon="confirmation_number"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Miscellaneous" 
        href="/miscellaneous" 
        icon="note_add"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check('admin')"
        title="Payments" 
        href="/payments" 
        icon="attach_money"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <invoice-links/>
      
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
        v-if="$auth.check()"
        title="Settings" 
        href="/settings" 
        icon="fa-cogs"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="$auth.check()"
        title="Logout" 
        href="/logout"
        icon="power_settings_new"
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
import InventoryLinks from "../components/InventoryLinks";
import InvoiceLinks from "../components/InvoiceLinks";
export default {
  components: {
    VLink,
    InventoryLinks,
    InvoiceLinks
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
