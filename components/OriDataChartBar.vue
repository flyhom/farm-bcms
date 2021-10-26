<script>
export default {
    props: {
        timeData: {
            type: Array
        },
        barData: {
            type: Array
        },
        chartHeight: {
            type: String
        },
        chartWidth: {
            type: String
        },
        title: {
            type: Array
        },
        charttitle: {
            type: String
        },
        barwidth: {
            type: Number
        }
    },
    data() {
        return {};
    },
    methods: {
        echartsInit() {
        let ComprehensiveChart = this.$echarts.init(
            this.$refs.ComprehensiveChart,
        );
        ComprehensiveChart.setOption({
            title: {
                show: true,
                text: this.charttitle,
                left: "center",
                top: "bottom",
                textStyle: {
                    fontWeight: "normal",
                    color: "#03A9F4",
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                },
            ],
            toolbox: {
                feature: {
                    saveAsImage: {
                    },
                },
                iconStyle:{
                    color:'#000',//設定顏色
                    borderColor: '#fff'
                }
            },
            // legend: {
            //     data: ["溫度"],
            //     x: "left"
            // },
            legend: {
                data: this.title,
                textStyle: {
                    color: '#ccc'
                },
                top: 'start',
                right: '50'
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "6%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: this.timeData,
                silent: false,
                splitLine: {
                    show: false
                },
                splitArea: {
                    show: false
                }
            },
            yAxis: [
                {
                    name: this.title[0],
                    type: "value",
                    position: 'left',
                    splitArea: {
                        show: false
                    }
                },
            ],
            series: [
                {
                    name: this.title[0],
                    type: "bar",
                    color: [
                        '#40b47f',
                        '#759aa0',
                        '#e69d87',
                        '#8dc1a9',
                        '#ea7e53',
                        '#eedd78',
                        '#73a373',
                        '#73b9bc',
                        '#7289ab',
                        '#91ca8c',
                        '#f49f42'
                    ],
                    // barWidth: this.barwidth,
                    data: this.barData,
                    large: true,
                },
            ]
        });
        }
    },
    mounted() {
        this.echartsInit();
    } 
}
</script>

<template>
    <v-card dark>
        <v-row justify="center">
            <v-col>
                <div 
                ref="ComprehensiveChart"
                class="ComprehensiveChart"
                :style="{width:chartWidth,height:chartHeight}"
                ></div>
            </v-col>
        </v-row>
    </v-card>
</template>

<style>
.ComprehensiveChart {
    margin-left: auto;
    margin-right: auto;
    float: center;
}
</style>