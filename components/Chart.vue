<script>
export default {
    props: {
        courseScore:{
            type: Array
        },
        chartHeight: {
            type: String
        },
        chartWidth: {
            type: String
        },
        title: {
            type: String
        },
        date: {
            type: Array
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
                text: this.title,
                left: "center",
                textStyle: {
                    fontWeight: "normal",
                    color: "#fff",
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            legend: {
                data: ["完成率"],
                x: "left"
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: this.date,
            },
            yAxis: [
                {
                    type: "value",
                    name: this.title,
                    min: 10,
                    axisLabel: { formatter: "{value} 度" }
                }
            ],
            series: [
            {
                name: "溫度",
                type: "line",
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
                lineStyle: {
                    normal: {
                        color: '#40b47f',
                        width: 2,
                    }
                },
                data: this.courseScore,
            }
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
        <v-row>
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