import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,
    }
  ],
})

export default router
