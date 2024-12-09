<script setup lang="ts">
    import TextBlock from "../components/TextBlock.vue";
    import MapBlock from "../components/MapBlock.vue"; 

</script>

<template>
    <section>
      <div class="container" id="venue">
        <h2> Venue </h2>
        <div class="flex flex-wrap items-center justify-between -mx-4">
            <TextBlock/>
            <MapBlock/>
        </div>
      </div>
    </section>
</template>