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
      <v-toolbar-title class="text-xs-center white--text">Edit Item ID# {{ id }}</v-toolbar-title>
      <v-spacer/>
      <v-btn 
        flat 
        icon 
        color="white"
        @click.native="toggleRepair()"
      >
        <v-icon>save</v-icon>
      </v-btn>
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
        pa-2
      >
        <v-flex 
          v-if="!item.repaired"
          sm12
          md2
          offset-md10
        >
          <v-subheader>
            Is Item Repaired?
          </v-subheader>
          <v-switch
            v-model="item.repaired"
            :label="getRepairedStatus(item.repaired)"
          />
        </v-flex>
        <v-flex 
          v-else
          sm12
          md2
          order-md2
        >
          <v-subheader>
            Is Item Repaired?
          </v-subheader>
          <v-switch
            v-model="item.repaired"
            :label="getRepairedStatus(item.repaired)"
          />
        </v-flex>
        <v-flex 
          v-if="item.repaired"
          sm12
          offset-md8
          md2
        >
          <v-subheader>
            When is it Repaired?
          </v-subheader>
          <v-text-field
            :error-messages="errorMessages(`date_repaired`)"
            :class="{ 'error--text': hasErrors(`date_repaired`) }"
            v-model="date_repaired"
            label="Date Repaired"
            prepend-icon="event_note"
            data-vv-name="date_repaired"
            @click="openDateRepairedModal()"
          />
          <v-dialog
            ref="date_repaired"
            v-model="date_repaired_modal"
            :return-value.sync="date_repaired"
            persistent
            lazy
            full-width
            width="290px"
          >
            <v-date-picker 
              v-model="date_repaired" 
              scrollable>
              <v-spacer/>
              <v-btn 
                flat 
                color="primary" 
                @click="date_repaired_modal = false">Cancel</v-btn>
              <v-btn 
                flat 
                color="primary" 
                @click="save()">OK</v-btn>
            </v-date-picker>
          </v-dialog>
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
import validationError from "Mixins/validation-error";
import { Form } from "vform";
export default {
  components: {
    ModalLayout,
    Images,
    DamageImages
  },
  mixins: [validationError],
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
    storage_rates: [],
    date_repaired_modal: false,
    date_repaired: null,
    form: new Form({
      package_id: null,
      date_repaired: null
    })
  }),
  watch: {
    item: {
      handler: function(newValue) {},
      deep: false
    },
    "item.repaired"(newValue) {
      if (!newValue) {
        this.date_repaired = null;
      }
    }
  },
  mounted() {
    this.fetchPackage();
    this.form.package_id = this.id;
  },
  methods: {
    save() {
      this.$refs.date_repaired.save(this.date_repaired);
    },
    openDateRepairedModal() {
      this.date_repaired_modal = true;
    },
    toggleRepair() {
      let self = this;
      self.form.date_repaired = self.date_repaired;
      axios
        .post(route("api.report.toggleRepair"), self.form)
        .then(response => {
          console.log(response.data);
          return self.$nextTick(() => self.$router.go(-1));
        })
        .catch(error => {
          console.log(error);
        });
    },
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
          self.date_repaired = response.data.data.date_repaired;
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
