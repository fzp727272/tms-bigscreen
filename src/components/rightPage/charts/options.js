import echarts from 'echarts/lib/echarts';
import { backgroundColor } from 'echarts/lib/theme/dark';
import {TitleColor,color1,color2,color3,blueColor,greenColor,redColor,borderColor,colorbackground} from '../../../style/color';

// 关联数据类别
export const BrowseCategoriesOptions = params => ({
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    name: {
      formatter: function (name) {
        let arr;
        arr = ['{a|' + name + '}'];
        return arr.join('\n');
      },
      textStyle: {
        rich: {
          //根据文字的组设置格式
          a: {
            color: TitleColor,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Source Han Sans CN',
          },
        },
      },
    },
    // 名字和图形的距离
    nameGap: 5,
    indicator: params.indicator,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: [
          'rgba(97,231,251, 0.05)',
          'rgba(97,231,251, 0.1)',
          'rgba(97,231,251, 0.2)',
          'rgba(97,231,251, 0.3)',
          'rgba(97,231,251, 0.4)',
          ,
        ].reverse(),
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowBlur: 5,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
    },
  },
  series: [
    {
      name: '用户浏览类别',
      type: 'radar',
      data: [params.data],
      label: {
        show: false,
        formatter: function (params) {
          return params.value + '万';
        },
        color: '#9ae8ac',
        distance: 10,
        align: 'right',
      },
      symbol: 'none',
      symbolSize: [6, 6],
      // 边缘颜色
      lineStyle: {
        color: color1,
        width: 2,
      },
      areaStyle: {
        color: color3,
        opacity: 0.8,
        shadowColor: 'rgba(115,149,255,1)',
        shadowBlur: 10,
      },
    },
  ],
});

// 反馈
export const FeedbackOptions = params => ({
  title: {
    text: `${params.number}%`,
    left: '45%',
    top: '40%',
    textAlign: 'center',
    textStyle: {
      fontSize: '16',
      fontWeight: '500',
      color: TitleColor,
      textAlign: 'center',
    },
  },
  series: [
    {
      type: 'pie',
      startAngle: 0,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 1,
                  color:color3,
                },
              ]),
              shadowColor: backgroundColor,
              shadowBlur: 10,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          hoverAnimation: false,
        },
        {
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          value: 100 - params.number,
          hoverAnimation: true,
          itemStyle: {
            color: color3,
          },
        },
      ],
    },
  ],
});

//  线下门店流量
export const OfflinePortalOptions = params => ({
  color: [color1, blueColor,greenColor,redColor],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: 'rgba(0,0,0,0.2)',
      },
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  grid: {
    left: '15',
    right: '15',
    bottom: '0',
    top: '60',
    containLabel: true,
  },
  legend: {
    data: ['门店1', '门店2', '门店3', '门店4'],
    show: true,
    textStyle: {
      color: TitleColor,
    },
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      axisLabel: {
        color: TitleColor,
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
    {
      type: 'category',
      axisLabel: {
        color: TitleColor,
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位/人',
      nameTextStyle: {
        color: TitleColor,
      },
      axisLabel: {
        color: TitleColor,
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
    {
      type: 'value',
      min: 0,
      max: 100,
      interval: 20,
      name: '密度',
      //网格样式
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#94b5ca',
        },
      },
    },
  ],
  series: [
    {
      name: '门店1',
      type: 'line',
      data: params.data1,
    },
    {
      name: '门店2',
      type: 'line',
      data: params.data2,
    },
    {
      name: '门店3',
      type: 'line',
      data: params.data3,
    },
    {
      name: '门店4',
      type: 'line',
      data: params.data4,
    },
    {
      name: '额度',
      type: 'bar',
      data: params.barData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(34,224,214,.8)',
            },
            {
              offset: 0.5,
              color: 'rgba(5,137,186,1)',
            },
            {
              offset: 1,
              color: 'rgba(11,12,31,1)',
            },
          ]),
          barBorderRadius: 7.5,
        },
      },
      barMaxWidth: 15,
    },
  ],
});
