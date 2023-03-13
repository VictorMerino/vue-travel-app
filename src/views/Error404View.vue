<script setup lang="ts"></script>
<template>
  <div>
    <p>Error 404. Route not found</p>
    <p>
      <RouterLink :to="{ name: 'Home' }">Return home</RouterLink>
    </p>
  </div>
</template>
