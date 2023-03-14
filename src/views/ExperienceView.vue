<script setup lang="ts">
import { ref } from 'vue'

import { useRoute } from 'vue-router';
import ExperienceShow from '@/components/ExperienceShow.vue';
import { useSetDestinationData } from '@/composables/useSetDestinationData';
import { Experience } from '@/types/Experience';

const route = useRoute()

const { destination } = useSetDestinationData(setExperiences)

let experience = ref<Experience>()

function setExperiences() {
  if (destination.value) experience.value = destination.value.experiences.find(exp => exp.slug === route.params.experienceSlug)
}

</script>
<template>
  <ExperienceShow v-if="experience" :experience="experience" />
</template>
