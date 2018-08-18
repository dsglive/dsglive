<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title
        class="headline primary"
        dark
      >
        <span class="white--text">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-btn 
          flat 
          color="secondary" 
          @click="dialog = false">
          <v-icon left>arrow_left</v-icon>
          Back
        </v-btn>
        <v-spacer/>
        <v-btn
          color="primary"
          flat
          @click="confirm()"
        >
          {{ action }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    callback: {
      type: Function,
      required: true
    },
    message: {
      type: String,
      default: function() {
        return "Deleting This Dsg Record , Will Also Delete All Associated Data Attach To It Such As Images and Items. Also Note That Some Data In The System That Exist Which Reference To This Dsg Record Will Break its Functionality Such As Invoicing. Only Proceed If You Think There Will Be No Side Effect Of What You Will Be Doing!";
      }
    },
    title: {
      type: String,
      default: function() {
        return "Are You Sure You Want To Delete This?";
      }
    },
    action: {
      type: String,
      default: function() {
        return "Yes , I Understand";
      }
    }
  },
  data: () => ({
    dialog: false,
    params: null
  }),
  mounted() {
    Bus.$on("open-confirmation", params => {
      this.dialog = true;
      this.params = params;
    });
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    confirm() {
      if (this.callback) {
        if (this.params != undefined) {
          this.dialog = false;

          this.callback(this.params);
        } else {
          this.dialog = false;
          this.callback();
        }
      }
    }
  }
};
</script>

<style>
</style>
