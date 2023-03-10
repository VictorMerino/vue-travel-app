<script setup lang="ts">
import { RouterView } from 'vue-router'
const dos = 2
</script>

<template>
  <RouterLink :to="{ name: 'Home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'About' }">About</RouterLink>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
