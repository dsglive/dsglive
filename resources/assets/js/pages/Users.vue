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
                    label="Search Users"
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
                @click="createUser">
                Create New Account
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
      <!-- User Data Table -->
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
              {{ props.item.name }}
            </td>

            <td class="title text-xs-left accent--text">
              {{ props.item.email }}
            </td>
            <td class="title text-xs-left accent--text">
              <v-chip>
                <v-avatar>
                  <img 
                    :src="props.item.avatar" 
                    :alt="props.item.username"
                  >
                </v-avatar>
                {{ props.item.username }}
              </v-chip>
            </td>
            <td class="title text-xs-left accent--text">
              <v-switch
                v-model="props.item.active"
                :label="getStatus(props.item.active)"
                @change="toggleStatus(props.item)"
              />
            </td>
            
            <td class="title text-xs-left accent--text">
              <v-chip
                v-for="(role,key) in props.item.roles"
                :key="key" 
                dark
              >
                <v-avatar
                  :class="{
                    'primary': (role === 'admin'),
                    'white--text': true,
                    warning: (role === 'warehouse'),
                    'blue': (role === 'customer')
                  }"
                >
                  <span class="headline">{{ role.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                {{ role }}
              </v-chip>
            </td>
            <td class="title text-xs-center">
              <v-btn 
                :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
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
                flat 
                icon 
                color="error" 
                @click="deleteUser(props.item)"
              >
                <v-icon>fa-trash</v-icon>
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
                      <v-avatar text-xs-left>
                        <img 
                          :src="props.item.avatar" 
                          :alt="props.item.name"
                        >
                      </v-avatar>
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
                        v-model="props.item.username"
                        label="Username"
                        prepend-icon="fa-at"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        :value="props.item.company_name"
                        label="Company Name"
                        light
                        readonly
                        prepend-icon="domain"
                      />
                    </v-flex>
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
                        :value="props.item.first_name"
                        label="First Name"
                        light
                        readonly
                        prepend-icon="person"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.last_name"
                        label="Last Name"
                        light
                        readonly
                        prepend-icon="people"
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
                    <v-flex 
                      xs6 
                      px-1>
                      <v-autocomplete
                        :items="roles"
                        v-model="props.item.roles"
                        readonly
                        label="Account Type"
                        color="primary"
                        light
                        chips
                        tags
                        prepend-icon="fa-tags"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
                          <v-chip
                            :selected="data.selected"
                            light
                          >
                            <v-avatar
                              class="blue-grey white--text"
                            >
                              <span class="headline">{{ data.item.charAt(0).toUpperCase() }}</span>
                            </v-avatar>
                            {{ data.item }}
                          </v-chip>
                        </template>
                      </v-autocomplete>
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-switch
                        v-model="props.item.active"
                        :label="getStatus(props.item.active)"
                        readonly
                      />
                    </v-flex>
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
            Opps!!! Nothing To Display! :(
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
      { text: "ID", value: "id", align: "left", sortable: true },
      { text: "Name", value: "name", align: "left", sortable: true },
      { text: "Email", value: "email", align: "left", sortable: true },
      { text: "Username", value: "username", align: "left", sortable: true },
      { text: "Status", value: "active", align: "left", sortable: true },
      { text: "Roles", value: "roles", align: "left", sortable: false },
      { text: "Actions", value: "actions", align: "right", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    usersForm: new Form({}),
    toggleForm: new Form({
      toggle: false,
      user_id: null
    }),
    search: "",
    roles: [],
    permissions: [],
    rolesForm: new Form({
      roles: []
    }),
    deleteUserForm: new Form({
      user_id: null
    }),
    domain: window.location.hostname
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
    roles(newValue) {},
    permissions(newValue) {}
  },
  mounted() {
    let self = this;
    self.fetchRoles();
    self.fetchUsers();
  },
  methods: {
    createUser() {
      vm.$router.push({ name: "create-user" });
    },
    toggleStatus(user) {
      let self = this;
      self.toggleForm.toggle = user.active;
      self.toggleForm.user_id = user.id;
      if (user.id === 1) {
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Oops! Forbidden Action!",
          html: `<p class="title">Cannot Modify Super Admin Account Type!</p>`,
          type: "warning",
          confirmButtonText: "Back"
        });
        user.active = true;
        return;
      }
      axios
        .post(route("api.user.toggleStatus"), self.toggleForm)
        .then(response => {
          console.log(response.data);
        })
        .catch(errors => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Oops! Forbidden Action!",
            html: '<p class="title">' + errors.response.data.message + "</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        });
    },
    getStatus(status) {
      if (status) {
        return "Active";
      } else {
        return "Inactive";
      }
    },
    async fetchRoles() {
      let self = this;
      try {
        const payload = await axios.get(route("api.roles.index"));
        self.roles = payload.data;
      } catch ({ errors, message }) {
        if (errors) {
          console.log("fetchRoles:errors", errors);
        }
        if (message) {
          console.log("fetchRoles:error-message", message);
        }
      }
    },
    async fetchUsers() {
      let self = this;
      self.usersForm.busy = true;
      try {
        const payload = await axios.post(
          route("api.user.index"),
          self.usersForm
        );
        self.items = payload.data.data;
        self.usersForm = new Form({});
      } catch ({ errors, message }) {
        if (errors) {
          self.usersForm.errors.set(errors);
        }
        if (message) {
        }
        self.usersForm.busy = false;
      }
    },
    deleteUser(user) {
      let self = this;
      self.deleteUserForm.user_id = user.id;
      let index = _.findIndex(self.items, { id: user.id });
      axios
        .post(route("api.user.delete"), self.deleteUserForm)
        .then(response => {
          if (response.data.status === true) {
            self.$delete(self.items, index);
            let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">User Deleted!</p>`,
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
    toProperCase(key) {
      let newStr = key.replace(/_/g, " ");
      return newStr.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    async changeRoles(item) {
      let self = this;
      self.rolesForm.roles = item.roles;
      try {
        self.rolesForm.busy = true;
        const payload = await App.post(
          route("api.user.roles.sync", { id: item.id }),
          self.rolesForm
        );
        item.permissions = payload.data.permissions;
        self.rolesForm.busy = false;
        self.rolesForm = new Form({
          roles: []
        });
      } catch ({ message }) {
        if (message) {
        }
        self.rolesForm.busy = false;
      }
    },
    removeRole(role, roles) {
      roles.splice(roles.indexOf(role), 1);
      roles = [...roles];
    },
    deleteAll() {
      this.items = [];
      this.selected = [];
    },
    async massDeactivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massDeactivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = false;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    async massActivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massActivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = true;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    deleteSelected() {
      let self = this;
      let newItems = _.difference(self.items, self.selected);
      self.items = newItems;
      self.selected = [];
      //! Send Api Call To Delete The Social Account
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

<style>
.noHover {
  pointer-events: none;
}
</style>
