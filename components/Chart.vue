<script>
export default {
    props: {
        timeData: {
            type: Array
        },
        tempData:{
            type: Array
        },
        humidityData:{
            type: Array
        },
        luminanceData:{
            type: Array
        },
        atpData:{
            type: Array
        },
        ecData:{
            type: Array
        },
        phData:{
            type: Array
        },
        soil_tempData:{
            type: Array
        },
        soil_humidData:{
            type: Array
        },
        uvData:{
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
                    name: this.title,
                    min: 0,
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
                    data: this.tempData,
                },
                {
                    name: "濕度",
                    type: "line",
                    color: [
                        '#73b9bc',
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
                            color: '#73b9bc',
                            width: 2,
                        }
                    },
                    data: this.humidityData,
                },
                {
                    name: "光照",
                    type: "line",
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
                    data: this.luminanceData,
                },
                {
                    name: "ATP",
                    type: "line",
                    color: [
                        '#f57b95',
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
                            color: '#f57b95',
                            width: 2,
                        }
                    },
                    data: this.atpData,
                },
                {
                    name: "EC值",
                    type: "line",
                    color: [
                        '#eedd78',
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
                            color: '#eedd78',
                            width: 2,
                        }
                    },
                    data: this.ecData,
                },
                {
                    name: "PH值",
                    type: "line",
                    color: [
                        '#e69d87',
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
                            color: '#e69d87',
                            width: 2,
                        }
                    },
                    data: this.phData,
                },
                {
                    name: "土壤溫度",
                    type: "line",
                    color: [
                        '#73a373',
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
                            color: '#73a373',
                            width: 2,
                        }
                    },
                    data: this.soil_tempData,
                },
                {
                    name: "土壤濕度",
                    type: "line",
                    color: [
                        '#7289ab',
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
                            color: '#7289ab',
                            width: 2,
                        }
                    },
                    data: this.soil_humidData,
                },
                {
                    name: "UV值",
                    type: "line",
                    color: [
                        '#ea7e53',
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
                            color: '#ea7e53',
                            width: 2,
                        }
                    },
                    data: this.uvData,
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