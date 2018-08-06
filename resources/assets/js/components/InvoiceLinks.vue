<template>
  <v-list 
    v-if="$auth.check('admin')" 
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
          action: "card_membership",
          title: "Invoices",
          items: [
            { title: "Generate Invoice", href: "/invoices/generate", action: "schedule" },
            { title: "Invoices", href: "/invoices", action: "all_inbox" },
            { title: "Weekly Report", href: "/reports/total-all-customer-invoice", action: "picture_as_pdf" },
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
