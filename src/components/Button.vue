<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
    <a
    class="p-3 px-20 text-base font-medium text-center justify-center text-white border border-transparent rounded-md bg-primary hover:bg-opacity-90"
    >
      {{label}}
    </a>
</template>