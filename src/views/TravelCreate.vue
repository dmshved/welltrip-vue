<script setup>
import { ref, reactive } from 'vue'
import { createTravel } from '@/api/travel.js'
import { routerPush } from '@/router/index.js'

const form = reactive({
  name: '',
  description: '',
  number_of_days: 1,
  is_public: true,
})

const errorMessage = ref('')
const isLoading = ref(false)

async function onSubmit() {
  errorMessage.value = ''
  isLoading.value = true
  try {
    await createTravel({
      name: form.name,
      description: form.description,
      number_of_days: form.number_of_days,
      is_public: form.is_public,
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
    <div v-if="errorMessage" class="mt-4 py-2 px-3 rounded text-white bg-red-400">
      {{ errorMessage }}
    </div>

    <!-- Create Travel Form-->
    <form @submit.prevent="onSubmit">
      <div class="space-y-12">
        <div class="pb-5">
          <!-- Header -->
          <h2 class="text-base/7 font-semibold text-gray-900">Create New Travel</h2>
          <p class="mt-1 text-sm/6 text-gray-600 after:content-['*'] after:text-red-500">
            Required parameters are marked with
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <!-- Name -->
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm/6 font-medium text-gray-900 after:content-['*'] after:text-red-500"
                >Name</label
              >
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
                >
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="My Travel"
                    class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm/6 font-medium text-gray-900 after:content-['*'] after:text-red-500"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  id="description"
                  v-model="form.description"
                  name="description"
                  rows="3"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about Travel</p>
            </div>
          </div>
        </div>

        <!-- Number of Days-->
        <div class="pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="number_of_days" class="block text-sm/6 font-medium text-gray-900"
                >Number of days</label
              >
              <div class="mt-2">
                <input
                  id="number_of_days"
                  v-model="form.number_of_days"
                  type="number"
                  min="1"
                  max="999"
                  name="number_of_days"
                  autocomplete="off"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Is Public -->
        <div class="pb-12">
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm/6 font-semibold text-gray-900">Is Public</legend>
              <p class="mt-1 text-sm/6 text-gray-600">
                Should Travel be accessible for simple users?
              </p>
              <div class="mt-6 space-y-6">
                <!-- Yes, public Travel -->
                <div class="flex items-center gap-x-3">
                  <input
                    id="is_public_true"
                    v-model="form.is_public"
                    :value="true"
                    type="radio"
                    name="is_public"
                    class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label for="is_public" class="block text-sm/6 font-medium text-gray-900">
                    Yes, it should be public
                  </label>
                </div>
                <!-- No, private Travel-->
                <div class="flex items-center gap-x-3">
                  <input
                    id="is_public_false"
                    v-model="form.is_public"
                    :value="false"
                    type="radio"
                    name="is_public"
                    class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label for="is_public" class="block text-sm/6 font-medium text-gray-900">
                    No, its a private Travel
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-info motion-safe:animate-spin dark:fill-info">
          <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
          <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
        </svg>
      </div>
    </form>
  </div>
</template>
