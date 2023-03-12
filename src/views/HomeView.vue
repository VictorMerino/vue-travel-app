<script setup lang="ts">
import sourceData from '@/data/data.json'
import { ref } from 'vue'
const destinations = ref(sourceData.destinations)
</script>
<template>
  <div class="home">
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'Destination', params: { slug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
