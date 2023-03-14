import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('user', () => {
  const username = ref<string|null>(null)

  function login (inputUser: string) {
    username.value = inputUser
  }

  function logout() {
    username.value = null
  }


  return { username, login, logout }
})