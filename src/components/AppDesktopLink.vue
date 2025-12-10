<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="item.to"
    :class="[
      $route.name === item.to.name
        ? 'bg-white/5 text-white'
        : 'text-gray-300 hover:text-white',
      'block rounded-sm px-3 py-2 text-base font-medium',
    ]"
  >
    {{ item.name }}
  </RouterLink>
</template>
