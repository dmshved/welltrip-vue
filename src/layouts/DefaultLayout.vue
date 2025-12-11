<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavigation />
    <div class="flex-grow">
      <RouterView />
    </div>
    <AppFooter/>
  </div>
</template>
