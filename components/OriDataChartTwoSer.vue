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
        type1title: {
            type: String
        },
        type2title: {
            type: String
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
            dataZoom: [
                {
                    type: 'inside'
                },
            ],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: 'cross'
                },
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
                bottom: "7%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: this.timeData,
                axisTick: {
                    alignWithLabel: true
                },
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
                    name: this.type1title ,
                    nameTextStyle:{
                        color:'#40b47f',
                        fontSize: 12,
                    },
                    position: 'left',
                    axisLabel:{
                        color:'#40b47f'
                    },
                    splitArea: {
                        show: false
                    }
                },
                {
                    type: "value",
                    name: this.type2title,
                    nameTextStyle:{
                        color:'#f49f42',
                        fontSize: 12,
                    },
                    position: 'right',
                    axisLabel:{
                        color:'#f49f42'
                    },
                    splitArea: {
                        show: false
                    }
                },
            ],
            series: [
                {
                    name: this.type1title,
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
                    data: this.leftdata,
                    large: true,
                },
                {
                    name: this.type2title,
                    type: this.charttype,
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
                            color: '#f49f42',
                            width: 2,
                    },
                    data: this.rightdata,
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
        <v-row>
            <v-col>
                <div 
                ref="ComprehensiveChart"
                class="ComprehensiveChart"
                :style="{width:chartWidth, height:chartHeight}"
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