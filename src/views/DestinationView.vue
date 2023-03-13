<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBackButton from '@/components/GoBackButton.vue';
import { getData } from '@/services/getData'
import { Destination } from '@/types/Destination';
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

let destination = ref<Destination>()
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

</script>
<template>
  <div>
    <GoBackButton />
    <template v-if="destination">
      <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
          <p>{{ destination.description }}</p>
        </div>
      </section>
      <section class="experiences">
        <div class="cards">
          <RouterLink :to="{ name: 'Experience', params: { slug: destination.slug, experienceSlug: experience.slug } }"
            v-for="experience in destination.experiences" :key="experience.slug">
            <ExperienceCard :experience="experience" />
          </RouterLink>

        </div>
      </section>
      <RouterView />
    </template>
  </div>
</template>
