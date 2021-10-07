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
                left: "left",
                textStyle: {
                    fontWeight: "normal",
                    color: "#03A9F4",
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: 'cross'
                },
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
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
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: this.timeData,
                axisTick: {
                    alignWithLabel: true
                },
            },
            yAxis: [
                {
                    type: "value",
                    name: this.type1title,
                    nameTextStyle:{
                        color:'#40b47f',
                        fontSize: 12,
                    },
                    position: 'left',
                    axisLabel:{
                        color:'#40b47f'
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
                    }
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
                            color: '#40b47f',
                            width: 2,
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
                            color: '#f49f42',
                            width: 2,
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