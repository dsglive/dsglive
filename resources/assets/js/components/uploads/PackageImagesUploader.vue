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
          @click="closeGalleryModal">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="white--text">Upload Package Images</v-toolbar-title>
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
import uploads from 'Components/Uploads'

export default {
    components: {
        uploads
    },
    data: () => ({
        single: false,
        modal: false,
        fileKey: 'package_images'

    }),
    computed: {
        postUrl () {
            return route('api.package.uploadPackageImages')
        }
    },
    mounted () {
        let self = this
        Bus.$on('upload-package-images', () => {
            self.modal = true
        })
    },
    methods: {
        closeGalleryModal () {
            this.modal = false
        },
        uploadGalleryImages () {
            console.log('uploading gallery images')
        }
    }
}
</script>

<style>

</style>