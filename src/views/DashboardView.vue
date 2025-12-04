<script setup>
import { useUserStore } from '@/store/user.js'
import { storeToRefs } from 'pinia'

const { user, isAuthorized } = storeToRefs(useUserStore())
</script>

<template>
  <h1>Dashboard</h1>

  <div v-if="isAuthorized">
    <p>
      Hello my dear {{ user.name }}
    </p>
  </div>
</template>
