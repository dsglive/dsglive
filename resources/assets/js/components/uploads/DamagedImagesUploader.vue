<template>
  <v-dialog 
    v-model="modal" 
    fullscreen 
    transition="dialog-bottom-transition">
    <v-card :light="true">
      <v-toolbar color="primary">
        <v-btn 
          icon 
          class="white--text" 
          @click="close">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="white--text">Upload Damaged Package Images</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <uploads 
        :single="single"
        :post-url="postUrl" 
        :file-key="fileKey"/>
    </v-card>
  </v-dialog>
</template>

<script>
import uploads from "Components/Uploads";

export default {
  components: {
    uploads
  },
  data: () => ({
    single: false,
    modal: false,
    fileKey: "damaged_images"
  }),
  computed: {
    postUrl() {
      return route("api.package.uploadDamageImage");
    }
  },
  mounted() {
    let self = this;
    Bus.$on("upload-damaged-images", () => {
      self.modal = true;
    });
  },
  methods: {
    close() {
      this.modal = false;
    },
  }
};
</script>

<style>
</style>