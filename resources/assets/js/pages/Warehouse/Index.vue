<template>
  <main-layout>
    <v-container fluid>
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex 
          d-flex 
          xs12 
          sm7>
          <v-layout 
            row 
            wrap>
            <v-flex d-flex>
              <v-card 
                light 
                flat
              >
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search Warehouse"
                    single-line
                    hide-details
                    light
                  />
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex 
          d-flex 
          xs12 
          sm5 
          child-flex>
          <v-layout 
            row 
            wrap>
            <v-flex 
              xs12 
              class="white"
              d-flex>
              <v-btn 
                block 
                color="accent" 
                dark
                flat
                @click="createWarehouse">
                Create New DSG
                <v-icon
                  right
                  color="accent" 
                >
                  receipt
                </v-icon>
                <v-icon
                  right
                  color="accent" 
                >
                  fa-plus-circle
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex 
              xs12 
            >
              <v-btn 
                v-if="selected.length > 0"
                :disabled="!$auth.check('admin')" 
                block 
                color="blue darken-4" 
                dark
                flat
                @click="massActivate">
                <v-icon
                  large
                  color="blue darken-4" 
                >
                  forward
                </v-icon>
                Move To Receiving
              </v-btn>
            </v-flex>
          </v-layout>
          
        </v-flex>
      </v-layout>
      <!-- Dsg Data Table -->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        select-all
        item-key="id"
        expand
      >
        <!-- Header Section -->
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.native="toggleAll"
              />
            </th>
            <th 
              v-for="header in props.headers" 
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', 
                       header.value === pagination.sortBy ? 'name' : '', 
                       {'text-xs-left': header.align === 'left', 
                        'text-xs-right': header.align === 'right', 
                        'text-xs-center': header.align === 'center'},
                       $vuetify.breakpoint.width >= 600 && 'title']"
              @click="changeSort(header.value)"
            >
              <span>
                <v-icon>arrow_upward</v-icon>
                {{ header.text }}
              </span>
            </th>
          </tr>
        </template>
        <!-- Row Section -->
        <template 
          slot="items" 
          slot-scope="props"
        >
          <tr>
            <td class="title text-xs-left">
              <v-checkbox
                :active="props.selected"
                :input-value="props.selected"
                @click="props.selected = !props.selected"
              />
            </td>
            <td 
              class="title text-xs-center" 
              style="width:15%;margin-left:0px;margin-right:0px;padding-left:0px;padding-right:0px;">
              <v-btn
                flat 
                icon 
                color="indigo" 
                class="compress--icon"
                @click="viewWarehouse(props.item)"
              >
                <v-icon>search</v-icon>
              </v-btn>
              <v-btn 
                v-if="!props.item.active"
                flat 
                icon 
                color="blue" 
                class="compress--icon"
                @click="editWarehouse(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                flat 
                icon 
                color="purple" 
                class="compress--icon"
                @click="viewPdf(props.item)"
              >
                <v-icon>picture_as_pdf</v-icon>
              </v-btn>
              <v-btn 
                v-if="$auth.check('admin')"
                flat 
                icon 
                color="green" 
                class="compress--icon"
                @click="moveToReceiving(props.item)"
              >
                <v-icon>forward</v-icon>
              </v-btn>
              <v-btn 
                v-if="!props.item.active"
                flat 
                icon 
                color="error" 
                class="compress--icon"
                @click="openDialog(props.item)"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.id }}
            </td>
            <td 
              :class="{'red--text': props.item.customer_id === null || props.item.customer_id === 1001, 'accent--text': props.item.customer_id > 1001}"
              class="title text-xs-left"
            >
              {{ props.item.customer_name }}
            </td>
            <td 
              :class="{'red--text': props.item.client_id === null || props.item.client_id === 1, 'accent--text': props.item.client_id > 1}"
              class="title text-xs-left">
              {{ props.item.client_name }}
            </td>
            <td 
              :class="{'red--text': props.item.shipper_id === null || props.item.shipper_id === 1, 'accent--text': props.item.shipper_id > 1}"
              class="title text-xs-left"
            >
              {{ props.item.shipper_name }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.total_pieces }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.total_cube }}
            </td>
          </tr>
        </template>
        <!-- Pagination Section -->
        <template 
          slot="pageText"
          slot-scope="{ pageStart, pageStop }"
        >
          From {{ pageStart }} to {{ pageStop }}
        </template>
        <!-- No Data Section -->
        <template slot="no-data">
          <v-alert 
            :value="true" 
            color="blue-grey" 
            icon="warning">
            Opps! No Dsg Yet!, 
            <v-btn 
              color="white" 
              flat
              dark
              @click="createWarehouse">
              Create New DSG
              <v-icon
                right
              >
                receipt
              </v-icon>
            </v-btn>
          </v-alert>
        </template>
        <!-- No Search Result Section -->
        <v-alert 
          slot="no-results" 
          :value="true" 
          color="blue-grey" 
          icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
      <confirm 
        :callback="confirmed(forceDelete)" 
      />
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import Confirm from "Components/dsg/Confirm.vue";
import confirmation from "Mixins/confirmation";
export default {
  components: {
    MainLayout,
    Confirm
  },
  mixins: [validationError, confirmation],
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "Actions", value: "actions", align: "center", sortable: false },
      { text: "DSG#", value: "id", align: "left", sortable: true },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      { text: "Client", value: "client_name", align: "left", sortable: true },
      { text: "Shipper", value: "shipper_name", align: "left", sortable: true },
      { text: "Pieces", value: "total_pieces", align: "left", sortable: true },
      { text: "Cu.ft", value: "total_cube", align: "left", sortable: true }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    dsgForm: new Form({}),
    toggleForm: new Form({
      toggle: false,
      dsg_id: null
    }),
    search: "",
    deleteDsgForm: new Form({
      dsg_id: null
    }),
    domain: window.location.hostname
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    }
  },
  mounted() {
    let self = this;
    self.fetchDsg();
  },
  methods: {
    viewPdf(dsg) {
      let type = "warehouse";
      if (dsg.active) {
        type = "receiving";
      }
      let id = dsg.id;
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/${type}/${id}`;
      window.open(url);
    },
    viewWarehouse(dsg) {
      vm.$router.push({ name: "view-warehouse", params: { id: `${dsg.id}` } });
    },
    editWarehouse(dsg) {
      vm.$router.push({ name: "edit-warehouse", params: { id: `${dsg.id}` } });
    },
    createWarehouse() {
      vm.$router.push({ name: "create-warehouse" });
    },
    moveToReceiving(dsg) {
      let self = this;
      self.toggleForm.toggle = true;
      self.toggleForm.dsg_id = dsg.id;
      let index = _.findIndex(self.items, { id: dsg.id });
      axios
        .post(route("api.dsg.toggleStatus"), self.toggleForm)
        .then(response => {
          self.$delete(self.items, index);
        })
        .catch(errors => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Oops! Forbidden Action!",
            html: '<p class="title">' + errors.response.data.message + "</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        });
    },
    async fetchDsg() {
      let self = this;
      self.dsgForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.warehouse.index"),
          self.dsgForm
        );
        self.items = payload.data.data;
        self.dsgForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.dsgForm.errors.set(errors);
        }
        if (message) {
        }
        self.dsgForm.busy = false;
      }
    },
    forceDelete(dsg) {
      let self = this;
      self.deleteDsgForm.dsg_id = dsg.id;
      let index = _.findIndex(self.items, { id: dsg.id });
      axios
        .post(route("api.dsg.forceDelete"), self.deleteDsgForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">Dsg Deleted!</p>`,
              type: "success",
              confirmButtonText: "Back"
            });
          }
        })
        .catch(errors => {
          const deleteModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          deleteModal({
            title: "Oops! Forbidden Action!",
            html: '<p class="title">' + errors.response.data.message + "</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        });
    },
    async massActivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.dsg.massActivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.$delete(self.items, index);
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>

<style scoped>
.compress--icon {
  margin-left: -5px;
  margin-right: -5px;
}
</style>


