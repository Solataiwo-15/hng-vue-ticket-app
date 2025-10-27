<template>
  <div class="not-found-page">
    <Navbar />
    <main class="container not-found-content">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <RouterLink to="/" class="btn btn-primary">Go to Homepage</RouterLink>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.not-found-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 0;
}

.not-found-content h1 {
  font-size: 120px;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.not-found-content h2 {
  font-size: 36px;
  margin: 16px 0;
  color: var(--text-color);
}

.not-found-content p {
  font-size: 18px;
  color: var(--text-color-muted);
  max-width: 400px;
  margin-bottom: 32px;
}
</style>
