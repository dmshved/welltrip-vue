<script setup>
import UserGreeting from '@/components/UserGreeting.vue'
import AppTravelCard from '@/components/AppTravelCard.vue'
import AppCardContainer from '@/components/AppCardContainer.vue'
</script>

<template>
  <div class="bg-white py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- User greetings -->
      <UserGreeting />

      <!-- Cards -->
      <AppCardContainer>
        <AppTravelCard
          createdAt="11.12.2025"
          numberOfDays="12"
          numberOfNights="11"
          title="Welcome to the club buddy :D"
          description="Well, ther is no actual description but I can tell you that I like to program everything I see on my way. Actually this desc goes really wide"
        />
        <AppTravelCard
          createdAt="10.08.2025"
          numberOfDays="5"
          numberOfNights="4"
          title="Really goof to have a dog"
          description="bark bark bark bark bark bark"
        />
        <AppTravelCard
          createdAt="01.12.2026"
          numberOfDays="365"
          numberOfNights="364"
          title="Road to 2026"
          description="There is a new year here!"
        />
      </AppCardContainer>
    </div>
  </div>
</template>
