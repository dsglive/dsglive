<template>
  <v-container 
    fluid 
    grid-list-md
  >
    <v-layout 
      row
      wrap
    >
      <!-- left side -->
      <v-flex 
        d-flex 
        xs12 
        sm12 
        md6 
        lg6
      >
        <v-layout 
          row 
          wrap
        >
          <!-- Pioneer Message -->
          <v-flex 
            d-flex 
            xs12 
            text-xs-center
          >
            <v-card 
              flat 
              light
            >
              <v-card-title >
                <v-card-text v-html="title"/>
              </v-card-title>
              <!-- Product Description HTML -->
              <v-card-text 
                class="grey--text headline text-xs-left" 
                v-text="subtitle"
              />
              <!-- Product Description HTML -->
            </v-card>
          </v-flex>
          <!-- Pioneer Message -->
        </v-layout>
      </v-flex>
      <!-- left side -->
      <!-- right side -->
      <v-flex 
        d-flex 
        xs12 
        sm12
        md6 
        lg6
      >
        <v-layout 
          row
          wrap
        >
          <!-- Pioneer Image -->
          <v-flex
            d-flex 
            xs12 
            text-xs-right
          >
            <v-card 
              flat 
              light
            >

              <!-- Image Placeholder -->

              <!-- Image Placeholder -->
              <!-- Image -->
              <v-container>
                <div 
                  v-if="!current_image" 
                  style="background-color:#d3d3d3;height:322px;width:483px;margin: auto;width: 50%;"
                />
                <v-card-media
                  v-else
                  :src="current_image"
                  height="400px"
                  contain
                />
              </v-container>

              <!-- Image -->
              <!-- Gallery -->
              <v-container 
                v-if="photos !== null && photos !== undefined && photos.length > 0" 
                fill-height 
                fluid
              >
                <v-layout fill-height>
                  <v-flex 
                    xs12 
                    align-end 
                    flexbox
                  >
                    <div
                      v-for="(image,key) in photos"
                      :key="key"
                      :style="{ backgroundImage: 'url(' + image + ')', width: imageHeight, height: imageWidth }"
                      class="image"
                      @click="setCurrentImage(key)"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
              <!-- Gallery -->
            </v-card>
          </v-flex>
          <!-- Pioneer Image -->
        </v-layout>
      </v-flex>
      <!-- right side -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title:
      '<h1 class="accent--text">DSG Live</br> <strong class="primary--text">About Our Company</strong></h1>',
    subtitle:
      "As a company, we are constantly redefining our objectives, expectations, and limits. Our people are our lifeblood. We strive to create an atmosphere that appreciates, inspires, and enables everyone to transcend their potentials",
    current_image: "/svg/handle-with-care.svg",
    photos: []
  }),
  computed: {
    imageHeight() {
      let height = window.innerWidth * 0.07;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return `${height}px`;
        case "sm":
          return `${height}px`;
        case "md":
          return `${height}px`;
        case "lg":
          return `${height}px`;
        case "xl":
          return `${height}px`;
      }
    },
    imageWidth() {
      let width = window.innerWidth * 0.07;

      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return `${width}px`;
        case "sm":
          return `${width}px`;
        case "md":
          return `${width}px`;
        case "lg":
          return `${width}px`;
        case "xl":
          return `${width}px`;
      }
    }
  },
  methods: {
    setCurrentImage(index) {
      this.current_image = this.photos[index];
    }
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
