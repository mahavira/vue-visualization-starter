import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { BASE_URL } from '../../src/config';
import { requireContext } from '../util';

let moduleRoutes = [];
requireContext(require.context('../../src/modules', true, /routes\.js$/), (name, context) => {
  moduleRoutes = moduleRoutes.concat(context.default || context);
});
Vue.use(VueRouter);

// console.log([...routes, ...moduleRoutes]);
const router = new VueRouter({
  base: BASE_URL || '',
  routes: [...routes, ...moduleRoutes],
});

export default router;
