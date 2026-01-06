<script setup>
import { ref, reactive, onMounted } from 'vue'
import { createTour } from '@/api/tour.js'
import { routerPush } from '@/router/index.js'
import { useRoute } from 'vue-router'
import { getTravel } from '@/api/travel.js'

const route = useRoute()
const travelId = route.params.id

const travel = ref(null)

onMounted(async () => {
  travel.value = await getTravel(travelId)
})

const form = reactive({
  name: '',
  starting_date: '',
  ending_date: 1,
  price: 0,
})

const errorMessage = ref('')
const isLoading = ref(false)

async function onSubmit() {
  errorMessage.value = ''
  isLoading.value = true
  try {
    await createTour(travelId, {
      name: form.name,
      starting_date: form.starting_date,
      ending_date: form.ending_date,
      price: form.price,
    })

    await routerPush('Dashboard')
  } catch (error) {
    errorMessage.value = error.response?.data?.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-10">
    <!-- Create Tour Form-->
    <form @submit.prevent="onSubmit">
      <div class="space-y-12">
        <div class="pb-5">
          <!-- Header -->
          <h2 class="text-base/7 font-semibold text-gray-900">Create New Tour</h2>
          <p class="mt-1 text-sm/6 text-gray-600 after:content-['*'] after:text-red-500">
            Required parameters are marked with
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <!-- Label Tour for Travel -->
            <div v-if="travel" class="sm:col-span-4 border p-2 border-red-400 rounded-lg">
              <label class="block text-sm/6 text-gray-900">The Tour for Travel</label>
              <div class="mt-2">
                <div class="flex items-center rounded-md">
                  <p class="block min-w-0 grow pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6">
                    Creating tour for: <span class="font-semibold">{{ travel.name }}</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Name -->
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm/6 font-medium text-gray-900 after:content-['*'] after:text-red-500"
                >Name</label
              >
              <div class="mt-2">
                <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="My Tour"
                    class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <!-- Starting Date  -->
            <div class="sm:col-span-4">
              <label
                for="starting_date"
                class="block text-sm/6 font-medium text-gray-900 after:content-['*'] after:text-red-500"
                >Starting Date</label
              >
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                >
                  <input
                    id="starting_date"
                    v-model="form.starting_date"
                    type="date"
                    name="starting_date"
                    class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <!-- Ending Date  -->
            <div class="sm:col-span-4">
              <label
                for="ending_date"
                class="block text-sm/6 font-medium text-gray-900 after:content-['*'] after:text-red-500"
                >Starting Date</label
              >
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                >
                  <input
                    id="ending_date"
                    v-model="form.ending_date"
                    type="date"
                    name="ending_date"
                    class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Price -->
        <div class="pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
              <div class="mt-2">
                <input
                  id="price"
                  v-model="form.price"
                  type="number"
                  min="1"
                  name="price"
                  autocomplete="off"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mt-4 py-2 px-3 rounded text-white bg-red-400">
        {{ errorMessage }}
      </div>

      <!-- Submit -->
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-200 hover:text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="flex justify-center items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="size-5 fill-info motion-safe:animate-spin dark:fill-info"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          />
        </svg>
      </div>
    </form>
  </div>
</template>
