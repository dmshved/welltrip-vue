<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { usePagination } from '@/composables/usePagination'
import { getToursFromApi } from '@/api/tour.js'

import AppTourCard from '@/components/AppTourCard.vue'
import AppCardContainer from '@/components/AppCardContainer.vue'
import AppPagination from '@/components/AppPagination.vue'

const route = useRoute()
const travelSlug = route.params.slug

const filters = reactive({
  priceFrom: null,
  priceTo: null,
  dateFrom: null,
  dateTo: null,
  sortBy: null,
  sortOrder: null,
})

const fetchTours = (page) => {
  return getToursFromApi(travelSlug, {
    page,
    ...filters
  })
}

const {
  data: tours,
  meta = {},
  links = {},
  next,
  prev,
  loading,
  reload,
  page
} = usePagination(fetchTours)

const applyFilters = () => {
  page.value = 1
  reload()
}
</script>

<template>
  <div class="bg-white py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Filters -->
      <div class="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 class="mb-4 text-sm font-semibold text-gray-900">
          Filters
        </h3>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Price from -->
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">
              Price from
            </label>
            <input
              type="number"
              v-model.number="filters.priceFrom"
              placeholder="Min"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
               focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <!-- Price to -->
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">
              Price to
            </label>
            <input
              type="number"
              v-model.number="filters.priceTo"
              placeholder="Max"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
               focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <!-- Date from -->
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">
              Date from
            </label>
            <input
              type="date"
              v-model="filters.dateFrom"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
               focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <!-- Date to -->
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">
              Date to
            </label>
            <input
              type="date"
              v-model="filters.dateTo"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
               focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="mt-6 flex justify-end gap-3">
          <button
            @click="applyFilters"
            :disabled="loading"
            class="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white
             hover:bg-gray-800 disabled:opacity-50"
          >
            Apply filters
          </button>
        </div>
      </div>

      <!-- Pagination -->
      <AppPagination
        v-if="meta && links"
        :meta="meta"
        :links="links"
        :loading="loading"
        @next="next"
        @prev="prev"
      />

      <!-- No data -->
      <div v-if="!loading && tours && tours.length === 0" class="text-center text-gray-500 py-10">
        No tours found
      </div>

      <!-- Cards Container -->
      <AppCardContainer>
        <!-- Cards -->
        <AppTourCard
          v-for="tour in tours"
          :key="tour.id"
          :travel-slug="travelSlug"
          :title="tour.name"
          :starting-date="tour.starting_date"
          :ending-date="tour.ending_date"
          :price="tour.price"
          :created-at="tour.created_at"
        >
        </AppTourCard>
      </AppCardContainer>
    </div>
  </div>
</template>
