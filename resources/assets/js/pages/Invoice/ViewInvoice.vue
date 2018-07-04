<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar 
        fixed 
        app 
        class="primary"
      >
        <v-btn 
          flat 
          icon 
          color="white"
          @click.native="redirectBack()"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Viewing Invoice# {{ id }}</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      
    </v-card>

  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /* Always Declare Your Form Object */
    customer: {
      customer_id: null,
      receiving_fee: null,
      delivery_fee: null,
      storage_fee: null,
      misc_fee: null
    },
    clients: []
  }),
  watch: {
    clients: {
      handler: function(newValue) {},
      deep: true
    }
  },
  created() {
    this.fetchInvoice();
  },
  methods: {
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "invoices" }));
    },
    fetchInvoice() {
      let id = this.id;
      let self = this;
      axios.get(route("api.invoice.view", { id })).then(response => {
        let data = response.data;
        self.clients = data.clients
        self.customer = data.customer
        console.log("data", data);
      });
    }
  }
};
</script>
