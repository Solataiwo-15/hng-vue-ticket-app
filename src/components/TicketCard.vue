<template>
  <div class="card ticket-card">
    <div class="ticket-header">
      <span class="ticket-id">{{ ticket.id }}</span>
      <span :class="`status-tag status-${ticket.status.replace('_', '-')}`">{{
        ticket.status.replace('_', ' ')
      }}</span>
    </div>
    <h3 class="ticket-title">{{ ticket.title }}</h3>
    <div class="ticket-footer">
      <span :class="`priority-tag priority-${ticket.priority}`">{{ ticket.priority }}</span>
      <div class="ticket-actions">
        <button class="btn-icon" @click="$emit('edit')"><i class="fas fa-edit"></i></button>
        <button class="btn-icon btn-icon-danger" @click="$emit('delete')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ticket: Object,
})
defineEmits(['edit', 'delete'])
</script>

<style scoped>
.ticket-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticket-id {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-muted);
}

.ticket-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.ticket-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.priority-tag {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: capitalize;
}

.priority-high {
  background-color: #fee2e2;
  color: #dc2626;
}
.priority-medium {
  background-color: #fef3c7;
  color: #d97706;
}
.priority-low {
  background-color: #e0e7ff;
  color: #4f46e5;
}

.ticket-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  background: none;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  color: var(--text-color-muted);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.btn-icon:hover {
  background-color: #f0f0f0;
  color: var(--text-color);
}

.btn-icon-danger:hover {
  background-color: #fee2e2;
  color: #dc2626;
}
</style>
