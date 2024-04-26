import { defineStore } from 'pinia'
export const useLayoutStore = defineStore('layout', {
  state: () => ({ isCollapse: false }),
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