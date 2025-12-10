<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-full">
    <AppNavigation />
    <RouterView />
    <AppFooter/>
  </div>
</template>
