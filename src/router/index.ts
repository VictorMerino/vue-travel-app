import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'nav--active',
  scrollBehavior (to, from, savedPosition) {
    // return savedPosition || new Promise(resolve => setTimeout(() => resolve({ top: 0 }), 3000))
    return savedPosition || { top: 0, behavior: 'smooth' }
    // return {top: null, left: null, behavior: null}
  }
})
