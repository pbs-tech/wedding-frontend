<script setup lang="ts">
    import Button from "../components/Button.vue"; 
    import { useAuthStore } from '../stores';
    import { router } from '../helpers';
    import { ref } from 'vue';

    // Store
    const authStore = useAuthStore();

    // Reactive password input
    const password = ref('');
    // Login method
    const login = async () => {
    try {
        await authStore.login(password.value);        
        router.push('/');
    } catch (error) {
        console.error(error);
        alert('Incorrect password, please check the invite');
    }
    };
</script>


<template>
    <div class="min-h-screen flex items-center justify-center">
      <section class="mx-auto p-6 bg-inherit w-full max-w-md">
        <div class="container">
          <h1 class="text-5xl text-center mb-6">Login</h1>
          <div class="content mb-4">
            <label for="password" class="form-label">Password</label>
            <input 
              name="password" 
              id="password" 
              v-model="password" 
              class="form-input-text" 
              type="text" 
              placeholder="Enter your password" 
            />
          </div>
          <div class="flex justify-center">
            <Button id="login-button" v-on:click.prevent="login()" v-on:keyup.enter="login()" label="Login" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
