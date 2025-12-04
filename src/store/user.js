import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const isAuthorized = computed(() => !!user.value)

  function updateUser(userData) {
    userData ? user.value = userData : user.value = null
  }

  return {
    user,
    isAuthorized,
    updateUser
  }
})
