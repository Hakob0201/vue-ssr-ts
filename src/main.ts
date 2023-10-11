import { createPinia } from 'pinia';
import { createSSRApp } from 'vue';
// import i18n from '@/locales';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import App from './app.vue';
import createRouter from '@/router';
import { ID_INJECTION_KEY } from 'element-plus';

export function createApp() {
  const app = createSSRApp(App);
  const store = createPinia();
  const router = createRouter();
  app.use(store).use(router).use(Vue3Toastify, {
    autoClose: 3000
  } as ToastContainerOptions);
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  });

  return { app, router, store };
}
