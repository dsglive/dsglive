<template>
  <v-layout 
    row 
    wrap
    pa-5
    ma-5
  >
    <v-flex 
      v-if="!getMe.email"
      xs12
    >
      <v-alert 
        :value="true" 
        color="warning" 
        outline
        icon="warning">
        Please Update Your Account Email To Received Reports, Billings , and Updates. Go To
        <v-btn 
          color="blue"
          dark
          @click="$router.push({name:'settings'})">
          Profile
        </v-btn>
        <br>
        
      </v-alert>
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
            color="teal lighten-4">receipt</v-icon> Unpaid: ${{ stats.balance }}
          <br>
          <span class="caption">(Unsettled Invoice)</span>
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
        <v-card-text 
          class="title pa-5" 
          style="cursor:pointer;"
          @click="$router.push({name:'clients'})">
          <v-icon 
            large 
            color="amber lighten-4"
          >
            fa-users
          </v-icon> 
          Clients: {{ stats.clients }}
          <br>
          <span class="caption">(Total Clients)</span>
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
        <v-card-text 
          class="title pa-5"
          style="cursor:pointer;"
          @click="$router.push({name:'unknown-client'})"
        >
          <v-icon 
            large 
            color="blue lighten-5">fa-question-circle</v-icon> Unknown Clients: {{ stats.unknown }}
          <br>
          <span class="caption">(Needs Verification)</span>
        </v-card-text>
      </v-card>
    </v-flex>
    <!-- COMMENTED 
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
            color="brown lighten-3">location_city</v-icon> Receiving  : {{ stats.receiving }}
          <br>
          <span class="caption">(Actived DSG)</span>
        </v-card-text>
      </v-card>
    </v-flex>
    -->
    <v-flex 
      xs12 
      md4 
      text-xs-center>
      <v-card 
        color="blue-grey white--text" 
        class="ma-1" 
        height="110px">
        <v-card-text 
          class="title pa-5"
          style="cursor:pointer;"
          @click="$router.push({name:'undelivered-reports'})"
        >
          <v-icon 
            large 
            color="indigo lighten-4">fa-truck</v-icon> Undelivered: {{ stats.undelivered }}
          <br>
          <span class="caption">(Available For Delivery)</span>
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
        <v-card-text 
          class="title pa-5"
          style="cursor:pointer;"
          @click="$router.push({name:'damaged-reports'})"
        >
          <v-icon 
            large 
            color="red accent-1">broken_image</v-icon> Damaged: {{ stats.damaged }}
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
        <v-card-text 
          class="title pa-5"
          style="cursor:pointer;"
          @click="$router.push({name:'repaired-reports'})"
        >
          <v-icon 
            large 
            color="red accent-1">build</v-icon> Repaired: {{ stats.repaired }}
          <br>
          <span class="caption">(Done Repair)</span>
        </v-card-text>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    stats: {
      clients: null,
      receiving: null,
      damaged: null,
      unknown: null,
      undelivered: null,
      balance: null,
      repaired: null
    }
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    })
  },
  mounted() {
    this.getStats();
  },
  methods: {
    getStats() {
      let self = this;
      axios.post(route("api.dashboard.customer.getStats")).then(response => {
        self.stats = response.data.data;
        self.stats.balance = Math.ceil(self.stats.balance);
      });
    }
  }
};
</script>

<style>
</style>
