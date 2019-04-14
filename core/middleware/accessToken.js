import http from '../http';
import store from '../store';
import { HOME_PATH, AUTH_PATH, AUTH_URL } from '../../src/config';
import { SET_TOKEN } from '../store/types';
import { parseJWT } from '../util';
import Loading from '../components/Loading';
/**
 * 凭code获取accesstoken
 */
const fetchAccessToken = async (code) => {
  try {
    const { data } = await http.get(AUTH_URL, {
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
 * 检验是否登录回调中
 */
const checkAccessToken = async (app, to, from, next) => {
  if (to.path !== AUTH_PATH) {
    return true;
  }
  if (!to.query.code) {
    next(to.query.state || HOME_PATH);
    return false;
  }
  Loading.show('登录中');
  const done = await fetchAccessToken(to.query.code);
  Loading.close();
  if (done) {
    next(to.query.state || HOME_PATH);
    return false;
  }
  return Promise.reject(new Error('获取token失败!'));
};

export default checkAccessToken;
