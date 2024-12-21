<script setup lang="ts">
    import { ref } from 'vue'
    import CakeImg from '../assets/cake.svg'
    import HamburgerMenuImg from '../assets/hamburger.svg'


    const links = ref([
        { name: 'About', href: '#about' },
        { name: 'Venue', href: '#venue' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Transport', href: '#transport' },
    ])
    const isMenuOpen = ref(false);

    function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="nav-button">
                <!-- Mobile toggle button (hamburger icon) -->
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
                <h4 id="header-text">We'd love to invite you to the wedding of: </h4>
                <CakeImg class="svg-img"/>
                <h1 >Alex Peebles & Hana McRae</h1>
                <p class="subheading">
                    <span class="flair"> on </span>
                    <br/>
                    <span id="header-date"> 6th August 2025 </span>
                    <br/>
                    <span class="flair"> at </span>
                    <br/>
                    <span id="header-location">Healey Barn, Riding Mill <br/> NE44 6BN </span>
                </p>
            </div>

        </div>
    </section>
</template>
