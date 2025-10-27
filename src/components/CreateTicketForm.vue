<template>
  <form @submit.prevent="handleSubmit" class="auth-form" noValidate>
    <h2 class="auth-title">Create New Ticket</h2>
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        class="form-input"
        v-model="title"
        placeholder="e.g., Fix homepage bug"
      />
    </div>
    <div class="form-group">
      <label for="description">Description (Optional)</label>
      <textarea
        id="description"
        class="form-input"
        v-model="description"
        rows="4"
        placeholder="Provide a detailed description of the issue..."
      ></textarea>
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <select id="status" class="form-input" v-model="status">
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
    </div>
    <div v-if="error" class="error-message" style="display: block">{{ error }}</div>
    <div class="form-actions">
      <button type="button" @click="$emit('cancel')" class="btn">Cancel</button>
      <button type="submit" class="btn btn-primary">Save Ticket</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const status = ref('open')
const error = ref('')

// This defines the events the component can send to its parent
const emit = defineEmits(['save', 'cancel'])

// This is the full, working handleSubmit function
const handleSubmit = () => {
  // 1. Validation
  if (title.value.trim() === '') {
    error.value = 'Title is mandatory.'
    return // Stop the function if validation fails
  }
  if (!['open', 'in_progress', 'closed'].includes(status.value)) {
    error.value = 'Invalid status selected.'
    return
  }
  // Clear any previous errors if validation passes
  error.value = ''

  // 2. Create the new ticket object
  const newTicket = {
    id: `TICKET-${Math.floor(1000 + Math.random() * 9000)}`, // Better random ID
    title: title.value,
    description: description.value,
    status: status.value,
    priority: 'medium', // Default priority
    createdAt: new Date(),
  }

  // 3. Emit the 'save' event with the new ticket data
  emit('save', newTicket)
}
</script>

<!-- ADD THIS ENTIRE STYLE BLOCK -->
<style scoped>
.auth-title {
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 32px;
  color: var(--text-color);
}
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
  margin-top: 4px;
  min-height: 1em;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
}
</style>
