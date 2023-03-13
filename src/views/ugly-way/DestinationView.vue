<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue';
import { getData } from '@/services/getData'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
// import sourceData from '@/data/data.json'

interface Destination {
  id: Number
  name: String
  image: String
}

const route = useRoute()

let destination = ref({})
const destinationSlug = computed(() => route.params.slug.toLowerCase())

async function setData() {
  destination.value = await getData(destinationSlug.value)
}
onBeforeMount(async () => {
  setData()
  watch(
    () => route.params,
    async () => {
      setData()
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
  <section class="experiences">
    <div class="cards">
      <RouterLink :to="{ name: 'Experience_old', params: { slug: destination.slug, experienceSlug: experience.slug } }"
        v-for="experience in destination.experiences" :key="experience.slug">
        <ExperienceCard :experience="experience" />
      </RouterLink>

    </div>
  </section>
</template>
