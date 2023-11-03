<template>
  <ul>
    <li>
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Invoices' }">Invoices</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  background-color: white;
  padding: 1rem;
  list-style: none;
  margin-right: 20px;
}

li {
  margin: 1rem;
}
</style>
