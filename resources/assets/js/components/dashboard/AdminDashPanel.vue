<template>
  <v-layout 
    row 
    wrap
    px-5
    mx-5
  >
    <v-flex xs12>
      <v-alert
        :value="true"
        type="info"
        class="text-xs-center blue-grey--text"
        my-0
        py-0
        mx-3
        px-3
      >
        Note: Press Ctrl or CMD + F5 To Do Hard Page Refresh If You Experience Blank Page Unresponsive Due to Old Cached Of Assets (Only In Development Stage)
      </v-alert>
    </v-flex>
    <v-flex 
      xs12 
      md4 
      text-xs-center>
      <v-card 
        color="blue-grey white--text" 
        class="ma-1" 
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'unknown-customer'})"
        >
          <v-icon 
            x-large
            color="pink lighten-4"
          >
            supervised_user_circle
          </v-icon> 
          <v-subheader class="white--text">Unknown Customer</v-subheader>
          {{ stats.unknown_customer }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'unknown-client'})"
        >
          <v-icon 
            x-large
            color="cyan lighten-3"
          >
            person_pin
          </v-icon> 
          <v-subheader class="white--text">Unknown Client</v-subheader>
          {{ stats.unknown_client }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'unknown-shipper'})"
        >
          <v-icon 
            x-large
            color="indigo lighten-5"
          >
            directions_boat
          </v-icon> 
          <v-subheader class="white--text">Unknown Shipper</v-subheader>
          {{ stats.unknown_shipper }}
          <br>
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'warehouse'})"
        >
          <v-icon 
            x-large
            color="brown lighten-3"
          >
            domain
          </v-icon> 
          <v-subheader class="white--text">Dsg Warehouse</v-subheader>
          {{ stats.dsg_warehouse }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'dsg'})"
        >
          <v-icon 
            x-large
            color="teal lighten-3"
          >
            receipt
          </v-icon> 
          <v-subheader class="white--text">Dsg Receiving</v-subheader>
          {{ stats.dsg_receiving }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'dsg'})"
        >
          <v-icon 
            x-large
            color="blue-grey lighten-5"
          >
            archive
          </v-icon> 
          <v-subheader class="white--text">Archived DSG</v-subheader>
          {{ stats.dsg_archived }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'undelivered-reports'})"
        >
          <v-icon 
            x-large
            color="amber lighten-2"
          >
            fa-truck
          </v-icon> 
          <v-subheader class="white--text">Undelivered Items</v-subheader>
          {{ stats.undelivered }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'damaged-reports'})"
        >
          <v-icon 
            x-large
            color="red accent-4"
          >
            broken_image
          </v-icon> 
          <v-subheader class="white--text">Damaged Items</v-subheader>
          {{ stats.damaged_packages }}
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
        height="150px">
        <v-card-text 
          class="title" 
          style="margin-left:auto;margin-right:auto;width:150px;cursor:pointer;"
          @click="$router.push({name:'repaired-reports'})"
        >
          <v-icon 
            x-large
            color="blue lighten-2"
          >
            build
          </v-icon> 
          <v-subheader class="white--text">Repaired Items</v-subheader>
          {{ stats.repaired_packages }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    stats: {
      dsg_warehouse: null,
      dsg_receiving: null,
      dsg_archived: null,
      repaired_packages: null,
      damaged_packages: null,
      unknown_customer: null,
      unknown_client: null,
      undelivered: null
    }
  }),
  mounted() {
    this.getStats();
  },
  methods: {
    getStats() {
      let self = this;
      axios.post(route("api.dashboard.admin.getStats")).then(response => {
        self.stats = response.data.data;
      });
    }
  }
};
</script>

<style>
</style>
