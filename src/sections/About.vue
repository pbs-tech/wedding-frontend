<script setup lang="ts">
    import ImageBlock from "../components/ImageBlock.vue";
    import TextBlock from "../components/TextBlock.vue"; 
</script>

<template>
    <section>
        <div class="container" id="about">
            <h2> About </h2>
            <div class="flex flex-wrap items-center justify-between -mx-4">
                <TextBlock/>
                <ImageBlock/>

            </div>
        </div>
    </section>
</template>