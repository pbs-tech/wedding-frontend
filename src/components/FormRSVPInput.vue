<script setup lang="ts">
    const rsvp = defineModel('rsvp')
</script>

<template>
    <div class="form-item-div">
        <label class="form-label">
            Can you please confirm if you can make it?
        </label>
        <div class="relative z-20">
          <select
            v-model="rsvp"
            class="form-input-text relative appearance-none"
          >
            <option value="yes">Yes</option>
            <option value="no">Apologies</option>
          </select>
          <span
            class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-primary"
          ></span>
        </div>
    </div>
</template>

<script