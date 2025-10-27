<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-nav">
        <RouterLink to="/dashboard" class="nav-logo" @click="closeMenu">TicketApp</RouterLink>

        <ul :class="['nav-links', { active: isMenuOpen }]">
          <li>
            <span class="nav-user">Welcome, {{ userName }}!</span>
          </li>
          <li>
            <RouterLink to="/tickets" class="btn btn-text" @click="closeMenu"
              >Manage Tickets</RouterLink
            >
          </li>
          <li><button @click="handleLogout" class="btn btn-primary">Logout</button></li>
        </ul>

        <button class="hamburger-menu" @click="isMenuOpen = !isMenuOpen">
          <i :class="['fas', isMenuOpen ? 'fa-times' : 'fa-bars']"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

// A computed property to safely get the user's name
const userName = computed(() => {
  const session = localStorage.getItem('ticketapp_session')
  if (session) {
    try {
      const sessionData = JSON.parse(session)
      return sessionData?.user?.name || 'User'
    } catch (e) {
      return 'User'
    }
  }
  return 'User'
})

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleLogout = () => {
  localStorage.removeItem('ticketapp_session')
  closeMenu()
  router.push('/')
}

// Watch for route changes to close the menu
watch(
  () => route.path,
  () => {
    closeMenu()
  },
)
</script>

<style scoped>
/* Paste all the CSS from our React Navbar.css here */
.main-header {
  background-color: var(--surface-color);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px var(--shadow-color);
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-user {
  font-weight: 500;
  color: var(--text-color-muted);
  margin-right: 16px;
}

/* --- Hamburger Menu Button (hidden on desktop) --- */
.hamburger-menu {
  display: none; /* Hide by default */
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
}

/* ADD THIS NEW RULE */
main.blur-background {
  filter: blur(4px);
  /* Make the background unclickable */
  pointer-events: none;
  user-select: none;
  transition: filter 0.3s ease-in-out;
}

/* ============================================= */
/* --- FINAL MOBILE SIDEBAR STYLES --- */
/* ============================================= */

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 320px;
    height: 100%;
    background-color: var(--surface-color);
    box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;

    /* --- THE ALIGNMENT & SPACING FIX --- */
    align-items: flex-start; /* Strictly align everything to the left */
    justify-content: flex-start;
    padding: 65px 35px; /* Consistent padding */
    gap: 25px; /* Tighter, more consistent spacing */

    transition: right 0.35s ease-in-out;
    z-index: 1002;
    box-sizing: border-box;
  }

  .nav-links.active {
    right: 0;
  }

  /* This rule targets EVERY item in the menu for consistency */
  /* This rule targets EVERY item in the menu for consistency */
  /* This rule targets EVERY item in the menu for a complete and consistent reset */
  .nav-links li > * {
    /* === FONT & COLOR RESET === */
    font-family: 'Poppins', sans-serif !important; /* THE CRITICAL FIX: Force our desired font */
    font-size: 18px !important;
    font-weight: 500 !important;
    color: var(--text-color) !important;

    /* === VISUAL STYLE RESET === */
    background: none !important;
    border: none !important;
    padding: 0 !important;

    /* === ALIGNMENT & BEHAVIOR RESET === */
    text-align: left !important;
    cursor: pointer !important;

    /* === HOVER EFFECT === */
    transition: color 0.2s;
  }

  /* Add a hover effect for the items */
  .nav-links li > *:hover {
    color: var(--primary-color) !important;
  }

  /* Add a hover effect for the items */
  .nav-links li > *:hover {
    color: var(--primary-color) !important;
  }

  .hamburger-menu {
    display: block;
    z-index: 1003;
    position: fixed; /* Fix hamburger to the top right */
    top: 16px;
    right: 24px;
  }

  /* We also need to fix the main header to not interfere */
  .main-nav {
    justify-content: flex-start; /* Align logo to the left */
  }

  .nav-user {
    order: -1;
  }

  /* ADD THIS NEW RULE */
  .nav-links .nav-user {
    color: var(--text-color-muted) !important; /* Use the muted text color */
    font-weight: 400 !important; /* Make it slightly less bold */
  }
}
</style>
