<script setup lang="ts">
const { label } = defineProps({ label: String })
</script>

<template>
  <div class="login-content">
    <a
    class="login-button-text"
    >
      {{label}}
    </a>
  </div>
</template>
