<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/user'
import LeftSidebar from '@/components/structure/LeftSidebar.vue'

const router = useRouter()
const userStore = useUserStore()
function logout() {
  userStore.logout()
  router.push({ name: 'Home' })
}
</script>
<template>
  <div>
    <section class="left-sidebar">
      <LeftSidebar />
    </section>
    <section class="profile">
      <RouterView />
    </section>
  </div>
</template>

<style scoped></style>
