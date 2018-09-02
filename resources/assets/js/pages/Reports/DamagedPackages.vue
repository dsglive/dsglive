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
            <h2 class="display-1">Damaged Items Report</h2>
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
                label="Search Damaged Packages"
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
              {{ props.item.bin_name }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.style_no }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.damage_description }}
            </td>
            <td class="title text-xs-center">
              <v-btn 
                v-if="$auth.check('admin')"
                flat 
                icon 
                color="amber lighten-2" 
                class="compress--icon"
                @click="viewItem(props.item.id)"
              >
                <v-icon>fa-eye</v-icon>
              </v-btn>
              <v-btn 
                v-if="$auth.check('admin')"
                flat 
                icon 
                color="blue" 
                class="compress--icon"
                @click="editItem(props.item.id)"
              >
                <v-icon>fa-pencil</v-icon>
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
            Opps! There are No Damaged Items Yet!, 
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
      { text: "Bin#", value: "bin_name", align: "left", sortable: true },
      { text: "Style#", value: "style_no", align: "left", sortable: true },
      {
        text: "Damaged Description",
        value: "damage_description",
        align: "left",
        sortable: true
      },
      { text: "Actions", value: "actions", align: "right", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    form: new Form({}),
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
    self.fetchDsg();
  },
  methods: {
    viewItem(id) {
      this.$router.push({ name: "view-package", params: { id: `${id}` } });
    },
    editItem(id) {
      this.$router.push({ name: "edit-package", params: { id: `${id}` } });
    },
    async fetchDsg() {
      let self = this;
      self.form.busy = true;
      try {
        const payload = await axios.post(
          route("api.report.reportAllDamaged"),
          self.form
        );
        self.items = payload.data.data;
        self.form = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.form.errors.set(errors);
        }
        if (message) {
        }
        self.form.busy = false;
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