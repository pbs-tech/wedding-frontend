<script setup lang="ts">
    import { ref } from 'vue'
    import CakeImg from '../assets/cake.svg'

    const links = ref([
        { name: 'About', href: '#about' },
        { name: 'Venue', href: '#venue' },
        { name: 'Schedule', href: '#schedule' },
    ])
</script>

<template>
    <section>
        <div class="container">
            <div class="header">
                <h4 id="header-text">We'd love to invite you to the wedding of: </h4>
                <CakeImg class="svg-img"/>
                <h1 >Alex Peebles & Hana McRae</h1>
                <p class="subheading">
                    <span class="subheading-flair"> on </span>
                    <br/>
                    <span id="header-date"> 06.08.2025 </span>
                    <br/>
                    <span class="subheading-flair"> at </span>
                    <br/>
                    <span id="header-location">Healey Barn, Riding Mill</span>
                    <br/>
                    <br/>
                    <span id="header-print">
                        please check your invite for arrival times.
                    </span>
                </p>
            </div>
            <div class="header-link">
                <a v-for="link in links" :key="link.name" :href="link.href" class="block ">
                    {{ link.name }}
                </a>
            </div>
        </div>
    </section>
</template>
