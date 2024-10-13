<script setup lang="ts">
    import TextBlock from "../components/TextBlock.vue"; 
    import ImageBlock from "../components/ImageBlock.vue"; 
</script>

<template>
    <section>
        <div class="container">
            <h2> About </h2>
            <div class="flex flex-wrap items-center justify-between">
                <ImageBlock/>
                <TextBlock/>
            </div>
        </div>
    </section>
</template>