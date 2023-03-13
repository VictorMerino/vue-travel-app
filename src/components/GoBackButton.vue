<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="go-back">
    <button @click="goBack">Go back</button>
  </div>
</template>
