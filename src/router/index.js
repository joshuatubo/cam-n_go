import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import DashboardView from '../views/system/DashboardView.vue'
import CartView from '@/views/system/CartView.vue'
import BrowseCamerasView from '@/views/system/BrowseCamerasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/system/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseCamerasView,
    },
  ],
})

export default router
