<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>

      <div v-if="!isMobile">
        <v-btn to="/" text>
          <v-icon left>mdi-home</v-icon>Home
        </v-btn>
      </div>
      <v-spacer></v-spacer>

      <div v-if="!isMobile">
        <v-btn to="/chambres" text>
          <v-icon left>mdi-home</v-icon>Chambre
        </v-btn>
        <v-btn to="/detailschambres" text>
          <v-icon left>mdi-home</v-icon>Détails Chambre
        </v-btn>
        <v-btn to="/clients" text>
          <v-icon left>mdi-account</v-icon>Clients
        </v-btn>
        <v-btn to="/detailsclients" text>
          <v-icon left>mdi-account</v-icon>Détails Clients
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-if="isMobile" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-btn to="/" text>
              <v-icon left>mdi-home</v-icon>Home
            </v-btn>
          </v-list-item>
          <v-list-item class="nav-item">
            <v-btn to="/chambres" text>
              <v-icon left>mdi-account</v-icon>Chambres
            </v-btn>
          </v-list-item>
          <v-list-item class="nav-item">
            <v-btn to="/detailschambres" text>
              <v-icon left>mdi-home</v-icon>Détails Chambre
            </v-btn>
          </v-list-item>
          <v-list-item class="nav-item">
            <v-btn to="/clients" text>
              <v-icon left>mdi-account</v-icon>Clients
            </v-btn>
          </v-list-item>
          <v-list-item class="nav-item">
            <v-btn to="/detailsclients" text>
              <v-icon left>mdi-account</v-icon>Détails Clients
            </v-btn>
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
