<script setup lang="ts">
import { Experience } from '@/types/Experience';

const { experience } = defineProps<{
  experience: Experience
}>()

</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>