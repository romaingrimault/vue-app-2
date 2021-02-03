import { createRouter, createWebHashHistory } from 'vue-router'
import Recherche from '../views/Recherche.vue'

const routes = [
  {
    path: '/',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
