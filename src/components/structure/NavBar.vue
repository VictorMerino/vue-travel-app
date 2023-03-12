<script setup lang="ts"></script>

<template>
  <div class="nav" id="nav">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Brazil' }">Brazil</RouterLink>
    <RouterLink :to="{ name: 'Jamaica' }">Jamaica</RouterLink>
    <RouterLink :to="{ name: 'Panama' }">Panama</RouterLink>
    <RouterLink :to="{ name: 'Hawaii' }">Hawaii</RouterLink>
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
  </div>
</template>

<style scoped></style>
