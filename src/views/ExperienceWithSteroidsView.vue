<script setup lang="ts">
import ExperienceShow from '@/components/ExperienceShow.vue';
import { getData } from '@/services/getData'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// import sourceData from '@/data/data.json'

// id: Number
interface Experience {
  name: String
  image: String
}

const route = useRoute()

let destination = ref({})
let experience = ref({})
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
  <ExperienceShow :experience="experience" />
</template>
