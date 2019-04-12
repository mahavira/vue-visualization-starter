import { MessageBox, Loading } from 'element-ui';
/**
 * 检查当前路由是否需要授权访问
 */
const checkRequireAuth = to => to.matched.some(record => record.meta.requireAuth !== false);
/**
 * 显示隐藏全局加载提示
 */
const loading = (() => {
  let loadingInstance = null;
  return {
    show(text) {
      loadingInstance = Loading.service({
        lock: true,
        text,
      });
    },
    close() {
      loadingInstance.close();
    },
  };
})();
const checkAuth = async ({ $store, $router }, toRoute) => {
  if (checkRequireAuth(toRoute)) {
    if (!$store.state.token) {
      $router.login(toRoute.fullPath);
      return Promise.reject();
    }
    if (!$store.state.inited) {
      loading.show('加载中');
      try {
        await $store.dispatch(INIT);
        console.log(10);
        loading.close();
      } catch (e) {
        loading.close();
        MessageBox.confirm(`服务初始失败！${e.message}`, {
          type: 'error',
          showClose: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          confirmButtonText: '重新登录',
          cancelButtonText: '重试',
        }).then(() => {
          $router.logout();
        }).catch(() => {
          window.location.reload();
        });
        Promise.reject();
      }
    }
  }
  return Promise.reject();
};
export default checkAuth;
