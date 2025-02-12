<script setup lang="ts">
    import { ref } from 'vue'
    import CakeImg from '../assets/cake.svg'
    import HamburgerMenuImg from '../assets/hamburger.svg'
    import { useAuthStore } from "../stores";

    let startTime = ref<string>();
    let inviteHeading = ref<string>();
    const links = ref([
        { name: 'About', href: '#about' },
        { name: 'Venue', href: '#venue' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Food', href: '#food' },
        { name: 'Transport', href: '#transport' },
        { name: 'FAQs', href: '#faqs'},
        { name: 'RSVP', href: '#rsvp' },
    ])
    const isMenuOpen = ref(false);

    function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
    }
    const authStore = useAuthStore();
    const isDayGuest = authStore.isDayGuest();

    if (isDayGuest) {
        startTime = ref('13:30');
        inviteHeading = ref('wedding')
    } else {
        startTime = ref('19:00');
        inviteHeading = ref('evening reception')

    }
</script>

<template>
    <section>
        <div class="container">
            <div class="nav-button">
                <button
                @click="toggleMenu"
                aria-label="Toggle menu"
                >
                <HamburgerMenuImg/> Menu
                </button>
            <div class="header-link" v-if="isMenuOpen">
                <a @click="toggleMenu" v-for="link in links" :key="link.name" :href="link.href" class="block">
                    {{ link.name }}
                </a>
            </div>
            </div>
            <div class="header">
                <h4 id="header-text">We'd love to invite you to the {{inviteHeading}} of: </h4>
                <CakeImg class="svg-img"/>
                <h1 >Alex Peebles & Hana McRae</h1>
                <p class="subheading">
                    <span class="flair"> on </span>
                    <br/>
                    <span id="header-date"> 6th August 2025 </span>
                    <br/>
                    <span id="header-time">{{  startTime }} </span>
                    <br/>
                    <span class="flair"> at </span>
                    <br/>
                    <span id="header-location">Healey Barn, Riding Mill <br/> NE44 6BN </span>
                    <br/>
                    <br/>
                    <span id="header-dress-code">Dress code: <br/> Black Tie Formal</span>
                </p>
            </div>

        </div>
    </section>
</template>
