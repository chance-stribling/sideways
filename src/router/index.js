import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/experience',
      name: 'exp',
      component: ExperienceView
    },
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/skills',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillsView.vue')
    }
  ]
})

export default router
