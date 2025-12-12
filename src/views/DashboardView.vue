<script setup>
import UserGreeting from '@/components/UserGreeting.vue'
import AppTravelCard from '@/components/AppTravelCard.vue'
import AppCardContainer from '@/components/AppCardContainer.vue'
import { getTravelsFromApi } from '@/api/travel.js'
import { onMounted, ref } from 'vue'

const travels = ref([])
const error = ref([])

const loadTravels = async () => {
  error.value = null

  try {
    travels.value = await getTravelsFromApi()
  } catch (err) {
    error.value = err.message || "Travels data does't exist"
  }
}
onMounted(loadTravels)
</script>

<template>
  <div class="bg-white py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- User greetings -->
      <UserGreeting />

      <!-- Cards -->
      <AppCardContainer>
        <AppTravelCard
          v-for="travel in travels"
            :createdAt="travel.created_at"
            :numberOfDays="travel.number_of_days"
            :numberOfNights="travel.number_of_nights"
            :title="travel.name"
            :description="travel.description"
        />
      </AppCardContainer>
    </div>
  </div>
</template>
