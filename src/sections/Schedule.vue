<script setup lang="ts">
import { ref } from 'vue'

const scheduleItems = ref([{
    time: '13:00',
    event: 'Arrival',
},
{
    time: '14:00',
    event: 'Ceremony',
},
{
    time: '15:00',
    event: 'Wedding Breakfast',
},
{
    time: '17:00',
    event: 'Reception',
},
{
    time: '19:00',
    event: 'Pizz',
},
{
    time: '00:00',
    event: 'Farewell',
},
])
</script>

<template>
    <section>
        <div class="container" id="schedule">
            <h2> Schedule </h2>
            <div>
                <ol class="schedule-list space-y-3">
                    <li
                    v-for="(item) in scheduleItems"
                    :key="item.time"
                    class="text-primary text-center text-2xl"
                    >
                        <span id="time"
                            class="bg-background font-bold p-5 flex h-[30px] w-full items-center justify-center text-center rounded text-primary"
                        >
                        {{ item.time }}
                        </span>
                        <span id="event" class="items-center justify-center text-center">
                            {{ item.event }}
                        </span>                    
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>
