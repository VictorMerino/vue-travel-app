<script setup lang="ts">
import ExperienceShow from '@/components/ExperienceShow.vue';
import { getData } from '@/services/getData'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// import sourceData from '@/data/data.json'

interface Experience {
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

const experienceSlug = computed(() => route.params.experienceSlug)
const experience = computed(() => destination.value.experiences.find(exp => exp.slug === experienceSlug.value))


</script>
<template>
  <ExperienceShow :experience="experience" />
</template>
