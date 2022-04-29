<template>
  <div class="index">
    <div ref="chart" style="width:100%;height:100%"></div>
  </div>

</template>

<script lang="ts" setup>
import * as echarts  from 'echarts'
import { onMounted, ref } from 'vue-demi'
const chart = ref();
onMounted(()=>{
  init();
})
const init = () => {
  console.log('输出初始化数据')
   var myChart = echarts.init(chart.value);

      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 100, 10, 10, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
}
</script>

<style>

</style> 