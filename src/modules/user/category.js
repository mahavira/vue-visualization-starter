const namespace = 'user';
export default [
  {
    label: 'Echarts',
    path: '',
    icon: 'fa fa-bar-chart',
    children: [
      {
        label: '柱状图',
        query: {
          id: 1
        },
        params: {
          id: 1
        }
      },
      {
        label: '其他',
        children: [
          {
            label: '雷达图',
          },
          {
            label: '散点图',
          }
        ]
      }
    ]
  },
  {
    label: '数据演示',
    icon: 'fa fa-pie-chart',
  },
  {
    label: '接收数据演示',
    icon: 'fa fa-address-book',
  }
];
