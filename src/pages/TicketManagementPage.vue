<template>
  <div class="ticket-management-page">
    <DashboardNavbar />

    <main class="ticket-main">
      <div class="container">
        <header class="ticket-page-header">
          <h1>Manage Tickets</h1>
          <button class="btn btn-primary" @click="isCreateModalOpen = true">
            <i class="fas fa-plus"></i> Create New Ticket
          </button>
        </header>

        <div class="ticket-list">
          <TicketCard
            v-for="ticket in tickets"
            :key="ticket.id"
            :ticket="ticket"
            @edit="handleOpenEditModal(ticket)"
            @delete="handleDeleteTicket(ticket.id)"
          />
        </div>
      </div>
    </main>

    <Footer />

    <!-- --- Modals --- -->
    <TicketModal :isOpen="isCreateModalOpen" @close="isCreateModalOpen = false">
      <CreateTicketForm @save="handleAddTicket" @cancel="isCreateModalOpen = false" />
    </TicketModal>

    <TicketModal :isOpen="isEditModalOpen" @close="handleCloseEditModal">
      <EditTicketForm
        v-if="currentlyEditingTicket"
        :ticket="currentlyEditingTicket"
        @save="handleUpdateTicket"
        @cancel="handleCloseEditModal"
      />
    </TicketModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { initialTickets } from '../utils/mock-data'
import DashboardNavbar from '../components/DashboardNavbar.vue'
import Footer from '../components/Footer.vue'
import TicketCard from '../components/TicketCard.vue'
import TicketModal from '../components/TicketModal.vue'
import CreateTicketForm from '../components/CreateTicketForm.vue'
import EditTicketForm from '../components/EditTicketForm.vue'

// --- STATE ---
const tickets = ref(initialTickets)
const isCreateModalOpen = ref(false)
const isEditModalOpen = ref(false)
const currentlyEditingTicket = ref(null)

// --- METHODS ---
const handleAddTicket = (newTicket) => {
  tickets.value.unshift(newTicket) // Add to the beginning of the array
  isCreateModalOpen.value = false
}

const handleDeleteTicket = (ticketIdToDelete) => {
  if (window.confirm('Are you sure you want to delete this ticket?')) {
    tickets.value = tickets.value.filter((ticket) => ticket.id !== ticketIdToDelete)
  }
}

const handleOpenEditModal = (ticketToEdit) => {
  currentlyEditingTicket.value = ticketToEdit
  isEditModalOpen.value = true
}

const handleUpdateTicket = (updatedTicket) => {
  const index = tickets.value.findIndex((ticket) => ticket.id === updatedTicket.id)
  if (index !== -1) {
    tickets.value[index] = updatedTicket
  }
  isEditModalOpen.value = false
  currentlyEditingTicket.value = null
}

const handleCloseEditModal = () => {
  isEditModalOpen.value = false
  currentlyEditingTicket.value = null
}
</script>

<style scoped>
.ticket-management-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.ticket-main {
  flex-grow: 1;
}

.ticket-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 15px;
}

.ticket-page-header h1 {
  font-size: 36px;
  margin: 0;
}

.ticket-page-header .btn i {
  margin-right: 8px;
}

.ticket-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

/* ============================================= */
/* --- TICKET PAGE RESPONSIVENESS --- */
/* ============================================= */

@media (max-width: 768px) {
  .ticket-page-header {
    /* Stack the title and button on mobile */
    flex-direction: column;
    align-items: flex-start; /* Align to the left */
    gap: 16px;
  }

  .ticket-page-header h1 {
    font-size: 30px;
  }

  .ticket-list {
    /* Ensure a single column on small screens */
    grid-template-columns: 1fr;
  }
}
</style>
