<script setup>
import DesktopDropdown from '@/components/DesktopDropdown.vue'
import AppDesktopLink from '@/components/AppDesktopLink.vue'

defineProps({
  navigation: Array
})
</script>

<template>
  <div class="hidden md:block">
    <div class="flex items-center space-x-4">
      <!-- Links -->
      <div class="flex items-baseline space-x-4">
        <AppDesktopLink v-for="item in navigation" :item="item" />
      </div>

      <!-- Desktop Dropdown -->
      <DesktopDropdown />
    </div>
  </div>
</template>

