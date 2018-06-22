<template>
  <main-layout>
    <admin-dash-panel v-if="$auth.check('admin')"/>
  </main-layout>
</template>
<script>
import MainLayout from "Layouts/Main.vue";
import AdminDashPanel from "Partials/AdminDashPanel"
export default {
  components: {
    MainLayout,
    AdminDashPanel
    // add here also panels for customer and warehouse type
  },
};
</script>
