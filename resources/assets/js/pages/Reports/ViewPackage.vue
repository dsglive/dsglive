<template>
  <modal-layout>
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
      <v-toolbar-title class="text-xs-center white--text">View Item ID# {{ id }}</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-container 
      fluid
      grid-list-md
    >
      <v-layout 
        row 
        wrap
        pa-2
      >
        <v-flex 
          sm12
          md4
        >
          <v-text-field
            v-model="item.customer_name"
            readonly
            label="Customer"
            prepend-icon="supervised_user_circle"
          />
        </v-flex>
        <v-flex 
          sm12
          md4
        >
          <v-text-field
            v-model="item.client_name"
            readonly
            label="Client"
            prepend-icon="fa-users"
          />
        </v-flex>
        <v-flex 
          sm12
          md4
        >
          <v-text-field
            v-model="item.dsg_id"
            readonly
            label="DSG No."
            prepend-icon="local_offer"
          />
        </v-flex>
        <!-- 6flex tab-->

        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.po_no"
            readonly
            label="PO No."
            prepend-icon="bookmark"
          />
        </v-flex>
        <v-flex
          sm12
          md2
        >
          <v-text-field
            v-model="item.date_received"
            readonly
            label="Date Received"
            prepend-icon="event_available"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.date_processed"
            readonly
            label="Date Processed"
            prepend-icon="event_note"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.bin_name"
            readonly
            label="Bin"
            light
            prepend-icon="view_comfy"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.handling_type"
            readonly
            label="Handling Note"
            light
            prepend-icon="receipt"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.store_at"
            readonly
            label="Store At"
            light
            prepend-icon="dns"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.style_no"
            readonly
            label="Style No."
            prepend-icon="style"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.length"
            readonly
            label="Length"
            suffix="ft"
            prepend-icon="keyboard_tab"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.width"
            readonly
            label="Width"
            suffix="ft"
            prepend-icon="swap_horiz"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.height"
            readonly
            label="Height"
            suffix="ft"
            prepend-icon="swap_vert"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-text-field
            v-model="item.cube"
            readonly
            label="Cube"
            suffix="ft³"
            prepend-icon="fa-cube"
          />
        </v-flex>
        <v-flex 
          sm12
          md2
        >
          <v-switch
            v-model="item.damaged"
            :label="getDamageStatus(item.damaged)"
            readonly
          />
        </v-flex>
      </v-layout>
            
      <v-layout
        row 
        wrap
        pa-2
      >
        <v-flex 
          sm12
          md6 
          px-3
        >
          <v-subheader>
            Item Description:
            <v-spacer/>
            <v-btn
              flat 
              icon
              @click="viewImages()"
            >
              <v-icon 
                color="blue" 
              >
                image
              </v-icon>
            </v-btn>
          </v-subheader>
          <v-text-field
            v-model="item.description"
            readonly
          />
        </v-flex>
        <v-flex 
          sm12
          md6 
          px-3
        >
          <v-subheader v-if="item.damaged">
            Damage Description:
            <v-spacer/>
            <v-btn
              flat 
              icon
              @click="viewDamageImages()"
            >
              <v-icon 
                color="red" 
              >
                broken_image
              </v-icon>
            </v-btn>
          </v-subheader>
          <v-text-field
            v-if="item.damaged"
            v-model="item.damage_description"
            readonly
          />
        </v-flex>
      </v-layout>
      <v-layout
        v-if="item.damaged"
        row 
        wrap
      >
        <v-flex 
          v-if="!item.repaired"
          sm12
          md2
          offset-md10
        >
          <v-switch
            v-model="item.repaired"
            :label="getRepairedStatus(item.repaired)"
            readonly
          />
        </v-flex>
        <v-flex 
          v-else
          sm12
          md2
          order-md2
        >
          <v-switch
            v-model="item.repaired"
            :label="getRepairedStatus(item.repaired)"
            readonly
          />
        </v-flex>
        <v-flex 
          v-if="item.repaired"
          sm12
          offset-md8
          md2
        >
          <v-text-field
            v-model="item.date_repaired"
            label="Date Repaired"
            prepend-icon="event_note"
            readonly
          />
        </v-flex>
      </v-layout>
    </v-container> 
    <images 
      :id="id" 
      :images="item.package_images"
    />
    <damage-images 
      :id="id" 
      :images="item.damaged_images"
    />
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import Images from "Components/packages/Images.vue";
import DamageImages from "Components/packages/DamageImages.vue";
export default {
  components: {
    ModalLayout,
    Images,
    DamageImages
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    item: {},
    bins: [],
    handling_rates: [],
    storage_rates: []
  }),
  watch: {
    item: {
      handler: function(newValue) {},
      deep: false
    }
  },
  mounted() {
    this.fetchPackage();
  },
  methods: {
    viewDamageImages() {
      Bus.$emit(`view-damaged-package-${this.id}-images`);
    },
    viewImages() {
      Bus.$emit(`view-package-${this.id}-images`);
    },
    redirectBack() {
      let self = this;
      return self.$nextTick(() => self.$router.go(-1));
    },
    fetchPackage() {
      let self = this;
      axios
        .post(route("api.report.viewPackage", { package: this.id }))
        .then(response => {
          self.item = response.data.data;
        });
    },
    getDamageStatus(status) {
      if (status) {
        return "Damaged: Yes";
      } else {
        return "Damaged: No";
      }
    },
    getRepairedStatus(status) {
      if (status) {
        return "Repaired: Yes";
      } else {
        return "Repaired: No";
      }
    }
  }
};
</script>

<style>
</style>
