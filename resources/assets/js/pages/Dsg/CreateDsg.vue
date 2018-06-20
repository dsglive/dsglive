<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar class="primary">
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
          <!-- If There is no Dsg Account Login Yet Redirect to Authentication Page -->
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
        ma-5
        pa-5
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
            prepend-icon="fa-tags"
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
            prepend-icon="fa-ship"
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
            prepend-icon="fa-ship"
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
            prepend-icon="fa-ship"
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
            prepend-icon="fa-ship"
            data-vv-name="located_by"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-switch
            v-model="form.active"
            :label="getStatus(form.active)"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true, email: true }"
            v-model="form.email"
            :error-messages="errorMessages('email')"
            :class="{ 'error--text': hasErrors('email') }"
            label="Email"
            prepend-icon="mail"
            data-vv-name="email"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.phone"
            :error-messages="errorMessages('phone')"
            :class="{ 'error--text': hasErrors('phone') }"
            label="Phone"
            prepend-icon="phone"
            data-vv-name="phone"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.address_1"
            :error-messages="errorMessages('address_1')"
            :class="{ 'error--text': hasErrors('address_1') }"
            label="Address 1"
            prepend-icon="looks_one"
            data-vv-name="address_1"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.address_2"
            :error-messages="errorMessages('address_2')"
            :class="{ 'error--text': hasErrors('address_2') }"
            label="Address 2"
            prepend-icon="looks_two"
            data-vv-name="address_2"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.city"
            :error-messages="errorMessages('city')"
            :class="{ 'error--text': hasErrors('city') }"
            label="City"
            prepend-icon="location_city"
            data-vv-name="city"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.state"
            :error-messages="errorMessages('state')"
            :class="{ 'error--text': hasErrors('state') }"
            label="State"
            prepend-icon="map"
            data-vv-name="state"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-text-field
            v-validate="{ required: true }"
            v-model="form.zip"
            :error-messages="errorMessages('zip')"
            :class="{ 'error--text': hasErrors('zip') }"
            label="Zip"
            prepend-icon="markunread_mailbox"
            data-vv-name="zip"
          />
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-textarea
            v-model="form.notes"
            color="teal"
          >
            <div slot="label">
              Notes <small>(optional)</small>
            </div>
          </v-textarea>
        </v-flex>
        <v-flex 
          xs12
          lg4
        >
          <v-btn 
            :loading="form.busy" 
            :disabled="errors.any() || form.busy"
            block
            color="accent"
            @click="submit()"
          >
            Save <v-icon right>save</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-btn 
      color="accent"
      @click="openPackageImagesModal()"
    >
      Upload Package Images <v-icon right>fa-upload</v-icon>
    </v-btn>
    <v-btn 
      color="accent"
      @click="openDamagedImagesModal()"
    >
      Upload Damaged Package Images <v-icon right>fa-upload</v-icon>
    </v-btn>
    <package-images-uploader/>
    <damaged-images-uploader/>
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import PackageImagesUploader from "Components/uploads/PackageImagesUploader";
import DamagedImagesUploader from "Components/uploads/DamagedImagesUploader";
import { Form } from "vform";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout,
    PackageImagesUploader,
    DamagedImagesUploader
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
      total_pieces: null,
      total_cube: null,
      receiving_amoount: null,
      packages: []
    }),
    customers: [],
    clients: [],
    client_name: "",
    shippers: [],
    employees: [],
    packages: []
  }),
  watch: {
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
      handler: function(newValue) {},
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
      deep: true
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
      deep: true
    }
  },
  mounted() {
    this.getCustomers();
    this.getShippers();
    this.getEmployees();
    this.addNewPackage();
  },
  methods: {
    addNewPackage() {
      axios.post(route("api.package.add")).then(response => {
        console.log(response.data);
        this.packages.push(response.data.data);
      });
    },
    openPackageImagesModal() {
      Bus.$emit("upload-package-images");
    },
    openDamagedImagesModal() {
      Bus.$emit("upload-damaged-images");
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
          self.createShipper();
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
    createShipper() {
      let self = this;
      self.form.busy = true;

      self.form
        .post(route("api.shipper.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal({
            title: "Success!",
            html: `<p class="title">Shipper Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "shippers" }));
        })
        .catch(errors => {});
    },
    resetForm() {
      let self = this;
      self.form = new Form({
        active: false,
        name: null,
        email: null,
        phone: null,
        address_1: null,
        address_2: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        notes: null
      });
    },
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "shippers" }));
    }
  }
};
</script>
