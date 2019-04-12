import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { BASE_URL } from '../../src/config';

Vue.use(VueRouter);

const router = new VueRouter({
  base: BASE_URL || '',
  routes,
});

export default router;
