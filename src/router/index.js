import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Plant from '@/views/Plant.vue'
import Adopt from '@/views/Adopt.vue'
import Trip from '@/views/Trip.vue'
import Challenges from '@/views/Challenges.vue'
import Tasks from '@/views/Tasks.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/plant',
        name: 'Plant',
        component: Plant
      },
      {
        path: '/home/adopt',
        name: 'Adopt',
        component: Adopt
      },
      {
        path: '/home/trip',
        name: 'Trip',
        component: Trip
      },
      {
        path: '/home/challenges',
        name: 'Challenges',
        component: Challenges
      },
      {
        path: '/home/tasks',
        name: 'Tasks',
        component: Tasks
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//router.replace({ path: "/home/*", redirect: "/home" });

export default router
