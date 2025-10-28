<template>
  <div class="landing-page">
    <Navbar />

    <main>
      <section class="hero-section">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
        <div className="decorative-circle circle-4"></div>

        <div class="container hero-content">
          <div class="hero-text">
            <h1>Manage Your Tickets Seamlessly</h1>
            <p>
              The best platform to track, manage, and resolve customer support tickets efficiently.
              Get started today!
            </p>
            <div class="hero-buttons">
              <RouterLink to="/auth/signup" class="btn btn-light">Get Started</RouterLink>
              <RouterLink to="/auth/login" class="btn btn-outline-light">Login</RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <h2>Why Choose TicketApp?</h2>
          <div class="features-grid">
            <div class="card feature-card">
              <i class="fas fa-magic feature-icon"></i>
              <h3>Easy to Use</h3>
              <p>Our intuitive interface makes ticket management a breeze.</p>
            </div>
            <div class="card feature-card">
              <i class="fas fa-users feature-icon"></i>
              <h3>Collaborative</h3>
              <p>Work with your team in real-time to resolve issues faster.</p>
            </div>
            <div class="card feature-card">
              <i class="fas fa-chart-line feature-icon"></i>
              <h3>Powerful Analytics</h3>
              <p>Gain insights into your support performance with our dashboard.</p>
            </div>
          </div>
        </div>
      </section>
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
.hero-section {
  background-image: url('../assets/svg/hero-wave.svg');
  background-size: 100% auto;
  background-position: center bottom;
  background-repeat: no-repeat;

  padding: 150px 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hero-text h1 {
  font-size: 52px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.2;
}

.hero-text p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  z-index: 0;
}

.circle-1 {
  width: 100px;
  height: 100px;
  top: -40px;
  left: 10%;
}
.circle-2 {
  width: 150px;
  height: 150px;
  bottom: -80px;
  right: 15%;
}
.circle-4 {
  width: 80px;
  height: 80px;
  top: 90px;
  right: -3%;
}
.circle-3 {
  width: 50px;
  height: 50px;
  bottom: 180px;
  left: 25%;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.features-section {
  padding: 50px 0;
  text-align: center;
  background-color: var(--background-color);
}

.features-section h2 {
  font-size: 36px;
  margin-bottom: 48px;
  color: var(--text-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  text-align: left;
}

.feature-card {
  padding: 32px;
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: #ffffff;
  font-size: 24px;
}

.feature-icon i {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: #ffffff;
  font-size: 24px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--text-color);
}

.feature-card p {
  font-size: 16px;
  color: var(--text-color-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
    background-size: cover;
  }

  .hero-text h1 {
    font-size: 36px;
  }

  .hero-text p {
    font-size: 16px;
  }

  .circle-1 {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -80px;
  }

  .circle-2 {
    width: 120px;
    height: 120px;
    bottom: -50px;
    right: -60px;
  }

  .circle-3 {
    display: none;
  }

  .features-section {
    padding: 60px 0;
  }
}
</style>
