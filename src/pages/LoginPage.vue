<template>
  <AuthLayout
    title="Welcome Back!"
    footerText="Don't have an account?"
    footerLink="/auth/signup"
    footerLinkText="Sign Up"
  >
    <form class="auth-form" @submit.prevent="handleLogin" noValidate>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          class="form-input"
          placeholder="you@example.com"
          v-model="email"
        />
        <div class="error-message">{{ emailError }}</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-input"
          placeholder="••••••••"
          v-model="password"
        />
        <div class="error-message">{{ passwordError }}</div>
      </div>
      <button type="submit" class="btn btn-primary full-width">Login</button>
    </form>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'

const router = useRouter()

const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')

const handleLogin = () => {
  let isValid = true
  emailError.value = ''
  passwordError.value = ''

  if (email.value.trim() === '') {
    emailError.value = 'Email is required.'
    isValid = false
  }
  if (password.value.trim() === '') {
    passwordError.value = 'Password is required.'
    isValid = false
  }

  if (!isValid) {
    return
  }

  const session = {
    token: 'fake-jwt-token-for-hng-task',
    user: { name: 'Ahmad Taiwo', email: email.value },
    expiresAt: new Date().getTime() + 3600 * 1000,
  }
  localStorage.setItem('ticketapp_session', JSON.stringify(session))

  router.push('/dashboard')
}
</script>

<style scoped>
.auth-form {
  text-align: left;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 2px;
  color: var(--text-color);
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 1px;
  min-height: 1em;
}

.btn.full-width {
  width: 100%;
}
</style>
