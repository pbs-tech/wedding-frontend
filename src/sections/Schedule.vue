<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from "../stores";
let scheduleItems = ref<{ time: string; event: string; }[]>([]);
const dayScheduleItems = [
    {
        event: 'Arrival',
        time: '14:00',
    },
    {
        time: '14:30',
        event: 'Ceremony',
    },
    {
        time: '15:00',
        event: 'Wedding Breakfast',
    },
];

const eveningScheduleItems = [
    {
        time: '17:00',
        event: 'Reception',
    },
    {
        time: '19:30',
        event: 'Pizza',
    },
    {
        time: '00:00',
        event: 'Farewell',
    },
];

const authStore = useAuthStore();
const isDayGuest = authStore.isDayGuest();

if (isDayGuest) {
    scheduleItems = ref(dayScheduleItems.concat(eveningScheduleItems));
} else {
    scheduleItems = ref(eveningScheduleItems);
}

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
