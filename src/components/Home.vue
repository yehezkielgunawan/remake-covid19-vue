<template>
  <div id="home">
    <v-card max-width="400px" class="mx-auto" loading="true">
      <v-container fluid>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="headline">Covid-19 Global Summary</v-card-title>

              <v-card-subtitle>This is the summary of the Covid-19 around the world.</v-card-subtitle>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="orange darken-4"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >Click Here for the Infographic</v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline blue-grey darken-2"
                    primary-title
                  >Global Covid-19 Data</v-card-title>

                  <v-img
                    v-bind:src="'https://covid19.mathdro.id/api/og'"
                    lazy-src="Loading image..."
                  ></v-img>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card color="#1F7087" dark>
              <div class="d-flex flex-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">Confirmed</v-card-title>
                  <v-card-subtitle>{{formatNumber(data.confirmed.value)}}</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card color="#952175" dark>
              <div class="d-flex flex-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">Recovered</v-card-title>
                  <v-card-subtitle>{{formatNumber(data.recovered.value)}}</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card dark>
              <div class="d-flex flex-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">Deaths</v-card-title>
                  <v-card-subtitle>{{formatNumber(data.deaths.value)}}</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
         
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    data: null,
    dialog: false,
  }),
  mounted() {
    axios
      .get("https://covid19.mathdro.id/api")
      .then(response => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch(error => console.log(error));
  },
  methods: {
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>