<template>
  <v-app 
    v-cloak 
    id="inspire"
  >
    <left-side-bar/>
    <app-nav-bar/>
    <v-content
      transition="slide-x-transition" 
      fluid
      pa-0
      ma-0
      class="white"
    >
      <slot/>
    </v-content>
  </v-app>
</template>

<script>
import AppNavBar from "../partials/AppNavBar.vue";
import LeftSideBar from "../partials/LeftSideBar.vue";

export default {
  components: {
    AppNavBar,
    LeftSideBar
  }
};
</script>
