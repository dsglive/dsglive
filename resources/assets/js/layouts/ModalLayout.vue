<template>
  <v-app 
    v-cloak 
    standalone
  >
    <v-content class="white">
      <v-container 
        transition="slide-x-transition" 
        fluid 
        class="pa-0 ma-0"
      >
        <v-card :flat="true">
          <slot name="toolbar"/>
          <slot/>
        </v-card>
      </v-container>
      <slot name="footer"/>
    </v-content>
  </v-app>
</template>

<style>
.v-messages__message {
  color: #e57373;
}
</style>

