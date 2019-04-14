/**
 * 开发/生产标识
 * 生产环境: production
 * 开发环境: development
 */
export const ENV = process.env.NODE_ENV;
/**
 * 当前域名
 */
export const HOST = ENV === 'development' ? '' : '';
/**
 * 默认Title
 */
export const DEFAULT_TITLE = '可视化系统';
/**
 * 项目名
 */
export const PROJECT_NAME = '可视化系统';
/**
 * 项目编号
 */
export const PROJECT_ID = '';
/**
 * 基本URL
 */
export const BASE_URL = '/';
/**
 * 首页路由路径
 */
export const HOME_PATH = '/';
/**
 * 菜单获取方式
 * local 从本地读取
 * remote 从远程读取
 */
export const MENU_GET_MODE = 'local';
/**
 * 默认加载的模块
 */
export const DEFAULT_MODULE = '';
/**
 * API域名
 */
export const API_HOST = window.location.origin;
/**
 * API基本URL
 */
// export const API_BASE_URL = '/AUTH-WEB/';
export const API_BASE_URL = ENV === 'production' ? '/AUTH-WEB/' : '/gateway/CONSOLE/';
/**
 * 请求限时
 */
export const API_REQUEST_TIMEOUT = 20000;
/**
 * 日记保存接口
 */
export const LOG_OPTS = {
  url: `${BASE_URL}log`,
  delay: 30000,
  enable: false,
};
/**
 * 身份识别KEY，接口请求时附带到Header
 */
export const AUTH_ENABLE_STATUS = true;
/**
 * 身份识别KEY，接口请求时附带到Header
 */
export const AUTH_KEY = 'Authorization';
/**
 * 登录后回调的路由路径
 */
export const AUTH_PATH = `${BASE_URL}auth`;
/**
 * Token获取接口地址
 * code query
 */
export const AUTH_URL = '/user/accesstoken'; // 本地模拟测试
// export const AUTH_URL = 'http://10.30.13.114:9100/user/accesstoken';
/**
 * 退出登录接口
 */
export const LOGOUT_URL_API = '/user/logout'; // 本地模拟测试
// export const LOGOUT_URL_API = 'http://10.30.13.114:9100/user/logout';
/**
 * PUP退出登录URL
 */
export const LOGOUT_URL = '/'; // 本地模拟测试
// export const LOGOUT_URL = 'http://221.2.140.133:8600/user-asserver/logout?redirectUrl=';
/**
 * PUP登录基本URL
 */
export const LOGIN_URL = '/login'; // 本地模拟测试
// export const LOGIN_URL = 'http://221.2.140.133:8600/user-asserver/authorize';
/**
 * 权限获取URL
 * 值为空时不请求
 */
export const PERMISSION_URL_API = '';
/**
 * 菜单获取URL
 * 值为空时不请求
 */
export const MENU_URL_API = '';
/**
 * (子)系统PUP登录标识，跳转至登录时附带
 */
export const CLIENT_ID = '9d5d629f77904a1ab9f5a40c7550379e';
// export const CLIENT_ID = 'e293d930357e4c80a50e0f0490e026e9';
