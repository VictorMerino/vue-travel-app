<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/structure/NavBar.vue'
const dos = 2
</script>

<template>
  <NavBar />

  <div class="container">

    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform .5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%)
}
</style>