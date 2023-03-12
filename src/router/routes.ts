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
  {
    path: '/destination/:slug',
    name: 'Destination',
    component: () => import('@/views/DestinationView.vue'),
  },
]
