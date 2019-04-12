export default [{
  title: '控制台',
  path: '/',
  icon: 'el-icon-mobile-phone',
  // code: 'menu.home', // 权限code
}, {
  title: '角色管理',
  path: '/roles',
  icon: 'fa fa-user-circle-o',
  // code: 'menu.role', // 权限code
}, {
  title: '404页面',
  path: '/error/404',
  icon: 'fa fa-user-circle-o',
}, {
  title: '401页面',
  path: '/error/401',
  icon: 'fa fa-user-circle-o',
}, {
  title: '子系统列表',
  path: '/subsystem',
  icon: 'fa fa-user-circle-o',
}, {
  title: '范例',
  path: '/examples',
  icon: 'el-icon-menu',
  children: [{
    title: '图标',
    path: '/examples/icon',
    icon: 'el-icon-date',
  }, {
    title: '按钮',
    path: '/examples/button',
    icon: 'el-icon-date',
  }, {
    title: '消息提示',
    path: '/examples/message',
    icon: 'el-icon-date',
  }, {
    title: '消息通知',
    path: '/examples/notify',
    icon: 'el-icon-date',
  }, {
    title: '弹窗',
    path: '/examples/message-box',
    icon: 'el-icon-date',
  }, {
    title: '对话框',
    path: '/examples/dialog',
    icon: 'el-icon-date',
  }, {
    title: '滚动到顶部',
    path: '/examples/scrolltotop',
    icon: 'el-icon-date',
  }, {
    title: '可拖动对话框',
    path: '/examples/drag-dialog',
    icon: 'el-icon-date',
  }, {
    title: '标签页',
    path: '/examples/tabs',
    icon: 'el-icon-date',
  }, {
    title: '表单',
    path: '/examples/form',
    icon: 'el-icon-date',
  }],
}];
