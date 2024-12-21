<script setup lang="ts">
    import TextBlock from "../components/TextBlock.vue";
    import ImageBlock from "../components/ImageBlock.vue";
    import Image from "../types/Image.ts";

    const venueImages: Image[] = [
    {
            src: new URL('@/assets/venue/a.jpg', import.meta.url).href,
            alt: "Ceremony at Healey Barn"
        },
        {
            src: new URL('@/assets/venue/b.jpg', import.meta.url).href,
            alt: "Healey Barn exterior from above"
        },
        {
            src: new URL('@/assets/venue/c.jpg', import.meta.url).href,
            alt: "Dining room"
        },
        {
            src: new URL('@/assets/venue/d.jpg', import.meta.url).href,
            alt: "Healey Barn courtyard trees"
        },
        {
            src: new URL('@/assets/venue/e.jpg', import.meta.url).href,
            alt: "Healey Barn courtyard from dining room"
        },
    ];
</script>

<template>
    <section>
      <div class="container" id="venue">
        <h2> Venue </h2>
        <div class="content">
          <TextBlock>
            <template v-slot:title>
              <h3>Healey Barn</h3>
            </template>
            <template v-slot:content>
              <p>
              <a href="https://crippsandco.com/healey-barn/">Healey Barn</a> is an 18th century stone barn set around a private sunny courtyard. 
              Just outside Riding Mill, on the border of Northumberland and Durham, 
              it's a 30 minutes away from the centre of Newcastle for those who are local.  
              </p>
              <p>
              Should you need accommodation, there are plenty of options in the surrounding area.
              Please visit <a href="https://crippsandco.com/healey-barn/accommodation"> here</a> for more information.
              </p>
            </template>
          </TextBlock>
          <ImageBlock :images="venueImages"/>

        </div>
      </div>
    </section>
</template>