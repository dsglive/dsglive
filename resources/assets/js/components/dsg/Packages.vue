<template>
  <v-layout 
    row
    wrap
    my-0
    py-0
    mx-5
    px-5
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
            @click.native="deletePackage()"
          >
            <v-icon x-large>close</v-icon>
          </v-btn>
        </v-toolbar>
            
        <v-layout 
          row 
          wrap
        >
          <!-- 3flex tab-->
          <v-flex 
            lg3 
            d-flex>
            <v-flex lg6>
              <v-text-field
                v-model="item.date_received"
                readonly
                label="Date Received"
                prepend-icon="event_available"
              />
            </v-flex>
            <v-flex lg6>
              <v-text-field
                v-model="item.date_processed"
                readonly
                label="Date Processed"
                prepend-icon="event_note"
              />
            </v-flex>
          </v-flex>
          <!-- 4flex tab-->
          <v-flex 
            lg4
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
            <v-flex lg3>
              <v-text-field
                v-model="item.cube"
                label="Cubic Feet"
                suffix="ft³"
                prepend-icon="fa-cube"
              />
            </v-flex>
          </v-flex>
          
          <!-- 4flex tab-->
          <v-flex 
            lg5
            d-flex
          >
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
                v-model="item.style_no"
                label="Style No."
                prepend-icon="style"
              />
            </v-flex>
            <v-flex lg4>
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
          </v-flex>
          
        </v-layout>
        <v-layout 
          row 
          wrap
        >
          <v-flex xs12>
            <v-switch
              v-model="floor"
              :label="getStoreAt(floor)"
            />
          </v-flex>
          <v-flex xs12>
            <v-switch
              v-model="item.damaged"
              :label="getDamageStatus(item.damaged)"
            />
          </v-flex>
          <v-flex xs12>
            <v-switch
              v-model="item.repaired"
              :label="getRepairedStatus(item.repaired)"
            />
          </v-flex>
          <v-flex xs12>
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
          <v-flex xs12>
              <v-textarea
        v-model="item.damage_description"
        label="Damaged Description"
        counter
        maxlength="255"
        full-width
        single-line
      ></v-textarea>
          </v-flex>
          <v-flex xs12>
              <v-textarea
        v-model="item.description"
        label="Description"
        counter
        maxlength="255"
        full-width
        single-line
      ></v-textarea>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-btn 
            color="accent"
            @click="openPackageImagesModal()"
          >
            Upload Package Images <v-icon right>fa-upload</v-icon>
          </v-btn>
          <v-btn 
            color="accent"
            @click="openDamagedImagesModal()"
          >
            Upload Damaged Package Images <v-icon right>fa-upload</v-icon>
          </v-btn>
          <package-images-uploader/>
          <damaged-images-uploader/>
        </v-card-actions>
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
    floor: false
  }),
  watch: {
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
    openPackageImagesModal() {
      Bus.$emit("upload-package-images");
    },
    openDamagedImagesModal() {
      Bus.$emit("upload-damaged-images");
    },
    deletePackage() {
      console.log("deleting Package");
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
