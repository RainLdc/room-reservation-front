<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view />
    </v-main>
    <footerBar></footerBar>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
import footerBar from "./components/footerBar";

export default {
  name: "App",

  components: {
    navbar,
    footerBar,
  },

  data: () => ({
    //
  }),
};
</script>
