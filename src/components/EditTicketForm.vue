<template>
  <form @submit.prevent="handleSubmit" class="auth-form" noValidate>
    <h2 class="auth-title">Edit Ticket #{{ ticket.id }}</h2>
    <!-- ... form content is correct ... -->
    <div class="form-group">
      <label for="edit-title">Title</label>
      <input id="edit-title" type="text" class="form-input" v-model="formData.title" />
    </div>
    <div class="form-group">
      <label for="edit-description">Description</label>
      <textarea
        id="edit-description"
        class="form-input"
        v-model="formData.description"
        rows="4"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="edit-status">Status</label>
      <select id="edit-status" class="form-input" v-model="formData.status">
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
    </div>
    <div v-if="error" class="error-message" style="display: block">{{ error }}</div>
    <div class="form-actions">
      <button type="button" @click="$emit('cancel')" class="btn">Cancel</button>
      <button type="submit" class="btn btn-primary">Update Ticket</button>
    </div>
  </form>
</template>

<script setup>
// ... your script setup is correct ...
import { ref, reactive, watch } from 'vue'
const props = defineProps({ ticket: Object })
const emit = defineEmits(['save', 'cancel'])
const error = ref('')
const formData = reactive({ title: '', description: '', status: 'open' })
watch(
  () => props.ticket,
  (newTicket) => {
    formData.title = newTicket.title
    formData.description = newTicket.description || ''
    formData.status = newTicket.status
  },
  { immediate: true },
)
const handleSubmit = () => {
  if (formData.title.trim() === '') {
    error.value = 'Title is mandatory.'
    return
  }
  error.value = ''

  // When saving, we create a new object that combines the original ticket ID
  // with the new data from the form.
  emit('save', {
    ...props.ticket, // Keep original id, priority, etc.
    ...formData, // Overwrite with new title, description, status
  })
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
