import router from './router'
router.beforeEach((to, from, next) => {
  return next()
})
export default router