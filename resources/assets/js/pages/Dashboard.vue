<template>
  <main-layout>
    <admin-dash-panel v-if="$auth.check(['admin','warehouse'])"/>
    <customer-dash-panel v-if="$auth.check('customer')"/>
  </main-layout>
</template>
<script>
import MainLayout from "Layouts/Main.vue";
import AdminDashPanel from "Components/dashboard/AdminDashPanel";
import CustomerDashPanel from "Components/dashboard/CustomerDashPanel";

export default {
  components: {
    MainLayout,
    AdminDashPanel,
    CustomerDashPanel
    // add here also panels for customer and warehouse type
  }
};
</script>
