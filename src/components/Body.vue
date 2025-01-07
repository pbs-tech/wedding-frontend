<script setup lang="ts">
    import About from "../sections/About.vue";
    import Venue from "../sections/Venue.vue";
    import Schedule from "../sections/Schedule.vue";
    import Food from "../sections/Food.vue";
    import Transport from "../sections/Transport.vue";
    import RSVP from "../sections/RSVP.vue";
    import FAQs from "../sections/FAQs.vue";
    import { useAuthStore } from "../stores";
    const authStore = useAuthStore();
    const isDayGuest = authStore.isDayGuest();
</script>

<template>
    <About/>
    <Venue/>
    <Schedule/>
    <Food v-if="isDayGuest"/>
    <Transport/>
    <FAQs/>
    <RSVP/>
</template>
