import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();

export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/home/index.vue')
    },
    {
      path: '/hi/:name',
      name: 'Hi',
      component: () => import('../pages/hi/index.vue')
    }
  ]
});
