import { defineStore } from 'pinia'
import Layout from '@/layout/index'
import {routes} from '@/router'

export const useLayoutStore = defineStore('layout', {
  state: () => ({ 
    isCollapse: false,
    headerMenu: [],
    siderMenu: []
  }),
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    downCollapse() {
      this.isCollapse = true
    },
    upCollapse() {
      this.isCollapse = false
    },
    generatedMenu() {
      function transformRoutesToMenus(routes) {
        // 首先，找到顶层的Layout组件路由
        const layoutRoute = routes.find(route => route.component === Layout)
      
        // 如果找到了Layout组件的路由，则处理其子路由来生成菜单
        if (layoutRoute && layoutRoute.children) {
          return layoutRoute.children
            // 过滤掉子路由中的Layout或其他不需要直接展示的组件
            .filter(childRoute => childRoute.component !== Layout)
            .map(childRoute => {
              const menuItem = {
                id: childRoute.name,
                title: childRoute.meta.title || '', // 使用meta.title作为菜单文本，如果没有则为空
                path: childRoute.path
              };
      
              // 如果子路由还有子路由，继续递归处理
              if (childRoute.children && childRoute.children.length > 0) {
                menuItem.children = transformRoutesToMenus(childRoute.children)
              }
      
              return menuItem
            });
        } else {
          // 如果没有找到Layout组件的路由，则直接处理所有顶级路由（这取决于您的路由结构）
          return routes
          .filter(route => route.component !== Layout) // 确保顶层非Layout的路由也被处理
          .map(route => {
            const menuItem = {
              id: route.name,
              title: route.meta.title || '',
              path: route.path
            };

            // 只有当route有children并且children数组非空时，才添加children属性
            if (route.children && route.children.length > 0) {
              menuItem.children = transformRoutesToMenus(route.children)
            }

            return menuItem
          });
        }
      }
      // 转换路由配置为菜单结构
      this.siderMenu = transformRoutesToMenus(routes)
    }
  },
})
