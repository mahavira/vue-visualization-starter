import Layout from '../../layouts/default/Index.vue';

export default [
  {
    path: '/visual',
    meta: {
      title: '可视化管理系统',
    },
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '',
        },
        component: () => import('./pages/Home.vue'),
      },
      {
        path: 'view/:id',
        name: 'view/id',
        meta: {
          title: '业务视图',
        },
        component: () => import('./pages/View.vue'),
      },
      {
        path: 'myview/:id',
        name: 'myview/id',
        meta: {
          title: '我的视图',
        },
        component: () => import('./pages/View.vue'),
      },
      {
        path: 'component/:id',
        name: 'component/id',
        meta: {
          title: '组件',
        },
        component: () => import('./pages/Component.vue'),
      },
      {
        path: 'manage/myview',
        name: 'manage/myview',
        meta: {
          title: '我的视图管理',
        },
        component: () => import('./pages/ManageMyview.vue'),
      },
      {
        path: 'manage/component',
        name: 'manage/component',
        meta: {
          title: '组件管理',
        },
        component: () => import('./pages/ManageComponent.vue'),
      },
      {
        path: 'manage/view',
        name: 'manage/view',
        meta: {
          title: '业务视图管理',
        },
        component: () => import('./pages/ManageView.vue'),
      },
      {
        path: 'fixed',
        name: 'Fixed',
        meta: {
          title: 'Fixed',
        },
        component: () => import('./pages/Fixed.vue'),
      },
      {
        path: 'error/401',
        name: 'user/error/401',
        meta: {
          title: '401没有权限',
          requireAuth: false,
        },
        component: () => import('../../layouts/error/401.vue'),
      },
      {
        path: '*',
        name: '*',
        meta: {
          title: '404没有找到页面',
          requireAuth: false,
        },
        component: () => import('../../layouts/error/404.vue'),
      },
    ],
  },
];

