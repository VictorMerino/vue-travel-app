// import { getData } from '@/services/getData'
import sourceData from '@/data/data.json'
import HomeView from '@/views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  // Old ugly routes
  {
    path: '/destination/:slug',
    props: true,
    children: [
      {
        path: '',
        name: 'Destination_old',
        component: () => import('@/views/ugly-way/DestinationView.vue'),
        props: true,
      },
      {
        path: 'experience/:experienceSlug',
        name: 'Experience_old',
        component: () => import('@/views/ugly-way/ExperienceView.vue'),
        props: true,
      },
    ]
  },
  // REAL Nested Ones
  {
    path: '/:slug',
    name: 'Destination',
    component: () => import('@/views/DestinationView.vue'),
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(destination => destination.slug === to.params.slug)
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
