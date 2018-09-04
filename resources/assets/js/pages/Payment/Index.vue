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
                    label="Search Payment"
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
                @click="createPayment">
                Create New Payment
                <v-icon
                  right
                  color="accent" 
                >
                  attach_money
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- Payment Data Table -->
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
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
                @click="editPayment(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!$auth.check('admin')" 
                flat 
                icon 
                color="error" 
                class="compress--icon"
                @click="openDialog(props.item)"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
            </td>
            
            <td 
              :class="{'red--text': props.item.customer_id === null || props.item.customer_id === 1001, 'accent--text': props.item.customer_id > 1001}" 
              class="title text-xs-left"
            >
              {{ props.item.customer.company_name }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.transaction_id }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.type }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.amount }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.date_paid }}
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
            Opps! No Payment Yet!, 
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="createPayment">
              Create New Payment
              <v-icon
                right
              >
                attach_money
              </v-icon>
            </v-btn>
          </v-alert>
        </template>
        <template 
          slot="expand" 
          slot-scope="props"
        >
          <v-alert 
            v-if="props.item.notes"
            :value="true" 
            color="blue lighten-4"
            icon="info"
          >
            <v-subheader >Notes: {{ props.item.notes }}</v-subheader>
          </v-alert>
          <v-alert 
            v-else
            :value="true" 
            color="red lighten-4"
            icon="warning"
          >
            <v-subheader >No Payment Notes.</v-subheader>
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
        :callback="confirmed(deletePayment)" 
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
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "Actions", value: "actions", align: "center", sortable: false },
      {
        text: "Customer",
        value: "customer.company_name",
        align: "left",
        sortable: true
      },
      { text: "Transaction#", value: "transaction_id", align: "left", sortable: true },
      { text: "Type", value: "type", align: "left", sortable: true },
      { text: "Amount($)", value: "amount", align: "left", sortable: true },
      {
        text: "Date Paid",
        value: "date_paid",
        align: "left",
        sortable: true
      }
    ],
    items: [],
    pagination: {
      sortBy: "name"
    },
    paymentForm: new Form({}),
    search: "",
    deletePaymentForm: new Form({
      payment_id: null
    }),
    domain: window.location.hostname,
    message:
      "Warning! Deleting This Payment Record Has Some Repercusion To The Sytem, Some Features That Reference To This Payment Record Will Break its Functionality Such As  Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!"
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    }
  },
  mounted() {
    let self = this;
    self.fetchPayments();
  },
  methods: {
    viewPdf() {
      console.log("viewing PDF");
    },
    editPayment(payment) {
      vm.$router.push({ name: "edit-payment", params: { id: `${payment.id}` } });
    },
    createPayment() {
      vm.$router.push({ name: "create-payment" });
    },
    async fetchPayments() {
      let self = this;
      self.paymentForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.payment.index"),
          self.paymentForm
        );
        self.items = payload.data.data;
        self.paymentForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.paymentForm.errors.set(errors);
        }
        if (message) {
        }
        self.paymentForm.busy = false;
      }
    },
    deletePayment(payment) {
      let self = this;
      self.deletePaymentForm.payment_id = payment.id;
      let index = _.findIndex(self.items, { id: payment.id });
      axios
        .post(route("api.payment.delete"), self.deletePaymentForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">Payment Deleted!</p>`,
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