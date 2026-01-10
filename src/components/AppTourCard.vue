<script setup>
import { useDateTime } from '@/composables/useDateTime.js'
import { computed } from 'vue'

const props = defineProps({
  travelSlug: String,
  startingDate: String,
  endingDate: String,
  title: String,
  price: String,
  createdAt: String
})

const { formatDate } = useDateTime()

const formattedDate = computed(() => {
  if (!props.createdAt) return ''
  return formatDate(props.createdAt, 'DD MMMM YYYY')
})
</script>

<template>
  <article class="flex max-w-xl flex-col items-start justify-between bg-gray-50 bg-opacity-90 p-5 rounded-lg">
    <div class="flex items-center gap-x-4 text-xs">
      <!-- createdAt -->
      <time datetime="2020-03-16" class="text-gray-500">
        Added {{ formattedDate }}
      </time>
    </div>

    <div class="flex gap-2 mt-5">
      <div title="Starting Date" class="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium text-sm">
        <!--<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
        <!--  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />-->
        <!--</svg>-->

        <span>starts:</span>
        <span>{{ startingDate }}</span>
      </div>

      <div title="Ending Date" class="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-sm">
        <!--<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
        <!--  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />-->
        <!--</svg>-->

        <span>ends:</span>
        <span>{{ endingDate }}</span>
      </div>
    </div>

    <div class="group relative grow">
      <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
        <!-- title -->
        <a href="#">
          <span class="absolute inset-0"></span>
          {{ title }}
        </a>
      </h3>
    </div>

    <div class="self-end">
      <!-- price -->
      <p class="mt-5 line-clamp-2 text-base text-gray-600">
        <span class="font-bold">{{ price}} $</span>
      </p>
    </div>
  </article>
</template>

