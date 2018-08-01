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
                    label="Search Bins"
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
                :disabled="!$auth.check('admin')" 
                block 
                color="accent" 
                dark
                flat
                @click="createBin">
                Create New Bin
                <v-icon
                  right
                  color="accent" 
                >
                  view_module
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
              d-flex>
              <v-flex class="xs6 white">
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
                    link
                  </v-icon>
                  Activate Selected
                </v-btn>
              </v-flex>
              <v-flex class="xs6 white">
                <v-btn 
                  v-if="selected.length > 0"
                  :disabled="!$auth.check('admin')" 
                  block 
                  flat
                  color="error" 
                  dark
                  @click="massDeactivate">
                  <v-icon
                    large
                    color="error" 
                  >
                    link_off
                  </v-icon>
                  Deactivate Selected
                </v-btn>
              </v-flex>
            </v-flex>
          </v-layout>
          
        </v-flex>
      </v-layout>
      <!-- Bin Data Table -->
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
            <td 
              class="title text-xs-left"
              style="width:5%;"
            >
              <v-checkbox
                :active="props.selected"
                :input-value="props.selected"
                @click="props.selected = !props.selected"
              />
            </td>
            <td 
              class="title text-xs-center"
              style="width:10%;margin-left:0px;margin-right:0px;padding-left:0px;padding-right:0px;"
            >
              <v-btn 
                :disabled="!$auth.check('admin')" 
                flat 
                icon 
                color="blue" 
                class="compress--icon"
                @click="editBin(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                flat 
                icon 
                color="error" 
                class="compress--icon"
                @click="deleteBin(props.item)"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.code }}
            </td>
            <td class="title text-xs-left accent--text">
              <v-switch
                v-model="props.item.active"
                :label="getStatus(props.item.active)"
                @change="toggleStatus(props.item)"
              />
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
            Opps! No Bin Yet!, 
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="createBin">
              Create New Bin
              <v-icon
                right
              >
                fa-user-plus
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
      { text: "Actions", value: "actions", align: "right", sortable: false },
      { text: "Bin #", value: "code", align: "left", sortable: true },
      { text: "Status", value: "active", align: "left", sortable: true },
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    binsForm: new Form({}),
    toggleForm: new Form({
      toggle: false,
      bin_id: null
    }),
    search: "",
    deleteBinForm: new Form({
      bin_id: null
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
    self.fetchBins();
  },
  methods: {
    editBin(bin) {
      vm.$router.push({ name: "edit-bin", params: { id: `${bin.id}` } });
    },
    createBin() {
      vm.$router.push({ name: "create-bin" });
    },
    toggleStatus(bin) {
      let self = this;
      self.toggleForm.toggle = bin.active;
      self.toggleForm.bin_id = bin.id;
      axios
        .post(route("api.bin.toggleStatus"), self.toggleForm)
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
        return "Active";
      } else {
        return "Inactive";
      }
    },
    async fetchBins() {
      let self = this;
      self.binsForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.bin.index"),
          self.binsForm
        );
        self.items = payload.data.data;
        self.binsForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.binsForm.errors.set(errors);
        }
        if (message) {
        }
        self.binsForm.busy = false;
      }
    },
    deleteBin(bin) {
      let self = this;
      self.deleteBinForm.bin_id = bin.id;
      let index = _.findIndex(self.items, { id: bin.id });
      axios
        .post(route("api.bin.delete"), self.deleteBinForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">Bin Deleted!</p>`,
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
    async massDeactivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.bin.massDeactivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = false;
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
    async massActivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.bin.massActivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = true;
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