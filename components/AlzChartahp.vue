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
            ComprehensiveChart.setOption(option, true);
            ComprehensiveChart.on('mousedown', e => {
                const name = e.data.name;
                const curNode = ComprehensiveChart._chartsViews[0]._data.tree._nodes.filter(item => {
                    return item.name === name;
                });
                if(curNode[0].depth){
                    const depth = curNode[0].depth;
                    const curIsExpand = curNode[0].isExpand;
                    ComprehensiveChart._chartsViews[0]._data.tree._nodes.forEach(item => {
                        if (e.event.target.culling === true) {
                            // if (item.depth === depth && item.name !== name && !curIsExpand) {
                            //     item.isExpand = false;
                            // }
                            // if (item.depth === depth) {
                            //     if (item.name === name) {
                            //         item.isExpand = true;
                            //     // } else if (item.name === name && curIsExpand === false){
                            //     //     item.isExpand = false;
                            //     //     console.log('2');
                            //     } else {
                            //         item.isExpand = false;
                            //         console.log('3');
                            //     }
                            // }
                        } else if (e.event.target.culling === false) {
                            if (item.depth === depth) {
                                if (item.name === name && curIsExpand === false) {
                                    item.isExpand = false;
                                } 
                                else {
                                    item.isExpand = false;
                                }
                            }
                        }
                    });
                }
            })
            // ComprehensiveChart.on('click', params => {
            //     if (params.event.target.culling === true) {

            //     } else if (params.event.target.culling === false) {

            //     }
            // })
        },
    },
    mounted() {
        this.echartsInit(this.data);
    },
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