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
    // --- PUBLIC ROUTES ---
    { path: '/', component: LandingPage },
    { path: '/auth/login', component: LoginPage },
    { path: '/auth/signup', component: SignupPage },

    // --- PROTECTED ROUTES ---
    { 
      path: '/dashboard', 
      component: DashboardPage,
      meta: { requiresAuth: true } // Add this meta field
    },
    { 
      path: '/tickets', 
      component: TicketManagementPage,
      meta: { requiresAuth: true } // Add this meta field
    },
    
    // --- CATCH-ALL ROUTE ---
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
  ]
})

// --- THIS IS THE NAVIGATION GUARD ---
router.beforeEach((to, from, next) => {
  // 1. Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // 2. Check if the user is logged in (session exists and is not expired)
    const session = localStorage.getItem('ticketapp_session');
    let sessionData = null;
    try {
      sessionData = session ? JSON.parse(session) : null;
    } catch (error) {
      // If session data is corrupted, clear it
      localStorage.removeItem('ticketapp_session');
    }

    if (sessionData && sessionData.expiresAt > new Date().getTime()) {
      // If logged in and token is not expired, proceed to the page
      next();
    } else {
      // If not logged in or token is expired, redirect to the login page
      localStorage.removeItem('ticketapp_session');
      next('/auth/login');
    }
  } else {
    // If the route does NOT require auth, always let them proceed
    next();
  }
});
// --- END OF NAVIGATION GUARD ---

export default router