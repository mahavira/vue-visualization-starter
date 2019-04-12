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
export const DEFAULT_TITLE = '仪表盘';
/**
 * 项目名
 */
export const PROJECT_NAME = '管理系统';
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
export const MENU_GET_MODE = 'remote';
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
export const API_LOG_URL = `${BASE_URL}log`;
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
// export const AUTH_URL = '/user/accesstoken'; // 本地模拟测试
export const AUTH_URL = 'http://10.30.13.114:9100/user/accesstoken';
/**
 * 退出登录接口
 */
// export const LOGOUT_URL_API = '/user/logout'; // 本地模拟测试
export const LOGOUT_URL_API = 'http://10.30.13.114:9100/user/logout';
/**
 * PUP退出登录URL
 */
// export const LOGOUT_URL = '/logout'; // 本地模拟测试
export const LOGOUT_URL = 'http://221.2.140.133:8600/user-asserver/logout?redirectUrl=';
// export const LOGOUT_URL = 'http://oauth.pup.hubpd.com/user-asserver/logout?redirectUrl=';
/**
 * PUP登录基本URL
 */
// export const LOGIN_BASE_URL = '/login'; // 本地模拟测试
export const LOGIN_URL = 'http://221.2.140.133:8600/user-asserver/authorize';
// export const LOGIN_BASE_URL = 'http://oauth.pup.hubpd.com/pup-asserver/authorize';
/**
 * (子)系统PUP登录标识，跳转至登录时附带
 */
export const CLIENT_ID = '9d5d629f77904a1ab9f5a40c7550379e';
// export const CLIENT_ID = 'e293d930357e4c80a50e0f0490e026e9';
