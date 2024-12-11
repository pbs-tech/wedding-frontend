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
            <div class="relative isolate overflow-hidden py-5">
                <div class="mx-auto">
                    <div class="max-w-4xl">
                        <h4 class="text-primary font-averia">We'd love to invite you to the wedding of: </h4>
                        <CakeImg/>
                        <h1 class="text-4xl lg:text-5xl">Alex Peebles & Hana McRae</h1>
                        <p class="mt-6 text-lg leading-8 text-primary">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    </div>
                    <div class="container px-4">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-primary md:flex lg:gap-x-10 justify-center items-center text-center">
                            <a v-for="link in links" :key="link.name" :href="link.href" class="block">
                                {{ link.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
