import { DEFAULT_TITLE } from '@/config';
import { isString } from '../util';

/**
 * 更新文档标题
 * @param {Object|String} route
 */
const updateDocumentTitle = (app, to) => {
  if (isString(to)) {
    document.title = to;
    return;
  }
  let title = DEFAULT_TITLE;
  if (to.meta && to.meta.title) {
    ({ title } = to.meta);
  } else if (to.matched && to.matched.length) {
    let i = to.matched.length - 1;
    while (i > 0) {
      i -= 1;
      if (to.matched[i].meta && to.matched[i].meta.title) {
        ({ title } = to.matched[i].meta);
        break;
      }
    }
  }
  document.title = title;
};

export default updateDocumentTitle;
