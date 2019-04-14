export default [
  /**
   * 此/login路由用于模拟登录
   */
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      requireAuth: false,
    },
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '401没有权限',
      requireAuth: false,
    },
    component: () => import('../pages/error/401.vue'),
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404没有找到页面',
      requireAuth: false,
    },
    component: () => import('../pages/error/404.vue'),
  },
];
