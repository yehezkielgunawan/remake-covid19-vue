<template>
  <div id="display-chart">
    <div class="chart-container">
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "./Chart.vue";

export default {
  name: "display-chart",
  components: { LineChart }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  max-width: 350px;
}
</style>