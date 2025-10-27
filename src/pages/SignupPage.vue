<template>
  <AuthLayout
    title="Create Your Account"
    footerText="Already have an account?"
    footerLink="/auth/login"
    footerLinkText="Login"
  >
    <form class="auth-form" @submit.prevent="handleSignup" noValidate>
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          class="form-input"
          placeholder="Ahmad Taiwo"
          v-model="fullName"
        />
        <div class="error-message">{{ fullNameError }}</div>
      </div>
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
          placeholder="Minimum 8 characters"
          v-model="password"
        />
        <div class="error-message">{{ passwordError }}</div>
      </div>
      <button type="submit" class="btn btn-primary full-width">Create Account</button>
    </form>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'

const router = useRouter()

// State for form inputs
const fullName = ref('')
const email = ref('')
const password = ref('')

// State for error messages
const fullNameError = ref('')
const emailError = ref('')
const passwordError = ref('')

const handleSignup = () => {
  let isValid = true
  fullNameError.value = ''
  emailError.value = ''
  passwordError.value = ''

  if (fullName.value.trim() === '') {
    fullNameError.value = 'Full name is required.'
    isValid = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value.trim() === '') {
    emailError.value = 'Email is required.'
    isValid = false
  } else if (!emailPattern.test(email.value)) {
    emailError.value = 'Please enter a valid email address.'
    isValid = false
  }

  if (password.value.trim().length < 8) {
    passwordError.value = 'Password must be at least 8 characters long.'
    isValid = false
  }

  if (!isValid) {
    return
  }

  // Simulate Successful Signup & Login
  const session = {
    token: 'dummy-jwt-token-for-hng-task-signup',
    user: { name: fullName.value, email: email.value },
    expiresAt: new Date().getTime() + 3600 * 1000,
  }
  localStorage.setItem('ticketapp_session', JSON.stringify(session))

  router.push('/dashboard')
}
</script>

<style scoped>
/* We can reuse the same styles from the LoginPage, so this can be minimal */
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
  color: #ef4444; /* A modern red for errors */
  font-size: 14px;
  margin-top: 1px;
  min-height: 1em; /* Prevents layout shifts */
}

.btn.full-width {
  width: 100%;
}
</style>
