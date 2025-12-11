<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user.js'
import { computed } from 'vue'

const { user, isAuthorized } = storeToRefs(useUserStore())

const greeting = computed(() => {
  return isAuthorized.value
    ? `Hi, ${user.value.name} 👋`
    : "Welcome, traveler 🚩"
})
</script>

<template>
  <div class="mx-auto max-w-2xl lg:mx-0">
    <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
      {{ greeting }}
    </h2>
    <p class="mt-2 text-lg/8 text-gray-600">Ready for the best trip ever?</p>
  </div>
</template>

