import { defineStore } from 'pinia'
import {routes} from '@/router'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    layout: 'normal', // 默认布局
    isCollapse: false, // 侧边栏是否折叠
    headerMenu: [], // 顶部菜单
    siderMenu: [], // 侧边栏菜单
    menus:[], // 所有菜单
    activeMenu: '', // 当前激活的菜单
    tabs: [] // 标签页列表
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
      // 定义一个函数，用于递归遍历路由对象，并根据条件生成菜单
      function routesConvertToMenus(routes) {
        let menus = []

        routes.forEach(route => {
          // 如果当前路由对象有 meta 属性，则添加到菜单中
          if (route.meta) {
            // 创建菜单项
            let menu = {
              path: route.path,
              name: route.name,
              title: route.meta.title,
              icon: route.meta.icon
            }

            if(route.redirect){
              menu.redirect = route.redirect
            }

            // 如果当前路由对象有子路由，则递归处理子路由
            if (route.children) {
              menu.children = routesConvertToMenus(route.children)
            }

            // 添加菜单项到菜单数组
            menus.push(menu);
          } else if (route.children) {
            // 如果当前路由对象没有 meta 属性，但有子路由，则递归处理子路由
            let childMenus = routesConvertToMenus(route.children)
            menus = menus.concat(childMenus)
          }
        })

        return menus
      }
      // 转换路由配置为菜单结构
      this.menus = this.siderMenu = routesConvertToMenus(routes)

      if (this.layout === 'normal'){
        this.headerMenu = this.menus.filter(item=>!!item.children)
        this.findSiderMenu(this.headerMenu[0].name)
      }
      
      function findFirstDeepestChild(item) {
        if (item.children) {
          for (const child of item.children) {
            const deepestChild = findFirstDeepestChild(child);
            if (deepestChild) {
              // 返回第一个找到的最末级子项
              return deepestChild;
            }
          }
        }
        // 如果没有children或者已经是最末级，就返回当前项
        return item;
      }
      
      const firstDeepestChildOfProduct = findFirstDeepestChild(this.siderMenu[0])
      
      // 默认添加第一个最末级子项
      this.addTab(firstDeepestChildOfProduct.title, firstDeepestChildOfProduct.id, firstDeepestChildOfProduct.path)
    },
    findSiderMenu(name){
      this.siderMenu = this.menus.find(item => item.name === name).children
    },
    addTab (title, name, path){
      // Check if a tab with the same name already exists in the tabs array
      const tabExists = this.tabs.some(tab => tab.path === path)

      // If the tab does not exist, push the new tab into the array and set it as active
      if (!tabExists) {
        this.tabs.push({
          title: title,
          name: name,
          path: path
        })
      }
      this.activeMenu = name
    },
    removeTab(name){
      let nextTab
      if (this.activeMenu === name) {
        this.tabs.forEach((tab, index) => {
          if (tab.name === name) {
            nextTab = this.tabs[index + 1] || this.tabs[index - 1]
            if (nextTab) {
              this.activeMenu = nextTab.name
            }
          } 
        })
        
      }else {
        nextTab = this.tabs.find((tab) => tab.name === this.activeMenu)
      }
      this.tabs = this.tabs.filter((tab) => tab.name !== name)
      return nextTab
    },
  },
})
