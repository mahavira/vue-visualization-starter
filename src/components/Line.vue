<template>
  <section class="echart-wrp">
    <div class="echart" ref="echart"></div>
  </section>
</template>

<script>
export default {
  name: 'Echart',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.echart);
    this.chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      }],
    });
  },
};
</script>
<style scoped>
  .echart, .echart-wrp{
    height: 100%;
  }
</style>
