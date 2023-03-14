import { useDataStore } from "@/stores/data"
import { Destination } from "@/types/Destination"
import { ref, computed, onBeforeMount, watch } from "vue"
import { useRoute } from "vue-router"

export function useSetDestinationData(callback) {
  const route = useRoute()
  const dataStore = useDataStore()

  let destination = ref<Destination>()
  const destinationSlug = computed(() => route.params.slug ? route.params.slug.toLowerCase() : '')

  async function setData(callback?: Function) {
    destination.value = await dataStore.getDestination(destinationSlug.value)
    if (callback) callback()
  }
  onBeforeMount(async () => {
    setData(callback)
    watch(
      () => route.params,
      async () => {
        setData(callback)
      }
    )
  })
  return { destination }
}
