import { defineStore } from "pinia"
import { ref } from "vue"
import { getData } from "@/services/getData"
import { Destination } from "@/types/Destination"

export const useDataStore = defineStore('data', () => {
  const destinations = ref<Destination[]|null>(null)

  async function setDataToStore () {
    destinations.value = await getData()
  }

  async function getDestination(slug: string) {
    if(!destinations.value) await setDataToStore()
      const destination = destinations.value.find(destination => destination.slug === slug)
      return destination
  }

  return { destinations, setDataToStore, getDestination }
})