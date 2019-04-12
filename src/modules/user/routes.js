import Layout from '../../layouts/default/Index.vue';

export default [
  {
    path: '/user',
    meta: {
      title: '用户管理系统',
    },
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '控制台',
        },
        component: () => import('../pages/home/Index.vue'),
      },
      {
        path: 'error/401',
        name: '401',
        meta: {
          title: '401没有权限',
          requireAuth: false,
        },
        component: () => import('../views/error/401.vue'),
      },
      {
        path: 'error/404',
        name: '404',
        meta: {
          title: '404没有找到页面',
          requireAuth: false,
        },
        component: () => import('../views/error/404.vue'),
      },
      {
        path: 'examples',
        name: 'examples',
        meta: {
          title: '范例',
        },
        component: () => import('../views/examples/Index.vue'),
        children: [{
          path: 'icon',
          name: 'examples/icon',
          meta: {
            title: 'ICON',
          },
          component: () => import('../views/examples/Icon.vue'),
        }],
      },
    ],
  },
];

