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
                <ol class="schedule-list">
                    <li
                    v-for="(item) in scheduleItems"
                    :key="item.time"
                    class="list-item"
                    >
                        <span class="schedule-time" id="time">
                        {{ item.time }}
                        </span>
                        <span class="schedule-event" id="event">
                            {{ item.event }}
                        </span>                    
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>
