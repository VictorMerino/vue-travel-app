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
    children: [
      {
        path: ':experienceSlug',
        name: 'Experience',
        component: () => import('@/views/ExperienceView.vue'),
      },
    ]
  },
]
