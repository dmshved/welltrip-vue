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
        ? 'text-white bg-white/5'
        : 'text-gray-300 hover:text-white',
      'block rounded-md px-3 py-2 text-base font-medium',
    ]"
    :aria-current="$route.name === item.to.name ? 'page' : undefined"
  >
    {{ item.name }}
  </RouterLink>
</template>
