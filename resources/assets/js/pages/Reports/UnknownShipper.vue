<template>
  <main-layout>
    <v-jumbotron>
      <v-container 
        fluid>
        <v-layout 
          row 
          wrap>
          <v-flex 
            xs12
            text-xs-center
          >
            <h2 class="display-1">Unknown Shipper Report</h2>
            <v-divider/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container 
      fluid
      style="margin-top:-350px;"
    >
      <!-- Search and Action Buttons -->
      <v-layout 
        row 
        wrap>
        <v-flex xs12>
          <v-card 
            light 
            flat
          >
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search Unknown Shipper"
                single-line
                hide-details
                light
              />
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Dsg Data Table -->
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        :rows-per-page-items="[{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
        select-all
        item-key="id"
        expand
        hide-actions
      >
        <!-- Header Section -->
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
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
            <td class="title text-xs-left accent--text">
              {{ props.item.id }}
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
            <td class="title text-xs-center accent--text">
              {{ props.item.receiving_amount }}
            </td>
            <td class="title text-xs-left accent--text">
              <v-switch
                :readonly="!$auth.check('admin')" 
                v-model="props.item.active"
                :label="getStatus(props.item.active)"
                @change="toggleStatus(props.item)"
              />
            </td>
            <td 
              v-if="$auth.check('admin')" 
              class="title text-xs-center">
              <v-btn 
                :disabled="!$auth.check('admin')" 
                flat 
                icon 
                color="blue" 
                @click="editDsg(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                flat 
                icon 
                color="error" 
                @click="deleteDsg(props.item)"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
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
            Opps! There are No Unknown Shipper Yet!, 
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
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";

export default {
  components: {
    MainLayout
  },
  mixins: [validationError],
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "DSG#", value: "id", align: "left", sortable: true },
      { text: "Shipper", value: "shipper_name", align: "left", sortable: true },
      { text: "Pieces", value: "total_pieces", align: "left", sortable: true },
      { text: "Cu.ft", value: "total_cube", align: "left", sortable: true },
      {
        text: "Amount($)",
        value: "receiving_amount",
        align: "left",
        sortable: true
      },
      { text: "Status", value: "active", align: "left", sortable: true },
      { text: "Actions", value: "actions", align: "right", sortable: false }
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
    if (!this.$auth.check(["admin"])) {
      self.$delete(self.headers, 6);
    }
  },
  methods: {
    editDsg(dsg) {
      if (dsg.active === true) {
        vm.$router.push({ name: "edit-dsg", params: { id: `${dsg.id}` } });
      } else {
        vm.$router.push({
          name: "edit-warehouse",
          params: { id: `${dsg.id}` }
        });
      }
    },
    toggleStatus(dsg) {
      let self = this;
      self.toggleForm.toggle = dsg.active;
      self.toggleForm.dsg_id = dsg.id;
      axios
        .post(route("api.dsg.toggleStatus"), self.toggleForm)
        .then(response => {
          console.log(response.data);
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
    getStatus(status) {
      if (status) {
        return "received";
      } else {
        return "warehouse";
      }
    },
    async fetchDsg() {
      let self = this;
      self.dsgForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.reportUnknownShipper"),
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
    deleteDsg(dsg) {
      let self = this;
      self.deleteDsgForm.dsg_id = dsg.id;
      let index = _.findIndex(self.items, { id: dsg.id });
      axios
        .post(route("api.dsg.delete"), self.deleteDsgForm)
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

