<template>
  <v-data-table :headers="headers" :items="clients" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
import ClientService from "../services/clients.service";

export default {
  data() {
    return {
      clients: [],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "email", value: "email" },
        { text: "birthDate", value: "birthDate" },
        { text: "nationality", value: "nationality" },
        { text: "phone", value: "phone" },
        { text: "roomId", value: "roomId" },
        { text: "clientId", value: "id" },
        { text: "status", value: "status" },
      ],
    };
  },

  mounted() {
    ClientService.getAllClients().then(
      (response) => {
        console.log(response.data);
        this.clients = response.data;
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error.response);
      }
    );
  },
};
</script>