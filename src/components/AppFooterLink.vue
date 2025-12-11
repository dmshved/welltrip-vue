<script setup>
defineProps({
  text: String,
  href: String,
})
</script>

<template>
  <div class="px-5 py-2">
    <a :href="href" class="text-base leading-6 text-white hover:text-gray-400">
      {{ text }}
    </a>
  </div>
</template>
