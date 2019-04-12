import { MessageBox, Loading } from 'element-ui';
import store from '../store';
import axios from '../http';
import { CLEAR_TOKEN, SET_TOKEN } from '../store/types';
import { HOME_PATH, LOGIN_URL, LOGOUT_URL, LOGOUT_URL_API, AUTH_PATH, AUTH_URL, CLIENT_ID } from '../../src/config';
import { parseJWT, requireContext } from '../util';
import LoadingBar from '../components/LoadingBar';
import router from './instance';
import updateDocumentTitle from './documentTitle';
/**
 * 动态引入自定义过滤器
 */
const middlewares = [];
requireContext(require.context('../../src/middleware', false, /\.js$/), (name, context) => {
  middlewares.push(context.default || context);
});
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
/**
 * 显示错误提示对话框
 */
const showError = (text) => {
  MessageBox.confirm(text || '登录失败!', {
    type: 'error',
    showClose: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    confirmButtonText: '重新登录',
    cancelButtonText: '重试',
  }).then(() => {
    router.logout();
  }).catch(() => {
    window.location.reload();
  });
};
/**
 * 凭code获取accesstoken
 */
const fetchAccessToken = async (code) => {
  try {
    const { data } = await axios.get(AUTH_URL, {
      params: { code },
    });
    const { token } = data.data;
    const userinfo = parseJWT(token);
    if (userinfo) {
      store.commit(SET_TOKEN, {
        token,
        userinfo,
      });
      return Promise.resolve(true);
    }
    throw new Error();
  } catch (e) {
    return Promise.resolve(false);
  }
};
/**
 * 重定向去登录
 */
router.login = (state) => {
  const queryData = {
    client_id: CLIENT_ID,
    response_type: 'code',
    state: encodeURIComponent(state),
    redirect_uri: encodeURIComponent(`${window.location.origin}${window.location.pathname}#${AUTH_PATH}`),
  };
  const query = Object.keys(queryData).map(k => `${k}=${queryData[k]}`).join('&');
  const loginUrl = `${LOGIN_URL}${LOGIN_URL.indexOf('?') < 0 ? '?' : '&'}${query}`;
  if (/^http/.test(loginUrl)) window.location = loginUrl;
  else router.push(loginUrl);
};
/**
 * 退出登录
 * 清除用户凭证并重定向去统一用户平台退出
 */
router.logout = () => {
  const href = window.location.href.replace(window.location.hash, '');
  const logoutUri = `${LOGOUT_URL}${encodeURIComponent(href)}`;
  if (!store.state.token) {
    window.location = logoutUri;
  }
  store.commit(CLEAR_TOKEN);
  loading.show('正在退出...');
  axios.put(LOGOUT_URL_API).then(() => {
    window.location = logoutUri;
  }).catch(() => {
    window.location = logoutUri;
  });
};
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  console.log(router, to);
  // if (!to.matched.length) {
  //   next();
  //   return;
  // }
  /**
   * 检验是否登录回调中
   */
  if (to.path === AUTH_PATH) {
    if (!to.query.code) {
      next(to.query.state || HOME_PATH);
      return;
    }
    loading.show('登录中');
    const done = await fetchAccessToken(to.query.code);
    if (done) {
      next(to.query.state || HOME_PATH);
    } else {
      loading.close();
      showError('登录失败!');
    }
    return;
  }
  try {
    const proMiddleware = middlewares.map(middleware => middleware(router.app, to, from));
    console.log(proMiddleware);
    await Promise.all(proMiddleware);
  } catch (e) {
    console.log(e);
  }
  LoadingBar.start();
  next();
  updateDocumentTitle(to);
});
router.afterEach(() => {
  LoadingBar.finish();
});
export default router;
