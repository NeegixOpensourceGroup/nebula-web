import { defineStore } from 'pinia'
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
    }
  },
})