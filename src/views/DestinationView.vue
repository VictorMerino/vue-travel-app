<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// import sourceData from '@/data/data.json'

interface Destination {
  id: Number
  name: String
  image: String
}
const route = useRoute()

let destination = ref({})
const destinationSlug = computed(() => route.params.slug.toLowerCase())
async function getData() {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${destinationSlug.value}.json`
  )
  destination.value = await response.json()
}
onBeforeMount(async () => {
  getData()
  watch(
    () => route.params,
    () => {
      getData()
    }
  )
})

// const destinationId = computed(() => parseInt(route.params.id))

/* const destination = computed(() =>
  sourceData.destinations.find(
    destination => destination.slug === destinationSlug.value
  )
) */
</script>
<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
