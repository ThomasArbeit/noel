import Vue from 'vue'
import VueRouter from 'vue-router'
import Dates from '../views/Dates.vue'
import Recap from '../views/Recap.vue'
import Choices from '../views/Choices.vue'
import Accueil from '../views/Accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/choix',
    name: 'Choices',
    component: Choices
  },
  {
    path: '/dates',
    name: 'Dates',
    component: Dates
  },
  {
    path: '/recap',
    name: 'Recap',
    component: Recap
  },
]

const router = new VueRouter({
  routes
})

export default router
