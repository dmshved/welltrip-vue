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

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>

  <br>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium animi cum dolorem minima nisi odio recusandae rem repellat, repudiandae, similique temporibus, vel. Expedita nam non quam ut voluptatibus!
  </div>
</template>
