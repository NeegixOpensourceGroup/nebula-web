import { createRouter, createWebHistory } from 'vue-router'
import Item11 from '../views/example1/item1/index.vue'
import Item21 from '../views/example2/item1/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'item11',
      component: Item11
    },
    {
      path: '/item21',
      name: 'item21',
      component: Item21
    }
  ]
})

export default router
