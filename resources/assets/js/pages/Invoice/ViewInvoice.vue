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
        <v-toolbar-title class="text-xs-center white--text">Viewing Invoice# {{ id }}</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-layout 
        row 
        wrap
        my-3
        py-3
        mx-5
        px-5
      >
        <v-flex 
          xs12
          lg2
          offset-lg1
        >
          <v-text-field
            v-model="customer.customer_name"
            light
            readonly
            disabled
            label="Customer"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="customer.receiving_fee"
            light
            readonly
            disabled
            label="Receiving Fee"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="customer.delivery_fee"
            light
            readonly
            disabled
            label="Delivery Fee"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="customer.storage_fee"
            light
            readonly
            disabled
            label="Storage Fee"
          />
        </v-flex>
        <v-flex 
          xs12
          lg2
        >
          <v-text-field
            v-model="customer.misc_fee"
            light
            readonly
            disabled
            label="Misc Fee"
          />
        </v-flex>
        <v-flex 
          xs12
          lg10
          offset-lg1
        >
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search Client"
            single-line
            hide-details
            light
          />
        </v-flex>
      </v-layout>
      <v-container>
        <v-layout
          row 
          wrap
          pa-0
          ma-0
        >
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="items"
            :search="search"
            :pagination.sync="pagination"
            item-key="client_id"
          >
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
                  {{ props.item.client_id }}
                </td>
                <td class="title text-xs-left accent--text">
                  {{ props.item.client_name[0] }}
                </td>
                <td 
                  class="title text-xs-left accent--text"
                >
                  {{ props.item.receiving_fee }}
                </td>
                <td 
                  class="title text-xs-left accent--text"
                >
                  {{ props.item.delivery_fee }}
                </td>
                <td class="title text-xs-left accent--text">
                  {{ props.item.storage_fee }}
                </td>
                <td class="title text-xs-center accent--text">
                  {{ props.item.misc_fee }}
                </td>
              </tr>
            </template>
            <!-- Expand Section -->
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
                Opps! No Clients
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
        </v-layout>
      </v-container>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /* Always Declare Your Form Object */
    customer: {
      customer_id: null,
      receiving_fee: null,
      delivery_fee: null,
      storage_fee: null,
      misc_fee: null
    },
    clients: [],
    headers: [
      { text: "Client ID#", value: "client_id", align: "left", sortable: true },
      { text: "Name#", value: "client_name[0]", align: "left", sortable: true },
      {
        text: "Receiving Fee",
        value: "receiving_fee",
        align: "left",
        sortable: true
      },
      {
        text: "Delivery Fee",
        value: "delivery_fee",
        align: "left",
        sortable: true
      },
      {
        text: "Storage Fee",
        value: "storage_fee",
        align: "left",
        sortable: true
      },
      { text: "Misc Fee", value: "misc_fee", align: "left", sortable: true }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    search: "",
  }),
  watch: {
    clients: {
      handler: function(newValue) {},
      deep: true
    },
    customer: {
      handler: function(newValue) {},
      deep: false
    }
  },
  created() {
    this.fetchInvoice();
  },
  methods: {
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "invoices" }));
    },
    fetchInvoice() {
      let id = this.id;
      let self = this;
      axios.get(route("api.invoice.view", { id })).then(response => {
        let data = response.data;
        self.clients = data.clients;
        self.customer = data.customer;
        self.items = data.clients;
        self.items.forEach(element => {
            console.log('element',element)
            element.receiving_fee =  _.sum(element.receiving_fee)
            element.delivery_fee =  _.sum(element.delivery_fee)
            element.misc_fee =  _.sum(element.misc_fee)
            element.storage_fee =  _.sum(element.storage_fee)
        });
      });
    }
  }
};
</script>
