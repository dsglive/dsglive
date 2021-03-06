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
        >
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
                    label="Search Invoices"
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
            <td class="title text-xs-left accent--text">
              {{ props.item.id }}
            </td>
            <td 
              v-if="$auth.check('admin')" 
              class="title text-xs-left accent--text">
              {{ props.item.customer_name }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.date_started }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.date_ended }}
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.receiving_fee">${{ props.item.receiving_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.storage_fee">${{ props.item.storage_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.delivery_fee">${{ props.item.delivery_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.misc_fee">${{ props.item.misc_fee.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-left accent--text">
              <span v-if="props.item.total">${{ props.item.total.toFixed(2) }}</span>
              <span v-else>$0.00</span>
            </td>
            <td class="title text-xs-center">
              <v-flex class="xs12">
                <v-btn 
                  v-if="$auth.check(['admin','customer'])"
                  flat 
                  icon 
                  color="amber lighten-2" 
                  @click="viewInvoice(props.item)"
                >
                  <v-icon>fa-eye</v-icon>
                </v-btn>
              </v-flex>
              <v-flex class="xs12">
                <v-btn 
                  v-if="$auth.check('admin')" 
                  flat 
                  icon 
                  color="error" 
                  @click="openDialog(props.item)"
                >
                  <v-icon>fa-trash</v-icon>
                </v-btn>
              </v-flex>
            </td>
          </tr>
        </template>
       
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
            Oops! No Invoices Yet!
            <v-btn 
              v-if="$auth.check('admin')" 
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
      <confirm
        :callback="confirmed(deleteInvoice)" 
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
      { text: "Total", value: "total", align: "left", sortable: true },
      { text: "Actions", value: "actions", align: "left", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    search: "",
    domain: window.location.hostname,
    message:
      "Warning! Deleting This Invoicing Record Has Some Repercusion To The Sytem, Some Features That Reference To This Invoicing Record Will Break its Functionality Such As  Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!"
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
  },
  created() {
    let self = this;
    if (self.$auth.check("customer")) {
      let index = _.findIndex(self.headers, { value: "customer_name" });
      self.$delete(self.headers, index);
    }
  },
  mounted() {
    let self = this;
    self.fetchInvoices();
  },
  methods: {
    viewInvoice(invoice) {
      let self = this;
      self.$nextTick(() =>
        self.$router.push({
          name: "view-invoice",
          params: { id: `${invoice.id}` }
        })
      );
    },
    deleteInvoice(invoice) {
      let self = this;
      let id = invoice.id;
      let index = _.findIndex(self.items, { id: invoice.id });
      axios
        .get(route("api.invoice.delete", { id }))
        .then(response => {
          if (response.status === 200) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">${response.data.message}</p>`,
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
            title: "Oops! Something Went Wrong...",
            html: `<p class="title">${errors.response.data.message}</p>`,
            type: "error",
            confirmButtonText: "Back"
          });
        });
    },
    goToGenerateInvoice() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "generate-invoices" }));
    },
    fetchInvoices() {
      let self = this;
      axios.post(route("api.invoice.index")).then(response => {
        self.items = response.data.data;
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

