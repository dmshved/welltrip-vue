<script setup>
defineProps({
  travelId: String
})
</script>

<template>
  <RouterLink :to="`/travels/${travelId}/tours`" class="cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </RouterLink>
</template>
