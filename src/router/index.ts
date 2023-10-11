import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/auth',
        name: 'auth',
        component: () => import('@/layouts/Guest.vue'),
        children: [
          {
            path: 'login',
            name: 'login',
            component: () => import('@/views/Auth/SignIn.vue')
          },
          {
            path: 'sign-up',
            name: 'sign-up',
            component: () => import('@/views/Auth/SignUp.vue')
          }
        ]
      },
      {
        path: '/:organization_id?',
        name: 'app',
        component: () => import('@/layouts/App.vue'),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '',
            name: 'organization',
            component: () => import('@/views/Organization/Index.vue')
          }
        ]
      }
    ]
  });

  return router;
}
