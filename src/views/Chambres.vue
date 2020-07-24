<template>
  <v-data-table :headers="headers" :items="chambres" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
import ChambreService from '../services/chambres.service';

export default {
  data() {
    return {
      chambres:[],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "address", value: "address" },
        { text: "city", value: "city" },
        { text: "zip", value: "zip" },
        { text: "status", value: "status" },

      ],
    };
  },
  mounted() {
    ChambreService.getAllChambre().then(
      (response) => {
        console.log(response.data)
        this.chambres = response.data;
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error.response);
      }
    );
  },
};
</script>