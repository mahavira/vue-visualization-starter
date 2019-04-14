/* eslint no-await-in-loop: 0 */
import { MessageBox } from 'element-ui';
import store from '../store';
import axios from '../http';
import { CLEAR_TOKEN } from '../store/types';
import { LOGIN_URL, LOGOUT_URL, LOGOUT_URL_API, AUTH_PATH, CLIENT_ID } from '../../src/config';
import { requireContext, isPromise, isString } from '../util';
import LoadingBar from '../components/LoadingBar';
import Loading from '../components/Loading';
import router from './instance';
/**
 * 动态引入自定义过滤器
 */
const middlewares = [];
requireContext(require.context('../middleware', false, /\.js$/), (name, context) => {
  middlewares.push(context.default || context);
});
requireContext(require.context('../../src/middleware', false, /\.js$/), (name, context) => {
  middlewares.push(context.default || context);
});
/**
 * 重定向去登录
 */
router.login = (state) => {
  const queryData = {
    client_id: CLIENT_ID,
    response_type: 'code',
    state: encodeURIComponent(state),
    redirect_uri: AUTH_PATH,
  };
  if (/^http/.test(LOGIN_URL)) {
    queryData.redirect_uri = encodeURIComponent(`${window.location.origin}${window.location.pathname}#${AUTH_PATH}`);
  }
  const query = Object.keys(queryData).map(k => `${k}=${queryData[k]}`).join('&');
  const loginUrl = `${LOGIN_URL}${LOGIN_URL.indexOf('?') < 0 ? '?' : '&'}${query}`;
  if (/^http/.test(loginUrl)) window.location = loginUrl;
  else router.push(loginUrl);
};
/**
 * 退出登录
 * 清除用户凭证并重定向去统一用户平台退出
 */
router.logout = async () => {
  const href = window.location.href.replace(window.location.hash, '');
  const logoutUri = `${LOGOUT_URL}?${encodeURIComponent(href)}`;
  Loading.show('正在退出...');
  if (store.state.token) {
    store.commit(CLEAR_TOKEN);
    try {
      if (LOGOUT_URL_API) {
        await axios.put(LOGOUT_URL_API);
      }
    } catch (e) {
      console.log(e);
    }
  }
  window.location = logoutUri;
};
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  console.log(router, to);
  try {
    for (let i = 0; i < middlewares.length; i += 1) {
      let final = middlewares[i](router.app, to, from, next);
      console.log(final, middlewares[i]);
      if (isPromise(final)) {
        final = await final;
        if (final === false) {
          return;
        }
      } else if (isString(final)) {
        throw new Error(final);
      } else if (final === false) {
        throw new Error('');
      }
    }
  } catch (e) {
    MessageBox.confirm(e, '系统启动失败', {
      type: 'error',
      showClose: false,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      confirmButtonText: '重新登录',
      cancelButtonText: '重试',
    }).then(() => {
      router.login();
    }).catch(() => {
      window.location.reload();
    });
    return;
  }
  LoadingBar.start();
  next();
});
router.afterEach(() => {
  LoadingBar.finish();
});
export default router;
