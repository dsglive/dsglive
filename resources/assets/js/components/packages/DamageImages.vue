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
        <v-toolbar-title class="white--text">Item # {{ id }} Damaged Images</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <!-- add Here Images -->
      <v-container
        v-if="images.length > 0"
        fluid 
      >
        <v-layout 
          row 
          wrap
        >
          <v-flex 
            v-for="image in images" 
            :key="image"
            xs12
            md4
            px-2
            py-2
          >
            <v-card-media
              :src="image"
              height="250px"
              contain
              @click="viewFullImage(image)"
            />
          </v-flex>

        </v-layout>
      </v-container>
      <v-container 
        v-else 
        fluid>
        <v-alert
          :value="true"
          type="info"
          color="amber"
          icon="warning"
          transition="scale-transition"
          outline
        >
          No Uploaded Damaged Images For This Item
        </v-alert>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  data: () => ({
    modal: false
  }),
  mounted() {
    let self = this;
    Bus.$on(`view-damaged-package-${this.id}-images`, () => {
      self.modal = true;
    });
  },
  methods: {
    close() {
      this.modal = false;
    },
    viewFullImage(image){
        window.open(image)
    }
  }
};
</script>

<style>
</style>