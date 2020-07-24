<template>
  <v-container>
    <v-card></v-card>
    <v-card class="mx-auto" max-width="300" tile>
      <v-text-field v-model="id" label="Entrer un id de chambre" required></v-text-field>
      <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
      <v-list three-line>
        <template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-title v-html="chambres.name"></v-list-item-title>
              <v-list-item-title>City</v-list-item-title>
              <v-list-item-title v-html="chambres.city"></v-list-item-title>
              <v-list-item-title>Adress</v-list-item-title>
              <v-list-item-subtitle v-html="chambres.adress"></v-list-item-subtitle>
              <v-list-item-title>Zip</v-list-item-title>
              <v-list-item-subtitle v-html="chambres.zip"></v-list-item-subtitle>
              <v-list-item-title>Status</v-list-item-title>
              <v-list-item-subtitle v-html="chambres.status"></v-list-item-subtitle>
              <v-list-item-title>Id</v-list-item-title>
              <v-list-item-subtitle v-html="chambres.id"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import ChambreService from "../services/chambres.service";

export default {
  data: () => ({
    id: "",
    chambres: [],
    items: [{ text: "Conversions", icon: "mdi-flag" }],
  }),
  methods: {
    validate() {
      ChambreService.getOneChambre(this.id).then(
        (response) => {
          console.log(response.data);
          this.chambres = response.data;
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