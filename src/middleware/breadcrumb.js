import { REPLACE } from '../store/breadcrumb';
/**
 * 更新面包屑
 * @param {Object} route
 */
const updateBreadcrumb = async (context, route) => {
  const breadcrumb = [];
  route.matched.forEach((record) => {
    const crumb = {
      path: record.path,
      name: record.name,
      title: record.meta.title || record.name || record.path,
    };
    Object.keys(route.params).forEach((param) => {
      crumb.path = crumb.path.replace(`:${param}`, route.params[param]);
    }, this);
    breadcrumb.push(crumb);
  });
  context.$store.commit(REPLACE, breadcrumb);
};

export default updateBreadcrumb;
