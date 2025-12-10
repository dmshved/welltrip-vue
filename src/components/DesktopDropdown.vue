<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { inject } from 'vue'

const logout = inject('logout')
</script>

<template>
  <Menu as="div" class="relative ml-3">
    <MenuButton
      class="relative flex max-w-xs items-center rounded-sm p-2 bg-white/25 hover:bg-white/20 text-white"
    >
      <div class="block h-6 w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100"
      enter-from-class="transform opacity-0"
      enter-to-class="transform scale-100"
      leave-active-class="transition duration-75"
      leave-from-class="transform scale-100"
      leave-to-class="transform opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5"
      >
        <MenuItem>
          <button @click="logout" class="flex items-center px-4 py-2 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

