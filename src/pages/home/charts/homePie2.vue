<template>
    <div class=''>
        <div id="homePie2" style="width:16vw;height:16vw;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: '',
    data() {
        return {

        }
    },
    props: {
    },
    components: {

    },
    computed: {

    },
    mounted() {
        let datas = {
            value: 30,
            name: '异常传感占比',
        };
        let option = {
            backgroundColor: '',
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            //显示数据配置
            title: {
                text: datas.value + '%',
                x: '49%',
                y: '44%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 38,
                    color: 'rgb(231, 70, 97)',
                },
            },
            data: [
                {
                    name: datas.name,
                },
            ],

            series: [
                {
                    // 主圆环
                    name: datas.name,
                    type: 'pie',
                    radius: ['40%', '70%'],
                    startAngle: 225,
                    color: [
                        {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            //圆环颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgb(231, 70, 97)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(219, 65, 65)', // 100% 处的颜色
                                },
                            ],
                        },
                        'transparent',
                    ],
                    hoverAnimation: true,
                    legendHoverLink: false,
                    z: 10,
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: (75 * datas.value) / 100,
                        },
                        {
                            value: 100 - (75 * datas.value) / 100,
                        },
                    ],
                },
                {
                    // 背景圆环
                    name: '',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    silent: true,
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    z: 5,
                    data: [
                        {
                            value: 75,
                            itemStyle: {
                                color: '#1A3B4C',
                                borderWidth: 2,
                                borderColor: '#1c516b',
                            },
                        },
                        {
                            value: 25,
                            itemStyle: {
                                color: 'transparent',
                            },
                        },
                    ],
                },
                {
                    // 底部
                    name: '',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    startAngle: 230,
                    labelLine: {
                        show: false,
                    },
                    z: 15,
                    silent: true,
                    //底部名称
                    label: {
                        show: true,
                        rich: {
                            a: {
                                color: '#ffffff',
                                fontSize: 22,
                                fontWeight: '700',
                                padding: [-190, -160, -180, 20],
                            },
                            // b: {
                            //     color: 'red',
                            //     fontSize: 26,
                            //     padding: [-160, 0, -180, -50],
                            // },
                        },
                        formatter: function (val) {
                            // 底部0和100
                            if (val.dataIndex === 0) {
                                return '{a|异常状态占比}';
                            }
                            // if (val.dataIndex === 2) {
                            //     return '{b|异常}';
                            // }
                        },
                    },
                    data: [
                        {
                            // 底部两条线
                            value: 1,
                            itemStyle: {
                                color: 'red',
                            },
                        },
                        {
                            value: 800,
                            itemStyle: {
                                color: 'transparent',
                            },
                        },
                        {
                            value: 1,
                            itemStyle: {
                                color: '#32CE84',
                            },
                        },
                        {
                            value: 230,
                            itemStyle: {
                                color: 'transparent',
                            },
                        },
                    ],
                },
                {
                    // 背景
                    name: '',
                    type: 'pie',
                    cursor: 'default',
                    radius: ['0', '80%'],
                    hoverAnimation: false,
                    legendHoverLink: false,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(38,64,76,0.8)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(38,64,76,0)', // 100% 处的颜色
                                },
                            ],
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: 1,
                        },
                    ],
                },
                {
                    // 中间圈
                    name: '',
                    z: 5,
                    type: 'pie',
                    cursor: 'default',
                    radius: ['32%', '32%'],
                    hoverAnimation: false,
                    legendHoverLink: false,
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: 1,
                            itemStyle: {
                                normal: {
                                    borderWidth: 2,
                                    borderColor: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: 'rgba(2,144,214,0.8)', // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(2,144,214,0)', // 100% 处的颜色
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    ],
                },
            ],
        };

        let myChart = echarts.init(document.getElementById('homePie2'))

        myChart.setOption(option)

        if (window.onresize) {
            window.onresize = function () {
                //console.log(123);
                myChart.resize()
            }
        } else {
            window.addEventListener('resize', function () {
                //console.log(321);
                myChart.resize()
            })
        }
    },
    methods: {

    },
}
</script>

<style lang='less' scoped >
.test{
    color: rgb(231, 70, 97);
}
</style>