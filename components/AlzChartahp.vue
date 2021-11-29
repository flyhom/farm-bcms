<script>
export default {
    props: {
        data: {
            type: Object,
        },
        chartHeight: {
            type: String,
            default: '1000px',
        },
        chartWidth: {
            type: String,
            default: '98%',
        },
    },
    methods: {
        echartsInit(data) {
            let ComprehensiveChart = this.$echarts.init(
                this.$refs.ComprehensiveChart,
            );
            ComprehensiveChart.showLoading();
            let option = {
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
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    hideDelay: 0,
                },
                series: [
                    {
                        type: 'tree',
                        name: 'AHP',
                        data: [data],
                        left: '2%',
                        right: '2%',
                        top: '8%',
                        bottom: '20%',
                        symbol: 'emptyCircle',
                        orient: 'vertical',
                        initialTreeDepth: 1,
                        edgeShape: 'polyline',
                        label: {
                            position: 'top',
                            rotate: 0,
                            verticalAlign: 'middle',
                            align: 'center',
                            fontSize: 14,
                            backgroundColor: 'rgba(0,0,0,0)', 
                            color: '#2196F3'
                        },
                        leaves: {
                            label: {
                                position: 'bottom',
                                rotate: 0,
                                verticalAlign: 'middle',
                                align: 'center'
                            }
                        },
                        emphasis: {
                            focus: 'descendant'
                        },
                        expandAndCollapse: true,
                        animationDurationUpdate: 750
                    }
                ]
            };
            ComprehensiveChart.hideLoading();
            ComprehensiveChart.setOption(option, true);
            // ComprehensiveChart.on('mousedown', params => {
            //     const name = params.data.name;
            //     const curNode = ComprehensiveChart._chartsViews[0]._data.tree._nodes.filter(item => {
            //         return item.name === name;
            //     });
            //     if(curNode.depth){
            //         const depth = curNode.depth;
            //         const curIsExpand = curNode.isExpand;
            //         curNode._chartsViews[0]._data.tree._nodes.forEach(item => {
            //             if (params.event.target.culling === true) {
            //                 if (item.depth === depth && item.name !== name && !curIsExpand) {
            //                     item.isExpand = false;
            //                 }
            //             } else if (params.event.target.culling === false) {
            //                 if (item.depth === depth) {
            //                     if (item.name === name) {
            //                         item.isExpand = true;
            //                     } else {
            //                         item.isExpand = false
            //                     }
            //                 }
            //             }
            //         });
            //     }
            // })
            // ComprehensiveChart.on('click', params => {
            //     const name = params.data.name;
            //     const curNode = ComprehensiveChart._chartsViews[0]._data.tree._nodes.filter(item => {
            //         return item.name === name;
            //     });
            //     if (params.event.target.culling === true) {
            
            //     } else if (params.event.target.culling === false) {
            //         console.log("click");
            //         if(curNode.depth){
            //             const depth = curNode.depth;
            //             const curIsExpand = curNode.isExpand;
            //             curNode._chartsViews[0]._data.tree._nodes.forEach(item => {
            //                 if (params.event.target.culling === true) {
            //                     if (item.depth === depth && item.name !== name && !curIsExpand) {
            //                         item.isExpand = false;
            //                     }
            //                 } else if (params.event.target.culling === false) {
            //                     if (item.depth === depth) {
            //                         if (item.name === name) {
            //                             item.isExpand = true;
            //                         } else {
            //                             item.isExpand = false;
            //                             ComprehensiveChart.clear();
            //                             ComprehensiveChart.setOption(option);
            //                         }
            //                     }
            //                 }
            //             });
            //         }
            //     }
            // })
        },
        echartsdestory(){
            let ComprehensiveChart = this.$echarts.init(
                this.$refs.ComprehensiveChart,
            );
            ComprehensiveChart.dispose();
        }
    },
    mounted() {
        this.echartsInit(this.data);
    },
    beforeDestroy(){
        this.echartsdestory();
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