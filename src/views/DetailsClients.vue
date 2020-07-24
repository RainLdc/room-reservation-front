<template>
  <v-container>
    <v-card></v-card>
    <v-card class="mx-auto" max-width="300" tile>
      <v-text-field v-model="id" label="Entrer un id de client" required></v-text-field>
      <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
      <v-list three-line>
        <template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle v-html="clients.name"></v-list-item-subtitle>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle v-html="clients.email"></v-list-item-subtitle>
              <v-list-item-title>Nationality</v-list-item-title>
              <v-list-item-subtitle v-html="clients.nationality"></v-list-item-subtitle>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle v-html="clients.Phone"></v-list-item-subtitle>
              <v-list-item-title>Room</v-list-item-title>
              <v-list-item-subtitle v-html="clients.roomId"></v-list-item-subtitle>
              <v-list-item-title>Status</v-list-item-title>
              <v-list-item-subtitle v-html="clients.status"></v-list-item-subtitle>
              <v-list-item-title>Id</v-list-item-title>
              <v-list-item-subtitle v-html="clients.id"></v-list-item-subtitle>
              <v-list-item-title>BirthDate</v-list-item-title>
              <v-list-item-subtitle v-html="clients.birthDate"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>
 
<script>
import ClientService from "../services/clients.service";

export default {
  data: () => ({
    id: "",
    clients: [],
  }),
  methods: {
    validate() {
      ClientService.getOneClient(this.id).then(
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
  },
};
</script>