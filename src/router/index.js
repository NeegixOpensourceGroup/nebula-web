import { createRouter, createWebHistory } from 'vue-router'
import Item21 from '@/views/example2/item1/index.vue'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/item21',
          name: 'home',
          component: Item21
        }
      ]
    }
  ]
})

export default router
