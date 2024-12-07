import { defineStore } from "pinia";
import axios from "axios";

// Define the structure of the user object
interface User {
  jwtToken: string;
}

interface AuthState {
  user: User | null;
  refreshTokenTimeout: NodeJS.Timeout | null;
  isRefreshing: boolean;
  initialized: boolean;
}

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
  id: "auth",
  state: (): AuthState => ({
    user: localStorage.getItem("jwtToken")
      ? { jwtToken: localStorage.getItem("jwtToken")! }
      : null,
    refreshTokenTimeout: null,
    isRefreshing: false,
    initialized: false,
  }),
  persist: true,
  actions: {
    // Login action
    async login(password: string): Promise<void> {
      try {
        const response = await axios.post<{ jwtToken: string }>(`${baseUrl}/auth`, 
          { "UserPassword": password },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log('Received token:', response.data.jwtToken);
        console.log('Stored token in localStorage:', localStorage.getItem('jwtToken'));
        
        // Check if a token is returned and set it in user state
        const newToken = response.data.jwtToken;
        if (newToken) {
          // Only update if token is different or the user is not logged in
          if (this.user?.jwtToken !== newToken) {
            this.user = { jwtToken: newToken };
            localStorage.setItem("jwtToken", newToken); // Persist token in localStorage
          }

          // Start the token refresh timer after successful login
          this.startRefreshTokenTimer();
          console.log("Logged in successfully:", this.user.jwtToken);
        } else {
          throw new Error('No JWT token received after login');
        }

      } catch (error) {
        console.error("Login failed:", error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          alert("Incorrect password, please check the invite");
        } else {
          alert("Login failed due to an unexpected error");
        }
      }
    },

    // Refresh token action
    async refreshToken(): Promise<void> {
      if (this.isRefreshing || !this.user?.jwtToken) return;  // Prevent redundant refresh

      try {
        this.isRefreshing = true;
        const response = await axios.post<{ jwtToken: string }>(`${baseUrl}/refresh`, 
          {},
          { headers: { "Content-Type": "application/json" } }
        );
        
        const newToken = response.data.jwtToken;
        if (newToken && this.user?.jwtToken !== newToken) {
          this.user = { jwtToken: newToken };
          localStorage.setItem("jwtToken", newToken); // Persist token
        }

        this.startRefreshTokenTimer();
      } catch (error) {
        console.error("Token refresh failed:", error);
        alert("Session expired, please log in again.");
        this.logout();  // Logout on refresh failure
      } finally {
        this.isRefreshing = false;
      }
    },

    // Start the refresh token timer based on JWT expiration
    startRefreshTokenTimer(): void {
      if (!this.user?.jwtToken || this.initialized) return;

      this.stopRefreshTokenTimer();

      const [header, payload] = this.user.jwtToken.split('.');
      if (!payload || !header) return;

      try {
        const jwtPayload = JSON.parse(atob(payload));
        const expiresAt = jwtPayload?.exp * 1000; // Convert to milliseconds
        if (!expiresAt) return;

        const timeout = expiresAt - Date.now() - 60 * 1000;  // Refresh 1 minute before expiration
        if (timeout > 0) {
          this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
          this.initialized = true;
        } else {
          console.warn("JWT token already expired or invalid");
          this.initialized = true;
        }
      } catch (error) {
        console.error("Failed to parse JWT token:", error);
      }
    },

    // Stop the refresh token timer
    stopRefreshTokenTimer(): void {
      if (this.refreshTokenTimeout) {
        clearTimeout(this.refreshTokenTimeout);
        this.refreshTokenTimeout = null;
      }
    },

    // Check if the user is authenticated
    isAuthenticated(): boolean {
      return !!this.user?.jwtToken;
    },

    // Logout action: clear user data and token
    logout(): void {
      this.user = null;
      localStorage.removeItem("jwtToken");
      this.stopRefreshTokenTimer();
      this.initialized = false;
      console.log("Logged out successfully");
    },
  }
});
