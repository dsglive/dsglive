<template>
  <v-layout 
    row
    wrap
    pa-3
    ma-3
  >
    <v-card>
      <v-toolbar class="blue-grey">
        <v-btn
          v-if="!readonly"
          flat 
          icon
          color="blue lighten-4" 
          @click.native="addNewPackage()"
        >
          <v-icon x-large>add_circle</v-icon>
        </v-btn>
        <v-btn
          v-if="!readonly"
          flat 
          icon
          color="green lighten-2" 
          @click.native="clonePackage()"
        >
          <v-icon x-large>file_copy</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="text-md-center white--text">Package# {{ index }}</v-toolbar-title>
        <v-spacer/>
        <v-btn
          v-if="!readonly"
          flat 
          icon
          color="red" 
          @click.native="deletePackage(item.id)"
        >
          <v-icon x-large>close</v-icon>
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
            <v-autocomplete
              v-validate="'required'"
              :items="bins"
              v-model="item.bin_id"
              :error-messages="errorMessages(`packages.${iteration}.bin_id`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.bin_id`) }"
              :readonly="readonly"
              :disabled="readonly"
              item-text="code"
              item-value="id"
              required
              label="Choose Bin"
              light
              prepend-icon="view_comfy"
              data-vv-name="`packages.${iteration}.bin_id`"
              hint="Choose Bin"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-autocomplete
              v-validate="'required'"
              :items="handlingRates"
              v-model="item.handling_type"
              :error-messages="errorMessages(`packages.${iteration}.handling_type`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.handling_type`) }"
              :readonly="readonly"
              :disabled="readonly"
              item-text="name"
              item-value="id"
              required
              label="Choose Handling Note"
              light
              prepend-icon="receipt"
              data-vv-name="`packages.${iteration}.handling_type`"
              hint="Choose Handling Note"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-autocomplete
              v-validate="'required'"
              :items="store_at"
              v-model="item.store_at"
              :error-messages="errorMessages(`packages.${iteration}.store_at`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.store_at`) }"
              :readonly="readonly"
              :disabled="readonly"
              required
              label="Store At"
              light
              prepend-icon="dns"
              data-vv-name="`packages.${iteration}.store_at`"
              hint="Choose Store At"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-text-field
              v-validate="'required'"
              v-model="item.style_no"
              :error-messages="errorMessages(`packages.${iteration}.style_no`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.style_no`) }"
              :readonly="readonly"
              label="Style No."
              prepend-icon="style"
              data-vv-name="`packages.${iteration}.style_no`"
              hint="Required"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-text-field
              v-model="item.length"
              :readonly="readonly"
              label="Length"
              suffix="ft"
              prepend-icon="keyboard_tab"
              hint="Optional"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-text-field
              v-model="item.width"
              :readonly="readonly"
              label="Width"
              suffix="ft"
              prepend-icon="swap_horiz"
              hint="Optional"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-text-field
              v-model="item.height"
              :readonly="readonly"
              label="Height"
              suffix="ft"
              prepend-icon="swap_vert"
              hint="Optional"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-text-field
              v-validate="'required'"
              v-model="item.cube"
              :error-messages="errorMessages(`packages.${iteration}.cube`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.cube`) }"
              :readonly="readonly"
              label="Cube"
              suffix="ft³"
              prepend-icon="fa-cube"
              data-vv-name="`packages.${iteration}.cube`"
              hint="Required"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md2
          >
            <v-switch
              :disabled="readonly"
              v-model="item.damaged"
              :label="getDamageStatus(item.damaged)"
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
              Package Description:
            </v-subheader>
            <v-textarea
              v-validate="'required'"
              v-model="item.description"
              :readonly="readonly"
              :error-messages="errorMessages(`packages.${iteration}.description`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.description`) }"
              counter
              maxlength="255"
              full-width
              outline
              data-vv-name="`packages.${index}.description`"
              hint="Required"
              persistent-hint
            />
          </v-flex>
          <v-flex 
            sm12
            md6 
            px-3
          >
            <v-subheader v-if="item.damaged">
              Damage Description:
            </v-subheader>
            <v-textarea
              v-validate="'required: item.damaged'"
              v-if="item.damaged"
              v-model="item.damage_description"
              :readonly="readonly"
              :error-messages="errorMessages(`packages.${iteration}.damage_description`)"
              :class="{ 'error--text': hasErrors(`packages.${iteration}.damage_description`) }"
              counter
              maxlength="255"
              full-width
              outline
              hint="Required If Marked As Damaged"
              data-vv-name="`packages.${iteration}.damage_description`"
              persistent-hint
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
              :disabled="readonly"
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
            <v-switch
              :disabled="readonly"
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
            <v-dialog
              :ref="`date_repaired_${item.id}`"
              v-model="date_repaired_modal"
              :return-value.sync="item.date_repaired"
              persistent
              lazy
              full-width
              width="290px"
            >
              <v-text-field
                slot="activator"
                :disabled="readonly"
                :error-messages="errorMessages(`packages.${iteration}.date_repaired`)"
                :class="{ 'error--text': hasErrors(`packages.${iteration}.date_repaired`) }"
                v-model="item.date_repaired"
                label="Date Repaired"
                prepend-icon="event_note"
                data-vv-name="`packages.${iteration}.date_repaired`"
                readonly
              />
              <v-date-picker 
                v-model="item.date_repaired" 
                scrollable>
                <v-spacer/>
                <v-btn 
                  flat 
                  color="primary" 
                  @click="date_repaired_modal = false">Cancel</v-btn>
                <v-btn 
                  flat 
                  color="primary" 
                  @click="save(item,item.date_repaired)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout
          v-if="!readonly" 
          row
          wrap
          pa-0
          ma-0
        >
          <v-flex 
            sm12
            md6
          >
            <v-btn 
              block
              flat
              color="blue"
              @click="openPackageImagesModal()"
            >
              Upload Package Images <v-icon right>add_photo_alternate</v-icon>
            </v-btn>
            <package-images-uploader 
              :id="item.id" 
              :item="item"
            />
          </v-flex>
          <v-flex 
            v-if="item.damaged"
            sm12
            md6
          >
            <v-btn 
              block
              flat
              color="orange"
              @click="openDamagedImagesModal()"
            >
              Upload Damaged Images <v-icon right>broken_image</v-icon>
            </v-btn>
            <damaged-images-uploader 
              :id="item.id" 
              :item="item"
            />
          </v-flex>
        </v-layout>
      </v-container>  
    </v-card>
  </v-layout>
