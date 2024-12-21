<script setup lang="ts">
  import Button from "../components/Button.vue";
  import { useAuthStore } from '../stores';
  import { router } from '../helpers';
  import { onBeforeUnmount, ref } from 'vue';
  import ScrapImg from '../assets/bird.svg'


  // Store
  const authStore = useAuthStore();

  // Reactive password input
  const password = ref('');
  const loading = ref(false);
  const loadingDots = ref('');
  let loadingInterval: NodeJS.Timeout | null = null;

  const startLoading = () => {
    let dotCount = 0;
    loadingInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4; // Cycle through 0, 1, 2, 3 dots
      loadingDots.value = '.'.repeat(dotCount); // Add dots dynamically
    }, 500); // Update every 500ms
  };

  const stopLoading = () => {
    if (loadingInterval) {
      clearInterval(loadingInterval); // Clear the interval when loading is complete
    }
    loadingDots.value = ''; // Reset dots
  };

  // Login method
  const login = async () => {
    loading.value = true;
    startLoading(); // Start loading animation
    try {
      await authStore.login(password.value);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Incorrect password, please check the invite');
    } finally {
      loading.value = false;
      stopLoading(); // Stop loading animation
    }
  };

  // Cleanup interval on component unmount
  onBeforeUnmount(() => {
    if (loadingInterval) {
      clearInterval(loadingInterval);
    }
  });
</script>


<template>
  <div class="login-view">
    <section>
      <div class="container">
        <h1 id="login-title">Login</h1>
        <div clas="login-content">
          <ScrapImg/>
        </div>
        <div class="login-content">
          <label for="password" class="form-label text-center block mb-2">Password</label> <!-- Added text-center and block -->
          <input
            name="password"
            id="password"
            v-model="password"
            class="form-input-text"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="login-content">
          <h3 class="loading-text" v-show="loading">
            <span>Loading</span><span class="dots">{{ loadingDots }}</span>
          </h3>
        </div>

        <div class="login-content">
          <Button
            v-show="!loading"
            id="login-button"
            v-on:click.prevent="login()"
            v-on:keyup.enter="login()"
            label="Login"
          />
        </div>
      </div>
    </section>
  </div>
</template>
