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
            <h2 class="display-1">Bin Report</h2>
            <v-divider/>
          </v-flex>
          <v-flex 
            xs12
            md6
            offset-md3>
            <v-autocomplete
              v-validate="'required'"
              :items="bins"
              v-model="form.bin_name"
              :error-messages="errorMessages('bin_name')"
              :class="{ 'error--text': hasErrors('bin_name') }"
              item-text="code"
              item-value="code"
              required
              label="Choose Bin"
              light
              prepend-icon="view_comfy"
              data-vv-name="bin_name"
              hint="Choose Bin"
              persistent-hint
              
            />
          </v-flex>
          <v-flex 
            v-if="items.length>0"
            xs12
            md6
            offset-md3
          >
            <v-btn 
              color="secondary" 
              block
              @click="viewPDF(form.bin_id)"
            >
              View As PDF
              <v-icon 
                color="indigo lighten-4" 
                right>
                picture_as_pdf
              </v-icon>

            </v-btn>
          </v-flex>
          <v-flex 
            xs12 
            text-xs-center>
            <h2>Total Items: {{ items.length }}</h2>
            <h2>Total Cube: {{ total_cube }}</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container 
      style="margin-top:-190px;"
      fluid>
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
                label="Search Packages"
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
              {{ props.item.dsg_id }}
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
            <td 
              class="title text-xs-left"
            >
              {{ props.item.po_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.style_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.description }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.damage_description }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.cube }}
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
            Opps! There are No Items Yet At the Selected Bin!
          </v-alert>
        </template>
        <!-- No Search Result Section -->
        <v-alert 
          slot="no-results" 
          :value="true" 
          color="blue-grey" 
          icon="warning"
        >
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
      { text: "DSG#", value: "dsg_id", align: "left", sortable: true },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      { text: "Client", value: "client_name", align: "left", sortable: true },
      { text: "PO#", value: "po_no", align: "left", sortable: true },
      { text: "Style#", value: "style_no", align: "left", sortable: true },
      {
        text: "Description",
        value: "description",
        align: "left",
        sortable: true
      },
      {
        text: "Damaged Description",
        value: "damage_description",
        align: "left",
        sortable: true
      },
      { text: "Cube", value: "cube", align: "left", sortable: true }
    ],
    items: [],
    bins: [],
    selected: [],
    pagination: {
      sortBy: "name",
      rowPerPage: "all"
    },
    form: new Form({
      bin_name: "",
      bin_id: ""
    }),
    search: "",
    domain: window.location.hostname
  }),
  computed: {
    total_cube() {
      let total = 0;
      this.items.forEach(item => {
        total += item.cube;
      });
      return `${total.toFixed(4)} cu.ft`;
    }
  },
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
    "form.bin_name": {
      handler: function(newValue) {
        let bin = this.bins.find(bin => {
          return bin.code === newValue;
        });
        this.form.bin_id = bin.id;
        this.fetchPackages();
      },
      deep: true
    }
  },
  mounted() {
    let self = this;
    self.getBins();
  },
  methods: {
    viewPDF(id) {
      let url = `${window.location.protocol}//${
        window.location.hostname
      }/pdf/bin-report/${id}`;
      window.open(url);
    },
    getBins() {
      let self = this;
      axios.post(route("api.bin.index")).then(response => {
        self.bins = response.data.data;
      });
    },
    viewItem(id) {
      this.$router.push({
        name: "view-damaged-package",
        params: { id: `${id}` }
      });
    },
    async fetchPackages() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.reportByBin"),
          self.form
        );
        self.items = payload.data.data;
      } catch ({ errors, message }) {
        if (errors) {
          self.form.errors.set(errors);
        }
        if (message) {
        }
        self.form.busy = false;
      }
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

