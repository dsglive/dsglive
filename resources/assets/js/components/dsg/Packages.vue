<template>
  <v-layout 
    row
    wrap
    my-0
    py-0
    mx-5
    px-5
    pb-5
  >
    <v-flex lg12>
          
      <v-card>
        <v-toolbar class="blue-grey">
          <v-spacer/>
          <v-toolbar-title class="text-lg-center white--text">Package ID#:{{ item.id }}</v-toolbar-title>
          <v-spacer/>
          <v-btn
            flat 
            icon
            color="red" 
            @click.native="deletePackage(item.id)"
          >
            <v-icon x-large>close</v-icon>
          </v-btn>
        </v-toolbar>
            
        <v-layout 
          row 
          wrap
          pa-2
        >
          <!-- 6flex tab-->
          <v-flex 
            lg6 
            d-flex>
            <v-flex lg4>
              <v-text-field
                v-model="item.po_no"
                readonly
                label="PO No."
                prepend-icon="bookmark"
              />
            </v-flex>
            <v-flex lg4>
              <v-text-field
                v-model="item.date_received"
                readonly
                label="Date Received"
                prepend-icon="event_available"
              />
            </v-flex>
            <v-flex lg4>
              <v-text-field
                v-model="item.date_processed"
                readonly
                label="Date Processed"
                prepend-icon="event_note"
              />
            </v-flex>
          </v-flex>
          <!-- 6flex tab-->
          <v-flex 
            lg6
            d-flex
          >
            <v-flex lg3>
              <v-text-field
                v-model="item.length"
                label="Length"
                suffix="ft"
                prepend-icon="keyboard_tab"
              />
            </v-flex>
            <v-flex lg3>
              <v-text-field
                v-model="item.width"
                label="Width"
                suffix="ft"
                prepend-icon="swap_horiz"
              />
            </v-flex>
            <v-flex lg3>
              <v-text-field
                v-model="item.height"
                label="Height"
                suffix="ft"
                prepend-icon="swap_vert"
              />
            </v-flex>
            <v-flex 
              lg3 
              pl-1>
              <v-text-field
                v-model="item.cube"
                label="Cubic Feet"
                suffix="ft³"
                prepend-icon="fa-cube"
              />
            </v-flex>
          </v-flex>
        </v-layout>
        <v-layout 
          row 
          wrap
          pa-2
        >
          <v-flex 
            lg6 
            d-flex
          >
            <v-flex lg4>
              <v-text-field
                v-model="item.style_no"
                label="Style No."
                prepend-icon="style"
              />
            </v-flex>
            <v-flex lg4>
              <v-switch
                v-model="floor"
                :label="getStoreAt(floor)"
              />
            </v-flex>
            <v-flex lg4>
              <v-switch
                v-model="item.damaged"
                :label="getDamageStatus(item.damaged)"
              />
            </v-flex>
          </v-flex>
          <v-flex 
            lg6 
            d-flex
          >
            <v-flex lg6>
              <v-autocomplete
                :items="bins"
                v-model="item.bin_id"
                item-text="code"
                item-value="id"
                required
                label="Choose Bin"
                light
                prepend-icon="view_comfy"
              />
            </v-flex>
            <v-flex lg6>
              <v-autocomplete
                :items="rates"
                v-model="item.handling_type"
                item-text="name"
                item-value="id"
                required
                label="Choose Handling Note"
                light
                prepend-icon="receipt"
              />
            </v-flex>
          </v-flex>
        </v-layout>
        <v-layout
          row 
          wrap
          pa-2
        >
          <v-flex 
            lg6 
            px-5>
            <v-textarea
              v-model="item.description"
              label="Package Description"
              counter
              maxlength="255"
              full-width
              single-line
            />
          </v-flex>
          <v-flex 
            lg6 
            px-5>
            <v-textarea
              v-if="item.damaged"
              v-model="item.damage_description"
              label="Damaged Description"
              counter
              maxlength="255"
              full-width
              single-line
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
            lg2
            px-5
          >
            <v-switch
              v-model="item.repaired"
              :label="getRepairedStatus(item.repaired)"
            />
          </v-flex>
          <v-flex 
            v-if="item.repaired"
            lg2
          >
            <v-dialog
              :ref="`date_repaired_${item.id}`"
              v-model="date_repaired_modal"
              :return-value.sync="date_repaired"
              persistent
              lazy
              full-width
              width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="date_repaired"
                label="Date Repaired"
                prepend-icon="event_note"
                readonly
              />
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
                  @click="save(item,date_repaired)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex lg6>
            <v-btn 
              block
              flat
              color="blue"
              @click="openPackageImagesModal()"
            >
              Upload Images <v-icon right>add_photo_alternate</v-icon>
            </v-btn>
            <package-images-uploader 
              :id="item.id" 
              :item="item"/>
          </v-flex>
          <v-flex 
            v-if="item.damaged"
            lg6
          >
            <v-btn 
              block
              flat
              color="red"
              @click="openDamagedImagesModal()"
            >
              Upload Damaged Images <v-icon right>broken_image</v-icon>
            </v-btn>
            <damaged-images-uploader 
              :id="item.id" 
              :item="item"/>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PackageImagesUploader from "Components/uploads/PackageImagesUploader";
import DamagedImagesUploader from "Components/uploads/DamagedImagesUploader";

export default {
  components: {
    PackageImagesUploader,
    DamagedImagesUploader
  },
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
    rates: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    floor: false,
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
    "item.handling_type"(newValue){
        let self = this;
        let rate = _.find(self.rates, function(r) {
          return r.id === newValue;
        });
        self.item.handling_fee = rate.amount;
    },
    date_repaired: {
      handler: function(newValue) {
        let self = this;
        self.item.date_repaired = newValue;
      },
      deep: false
    },
    "item.bin_id": {
      handler: function(newValue) {
        let self = this;
        let bin = _.find(self.bins, function(b) {
          return b.id === newValue;
        });
        self.item.bin_name = bin.code;
      },
      deep: false
    },
    floor: {
      handler: function(newValue) {
        let self = this;
        if (newValue) {
          self.item.store_at = "floor";
        } else {
          self.item.store_at = "rack";
        }
      },
      deep: false
    }
  },
  methods: {
    updatetotalCube() {
      this.item.cube = this.item.length * this.item.width * this.item.height;
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
