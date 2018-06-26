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
                    label="Search Ticket"
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
                @click="createTicket">
                Create New Ticket
                <v-icon
                  right
                  color="primary" 
                >
                  confirmation_number
                </v-icon>
                <v-icon
                  right
                  color="primary" 
                >
                  fa-plus-circle
                </v-icon>
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
            <td class="title text-xs-left accent--text">
              {{ props.item.id }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.customer_name }}
            </td>
            <td 
              :class="{'red--text': props.item.client_id === null, 'accent--text': props.item.client_id !== null}" 
              class="title text-xs-left">
              {{ props.item.client_name }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.type }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.date_delivered }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.total_charges }}
            </td>
            <td class="title text-xs-center">
              <v-flex class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="blue" 
                  @click="editTicket(props.item)"
                >
                  <v-icon>fa-pencil</v-icon>
                </v-btn>
              </v-flex>
              <!-- Add PDF Button
              <v-flex class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="purple" 
                  @click="viewPdf(props.item)"
                >
                  <v-icon>picture_as_pdf</v-icon>
                </v-btn>
              </v-flex>
              -->
              <v-flex class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  flat 
                  icon 
                  color="error" 
                  @click="deleteDsg(props.item)"
                >
                  <v-icon>fa-trash</v-icon>
                </v-btn>
              </v-flex>
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
            Opps! No Ticket Created Yet!, 
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="createTicket">
              Create New Ticket
              <v-icon
                right
              >
                confirmation_number
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
      { text: "Ticket#", value: "id", align: "left", sortable: true },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      { text: "Client", value: "client_name", align: "left", sortable: true },
      { text: "Type", value: "type", align: "left", sortable: true },
      { text: "Delivery Date", value: "date_delivered", align: "left", sortable: true },
      { text: "Delivery Fee", value: "total_charges", align: "left", sortable: true },
      { text: "Actions", value: "actions", align: "right", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    ticketForm: new Form({}),
    search: "",
    deleteTicketForm: new Form({
      logistics_id: null
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
    self.fetchTickets();
  },
  methods: {
    viewPdf() {
      console.log("viewing PDF");
    },
    editTicket(logistics) {
      vm.$router.push({ name: "edit-logistics", params: { id: `${logistics.id}` } });
    },
    createTicket() {
      vm.$router.push({ name: "create-logistics" });
    },
    async fetchTickets() {
      let self = this;
      self.ticketForm.busy = true;
      try {
        const payload = await axios.post(route("api.logistics.index"), self.ticketForm);
        self.items = payload.data.data;
        self.ticketForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.ticketForm.errors.set(errors);
        }
        if (message) {
        }
        self.ticketForm.busy = false;
      }
    },
    deleteDsg(logistics) {
      let self = this;
      self.deleteTicketForm.logistics_id = logistics.id;
      let index = _.findIndex(self.items, { id: logistics.id });
      axios
        .post(route("api.logistics.delete"), self.deleteTicketForm)
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

