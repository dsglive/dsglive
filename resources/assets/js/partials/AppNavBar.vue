<template>
  <v-toolbar 
    color="primary" 
    fixed 
    app
  >
    <v-toolbar-side-icon 
      class="white--text"
      @click.native.stop="toggleDrawer()"
    />
    <!-- Title -->
    <v-toolbar-title 
      v-if="extension" 
      slot="extension" 
      :class="$vuetify.breakpoint.width <= 1264 && 'pr-3'" 
      :style="$vuetify.breakpoint.width > 1264 && 'width: 300px'" 
      class="text-xs-center ml-0 pl-3"
    >
      <v-icon 
        v-if="showIcon" 
        class="ml-3 hidden-md-and-down accent"
      >
        {{ icon }}
      </v-icon>
      <span 
        class="hidden-md-and-down" 
      >
        <span class="white--text">{{ title }}</span>
      </span>
    </v-toolbar-title>
    <v-toolbar-title 
      v-else 
      class="text-xs-center"
    >
      <v-icon 
        v-if="showIcon" 
        class="ml-3 hidden-md-and-down accent"
      >
        {{ icon }}
      </v-icon>
      <span 
        class="hidden-md-and-down" 
      >
        <span class="white--text">{{ title }}</span>
      </span>
    </v-toolbar-title>
    <v-spacer/>
    <!-- center logo -->
    <img 
      v-if="showLogo" 
      :src="logo" 
      class="hidden-md-and-up" 
    >
    <v-spacer/>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    extension: false,
    showLogo: false,
    logo: "/img/logo.png",
    showIcon: false,
    title: "DSG Live"
  }),
  created() {
    /* Emit On a Child Component If You Want This To Be Visible */
    Bus.$on("header-extension-visible", visibility => {
      this.extension = visibility;
    });
  },
  methods: {
    toggleDrawer() {
      Bus.$emit("toggleDrawer");
    }
  }
};
</script>

<style>
</style>
