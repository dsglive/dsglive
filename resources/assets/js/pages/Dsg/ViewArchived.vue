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
        <v-toolbar-title class="text-xs-center white--text">Viewing Archived DSG# {{ id }}</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-layout 
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-model="form.customer_name"
            :error="form.customer_id === null || form.customer_id === 1001"
            :hint="customerHint"
            readonly
            label="Customer Name"
            prepend-icon="supervised_user_circle"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-model="form.client_name"
            :error="form.client_id === null || form.client_id === 1"
            :hint="clientHint"
            readonly
            label="Client Name"
            prepend-icon="fa-users"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-model="form.shipper_name"
            :error="form.shipper_id === null || form.shipper_id === 1"
            :hint="shipperHint"
            readonly
            label="Type Shipper Name"
            prepend-icon="fa-ship"
            persistent-hint
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-model="form.received_by_name"
            :error="form.received_by === null"
            readonly
            label="Received By"
            prepend-icon="how_to_reg"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-model="form.written_by_name"
            :error="form.written_by_name === null"
            readonly
            label="Written By"
            prepend-icon="local_library"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-model="form.inspected_by_name"
            :error="form.inspected_by_name === null"
            readonly
            label="Inspected By"
            prepend-icon="search"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-text-field
            v-model="form.located_by_name"
            :error="form.located_by_name === null"
            readonly
            label="Located By"
            prepend-icon="person_pin"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="po_no"
            :error="po_no === null"
            light
            readonly
            label="PO No."
            prepend-icon="bookmark"
            data-vv-name="po_no"
          />
        </v-flex>
        <v-flex 
          xs12 
          lg2>
          <v-text-field
            v-model="date_received"
            label="Date Received"
            prepend-icon="event_available"
            readonly
          />
        </v-flex>
        <v-flex 
          xs12 
          lg2>
          <v-text-field
            v-model="date_processed"
            label="Date Processed"
            prepend-icon="event_note"
            readonly
          />
        </v-flex>
        <v-flex 
          v-if="packages.length>0"
          xs12 
          lg2>
          <v-text-field
            v-model="form.total_pieces"
            readonly
            label="Total Pieces"
            prepend-icon="category"
          />
        </v-flex>
        <v-flex 
          v-if="packages.length>0"
          xs12 
          lg2>
          <v-text-field
            v-model="form.total_cube"
            readonly
            label="Total Cube"
            prepend-icon="fa-cubes"
            suffix="ft³"
          />
        </v-flex>
        <v-flex 
          v-if="packages.length>0"
          xs12 
          lg2>
          <v-text-field
            v-model="form.receiving_amount"
            readonly
            prepend-icon="attach_money"
            label="Receiving Amount"
            suffix="USD"
          />
        </v-flex>
      </v-layout>
      <!-- Packages /Item Form -->
      <!-- Package Area -->
      <packages 
        v-for="(item,key) in packages" 
        :key="key"
        :item="item"
        :packages="packages"
        :bins="bins"
        :handling-rates="handling_rates"
        :storage-rates="storage_rates"
        :form="form"
        :readonly="true"
      />
      <!-- End Package -->
    </v-card>

  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import { Form } from "vform";