</template>

<script>
import PackageImagesUploader from "Components/uploads/PackageImagesUploader";
import DamagedImagesUploader from "Components/uploads/DamagedImagesUploader";
import validationError from "Mixins/validation-error";

export default {
  components: {
    PackageImagesUploader,
    DamagedImagesUploader
  },
  mixins: [validationError],
  props: {
    item: {
      type: Object,
      required: true
    },
    packages: {
      type: Array,
      required: true
    },
    bins: {
      type: Array,
      required: true
    },
    handlingRates: {
      type: Array,
      required: true
    },
    storageRates: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 1
    },
    iteration: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    store_at: ["rack", "floor"],
    date_repaired_modal: false,
    date_repaired: null
  }),
  watch: {
    "item.length"(newvalue) {
      this.updatetotalCube();
    },
    "item.width"(newValue) {
      this.updatetotalCube();
    },
    "item.height"(newValue) {
      this.updatetotalCube();
    },
    "item.handling_type"(newValue) {
      let self = this;
      let rate = _.find(self.handlingRates, function(r) {
        return r.id === newValue;
      });
      self.item.handling_fee = rate.amount;
    },
    "item.store_at"(newValue) {
      let self = this;
      let rate = _.find(self.storageRates, function(r) {
        let name = r.name;
        let nameArray = name.split(" ");
        name = nameArray[0].toLowerCase();
        return name === newValue;
      });
      self.item.storage_fee = rate.amount;
    },
    "item.bin_id": {
      handler: function(newValue) {
        let self = this;
        if (newValue != null || newValue != undefined) {
          if (self.bins.length > 0) {
            let bin = _.find(self.bins, function(b) {
              return b.id === newValue;
            });
            if (bin != undefined) {
              self.item.bin_name = bin.code;
            }
          }
        } else {
          self.item.bin_name = null;
        }
      },
      deep: false
    }
  },
  methods: {
    clonePackage() {
      let self = this;
      axios.post(route("api.package.add")).then(response => {
        let item = response.data.data;
        item.dsg_id = self.item.dsg_id;
        item.date_received = self.item.date_received;
        item.date_processed = self.item.date_processed;
        item.client_id = self.item.client_id;
        item.client_name = self.item.client_name;
        item.customer_id = self.item.customer_id;
        item.customer_name = self.item.customer_name;
        item.shipper_id = self.item.shipper_id;
        item.shipper_name = self.item.shipper_name;

        item.bin_id = self.item.bin_id;
        item.bin_name = self.item.bin_name;

        item.po_no = self.item.po_no;
        item.style_no = self.item.style_no;

        item.length = self.item.length;
        item.width = self.item.width;
        item.height = self.item.height;
        item.cube = self.item.cube;

        item.damaged = self.item.damaged;
        item.damage_description = self.item.damage_description;
        item.repaired = self.item.repaired;
        item.date_repaired = self.item.date_repaired;

        item.handling_fee = self.item.handling_fee;
        item.handling_type = self.item.handling_type;
        item.store_at = self.item.store_at;
        item.storage_fee = self.item.storage_fee;

        item.description = self.item.description;
        self.packages.push(item);
        self.form.packages.push(item);
      });
    },
    addNewPackage() {
      let self = this;
      axios.post(route("api.package.add")).then(response => {
        let item = response.data.data;
        item.date_received = self.item.date_received;
        item.date_processed = self.item.date_processed;
        item.po_no = self.item.po_no;
        item.customer_id = self.form.customer_id;
        item.customer_name = self.form.customer_name;
        item.client_id = self.form.client_id;
        item.client_name = self.form.client_name;
        item.shipper_id = self.form.shipper_id;
        item.shipper_name = self.form.shipper_name;
        self.packages.push(item);
      });
    },
    updatetotalCube() {
      let volume = this.item.length * this.item.width * this.item.height;
      this.item.cube = (volume / 1728).toFixed(4);
    },
    save(item, date) {
      let ref = `date_repaired_${item.id}`;
      this.$refs[ref].save(date);
    },
    toggleModal(id) {
      this.date_repaired_modal = !this.date_repaired_modal;
    },
    openPackageImagesModal() {
      Bus.$emit(`upload-package-images-${this.item.id}`);
    },
    openDamagedImagesModal() {
      Bus.$emit(`upload-damaged-images-${this.item.id}`);
    },
    deletePackage(id) {
      let self = this;
      axios.post(route("api.package.delete", { id })).then(() => {
        let index = _.findIndex(self.packages, { id });
        self.packages.splice(index, 1);
      });
    },
    getStoreAt(status) {
      if (status) {
        return "Store At: Floor";
      } else {
        return "Store At: Rack";
      }
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
