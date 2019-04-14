import Loading from '../components/Loading';
import { INIT } from '../store/types';

/**
 * 检查当前路由是否需要授权访问
 */
const checkRequireAuth = to => to.matched.some(record => record.meta.requireAuth !== false);

const checkAuth = async ({ $store, $router }, to) => {
  if (checkRequireAuth(to)) {
    if (!$store.state.token) {
      $router.login(to.fullPath);
      return false;
    }
    if (!$store.state.inited) {
      Loading.show('加载中');
      try {
        await $store.dispatch(INIT);
      } catch (e) {
        return Promise.reject(new Error('服务初始失败！'));
      } finally {
        Loading.close();
      }
    }
  }
  return true;
};
export default checkAuth;
