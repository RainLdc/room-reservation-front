<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>

      <div v-if="!isMobile">
        <router-link to="/">
          <v-btn text>
            <v-icon left>mdi-home</v-icon>Home
          </v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <router-link to="/chambres">
          <v-btn text>
            <v-icon left>mdi-home</v-icon>Chambre
          </v-btn>
        </router-link>
        <router-link to="/detailschambres">
          <v-btn text>
            <v-icon left>mdi-home</v-icon>Détails Chambre
          </v-btn>
        </router-link>
        <router-link to="/clients">
          <v-btn text>
            <v-icon left>mdi-account</v-icon>Clients
          </v-btn>
        </router-link>
        <router-link to="/detailsclients">
          <v-btn text>
            <v-icon left>mdi-account</v-icon>Détails Clients
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-if="isMobile" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <router-link to="/">
              <v-btn text>
                <v-icon left>mdi-home</v-icon>Room Reservation
              </v-btn>
            </router-link>
          </v-list-item>
          <v-list-item class="nav-item">
            <router-link to="/chambres" class="nav-link">Chambres</router-link>
          </v-list-item>
          <v-list-item class="nav-item">
            <router-link to="/detailschambres">Détails CHambres</router-link>
          </v-list-item>
          <v-list-item class="nav-item">
            <router-link to="/clients">CLients</router-link>
          </v-list-item>
          <v-list-item class="nav-item">
            <router-link to="/detailsclients">Détails CLients</router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";

export default {
  data: () => ({
    appName: process.env.APP_NAME || "OFFICINES - TROD",
    isMobile,
    drawer: false,
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("Administrateur");
      }
      return false;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("Utilisateur");
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
