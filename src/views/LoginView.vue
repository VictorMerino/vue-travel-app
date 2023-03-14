<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user'
const router = useRouter()
const userStore = useUserStore()
const username = ref<string>()
const password = ref<string>()
function login() {
  if (username.value) {
    userStore.login(username.value)
    return router.push({ name: 'Profile' })
  }
  alert('Add a username')
}
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form class="form" @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="username" class="input" />
      <label for="password">Password</label>
      <input type="text" name="password" v-model="password" class="input" />

      <button class="btn">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
