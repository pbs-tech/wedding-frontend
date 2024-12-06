import { createApp } from 'vue'
import './index.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useAuthStore } from './stores'
import { router }  from './helpers'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
    // attempt to auto refresh token before startup
    try {
      const authStore = useAuthStore();
      await authStore.refreshToken();
  } catch {
      // catch error to start app on success or failure
  }
app.use(router);
app.mount('#app');
