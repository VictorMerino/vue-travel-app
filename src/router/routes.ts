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
        name: 'Destination',
        component: () => import('@/views/DestinationView.vue'),
        props: true,
      },
      {
        path: 'experience/:experienceSlug',
        name: 'Experience',
        component: () => import('@/views/ExperienceView.vue'),
        props: true,
      },
    ]
  },
  // REAL Nested Ones
  {
    path: '/:slug',
    name: 'DestinationWithSteroids',
    component: () => import('@/views/DestinationWithSteroidsView.vue'),
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceWithSteroids',
        component: () => import('@/views/ExperienceWithSteroidsView.vue'),
      },
    ]
  },
]
