<template>
    <header class="bg-background text-center">
      <nav class="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-pink">About</a>
          <a href="#" class="text-sm font-semibold leading-6 text-pink">Venue</a>
          <a href="#" class="text-sm font-semibold leading-6 text-pink">RSVP</a>
        </PopoverGroup>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    PopoverGroup,
  } from '@headlessui/vue'
  
  
  const mobileMenuOpen = ref(false)
  </script>