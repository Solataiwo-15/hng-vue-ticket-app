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

const userName = computed(() => {
  const session = localStorage.getItem('ticketapp_session')
  if (session) {
    try {
      const sessionData = JSON.parse(session)
      return sessionData?.user?.name || 'User'
      // eslint-disable-next-line no-unused-vars
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
watch(
  () => route.path,
  () => {
    closeMenu()
  },
)

watch(isMenuOpen, (isOpen) => {
  const mainContent = document.querySelector('main')
  if (mainContent) {
    if (isOpen) {
      mainContent.classList.add('blur-background')
    } else {
      mainContent.classList.remove('blur-background')
    }
  }
})
</script>

<style>
main.blur-background {
  filter: blur(4px);
  pointer-events: none;
  user-select: none;
  transition: filter 0.3s ease-in-out;
}
</style>

<style scoped>
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

.hamburger-menu {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
}

main.blur-background {
  filter: blur(4px);
  pointer-events: none;
  user-select: none;
  transition: filter 0.3s ease-in-out;
}

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
    align-items: flex-start;
    justify-content: flex-start;
    padding: 65px 35px;
    gap: 25px;
    transition: right 0.35s ease-in-out;
    z-index: 1002;
    box-sizing: border-box;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links li > * {
    font-family: 'Poppins', sans-serif !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    color: var(--text-color) !important;
    background: none !important;
    border: none !important;
    padding: 0 !important;
    text-align: left !important;
    cursor: pointer !important;
    transition: color 0.2s;
  }

  .nav-links li > *:hover {
    color: var(--primary-color) !important;
  }

  .nav-links li > *:hover {
    color: var(--primary-color) !important;
  }

  .hamburger-menu {
    display: block;
    z-index: 1003;
    position: fixed;
    top: 16px;
    right: 24px;
  }

  .main-nav {
    justify-content: flex-start;
  }

  .nav-user {
    order: -1;
  }

  .nav-links .nav-user {
    color: var(--text-color-muted) !important;
    font-weight: 400 !important;
  }
}
</style>
