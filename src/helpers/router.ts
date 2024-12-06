import MainView from '../views/Main.vue'
import LoginView from '../views/Login.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { useAuthStore } from '../stores';


const routes = [
    { 
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        requiresAuth: true
      }
    },
     { 
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
  ]

export const router = createRouter({
history: createMemoryHistory(),
routes,
})

router.beforeEach((to) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();
    if (authRequired && !authStore.user) {
        return {
            path: '/login',
            query: { returnUrl: to.path }
        };
    }
});