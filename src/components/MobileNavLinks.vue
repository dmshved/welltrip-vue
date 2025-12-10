<script setup>
import { inject } from 'vue'
import AppMobileLink from '@/components/AppMobileLink.vue'

defineProps({
  navigation: Array
})

defineEmits(['close'])

const logout = inject('logout')
</script>

<template>
  <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
    <!-- Links -->
    <AppMobileLink v-for="item in navigation" :item="item" />

    <!-- Logout Button -->
    <button
      @click="logout(); $emit('close')"
      class="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    >
      Logout
    </button>
  </div>
</template>
