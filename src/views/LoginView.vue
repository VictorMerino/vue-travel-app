<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const username = ref<string>()
const password = ref<string>()
function login() {
  window.user = username
  router.push({ name: 'Profile' })
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
