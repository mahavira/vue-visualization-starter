import Vue from 'vue';
import ElementUI from 'element-ui';
import { LOG_OPTS } from '../src/config';
import { requireContext } from './util';
/**
 * 全局样式
 */
import './assets/styles/index.scss';
/**
 * 入口组件
 */
import App from './App.vue';
/**
 * 路由
 */
import router from './router';
/**
 * 数据仓库
 */
import store from './store';
/**
 * http服务资源
 */
import './http';
/**
 * 权限管理
 */
import Permission from './lib/permission';
/**
 * 日记管理
 */
import Log from './lib/log';
/**
 * 日记管理
 */
import Perf from './lib/perf';

Vue.use(ElementUI);
Vue.use(Permission, store);
Vue.use(Log, LOG_OPTS);
Vue.use(Perf);
Vue.config.productionTip = false;
/**
 * 动态引入自定义指令
 */
requireContext(require.context('../src/directive', false, /\.js$/), (name, context) => {
  if (name === 'index') return;
  Vue.directive(name, context.default || context);
});
/**
 * 动态引入自定义过滤器
 */
requireContext(require.context('../src/filter', false, /\.js$/), (name, context) => {
  if (name === 'index') return;
  Vue.filter(name, context.default || context);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
console.log('init app');
