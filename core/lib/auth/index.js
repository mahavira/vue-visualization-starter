/* eslint-disable */
/**
** 属性
authorizeUrl
authorizePath
tokenKey
  client_id	true	string	申请应用时分配的AppKey。
  redirect_uri	true	string	授权回调地址，站外应用需与设置的回调地址一致，站内应用需填写canvas page的地址。
  scope	false	string	申请scope权限所需参数，可一次申请多个scope权限，用逗号分隔。使用文档
  state	false	string	用于保持请求和回调的状态，在回调时，会在Query Parameter中回传该参数。开发者可以用这个参数验证请求有效性，也可以记录用户请求授权页前的位置。这个参数可用于防止跨站请求伪造（CSRF）攻击
  display	false	string	授权页面的终端类型，取值见下面的说明。
  forcelogin	false	boolean	是否强制用户重新登录，true：是，false：否。默认false。
  language	false	string	授权页语言，缺省为中文简体版，en为英文版。
accessToken: {url, method:'GET', token_key:'data.data.data'}
logoutUrl: {url, method:'GET', token_key:'data.data.data'}
revokeAuthUrl
** 方法
accessToken()
checkAuth()
*/
const options = {
  client_id: '',
  token_key: '',
  access_token_uri: '',
  login_uri: '',
  auth_path: '',
  logout_uri: '',
};

/**
 * 检查当前路由是否需要授权访问
 */
const checkRequireAuth = to => to.matched.some(record => record.meta.requireAuth !== false);
/**
 * 凭code获取accesstoken
 */
const fetchAccessToken = async (code) => {
  try {
    const { data } = await axios.get(options.access_token_uri, {
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
const login = (state, next) => {
  const queryData = {
    client_id: opts.client_id,
    response_type: 'code',
    state: encodeURIComponent(state),
    redirect_uri: encodeURIComponent(`${window.location.origin}${window.location.pathname}#${AUTH_PATH}`),
  };
  const query = Object.keys(queryData).map(k => `${k}=${queryData[k]}`).join('&');
  const loginUrl = `${LOGIN_URL}${LOGIN_URL.indexOf('?') < 0 ? '?' : '&'}${query}`;
  if (/^http/.test(loginUrl)) window.location = loginUrl;
  else if (next) next(loginUrl);
  else router.push(loginUrl);
};
/**
 * 退出登录
 * 清除用户凭证并重定向去统一用户平台退出
 */
const logout = () => {
  const href = window.location.href.replace(window.location.hash, '');
  if (!store.state.token) {
    window.location = `${LOGOUT_URL}${href}`;
  }
  store.commit(CLEAR_TOKEN);
  loading.show('正在退出...');
  axios.put(LOGOUT_URL_API).then(() => {
    window.location = `${LOGOUT_URL}${href}`;
  }).catch(() => {
    window.location = `${LOGOUT_URL}${href}`;
  });
};
export default function plugin(Vue, options) {
  if (plugin.installed) return;
  plugin.installed = true;
  //
  Object.assign(opts, options);
  Object.defineProperties(Vue.prototype, {
    $permission: {
      get() {
        return Permission;
      },
    },
  });
}