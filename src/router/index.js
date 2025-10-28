import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TicketManagementPage from '../pages/TicketManagementPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/auth/login', component: LoginPage },
    { path: '/auth/signup', component: SignupPage },

    {
      path: '/dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/tickets',
      component: TicketManagementPage,
      meta: { requiresAuth: true },
    },

    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const session = localStorage.getItem('ticketapp_session')
    let sessionData = null
    try {
      sessionData = session ? JSON.parse(session) : null
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      localStorage.removeItem('ticketapp_session')
    }

    if (sessionData && sessionData.expiresAt > new Date().getTime()) {
      next()

      localStorage.removeItem('ticketapp_session')

      next('/auth/login')
    }
  } else {
    next()
  }
})

export default router
