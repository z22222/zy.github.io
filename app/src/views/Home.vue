<template>
  <div class="home">
    x:{{ x }}
    y:{{ y }}
    <!-- 在线编辑器 -->
    <div id="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import { initChart } from '@/hooks/myEcharts.js'
import { useMouse } from '@/hooks/useMouse.js';
import { ref, onMounted } from 'vue'
const { x, y } = useMouse()

let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2019.01.01', '2019.02.12', '2019.03.03', '2019.04.16', '2019.05.20', '2019.06.08', '2019.07.31'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [0, 15, 30, 12, 26, 7, 0],
    type: 'line',
    smooth: true,
    symbol: 'circle', // 拐点类型
    symbolSize: 0,
    areaStyle: {
      normal: {
        color: '#94B3FF' //改变区域颜色
      }
    },
    itemStyle: {
      normal: {
        color: '#94B3FF', //改变折线点的颜色
        lineStyle: {
          color: '#94B3FF' //改变折线颜色
        }
      }
    },
  }]
};
let option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2019.01.01', '2019.02.12', '2019.03.03', '2019.04.16', '2019.05.20', '2019.06.08', '2019.07.31'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [233, 15, 30, 12, 26, 7, 233],
    type: 'line',
    smooth: true,
    symbol: 'circle', // 拐点类型
    symbolSize: 0,
    areaStyle: {
      normal: {
        color: '#94B3FF' //改变区域颜色
      }
    },
    itemStyle: {
      normal: {
        color: '#94B3FF', //改变折线点的颜色
        lineStyle: {
          color: '#94B3FF' //改变折线颜色
        }
      }
    },
  }]
};
onMounted(() => {
  const chart = document.getElementById('chart')
  initChart(chart, { width: 400, height: 300 }, option)
  setTimeout(() => {
    initChart(chart, { width: 400, height: 300 }, option1)
  }, 2000);
})
</script>
<style lang="less" scoped>
.box {
  display: block;
  margin-top: 20px;
  width: 80%;
  height: 40vh;
  font-size: 18px;
}
</style>
