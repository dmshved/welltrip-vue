<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline/index.js'
import { useDateTime} from '@/composables/useDateTime.js'
import { computed } from 'vue'
import AppUpdateButton from '@/components/AppUpdateButton.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user.js'

const { isEditor } = storeToRefs(useUserStore())

const { formatDate } = useDateTime()

const props = defineProps({
  travelId: String,
  createdAt: String,
  numberOfDays: Number,
  numberOfNights: Number,
  title: String,
  description: String,
})

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

      <!-- numberOfDays -->
      <div title="Number Of Days" class="flex items-center gap-1 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-yellow-100 hover:text-gray-500 transition-colors duration-300">
        <SunIcon class="size-5"/>
        <p class="font-bold">{{ numberOfDays }} d</p>
      </div>

      <!-- numberOfNights -->
      <div title="Number Of Nights" class="flex items-center gap-1 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-700  hover:text-gray-300 transition-colors duration-300">
        <MoonIcon class="size-4"/>
        <p class="font-bold">{{ numberOfNights }} n</p>
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

      <!-- description -->
      <p class="mt-5 line-clamp-2 text-sm/6 text-gray-600">
        {{ description}}
      </p>
    </div>

    <!-- Update Button-->
    <div v-if="isEditor" class="self-end mt-3">
      <AppUpdateButton :travel-id="travelId"/>
    </div>
  </article>
</template>
