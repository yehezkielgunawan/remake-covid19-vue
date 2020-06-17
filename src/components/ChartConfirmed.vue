
<script>
import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  name: "line",
  extends: Line,
  data: () => ({
    datacollection: {
      labels: [],
      datasets: [
        {
          label: "Confirmed Case",
          backgroundColor: "#FBC02D",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "#249EBF",
          data: []
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Weekly Global Covid-19 Confirmed Case"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: true
    }
  }),
  mounted() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      axios
        .get("https://covid19.mathdro.id/api/daily")
        .then(response => {
          const data_list = response.data;
          let date_temp = [];
          let confirmed_temp = [];
          let counter = 0;
          data_list.forEach(element => {
            counter++;
            if (counter % 7 == 0) {
              date_temp.push(element.reportDate);
              confirmed_temp.push(element.totalConfirmed);
            }
          });
          this.datacollection.labels = date_temp;
          this.datacollection.datasets[0].data = confirmed_temp;
          this.renderChart(this.datacollection, this.options);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>