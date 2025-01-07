<script setup lang="ts">
    import ImageBlock from "../components/ImageBlock.vue";
    import TextBlock from "../components/TextBlock.vue";
    import Image from "../types/Image.ts";

    const aboutImages: Image[] = [
        {
            src: new URL('@/assets/about/a.jpg', import.meta.url).href,
            alt: "Hana's Birthday"
        },
        {
            src: new URL('@/assets/about/b.jpg', import.meta.url).href,
            alt: "Our first night out together"
        },
        {
            src: new URL('@/assets/about/c.jpg', import.meta.url).href,
            alt: "At a friend's wedding"
        },
        {
            src: new URL('@/assets/about/d.jpg', import.meta.url).href,
            alt: "Our birds (smidge and scrap)"
        },
    ];

</script>

<template>
    <section>
        <div class="container" id="about">
            <h2> About </h2>
            <div class="content">
                <ImageBlock :images="aboutImages"/>
                <TextBlock>
                    <template v-slot:title>
                       <h3> Our Story </h3>
                    </template>
                    <template v-slot:content>
                        <p>
                            Although we'd known of each other for years by having mutual friends,
                            it wasn't until we both worked together at Accenture that we started talking.
                            Hana left for a new job, Alex came along to the leaving party and the rest is history.
                        </p>
                        <p>
                            We moved into Hana's flat together July 2023, got engaged in August 2024 before moving to our new home in Gateshead the week after.
                        </p>
                    </template>
                </TextBlock>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About'
});
</script>
