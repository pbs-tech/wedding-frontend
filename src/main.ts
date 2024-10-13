import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import AppView from './App.vue'

const routes = [
    { path: '/', component: AppView },
  ]

const router = createRouter({
history: createMemoryHistory(),
routes,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
