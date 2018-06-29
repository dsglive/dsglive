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
        <v-toolbar-title class="text-xs-center white--text">Update DSG# {{ id }}</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn
            :loading="form.busy" 
            :disabled="errors.any() || form.busy"
            flat 
            color="white" 
            @click.native="submit()"
          >
            Save
            <v-icon right>save</v-icon>
          </v-btn>
        </v-toolbar-items>
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
          <v-autocomplete
            v-validate="'required'"
            :items="customers"
            v-model="form.customer_id"
            :error-messages="errorMessages('customer')"
            :class="{ 'error--text': hasErrors('customer') }"
            item-text="name"
            item-value="id"
            required
            label="Choose Customer"
            light
            chips
            prepend-icon="supervised_user_circle"
            data-vv-name="customer"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >

          <v-combobox
            v-validate="'required'"
            v-model="form.client_name"
            :items="clients"
            :error-messages="errorMessages('client')"
            :class="{ 'error--text': hasErrors('client') }"
            :error="form.client_id === null"
            item-text="name"
            item-value="name"
            chips
            light
            dense
            required
            label="Choose Client or Type Name"
            prepend-icon="fa-users"
            data-vv-name="client"
          />
          
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-autocomplete
            v-validate="'required'"
            :items="shippers"
            v-model="form.shipper_id"
            :error-messages="errorMessages('shipper')"
            :class="{ 'error--text': hasErrors('shipper') }"
            item-text="name"
            item-value="id"
            required
            label="Choose Shipper"
            light
            chips
            prepend-icon="fa-ship"
            data-vv-name="shipper"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-autocomplete
            v-validate="'required'"
            :items="employees"
            v-model="form.received_by"
            :error-messages="errorMessages('received_by')"
            :class="{ 'error--text': hasErrors('received_by') }"
            item-text="name"
            item-value="id"
            required
            label="Received By"
            light
            chips
            prepend-icon="how_to_reg"
            data-vv-name="received_by"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-autocomplete
            v-validate="'required'"
            :items="employees"
            v-model="form.written_by"
            :error-messages="errorMessages('written_by')"
            :class="{ 'error--text': hasErrors('written_by') }"
            item-text="name"
            item-value="id"
            required
            label="Written By"
            light
            chips
            prepend-icon="local_library"
            data-vv-name="written_by"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-autocomplete
            v-validate="'required'"
            :items="employees"
            v-model="form.inspected_by"
            :error-messages="errorMessages('inspected_by')"
            :class="{ 'error--text': hasErrors('inspected_by') }"
            item-text="name"
            item-value="id"
            required
            label="Inspected By"
            light
            chips
            prepend-icon="search"
            data-vv-name="inspected_by"
          />
        </v-flex>
        <v-flex 
          xs12
          lg3
        >
          <v-autocomplete
            v-validate="'required'"
            :items="employees"
            v-model="form.located_by"
            :error-messages="errorMessages('located_by')"
            :class="{ 'error--text': hasErrors('located_by') }"
            item-text="name"
            item-value="id"
            required
            label="Located By"
            light
            chips
            prepend-icon="person_pin"
            data-vv-name="located_by"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="po_no"
            :error-messages="errorMessages('po_no')"
            :class="{ 'error--text': hasErrors('po_no') }"
            light
            label="PO No."
            prepend-icon="bookmark"
            data-vv-name="po_no"
          />
        </v-flex>
        <v-flex 
          xs12 
          lg2>
          <v-dialog
            ref="date_received"
            v-model="date_received_modal"
            :return-value.sync="date_received"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date_received"
              label="Date Received"
              prepend-icon="event_available"
              readonly
            />
            <v-date-picker 
              v-model="date_received" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_received_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_received.save(date_received)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex 
          xs12 
          lg2>
          <v-dialog
            ref="date_processed"
            v-model="date_processed_modal"
            :return-value.sync="date_processed"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date_processed"
              label="Date Processed"
              prepend-icon="event_note"
              readonly
            />
            <v-date-picker 
              v-model="date_processed" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_processed_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="$refs.date_processed.save(date_processed)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
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
      <v-layout 
        row 
        wrap
        my-0
        py-0
        mx-3
        px-3
      >
        <v-flex
          v-if="!packages.length>0" 
          xs12
        >
          <v-btn 
            :disabled="errors.any()"
            color="blue-grey"
            block
            class="white--text"
            @click="addNewPackage"
          >
            Add New Package <v-icon right>library_add</v-icon>
          </v-btn>
        </v-flex>
        
      </v-layout>
      <!-- Package Area -->
      <packages 
        v-for="(item,key) in packages" 
        :key="key"
        :index="key+1"
        :item="item"
        :packages="packages"
        :bins="bins"
        :handling-rates="handling_rates"
        :storage-rates="storage_rates"
        :form="form"
      />
      <!-- End Package -->
    </v-card>

  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import Packages from "Components/dsg/Packages";
