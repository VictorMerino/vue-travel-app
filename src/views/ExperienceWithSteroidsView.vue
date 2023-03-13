<script setup lang="ts">
import ExperienceShow from '@/components/ExperienceShow.vue';
import { getData } from '@/services/getData'
import { Destination } from '@/types/Destination';
import { Experience } from '@/types/Experience';
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let destination = ref<Destination>()
let experience = ref<Experience>()
const destinationSlug = computed(() => route.params.slug.toLowerCase())

async function setData() {
  destination.value = await getData(destinationSlug.value)
  experience.value = destination.value.experiences.find(exp => exp.slug === route.params.experienceSlug)
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
  <ExperienceShow v-if="experience" :experience="experience" />
</template>
