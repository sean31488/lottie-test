import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'

import '@/assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie)

app.mount('#app')
