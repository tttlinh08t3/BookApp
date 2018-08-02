import router from './index'

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const auth = JSON.parse(window.localStorage.getItem('authUser')) // set authUser after login
    if (auth && auth.token) {
      const requireRole = to.meta.role
      if (requireRole) {
        // START: Check role
        const currentRole = JSON.parse(window.localStorage.getItem('role')) // set roles after login
        if (currentRole === requireRole) {
          next()
        } else {
          console.log('User has no access')
          next('/forbidden')
        }
        // END: Check role
      } else {
        next()
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
