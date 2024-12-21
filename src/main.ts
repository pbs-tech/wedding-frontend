import { createApp } from "vue";
import "./index.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useAuthStore } from "./stores";
import { router } from "./helpers";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia)

// Initialize the app asynchronously to handle token refresh
async function initializeApp() {
  const authStore = useAuthStore();

  // Check if the user is authenticated
  const isAuthenticated = authStore.isAuthenticated();

  if (isAuthenticated) {
    // Check if the token exists and is valid
    const jwtToken = authStore.user?.jwtToken;
    const jwtParts = jwtToken?.split('.');

    if (jwtParts && jwtParts.length === 3) {
      // Only refresh the token if it's close to expiring (e.g., not too soon after login)
      const jwtBase64 = jwtParts[1];
      const jwtDecoded = JSON.parse(atob(jwtBase64));

      // Check if the token is nearing expiration
      const expires = new Date(jwtDecoded.exp * 1000);
      const expiresIn = expires.getTime() - Date.now();

      if (expiresIn > 0 && expiresIn < 60 * 60 * 1000) { // Refresh only if token expires within 1 hour
        try {
          await authStore.refreshToken();
        } catch (error) {
          console.error("Error while attempting to refresh token:", error);
        }
      } else {
        console.log("Token is still valid, no refresh needed.");
      }
    }
  }

  // Proceed with the app initialization
  app.use(router);
  app.mount("#app");
}

// Call the async function to initialize the app
initializeApp();
