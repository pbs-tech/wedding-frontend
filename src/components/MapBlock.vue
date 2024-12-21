<template>
    <div class="w-full lg:w-6/12 px-4 mt-8">
      <div class="relative w-full">
        <slot name="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d293300.5732313934!2d-2.1239536827353516!3d54.94835590010481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x487d857e0c6f64cd%3A0xbe252b072a76191!2sNewcastle%20upon%20Tyne!3m2!1d54.978252!2d-1.61778!4m5!1s0x487dc558a1b5b2e5%3A0x5650f8b88478b02f!2sRiding%20Mill%20NE44%206BF!3m2!1d54.94938!2d-1.9724949999999999!5e0!3m2!1sen!2suk!4v1734805684922!5m2!1sen!2suk" height="300" width="300" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </slot>
      </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapBlock'
});
</script>
