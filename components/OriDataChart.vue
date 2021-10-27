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
        rainfallData:{
            type: Array
        },
        chartHeight: {
            type: String,
            default: '700px',
        },
        chartWidth: {
            type: String,
            default: '98%',
        },
        title: {
            type: Array
        },
        charttitle: {
            type: String
        },
        charttype: {
            type: String,
            default: 'line',
        }
    },
    data() {
        return {
            
        };
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
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross"
                }
            },
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
            dataZoom: [
                {
                    type: 'inside'
                },
            ],
            grid: {
                left: "3%",
                right: "4%",
                bottom: "7%",
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
                    type: "value",
                    position: 'left',
                    splitArea: {
                        show: false
                    }
                },
            ],
            series: [
                {
                    name: "溫度(°C)",
                    type: this.charttype,
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
                            color: '#40b47f',
                            width: 2,
                    },
                    data: this.tempData,
                    large: true,
                },
                {
                    name: "濕度(%)",
                    type: this.charttype,
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
                            color: '#73b9bc',
                            width: 2,
                    },
                    data: this.humidityData,
                    large: true,
                },
                {
                    name: "光照(Lux)",
                    type: this.charttype,
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
                            color: '#f49f42',
                            width: 2,
                    },
                    data: this.luminanceData,
                    large: true,
                },
                {
                    name: "大氣壓力(hPa)",
                    type: this.charttype,
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
                            color: '#f57b95',
                            width: 2,
                    },
                    data: this.atpData,
                    large: true,
                },
                {
                    name: "導電度(uS/cm)",
                    type: this.charttype,
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
                            color: '#eedd78',
                            width: 2,
                    },
                    data: this.ecData,
                    large: true,
                },
                {
                    name: "PH值(ph)",
                    type: this.charttype,
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
                            color: '#e69d87',
                            width: 2,
                    },
                    data: this.phData,
                    large: true,
                },
                {
                    name: "土壤溫度(°C)",
                    type: this.charttype,
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
                            color: '#ea7e53',
                            width: 2,
                    },
                    data: this.soil_tempData,
                    large: true,
                },
                {
                    name: "土壤濕度(%)",
                    type: this.charttype,
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
                            color: '#7289ab',
                            width: 2,
                    },
                    data: this.soil_humidData,
                    large: true,
                },
                {
                    name: "UV值(mw/cm²)",
                    type: this.charttype,
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
                            color: '#ea7e53',
                            width: 2,
                    },
                    data: this.uvData,
                    large: true,
                },
                {
                    name: "雨量(mm)",
                    type: this.charttype,
                    color: [
                        '#64B5F6',
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
                            color: '#64B5F6',
                            width: 2,
                    },
                    data: this.rainfallData,
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