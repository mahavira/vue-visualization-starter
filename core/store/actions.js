import http from '../http';
import {
  SET_ATTR,
  INIT,
  FETCH_PERMISSION,
  FETCH_MENU,
  SETTING_MENU,

} from './types';
import {
  MENU_GET_MODE,
  PERMISSION_URL_API,
  MENU_URL_API,
} from '../../src/config';
import { requireContext } from '../util';

let defaultMenu = [];
requireContext(require.context('../../src/modules', true, /category\.js$/), (name, context) => {
  defaultMenu = defaultMenu.concat(context.default || context);
});
export default {
  [INIT]({ commit, dispatch }) {
    return Promise.all([
      // 加载权限
      dispatch(FETCH_PERMISSION),
      // 加载并设置主菜单
      dispatch(SETTING_MENU),
    ]).then(() => {
      commit(SET_ATTR, {
        inited: true,
      });
    });
  },
  /**
   * 获取用户权限
   */
  [FETCH_PERMISSION]({ state, commit }) {
    if (!PERMISSION_URL_API) return Promise.resolve();
    return new Promise((resolve, reject) => {
      http.get(`${PERMISSION_URL_API}/${state.userinfo.user_code}`).then(({ data }) => {
        if (data.status !== 'OK') {
          reject(data);
          return;
        }
        const permission = data.data.map(v => v.objCode);
        commit(SET_ATTR, {
          permission: [...state.permission, ...permission],
        });
        resolve();
      }, reject);
    });
  },
  /**
   * 获取用户菜单
   * 其方法和[SETTING_MENU]选其一
   */
  [FETCH_MENU]({ commit, state }) {
    if (!MENU_URL_API) return Promise.resolve();
    return new Promise((resolve, reject) => {
      http.get(`${MENU_URL_API}/${state.userinfo.user_code}`).then(({ data }) => {
        if (data.status !== 'OK') {
          reject(data);
          return;
        }
        const recursionMenu = menus => menus.map((item) => {
          if (item.subMenus && item.subMenus.length) {
            item.children = recursionMenu(item.subMenus);
          }
          return Object.assign(item, {
            title: item.title || item.comment,
            path: item.path || item.uri,
          });
        });
        const menu = recursionMenu(data.data);
        commit(SET_ATTR, {
          menu,
        });
        resolve();
      }, reject);
    });
  },
  /**
   * 设置用户菜单
   * 其方法和[FETCH_MENU]选其一
   */
  [SETTING_MENU]({ commit, state, dispatch }) {
    if (MENU_GET_MODE === 'remote') {
      return dispatch(FETCH_MENU);
    }
    const recursionMenu = (data) => {
      let some = false;
      const newData = [];
      data.forEach((item) => {
        if (item.children && item.children.length) {
          const childrens = recursionMenu(item.children);
          if (childrens) {
            item.children = childrens;
            some = true;
            newData.push(item);
          }
        } else if (!item.code || state.permission.indexOf(item.code) >= 0) {
          some = true;
          newData.push(item);
        }
      });
      if (some) return newData;
      return null;
    };
    const menu = recursionMenu(defaultMenu);
    commit(SET_ATTR, {
      menu,
    });
    return Promise.resolve();
  },
};
