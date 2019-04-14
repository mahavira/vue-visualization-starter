import Layout from '../../layouts/default/Index.vue';

export default [
  {
    path: '/visual',
    meta: {
      title: '用户管理系统',
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
        path: 'examples',
        name: 'examples',
        meta: {
          title: '范例',
        },
        component: () => import('./pages/Home.vue'),
        children: [{
          path: 'icon',
          name: 'examples/icon',
          meta: {
            title: 'ICON',
          },
          component: () => import('./pages/Home.vue'),
        }],
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

