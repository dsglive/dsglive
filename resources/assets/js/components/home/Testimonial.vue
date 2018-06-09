<template>
  <v-container fluid>
    <v-layout
      row 
      wrap
    >
      <v-flex xs12>
        <v-card
          flat 
          ligh
          t>
          <v-container fluid>
            <v-layout 
              row 
              wrap
            >
              <v-flex
                xs12 
                text-xs-center
              >
                <blockquote v-html="testimonial"/>
              </v-flex>
              <v-flex 
                xs12 
                text-xs-right
              >
                <v-chip color="accent">
                  <v-avatar>
                    <img 
                      :src="avatar" 
                      :alt="name"
                    >
                  </v-avatar>
                  <span 
                    class="white--text title" 
                    v-text="name"
                  />
                </v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    avatar: "/svg/employee-svgrepo-com.svg",
    name: "-Happy User",
    testimonial:
      '<h1 class="primary--text">Thumbs Up For DSG Live</h1><h1 class="accent--text"> <strong>Your Service Rocks!</strong></h1>'
  })
};
</script>
