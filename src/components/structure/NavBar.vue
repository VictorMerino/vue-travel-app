<script setup lang="ts">
import sourceData from '@/data/data.json'
</script>

<template>
  <div class="nav" id="nav">
    <RouterLink id="logo" :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink v-for="destination in sourceData.destinations" :key="destination.id" :to="{
      name: 'Destination',
      params: { slug: destination.slug.toLowerCase() },
    }">{{ destination.name }}
    </RouterLink>

    <RouterLink :to="{ name: 'Profile' }">Profile</RouterLink>
  </div>
</template>

<style scoped></style>
