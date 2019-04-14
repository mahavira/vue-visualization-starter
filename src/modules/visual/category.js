const namespace = 'visual';
export default [
  {
    title: '业务视图',
    path: '/graphic/common',
    icon: 'fa fa-bar-chart',
    children: [
      {
        title: '售票统计',
        path: '/graphic/common',
        query: {
          id: 1,
        },
        params: {
          id: 1,
        },
      },
      {
        title: '检票统计',
        path: '',
      },
    ],
  },
  {
    title: '我的视图',
    path: '/graphic/me',
    icon: 'fa fa-bar-chart',
    children: [
      {
        title: '柱状图',
        icon: 'fa fa-cog',
        query: {
          id: 1,
        },
        params: {
          id: 1,
        },
      },
    ],
  },
  {
    title: '我的视图管理',
    path: '/my/visual',
    icon: 'fa fa-cog',
  },
  {
    title: '系统管理',
    icon: 'fa fa-cog',
    children: [
      {
        title: '业务视图管理',
        path: '/common/manage',
      },
      {
        title: '组件管理',
        path: '/component/manage',
      },
      {
        title: '角色权限',
        path: '/role/manage',
      },
    ],
  },
];
