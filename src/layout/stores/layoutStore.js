import { defineStore } from 'pinia'
export const useLayoutStore = defineStore('layout', {
  state: () => ({ isCollapse: false }),
  actions: {
    reverseCollapse() {
      this.isCollapse = !this.isCollapse
    },
    trueCollapse() {
      this.isCollapse = true
    },
    falseCollapse() {
      this.isCollapse = false
    }
  },
})