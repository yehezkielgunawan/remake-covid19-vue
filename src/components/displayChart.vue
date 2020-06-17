<template>
  <div id="display-chart">
    <div class="chart-container">
      <line-chart-1></line-chart-1>
      <line-chart-2></line-chart-2>
    </div>
  </div>
</template>

<script>
import LineChart1 from "./ChartConfirmed.vue";
import LineChart2 from "./ChartDeaths.vue";

export default {
  name: "display-chart",
  components: { LineChart1, LineChart2}
};
</script>

<style scoped>
.chart-container {
  position: relative;
  max-width: 350px;
}
</style>