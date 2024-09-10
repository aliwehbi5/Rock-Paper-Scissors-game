import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('../views/homePage.vue')
    },
    {
      path: '/nextMove/:move?',
      name: 'nextMove',
      component: () => import('../views/nextMove.vue'),
      props: true
    }
  ]
})

export default router
