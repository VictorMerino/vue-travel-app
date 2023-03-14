import { checkIfRouteExists } from '@/services/getData'
import HomeView from '@/views/HomeView.vue'
import { RouteParams, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/:slug',
    name: 'Destination',
    component: () => import('@/views/DestinationView.vue'),
    beforeEnter(to: RouteParams, from: RouteParams) {
      const exists =  checkIfRouteExists(to.params.slug)
      if(!exists) return {
          name: 'Error404',
          params: {
            pathMatch: to.path.split('/').slice(1)
          },
          query: to.query,
          hash: to.hash
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'Experience',
        component: () => import('@/views/ExperienceView.vue'),
      },
    ]
  },

  // TO-DO: to actually make it work we will need to:
  /**
   * Get all routes and save them to Pinia at startup of the page
   * This way we will avoid calling the enpoint each time
   * In a route guard, like beforeEach route
   * we check if route exists (with a reducer maybe?)
   * If it exists: go on, show the destination/experience/whatever
   * Else: show the 404 error page
   */
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: () => import('@/views/Error404View.vue'),
  }
]
