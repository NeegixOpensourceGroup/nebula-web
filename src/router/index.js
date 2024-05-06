import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index'
export const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/item11',
    component: Layout,
    children: [
      {
        path: '/item11',
        name: 'item11',
        meta: {
          title: '首页'
        },
        children: [
          {
            path: '/item12',
            name: 'item12',
            component: () => import('@/views/example1/item1/index'),
            meta: {
              title: '首页1-1'
            }
          },
          {
            path: '/item13',
            name: 'item13',
            meta: {
              title: '首页1-2'
            },
            component: () => import('@/views/example1/item1/index'),
        }]
      },
      {
        path: '/item21',
        name: 'item21',
        component: () => import('@/views/example2/item1/index'),
        meta: {
          title: '首页2'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
