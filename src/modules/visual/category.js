// const namespace = 'visual';
export default [
  {
    title: '业务视图',
    path: '/visual/view',
    icon: 'fa fa-bar-chart',
    children: [
      {
        title: '售票统计',
        path: '/visual/view/1',
        query: {
          id: 1,
        },
        params: {
          id: 1,
        },
      },
      {
        title: '检票统计',
        path: '/visual/view/2',
      },
    ],
  },
  {
    title: '我的视图',
    icon: 'fa fa-bar-chart',
    path: '/visual/myview',
    children: [
      {
        title: '柱状图',
        icon: 'fa fa-cog',
        path: '/visual/myview/1',
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
    path: '/visual/manage/myview',
    icon: 'fa fa-cog',
  },
  {
    title: '系统管理',
    path: '/visual/manage',
    icon: 'fa fa-cog',
    children: [
      {
        title: '业务视图管理',
        path: '/visual/manage/view',
      },
      {
        title: '组件管理',
        path: '/visual/manage/component',
      },
      {
        title: '角色权限',
        path: '/visual/manage/role',
      },
    ],
  },
];
