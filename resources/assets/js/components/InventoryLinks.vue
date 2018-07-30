<template>
  <v-list 
    class="blue-grey"
    dark
  >
    <v-list-group
      v-for="item in items"
      v-model="item.active"
      :key="item.title"
      no-action
      active-class="accent--text"
    >
      <v-list-tile slot="activator">
        <v-list-tile-action>
          <v-icon color="white">{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile
        v-for="subItem in item.items" 
        v-if="$auth.check(subItem.auth)"
        :key="subItem.title"
        :style="{color: isActive(subItem) ? activeColor : linkColor}"
        @click="loadview(subItem)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon :color="isActive(subItem) ? 'teal' : 'white'">{{ subItem.action }}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "#4DB6AC",
      linkColor: "#fffff",
      items: [
        {
          action: "collections_bookmark",
          title: "Inventories",
          items: [
            { title: "All Unknown Report", href: "/reports/all-unknown-report", action: "fa-question-circle", auth: ['admin'] },
            { title: "Unknown Customer", href: "/reports/unknown-customer", action: "supervised_user_circle", auth: ['admin','warehouse'] },
            { title: "Unknown Client", href: "/reports/unknown-client", action: "fa-users", auth:['admin','warehouse','customer'] },
            { title: "Unknown Shipper", href: "/reports/unknown-shipper", action: "fa-ship", auth:['admin','warehouse','customer'] },
            { title: "Damaged Report", href: "/reports/damaged", action: "broken_image",auth:['admin','warehouse','customer'] },
            { title: "Bin Report", href: "/reports/bin", action: "apps", auth: ['admin'] },
            { title: "Customer Report", href: "/reports/customer", action: "local_library",auth: ['admin'] },
            { title: "Client Report", href: "/reports/clients", action: "perm_contact_calendar",auth: ['admin'] }
          ]
        }
      ]
    };
  },
  methods: {
    isActive(item) {
      return item.href === this.$route.path;
    },
    loadview(subItem) {
      this.$router.push({ path: `${subItem.href}` });
    }
  }
};
</script>

<style>
.v-list__group__header__append-icon{
    color: #ffffff !important;
}
</style>
