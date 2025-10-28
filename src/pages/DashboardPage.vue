<template>
  <div class="dashboard-page">
    <DashboardNavbar />

    <main class="dashboard-main">
      <div class="container">
        <header class="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Here's a summary of your support ticket activity.</p>
        </header>

        <div class="stats-grid">
          <div class="card stat-card total-tickets">
            <div class="stat-icon">
              <i class="fas fa-ticket-alt"></i>
            </div>
            <div class="stat-info">
              <h2>{{ stats.totalTickets }}</h2>
              <p>Total Tickets</p>
              <p class="stat-context">All tickets created</p>
            </div>
          </div>

          <div class="card stat-card open-tickets">
            <div class="stat-icon">
              <i class="fas fa-envelope-open-text"></i>
            </div>
            <div class="stat-info">
              <h2>{{ stats.openTickets }}</h2>
              <p>Open Tickets</p>
              <p class="stat-context">Tickets awaiting response</p>
            </div>
          </div>

          <div class="card stat-card resolved-tickets">
            <div class="stat-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="stat-info">
              <h2>{{ stats.resolvedTickets }}</h2>
              <p>Resolved Tickets</p>
              <p class="stat-context">Successfully closed tickets</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DashboardNavbar from '../components/DashboardNavbar.vue'
import Footer from '../components/Footer.vue'

const stats = reactive({
  totalTickets: 25,
  openTickets: 12,
  resolvedTickets: 13,
})
</script>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-main {
  flex-grow: 1;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 48px;
}

.dashboard-header h1 {
  font-size: 36px;
  color: var(--text-color);
  margin-bottom: 8px;
}

.dashboard-header p {
  font-size: 18px;
  color: var(--text-color-muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.stat-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  min-height: 200px;
  box-sizing: border-box;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
  flex-shrink: 0;
  margin-top: 5px;
}

.total-tickets .stat-icon {
  background-color: var(--primary-color);
}
.open-tickets .stat-icon {
  background-color: var(--status-in-progress);
}
.resolved-tickets .stat-icon {
  background-color: var(--status-open);
}

.stat-info {
  text-align: right;
  margin-top: 5px;
}

.stat-info h2 {
  font-size: 42px;
  margin: 0;
  line-height: 1;
  color: var(--text-color);
}

.stat-info p {
  margin: 0;
  font-size: 16px;
  color: var(--text-color-muted);
}

.stat-context {
  font-size: 14px !important;
  color: var(--text-color-muted) !important;
  opacity: 0.8;
  font-weight: 400 !important;
  margin-top: 4px !important;
}

@media (max-width: 768px) {
  .dashboard-header h1 {
    font-size: 30px;
  }

  .dashboard-header p {
    font-size: 16px;
  }

  .stat-card {
    padding: 24px;
    min-height: auto;
  }

  .stat-info h2 {
    font-size: 36px;
  }
}
</style>
