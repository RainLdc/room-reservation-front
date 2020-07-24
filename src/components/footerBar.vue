<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-btn href="https://www.linkedin.com/in/romain-le-duc/" class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-linkedin</v-icon>
      </v-btn>
      <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Design by Romain LE DUC</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
