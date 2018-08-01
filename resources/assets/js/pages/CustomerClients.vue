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
        <v-toolbar-title class="text-xs-center white--text">Customer Clients</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
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
                      label="Search Clients"
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
                  color="primary" 
                  dark
                  flat
                  @click="createClient">
                  Add New Client
                  <v-icon
                    right
                    color="primary" 
                  >
                    fa-user-plus
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
        <!-- Client Data Table -->
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
              <!-- <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.native="toggleAll"
              />
            </th> -->
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
              <!-- <td class="title text-xs-left">
              <v-checkbox
                :active="props.selected"
                :input-value="props.selected"
                @click="props.selected = !props.selected"
              />
            </td> -->
              <!-- <td class="title text-xs-left accent--text">
              {{ props.item.id }}
            </td> -->
              <td 
                class="title text-xs-center"
                style="width:10%;margin-left:0px;margin-right:0px;padding-left:0px;padding-right:0px;"
              >
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
                  light 
                  flat 
                  icon 
                  class="compress--icon"
                  @click="props.expanded = !props.expanded"
                >
                  <v-icon v-if="!props.expanded">fa-expand</v-icon>
                  <v-icon v-if="props.expanded">fa-compress</v-icon>
                </v-btn>
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="blue" 
                  class="compress--icon"
                  @click="editClient(props.item)"
                >
                  <v-icon>fa-pencil</v-icon>
                </v-btn>
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="error" 
                  class="compress--icon"
                  @click="deleteClient(props.item)"
                >
                  <v-icon>fa-trash</v-icon>
                </v-btn>
              </td>
              <td class="title text-xs-left accent--text">
                {{ props.item.name }}
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
          <!-- Expand Section -->
          <template 
            slot="expand" 
            slot-scope="props"
          >
            <v-container fluid>
              <v-card 
                light 
                flat 
                text-xs-center
              >
                <v-card-media
                  class="white--text blue-grey"
                  height="75px"
                >
                  <v-container 
                    fill-height 
                    fluid
                  >
                    <v-layout fill-height>
                      <v-flex 
                        xs12 
                        align-end 
                        flexbox
                      >
                        <span class="headline">{{ props.item.name }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <v-container fluid>
                  
                    <p 
                      class="title accent--text"
                    >
                      Account Details
                    </p>
                    <v-layout 
                      row 
                      wrap
                    >
                      <v-flex 
                        xs6
                        px-1>
                        <v-text-field
                          v-model="props.item.email"
                          label="Email"
                          prepend-icon="fa-envelope"
                          light
                          readonly
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1>
                        <v-text-field
                          v-model="props.item.phone"
                          label="Phone"
                          light
                          readonly
                          prepend-icon="phone"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.address_1"
                          label="Address 1"
                          light
                          readonly
                          prepend-icon="looks_one"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.address_2"
                          label="Address 2"
                          light
                          readonly
                          prepend-icon="looks_two"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.city"
                          label="City"
                          light
                          readonly
                          prepend-icon="location_city"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.state"
                          label="State"
                          light
                          readonly
                          prepend-icon="map"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.zip"
                          label="Zip"
                          light
                          readonly
                          prepend-icon="markunread_mailbox"
                        />
                      </v-flex>
                      <v-flex 
                        xs6
                        px-1
                      >
                        <v-text-field
                          :value="props.item.country"
                          label="Country"
                          light
                          readonly
                          prepend-icon="flag"
                        />
                      </v-flex>
                    </v-layout>
                    <v-layout 
                      row 
                      wrap
                    >
                      <v-flex xs12>
                        <v-textarea
                          v-model="props.item.notes"
                          color="primary"
                          readonly
                        >
                          <div slot="label">
                            <span class="title">Notes: </span>
                          </div>
                        </v-textarea>
                      </v-flex>
                    </v-layout>

                  </v-container>
                </v-card-title>

              </v-card>
            </v-container>
          </template>
          <!-- No Data Section -->
          <template slot="no-data">
            <v-alert 
              :value="true" 
              color="error" 
              icon="warning">
              Opps! No Client Yet!, 
              <v-btn 
                :disabled="!$auth.check('admin')" 
                color="white" 
                flat
                dark
                @click="createClient">
                Create New Client
                <v-icon
                  right
                  color="white" 
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
    </v-card>

  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  props: {
    customer: {
      type: String,
      required: true
    }
  },
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      //   { text: "ID", value: "id", align: "left", sortable: true },
      { text: "Actions", value: "actions", align: "center", sortable: false },
      { text: "Name", value: "name", align: "left", sortable: true },
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    clientsForm: new Form({}),
    toggleForm: new Form({
      toggle: false,
      client_id: null
    }),
    search: "",
    deleteClientForm: new Form({
      client_id: null
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
    self.fetchClients();
  },
  methods: {
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "users" }));
    },
    editClient(client) {
      vm.$router.push({
        name: "customer-clients-edit",
        params: { customer: this.customer, client: client.id }
      });
    },
    createClient() {
      vm.$router.push({ name: "customer-clients-create" });
    },
    async fetchClients() {
      let self = this;
      self.clientsForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.client.index", { customer: self.customer }),
          self.clientsForm
        );
        self.items = payload.data.data;
        self.clientsForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.clientsForm.errors.set(errors);
        }
        if (message) {
        }
        self.clientsForm.busy = false;
      }
    },
    deleteClient(client) {
      let self = this;
      self.deleteClientForm.client_id = client.id;
      let index = _.findIndex(self.items, { id: client.id });
      axios
        .post(route("api.client.delete"), self.deleteClientForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">Client Deleted!</p>`,
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
