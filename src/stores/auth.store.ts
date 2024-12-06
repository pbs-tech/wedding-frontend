import { defineStore } from "pinia";
import axios from "axios";
import bcrypt from "bcryptjs"; 
// Define the structure of the user object
interface User {
  jwtToken: string;
  // Add other properties of the user if needed
}

interface AuthState {
  user: User | null;
  refreshTokenTimeout: NodeJS.Timeout | null;
}

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    user: null,
    refreshTokenTimeout: null,
  }),
  actions: {
    // Login action, accepts password as a string
    async login(password: string): Promise<void> {
      const hashedPassword = await this.hashPassword(password);

      const response = await axios.post<{ jwtToken: string }>(`${baseUrl}/auth`, 
        { "UserPassword": hashedPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      this.user = response.data; // Assuming the response contains the user object
      this.startRefreshTokenTimer();
    },

    // Refresh token action
    async refreshToken(): Promise<void> {
      const response = await axios.post<{ jwtToken: string }>(`${baseUrl}/refresh`, 
        {},
        { headers: { "Content-Type": "application/json" } }
      );
      this.user = response.data; // Assuming the response contains the user object
      this.startRefreshTokenTimer();
    },

    // Start the refresh token timer based on JWT expiration
    startRefreshTokenTimer(): void {
      if (!this.user?.jwtToken) {
        return; // Return if there's no JWT token in the user object
      }
      
      // Parse JSON object from base64-encoded JWT token
      const jwtBase64 = this.user.jwtToken.split('.')[1];
      const jwtToken = JSON.parse(atob(jwtBase64));

      // Set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
    },

    // Stop the refresh token timer
    stopRefreshTokenTimer(): void {
      if (this.refreshTokenTimeout) {
        clearTimeout(this.refreshTokenTimeout);
      }
    },

    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

  }
});
