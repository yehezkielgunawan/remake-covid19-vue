<template>
  <div id="country">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12">
          <v-select
            :items="country_name"
            label="Select Country"
            outlined
            v-model="selected"
            item-value="country_name.value"
            v-on:change="onChange"
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="center" v-if="selected">
        <v-col class="d-flex" cols="12">
          <h2>
            Covid-19 Data from
            <b>{{selected}}</b>
          </h2>
        </v-col>
      </v-row>
      <v-row align="center" v-if="selected" dense>
        <v-col cols="12">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="orange darken-4" dark v-bind="attrs" v-on="on">Graph Image</v-btn>
            </template>

            <v-card>
              <v-card-title
                class="headline blue-grey darken-2"
                primary-title
              >{{selected}} Covid-19 Data</v-card-title>

              <v-img
                v-bind:src="'https://covid19.mathdro.id/api/countries/' + selected + '/og'"
                lazy-src="Loading image..."
              ></v-img>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12">
          <v-card color="yellow darken-3" dark>
            <v-card-title class="headline">Confirmed</v-card-title>
            <v-card-subtitle>{{formatNumber(country_data.confirmed.value)}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="red darken-1" dark>
            <v-card-title class="headline">Deaths</v-card-title>
            <v-card-subtitle>{{formatNumber(country_data.deaths.value)}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="blue darken-1" dark>
            <v-card-title class="headline">Recovered</v-card-title>
            <v-card-subtitle>{{formatNumber(country_data.recovered.value)}}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "country",
  data: () => ({
    countries: null,
    country_name: [],
    selected: "",
    country_data: null,
    dialog: false
  }),
  mounted() {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then(response => {
        this.countries = response.data.countries;
        this.countries.forEach(element => {
          this.country_name.push(element.name);
        });
      })
      .catch(error => console.log(error));
  },
  methods: {
    onChange() {
      axios
        .get("https://covid19.mathdro.id/api/countries/" + this.selected)
        .then(response => {
          this.country_data = response.data;
          console.log(this.country_data);
        })
        .catch(error => console.log(error));
    },
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style scoped>
</style>