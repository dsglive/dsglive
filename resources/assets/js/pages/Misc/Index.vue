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
                    label="Search Miscellaneous"
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
                @click="createMisc">
                Create New Miscellaneous
                <v-icon
                  right
                  color="accent" 
                >
                  note_add
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- Misc Data Table -->
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
                @click="editMisc(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
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
            <td class="title text-xs-center accent--text">
              {{ props.item.amount }}
            </td>
            <td class="title text-xs-center accent--text">
              {{ props.item.invoice_date }}
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
            Opps! No Miscellaneous Yet!, 
            <v-btn 
              :disabled="!$auth.check('admin')" 
              color="white" 
              flat
              dark
              @click="createMisc">
              Create New Miscellaneous
              <v-icon
                right
              >
                note_add
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
            <v-subheader >No Miscellaneous Notes.</v-subheader>
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
        :callback="confirmed(deleteMisc)" 
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
      { text: "ID#", value: "id", align: "left", sortable: true },
      {
        text: "Customer",
        value: "customer_name",
        align: "left",
        sortable: true
      },
      { text: "Client", value: "client_name", align: "left", sortable: true },

      { text: "Amount($)", value: "amount", align: "left", sortable: true },
      {
        text: "Invoice Date",
        value: "invoice_date",
        align: "left",
        sortable: true
      }
    ],
    items: [],
    pagination: {
      sortBy: "name"
    },
    miscForm: new Form({}),
    search: "",
    deleteMiscForm: new Form({
      misc_id: null
    }),
    domain: window.location.hostname,
    message:
      "Warning! Deleting This Miscellaneous Record Has Some Repercusion To The Sytem, Some Features That Reference To This Miscellaneous Record Will Break its Functionality Such As  Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!"
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    }
  },
  mounted() {
    let self = this;
    self.fetchMisc();
  },
  methods: {
    viewPdf() {
      console.log("viewing PDF");
    },
    editMisc(misc) {
      vm.$router.push({ name: "edit-misc", params: { id: `${misc.id}` } });
    },
    createMisc() {
      vm.$router.push({ name: "create-misc" });
    },
    async fetchMisc() {
      let self = this;
      self.miscForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.misc.index"),
          self.miscForm
        );
        self.items = payload.data.data;
        self.miscForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.miscForm.errors.set(errors);
        }
        if (message) {
        }
        self.miscForm.busy = false;
      }
    },
    deleteMisc(misc) {
      let self = this;
      self.deleteMiscForm.misc_id = misc.id;
      let index = _.findIndex(self.items, { id: misc.id });
      axios
        .post(route("api.misc.delete"), self.deleteMiscForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
              confirmButtonClass: "v-btn blue-grey  subheading white--text",
              buttonsStyling: false
            });
            toggleModal({
              title: "Success",
              html: `<p class="title">Misc Deleted!</p>`,
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