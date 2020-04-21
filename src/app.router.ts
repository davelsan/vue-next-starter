import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import { routes as home  } from '@/modules/home/home.routes';
import { routes as about } from '@/modules/about/about.routes';

const routes: Array<RouteRecordRaw> = [
  ...home,
  ...about,
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
