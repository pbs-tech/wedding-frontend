import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import MainView from './views/Main.vue'
import App from './App.vue'
import LoginView from './views/Login.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/',
      name: 'main',
      component: MainView,
      meta: {
        requiresAuth: true
     }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]

const router = createRouter({
history: createMemoryHistory(),
routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
