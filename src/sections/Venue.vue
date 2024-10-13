<script setup lang="ts">
    import TextBlock from "../components/TextBlock.vue"; 
    import ImageBlock from "../components/ImageBlock.vue"; 
</script>

<template>
    <section>
      <div class="container">
        <h2> Venue </h2>
        <div class="flex flex-wrap items-center justify-between">
            <TextBlock/>
            <ImageBlock/>
        </div>
      </div>
    </section>
</template>