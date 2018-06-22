<template>
  <main-layout>
    <v-layout 
      row 
      wrap
      pa-5
      ma-5
    >
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="amber lighten-4">fa-users</v-icon> Customers: {{ stats.customers }}
            <br>
            <span class="caption">(Active Customer)</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="brown lighten-3">location_city</v-icon> Warehouse  : {{ stats.warehouse }}
            <br>
            <span class="caption">(Dsg Needs Activation)</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="teal lighten-4">receipt</v-icon> Receiving: {{ stats.receiving }}
            <br>
            <span class="caption">(DSG  Activated)</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="red accent-1">broken_image</v-icon> Damaged Items: {{ stats.damaged }}
            <br>
            <span class="caption">(Needs Repair)</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="blue lighten-5">fa-question-circle</v-icon> Unknown Clients: {{ stats.unknown }}
            <br>
            <span class="caption">(Needs Identification)</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex 
        xs12 
        md4 
        text-xs-center>
        <v-card 
          color="blue-grey white--text" 
          class="ma-1" 
          height="110px">
          <v-card-text class="title pa-5">
            <v-icon 
              large 
              color="indigo lighten-4">fa-truck</v-icon> Undelivered: {{ stats.undelivered }}
            <br>
            <span class="caption">(Available For Delivery)</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";

export default {
  components: {
    MainLayout
  },
  data: () => ({
    stats: {
      customers: null,
      warehouse: null,
      receiving: null,
      damaged: null,
      unknown: null,
      undelivered: null
    }
  }),
  mounted() {
    this.getStats();
  },
  methods: {
    getStats() {
      let self = this;
      axios.get(route("api.dashboard.getStats")).then(response => {
        self.stats = response.data.data;
      });
    }
  }
};
</script>
