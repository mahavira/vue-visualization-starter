import { Loading } from 'element-ui';
import { isObject } from '../util';
/**
 * -------------------------------
 * 显示隐藏全局加载提示
 * -------------------------------
 */
let loadingInstance = null;
const loading = {
  show(opts) {
    // if (loadingInstance) loadingInstance.close();
    loadingInstance = Loading.service(isObject(opts) ? opts : { lock: true, text: opts });
  },
  close() {
    if (loadingInstance) loadingInstance.close();
  },
};
export default loading;
