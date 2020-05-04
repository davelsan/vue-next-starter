import { RouteRecordRaw } from 'vue-router';
//
import Home from './home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];