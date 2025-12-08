import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';
import setUser from '@/plugins/set-user.js'

async function bootstrap() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)

  try{
    //  Wait until user is loaded BEFORE router runs guards
    await setUser(pinia)
  } catch (error){
    console.log('Unauthorized')
  }

  app.use(router)
  app.mount('#app')
}

bootstrap()
