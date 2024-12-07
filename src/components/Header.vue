<script setup lang="ts">
    import { ref } from 'vue'

    const links = ref([
        { name: 'About', href: '#' },
        { name: 'Venue', href: '#' },
        { name: 'Schedule', href: '#' },
    ])
</script>

<template>
    <section>
        <div class="container">
            <div class="relative isolate overflow-hidden py-5">
                <div class="mx-auto">
                    <div class="mx-auto max-w-4xl lg:mx-0">
                        <h4 class="font-bold text-primary">We'd love to invite you to the wedding of </h4>
                        <h1> Alex Peebles & Hana McRae</h1>
                        <p class="mt-6 text-lg leading-8 text-primary">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    </div>
                    <div class="mx-auto mt-10 max-w-2xl lg:max-w-none">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-primary sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>