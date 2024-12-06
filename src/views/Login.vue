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
    }
    };
</script>


<template>
  <body class="m-10 justify-center">
    <section class="mx-auto p-6 bg-inherit">
        <div class="container">
            <h2 class="text-center"> Login </h2>
            <div class="content">
                <label for="password" class="form-label">Password </label>
                <input v-model="password" class="form-input-text" type="text"  label="Password"/>
            </div>    
            <div class="flex px-12 justify-center">
                <Button v-on:click.prevent()="login()" label="Login"/>
            </div>
        </div>
    </section>
  </body>
</template>
