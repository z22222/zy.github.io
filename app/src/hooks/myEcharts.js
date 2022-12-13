import { onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
/**
*   @params wh{object}
*/
export function initChart(dom, wh, options) {
    let myChart
    function initChart() {
        myChart = echarts.init(dom, null, wh);
        myChart.setOption(options)
    }
    window.onresize = function () {
        myChart.resize()
    }
    onUnmounted(() => {
        myChart.dispose()
    })
    watch(options, () => {
        initChart()
    }, { deep: true, immediate: true })
    return myChart
}