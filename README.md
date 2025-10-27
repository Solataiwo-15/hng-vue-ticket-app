# HNG Stage 2: Multi-Framework Ticket Web App (Vue.js Version)

This repository contains the **Vue.js implementation** for the HNG Stage 2 Frontend task. It is a complete port of the original React application, built from the ground up using Vue 3, Vite, and Vue Router.

The application maintains 100% feature parity and design consistency with the React version.

---

### ✨ Live URL

**The deployed Vue application can be viewed here:**

**[https://hng-vue-ticket-app-phi.vercel.app/](https://hng-vue-ticket-app-phi.vercel.app/)**

---

### ✅ Core Features Implemented

- **Modern UI/UX:** A clean, attractive, and "cute" user interface with a consistent design language, built using Vue's reactive system.
- **Landing Page:** A welcoming hero section with a custom SVG wave background, decorative elements, and clear calls-to-action.
- **Authentication:** Fully functional Login and Signup pages with client-side validation using Vue's `ref` for state management.
- **Simulated User Sessions:** User authentication is simulated using `localStorage`.
- **Protected Routes:** The Dashboard and Ticket Management pages are secured using Vue Router's Navigation Guards.
- **Dashboard:** A "smart" dashboard displaying key statistics in visually appealing cards.
- **Full CRUD Functionality:** A complete Ticket Management system allowing users to:
  - **C**reate new tickets via a modal form.
  - **R**ead all existing tickets in a responsive grid.
  - **U**pdate ticket details (title, description, status) via an edit modal.
  - **D**elete tickets with a confirmation step.
- **Responsive Design:** The entire application is fully responsive, featuring a slide-in sidebar menu for a polished mobile experience, managed with Vue's state.

---

### 🛠️ Tech Stack & Libraries

- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite
- **Routing:** Vue Router
- **Styling:** Plain CSS with variables and Scoped Styles.
- **Icons:** Font Awesome

---

### 🚀 Setup and Execution Steps

To run this project locally, follow these steps:

1.  **Clone the main repository and navigate into the `vue-app` directory.**
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    ```
4.  Open your browser and navigate to the local URL provided (e.g., `http://localhost:5173`).

---

### 👤 Example Test User Credentials

Since this is a simulated authentication, you can use any of the following to test:

- **Login:** Enter any non-empty email and password.
- **Signup:** Fill out all fields with valid information (email format, password length) to create a new "session."

---
