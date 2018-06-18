<template>
  <v-layout 
    row 
    wrap>
    <v-flex 
      xs12 
      md8 
      offset-md2
    >
      <v-text-field
        v-model="fileName"
        :append-icon="!!fileName ? 'fa-remove' : ''"
        :append-icon-cb="() => (removeImage())"
        name="filename"
        label="Package Image"
        prepend-icon="image"
        single-line
      />

    </v-flex>
    <v-flex xs2>
      <upload-button 
        :title="file_title" 
        :selected-callback="fileSelectedFunc"
      />
    </v-flex>
    <v-flex 
      xs12 
      md8 
      offset-md2
    >
      <!-- image preview -->
      <v-card-media
        v-if="file"
        :src="fileUrl"
        height="250px"
        contain
      />
    </v-flex>
  </v-layout>
    
</template>

<script>
import UploadButton from "Components/UploadButton";
export default {
  components: {
    UploadButton
  },
  data: () => ({
    file_title: "images",
    file: null,
    fileUrl: "",
    fileName: ""
  }),
  methods: {
    removeImage() {
      this.file = null;
      this.fileName = "";
      this.fileUrl = "";
    },
    fileSelectedFunc(file) {
      let self = this;
      this.fileName = file.name;
      this.file = file;
      let reader = new FileReader();
      reader.onload = function(event) {
        self.fileUrl = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style>
</style>
