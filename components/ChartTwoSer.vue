<script>
export default {
    props: {
        leftdata:{
            type: Array
        },
        rightdata:{
            type: Array
        },
        timeData: {
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
        type1title: {
            type: String
        },
        type2title: {
            type: String
        },
        
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
                data: this.timeData,
            },
            yAxis: [
                {
                    type: "value",
                    name: this.type1title,
                    position: 'left',
                },
                {
                    type: "value",
                    name: this.type2title,
                    position: 'right',
                },
            ],
            series: [
                {
                    name: this.type1title,
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
                    data: this.leftdata,
                },
                {
                    name: this.type2title,
                    type: "line",
                    yAxisIndex: 1,
                    color: [
                        '#f49f42',
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
                            color: '#f49f42',
                            width: 2,
                        }
                    },
                    data: this.rightdata,
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