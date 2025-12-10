<script setup>
const appName = import.meta.env.VITE_APP_NAME
const appSlogan = import.meta.env.VITE_APP_SLOGAN
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="shrink-0">
      <img
        class="size-10"
        src="https://thumbs2.imgbox.com/85/67/o2tm4B7X_t.png"
        :alt="appName"
      />
    </div>
    <div>
      <p class="text-sm text-white font-bold">{{ appSlogan }}</p>
    </div>
  </div>
</template>

