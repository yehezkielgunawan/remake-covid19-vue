<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/Country">
          <v-list-item-action>
            <v-icon>fas fa-folder</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Search by Country</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/statistics">
          <v-list-item-action>
            <v-icon>fas fa-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Weekly Statistics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <img src="https://img.icons8.com/dusk/32/000000/coronavirus.png" alt /> Covid -19 Statistics
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2020 Yehezkiel Gunawan remake using API from Mathdroid and Vuetify</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
