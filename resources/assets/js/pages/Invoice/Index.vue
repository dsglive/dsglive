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
                    label="Search Customer"
                    single-line
                    hide-details
                    light
                  />
                </v-card-title>
              </v-card>
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
            <td class="title text-xs-left accent--text">
              {{ props.item.date_started }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.date_ended }}
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.receiving_fee">{{ props.item.receiving_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.storage_fee">{{ props.item.storage_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.delivery_fee">{{ props.item.delivery_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.misc_fee">{{ props.item.misc_fee.toFixed(4) }}</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.total">{{ props.item.total.toFixed(4) }}</span>
            </td>
            <!-- <td class="title text-xs-center">
              <v-flex 
                class="xs12">
                <v-btn 
                  :disabled="!$auth.check('admin')" 
                  :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
                  light 
                  flat 
                  icon 
                  @click="props.expanded = !props.expanded"
                >
                  <v-icon v-if="!props.expanded">fa-expand</v-icon>
                  <v-icon v-if="props.expanded">fa-compress</v-icon>
                </v-btn>
              </v-flex>
            </td> -->
          </tr>
        </template>
        <!-- Expand Section -->
        <!-- <template 
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
                <v-toolbar-title class="text-xs-center white--text">Expanded Props</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
            </v-card>
          </v-container>
        </template> -->
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
            Opps! Invoices Yet!
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="goToGenerateInvoice">
              Generate Invoice
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
    rowsPerPageItems: [1, 2],
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      {
        text: "ID",
        value: "id",
        align: "left",
        sortable: true
      },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      {
        text: "Started At",
        value: "date_started",
        align: "left",
        sortable: true
      },
      { text: "Ended At", value: "date_ended", align: "left", sortable: true },
      {
        text: "Receiving",
        value: "receiving_fee",
        align: "left",
        sortable: true
      },
      { text: "Storage", value: "storage_fee", align: "left", sortable: true },
      {
        text: "Delivery",
        value: "delivery_fee",
        align: "left",
        sortable: true
      },
      { text: "Misc", value: "misc_fee", align: "left", sortable: true },
      { text: "Total", value: "total", align: "left", sortable: true }
      //   { text: "Actions", value: "actions", align: "left", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    search: "",
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
    self.fetchInvoices();
  },
  methods: {
    goToGenerateInvoice() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "generate-invoices" }));
    },
    fetchInvoices() {
      let self = this;
      axios.post(route("api.invoice.index")).then(response => {
        console.log(response.data);
        self.items = response.data;
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

