<script setup lang="ts">
import { RouterView } from 'vue-router'

import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBackButton from '@/components/GoBackButton.vue';

import { useSetDestinationData } from '@/composables/useSetDestinationData';

const { destination } = useSetDestinationData()

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