export default {
  components: {
    ModalLayout,
    Packages
  },
  mixins: [validationError],
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
      address_1: null,
      address_2: null,
      city: null,
      id: 1,
      name: "Unknown Client",
      state: null,
      zip: null
    }
  }),
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
    "form.customer_id": {
      handler: function(newValue) {
        let self = this;
        let total = this.packages.length;
        let customer_id = null;
        let customer_name = null;

        if (newValue != undefined) {
          let customer = _.find(self.customers, function(c) {
            return c.id === newValue;
          });
          self.clients = customer.clients;
          _.remove(self.clients, {
            id: 1
          });
          self.clients.unshift(self.unknownClient);
          self.form.customer_name = customer.name;
          self.form.client_name = null;
          self.form.client_id = null;
          customer_id = newValue;
          customer_name = customer.name;
        } else {
          self.clients = [];
          self.clients.push(self.unknownClient);
          self.form.customer_id = null;
          self.form.customer_name = null;
          self.form.client_name = null;
          self.form.client_id = null;
        }
        for (let i = 0; i < total; i++) {
          self.packages[i].customer_id = customer_id;
          self.packages[i].customer_name = customer_name;
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
    },
    "form.client_name": {
      handler: function(newName) {
        let self = this;
        let total = this.packages.length;
        let client_id = null;
        let client_name = newName;

        if (newName != null || newName != undefined) {
          if (self.clients.length > 0) {
            let client = _.find(self.clients, function(c) {
              return c.name == newName;
            });
            if (client != undefined) {
              self.form.client_name = client.name;
              self.form.client_id = client.id;
              client_id = client.id;
              client_name = client.name;
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
        }
        for (let i = 0; i < total; i++) {
          self.packages[i].client_id = client_id;
          self.packages[i].client_name = client_name;
        }
      },
      deep: false
    },
    "form.received_by": {
      handler: function(newID) {
        let self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            let employee = _.find(self.employees, function(e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.received_by = employee.id;
              self.form.received_by_name = employee.name;
            }
          }
        } else {
          self.form.received_by = null;
          self.form.received_by_name = null;
        }
      },
      deep: false
    },
    "form.written_by": {
      handler: function(newID) {
        let self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            let employee = _.find(self.employees, function(e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.written_by = employee.id;
              self.form.written_by_name = employee.name;
            }
          }
        } else {
          self.form.written_by = null;
          self.form.written_by_name = null;
        }
      },
      deep: false
    },
    "form.inspected_by": {
      handler: function(newID) {
        let self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            let employee = _.find(self.employees, function(e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.inspected_by = employee.id;
              self.form.inspected_by_name = employee.name;
            }
          }
        } else {
          self.form.inspected_by = null;
          self.form.inspected_by_name = null;
        }
      },
      deep: false
    },
    "form.located_by": {
      handler: function(newID) {
        let self = this;

        if (newID != null || newID != undefined) {
          if (self.employees.length > 0) {
            let employee = _.find(self.employees, function(e) {
              return e.id == newID;
            });
            if (employee != undefined) {
              self.form.located_by = employee.id;
              self.form.located_by_name = employee.name;
            }
          }
        } else {
          self.form.located_by = null;
          self.form.located_by_name = null;
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
    addNewPackage() {
      let self = this;
      self.$validator.validateAll().then(result => {
        if (result) {
          axios.post(route("api.package.add")).then(response => {
            let item = response.data.data;
            item.date_received = self.date_received;
            item.date_processed = self.date_processed;
            item.po_no = self.po_no;
            item.customer_id = self.form.customer_id;
            item.customer_name = self.form.customer_name;
            item.client_id = self.form.client_id;
            item.client_name = self.form.client_name;
            item.shipper_id = self.form.shipper_id;
            item.shipper_name = self.form.shipper_name;
            self.packages.push(item);
          });
        } else {
          const validationModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal({
            title: `Validation Error`,
            html: `<p class="title">Please Fix Form Errors</p>`,
            type: "warning",
            confirmButtonText: "Back"
          });
        }
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
    getStatus(status) {
      if (status) {
        return "Status: Active";
      } else {
        return "Status: Inactive";
      }
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.updateDsg();
        } else {
          const validationModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal({
            title: `Validation Error`,
            html: `<p class="title">Please Fix Form Errors</p>`,
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    updateDsg() {
      let self = this;
      self.form.busy = true;
      self.form.packages = self.packages;
      self.form
        .post(route("api.dsg.update", { dsg: self.form.dsg_id }), self.form)
        .then(response => {
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Receiving Has Been Updated!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "dsg" }));
        })
        .catch(errors => {
          const failedModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          failedModal({
            title: "Validation Error!",
            html: `<p class="title">Please Complete Form To Submit!</p>`,
            type: "error",
            confirmButtonText: "Ok"
          });
          self.form.busy = false;
        });
    },
    resetForm() {
      let self = this;
      self.form = new Form({
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
        total_pieces: null,
        total_cube: null,
        receiving_amount: null,
        packages: []
      });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "dsg" }));
    },
    fetchDSG() {
      let id = this.id;
      let self = this;
      axios.get(route("api.dsg.edit", { id })).then(response => {
        let dsg = response.data.data;
        self.form.dsg_id = dsg.id;
        self.form.active = dsg.active;
        self.form.client_id = dsg.client_id;
        self.form.client_name = dsg.client_name;
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
        self.client_id = dsg.client_id;
        self.client_name = dsg.client_name;
        self.po_no = dsg.packages[0]["po_no"];
        self.date_received = dsg.packages[0]["date_received"];
        self.date_processed = dsg.packages[0]["date_processed"];
        self.packages = dsg.packages;
        self.client_name = dsg.client_name;
        self.client_id = dsg.client_id;
      });
      setTimeout(() => {
        self.form.client_name = self.client_name;
        self.form.client_id = self.client_id;
      }, 1000);
    }
  }
};
</script>
