import Vue from 'vue'
import Router from 'vue-router'

import { getLocalDataMiddleware, getEndpointConfigMiddleware, checkAccessMiddleware, setPageTitleMiddleware, closeSidebarMobileMiddleware, getPermissionByUser } from './middlewares'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'mm-active',
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach(initCurrentUserStateMiddleware)
router.beforeEach(getLocalDataMiddleware)
router.beforeEach(getEndpointConfigMiddleware)
router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)
router.beforeEach(closeSidebarMobileMiddleware)
router.beforeEach(getPermissionByUser)
export default router
