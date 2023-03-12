<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/structure/NavBar.vue'
const dos = 2
</script>

<template>
  <NavBar />

  <div class="container">
    <RouterView />
  </div>
</template>
