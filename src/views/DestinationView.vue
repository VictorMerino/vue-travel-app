<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from '@/data/data.json'

interface Destination {
  id: Number
  name: String
  image: String
}

const route = useRoute()
const destinationId = computed(() => parseInt(route.params.id))
const destination = computed(() =>
  sourceData.destinations.find(
    destination => destination.id === destinationId.value
  )
)
</script>
<template>
  <h1>{{ destination.name }}</h1>
  <div class="destination-details">
    <img :src="`/images/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>
  </div>
</template>
