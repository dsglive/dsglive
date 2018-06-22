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
        <v-toolbar-title class="text-xs-center white--text">DSG Creation Page</v-toolbar-title>
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
        mx-5
        px-5
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
          />
        </v-flex>
      </v-layout>
      <!-- Packages /Item Form -->
      <v-layout 
        row 
        wrap
        my-0
        py-0
        mx-5
        px-5
      >
        <v-flex
          xs12 
          lg2
        >
          <v-btn 
            :disabled="errors.any()"
            color="primary"
            block
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
        :item="item"
        :packages="packages"
        :bins="bins"
        :rates="rates"
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
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
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
    rates: [],
    addPackageForm: new Form({
      customer_id: null,
      customer_name: null,
      client_id: null,
      client_name: null,
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
      date_received: null,
      date_processed: null,
      po_no: null
    })
  }),
  watch: {
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

        if (newValue != undefined) {
          let customer = _.find(self.customers, function(c) {
            return c.id === newValue;
          });
          self.clients = customer.clients;
          self.form.customer_name = customer.name;
          self.form.client_name = null;
          self.form.client_id = null;
        } else {
          self.clients = [];
          self.form.customer_id = null;
          self.form.customer_name = null;
          self.form.client_name = null;
          self.form.client_id = null;
        }
      },
      deep: false
    },
    "form.client_name": {
      handler: function(newName) {
        let self = this;

        if (newName != null || newName != undefined) {
          if (self.clients.length > 0) {
            let client = _.find(self.clients, function(c) {
              return c.name == newName;
            });
            if (client != undefined) {
              self.form.client_name = client.name;
              self.form.client_id = client.id;
            }
          }
        } else {
          self.form.client_id = null;
          self.form.client_name = null;
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
  mounted() {
    this.getCustomers();
    this.getShippers();
    this.getEmployees();
    this.getBins();
    this.getRates();
    this.date_received = moment().format("YYYY-MM-DD");
    this.date_processed = moment().format("YYYY-MM-DD");
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
    getRates() {
      let self = this;
      axios.get(route("api.dsg.getHandlingRates")).then(response => {
        console.log("rates", response.data);
        self.rates = response.data.rates;
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
      //   self.$validator.validateAll().then(result => {
      //     if (result) {
      // eslint-disable-next-line
      axios.post(route("api.package.add")).then(response => {
        let item = response.data.data;
        item.date_received = self.date_received;
        item.date_processed = self.date_processed;
        item.po_no = self.po_no;
        self.packages.push(item);
      });
      // } else {
      //   const validationModal = swal.mixin({
      //     confirmButtonClass: "v-btn blue-grey  subheading white--text",
      //     buttonsStyling: false
      //   });
      //   validationModal({
      //     title: `Validation Error`,
      //     html: `<p class="title">Please Fix Form Errors</p>`,
      //     type: "warning",
      //     confirmButtonText: "Back"
      //   });
      // }
      //   });
    },
    getEmployees() {
      axios.get(route("api.dsg.getEmployees")).then(response => {
        console.log(response.data);
        this.employees = response.data.data;
      });
    },
    getShippers() {
      axios.get(route("api.dsg.getShippers")).then(response => {
        console.log(response.data);
        this.shippers = response.data.data;
      });
    },
    getCustomers() {
      axios.get(route("api.dsg.getCustomers")).then(response => {
        console.log(response.data);
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
          self.createDsg();
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
    createDsg() {
      let self = this;
      self.form.busy = true;

      self.form
        .post(route("api.dsg.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">DSG Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "dsg" }));
        })
        .catch(errors => {});
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
    }
  }
};
</script>