import Packages from "Components/dsg/Packages";
export default {
  components: {
    ModalLayout,
    Packages
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
      dsg_id: null,
      active: false,
      client_id: null,
      client_name: null,
      customer_id: null,
      customer_name: null,
      shipper_id: null,
      shipper_name: null,
      received_by: null,
      received_by_name: null,
      written_by: null,
      written_by_name: null,
      inspected_by: null,
      inspected_by_name: null,
      located_by: null,
      located_by_name: null,
      total_pieces: 0,
      total_cube: 0,
      receiving_amount: 0,
      packages: []
    }),
    po_no: null,
    date_received: null,
    bins: [],
    date_received_modal: false,
    date_processed: null,
    date_processed_modal: false,
    customers: [],
    clients: [],
    shippers: [],
    employees: [],
    packages: [],
    handling_rates: [],
    storage_rates: [],
    client_id: null,
    client_name: null,
    unknownClient: {
      active: false,
      id: 1,
      name: "Unknown Client"
    }
  }),
  computed: {
    customerHint() {
      if (this.form.customer_id === null) {
        return "Please Create Or Search Customer";
      } else if (this.form.customer_id === 1001) {
        return "Mark as Unknown Until Further Notice";
      } else {
        return "Customer Acccount Verified";
      }
    },
    clientHint() {
      if (this.form.client_id === null) {
        return "Please Create Or Search Client";
      } else if (this.form.client_id === 1) {
        return "Mark as Unknown Until Further Notice";
      } else {
        return "Client Acccount Verified";
      }
    },
    shipperHint() {
      if (this.form.shipper_id === null) {
        return "Please Create Or Search  Shipper";
      } else if (this.form.shipper_id === 1) {
        return "Mark as Unknown Until Further Notice";
      } else {
        return "Shipper Acccount Verified";
      }
    }
  },
  watch: {
    po_no: {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;
        for (let i = 0; i < total; i++) {
          self.packages[i].po_no = newValue;
        }
      },
      deep: true
    },
    date_received: {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;
        for (let i = 0; i < total; i++) {
          self.packages[i].date_received = newValue;
        }
      },
      deep: true
    },
    date_processed: {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;
        for (let i = 0; i < total; i++) {
          self.packages[i].date_processed = newValue;
        }
      },
      deep: true
    },
    bins: {
      handler: function(newValue) {},
      deep: true
    },
    customers: {
      handler: function(newValue) {},
      deep: true
    },
    shippers: {
      handler: function(newValue) {},
      deep: true
    },
    employees: {
      handler: function(newValue) {},
      deep: true
    },
    packages: {
      handler: function(newValue) {
        let self = this;
        self.form.total_pieces = newValue.length;
        self.updateTotalCube();
        self.updateReceivingAmount();
      },
      deep: true
    },
    "form.customer_name": {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;

        if (newValue) {
          let customer = _.find(self.customers, function(c) {
            return c.name === newValue;
          });
          if (customer != undefined || customer != null) {
            self.clients = customer.clients;
            _.remove(self.clients, {
              id: 1
            });
            self.clients.unshift(self.unknownClient);
            self.form.customer_id = customer.id;
          } else {
            self.clients.push(self.unknownClient);
            self.form.customer_id = null;
          }
        } else {
          self.clients = [];
          self.clients.push(self.unknownClient);
          self.form.customer_id = null;
          self.form.customer_name = null;
        }
        for (let i = 0; i < total; i++) {
          self.packages[i].customer_id = self.form.customer_id;
          self.packages[i].customer_name = self.form.customer_name;
        }
      },
      deep: false
    },
    "form.client_name": {
      handler: function(newName) {
        let self = this;
        let total = this.packages.length;

        if (newName != null || newName != undefined) {
          if (self.clients.length > 0) {
            let client = _.find(self.clients, function(c) {
              return c.name == newName;
            });
            if (client != undefined) {
              self.form.client_name = client.name;
              self.form.client_id = client.id;
            } else {
              self.form.client_name = newName;
              self.form.client_id = null;
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
        for (let i = 0; i < total; i++) {
          self.packages[i].client_id = self.form.client_id;
          self.packages[i].client_name = self.form.client_name;
        }
      },
      deep: false
    },
    "form.shipper_id": {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;
        let shipper_id = null;
        let shipper_name = null;

        if (newValue != undefined) {
          let shipper = _.find(self.shippers, function(c) {
            return c.id === newValue;
          });
          self.form.shipper_name = shipper.name;
          shipper_id = shipper.id;
          shipper_name = shipper.name;
        }
        for (let i = 0; i < total; i++) {
          self.packages[i].shipper_id = shipper_id;
          self.packages[i].shipper_name = shipper_name;
        }
      },
      deep: false
    }
  },
  created() {
    this.getCustomers();
    this.getShippers();
    this.getEmployees();
    this.getBins();
    this.getHandlingRates();
    this.getStorageRates();
    this.date_received = moment().format("YYYY-MM-DD");
    this.date_processed = moment().format("YYYY-MM-DD");
    this.fetchDSG();
  },
  methods: {
    updateReceivingAmount() {
      let self = this;
      let total = self.packages.length;
      let receivingAmount = 0;
      for (let i = 0; i < total; i++) {
        receivingAmount += self.packages[i].handling_fee;
      }
      self.form.receiving_amount = receivingAmount;
    },
    updateTotalCube() {
      let self = this;
      let total = this.packages.length;
      let totalCube = 0;
      for (let i = 0; i < total; i++) {
        totalCube = totalCube + Number(self.packages[i].cube);
      }

      self.form.total_cube = totalCube;
    },
    getHandlingRates() {
      let self = this;
      axios.get(route("api.dsg.getHandlingRates")).then(response => {
        self.handling_rates = response.data.rates;
      });
    },
    getStorageRates() {
      let self = this;
      axios.get(route("api.dsg.getStorageRates")).then(response => {
        self.storage_rates = response.data.rates;
      });
    },
    getBins() {
      let self = this;
      axios.post(route("api.bin.index")).then(response => {
        self.bins = response.data.data;
      });
    },
    getEmployees() {
      axios.get(route("api.dsg.getEmployees")).then(response => {
        this.employees = response.data.data;
      });
    },
    getShippers() {
      axios.get(route("api.dsg.getShippers")).then(response => {
        this.shippers = response.data.data;
      });
    },
    getCustomers() {
      axios.get(route("api.dsg.getCustomers")).then(response => {
        this.customers = response.data.data;
      });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "archived-dsg" }));
    },
    fetchDSG() {
      let id = this.id;
      let self = this;
      axios
        .post(route("api.dsg.viewArchived", { dsg_id: id }))
        .then(response => {
          let dsg = response.data.data;
          self.form.dsg_id = dsg.id;
          self.form.active = dsg.active;
          self.form.customer_id = dsg.customer_id;
          self.form.customer_name = dsg.customer_name;
          self.form.shipper_id = dsg.shipper_id;
          self.form.shipper_name = dsg.shipper_name;
          self.form.received_by = dsg.received_by;
          self.form.received_by_name = dsg.received_by_name;
          self.form.written_by = dsg.written_by;
          self.form.written_by_name = dsg.written_by_name;
          self.form.inspected_by = dsg.inspected_by;
          self.form.inspected_by_name = dsg.inspected_by_name;
          self.form.located_by = dsg.located_by;
          self.form.located_by_name = dsg.located_by_name;
          self.form.total_pieces = dsg.total_pieces;
          self.form.total_cube = dsg.total_cube;
          self.form.receiving_amount = dsg.receiving_amount;
          self.form.client_id = dsg.client_id;
          self.form.client_name = dsg.client_name;
          self.po_no = dsg.packages[0]["po_no"];
          self.date_received = dsg.packages[0]["date_received"];
          self.date_processed = dsg.packages[0]["date_processed"];
          self.packages = dsg.packages;
        });
    }
  }
};
</script>