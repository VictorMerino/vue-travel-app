import HomeView from '@/views/HomeView.vue'
import BrazilView from '@/views/BrazilView.vue'
import HawaiiView from '@/views/HawaiiView.vue'
import PanamaView from '@/views/PanamaView.vue'
import JamaicaView from '@/views/JamaicaView.vue'
import AboutView from '@/views/AboutView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: () => import('@/views/BrazilView.vue'),
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import('@/views/HawaiiView.vue'),
  },
  {
    path: '/Jamaica',
    name: 'Jamaica',
    component: () => import('@/views/JamaicaView.vue'),
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import('@/views/PanamaView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
]
