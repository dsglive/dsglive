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
                color="accent" 
                dark
                flat
                @click="createTicket">
                Create New Ticket
                <v-icon
                  right
                  color="accent" 
                >
                  confirmation_number
                </v-icon>
                <v-icon
                  right
                  color="accent" 
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
              class="title text-xs-center" 
              style="width:14%;">
              <v-btn 
                v-if="props.item.type === 'delivery_ticket' && props.item.items.length > 0" 
                :disabled="!$auth.check('admin')" 
                :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
                class="compress--icon"
                light 
                flat 
                icon 
                @click="props.expanded = !props.expanded"
              >
                <v-icon v-if="!props.expanded">fa-expand</v-icon>
                <v-icon v-if="props.expanded">fa-compress</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                class="compress--icon"
                flat 
                icon 
                color="blue" 
                @click="editTicket(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                class="compress--icon"
                flat 
                icon 
                color="purple" 
                @click="viewPdf(props.item)"
              >
                <v-icon>picture_as_pdf</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                class="compress--icon"
                flat 
                icon 
                color="error" 
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
              class="title text-xs-left"
            >
              {{ props.item.client_name }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ titleCase(props.item.type) }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.date_delivered }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.total_charges }}
            </td>
          </tr>
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
              <v-toolbar class="secondary">
                <v-spacer/>
                <v-toolbar-title class="text-xs-center white--text">Delivered Items</v-toolbar-title>
                <v-spacer/>
                <span class="title white--text"> Count: {{ props.item.items.length }} </span>
              </v-toolbar>
              <v-container fluid>
                <v-data-iterator
                  :items="props.item.items"
                  :rows-per-page-items="rowsPerPageItems"
                  :pagination.sync="iteratorPagination"
                  content-tag="v-layout"
                  row
                  wrap
                >
                  <v-flex
                    slot="item"
                    slot-scope="props"
                    xs6
                  >
                    <v-card>
                      <v-card-title><h4>Item ID#: {{ props.item.id }}</h4></v-card-title>
                      <v-divider/>
                      <v-list dense>
                        <v-list-tile>
                          <v-list-tile-content>DSG #:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.dsg_id }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Style #:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.style_no }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Description:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.description }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Bin:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.bin_name }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Cube:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.cube }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Date Processed:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.date_processed }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-content>Date Received:</v-list-tile-content>
                          <v-list-tile-content class="align-end">{{ props.item.date_received }}</v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-card>
                  </v-flex>
                </v-data-iterator>
              </v-container>
            </v-card>
          </v-container>
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
      <confirm
        :callback="confirmed(deleteTicket)" 
        :message="message"
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
    rowsPerPageItems: [1, 2],
    dialog: false,
    /* table */
    headers: [
      { text: "Actions", value: "actions", align: "center", sortable: false },
      { text: "Ticket#", value: "id", align: "left", sortable: true },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      { text: "Client", value: "client_name", align: "left", sortable: true },
      { text: "Type", value: "type", align: "left", sortable: true },
      {
        text: "Delivery Date",
        value: "date_delivered",
        align: "left",
        sortable: true
      },
      {
        text: "Delivery Fee",
        value: "total_charges",
        align: "left",
        sortable: true
      }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    iteratorPagination: {
      rowsPerPage: 2
    },
    ticketForm: new Form({}),
    search: "",
    deleteTicketForm: new Form({
      logistics_id: null
    }),
    domain: window.location.hostname,
    message:
      "Warning! Deleting This Logistic Record Has Some Repercusion To The Sytem, Some Features That Reference To This Logistic Record Will Break its Functionality Such As  Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!"
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
    titleCase(key) {
      let newStr = key.replace(/_/g, " ");
      return newStr.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    kebabCase(string) {
      var result = string;

      // Convert camelCase capitals to kebab-case.
      result = result.replace(/([a-z][A-Z])/g, function(match) {
        return match.substr(0, 1) + "-" + match.substr(1, 1).toLowerCase();
      });

      // Convert non-camelCase capitals to lowercase.
      result = result.toLowerCase();

      // Convert non-alphanumeric characters to hyphens
      result = result.replace(/[^-a-z0-9]+/g, "-");

      // Remove hyphens from both ends
      result = result.replace(/^-+/, "").replace(/-$/, "");

      return result;
    },
    viewPdf(ticket) {
      let type = this.kebabCase(ticket.type);
      let id = ticket.id;
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/${type}/${id}`;
      window.open(url);
    },
    editTicket(logistics) {
      vm.$router.push({
        name: "edit-ticket",
        params: { id: `${logistics.id}` }
      });
    },
    createTicket() {
      vm.$router.push({ name: "create-ticket" });
    },
    async fetchTickets() {
      let self = this;
      self.ticketForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.logistics.index"),
          self.ticketForm
        );
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
    deleteTicket(logistics) {
      let self = this;
      self.deleteTicketForm.logistics_id = logistics.id;
      let index = _.findIndex(self.items, { id: logistics.id });
      axios
        .post(
          route("api.logistics.delete", { logistic: logistics.id }),
          self.deleteTicketForm
        )
        .then(response => {
          self.$delete(self.items, index);
          let deleteModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          deleteModal({
            title: "Success",
            html: `<p class="title">Ticket Deleted!</p>`,
            type: "success",
            confirmButtonText: "Back"
          });
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
<style scoped>
.compress--icon {
  margin-left: -5px;
  margin-right: -5px;
}
</style>
