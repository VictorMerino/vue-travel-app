<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

const router = useRouter()
const userStore = useUserStore()
function logout() {
  userStore.logout()
  router.push({ name: 'Home' })
}
</script>
<template>
  <section class="profile">
    <h1>Profile of {{ userStore.username }}</h1>
    <button @click="logout">Logout</button>
  </section>
</template>

<style scoped></style>
