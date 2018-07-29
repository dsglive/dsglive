<template>
  <modal-layout class="test">
    {{ customer }} - {{ client }}
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";

export default {
    components: {
    ModalLayout
  },
    props:{
        customer:{
            type: String,
            required: true
        },
        client: {
            type: String,
            required:true
        }
    },

}
</script>

<style>

</style>
