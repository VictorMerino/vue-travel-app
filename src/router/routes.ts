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
    component: BrazilView,
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: HawaiiView,
  },
  {
    path: '/Jamaica',
    name: 'Jamaica',
    component: JamaicaView,
  },
  {
    path: '/panama',
    name: 'Panama',
    component: PanamaView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
]
