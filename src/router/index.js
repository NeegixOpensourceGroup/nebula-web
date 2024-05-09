import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index'
export const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'apple'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          icon: 'apple'
        }
      },
      {
        path: '/item13',
        name: 'item13',
        meta: {
          title: '首页1-2',
          icon: 'Menu'
        },
        component: () => import('@/views/example1/item1/index'),
      },
      {
        path: '/item14',
        name: 'item14',
        component: Layout,
        meta: {
          externalUrl: 'https://nebula.neegix.com',
          title: '第三方-Nebula(内部)',
          icon: 'Menu'
      }
    },
    {
      path: 'https://nebula.neegix.com',
      name: 'item15',
      meta: {
        title: '第三方-Nebula(新窗口)',
        icon: 'Menu'
    }
  }
    ],
  },
  {
    path: '/item21',
    component: Layout,
    children: [
      {
        path: '/item21',
        name: 'item22',
        component: () => import('@/views/example2/item1/index'),
        meta: {
          title: '首页2-2',
          icon: 'Menu'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    ...routes,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component:() => import('@/views/error/404.vue')
    },
  ]
})

export default router
